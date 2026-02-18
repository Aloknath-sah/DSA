/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let str = s.split("")
    let stack = []
    let ans = ""
    for(let i=0; i < str.length; i++) {
        if(str[i] === '('){
            stack.push(str[i])
            if(stack.length > 1) {
                ans += "("
            }
        }
        else {
            stack.pop()
            if(stack.length > 0) {
                ans += ")"
            }
           
        }
    }
    return ans
};