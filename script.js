// Grab the elements from the HTML
const bookHotspot = document.getElementById('hotspot-book');
const speakerHotspot = document.getElementById('hotspot-speaker');
const coffeeHotspot = document.getElementById('hotspot-coffee');
const lampHotspot = document.getElementById('hotspot-lamp');
const skyHotspot = document.getElementById('hotspot-sky'); // The Bat-Signal
const paintingHotspot = document.getElementById('hotspot-painting'); 

const poemModal = document.getElementById('poem-modal');
const musicModal = document.getElementById('music-modal');
const paintingModal = document.getElementById('painting-modal'); 
const openingCredits = document.getElementById('opening-credits'); 

const closePoemBtn = document.querySelector('.close-btn');
const closeMusicBtn = document.querySelector('.close-music-btn');
const closePaintingBtn = document.querySelector('.close-painting-btn'); 

// Grab the Audio Elements
const sfxRain = document.getElementById('sfx-rain');
const sfxPages = document.getElementById('sfx-pages');
const sfxCoffee = document.getElementById('sfx-coffee');

// --- ENTER THE ROOM (Credits Fade & Rain Starts) ---
openingCredits.addEventListener('click', () => {
    // Fade out the black screen
    openingCredits.classList.add('fade-out');
    
    // Start the rain audio
    sfxRain.volume = 0.4;
    sfxRain.play();
});

// --- CLOSE MODALS IF CLICKING OUTSIDE ---
window.addEventListener('click', (e) => {
    if (e.target === poemModal) {
        poemModal.classList.add('hidden');
    }
    if (e.target === musicModal) {
        musicModal.classList.add('hidden');
    }
    if (e.target === paintingModal) { 
        paintingModal.classList.add('hidden');
    }
});

// --- THE BOOK (POEM & SFX) ---
bookHotspot.addEventListener('click', () => {
    sfxPages.currentTime = 0; 
    sfxPages.play();
    poemModal.classList.remove('hidden');
});
closePoemBtn.addEventListener('click', () => {
    poemModal.classList.add('hidden');
});

// --- THE SPEAKER (SPOTIFY) ---
speakerHotspot.addEventListener('click', () => {
    musicModal.classList.remove('hidden');
});
closeMusicBtn.addEventListener('click', () => {
    musicModal.classList.add('hidden');
});

// --- THE COFFEE (SFX & TEXT) ---
coffeeHotspot.addEventListener('click', () => {
    sfxCoffee.currentTime = 0;
    sfxCoffee.play();
    
    setTimeout(() => {
        alert("The sharp, warm aroma of freshly poured filter coffee fills the room. Take a breath.");
    }, 500); 
});

// --- THE LAMP (Lighting Toggle) ---
lampHotspot.addEventListener('click', () => {
    document.body.classList.toggle('lights-out');
});

// --- THE GOTHAM EASTER EGG (Bat-Signal) ---
skyHotspot.addEventListener('click', () => {
    alert("batman 🦇 will be there for you");
});

// --- THE PAINTING (STARRY NIGHT pop-up logic) ---
paintingHotspot.addEventListener('click', () => {
    paintingModal.classList.remove('hidden');
});
closePaintingBtn.addEventListener('click', () => {
    paintingModal.classList.add('hidden');
});

// --- THE MAY 23RD PERPETUAL COUNTER ---
const timeLeftDisplay = document.getElementById('time-left');

function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    
    // Month 4 is May
    let nextBday = new Date(currentYear, 4, 23, 0, 0, 0);

    if (now.getTime() > nextBday.getTime()) {
        nextBday.setFullYear(currentYear + 1);
    }

    const diff = nextBday.getTime() - now.getTime();

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const h = hours.toString().padStart(2, '0');
    const m = minutes.toString().padStart(2, '0');
    const s = seconds.toString().padStart(2, '0');

    if (timeLeftDisplay) {
        timeLeftDisplay.innerText = `${days}d ${h}h ${m}m ${s}s`;
    }
}

if (timeLeftDisplay) {
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

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
    // Fade the whole screen to black
    finalScreen.classList.remove('hidden');
    setTimeout(() => finalScreen.classList.add('active'), 50); 
    
    await sleep(2500); 

    for (let i = 0; i < letterLines.length; i++) {
        finalText.innerText = letterLines[i];
        finalText.style.opacity = 1; 
        
        let displayTime = (i === letterLines.length - 1) ? 5000 : 3000;
        await sleep(displayTime); 
        
        if (i < letterLines.length - 1) {
            finalText.style.opacity = 0; 
            await sleep(1500); 
        }
    }
});