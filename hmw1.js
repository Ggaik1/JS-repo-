function numberQuantity(num) {
    const randomNumber = Math.random();
    let myNumber = num 
    if(randomNumber < myNumber) {
        return "Our data includes more cuantity than  ", randomNumber;
    } else if(randomNumber > myNumber) {
        return "Your " + randomNumber + " data includes more quantity than ours.";
    } else { 
        return 'equal', randomNumber;
}
};

console.log(numberQuantity(0));