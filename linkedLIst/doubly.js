class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }

}

class MyDoublyLinkedList{
    constructor(value){
        this.head = {
            value: value,
            next: null,
            prev:null
        };
        this.tail = this.head;
        this.length = 1;
    }

    //agregar un nuevo nodo a la cola
    append(value) {
        const newNode = new Node(value);

        newNode.prev = this.tail;
        console.log('prev =>',this.tail.value);
        this.tail.next = newNode;
        console.log('tail.next =>', this.tail.next.value);
        this.tail = newNode;
        console.log('tail => ', this.tail);
        this.length++;

        return this;
 
    }
}

let myDoublyLinkedList = new MyDoublyLinkedList(1);
myDoublyLinkedList.append(2);
console.log('doublYLinked',myDoublyLinkedList);
//myDoublyLinkedList.append(3);
