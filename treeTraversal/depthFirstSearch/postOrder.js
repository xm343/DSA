function DFSpreOrder(){
    let result = []
    function traverse(currentNode){
        if(currentNode.left) traverse(currentNode.left)
        if(currentNode.right) traverse(currentNode.right)
        result.push(currentNode.value)
    }
    traverse(this.root)
}