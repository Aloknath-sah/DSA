/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let obj = {}
    for(let i=0; i < numbers.length; i++) {
        obj[numbers[i]] = i
    }
    for(let i=0; i < numbers.length; i++) {
        let pairToFind = target-numbers[i]
        if(pairToFind in obj && obj[pairToFind] !== i) {
            return [i+1, obj[pairToFind]+1]
        }
    }
};