let a = 10;
{
 let a = 20;
 {
 const a = 30;
 console.log(a);
 }
 console.log(a);
}
console.log(a); 