
const paragrafos = document.querySelector('.paragrafos');

const ps = paragrafos.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body)
const backgroundColorBoby = estilosBody.backgroundColor
console.log(backgroundColorBoby)

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBoby 
    p.style.color = "#fff"
}