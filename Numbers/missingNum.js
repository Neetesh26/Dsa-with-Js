function missingNumber(arr) {
    var n = arr.length + 1;   
    var total = (n * (n + 1)) / 2;
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return total - sum;
}
