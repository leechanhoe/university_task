var Member = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

var mem = new Member('철수', '강');

// new로 인스턴스로 생성된 mem에 method를 추가로 선언 가능한데,
//  추가된 메소드는 mem에만 존재...
mem.getName = function() {
  return this.lastName + ' ' + this.firstName;
}

console.log(mem.getName());

var mem2 = new Member('영희', '이');
console.log(mem2.getName());  // error