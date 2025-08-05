# Abhishek's Web3 Blockchain Application

![Web3 App](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![Solidity](https://img.shields.io/badge/Solidity-0.8.0-orange?style=for-the-badge&logo=solidity)
![Ethereum](https://img.shields.io/badge/Ethereum-Web3-purple?style=for-the-badge&logo=ethereum)

## 🚀 About This Project

This is my personal Web3 blockchain application built as part of my blockchain learning journey. The project demonstrates hands-on experience with modern Web3 technologies including React, Solidity, Hardhat, and MetaMask integration.

## ✨ Features

- **🔗 Smart Contract Integration** - Solidity contracts deployed on local Hardhat network
- **💳 MetaMask Wallet Connection** - Seamless wallet integration for transactions
- **🎨 Modern UI/UX** - Built with React, Tailwind CSS, and Framer Motion
- **📱 Responsive Design** - Works perfectly on desktop and mobile devices
- **🔄 Real-time Transactions** - Send and receive ETH with transaction history
- **🎭 GIF Integration** - Visual transaction representation using Giphy API

## 🛠️ Technology Stack

- **Frontend**: React 18, Vite, Tailwind CSS
- **Blockchain**: Solidity, Hardhat, Ethers.js
- **Wallet**: MetaMask Integration
- **UI/UX**: Framer Motion, React Icons
- **API**: Giphy API for transaction GIFs

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MetaMask browser extension
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abhishek0025/Web3-Project.git
   cd Web3-Project
   ```

2. **Install dependencies**
   ```bash
   cd client && npm install
   cd ../smart_contract && npm install
   ```

3. **Set up environment variables**
   ```bash
   # In client/.env
   VITE_GIPHY_API=your_giphy_api_key_here
   ```

4. **Start the development servers**
   ```bash
   # Terminal 1 - Start Hardhat blockchain
   cd smart_contract && npx hardhat node
   
   # Terminal 2 - Start React frontend
   cd client && npm run dev
   ```

5. **Deploy smart contract**
   ```bash
   cd smart_contract && npx hardhat run scripts/deploy.js --network localhost
   ```

6. **Connect MetaMask**
   - Network: Hardhat Local
   - RPC URL: http://localhost:8545
   - Chain ID: 31337

## 🎯 My Learning Journey

This project represents my exploration of:
- **Smart Contract Development** with Solidity
- **Web3 Integration** using ethers.js and MetaMask
- **Full-Stack DApp Development** with React
- **Blockchain Education** covering DeFi, NFTs, and DAOs
- **Modern Development Practices** with React hooks and context

## 📸 Screenshots

*[Add screenshots of your application here]*



**Abhishek Iyer**
- GitHub: [@Abhishek0025](https://github.com/Abhishek0025)
- LinkedIn: [Your LinkedIn]
- Portfolio: [Your Portfolio]

---

Project created in collaboration with Enyel Sequeira: 
Portfolio - https://www.enyelsequeira.com
E-mail - enyelsequeira1994@gmail.com
Want me to cover the project you've created? Send me an e-mail 👌

