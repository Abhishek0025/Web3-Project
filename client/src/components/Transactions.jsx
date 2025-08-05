import React, { useContext } from "react";
import { FaEthereum, FaClock, FaExchangeAlt } from "react-icons/fa";

import { TransactionContext } from "../context/TransactionContext";
import useFetch from "../hooks/useFetch";
import { shortenAddress } from "../utils/shortenAddress";

const TransactionsCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
  const gifUrl = useFetch({ keyword });

  return (
    <div className="bg-gradient-to-br from-[#181918] to-[#1a1a1a] flex flex-1
      min-w-[320px]
      max-w-[420px]
      flex-col p-4 rounded-xl hover:shadow-2xl transition-all duration-300 border border-white/10 hover:border-blue-500/50 h-full"
    >
      <div className="flex flex-col items-center w-full mt-3">
        <div className="w-full mb-6 p-3 bg-black/20 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <FaEthereum className="text-blue-500 text-xl" />
            <span className="text-blue-400 font-semibold">Transaction Details</span>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-sm">From:</span>
              <span className="text-white text-sm font-mono bg-gray-800 px-2 py-1 rounded">
                {shortenAddress(addressFrom)}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-sm">To:</span>
              <span className="text-white text-sm font-mono bg-gray-800 px-2 py-1 rounded">
                {shortenAddress(addressTo)}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-sm">Amount:</span>
              <span className="text-green-400 font-bold">{amount} ETH</span>
            </div>
            
            {message && (
              <div className="flex items-start gap-2">
                <span className="text-gray-400 text-sm">Message:</span>
                <span className="text-white text-sm italic">"{message}"</span>
              </div>
            )}
          </div>
        </div>
        
        <img
          src={gifUrl || url}
          alt="transaction"
          className="w-full h-48 2xl:h-64 rounded-lg shadow-lg object-cover"
        />
        
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 px-6 w-max rounded-full -mt-6 shadow-2xl flex items-center gap-2">
          <FaClock className="text-white" />
          <p className="text-white font-bold text-sm">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

const Transactions = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);

  const getTransactionLayout = (count) => {
    if (count === 0) return "justify-center";
    if (count === 1) return "justify-center";
    if (count === 2) return "justify-center";
    return "justify-center";
  };

  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4 w-full max-w-7xl">
        {currentAccount ? (
          <div className="text-center mb-8">
            <h3 className="text-white text-3xl font-bold mb-2 flex items-center justify-center gap-3">
              <FaExchangeAlt className="text-blue-500" />
              Latest Transactions
            </h3>
            <p className="text-gray-400 text-lg">
              {transactions.length === 0 
                ? "No transactions yet. Send your first transaction!" 
                : `${transactions.length} transaction${transactions.length !== 1 ? 's' : ''} found`
              }
            </p>
          </div>
        ) : (
          <div className="text-center">
            <h3 className="text-white text-3xl font-bold mb-2">
              Connect your account to see the latest transactions
            </h3>
            <p className="text-gray-400 text-lg">
              Connect your MetaMask wallet to view transaction history
            </p>
          </div>
        )}

        <div className={`flex flex-wrap justify-center items-start mt-10 gap-6`}>
          {transactions.length === 0 ? (
            <div className="text-center text-gray-500 py-12">
              <FaEthereum className="text-6xl mx-auto mb-4 text-gray-600" />
              <p className="text-xl">No transactions to display</p>
              <p className="text-sm mt-2">Make your first transaction to see it here!</p>
            </div>
          ) : (
            transactions.reverse().map((transaction, i) => (
              <div key={i} className="flex-1 min-w-[320px] max-w-[420px]">
                <TransactionsCard {...transaction} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
