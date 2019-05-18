/*
问： 加减乘除 和 位运算符 哪个优先级高？

* 二分查找：数组元素须是排好序的
* */


function binarySearch(nums: number[], target: number):number {
  if(nums.length === 1) return nums[0] === target ? 0 : -1
  let left = 0
  let right = nums.length - 1 // 写成 right = nums.length 也是ok的，区别仅在于数组为偶数个时的中间索引值是偏左还是偏右
  while (left <= right) {
    // 不要直接写成 (right + left) / 2 哦
    const middleIndex = Math.floor( left + ((right - left) >>> 1)) // 加减乘除运算符优先级高于位运算符
    const middleValue = nums[middleIndex]
    if(middleValue === target) return middleIndex
    if(middleValue > target) {
      right = middleIndex - 1 // 不能写成 right/left = middleIndex 这会导致死循环，比如 2,3 要找的数是2.5
    } else
      left = middleIndex + 1
  }
  return -1
}