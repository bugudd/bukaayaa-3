function openEnvelope() {
  const envelope = document.getElementById('envelope');
  const flap = document.getElementById('flap');
  const card = document.getElementById('cardBook');

  envelope.classList.add('open');

  setTimeout(() => {
    envelope.style.display = 'none';
    card.classList.add('show');
    showSparkles();
    showPage(0);
  }, 800);
}

function showPage(index) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(p => p.classList.remove('active'));
  if (pages[index]) pages[index].classList.add('active');
}

function nextPage(index) {
  showPage(index);
}

function showSparkles() {
  const sparkle = document.getElementById('sparkle');
  sparkle.innerHTML = '';
  for (let i = 0; i < 30; i++) {
    const dot = document.createElement('div');
    dot.className = 'spark';
    dot.style.left = Math.random() * 100 + '%';
    dot.style.top = Math.random() * 100 + '%';
    dot.style.animationDelay = Math.random() + 's';
    sparkle.appendChild(dot);
  }

  setTimeout(() => {
    sparkle.innerHTML = '';
  }, 3000);
}

function jawaban(pilih) {
  const respon = document.getElementById('responNol');
  if (pilih) {
    window.location.href = "https://wa.me/6285782570257?text=iya%20aku%20mau";
  } else {
    respon.textContent = "Gapapa deh, selamat ulang tahun ya 🥹🎂";
  }
}
