const data = "Hans geht heute schwimmen";

let arr = data.split(" ");

let output = "";

for (let index = arr.length - 1; index >= 0; index--) {
    output += arr[index];
    output += " ";
}

console.log(output);

const numbers = "1,2,1,4,6,8,7";

let num = numbers.split(",");
let output2 = parseInt(num[0]);
let minCount = 0;

for (let i = 0; i >= num.length; i++) {
    let number = parseInt(num[i]);
    if (num[i] < number) {
        output2 = number;
        if (number === number) {
            minCount++;
        }
    }
}

console.log(output2, minCount);