// Util.js => module 이름
import { Member, Area } from './lib/Util.js';

var m = new Member('성룡', '김');
console.log(m.getName());


import * as app from './lib/Util.js'

var m = new app.Member('성룡', '김');
console.log(m.getName());

// MyMember => Member의 별명(alias name)
import { Member as MyMember, Area as MyArea } from './lib/Util.js'

var m = new MyMember('성룡', '김');
console.log(m.getName());
console.log(MyArea.getTriangle(10, 5));


// export default module 사용
import Area1 from './lib/Area.js';
console.log(Area1.getTriangle(10, 5));


// Symbol로 private member 정의 및 사용
import MyApp from './lib/MyApp.js';

let app1 = new MyApp('secret string');

for (let key in app1) {
  console.log(key);
}

console.log(JSON.stringify(app1));

console.log(app1.checkValue('secret string'));