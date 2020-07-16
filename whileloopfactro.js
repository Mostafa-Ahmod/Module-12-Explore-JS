// let i = 1;
// let factorial = 1;
// while (i <= 20){
//      factorial = factorial *i;
//     //  console.log(factorial);
//      i++;
// }
// console.log(factorial);

function factorial(n) {
    let i = 1;
    let factors = 1; 
    while(i <=n){
         factors = factors * i;
         i++;
    }
    
    return factors;
}
let result = factorial(10);
console.log(result);