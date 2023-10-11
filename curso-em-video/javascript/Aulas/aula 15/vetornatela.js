let vetor = [2, 3, 5, 7, 0, 9, 1]
vetor.sort()
//console.log(vetor)

/*
console.log(vetor[0])
console.log(vetor[1])
console.log(vetor[3])
console.log(vetor[4])
console.log(vetor[5])
console.log(vetor[6])
*/

for(let c = 0; c < vetor.length; c++) 
{
    console.log(`${c + 1}º elemento é ${vetor[c]}`)
}


for(pos in vetor) {
    console.log(`${Number(pos) + 1}º elemento é ${vetor[pos]}`)
}
