
let prices = [7,1,5,3,6,4]
// let prices = [8,2,4]

// const BestStock = function (arr){
//     let maxprofit = 0;
//     let min = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]<min) {
//             min = arr[i]
//         }else{
//             if (arr[i]>min) {
//                 let newMax = arr[i] - min;
//                 if (newMax > maxprofit) {
//                     maxprofit = newMax;
//                 }
//             }
//         }
       
        
//     }
//     return maxprofit;
// }


var BestStock =function( prices){
    let maxprofit =0;
    let min = prices[0]
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) min = prices[i]
        let profit = prices[i] - min
        maxprofit = Math.max(profit ,maxprofit)
    }
    return maxprofit
}
console.log(BestStock(prices));
