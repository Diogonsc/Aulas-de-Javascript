
const pessoa = {
    nome: 'Diogo',
    sobreNome: 'Nascimento',
    idade: 34,
    endereco:{
        rua: 'Aurisrela',
        numero: 402,
        apto: 103,
    }
}

// Atribuição via desestruturação
const {endereco: {rua, numero}} = pessoa
console.log(rua, numero)
