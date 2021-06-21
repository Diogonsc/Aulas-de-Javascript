
const numbers = [1, 2, 3, 4, 5, 6]

const numbersV2 =  numbers.map((el)=> {
   return el * 2
})
console.log(numbersV2)
//////////////////////////////

const students = [
    {name: 'jake', score: 6.4},
    {name: 'Susan', score: 8.6},
    {name: 'Emma', score: 9.4},
    {name: 'Peter', score: 9.1}
]

const scoreStudents = el => el.score

const result = (
    students
    .map(scoreStudents)
    .map(Math.ceil)
    )

    console.log(result, students)