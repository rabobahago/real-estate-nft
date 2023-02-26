//import expect from chai
const { expect } = require("chai");
//import ethers from hardhat
const { ethers } = require("hardhat");
//convert ethers into token
const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

describe("Escrow", () => {
  let buyer, seller, inspector, lender;
  let realEstate, escrow;
  it("saves the addresses", async () => {
    //set accounts
    [buyer, seller, inspector, lender] = await ethers.getSigners();
    //contract deploy
    const RealEstate = await ethers.getContractFactory("RealEstate");
    realEstate = await RealEstate.deploy();

    //mint
    //note we are minting for seller account in this case
    const transaction = await realEstate
      .connect(seller)
      .mint(
        'https://ipfs.io/ipfs/QmUsuRJyRUmeHzZxes5FRMkc4mjx35HbaTzHzzWoiRdT5G"'
      );
    await transaction.wait();
    const Escrow = await ethers.getContractFactory("Escrow");
    escrow = await Escrow.deploy(
      realEstate.address,
      seller.address,
      inspector.address,
      lender.address
    );
    const result = await escrow.nftAddress();
    expect(result).to.be.equal(realEstate.address);
  });
});
