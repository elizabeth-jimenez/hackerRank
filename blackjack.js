let sumMemo = {
}

function blackjack(sum) {
    let count = 0;

    if(sum > 21) {
        return 1;
    }
    if(sum >= 17) {
        return 0;
    }


    if(sumMemo[sum]) {
        return sumMemo[sum];
    }
    

    for(let i = 1; i <= 10; i++) {
        count += blackjack(i+sum);
    }

    sumMemo[sum] = count;

    return count;
}

console.log(blackjack(10));
