const { ethers } = require("hardhat")

async function main() {
 
   // use network from hardhat command line, such as `npx hardhat run deploy.js --network goerli`

   const provider = new ethers.providers.Web3Provider(network.provider)

   // create a wallet using private key, and connect it to a node above

   const deployer = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
   
   console.log(`Using wallet address: ` + deployer.address)

   // initialise contract to be deployed

   const contract = await ethers.getContractFactory("HelloWorld", [deployer])

   // deploy the contract 

   const deploy = await contract.deploy()
   const receipt = await deploy.deployTransaction.wait()

   console.log(`Contract successfully deployed to: ` + receipt.contractAddress)

}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
