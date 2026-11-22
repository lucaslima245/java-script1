let num = [5, 8, 3, 9, 3]

console.log (`o vetor tem ${num.length} posicoes`)

for (let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
} 

console.log("----------------------")

num.sort() // organiza a array em ordem

for (let pos in num) {
    console.log(num[pos])
}
console.log("-------------------")

let a = num.indexOf(3) // vai mostrar a posicao do item, nesse caso 3 ta na posicao 0  
console.log(`o valor ${a}`)