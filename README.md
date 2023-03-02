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
  - Hardhat #0 represent the buyer account on your metamask or wallet
  - Hardhat #1 represent the seller account on your metamask or wallet
  - Hardhat #2 represent the inspector account on your metamask or wallet
  - hardhat #3 represent the lender account on your metamask or wallet
  - Network Name: Hardhat-Localhost

1. How to perform a transaction on a local machine

- After you run npm run start, the application will start on your local machine at a particular port
- Go to the application on your browser, click on the connect button at the right top corner of the page
- It will ask you to connect to your wallet, switch your current wallet account to hardhat #0 as explained above
- This account represent the buyer account on your metamask or wallet
- After you switched your wallet account to hardhat #0, go back to your application and click any property you want to buy
- A UI will pop, which contains the property details and button that say buy, click on the buy button, it take you back your wallet in other to make transaction as a buyer.
- click confirm if Ok with fee of transaction
- In case you have error while performing the transaction such as: // MetaMask - RPC Error: [ethjs-query] while formatting outputs from RPC
- Reset your wallet and repeat the transaction
- If you buy transaction is confirmed, metamask will pop the approve sale UI, please press confirm button to continue with your transaction
- You see approval sale and contract interaction success in your wallet
- You have to switch to your next wallet or metamask account which is hardhat #2 representing inspector account in the transaction
- Then the Buy button on your UI application will automatically switch to approve & inspection button
- Press the button to continue with your transaction in metamask
- If the transaction is Ok for you, press the confirm button to continue with your transaction
- You have to switch to your next wallet or metamask account which is hardhat #3 representing lender account in the transaction
- Then the approve inspection button on your UI application will automatically switch to approve & lend button
- Press the button to continue with your transaction in metamask
- If the transaction is Ok for you, press the confirm button to continue with your transaction
- You have to switch to your next wallet or metamask account which is hardhat #1 representing seller account in the transaction
- Then the approve & lend button on your UI application will automatically switch to approve & sell button
- Press the button to continue with your transaction in metamask
- If the transaction is Ok for you, press the confirm button to continue with your transaction
- BOOM the owner of the property have been transfer to you as confirmed by the UI
