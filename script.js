const correctAnswers = [
    [true, false, false, false, false],  // Branching Narratives
    [false, false, false, false, true],  // Variable Tracking
    [false, false, true, false, false]   // Looping Passages
];

function checkResults() {
    const rows = document.querySelectorAll('#logicMatrix tbody tr');
    let total = 0;
    let correctCount = 0;

    rows.forEach((row, rowIndex) => {
        const checkboxes = row.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox, colIndex) => {
            total++;
            const isCorrect = checkbox.checked === correctAnswers[rowIndex][colIndex];
            if (isCorrect) {
                correctCount++;
                checkbox.parentElement.classList.add('correct');
                checkbox.parentElement.classList.remove('incorrect');
            } else {
                checkbox.parentElement.classList.add('incorrect');
                checkbox.parentElement.classList.remove('correct');
            }
        });
    });

    const score = ((correctCount / total) * 100).toFixed(2);
    alert(`Your score: ${score}%`);
}

function resetPuzzle() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
        checkbox.parentElement.classList.remove('correct', 'incorrect');
    });
}
