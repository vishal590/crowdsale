const {expect} = require('chai');
const {ethers} = require("hardhat");

describe("Artwork smart contract tests", function(){
  this.beforeEach(async function() {
    const Artwork = await ethers.getContractFactory("Artwork");
    artwork = await Artwork.deploy("Artwork contract, ART");
  })

  it("NFT is minted successfully", async function(){
    [account1] = await ethers.getSigners();

    expect(await artwork.balanceOf(account1.address)).to.equal(0);

    const tokenURI = "https://opensea-creatures-api.herokuapp.com/api/creature/1";
    const tx = await artwork.connect(account1).mint(tokenURI);

    expect(await artwork.balanceOf(account1.address)).to.equal(1);

  })

  it("tokenURI is set successfully", async function() {

  })

  
})