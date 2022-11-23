//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";


contract Artwork is ERC721{

    uint256 public tokenCounter;    // global variable

    constructor(
        string memory name,
        string memory symbol
    ) ERC721(name, symbol){
        tokenCounter = 0;
    }

    function mint(string memory _tokenURI) public {
        _safeMint(msg.sender, tokenCounter);
        _setTokenURI(tokenCounter, _tokenURI);

        tokenCounter++;
    }

}
