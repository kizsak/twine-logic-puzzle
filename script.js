document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.logic-grid td');
    const solutionButton = document.getElementById('check-solution');
    let score = 0;

    const scoreDisplay = document.createElement('div');
    scoreDisplay.className = 'score-display';
    scoreDisplay.innerHTML = `Score: 0`;
    document.querySelector('.container').appendChild(scoreDisplay);

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (cell.classList.contains('marked')) {
                cell.classList.remove('marked');
                cell.classList.add('blocked');
            } else if (cell.classList.contains('blocked')) {
                cell.classList.remove('blocked');
            } else {
                cell.classList.add('marked');
            }
        });
    });

    const correctSolution = [
        [1, 0, 1, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1]
    ];

    solutionButton.addEventListener('click', () => {
        let currentScore = 0;
        let totalPossible = 0;

        cells.forEach((cell, index) => {
            const row = Math.floor(index / 5);
            const col = index % 5;

            if (correctSolution[row][col] === 1 && cell.classList.contains('marked')) {
                currentScore++;
            }
            totalPossible++;
        });

        score = Math.round((currentScore / totalPossible) * 100);
        scoreDisplay.innerHTML = `Score: ${score}`;
        alert(`Your score: ${score}%`);
    });
});
