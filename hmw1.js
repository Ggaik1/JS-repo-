function numberQuantity(num) {
    const randomNumber = Math.floor(Math.random() *11);
    if(randomNumber < num) {
        return "You won, my generated number is " + randomNumber;
    } else if(randomNumber > num) {
        return "I won, my generated number is " + randomNumber;
    } else { 
        return 'equal', randomNumber;
    }
};

console.log(numberQuantity(10));