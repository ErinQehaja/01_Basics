let banana = "Banane";
let apple = "Apple";
let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;
let appleWeight = 0.34;
let bananaWeight = 0.22;

console.log("Anzahl Bananen pro Kilo: " + (1 / bananaWeight));
console.log("Anzahl Äpfel pro Kilo: " + (1 / appleWeight));

let numberofApples = 8;
let totalPriceApple = numberofApples * applePricePerKilo * appleWeight;
console.log("Preis von 8 Äpfeln: " + totalPriceApple);

let numberofBananas = 17;
let totalPriceBanana = numberofBananas * bananaPricePerKilo * bananaWeight;
console.log("Preis von 17 Bananen: " + totalPriceBanana);

let weightOfAppleInTons = 1000;
let totalPriceAppleInTons = weightOfAppleInTons * applePricePerKilo
console.log("Preis von 1 Tonne Äpfel: " + totalPriceAppleInTons);

let weightOfBananasInTon = 1000;
let totalPriceBananasInTons = weightOfBananasInTon * bananaPricePerKilo
console.log("Preis von 1 Tonne Bananen: " + totalPriceBananasInTons);
