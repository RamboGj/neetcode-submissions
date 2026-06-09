class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let top = 0
        let bottom = matrix.length - 1

        while (top <= bottom) {
            let mid = Math.floor((top + bottom) / 2)
            let midNum = matrix[mid][0]

            if (midNum > target) {
                bottom = mid - 1
            }

            if (midNum < target) {
                top = mid + 1
            }

            for (let lNum of matrix[mid]) {
                if (lNum === target) return true
            }
        }

        return false
    }
}
