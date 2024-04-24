// Satz umgedreht Beispiel

const data = "Hans geht heute schwimmen";

let arrdata = data.split(" ");

let placeholder = " ";
for (let index = arrdata.length - 1; index >= 0; index--) {
    let element = arrdata[index];
    placeholder += element;
    placeholder += " ";
}

console.log(placeholder);

// Kleinste Nummer Beispiel

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

// Eigenes Zähler Beispiel

const numbers2 = "4,6,8,2,7,1,2,2,4,2,4";
let arrnumbers2 = numbers2.split(",");
let zähler = arrnumbers2.length

console.log(zähler);

// Temperatur Beispiel

const temperatures = "-1,5,51,1,-10,-11,2,90,-8,-44";
const arrtemp = temperatures.split(",").map(Number); // Konvertiere Strings in Zahlen

let closestIndex = 0;
let closestDistance = Math.abs(arrtemp[0]); // Initialisiere mit dem Abstand der ersten Zahl zu 0

for (let i = 1; i < arrtemp.length; i++) {
    const distance = Math.abs(arrtemp[i]);
    if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = i;
    }
}

console.log("Die Zahl am nächsten zu 0 ist:", arrtemp[closestIndex]);

// Temperatur Beispiel erweitert

const temperatureData = "-1,5,51,1,-10,-11,2,90,-8,-44";
const temperatureArray = temperatureData.split(",").map(Number); // Konvertiere Strings in Zahlen

let closestIndexTemp = 0;
let minDistanceTemp = Math.abs(temperatureArray[0]); // Initialisiere mit dem Abstand der ersten Zahl zu 0

for (let i = 1; i < temperatureArray.length; i++) {
    const distance = Math.abs(temperatureArray[i]);
    if (distance < minDistanceTemp || (distance === minDistanceTemp && temperatureArray[i] > 0)) {
        minDistanceTemp = distance;
        closestIndexTemp = i;
    }
}

console.log("Die Zahl am nächsten zu 0 ist:", temperatureArray[closestIndexTemp]);
