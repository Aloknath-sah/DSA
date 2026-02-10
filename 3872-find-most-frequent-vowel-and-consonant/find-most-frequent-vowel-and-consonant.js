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
    let vowel = ['a', 'e', 'i', 'o', 'u']
    let maxVow = 0
    let maxCons = 0
    for(let i=0; i < str.length; i++) {
        if(vowel.includes(str[i])) {
            if(obj[str[i]] > maxVow) {
                maxVow = obj[str[i]]
            }
        }
        else {
            if(obj[str[i]] > maxCons) {
                maxCons = obj[str[i]]
            }
        }
    }
    return maxVow + maxCons
};