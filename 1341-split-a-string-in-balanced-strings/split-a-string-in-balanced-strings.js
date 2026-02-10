/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let str = s.split("")
    let count = 0
    let balanced = 0
    for(let i=0; i < str.length; i++) {
        if(str[i] === 'R') {
            count++
            if(count === 0) {
                balanced++
            }
        }
        else if(str[i] === 'L') {
            count--
            if(count === 0) {
                balanced++
            }
        }
        
    }
    console.log(count)
    return balanced
};