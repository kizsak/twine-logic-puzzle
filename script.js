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

const features = [
    'Conditional Paths', 
    'CSS Styling', 
    'Story Branching', 
    'Variable Tracking', 
    'Inventory Management'
];

// Advanced Clues
const clues = [
    "Inventory Management does not follow Branching Path and is authored by Brendan Patrick Hennessy.",
    "Loop-and-Grow does not use Conditional Paths or Variable Tracking.",
    "Birdland’s author comes before the author of Seedship.",
    "CSS Styling aligns directly next to Story Branching but not for Branching Path.",
    "Detectiveland and Seedship belong to different structures.",
    "Robin Johnson's game uses Conditional Paths.",
    "Time-Delayed Progression pairs with Variable Tracking.",
    "Porpentine authored Their Angelical Understanding.",
    "Exploration-Based features Inventory Management.",
    "CSS Styling is linked to John Ayliff's work."
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

// Generate Grid Sections
function generateGrid(gridId, options) {
    const grid = document.getElementById(gridId);
    let html = '';

    options.forEach(option => {
        html += `<tr><th>${option}</th>`;
        narrativeStructures.forEach(() => {
            html += `<td class="cell"></td>`;
        });
        html += '</tr>';
    });

    grid.innerHTML = html;
    attachCellListeners();
}

// Attach Cell Click Event
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

// Initialize Grids and Clues on Load
window.onload = function() {
    generateGrid('grid-body', games);
    generateGrid('game-grid-body', features);
    generateGrid('feature-grid-body', features);
    populateClues();
};

// Grade Puzzle
function submitGrid() {
    const cells = document.querySelectorAll('.cell');
    let correctCount = 0;
    const total = cells.length;

    // Simple grading for demo (adjust logic as needed)
    cells.forEach(cell => {
        if (cell.innerHTML === '✓') {
            correctCount++;
            cell.style.backgroundColor = 'rgba(0, 255, 0, 0.2)';
        } else if (cell.innerHTML === '✗') {
            cell.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
        }
    });

    const percentageCorrect = Math.round((correctCount / total) * 100);
    document.getElementById('result').innerText = 
        `You got ${correctCount}/${total} correct (${percentageCorrect}%).`;
}
