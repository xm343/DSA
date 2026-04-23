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
  remove(index){
    if(index===0) return this.shift()
    if(index===this.length) return this.pop()
    if(index <0 || index > this.length) return undefined
    let temp = this.get(index)
    temp.prev.next = temp.next
    temp.next.prev = temp.prev
    temp.next = null;
    temp.prev = null
    this.length--
  }
  get(index){
    if(index < 0 || index > this.length-1) return undefined
    let temp = this.head
    for(let i=0; i<index; i++){
        temp = temp.next
    }
    return temp 
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
newList.remove(1)
newList.print()