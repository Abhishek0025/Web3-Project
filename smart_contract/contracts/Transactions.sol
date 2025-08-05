// SPDX-License-Identifier: UNLICENSED
// Web3 Blockchain Transaction Contract
// This contract manages blockchain transactions with metadata storage
// Author: Abhishek Arunkumar
// Last Updated: August 2025

pragma solidity ^0.8.0;

import "hardhat/console.sol";

/**
 * @title Transactions
 * @dev A smart contract for managing blockchain transactions with metadata
 * This contract allows users to record transactions with additional information
 * such as messages and keywords for better transaction tracking
 */
contract Transactions {
    // Counter to track total number of transactions
    uint256 transactionCount;

    // Event emitted when a new transaction is added to the blockchain
    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);
  
    /**
     * @dev Structure to store transaction data with metadata
     * @param sender - Address of the transaction sender
     * @param receiver - Address of the transaction receiver
     * @param amount - Amount being transferred
     * @param message - Optional message attached to the transaction
     * @param timestamp - Block timestamp when transaction was recorded
     * @param keyword - Optional keyword for transaction categorization
     */
    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    // Array to store all transaction records
    TransferStruct[] transactions;

    /**
     * @dev Adds a new transaction to the blockchain with metadata
     * @param receiver - Address receiving the transaction
     * @param amount - Amount being transferred
     * @param message - Optional message for the transaction
     * @param keyword - Optional keyword for categorization
     * This function increments the transaction counter and stores the transaction data
     */
    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
        transactionCount += 1;
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    /**
     * @dev Retrieves all stored transactions
     * @return Array of all transaction structures
     * This function provides read access to all transaction records
     */
    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    /**
     * @dev Returns the total number of transactions recorded
     * @return Total transaction count
     * This function provides a quick way to check transaction volume
     */
    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
}