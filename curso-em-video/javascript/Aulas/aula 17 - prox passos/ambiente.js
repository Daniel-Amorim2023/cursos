let cliente = {nome:'josé',
 sexo:'M', 
 idade:23, 
 peso:71.5,
engordar(p = 0){
    console.log('Engordou')
    this.peso += p
}}

cliente.engordar(2)
console.log(`${cliente.nome} pesa ${cliente.peso}Kg`)