var Area = function() {};

// 정적 property인 version 선언
Area.version = '1.0';

// 정적 method인 triangle 선언
Area.triangle = function(base, height) {
  return base * height / 2;
};

// 정적 method인 diamond 선언
Area.diamond = function(width, height) {
  return width * height / 2;
};

console.log('Area클래스의 버전:' + Area.version);
console.log('삼각형의 면적:' + Area.triangle(5, 3));

var a = new Area();
console.log('마름모의 면적:' + a.diamond(10, 2));
