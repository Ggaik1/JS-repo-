// ..... task 1

const evenAndOdd = [
    {
        numbers: 10,
        status: "even"
    },
    {
        numbers: 11,
        status: "odd"
    },
    {
        numbers: 20,
        status: "even"
    },
    {
        numbers: 21,
        status: "odd"
    },
    {
        numbers: 1000
        status: "even"
    },
    {
        numbers: 1111
        status: "odd"
    }
];

function takeZuygOrKent(arr, evenOrOdd){
    return arr.filter((item) => {
        if(item.status.toLowerCase() === evenOrOdd) {
            return item;
        } 
    }).map(function(arr) {
        return arr.numbers;
    });

} 

console.log(takeZuygOrKent(evenAndOdd, "odd"));


// ...... task 3

const persons = [
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
      firstname: "Fan",
      lastname: "Tiger",
      image: "url",
      birthday: "03.18.2005",
      gender: "Female",
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
      gender: "Male",
      hobbie: ["walking", "basketball"],
      nationality: "syria",
      friends: ["", "", ""],
      residence: 10041
    },
    {
      id: 325334,
      firstname: "Bilal",
      lastname: "Zakki",
      image: "url",
      birthday: "08.19.1999",
      gender: "Female",
      hobbie: ["swimming", "walking"],
      nationality: "canda",
      friends: [325330, 325326],
      residence: 10012
    }
  ];


function giveCountry(arr, nation){
   return arr.filter((item) => {
    if(item.nationality === nation) {
        return item;
    }
    }).map(function(arr){
        return arr.nationality; 
    });
};

console.log(giveCountry(persons, "switzerland"));