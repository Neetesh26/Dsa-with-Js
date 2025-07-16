let arr = [1, 0, 2, 0, 1, 0, 2, 1, 0, 1, 2, 0, 1, 2];
let i =0 , j=0 , k=arr.length-1;
while (i < k) {
    if (arr[i]==0) {
        let temp =arr[i]
        arr[i] =arr[j]
        arr[j] = temp
        i++
        j++
    }
    else if (arr[i]==2) {
        let temp =arr[i]
        arr[i] =arr[k]
        arr[k] = temp
        k--
    }
    else{
        i++
    }
    
}
console.log(arr);
