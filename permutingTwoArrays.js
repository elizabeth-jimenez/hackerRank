function permutingTwoArrays(k, A, B) {
    let allGreaterOrEqualToK = true;
    A.sort((a,b) => a-b);
    B.sort((a,b) => b-a);

    A.forEach((e, i) => {
        if((A[i] + B[i]) < k) {
            allGreaterOrEqualToK = false;
        }
    })

    // returns a string
    return allGreaterOrEqualToK ? 'YES' : 'NO';
}

console.log(permutingTwoArrays(1, [1, 0], [0, 2]));
console.log(permutingTwoArrays(10, [2, 1, 3], [7, 8, 9]));
console.log(permutingTwoArrays(5, [1, 2, 2, 1], [3, 3, 3, 4]));