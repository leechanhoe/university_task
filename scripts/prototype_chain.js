var Animal = function() {};

Animal.prototype = {
  walk : function() {
    console.log('종종...');
  }
};

var Dog = function() {
  Animal.call(this);
};
// Dog가 자식, Animal이 부모
Dog.prototype = new Animal();
Dog.prototype.bark = function() {
  console.log('멍멍!! ');
}

var d = new Dog();
d.walk();
d.bark();

