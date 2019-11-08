/*
* string的slice方法的第二个参数代表什么？
* */

var reverseStr = function(s, k) {
  const length = s.length
  if(length <= 2*k) return reverse(s, k)
  let idx = 0
  let res = ''
  while(idx < length) {
    const strFragment = s.slice(idx, idx + 2*k)
    res = res + reverse(strFragment, k)
    idx = idx + strFragment.length
  }
  return res
};

function reverse(s, k) {
  const length = s.length
  if(length < k) return s.split('').reverse().join('')
  else return s.slice(0, k).split('').reverse().join('') + s.slice(k)
}
// 个人评价：上述实现感觉怪累赘的... 讨论区还有用正则匹配的，或者是for循环来搞的