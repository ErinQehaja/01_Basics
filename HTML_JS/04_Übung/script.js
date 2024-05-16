let todos = [
    { id: 1, title: "putzen", isDone: false },
    { id: 2, title: "kochen", isDone: true },
    { id: 3, title: "einkaufen", isDone: false },
    { id: 4, title: "tanken", isDone: false },

]

let idGiver = 4;
document.getElementById("input").addEventListener("change", function (event) {
    console.log(event.target.value);
    idGiver++;
    todos.push({ id: idGiver, title: event.target.value, isDone: false })
    printTasks();
    event.target.value = "";
})

function printTasks() {
    let html = "";
    todos.forEach(element => {
        html += "<div>" + element.title + " - " + element.isDone + "</div>"

    });

    document.getElementById("todos").innerHTML = html;
}

printTasks();
