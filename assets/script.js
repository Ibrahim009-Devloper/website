// ===== Year =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Copy Email =====
const copyBtn = document.getElementById("copyEmailBtn");
if (copyBtn) {
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("ibrahimshake100@gmail.com");
      alert("Email copied!");
    } catch {
      alert("Copy failed. Please copy manually: ibrahimshake100@gmail.com");
    }
  });
}

// ===== Rotating Role =====
(() => {
  const roles = [
    "Automation Web Tester",
    "Selenium Automation Engineer",
    "QA Automation (POM + Utilities)",
    "CI/CD Ready Test Suites",
  ];
  const el = document.getElementById("rotatingRole");
  if (!el) return;

  let i = 0;
  setInterval(() => {
    i = (i + 1) % roles.length;
    el.textContent = roles[i];
  }, 2200);
})();

// ===== Premium Navbar SMS Bubble (Fixed) =====
(() => {
  const messages = [
    "Hi! I’m an Automation Web Tester 👋",
    "I reduce flaky tests and improve CI reliability.",
    "I build Selenium frameworks using POM + utilities.",
    "CI/CD ready suites with reports & artifacts.",
    "Let’s talk about QA automation!"
  ];

  const bubble = document.getElementById("navSmsBubble");
  const textEl = document.getElementById("navSmsText");
  const timeEl = document.getElementById("navSmsTime");

  if (!bubble || !textEl || !timeEl) return;

  function timeLabel() {
    const d = new Date();
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    return `${hh}:${mm}`;
  }

  function typeText(el, text, speed = 18) {
    el.textContent = "";
    let i = 0;
    return new Promise((resolve) => {
      const t = setInterval(() => {
        el.textContent += text[i] || "";
        i++;
        if (i >= text.length) {
          clearInterval(t);
          resolve();
        }
      }, speed);
    });
  }

  function showBubble() {
    bubble.classList.remove("sms-hide");
    bubble.classList.add("sms-show");
  }
  function hideBubble() {
    bubble.classList.remove("sms-show");
    bubble.classList.add("sms-hide");
  }

  async function loop() {
    let idx = 0;
    await new Promise(r => setTimeout(r, 700));

    while (true) {
      timeEl.textContent = timeLabel();
      showBubble();

      await typeText(textEl, messages[idx], 18);
      await new Promise(r => setTimeout(r, 1600));

      hideBubble();
      idx = (idx + 1) % messages.length;

      await new Promise(r => setTimeout(r, 900));
    }
  }

  loop();
})();

// ===== Scroll Reveal =====
(() => {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("reveal-in");
    });
  }, { threshold: 0.12 });

  els.forEach(el => io.observe(el));
})();

// ===== Project hover glow follows mouse =====
(() => {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      card.style.setProperty("--mx", x + "%");
      card.style.setProperty("--my", y + "%");
    });
  });
})();

// ===== Tilt Card (What I deliver) =====
(() => {
  const card = document.querySelector(".tilt-card");
  if (!card) return;

  const max = 10;

  function onMove(e) {
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;

    const rx = (py - 0.5) * -max;
    const ry = (px - 0.5) * max;

    card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
  }

  function reset() {
    card.style.transform = "rotateX(0deg) rotateY(0deg) translateY(0)";
  }

  card.addEventListener("mousemove", onMove);
  card.addEventListener("mouseleave", reset);
  card.addEventListener("mouseenter", reset);
})();
