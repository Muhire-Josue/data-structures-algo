function findFactorialRecursive(number) {

    if(number === 2 || number === 1) {
        return number;
    }

    return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
    let answer = 1;
    if (number === 2) {
        answer = 2;
    }

    for (let i = 2; i <= number; i++) {
        answer = answer * i;
    }
    return answer;
}

function fibanocciIterative(n) {

}

function fibanocciRecursive(n) {
    if(n < 2) {
        return n;
    }

    return fibanocciRecursive(n-1) + fibanocciRecursive(n-2);
}

// console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(5));
