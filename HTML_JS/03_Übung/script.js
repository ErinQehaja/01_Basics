let data = [
    { firstName: "Hans", lastName: "Huber", points: 30 },
    { firstName: "Peter", lastName: "Strauß", points: 58 },
    { firstName: "Holga", lastName: "Gewind", points: 24 },
];

function loadpeople() {
    let html = "";
    data.forEach(element => {
        html += `<div class="person-box">${element.firstName} ${element.lastName} hat ${element.points} Punkte</div>`;
    });

    document.getElementById("content").innerHTML = html;

}

loadpeople();