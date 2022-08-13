

const arr = [1,3,4,5,4,4,-5,-5];

function positiveNum(num){
    let newar = [];
    for (let i =0; i<num.length; i++){

    

        if(num[i]<0){
            break;
        }
    
        else {
           newar.push(num[i]);
        }
    
        
    }

    return newar;

}


const result = positiveNum(arr);

console.log(result);
