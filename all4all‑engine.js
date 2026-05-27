import { cube2_run } from "./cube2.js";

export function all4all(v) {

  // dein bestehender ALL4ALL-Code
  const out = document.getElementById("out2");
  if (out) out.textContent = "ALL4ALL: " + v;

  // CUBE‑2 automatisch mitfahren
  cube2_run("ALL4ALL:" + v, "AB");
}
