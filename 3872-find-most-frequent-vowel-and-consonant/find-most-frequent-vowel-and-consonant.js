/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let obj = {}
    let str = s.split("")
    for(let i=0; i < str.length; i++) {
        if(obj[str[i]]) {
            obj[str[i]]++
        }
        else {
            obj[str[i]] = 1
        }
    }
    console.log(obj)
    let maxVow = 0
    let maxCons = 0
    let vowels = ['a', 'e', 'i', 'o', 'u']
    for(let i=0; i < s.length; i++) {
        if(vowels.includes(s[i])) {
            if(obj[s[i]] > maxVow) {
                maxVow = obj[s[i]]
            }
        }
        else {
            if(obj[s[i]] > maxCons) {
                maxCons = obj[s[i]]
            }
        }
    }
    return maxVow+maxCons
};