function caesarCipher(s, k) {
    const kk = k%26;
    let ss = s.split('');
    let encryptedString = '';
    ss.forEach(c => {
        const cCode = c.charCodeAt(0);
        const cCodeOffset = cCode+kk;
        if((65 <= cCode) && (cCode <= 90)) {
            encryptedString += String.fromCharCode(cCodeOffset > 90 ? cCodeOffset - 26 : cCodeOffset);
        } else if((97 <= cCode) && (cCode <= 122)) {
            encryptedString += String.fromCharCode(cCodeOffset > 122 ? cCodeOffset - 26 : cCodeOffset);
        } else {
            encryptedString += c;
        }
    })
    return encryptedString;
}

const input1 = 'middle-Outz';
const input2 = 'Pz-/aI/J`EvfthGH';

console.log(caesarCipher(input1, 2)); // okffng-Qwvb
console.log(caesarCipher(input2, 66)); // Dn-/oW/X`SjthvUV
