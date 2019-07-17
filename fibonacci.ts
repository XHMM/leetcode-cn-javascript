// n 从1开始

function fib1(n: number) {
  if(n===1 || n ===2) return 1;
  return fib1(n-1)+fib1(n-2);
}

function fib2( n:number) {
  if(n==1 ||n==2) return 1;
  let n1=1, n2=1;
  for(let i=3;i<n+1;i++) {
    let temp = n2;
    n2 = n1+n2;
    n1 = temp;
  }
  return n2;
}

// 递归慢的不要不要
console.time('递归');
console.log(fib1(6))
console.timeEnd('递归')

console.time('迭代');
console.log(fib2(62))
console.timeEnd('迭代')
