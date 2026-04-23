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
  shift(){
    if(this.length===0) return undefined
    let temp = this.head
    if(this.length===1){
        this.head = null
        this.tail = null
    }
    else{
        this.head = this.head.next
        this.head.prev = null
        temp.next = null
    }
    this.length--
    return temp
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
      this.length++;
    }
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
newList.shift()
newList.print()