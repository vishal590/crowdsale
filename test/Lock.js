const {expect} = require('chai');
const {ethers} = require("hardhat");

describe("Artwork smart contract tests", function(){
  this.beforeEach(async function() {
    const Artwork = await ethers.getContractFactory("Artwork");
    artwork = await Artwork.deploy("Artwork contract, ART");
  })

  it("NFT is minted successfully", async function(){

  })

  it("tokenURI is set successfully", async function() {

  })

  
})