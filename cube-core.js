// Cube UI initialisieren
document.addEventListener("DOMContentLoaded", () => {
  console.log("Cube UI geladen.");
});

// Beispiel: Cube anklickbar machen
const cube2 = document.getElementById("cube2");
if (cube2) {
  cube2.addEventListener("click", () => {
    cubeKontakt("CUBE_2", "SAFE");
  });
}
