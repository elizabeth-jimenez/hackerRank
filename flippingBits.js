function flippingBits(n) {

    // convert to base 2
    let bin = n.toString(2).split('');

    let flipped = bin.map(b => {
        return parseInt(b) ? 0 : 1
    });
    
    flipped.unshift(...Array(32-flipped.length).fill(1));
   
    // convert to base 10
    return parseInt(flipped.join(''), 2)   
}

console.log(flippingBits(9));