const myArr = ['Milana', 'Ani', 'Zohrab'];

let selectCar = { 
    name: "BMW",
    color: "Black"
};

let selectCar1 = { 
    name: "Mercedes",
    color: "White"
};

let selectCar2 = { 
    name: "Zap",
    color: "Purple"
};

// console.log(myArr[0] + " loves " + selectCar.color + " " + selectCar.name);

function findName(prostoArray, personName){
    let name;
    for(let i = 0; i < prostoArray.length; i++){
        if(prostoArray[i] === personName){
            console.log("Yes " + personName + " is exist"); 
            name = prostoArray[i];
        }
    }
    if(name === undefined){
        console.log(personName + " is not exist");
    }
};

findName(myArr, 'Ani');

// const shoppingCart = ['Milk', 'Bread', 'Butter', 'Cheese', 'Apple', 'Book', 'Ice Cream'];

// function checkItemInShoppingCart(arr, item) {
//     let arrItem;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === item) {
//             console.log("This " + item + " is alredy include in my shopping cart.");
//             arrItem = arr[i];
//         }
//     }
//      if(arrItem === undefined) {
//             console.log("I am adding " + item + " to my shopping cart.");
//         }
//     }


// checkItemInShoppingCart(shoppingCart, "Watermelon");

// checkItemInShoppingCart(shoppingCart, "Cheese");