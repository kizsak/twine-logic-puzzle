const grid = Array.from({ length: 15 }, () => Array(15).fill(false));
const answerKey = Array.from({ length: 15 }, () => Array(15).fill(false));

const labelsX = [
    "Cascade", "Hub-and-Spoke", "Loop-and-Grow", "Triggered Possession", "Open Map",
    "Branching Narratives", "Variable Tracking", "Looping Passages", "Timed Text Display",
    "Inventory Management", "Swan Hill", "The Great Mortality",
    "You Can't Wait to Get to the Pharmacy", "You Contain Multitudes", "A Day in the Life of a Noble Lady"
];

const labelsY = [...labelsX];

// Answer Key Setup
answerKey[0][5] = true;  
answerKey[0][10] = true; 
answerKey[0][14] = true; 
answerKey[1][9] = true;  
answerKey[1][14] = true; 
answerKey[1][4] = true;  
answerKey[2][7] = true;  
answerKey[2][13] = true; 
answerKey[2][3] = true;  

// Generate Table
const table = document.getElementById('logic-grid');

const headerRow = table.rows[0];
labelsX.forEach(label => {
    const th = document.createElement('th');
    th.textContent = label;
    headerRow.appendChild(th);
});

for (let i = 0; i < 15; i++) {
    const row = table.insertRow();
    const rowHeader = document.createElement('th');
    rowHeader.textContent = labelsY[i];
    row.appendChild(rowHeader);

    for (let j = 0; j < 15; j++) {
        const cell = row.insertCell();
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.onchange = () => setGrid(i, j, checkbox.checked);
        cell.appendChild(checkbox);
    }
}

// Update Grid on Checkbox Change
function setGrid(row, col, value) {
    grid[row][col] = value;
}

// Check Answers and Unlock Next Passage
function checkAnswers() {
    let correct = 0;
    let totalCorrect = answerKey.flat().filter(Boolean).length;

    for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 15; j++) {
            if (grid[i][j] === answerKey[i][j]) {
                correct++;
            }
        }
    }

    if (correct === totalCorrect) {
        alert('Perfect score! You may continue.');
        document.getElementById('nextLink').style.display = 'block';
    } else {
        alert(`You got ${correct} out of ${totalCorrect} correct. Try again!`);
    }
}
