// Defining the variables for the puzzle (5 options for each variable)
const narrativeStructures = [
    'Branching Path', 
    'Hub-and-Spoke', 
    'Loop-and-Grow', 
    'Time-Delayed Progression',
    'Open Map'
];

const twineFeatures = [
    'Story Branching', 
    'CSS Styling', 
    'Variable Tracking', 
    'Conditional Paths', 
    'Timer-based Events'
];

const exampleGames = [
    'Detectiveland', 
    'The Silence Under Your Bed', 
    'Their Angelical Understanding', 
    'Seedship', 
    'Bogeyman'
];

const authors = [
    'Robin Johnson', 
    'Della Watson', 
    'Porpentine', 
    'John Ayliff', 
    'Phoebe Barton'
];

// Correct Answers (for demonstration purposes)
const solution = {
    'Detectiveland': ['Branching Path', 'Story Branching', 'Robin Johnson'],
    'The Silence Under Your Bed': ['Time-Delayed Progression', 'Variable Tracking', 'Della Watson'],
    'Their Angelical Understanding': ['Loop-and-Grow', 'Story Branching', 'Porpentine'],
    'Seedship': ['Hub-and-Spoke', 'CSS Styling', 'John Ayliff'],
    'Bogeyman': ['Open Map', 'Timer-based Events', 'Phoebe Barton']
};

// Clues for the puzzle
const clues = [
    "The game using Variable Tracking does not follow a Branching Path or Open Map structure.",
    "John Ayliff’s game uses CSS Styling for a Hub-and-Spoke structure.",
    "Detectiveland uses Conditional Paths but isn’t built with Loop-and-Grow or Open Map progression.",
    "Their Angelical Understanding uses Story Branching for a Loop-and-Grow narrative.",
    "Robin Johnson’s game doesn’t use Variable Tracking or Timer-based Events.",
    "The Open Map narrative doesn’t use Conditional Paths.",
    "Della Watson’s game features Time-Delayed Progression but avoids Story Branching.",
    "Seedship follows a Hub-and-Spoke structure and uses CSS Styling.",
    "Bogeyman is authored by Phoebe Barton and features Timer-based Events.",
    "The Time-Delayed Progression narrative does not use CSS Styling."
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

// Generate Grid (5x5 matrix)
function generateGrid() {
    const gridBody = document.querySelector('#grid-body');
    const rows = twineFeatures.concat(exampleGames, authors);
    
    rows.forEach(rowLabel => {
        let row = `<tr><th>${rowLabel}</th>`;
        narrativeStructures.concat(twineFeatures, exampleGames).forEach(() => {
            row += `<td><input type="checkbox" class="grid-checkbox" data-row="${rowLabel}"></td>`;
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
        const row = checkbox.dataset.row;
        const colIndex = checkbox.closest('td').cellIndex - 1;
        const selectedStructure = narrativeStructures.concat(twineFeatures, exampleGames)[colIndex];

        if (checkbox.checked && solution[row] && solution[row][0] === selectedStructure) {
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

    twineFeatures.concat(exampleGames, authors).forEach((rowLabel) => {
        let row = `<tr><th>${rowLabel}</th>`;
        narrativeStructures.concat(twineFeatures, exampleGames).forEach(() => {
            const isCorrect = solution[row] && solution[row][0] === selectedStructure;
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

// Initialize the page
window.onload = function() {
    generateGrid();
    populateClues();
};
