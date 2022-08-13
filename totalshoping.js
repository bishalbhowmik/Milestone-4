const shoping = [
    {'product':'shirt', 'price':600},
    {'product':'Pant', 'price':800},
    {'product':'T-shirt', 'price':400}
 
]


function totalShoping(a) {
    let total= 0;
    for (const individual of a){
        
        total = individual.price+  total;
    }

    return total;
}

console.log(totalShoping(shoping));