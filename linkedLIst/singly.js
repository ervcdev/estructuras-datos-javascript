// 1 --> 2--> 3 -->4 -->null

let singlyLinkedList = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  },
};

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList {
  constructor(value) {
    //value of head
    this.head = {
      value: value,
      next: null,
    };
    //value of tail
    this.tail = this.head;

    //when instantiated, length equals one
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    console.log("inp", this.tail.next.value);
    this.tail = newNode;
    this.length++;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
    if (index >= this.length) {
      // Si el índice es mayor o igual a la longitud, añadir al final
      return this.append(value);
    }

    const newNode = new Node(value); // Crear un nuevo nodo con el valor proporcionado
    const firstPointer = this.getTheIndex(index - 1); // Obtener el nodo en la posición anterior a la posición deseada
    const holdingPointer = firstPointer.next; // Mantener una referencia al siguiente nodo en la posición deseada
    newNode.next = holdingPointer; // Establecer el siguiente nodo del nuevo nodo al nodo en la posición deseada
    firstPointer.next = newNode; // Establecer el siguiente nodo del nodo en la posición anterior al nuevo nodo
    this.length++; // Incrementar la longitud de la lista

    return this; // Devolver la lista modificada
  }

  getTheIndex(index) {
    let counter = 0; // Inicializar un contador
    let currentNode = this.head; // Inicializar el nodo actual como el nodo de la cabeza

    while (counter !== index) {
      // Recorrer la lista hasta llegar al índice deseado
      currentNode = currentNode.next; // Mover al siguiente nodo
      counter++; // Incrementar el contador
    }

    return currentNode; // Devolver el nodo en la posición deseada
  }

  //para eliminear el nodo se tiene que remplazar el next del nodo a eliminar por el next siguiente
  eliminar(index, value) {
    const deletePointer = this.getDeleteIndex(index);
  }

  getDelete(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

let myLinkedList = new MySinglyLinkedList(1);

console.log(myLinkedList);
myLinkedList.append(4);
myLinkedList.append(5);
myLinkedList.append(6);
myLinkedList.append(8);
console.log(myLinkedList);
myLinkedList.prepend(3);
myLinkedList.prepend(2);
myLinkedList.prepend(1);
console.log(myLinkedList);
