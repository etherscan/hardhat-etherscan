require('dotenv').config()
require("@nomiclabs/hardhat-ethers")
require("@nomicfoundation/hardhat-verify");

module.exports = {

  // solidity compiler settings, see more at https://docs.soliditylang.org/en/v0.8.19/using-the-compiler.html

  solidity: {
    version: "0.8.17",
    settings: {
      metadata: {
        bytecodeHash: "none",
      },
      optimizer: {
        enabled: true,
        runs: 420,
      },
    },
  },

  // chains, add more from this list https://chainlist.org/

  networks: {

    mainnet: {
      url: process.env.MAINNET_PROVIDER,
      accounts: [process.env.PRIVATE_KEY],
    },

    kovan: {
      url: process.env.KOVAN_PROVIDER,
      accounts: [process.env.PRIVATE_KEY],
    },

    goerli: {
      url: process.env.GOERLI_PROVIDER,
      accounts: [process.env.PRIVATE_KEY],
    },

    rinkeby: {
      url: process.env.RINKEBY_PROVIDER,
      accounts: [process.env.PRIVATE_KEY],
    },

    sepolia: {
      url: process.env.SEPOLIA_PROVIDER,
      accounts: [process.env.PRIVATE_KEY],
    },

    avax: {
      url: process.env.AVAX_PROVIDER,
      accounts: [process.env.PRIVATE_KEY],
    },

    avaxFuji: {
      url: process.env.FUJI_PROVIDER,
      accounts: [process.env.PRIVATE_KEY],
    },

    polygon: {
      url: process.env.POLYGON_PROVIDER,
      accounts: [process.env.PRIVATE_KEY],
    },

    polygonMumbai: {
      url: process.env.MUMBAI_PROVIDER,
      accounts: [process.env.PRIVATE_KEY],
    },

    arbitrum: {
      url: process.env.ARBITRUM_PROVIDER,
      accounts: [process.env.PRIVATE_KEY],
    },

    arbGoerli: {
      url: process.env.ARBITRUM_GOERLI_PROVIDER,
      accounts: [process.env.PRIVATE_KEY],
    },

    arbNova: {
      url: process.env.ARBITRUM_NOVA_PROVIDER,
      accounts: [process.env.PRIVATE_KEY],
    },

    goptimism: {
      url: process.env.OPTIMISM_GOERLI_PROVIDER,
      accounts: [process.env.PRIVATE_KEY],
    },

    fantom: {
      url: process.env.FANTOM_PROVIDER,
      accounts: [process.env.PRIVATE_KEY],
    },

    ftmTestnet: {
      url: process.env.FANTOM_TESTNET_PROVIDER,
      accounts: [process.env.PRIVATE_KEY],
    },

    bsc: {
      url: process.env.BSC_PROVIDER,
      accounts: [process.env.PRIVATE_KEY],
    },

    cronos: {
      url: process.env.CRONOS_PROVIDER,
      accounts: [process.env.PRIVATE_KEY],
    },

    bttc: {
      url: process.env.BTTC_PROVIDER,
      accounts: [process.env.PRIVATE_KEY],
    },

    gnosis: {
      url: process.env.GNOSIS_PROVIDER,
      accounts: [process.env.PRIVATE_KEY],
    },

    baseGoerli: {
      url: process.env.BASE_GOERLI_PROVIDER,
      accounts: [process.env.PRIVATE_KEY],
    },

    goerliPolygonzkEVM: {
      url: process.env.POLYGONZK_GOERLI_PROVIDER,
      accounts: [process.env.PRIVATE_KEY],
    },

    polygonzkEVM: {
      url: process.env.POLYGONZK_PROVIDER,
      accounts: [process.env.PRIVATE_KEY],
    },

    bttcDonau: {
      url: process.env.BTTC_DONAU_PROVIDER,
      accounts: [process.env.PRIVATE_KEY],
    },

    bobaTestnet: {
      url: process.env.BOBA_TESTNET_PROVIDER,
      accounts: [process.env.PRIVATE_KEY],
    },
  },

  // etherscan-like explorers for contract verification

  etherscan: {
    apiKey: {
      goerli: process.env.ETHERSCAN_API_KEY,
      sepolia: process.env.ETHERSCAN_API_KEY,
      bscTestnet: process.env.BSCSCAN_API_KEY,
      polygonMumbai: process.env.POLYGONSCAN_API_KEY,
      ftmTestnet: process.env.FTMSCAN_API_KEY,
      avalancheFujiTestnet: process.env.SNOWTRACE_API_KEY,
      optimisticGoerli: process.env.OPTIMISM_API_KEY,
      arbGoerli: process.env.ARBISCAN_API_KEY,
      arbNova: process.env.ARBISCAN_NOVA_API_KEY,
      gnosis: process.env.GNOSISSCAN_API_KEY,
      baseGoerli: process.env.BASESCAN_API_KEY,
      goerliPolygonzkEVM: process.env.POLYGONZK_API_KEY,
      polygonzkEVM: process.env.POLYGONZK_API_KEY,
      bttcDonau: process.env.BTTCSCAN_API_KEY,
      bobaTestnet: process.env.BOBASCAN_API_KEY
    },

    customChains: [
      {
        network: "arbGoerli",
        chainId: 421613,
        urls: {
          apiURL: "https://api-goerli.arbiscan.io/api",
          browserURL: "https://goerli.arbiscan.io"
        }
      },
      {
        network: "arbNova",
        chainId: 42170,
        urls: {
          apiURL: "https://api-nova.arbiscan.io/api",
          browserURL: "https://nova.arbiscan.io"
        }
      },
      {
        network: "baseGoerli",
        chainId: 84531,
        urls: {
          apiURL: "https://api-goerli.basescan.org/api",
          browserURL: "https://goerli.basescan.org"
        }
      },
      {
        network: "goerliPolygonzkEVM",
        chainId: 1442,
        urls: {
          apiURL: "https://api-testnet-zkevm.polygonscan.com",
          browserURL: "https://testnet-zkevm.polygonscan.com"
        }
      },
      {
        network: "polygonzkEVM",
        chainId: 1101,
        urls: {
          apiURL: "https://api-zkevm.polygonscan.com",
          browserURL: "https://zkevm.polygonscan.com"
        }
      },
      {
        network: "bttcDonau",
        chainId: 1029,
        urls: {
          apiURL: "https://api-testnet.bttcscan.com",
          browserURL: "https://testnet.bttcscan.com"
        }
      },
      {
        network: "bobaTestnet",
        chainId: 2888,
        urls: {
          apiURL: "https://api-testnet.bobascan.com",
          browserURL: "https://testnet.bobascan.com"
        }
      }
    ]
  }

};
