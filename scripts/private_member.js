function Triangle() {
  var _base;
  var _height;
  var _checkArgs = function(val) {
    return (typeof val === 'number' && val > 0);
   }
  
  // setter method : 값을 setting하는 메소드
  this.setBase = function(base) {
    if (_checkArgs(base)){ _base = base; }
  }
  // getter method : 값을 get하는 method
  this.getBase = function() { return _base; }

  this.setHeight = function(height) {
    if (_checkArgs(height)){ _height = height; }
  }
  this.getHeight = function() { return _height; }
}

Triangle.prototype.getArea = function() {
  return this.getBase() * this.getHeight() / 2;
}

var t = new Triangle();
t._base = 10;
t._height = 2;
console.log('삼각형의 면적:' + t.getArea());

t.setBase(10);
t.setHeight(2);
console.log('삼각형의 밑변:' + t.getBase());
console.log('삼각형의 높이:' + t.getHeight());
console.log('삼각형의 면적:' + t.getArea());
