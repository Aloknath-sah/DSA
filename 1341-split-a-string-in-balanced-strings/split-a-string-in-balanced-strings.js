/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let str = s.split("")
    let count = 0
    let Bcount = 0
    for(let i=0; i < str.length; i++) {
        if(str[i] == 'R') {
            ++count
            if(count==0) {
                Bcount++
            }
        }
        else {
            --count
            if(count==0) {
                Bcount++
            }
        }
    }
    return Bcount
};