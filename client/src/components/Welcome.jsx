import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { FaShieldAlt, FaRocket, FaCoins, FaGlobe, FaBolt, FaLink } from "react-icons/fa";

import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white hover:bg-white/10 transition-all duration-300 cursor-pointer";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-lg p-3 outline-none bg-transparent text-white border border-gray-600 text-sm white-glassmorphism focus:border-blue-500 transition-all duration-300"
  />
);

const Welcome = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Abhishek's Web3 <br /> Blockchain App
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Experience the future of decentralized transactions. Built with React, Solidity, and Web3 technologies.
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10 gap-2">
            <div className={`rounded-tl-2xl ${companyCommonStyles} flex items-center gap-2`} onClick={() => alert('Full-stack development with modern React hooks and context!')}>
              <FaShieldAlt className="text-blue-400" />
              Full-Stack
            </div>
            <div className={`${companyCommonStyles} flex items-center gap-2`} onClick={() => alert('Smart contract development with Solidity and Hardhat!')}>
              <FaShieldAlt className="text-green-400" />
              Smart Contracts
            </div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles} flex items-center gap-2`} onClick={() => alert('Blockchain integration with Ethereum and Web3!')}>
              <SiEthereum className="text-purple-400" />
              Blockchain
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles} flex items-center gap-2`} onClick={() => alert('Modern UI/UX with Tailwind CSS and animations!')}>
              <FaGlobe className="text-cyan-400" />
              Modern UI
            </div>
            <div className={`${companyCommonStyles} flex items-center gap-2`} onClick={() => alert('Real-time transaction processing and validation!')}>
              <FaCoins className="text-yellow-400" />
              Real-time
            </div>
            <div className={`rounded-br-2xl ${companyCommonStyles} flex items-center gap-2`} onClick={() => alert('Secure wallet integration with MetaMask!')}>
              <FaLink className="text-orange-400" />
              Secure
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  {shortenAddress(currentAccount)}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism rounded-xl border border-white/10">
            <div className="w-full mb-4">
              <h3 className="text-white text-xl font-bold mb-2 flex items-center gap-2">
                <FaRocket className="text-blue-400" />
                Send Transaction
              </h3>
              <p className="text-gray-400 text-sm">Fill in the details below to send ETH</p>
            </div>
            
            <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
            <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
            <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />

            <div className="h-[1px] w-full bg-gray-400 my-4" />

            {isLoading
              ? <Loader />
              : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-full mt-2 bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg cursor-pointer hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold flex items-center justify-center gap-2"
                >
                  <FaBolt className="text-white" />
                  Send Transaction
                </button>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
