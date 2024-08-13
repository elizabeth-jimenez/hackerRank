function flippingMatrix(matrix) {
    const halfMlen = matrix.length/2;
    const mLen = matrix.length - 1;
    let sum = 0;
    
    for(let r = 0; r < halfMlen; r++) {
        for(let c = 0; c < halfMlen; c++) {
            sum += [matrix[r][c], matrix[r][mLen - c], matrix[mLen - r][mLen - c], matrix[mLen - r][c]].sort((a, b) => b-a)[0];
        }
    }
    return sum;
}

const input = [
[112, 42, 83, 119],
[56, 125, 56, 49],
[15, 78, 101, 43],
[62, 98, 114, 108]
];

console.log(flippingMatrix(input));