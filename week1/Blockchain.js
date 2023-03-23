const Block = require("./Block");

class Blockchain {
  constructor() {
    this.chain = [new Block("Genesis!")];
  }

  addBlock(block) {
    block.previousHash = this.chain[this.chain.length - 1].toHash();
    this.chain.push(block);
  }

  isValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const prev = chain[i].previousHash.toString();
      const calculated = chain[i - 1].toHash().toString();
      if (prev !== calculated) {
        return false;
      }
    }
    return true;
  }
}

module.exports = Blockchain;
