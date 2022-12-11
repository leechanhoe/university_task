const SECRET_VALUE = Symbol();

export default class  {
  constructor(secret) {
    
    this.hoge = 'hoge';
    this.foo  = 'foo';
    // this[SECRET_VALUE] : private property가 되어, 모듈 외부에서 접근 불가
    this[SECRET_VALUE] = secret;
  }

  checkValue(secret) {
    return this[SECRET_VALUE] === secret;
  }
}
