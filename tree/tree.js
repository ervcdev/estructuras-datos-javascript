/* 
10
4 20
2 8 17 170


*/


class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySeacrchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;

    } else {

      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            //validar para apgregar a la izquierda
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //vlaidar para agregar ala derecha
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
}

//reto buscar un nodo
//borrar un nodo

const tree = new BinarySeacrchTree(1);