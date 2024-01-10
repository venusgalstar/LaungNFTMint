import { bundlrStorage, Metaplex, toMetaplexFileFromBrowser, walletAdapterIdentity } from "@metaplex-foundation/js";
import { CreatorsMustBeAtleastOneError } from "@metaplex-foundation/mpl-token-metadata";
import { WalletContextState } from "@solana/wallet-adapter-react";
import { Connection, PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL, Keypair } from "@solana/web3.js";
import { createApproveCheckedInstruction } from "@solana/spl-token";
import str from "./id.json";

export async function checkTokenBalance(connection:Connection, walletPublicKey: PublicKey, tokenMintPublicKey: PublicKey): Promise<any> {

    // Get token account info
    const tokenAccounts = await connection.getTokenAccountsByOwner(walletPublicKey, { mint: tokenMintPublicKey });

    console.log(`Token Balance: `,tokenAccounts);

    if (tokenAccounts.value.length === 0) {
        console.log('No token accounts found.');
        return 0;
    }

    // Assuming the wallet has one account of this token type
    const tokenAccountBalance = await connection.getTokenAccountBalance(tokenAccounts.value[0].pubkey);
    const tokenBalance1 = tokenAccountBalance.value.uiAmountString;

    console.log(`Token Balance: `,tokenBalance1);
    return tokenAccountBalance.value.uiAmount;
}

export async function checkTokenAccount(connection:Connection, walletPublicKey: PublicKey, tokenMintPublicKey: PublicKey): Promise<any> {

    // Get token account info
    const tokenAccounts = await connection.getTokenAccountsByOwner(walletPublicKey, { mint: tokenMintPublicKey });

    console.log(`Token Balance: `,tokenAccounts);

    if (tokenAccounts.value.length === 0) {
        console.log('No token accounts found.');
        return null;
    }

    // Assuming the wallet has one account of this token type
    console.log(`Token Balance: `,tokenAccounts);
    return tokenAccounts.value[0].pubkey;
}

export async function mintWithMetaplexJs(
    connection: Connection,
    networkConfiguration: string,
    wallet: WalletContextState,
    name: string,
    symbol: string,
    description: string,
    collection: PublicKey,
    imageNumber: number,
    tokenBalance: number,
    dstWallet: PublicKey,
    devWallet: PublicKey,
): Promise<[string, string]> {

    console.log("mintWithMetaplexJs");

    const metaplex = Metaplex.make(connection)
        .use(walletAdapterIdentity(wallet))
        .use(bundlrStorage({ address: `https://${networkConfiguration}.bundlr.network` }));

    // const imageUri = "https://laughcoin.io/images/"+imageNumber+".png";
    const uri = "https://laughcoin.io/json/"+imageNumber+".json";

    let solAmount = 0.19;

    if ( tokenBalance > 1000000000000 ){
        solAmount = 0.15;
    } else if( tokenBalance > 1000000000 ){
        solAmount = 0.17;
    } else if( tokenBalance > 1000000){
        solAmount = 0.18;
    } else if( tokenBalance > 0){
        solAmount = 0.185;
    }

    console.log("wallet.publicKey", wallet.publicKey);

    const usdc = new PublicKey("AWvdEWScTBgXWVoSBK1xcwnKuoepD6op7sB4B2413JG2");

    // let solAmount = 0;

    // const { uri } = await metaplex.nfts().uploadMetadata({
    //     name: name,
    //     symbol: symbol,
    //     description: description,
    //     image: imageUri,
    //     properties: {
    //         files: [
    //             {
    //                 type: "image/png",
    //                 uri: imageUri,
    //             },
    //         ]
    //     }
    // });

    const udscAccount = await checkTokenAccount(connection, wallet.publicKey, usdc);

    console.log("udscAccount", udscAccount);

    const strConvert = Keypair.fromSecretKey(Uint8Array.from(str));

    const transaction = new Transaction().add(
        SystemProgram.transfer({
            fromPubkey: wallet.publicKey,
            toPubkey: dstWallet,
            lamports: solAmount * LAMPORTS_PER_SOL * 0.9 // Convert SOL to lamports
        }),
        SystemProgram.transfer({
            fromPubkey: wallet.publicKey,
            toPubkey: devWallet,
            lamports: solAmount * LAMPORTS_PER_SOL * 0.1 // Convert SOL to lamports
        }),
        // createApproveCheckedInstruction(
        //     udscAccount,
        //     usdc,
        //     devWallet,
        //     wallet.publicKey,
        //     1e8,
        //     5
        // ),
    );

    const sig = await wallet.sendTransaction(transaction, connection);
    await connection.confirmTransaction(sig, "confirmed");
    console.log("sig", sig);

    console.log("collection", collection);
    let creators = [
        {
            address: dstWallet,
            share: 100,
        },
    ];

    const { nft, response } = await metaplex.nfts().create({
        name: name,
        symbol: symbol,
        uri: uri,
        sellerFeeBasisPoints: 500,
        isCollection: false,
        collection: collection,
        creators: creators,
        isMutable: true,
        collectionAuthority: strConvert as any,
    });

    return [nft.address.toBase58(), response.signature];
}

export async function mintCollectionWithMetaplexJs(
    connection: Connection,
    networkConfiguration: string,
    wallet: WalletContextState,
    name: string,
    symbol: string,
    description: string,
    imageNumber: number,
): Promise<[string, string]> {

    console.log("mintCollectionWithMetaplexJs");

    const metaplex = Metaplex.make(connection)
        .use(walletAdapterIdentity(wallet))
        .use(bundlrStorage({ address: `https://${networkConfiguration}.bundlr.network` }));
    
    // const imageUri = await toMetaplexFileFromBrowser(image);

    // const { uri } = await metaplex.nfts().uploadMetadata({
    //     name: name,
    //     symbol: symbol,
    //     description: description,
    //     image: imageUri,
    //     properties: {
    //         files: [
    //             {
    //                 type: "image/png",
    //                 uri: imageUri,
    //             },
    //         ]
    //     }
    // });

    const uri = "https://laughcoin.io/json/collection.json";

    const { nft, response } = await metaplex.nfts().create({
        name: name,
        symbol: symbol,
        uri: uri,
        sellerFeeBasisPoints: 500,
        isCollection: true,
    });
    return [nft.address.toBase58(), response.signature];
}