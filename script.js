const narrativeStructures = [
    'Branching Path', 
    'Hub-and-Spoke', 
    'Loop-and-Grow', 
    'Time-Delayed Progression',
    'Exploration-Based'
];
const categories = ['Example Game', 'Twine Feature', 'Author'];
const options = [
    ['Detectiveland', 'Seedship', 'Their Angelical Understanding', 'The Silence Under Your Bed', 'Birdland'],
    ['Conditional Paths', 'CSS Styling', 'Story Branching', 'Variable Tracking', 'Inventory Management'],
    ['Robin Johnson', 'John Ayliff', 'Porpentine', 'Della Watson', 'Brendan Patrick Hennessy']
];

// Solution Grid (Correct Answers)
const solution = {
    'Branching Path': ['Detectiveland', 'Conditional Paths', 'Robin Johnson'],
    'Hub-and-Spoke': ['Seedship', 'CSS Styling', 'John Ayliff'],
    'Loop-and-Grow': ['Their Angelical Understanding', 'Story Branching', 'Porpentine'],
    'Time-Delayed Progression': ['The Silence Under Your Bed', 'Variable Tracking', 'Della Watson'],
    'Exploration-Based': ['Birdland', 'Inventory Management', 'Brendan Patrick Hennessy']
};

// Advanced Clues
const clues = [
    "The game that uses Inventory Management does not follow a branching narrative and was written by the author whose name comes last alphabetically.",
    "Neither the Loop-and-Grow structure nor Time-Delayed Progression uses Conditional Paths as their primary Twine feature.",
    "The author of Birdland did not write the game that uses CSS Styling, but their narrative structure directly precedes the one that does.",
    "The game that relies on Variable Tracking is one column to the right of the narrative structure that uses Story Branching.",
    "Detectiveland and Seedship are not part of the same row, but Seedship's author comes before the author of the Loop-and-Grow structure.",
    "Porpentine’s game is not the one that uses CSS Styling, and it does not share a row with The Silence Under Your Bed.",
    "The game that uses CSS Styling is directly next to the game that uses Story Branching, but it is not in the Branching Path column.",
    "Robin Johnson’s game is in the same row as Conditional Paths, but not in the last column.",
    "The Exploration-Based narrative’s Twine feature is used by the game that was written by Brendan Patrick Hennessy.",
    "The game that uses Inventory Management is positioned between the ones using Story Branching and CSS Styling – but not in that order."
];

// Generate Grid on Page Load
window.onload = function() {
    const tableBody = document.querySelector('#logic-grid tbody');
    const clueList = document.querySelector('#clue-list');

    // Populate clues
    clues.forEach(clue => {
        const listItem = document.createElement('li');
        listItem.innerText = clue;
        clueList.appendChild(listItem);
    });

    // Generate grid rows
    categories.forEach(category => {
        const row = document.createElement('tr');
        const headerCell = document.createElement('th');
        headerCell.innerText = category;
        row.appendChild(headerCell);

        narrativeStructures.forEach(() => {
            const cell = document.createElement('td');
            cell.classList.add('cell');
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });

    attachCellListeners();
};

// Attach Click Event to Toggle ✓, ✗, or Blank
function attachCellListeners() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('click', function () {
            if (cell.innerHTML === '') {
                cell.innerHTML = '✓';
            } else if (cell.innerHTML === '✓') {
                cell.innerHTML = '✗';
            } else {
                cell.innerHTML = '';
            }
        });
    });
}

// Grading the Grid
function submitGrid() {
    const cells = document.querySelectorAll('.cell');
    let correctCount = 0;
    const total = cells.length;

    let index = 0;
    categories.forEach((category, rowIndex) => {
        narrativeStructures.forEach((structure, colIndex) => {
            const cell = cells[index];
            const correctAnswer = solution[structure][rowIndex];
            const cellValue = cell.innerHTML;

            if (cellValue === '✓' && options[rowIndex][colIndex] === correctAnswer) {
                cell.style.backgroundColor = 'rgba(0, 255, 0, 0.2)';
                correctCount++;
            } else if (cellValue === '✓') {
                cell.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
            }
            index++;
        });
    });

    const percentageCorrect = Math.round((correctCount / total) * 100);
    document.getElementById('result').innerText = 
        `You got ${correctCount}/${total} correct (${percentageCorrect}%).`;
}
