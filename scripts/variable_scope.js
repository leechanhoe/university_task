var scope = 'Global Variable';
function getValue() {
  // scope : local variable, 실제 scope의 값이 뒤에 결정되어 undefined 출력
  console.log(scope);
  var scope = 'Local Variable';
  return scope;
}

console.log(getValue());
console.log(scope);

// var로 변수 선언 안한 경우
scope1 = 'Global Variable'; // global variable로 인식
function getValue1() {
  // scope1이 var로 선언되어 있지 않으면, global변수로 인식됨
  scope1 = 'Local Variable';  // global variable인 scope1 값을 변경
  return scope1;
}

console.log(getValue1());
console.log(scope1);
