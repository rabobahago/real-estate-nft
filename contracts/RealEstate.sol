//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

//real estate is inhe.. from ERC721URIStorage
contract RealEstate is ERC721URIStorage {
    //import Counters.Counter from Counters openzeppelin library
    using Counters for Counters.Counter;
    //declare _tokenIds to be of type Counters.Counter
    Counters.Counter private _tokenIds;

    //constructor run only once to set default parameter in a contract
    constructor() public ERC721("Real Estate", "RM") {}

    //mint function: let someone mint with a particular token URI
    //that is the actual metadata
    function mint(string memory tokenURI) public returns (uint256) {
        //add 1 each time, from the beginning it started with 0 after this
        //expression, it will increase to 1
        _tokenIds.increment();
        //declare new item id which is set to the current id
        //that is the one we increase above
        uint256 newItemId = _tokenIds.current();
        //_mint function call from ERC721Storage library and msg.sender is
        //the person current interacting with the contract, and the second
        //parameter is the new item id created above
        _mint(msg.sender, newItemId);
        //we set the token URI where new Item Id will be first parameter
        //while the second parameter is the token URI: that is the metadata.
        //_setTokenURI comes from ERC721URIStorage
        _setTokenURI(newItemId, tokenURI);
        //return the new item
        return newItemId;
    }

    function totalSupply() public view returns (uint255) {
        return _tokenIds.current();
    }
}
