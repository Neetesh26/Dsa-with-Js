var arr = [10, 30, 40, 60, 60, 60, 60, 30];

var max = -Infinity;
var secondMax = -Infinity;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        secondMax = max;
        max = arr[i];
    } 
    else if (arr[i] < max && arr[i] > secondMax) {
        secondMax = arr[i];
    }
}

console.log(secondMax);
console.log("Second maximum number is:", secondMax);