const array = ['Ervin', 'Castro', 'shadown']

class MyArray {
    constructor(){
        this.length = 0;
        this.data = {}
    }
    //metodo que permite acceder a los datos
    get(index){
        return this.data[index]
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
}
 
const MyArray = new MyArray();








