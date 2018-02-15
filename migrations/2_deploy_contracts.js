var AuctionItem = artifacts.require("./AuctionItem.sol"); 

var name = 'aaa'
console.log(typeof(name))
module.exports = function(deployer) {
  deployer.deploy(AuctionItem, name);
};

