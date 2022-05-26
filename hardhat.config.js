require("@nomiclabs/hardhat-waffle");

require("./tasks/faucet");

module.exports = {
  solidity: "0.7.3",
  networks: {
    hardhat: {
      chainId: 1337
    }
  }
};
