console.log("DOM : " , document)
console.log(document.querySelector("h1"));
console.log(document.querySelector("#about-us"))
console.log(document.querySelector(".list:first-of-type>li:last-of-type"));
const h1EL = document.querySelector("h1");
console.log(h1EL);
const alllistEL = document.querySelectorAll(".list");
console.log(alllistEL)
