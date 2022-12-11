if (true) {
  // 함수가 아닌 if, while문 등 제어문에서 var로 선언한 변수는 global 변수로 인식됨
  var i = 5;
}

console.log(i);


// 즉시실행함수 (IIFE : IIFE : Immediately Invoked Function Expression)
(function() {
  var a = 10;
  console.log(a);
})();

// (function() {
//   var a = 5;
//   console.log(a);
// }).call(this);

console.log(a);
