
// function declaration

function sayHello(){
    console.log('Hello!')
}
sayHello();

function sayHelloTo(name){
    console.log(`Hello ${name}!`)
}
sayHelloTo('Mike')

function returnHi(){
    return 'Hi!'
}
const greenting = returnHi()
console.log(greenting)
console.log(returnHi())

function returnHiTo(name){
    return `Hi ${name}!`
}
console.log(returnHiTo('Diogo'))