const AUTHOR = 'YAMADA, Yoshihiro';

// export : module 밖에 있는 다른 javascript file에서 사용가능하게 하기 위해 사용 
export class Member {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
    getName() {
    return this.lastName + this.firstName;
  }
}

export class Area {
  constructor(){}

  static getTriangle(base, height) {
    return base * height / 2;
  };
  
  static getDiamond(width, height) {
    return width * height / 2;
  };
}

