import { useEffect, useState } from "react";
import { ethers } from "ethers";

// Components
import Navigation from "./components/Navigation";
import Search from "./components/Search";
import Home from "./components/Home";

// ABIs
import RealEstate from "./abis/RealEstate.json";
import Escrow from "./abis/Escrow.json";

// Config
import config from "./config.json";
import { useMoralis } from "react-moralis";

function App() {
  const { enableWeb3, account, isWeb3Enabled } = useMoralis();
  // const [account, setAccount] = useState(null);
  // const localBlockchainData = async () => {
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  // };
  // useEffect(() => {
  //   try {
  //     localBlockchainData();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

  return (
    <div>
      <Navigation
        enableWeb3={enableWeb3}
        account={account}
        isWeb3Enabled={isWeb3Enabled}
      />
      <div className="cards__section">
        <h3>Welcome to Real Estate NFT</h3>
      </div>
    </div>
  );
}

export default App;
