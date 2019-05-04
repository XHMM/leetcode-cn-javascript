/*
问： 加减乘除 和 位运算符 哪个优先级高？

* 二分查找：数组元素须是排好序的
* */


function binarySearch(nums: number[], target: number):number {
  if(nums.length === 1) return nums[0] === target ? 0 : -1
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    // 不要直接写成 (right + left) / 2 哦
    const middleIndex = Math.floor( left + ((right - left) >>> 1)) // 加减乘除运算符优先级高于位运算符
    const middleValue = nums[middleIndex]
    if(middleValue === target) return middleIndex
    if(middleValue > target) {
      right = middleIndex - 1
    } else
      left = middleIndex + 1
  }
  return -1
}