// const input = [1, 2, 3, 4, 5];
// const newArray = [];
// for (let i = 0; i < input.length; i++) {
//   newArray.push(input[i] * 2);
// }
//console.log(newArray);
// normal way to double each element in an array
//same program using map

const input = [1, 2, 3, 4, 5];
function twice(i) {
  return i * 2;
}
const ans = input.map(twice);
console.log(ans);
