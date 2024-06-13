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

const data2 = "5,3,4,1,2,3,5";
let numbers2 = data2.split(",").map(Number);

let endNumber2 = 0;
let evenCount = 0;
let notEvenCount = 0;
for (let index = 0; index < numbers2.length; index++) {
    if (numbers2[index] % 2 == 0) {
        evenCount += numbers2[index]
    }
    else {
        notEvenCount += numbers2[index]
    };
    endNumber2 = evenCount / notEvenCount
}

console.log(endNumber2);