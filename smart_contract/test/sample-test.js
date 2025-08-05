/**
 * @fileoverview Test suite for the Transactions smart contract
 * @author Abhishek Arunkumar
 * @description This file contains unit tests for the Transactions contract functionality
 * Last Updated: August 2025
 */

const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Transactions", function () {
  let transactionsContract;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    // Get signers for testing
    [owner, addr1, addr2] = await ethers.getSigners();
    
    // Deploy the Transactions contract
    const Transactions = await ethers.getContractFactory("Transactions");
    transactionsContract = await Transactions.deploy();
    await transactionsContract.deployed();
  });

  it("Should add a transaction to the blockchain", async function () {
    // Test adding a transaction with metadata
    const amount = ethers.utils.parseEther("1.0");
    const message = "Test transaction";
    const keyword = "test";

    await transactionsContract.addToBlockchain(addr1.address, amount, message, keyword);

    // Verify transaction count increased
    expect(await transactionsContract.getTransactionCount()).to.equal(1);
  });

  it("Should retrieve all transactions", async function () {
    // Add multiple transactions
    const amount1 = ethers.utils.parseEther("0.5");
    const amount2 = ethers.utils.parseEther("1.0");

    await transactionsContract.addToBlockchain(addr1.address, amount1, "First transaction", "first");
    await transactionsContract.addToBlockchain(addr2.address, amount2, "Second transaction", "second");

    // Get all transactions
    const transactions = await transactionsContract.getAllTransactions();
    
    // Verify we have 2 transactions
    expect(transactions.length).to.equal(2);
    expect(await transactionsContract.getTransactionCount()).to.equal(2);
  });

  it("Should emit Transfer event when adding transaction", async function () {
    const amount = ethers.utils.parseEther("1.0");
    const message = "Event test";
    const keyword = "event";

    // Expect the Transfer event to be emitted
    await expect(transactionsContract.addToBlockchain(addr1.address, amount, message, keyword))
      .to.emit(transactionsContract, "Transfer")
      .withArgs(owner.address, addr1.address, amount, message, await ethers.provider.getBlock("latest").then(b => b.timestamp), keyword);
  });
});
