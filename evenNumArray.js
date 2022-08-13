const number = [3,4,5,4,5,643,34];

function evenNum(num){
    let even = [];
    
    for(let i=0; i<num.length; i++){
        
        if(num[i] % 2== 0){
            
            even = num[i];         
        }



        
        
    }
    
    return even;
}

 const result = evenNum(number);

 console.log(result);

