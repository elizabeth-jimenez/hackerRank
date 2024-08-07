//  *  1. INTEGER_ARRAY s
//  *  2. INTEGER d
//  *  3. INTEGER m
function birthday(s, d, m) {
    let numOfWays = 0;

    // slice on m, creeping forward
    s.forEach((ss, i) => {
        if(i <= (s.length - m)) {
            numOfWays = s.slice(i, i+m).reduce((a, c) => a+c, 0) === d ? ++numOfWays : numOfWays;
        }
    });

    // returns the number of ways the bar can be divided
    return numOfWays;
}

const input1 = [2, 2, 1, 3, 2];

console.log(birthday(input1, 4, 3));