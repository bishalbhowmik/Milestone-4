const phones = [
    {'name':'Mi','price':12000,'camera':'8mp'},
    {'name':'Realme','price':15000,'camera':'8mp'},
    {'name':'Samsung','price':25000,'camera':'8mp'},
    {'name':'Apple','price':120000,'camera':'8mp'},
    {'name':'Micromax','price':8000,'camera':'8mp'},
    {'name':'Walton','price':10000,'camera':'8mp'},
    {'name':'lton','price':7000,'camera':'8mp'}
]

function cheapestPhone(phone){
    let cheap = phone[0];

    for(const num of phone){

        if(num.price<cheap.price){
            cheap = num;
        }
    }

    return cheap;


}

console.log(cheapestPhone(phones));