document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-btn");
  const nav = document.querySelector("nav.links");

  if (!menuButton || !nav) return;

  menuButton.addEventListener("click", () => {
    nav.classList.toggle("mobile-open");
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("mobile-open");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const chips = document.querySelectorAll(".chip[data-info]");
  const panel = document.getElementById("chip-info");

  if (!chips.length || !panel) return;

  const title = panel.querySelector(".chip-info-title");
  const text = panel.querySelector(".chip-info-text");

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      const alreadyActive = chip.classList.contains("active");

      chips.forEach(c => c.classList.remove("active"));

      if (alreadyActive) {
        panel.hidden = true;
        return;
      }

      chip.classList.add("active");
      title.textContent = chip.textContent.trim();
      text.textContent = chip.dataset.info;
      panel.hidden = false;
    });
  });
});
