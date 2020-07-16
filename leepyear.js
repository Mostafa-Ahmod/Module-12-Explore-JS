function isLeapYear(year) {
    const lepYear = year % 400;
    if (lepYear == 0){
        return  true;
    }
    else{
        return false;
    }
    
}
const check = isLeapYear(1600);
console.log(check);