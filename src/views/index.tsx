// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components
// import { RequestAirdrop } from '../components/RequestAirdrop';

// Store
import useUserSOLBalanceStore from '../stores/useUserSOLBalanceStore';
import { NftMinter } from 'components/NftMinter';

export const HomeView: FC = ({ }) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance)
  const { getUserSOLBalance } = useUserSOLBalanceStore()

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58())
      getUserSOLBalance(wallet.publicKey, connection)
    }
  }, [wallet.publicKey, connection, getUserSOLBalance])

  return (

    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <div className='mt-6'>
          <h1 className="mx-auto text-center w-auto text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mb-4">
            LAUGH BUNNY NFT
          </h1>
        </div>
        <h4 className="md:w-full text-2x1 md:text-4xl text-center text-slate-300 my-2">
          <p>Select Laugh Bunny!</p>
        </h4>
        {wallet.connected ? <div>
          <div className="flex flex-row mt-6">
            <div className="flex flex-col mt-6 w-1\/2">
              <p className="main-decs">
                <span className="spanClass">Greetings Crypto Enthusiasts,</span>
                We are thrilled to present LaughCoin, the latest addition to the meme token universe!
                Born out of a commitment to infuse joy and humor into the cryptocurrency landscape,
                LaughCoin is more than just a token; it is a celebration of laughter, creativity, and community spirit.
              </p>
              <p className="main-contract">
                Contract Address: C5VygnmqBXAMKLbuZ8r2vpNoVitCfuXYu2ywUX8vySS7
              </p>
            </div>
            <div className="flex flex-col mt-6 w-1\/2">
              <NftMinter />
            </div>
          </div>

          <div className="flex flex-col mt-12">
            {/* <RequestAirdrop /> */}
            <h4 className="md:w-full text-2xl text-slate-300 my-2">
              {wallet &&
                <div className="flex flex-row justify-center">
                  <div>
                    {(balance || 0).toLocaleString()}
                  </div>
                  <div className='text-slate-600 ml-2'>
                    SOL
                  </div>
                </div>
              }
            </h4>
          </div>
        </div>
          :
          <div>
            <h4 className="md:w-full text-2xl text-slate-300 mt-8">
              Connect Your Wallet!
            </h4>
          </div>
        }
      </div>
    </div>
  );
};
