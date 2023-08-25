// Get references to the buttons and result area
const d4Button = document.getElementById("d4");
const d6Button = document.getElementById("d6");
const d8Button = document.getElementById("d8");
const d10Button = document.getElementById("d10");
const d12Button = document.getElementById("d12");
const d20Button = document.getElementById("d20");
const resultDiv = document.getElementById("result");

// Add click event listeners to the dice buttons
d4Button.addEventListener("click", rollDice.bind(null, 4));
d6Button.addEventListener("click", rollDice.bind(null, 6));
d8Button.addEventListener("click", rollDice.bind(null, 8));
d10Button.addEventListener("click", rollDice.bind(null, 10));
d12Button.addEventListener("click", rollDice.bind(null, 12));
d20Button.addEventListener("click", rollDice.bind(null, 20));

// Function to roll the dice and update the result
function rollDice(sides) {
    const randomNumber = Math.floor(Math.random() * sides) + 1;
    resultDiv.textContent = `${randomNumber}`;

    if (sides === 20 && randomNumber === 20) {
        startConfetti();
    }

    if (sides === 12 && randomNumber === 12) {
        startConfetti();
    }

    if (sides === 10 && randomNumber === 10) {
        startConfetti();
    }

    if (sides === 8 && randomNumber === 8) {
        startConfetti();
    }

    if (sides === 6 && randomNumber === 6) {
        startConfetti();
    }

    if (sides === 4 && randomNumber === 4) {
        startConfetti();
    }
}

let confettiInstance; // Declare the confetti instance variable

// Function to start the confetti animation
function startConfetti() {
    const confettiSettings = { target: 'confetti-canvas' };
    confettiInstance = new ConfettiGenerator(confettiSettings);
    confettiInstance.render();

    // Stop confetti after 5 seconds
    setTimeout(stopConfetti, 3000); // 5000 milliseconds = 5 seconds
}

// Function to stop the confetti animation
function stopConfetti() {
    if (confettiInstance) {
        confettiInstance.clear();
    }
}
