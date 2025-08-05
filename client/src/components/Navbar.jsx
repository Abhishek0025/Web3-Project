import React, { useContext } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { FaWallet, FaChartLine, FaBook, FaExchangeAlt } from "react-icons/fa";

// import logo from "../../images/logo.png";
import { TransactionContext } from "../context/TransactionContext";

const NavBarItem = ({ title, icon: Icon, onClick, classprops }) => (
  <li 
    className={`mx-4 cursor-pointer flex items-center gap-2 hover:text-blue-400 transition-colors ${classprops}`}
    onClick={onClick}
  >
    {Icon && <Icon className="text-lg" />}
    {title}
  </li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const { currentAccount, connectWallet } = useContext(TransactionContext);

  const handleNavItemClick = (action) => {
    switch (action) {
      case 'wallet':
        if (currentAccount) {
          alert(`Connected: ${currentAccount.slice(0, 6)}...${currentAccount.slice(-4)}`);
        } else {
          connectWallet();
        }
        break;
      case 'github':
        window.open("https://github.com/Abhishek0025/Web3-Project", "_blank");
        break;
      case 'ethereum':
        window.open("https://ethereum.org/en/developers/docs/", "_blank");
        break;
      case 'hardhat':
        window.open("https://hardhat.org/tutorial/", "_blank");
        break;
      case 'metamask':
        window.open("https://metamask.io/", "_blank");
        break;
      default:
        break;
    }
  };

  const navItems = [
    { title: "GitHub", icon: FaChartLine, action: 'github' },
    { title: "Ethereum", icon: FaExchangeAlt, action: 'ethereum' },
    { title: "Hardhat", icon: FaBook, action: 'hardhat' },
    { title: "MetaMask", icon: FaWallet, action: 'metamask' },
  ];

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4 bg-black/20 backdrop-blur-sm border-b border-white/10">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <div className="text-white text-2xl font-bold cursor-pointer hover:scale-105 transition-transform flex items-center gap-2">
          <span className="text-blue-400">⚡</span>
          <span>Abhishek's</span>
          <span className="text-purple-400">Web3</span>
        </div>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {navItems.map((item, index) => (
          <NavBarItem 
            key={item.title + index} 
            title={item.title} 
            icon={item.icon}
            onClick={() => handleNavItemClick(item.action)}
          />
        ))}
        <li 
          className={`py-2 px-7 mx-4 rounded-full cursor-pointer transition-all duration-300 ${
            currentAccount 
              ? 'bg-green-600 hover:bg-green-700' 
              : 'bg-[#2952e3] hover:bg-[#2546bd]'
          }`}
          onClick={() => handleNavItemClick('wallet')}
        >
          {currentAccount ? 'Connected' : 'Connect Wallet'}
        </li>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer hover:text-blue-400 transition-colors" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer hover:text-red-400 transition-colors" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {navItems.map((item, index) => (
              <NavBarItem 
                key={item.title + index} 
                title={item.title} 
                icon={item.icon}
                onClick={() => {
                  handleNavItemClick(item.action);
                  setToggleMenu(false);
                }}
                classprops="my-2 text-lg" 
              />
            ))}
            <li 
              className={`py-2 px-7 mx-4 rounded-full cursor-pointer transition-all duration-300 ${
                currentAccount 
                  ? 'bg-green-600 hover:bg-green-700' 
                  : 'bg-[#2952e3] hover:bg-[#2546bd]'
              }`}
              onClick={() => {
                handleNavItemClick('wallet');
                setToggleMenu(false);
              }}
            >
              {currentAccount ? 'Connected' : 'Connect Wallet'}
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
