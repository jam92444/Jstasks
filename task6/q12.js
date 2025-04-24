// factorial of a given number
function factorial(n) {
    let fact = 1;
    for(let i = n; i>0;i--){
      fact *= i;      
    }
    return fact;
    
};
const sample = factorial(10);
console.log(sample);
