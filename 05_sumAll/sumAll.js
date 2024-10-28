const sumAll = function(firstElement, secondElement) {

    if(firstElement < 0 || secondElement < 0) return "ERROR";
    if(Number.isInteger(firstElement) === false || Number.isInteger(secondElement) === false) return "ERROR";
        


let sum = 0;

if(firstElement <= secondElement){
    for ( let i = firstElement; i <= secondElement; i++){
        sum += i; 
    }
} else {
    for ( let i = secondElement; i <= firstElement; i++){
        sum += i; 
    }
 }
return sum;
};

// Do not edit below this line
module.exports = sumAll;
