var Member = function(firstName, lastName) {
  // var localVariable = 'local';

  // 생성자 호출이 안되어 있으면 생성자 강제 호출
  if(!(this instanceof Member)) {
    return new Member(firstName, lastName);
  }
  // new로 인스턴스 생성않하고, Member 함수를 직접 실행하면, firstName 변수는 global가 됨
  this.firstName = firstName;
  this.lastName = lastName;
};

var m = Member('인식', '정');
console.log(m);
// console.log(firstName); // not defined
console.log(m.firstName);