/* 
  2 - 0
 / \
1 - 3
*/

// primera representacion edge List

const graph0 = [
    [0,2],
    [2,3],
    [2,1],
    [1,3]
]

//adjacent List
//               0     1       2       3                 
const graph1 = [[2], [2,3], [0,1,3], [1,2]];

//objeto o hash table
const graph2 = {
    0: [2],
    1: [2,3],
    2: [0,1,3],
    3: [1,3]
}

//adjacent matrix
const graph3 = [
    //se representa con 0 y 1,
    [0,0,1,0],//indice 0
    [0,0,1,1],//indice 1
    [1,1,0,1],//indice 2
    [0,1,1,0]//indice 3

]

//forma de objeto
const graph4 = [
    //se representa con 0 y 1,
    0:[0,0,1,0],
    1:[0,0,1,1],
    2:[1,1,0,1],
    3:[0,1,1,0]
]






