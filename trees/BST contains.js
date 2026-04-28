class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root == null) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while (true) {
      if (newNode.value === temp.value) return undefined;
      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else if (newNode.value > temp.value) {
        if (temp.right == null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }
  contains(value) {
    if (this.root == null) return false;
    let temp = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
  }
  bfs(){
    let currentNode = this.root
    if(currentNode == null) return undefined
    let queue = []
    let result = []
    queue.push(currentNode)
    while(queue.length){
        currentNode = queue.shift()
        result.push(currentNode.value)
        if(currentNode.left) queue.push(currentNode.left)
        if(currentNode.right) queue.push(currentNode.right)
    }
    console.log (result)
  }
}


const tree = new BST();
tree.insert(67);
tree.insert(45);
tree.insert(12);
tree.insert(90);
tree.bfs()
console.log(tree.contains(12))