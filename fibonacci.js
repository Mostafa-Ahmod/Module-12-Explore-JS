//iterative way
// febo[2] = febo[2-1] + febo[2-2];
// febo[3] = febo[3-1] + febo[3-2];
// febo[4] = febo[4-1] + febo[4-2];
// febo[5] = febo[5-1] + febo[5-2];
// febo[6] = febo[6-1] + febo[6-2];
// console.log(febo);
function febonacci(n){
    let febo = [0,1];
    for(let i = 2; i <= n; i++){
        febo[i] = febo[i - 1] + febo [i- 2];
       
    }  
    return febo;
}
let result = febonacci(12);
console.log(result);

// console.log(febo);