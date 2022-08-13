

function totalWood(a,b,c){

    const forChair = 2;
    const forTable= 5;
    const forBed = 10;

    const totalAmountForChair = a*forChair;
    const totalAmountForTable = b*forTable;
    const totalAmountForBed = c*forBed;


    const totalAmountOfWood = totalAmountForChair+totalAmountForTable+totalAmountForBed;

    console.log(totalAmountOfWood);
}


totalWood(5,2,2);