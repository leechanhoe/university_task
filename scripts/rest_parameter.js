function sum(...nums) {
  let result = 0;
  console.log(nums);    // nums : array
  for (let num of nums) {
    if (typeof num !== 'number') {
      throw new Error('지정값이 숫자가 아닙니다:' + num);
    }
    result += num;
  }
  return result;
}

try {
  console.log(sum(1, 3, 5, 7, 9, 11));
} catch(e) {
  window.alert(e.message);
}


// ...의 다른 사용 예
console.log(Math.max(15, -3, 78, 1));
console.log(Math.max([15, -3, 78, 1])); // error 발생 => NaN

// 해결책
console.log(Math.max.apply(null, [15, -3, 78, 1])); // ES5 방식
console.log(Math.max(...[15, -3, 78, 1]));          // ES6 방식