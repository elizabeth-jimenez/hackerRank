function pangrams(s) {
    let sUniq = new Set();

    s.split('').forEach(ss => {
        // if this is a letter, then add it to the set
        if(ss.toUpperCase().match(/[A-Z]/g)) {
            sUniq.add(ss.toUpperCase());
        }
    })

    // string: either 'pangram' or 'not pangram'
    return sUniq.size === 26 ? 'pangram' : 'not pangram';
}

const input1 = 'The quick brown fox jumps over the lazy dog';
const input2 = 'We promptly judged antique ivory buckles for the next prize';

console.log(pangrams(input2));