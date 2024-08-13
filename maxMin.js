function maxMin(k, arr) {
    const sortedArr = arr.sort((a,b) => a-b);
    let unfairness = arr[k-1] - arr[0];
    for(var i = 1; i <= arr.length - k; i++){
        unfairness = arr[i + k - 1] - arr[i] < unfairness ? arr[i + k - 1] - arr[i] : unfairness;
    }
    return unfairness;
}

const input1 = [1, 12, 3, 40, 10, 20, 30, 34, 35, 40];
const input2 = [100, 200, 300, 350, 400, 401, 402];

console.log(maxMin(4, input1)); // 6
console.log(maxMin(3, input2)); // 2