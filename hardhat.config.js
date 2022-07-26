require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();
const infuraid = "cdfe68a455bf4979b3f119f4b5696e35";
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      // Infura
      url: `https://polygon-mumbai.infura.io/v3/${infuraid}`,
      // url: "https://rpc-mumbai.matic.today",
      accounts: [privateKey],
    },
    matic: {
      // Infura
      url: `https://polygon-mainnet.infura.io/v3/${infuraid}`,
      // url: "https://rpc-mainnet.maticvigil.com",
      accounts: [privateKey],
    },
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
