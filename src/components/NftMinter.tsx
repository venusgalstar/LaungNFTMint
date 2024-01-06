import { PublicKey } from "@metaplex-foundation/js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useNetworkConfiguration } from "contexts/NetworkConfigurationProvider";
import Image from "next/image";
import { FC, useCallback, useState } from "react";
import { mintWithMetaplexJs, mintCollectionWithMetaplexJs } from "utils/metaplex";
import { notify } from "utils/notifications";

const TOKEN_NAME = "LaughBunny";
const TOKEN_SYMBOL = "LaughBuny";
const TOKEN_DESCRIPTION = "NFT minted in the NFT Minter workshop!";
let WORKSHOP_COLLECTION = new PublicKey("GS5TyVAiaSH6g6yTX3NXXjWWwwHZTM3jkUDTEauChn4g");

export const NftMinter: FC = () => {
    const { connection } = useConnection();
    const { networkConfiguration } = useNetworkConfiguration();
    const wallet = useWallet();

    const [imageNumber, setImageNumber] = useState(0);
    const [createObjectURL, setCreateObjectURL] = useState(null);

    const [mintAddress, setMintAddress] = useState(null);
    const [mintSignature, setMintSignature] = useState(null);

    function getRandomInt(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    const uploadImage = async (event) => {
        // if (event.target.files && event.target.files[0]) {
        //     const uploadedImage = event.target.files[0];
        //     // setImage(uploadedImage);

        //     console.log("URL.createObjectURL(uploadedImage)", URL.createObjectURL(uploadedImage));
        //     setCreateObjectURL(URL.createObjectURL(uploadedImage));
        //     const body = new FormData();
        //     body.append("file", uploadedImage);
        //     await fetch("/api/upload", {
        //         method: "POST",
        //         body,
        //     }).catch((res) => {
        //         notify({ type: 'error', message: `Upload failed!`, description: res });
        //         console.log('error', `Upload failed! ${res}`);
        //     });
        // };

        const imageNum = getRandomInt(0, 10000);
        const imageUrl = new URL("https://laughcoin.io/images/" + imageNum + ".png");

        console.log("imageNum", imageNum);
        console.log("imageUrl", imageUrl);

        setImageNumber(imageNum);
        setCreateObjectURL(imageUrl.href);
    };

    const onClickMintNft = useCallback(async () => {
        if (!wallet.publicKey) {
            console.log('error', 'Wallet not connected!');
            notify({ type: 'error', message: 'error', description: 'Wallet not connected!' });
            return;
        };
        await mintWithMetaplexJs(
            connection,
            networkConfiguration,
            wallet,
            TOKEN_NAME,
            TOKEN_SYMBOL,
            TOKEN_DESCRIPTION,
            WORKSHOP_COLLECTION,
            imageNumber,
        ).then(([mintAddress, signature]) => {
            setMintAddress(mintAddress)
            setMintSignature(signature);
        });
    }, [wallet, connection, networkConfiguration, imageNumber]);

    const onClickMintCollectionNft = useCallback(async () => {
        if (!wallet.publicKey) {
            console.log('error', 'Wallet not connected!');
            notify({ type: 'error', message: 'error', description: 'Wallet not connected!' });
            return;
        };
        await mintCollectionWithMetaplexJs(
            connection,
            networkConfiguration,
            wallet,
            TOKEN_NAME,
            TOKEN_SYMBOL,
            TOKEN_DESCRIPTION,
            imageNumber,
        ).then(([mintAddress, signature]) => {
            setMintAddress(mintAddress)
            setMintSignature(signature);
            WORKSHOP_COLLECTION = new PublicKey(mintAddress);
        });
    }, [wallet, connection, networkConfiguration, imageNumber]);


    return (
        <div>
            <div className="mx-auto flex flex-col">
                {createObjectURL && <Image className="mx-auto mb-4" alt='uploadedImage' width='300' height='300' src={createObjectURL} />}
                {!mintAddress && !mintSignature && <div className="mx-auto text-center mb-2">
                    <button
                        className="px-8 m-2 btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-black"
                        onClick={uploadImage}
                    >
                        <span>Select Image!</span>
                    </button>
                </div>}
            </div>
            <div className="flex flex-row justify-center">
                <div className="relative group items-center">

                    {createObjectURL && !mintAddress && !mintSignature &&
                        <div>
                            <div className="m-1 absolute -inset-0.5 bg-gradient-to-r from-orange-300 to-orange-500 
                        rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                            <button
                                className="px-8 m-2 mt-4 w-40 h-14 btn animate-pulse bg-gradient-to-br from-orange-300 to-orange-500 hover:from-white hover:to-orange-300 text-black text-lg"
                                onClick={onClickMintNft}
                            >
                                <span>Mint!</span>

                            </button>
                        </div>
                    }

                    {
                        // <div>
                        //     <button
                        //         className="px-8 m-2 mt-4 w-40 h-14 btn animate-pulse bg-gradient-to-br from-orange-300 to-orange-500 hover:from-white hover:to-orange-300 text-black text-lg"
                        //         onClick={onClickMintCollectionNft}
                        //     >
                        //         <span>Mint Collection!</span>

                        //     </button>
                        // </div>
                    }

                    {mintAddress && mintSignature &&
                        <div>
                            <h4 className="md:w-full text-2x1 md:text-4xl text-center text-slate-300 my-2">
                                <p>Mint successful!</p>
                                <p className="text-xl mt-4 mb-2">
                                    Mint address: <span className="font-bold text-lime-500">
                                        <a
                                            className="border-b-2 border-transparent hover:border-lime-500"
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            href={`https://explorer.solana.com/address/${mintAddress}?cluster=${networkConfiguration}`}
                                        >{mintAddress}</a>
                                    </span>
                                </p>
                                <p className="text-xl">
                                    Tx signature: <span className="font-bold text-amber-600">
                                        <a
                                            className="border-b-2 border-transparent hover:border-amber-600"
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            href={`https://explorer.solana.com/tx/${mintSignature}?cluster=${networkConfiguration}`}
                                        >{mintSignature}</a>
                                    </span>
                                </p>
                            </h4>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}