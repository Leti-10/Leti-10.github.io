const element = document.querySelector("#element");
const startTime = Date.now();
const duration = 2000;
const letters = element.dataset.text.split("");
const steps = letters.length;

const map = (n, x1, y1, x2, y2) => Math.min(Math.max(((n - x1) * (y2 - x2)) / (y1 - x1) + x2, x2), y2);

const random = (set) => set[Math.floor(Math.random() * set.length)];

let frame;

(function animate() {
  frame = requestAnimationFrame(animate);

  const step = Math.round(map(Date.now() - startTime, 0, duration, 0, steps));

  element.innerText = letters
    .map((s, i) => (step - 1 >= i ? letters[i] : random("0123456789")))
    .join("");

  if (step >= steps) {
    cancelAnimationFrame(frame);
  }
})();
