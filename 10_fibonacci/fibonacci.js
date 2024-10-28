const fibonacci = function(index) {
if(index < 0) return "OOPS";
index = parseInt(index);
let num1 = 0;
let num2 = 1;
let sum;
if(index === 0) return num1;
if(index === 1 || index === 2){
     return num2;
} else {
    for (let i = 2; i <= index; i++){
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
return num2;
}
};


// Do not edit below this line
module.exports = fibonacci;
