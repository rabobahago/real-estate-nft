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

    //set addresses we pass to the constructor to the addresses in the state
    //variables
    constructor(
        address _nftAddress,
        address payable _seller,
        address _lender,
        address _inspector
    ) public {
        nftAddress = _nftAddress;
        seller = _seller;
        lender = _lender;
        inspector = _inspector;
    }
}
