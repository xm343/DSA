function bfs(){
    let currentNode = this.root 
    let queue = []
    let result = []
    queue.push(currentNode)
    while(queue.length){
        currentNode = queue.shift()
        result.push(currentNode.value)
        if(currentNode.left) result.push(currentNode.left)
        if(currentNode.right) result.push(currentNode.right)
    }
    return
} 