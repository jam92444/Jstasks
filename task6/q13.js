// swapping  two numbers without third variable
function swapping(a,b){
    a = a+b;
    b = a-b;
    a = a-b;
    return `a = ${a},b = ${b}`;
}

const result = swapping(-40,30);
console.log(result);
