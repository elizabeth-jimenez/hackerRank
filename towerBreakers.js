function towerBreakers(n, m) {
    return ((n % 2) && m > 1) ? 1 : 2;
}

console.log(towerBreakers(2, 2));
console.log(towerBreakers(1, 4));