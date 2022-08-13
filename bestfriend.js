const arr  = ['joy','asif', 'masum','ovishek','jfldjfldsajl'];

function bestFriend(m){
    let friend = m[0];

    for( let i =0; i<m.length; i++){
        if(m[i].length>friend.length){
           friend = m[i];
        }
     /*    else{
            console.log(`${m[i]} is not my Bst friend`);
        } */
    }

    return friend;
}

const result = bestFriend(arr);
console.log(result);