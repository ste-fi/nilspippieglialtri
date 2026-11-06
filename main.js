/* ==========================================================
   Comportamenti comuni a tutte le pagine
   - navbar responsive
   - accordion
   - tab
   - modale generica (immagini)
   ========================================================== */

/* ---------- 1. Navbar responsive ---------- */
function toggleNav() {
  const nav = document.getElementById("topnav");
  const open = nav.classList.toggle("responsive");
  const btn = nav.querySelector(".icon");
  if (btn) btn.setAttribute("aria-expanded", String(open));
}

/* ---------- 2. Accordion ---------- */
function initAccordion() {
  document.querySelectorAll(".accordion").forEach(function (acc) {
    acc.querySelectorAll("button[aria-controls]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const panel = document.getElementById(btn.getAttribute("aria-controls"));
        const open = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", String(!open));
        panel.hidden = open;
      });
    });
  });
}

/* ---------- 3. Tab ---------- */
function initTabs() {
  document.querySelectorAll(".tabs").forEach(function (tabs) {
    const buttons = tabs.querySelectorAll('[role="tab"]');
    const panels = tabs.querySelectorAll('[role="tabpanel"]');
    function select(btn) {
      buttons.forEach(function (b) { b.setAttribute("aria-selected", String(b === btn)); b.tabIndex = b === btn ? 0 : -1; });
      panels.forEach(function (p) { p.hidden = p.id !== btn.getAttribute("aria-controls"); });
    }
    buttons.forEach(function (btn, i) {
      btn.addEventListener("click", function () { select(btn); });
      btn.addEventListener("keydown", function (e) {
        let n = null;
        if (e.key === "ArrowRight") n = buttons[(i + 1) % buttons.length];
        if (e.key === "ArrowLeft") n = buttons[(i - 1 + buttons.length) % buttons.length];
        if (n) { n.focus(); select(n); }
      });
    });
  });
}

/* ---------- 4. Modale generica (ingrandimento figure) ---------- */
function initImageModal() {
  const modal = document.getElementById("modal-img");
  if (!modal) return;
  const body = modal.querySelector(".modal-body");
  document.querySelectorAll("[data-zoom]").forEach(function (el) {
    el.addEventListener("click", function () {
      body.innerHTML = el.innerHTML;
      const cap = el.parentElement.querySelector("figcaption");
      if (cap) body.insertAdjacentHTML("beforeend", "<p class='muted'>" + cap.innerHTML + "</p>");
      modal.hidden = false;
      modal.querySelector(".modal-close").focus();
    });
  });
  function close() { modal.hidden = true; }
  modal.querySelector(".modal-close").addEventListener("click", close);
  modal.addEventListener("click", function (e) { if (e.target === modal) close(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
}

/* ---------- Utilità condivise ---------- */
function esc(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initAccordion();
  initTabs();
  initImageModal();
});
