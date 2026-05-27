// CUBE‑2 – Pipeline-Modul
// C1 → C2 → C3 / C3’
// MODE = A / B / AB

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

// --- Pipeline-Controller ---
export function cube2_run(input, MODE) {

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

// --- SAFE-Routing ---
import "./cube-core.js";
import "./verhandlung-core.js";
