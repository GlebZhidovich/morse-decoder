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
    const regTenElem = /.{1,10}/g;
    const regElev = /11/g;
    const regTen = /10/g;
    let strArray = expr.match(regTenElem);
    strArray = strArray.map((str) => {
        if (str.indexOf('*') !== -1) {
            return ' ';
        }
        str = str.replace(regElev , '-');
        str = str.replace(regTen , '.');
        str = str.split('0').join('');
        return MORSE_TABLE[str];
    });
    return strArray.join('');
}

module.exports = {
    decode
}