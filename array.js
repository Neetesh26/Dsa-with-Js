// var arr = [10, 30, 56, 43, 29, 69, 49, 60]
var arr = [10, 30,40, 60,60,60 ,60 ,30]



//  compare largest number of an array -------------------->
function maximum(arr) {
    var max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}
// console.log(maximum(arr));


//  compare minimum number of an array ----------------->

function minimum(arr) {
    var min = arr[0]
    for (let index = 1; index < arr.length; index++) {
        if (arr[index] < min) {
            min = arr[index]
        }
    }
    return min
}
// console.log(minimum(arr));



// how to find second maximum element of an array -------->
function maxf(first, second) {
    if (first > second) {
        return first
    } else {
        return second
    }
}
function minf(first, second) {
    if (first < second) {
        return second
    } else {
        return first
    }
}

var maxelem = maxf(arr[0], arr[1]);
var Smax = minf(arr[0], arr[1]);

for (let idx = 2; idx < arr.length; idx++) {
    if (arr[idx] > maxelem) {
        Smax = maxelem
        maxelem = arr[idx]
    } else if (arr[idx] > Smax && maxelem != arr[idx]) {
        Smax = arr[idx]
    }
}
console.log("First largest number of an array is :", maxelem);
console.log("Second largest number of an array is :", Smax);
