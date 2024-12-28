const rows = ['Narrative Depth', 'Replayability', 'Immersion', 'Accessibility', 'Efficiency'];
const columns = ['Branching', 'CSS', 'HTML', 'Multiple Endings', 'Conditional Paths'];

// Grid Creation on Load
window.onload = function() {
    const table = document.getElementById('grid-table');
    let html = '<thead><tr><th></th>';
    
    columns.forEach(col => {
        html += `<th>${col}</th>`;
    });
    html += '</tr></thead><tbody>';
    
    rows.forEach(row => {
        html += `<tr><th>${row}</th>`;
        columns.forEach(() => {
            html += `<td class="cell" onclick="toggleCell(this)"></td>`;
        });
        html += '</tr>';
    });

    html += '</tbody>';
    table.innerHTML = html;
};

// Toggle Cell State (✓, X, blank)
function toggleCell(cell) {
    const current = cell.innerHTML;
    if (current === '') {
        cell.innerHTML = '✓';
    } else if (current === '✓') {
        cell.innerHTML = 'X';
    } else {
        cell.innerHTML = '';
    }
}

// Solution Key (Correct Answers)
const solution = {
    'Narrative Depth': 'Branching',
    'Replayability': 'Multiple Endings',
    'Immersion': 'CSS',
    'Accessibility': 'Conditional Paths',
    'Efficiency': 'HTML'
};

// Grading the Grid
function submitGrid() {
    const cells = document.querySelectorAll('.cell');
    let correct = true;
    let index = 0;

    rows.forEach((row, i) => {
        columns.forEach((col, j) => {
            const cell = cells[index];
            const answer = solution[row];
            
            if (cell.innerHTML === '✓' && col !== answer) {
                cell.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';  // Incorrect
                correct = false;
            } else if (col === answer && cell.innerHTML === '✓') {
                cell.style.backgroundColor = 'rgba(0, 255, 0, 0.2)';  // Correct
            }
            index++;
        });
    });

    document.getElementById('result').innerText = correct 
        ? "Congratulations! All answers are correct!" 
        : "Some answers are incorrect. Try again!";
}
