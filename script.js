const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const mainText = document.getElementById('main-text');
const gif = document.getElementById('gif');

// Array of sad/pleading texts
const noTexts = [
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart ;("
];

let clickCount = 0;

noBtn.addEventListener('click', () => {
    clickCount++;

    // Make Yes button bigger
    const currentSize = window.getComputedStyle(yesBtn).fontSize;
    const newSize = parseFloat(currentSize) * 1.5;
    yesBtn.style.fontSize = `${newSize}px`;

    // Change No button text
    if (clickCount < noTexts.length) {
        noBtn.innerText = noTexts[clickCount];
    } else {
        noBtn.innerText = noTexts[noTexts.length - 1];
    }

    // Optional: Move No button randomly to make it harder to click (uncomment to enable)
    // moveButton(noBtn);
});

// Function to move button randomly
function moveButton(btn) {
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);

    btn.style.position = 'absolute';
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
}

yesBtn.addEventListener('click', () => {
    mainText.innerHTML = "Yay!!! I knew you loved me! ❤️<br>I love you too!";
    gif.src = "https://media.tenor.com/Cat3yJqSeeoAAAAi/cute-happy.gif"; // Happy gif

    // Hide buttons or style them
    document.querySelector('.buttons').style.display = 'none';

    // Optional: Background color change
    document.body.style.backgroundColor = "#ffc8dd";
    document.body.classList.add('success-bg'); // Use the class we defined

    // Stop sad emojis, maybe start happy ones?
    clearInterval(emojiInterval);
    createHappyEmojis();
});

// Background Animation Logic
const sadEmojis = ["😢", "💔", "🥺", "sorry", "forgive me", "☹️"];
const happyEmojis = ["❤️", "💖", "🥰", "yay", "love you", "💑"];

function createEmoji(isHappy = false) {
    const emoji = document.createElement('div');
    emoji.classList.add('floating-emoji');

    const emojiList = isHappy ? happyEmojis : sadEmojis;
    emoji.innerText = emojiList[Math.floor(Math.random() * emojiList.length)];

    // Random position
    emoji.style.left = Math.random() * 100 + 'vw';

    // Random size variation
    const size = Math.random() * 20 + 15; // 15px to 35px
    emoji.style.fontSize = `${size}px`;

    // Random animation duration
    const duration = Math.random() * 10 + 10; // 10s to 20s
    emoji.style.animationDuration = `${duration}s`;

    document.body.appendChild(emoji);

    // Cleanup
    setTimeout(() => {
        emoji.remove();
    }, duration * 1000);
}

// Create sad emojis periodically
let emojiInterval = setInterval(() => createEmoji(false), 800);

function createHappyEmojis() {
    setInterval(() => createEmoji(true), 400); // More frequent happy emojis!
}
