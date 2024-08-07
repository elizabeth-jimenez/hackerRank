function diagonalDifference(arr) {
    let LR = 0;
    let RL = 0;

    for (let i = 0; i < arr.length; i++) {
        const inverseI = arr.length - 1 - i;
        LR += arr[i][i];
        RL += arr[i][inverseI];
    }

    return Math.abs(LR - RL);
}

const squareMatrix = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];

console.log(diagonalDifference(squareMatrix));  