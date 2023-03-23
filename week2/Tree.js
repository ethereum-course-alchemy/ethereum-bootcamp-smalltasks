class Tree {
  constructor() {
    this.root = null;
  }

  addNode(node) {
    if (this.root == null) {
      this.root = node;
    } else {
      this.addNodeRec(this.root, node);
    }
  }

  addNodeRec(parent, node) {
    if (parent.data > node.data) {
      if (parent.left == null) {
        parent.left = node;
      } else {
        this.addNodeRec(parent.left, node);
      }
    } else {
      if (parent.right == null) {
        parent.right = node;
      } else {
        this.addNodeRec(parent.right, node);
      }
    }
  }

  hasNode(num) {
    if (this.root == null) {
      return false;
    }
    if (this.root.data == num) {
      return true;
    } else if (this.root.data > num) {
      return this.hasNodeRec(this.root.left, num);
    }
    return this.hasNodeRec(this.root.right, num);
  }

  hasNodeRec(node, num) {
    if (node == null) {
      return false;
    }
    if (node.data == num) {
      return true;
    } else if (node.data > num) {
      return this.hasNodeRec(node.left, num);
    }
    return this.hasNodeRec(node.right, num);
  }
}

module.exports = Tree;
