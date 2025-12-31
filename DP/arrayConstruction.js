function getMaxElemInArray(n) {
    if (n == 0) return 0;


    let nums = new Array(n + 1);
    nums[0] = 0;
    nums[1] = 1;
    let max = 1

    for (let i = 0; i < n; i++) {

        if (i % 2 == 0) {
            nums[i] = nums[i / 2]
        }
        else {
            let k = Math.floor(i / 2);
            nums[i] = nums[k] + nums[k + 1];
        }

        if (nums[i] > max) {
            max = nums[i];
        }
    }
    console.log(max);
    
    return max;
}

getMaxElemInArray(7);