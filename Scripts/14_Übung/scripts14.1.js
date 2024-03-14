let field = [
    [1, 2, 2],
    [2, 2, 1],
    [1, 1, 1]
];

for (let row = 0; row < field.length; row++) {
    let currentRow = field[row];
    let output = "";
    for (let col = 0; col < currentRow.length; col++) {
        output += currentRow[col] + " ";
    }
    console.log(output);
}

let winner = null;


for (let row = 0; row < field.length; row++) {
    if (field[row][0] === 1 && field[row][1] === 1 && field[row][2] === 1) {
        winner = 1;
        break;
    }
}

for (let col = 0; col < field[0].length; col++) {
    if (field[0][col] === 1 && field[1][col] === 1 && field[2][col] === 1) {
        winner = 1;
        break;
    }
}

if ((field[0][0] === 1 && field[1][1] === 1 && field[2][2] === 1) ||
    (field[0][2] === 1 && field[1][1] === 1 && field[2][0] === 1)) {
    winner = 1;
}


if (!winner) {
    for (let row = 0; row < field.length; row++) {
        if (field[row][0] === 2 && field[row][1] === 2 && field[row][2] === 2) {
            winner = 2;
            break;
        }
    }

    for (let col = 0; col < field[0].length; col++) {
        if (field[0][col] === 2 && field[1][col] === 2 && field[2][col] === 2) {
            winner = 2;
            break;
        }
    }

    if ((field[0][0] === 2 && field[1][1] === 2 && field[2][2] === 2) ||
        (field[0][2] === 2 && field[1][1] === 2 && field[2][0] === 2)) {
        winner = 2;
    }
}


if (winner) {
    console.log("Player " + winner + " is the winner");
} else {
    console.log("It is a tie!");
}


