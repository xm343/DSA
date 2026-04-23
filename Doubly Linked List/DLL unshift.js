class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class doublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
  unshift(value){
    const newNode = new Node(value)
    if(this.length === 0){
      this.head = newNode
      this.tail = newNode
    }
    else{
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }
    this.length++ 
    return this
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      
    }
    this.length++;
    return this;
  }
  print() {
    let temp = this.head;
    while (temp) {
      console.log(temp.value);
      temp = temp.next;
    }
  }
}


const newList = new doublyLinkedList(1)
newList.push(2)
newList.push(3)
newList.unshift(0)
newList.print()