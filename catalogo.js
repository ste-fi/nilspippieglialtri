/* ==========================================================
   Catalogo: menù a tendina per autore, titolo, paese, anno e tema
   + ricerca libera + due viste (schede / linea del tempo)
   + scheda rapida in modale (apribile anche da #t06 nell'URL)
   I menù si riempiono da soli leggendo ITEMS in data.js.
   ========================================================== */
(function () {
  const state = { autore: "tutti", titolo: "tutti", paese: "tutti", anno: "tutti", tema: "tutti", q: "", view: "schede" };
  const grid = document.getElementById("grid");
  const tl = document.getElementById("timeline");
  const count = document.getElementById("count");
  const modal = document.getElementById("modal-item");

  function normalizza(s) {
    return String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  }
  function unici(campo) {
    const v = [];
    ITEMS.forEach(function (it) { if (v.indexOf(it[campo]) === -1) v.push(it[campo]); });
    return v;
  }
  function riempi(id, valori) {
    const sel = document.getElementById(id);
    valori.forEach(function (v) {
      const o = document.createElement("option");
      o.value = String(v); o.textContent = v;
      sel.appendChild(o);
    });
  }
  riempi("f-autore", unici("autore").sort(function (a, b) { return a.localeCompare(b, "it"); }));
  riempi("f-titolo", unici("titolo").sort(function (a, b) { return a.localeCompare(b, "it"); }));
  riempi("f-paese", unici("paese").sort(function (a, b) { return a.localeCompare(b, "it"); }));
  riempi("f-anno", unici("anno").sort(function (a, b) { return a - b; }));

  function filtra() {
    const q = normalizza(state.q);
    return ITEMS.filter(function (it) {
      if (state.autore !== "tutti" && it.autore !== state.autore) return false;
      if (state.titolo !== "tutti" && it.titolo !== state.titolo) return false;
      if (state.paese !== "tutti" && it.paese !== state.paese) return false;
      if (state.anno !== "tutti" && String(it.anno) !== state.anno) return false;
      if (state.tema !== "tutti" && it.temi.indexOf(state.tema) === -1) return false;
      if (q) {
        const hay = normalizza([it.autore, it.titolo, it.titoloIt, it.annoNote, it.paese, it.testo.label].join(" "));
        if (hay.indexOf(q) === -1) return false;
      }
      return true;
    }).sort(function (a, b) { return a.anno - b.anno || a.titolo.localeCompare(b.titolo, "it"); });
  }

  function titoloIt(it) {
    if (!it.titoloIt) return "";
    return "<p class='meta'>" + esc(it.titoloIt) + (it.titoloItVerificato ? "" : " <span class='badge todo'>titolo it. da verificare</span>") + "</p>";
  }
  function badgeTesto(it) {
    const cls = it.testo.tipo === "integrale" ? "ok" : "todo";
    return "<span class='badge " + cls + "'>" + TESTO_BADGE[it.testo.tipo] + "</span>";
  }

  function card(it) {
    const pagina = it.pagina ? "<a class='btn' href='" + esc(it.pagina) + "'>Vai alla pagina</a>" : "";
    return "<article class='card' id='card-" + it.id + "'>" +
      "<div class='card-head'>" + badgeTesto(it) + "<span class='badge'>" + esc(it.paese) + "</span></div>" +
      "<h3>" + esc(it.titolo) + "</h3>" + titoloIt(it) +
      "<p class='autore'>" + esc(it.autore) + " (" + esc(it.vita) + ")</p>" +
      "<p class='meta'>" + esc(it.annoNote || it.anno) + " · " + esc(it.diritti) + "</p>" +
      "<div class='actions'><button class='btn secondary' data-open='" + it.id + "'>Scheda rapida</button>" + pagina + "</div>" +
      "</article>";
  }

  function voceTimeline(it) {
    return "<li><span class='year'>" + it.anno + "</span> · <span class='badge'>" + esc(it.paese) + "</span><br>" +
      "<strong>" + esc(it.titolo) + "</strong> — " + esc(it.autore) +
      " <button class='chip' data-open='" + it.id + "'>Scheda rapida</button></li>";
  }

  function render() {
    const out = filtra();
    count.textContent = out.length + " di " + ITEMS.length + " item";
    if (state.view === "schede") {
      grid.hidden = false; tl.hidden = true;
      grid.innerHTML = out.length ? out.map(card).join("") : "<p>Nessun item corrisponde ai filtri scelti.</p>";
    } else {
      grid.hidden = true; tl.hidden = false;
      tl.innerHTML = out.length ? out.map(voceTimeline).join("") : "<li>Nessun item.</li>";
    }
  }

  /* ---------- scheda rapida (modale) ---------- */
  function apri(id) {
    const it = ITEMS.find(function (x) { return x.id === id; });
    if (!it) return;
    const box = modal.querySelector(".modal-body");
    box.innerHTML =
      "<h2 id='modal-item-title' style='margin-top:0;border:0'>" + esc(it.titolo) + "</h2>" +
      "<p>" + badgeTesto(it) + " <span class='badge'>" + esc(it.paese) + "</span></p>" +
      "<table class='table-meta'><tbody>" +
      "<tr><th>Autore</th><td>" + esc(it.autore) + " (" + esc(it.vita) + ")</td></tr>" +
      (it.titoloIt ? "<tr><th>Titolo italiano</th><td>" + esc(it.titoloIt) + (it.titoloItVerificato ? "" : " (da verificare)") + "</td></tr>" : "") +
      "<tr><th>Data</th><td>" + esc(it.annoNote || it.anno) + "</td></tr>" +
      "<tr><th>Diritti</th><td>" + esc(it.diritti) + "</td></tr>" +
      "<tr><th>Temi</th><td>" + it.temi.map(function (t) { return TEMI[t]; }).join(", ") + "</td></tr>" +
      "<tr><th>Testo</th><td><a href='" + esc(it.testo.url) + "' target='_blank' rel='noopener'>" + esc(it.testo.label) + "</a></td></tr>" +
      "</tbody></table>" +
      (it.pagina ? "<p><a class='btn' href='" + esc(it.pagina) + "'>Vai alla pagina dell'item</a></p>" : "");
    modal.hidden = false;
    modal.querySelector(".modal-close").focus();
    history.replaceState(null, "", "#" + id);
  }
  function chiudi() { modal.hidden = true; history.replaceState(null, "", location.pathname + location.search); }

  /* ---------- eventi ---------- */
  [["f-autore", "autore"], ["f-titolo", "titolo"], ["f-paese", "paese"], ["f-anno", "anno"], ["f-tema", "tema"]].forEach(function (p) {
    document.getElementById(p[0]).addEventListener("change", function (e) { state[p[1]] = e.target.value; render(); });
  });
  document.getElementById("q").addEventListener("input", function (e) { state.q = e.target.value; render(); });

  const viewWrap = document.getElementById("f-view");
  viewWrap.addEventListener("click", function (e) {
    const b = e.target.closest(".chip");
    if (!b) return;
    state.view = b.dataset.v;
    viewWrap.querySelectorAll(".chip").forEach(function (c) { c.setAttribute("aria-pressed", String(c === b)); });
    render();
  });

  document.addEventListener("click", function (e) {
    const o = e.target.closest("[data-open]");
    if (o) apri(o.dataset.open);
  });
  modal.querySelector(".modal-close").addEventListener("click", chiudi);
  modal.addEventListener("click", function (e) { if (e.target === modal) chiudi(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !modal.hidden) chiudi(); });

  document.getElementById("reset").addEventListener("click", function () {
    Object.assign(state, { autore: "tutti", titolo: "tutti", paese: "tutti", anno: "tutti", tema: "tutti", q: "", view: "schede" });
    ["f-autore", "f-titolo", "f-paese", "f-anno", "f-tema"].forEach(function (id) { document.getElementById(id).value = "tutti"; });
    document.getElementById("q").value = "";
    viewWrap.querySelectorAll(".chip").forEach(function (c, i) { c.setAttribute("aria-pressed", String(i === 0)); });
    render();
  });

  render();
  if (location.hash.length > 1) apri(location.hash.slice(1));
})();
