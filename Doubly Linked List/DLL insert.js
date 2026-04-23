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
  insert(index, value){
    if(index===0) return this.unshift(value)
    if(index===this.length) return  this.push(value)
    if(index<0 || index > this.length) return undefined
    const newNode = new Node(value)
    let before = this.get(index-1)
    let after = before.next

    before.next = newNode
    newNode.prev = before
    
    after.prev = newNode
    newNode.next = after
    
    this.length++ 
    return true
  }
  get(index){
    if(index < 0 || index > this.length-1) return undefined
    let temp = this.head
    for(let i=0; i<index; i++){
        temp = temp.next
    }
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
      
    }
    this.length++;
    return this;
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
console.log(newList.insert(1,56))
newList.print()