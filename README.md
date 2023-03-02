# Real-Estate-NFT

![App](/public/photo.png)
[Example App on IPFS here!](https://ipfs.io/ipfs/QmQVcpsjrA6cr1iJjZAodYwmPekYgbnXGo4DFubJiLc2EB)

Built with ❤️ using:
ReactJS
Solidity
Chainlink
Moralis
web3uikit
Ethers
Hardhat
IPFS

- [Real-Estate-NFT](#real-estate-nft)
- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Quickstart](#quickstart)

# Getting Started

## Requirements

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  - You'll know you did it right if you can run `git --version` and you see a response like `git version x.x.x`
- [Nodejs](https://nodejs.org/en/)
  - You'll know you've installed nodejs right if you can run:
    - `node --version` and get an ouput like: `vx.x.x`
- [Yarn](https://yarnpkg.com/getting-started/install) instead of `npm`
  - You'll know you've installed yarn right if you can run: - `yarn --version` and get an output like: `x.x.x` - You might need to [install it with `npm`](https://classic.yarnpkg.com/lang/en/docs/install/) or `corepack`
- [metamask](https://metamask.io/download/)metamask extension install on your chrome browser

## Quickstart

```
1. Clone/Download the Repository
git clone https://github.com/rabobahago/real-estate-nft.git
cd real-estate-nft

2. Install Dependencies:
$ npm install

3. Run tests
$ npx hardhat test

4. Start Hardhat node
$ npx hardhat node

5. Run deployment script
In a separate terminal execute: $ npx hardhat run ./scripts/deploy.js --network localhost

7. Start frontend
$ npm run start
```

1. Add hardhat network to your metamask/wallet

- After you run npx hardhat node: copy the first four accounts private keys and import them into your metamask or wallet

- You can name them anything you want but preferably you name them as follow:

  - Hardhat #0 represents the buyer account on your metamask or wallet

  - Hardhat #1 represents the seller account on your metamask or wallet

  - Hardhat #2 represents the inspector account on your metamask or wallet

  - hardhat #3 represents the lender account on your metamask or wallet

  - Network Name: Hardhat-Localhost

1. How to perform a transaction on a local machine

- After you run npm run start, the application will start on your local machine at a particular port

- Go to the application on your browser, click on the connect button at the right top corner of the page

- It will ask you to connect to your wallet, and switch your current wallet account to hardhat #0 as explained above

- This account represents the buyer account on your metamask or wallet

- After you switched your wallet account to hardhat #0, go back to your application and click any property you want to buy

- A UI will pop up, which contains the property details and a button that says buy, click on the buy button, and it takes you back to your wallet in other to make the transaction as a buyer.

- click confirm if Ok with the fee of the transaction

- In case you have an error while performing the transaction such as: // MetaMask - RPC Error: [ethjs-query] while formatting outputs from RPC

- Reset your wallet and repeat the transaction

- If your buy transaction is confirmed, metamask will pop the approve sale UI, please press confirm button to continue with your transaction

- You see approval sale and contract interaction success in your wallet

- You have to switch to your next wallet or metamask account which is hardhat #2 representing the inspector account in the transaction

- Then the Buy button on your UI application will automatically switch to approve & inspection button

- Press the button to continue with your transaction in metamask

- If the transaction is Ok for you, press the confirm button to continue with your transaction

- You have to switch to your next wallet or metamask account which is hardhat #3 representing the lender account in the transaction

- Then the approve inspection button on your UI application will automatically switch to approve & lend button

- Press the button to continue with your transaction in metamask

- If the transaction is Ok for you, press the confirm button to continue with your transaction

- You have to switch to your next wallet or metamask account which is hardhat #1 representing the seller account in the transaction

- Then the approve & lend button on your UI application will automatically switch to approve & sell button

- Press the button to continue with your transaction in metamask

- If the transaction is Ok for you, press the confirm button to continue with your transaction

- BOOM the owner of the property has been transferred to you as confirmed by the UI
- As a bonus, you can also search property by name or title from the search bar
