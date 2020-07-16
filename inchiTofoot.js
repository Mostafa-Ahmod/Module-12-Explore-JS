// module 14
//using Normal Way
/*
var inchi = 156;
var feet = inchi/12;
 console.log(feet);
*/
 //using functions
function inchiTofeet(inchi) {
     var feet = inchi/12;
     return feet;
}
var clients = [48,288,300];                 //declering arry

var myFeets = inchiTofeet(clients[0]);      //using arry
var monFeets = inchiTofeet(288);
var broFeets = inchiTofeet(300);

console.log(myFeets);
console.log(monFeets);
console.log(broFeets);