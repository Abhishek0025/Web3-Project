# Web3 Blockchain Transactions Smart Contract

This project contains a Solidity smart contract for managing blockchain transactions with metadata storage. The contract allows users to record transactions with additional information such as messages and keywords for better transaction tracking.

## Features

- **Transaction Recording**: Add transactions to the blockchain with metadata
- **Event Emission**: Automatic event emission for transaction tracking
- **Data Retrieval**: Get all transactions and transaction count
- **Metadata Support**: Store messages and keywords with each transaction

## Contract Structure

### Transactions.sol
The main smart contract that provides the following functionality:
- `addToBlockchain()`: Add a new transaction with metadata
- `getAllTransactions()`: Retrieve all stored transactions
- `getTransactionCount()`: Get the total number of transactions

## Development Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
```bash
npm install
```

### Available Commands

```shell
# Compile the smart contracts
npx hardhat compile

# Run tests
npx hardhat test

# Start local blockchain node
npx hardhat node

# Deploy contract to local network
npx hardhat run scripts/deploy.js --network localhost

# Deploy to testnet (requires configuration)
npx hardhat run scripts/deploy.js --network ropsten

# Clean build artifacts
npx hardhat clean

# List available accounts
npx hardhat accounts

# Get help
npx hardhat help
```

## Testing

The project includes comprehensive tests for the Transactions contract:
- Transaction addition functionality
- Data retrieval methods
- Event emission verification

Run tests with:
```bash
npm test
```

## Deployment

The contract can be deployed to various networks:
- **Local Development**: Use `npx hardhat node` and deploy to localhost
- **Test Networks**: Configure network settings in `hardhat.config.js`
- **Mainnet**: Update configuration with mainnet settings

## Author

**Abhishek Arunkumar** - Web3 Blockchain Developer

## License

This project is licensed under the ISC License.

## Last Updated

December 2024
