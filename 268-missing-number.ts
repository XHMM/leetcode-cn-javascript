/*
*  异或的应用: https://blog.csdn.net/Jasmineaha/article/details/81412711
*
* */


const missingNumber = function(nums: number[]): number {
  let res = 0;

  for(let i=0; i< nums.length; i++) {
    res = res^i^nums[i]
  }
  return res^nums.length; // 上面的for循环少一次异或，在这补全
};