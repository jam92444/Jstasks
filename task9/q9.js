function remove(str){
    let result = str.split(/[ ,;]+/);
    return result;
}
const input = "apple,banana orange;grape";
const res = remove(input);
console.log(res)