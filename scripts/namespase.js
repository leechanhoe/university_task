// Wings : namespace를 선언
var Wings = Wings || {};

Wings.Member = function(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
};

Wings.Member.prototype = {
  getName : function() {
    return this.lastName + ' ' + this.firstName;
  }
};

var mem = new Wings.Member('인식', '정');
console.log(mem.getName());