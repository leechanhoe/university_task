var getTriangle = function(base, height) {
  return base * height / 2;
};

console.log(getTriangle(5, 2));
// 함수로 지정된 변수를 출력하면, 함수 본문 내용이 출력
console.log(getTriangle);

// getTriangle 변수값이 원래 함수로 지정되어 있다가, 숫자 0으로 변경 
// getTriangle의 data type이 number로 변경됨
getTriangle = 0;
console.log(getTriangle);

// getRectangle 함수 선언이 뒤에 나와도 동작됨 (hoisting effect)
console.log('사각형의 면적:' + getRectangle(5, 2));

function getRectangle(base, height) {
  return base * height;
}

// callFunctionLiteral 리터럴 함수 선언이 뒤에 나오면 에러 발생
console.log('사각형의 면적:' + callFunctionLiteral());

callFunctionLiteral = function () {
  console.log('함수 literal을 선언한 후에 이 함수 리터럴을 사용해야만 에러 발생 않함');
}

