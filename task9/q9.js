function remove(str){
    let result = str.split(" ").join(" ").split(";").join(" ").split(",").join(" ").split(" ");
    let sample1 = []
    for(let i=0 ; i<result.length;i++){
        if(result[i]!==""){
            sample1.push(result[i])
        }

    }
    return sample1;
}
const input = "apple,banana orange;grape";
const res = remove(input);
console.log(res)