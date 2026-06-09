class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numsSet = new Set()

         for (const num of nums) {
            if (numsSet.has(num)) return true;
            numsSet.add(num);
        }

        return false
    }
}
