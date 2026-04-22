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
  }push(value) {
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
  pop(){
    if(!this.length===0) return undefined
    let temp = this.tail
    if(this.length===1){
        this.head = null
        this.tail=null
    }
    else{
        this.tail = this.tail.prev
        this.tail.next = null
        temp.prev = null
    }
    this.length--
    return temp
  }
  print() {
    let temp = this.head;
    while (temp) {
      console.log(temp.value);
      temp = temp.next;
    }
  }
}

function test(){
    const newList = new doublyLinkedList(1)
    newList.push(2)
    console.log(newList.pop())
}
test()