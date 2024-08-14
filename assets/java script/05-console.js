var firtName = 'john';
var LastName = 'Doe';
var $age = "25";
var _profession ='softvare eng' ;
var is_married = false ;
var AUTH_SECRET = ' asdaasd' ;

console.group('Personal Information')
console.log(firtName);
console.warn(LastName);
console.error($age);
console.groupEnd();

console.group('personal information2')
console.log(firtName);
console.warn(LastName);
console.error($age);
console.groupEnd();