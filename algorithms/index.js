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
    let arr = [0, 1];
    for (let i = 2; i < n+1; i++){
        arr.push(arr[i-2] + arr[i-1]);
    }
    return arr[n];
}

function fibanocciRecursive(n) {
    if(n < 2) {
        return n;
    }

    return fibanocciRecursive(n-1) + fibanocciRecursive(n-2);
}

// console.log(findFactorialIterative(5));
// console.log(findFactorialRecursive(5));
// console.log(fibanocciRecursive(6));
console.log(fibanocciIterative(6));
