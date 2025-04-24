// reverse integer

function palindromeInt(n){
    let palin = 0;
   temp = n; // 232
    while( n >0){
        let digit = n%10; 
        palin = (palin *10) + digit ; 
        n = Math.floor(n/10); 
        
    }
    return palin == temp ? "palindrome" : "not palindrome";
}

const result = palindromeInt(232);
console.log(result);
