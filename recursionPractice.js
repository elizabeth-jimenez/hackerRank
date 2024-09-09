function sumToN(n) {
    if(n === 1) {
        return 1;
    }
    return n + sumToN(n-1);
}
console.log(sumToN(5));


function factorialN_R(n) {
    if(n == 1) {
        return 1;
    }
    return n*factorialN_R(n-1);
}
console.log(factorialN_R(5));
function factorialN_I(n) {
    let elsa = 1;
    for(var i = 1; i <= n; i++) {
        elsa *= i;
    }
    return elsa;
}
console.log(factorialN_I(5));


function pow(n, m) {
    if(m === 0){
        return 1;
    }
    if(m === 1){
        return n;
    }
    return n * pow(n, m-1);
}
console.log(pow(2, 5));


function fib_R(n) {
    if(n === 2){
        return 1;
    }
    return fib_R(n-1) + fib_R(n-2);
}
console.log(fib_R(14)); //377
function fib_I(n) {
    return ;
}
console.log(fib_I(14)); //377
