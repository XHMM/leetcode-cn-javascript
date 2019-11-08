/* 看解答前，我问我自己：
*1. 如何将二维数组按照差值绝对值升序排序 eg: [[10,20], [8, 3], [1,9]] ==>  [[8,3], [1,9], [10,20]]
* */




// https://leetcode-cn.com/problems/two-city-scheduling/
var twoCitySchedCost = function(costs) {
  const a = [];
  const b = [];
  costs.map( item => {
    if(item[0]>item[1]) b.push(item)
    else a.push(item)
  })

  if(a.length !==b.length) {
    let more,less;
    a.length > b.length ? (more = a , less=b) : (more = b , less = a);
    more.sort((b,a) => (Math.abs(a[0]-a[1])) - Math.abs((b[0]-b[1])) );
    less.push(...more.splice(costs.length/2 ))
  }

  return a.reduce((acc,cur)=> {return acc+cur[0]}, 0)+b.reduce((acc,cur)=> {return acc+cur[1]}, 0);
};