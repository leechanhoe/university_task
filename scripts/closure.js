// closure함수 정의 : 특정 함수의 return값이 함수이면서, 
//                    return한 함수안에 부모 local 변수를 사용한 경우
function closure(init) {
  // counter : local variable
  var counter = init;

  return function() {
    return ++counter;
  }
}

// myClousure = function() { counter=1,    return ++counter;   };
var myClosure = closure(1);
console.log(myClosure());
console.log(myClosure());
console.log(myClosure());

var myClosure1 = closure(1);
var myClosure2 = closure(100);

console.log(myClosure1());
console.log(myClosure2());
console.log(myClosure1());
console.log(myClosure2());