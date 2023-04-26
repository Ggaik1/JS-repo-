function returnTpatar(num){
    const tver = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
        if(num > 0 && num <= 10 ){
            return tver[num]; 
     } else {    
            return  "Your filled number is " + num + ", please enter numbers from 0 to 10.";
        } 
};

export default returnTpatar;