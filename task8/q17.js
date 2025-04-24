//  Random Btw Min and Max

function random(min,max){
    const value = Math.floor((Math.random() * (max-min+1))+ min); 
    console.log("Random Number: ", value)
}
random(3,10);