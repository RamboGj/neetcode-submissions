class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]) {
        let maxProfit = 0
        let lowest = prices[0]

        for (let i = 0; i < prices.length; i++) {
            if (prices[i] < lowest) {
                lowest = prices[i]
            }

            let currentProfit = prices[i] - lowest
            
            if (currentProfit > maxProfit) {
                maxProfit = currentProfit
            }
        }

        return maxProfit
    }
}