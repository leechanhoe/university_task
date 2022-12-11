function Triangle() {
  var _base;
  var _height;
  
  Object.defineProperties(this, {
    // base : property name
    base: {
      get: function() {
        return _base;
      },
      set: function(base) {
        if(typeof base === 'number' && base > 0) {
          _base = base;
        }
      }
    },
    // height : property name
    height: {
      get: function() {
        return _height;
      },
      set: function(height) {
        if(typeof height === 'number' && height > 0) {
          _height = height;
        }
      }
    }
  });
}

Triangle.prototype.getArea = function() {
  return this.base * this.height / 2;
};

var t = new Triangle();
// t.base에 10을 집어 넣는 순간, Object.defineProperties의 set method를 실행
// base라는 이름도 Object.defineProperties에 선언되어 있음
t.base = 10;
t.height = 2;
// t.base는 Object.defineProperties의 get method를 실행
console.log('삼각형의 밑변:' + t.base);
console.log('삼각형의 높이:' + t.height);
console.log('삼각형의 면적:' + t.getArea());