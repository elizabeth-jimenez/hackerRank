function allPermutations(str) {
    let permsArr = [];

    if(str.length === 1) {
        return [str];
    }

    let strArr = str.split('');

    strArr.forEach((s, i) => {
        permsArr.push(...allPermutations(strArr.toSpliced(i,1).join('')).map(l => s.concat(l)));
    })  

    return permsArr;
}

const input1 = 'abcd';

console.log(allPermutations(input1));