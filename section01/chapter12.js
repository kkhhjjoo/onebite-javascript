//1. 함수 표현식
function funcA() { 
  console.log("funcA");
}
//varA(); //호이스팅이 되지 않음

let varA = funcA;
console.log(varA);

varA();

//varB();

let varB = function funcB() { //익명 함수
  console.log("funcB");
}

//2. 화살표 함수
let varC = (value) => {
  console.log(value);
  return value + 1;
}
console.log(varC(10));