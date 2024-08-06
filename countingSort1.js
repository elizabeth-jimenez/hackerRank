function countingSort1(arr) {
    let frequencyArr = Array(100).fill(0);

    arr.forEach(aa => {
        frequencyArr[aa] = ++frequencyArr[aa];
    })

    // return int[100] frequency array
    return frequencyArr;
}

const input1 = [1, 1, 3, 2, 1]; // should return [0, 3, 1, 1]

console.log(countingSort1(input1));