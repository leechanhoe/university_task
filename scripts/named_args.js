// 함수 인수를 선언할 때, {} 객체를 사용하여 default값을 설정 가능
function getTriangle({ base = 1, height = 1 }) {
  return base * height / 2;
}
console.log(getTriangle({ base:5, height:4 }));

// 함수 인수에서 객체로 표현하면서,, 객체의 특정 속성(property)만 인수로 설정도 가능
function show({name}) {
  console.log(name);
};

let member = {
  mid: 'Y0001',
  name: '정시온',
  address: 'shion_jung@example.com'
};

show(member);