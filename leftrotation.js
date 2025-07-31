let arr = [1, 2, 3, 4, 5]

// let temp = new Array(arr.length)
// let k = 2
// k = k % arr.length
// for (let i = 0; i < arr.length; i++) {
//     temp[i] = arr[(i + k) % arr.length]
// }
// console.log(temp);



let k = 2
k = k % arr.length




function Reverse(i  , j ){
while(i < j ){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp  

    i++
    j--
 }
}


Reverse(0, k-1)
Reverse(k , arr.length-1)
Reverse(0 , arr.length-1)
console.log(arr);
