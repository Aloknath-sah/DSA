/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString()
    let b = x.split("")
    let a = ""
    for(let i=b.length-1; i >= 0; i--) {
        a += b[i]
    }
    b = b.join("")
    b = Number(b)
    a = Number(a)
    
    if(a === b) {
        return true
    }
    else {
        return false
    }
};