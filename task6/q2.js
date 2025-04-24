export function reverseString(word){
    let reversedString = "";
    for(let i =0 ; i < word.length; i++){
        reversedString = word[i] + reversedString;
    }
    return reversedString;

}

function palindrome(word){
    const rev = reverseString(word);
    if(rev == word){
        return true;
    }else{
        return false;
    }

}
const result = palindrome("malayalam");
console.log(result);

