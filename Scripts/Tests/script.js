
let letter = 'A';
let lettersArray = letter.split("");

for (let i = 0; i < lettersArray.length; i++) {
    let result = i * lettersArray[i].charCodeAt(0);
    sum = sum + result;
}

console.log(sum);
