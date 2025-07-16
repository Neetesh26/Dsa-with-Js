// Bubble Sort

// arr= [2,54,6,43,1]
let arr = [2, 54, 6, 43, 1];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(" Sorted array by Bubble Sort", arr);



// sum of array ------------>

const totalarr = (array) => {
    let sum = 0;
    array.forEach(function (v) {
        sum += v;
    });
    return sum;
};

console.log(totalarr([2, 3, 4, 2]));



// largest number ---------------------->

function largestNum(arr3) {
    let maximum = 0
    for (let index = 0; index < arr3.length; index++) {
        if (arr3[index] > maximum) {
            maximum = arr3[index]
        }
    }
    return maximum;
}

console.log("Largest number is : ",largestNum([2,32,120,65,11,5,85,45,98]));
