// 1. function 명령어로 정의
function getTriangle(base, height) {
  return base * height / 2;
}
console.log('삼각형의 면적:' + getTriangle(5, 2));

// 2. Function 생성자로 정의
var getTriangle = new Function('base', 'height', 'return base * height / 2;');
//var getTriangle = new Function('base, height', 'return base * height / 2;');
console.log('삼각형의 면적:' + getTriangle(5, 2));

var param = 'height, width';
var formula = 'return height * width / 2;';
var diamond = new Function(param, formula);
console.log('마름모의 면적:' + diamond(5, 2));


// 3. 함수 literal 표현으로 정의
var getTriangle = function(base, height) {
  return base * height / 2;
};
console.log('삼각형의 면적:' + getTriangle(5, 2));


// 4. Arrow 함수로 정의 (ES6)
// getTriangle = (base, height) => {
//   return base * height / 2;
// };

// arrow 함수에서 함수 본문 내용이 return값만 존재하면 { }와 return keyword 삭제 가능
getTriangle = (base, height) => base * height / 2;
console.log('삼각형의 면적:' + getTriangle(5, 2));