/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign = Math.sign(x)
    let reversed = Number(Math.abs(x).toString().split("").reverse().join(""))
    let revNum = Number(reversed) * sign
    
    if((revNum < (Math.pow(2, 31)-1)) && (revNum >= -(Math.pow(2, 31)))) {
        return revNum
    }
    else {
        return 0
    }
};