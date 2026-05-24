// VERHANDLUNG-CORE (GitHub Pages Version)

// Original safeUI (falls vorhanden)
let originalSafeUI = window.safeUI || function(){};

// SAFE-UI erweitern
window.safeUI = function(vr) {
  // Originalfunktion ausführen
  originalSafeUI(vr);

  // SAFE-Routing
  switch(vr) {
    case 1:
      window.location.href = "safe_run.html";
      break;

    case 2:
      window.location.href = "safe_list.html";
      break;

    case 3:
      window.location.href = "safe_eval.html";
      break;

    default:
      console.log("VR uninteressant:", vr);
  }
};
