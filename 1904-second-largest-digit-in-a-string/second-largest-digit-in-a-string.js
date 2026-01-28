/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
     s = s.split("")
    
    let num = []
   
    for(let i=0; i < s.length; i++) {
        if(!isNaN(s[i])) {
            
            num.push(Number(s[i]))
        }
    }
    
    num = num.sort((a,b) => b-a)
    
    let unique = [...new Set(num)]
    
    if(unique.length > 1) {
        return unique[1]
    }
    
    else {
        return -1
    }
};