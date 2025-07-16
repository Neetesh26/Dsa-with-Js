//   remove duplicate digit in sorted  array --------------->

var arr = [1,1,2,3,4,4];

let removeDuplicateSortedArr = function( num){
    var j =1;
    for (let i = 0; i < num.length-1; i++) {
        if (num[i] != num[i+1]) {
            num[j] = num[i+1];
            j++;
        }
        
    }
    return j;
}

console.log(removeDuplicateSortedArr([1,1,2,3,4,4]))


