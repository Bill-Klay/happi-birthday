document.addEventListener('DOMContentLoaded', () => {
    // --- Element Selectors ---
    const card = document.getElementById('birthdayCard');
    const startOverlay = document.getElementById('start-overlay');
    const audio = document.getElementById('birthday-music');
    const namePlaceholder = document.getElementById('namePlaceholder');
    const cardFrontName = document.getElementById('cardFrontName');
    const modalOverlay = document.getElementById('special-note-modal');
    const openModalBtn = document.getElementById('open-modal-btn');
    const closeModalBtn = document.getElementById('close-modal-btn');

    // --- Configuration & Data ---
    const personName = "Arshia"; // Easily editable name
    const numberOfBalloons = 20;
    const numberOfStars = 100;
    const numberOfShootingStars = 5;
    
    // To use local audio files, create an 'assets' or 'music' folder in your project,
    // place your mp3 files there, and change these paths to relative paths.
    // For example: 'assets/song1.mp3'
    const songList = [
        './content-files/still-alive.mp3',
        './content-files/hbd.mp3',
        './content-files/just-friends.mp3'
    ];
    
    // --- Initialization ---
    function initialize() {
        namePlaceholder.textContent = personName;
        cardFrontName.textContent = personName;
        createBalloons(numberOfBalloons);
        createStars(numberOfStars);
        createShootingStars(numberOfShootingStars);
        attachEventListeners();
    }

    // --- Event Listeners ---
    function attachEventListeners() {
        // 1. Handle user interaction to start music and animations
        startOverlay.addEventListener('click', () => {
            startOverlay.classList.add('hidden');
            
            const randomSong = songList[Math.floor(Math.random() * songList.length)];
            audio.src = randomSong;
            audio.volume = 0.5;
            
            audio.play().catch(error => {
                console.error("Your browser is not invited for fun music time:", error);
            });
        }, { once: true });

        // 2. Handle card flip and typewriter effect
        card.addEventListener('click', () => {
            card.classList.toggle('open');
            
            const line1Elem = document.getElementById('wish-line-1');
            const line2Elem = document.getElementById('wish-line-2');
            
            const text1 = "Wishing you a day filled with happiness and a year filled with joy! \
                        Every starting line is a gift. There must be a beginning of any great matter, \
                        but continuing unto the end until it be thoroughly finished yields the true glory.";
            const text2 = "Keep on keeping on! Cheers to you for another trip around the sun! 🥳";

            if (card.classList.contains('open')) {
                setTimeout(() => {
                    typeWriter(line1Elem, text1, 50, () => {
                        typeWriter(line2Elem, text2, 50);
                    });
                }, 1000); // Duration matches CSS transition
            } else {
                line1Elem.innerHTML = '';
                line2Elem.innerHTML = '';
            }
        });
        
        // 3. Handle Modal visibility
        openModalBtn.addEventListener('click', () => {
            modalOverlay.classList.add('visible');
        });
        
        closeModalBtn.addEventListener('click', () => {
            modalOverlay.classList.remove('visible');
        });

        modalOverlay.addEventListener('click', (event) => {
            if (event.target === modalOverlay) {
                modalOverlay.classList.remove('visible');
            }
        });
    }

    // --- Core Functions ---
    
    /**
     * Creates a typewriter effect for a given element.
     * @param {HTMLElement} element - The DOM element to apply the effect to.
     * @param {string} text - The text to be typed out.
     * @param {number} speed - The delay between each character in milliseconds.
     * @param {Function} [callback] - Optional function to call after typing is complete.
     */
    function typeWriter(element, text, speed, callback) {
        let i = 0;
        element.innerHTML = '';
        const cursor = document.createElement('span');
        cursor.className = 'typing-cursor';
        
        function type() {
            if (i < text.length) {
                element.innerHTML = text.substring(0, i + 1);
                element.appendChild(cursor);
                i++;
                setTimeout(type, speed);
            } else {
                cursor.remove();
                if (callback) callback();
            }
        }
        type();
    }

    function createBalloons(count) {
        const balloonContainer = document.getElementById('balloon-container');
        const balloonColors = ['#ff69b4', '#4169e1', '#32cd32', '#ffd700', '#9370db', '#ffa500'];
        const balloonSVG = `
            <svg viewBox="0 0 100 125" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                <path d="M69.8 10.2c-10.2-13.6-39.4-13.6-49.6 0-5.1 6.8-6.1 16.2-2.8 24.3l.1.3c3.3 8 9.3 14.8 17.1 18.9 2.5 1.3 5.3 2 7.9 2.1l2 .1c2.6 0 5.4-.7 7.9-2.1 7.8-4.1 13.8-10.9 17.1-18.9l.1-.3c3.3-8.1 2.3-17.5-2.8-24.3z" fill="COLOR_PLACEHOLDER"/>
                <path d="m50 90.7 17.5 34.3H32.5L50 90.7z" fill="#FFD700"/>
            </svg>`;

        for (let i = 0; i < count; i++) {
            const balloon = document.createElement('div');
            balloon.className = 'balloon';
            
            const color = balloonColors[Math.floor(Math.random() * balloonColors.length)];
            balloon.innerHTML = balloonSVG.replace('COLOR_PLACEHOLDER', color);
            
            const leftPosition = Math.random() * 95;
            const animationDuration = 8 + Math.random() * 8;
            const animationDelay = Math.random() * 10;

            balloon.style.left = `${leftPosition}vw`;
            balloon.style.animationDuration = `${animationDuration}s`;
            balloon.style.animationDelay = `${animationDelay}s`;
            
            balloonContainer.appendChild(balloon);
        }
    }

    function createStars(count) {
        const container = document.getElementById('stars-container');
        for (let i = 0; i < count; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            const size = Math.random() * 2 + 1;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 5}s`;
            container.appendChild(star);
        }
    }
    
    function createShootingStars(count) {
        const container = document.getElementById('shooting-stars-container');
        for (let i = 0; i < count; i++) {
            const star = document.createElement('div');
            star.className = 'shooting-star';
            star.style.top = `${Math.random() * 50}%`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 5 + 2}s`;
            star.style.animationDuration = `${2 + Math.random() * 3}s`;
            container.appendChild(star);
        }
    }

    // --- Start the application ---
    initialize();
});

