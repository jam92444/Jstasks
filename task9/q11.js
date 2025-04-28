function checkValidNumber(phone){
    let number = String(phone);
    if(number.startsWith(91)){
      
        if(number[2]>5 && number[2]<10 &&number.length == 12){
            return `${number} is valid indian number.`
        }else{
            return "Not a valid input number"
        }
    }else{
        return "Not a valid indian code."
    }
}

const res = checkValidNumber(915999999999)
console.log(res)