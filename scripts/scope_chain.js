// Global scope 객체 : property : var y = 'Global', method = outerFunc()
var y = 'Global';
function outerFunc() {
  // call scope 객체 : property : var y = 'Local Outer', arguments, method = innerFunc()
  var y = 'Local Outer';

  function innerFunc() {
    // call scope 객체 : property : var z = 'Local Inner', arguments, method(없음)
    // console.log(z);
    console.log(y);
    // console.log(x);
  }
  innerFunc();
}
outerFunc();
