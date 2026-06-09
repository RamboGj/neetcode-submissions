class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    isAnagram(s: string, t: string): boolean {
        let charactersMap = new Map()
        let tCharactersMap = new Map()

        for (let i = 0; i < s.length; i++) {
            let char = s[i]
            if (charactersMap.has(char)) {
                const currentCount = charactersMap.get(char)
                charactersMap.set(char, currentCount + 1)
                continue
            }
            charactersMap.set(char, 1)
        }

        
        for (let i = 0; i < t.length; i++) {
            let char = t[i]
            if (tCharactersMap.has(char)) {
                const currentCount = tCharactersMap.get(char)
                tCharactersMap.set(char, currentCount + 1)
                continue
            }
            tCharactersMap.set(char, 1)
        }

            for (let i of tCharactersMap.entries()) {
                const [key, value] = i

                if (charactersMap.size !==  tCharactersMap.size|| charactersMap.get(key) !== value) {
                    return false
                }
            }

            return true
    }}