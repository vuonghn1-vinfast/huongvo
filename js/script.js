const heartEmojis = ['❤️', '💕', '💗', '💖', '💓', '🩷'];
for (let i = 0; i < 25; i++) {
  const heart = document.createElement('div');
  heart.className = 'background-heart';
  heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDelay = Math.random() * 18 + 's';
  heart.style.animationDuration = (15 + Math.random() * 10) + 's';
  document.body.appendChild(heart);
}

function createSparkles() {
  for (let i = 0; i < 20; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.top = Math.random() * 100 + 'vh';
    sparkle.style.animationDelay = Math.random() * 2 + 's';
    sparkle.style.animationDuration = (1.5 + Math.random() * 1.5) + 's';
    document.body.appendChild(sparkle);
  }
}
createSparkles();

function createFallingStars() {
  const stars = ['⭐', '✨', '🌟', '💫'];
  for (let i = 0; i < 10; i++) {
    const star = document.createElement('div');
    star.className = 'falling-star';
    star.innerHTML = stars[Math.floor(Math.random() * stars.length)];
    star.style.left = Math.random() * 100 + 'vw';
    star.style.animationDelay = Math.random() * 4 + 's';
    star.style.animationDuration = (3 + Math.random() * 3) + 's';
    document.body.appendChild(star);
  }
}
createFallingStars();

const audio = document.getElementById('bg-music');
const audioControl = document.getElementById('audio-control');

function tryPlayMusic() {
  audio.volume = 0.3;
  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise.then(() => {
      audioControl.style.display = 'block';
      audioControl.innerHTML = '⏸️';
    }).catch(() => {
      audioControl.style.display = 'block';
    });
  }
}

function toggleAudio() {
  if (audio.paused) {
    audio.play();
    audioControl.innerHTML = '⏸️';
  } else {
    audio.pause();
    audioControl.innerHTML = '▶️';
  }
}

function createHearts() {
  const heartTypes = ['❤️', '💕', '💗', '💖', '💓', '🩷', '💘', '💝'];
  for (let i = 0; i < 40; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.innerHTML = heartTypes[Math.floor(Math.random() * heartTypes.length)];
      heart.className = "hearts";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.top = "100vh";
      heart.style.fontSize = (1.2 + Math.random() * 1.5) + "rem";
      document.body.appendChild(heart);
      heart.animate([
        { top: "100vh", opacity: 0, transform: "scale(0) rotate(0deg)" },
        { top: "50vh", opacity: 1, transform: "scale(1.3) rotate(180deg)" },
        { top: "-10vh", opacity: 0, transform: "scale(0.8) rotate(360deg)" }
      ], {
        duration: 3500,
        easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
      });
      setTimeout(() => heart.remove(), 3500);
    }, i * 80);
  }
}

function createConfetti() {
  const confettiShapes = ['🎀', '🌸', '💮', '🎊', '✨', '💕'];
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.innerHTML = confettiShapes[Math.floor(Math.random() * confettiShapes.length)];
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.top = '-20px';
      confetti.style.fontSize = (0.8 + Math.random() * 1) + 'rem';
      confetti.style.animationDuration = (3 + Math.random() * 2) + 's';
      document.body.appendChild(confetti);
      setTimeout(() => confetti.remove(), 5000);
    }, i * 60);
  }
}

function createRingEffect(x, y) {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      const ring = document.createElement('div');
      ring.className = 'ring-effect';
      ring.style.left = x + 'px';
      ring.style.top = y + 'px';
      document.body.appendChild(ring);
      setTimeout(() => ring.remove(), 1000);
    }, i * 150);
  }
}

function showFlowerBouquet() {
  const bouquet = document.getElementById('flower-bouquet');
  bouquet.classList.add('show', 'animate');
  setTimeout(() => {
    bouquet.classList.remove('show', 'animate');
  }, 8000);
}

function showResponse() {
  const response = document.getElementById("response");
  response.classList.add("show");
  response.style.opacity = "1";
  createHearts();
  createConfetti();
  showFlowerBouquet();
  tryPlayMusic();
  
  const btn = document.querySelector('.btn');
  const rect = btn.getBoundingClientRect();
  createRingEffect(rect.left + rect.width/2, rect.top + rect.height/2);
}

document.body.addEventListener('click', (e) => {
  createRingEffect(e.clientX, e.clientY);
});

document.body.addEventListener('click', tryPlayMusic, { once: true });

window.addEventListener('load', () => {
  setTimeout(() => {
    showFlowerBouquet();
  }, 2000);
});

setInterval(() => {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.left = Math.random() * 100 + 'vw';
  sparkle.style.top = Math.random() * 100 + 'vh';
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 3000);
}, 500);