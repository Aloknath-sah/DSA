/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim()
    s = s.split(" ").filter((word) => word !== '')
    let mid = Math.floor(s.length/2)
   
    for(let i=0; i < mid; i++) {
        let temp = s[i].trim()
        s[i] = s[s.length-1-i].trim()
        s[s.length-1-i] = temp
    }
    
    return s.join(" ")
};