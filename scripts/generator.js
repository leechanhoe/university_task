// myGenerator 이름의 generator를 생성함 => 본인의 iterator처럼 사용 가능
function* myGenerator() {
  yield '가나다라마';
  yield '바사아자차';
  yield '타카파하갸';
}
// 본인의 iterator처럼 사용 가능
// myGenerator에 코딩된 yield 명령어는 for문이 한 번 실행할 때 마다,, yield 명령어가 실행
for(let t of myGenerator()) {
  console.log(t);
}


// 소수 구하는 generator 만들기
function* genPrimes() {
  let num = 2;
  while (true) {
    if (isPrime(num)) { yield num; }
    num++;
  }
}
// 소수 구하는 함수
function isPrime(value) {
  let prime = true;
  for (let i = 2; i <= Math.floor(Math.sqrt(value)); i++) {
    if (value % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
}
// genPrimes generator함수에서 생성된 yield 명령어 갯수만큼 for loop가 수행
for(let value of genPrimes()) {
  if (value > 100) { break; }
  console.log(value);
}