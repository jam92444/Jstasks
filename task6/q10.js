// fibanocci seires

function fibanocci(number){
    let first = 0 ;
    let second =1 ;
    console.log(first);
    console.log(second);
    
    for(let i=0; i < number ; i++){
        let third = first + second;
        console.log(third);
        first =second;
        second = third;

    }
   
}

fibanocci(10);

