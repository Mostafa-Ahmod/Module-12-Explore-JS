// 0! = 1 altime 0 factorial means 1;
// 2! = 1*2;
// 3! = 1*2*3;
// 4! = 1*2*3*4;
// 5! = 1*2*3*4*5;
// 6! =  5!*6;
// 7! =  6! *7;
// 8! =  7! *8;
// 9! =  (9-1)!* 9; 
// n! =  (n-1)! * n;

function factorial(n) {
     if(n==0){
          return 1;
     }
     else{
        return n * factorial(n-1);  
     }
}
let result = factorial(10);
console.log(result);