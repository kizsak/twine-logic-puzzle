document.addEventListener('DOMContentLoaded', () => {
  const features = [
    'Branching Narratives',
    'Timed Text Display',
    'Variable Tracking',
    'Multimedia Integration',
    'Inventory Management'
  ];

  const games = [
    'Howling Dogs',
    'Queers in Love at the End of the World',
    'The Writer Will Do Something',
    'C ya laterrrr',
    'The Temple of No'
  ];

  const authors = [
    'Porpentine Charity Heartscape',
    'Anna Anthropy',
    'Matthew S. Burns and Tom Bissell',
    'Dan Hett',
    'Crows Crows Crows'
  ];

  const correctAnswers = {
    'Branching Narratives': {
      game: 'Howling Dogs',
      author: 'Porpentine Charity Heartscape'
    },
    'Timed Text Display': {
      game: 'Queers in Love at the End of the World',
      author: 'Anna Anthropy'
    },
    'Variable Tracking': {
      game: 'The Writer Will Do Something',
      author: 'Matthew S. Burns and Tom Bissell'
    },
    'Multimedia Integration': {
      game: 'C ya laterrrr',
      author: 'Dan Hett'
    },
    'Inventory Management': {
      game: 'The Temple of No',
      author: 'Crows Crows Crows'
    }
  };

  const tbody = document.querySelector('#logic-grid tbody');

  features.forEach(feature => {
    const row = document.createElement('tr');

    const featureCell = document.createElement('td');
    featureCell.textContent = feature;
    row.appendChild(featureCell);

    const gameCell = document.createElement('td');
    const gameInput = document.createElement('input');
    gameInput.type = 'text';
    gameInput.dataset.feature = feature;
    gameInput.dataset.type = 'game';
    gameCell.appendChild(gameInput);
    row.appendChild(gameCell);

    const authorCell = document.createElement('td');
    const authorInput = document.createElement('input');
    authorInput.type = 'text';
    authorInput.dataset.feature = feature;
    authorInput.dataset.type = 'author';
    authorCell.appendChild(authorInput);
    row.appendChild(authorCell);

    tbody.appendChild(row);
  });

  document.getElementById('submit-btn').addEventListener('click', () => {
    let correctCount = 0;

    features.forEach(feature => {
      const gameInput = document.querySelector(`input[data-feature="${feature}"][data-type="game"]`).value.trim();
      const authorInput = document.querySelector(`input[data-feature="${feature}"][data-type="author"]`).value.trim();

      if (
        gameInput.toLowerCase() === correctAnswers[feature].game.toLowerCase() &&
        authorInput.toLowerCase() === correctAnswers[feature].author.toLowerCase()
      ) {
        correctCount++;
      }
    });

    const percentageCorrect = (correctCount / features.length) * 100;
    document.getElementById('result').textContent = `You got ${percentageCorrect}% correct.`;
  });
});
