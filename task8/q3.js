function baseConversion(number){
    const abbr = [" ", "K", "M", "B", "T"];
    const min =1000;
    let i =0;
    while(number >= min && i < abbr.length -1){ 
        number /= min;
        console.log(number); //10
        
        i++; //i=1
    }
    return number.toFixed(2) + abbr[i];
}
console.log(baseConversion(100000))
