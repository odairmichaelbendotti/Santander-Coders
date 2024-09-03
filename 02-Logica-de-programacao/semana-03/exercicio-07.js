//7) Dado um array de arrays, encontrar a soma de todos os números contidos nos arrays internos.


const infoArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let total = 0

for (let i = 0; i < infoArray.length; i++) {
    for (let j = 0; j < infoArray[i].length; j++){
        total += infoArray[i][j]
    }
}

console.log(total)