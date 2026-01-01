
// maximumScore([10,-1,3,-4,-5])

console.log(maximumScore([10,-1,3,-4,-5]));

function maximumScore(nums) {
    var n = nums.length;

    var suffixMin = new Array(n);
    suffixMin[n - 1] = nums[n - 1];

    for (var i = n - 2; i >= 0; i--) {
        if (nums[i] < suffixMin[i + 1]) {
            suffixMin[i] = nums[i];
        } else {
            suffixMin[i] = suffixMin[i + 1];
        }
    }
console.log(suffixMin);

    var prefixSum = 0;
    var maxScore = -Infinity; 
    

    for (var i = 0; i < n - 1; i++) {
        prefixSum = prefixSum + nums[i];

        var score = prefixSum - suffixMin[i + 1];

        if (score > maxScore) {
            maxScore = score;
        }
    }

    return maxScore;
};