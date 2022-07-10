const Signer = artifacts.require("../contracts/DocumentSigner.sol");

module.exports = function (deployer) {
  deployer.deploy(Signer);
};
