// primitive datas
let x = 10;
let y = x;
console.log(x==y)
console.log(y)
x = 20;
console.log(y)
console.log(x == y)
console.log(x)

// reference datas
let universe =  {
    star : "sun" ,
    color : "blue"
}
let universe2 = universe;
let universe3 =  {
    star : "sun" ,
    color : "blue"
}
console.log(universe==universe2)
console.log(universe==universe3)
console.log(universe.star)
universe2.star = "alhpa"
console.log(universe.star)
