// Add Quiz or GR entries here. Each bank lives in its own classic script so it
// also loads when the course site is opened directly from the filesystem.
window.CourseStudyCatalog = [
  {
    "id": "gr1",
    "kind": "gr",
    "title": "GR1 · Concept practice",
    "description": "Lessons 1-13: semiconductor physics, the pn junction, diode models and analysis, small-signal diodes and Zener regulation, MOSFET structure, regions, models and DC analysis. Concept checks only; no calculations.",
    "questionCount": 117,
    "bank": "assets/study/banks/gr1.js",
    "cram": "cram/gr1.html"
  },
  {
    "id": "gr2",
    "kind": "gr",
    "title": "GR2 · Concept practice",
    "description": "Lessons 15-26: amplifier models, CS/CD/CG design, operating points, small-signal analysis, measurement and BJTs. Concept checks only; no calculations.",
    "questionCount": 191,
    "bank": "assets/study/banks/gr2.js",
    "cram": "cram/gr2.html"
  }
];
