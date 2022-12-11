function showMessage(value) {
  console.log(value);
}

showMessage();
showMessage('철수');
showMessage('철수', '영희');

// 인수 갯수가 맞지 않을 때 error 처리
function showMessage1(value) {
  if (arguments.length !== 1) {
    throw new Error('인수의 수가 서로 다릅니다：' + arguments.length);
  }
  console.log(value);
}

try {
  showMessage1(' 철수', ' 영희');
} catch(e) {
  window.alert(e.message);
}

// 함수내에 default 값 지정
function getTriangle(base, height) {
  if (base === undefined) { base = 1; }
  if (height === undefined) { height = 1; }
  return base * height / 2;
}

console.log(getTriangle(5));

// arguments 객체 이용
function sum() {
  var result = 0;
  console.log(arguments.length);
  for (var i = 0, len = arguments.length; i < len; i++) {
    console.log(arguments[i]);
    var tmp = arguments[i];
    if (typeof tmp !== 'number') {
      throw new Error('인수값이 숫자가 아닙니다.：' + tmp);
    }
    result += tmp;
  }
  return result;
}

try {
  console.log(sum(1, 3, 5, 7, 9, 11));
} catch(e) {
  window.alert(e.message);
}


// { base:5, height:4 } => 명명된 인수로 함수 호출
// args : {} 객체 data type
function getRectangle(args) {
  if (args.base === undefined) { args.base = 1; }
  if (args.height === undefined) { args.height = 1; }
  return args.base * args.height;
}

console.log(getRectangle({ base:5, height:4 }));
console.log(getRectangle({ height:5 }));
console.log(getRectangle({ height:6, base:2 }));