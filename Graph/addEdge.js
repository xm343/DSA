class Graph{
    constructor(){
        this.adjacentList = {}
    }
    addVertex(vertex){
        if(!this.adjacentList[vertex]){
            this.adjacentList[vertex] = []
        }
    }
    addEdge(vertex1, vertex2){
        if(this.adjacentList[vertex1] && this.adjacentList[vertex2]){
            this.adjacentList[vertex1].push(vertex2)
            this.adjacentList[vertex2].push(vertex1)
            return true
        }
        return false
    }
}

const myGraph = new Graph
myGraph.addVertex(1)
myGraph.addVertex(2)
console.log(myGraph.addEdge(1,2))