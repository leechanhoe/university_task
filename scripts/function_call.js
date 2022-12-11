// array return
function getMaxMin(...nums) {
  return [Math.max(...nums), Math.min(...nums)];
}

let result = getMaxMin(10, 35, -5, 78, 0);
console.log(result);

let [max, min] = getMaxMin(10, 35, -5, 78, 0);
//let [,min] = getMaxMin(10, 35, -5, 78, 0);
console.log(max);
console.log(min);

// 재귀함수
function factorial(n) {
  if (n != 0) { return n * factorial(n - 1); }
  return 1;
}
console.log(factorial(5));

// callback 함수
function arrayWalk(data, f) {
  for (var key in data) {
    f(data[key], key);
  }
}

function showElement(value, key) {
  console.log(key + '：' + value);
}
var ary = [1, 2, 4, 8, 16];
arrayWalk(ary, showElement);

var result1= 0;
function sumElement(value, key) {
 result1 += value;
}
arrayWalk(ary, sumElement);
console.log('합계:' + result1);

// 익명함수 (anonymous function)
arrayWalk(
  ary,
  function (value, key) {
    console.log(key + '：' + value);
  }
);
