// app.js

document.addEventListener('DOMContentLoaded', function() {
    // Fetch featured learning bits from API endpoint (simulated)
    fetch('https://api.example.com/learning-bits')
        .then(response => response.json())
        .then(data => {
            // Display featured learning bits on the home page
            displayLearningBits(data);
        })
        .catch(error => {
            console.error('Error fetching learning bits:', error);
        });
});

function displayLearningBits(learningBits) {
    const featuredLearningBitsSection = document.getElementById('featured-learning-bits');
    
    learningBits.forEach(learningBit => {
        const learningBitCard = createLearningBitCard(learningBit);
        featuredLearningBitsSection.appendChild(learningBitCard);
    });
}

function createLearningBitCard(learningBit) {
    const card = document.createElement('div');
    card.classList.add('learning-bit-card');

    const title = document.createElement('h3');
    title.textContent = learningBit.title;

    const description = document.createElement('p');
    description.textContent = learningBit.description;

    const reward = document.createElement('p');
    reward.textContent = `Reward: ${learningBit.reward} tokens`;

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(reward);

    return card;
}
