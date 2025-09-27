//스코프
//전역 스코프(전체 영역) / 지역(특정 영) 스코프
//전역 스코프 : 전체 영역에서 접근 가능
//지역 스코프: 특정 영역에서만 접근 가능

let a = 1; //전역 스코프

function funcA() {
  let b = 2; //지역 스코프
  console.log(a);

  
}
funcA();
// console.log(b);

if (true) { 
  let c = 1;
  function funcB() {}
}
// console.log(c);

for (let i = 0; i < 10; i++) { 
  let d = 1;
  function funcB() {}
}
//console.log(d);
// console.log(i);
// funcB();
funcB(); //조건문이나 반복문 안에서는 지역스코프를 갖지 않음