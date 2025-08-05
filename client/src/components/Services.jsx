import React from "react";
import { FaGraduationCap, FaCode, FaRocket } from "react-icons/fa";
import { SiEthereum, SiSolidity, SiReact } from "react-icons/si";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          My Blockchain
          <br />
          Learning Journey
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          Exploring the world of Web3, smart contracts, and decentralized applications. 
          This project showcases my hands-on experience with blockchain technologies.
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Smart Contract Development"
          icon={<SiSolidity fontSize={21} className="text-white" />}
          subtitle="Learning Solidity to create secure, decentralized applications on the Ethereum blockchain"
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Web3 Integration"
          icon={<SiEthereum fontSize={21} className="text-white" />}
          subtitle="Connecting React frontend with blockchain using ethers.js and MetaMask wallet integration"
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Full-Stack DApp"
          icon={<SiReact fontSize={21} className="text-white" />}
          subtitle="Building complete decentralized applications with modern UI/UX and blockchain functionality"
        />
        <ServiceCard
          color="bg-[#00D4AA]"
          title="Blockchain Education"
          icon={<FaGraduationCap fontSize={21} className="text-white" />}
          subtitle="Learning DeFi, NFTs, DAOs, and other emerging blockchain technologies and concepts"
        />
        <ServiceCard
          color="bg-[#FF6B35]"
          title="Development Skills"
          icon={<FaCode fontSize={21} className="text-white" />}
          subtitle="Mastering React, JavaScript, Tailwind CSS, and modern web development practices"
        />
        <ServiceCard
          color="bg-[#8B5CF6]"
          title="Future Projects"
          icon={<FaRocket fontSize={21} className="text-white" />}
          subtitle="Planning to build DeFi protocols, NFT marketplaces, and other innovative DApps"
        />
      </div>
    </div>
  </div>
);

export default Services;
