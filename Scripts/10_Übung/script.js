function add(a, b) {
    return a + b;
}

let result = add(5, 3);
console.log(result);

function subtract(a, b) {
    return a - b;
}

let result2 = subtract(5, 3);
console.log(result2);

function multiply(a, b) {
    return a * b;
}

let result3 = multiply(5, 3);
console.log(result3);

function supercalculation(a, b) {
    return (a+b) / 2 *a
}

let result4 = supercalculation(5, 3);
console.log(result4);

N = 2024-1900
A = N % 19
B = [(7A+1)/19]
M = (11A+4-B) % 29
Q = [N/4]
W = (N+Q+31-M) % 7
P = 25-M-W