//import expect from chai
const { expect } = require("chai");
//import ethers from hardhat
const { ethers } = require("hardhat");
//convert ethers into token
const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

describe("Escrow", () => {
  //declare variables
  let buyer, seller, inspector, lender;
  let realEstate, escrow;
  beforeEach(async () => {
    //set accounts
    [buyer, seller, inspector, lender] = await ethers.getSigners();
    //contract deploy
    const RealEstate = await ethers.getContractFactory("RealEstate");
    realEstate = await RealEstate.deploy();

    //mint
    //note we are minting for the seller account in this case
    //that is why we have realEstate.connect(seller)
    let transaction = await realEstate.connect(seller).mint(
      // token URI from IPSF
      'https://ipfs.io/ipfs/QmUsuRJyRUmeHzZxes5FRMkc4mjx35HbaTzHzzWoiRdT5G"'
    );
    //await a block
    await transaction.wait();
    //deploy Escrow contract
    const Escrow = await ethers.getContractFactory("Escrow");
    escrow = await Escrow.deploy(
      realEstate.address,
      seller.address,
      inspector.address,
      lender.address
    );
    //approve function call to approve ownership
    transaction = await realEstate.connect(seller).approve(escrow.address, 1);
    await transaction.wait();
    //list property
    transaction = await escrow
      .connect(seller)
      //parameter require for this function to be executed
      .list(1, buyer.address, tokens(10), tokens(5));
    await transaction.wait();
  });

  describe("deployment", () => {
    it("Returns nft address", async () => {
      const result = await escrow.nftAddress();
      expect(result).to.be.equal(realEstate.address);
    });
    it("Returns seller address", async () => {
      const result = await escrow.seller();
      expect(result).to.be.equal(seller.address);
    });
    it("Returns inspector address", async () => {
      const result = await escrow.inspector();
      expect(result).to.be.equal(inspector.address);
    });
    it("Returns lender address", async () => {
      const result = await escrow.lender();
      expect(result).to.be.equal(lender.address);
    });
  });

  describe("Listing", () => {
    it("Updates as listed", async () => {
      const result = await escrow.isListed(1);
      expect(result).to.be.equal(true);
    });
    it("Updates not listed", async () => {
      const result = await escrow.isListed(2);
      expect(result).not.to.be.equal(true);
    });
    it("Updates Ownership", async () => {
      expect(await realEstate.ownerOf(1)).to.be.equal(escrow.address);
    });
    it("Returns buyer", async () => {
      const result = await escrow.buyer(1);
      expect(result).to.be.equal(buyer.address);
    });
    it("Returns purchase price", async () => {
      const result = await escrow.purchasePrice(1);
      expect(result).to.be.equal(tokens(10));
    });
    it("Returns escrow amount", async () => {
      const result = await escrow.escrowAmount(1);
      expect(result).to.be.equal(tokens(5));
    });
  });
  describe("Deposits", () => {
    it("Updates contract balance", async () => {
      const transaction = await escrow
        .connect(buyer)
        .depositEarnest(1, { value: tokens(5) });
      await transaction.wait();
      const result = await escrow.getBalance();
      expect(result).to.be.equal(tokens(5));
    });
  });
  describe("Inspection", () => {
    it("Updates contract balance", async () => {
      const transaction = await escrow
        .connect(inspector)
        .updateInspectionStatus(1, true);
      await transaction.wait();
      const result = await escrow.inspectionPassed(1);
      expect(result).to.be.equal(true);
    });
  });
});
