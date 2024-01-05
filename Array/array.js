const array = ["Ervin", "Castro", "shadown"];

class MyArray {
  constructor() {
    this.length = 0; // conteo de cuantos elementos hay en el array
    this.data = {}; // Donde se guarda la informacion que se se esta agregando
  }
  //METODOS
  //metodo que permite acceder a los datos
  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }

  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  add(index) {
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }

  addItem(index) {
    for (let i = index; i < this.length + 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

/*   addItem(item) {
    this.addValue(item);
  }
  addValue(item, index) {
    console.log('entro al addV');

    for (let i = index; i < this.data.length; i++) {
      console.log('entro al for');
        const element = array[i];
        if (element === 1) {
            console.log('entro');
            this.data[this.length] = item;
            this.length++;
            this.data[i] = this.data[i + 1];
        } else {
            console.log('no entro');
        }
        return item;
    }
    
  } */
}

const myArray = new MyArray();

console.log(myArray.push("Ervin"));
console.log(myArray.push("shadown"));
/* console.log(myArray.push("garden"));
console.log(myArray.push("goku"));
console.log(myArray.push("morphine"));

console.log(myArray);

console.log(myArray.get(1));
console.log(myArray.pop());
console.log(myArray.delete(1)); */
console.log(myArray.addItem("prueba"));
console.log(myArray);
