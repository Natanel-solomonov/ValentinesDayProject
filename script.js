let warningIndex = 0;
const warningMessages = [
    "Why are you trying to click no???🧐",
    "Stop trying to click no or else I'm going to flick you",
    "bruh",
    "After all we've been through"
];

function goToScreen(screenNumber) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));
    
    // Show the target screen
    const targetScreen = document.getElementById(`screen${screenNumber}`);
    targetScreen.classList.add('active');
}

function moveNoButton() {
    const noBtn = document.getElementById('noBtn');
    const warningText = document.getElementById('warningText');
    const container = noBtn.parentElement;
    
    // Get container dimensions
    const containerRect = container.getBoundingClientRect();
    const btnWidth = 200;
    const btnHeight = 65;
    
    // Much more dramatic movement - allow it to move all around the screen
    // Go all the way to the edges
    const padding = 5;
    const minX = padding;
    const maxX = containerRect.width - btnWidth - padding;
    
    // Allow vertical movement up high (near bear sides) and around the button area
    // Negative values move it up significantly, positive values keep it at button level
    const minY = -500; // Move way up high (to the sides of the bear)
    const maxY = 30;   // Can go slightly below starting position
    
    // Generate random position with very dramatic movement
    const randomX = Math.random() * (maxX - minX) + minX;
    const randomY = Math.random() * (maxY - minY) + minY;
    
    // Apply the new position with even faster transition
    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.transition = 'all 0.08s ease-out'; // Even faster movement
    
    // Show warning message
    warningText.textContent = warningMessages[warningIndex];
    warningText.style.animation = 'none';
    setTimeout(() => {
        warningText.style.animation = 'warningPulse 0.5s ease-in-out';
    }, 10);
    
    // Cycle through warning messages
    warningIndex = (warningIndex + 1) % warningMessages.length;
}

function acceptValentine() {
    goToScreen(4);
    
    // Optional: Play a celebration sound or add more effects
    celebrateAcceptance();
}

function celebrateAcceptance() {
    // Add extra visual celebration effects
    const body = document.body;
    
    // Create floating hearts
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createFloatingHeart();
        }, i * 100);
    }
}

function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.textContent = '💕';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.bottom = '-50px';
    heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
    heart.style.animation = 'floatUp 4s ease-in forwards';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '9999';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 4000);
}

// Add floating animation for hearts
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            bottom: -50px;
            opacity: 1;
            transform: translateX(0) rotate(0deg);
        }
        100% {
            bottom: 100vh;
            opacity: 0;
            transform: translateX(${Math.random() * 200 - 100}px) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);
