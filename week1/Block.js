const SHA256 = require("crypto-js/sha256");

class Block {
  constructor(_data) {
    this.data = _data;
  }

  toHash() {
    return SHA256(this.data + this.previousHash);
  }
}

module.exports = Block;
