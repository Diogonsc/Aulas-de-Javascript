const numbers = [1, 2, 3, 4, 5, 6]

const maiorQueZero = el => el > 0
const maiorQueDez = el => el > 10
const even = el => el % 2 === 0


console.log(numbers.filter(el => el > 0))
console.log(numbers.filter(maiorQueZero))
console.log(numbers.filter(maiorQueDez))
console.log(numbers.filter(even))



const students = [
    { name: 'Diogo', score: 6.1},
    { name: 'Luana', score: 7.2},
    { name: 'Enzo', score: 9.3},
    { name: 'Julia', score: 9.1}

]

const greatStudent = student => student.score >= 9
const badStudents = student => student.score <= 9

console.log(students.filter(greatStudent))
console.log(students.filter(badStudents))