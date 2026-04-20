class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedList{
    constructor(value){
        let newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }
    getHead(){
        if(!this.head){
            console.log(null)
        }
        else{
            console.log('head :'+ this.head.value)
        }
    }
    getTail(){ 
        if(!this.tail){
            console.log(null)
        }
        else{
            console.log('tail :' + this.tail.value)
        }
    }
    printList(){
        let temp = this.head
        while(temp!==null){
            console.log(temp.value)
            temp = temp.next
        }
    }
    getLength(){
        console.log(this.length)
    }
    push(value){
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
    }
    pop(){
        if(!this.length) return undefined
        let temp = this.head
        let pre = this.head
        while(temp.next){
            pre = temp
            temp = temp.next
        }
        this.tail = pre 
        this.tail.next = null
        this.length--
        if(this.length===0){
            this.head = null
            this.tail = null
        }
        return temp

    }
}


function test() {
    let myLinkedList = new linkedList(1);
    myLinkedList.push(2);

    // (2) Items in LL - Returns 2 Node
    if (myLinkedList.length !== 0) {
        console.log(myLinkedList.pop().value);
    } else {
        console.log("null");
    }

    // (1) Item in LL - Returns 1 Node
    if (myLinkedList.length !== 0) {
        console.log(myLinkedList.pop().value);
    } else {
        console.log("null");
    }

    // (0) Items in LL - Returns null
    if (myLinkedList.length !== 0) {
        console.log(myLinkedList.pop().value);
    } else {
        console.log("null");
    }

}



test()


