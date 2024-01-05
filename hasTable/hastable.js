class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  //Metodo que se transforma en el hash Function
  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  //agregar elementos a la hash table
  set(key, value) {
    const address = this.hashMethod(key);
    //console.log(address);

    if (!this.data[address]) {
      //si no existe agrega un array
      this.data[address] = [];
    }

    //si ya hay un valor o direccion existe sea gregara otro array en el bocked y
    this.data[address].push([key, value]);
    return this.data;
  }
  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address]; //este se convierte en el indice
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        //delete currentBucket[i][0] === key
        if (currentBucket[i][0] === key) {
           return currentBucket[i]
        }
      }
    }
    return undefined;
  }
}

//genera una instancia con 50 bockeds o espacios
const myHashTable = new HashTable(50);

  console.group('inicio')
  myHashTable.set("Pablito", 2020);
  myHashTable.set("casa", 200);
  myHashTable.set("shadoen", 20260);
  myHashTable.set("horse", 2020);
  myHashTable.set("Goku", 20420);
  myHashTable.set("pc", 20204);
  myHashTable.set("Pato", 2720);
  console.table(myHashTable.data);
  console.groupEnd('')

console.log(myHashTable.get("Goku"));

console.table(myHashTable.data);
