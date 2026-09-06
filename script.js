// ==========================================
// --- NEW CINEMATIC FEATURES (ADDED LOGIC) ---
// ==========================================

// --- THE SECRET BUTTON LOGIC ---
const secretBtn = document.getElementById('dont-click-btn');
let clickCount = 0;

secretBtn.addEventListener('click', () => {
    clickCount++;
    if (clickCount === 1) {
        secretBtn.innerText = "I knew you would.";
    } else if (clickCount === 2) {
        secretBtn.innerText = "Okay, since you're already here…";
    } else if (clickCount === 3) {
        secretBtn.innerText = "Thank you for being one of the easiest people to talk to.";
        secretBtn.style.color = "#d4af37"; // Turns gold
    } else if (clickCount === 4) {
        secretBtn.style.display = "none"; // Disappears
    }
});

// --- THE RADIO NOTES LOGIC ---
const radioTitle = document.getElementById('radio-title');
const radioWhy = document.getElementById('radio-why');
const radioNextBtn = document.getElementById('radio-next-btn');



const trackNotes = [
    { title: "Sundari - SPB", why: "You know exactly why. Had to put this first." },
    { title: "Nilaave Vaa - SPB", why: "Because 90s SPB hits completely different at 3 AM." },
    { title: "Rasathi Unna - Ilayaraja", why: "Reminds me of our late-night conversations." },
    { title: "Metro Proposal BGM - Dude Tamil", why: "Because this one just feels right." },
    { title: "90s Ilayaraja Melody", why: "Because no playlist for you is complete without some classic Ilayaraja." }
];

let currentTrackIndex = 0;

function updateRadioText() {
    radioTitle.innerText = trackNotes[currentTrackIndex].title;
    radioWhy.innerText = `"${trackNotes[currentTrackIndex].why}"`;
}

// Initialize the first track
updateRadioText();

radioNextBtn.addEventListener('click', () => {
    currentTrackIndex++;
    if (currentTrackIndex >= trackNotes.length) {
        currentTrackIndex = 0; // Loop back to the beginning
    }
    updateRadioText();
});

// --- THE FINAL LETTER SEQUENCE ---
const finalDoor = document.getElementById('final-door');
const finalScreen = document.getElementById('final-screen');
const finalText = document.getElementById('final-text');

const letterLines = [
    "I didn't make this to impress you.",
    "I just wanted to make you a place that feels a little like the conversations we have.",
    "The music.",
    "The rain.",
    "The stupid little jokes.",
    "The conversations that somehow reach 3 AM.",
    "I don't know exactly what this is going to become.",
    "I just know that talking to you has become one of my favourite parts of my days.",
    "So...",
    "come in whenever the world gets a little too loud.",
    "— your 🦇 man"
];

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

finalDoor.addEventListener('click', async () => {
    // 1. Fade the whole screen to black
    finalScreen.classList.remove('hidden');
    // small hack to trigger CSS transition properly
    setTimeout(() => finalScreen.classList.add('active'), 50); 
    
    // 2. Wait for black screen to settle
    await sleep(2500); 

    // 3. Loop through the lines and fade them in and out
    for (let i = 0; i < letterLines.length; i++) {
        finalText.innerText = letterLines[i];
        finalText.style.opacity = 1; // fade in
        
        // Wait longer for the final signature, otherwise standard reading time
        let displayTime = (i === letterLines.length - 1) ? 5000 : 3000;
        await sleep(displayTime); 
        
        // Don't fade out the very last line
        if (i < letterLines.length - 1) {
            finalText.style.opacity = 0; // fade out
            await sleep(1500); // wait while screen is blank before next line
        }
    }
});