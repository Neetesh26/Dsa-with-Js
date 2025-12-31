      /*  "1231"
           /   \
        "231"  "121"                 pick greater number 231 and output is 231
         /   \     /   \
        "31"  "21" "21"  "11"
*/


function removeDigit(nums, digit) {

    let idx = -1;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === digit && nums[i] < nums[i + 1]) {
            idx = i;
            break
        }
    }

    if (idx === -1) {
        for(let i =nums.length -1; i>0;i--){
            if(nums[i] ===digit ){
                idx = i; break;
            }
        }
    }

    let res = "";
    for (let i = 0; i < nums.length; i++) {
        if (idx !== i) {res += nums[i]}
                    
    }
    console.log("Final result is : ",res);
    
    return res;
}

removeDigit("1231", "1")