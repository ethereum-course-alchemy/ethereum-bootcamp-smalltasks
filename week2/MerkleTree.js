class MerkleTree {
  constructor(leaves, concat) {
    this.leaves = leaves;
    this.concat = concat;
  }
  getRoot() {
    if (this.leaves.length == 0) {
      return "";
    }
    return this.getHash(this.leaves);
  }

  getHash(arr) {
    console.log(arr);
    if (arr.length == 1) {
      return arr[0];
    }
    if (arr.length == 2) {
      return this.concat(arr[0], arr[1]);
    }
    const half = this.getMaxPower2(arr.length);
    return this.concat(
      this.getHash(arr.slice(0, half)),
      this.getHash(arr.slice(half, arr.length))
    );
  }

  getMaxPower2(size) {
    let power = 2;
    while (power * 2 < size) {
      power = power * 2;
    }
    return power;
  }

  getProof(ind) {
    console.log(`ind: ${ind}`);
    const result = [];
    this.getProofRec(ind, this.leaves, result);
    console.log(result);
    return result;
  }

  getProofRec(ind, level, result) {
    if (level.length == 1) {
      return level[ind];
    }
    if (ind % 2 == 0) {
      if (ind < level.length - 1) {
        result.push({ data: level[ind + 1], left: false });
      }
    } else {
      result.push({ data: level[ind - 1], left: true });
    }
    const next = [];
    let i = 1;
    for (; i < level.length; i += 2) {
      next.push(this.concat(level[i - 1], level[i]));
    }
    if (i == level.length) {
      next.push(level[i - 1]);
    }
    // console.log(`next: ${next.length}`)
    return this.getProofRec(Math.floor(ind / 2), next, result);
  }
}

module.exports = MerkleTree;
