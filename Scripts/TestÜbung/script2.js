const data1 = "5,3,4,1,2,3,5";
let numbers = data1.split(",").map(Number);

let thirdNumber = 1;
for (let index = 0; index < numbers.length; index += 3) {
    thirdNumber *= numbers[index];
}


let count = 0;
for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 == 0) {
        count++
    }
}

let endNumber = thirdNumber / count;

console.log(endNumber);

