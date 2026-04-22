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
    shift(){
        if(!this.head) return undefined
        let temp = this.head
        this.head = this.head.next
        if(!this.head){
            this.tail=null
        }
        temp.next = null
        this.length--
        return this
    }
    push(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
}
function test(){
    const newList = new linkedList(1)
    newList.push(2)
    newList.push(3)
    console.log(newList.shift())

}
test()