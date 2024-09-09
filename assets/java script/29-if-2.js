console.log("29-if-2.js is working ...");
//selectors
const outputEl = document.querySelector(".output");

let flag = 10 ;
flag = null ;
flag = undefined;
flag = " " ;
flag = "" ;
flag = 0 ;
flag = 1 ;




if(flag){
    outputEl.textContent = "flag is true"
    outputEl.style.color = "green" ;
}

if(!flag){
    outputEl.textContent = "flag is false"
    outputEl.style.color = "red" ;
}