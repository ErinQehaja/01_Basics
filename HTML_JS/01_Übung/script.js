
function buttonPlus() {
    let div = document.getElementById('sign');
    var character = '+';
    div.innerHTML += character;
}


function buttonClick() {
    console.log("click");
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    let result = parseFloat(num1) + parseFloat(num2);
    console.log(result);
}

