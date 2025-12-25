// ⭐ BINTANG RANDOM
for (let i = 0; i < 60; i++) {
  let star = document.createElement("div");
  star.className = "star";
  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  document.body.appendChild(star);
}

// ❤️ LOVE JATUH
function createLove() {
  let love = document.createElement("div");
  love.className = "love";
  love.innerHTML = "❤️";
  love.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(love);
  setTimeout(() => love.remove(), 5000);
}
setInterval(createLove, 500);

// 📸 FOTO QUOTES
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("active");
  });
});
function openLetter(el) {
  if (el.classList.contains("open")) return;
  el.classList.add("open");
}
function toggleQuote(el) {
  el.classList.toggle("show");
}
