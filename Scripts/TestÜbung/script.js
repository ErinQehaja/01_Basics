
const data = "Hans geht heute schwimmen";

let arrdata = data.split(" ");

let placeholder = " ";
for (let index = arrdata.length - 1; index >= 0; index--) {
    let element = arrdata[index];
    placeholder += element;
    placeholder += " ";
}

console.log(placeholder);


const numbers = "6,8,3,6,3,6,4,6,3,5,8,9";

let arrnumbers = numbers.split(",");

let currentnumber = parseInt(arrnumbers[0]);
let count = parseInt(0);
for (let index = 0; index < arrnumbers.length; index++) {
    if (arrnumbers[index] < currentnumber) {
        currentnumber = parseInt(arrnumbers[index])
        count = 0;
    }
    if (parseInt(arrnumbers[index]) === currentnumber) {
        count += 1;
    }

}

console.log(currentnumber, count);

const numbers2 = "4,6,8,2,7,1,2,2,4,2,4";
let arrnumbers2 = numbers2.split(",");
let zähler = arrnumbers2.length

console.log(zähler);