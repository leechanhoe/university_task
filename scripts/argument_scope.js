// 기본형 데이터 타입 변수를 argument로 넘길 때
var value = 10;

function decrementValue(value) {
  value--;
  return value;
}

console.log(decrementValue(100));
console.log(value);

// 참조형 객체 변수를 argument로 넘길 때
var value = [1, 2, 4, 8, 16];
function deleteElement(value) {
  value.pop();
  return value;
}

console.log(deleteElement(value));
console.log(value);