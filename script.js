const structures = ['Branching Path', 'Hub-and-Spoke', 'Loop-and-Grow', 'Time-Delayed Progression', 'Open Map'];
const categories = ['Twine Feature', 'Example Game', 'Author'];
const options = [
    ['Conditional Paths', 'Variable Tracking', 'Story Branching', 'CSS Styling', 'Timer-based Events'],
    ['Detectiveland', 'The Silence Under Your Bed', 'Their Angelical Understanding', 'Seedship', 'Bogeyman'],
    ['Robin Johnson', 'Della Watson', 'Porpentine', 'John Ayliff', 'Phoebe Barton']
];

// Solution
const solution = {
    'Branching Path': ['Conditional Paths', 'Detectiveland', 'Robin Johnson'],
    'Hub-and-Spoke': ['CSS Styling', 'Seedship', 'John Ayliff'],
    'Loop-and-Grow': ['Story Branching', 'Their Angelical Understanding', 'Porpentine'],
    'Time-Delayed Progression': ['Variable Tracking', 'The Silence Under Your Bed', 'Della Watson'],
    'Open Map': ['Timer-based Events', 'Bogeyman', 'Phoebe Barton']
};

// Grid Creation
window.onload = function() {
    const tableBody = document.querySelector('#logic-grid tbody');
    categories.forEach(category => {
        const row = document.createElement('tr');
        const headerCell = document.createElement('th');
        headerCell.innerText = category;
        row.appendChild(headerCell);

        structures.forEach(() => {
            const cell = document.createElement('td');
            cell.classList.add('cell');
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });

    attachCellListeners();
};

// Submission and Grading
function submitGrid() {
    alert('Submit feature coming soon!');
}
