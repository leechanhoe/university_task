let member = {
  name: '김성룡',
  birth: new Date(1970, 5, 25),
  toString() {
    return this.name + '/생일：' + this.birth.toLocaleDateString() 
  }
};

console.log(member.toString());


let name = '김성룡';
let birth = new Date(1970, 5, 25);
// name, birth는 property이름과 property값이 동일한 경우로 property값 생략 가능
let person = { name, birth };
console.log(person);


// computed property names
let i = 0;
let member1 = {
  name: '김성룡',
  birth: new Date(1970, 5, 25),
  ['memo' + ++i]: '정규회원', 
  ['memo' + ++i]: '지부회장', 
  ['memo' + ++i]: '경기'
};

console.log(member1);