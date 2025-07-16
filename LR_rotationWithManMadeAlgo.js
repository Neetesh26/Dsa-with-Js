// const arr = [1,2,3,4,5,6];
// const temp = new Array(arr.length);

// const k = Number(prompt("Enter number of rotation..."));

// for (let i = 0; i < arr.length; i++) {
//     temp[i] = arr[(i+k) % arr.length]; 
// }

// console.log(temp);







// blockswap Reverse algorithm....---------------------->

const arr = [1,2,3,4,5,6];

let k = Number(prompt("Enter number of rotations..."))
k= k% arr.length
Reverse(0 , k-1)
Reverse(k , arr.length-1)
Reverse(0 , arr.length-1)
console.log(arr);

function Reverse( i ,  j ){
    while(i<j){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp

        i++
        j--
    }
}

