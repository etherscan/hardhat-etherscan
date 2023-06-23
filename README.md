# Hardhat Etherscan

This template demonstrates a basic Hardhat project, along with the [Hardhat Verify plugin](https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-verify) to automate contract verification on [Etherscan-like](https://etherscan.io/eaas) explorers.

## Prerequisite 

Uses `dotenv` for management of private keys, node URLs and other sensitive information, rename `.env.sample` to `.env`. 

Then populate the fields with your own private key and node connections such as from [Chainlist](https://chainlist.org/). 

## Setup 

1. Install Hardhat and all dependencies

```
npm 1
```

2. Compile the contracts

```
npx hardhat compile
```

3. Deploy to a specific network, such as Goerli/Sepolia/Polygon etc

Refer to `hardhat.config.js` under the `networks` section for chain names or to add new ones. 

```
npx hardhat run scripts/deploy.js --network sepolia
```

4. Verify the contract

```
npx hardhat verify 0x8f4877a367dc6dfaad8415ddd249af688b17d23fe049662b99814dff40c83dde --network sepolia
```
