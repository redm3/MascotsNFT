
const hre = require("hardhat");

async function main() {


  const MascotsNFT = await hre.ethers.getContractFactory("MascotsNFT");
  const mascotsNFT = await MascotsNFT.deploy();

  await mascotsNFT.deployed();

  console.log("MascotsNFT deployed to:", mascotsNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
