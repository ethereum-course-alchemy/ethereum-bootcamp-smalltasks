function verifyProof(proof, node, root, concat) {
  let cur = node;
  for (let next of proof) {
    cur = next.left ? concat(next.data, cur) : concat(cur, next.data);
  }
  return cur === root;
}

module.exports = verifyProof;
