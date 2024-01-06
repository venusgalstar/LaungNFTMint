import { bundlrStorage, Metaplex, toMetaplexFileFromBrowser, walletAdapterIdentity } from "@metaplex-foundation/js";
import { WalletContextState } from "@solana/wallet-adapter-react";
import { Connection, PublicKey } from "@solana/web3.js";

export async function mintWithMetaplexJs(
    connection: Connection,
    networkConfiguration: string,
    wallet: WalletContextState,
    name: string,
    symbol: string,
    description: string,
    collection: PublicKey,
    image: File,
): Promise<[string, string]> {

    console.log("mintWithMetaplexJs");

    const metaplex = Metaplex.make(connection)
        .use(walletAdapterIdentity(wallet))
        .use(bundlrStorage({ address: `https://${networkConfiguration}.bundlr.network` }));

    const { uri } = await metaplex.nfts().uploadMetadata({
        name: name,
        symbol: symbol,
        description: description,
        image: await toMetaplexFileFromBrowser(image),
    });

    const { nft, response } = await metaplex.nfts().create({
        name,
        symbol,
        uri: uri,
        sellerFeeBasisPoints: 0,
        tokenOwner: wallet.publicKey,
        mintTokens: true,
        collection,
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
    image: File,
): Promise<[string, string]> {

    console.log("mintCollectionWithMetaplexJs");

    const metaplex = Metaplex.make(connection)
        .use(walletAdapterIdentity(wallet))
        .use(bundlrStorage({ address: `https://${networkConfiguration}.bundlr.network` }));
    
    const imageUri = await toMetaplexFileFromBrowser(image);

    const { uri } = await metaplex.nfts().uploadMetadata({
        name,
        symbol,
        description,
        image: imageUri,
        properties: {
            files: [
                {
                    type: "image/png",
                    uri: imageUri,
                },
            ]
        }
    });

    const { nft, response } = await metaplex.nfts().create({
        name: name,
        symbol: symbol,
        uri: uri,
        sellerFeeBasisPoints: 0,
        tokenOwner: wallet.publicKey,
        mintTokens: true,
        isCollection: true,
    });
    return [nft.address.toBase58(), response.signature];
}