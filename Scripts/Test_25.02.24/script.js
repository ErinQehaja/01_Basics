const data = "Hans geht heute schwimmen! das ist gut";
const wortliste = data.split(" ");
let output1 = "";

for (let i = 0; i < wortliste.length; i += 3) {
    console.log(wortliste[i]);
}


const numbers = "8,2,1,4,6,1,8,7";
let arrnumbers = numbers.split(",");
let count = 0;
for (let index = 0; index < arrnumbers.length; index++) {
    let number = parseInt(arrnumbers[index]);
    if (number === 4) {
        count++
    }
    if (number === 5) {
        count++
    }
    if (number === 6) {
        count++
    }
    if (number === 7) {
        count++
    }
}
console.log(count);


const temperaturesWeek1 = "-1,5,1,-10,-11,2,30,-8,-14";
const temperaturesWeek2 = "-1,5,3,-10,-11,2,30,-8,-44";
let arrtemp1 = temperaturesWeek1.split(",").map(Number);
let arrtemp2 = temperaturesWeek2.split(",").map(Number);
let zusammenzählen = 0;
let mittelwert1 = 0;
for (let index = 0; index < arrtemp1.length; index++) {
    zusammenzählen += arrtemp1[index];
    let mittel = zusammenzählen / arrtemp1.length
    mittelwert1 = mittel
}

console.log("Mittelwert Woche 1: " + mittelwert1);

let zusammenzählen2 = 0;
let mittelwert2 = 0;
for (let index = 0; index < arrtemp2.length; index++) {
    zusammenzählen2 += arrtemp2[index];
    let mittel2 = zusammenzählen2 / arrtemp2.length
    mittelwert2 = mittel2
}

console.log("Mittelwert Woche 1: " + mittelwert2);

if (mittelwert1 > mittelwert2) {
    console.log("Woche 1 war wärmer");
}

if (mittelwert2 > mittelwert1) {
    console.log("Woche 2 war wärmer");
}

if (mittelwert2 == mittelwert1) {
    console.log("Beide Wochen waren gleich warm");
}





