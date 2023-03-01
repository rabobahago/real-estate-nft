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
  const {
    enableWeb3,
    account,
    isWeb3Enabled,
    Moralis,
    deactivateWeb3,
    isWeb3EnableLoading,
  } = useMoralis();
  const [acc, setAccount] = useState(account);
  const [provider, setProvider] = useState(null);
  const [escrow, setEscrow] = useState(null);
  const [homes, setHomes] = useState([]);
  const [home, setHome] = useState({});
  const [toggle, setToggle] = useState(false);
  const loadBlockchainData = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);
    const network = await provider.getNetwork();
    const realEstate = new ethers.Contract(
      config[network.chainId].realEstate.address,
      RealEstate,
      provider
    );
    const totalSupply = await realEstate.totalSupply();
    let homes = [];
    for (let i = 1; i <= totalSupply; i++) {
      const uri = await realEstate.tokenURI(i);
      const response = await fetch(uri);
      const metadata = await response.json();
      homes.push(metadata);
    }
    setHomes(homes);
    const escrow = new ethers.Contract(
      config[network.chainId].escrow.address,
      Escrow,
      provider
    );
    setEscrow(escrow);
  };
  useEffect(() => {
    loadBlockchainData();
  }, [enableWeb3, isWeb3Enabled]);
  const togglePop = (home) => {
    setHome(home);
    toggle ? setToggle(false) : setToggle(true);
  };

  window.ethereum.on("accountsChanged", async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = ethers.utils.getAddress(accounts[0]);
    setAccount(account);
  });

  return (
    <div>
      <Navigation
        enableWeb3={enableWeb3}
        account={account}
        isWeb3Enabled={isWeb3Enabled}
        Moralis={Moralis}
        deactivateWeb3={deactivateWeb3}
        isWeb3EnableLoading={isWeb3EnableLoading}
      />
      <Search />
      <div className="cards__section">
        <h3>Home For You</h3>
        <hr />
        <div className="cards">
          {homes.map((home, index) => {
            return (
              <div className="card" key={index} onClick={() => togglePop(home)}>
                <div className="card__image">
                  <img alt="Home" src={home.image} />
                </div>
                <div className="card__info">
                  <h4>{home.attributes[0].value}ETH</h4>
                  <p>
                    <strong>{home.attributes[2].value}</strong> bds |
                    <strong>{home.attributes[3].value}</strong> ba |
                    <strong>{home.attributes[4].value}</strong> sqft
                  </p>
                  <p>{home.address}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {toggle && (
        <Home
          home={home}
          provider={provider}
          account={acc}
          escrow={escrow}
          togglePop={togglePop}
        />
      )}
    </div>
  );
}

export default App;
//npx hardhat run scripts/deploy.js --network localhost
