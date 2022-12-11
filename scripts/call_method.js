var data = 'Global data';
var obj1 = { data: 'obj1 data' };
var obj2 = { data: 'obj2 data' };
var obj3 = { data: 'obj3 data' };

function hoge() {
  console.log(this.data);
}

hoge.call(null);  // global객체 data를 넘김
hoge.call(obj1);
hoge.call(obj2);  // hoge.call (1, 2, 3, 4, 5)
// call하고, apply 메소드가 똑같은 기능을 수행
hoge.apply(obj3); // hoge.apply([1, 2, 3, 4, 5]) => 인자를 넘길 때 항상 array로 넘겨야 함


function test() {
  var args = Array.prototype.slice.call(arguments);
  console.log(args);
  console.log(args.join('／'));
}

test('Angular', 'React', 'Backbone');