let cars = [
  {
    "color": "purple",
    "type": "minivan",
    "capacity": 7
  },
  {
    "color": "red",
    "type": "station wagon",
    "capacity": 5
  },
  {
    "color": "red",
    "type": "cabrio",
    "capacity": 2
  }
];
/* subtask1
function smalllarge(capacity) {
  if (capacity <= 2) {
  return 'small';
  } else {
   return 'large';
  }
};
console.log(smalllarge(cars[0].capacity)); 
*/

///subtask2
function bigger(capacity) {
  if (capacity <= 2) {
  return 'small';
  } else {
   return 'large';
  }
};
console.log(smalllarge(cars[0].capacity)); 



// Write a function that will get objects from above array as arguments and check
// if capacity <= 2, will return 'Small, otherwise will return 'Large'
// Call function 3 times with each objects


// Write a function that will get 2 arguments as numbers and return which one is begginer

persons = [
  {
    id: 325326,
    firstname: "Dan",
    lastname: "Tiger",
    image: "url",
    birthday: "03.18.1990",
    gender: "Male",
    hobbie: ["Football", "Reading"],
    nationality: "switzerland",
    friends: [325330, 325334],
    residence: 10041
  },
  {
    id: 325326,
    firstname: "Jannifer",
    lastname: "Lopez",
    image: "url",
    birthday: "03.18.2005",
    gender: "female",
    hobbie: ["Football", "Reading"],
    nationality: "switzerland",
    friends: [325330, 325334],
    residence: 10041
  },
  {
    id: 325330,
    firstname: "Frank",
    lastname: "Lion",
    image: "url",
    birthday: "10.05.1991",
    gender: "male",
    hobbie: ["walking", "basketball"],
    nationality: "syria",
    friends: ["", "", ""],
    residence: 10041
  }
];


function checkgender(gender) {
  if (gender === Male) {
  return 'I would like to know more about' + ' ' + persons[1].firstname + ' ' + persons[1].lastname; 
  } else {
   return 'mast be a good man'; 
  }
};
console.log(checkgender(persons[0].gender)); 


// Write a function that will get the objects from person as an argument, check if gender is male or female,
// if the gender is female, return, 'I would like to know more about <firstname> <lastname>.'
// else, return '<firstname> <lastname> mast be a good man.'
