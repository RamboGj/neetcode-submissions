class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const frequentCountMap = new Map<number, number>()

        for (let num of nums) {
            frequentCountMap.set(num, (frequentCountMap.get(num) || 0) + 1)
        }

        return [...frequentCountMap.entries()]
            .sort((a, b) => b[1] - a[1]) // sort by frequency desc
            .slice(0, k)                 // take top k
            .map(([num]) => num)  
    }
}
