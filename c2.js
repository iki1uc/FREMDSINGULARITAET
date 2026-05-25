// c2.js – Cube‑2 Logik (Struktur‑Cube)

function c2_out(ist, soll) {
  document.getElementById("out").innerHTML = `
    <div class="out-title">Wissenschaftlicher Output – Cube‑2</div>
    <div class="out-ist"><b>IST:</b> ${ist}</div>
    <div class="out-soll"><b>SOLL:</b> ${soll}</div>
  `;
}

c2_out("Struktur aktiv", "Bereit für Verbund");

