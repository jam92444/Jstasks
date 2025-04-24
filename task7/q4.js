greet();
function greet() {
 console.log("Hello!");
}
sayHi(); // reference error because let variable is not hoisted also named function cannot be hoisted. 
let sayHi = function () {
 console.log("Hi!");
};

//