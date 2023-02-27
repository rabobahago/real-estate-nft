//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

//interface IERC721
interface IERC721 {
    function transferFrom(
        address _from,
        address _to,
        uint256 _id
    ) external;
}

contract Escrow {
    //state variables
    // nftAddress address becasue we want to store
    //the address of this transaction
    address public nftAddress;
    //seller address state variable with payable keyword
    //so that this address can receive ethers
    address payable public seller;
    //lender address state variable
    address public lender;
    //inspector address state variable
    address public inspector;

    //list state variables
    mapping(uint256 => bool) public isListed;
    //purchase price
    mapping(uint256 => uint256) public purchasePrice;
    mapping(uint256 => uint256) public escrowAmount;
    mapping(uint256 => address) public buyer;

    //set addresses we pass to the constructor to the addresses in the state
    //variables
    constructor(
        address _nftAddress,
        address payable _seller,
        address _inspector,
        address _lender
    ) public {
        //set the addresses to addresses passed to the constructor
        nftAddress = _nftAddress;
        seller = _seller;
        inspector = _inspector;
        lender = _lender;
    }

    //listing a properties
    function list(
        uint _nftID,
        uint256 _purchasePrice,
        address _buyer,
        uint256 _escrowAmount
    ) public {
        //ERC721(nftAddress) get the copy of the RealEstate NFT.
        //ERC721 standard interface above export this transferFrom method
        //I pass in the contract address, then get the transfer from method
        //which receive three arguments: from, to and the nft ID.
        //In summary we transfer the owner of RealEstate to this Escrow contract
        //msg.sender is the seller or person current interacting with the contract
        IERC721(nftAddress).transferFrom(msg.sender, address(this), _nftID);
        //update the listed mapping right here
        isListed[_nftID] = true;
        //purchase Price
        purchasePrice[_nftID] = _purchasePrice;
        //buyer address
        buyer[_nftID] = _buyer;
        //escrow Amount
        escrowAmount[_nftID] = _escrowAmount;
    }
}
