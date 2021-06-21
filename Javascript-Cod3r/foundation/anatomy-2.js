// FUNCTION ANONYMOUS
(function (a,b,c) {
    return a + b + c
})

// FUNCTION EXPRESSION
const sum = function (a, b) {
    return a + b
}
const result = sum(10, 24)
console.log(result)

const anotherSum = sum
console.log(anotherSum(5,9))