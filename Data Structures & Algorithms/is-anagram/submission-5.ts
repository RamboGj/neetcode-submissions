class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false

        let charsCount: number[] = new Array(26).fill(0)

        for (let i = 0; i < s.length; i++) {
            const indexS = s.charCodeAt(i) - 'a'.charCodeAt(0)
            const indexT = t.charCodeAt(i) - 'a'.charCodeAt(0)

            charsCount[indexS]++
            charsCount[indexT]--
        }

        for (let count of charsCount) {
            if (count !== 0) {
                return false
            } 
        }

        return true


      
    }}