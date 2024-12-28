// script.js

document.addEventListener('DOMContentLoaded', () => {
    const narrativeTypes = ['Branching Narrative', 'Linear Narrative', 'Non-linear Narrative', 'Cyclical Narrative'];
    const twineFeatures = ['Variables', 'Conditional Logic', 'Passage Links', 'CSS Styling'];
    const twineGames = ['Howling Dogs', 'Depression Quest', 'With Those We Love Alive', 'Queers in Love at the End of the World'];
    const authors = ['Porpentine', 'Zoe Quinn', 'Porpentine', 'Anna Anthropy'];

    const correctAnswers = [
        { narrative: 'Branching Narrative', feature: 'Conditional Logic', game: 'Depression Quest', author: 'Zoe Quinn' },
        { narrative: 'Linear Narrative', feature: 'Passage Links', game: 'Queers in Love at the End of the World', author: 'Anna Anthropy' },
        { narrative: 'Non-linear Narrative', feature: 'Variables', game: 'Howling Dogs', author: 'Porpentine' },
        { narrative: 'Cyclical Narrative', feature: 'CSS Styling', game: 'With Those We Love Alive', author: 'Porpentine' }
    ];

    function createGrid() {
        const container = document.getElementById('puzzle-container');
        const grid = document.createElement('div');
        grid.className = 'grid';

        // Create header row
        const headers = ['', 'Twine Feature', 'Twine Game', 'Author'];
        headers.forEach(header => {
            const cell = document.createElement('div');
            cell.className = 'cell header-cell';
            cell.textContent = header;
            grid.appendChild(cell);
        });

        // Create rows for each narrative type
        narrativeTypes.forEach((narrative, rowIndex) => {
            // Narrative type cell
            const narrativeCell = document.createElement('div');
            narrativeCell.className = 'cell header-cell';
            narrativeCell.textContent = narrative;
            grid.appendChild(narrativeCell);

            // Dropdowns for each column
            [twineFeatures, twineGames, authors].forEach((options, colIndex) => {
                const selectCell = document.createElement('div');
                selectCell.className = 'cell select-cell';
                const select = document.createElement('select');
                select.dataset.row = rowIndex;
                select.dataset.col = colIndex;
                const defaultOption = document.createElement('option');
                defaultOption.value = '';
                defaultOption.textContent = 'Select...';
                select.appendChild(defaultOption);
                options.forEach(option => {
                    const opt = document.createElement('option');
                    opt.value = option;
                    opt.textContent = option;
                    select.appendChild(opt);
                });
                selectCell.appendChild(select);
                grid.appendChild(selectCell);
            });
        });

        container.appendChild(grid);
    }

    function calculateScore() {
        let correctCount = 0;
        const total = narrativeTypes.length * 3; // 3 columns to match per row

        document.querySelectorAll('select').forEach(select => {
            const row = select.dataset.row;
            const col = select.dataset.col;
            const selectedValue = select.value;
            const correctValue = Object.values(correctAnswers[row])[parseInt(col) + 1];
            if (selectedValue === correctValue) {
                correctCount++;
            }
        });

        const score = (correctCount / total) * 100;
        return score.toFixed(2);
    }

    document.getElementById('submit-button').addEventListener('click', () => {
        const score = calculateScore();
        const resultDiv = document.getElementById('result');
        resultDiv.textContent = `Your score: ${score}% correct choices.`;
    });

    createGrid();
});
