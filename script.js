/* ═══════════════════════════════════════════════════
       STAR FIELD
    ═══════════════════════════════════════════════════ */
(function () {
  const canvas = document.getElementById("star-canvas");
  const ctx = canvas.getContext("2d");
  let W,
    H,
    stars = [],
    mouse = { x: 0.5, y: 0.5 };

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function buildStars() {
    stars = Array.from({ length: 160 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.2 + 0.2,
      vy: Math.random() * 0.00008 + 0.00003,
      alpha: Math.random() * 0.6 + 0.1,
      flicker: Math.random() * Math.PI * 2,
      fspeed: Math.random() * 0.02 + 0.005,
    }));
  }

  function tick() {
    ctx.clearRect(0, 0, W, H);
    const t = performance.now() / 1000;

    // Subtle parallax shift from mouse
    const px = (mouse.x - 0.5) * 18;
    const py = (mouse.y - 0.5) * 10;

    stars.forEach((s) => {
      s.y += s.vy;
      s.flicker += s.fspeed;
      if (s.y > 1) s.y = 0;

      const ax = s.x * W + px;
      const ay = s.y * H + py;
      const a = s.alpha * (0.7 + 0.3 * Math.sin(s.flicker));

      ctx.beginPath();
      ctx.arc(ax, ay, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${a})`;
      ctx.fill();
    });

    requestAnimationFrame(tick);
  }

  window.addEventListener("resize", resize);
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX / window.innerWidth;
    mouse.y = e.clientY / window.innerHeight;
  });

  resize();
  buildStars();
  tick();
})();

/* ═══════════════════════════════════════════════════
       CARD TILT — 3D hover parallax
    ═══════════════════════════════════════════════════ */
document.querySelectorAll(".xp-card:not(.disabled)").forEach((card) => {
  let bounds;

  card.addEventListener("mouseenter", () => {
    bounds = card.getBoundingClientRect();
  });

  card.addEventListener("mousemove", (e) => {
    if (!bounds) return;
    const x = (e.clientX - bounds.left) / bounds.width - 0.5;
    const y = (e.clientY - bounds.top) / bounds.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
    bounds = null;
  });
});

/* ═══════════════════════════════════════════════════
       SCROLL REVEAL — cards animate in on scroll
    ═══════════════════════════════════════════════════ */
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.style.animationPlayState = "running";
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  document.querySelectorAll(".how-step").forEach((el) => {
    el.style.opacity = "0";
    el.style.animation = "card-in 0.7s var(--ease-out) both paused";
    io.observe(el);
  });
}
