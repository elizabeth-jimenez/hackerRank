function binarySearch(a, k) {

    let start = 0;
    let end = a.length - 1;

    while(start <= end) {
        let mid = Math.floor((start + end) / 2);

        if(a[mid] === k) {
            return mid
        }
        if(k > a[mid]){
            start = mid+1;            
        } else {
            end = mid-1;            
        }
    }

    return 'not found';
}

const input1 = [...Array(11).keys()].map(a => a*=a);
const input2 = [
    1,     3,   4,
   69,    71,  81,
   90,    99, 420,
 1337, 69420
];

console.log(binarySearch(input2, 71));