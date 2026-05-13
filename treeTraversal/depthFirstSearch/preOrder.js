function DFSpreOrder(){
    let result = []
    function traverse(currentNode){
        result.push(currentNode.value)
        if(currentNode.left) traverse(currentNode.left)
        if(currentNode.right) traverse(currentNode.right)
    }
    traverse(this.root)
}