const TrieNode = require("./TrieNode");

class Trie {
  constructor() {
    this.root = new TrieNode(null);
  }

  insert(word) {
    const chars = word.split("");
    let cur = this.root;
    for (let c of chars) {
      const node = new TrieNode(c);
      if (cur.children[c] == undefined) {
        cur.children[c] = node;
        cur = node;
      } else {
        cur = cur.children[c];
      }
    }
    cur.isWord = true;
  }

  contains(word) {
    if (!word) {
      return true;
    }
    const chars = word.split("");
    if (!this.root.children) {
      return false;
    }
    let cur = this.root.children[chars[0]];
    let i = 1;
    while (cur != undefined && i < chars.length) {
      cur = cur.children[chars[i]];
      i++;
    }
    return cur && cur.isWord;
  }
}

module.exports = Trie;
