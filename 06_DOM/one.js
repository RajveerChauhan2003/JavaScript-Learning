const div = document.querySelector("#title")

// let words = div.textContent
// let words1 = div.innerText
// console.log(words + " " + words1)
// const divs = document.querySelectorAll('div')
// console.log(divs)
let p = document.createElement('p')
p.setAttribute('class' , 'para')
p.innerText = " Hello I forgot to watch one Piece"
div.appendChild(p)
