if (true) {
  let i = 5;
}

// console.log(i);

{
  let a = 5;
  console.log(a);
}

console.log(a);

// switch문의 각 case마다 똑같은 이름의 변수를 let으로 선언하면 error 발생
// switch(x) {
//   case 0:
//     let value = 'x:0';
//   case 1:
//     let value = 'x:1';
// }

// switch문 이전에 let으로 변수 선언하여 사용할 것
let value='';
switch(value) {
  case 0:
    value = 'x:0';
  case 1:
    value = 'x:1';
}