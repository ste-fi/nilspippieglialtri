/* ==========================================================
   Mappa Leaflet del viaggio di Nils.
   Le tappe sotto sono SOLO quelle confermate da fonti consultate:
   Skåne (partenza), Karlskrona, Kebnekaise (Akka), Lapponia.
   Le coordinate sono approssimate. Per aggiungere tappe basta
   inserire altri oggetti nell'array TAPPE (con verificata: true
   solo dopo aver controllato il capitolo corrispondente).
   ========================================================== */
const TAPPE = [
  { nome: "Skurup (Skåne)", lat: 55.478, lon: 13.5, verificata: true,
    testo: "Punto di partenza: la «patria» di Nils (Nils Holgerssons Hembygd), nel sud della Svezia." },
  { nome: "Karlskrona (Blekinge)", lat: 56.161, lon: 15.587, verificata: true,
    testo: "Nils irrita la statua di Carlo XI (John Börjeson, 1897) e si nasconde sotto il cappello di Rosenbom. Oggi in città c'è la statua «Sprungen ur boken» di Ralf Borselius." },
  { nome: "Kebnekaise (Lapponia)", lat: 67.9, lon: 18.53, verificata: true,
    testo: "Da qui viene Akka, la capo-stormo delle oche selvatiche." }
];

(function () {
  const el = document.getElementById("mappa");
  if (!el) return;
  if (typeof L === "undefined") {
    el.innerHTML = "<p style='padding:20px'>La mappa richiede la libreria Leaflet (connessione internet).</p>";
    return;
  }
  const map = L.map("mappa", { scrollWheelZoom: false }).setView([61.5, 16], 4);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 12,
    attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
  }).addTo(map);

  const punti = [];
  TAPPE.forEach(function (t, i) {
    punti.push([t.lat, t.lon]);
    L.marker([t.lat, t.lon]).addTo(map)
      .bindPopup("<strong>" + (i + 1) + ". " + esc(t.nome) + "</strong><br>" + esc(t.testo));
  });
  L.polyline(punti, { color: "#c28a2c", weight: 3, dashArray: "6 8" }).addTo(map);
  map.fitBounds(punti, { padding: [30, 30] });
})();
