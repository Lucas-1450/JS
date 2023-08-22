let num = [5, 8, 4]

num[3] = 6 //Adiciona elemento criando um novo índice no final
num.push(7) // Também adiciona elemento criando um novo índice no final
num.length // Mostra tamanho
num.sort() //Coloca em ordem crescente

console.log(`Nosso vetor tem ${num.length} posições.`) // Saída: 3
console.log(`O primeiro valor do vetor é ${num[0]}`) // Saída: 5
let pos = num.indexOf(8)
if (pos == -1){
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}


//_______________________________________________________________________


