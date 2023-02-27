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
    let decodStr = '';
    let letter = '';
    for (let i = 0; i < expr.length; i += 10) {
        letter = expr.slice(i, i + 10);
        if (letter == '**********') 
        {
            decodStr += ' ';
        } else 
        {
            let letterStr = '';
            for (let j = 0; j < letter.length; j += 2) 
            {
                if (letter.slice(j, j + 2) == 10) letterStr += '.';
                else if (letter.slice(j, j + 2) == 11) letterStr += '-';
            }
            decodStr += MORSE_TABLE[letterStr];
        }
    }

    return decodStr
}

module.exports = {
    decode
}