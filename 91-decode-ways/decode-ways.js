/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let dp = {}
    let fn = (remS) => {
        if(remS === '') return 1;
        if(remS == '0') return 0;
        let n = remS.length
        let ans = 0
        let oneDigit = remS.substring(n-1)
        let twoDigit = remS.substring(n-2)
        if(remS in dp) return dp[remS]
        
        if(oneDigit !== '0') {
            ans += fn(remS.substring(0, n-1))
        }
        if(twoDigit >= 10 && twoDigit <= 26) {
            ans += fn(remS.substring(0, n-2))
        }
        dp[remS] = ans
        return ans
    }

    return fn(s)
};