import { useEffect } from "react";
import logo from "../assets/logo.svg";

const Navigation = ({ enableWeb3, account, isWeb3Enabled }) => {
  // const connectHandler = async () => {
  //   const accounts = await window.ethereum.request({
  //     method: "eth_requestAccounts",
  //   });
  //   setAccount(accounts[0]);
  // };
  useEffect(() => {
    console.log(isWeb3Enabled);
  }, []);
  return (
    <nav>
      <ul className="nav__links">
        <li>
          <a href="#">Buy</a>
        </li>
        <li>
          <a href="#">Rent</a>
        </li>
        <li>
          <a href="#">Sell</a>
        </li>
      </ul>

      <div className="nav__brand">
        <img src={logo} alt="Logo" />
        <h1>Real Estate</h1>
      </div>
      {/* {account ? (
        <button type="button" className="nav__connect">
          {account.slice(0, 6) + "..." + account.slice(38, 42)}
        </button>
      ) : ( */}

      {account ? (
        <button type="button" className="nav__connect">
          connected to{" "}
          {account.slice(0, 6) + "..." + account.slice(account.length - 4)}
        </button>
      ) : (
        <button
          type="button"
          className="nav__connect"
          onClick={async () => {
            await enableWeb3();
          }}
        >
          Connect
        </button>
      )}
    </nav>
  );
};

export default Navigation;
