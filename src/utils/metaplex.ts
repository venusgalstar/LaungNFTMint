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
    imageNumber: number,
): Promise<[string, string]> {

    console.log("mintWithMetaplexJs");

    const metaplex = Metaplex.make(connection)
        .use(walletAdapterIdentity(wallet))
        .use(bundlrStorage({ address: `https://${networkConfiguration}.bundlr.network` }));

    // const imageUri = "https://laughcoin.io/images/"+imageNumber+".png";
    const uri = "https://laughcoin.io/json/"+imageNumber+".json";

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

    console.log("collection", collection);

    const { nft, response } = await metaplex.nfts().create({
        name: name,
        symbol: symbol,
        uri: uri,
        sellerFeeBasisPoints: 0,
        isCollection: false,
        collection: collection,
        isMutable: false,
        collectionAuthority: wallet as any,
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

    const uri = "https://laughcoin.io/json/"+imageNumber+".json";

    const { nft, response } = await metaplex.nfts().create({
        name: name,
        symbol: symbol,
        uri: uri,
        sellerFeeBasisPoints: 0,
        isCollection: true,
    });
    return [nft.address.toBase58(), response.signature];
}