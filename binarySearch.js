function binarySearch(a, k) {
    let nArr = a;
    let go = true;
    let found = false;
    while(go) {
        let mid = Math.floor(nArr.length / 2);
        if(nArr.length === 1){
            go = false;
        }
        if(nArr[mid] === k) {
            found = true;
            go = false;
        }
        if(nArr[mid] > k){
            nArr = nArr.slice(0, mid);
        } else {
            nArr = nArr.slice(mid+1);
        }
    }
    console.log('hello?');
    return found;
}

const input1 = [...Array(11).keys()].map(a => a*=a);
console.log(binarySearch(input1, 7));