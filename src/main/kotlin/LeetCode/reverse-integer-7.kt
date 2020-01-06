package LeetCode

import java.lang.NumberFormatException

class Solution7 {
    fun reverse(x: Int): Int {
        return try {
            x.toString().reversed().let {
                if(it.contains('-'))
                    -it.replace("-", "").toInt()
                else
                    it.toInt()
            }
        } catch(e: NumberFormatException) {
            0
        }
    }
}

fun main() {
    var num = 1964632439
    print(Solution7().reverse(num))
}

/* solution 2
*     class Solution {
        fun reverse(x: Int): Int {
            var n = Math.abs(x)
            var result = 0L

            while (n > 0) {
                result = result * 10 + n % 10
                n = n / 10
            }

            if (x < 0) {
                result = -result
            }

            return if (result > Int.MAX_VALUE || result < Int.MIN_VALUE) {
                0
            } else {
                result.toInt()
            }
        }
    }
*
* */