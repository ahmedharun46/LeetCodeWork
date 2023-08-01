/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let response = [];
    const areAllNine = digits.every(n => n === 9);
    if(areAllNine) {
        const allZero = Array(digits.length).fill(0);
        response = [1, ...allZero];
        return response;
    }
    response = [...digits];
    let extraVal = 1;
    for(let i=digits.length-1; i >= 0; i--) {
        const sum = digits[i] + extraVal;
        if(sum === 10) {
            response[i] = 0;
            extraVal = 1;
        } else {
            extraVal = 0;
            response[i] = sum;
        }
    }
    return response;    
};