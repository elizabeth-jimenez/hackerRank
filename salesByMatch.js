function sockMerchant(n, ar) {
    const socks = [];
    let pairs = 0;
    for(let i = 0; i < ar.length; i++) {
        let elsa = socks.indexOf(ar[i]);
        if(elsa >= 0){
            pairs += 1;
            socks.splice(elsa,1);
        } else {
            socks.push(ar[i]);
        }
    }
    return pairs;
}

const input1 = [10, 20, 20, 10, 10, 30, 50, 10, 20];

console.log(sockMerchant(9, input1));