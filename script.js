const narrativeStructures = [
    'Branching Path', 
    'Hub-and-Spoke', 
    'Loop-and-Grow', 
    'Time-Delayed Progression',
    'Exploration-Based'
];

const games = [
    'Detectiveland', 
    'Seedship', 
    'Their Angelical Understanding', 
    'The Silence Under Your Bed', 
    'Birdland'
];

const authors = [
    'Robin Johnson', 
    'John Ayliff', 
    'Porpentine', 
    'Della Watson', 
    'Brendan Patrick Hennessy'
];

// Correct Answers
const solution = {
    'Detectiveland': 'Branching Path',
    'Seedship': 'Hub-and-Spoke',
    'Their Angelical Understanding': 'Loop-and-Grow',
    'The Silence Under Your Bed': 'Time-Delayed Progression',
    'Birdland': 'Exploration-Based'
};

// Clue list
const clues = [
    "Exploration-Based narrative uses Inventory Management and is authored by Brendan Patrick Hennessy.",
    "Porpentine’s game does not use CSS Styling.",
    "Hub-and-Spoke narratives always involve CSS Styling.",
    "The Silence Under Your Bed uses Variable Tracking.",
    "Detectiveland does not follow Hub-and-Spoke or Time-Delayed Progression.",
    "John Ayliff’s game uses CSS Styling but not Branching Path."
];

// Populate Clues
function populateClues() {
    const clueList = document.querySelector('#clue-list');
    clues.forEach(clue => {
        const li = document.createElement('li');
        li.innerText = clue;
        clueList.appendChild(li);
    });
}

// Generate Grid
function generateGrid() {
    const gridBody = document.querySelector('#grid-body');
    games.forEach(game => {
        let row = `<tr><th>${game}</th>`;
        narrativeStructures.forEach(() => {
            row += `<td><input type="checkbox" class="grid-checkbox" data-game="${game}"></td>`;
        });
        row += '</tr>';
        gridBody.innerHTML += row;
    });
}

// Submit and Grade
function submitGrid() {
    const checkboxes = document.querySelectorAll('.grid-checkbox');
    let correctCount = 0;

    checkboxes.forEach(checkbox => {
        const game = checkbox.dataset.game;
        const col = checkbox.closest('td').cellIndex - 1;
        const selectedStructure = narrativeStructures[col];

        if (checkbox.checked && solution[game] === selectedStructure) {
            checkbox.closest('td').style.backgroundColor = 'rgba(46, 204, 113, 0.3)';
            correctCount++;
        } else if (checkbox.checked) {
            checkbox.closest('td').style.backgroundColor = 'rgba(231, 76, 60, 0.3)';
        }
    });

    const total = Object.keys(solution).length;
    const percentageCorrect = Math.round((correctCount / total) * 100);
    document.getElementById('result').innerText = `Score: ${correctCount}/${total} (${percentageCorrect}%)`;

    displaySolution();
}

// Display Correct Grid
function displaySolution() {
    const solutionSection = document.getElementById('solution-section');
    solutionSection.style.display = 'block';
    const gridBody = document.querySelector('#solution-grid-body');
    gridBody.innerHTML = '';

    games.forEach(game => {
        let row = `<tr><th>${game}</th>`;
        narrativeStructures.forEach(structure => {
            const isCorrect = solution[game] === structure;
            row += `<td>${isCorrect ? '✓' : ''}</td>`;
        });
        row += '</tr>';
        gridBody.innerHTML += row;
    });
}

// Reset Grid
function resetGrid() {
    const checkboxes = document.querySelectorAll('.grid-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
        checkbox.closest('td').style.backgroundColor = '';
    });
    document.getElementById('result').innerText = '';
    document.getElementById('solution-section').style.display = 'none';
}

// Initialize
window.onload = function() {
    generateGrid();
    populateClues();
};
