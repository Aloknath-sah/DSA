/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let str = s.split("")
    for(let i=0; i < str.length; i = i+(2*k)) {
        let mid = Math.floor(k/2)
        for(let j=0; j < mid; j++) {
            let temp = str[i+j]
            str[i+j] = str[i+k-1-j]
            str[i+k-1-j] = temp
        }
    }
    return str.join("")
};