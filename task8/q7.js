function charModify(str,n){

    if(str[0] == str[str.length -1]){
        const newString = str.padEnd(n+str.length,str[str.length -1]);
        console.log("New String Middle Character:",newString[Math.floor((newString.length-1)/2)])
    }
    else{
      console.log("not a same character.")
    }

}
charModify("mom",3)