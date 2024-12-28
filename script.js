// script.js
function checkAnswers() {
    const correctAnswers = {
        work1: {
            narrative: "Interactive Narrative",
            feature: "Multimedia Integration",
            author: "Porpentine"
        },
        // Add correct answers for other works
    };

    let score = 0;
    let total = 0;

    for (let work in correctAnswers) {
        total += 3; // Each work has 3 fields to match

        const userNarrative = document.getElementById(`narrative${work.slice(-1)}`).value;
        const userFeature = document.getElementById(`feature${work.slice(-1)}`).value;
        const userAuthor = document.getElementById(`author${work.slice(-1)}`).value;

        if (userNarrative === correctAnswers[work].narrative) score++;
        if (userFeature === correctAnswers[work].feature) score++;
        if (userAuthor === correctAnswers[work].author) score++;
    }

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `You got ${score} out of ${total} correct.`;
}
