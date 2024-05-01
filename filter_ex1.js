//for finding even numbers in an array
const arr = [23, 34, 76, 65, 54, 67, 6, 543];
// const newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr);

//Using the filter function

function filterArr(n) {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
const ans = arr.filter(filterArr);
console.log(ans);
