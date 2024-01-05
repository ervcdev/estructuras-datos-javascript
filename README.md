# estructuras-datos-javascript
Curso de estructuras de datos de javascript de platzi.

Forma de guardar la información y organizarla y poder realizar alguna operación sobre ellas.

## Memoria y como se guarddan los datos.
la informacion se guarda en los Memori Slot y este se almacena en un byte que son 8 bits, estos datos se guardan de forma aleatorea y esto sucede gracias a direcciones o addres.

## Estrucuras de datos.
* Arrays o Listas : Colección de información, se alamcena de forma ordenada.
    * push: Agrega un elemento al final.
    * pop: Borra el último elemento.
    * unshift: Agrega un elemento al principio
    * shift: Borra el primer elemento
    * splice: Agrega un elemento en una parte

Existen Arrays Dinámicos y estáticos, 

### Estaticos
javascript maneja pordefecto los arrays estáticos, si se quiere agregar un alemento al array este se clona se borra y la copia con el nuevo elemento se guarda

### Dinamicos.
si se quieren guardan 3 elementos de un array en 3 Slots de memoria javascript seleccionaria 6 ya que selecciona el doble de Slots

## Strings.
NO son una estructuras de datos pero como se guarda la información si, son inmutables y estos una vez guardados no se pueden modificar, se guardan en forma de array en memoria.

## Hash table.
Las hash se convierten a Hash Function que se convierte en el addres para poder acceder al valor.

### Metodos 
* Insert
* Search
* delete

son un problema trabajar con hash table ya que puede haber una colisión 

### Metodo get.
metodo para obtener el valor almacenado, 

## Linkend List.
consiste en un node principal que es la cabeza y seguido por mas nodos asta llegar a la cola, en forma cosecutiva.
* Metodos.
    * prepend: agrega un nodo al principio.
    * append: agrega un nodo al final.
    * lookup/search: Busca un nodo.
    * insert: inserta un nodo en la lista.
    * delete: borra un nodo.
### Singly Linked List.
esta se compone del valor y del valor del next 

## Stacks.
### Lifo: (Last in, Last Out ):
tiene la logica que la ultima cosa que se colocas arriba es la primera que sale.
 * pop: remover el ultimo elemento.
 * push: agregar al final el elemento
 * peek: Tomar el ultima elemento de la linea


## Queues.
### (FIFO: First in, First out):
tiene la logica del primero que llega es el primero que se va.
* enqueue: Agregar un elmento al final de la linea.
* dequeue: Remover al primer elemento de la linea.
* peek: Tomar el primer elemento de la linea.

## Trees.
es una ramificacion de datos, en la ramificación los numeros que van aumentado en la parte derecha y los que disminullen en la parte izquierda.

* search: buscar por un nodo.
* insert: insertar un nodo.
* delete: borrar un nodo.

## Graphs.
son Nodos interconectados entre si, se llaman Nodos(vértice) y Aristas(Bordes) que son la conexiones, (Ponderados) numero junto a alas aristas representan los pesos asignados a cada arista.

* Dirigidos: es un nodo que nos lleva a un nodo y este nos lleva a otro 
* NO dirigidos: estos estan interconectados y nos llevan a otro nodo y devuelta 
* Ponderados: en la vertice tiene un peso y este puede ser un dijito un valor o algo
* No ponderados: las vetices no tienen nada.
* Cíclico: es que si empiezo a recorrer un nodo y luego los demas nodos este regresa desde el nodo que empezo.
* Acíclico: No se puede recorrer el grado y volver al grafo del principio











