/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let arr = []
    for(let i=0; i < words.length; i++) {
        let str = words[i].split("")
        let j=0
        while(j < str.length) {
            if(str[j] === x) {
                arr.push(i)
                break
            }
            j++
        }
    }
    console.log(arr)
    return arr
};