let data = { red: '빨간색', yellow: '노란색' };
// target : target하는 객체, handler : target 객체에 적용하는 여러분이 작성한 코딩
// data => target, handler
var proxy = new Proxy(data, {
  // handler => get 메소드 (객체 속성값을 읽을 때, get 메소드가 실행됨)
  get(target, prop) {
    return prop in target ? target[prop] : '?';
  }
});

console.log(proxy.red);
console.log(proxy.nothing);

proxy.red = '레드';
console.log(data.red);
console.log(proxy.red);
