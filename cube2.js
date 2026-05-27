// =========================================================
// CUBE‑2 – GESAMTMODUL (Pipeline + Oberfläche)
// =========================================================

// ---------------------------------------------------------
// TEIL 1: PIPELINE‑MODUL (Fremdsingularität)
// ---------------------------------------------------------

// --- C1: Entscheidung / Trigger ---
export function c1_trigger(input) {
    return {
        type: "c1",
        value: input,
        raw: true
    };
}

// --- C2: Bewegung / Strukturkern ---
export function c2_process(state, MODE) {
    return {
        type: "c2",
        mode: MODE,
        value: state.value
    };
}

// --- C3: Analyse / Integration ---
export function c3_analyze(state) {
    const out = document.getElementById("c3");
    if (out) out.textContent = shinePresent(state.value);
}

// --- C3’: Variantenpfad ---
export function c3_variant(state) {
    const out = document.getElementById("c3p");
    if (out) out.textContent = "VAR: " + shinePresent(state.value);
}

// --- Pipeline‑Controller ---
export function cube2_pipeline(input, MODE) {

    // C1
    const s1 = c1_trigger(input);

    // C2
    const s2 = c2_process(s1, MODE);

    // C3 / C3’
    if (MODE === "AB") {
        c3_analyze(s2);
        c3_variant(s2);
    } else if (MODE === "A") {
        c3_analyze(s2);
    } else if (MODE === "B") {
        c3_variant(s2);
    }

    return s2;
}

// SAFE‑Routing
import "./cube-core.js";
import "./verhandlung-core.js";


// ---------------------------------------------------------
// TEIL 2: OBERFLÄCHEN‑MODUL (NoN‑144)
// ---------------------------------------------------------

const C2 = {
  grid: [
    ["↖", "↑", "↗"],
    ["←", "●", "→"],
    ["↙", "↓", "↘"]
  ],
  modes: ["RUN", "LIST", "EVAL"],
  modeIndex: 0
};

let C2_STATE = {
  anchor: "",
  mode: "RUN",
  lastAction: ""
};

// 3×3‑Raster rendern
function renderGrid() {
  return C2.grid.map(row => row.join(" ")).join("\n");
}

// --- Oberfläche‑Controller ---
export function cube2_surface(anchor = "CUBE‑2") {
  const out = document.getElementById("c2");
  if (!out) return;

  C2_STATE.anchor = anchor;
  C2_STATE.mode = C2.modes[C2_STATE.modeIndex % C2.modes.length];
  C2_STATE.modeIndex++;

  const grid = renderGrid();

  out.textContent =
    "CUBE‑2 · " + C2_STATE.mode + "\n" +
    "────────────────────────\n" +
    "ANKER: " + C2_STATE.anchor + "\n\n" +
    grid + "\n\n" +
    "ACTION: " + (C2_STATE.lastAction || "–");
}

// optional: Aktionen
export function cube2_action(actionName) {
  C2_STATE.lastAction = actionName;
  cube2_surface(C2_STATE.anchor);
}

// global optional
window.cube2_pipeline = cube2_pipeline;
window.cube2_surface = cube2_surface;
window.cube2_action = cube2_action;
