class Node {
    constructor(value) {
        this.value = value;
        this.next = null;

    }
} 

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0; 
    }

    peek(){class Node {
        constructor(value) {
            this.value = value;
            this.next = null;
    
        }
    } 
    
    class Stack {
        constructor(){
            this.top = null;
            this.bottom = null;
            this.length = 0; 
        }
    
        peek(){
            return this.top;
        }
        push(value) {
            const newNode = new Node(value);
            //validar que estructura no este vacia
            if(this.length == 0){
                this.top = newNode;
                this.bottom = newNode;
            }else{
                //se guarda el top actual para que no remplace la referencia del pointer
                const holdingPonter = this.top;
                this.top = newNode;
                this.top.next = holdingPonter;
    
            }
            this.length++;
            return this;
        }
    
    }
    
    const myStack = new Stack();
    console.log(myStack);
    console.log(myStack.push(1));
    console.log(myStack.push(2));
    console.log(myStack.push(3));
    console.log(myStack.push(4));
    console.log(myStack.this.length.value);
    
        return this.top;
    }
    push(value) {
        const newNode = new Node(value);
        //validar que la estructura no este vacia
        if(this.length == 0){
            this.top = newNode;
            this.bottom = newNode;
        }else{
            //se guarda el top actual para que no remplace la referencia del pointer
            const holdingPonter = this.top;
            this.top = newNode;
            this.top.next = holdingPonter;

        }
        this.length++;
        return this;
    }

}

const myStack = new Stack();
console.log(myStack);
console.log(myStack.push(1));
console.log(myStack.push(2));
console.log(myStack.push(3));
console.log(myStack.push(4));
console.log(myStack.top.next.value);

//crear metodo pop, toca guardar el valor anterior y este dejarlo como top.





