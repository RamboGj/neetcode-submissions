class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string) {
        let sanitizedString = s.toLowerCase().replace(/[^a-z0-9]/g, "")
        for (let i = 0; i < sanitizedString.length / 2; i++) {
            let current = sanitizedString.charAt(i)
            let reverse = sanitizedString.charAt(sanitizedString.length - 1 - i);
            if (current !== reverse) return false
        }
        return true
    }
}
