function lonelyinteger(a) {
    let foundE = undefined;

    for (let i = 0; foundE === undefined; i++) {
        if(a.indexOf(a[i]) === a.lastIndexOf(a[i])) {
            foundE = a[i];
        }
    }

    return foundE;
}


console.log(lonelyinteger([1, 2, 3, 4 , 3, 2, 1]));