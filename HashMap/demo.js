var map = {};
    let arr =[5,20,10,30,20,33,10,50]
for (var i = 0; i < arr.length; i++) {
    var key = arr[i];

    if (map[key] === undefined) {
        map[key] = 1;
    } else {
        map[key]++;
    }
}

// find single occurrence
for (var key in map) {
    // if (map[key] === 1) {   
    //     console.log("Single occurrence:", key);
    // }
    // if (map[key] > 1) {   
    //     console.log("Multiple occurrence:", key);
    // }
    console.log(map[key]);
    
}
console.log(map);