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
    dequeue(){
        let temp = this.first
        if(this.length===0) return undefined
        if(this.length === 1){
            this.first = null
            this.last = null
        }
        else{
            this.first= this.first.next
            temp.next = null
        }
        this.length--
        return temp
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
        return this
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
newQueue.dequeue()
newQueue.print()
