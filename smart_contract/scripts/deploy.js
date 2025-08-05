/**
 * @fileoverview Deployment script for the Transactions smart contract
 * @author Abhishek Arunkumar
 * @description This script deploys the Transactions contract to the blockchain
 * Last Updated: August 2025
 */

const main = async () => {
  // Get the contract factory for Transactions contract
  const transactionsFactory = await hre.ethers.getContractFactory("Transactions");
  
  // Deploy the contract to the blockchain
  const transactionsContract = await transactionsFactory.deploy();

  // Wait for the contract to be deployed
  await transactionsContract.deployed();

  // Log the deployed contract address for future reference
  console.log("Transactions address: ", transactionsContract.address);
};

/**
 * @dev Main execution function with error handling
 * This function runs the deployment and handles any errors that occur
 */
const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

// Execute the deployment script
runMain();