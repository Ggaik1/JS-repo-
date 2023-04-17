const people = ['Silvik', 'Ani S.', 'Gago', 'Ani I.', 'Milana', 'Seda', 'Poghos'];

const  zodiacSign = [
    {
        zodiacSignName: 'Gemini',
        supportingPlanet: 'Mercury',
        color: 'yellow'
    },
    {
        zodiacSignName: 'Capricorn',
        supportingPlanet: 'Saturn',
        color: 'grey'
    },
    {
        zodiacSignName: 'Aquarius',
        supportingPlanet: 'Uranus and Saturn',
        color: 'blue'
    },
    {
        zodiacSignName: 'Libra',
        supportingPlanet: 'Venus',
        color: 'light pink and blue'
    },
    {
        zodiacSignName: 'Aries',
        supportingPlanet: 'Mars',
        color: 'red'
    },
    {
        zodiacSignName: 'Scorpio',
        supportingPlanet: 'Pluto and Mars',
        color: 'black'
    },
    {
        zodiacSignName: '',
        supportingPlanet: '',
        color: ''
    }
];


// write a function to get the names from the people array and for each person in zodiacSign array
// get matching object accoring to index and display
// if zodiacSignName exists '<personName> is <zodiacSignName>, his/her supporting planet is <sodiacSignPlanet> and color is <sodiacSignColor>
// else, if zodiacSignName does not exist, return 'No zodiacsign found for <personName>, please, check info.'


 function zodiacTime(c,d) {
    if(d.zodiacSignName) {
 return c + ' is ' + d.zodiacSignName + ' his/her supporting planet is ' + d.supportingPlanet + ' and color is ' + d.color;
      }  else  {
 return 'No zodiacsign found for' + ' ' + c + ' please, check info.';
 }
};

console.log(zodiacTime(c[0],d[0]));
    