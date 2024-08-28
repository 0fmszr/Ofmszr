// Type Conversions
// string to number=> Number( ) parseInc() , parseFloat() ,unaryplus (+)
//anyting to string String()
//anyting to boolean Boolean() !! 0 false null nan undefined this guys gonna be false
const money ="100";
const num = 15
const asd = Number(money) + num;
const asda = +money + num;
console.log(asd);
console.log(asda);
const baba = "123abc";
console.log(Number(baba));
const mon = 15;
const num1= 20;
const non = String(mon) + num1;
console.log(non)
const money1 = 5;
const money2 = -20;
const money3 = 0;
const money4 = "as";
console.log(Boolean(money1));
console.log(Boolean(money2));
console.log(!!(money3));
console.log(Boolean(money4))
