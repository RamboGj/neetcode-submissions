class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let seenNums = new Set()

        for (let i of nums) {
            if (seenNums.has(i)) {
                return true
            }

            seenNums.add(i)
        }

        return false
    }
}
