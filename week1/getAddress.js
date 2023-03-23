const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
  const hashed = keccak256(publicKey.slice(1));
  return hashed.slice(hashed.length - 20);
}

module.exports = getAddress;
