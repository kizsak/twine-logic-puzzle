// Defining variables for the puzzle (5 options for each variable)
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

// Solution (for demonstration, based on the puzzle)
const solution = {
    'Detectiveland': ['Branching Path', 'Story Branching', 'Robin Johnson'],
    'The Silence Under Your Bed': ['Time-Delayed Progression', 'Variable Tracking', 'Della Watson'],
    'Their Angelical Understanding': ['Loop-and-Grow', 'Story Branching', 'Porpentine'],
    'Seedship': ['Hub-and-Spoke', 'CSS Styling', 'John Ayliff'],
    'Bogeyman': ['Open Map', 'Timer-based Events', 'Phoebe Barton']
};

// Clues to guide the user
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

// Function to populate clues
function populateClues() {
    const clueList = document.querySelector('#clue-list');
    clues.forEach(clue => {
        const li = document.createElement('li');
        li.innerText = clue;
        clueList.appendChild(li);
    });
}

// Function
