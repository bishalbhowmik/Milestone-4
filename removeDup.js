
const names = ['bishal','joy','Tanmoy','asif','bishal','joy','Tanmoy'];



function removeDuplicate(names){

    const unique = [];

/*     for(let i=0; i<names.length; i++){

        const element = names[i];

        console.log(element);    
    } */

    for(const element of names){
        if(unique.indexOf(element)==-1){
            unique.push(element);
        }
    }

    return unique;


    

}

const uniqueArrayValue = removeDuplicate(names);
console.log(uniqueArrayValue);