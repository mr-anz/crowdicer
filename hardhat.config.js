require('@nomiclabs/hardhat-waffle')
require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

const ALCHEMY_URL = process.env.ALCHEMY_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY

module.exports = {
  defaultNetwork: 'localhost',
  networks: {
    hardhat: {},
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
    sepolia: {
      url: ALCHEMY_URL,
      accounts: [ PRIVATE_KEY ]
    },
    goerli: {
      url: ALCHEMY_URL,
      accounts: [ PRIVATE_KEY ]
    },
  },
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  mocha: {
    timeout: 40000,
  },
}
