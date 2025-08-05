/**
 * @fileoverview Hardhat configuration for the Web3 Blockchain Project
 * @author Abhishek Arunkumar
 * @description Configuration file for Hardhat development environment
 * Last Updated: August 2025
 */

require('@nomiclabs/hardhat-waffle');

module.exports = {
  // Solidity compiler version
  solidity: '0.8.0',
  
  // Network configurations for deployment
  networks: {
    // Ropsten testnet configuration
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/z4WpA8UKgqnwbTYmrZu15yCOiijBKaRv',
      accounts: ['2f99db8cdb04655028eee1dc98230925202f6b3e010e43fad2883b4bea90a1a3'],
    },
  },
};