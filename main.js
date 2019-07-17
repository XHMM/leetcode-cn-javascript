function xx(nums) {
  let res = 0;

  for(let i=0; i< nums.length; i++) {
    res = res^i^nums[i]
  }
  return res^nums.length;
}

const arr = [ 3, 0, 1,4];
console.log(xx(arr))