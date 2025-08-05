import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord, FaEthereum } from "react-icons/fa";

// import logo from "../../images/logo.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <div className="text-white text-xl font-bold flex items-center gap-2">
          <span className="text-blue-400">⚡</span>
          <span>Abhishek's</span>
          <span className="text-purple-400">Web3</span>
        </div>
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <a 
          href="https://github.com/adrianhajdin/project_web3.0" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white text-base text-center mx-2 cursor-pointer hover:text-blue-400 transition-colors flex items-center gap-1"
        >
          <FaGithub /> Source Code
        </a>
        <a 
          href="https://ethereum.org/en/developers/docs/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white text-base text-center mx-2 cursor-pointer hover:text-blue-400 transition-colors flex items-center gap-1"
        >
          <FaEthereum /> Ethereum Docs
        </a>
        <a 
          href="https://hardhat.org/tutorial/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white text-base text-center mx-2 cursor-pointer hover:text-blue-400 transition-colors flex items-center gap-1"
        >
          Hardhat Tutorial
        </a>
        <a 
          href="https://metamask.io/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white text-base text-center mx-2 cursor-pointer hover:text-blue-400 transition-colors flex items-center gap-1"
        >
          MetaMask
        </a>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">Experience the future of decentralized transactions</p>
      <p className="text-white text-sm text-center font-medium mt-2">Built with React, Solidity & Web3</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">© 2025 Web3 Crypto Project</p>
      <div className="flex items-center gap-4">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
          <FaTwitter />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
          <FaLinkedin />
        </a>
        <a href="https://discord.gg" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
          <FaDiscord />
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
