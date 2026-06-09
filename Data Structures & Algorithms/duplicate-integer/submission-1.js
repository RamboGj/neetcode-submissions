class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numsSet = new Set()
        let hasDup = false;

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            if (numsSet.has(num)) {
                hasDup = true
                break
            } else {
                numsSet.add(num)
            }
        }

        return hasDup;
    }
}
