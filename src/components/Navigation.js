import { useEffect } from "react";
import logo from "../assets/logo.svg";

const Navigation = ({
  enableWeb3,
  account,
  isWeb3Enabled,
  Moralis,
  deactivateWeb3,
  isWeb3EnableLoading,
}) => {
  useEffect(() => {
    if (isWeb3Enabled) return;
    if (typeof window !== "undefined") {
      if (window.localStorage.getItem("connected")) {
        enableWeb3();
      }
    }
  }, [isWeb3Enabled, enableWeb3]);
  useEffect(() => {
    Moralis.onAccountChanged((account) => {
      console.log(`Account changed to ${account}`);
      if (account === null) {
        window.localStorage.removeItem("connected");
        deactivateWeb3();
        console.log("Null account found");
      }
    });
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

      {account ? (
        <button type="button" className="nav__connect">
          connected to{" "}
          {account.slice(0, 6) + "..." + account.slice(account.length - 4)}
        </button>
      ) : (
        <button
          type="button"
          className={isWeb3EnableLoading ? "btn__disable" : "nav__connect"}
          onClick={async () => {
            await enableWeb3();
            if (typeof window !== "undefined") {
              window.localStorage.setItem("connected", "injected");
            }
          }}
        >
          Connect
        </button>
      )}
    </nav>
  );
};

export default Navigation;
