function convertInPrice(amount,currency="INR",  locale="en-US"){
    return new Intl.NumberFormat(locale,{
        style:'currency', //tells format it as a currency 
        currency:currency, //used to specify the symbol
    }).format(amount); //take amount and return the formatted currency string 
}

const price = 1231235765765757632 ;

const formattedPrice = convertInPrice(price);
console.log(formattedPrice);

