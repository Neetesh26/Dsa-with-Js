let arrr1 = [2, 5, 6]
let arrr2 = [1, 3, 4, 8]
let i = k = j = 0
let temp = new Array(arrr1.length + arrr2.length)
while (i < arrr1.length && j < arrr2.length) {
    if (arrr1[i] < arrr2[j]) {
        temp[k++] = arrr1[i++]
    } else {
        temp[k++] = arrr2[j++]
    }
}
while (arrr1.length > i) {
    temp[k++] = arrr1[i++]

}
while (arrr2.length > j) {
    temp[k++] = arrr2[j++]

}

console.log(temp);
