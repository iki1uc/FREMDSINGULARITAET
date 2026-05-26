// CUBE‑2 · Bewegung / Strukturkern
// ID: CUBE‑2 / FILE: c2.js / ROLE: Bewegungsknoten

// 1) Kontext LESEN (nicht überschreiben)
// Warum? → Cube‑2 übernimmt nur, was Cube‑1 gesetzt hat.
const CUBE_ID = "CUBE-2";
const FILE_ID = "c2.js";
const ROLE = "Bewegung / Strukturkern";

const PREV = localStorage.getItem("PREV") || "c1";
const MODE = localStorage.getItem("MODE") || "A"; // A/B/AB → Cluster-Modus

// 2) Gravitation (Zugkraft)
// Warum? → Cube‑2 ist der erste Cube, der die Entscheidung in Bewegung umsetzt.
function gravitation2() {
  if (MODE === "A") return "→A";
  if (MODE === "B") return "→B";
  return "↔"; // AB = symmetrisch
}

// 3) Schiene (Pfad c1 → c2 → c3)
// Warum? → Cube‑2 ist der Bewegungsknoten zwischen Entscheidung und Analyse.
function schiene2() {
  return {
    vorher: PREV,
    jetzt: "c2",
    nachher: "c3",
    grav: gravitation2(),
    mode: MODE
  };
}

// 4) Quertier-Slot (A×B)
// Warum? → AB-Modus erzeugt eine doppelte Bewegungsrichtung.
function quertierSlot(a, b) {
  return {
    A: a,
    B: b,
    AB: a + " | " + b
  };
}

// 5) Kernfunktion (Bewegung)
// Warum? → Cube‑2 setzt die Entscheidung aus Cube‑1 in eine Richtung um.
function cube2Core(input) {
  const s = schiene2();

  if (MODE === "A") return "A2:" + input + " " + s.grav;
  if (MODE === "B") return "B2:" + input + " " + s.grav;

  if (MODE === "AB") {
    const q = quertierSlot("A2:" + input, "B2:" + input);
    return q.AB + " " + s.grav;
  }
}

// 6) Wissenschaftlicher Output
function c2_out(ist, soll) {
  document.getElementById("out").innerHTML = `
    <div class="out-title">CUBE‑2 – Bewegung / Strukturkern</div>
    <div class="out-ist"><b>IST:</b> ${ist}</div>
    <div class="out-soll"><b>SOLL:</b> ${soll}</div>
  `;
}

// 7) Startsignal
const s2 = schiene2();
c2_out(
  "Bewegung aktiv",
  `Schiene: ${s2.vorher} → ${s2.jetzt} → ${s2.nachher} | MODE: ${s2.mode} | GRAV: ${s2.grav}`
);

// 8) Anzeige (optional)
const md = document.getElementById("modeDisplay");
if (md) {
  md.textContent =
    `CUBE‑2 | MODE: ${MODE} | vorher: ${PREV} | nachher: c3`;
}
