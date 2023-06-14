// Creating a function that return a amount of the numbers 

// const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function sum (arr) {
//     return arr.reduce((acc, i) => {
//         return acc + i;
//     }, 0);
// };

// console.log(sum(numbersArr));
      
    // new array which will returnm only Odd 

    // let odds = numbersArr.filter( => %2)
    
    // console.log(odds)
    



    const persons = [ 

    { name: "Poghos",
      lastName: "Poghosyan",
      age: 80,
      salary: 5999
        },

    { name: "Michael",
      lastName: "Jackson",
      age: 40,
      salary: 10000
      },

    { name: "Anahit",
      lastName: "Sargsyan",
      age: 30,
      salary: 7000
        }
    ];

    const nameWithLastname = persons.map(persons =>{ return {persons, fullname: persons.name + " " + persons.lastName};
});

console.log(nameWithLastname);