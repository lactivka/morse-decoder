const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    
    let decoded = []; // result array
    let subexpr = ''; // subexpression with 10 elements from input expression
    
    
    for (let i = 0; i < expr.length; i += 10) {
        subexpr = expr.slice(i, i + 10); // create subexpression
        let coded = ''; // coded letter
        if (subexpr === '**********') 
            decoded.push(' '); // if input expression includes space
        else {    // code letter '11' with '-' and '10' with '.'
            for (let k = 0; k < subexpr.length; k += 2) {
            if (subexpr[k] === '1' && subexpr[k + 1] === '1') coded += '-';
                else if (subexpr[k] === '1' && subexpr[k + 1] === '0') coded += '.';
            }
        decoded.push(MORSE_TABLE[coded]); // add in result array decoded letter from MORSE_TABLE according to coded letter
        }
    }
    return decoded.join(''); // get string from result array and return
}

module.exports = {
    decode
}