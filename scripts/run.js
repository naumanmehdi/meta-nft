const hre = require("hardhat");

async function main() {
  const HelloNFT = await hre.ethers.getContractFactory("HelloNFT");
  const world = await HelloNFT.deploy();

  await world.deployed();

  console.log("HelloNFT deployed to:", world.address);

  let txn = await world.mintNFT();
  await txn.wait();
  
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });