

const number = [2,4,9,4,24,3,50];

function maxNum(num){

    let max = num[0];
    
    for(let i=0; i<num.length; i++){
        if(num[i]>max){
            max = num[i];
        }
    }

    return max;

}

const result = maxNum(number);

console.log(result);
