# NextJS Smartcontract Lottery (Raffle)

![App](images/readme-app.png)

[Example App here!](https://fancy-dream-3458.on.fleek.co/)
[Example App on IPFS here!](ipfs://Qme4KacFx21y6pYuTC6veAU2usryXB3fNWqLkX3a2hMvDe)

Built with ❤️ using:
ReactJS
Solidity
Chainlink
Moralis
web3uikit
Ethers
Hardhat
IPFS

- [NextJS Smartcontract Lottery (Raffle)](#nextjs-smartcontract-lottery-raffle)
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

-[metamask] metamask extension install on your chrome browser

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

- Get the RPC_URL of your hh node (usually `http://127.0.0.1:8545/`)
- Go to your wallet and add a new network. [See instructions here.](https://metamask.zendesk.com/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC)
  - Network Name: Hardhat-Localhost
  - New RPC URL: http://127.0.0.1:8545/
  - Chain ID: 31337
  - Currency Symbol: ETH (or GO)
  - Block Explorer URL: None
