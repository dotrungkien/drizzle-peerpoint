var SimpleStorage = artifacts.require('SimpleStorage')
var TutorialToken = artifacts.require('TutorialToken')
var ComplexStorage = artifacts.require('ComplexStorage')
var PeerPoint = artifacts.require('PeerPoint')

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage)
  deployer.deploy(TutorialToken)
  deployer.deploy(ComplexStorage)
  deployer.deploy(PeerPoint)
}
