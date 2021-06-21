

for ( let i = 0; i <= 5; i++ ) {
    console.log(`Linha ${i}`)
}

for ( let i = 0; i <= 10; i++ ) {
    const parouimpar = i % 2 === 0 ? 'Par' : 'Ímpar'
    console.log(i ,parouimpar)
}


const frutas = [ "Maça", "Pêra", "Uva", "Laranja"]
for ( let i = 0; i < frutas.length; i++) {
    console.log(`ìndice ${i}`, frutas[i])
}