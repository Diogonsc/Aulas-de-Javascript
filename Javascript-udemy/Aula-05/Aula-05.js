
const  nomes = ['Diogo', 'Luana', 'Enzo'];

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

for(let i in nomes) {
    console.log(nomes[i]);
}

for (let valor of nomes) {
    console.log(valor);
}

