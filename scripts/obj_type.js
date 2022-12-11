var Animal = function() {};
var Hamster = function() {};
Hamster.prototype = new Animal();

var a = new Animal();
var h = new Hamster();
console.log(a.constructor === Animal);
console.log(h.constructor === Animal);
// prototype 계승을 한 경우에는 constructor property의 값은 상속원의 class인 Animal이다.
console.log(h.constructor === Hamster); //false

// A instanceof B : 객체(A)가 특정 생성자(B)에 의해 생성된 인스턴스인지 판단
console.log(h instanceof Animal);
console.log(h instanceof Hamster);

// 객체가 참조하는 prototype을 확인
console.log(Hamster.prototype.isPrototypeOf(h));
console.log(Animal.prototype.isPrototypeOf(h));


// in 연산자로 object의 속성 check
var obj = { hoge: function(){}, foo: function(){} };

console.log('hoge' in obj);
console.log('piyo' in obj);