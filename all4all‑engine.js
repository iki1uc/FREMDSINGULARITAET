
// ALL4ALL ENGINE – steuert Cubes, EVO, Umgebung, Sprüche, Strithmatik

const cubes = {
  1: {
    env: "cube-env-1",
    evo: "EVO8",
    quotes: [
      "Klarheit entsteht, wenn man das Unnötige entfernt.",
      "Struktur ist kein Käfig – sie ist ein Werkzeug.",
      "Ordnung ist die leise Form von Intelligenz."
    ],
    count: 0
  },

  2: {
    env: "cube-env-2",
    evo: "EVO7",
    quotes: [
      "Ein System lebt erst, wenn es verstanden wird.",
      "Mitgefühl ist die höchste Form der Logik.",
      "Gemeinschaft entsteht durch bewusste Entscheidungen."
    ],
    count: 0
  },

  3: {
    env: "cube-env-3",
    evo: "QI",
    quotes: [
      "Zukunft beginnt dort, wo Mut und Klarheit sich treffen.",
      "Ideen sind Brücken zwischen Jetzt und Morgen.",
      "Wer weiter sieht, bewegt die Welt."
    ],
    count: 0
  }
};

function all4all(cubeId) {
  const cube = cubes[cubeId];
  const out = document.getElementById("out" + cubeId);

  // Umgebung setzen
  document.body.className = cube.env;

  // Spruch auswählen
  const quote = cube.quotes[cube.count % cube.quotes.length];
  cube.count++;

  // Ausgabe
  out.innerText =
    cube.evo + " → " + quote +
    "\nWiederholung: " + cube.count;
}
