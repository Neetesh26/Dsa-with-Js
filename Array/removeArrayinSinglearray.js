let arr = [1, [2, [3, 4], 5]];
let result = [];

function flattenArray(inputArray) {
    for (let elem of inputArray) {
        if(typeof(elem) !== "number"){
            result.push(elem);
        }else{
            flattenArray(elem);
        }

    }
}

flattenArray(arr)
console.log(result);
