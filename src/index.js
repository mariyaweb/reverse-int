module.exports = function reverse(n) {
    let reverseRes = "";
    let numStr = Math.abs(n).toString();

    for (let i = numStr.length; i >= 0; i--) {
        if ((numStr.length - 1) == 0) {
            reverseRes += "";
        } else {
            reverseRes += numStr.charAt(i);
        }
    }
    return reverseRes;
}
