function DFSpreOrder(){
    let result = []
    function traverse(currentNode){
        if(currentNode.left) traverse(currentNode.left)
        result.push(currentNode.value)
        if(currentNode.right) traverse(currentNode.right)
    }
    traverse(this.root)
}