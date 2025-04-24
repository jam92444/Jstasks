// Return uppercase initials from a full name.

function capitalizeName(name){
    const nameArr = name.split(" ");
    let final = "";
    let i =0 ;
    while(i<nameArr.length){
        let firstLetter = nameArr[i][0].toUpperCase();
        final += firstLetter;
        i++;
    }
    return final;
}
console.log(capitalizeName("yusuf Jamal"))