var Animal = function() {};

Animal.prototype = {
  walk : function() {
    console.log('종종...');
  }
};

var SuperAnimal = function() {};
SuperAnimal.prototype = {
  walk : function() {
    console.log('다다다닷!');
  }
};

var Dog = function() {};
Dog.prototype = new Animal();
var d1 = new Dog();
d1.walk();

Dog.prototype = new SuperAnimal();
var d2 = new Dog();
d2.walk();
// d1의 부모인 prototype 객체인 Animal은 영원히 변화되지 않음
// d1과 d2는 서로 독립적으로 부모 객체를 관리함 (부모객체는 new로 생성싯점에 최종 결정됨)
d1.walk();
