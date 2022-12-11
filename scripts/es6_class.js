class Member {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // firstName property getter/setter method 선언
  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = value;
  }

  // lastName property getter/setter method 선언
  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = value;
  }

  getName() {
    return this.lastName + this.firstName;
  }


}

let m = new Member('시온', '정');
console.log(m.getName());


// static method 선언
class Area {
  static getTriangle(base, height) {
    return base * height / 2;
  }
}

console.log(Area.getTriangle(10, 5));


// 자식 class 생성 : extends
class BusinessMember extends Member {
  work() {
    return this.getName() + '은 공부하고 있습니다.';
  }
}

let bm = new BusinessMember('시온', '정');
console.log(bm.getName());
console.log(bm.work());


// super method 사용
class CorporateMember extends Member {
  constructor(firstName, lastName, clazz) {
    super(firstName, lastName);
    this.clazz = clazz;
  }

  getName() {
    return super.getName() + '／직책:' + this.clazz;
  }
}

let cm = new CorporateMember('성룡', '김', '과장');
console.log(cm.getName());
