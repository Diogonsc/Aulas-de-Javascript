// function expression
const incremento1 = function(n) {
    return n + 1
}
console.log(incremento1(1))

// Arrow Function is always anonymous
const incremento2 = (n) => {
    return n + 1
}
console.log(incremento2(5))

const incremento3 = n => {
    return n + 1
}
console.log(incremento3(23))

const incremento4 = n =>  n + 1
console.log(incremento4(199))

const soma = (a,b) => {
    return a + b 
}
console.log(soma(3,8))