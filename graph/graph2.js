//json List
class Graph {
    constructor() {
        this.nodes = 0;
        this.adjacentList = {};
    }
    //crecion de metodos.
    //agregacion de los nodos o vertices
    addVertex(node){
        //
        this.adjacentList[node] = [];
        this.nodes++;
    }
    addEdge(node1,node2){
        this.adjacentList[node1].push(node2)
        this.adjacentList[node2].push()
    }
}
const myGraph = new Graph();