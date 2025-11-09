let arrr1 = [2, 5, 6]
let arrr2 = [1, 3, 4, 8]

function divide(arr , f, l) {
    // let f = 0, l = arr.length - 1
    
    if (f >= l) return
    const mid = Math.floor((f + l) / 2);
    divide(arr, f, mid)
    divide(arr, mid + 1, l)
    conquor(arr, f, l, mid)

}

function conquor(arr, f, l, mid) {
    const temp = new Array(l - f + 1)
    let i = f, j = mid + 1, k = 0
    while (i <= mid && j <= l) {
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++]
        } else {
            temp[k++] = arr[j++]
        }
    }
    while (i <= mid) {
        temp[k++] = arr[i++]
    }
    while (j <= l) {
        temp[k++] = arr[j++]
    }

    let p = 0, m = f
    while (p < temp.length) {
        arr[m++] = temp[p++]
    }
}

let arr = [5, 8, 6, 2, 3, 5]
divide(arr , 0, arr.length - 1)
console.log(arr);