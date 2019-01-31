/**
 * Convert the given number into a roman numeral.
 * All roman numerals answers should be provided in upper-case.
 */


function convertToRoman(num) {

    var roman = '';

    var map = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    for (let i of Object.keys(map)) {

        let quotient = Math.floor(num / map[i]);

        num -= quotient * map[i];

        roman += i.repeat(quotient)
    }

    return roman;
}

console.log(convertToRoman(36));