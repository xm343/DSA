class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class queue{
    constructor(value){
        const newNode = new Node(value)
        this.first = newNode
        this.last = newNode
        this.length = 1
    }
    enqueue(value){
        const newNode = new Node(value)
        if(this.length===0){
            this.first = newNode
            this.last = newNode
        }
        else{
            this.last.next = newNode
            this.last = newNode
        }
        this.length++
    }
    print(){
        let temp = this.first
        while(temp !== null){
            console.log(temp.value)
            temp = temp.next
        }
    }
}

const newQueue = new queue(1)
newQueue.enqueue(2)
newQueue.enqueue(3)
newQueue.print()