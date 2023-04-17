function numberCheck(num) {
   if(typeof num !== 'number') {
    return 'Please provide number';
   }
     
    if(num > 100){
        return 'greater';
    
    } else if (num < 100){ 
        return 'less';
    } else{
        return 'equal';
    }
};



console.log(numberCheck(true));