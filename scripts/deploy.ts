import hre from "hardhat";

// Deploying contracts with account:  0x7933AD42cD4b6e8CcA8253dB908116540CB15152
// Account balance:  592020031818077498
// WavePortal address:  0x01A2d40d2C4f1F968C419397451798Cb3f1B8bD5

const main = async () => {
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy({
    value: hre.ethers.utils.parseEther("0.001"),
  });

  await waveContract.deployed();

  console.log("WavePortal address: ", waveContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();