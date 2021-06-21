// For in - Lê os indices ou chaves do objeto 
//                 0        1       2      3
 const frutas = ['Maçã', 'Banana','Pêra', 'Uva']

for(let i in frutas) {
    console.log(i)
}


const pessoa = {
    nome: 'Diogo', 
    sobreNome: 'Santos',
    idade: 34
}

for(let chave in pessoa) {
    console.log(chave, pessoa[chave])
}