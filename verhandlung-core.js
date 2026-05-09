<script>
function cubeKontakt(cubeID, projekt) {
  const bereit =
    cubeID + " → Bereitschaft 100% → Ressourcen stabil → Leitung frei → Projekt: " +
    projekt + " → Bereit zur Arbeitseinleitung.";

  const anker = document.getElementById("cube-anker");
  const status = document.getElementById("cube-status");

  if (!anker || !status) return;

  anker.textContent = bereit;
  status.textContent = cubeID + " → Arbeit eingeleitet → Prozess läuft…";

  cubeJob(cubeID);
}

function cubeJob(cubeID) {
  switch (cubeID) {
    case "CUBE_2":
      console.log("Cube 2: SAFE-Analyse aktiv.");
      safeUI(1);
      break;
    default:
      console.log(cubeID + " aktiv.");
  }
}

function safeUI(vr) {
  const cube = document.getElementById("cube2");
  if (!cube) return;

  cube.classList.remove("active", "trigger");

  if (vr >= 1) {
    cube.classList.add("active");
    cube.classList.add("trigger");
  }
}

function berechneVR(H, E, F, D) {
  return H * E * F * D;
}

function verhandlungsStatusText(vr) {
  return vr >= 1
    ? "Verhandlung möglich – KI kann Funktionen übernehmen."
    : "Verhandlung blockiert – KI schützt System.";
}

function zeigeVerhandlungsStatus(H, E, F, D) {
  const vr = berechneVR(H, E, F, D);
  safeUI(vr);

  const box = document.getElementById("vr-box");
  if (!box) return;

  box.innerText =
    "H=" + H + "  E=" + E + "  F=" + F + "  D=" + D +
    "  → VR=" + vr + "\n" +
    verhandlungsStatusText(vr);
}
</script>
