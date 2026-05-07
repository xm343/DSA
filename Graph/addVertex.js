class Graph{
    constructor(){
        this.adjacentList = {}
    }
    addVertex(vertex){
        if(!this.adjacentList[vertex]){
            this.adjacentList[vertex] = []
            return true
        }
        return false
    }
}