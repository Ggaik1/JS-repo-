// const bakery = {
// 	id: "0001",
// 	type: "donut",
// 	name: "Cake",
// 	ppu: 0.55,
// 	batters:
// 		{
// 			batter:
// 				[
// 					{ id: "1001", type: "Regular" },
// 					{ id: "1002", type: "Chocolate" },
// 					{ id: "1003", type: "Blueberry" },
// 					{ id: "1004", type: "Devil's Food" }
// 				]
// 		},
// 	topping:
// 		[
// 			{ id: "5001", type: "None" },
// 			{ id: "5002", type: "Glazed" },
// 			{ id: "5005", type: "Sugar" },
// 			{ id: "5007", type: "Powdered Sugar" },
// 			{ id: "5006", type: "Chocolate with Sprinkles" },
// 			{ id: "5003", type: "Chocolate" },
// 			{ id: "5004", type: "Maple" }
// 		]
// };


// function returnTypes(obj){ 
//     const battyArr = obj.batters.batter;
//     const toppyArr = obj.topping;
//     // const withStringFromBattyArr = battyArr.reduce((acc, item) =>{
//     //     return acc.push(item.type);
//     // },'');
//     const withStringFromBattyArr = battyArr.map((i) => {
//         return i.type;
//     });
//     const withStringFromToppyArr = toppyArr.map((i) => {
//         return i.type;
//     });
//     return `Batter contains: ${withStringFromBattyArr.join(', ')}`, 
//     `Topping contains: ${withStringFromToppyArr.join(', ')}`. 
// };

// console.log(returnTypes(bakery));


const bakery = {
    id: "0001",
    type: "donut",
    name: "Cake",
    ppu: 0.55,
    batters: {
      batter: [
        { id: "1001", type: "Regular" },
        { id: "1002", type: "Chocolate" },
        { id: "1003", type: "Blueberry" },
        { id: "1004", type: "Devil's Food" }
      ]
    },
    topping: [
      { id: "5001", type: "None" },
      { id: "5002", type: "Glazed" },
      { id: "5005", type: "Sugar" },
      { id: "5007", type: "Powdered Sugar" },
      { id: "5006", type: "Chocolate with Sprinkles" },
      { id: "5003", type: "Chocolate" },
      { id: "5004", type: "Maple" }
    ]
  };
  
  function returnTypes(obj) {
    const battyArr = obj.batters.batter;
    const toppyArr = obj.topping;
    const withStringFromBattyArr = battyArr.map(i => i.type);
    const withStringFromToppyArr = toppyArr.map(i => i.type);
    return `Batter contains: ${withStringFromBattyArr.join(', ')}
Topping contains: ${withStringFromToppyArr.join(', ')}`;
  }
  
  console.log(returnTypes(bakery));
  