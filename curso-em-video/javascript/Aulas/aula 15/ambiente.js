let vetor = [2, 3, 5, 7]
vetor.push(1)
vetor.sort()
console.log(vetor)
console.log(`o vetor tem ${vetor.length} posições.`)
console.log(`O primeiro valor do meu vetor é ${vetor[0]}`)
let pos = vetor.indexOf(5)

if (pos == -1) {
    console.log('O valor não foi encontrado..')
} else 
{
    console.log(`O valor 5 está na posição ${pos}`)
}


