function getTriangle(base = 1, height = 1) {
  return base * height / 2;
}

console.log(getTriangle(5));
// null, false, 0, '' 를 인수로 사용할 경우에는 함수의 default가 동작 안됨
console.log(getTriangle(5, null));
// undefined를 인수로 사용하면 인수가 건내지지 않은 것으로 인식해 함수의 default가 동작됨
console.log(getTriangle(5, undefined));


function multi(a, b = a) {
  return a * b; 
}
console.log(multi(10, 5));
console.log(multi(3));

// a = b를 인수의 처음에 사용하면 안됨, 왜냐하면 나중에 선언된 인수 b를 사용하기 때문
// function multi(a = b, b = 5) {
//   return a * b; 
// }
// console.log(multi());



// function getRectangle(base = 1, height) {
//   return base * height;
// }
function getRectangle(base, height=1) {
  return base * height;
}

// 10이 base의 값으로 넘겨지고, height는 undefined가 됨
console.log(getRectangle(10));