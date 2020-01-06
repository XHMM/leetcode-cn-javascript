package LeetCode

import kotlin.collections.HashMap

class Solution1 {
    fun twoSum(nums: IntArray, target: Int): IntArray {
        val map: HashMap<Int, Int> = hashMapOf()
        for(i in nums.indices) {
            val diff: Int = target - nums[i]
            if (diff in map) return intArrayOf(map[diff]!!, i)
            else map[nums[i]] = i
        }
        return intArrayOf()
    }
}

fun main() {
    print(Solution1().twoSum(intArrayOf(2, 7, 5, 4), 9).contentToString())
}