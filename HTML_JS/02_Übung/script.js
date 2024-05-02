function generate() {
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let difference = parseInt(number2) - parseInt(number1) + 1;

    let randomnumber = Math.floor(Math.random() * difference) + parseInt(number1);
    document.getElementById("output").innerHTML = randomnumber;
}