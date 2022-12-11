let data_ary = ['one', 'two', 'three'];
let data_str = '가나다라마';
let data_map = new Map([['MON', '월요일'], ['TUE', '화요일'], ['WED', '수요일']]);

for(let d of data_ary) {
  console.log(d);
}

for(let d of data_str) {
  console.log(d);
}

for(let [key, value] of data_map) {
  console.log(`${key}：${value}`);
}
