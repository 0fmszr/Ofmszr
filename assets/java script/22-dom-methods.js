//DOM PROPERTIES AND METHODS
//Inner text
//Inner html
const h2EL = document.querySelector("#article1 h2")
console.log(h2EL)
console.log(h2EL.innerText)
h2EL.innerText ="EYYOOO0<em> OO </em>";
h2EL.innerHTML ="EYYOOO0<em> OO </em>";
const pEl =document.querySelector("p")
console.log(pEl.innerHTML)
console.log(pEl.innerText)
const liEl = document.querySelector(".list")

//-------------------------------
console.log(pEl.textContent)
liEl.innerHTML=`
<li>1</li>
<li>2</li>
<li>3</li>
<li>4</li>
`

