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
        this.length=1
    }
}