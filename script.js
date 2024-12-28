const goals = ['Narrative Depth', 'Replayability', 'Immersion', 'Accessibility', 'Efficiency'];
const categories = ['Function', 'Challenge', 'Narrative Style'];
const options = [
    ['Branching', 'Multiple Endings', 'CSS Styling', 'Conditional Paths', 'HTML Passages'],
    ['Time-based Events', 'Puzzle Design', 'Inventory System', 'Conditional Paths', 'Multiple Endings'],
    ['Sci-Fi', 'Mystery', 'Fantasy', 'Historical', 'Horror']
];

// Grid Generation
window.onload = function() {
    const tableBody = document.querySelector('#logic-grid tbody');
    categories.forEach(category => {
        const row = document.createElement('tr');
        const headerCell = document.createElement('th');
        headerCell.innerText = category;
        row.appendChild(headerCell);

        goals.forEach(() => {
            const cell = document.createElement('td');
            cell.classList.add('cell');
            cell.setAttribute('contenteditable', 'true'); // Editable cells
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });
};

// Solution for Grading
const solution = {
    'Narrative Depth': ['Branching', 'Time-based Events', 'Sci-Fi'],
    'Replayability': ['Multiple Endings', 'Puzzle Design', 'Mystery'],
    'Immersion': ['CSS Styling', 'Inventory System', 'Fantasy'],
    'Accessibility': ['Conditional Paths', 'Conditional Paths', 'Historical'],
    'Efficiency': ['HTML Passages', 'Multiple Endings', 'Horror']
};

// Grading Function
function submitGrid() {
    const cells = document.querySelectorAll('.cell');
    let correctCount = 0;
    const total = cells.length;
    let index = 0;

    categories.forEach((category, rowIndex) => {
        goals.forEach((goal, colIndex) => {
            const cell = cells[index];
            const correctAnswer = solution[goal][rowIndex];

            if (cell.innerText.trim() === correctAnswer) {
                cell.style.backgroundColor = 'rgba(0, 255, 0, 0.2)';  // Correct - Green
                correctCount++;
            } else {
                cell.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';  // Incorrect - Red
            }
            index++;
        });
    });

    // Calculate percentage correct
    const percentageCorrect = Math.round((correctCount / total) * 100);
    document.getElementById('result').innerText = 
        `You got ${correctCount}/${total} correct (${percentageCorrect}%).`;

    // Disable submission after one attempt
    document.querySelector('button').disabled = true;
}
