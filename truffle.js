var HDWalletProvider = require("truffle-hdwallet-provider")

require('dotenv').config()
var infura_apikey = process.env.INFURA_KEY
var mnemonic = process.env.MNEMONIC

module.exports = {
  migrations_directory: "./migrations",
  networks: {
    development: {
      host: "localhost",
      port: 9545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"+infura_apikey, 2),
      network_id: 3
    },
    kovan: {
        provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"+infura_apikey, 3),
        network_id: 42
    },
    rinkeby: {
        provider: new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/"+infura_apikey, 4),
        network_id: 4,
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 500
    }
  }
}
