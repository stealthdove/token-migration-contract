async function main() {

    const [deployer] = await ethers.getSigners();

    console.log(
        "Deploying contracts with the account:",
        deployer.address
    );

    const birdMigration = await ethers.getContractFactory("BirdMigration");
    // const gasPrice = await MyOcadaTestToken.signer.getGasPrice();
    // console.log(`Current gas price: ${gasPrice}`);

    // const estimatedGas = await MyOcadaTestToken.signer.estimateGas(
    //     MyOcadaTestToken.getDeployTransaction()
    // );
    // console.log(`Estimated gas: ${estimatedGas}`);
    
    // const deploymentPrice = gasPrice.mul(estimatedGas);
    // const deployerBalance = await MyOcadaTestToken.signer.getBalance();
    // console.log(`Deployer balance:  ${ethers.utils.formatEther(deployerBalance)}`);
    // console.log( `Deployment price:  ${ethers.utils.formatEther(deploymentPrice)}`);

    // if (Number(deployerBalance) < Number(deploymentPrice)) {
    // throw new Error("You dont have enough balance to deploy.");
    // }

    const Token = await birdMigration.deploy("0xE8c59b24729975033A656a17411b6F80805Fc6Da");
    const token = await Token.deployed();
    console.log("Contract deployed at:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

