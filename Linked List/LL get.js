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
    get(index){
        if(index < 0 || index > this.length-1 ){
            return undefined
        }
        let temp = this.head
        for(let i=0; i<index; i++){
            temp = temp.next 
        }
        return temp
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
    let newList = new linkedList(1)
    newList.push(2)
    newList.push(3)
    newList.push(4)
    console.log(newList.get(2))

}
test()