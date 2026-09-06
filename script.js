// Grab the elements from the HTML
const bookHotspot = document.getElementById('hotspot-book');
const speakerHotspot = document.getElementById('hotspot-speaker');
const coffeeHotspot = document.getElementById('hotspot-coffee');
const lampHotspot = document.getElementById('hotspot-lamp');
const skyHotspot = document.getElementById('hotspot-sky'); // The Bat-Signal
const paintingHotspot = document.getElementById('hotspot-painting'); // The Starry Night Hotspot (New)

const poemModal = document.getElementById('poem-modal');
const musicModal = document.getElementById('music-modal');
const paintingModal = document.getElementById('painting-modal'); // The Painting Modal (New)
const openingCredits = document.getElementById('opening-credits'); // The Intro Screen

const closePoemBtn = document.querySelector('.close-btn');
const closeMusicBtn = document.querySelector('.close-music-btn');
const closePaintingBtn = document.querySelector('.close-painting-btn'); // Close Painting Button (New)

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
    if (e.target === paintingModal) { // New condition for painting modal
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

// --- THE PAINTING (STARRY NIGHT pop-up logic) (New Section) ---
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