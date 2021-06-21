
const numbres = [1, 2, 3, 4, 5, 6]

// como eu resolvi 

const sum = (total, el) => total + el 
const total = numbres.reduce(sum) / 6
const result = total <= 2 ? 'Reprovado' : 'Aprovado'
//console.log(total)
console.log(`O Aluno Caio tirou a nota de, ${total} e está ${result}!`)


// Modo como o professor resolveu

const xtm = (acc, el, i, array) => {
    if(i === array.length - 1){
        return (acc + el) / array.length
    }else {
        return acc + el
    }
}

const res = numbres.reduce(xtm)
console.log(res)