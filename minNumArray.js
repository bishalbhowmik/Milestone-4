
const number = [3,34,4,1,54,24,0];


function minNum(num){
    let min = num[0];

    for(let i=0; i<num.length; i++){

        if(num[i]<min){
            min = num[i];
        }

    }
    return min;
}
const result = minNum(number);
console.log(result);