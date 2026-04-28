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

    if (this.root === null) {
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
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }
  bfs(){
    let currentNode = this.root
    let queue = []
    let result = []
    if(this.root == null) return
    queue.push(currentNode)
    while(queue.length){
        currentNode = queue.shift()
        result.push(currentNode.value)
        if(currentNode.left) queue.push(currentNode.left)
        if(currentNode.right) queue.push(currentNode.right) 
    }
    console.log(result)
  }
}

const tree = new BST();
tree.insert(67);
tree.insert(45);
tree.insert(12);
tree.insert(90);
tree.bfs()
