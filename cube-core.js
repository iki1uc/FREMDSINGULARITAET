// CUBE-CORE (GitHub Pages Version)

// Globale VR-Variable
let VR = 0;

// Cube aktivieren
export function setVR(value) {
  VR = value;
  updateVRBox();
  triggerSafeUI();
}

// VR-Anzeige aktualisieren
function updateVRBox() {
  const box = document.getElementById("vr-box");
  if (box) box.textContent = "VR: " + VR;
}

// SAFE-Trigger
function triggerSafeUI() {
  if (typeof window.safeUI === "function") {
    window.safeUI(VR);
  } else {
    console.warn("safeUI noch nicht geladen.");
  }
}

// Beispiel: Cube-Klick
document.addEventListener("DOMContentLoaded", () => {
  const cube = document.getElementById("cube2");
  if (!cube) return;

  cube.addEventListener("click", () => {
    // VR hochzählen
    VR = (VR % 3) + 1;
    updateVRBox();
    triggerSafeUI();
  });
});
