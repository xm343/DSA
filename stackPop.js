class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class stack{
    constructor(value){
        const newNode = new Node(value)
        this.top = newNode
        this.length = 1
    }
    pop(){
        if(this.length === 0) return undefined
        let temp = this.top
        this.top  = this.top.next
        temp.next = null
        this.length-- 
    }
    push(value){
        const newNode = new Node(value)
        if(this.length===0){
            this.top = newNode
        }
        else{
            newNode.next = this.top
            this.top = newNode
        }
        this.length++
    }
    print(){
        let temp = this.top
        while(temp!==null){
            console.log(temp.value)
            temp = temp.next
        }
    }
}

const newStack = new stack(1)
newStack.push(2)
newStack.push(3)
newStack.pop()
newStack.print()

