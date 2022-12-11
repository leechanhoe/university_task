var Member = function(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
};

// 객체 {} prototype property에 method를 추가하면,
// Member constructor로 조회할 경우에는 보이지 않는데,
// new로 인스턴스를 만들면, getName 메소드가 보임
Member.prototype.getName = function() {
  return this.lastName + ' ' + this.firstName;
};

var mem = new Member('인식', '정');
console.log(mem.getName());

// instnace 생성후에 prototype객체에 method 추가해도 동작이 됨
Member.prototype.getFirstName = function() {
  return this.firstName;
};
console.log(mem.getFirstName());


// instance 생성후에 property 추가
var Person = function() { };

Person.prototype.sex = '남자';
var mem1 = new Person();
var mem2 = new Person();

console.log(mem1.sex + '|' + mem2.sex);
// mem2인스턴스에 sex라는 property를 추가하면, mem2에만 존재함..
mem2.sex = '여자';
// JavaScript에서 속성값을 읽어오는 순서 :
//  인스턴스에 해당 속성값이 있으면 먼저 읽어오고, 
//   없으면 property객체안에 해당 속성이 있는지 검사하여 읽어옴

console.log(mem1.sex + '|' + mem2.sex);
// delete : instance의 property 삭제, protype객체의 property를 삭제하는 것은 아님.
delete mem1.sex
delete mem2.sex
console.log(mem1.sex + '|' + mem2.sex);