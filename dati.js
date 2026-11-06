/* ==========================================================
   Pagina dati: tabella strutturata con riconciliazione.
   Per ogni entità: link di ricerca già pronti sui vocabolari.
   Quando si compila un identificativo in data.js, il link diventa
   diretto e lo stato passa a «riconciliato».
   ========================================================== */
(function () {
  const tbody = document.getElementById("tbody");
  const count = document.getElementById("count");
  let tipo = "tutti";

  function urlRicerca(vocab, q) {
    const e = encodeURIComponent(q);
    if (vocab === "wikidata") return "https://www.wikidata.org/w/index.php?search=" + e;
    if (vocab === "viaf") return "https://viaf.org/viaf/search?query=local.names+all+%22" + e + "%22";
    if (vocab === "geonames") return "https://www.geonames.org/search.html?q=" + e;
    if (vocab === "lcsh") return "https://id.loc.gov/search/?q=" + e;
  }
  function urlId(vocab, id) {
    if (vocab === "wikidata") return "https://www.wikidata.org/entity/" + id;
    if (vocab === "viaf") return "https://viaf.org/viaf/" + id;
    if (vocab === "geonames") return "https://www.geonames.org/" + id;
  }

  function cella(a, vocab, applicabile) {
    if (!applicabile) return "<span class='muted'>—</span>";
    const id = a[vocab];
    if (id) return "<a href='" + esc(urlId(vocab, id)) + "' target='_blank' rel='noopener'><code>" + esc(id) + "</code></a>";
    return "<a href='" + esc(urlRicerca(vocab, a.q)) + "' target='_blank' rel='noopener'>cerca</a>";
  }

  function righe() {
    return AUTORITA.filter(function (a) { return tipo === "tutti" || a.tipo === tipo; });
  }

  function render() {
    const rs = righe();
    count.textContent = rs.length + " entità";
    tbody.innerHTML = rs.map(function (a) {
      const persona = a.tipo === "persona", luogo = a.tipo === "luogo", concetto = a.tipo === "concetto";
      const compilati = [a.wikidata, a.viaf, a.geonames].filter(Boolean).length;
      const stato = compilati ? "<span class='badge ok'>riconciliato</span>" : "<span class='badge todo'>da riconciliare</span>";
      const lcsh = concetto ? "<a href='" + esc(urlRicerca("lcsh", a.q)) + "' target='_blank' rel='noopener'>cerca</a>" : "<span class='muted'>—</span>";
      return "<tr><td><strong>" + esc(a.label) + "</strong></td><td>" + esc(a.tipo) + "</td><td>" + esc(a.ruolo) + "</td>" +
        "<td>" + cella(a, "wikidata", true) + "</td>" +
        "<td>" + cella(a, "viaf", persona) + "</td>" +
        "<td>" + cella(a, "geonames", luogo) + "</td>" +
        "<td>" + lcsh + "</td><td>" + stato + "</td></tr>";
    }).join("");
  }

  document.getElementById("f-tipo").addEventListener("click", function (e) {
    const b = e.target.closest(".chip");
    if (!b) return;
    tipo = b.dataset.v;
    this.querySelectorAll(".chip").forEach(function (c) { c.setAttribute("aria-pressed", String(c === b)); });
    render();
  });

  /* esportazione CSV (utile come «dataset» da citare all'orale) */
  document.getElementById("csv").addEventListener("click", function () {
    const head = ["entita", "tipo", "ruolo", "wikidata", "viaf", "geonames", "altro"];
    const rows = righe().map(function (a) {
      return [a.label, a.tipo, a.ruolo, a.wikidata, a.viaf, a.geonames, a.altro].map(function (v) {
        return '"' + String(v || "").replace(/"/g, '""') + '"';
      }).join(",");
    });
    const blob = new Blob(["﻿" + head.join(",") + "\n" + rows.join("\n")], { type: "text/csv;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "autorita-nils-pippi.csv";
    a.click();
    URL.revokeObjectURL(a.href);
  });

  render();
})();
