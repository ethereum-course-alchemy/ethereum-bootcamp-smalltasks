const SHA256 = require("crypto-js/sha256");
const TARGET_DIFFICULTY =
  BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
  // TODO: add transaction to mempool
  mempool.push(transaction);
}

function mine() {
  // TODO: mine a block
  const next = { id: blocks.length };
  const trans = [];
  const size = Math.min(MAX_TRANSACTIONS, mempool.length);
  for (let i = 0; i < size; i++) {
    trans.push(mempool.pop(i));
  }
  next.transactions = trans;
  const hash = SHA256(JSON.stringify(next));
  blocks.push({ ...next, hash: hash });
}

module.exports = {
  TARGET_DIFFICULTY,
  MAX_TRANSACTIONS,
  addTransaction,
  mine,
  blocks,
  mempool,
};
