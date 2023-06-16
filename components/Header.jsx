import { TbBusinessplan } from 'react-icons/tb'
import Link from 'next/link'
import React from 'react'
import { connectWallet } from '@/services/blockchain'
import { truncate, useGlobalState } from '@/store'

const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')

  return (
    <header
      className="flex justify-between items-center
        p-5 bg-white shadow-lg fixed top-0 left-0 right-0"
    >
      <Link
        href={'/'}
        className="flex justify-start items-center
      text-2xl text-black space-x-1"
      >
        <span>CrowdDicer</span>
        <TbBusinessplan className='h-8 w-8 bold text-green-500'/>
      </Link>

      <div className="flex space-x-2 justify-center">

          {connectedAccount ? (
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-green-600
            text-white font-medium text-xs leading-tight uppercase
            rounded-full shadow-md hover:bg-green-700"
          >
            {truncate(connectedAccount, 4, 4, 11)}
          </button>
        ) : (
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-green-600
            text-white font-medium text-xs leading-tight uppercase
            rounded-full shadow-md hover:bg-green-700"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        )}

      </div>
    </header>
  )
}

export default Header
