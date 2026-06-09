class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        if (strs.length === 1) return [strs]
        let groupsMap = new Map<string, string[]>()

        for (let str of strs) {
            const count = new Array(26).fill(0)

            for (let char of str) {
                count[char.charCodeAt(0)-'a'.charCodeAt(0)]++
            }

            const key = count.join(',')

            if (groupsMap.has(key)) {
                const currentValue = groupsMap.get(key)
                groupsMap.set(key, [...currentValue, str])
                continue
            }

            groupsMap.set(key, [str])
        }

        return Array.from(groupsMap.values())
    }
}
