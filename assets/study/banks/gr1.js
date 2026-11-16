window.CourseStudy.registerBank({
 "id": "gr1",
 "title": "GR1 · Concept practice",
 "course": "ECE 321",
 "policy": {
  "requiresCalculations": false
 },
 "sources": [
  "Course syllabus, Version 6 (Lessons 1-13)",
  "Lesson objectives",
  "Equation Sheet 1: Diodes and semiconductor physics",
  "Equation Sheet 2: MOSFET fundamentals and DC analysis",
  "Instructor notetakers for Lessons 1-6, 8-11 and 13",
  "Lesson guides 1-6, 8-11, 13"
 ],
 "questions": [
  {
   "id": "gr1-semi-001",
   "type": "choice",
   "topic": "Semiconductors, carriers and doping",
   "objective": "Identify donors and acceptors from the periodic table",
   "prompt": "Which pair of dopant groups correctly names what makes silicon n-type and what makes it p-type?",
   "answer": {
    "id": "b",
    "text": "Group V atoms (such as phosphorus) make it n-type; Group III atoms (such as boron) make it p-type"
   },
   "options": [
    {
     "id": "a",
     "text": "Group III atoms make it n-type; Group V atoms make it p-type",
     "correct": false,
     "rationale": "A Group V atom has one extra valence electron to give, so it is a donor and makes n-type material."
    },
    {
     "id": "b",
     "text": "Group V atoms (such as phosphorus) make it n-type; Group III atoms (such as boron) make it p-type",
     "correct": true
    },
    {
     "id": "c",
     "text": "Group IV atoms make it n-type; Group VI atoms make it p-type",
     "correct": false,
     "rationale": "Group IV is silicon itself; the dopants sit one column to either side of it."
    },
    {
     "id": "d",
     "text": "Either group makes it n-type; only temperature makes it p-type",
     "correct": false,
     "rationale": "Acceptors from Group III are what create p-type material."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Group III atoms make it n-type; Group V atoms make it p-type",
     "misconception": "Swaps donors and acceptors.",
     "rationale": "A Group V atom has one extra valence electron to give, so it is a donor and makes n-type material."
    },
    {
     "id": "c",
     "text": "Group IV atoms make it n-type; Group VI atoms make it p-type",
     "misconception": "Picks the wrong columns.",
     "rationale": "Group IV is silicon itself; the dopants sit one column to either side of it."
    },
    {
     "id": "d",
     "text": "Either group makes it n-type; only temperature makes it p-type",
     "misconception": "Ignores acceptor doping.",
     "rationale": "Acceptors from Group III are what create p-type material."
    }
   ],
   "explanation": "Silicon has four valence electrons. A Group V donor adds a fifth electron that is easily freed (n-type). A Group III acceptor has only three, leaving a bond vacancy (a hole) that behaves as a mobile positive carrier (p-type).",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-01.html",
     "label": "Lesson 1 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-01.html",
     "section": "B4 Doping and carrier concentration"
    },
    {
     "file": "equation-sheets/sheet-1.html",
     "section": "Section 5 periodic table"
    }
   ]
  },
  {
   "id": "gr1-semi-002",
   "type": "choice",
   "topic": "Semiconductors, carriers and doping",
   "objective": "Name the majority and minority carriers",
   "prompt": "In n-type silicon, which statement about carriers is correct?",
   "answer": {
    "id": "d",
    "text": "Electrons are the majority carriers and holes are the minority carriers"
   },
   "options": [
    {
     "id": "a",
     "text": "Holes are the majority carriers because the dopant is a donor",
     "correct": false,
     "rationale": "A donor supplies electrons, so electrons outnumber holes."
    },
    {
     "id": "b",
     "text": "Electrons and holes are equal in number, as in pure silicon",
     "correct": false,
     "rationale": "Doping breaks the electron-hole balance; the mass-action law then fixes a very small hole count."
    },
    {
     "id": "c",
     "text": "There are no holes at all in n-type material",
     "correct": false,
     "rationale": "Thermal generation still makes a small number of holes (the minority carriers)."
    },
    {
     "id": "d",
     "text": "Electrons are the majority carriers and holes are the minority carriers",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Holes are the majority carriers because the dopant is a donor",
     "misconception": "Mixes up what a donor supplies.",
     "rationale": "A donor supplies electrons, so electrons outnumber holes."
    },
    {
     "id": "b",
     "text": "Electrons and holes are equal in number, as in pure silicon",
     "misconception": "Treats doped material as intrinsic.",
     "rationale": "Doping breaks the electron-hole balance; the mass-action law then fixes a very small hole count."
    },
    {
     "id": "c",
     "text": "There are no holes at all in n-type material",
     "misconception": "Thinks doping removes holes completely.",
     "rationale": "Thermal generation still makes a small number of holes (the minority carriers)."
    }
   ],
   "explanation": "Donor atoms add free electrons, so n-type material has many more electrons than holes. The few holes that remain are the minority carriers, and their concentration is set by n·p = ni².",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-01.html",
     "label": "Lesson 1 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-01.html",
     "section": "B4 Doping and carrier concentration"
    },
    {
     "file": "lesson-guides/lesson-04.html",
     "section": "Majority and minority carriers"
    }
   ]
  },
  {
   "id": "gr1-semi-003",
   "type": "choice",
   "topic": "Semiconductors, carriers and doping",
   "objective": "Apply the mass-action law qualitatively",
   "prompt": "Why does adding donor atoms to silicon reduce the number of holes?",
   "answer": {
    "id": "b",
    "text": "Because the product of electron and hole concentrations stays equal to ni squared, so more electrons means fewer holes"
   },
   "options": [
    {
     "id": "a",
     "text": "Because donors fill the holes with ions that cannot move",
     "correct": false,
     "rationale": "Holes are missing bonds, not sites that donors occupy; the reduction comes from the equilibrium relation."
    },
    {
     "id": "b",
     "text": "Because the product of electron and hole concentrations stays equal to ni squared, so more electrons means fewer holes",
     "correct": true
    },
    {
     "id": "c",
     "text": "Because the extra electrons cool the crystal and stop hole generation",
     "correct": false,
     "rationale": "Doping does not change the temperature; it changes the equilibrium carrier balance."
    },
    {
     "id": "d",
     "text": "Because donors raise the bandgap energy of the silicon",
     "correct": false,
     "rationale": "The bandgap is a property of the host material and is essentially unchanged by light doping."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Because donors fill the holes with ions that cannot move",
     "misconception": "Pictures holes being physically plugged.",
     "rationale": "Holes are missing bonds, not sites that donors occupy; the reduction comes from the equilibrium relation."
    },
    {
     "id": "c",
     "text": "Because the extra electrons cool the crystal and stop hole generation",
     "misconception": "Invents a temperature effect.",
     "rationale": "Doping does not change the temperature; it changes the equilibrium carrier balance."
    },
    {
     "id": "d",
     "text": "Because donors raise the bandgap energy of the silicon",
     "misconception": "Thinks doping changes Eg.",
     "rationale": "The bandgap is a property of the host material and is essentially unchanged by light doping."
    }
   ],
   "explanation": "In thermal equilibrium n·p = ni² at a given temperature. If doping raises n far above ni, p must fall to ni²/n. This is the mass-action law.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-01.html",
     "label": "Lesson 1 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-01.html",
     "section": "B3 Carriers, thermal generation and equilibrium"
    },
    {
     "file": "equation-sheets/sheet-1.html",
     "section": "Sections 1-4"
    }
   ]
  },
  {
   "id": "gr1-semi-004",
   "type": "choice",
   "topic": "Semiconductors, carriers and doping",
   "objective": "Explain why intrinsic carriers rise with temperature",
   "prompt": "Why does the intrinsic carrier concentration ni of silicon increase as temperature increases?",
   "answer": {
    "id": "d",
    "text": "More thermal energy breaks more bonds, creating more electron-hole pairs"
   },
   "options": [
    {
     "id": "a",
     "text": "The atoms release extra free electrons without leaving any holes",
     "correct": false,
     "rationale": "Each freed electron leaves a hole behind, so pairs are generated."
    },
    {
     "id": "b",
     "text": "The bandgap energy grows with temperature",
     "correct": false,
     "rationale": "A larger bandgap would reduce generation, and Eg is not what changes the carrier count here."
    },
    {
     "id": "c",
     "text": "The doping concentration increases with temperature",
     "correct": false,
     "rationale": "ni describes undoped material and does not depend on the dopant atoms."
    },
    {
     "id": "d",
     "text": "More thermal energy breaks more bonds, creating more electron-hole pairs",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The atoms release extra free electrons without leaving any holes",
     "misconception": "Forgets that carriers are generated in pairs.",
     "rationale": "Each freed electron leaves a hole behind, so pairs are generated."
    },
    {
     "id": "b",
     "text": "The bandgap energy grows with temperature",
     "misconception": "Reverses the dependence on Eg.",
     "rationale": "A larger bandgap would reduce generation, and Eg is not what changes the carrier count here."
    },
    {
     "id": "c",
     "text": "The doping concentration increases with temperature",
     "misconception": "Confuses intrinsic with extrinsic carriers.",
     "rationale": "ni describes undoped material and does not depend on the dopant atoms."
    }
   ],
   "explanation": "Carriers are generated thermally: an electron gains enough energy to leave a bond, creating an electron-hole pair. Higher temperature supplies more of that energy, so ni rises rapidly.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-01.html",
     "label": "Lesson 1 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-01.html",
     "section": "B3 Carriers, thermal generation and equilibrium"
    },
    {
     "file": "equation-sheets/sheet-1.html",
     "section": "Sections 1-4"
    }
   ]
  },
  {
   "id": "gr1-semi-005",
   "type": "choice",
   "topic": "Semiconductors, carriers and doping",
   "objective": "Relate bandgap to carrier generation",
   "prompt": "Compare two intrinsic semiconductors at the same temperature, one with a larger bandgap energy Eg. Which has fewer intrinsic carriers?",
   "answer": {
    "id": "b",
    "text": "The one with the larger Eg, because more energy is needed to free an electron"
   },
   "options": [
    {
     "id": "a",
     "text": "The one with the smaller Eg, because it has stronger bonds",
     "correct": false,
     "rationale": "A smaller Eg means electrons are freed more easily, giving more carriers."
    },
    {
     "id": "b",
     "text": "The one with the larger Eg, because more energy is needed to free an electron",
     "correct": true
    },
    {
     "id": "c",
     "text": "They have the same number, because ni depends only on temperature",
     "correct": false,
     "rationale": "ni depends on Eg through the exponent, not on temperature alone."
    },
    {
     "id": "d",
     "text": "Neither has carriers until doped",
     "correct": false,
     "rationale": "Thermal generation gives every semiconductor some intrinsic carriers above absolute zero."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The one with the smaller Eg, because it has stronger bonds",
     "misconception": "Reverses what Eg measures.",
     "rationale": "A smaller Eg means electrons are freed more easily, giving more carriers."
    },
    {
     "id": "c",
     "text": "They have the same number, because ni depends only on temperature",
     "misconception": "Ignores the material.",
     "rationale": "ni depends on Eg through the exponent, not on temperature alone."
    },
    {
     "id": "d",
     "text": "Neither has carriers until doped",
     "misconception": "Thinks undoped material has no carriers.",
     "rationale": "Thermal generation gives every semiconductor some intrinsic carriers above absolute zero."
    }
   ],
   "explanation": "The bandgap is the energy needed to move an electron from a bond into the conduction band. A larger Eg makes this rarer, so ni (which varies as exp(-Eg/2kT)) is smaller.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-01.html",
     "label": "Lesson 1 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-01.html",
     "section": "B2 Atoms, shells and semiconductor materials"
    },
    {
     "file": "equation-sheets/sheet-1.html",
     "section": "Sections 1-4"
    }
   ]
  },
  {
   "id": "gr1-semi-006",
   "type": "choice",
   "topic": "Semiconductors, carriers and doping",
   "objective": "Decide the type of a compensated semiconductor",
   "prompt": "A silicon sample is doped with both donors and acceptors. What decides whether it behaves as n-type or p-type?",
   "answer": {
    "id": "d",
    "text": "Which dopant concentration is larger; the net excess sets the majority carrier"
   },
   "options": [
    {
     "id": "a",
     "text": "Whichever dopant was added first",
     "correct": false,
     "rationale": "Only the net concentration matters in the finished material."
    },
    {
     "id": "b",
     "text": "It is always intrinsic, because the dopants cancel completely",
     "correct": false,
     "rationale": "Cancellation is only partial unless the two concentrations happen to be equal."
    },
    {
     "id": "c",
     "text": "The dopant with the larger atomic mass",
     "correct": false,
     "rationale": "Atomic mass does not decide carrier type."
    },
    {
     "id": "d",
     "text": "Which dopant concentration is larger; the net excess sets the majority carrier",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Whichever dopant was added first",
     "misconception": "Thinks order of doping matters.",
     "rationale": "Only the net concentration matters in the finished material."
    },
    {
     "id": "b",
     "text": "It is always intrinsic, because the dopants cancel completely",
     "misconception": "Assumes exact cancellation.",
     "rationale": "Cancellation is only partial unless the two concentrations happen to be equal."
    },
    {
     "id": "c",
     "text": "The dopant with the larger atomic mass",
     "misconception": "Uses an irrelevant property.",
     "rationale": "Atomic mass does not decide carrier type."
    }
   ],
   "explanation": "Donors and acceptors compensate each other. If ND exceeds NA the material is n-type with an effective donor concentration ND - NA; if NA exceeds ND it is p-type with NA - ND.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-04.html",
     "label": "Lesson 4 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-04.html",
     "section": "Majority and minority carriers"
    },
    {
     "file": "equation-sheets/sheet-1.html",
     "section": "Sections 1-4"
    }
   ]
  },
  {
   "id": "gr1-semi-007",
   "type": "choice",
   "topic": "Semiconductors, carriers and doping",
   "objective": "Explain why doping raises conductivity",
   "prompt": "Doping silicon lowers carrier mobility slightly, yet its conductivity rises enormously. Why?",
   "answer": {
    "id": "b",
    "text": "The number of majority carriers rises by many orders of magnitude, which outweighs the small drop in mobility"
   },
   "options": [
    {
     "id": "a",
     "text": "Mobility actually rises with doping",
     "correct": false,
     "rationale": "Impurity scattering reduces mobility as doping increases."
    },
    {
     "id": "b",
     "text": "The number of majority carriers rises by many orders of magnitude, which outweighs the small drop in mobility",
     "correct": true
    },
    {
     "id": "c",
     "text": "Doping removes the bandgap",
     "correct": false,
     "rationale": "The bandgap is unchanged; extra carriers come from the dopant atoms."
    },
    {
     "id": "d",
     "text": "Doping increases the temperature",
     "correct": false,
     "rationale": "The effect is on carrier number, not temperature."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Mobility actually rises with doping",
     "misconception": "Assumes mobility increases.",
     "rationale": "Impurity scattering reduces mobility as doping increases."
    },
    {
     "id": "c",
     "text": "Doping removes the bandgap",
     "misconception": "Invents a band collapse.",
     "rationale": "The bandgap is unchanged; extra carriers come from the dopant atoms."
    },
    {
     "id": "d",
     "text": "Doping increases the temperature",
     "misconception": "Confuses cause and effect.",
     "rationale": "The effect is on carrier number, not temperature."
    }
   ],
   "explanation": "Conductivity is q(nμn + pμp). Doping raises one carrier concentration from about ni to the doping level, a change of many orders of magnitude, while mobility falls only modestly.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-02.html",
     "label": "Lesson 2 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-02.html",
     "section": "Drift current and conductivity"
    },
    {
     "file": "equation-sheets/sheet-1.html",
     "section": "Sections 1-4"
    }
   ]
  },
  {
   "id": "gr1-semi-008",
   "type": "true-false",
   "topic": "Semiconductors, carriers and doping",
   "objective": "Distinguish ions from net charge",
   "prompt": "True or false: Because n-type silicon has many free electrons, the piece of material as a whole carries a large net negative charge.",
   "answer": {
    "id": "false",
    "text": "False"
   },
   "options": [
    {
     "id": "true",
     "text": "True",
     "correct": false,
     "rationale": "Each free electron comes from a donor atom that becomes a fixed positive ion, so the material stays electrically neutral overall."
    },
    {
     "id": "false",
     "text": "False",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "true",
     "text": "True",
     "misconception": "Counts only the free electrons.",
     "rationale": "Each free electron comes from a donor atom that becomes a fixed positive ion, so the material stays electrically neutral overall."
    }
   ],
   "explanation": "Each donor contributes one free electron and is left as a fixed positive ion, so the total charge is balanced. Only inside a depletion region (later) is charge uncovered.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-01.html",
     "label": "Lesson 1 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-01.html",
     "section": "B4 Doping and carrier concentration"
    }
   ]
  },
  {
   "id": "gr1-semi-009",
   "type": "multi-select",
   "topic": "Semiconductors, carriers and doping",
   "objective": "Recognize properties of doped semiconductors",
   "prompt": "Select all statements that are true of p-type silicon doped with boron in thermal equilibrium.",
   "answer": {
    "ids": [
     "b",
     "d",
     "f"
    ]
   },
   "options": [
    {
     "id": "a",
     "text": "Boron atoms supply the free electrons",
     "correct": false,
     "rationale": "Boron is an acceptor; it captures an electron and leaves a hole."
    },
    {
     "id": "b",
     "text": "Holes are the majority carriers",
     "correct": true
    },
    {
     "id": "c",
     "text": "The hole and electron concentrations are equal",
     "correct": false,
     "rationale": "Doping makes holes far more numerous than electrons."
    },
    {
     "id": "d",
     "text": "The material as a whole is electrically neutral",
     "correct": true
    },
    {
     "id": "e",
     "text": "The mass-action law no longer applies",
     "correct": false,
     "rationale": "n·p = ni² holds for any non-degenerate semiconductor in equilibrium."
    },
    {
     "id": "f",
     "text": "Electrons are present as minority carriers",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Boron atoms supply the free electrons",
     "misconception": "Confuses acceptor with donor.",
     "rationale": "Boron is an acceptor; it captures an electron and leaves a hole."
    },
    {
     "id": "c",
     "text": "The hole and electron concentrations are equal",
     "misconception": "Treats the sample as intrinsic.",
     "rationale": "Doping makes holes far more numerous than electrons."
    },
    {
     "id": "e",
     "text": "The mass-action law no longer applies",
     "misconception": "Thinks doping voids n·p = ni².",
     "rationale": "n·p = ni² holds for any non-degenerate semiconductor in equilibrium."
    }
   ],
   "explanation": "P-type material has excess holes from acceptors, a small electron population fixed by n·p = ni², and fixed negative ions that balance the positive holes so the sample is neutral.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-01.html",
     "label": "Lesson 1 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-01.html",
     "section": "B4 Doping and carrier concentration"
    }
   ]
  },
  {
   "id": "gr1-drift-001",
   "type": "choice",
   "topic": "Drift and diffusion",
   "objective": "Tell drift from diffusion",
   "prompt": "What is the difference between drift current and diffusion current in a semiconductor?",
   "answer": {
    "id": "c",
    "text": "Drift is carrier motion caused by an electric field; diffusion is motion caused by a concentration gradient"
   },
   "options": [
    {
     "id": "a",
     "text": "Drift needs a gradient and diffusion needs a field",
     "correct": false,
     "rationale": "Diffusion is the gradient-driven mechanism; drift needs a field."
    },
    {
     "id": "b",
     "text": "Drift happens only in n-type and diffusion only in p-type material",
     "correct": false,
     "rationale": "Both mechanisms occur in either type."
    },
    {
     "id": "c",
     "text": "Drift is carrier motion caused by an electric field; diffusion is motion caused by a concentration gradient",
     "correct": true
    },
    {
     "id": "d",
     "text": "Drift is carrier generation and diffusion is carrier recombination",
     "correct": false,
     "rationale": "Both drift and diffusion are transport, not generation or recombination."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Drift needs a gradient and diffusion needs a field",
     "misconception": "Swaps the two causes.",
     "rationale": "Diffusion is the gradient-driven mechanism; drift needs a field."
    },
    {
     "id": "b",
     "text": "Drift happens only in n-type and diffusion only in p-type material",
     "misconception": "Ties each mechanism to a doping type.",
     "rationale": "Both mechanisms occur in either type."
    },
    {
     "id": "d",
     "text": "Drift is carrier generation and diffusion is carrier recombination",
     "misconception": "Confuses transport with generation and recombination.",
     "rationale": "Both drift and diffusion are transport, not generation or recombination."
    }
   ],
   "explanation": "Drift is the response of charged carriers to an electric field. Diffusion is random thermal motion that spreads carriers from regions of high concentration to low concentration even with no field.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-02.html",
     "label": "Lesson 2 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-02.html",
     "section": "Drift current"
    },
    {
     "file": "lesson-guides/lesson-02.html",
     "section": "Diffusion current"
    }
   ]
  },
  {
   "id": "gr1-drift-002",
   "type": "choice",
   "topic": "Drift and diffusion",
   "objective": "Give the drift direction of each carrier",
   "prompt": "In an applied electric field, which statement about carrier motion is correct?",
   "answer": {
    "id": "a",
    "text": "Holes drift in the direction of the field and electrons drift opposite to it"
   },
   "options": [
    {
     "id": "a",
     "text": "Holes drift in the direction of the field and electrons drift opposite to it",
     "correct": true
    },
    {
     "id": "b",
     "text": "Both holes and electrons drift in the direction of the field",
     "correct": false,
     "rationale": "Electrons are negative, so the force on them is opposite to the field."
    },
    {
     "id": "c",
     "text": "Both holes and electrons drift opposite to the field",
     "correct": false,
     "rationale": "Holes behave as positive charges and move with the field."
    },
    {
     "id": "d",
     "text": "Holes drift opposite to the field and electrons drift with it",
     "correct": false,
     "rationale": "The force is qE for each carrier; positive charge moves with E and negative against it."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "Both holes and electrons drift in the direction of the field",
     "misconception": "Ignores the sign of charge.",
     "rationale": "Electrons are negative, so the force on them is opposite to the field."
    },
    {
     "id": "c",
     "text": "Both holes and electrons drift opposite to the field",
     "misconception": "Applies the electron rule to everything.",
     "rationale": "Holes behave as positive charges and move with the field."
    },
    {
     "id": "d",
     "text": "Holes drift opposite to the field and electrons drift with it",
     "misconception": "Swaps the two.",
     "rationale": "The force is qE for each carrier; positive charge moves with E and negative against it."
    }
   ],
   "explanation": "The force on a carrier is its charge times the field. Holes are positive and move with the field; electrons are negative and move against it. Both motions add to give current in the field direction.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-02.html",
     "label": "Lesson 2 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-02.html",
     "section": "Drift current"
    }
   ]
  },
  {
   "id": "gr1-drift-003",
   "type": "choice",
   "topic": "Drift and diffusion",
   "objective": "Predict the diffusion direction",
   "prompt": "A region has a high hole concentration on the left and a low concentration on the right, and there is no electric field. Which way do holes move?",
   "answer": {
    "id": "c",
    "text": "To the right, from high concentration toward low concentration"
   },
   "options": [
    {
     "id": "a",
     "text": "To the left, toward the higher concentration",
     "correct": false,
     "rationale": "Diffusion carries carriers down the gradient, from high to low concentration."
    },
    {
     "id": "b",
     "text": "They stay put because there is no field",
     "correct": false,
     "rationale": "Diffusion needs no field; random thermal motion spreads the carriers."
    },
    {
     "id": "c",
     "text": "To the right, from high concentration toward low concentration",
     "correct": true
    },
    {
     "id": "d",
     "text": "Randomly with no net direction",
     "correct": false,
     "rationale": "Random motion produces a net flow from the crowded side to the empty side."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "To the left, toward the higher concentration",
     "misconception": "Reverses the gradient direction.",
     "rationale": "Diffusion carries carriers down the gradient, from high to low concentration."
    },
    {
     "id": "b",
     "text": "They stay put because there is no field",
     "misconception": "Thinks a field is required.",
     "rationale": "Diffusion needs no field; random thermal motion spreads the carriers."
    },
    {
     "id": "d",
     "text": "Randomly with no net direction",
     "misconception": "Ignores the net result of random motion.",
     "rationale": "Random motion produces a net flow from the crowded side to the empty side."
    }
   ],
   "explanation": "Diffusion is the net result of random thermal motion: more carriers leave the crowded region than enter it, so holes drift down the concentration gradient to the right.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-02.html",
     "label": "Lesson 2 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-02.html",
     "section": "Diffusion current"
    }
   ]
  },
  {
   "id": "gr1-drift-004",
   "type": "choice",
   "topic": "Drift and diffusion",
   "objective": "Relate diffusion and mobility",
   "prompt": "What does the Einstein relation D/μ = VT tell you?",
   "answer": {
    "id": "a",
    "text": "Diffusion coefficient and mobility are tied together by the thermal voltage, so a carrier that drifts easily also diffuses easily"
   },
   "options": [
    {
     "id": "a",
     "text": "Diffusion coefficient and mobility are tied together by the thermal voltage, so a carrier that drifts easily also diffuses easily",
     "correct": true
    },
    {
     "id": "b",
     "text": "Diffusion and mobility are unrelated properties",
     "correct": false,
     "rationale": "Both arise from the same random thermal scattering and are linked by VT = kT/q."
    },
    {
     "id": "c",
     "text": "Mobility is proportional to the doping concentration",
     "correct": false,
     "rationale": "Mobility is a scattering property and actually decreases as doping rises."
    },
    {
     "id": "d",
     "text": "The thermal voltage is independent of temperature",
     "correct": false,
     "rationale": "VT rises with absolute temperature; it is about 25.9 mV at 300 K."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "Diffusion and mobility are unrelated properties",
     "misconception": "Treats them as independent.",
     "rationale": "Both arise from the same random thermal scattering and are linked by VT = kT/q."
    },
    {
     "id": "c",
     "text": "Mobility is proportional to the doping concentration",
     "misconception": "Mixes mobility with doping.",
     "rationale": "Mobility is a scattering property and actually decreases as doping rises."
    },
    {
     "id": "d",
     "text": "The thermal voltage is independent of temperature",
     "misconception": "Misses the T in VT = kT/q.",
     "rationale": "VT rises with absolute temperature; it is about 25.9 mV at 300 K."
    }
   ],
   "explanation": "Both drift mobility and the diffusion coefficient reflect how freely a carrier moves between collisions. Their ratio is the thermal voltage kT/q, about 25.9 mV at 300 K.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-02.html",
     "label": "Lesson 2 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-02.html",
     "section": "Einstein relationship"
    },
    {
     "file": "equation-sheets/sheet-1.html",
     "section": "Sections 1-4"
    }
   ]
  },
  {
   "id": "gr1-drift-005",
   "type": "choice",
   "topic": "Drift and diffusion",
   "objective": "Explain mobility versus doping",
   "prompt": "How does carrier mobility change as the doping concentration of silicon increases?",
   "answer": {
    "id": "c",
    "text": "It decreases, because the added impurity atoms scatter the carriers more"
   },
   "options": [
    {
     "id": "a",
     "text": "It increases, because there are more carriers",
     "correct": false,
     "rationale": "Mobility describes how fast a single carrier moves per unit field, and impurities slow it."
    },
    {
     "id": "b",
     "text": "It does not change at all",
     "correct": false,
     "rationale": "Impurity scattering lowers mobility at higher doping."
    },
    {
     "id": "c",
     "text": "It decreases, because the added impurity atoms scatter the carriers more",
     "correct": true
    },
    {
     "id": "d",
     "text": "It becomes negative",
     "correct": false,
     "rationale": "Mobility is a positive measure of response to the field."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "It increases, because there are more carriers",
     "misconception": "Confuses carrier number with mobility.",
     "rationale": "Mobility describes how fast a single carrier moves per unit field, and impurities slow it."
    },
    {
     "id": "b",
     "text": "It does not change at all",
     "misconception": "Treats mobility as a constant of silicon.",
     "rationale": "Impurity scattering lowers mobility at higher doping."
    },
    {
     "id": "d",
     "text": "It becomes negative",
     "misconception": "Invents a sign change.",
     "rationale": "Mobility is a positive measure of response to the field."
    }
   ],
   "explanation": "Mobility is limited by scattering. More dopant atoms mean more charged scattering centers, so mobility falls as doping increases, as the equation sheet notes.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-02.html",
     "label": "Lesson 2 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-02.html",
     "section": "Drift current"
    },
    {
     "file": "equation-sheets/sheet-1.html",
     "section": "Sections 1-4"
    }
   ]
  },
  {
   "id": "gr1-drift-006",
   "type": "choice",
   "topic": "Drift and diffusion",
   "objective": "Identify what sets conductivity",
   "prompt": "Which set of quantities determines the conductivity of a doped semiconductor?",
   "answer": {
    "id": "a",
    "text": "The electron and hole concentrations and their mobilities"
   },
   "options": [
    {
     "id": "a",
     "text": "The electron and hole concentrations and their mobilities",
     "correct": true
    },
    {
     "id": "b",
     "text": "Only the temperature of the sample",
     "correct": false,
     "rationale": "Temperature matters only through its effect on carrier concentrations and mobility."
    },
    {
     "id": "c",
     "text": "Only the length of the sample",
     "correct": false,
     "rationale": "Length affects resistance, but conductivity is a material property."
    },
    {
     "id": "d",
     "text": "The diffusion gradient alone",
     "correct": false,
     "rationale": "Conductivity describes drift response to an electric field."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "Only the temperature of the sample",
     "misconception": "Names a single factor.",
     "rationale": "Temperature matters only through its effect on carrier concentrations and mobility."
    },
    {
     "id": "c",
     "text": "Only the length of the sample",
     "misconception": "Confuses conductivity with resistance.",
     "rationale": "Length affects resistance, but conductivity is a material property."
    },
    {
     "id": "d",
     "text": "The diffusion gradient alone",
     "misconception": "Brings in a transport mechanism that is not conductivity.",
     "rationale": "Conductivity describes drift response to an electric field."
    }
   ],
   "explanation": "Conductivity is the sum of the contributions of electrons and holes, q(nμn + pμp). Resistivity is its reciprocal, and resistance then also depends on length and area.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-02.html",
     "label": "Lesson 2 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-02.html",
     "section": "Drift current"
    },
    {
     "file": "equation-sheets/sheet-1.html",
     "section": "Sections 1-4"
    }
   ]
  },
  {
   "id": "gr1-drift-007",
   "type": "true-false",
   "topic": "Drift and diffusion",
   "objective": "Check the sign of the electron drift current",
   "prompt": "True or false: Electrons drift opposite to the electric field, yet their contribution to conventional current is in the same direction as the field.",
   "answer": {
    "id": "true",
    "text": "True"
   },
   "options": [
    {
     "id": "true",
     "text": "True",
     "correct": true
    },
    {
     "id": "false",
     "text": "False",
     "correct": false,
     "rationale": "Electron charge is negative, so negative charge moving against the field gives current along the field."
    }
   ],
   "distractors": [
    {
     "id": "false",
     "text": "False",
     "misconception": "Thinks opposite motion means opposite current.",
     "rationale": "Electron charge is negative, so negative charge moving against the field gives current along the field."
    }
   ],
   "explanation": "Current direction follows the motion of positive charge. A negative carrier moving against the field is equivalent to positive charge moving with it, so its current adds to the hole current.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-02.html",
     "label": "Lesson 2 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-02.html",
     "section": "Drift current"
    }
   ]
  },
  {
   "id": "gr1-drift-008",
   "type": "multi-select",
   "topic": "Drift and diffusion",
   "objective": "Select what increases drift current density",
   "prompt": "Select all changes that, taken alone, increase the drift current density in a uniformly doped bar.",
   "answer": {
    "ids": [
     "b",
     "d",
     "f"
    ]
   },
   "options": [
    {
     "id": "a",
     "text": "A steeper carrier concentration gradient",
     "correct": false,
     "rationale": "A gradient drives diffusion current, not drift current."
    },
    {
     "id": "b",
     "text": "A larger applied electric field",
     "correct": true
    },
    {
     "id": "c",
     "text": "A smaller applied electric field",
     "correct": false,
     "rationale": "Drift current is proportional to the field."
    },
    {
     "id": "d",
     "text": "A larger concentration of the majority carrier",
     "correct": true
    },
    {
     "id": "e",
     "text": "A larger concentration of fixed donor ions that scatter carriers",
     "correct": false,
     "rationale": "More scattering lowers mobility and so lowers the current."
    },
    {
     "id": "f",
     "text": "Higher carrier mobility",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "A steeper carrier concentration gradient",
     "misconception": "Confuses drift with diffusion.",
     "rationale": "A gradient drives diffusion current, not drift current."
    },
    {
     "id": "c",
     "text": "A smaller applied electric field",
     "misconception": "Reverses the field dependence.",
     "rationale": "Drift current is proportional to the field."
    },
    {
     "id": "e",
     "text": "A larger concentration of fixed donor ions that scatter carriers",
     "misconception": "Overlooks scattering.",
     "rationale": "More scattering lowers mobility and so lowers the current."
    }
   ],
   "explanation": "Drift current density is q(nμn + pμp)E. It grows with field, carrier concentration and mobility, but not with a concentration gradient.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-02.html",
     "label": "Lesson 2 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-02.html",
     "section": "Drift current"
    }
   ]
  },
  {
   "id": "gr1-pn-001",
   "type": "choice",
   "topic": "The pn junction in equilibrium",
   "objective": "Explain how the depletion region forms",
   "prompt": "When p-type and n-type material are joined, why does a depletion region appear at the junction?",
   "answer": {
    "id": "c",
    "text": "Carriers diffuse across, recombine, and leave behind fixed ionized dopant atoms with no mobile carriers"
   },
   "options": [
    {
     "id": "a",
     "text": "An external voltage pushes the carriers away",
     "correct": false,
     "rationale": "The depletion region exists with no applied voltage, formed by diffusion."
    },
    {
     "id": "b",
     "text": "The two materials repel each other chemically",
     "correct": false,
     "rationale": "The effect is electrical, from diffusion and uncovered charge."
    },
    {
     "id": "c",
     "text": "Carriers diffuse across, recombine, and leave behind fixed ionized dopant atoms with no mobile carriers",
     "correct": true
    },
    {
     "id": "d",
     "text": "Minority carriers are generated faster at the junction",
     "correct": false,
     "rationale": "The key process is majority-carrier diffusion across the junction."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "An external voltage pushes the carriers away",
     "misconception": "Requires an applied bias.",
     "rationale": "The depletion region exists with no applied voltage, formed by diffusion."
    },
    {
     "id": "b",
     "text": "The two materials repel each other chemically",
     "misconception": "Invents a chemical repulsion.",
     "rationale": "The effect is electrical, from diffusion and uncovered charge."
    },
    {
     "id": "d",
     "text": "Minority carriers are generated faster at the junction",
     "misconception": "Misplaces the cause.",
     "rationale": "The key process is majority-carrier diffusion across the junction."
    }
   ],
   "explanation": "Electrons diffuse from the n side to the p side and holes the other way. They recombine near the junction, uncovering fixed positive donor ions on the n side and negative acceptor ions on the p side. This region is depleted of mobile carriers.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-03.html",
     "label": "Lesson 3 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-02.html",
     "section": "Bound charge and depletion region"
    },
    {
     "file": "lesson-guides/lesson-03.html",
     "section": "B1 Equilibrium pn-junction electrostatics"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr1/pn_junction.svg",
    "alt": "A pn junction: p region with holes, n region with electrons, depletion region with fixed ions and a built-in field from n toward p",
    "caption": "Unbiased pn junction with its depletion region."
   }
  },
  {
   "id": "gr1-pn-002",
   "type": "choice",
   "topic": "The pn junction in equilibrium",
   "objective": "Give the sign of the bound charge",
   "prompt": "In an unbiased pn junction, what is the sign of the bound charge on each side of the junction?",
   "answer": {
    "id": "a",
    "text": "Positive on the n side (donor ions) and negative on the p side (acceptor ions)"
   },
   "options": [
    {
     "id": "a",
     "text": "Positive on the n side (donor ions) and negative on the p side (acceptor ions)",
     "correct": true
    },
    {
     "id": "b",
     "text": "Negative on the n side and positive on the p side",
     "correct": false,
     "rationale": "The n side loses electrons and is left with positive donor ions."
    },
    {
     "id": "c",
     "text": "Positive on both sides",
     "correct": false,
     "rationale": "The p side loses holes and is left with negative acceptor ions."
    },
    {
     "id": "d",
     "text": "Zero on both sides, since the material is neutral",
     "correct": false,
     "rationale": "Neutrality fails in the depletion region because mobile carriers have left."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "Negative on the n side and positive on the p side",
     "misconception": "Swaps the two sides.",
     "rationale": "The n side loses electrons and is left with positive donor ions."
    },
    {
     "id": "c",
     "text": "Positive on both sides",
     "misconception": "Forgets the p side loses holes.",
     "rationale": "The p side loses holes and is left with negative acceptor ions."
    },
    {
     "id": "d",
     "text": "Zero on both sides, since the material is neutral",
     "misconception": "Treats the depletion region as neutral.",
     "rationale": "Neutrality fails in the depletion region because mobile carriers have left."
    }
   ],
   "explanation": "Electrons leaving the n side expose positive donor ions; holes leaving the p side expose negative acceptor ions. The two layers of opposite charge create an electric field across the junction.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-03.html",
     "label": "Lesson 3 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-02.html",
     "section": "Bound charge and depletion region"
    },
    {
     "file": "lesson-guides/lesson-03.html",
     "section": "B1 Equilibrium pn-junction electrostatics"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr1/pn_junction.svg",
    "alt": "A pn junction: p region with holes, n region with electrons, depletion region with fixed ions and a built-in field from n toward p",
    "caption": "Unbiased pn junction with its depletion region."
   }
  },
  {
   "id": "gr1-pn-003",
   "type": "choice",
   "topic": "The pn junction in equilibrium",
   "objective": "Find the direction of the built-in field",
   "prompt": "In which direction does the built-in electric field in the depletion region point?",
   "answer": {
    "id": "c",
    "text": "From the n side toward the p side, opposing further diffusion"
   },
   "options": [
    {
     "id": "a",
     "text": "From the p side toward the n side, helping diffusion",
     "correct": false,
     "rationale": "The field points from positive donor ions toward negative acceptor ions, which is n to p."
    },
    {
     "id": "b",
     "text": "Along the junction, parallel to the interface",
     "correct": false,
     "rationale": "The charge layers are on either side of the interface, so the field is perpendicular to it."
    },
    {
     "id": "c",
     "text": "From the n side toward the p side, opposing further diffusion",
     "correct": true
    },
    {
     "id": "d",
     "text": "There is no field when the junction is unbiased",
     "correct": false,
     "rationale": "The built-in field exists in equilibrium with no external voltage."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "From the p side toward the n side, helping diffusion",
     "misconception": "Reverses the field direction.",
     "rationale": "The field points from positive donor ions toward negative acceptor ions, which is n to p."
    },
    {
     "id": "b",
     "text": "Along the junction, parallel to the interface",
     "misconception": "Misreads the geometry.",
     "rationale": "The charge layers are on either side of the interface, so the field is perpendicular to it."
    },
    {
     "id": "d",
     "text": "There is no field when the junction is unbiased",
     "misconception": "Assumes zero bias means zero field.",
     "rationale": "The built-in field exists in equilibrium with no external voltage."
    }
   ],
   "explanation": "Field lines go from positive charge to negative charge: from the n-side donor ions to the p-side acceptor ions. That field pushes carriers back toward the side they came from, opposing diffusion.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-03.html",
     "label": "Lesson 3 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-03.html",
     "section": "B1 Equilibrium pn-junction electrostatics"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr1/pn_junction.svg",
    "alt": "A pn junction: p region with holes, n region with electrons, depletion region with fixed ions and a built-in field from n toward p",
    "caption": "Unbiased pn junction with its depletion region."
   }
  },
  {
   "id": "gr1-pn-004",
   "type": "choice",
   "topic": "The pn junction in equilibrium",
   "objective": "Describe equilibrium current",
   "prompt": "What is the net current through an unbiased pn junction at equilibrium?",
   "answer": {
    "id": "a",
    "text": "Zero, because the drift current from the field exactly balances the diffusion current"
   },
   "options": [
    {
     "id": "a",
     "text": "Zero, because the drift current from the field exactly balances the diffusion current",
     "correct": true
    },
    {
     "id": "b",
     "text": "Large, because diffusion is strong",
     "correct": false,
     "rationale": "The diffusion current is exactly cancelled by drift in the opposite direction."
    },
    {
     "id": "c",
     "text": "Large and negative, because of drift",
     "correct": false,
     "rationale": "Drift is balanced by the equally large diffusion in the other direction."
    },
    {
     "id": "d",
     "text": "Equal to the reverse saturation current",
     "correct": false,
     "rationale": "The reverse saturation current appears under reverse bias, not as net current at equilibrium."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "Large, because diffusion is strong",
     "misconception": "Looks at diffusion alone.",
     "rationale": "The diffusion current is exactly cancelled by drift in the opposite direction."
    },
    {
     "id": "c",
     "text": "Large and negative, because of drift",
     "misconception": "Looks at drift alone.",
     "rationale": "Drift is balanced by the equally large diffusion in the other direction."
    },
    {
     "id": "d",
     "text": "Equal to the reverse saturation current",
     "misconception": "Mixes up the equilibrium and reverse-bias cases.",
     "rationale": "The reverse saturation current appears under reverse bias, not as net current at equilibrium."
    }
   ],
   "explanation": "The diffusion tendency to push carriers across is opposed by the drift caused by the built-in field. At equilibrium the two are equal and opposite for each carrier type, so no net current flows.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-03.html",
     "label": "Lesson 3 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-03.html",
     "section": "B1 Equilibrium pn-junction electrostatics"
    }
   ]
  },
  {
   "id": "gr1-pn-005",
   "type": "choice",
   "topic": "The pn junction in equilibrium",
   "objective": "Identify what sets the barrier voltage",
   "prompt": "Which quantities set the built-in barrier voltage V0 of a silicon pn junction?",
   "answer": {
    "id": "c",
    "text": "The doping concentrations on the two sides, the intrinsic concentration and the temperature"
   },
   "options": [
    {
     "id": "a",
     "text": "The area of the junction",
     "correct": false,
     "rationale": "V0 is set by doping, ni and temperature, not by area."
    },
    {
     "id": "b",
     "text": "The current flowing through the diode",
     "correct": false,
     "rationale": "V0 is the equilibrium barrier; it does not depend on the current."
    },
    {
     "id": "c",
     "text": "The doping concentrations on the two sides, the intrinsic concentration and the temperature",
     "correct": true
    },
    {
     "id": "d",
     "text": "The length of the connecting wires",
     "correct": false,
     "rationale": "The wires do not set the junction barrier."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The area of the junction",
     "misconception": "Brings in a geometric quantity.",
     "rationale": "V0 is set by doping, ni and temperature, not by area."
    },
    {
     "id": "b",
     "text": "The current flowing through the diode",
     "misconception": "Thinks V0 depends on bias current.",
     "rationale": "V0 is the equilibrium barrier; it does not depend on the current."
    },
    {
     "id": "d",
     "text": "The length of the connecting wires",
     "misconception": "Brings in external circuit parts.",
     "rationale": "The wires do not set the junction barrier."
    }
   ],
   "explanation": "V0 = VT ln(NA·ND / ni²). Heavier doping raises it, and VT and ni bring in temperature. It is typically a few tenths of a volt for silicon.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-03.html",
     "label": "Lesson 3 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-03.html",
     "section": "B1 Equilibrium pn-junction electrostatics"
    },
    {
     "file": "equation-sheets/sheet-1.html",
     "section": "Sections 1-4"
    }
   ]
  },
  {
   "id": "gr1-pn-006",
   "type": "choice",
   "topic": "The pn junction in equilibrium",
   "objective": "Compare depletion depths on the two sides",
   "prompt": "A junction has much heavier p-side doping than n-side doping (p+n). Which statement about the depletion region is correct?",
   "answer": {
    "id": "a",
    "text": "It extends much farther into the lightly doped n side, because charge on the two sides must balance"
   },
   "options": [
    {
     "id": "a",
     "text": "It extends much farther into the lightly doped n side, because charge on the two sides must balance",
     "correct": true
    },
    {
     "id": "b",
     "text": "It extends farther into the heavily doped p side",
     "correct": false,
     "rationale": "Heavy doping uncovers charge in a thin layer; the lightly doped side must extend farther to balance it."
    },
    {
     "id": "c",
     "text": "It extends equally into both sides",
     "correct": false,
     "rationale": "Equal depths occur only if the dopings are equal."
    },
    {
     "id": "d",
     "text": "It lies entirely in the p side",
     "correct": false,
     "rationale": "A depletion region has width on both sides, in inverse proportion to the doping."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "It extends farther into the heavily doped p side",
     "misconception": "Assumes more charge means a wider layer.",
     "rationale": "Heavy doping uncovers charge in a thin layer; the lightly doped side must extend farther to balance it."
    },
    {
     "id": "c",
     "text": "It extends equally into both sides",
     "misconception": "Assumes symmetry for any doping.",
     "rationale": "Equal depths occur only if the dopings are equal."
    },
    {
     "id": "d",
     "text": "It lies entirely in the p side",
     "misconception": "Places the region on one side only.",
     "rationale": "A depletion region has width on both sides, in inverse proportion to the doping."
    }
   ],
   "explanation": "Charge neutrality requires the uncovered charge on both sides to be equal in magnitude. A lightly doped side has fewer charges per volume, so it needs a thicker layer; the heavily doped side needs only a thin one.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-03.html",
     "label": "Lesson 3 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-03.html",
     "section": "B1 Equilibrium pn-junction electrostatics"
    },
    {
     "file": "equation-sheets/sheet-1.html",
     "section": "Sections 1-4"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr1/pn_junction.svg",
    "alt": "A pn junction: p region with holes, n region with electrons, depletion region with fixed ions and a built-in field from n toward p",
    "caption": "Unbiased pn junction with its depletion region."
   }
  },
  {
   "id": "gr1-pn-007",
   "type": "true-false",
   "topic": "The pn junction in equilibrium",
   "objective": "Judge a claim about measuring the barrier",
   "prompt": "True or false: Because a built-in barrier voltage exists across the junction, a voltmeter connected across an unbiased diode reads that barrier voltage.",
   "answer": {
    "id": "false",
    "text": "False"
   },
   "options": [
    {
     "id": "true",
     "text": "True",
     "correct": false,
     "rationale": "The contact potentials at the metal leads cancel the barrier, so the total voltage around the loop is zero and no net voltage appears."
    },
    {
     "id": "false",
     "text": "False",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "true",
     "text": "True",
     "misconception": "Treats the junction barrier as a source.",
     "rationale": "The contact potentials at the metal leads cancel the barrier, so the total voltage around the loop is zero and no net voltage appears."
    }
   ],
   "explanation": "The built-in potential is internal to the junction. Contacts to the semiconductor add potentials that exactly cancel it around the loop, so an unbiased diode shows no terminal voltage and delivers no power.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-03.html",
     "label": "Lesson 3 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-03.html",
     "section": "B1 Equilibrium pn-junction electrostatics"
    }
   ]
  },
  {
   "id": "gr1-pn-008",
   "type": "sequence",
   "topic": "The pn junction in equilibrium",
   "objective": "Order the formation of the depletion region",
   "prompt": "Put the steps of forming the equilibrium depletion region in order.",
   "answer": {
    "ids": [
     "s1",
     "s2",
     "s3",
     "s4",
     "s5"
    ]
   },
   "steps": [
    {
     "id": "s1",
     "text": "Majority carriers diffuse across the junction"
    },
    {
     "id": "s2",
     "text": "Carriers recombine, leaving fixed ionized dopant atoms"
    },
    {
     "id": "s3",
     "text": "Uncovered charge builds an electric field across the junction"
    },
    {
     "id": "s4",
     "text": "The field causes drift that opposes diffusion"
    },
    {
     "id": "s5",
     "text": "Drift and diffusion balance and the region stops growing"
    }
   ],
   "distractors": [
    {
     "id": "d1",
     "text": "The field forms before any carriers cross",
     "misconception": "Puts the field first.",
     "rationale": "The field exists only because diffusion first uncovers charge."
    }
   ],
   "explanation": "Diffusion starts the process, recombination uncovers fixed ions, those ions create a field, the field produces opposing drift, and the region grows until drift and diffusion balance.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-03.html",
     "label": "Lesson 3 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-02.html",
     "section": "Bound charge and depletion region"
    },
    {
     "file": "lesson-guides/lesson-03.html",
     "section": "B1 Equilibrium pn-junction electrostatics"
    }
   ]
  },
  {
   "id": "gr1-pn-009",
   "type": "multi-select",
   "topic": "The pn junction in equilibrium",
   "objective": "Select the properties of the depletion region",
   "prompt": "Select all statements that are true of the depletion region of an unbiased pn junction.",
   "answer": {
    "ids": [
     "b",
     "d",
     "f"
    ]
   },
   "options": [
    {
     "id": "a",
     "text": "It is electrically neutral at every point",
     "correct": false,
     "rationale": "The fixed ions are uncompensated by mobile carriers, so the region is charged."
    },
    {
     "id": "b",
     "text": "It contains almost no mobile carriers",
     "correct": true
    },
    {
     "id": "c",
     "text": "It carries a large net current",
     "correct": false,
     "rationale": "The net current at equilibrium is zero."
    },
    {
     "id": "d",
     "text": "It contains fixed ionized dopant atoms",
     "correct": true
    },
    {
     "id": "e",
     "text": "Its width is set only by the junction area",
     "correct": false,
     "rationale": "Width depends on doping and applied voltage, not area."
    },
    {
     "id": "f",
     "text": "It has an electric field across it",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "It is electrically neutral at every point",
     "misconception": "Treats the region like bulk material.",
     "rationale": "The fixed ions are uncompensated by mobile carriers, so the region is charged."
    },
    {
     "id": "c",
     "text": "It carries a large net current",
     "misconception": "Assumes current flows at zero bias.",
     "rationale": "The net current at equilibrium is zero."
    },
    {
     "id": "e",
     "text": "Its width is set only by the junction area",
     "misconception": "Names an irrelevant dependence.",
     "rationale": "Width depends on doping and applied voltage, not area."
    }
   ],
   "explanation": "The depletion region is emptied of mobile carriers, leaving fixed ions whose charge sets up a field. The region is not neutral, and no net current flows in equilibrium.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-03.html",
     "label": "Lesson 3 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-03.html",
     "section": "B1 Equilibrium pn-junction electrostatics"
    }
   ]
  },
  {
   "id": "gr1-bias-001",
   "type": "choice",
   "topic": "Junction bias and the Shockley equation",
   "objective": "Describe forward bias on the depletion region",
   "prompt": "What does forward bias (positive voltage on the p side) do to the depletion region and the barrier?",
   "answer": {
    "id": "d",
    "text": "It narrows the depletion region and lowers the barrier, so majority carriers cross more easily"
   },
   "options": [
    {
     "id": "a",
     "text": "It widens the depletion region and raises the barrier",
     "correct": false,
     "rationale": "Forward bias opposes the built-in field and so shrinks it."
    },
    {
     "id": "b",
     "text": "It leaves the depletion region unchanged",
     "correct": false,
     "rationale": "The applied voltage appears mostly across the depletion region and changes its width."
    },
    {
     "id": "c",
     "text": "It removes the junction entirely",
     "correct": false,
     "rationale": "The region narrows but the junction remains; current grows exponentially."
    },
    {
     "id": "d",
     "text": "It narrows the depletion region and lowers the barrier, so majority carriers cross more easily",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "It widens the depletion region and raises the barrier",
     "misconception": "Describes reverse bias.",
     "rationale": "Forward bias opposes the built-in field and so shrinks it."
    },
    {
     "id": "b",
     "text": "It leaves the depletion region unchanged",
     "misconception": "Thinks bias only affects the leads.",
     "rationale": "The applied voltage appears mostly across the depletion region and changes its width."
    },
    {
     "id": "c",
     "text": "It removes the junction entirely",
     "misconception": "Overstates the effect.",
     "rationale": "The region narrows but the junction remains; current grows exponentially."
    }
   ],
   "explanation": "The applied forward voltage opposes the built-in potential, so the net barrier is V0 - VF. The depletion region narrows and diffusion of majority carriers across the junction is no longer held back.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-03.html",
     "label": "Lesson 3 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-03.html",
     "section": "B2 Junction bias"
    },
    {
     "file": "equation-sheets/sheet-1.html",
     "section": "Sections 4, 6-8"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr1/pn_junction.svg",
    "alt": "A pn junction: p region with holes, n region with electrons, depletion region with fixed ions and a built-in field from n toward p",
    "caption": "Unbiased pn junction with its depletion region."
   }
  },
  {
   "id": "gr1-bias-002",
   "type": "choice",
   "topic": "Junction bias and the Shockley equation",
   "objective": "Describe reverse bias",
   "prompt": "What happens to the depletion region and the current when a pn junction is reverse biased?",
   "answer": {
    "id": "b",
    "text": "The region widens and only a tiny current flows, close to the reverse saturation current"
   },
   "options": [
    {
     "id": "a",
     "text": "The region narrows and a large current flows",
     "correct": false,
     "rationale": "Reverse bias raises the barrier and blocks majority carriers."
    },
    {
     "id": "b",
     "text": "The region widens and only a tiny current flows, close to the reverse saturation current",
     "correct": true
    },
    {
     "id": "c",
     "text": "The region disappears",
     "correct": false,
     "rationale": "It widens under reverse bias."
    },
    {
     "id": "d",
     "text": "The current increases without limit",
     "correct": false,
     "rationale": "Without breakdown the reverse current stays tiny."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The region narrows and a large current flows",
     "misconception": "Describes forward bias.",
     "rationale": "Reverse bias raises the barrier and blocks majority carriers."
    },
    {
     "id": "c",
     "text": "The region disappears",
     "misconception": "Overstates the narrowing.",
     "rationale": "It widens under reverse bias."
    },
    {
     "id": "d",
     "text": "The current increases without limit",
     "misconception": "Applies the forward rule.",
     "rationale": "Without breakdown the reverse current stays tiny."
    }
   ],
   "explanation": "Reverse voltage adds to the built-in barrier, which widens the depletion region and prevents majority carriers from crossing. The small current that remains is carried by thermally generated minority carriers.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-03.html",
     "label": "Lesson 3 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-03.html",
     "section": "B2 Junction bias"
    },
    {
     "file": "equation-sheets/sheet-1.html",
     "section": "Sections 4, 6-8"
    }
   ]
  },
  {
   "id": "gr1-bias-003",
   "type": "choice",
   "topic": "Junction bias and the Shockley equation",
   "objective": "Describe the shape of the forward I-V curve",
   "prompt": "How does the forward current of an ideal pn diode vary with the forward voltage?",
   "answer": {
    "id": "d",
    "text": "It rises exponentially, so small voltage changes produce large current changes"
   },
   "options": [
    {
     "id": "a",
     "text": "It rises linearly like a resistor",
     "correct": false,
     "rationale": "The Shockley relation is exponential, not linear."
    },
    {
     "id": "b",
     "text": "It stays constant once the diode turns on",
     "correct": false,
     "rationale": "Current keeps rising rapidly with voltage."
    },
    {
     "id": "c",
     "text": "It falls as the voltage rises",
     "correct": false,
     "rationale": "More forward voltage lowers the barrier further and increases current."
    },
    {
     "id": "d",
     "text": "It rises exponentially, so small voltage changes produce large current changes",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "It rises linearly like a resistor",
     "misconception": "Treats the diode as a resistor.",
     "rationale": "The Shockley relation is exponential, not linear."
    },
    {
     "id": "b",
     "text": "It stays constant once the diode turns on",
     "misconception": "Thinks current saturates.",
     "rationale": "Current keeps rising rapidly with voltage."
    },
    {
     "id": "c",
     "text": "It falls as the voltage rises",
     "misconception": "Reverses the trend.",
     "rationale": "More forward voltage lowers the barrier further and increases current."
    }
   ],
   "explanation": "The Shockley equation iD = IS(e^(vD/nVT) - 1) gives exponential growth with vD. That is why the voltage across a conducting diode changes only slightly over a wide range of current.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-03.html",
     "label": "Lesson 3 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-03.html",
     "section": "Shockley diode equation"
    },
    {
     "file": "equation-sheets/sheet-1.html",
     "section": "Sections 4, 6-8"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr1/diode_iv.svg",
    "alt": "Diode I-V characteristic: exponential rise in forward bias, tiny reverse current and sharp reverse breakdown",
    "caption": "Diode current versus voltage."
   }
  },
  {
   "id": "gr1-bias-004",
   "type": "choice",
   "topic": "Junction bias and the Shockley equation",
   "objective": "Interpret the reverse saturation current",
   "prompt": "What does the reverse saturation current IS of a diode depend on?",
   "answer": {
    "id": "b",
    "text": "The junction area, the material (through ni squared and the diffusion constants) and the temperature"
   },
   "options": [
    {
     "id": "a",
     "text": "Only the applied reverse voltage",
     "correct": false,
     "rationale": "IS is a device constant; the voltage matters little in ideal reverse bias."
    },
    {
     "id": "b",
     "text": "The junction area, the material (through ni squared and the diffusion constants) and the temperature",
     "correct": true
    },
    {
     "id": "c",
     "text": "Only the load resistor",
     "correct": false,
     "rationale": "IS is a property of the junction."
    },
    {
     "id": "d",
     "text": "The brightness of the room",
     "correct": false,
     "rationale": "Only photodiodes respond to light that way; for a normal diode IS is set by geometry, material and temperature."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Only the applied reverse voltage",
     "misconception": "Reads IS as a bias-dependent current.",
     "rationale": "IS is a device constant; the voltage matters little in ideal reverse bias."
    },
    {
     "id": "c",
     "text": "Only the load resistor",
     "misconception": "Brings in external parts.",
     "rationale": "IS is a property of the junction."
    },
    {
     "id": "d",
     "text": "The brightness of the room",
     "misconception": "Irrelevant factor.",
     "rationale": "Only photodiodes respond to light that way; for a normal diode IS is set by geometry, material and temperature."
    }
   ],
   "explanation": "IS = qA ni²(Dp/(Lp ND) + Dn/(Ln NA)) from the equation sheet: it scales with area and with ni², which rises rapidly with temperature.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-03.html",
     "label": "Lesson 3 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-03.html",
     "section": "B3 Minority-carrier transport"
    },
    {
     "file": "equation-sheets/sheet-1.html",
     "section": "Sections 4, 6-8"
    }
   ]
  },
  {
   "id": "gr1-bias-005",
   "type": "choice",
   "topic": "Junction bias and the Shockley equation",
   "objective": "Give the role of the thermal voltage",
   "prompt": "What is VT in the Shockley equation, and about what value does it have at room temperature?",
   "answer": {
    "id": "d",
    "text": "The thermal voltage kT/q, about 25 to 26 mV at 300 K"
   },
   "options": [
    {
     "id": "a",
     "text": "The threshold voltage of the diode, about 0.7 V",
     "correct": false,
     "rationale": "The 0.7 V figure is the typical forward drop, not VT."
    },
    {
     "id": "b",
     "text": "The breakdown voltage, about 5 V",
     "correct": false,
     "rationale": "VT is tiny and does not set breakdown."
    },
    {
     "id": "c",
     "text": "The built-in barrier, about 0.8 V",
     "correct": false,
     "rationale": "V0 is a barrier of several tenths of a volt; VT is a thermal energy expressed in volts."
    },
    {
     "id": "d",
     "text": "The thermal voltage kT/q, about 25 to 26 mV at 300 K",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The threshold voltage of the diode, about 0.7 V",
     "misconception": "Confuses VT with the turn-on voltage.",
     "rationale": "The 0.7 V figure is the typical forward drop, not VT."
    },
    {
     "id": "b",
     "text": "The breakdown voltage, about 5 V",
     "misconception": "Confuses VT with VZ.",
     "rationale": "VT is tiny and does not set breakdown."
    },
    {
     "id": "c",
     "text": "The built-in barrier, about 0.8 V",
     "misconception": "Confuses VT with V0.",
     "rationale": "V0 is a barrier of several tenths of a volt; VT is a thermal energy expressed in volts."
    }
   ],
   "explanation": "VT = kT/q is the thermal energy per unit charge: 25.9 mV at 300 K and about 25.0 mV at 290 K per the equation sheet. It sets how fast the diode current rises with voltage.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-03.html",
     "label": "Lesson 3 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-03.html",
     "section": "Shockley diode equation"
    },
    {
     "file": "equation-sheets/sheet-1.html",
     "section": "Sections 4, 6-8"
    }
   ]
  },
  {
   "id": "gr1-bias-006",
   "type": "choice",
   "topic": "Junction bias and the Shockley equation",
   "objective": "Interpret the ideality factor",
   "prompt": "What does the ideality factor n in the Shockley equation express?",
   "answer": {
    "id": "b",
    "text": "How closely the junction follows ideal diffusion; it lies between 1 and 2 and is 1 for ideal diffusion"
   },
   "options": [
    {
     "id": "a",
     "text": "The number of diodes in series",
     "correct": false,
     "rationale": "n describes a single diode; the number of diodes is a different quantity."
    },
    {
     "id": "b",
     "text": "How closely the junction follows ideal diffusion; it lies between 1 and 2 and is 1 for ideal diffusion",
     "correct": true
    },
    {
     "id": "c",
     "text": "The doping concentration",
     "correct": false,
     "rationale": "n is dimensionless and unrelated to the doping level."
    },
    {
     "id": "d",
     "text": "The temperature in kelvin",
     "correct": false,
     "rationale": "n is a unitless correction between 1 and 2."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The number of diodes in series",
     "misconception": "Confuses n with k in the Gauss-Seidel updates.",
     "rationale": "n describes a single diode; the number of diodes is a different quantity."
    },
    {
     "id": "c",
     "text": "The doping concentration",
     "misconception": "Misreads the symbol.",
     "rationale": "n is dimensionless and unrelated to the doping level."
    },
    {
     "id": "d",
     "text": "The temperature in kelvin",
     "misconception": "Misreads n for T.",
     "rationale": "n is a unitless correction between 1 and 2."
    }
   ],
   "explanation": "Real diodes include recombination in the depletion region and other effects, so the exponent is vD/(nVT) with 1 ≤ n ≤ 2. A larger n makes the curve less steep.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-03.html",
     "label": "Lesson 3 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-03.html",
     "section": "Shockley diode equation"
    },
    {
     "file": "equation-sheets/sheet-1.html",
     "section": "Sections 4, 6-8"
    }
   ]
  },
  {
   "id": "gr1-bias-007",
   "type": "choice",
   "topic": "Junction bias and the Shockley equation",
   "objective": "Trace the carrier flow in a forward-biased diode",
   "prompt": "In a forward-biased silicon diode, what is mainly responsible for the current across the junction?",
   "answer": {
    "id": "d",
    "text": "Majority carriers crossing the lowered barrier and becoming minority carriers on the other side"
   },
   "options": [
    {
     "id": "a",
     "text": "Minority carriers generated thermally on each side",
     "correct": false,
     "rationale": "Thermal minority carriers set the tiny reverse current, not the forward current."
    },
    {
     "id": "b",
     "text": "Ions moving through the depletion region",
     "correct": false,
     "rationale": "The ions are fixed in the lattice and do not move."
    },
    {
     "id": "c",
     "text": "Electrons passing through the oxide",
     "correct": false,
     "rationale": "A diode has no oxide."
    },
    {
     "id": "d",
     "text": "Majority carriers crossing the lowered barrier and becoming minority carriers on the other side",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Minority carriers generated thermally on each side",
     "misconception": "Describes reverse-bias current.",
     "rationale": "Thermal minority carriers set the tiny reverse current, not the forward current."
    },
    {
     "id": "b",
     "text": "Ions moving through the depletion region",
     "misconception": "Treats ions as carriers.",
     "rationale": "The ions are fixed in the lattice and do not move."
    },
    {
     "id": "c",
     "text": "Electrons passing through the oxide",
     "misconception": "Describes a MOS gate.",
     "rationale": "A diode has no oxide."
    }
   ],
   "explanation": "Forward bias lets electrons from the n side and holes from the p side diffuse across and become minority carriers on the opposite side, where they diffuse and recombine. This injection gives the large forward current.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-03.html",
     "label": "Lesson 3 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-03.html",
     "section": "B3 Minority-carrier transport"
    }
   ]
  },
  {
   "id": "gr1-bias-008",
   "type": "true-false",
   "topic": "Junction bias and the Shockley equation",
   "objective": "Check the reverse-bias claim",
   "prompt": "True or false: Increasing the reverse voltage of a diode (below breakdown) makes the depletion region wider.",
   "answer": {
    "id": "true",
    "text": "True"
   },
   "options": [
    {
     "id": "true",
     "text": "True",
     "correct": true
    },
    {
     "id": "false",
     "text": "False",
     "correct": false,
     "rationale": "Reverse voltage adds to the barrier V0 + VR, which widens the region."
    }
   ],
   "distractors": [
    {
     "id": "false",
     "text": "False",
     "misconception": "Expects the region to narrow with more voltage.",
     "rationale": "Reverse voltage adds to the barrier V0 + VR, which widens the region."
    }
   ],
   "explanation": "The depletion width grows with the total barrier voltage. With reverse bias the barrier is V0 + VR, so the region widens as VR increases.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-03.html",
     "label": "Lesson 3 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-03.html",
     "section": "B2 Junction bias"
    },
    {
     "file": "equation-sheets/sheet-1.html",
     "section": "Sections 4, 6-8"
    }
   ]
  },
  {
   "id": "gr1-brk-001",
   "type": "choice",
   "topic": "Breakdown, Zener diodes and junction capacitance",
   "objective": "Define reverse breakdown",
   "prompt": "What is reverse breakdown in a diode?",
   "answer": {
    "id": "d",
    "text": "A sharp rise in reverse current when the reverse voltage reaches a critical value"
   },
   "options": [
    {
     "id": "a",
     "text": "A forward current that rises exponentially",
     "correct": false,
     "rationale": "Breakdown happens under reverse bias."
    },
    {
     "id": "b",
     "text": "A permanent short that always destroys the diode",
     "correct": false,
     "rationale": "Breakdown is reversible if the power dissipation is kept within the rating."
    },
    {
     "id": "c",
     "text": "A drop to zero current at high reverse voltage",
     "correct": false,
     "rationale": "The current rises sharply, not falls."
    },
    {
     "id": "d",
     "text": "A sharp rise in reverse current when the reverse voltage reaches a critical value",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "A forward current that rises exponentially",
     "misconception": "Describes the forward region.",
     "rationale": "Breakdown happens under reverse bias."
    },
    {
     "id": "b",
     "text": "A permanent short that always destroys the diode",
     "misconception": "Treats breakdown as always destructive.",
     "rationale": "Breakdown is reversible if the power dissipation is kept within the rating."
    },
    {
     "id": "c",
     "text": "A drop to zero current at high reverse voltage",
     "misconception": "Reverses the effect.",
     "rationale": "The current rises sharply, not falls."
    }
   ],
   "explanation": "At the breakdown voltage the reverse current rises very quickly while the voltage stays almost constant. If power is limited by the circuit, the diode recovers when the voltage is removed.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-05.html",
     "label": "Lesson 5 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-03.html",
     "section": "B4 Reverse breakdown"
    },
    {
     "file": "lesson-guides/lesson-05.html",
     "section": "Breakdown: avalanche and Zener"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr1/diode_iv.svg",
    "alt": "Diode I-V characteristic: exponential rise in forward bias, tiny reverse current and sharp reverse breakdown",
    "caption": "Diode current versus voltage."
   }
  },
  {
   "id": "gr1-brk-002",
   "type": "choice",
   "topic": "Breakdown, Zener diodes and junction capacitance",
   "objective": "Name the breakdown mechanisms",
   "prompt": "Which pair names the two physical mechanisms that cause reverse breakdown?",
   "answer": {
    "id": "b",
    "text": "Avalanche multiplication and the Zener (tunneling) effect"
   },
   "options": [
    {
     "id": "a",
     "text": "Thermal runaway and photoconduction",
     "correct": false,
     "rationale": "Neither is one of the two junction breakdown mechanisms."
    },
    {
     "id": "b",
     "text": "Avalanche multiplication and the Zener (tunneling) effect",
     "correct": true
    },
    {
     "id": "c",
     "text": "Drift and diffusion",
     "correct": false,
     "rationale": "These are everyday current mechanisms, not breakdown mechanisms."
    },
    {
     "id": "d",
     "text": "Recombination and generation",
     "correct": false,
     "rationale": "These happen at all biases; they are not the breakdown mechanisms."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Thermal runaway and photoconduction",
     "misconception": "Names unrelated effects.",
     "rationale": "Neither is one of the two junction breakdown mechanisms."
    },
    {
     "id": "c",
     "text": "Drift and diffusion",
     "misconception": "Names transport mechanisms.",
     "rationale": "These are everyday current mechanisms, not breakdown mechanisms."
    },
    {
     "id": "d",
     "text": "Recombination and generation",
     "misconception": "Names carrier processes.",
     "rationale": "These happen at all biases; they are not the breakdown mechanisms."
    }
   ],
   "explanation": "In avalanche breakdown a strongly accelerated carrier ionizes other atoms and multiplies the current. In the Zener effect a strong field tears electrons from bonds directly. Both give a sharp reverse current rise.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-05.html",
     "label": "Lesson 5 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-03.html",
     "section": "B4 Reverse breakdown"
    },
    {
     "file": "lesson-guides/lesson-05.html",
     "section": "Breakdown: avalanche and Zener"
    }
   ]
  },
  {
   "id": "gr1-brk-003",
   "type": "choice",
   "topic": "Breakdown, Zener diodes and junction capacitance",
   "objective": "Know where a Zener diode operates",
   "prompt": "In which region does a Zener diode normally operate when used as a voltage reference or regulator?",
   "answer": {
    "id": "d",
    "text": "In reverse breakdown, where the voltage stays nearly constant over a range of current"
   },
   "options": [
    {
     "id": "a",
     "text": "In forward bias, where it behaves like a resistor",
     "correct": false,
     "rationale": "The useful constant-voltage region is in reverse breakdown."
    },
    {
     "id": "b",
     "text": "In the cutoff region where the current is zero",
     "correct": false,
     "rationale": "No current means no regulation."
    },
    {
     "id": "c",
     "text": "Only at zero bias",
     "correct": false,
     "rationale": "At zero bias the diode does nothing useful as a regulator."
    },
    {
     "id": "d",
     "text": "In reverse breakdown, where the voltage stays nearly constant over a range of current",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "In forward bias, where it behaves like a resistor",
     "misconception": "Misplaces the operating region.",
     "rationale": "The useful constant-voltage region is in reverse breakdown."
    },
    {
     "id": "b",
     "text": "In the cutoff region where the current is zero",
     "misconception": "Picks the off state.",
     "rationale": "No current means no regulation."
    },
    {
     "id": "c",
     "text": "Only at zero bias",
     "misconception": "Picks equilibrium.",
     "rationale": "At zero bias the diode does nothing useful as a regulator."
    }
   ],
   "explanation": "In breakdown the Zener voltage changes little with current, so it can hold a load voltage nearly constant. The model is VZ = VZ0 + IZ·rz.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-05.html",
     "label": "Lesson 5 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-05.html",
     "section": "Breakdown: avalanche and Zener"
    },
    {
     "file": "equation-sheets/sheet-1.html",
     "section": "Sections 4, 6-8"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr1/diode_iv.svg",
    "alt": "Diode I-V characteristic: exponential rise in forward bias, tiny reverse current and sharp reverse breakdown",
    "caption": "Diode current versus voltage."
   }
  },
  {
   "id": "gr1-brk-004",
   "type": "choice",
   "topic": "Breakdown, Zener diodes and junction capacitance",
   "objective": "Interpret the Zener model",
   "prompt": "In the Zener diode model VZ = VZ0 + IZ·rz, what does the small resistance rz represent?",
   "answer": {
    "id": "b",
    "text": "The small slope of the breakdown region: how much VZ changes when the Zener current changes"
   },
   "options": [
    {
     "id": "a",
     "text": "The forward resistance of the diode",
     "correct": false,
     "rationale": "rz describes the reverse breakdown region."
    },
    {
     "id": "b",
     "text": "The small slope of the breakdown region: how much VZ changes when the Zener current changes",
     "correct": true
    },
    {
     "id": "c",
     "text": "The load resistance",
     "correct": false,
     "rationale": "rz is internal to the Zener model."
    },
    {
     "id": "d",
     "text": "A series resistor added to limit the current",
     "correct": false,
     "rationale": "The limiting resistor is an external design choice; rz is the diode's own slope."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The forward resistance of the diode",
     "misconception": "Confuses reverse breakdown with forward conduction.",
     "rationale": "rz describes the reverse breakdown region."
    },
    {
     "id": "c",
     "text": "The load resistance",
     "misconception": "Names an external part.",
     "rationale": "rz is internal to the Zener model."
    },
    {
     "id": "d",
     "text": "A series resistor added to limit the current",
     "misconception": "Treats it as a separate component.",
     "rationale": "The limiting resistor is an external design choice; rz is the diode's own slope."
    }
   ],
   "explanation": "VZ0 is the voltage the breakdown line would have at zero current, and rz is its slope. A small rz means the voltage is nearly constant, which is what makes the Zener useful for regulation.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-05.html",
     "label": "Lesson 5 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-05.html",
     "section": "Breakdown: avalanche and Zener"
    },
    {
     "file": "lesson-guides/lesson-06.html",
     "section": "B3 Zener regulation"
    },
    {
     "file": "equation-sheets/sheet-1.html",
     "section": "Sections 4, 6-8"
    }
   ]
  },
  {
   "id": "gr1-brk-005",
   "type": "choice",
   "topic": "Breakdown, Zener diodes and junction capacitance",
   "objective": "Explain how junction capacitance changes with reverse bias",
   "prompt": "As the reverse voltage across a pn junction increases, what happens to its depletion (junction) capacitance?",
   "answer": {
    "id": "d",
    "text": "It decreases, because the depletion region gets wider like a capacitor whose plates move apart"
   },
   "options": [
    {
     "id": "a",
     "text": "It increases because more charge is stored",
     "correct": false,
     "rationale": "The plates are the two edges of the depletion region; wider spacing gives smaller capacitance."
    },
    {
     "id": "b",
     "text": "It stays constant",
     "correct": false,
     "rationale": "The width, and so the capacitance, depends on the reverse voltage."
    },
    {
     "id": "c",
     "text": "It becomes infinite at large voltage",
     "correct": false,
     "rationale": "It falls toward zero as the region widens."
    },
    {
     "id": "d",
     "text": "It decreases, because the depletion region gets wider like a capacitor whose plates move apart",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "It increases because more charge is stored",
     "misconception": "Looks only at charge.",
     "rationale": "The plates are the two edges of the depletion region; wider spacing gives smaller capacitance."
    },
    {
     "id": "b",
     "text": "It stays constant",
     "misconception": "Ignores voltage dependence.",
     "rationale": "The width, and so the capacitance, depends on the reverse voltage."
    },
    {
     "id": "c",
     "text": "It becomes infinite at large voltage",
     "misconception": "Misreads the trend.",
     "rationale": "It falls toward zero as the region widens."
    }
   ],
   "explanation": "The depletion region acts like a parallel-plate capacitor whose separation is the width W. Reverse bias increases W, so Cj = Cj0/(1 + VR/V0)^m decreases.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-04.html",
     "label": "Lesson 4 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-04.html",
     "section": "Depletion-region charge and capacitance"
    },
    {
     "file": "equation-sheets/sheet-1.html",
     "section": "Sections 4, 6-8"
    }
   ]
  },
  {
   "id": "gr1-brk-006",
   "type": "choice",
   "topic": "Breakdown, Zener diodes and junction capacitance",
   "objective": "Place the capacitor plates of a junction",
   "prompt": "Which statement best describes why a reverse-biased junction has capacitance?",
   "answer": {
    "id": "b",
    "text": "The uncovered charges on the two sides of the depletion region act like two plates separated by an insulating layer"
   },
   "options": [
    {
     "id": "a",
     "text": "The metal leads form the plates",
     "correct": false,
     "rationale": "The capacitance is internal to the junction."
    },
    {
     "id": "b",
     "text": "The uncovered charges on the two sides of the depletion region act like two plates separated by an insulating layer",
     "correct": true
    },
    {
     "id": "c",
     "text": "The majority carriers form a gas that stores energy",
     "correct": false,
     "rationale": "Stored charge sits in the fixed ions at the two edges of the region."
    },
    {
     "id": "d",
     "text": "There is no capacitance in a diode",
     "correct": false,
     "rationale": "Junction capacitance is real and limits high-frequency use."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The metal leads form the plates",
     "misconception": "Looks at the packaging.",
     "rationale": "The capacitance is internal to the junction."
    },
    {
     "id": "c",
     "text": "The majority carriers form a gas that stores energy",
     "misconception": "Invents a gas model.",
     "rationale": "Stored charge sits in the fixed ions at the two edges of the region."
    },
    {
     "id": "d",
     "text": "There is no capacitance in a diode",
     "misconception": "Ignores the effect.",
     "rationale": "Junction capacitance is real and limits high-frequency use."
    }
   ],
   "explanation": "The positive donor ions on the n side and negative acceptor ions on the p side with the depleted layer between them form a parallel-plate-like capacitor.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-04.html",
     "label": "Lesson 4 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-04.html",
     "section": "Depletion-region charge and capacitance"
    }
   ]
  },
  {
   "id": "gr1-brk-007",
   "type": "multi-select",
   "topic": "Breakdown, Zener diodes and junction capacitance",
   "objective": "Recognize Zener applications",
   "prompt": "Select all that are reasons a Zener diode is used in breakdown.",
   "answer": {
    "ids": [
     "b",
     "d",
     "f"
    ]
   },
   "options": [
    {
     "id": "a",
     "text": "Its forward current is smaller than a normal diode at the same voltage",
     "correct": false,
     "rationale": "Forward behavior is unremarkable; breakdown behavior is the point."
    },
    {
     "id": "b",
     "text": "The voltage across it stays nearly constant over a range of current",
     "correct": true
    },
    {
     "id": "c",
     "text": "It stores charge to power the load during a blackout",
     "correct": false,
     "rationale": "A Zener regulates a voltage but stores almost no energy."
    },
    {
     "id": "d",
     "text": "It can hold a regulated voltage across a load",
     "correct": true
    },
    {
     "id": "e",
     "text": "It amplifies a small signal",
     "correct": false,
     "rationale": "A diode has no gain."
    },
    {
     "id": "f",
     "text": "It can protect a circuit by clamping an overvoltage",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Its forward current is smaller than a normal diode at the same voltage",
     "misconception": "Mixes forward and reverse behavior.",
     "rationale": "Forward behavior is unremarkable; breakdown behavior is the point."
    },
    {
     "id": "c",
     "text": "It stores charge to power the load during a blackout",
     "misconception": "Confuses a Zener with a battery.",
     "rationale": "A Zener regulates a voltage but stores almost no energy."
    },
    {
     "id": "e",
     "text": "It amplifies a small signal",
     "misconception": "Confuses it with a transistor.",
     "rationale": "A diode has no gain."
    }
   ],
   "explanation": "In breakdown the Zener acts as a nearly constant voltage source, so it can regulate a load or clip excessive voltages. It does not amplify or store significant energy.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-05.html",
     "label": "Lesson 5 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-04.html",
     "section": "Rectifier, limiter, clamper and Zener protection"
    },
    {
     "file": "lesson-guides/lesson-06.html",
     "section": "B3 Zener regulation"
    }
   ]
  },
  {
   "id": "gr1-ideal-001",
   "type": "choice",
   "topic": "Ideal diode analysis",
   "objective": "State the analysis method",
   "prompt": "What is the standard method for analyzing a circuit with an ideal diode?",
   "answer": {
    "id": "c",
    "text": "Assume a state (on or off), analyze with that model, then confirm the result is consistent with the assumption"
   },
   "options": [
    {
     "id": "a",
     "text": "Use the on model for every diode and report the answer",
     "correct": false,
     "rationale": "An assumed state can be wrong; the confirmation step catches it."
    },
    {
     "id": "b",
     "text": "Replace the diode with a resistor and solve",
     "correct": false,
     "rationale": "The ideal diode is a switch, not a resistor."
    },
    {
     "id": "c",
     "text": "Assume a state (on or off), analyze with that model, then confirm the result is consistent with the assumption",
     "correct": true
    },
    {
     "id": "d",
     "text": "Solve only for the current and skip voltages",
     "correct": false,
     "rationale": "The check uses the current (on) or the voltage (off)."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Use the on model for every diode and report the answer",
     "misconception": "Skips the check.",
     "rationale": "An assumed state can be wrong; the confirmation step catches it."
    },
    {
     "id": "b",
     "text": "Replace the diode with a resistor and solve",
     "misconception": "Applies the wrong model.",
     "rationale": "The ideal diode is a switch, not a resistor."
    },
    {
     "id": "d",
     "text": "Solve only for the current and skip voltages",
     "misconception": "Drops half of the check.",
     "rationale": "The check uses the current (on) or the voltage (off)."
    }
   ],
   "explanation": "The ideal-diode procedure is assume, analyze, confirm. If the check fails, switch the assumption and repeat.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-04.html",
     "label": "Lesson 4 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-04.html",
     "section": "Ideal-diode model and consistency check"
    },
    {
     "file": "equation-sheets/sheet-1.html",
     "section": "Sections 4, 6-8"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr1/diode_ckt.svg",
    "alt": "A source, a resistor and a diode in series",
    "caption": "Series diode circuit."
   }
  },
  {
   "id": "gr1-ideal-002",
   "type": "choice",
   "topic": "Ideal diode analysis",
   "objective": "State the on-state check",
   "prompt": "You assume an ideal diode is ON. Which result confirms that assumption?",
   "answer": {
    "id": "a",
    "text": "The current through the diode, in the forward direction, is positive"
   },
   "options": [
    {
     "id": "a",
     "text": "The current through the diode, in the forward direction, is positive",
     "correct": true
    },
    {
     "id": "b",
     "text": "The voltage across the diode is negative",
     "correct": false,
     "rationale": "A negative voltage means the diode would be reverse biased."
    },
    {
     "id": "c",
     "text": "The current is zero",
     "correct": false,
     "rationale": "In the off state the current is zero; in the on state it is positive."
    },
    {
     "id": "d",
     "text": "The voltage across the diode is large and positive",
     "correct": false,
     "rationale": "For an ideal diode the on-state voltage is 0 V; the check is on current."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "The voltage across the diode is negative",
     "misconception": "Gives the off-state check.",
     "rationale": "A negative voltage means the diode would be reverse biased."
    },
    {
     "id": "c",
     "text": "The current is zero",
     "misconception": "Gives the off-state result.",
     "rationale": "In the off state the current is zero; in the on state it is positive."
    },
    {
     "id": "d",
     "text": "The voltage across the diode is large and positive",
     "misconception": "Expects a forward voltage drop.",
     "rationale": "For an ideal diode the on-state voltage is 0 V; the check is on current."
    }
   ],
   "explanation": "An ideal diode that is on is a short circuit with 0 V across it. The assumption is consistent only if the computed forward current ID is greater than zero.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-04.html",
     "label": "Lesson 4 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-04.html",
     "section": "Ideal-diode model and consistency check"
    },
    {
     "file": "equation-sheets/sheet-1.html",
     "section": "Sections 4, 6-8"
    }
   ]
  },
  {
   "id": "gr1-ideal-003",
   "type": "choice",
   "topic": "Ideal diode analysis",
   "objective": "State the off-state check",
   "prompt": "You assume an ideal diode is OFF. Which result confirms that assumption?",
   "answer": {
    "id": "c",
    "text": "The voltage across the diode is negative (reverse biased)"
   },
   "options": [
    {
     "id": "a",
     "text": "The current is positive",
     "correct": false,
     "rationale": "A positive current means the diode would conduct."
    },
    {
     "id": "b",
     "text": "The voltage across the diode is exactly 0.7 V",
     "correct": false,
     "rationale": "The ideal diode has no 0.7 V drop."
    },
    {
     "id": "c",
     "text": "The voltage across the diode is negative (reverse biased)",
     "correct": true
    },
    {
     "id": "d",
     "text": "Any voltage at all",
     "correct": false,
     "rationale": "A positive voltage across an off diode would contradict the assumption."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The current is positive",
     "misconception": "Gives the on-state check.",
     "rationale": "A positive current means the diode would conduct."
    },
    {
     "id": "b",
     "text": "The voltage across the diode is exactly 0.7 V",
     "misconception": "Uses the constant-drop value.",
     "rationale": "The ideal diode has no 0.7 V drop."
    },
    {
     "id": "d",
     "text": "Any voltage at all",
     "misconception": "Skips the check.",
     "rationale": "A positive voltage across an off diode would contradict the assumption."
    }
   ],
   "explanation": "An off diode is an open circuit with zero current. Compute the voltage that would appear across the open diode: if it is below zero the diode is reverse biased and the assumption holds.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-04.html",
     "label": "Lesson 4 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-04.html",
     "section": "Ideal-diode model and consistency check"
    },
    {
     "file": "equation-sheets/sheet-1.html",
     "section": "Sections 4, 6-8"
    }
   ]
  },
  {
   "id": "gr1-ideal-004",
   "type": "choice",
   "topic": "Ideal diode analysis",
   "objective": "React to a failed check",
   "prompt": "You assumed an ideal diode was on and found a negative diode current. What do you do?",
   "answer": {
    "id": "a",
    "text": "Change the assumption to off and re-analyze"
   },
   "options": [
    {
     "id": "a",
     "text": "Change the assumption to off and re-analyze",
     "correct": true
    },
    {
     "id": "b",
     "text": "Keep the on assumption and use the negative current",
     "correct": false,
     "rationale": "A negative current is impossible for an ideal diode that is on."
    },
    {
     "id": "c",
     "text": "Change the diode to a resistor",
     "correct": false,
     "rationale": "The model type does not change; the state assumption does."
    },
    {
     "id": "d",
     "text": "Double the source voltage",
     "correct": false,
     "rationale": "The source is given and must not be changed."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "Keep the on assumption and use the negative current",
     "misconception": "Ignores the contradiction.",
     "rationale": "A negative current is impossible for an ideal diode that is on."
    },
    {
     "id": "c",
     "text": "Change the diode to a resistor",
     "misconception": "Switches the model type.",
     "rationale": "The model type does not change; the state assumption does."
    },
    {
     "id": "d",
     "text": "Double the source voltage",
     "misconception": "Alters the problem.",
     "rationale": "The source is given and must not be changed."
    }
   ],
   "explanation": "A negative current means the circuit wants current to flow against the diode. That contradicts the on state, so the diode is off. Redo the analysis with the diode open and check the voltage.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-04.html",
     "label": "Lesson 4 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-04.html",
     "section": "Ideal-diode model and consistency check"
    }
   ]
  },
  {
   "id": "gr1-ideal-005",
   "type": "choice",
   "topic": "Ideal diode analysis",
   "objective": "Read the ideal diode I-V characteristic",
   "prompt": "Which description matches the I-V characteristic of an ideal diode?",
   "answer": {
    "id": "c",
    "text": "Zero current for negative voltage and any positive current at zero voltage"
   },
   "options": [
    {
     "id": "a",
     "text": "A straight line through the origin",
     "correct": false,
     "rationale": "The ideal diode curve is bent at the origin."
    },
    {
     "id": "b",
     "text": "An exponential curve through the origin",
     "correct": false,
     "rationale": "The ideal model is a piecewise line, not an exponential."
    },
    {
     "id": "c",
     "text": "Zero current for negative voltage and any positive current at zero voltage",
     "correct": true
    },
    {
     "id": "d",
     "text": "A constant 0.7 V at any current",
     "correct": false,
     "rationale": "The ideal model has 0 V when on."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "A straight line through the origin",
     "misconception": "Describes a resistor.",
     "rationale": "The ideal diode curve is bent at the origin."
    },
    {
     "id": "b",
     "text": "An exponential curve through the origin",
     "misconception": "Describes the Shockley diode.",
     "rationale": "The ideal model is a piecewise line, not an exponential."
    },
    {
     "id": "d",
     "text": "A constant 0.7 V at any current",
     "misconception": "Describes the constant-drop model.",
     "rationale": "The ideal model has 0 V when on."
    }
   ],
   "explanation": "The ideal diode is a perfect one-way switch: off with I = 0 for v < 0 and on with v = 0 for any i > 0. Together these form an L-shaped curve at the origin.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-04.html",
     "label": "Lesson 4 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-04.html",
     "section": "IV-characteristic"
    },
    {
     "file": "equation-sheets/sheet-1.html",
     "section": "Sections 4, 6-8"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr1/diode_iv.svg",
    "alt": "Diode I-V characteristic: exponential rise in forward bias, tiny reverse current and sharp reverse breakdown",
    "caption": "Diode current versus voltage."
   }
  },
  {
   "id": "gr1-ideal-006",
   "type": "choice",
   "topic": "Ideal diode analysis",
   "objective": "Choose the current direction",
   "prompt": "In the diode symbol, in which direction does an on diode conduct?",
   "answer": {
    "id": "a",
    "text": "From the anode (the triangle side) toward the cathode (the bar side)"
   },
   "options": [
    {
     "id": "a",
     "text": "From the anode (the triangle side) toward the cathode (the bar side)",
     "correct": true
    },
    {
     "id": "b",
     "text": "From the cathode toward the anode",
     "correct": false,
     "rationale": "The arrow of the triangle points in the conducting direction."
    },
    {
     "id": "c",
     "text": "In both directions equally",
     "correct": false,
     "rationale": "A diode conducts one way only."
    },
    {
     "id": "d",
     "text": "Across the bar only",
     "correct": false,
     "rationale": "The current passes through the whole device from anode to cathode."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "From the cathode toward the anode",
     "misconception": "Reverses the symbol.",
     "rationale": "The arrow of the triangle points in the conducting direction."
    },
    {
     "id": "c",
     "text": "In both directions equally",
     "misconception": "Treats it as a resistor.",
     "rationale": "A diode conducts one way only."
    },
    {
     "id": "d",
     "text": "Across the bar only",
     "misconception": "Misreads the symbol.",
     "rationale": "The current passes through the whole device from anode to cathode."
    }
   ],
   "explanation": "The triangle of the diode symbol points from anode to cathode, which is the direction of forward conventional current.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-04.html",
     "label": "Lesson 4 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-04.html",
     "section": "Ideal-diode model and consistency check"
    }
   ]
  },
  {
   "id": "gr1-ideal-007",
   "type": "choice",
   "topic": "Ideal diode analysis",
   "objective": "Plan the analysis for two diodes",
   "prompt": "A circuit contains two ideal diodes and each could be on or off. What is a sound way to proceed?",
   "answer": {
    "id": "c",
    "text": "Assume a combination of states, analyze, confirm both diodes, and revise only the inconsistent one"
   },
   "options": [
    {
     "id": "a",
     "text": "Assume all diodes are on and accept the result",
     "correct": false,
     "rationale": "Each assumption must be confirmed."
    },
    {
     "id": "b",
     "text": "Test only the first diode and ignore the second",
     "correct": false,
     "rationale": "Every diode needs its own consistency check."
    },
    {
     "id": "c",
     "text": "Assume a combination of states, analyze, confirm both diodes, and revise only the inconsistent one",
     "correct": true
    },
    {
     "id": "d",
     "text": "Pick the combination that gives the largest current",
     "correct": false,
     "rationale": "The correct combination is the one consistent with all checks."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Assume all diodes are on and accept the result",
     "misconception": "Skips the confirmation.",
     "rationale": "Each assumption must be confirmed."
    },
    {
     "id": "b",
     "text": "Test only the first diode and ignore the second",
     "misconception": "Drops a check.",
     "rationale": "Every diode needs its own consistency check."
    },
    {
     "id": "d",
     "text": "Pick the combination that gives the largest current",
     "misconception": "Uses an invalid rule.",
     "rationale": "The correct combination is the one consistent with all checks."
    }
   ],
   "explanation": "Make one assumption per diode, analyze, then check each. If a check fails, change that diode's state and repeat until all diodes are consistent.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-04.html",
     "label": "Lesson 4 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-04.html",
     "section": "Ideal-diode model and consistency check"
    }
   ]
  },
  {
   "id": "gr1-ideal-008",
   "type": "sequence",
   "topic": "Ideal diode analysis",
   "objective": "Order the ideal-diode analysis",
   "prompt": "Put the steps of analyzing a one-diode circuit with the ideal model in order.",
   "answer": {
    "ids": [
     "s1",
     "s2",
     "s3",
     "s4",
     "s5"
    ]
   },
   "steps": [
    {
     "id": "s1",
     "text": "Assume the diode is on or off"
    },
    {
     "id": "s2",
     "text": "Replace it by a short (on) or an open (off)"
    },
    {
     "id": "s3",
     "text": "Solve the circuit for the diode current or voltage"
    },
    {
     "id": "s4",
     "text": "Check the current is positive (on) or the voltage negative (off)"
    },
    {
     "id": "s5",
     "text": "If the check fails, switch the assumption and repeat"
    }
   ],
   "distractors": [
    {
     "id": "d1",
     "text": "Solve first and then pick the state",
     "misconception": "Reverses the order.",
     "rationale": "The state must be assumed before a model can replace the diode."
    }
   ],
   "explanation": "The method is assume, replace by the matching model, solve, confirm, and switch if needed.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-04.html",
     "label": "Lesson 4 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-04.html",
     "section": "Ideal-diode model and consistency check"
    }
   ]
  },
  {
   "id": "gr1-ideal-009",
   "type": "true-false",
   "topic": "Ideal diode analysis",
   "objective": "Judge the use of a limiter",
   "prompt": "True or false: A diode limiter can keep an output voltage from exceeding a chosen level by turning on and diverting current when the level is reached.",
   "answer": {
    "id": "true",
    "text": "True"
   },
   "options": [
    {
     "id": "true",
     "text": "True",
     "correct": true
    },
    {
     "id": "false",
     "text": "False",
     "correct": false,
     "rationale": "The conducting diode clamps the voltage at its on-state drop plus any reference."
    }
   ],
   "distractors": [
    {
     "id": "false",
     "text": "False",
     "misconception": "Believes diodes only rectify.",
     "rationale": "The conducting diode clamps the voltage at its on-state drop plus any reference."
    }
   ],
   "explanation": "A limiter uses a diode (or Zener) that turns on when the output reaches a level and holds the voltage there, protecting the circuit.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-04.html",
     "label": "Lesson 4 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-04.html",
     "section": "Rectifier, limiter, clamper and Zener protection"
    }
   ]
  },
  {
   "id": "gr1-model-001",
   "type": "choice",
   "topic": "Diode models and iterative solution",
   "objective": "State the constant-drop model",
   "prompt": "In the constant-voltage-drop (CVD) model, how is a conducting silicon diode represented?",
   "answer": {
    "id": "d",
    "text": "As a voltage source of about 0.7 V in the forward direction"
   },
   "options": [
    {
     "id": "a",
     "text": "As a short circuit with 0 V",
     "correct": false,
     "rationale": "The CVD model adds the 0.7 V drop to the ideal diode."
    },
    {
     "id": "b",
     "text": "As a resistor of 0.7 ohms",
     "correct": false,
     "rationale": "0.7 is a voltage in this model, not a resistance."
    },
    {
     "id": "c",
     "text": "As an open circuit",
     "correct": false,
     "rationale": "An on diode conducts."
    },
    {
     "id": "d",
     "text": "As a voltage source of about 0.7 V in the forward direction",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "As a short circuit with 0 V",
     "misconception": "Gives the ideal model.",
     "rationale": "The CVD model adds the 0.7 V drop to the ideal diode."
    },
    {
     "id": "b",
     "text": "As a resistor of 0.7 ohms",
     "misconception": "Mixes units.",
     "rationale": "0.7 is a voltage in this model, not a resistance."
    },
    {
     "id": "c",
     "text": "As an open circuit",
     "misconception": "Describes the off state.",
     "rationale": "An on diode conducts."
    }
   ],
   "explanation": "The CVD model keeps the on/off behavior of the ideal diode but gives the on diode a fixed forward drop VD ≈ 0.7 V. The off state is an open circuit.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-05.html",
     "label": "Lesson 5 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-05.html",
     "section": "Constant voltage drop model"
    },
    {
     "file": "equation-sheets/sheet-1.html",
     "section": "Sections 4, 6-8"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr1/diode_ckt.svg",
    "alt": "A source, a resistor and a diode in series",
    "caption": "Series diode circuit."
   }
  },
  {
   "id": "gr1-model-002",
   "type": "choice",
   "topic": "Diode models and iterative solution",
   "objective": "State the CVD checks",
   "prompt": "In the CVD model, what confirms that a diode assumed ON is consistent?",
   "answer": {
    "id": "b",
    "text": "The diode current is positive"
   },
   "options": [
    {
     "id": "a",
     "text": "The diode voltage is above 1.4 V",
     "correct": false,
     "rationale": "The model fixes the voltage at 0.7 V when on."
    },
    {
     "id": "b",
     "text": "The diode current is positive",
     "correct": true
    },
    {
     "id": "c",
     "text": "The diode current is zero",
     "correct": false,
     "rationale": "An on diode has positive current."
    },
    {
     "id": "d",
     "text": "The diode voltage is negative",
     "correct": false,
     "rationale": "Negative voltage means reverse bias."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The diode voltage is above 1.4 V",
     "misconception": "Invents a threshold.",
     "rationale": "The model fixes the voltage at 0.7 V when on."
    },
    {
     "id": "c",
     "text": "The diode current is zero",
     "misconception": "Gives the off result.",
     "rationale": "An on diode has positive current."
    },
    {
     "id": "d",
     "text": "The diode voltage is negative",
     "misconception": "Gives the off check for an ideal diode.",
     "rationale": "Negative voltage means reverse bias."
    }
   ],
   "explanation": "With the CVD model, assume on (VD = 0.7 V) and check ID > 0. For an off assumption, check that the voltage across the diode is less than 0.7 V.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-05.html",
     "label": "Lesson 5 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-05.html",
     "section": "Constant voltage drop model"
    },
    {
     "file": "equation-sheets/sheet-1.html",
     "section": "Sections 4, 6-8"
    }
   ]
  },
  {
   "id": "gr1-model-003",
   "type": "choice",
   "topic": "Diode models and iterative solution",
   "objective": "Pick a model for the accuracy needed",
   "prompt": "A quick estimate of a forward-biased diode circuit must be reasonably accurate but easy to solve by hand. Which model fits?",
   "answer": {
    "id": "d",
    "text": "The constant-voltage-drop model, because it includes the forward drop without solving an exponential"
   },
   "options": [
    {
     "id": "a",
     "text": "The ideal diode, because it is exact",
     "correct": false,
     "rationale": "The ideal model ignores the forward drop and can be noticeably off."
    },
    {
     "id": "b",
     "text": "The full Shockley model with a numerical solver, always",
     "correct": false,
     "rationale": "It is accurate but needs iteration; CVD is usually adequate for estimates."
    },
    {
     "id": "c",
     "text": "No model is needed",
     "correct": false,
     "rationale": "A model is needed to analyze the circuit."
    },
    {
     "id": "d",
     "text": "The constant-voltage-drop model, because it includes the forward drop without solving an exponential",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The ideal diode, because it is exact",
     "misconception": "Overrates the ideal model.",
     "rationale": "The ideal model ignores the forward drop and can be noticeably off."
    },
    {
     "id": "b",
     "text": "The full Shockley model with a numerical solver, always",
     "misconception": "Chooses effort over need.",
     "rationale": "It is accurate but needs iteration; CVD is usually adequate for estimates."
    },
    {
     "id": "c",
     "text": "No model is needed",
     "misconception": "Skips modeling.",
     "rationale": "A model is needed to analyze the circuit."
    }
   ],
   "explanation": "The ideal model neglects the 0.7 V drop; the Shockley model is the most accurate but needs iteration. CVD is the compromise for hand analysis.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-05.html",
     "label": "Lesson 5 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-05.html",
     "section": "Constant voltage drop model"
    }
   ]
  },
  {
   "id": "gr1-model-004",
   "type": "choice",
   "topic": "Diode models and iterative solution",
   "objective": "Explain why iteration is needed",
   "prompt": "Why is the circuit with a Shockley diode and a series resistor solved by iteration instead of directly?",
   "answer": {
    "id": "b",
    "text": "Because the exponential diode equation and the linear resistor equation cannot be combined into a simple closed-form solution"
   },
   "options": [
    {
     "id": "a",
     "text": "Because the resistor is nonlinear",
     "correct": false,
     "rationale": "The resistor is linear; the diode exponential is the nonlinear element."
    },
    {
     "id": "b",
     "text": "Because the exponential diode equation and the linear resistor equation cannot be combined into a simple closed-form solution",
     "correct": true
    },
    {
     "id": "c",
     "text": "Because the source voltage changes with time",
     "correct": false,
     "rationale": "This is a DC problem; the source is fixed."
    },
    {
     "id": "d",
     "text": "Because diodes have no voltage across them",
     "correct": false,
     "rationale": "A conducting diode has a voltage that must be found."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Because the resistor is nonlinear",
     "misconception": "Misidentifies which part is nonlinear.",
     "rationale": "The resistor is linear; the diode exponential is the nonlinear element."
    },
    {
     "id": "c",
     "text": "Because the source voltage changes with time",
     "misconception": "Introduces time dependence.",
     "rationale": "This is a DC problem; the source is fixed."
    },
    {
     "id": "d",
     "text": "Because diodes have no voltage across them",
     "misconception": "False statement.",
     "rationale": "A conducting diode has a voltage that must be found."
    }
   ],
   "explanation": "The loop equation is linear while the diode law is exponential, so there is no simple algebraic solution. An iterative method such as Gauss-Seidel converges on the answer.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-05.html",
     "label": "Lesson 5 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-05.html",
     "section": "Gauss-Seidel analysis with Shockley diode equation"
    },
    {
     "file": "equation-sheets/sheet-1.html",
     "section": "Sections 4, 6-8"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr1/diode_ckt.svg",
    "alt": "A source, a resistor and a diode in series",
    "caption": "Series diode circuit."
   }
  },
  {
   "id": "gr1-model-005",
   "type": "choice",
   "topic": "Diode models and iterative solution",
   "objective": "Describe the two Gauss-Seidel updates",
   "prompt": "In the iterative solution of a Shockley diode circuit, what do the two update equations do in each pass?",
   "answer": {
    "id": "d",
    "text": "One uses the loop (load-line) equation to find the current from the voltage; the other uses the diode equation to refine the voltage from the new current"
   },
   "options": [
    {
     "id": "a",
     "text": "Both use the loop equation only",
     "correct": false,
     "rationale": "The diode law is what refines the voltage."
    },
    {
     "id": "b",
     "text": "Both use the Shockley equation only",
     "correct": false,
     "rationale": "The circuit loop gives the current."
    },
    {
     "id": "c",
     "text": "One finds temperature and the other finds area",
     "correct": false,
     "rationale": "The iteration finds ID and VD."
    },
    {
     "id": "d",
     "text": "One uses the loop (load-line) equation to find the current from the voltage; the other uses the diode equation to refine the voltage from the new current",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Both use the loop equation only",
     "misconception": "Drops the diode equation.",
     "rationale": "The diode law is what refines the voltage."
    },
    {
     "id": "b",
     "text": "Both use the Shockley equation only",
     "misconception": "Drops the circuit equation.",
     "rationale": "The circuit loop gives the current."
    },
    {
     "id": "c",
     "text": "One finds temperature and the other finds area",
     "misconception": "Names unrelated quantities.",
     "rationale": "The iteration finds ID and VD."
    }
   ],
   "explanation": "Each pass computes ID2 from the load line (Vth - k·VD1)/Rth and then updates the diode voltage VD2 = VD1 + n·VT·ln(ID2/ID1). Repeating drives both values to a consistent solution.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-05.html",
     "label": "Lesson 5 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-05.html",
     "section": "Gauss-Seidel analysis with Shockley diode equation"
    },
    {
     "file": "equation-sheets/sheet-1.html",
     "section": "Sections 4, 6-8"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr1/diode_ckt.svg",
    "alt": "A source, a resistor and a diode in series",
    "caption": "Series diode circuit."
   }
  },
  {
   "id": "gr1-model-006",
   "type": "choice",
   "topic": "Diode models and iterative solution",
   "objective": "Decide when to stop iterating",
   "prompt": "When do you stop the Gauss-Seidel iteration for a diode circuit?",
   "answer": {
    "id": "b",
    "text": "When the change in the diode voltage between iterations falls below the tolerance you want"
   },
   "options": [
    {
     "id": "a",
     "text": "After exactly two iterations always",
     "correct": false,
     "rationale": "The number needed depends on the problem and starting guess."
    },
    {
     "id": "b",
     "text": "When the change in the diode voltage between iterations falls below the tolerance you want",
     "correct": true
    },
    {
     "id": "c",
     "text": "When the current becomes negative",
     "correct": false,
     "rationale": "A negative current means a bad assumption, not convergence."
    },
    {
     "id": "d",
     "text": "When the diode voltage reaches 5 V",
     "correct": false,
     "rationale": "Convergence is about the change, not an absolute value."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "After exactly two iterations always",
     "misconception": "Uses a fixed count.",
     "rationale": "The number needed depends on the problem and starting guess."
    },
    {
     "id": "c",
     "text": "When the current becomes negative",
     "misconception": "Confuses failure with convergence.",
     "rationale": "A negative current means a bad assumption, not convergence."
    },
    {
     "id": "d",
     "text": "When the diode voltage reaches 5 V",
     "misconception": "Invents a stopping voltage.",
     "rationale": "Convergence is about the change, not an absolute value."
    }
   ],
   "explanation": "The iteration is complete when successive voltages agree to the desired tolerance; the sheet states to iterate until the change in VD is small enough.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-05.html",
     "label": "Lesson 5 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-05.html",
     "section": "Gauss-Seidel analysis with Shockley diode equation"
    },
    {
     "file": "equation-sheets/sheet-1.html",
     "section": "Sections 4, 6-8"
    }
   ]
  },
  {
   "id": "gr1-model-007",
   "type": "choice",
   "topic": "Diode models and iterative solution",
   "objective": "Pick a good starting guess",
   "prompt": "Which starting voltage is a sensible first guess for the iteration with a forward-biased silicon diode?",
   "answer": {
    "id": "d",
    "text": "About 0.7 V, the typical forward drop"
   },
   "options": [
    {
     "id": "a",
     "text": "0 V",
     "correct": false,
     "rationale": "It still converges but the guess is poor; the typical drop is 0.7 V."
    },
    {
     "id": "b",
     "text": "The full source voltage",
     "correct": false,
     "rationale": "The diode voltage is a small fraction of the source."
    },
    {
     "id": "c",
     "text": "A negative voltage",
     "correct": false,
     "rationale": "A conducting diode has a positive forward voltage."
    },
    {
     "id": "d",
     "text": "About 0.7 V, the typical forward drop",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "0 V",
     "misconception": "Uses an unrealistic start.",
     "rationale": "It still converges but the guess is poor; the typical drop is 0.7 V."
    },
    {
     "id": "b",
     "text": "The full source voltage",
     "misconception": "Ignores the series resistor.",
     "rationale": "The diode voltage is a small fraction of the source."
    },
    {
     "id": "c",
     "text": "A negative voltage",
     "misconception": "Uses reverse bias.",
     "rationale": "A conducting diode has a positive forward voltage."
    }
   ],
   "explanation": "A forward-biased silicon diode usually has about 0.6 to 0.8 V across it, so 0.7 V is a good first estimate, usually found with the CVD model.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-05.html",
     "label": "Lesson 5 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-05.html",
     "section": "Gauss-Seidel analysis with Shockley diode equation"
    }
   ]
  },
  {
   "id": "gr1-model-008",
   "type": "choice",
   "topic": "Diode models and iterative solution",
   "objective": "Compare the three models",
   "prompt": "Which ordering of the three diode models goes from least to most detailed?",
   "answer": {
    "id": "b",
    "text": "Ideal, then constant voltage drop, then Shockley exponential"
   },
   "options": [
    {
     "id": "a",
     "text": "Shockley, then constant voltage drop, then ideal",
     "correct": false,
     "rationale": "The ideal model is the simplest."
    },
    {
     "id": "b",
     "text": "Ideal, then constant voltage drop, then Shockley exponential",
     "correct": true
    },
    {
     "id": "c",
     "text": "Constant voltage drop, then ideal, then Shockley",
     "correct": false,
     "rationale": "Ideal drops even the 0.7 V and is simplest."
    },
    {
     "id": "d",
     "text": "All three are equally detailed",
     "correct": false,
     "rationale": "They differ in what they retain from real diode behavior."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Shockley, then constant voltage drop, then ideal",
     "misconception": "Reverses the order.",
     "rationale": "The ideal model is the simplest."
    },
    {
     "id": "c",
     "text": "Constant voltage drop, then ideal, then Shockley",
     "misconception": "Misplaces the ideal model.",
     "rationale": "Ideal drops even the 0.7 V and is simplest."
    },
    {
     "id": "d",
     "text": "All three are equally detailed",
     "misconception": "Ignores the differences.",
     "rationale": "They differ in what they retain from real diode behavior."
    }
   ],
   "explanation": "The ideal model keeps only on/off behavior; CVD adds a fixed forward voltage; the Shockley model captures the exponential current-voltage relation.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-05.html",
     "label": "Lesson 5 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-05.html",
     "section": "Diode circuit models"
    },
    {
     "file": "equation-sheets/sheet-1.html",
     "section": "Sections 4, 6-8"
    }
   ]
  },
  {
   "id": "gr1-model-009",
   "type": "multi-select",
   "topic": "Diode models and iterative solution",
   "objective": "Select what the Shockley model captures that others do not",
   "prompt": "Select all that the exponential Shockley model captures better than the ideal or CVD models.",
   "answer": {
    "ids": [
     "b",
     "d",
     "f"
    ]
   },
   "options": [
    {
     "id": "a",
     "text": "The diode always has exactly 0.7 V across it",
     "correct": false,
     "rationale": "The Shockley model lets the voltage vary with current."
    },
    {
     "id": "b",
     "text": "Forward current changes rapidly with small voltage changes",
     "correct": true
    },
    {
     "id": "c",
     "text": "The diode never conducts",
     "correct": false,
     "rationale": "The model conducts in forward bias."
    },
    {
     "id": "d",
     "text": "The diode voltage depends slightly on the current",
     "correct": true
    },
    {
     "id": "e",
     "text": "The diode has no dependence on temperature",
     "correct": false,
     "rationale": "Both VT and IS depend on temperature in the model."
    },
    {
     "id": "f",
     "text": "The small-signal resistance depends on the bias current",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The diode always has exactly 0.7 V across it",
     "misconception": "Describes CVD.",
     "rationale": "The Shockley model lets the voltage vary with current."
    },
    {
     "id": "c",
     "text": "The diode never conducts",
     "misconception": "False.",
     "rationale": "The model conducts in forward bias."
    },
    {
     "id": "e",
     "text": "The diode has no dependence on temperature",
     "misconception": "Ignores VT and IS.",
     "rationale": "Both VT and IS depend on temperature in the model."
    }
   ],
   "explanation": "The exponential law gives the correct local slope: the voltage depends on current, and the small-signal resistance falls as current rises. These are what the simpler models lose.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-05.html",
     "label": "Lesson 5 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-05.html",
     "section": "Diode circuit models"
    }
   ]
  },
  {
   "id": "gr1-ss-001",
   "type": "choice",
   "topic": "Small-signal diode model and regulation",
   "objective": "State the idea of small-signal analysis",
   "prompt": "What is the idea behind the small-signal diode model?",
   "answer": {
    "id": "a",
    "text": "For small signals around a DC operating point, the exponential curve is approximately a straight line"
   },
   "options": [
    {
     "id": "a",
     "text": "For small signals around a DC operating point, the exponential curve is approximately a straight line",
     "correct": true
    },
    {
     "id": "b",
     "text": "The diode is replaced by an open circuit",
     "correct": false,
     "rationale": "The diode stays but is replaced by a resistor."
    },
    {
     "id": "c",
     "text": "The diode is replaced by a 0.7 V source for the signal",
     "correct": false,
     "rationale": "A constant source has no signal response."
    },
    {
     "id": "d",
     "text": "The signal is assumed to be large",
     "correct": false,
     "rationale": "The linearization only holds for small signals."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "The diode is replaced by an open circuit",
     "misconception": "Drops the diode.",
     "rationale": "The diode stays but is replaced by a resistor."
    },
    {
     "id": "c",
     "text": "The diode is replaced by a 0.7 V source for the signal",
     "misconception": "Applies the DC model to the signal.",
     "rationale": "A constant source has no signal response."
    },
    {
     "id": "d",
     "text": "The signal is assumed to be large",
     "misconception": "Contradicts the model.",
     "rationale": "The linearization only holds for small signals."
    }
   ],
   "explanation": "Near a bias point the tangent to the exponential curve is a good approximation, so a small signal sees the diode as a resistance rd equal to the slope reciprocal.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-06.html",
     "label": "Lesson 6 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-05.html",
     "section": "Diode small-signal behavior"
    },
    {
     "file": "lesson-guides/lesson-06.html",
     "section": "B1 Diode bias and small-signal linearization"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr1/ss_diode.svg",
    "alt": "Small-signal circuit with the diode replaced by its dynamic resistance",
    "caption": "Small-signal diode circuit."
   }
  },
  {
   "id": "gr1-ss-002",
   "type": "choice",
   "topic": "Small-signal diode model and regulation",
   "objective": "Read the notation",
   "prompt": "In the notation vD = VD + vd, what does each term stand for?",
   "answer": {
    "id": "c",
    "text": "vD is the total instantaneous voltage, VD is the DC bias value and vd is the small signal"
   },
   "options": [
    {
     "id": "a",
     "text": "vD is the DC value and vd is the total",
     "correct": false,
     "rationale": "The capital-letter, capital-subscript symbol is the DC value."
    },
    {
     "id": "b",
     "text": "All three are DC quantities",
     "correct": false,
     "rationale": "Case distinguishes DC, signal and total."
    },
    {
     "id": "c",
     "text": "vD is the total instantaneous voltage, VD is the DC bias value and vd is the small signal",
     "correct": true
    },
    {
     "id": "d",
     "text": "vd is the supply voltage",
     "correct": false,
     "rationale": "The lowercase subscript marks a signal."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "vD is the DC value and vd is the total",
     "misconception": "Swaps the symbols.",
     "rationale": "The capital-letter, capital-subscript symbol is the DC value."
    },
    {
     "id": "b",
     "text": "All three are DC quantities",
     "misconception": "Ignores the notation.",
     "rationale": "Case distinguishes DC, signal and total."
    },
    {
     "id": "d",
     "text": "vd is the supply voltage",
     "misconception": "Misreads the subscript.",
     "rationale": "The lowercase subscript marks a signal."
    }
   ],
   "explanation": "The course notation is: lowercase letter with uppercase subscript for the total instantaneous value, uppercase with uppercase for DC, and lowercase with lowercase for the small signal.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-06.html",
     "label": "Lesson 6 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-06.html",
     "section": "Small-signal notation"
    },
    {
     "file": "equation-sheets/sheet-1.html",
     "section": "Sections 4, 6-8"
    }
   ]
  },
  {
   "id": "gr1-ss-003",
   "type": "choice",
   "topic": "Small-signal diode model and regulation",
   "objective": "Give the dynamic resistance dependence",
   "prompt": "How does the diode small-signal resistance rd change as the DC bias current ID increases?",
   "answer": {
    "id": "a",
    "text": "It decreases, because rd = n·VT/ID"
   },
   "options": [
    {
     "id": "a",
     "text": "It decreases, because rd = n·VT/ID",
     "correct": true
    },
    {
     "id": "b",
     "text": "It increases in proportion to ID",
     "correct": false,
     "rationale": "rd is inversely proportional to the bias current."
    },
    {
     "id": "c",
     "text": "It stays at 0.7 ohms",
     "correct": false,
     "rationale": "0.7 is a voltage, and rd depends on bias."
    },
    {
     "id": "d",
     "text": "It does not depend on bias",
     "correct": false,
     "rationale": "The slope of the exponential changes with the operating point."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "It increases in proportion to ID",
     "misconception": "Inverts the dependence.",
     "rationale": "rd is inversely proportional to the bias current."
    },
    {
     "id": "c",
     "text": "It stays at 0.7 ohms",
     "misconception": "Mixes up units.",
     "rationale": "0.7 is a voltage, and rd depends on bias."
    },
    {
     "id": "d",
     "text": "It does not depend on bias",
     "misconception": "Treats rd as constant.",
     "rationale": "The slope of the exponential changes with the operating point."
    }
   ],
   "explanation": "The tangent to the exponential becomes steeper at higher current. rd = n·VT/ID is the reciprocal of that slope, so it falls as ID rises.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-06.html",
     "label": "Lesson 6 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-06.html",
     "section": "Dynamic resistance"
    },
    {
     "file": "equation-sheets/sheet-1.html",
     "section": "Sections 4, 6-8"
    }
   ]
  },
  {
   "id": "gr1-ss-004",
   "type": "choice",
   "topic": "Small-signal diode model and regulation",
   "objective": "Check the validity limit",
   "prompt": "When is the linear small-signal diode model valid?",
   "answer": {
    "id": "c",
    "text": "When the signal amplitude vd is small, about 5 mV times n or less"
   },
   "options": [
    {
     "id": "a",
     "text": "For any signal amplitude",
     "correct": false,
     "rationale": "A large signal exposes the exponential curvature."
    },
    {
     "id": "b",
     "text": "Only when the diode is off",
     "correct": false,
     "rationale": "The model is for a conducting diode with a bias current."
    },
    {
     "id": "c",
     "text": "When the signal amplitude vd is small, about 5 mV times n or less",
     "correct": true
    },
    {
     "id": "d",
     "text": "Only for signals larger than 1 V",
     "correct": false,
     "rationale": "The model needs a small signal."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "For any signal amplitude",
     "misconception": "Ignores nonlinearity.",
     "rationale": "A large signal exposes the exponential curvature."
    },
    {
     "id": "b",
     "text": "Only when the diode is off",
     "misconception": "Misplaces the bias.",
     "rationale": "The model is for a conducting diode with a bias current."
    },
    {
     "id": "d",
     "text": "Only for signals larger than 1 V",
     "misconception": "Reverses the condition.",
     "rationale": "The model needs a small signal."
    }
   ],
   "explanation": "The exponential departs from its tangent for larger swings. The equation sheet gives a rule of thumb: keep vd ≤ 5 mV × n for a reasonably linear response.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-06.html",
     "label": "Lesson 6 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-06.html",
     "section": "B1 Diode bias and small-signal linearization"
    },
    {
     "file": "equation-sheets/sheet-1.html",
     "section": "Sections 4, 6-8"
    }
   ]
  },
  {
   "id": "gr1-ss-005",
   "type": "choice",
   "topic": "Small-signal diode model and regulation",
   "objective": "Order DC and signal analysis",
   "prompt": "When analyzing a diode circuit with both a DC supply and a small signal, what should be done first?",
   "answer": {
    "id": "a",
    "text": "Find the DC bias point first, then use it to find rd for the signal analysis"
   },
   "options": [
    {
     "id": "a",
     "text": "Find the DC bias point first, then use it to find rd for the signal analysis",
     "correct": true
    },
    {
     "id": "b",
     "text": "Find the signal gain first",
     "correct": false,
     "rationale": "rd depends on the DC bias current, so the bias must be known first."
    },
    {
     "id": "c",
     "text": "Combine DC and signal sources into one and solve once",
     "correct": false,
     "rationale": "The linear model works for the signal only after the bias is set."
    },
    {
     "id": "d",
     "text": "Ignore the DC sources entirely",
     "correct": false,
     "rationale": "The DC bias sets the operating point and rd."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "Find the signal gain first",
     "misconception": "Reverses the order.",
     "rationale": "rd depends on the DC bias current, so the bias must be known first."
    },
    {
     "id": "c",
     "text": "Combine DC and signal sources into one and solve once",
     "misconception": "Mixes the two.",
     "rationale": "The linear model works for the signal only after the bias is set."
    },
    {
     "id": "d",
     "text": "Ignore the DC sources entirely",
     "misconception": "Drops the bias.",
     "rationale": "The DC bias sets the operating point and rd."
    }
   ],
   "explanation": "The small-signal model comes from linearizing about the DC bias, so the bias current ID is needed to get rd. Then the signal circuit replaces the diode with rd and turns the DC sources off.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-06.html",
     "label": "Lesson 6 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-06.html",
     "section": "B1 Diode bias and small-signal linearization"
    }
   ]
  },
  {
   "id": "gr1-ss-006",
   "type": "choice",
   "topic": "Small-signal diode model and regulation",
   "objective": "Turn off sources for the signal circuit",
   "prompt": "In the small-signal circuit, what is done with an independent DC voltage source?",
   "answer": {
    "id": "c",
    "text": "It is replaced by a short circuit, since it has no signal change"
   },
   "options": [
    {
     "id": "a",
     "text": "It is replaced by an open circuit",
     "correct": false,
     "rationale": "A voltage source with zero signal change is a short."
    },
    {
     "id": "b",
     "text": "It is kept at its DC value",
     "correct": false,
     "rationale": "DC values are accounted for by the bias and do not appear in the signal circuit."
    },
    {
     "id": "c",
     "text": "It is replaced by a short circuit, since it has no signal change",
     "correct": true
    },
    {
     "id": "d",
     "text": "It is replaced by a resistor of 0.7 ohms",
     "correct": false,
     "rationale": "A zero-signal ideal voltage source is a short."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "It is replaced by an open circuit",
     "misconception": "Opens the wrong source type.",
     "rationale": "A voltage source with zero signal change is a short."
    },
    {
     "id": "b",
     "text": "It is kept at its DC value",
     "misconception": "Keeps the DC bias.",
     "rationale": "DC values are accounted for by the bias and do not appear in the signal circuit."
    },
    {
     "id": "d",
     "text": "It is replaced by a resistor of 0.7 ohms",
     "misconception": "Invents a replacement.",
     "rationale": "A zero-signal ideal voltage source is a short."
    }
   ],
   "explanation": "In the signal circuit every DC source is set to zero signal: a DC voltage source becomes a short, and a DC current source becomes an open.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-06.html",
     "label": "Lesson 6 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-06.html",
     "section": "B2 Diode-string regulation"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr1/ss_diode.svg",
    "alt": "Small-signal circuit with the diode replaced by its dynamic resistance",
    "caption": "Small-signal diode circuit."
   }
  },
  {
   "id": "gr1-ss-007",
   "type": "choice",
   "topic": "Small-signal diode model and regulation",
   "objective": "Define line regulation",
   "prompt": "What does line regulation measure for a voltage regulator?",
   "answer": {
    "id": "a",
    "text": "How much the output changes for a change in the input voltage"
   },
   "options": [
    {
     "id": "a",
     "text": "How much the output changes for a change in the input voltage",
     "correct": true
    },
    {
     "id": "b",
     "text": "How much the output changes when the load changes",
     "correct": false,
     "rationale": "Line regulation is about input changes."
    },
    {
     "id": "c",
     "text": "The power dissipated in the regulator",
     "correct": false,
     "rationale": "It is a ratio of voltage changes."
    },
    {
     "id": "d",
     "text": "The ripple in the load current",
     "correct": false,
     "rationale": "Line regulation is ΔVout/ΔVin."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "How much the output changes when the load changes",
     "misconception": "Describes load regulation.",
     "rationale": "Line regulation is about input changes."
    },
    {
     "id": "c",
     "text": "The power dissipated in the regulator",
     "misconception": "Confuses it with efficiency.",
     "rationale": "It is a ratio of voltage changes."
    },
    {
     "id": "d",
     "text": "The ripple in the load current",
     "misconception": "Names a different quantity.",
     "rationale": "Line regulation is ΔVout/ΔVin."
    }
   ],
   "explanation": "Line regulation is ΔVout/ΔVin. A good regulator has a small value, meaning the output barely moves when the input changes.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-06.html",
     "label": "Lesson 6 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-06.html",
     "section": "B2 Diode-string regulation"
    },
    {
     "file": "equation-sheets/sheet-1.html",
     "section": "Sections 4, 6-8"
    }
   ]
  },
  {
   "id": "gr1-ss-008",
   "type": "choice",
   "topic": "Small-signal diode model and regulation",
   "objective": "Explain how a diode string regulates",
   "prompt": "How does a string of forward-biased diodes regulate a load voltage?",
   "answer": {
    "id": "c",
    "text": "The voltage across each conducting diode changes only slightly with current, so the string holds a nearly constant voltage"
   },
   "options": [
    {
     "id": "a",
     "text": "The diodes store charge that is released to the load",
     "correct": false,
     "rationale": "The regulation is from the steep exponential, not stored energy."
    },
    {
     "id": "b",
     "text": "The diodes act as a large resistor that absorbs all variations",
     "correct": false,
     "rationale": "Their small-signal resistance is small; the voltage barely changes."
    },
    {
     "id": "c",
     "text": "The voltage across each conducting diode changes only slightly with current, so the string holds a nearly constant voltage",
     "correct": true
    },
    {
     "id": "d",
     "text": "The diodes amplify the input variations",
     "correct": false,
     "rationale": "Diodes have no gain."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The diodes store charge that is released to the load",
     "misconception": "Confuses it with a capacitor.",
     "rationale": "The regulation is from the steep exponential, not stored energy."
    },
    {
     "id": "b",
     "text": "The diodes act as a large resistor that absorbs all variations",
     "misconception": "Misreads their role.",
     "rationale": "Their small-signal resistance is small; the voltage barely changes."
    },
    {
     "id": "d",
     "text": "The diodes amplify the input variations",
     "misconception": "Thinks diodes amplify.",
     "rationale": "Diodes have no gain."
    }
   ],
   "explanation": "Because the current rises exponentially with voltage, a large change in current produces only a small change in diode voltage. A string of k diodes holds about k times the single-diode drop.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-06.html",
     "label": "Lesson 6 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-06.html",
     "section": "B2 Diode-string regulation"
    }
   ]
  },
  {
   "id": "gr1-ss-009",
   "type": "choice",
   "topic": "Small-signal diode model and regulation",
   "objective": "Explain the Zener regulator signal path",
   "prompt": "For small changes in the supply voltage, how does the Zener regulator reduce their effect on the output?",
   "answer": {
    "id": "a",
    "text": "The series resistor and the small Zener resistance rz form a divider that passes only a small fraction to the output"
   },
   "options": [
    {
     "id": "a",
     "text": "The series resistor and the small Zener resistance rz form a divider that passes only a small fraction to the output",
     "correct": true
    },
    {
     "id": "b",
     "text": "The Zener blocks the changes completely",
     "correct": false,
     "rationale": "A small fraction still appears at the output, set by rz."
    },
    {
     "id": "c",
     "text": "The Zener amplifies them",
     "correct": false,
     "rationale": "The divider ratio is below one."
    },
    {
     "id": "d",
     "text": "The changes pass unchanged because the Zener is a short",
     "correct": false,
     "rationale": "rz is small but nonzero; the divider ratio is rz/(R + rz)."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "The Zener blocks the changes completely",
     "misconception": "Treats it as ideal.",
     "rationale": "A small fraction still appears at the output, set by rz."
    },
    {
     "id": "c",
     "text": "The Zener amplifies them",
     "misconception": "False.",
     "rationale": "The divider ratio is below one."
    },
    {
     "id": "d",
     "text": "The changes pass unchanged because the Zener is a short",
     "misconception": "Treats rz as zero.",
     "rationale": "rz is small but nonzero; the divider ratio is rz/(R + rz)."
    }
   ],
   "explanation": "For the signal, the Zener is the small resistance rz to ground and the series resistor R is in series, so the output change is the input change times rz/(R + rz), a small fraction.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-06.html",
     "label": "Lesson 6 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-06.html",
     "section": "B3 Zener regulation"
    },
    {
     "file": "equation-sheets/sheet-1.html",
     "section": "Sections 4, 6-8"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr1/zener_reg.svg",
    "alt": "A Zener regulator: supply, series resistor, Zener diode in breakdown and a load in parallel with it",
    "caption": "Zener regulator."
   }
  },
  {
   "id": "gr1-ss-010",
   "type": "sequence",
   "topic": "Small-signal diode model and regulation",
   "objective": "Order the small-signal diode analysis",
   "prompt": "Put the steps of a small-signal analysis of a diode circuit in order.",
   "answer": {
    "ids": [
     "s1",
     "s2",
     "s3",
     "s4",
     "s5"
    ]
   },
   "steps": [
    {
     "id": "s1",
     "text": "Solve the DC circuit for the bias current ID"
    },
    {
     "id": "s2",
     "text": "Compute rd from the bias current"
    },
    {
     "id": "s3",
     "text": "Turn off the DC sources to form the signal circuit"
    },
    {
     "id": "s4",
     "text": "Replace the diode with rd and solve for the signal"
    },
    {
     "id": "s5",
     "text": "Check that the signal amplitude is small enough"
    }
   ],
   "distractors": [
    {
     "id": "d1",
     "text": "Compute rd before knowing the bias current",
     "misconception": "Skips the DC solution.",
     "rationale": "rd depends on ID, so the DC bias comes first."
    }
   ],
   "explanation": "DC first sets ID; rd = n·VT/ID follows; the DC sources are turned off; the diode becomes rd; and the result is valid only if vd stays small.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-06.html",
     "label": "Lesson 6 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-06.html",
     "section": "B1 Diode bias and small-signal linearization"
    }
   ]
  },
  {
   "id": "gr1-ss-011",
   "type": "true-false",
   "topic": "Small-signal diode model and regulation",
   "objective": "Check a regulator claim",
   "prompt": "True or false: The diode small-signal resistance rd depends on the DC bias current, so changing the bias current changes the signal gain of a circuit that uses it.",
   "answer": {
    "id": "true",
    "text": "True"
   },
   "options": [
    {
     "id": "true",
     "text": "True",
     "correct": true
    },
    {
     "id": "false",
     "text": "False",
     "correct": false,
     "rationale": "rd = n·VT/ID, so a different bias current gives a different rd and a different divider ratio."
    }
   ],
   "distractors": [
    {
     "id": "false",
     "text": "False",
     "misconception": "Treats rd as a fixed constant of the diode.",
     "rationale": "rd = n·VT/ID, so a different bias current gives a different rd and a different divider ratio."
    }
   ],
   "explanation": "The small-signal model uses the slope at the operating point. Because that slope changes with ID, any signal result that uses rd changes with the bias too.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-06.html",
     "label": "Lesson 6 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-06.html",
     "section": "Dynamic resistance"
    },
    {
     "file": "equation-sheets/sheet-1.html",
     "section": "Sections 4, 6-8"
    }
   ]
  },
  {
   "id": "gr1-mos-001",
   "type": "choice",
   "topic": "MOSFET structure and channel formation",
   "objective": "Name the terminals and their roles",
   "prompt": "Which statement correctly names the three main terminals of a MOSFET and what the gate does?",
   "answer": {
    "id": "d",
    "text": "Gate, drain and source; the gate voltage controls the current between drain and source"
   },
   "options": [
    {
     "id": "a",
     "text": "Base, collector and emitter; the base current controls the output",
     "correct": false,
     "rationale": "A MOSFET has gate, drain and source terminals."
    },
    {
     "id": "b",
     "text": "Anode, cathode and gate; the gate switches the diode",
     "correct": false,
     "rationale": "The MOSFET terminals are gate, drain and source."
    },
    {
     "id": "c",
     "text": "Gate, drain and source; the gate carries the load current",
     "correct": false,
     "rationale": "The gate is insulated and draws no DC current; it only controls the channel."
    },
    {
     "id": "d",
     "text": "Gate, drain and source; the gate voltage controls the current between drain and source",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Base, collector and emitter; the base current controls the output",
     "misconception": "Names BJT terminals.",
     "rationale": "A MOSFET has gate, drain and source terminals."
    },
    {
     "id": "b",
     "text": "Anode, cathode and gate; the gate switches the diode",
     "misconception": "Names thyristor-like terminals.",
     "rationale": "The MOSFET terminals are gate, drain and source."
    },
    {
     "id": "c",
     "text": "Gate, drain and source; the gate carries the load current",
     "misconception": "Misreads the gate.",
     "rationale": "The gate is insulated and draws no DC current; it only controls the channel."
    }
   ],
   "explanation": "The gate is separated from the channel by an oxide layer, so it draws no DC current. Its voltage creates and shapes the channel that carries current between drain and source.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-08.html",
     "label": "Lesson 8 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-08.html",
     "section": "B1 MOSFET structure and processing"
    },
    {
     "file": "equation-sheets/sheet-2.html",
     "section": "Sections 1-5"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr1/mos_struct.svg",
    "alt": "Cross-section of an n-channel MOSFET with source, gate, drain and the induced channel",
    "caption": "n-channel MOSFET structure."
   }
  },
  {
   "id": "gr1-mos-002",
   "type": "choice",
   "topic": "MOSFET structure and channel formation",
   "objective": "Explain how the channel forms",
   "prompt": "Why does a sufficiently positive gate voltage create a conducting channel in an n-channel enhancement MOSFET?",
   "answer": {
    "id": "b",
    "text": "The positive gate attracts electrons to the surface under the oxide, forming an n-type inversion layer between source and drain"
   },
   "options": [
    {
     "id": "a",
     "text": "It injects current from the gate into the substrate",
     "correct": false,
     "rationale": "The oxide blocks DC gate current; the effect is an electric field."
    },
    {
     "id": "b",
     "text": "The positive gate attracts electrons to the surface under the oxide, forming an n-type inversion layer between source and drain",
     "correct": true
    },
    {
     "id": "c",
     "text": "It heats the silicon and generates free holes",
     "correct": false,
     "rationale": "The channel is made of electrons attracted by the field."
    },
    {
     "id": "d",
     "text": "It melts the oxide",
     "correct": false,
     "rationale": "Normal operation does not alter the oxide."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "It injects current from the gate into the substrate",
     "misconception": "Thinks gate current flows.",
     "rationale": "The oxide blocks DC gate current; the effect is an electric field."
    },
    {
     "id": "c",
     "text": "It heats the silicon and generates free holes",
     "misconception": "Brings in heating.",
     "rationale": "The channel is made of electrons attracted by the field."
    },
    {
     "id": "d",
     "text": "It melts the oxide",
     "misconception": "Invents damage.",
     "rationale": "Normal operation does not alter the oxide."
    }
   ],
   "explanation": "The field from the positive gate repels holes and attracts electrons at the surface. Once enough electrons collect, the surface inverts to n-type and connects the n+ source and drain.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-08.html",
     "label": "Lesson 8 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-08.html",
     "section": "B2 Inversion and threshold"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr1/mos_struct.svg",
    "alt": "Cross-section of an n-channel MOSFET with source, gate, drain and the induced channel",
    "caption": "n-channel MOSFET structure."
   }
  },
  {
   "id": "gr1-mos-003",
   "type": "choice",
   "topic": "MOSFET structure and channel formation",
   "objective": "Define the threshold voltage",
   "prompt": "What is the threshold voltage Vt of an enhancement NMOS?",
   "answer": {
    "id": "d",
    "text": "The gate-source voltage at which enough electrons accumulate to form a conducting channel"
   },
   "options": [
    {
     "id": "a",
     "text": "The drain-source voltage that ends saturation",
     "correct": false,
     "rationale": "That boundary is the overdrive voltage."
    },
    {
     "id": "b",
     "text": "The maximum voltage the oxide can withstand",
     "correct": false,
     "rationale": "Vt is a turn-on voltage, not a rating."
    },
    {
     "id": "c",
     "text": "The supply voltage of the circuit",
     "correct": false,
     "rationale": "Vt is a device parameter."
    },
    {
     "id": "d",
     "text": "The gate-source voltage at which enough electrons accumulate to form a conducting channel",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The drain-source voltage that ends saturation",
     "misconception": "Confuses Vt with Vov.",
     "rationale": "That boundary is the overdrive voltage."
    },
    {
     "id": "b",
     "text": "The maximum voltage the oxide can withstand",
     "misconception": "Names a breakdown rating.",
     "rationale": "Vt is a turn-on voltage, not a rating."
    },
    {
     "id": "c",
     "text": "The supply voltage of the circuit",
     "misconception": "Names VDD.",
     "rationale": "Vt is a device parameter."
    }
   ],
   "explanation": "Below Vt there is no channel and no drain current. For an enhancement NMOS, Vt is positive, and a channel needs VGS above Vt.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-08.html",
     "label": "Lesson 8 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-08.html",
     "section": "B2 Inversion and threshold"
    },
    {
     "file": "equation-sheets/sheet-2.html",
     "section": "Sections 1-5"
    }
   ]
  },
  {
   "id": "gr1-mos-004",
   "type": "choice",
   "topic": "MOSFET structure and channel formation",
   "objective": "Define the overdrive voltage",
   "prompt": "What does the overdrive voltage Vov = VGS - Vt describe?",
   "answer": {
    "id": "b",
    "text": "How far the gate-source voltage is above the threshold, which sets the channel charge"
   },
   "options": [
    {
     "id": "a",
     "text": "How far the drain voltage is above the gate voltage",
     "correct": false,
     "rationale": "Vov involves VGS and Vt, not the drain."
    },
    {
     "id": "b",
     "text": "How far the gate-source voltage is above the threshold, which sets the channel charge",
     "correct": true
    },
    {
     "id": "c",
     "text": "The voltage at which the oxide breaks down",
     "correct": false,
     "rationale": "Vov is an operating quantity."
    },
    {
     "id": "d",
     "text": "The voltage drop across the source resistor",
     "correct": false,
     "rationale": "Vov is defined by VGS and Vt alone."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "How far the drain voltage is above the gate voltage",
     "misconception": "Misdefines the voltage.",
     "rationale": "Vov involves VGS and Vt, not the drain."
    },
    {
     "id": "c",
     "text": "The voltage at which the oxide breaks down",
     "misconception": "Names a rating.",
     "rationale": "Vov is an operating quantity."
    },
    {
     "id": "d",
     "text": "The voltage drop across the source resistor",
     "misconception": "Misreads Vov.",
     "rationale": "Vov is defined by VGS and Vt alone."
    }
   ],
   "explanation": "The channel charge is proportional to Cox·W·L·Vov, so Vov measures how strongly the channel is turned on. It also appears in the region boundaries and in the current formulas.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-08.html",
     "label": "Lesson 8 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-08.html",
     "section": "B2 Inversion and threshold"
    },
    {
     "file": "equation-sheets/sheet-2.html",
     "section": "Sections 1-5"
    }
   ]
  },
  {
   "id": "gr1-mos-005",
   "type": "choice",
   "topic": "MOSFET structure and channel formation",
   "objective": "Identify the parameters in the device constant",
   "prompt": "In Kn = k'n(W/L) with k'n = μnCox, which factor is chosen by the circuit designer?",
   "answer": {
    "id": "d",
    "text": "The aspect ratio W/L"
   },
   "options": [
    {
     "id": "a",
     "text": "The process parameter k'n",
     "correct": false,
     "rationale": "k'n is set by the manufacturing process."
    },
    {
     "id": "b",
     "text": "The electron mobility μn",
     "correct": false,
     "rationale": "Mobility is a material property."
    },
    {
     "id": "c",
     "text": "The oxide capacitance per unit area Cox",
     "correct": false,
     "rationale": "Cox is set by the oxide thickness, a process parameter."
    },
    {
     "id": "d",
     "text": "The aspect ratio W/L",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The process parameter k'n",
     "misconception": "Thinks the designer picks the process.",
     "rationale": "k'n is set by the manufacturing process."
    },
    {
     "id": "b",
     "text": "The electron mobility μn",
     "misconception": "Thinks mobility can be chosen.",
     "rationale": "Mobility is a material property."
    },
    {
     "id": "c",
     "text": "The oxide capacitance per unit area Cox",
     "misconception": "Thinks Cox is a design knob.",
     "rationale": "Cox is set by the oxide thickness, a process parameter."
    }
   ],
   "explanation": "The process fixes k'n = μnCox. The designer chooses the width and length of the transistor, so W/L is the primary sizing knob, as the equation sheet states.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-08.html",
     "label": "Lesson 8 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-08.html",
     "section": "B3 Channel charge and low-field current"
    },
    {
     "file": "equation-sheets/sheet-2.html",
     "section": "Sections 1-5"
    }
   ]
  },
  {
   "id": "gr1-mos-006",
   "type": "choice",
   "topic": "MOSFET structure and channel formation",
   "objective": "Describe the channel under small drain voltage",
   "prompt": "For a very small drain-source voltage, how does the MOSFET behave between drain and source?",
   "answer": {
    "id": "b",
    "text": "Like a voltage-controlled resistor whose value decreases as the overdrive increases"
   },
   "options": [
    {
     "id": "a",
     "text": "Like a fixed resistor that ignores the gate",
     "correct": false,
     "rationale": "The channel charge, and so the resistance, depends on Vov."
    },
    {
     "id": "b",
     "text": "Like a voltage-controlled resistor whose value decreases as the overdrive increases",
     "correct": true
    },
    {
     "id": "c",
     "text": "Like an open circuit",
     "correct": false,
     "rationale": "With a channel formed, current flows."
    },
    {
     "id": "d",
     "text": "Like a current source independent of VDS",
     "correct": false,
     "rationale": "Saturation requires a larger VDS."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Like a fixed resistor that ignores the gate",
     "misconception": "Ignores gate control.",
     "rationale": "The channel charge, and so the resistance, depends on Vov."
    },
    {
     "id": "c",
     "text": "Like an open circuit",
     "misconception": "Describes cutoff.",
     "rationale": "With a channel formed, current flows."
    },
    {
     "id": "d",
     "text": "Like a current source independent of VDS",
     "misconception": "Describes saturation.",
     "rationale": "Saturation requires a larger VDS."
    }
   ],
   "explanation": "With small VDS the channel is nearly uniform and current is proportional to VDS and Vov. The device is a resistor 1/(Kn·Vov), controlled by the gate.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-08.html",
     "label": "Lesson 8 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-08.html",
     "section": "B3 Channel charge and low-field current"
    },
    {
     "file": "equation-sheets/sheet-2.html",
     "section": "Sections 1-5"
    }
   ]
  },
  {
   "id": "gr1-mos-007",
   "type": "true-false",
   "topic": "MOSFET structure and channel formation",
   "objective": "Check the gate current statement",
   "prompt": "True or false: In normal DC operation the gate of a MOSFET draws essentially no current because of the oxide.",
   "answer": {
    "id": "true",
    "text": "True"
   },
   "options": [
    {
     "id": "true",
     "text": "True",
     "correct": true
    },
    {
     "id": "false",
     "text": "False",
     "correct": false,
     "rationale": "The oxide is an insulator, so the gate is a capacitor and carries no DC current."
    }
   ],
   "distractors": [
    {
     "id": "false",
     "text": "False",
     "misconception": "Expects gate current like a BJT base.",
     "rationale": "The oxide is an insulator, so the gate is a capacitor and carries no DC current."
    }
   ],
   "explanation": "The gate and channel are separated by silicon dioxide, so only a charging current flows briefly when the gate voltage changes. This is why gate divider analysis ignores the gate.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-08.html",
     "label": "Lesson 8 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-08.html",
     "section": "B1 MOSFET structure and processing"
    }
   ]
  },
  {
   "id": "gr1-reg-001",
   "type": "choice",
   "topic": "Regions of operation and the I-V curves",
   "objective": "State the cutoff condition",
   "prompt": "In which region is an NMOS if VGS is below the threshold voltage?",
   "answer": {
    "id": "c",
    "text": "Cutoff, with zero drain current"
   },
   "options": [
    {
     "id": "a",
     "text": "Triode, with a small current",
     "correct": false,
     "rationale": "Without a channel there is no current."
    },
    {
     "id": "b",
     "text": "Saturation, with constant current",
     "correct": false,
     "rationale": "Saturation needs VGS above Vt."
    },
    {
     "id": "c",
     "text": "Cutoff, with zero drain current",
     "correct": true
    },
    {
     "id": "d",
     "text": "Breakdown",
     "correct": false,
     "rationale": "Breakdown is a separate high-voltage effect."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Triode, with a small current",
     "misconception": "Assumes some current flows.",
     "rationale": "Without a channel there is no current."
    },
    {
     "id": "b",
     "text": "Saturation, with constant current",
     "misconception": "Confuses the regions.",
     "rationale": "Saturation needs VGS above Vt."
    },
    {
     "id": "d",
     "text": "Breakdown",
     "misconception": "Confuses cutoff with breakdown.",
     "rationale": "Breakdown is a separate high-voltage effect."
    }
   ],
   "explanation": "With VGS < Vt no inversion channel forms, so no conducting path connects drain and source and ID is zero.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-09.html",
     "label": "Lesson 9 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-08.html",
     "section": "B4 Triode and saturation operation"
    },
    {
     "file": "lesson-guides/lesson-09.html",
     "section": "Review cutoff, triode and saturation"
    },
    {
     "file": "equation-sheets/sheet-2.html",
     "section": "Sections 1-5"
    }
   ]
  },
  {
   "id": "gr1-reg-002",
   "type": "choice",
   "topic": "Regions of operation and the I-V curves",
   "objective": "State the triode condition",
   "prompt": "Which pair of conditions places an NMOS in the triode region?",
   "answer": {
    "id": "a",
    "text": "VGS above Vt and VDS below the overdrive voltage"
   },
   "options": [
    {
     "id": "a",
     "text": "VGS above Vt and VDS below the overdrive voltage",
     "correct": true
    },
    {
     "id": "b",
     "text": "VGS above Vt and VDS above the overdrive voltage",
     "correct": false,
     "rationale": "Triode has a smaller VDS than Vov."
    },
    {
     "id": "c",
     "text": "VGS below Vt and any VDS",
     "correct": false,
     "rationale": "A channel is needed for triode."
    },
    {
     "id": "d",
     "text": "VGS equal to VDS",
     "correct": false,
     "rationale": "The comparison is between VDS and Vov."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "VGS above Vt and VDS above the overdrive voltage",
     "misconception": "Describes saturation.",
     "rationale": "Triode has a smaller VDS than Vov."
    },
    {
     "id": "c",
     "text": "VGS below Vt and any VDS",
     "misconception": "Describes cutoff.",
     "rationale": "A channel is needed for triode."
    },
    {
     "id": "d",
     "text": "VGS equal to VDS",
     "misconception": "Invents a condition.",
     "rationale": "The comparison is between VDS and Vov."
    }
   ],
   "explanation": "In triode the channel extends all the way from source to drain, which needs VGS > Vt and VDS < VGS - Vt = Vov. The current rises with both Vov and VDS.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-09.html",
     "label": "Lesson 9 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-09.html",
     "section": "Review cutoff, triode and saturation"
    },
    {
     "file": "equation-sheets/sheet-2.html",
     "section": "Sections 1-5"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr1/nmos_regions.svg",
    "alt": "An NMOS with gate, drain and source and the voltages VGS and VDS marked",
    "caption": "NMOS terminals and voltages."
   }
  },
  {
   "id": "gr1-reg-003",
   "type": "choice",
   "topic": "Regions of operation and the I-V curves",
   "objective": "State the saturation condition",
   "prompt": "Which pair of conditions places an NMOS in saturation?",
   "answer": {
    "id": "c",
    "text": "VGS above Vt and VDS at least equal to the overdrive voltage"
   },
   "options": [
    {
     "id": "a",
     "text": "VGS above Vt and VDS below the overdrive voltage",
     "correct": false,
     "rationale": "Saturation needs VDS ≥ Vov."
    },
    {
     "id": "b",
     "text": "VGS below Vt and VDS large",
     "correct": false,
     "rationale": "No channel means no current regardless of VDS."
    },
    {
     "id": "c",
     "text": "VGS above Vt and VDS at least equal to the overdrive voltage",
     "correct": true
    },
    {
     "id": "d",
     "text": "VDS above Vt, regardless of VGS",
     "correct": false,
     "rationale": "The test uses VGS - Vt, not Vt."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "VGS above Vt and VDS below the overdrive voltage",
     "misconception": "Describes triode.",
     "rationale": "Saturation needs VDS ≥ Vov."
    },
    {
     "id": "b",
     "text": "VGS below Vt and VDS large",
     "misconception": "Describes cutoff.",
     "rationale": "No channel means no current regardless of VDS."
    },
    {
     "id": "d",
     "text": "VDS above Vt, regardless of VGS",
     "misconception": "Compares VDS with Vt instead of Vov.",
     "rationale": "The test uses VGS - Vt, not Vt."
    }
   ],
   "explanation": "Saturation is the pinched-off channel: the drain end of the channel has no inversion charge when VGD ≤ Vt, equivalent to VDS ≥ Vov. Current then no longer grows with VDS.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-09.html",
     "label": "Lesson 9 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-08.html",
     "section": "B4 Triode and saturation operation"
    },
    {
     "file": "equation-sheets/sheet-2.html",
     "section": "Sections 1-5"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr1/nmos_regions.svg",
    "alt": "An NMOS with gate, drain and source and the voltages VGS and VDS marked",
    "caption": "NMOS terminals and voltages."
   }
  },
  {
   "id": "gr1-reg-004",
   "type": "choice",
   "topic": "Regions of operation and the I-V curves",
   "objective": "Interpret pinch-off",
   "prompt": "What physically happens at the drain end of the channel when the MOSFET enters saturation?",
   "answer": {
    "id": "a",
    "text": "The gate-to-channel voltage there falls below the threshold, so the channel pinches off"
   },
   "options": [
    {
     "id": "a",
     "text": "The gate-to-channel voltage there falls below the threshold, so the channel pinches off",
     "correct": true
    },
    {
     "id": "b",
     "text": "The channel gets thicker at the drain",
     "correct": false,
     "rationale": "The channel narrows toward the drain as VDS rises."
    },
    {
     "id": "c",
     "text": "The gate current starts flowing",
     "correct": false,
     "rationale": "The gate stays insulated."
    },
    {
     "id": "d",
     "text": "The source empties of electrons",
     "correct": false,
     "rationale": "The pinch-off is at the drain end."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "The channel gets thicker at the drain",
     "misconception": "Reverses the effect.",
     "rationale": "The channel narrows toward the drain as VDS rises."
    },
    {
     "id": "c",
     "text": "The gate current starts flowing",
     "misconception": "Invents a gate current.",
     "rationale": "The gate stays insulated."
    },
    {
     "id": "d",
     "text": "The source empties of electrons",
     "misconception": "Misplaces the effect.",
     "rationale": "The pinch-off is at the drain end."
    }
   ],
   "explanation": "The voltage between gate and channel decreases toward the drain. When VGD drops to Vt the inversion charge at the drain end goes to zero (pinch-off), and the current is set by the channel up to that point.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-08.html",
     "label": "Lesson 8 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-08.html",
     "section": "B4 Triode and saturation operation"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr1/mos_struct.svg",
    "alt": "Cross-section of an n-channel MOSFET with source, gate, drain and the induced channel",
    "caption": "n-channel MOSFET structure."
   }
  },
  {
   "id": "gr1-reg-005",
   "type": "choice",
   "topic": "Regions of operation and the I-V curves",
   "objective": "Compare the dependence of current on VDS",
   "prompt": "In the ideal saturation region, how does the drain current depend on the drain-source voltage?",
   "answer": {
    "id": "c",
    "text": "It does not; it is set by the gate overdrive"
   },
   "options": [
    {
     "id": "a",
     "text": "It rises linearly with VDS",
     "correct": false,
     "rationale": "In saturation the curves are flat in the ideal model."
    },
    {
     "id": "b",
     "text": "It falls with VDS",
     "correct": false,
     "rationale": "The ideal current is independent of VDS."
    },
    {
     "id": "c",
     "text": "It does not; it is set by the gate overdrive",
     "correct": true
    },
    {
     "id": "d",
     "text": "It rises as VDS squared",
     "correct": false,
     "rationale": "The square law is in Vov, not VDS."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "It rises linearly with VDS",
     "misconception": "Describes triode.",
     "rationale": "In saturation the curves are flat in the ideal model."
    },
    {
     "id": "b",
     "text": "It falls with VDS",
     "misconception": "Reverses the trend.",
     "rationale": "The ideal current is independent of VDS."
    },
    {
     "id": "d",
     "text": "It rises as VDS squared",
     "misconception": "Mixes up the gate dependence.",
     "rationale": "The square law is in Vov, not VDS."
    }
   ],
   "explanation": "Ideal saturation current is ½·Kn·Vov². It depends only on the gate voltage, which is why the MOSFET acts as a voltage-controlled current source here.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-09.html",
     "label": "Lesson 9 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-09.html",
     "section": "Review cutoff, triode and saturation"
    },
    {
     "file": "equation-sheets/sheet-2.html",
     "section": "Sections 1-5"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr1/mos_iv.svg",
    "alt": "Drain current versus drain-source voltage for several gate voltages",
    "caption": "MOSFET family of curves."
   }
  },
  {
   "id": "gr1-reg-006",
   "type": "choice",
   "topic": "Regions of operation and the I-V curves",
   "objective": "Say how current depends on overdrive",
   "prompt": "In saturation, how does the drain current change if the overdrive voltage is doubled?",
   "answer": {
    "id": "a",
    "text": "It increases by a factor of four, since the current varies with the square of the overdrive"
   },
   "options": [
    {
     "id": "a",
     "text": "It increases by a factor of four, since the current varies with the square of the overdrive",
     "correct": true
    },
    {
     "id": "b",
     "text": "It doubles",
     "correct": false,
     "rationale": "The saturation current is quadratic in Vov."
    },
    {
     "id": "c",
     "text": "It stays the same",
     "correct": false,
     "rationale": "Vov sets the current in saturation."
    },
    {
     "id": "d",
     "text": "It increases by a factor of eight",
     "correct": false,
     "rationale": "The law is square, not cube."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "It doubles",
     "misconception": "Assumes a linear law.",
     "rationale": "The saturation current is quadratic in Vov."
    },
    {
     "id": "c",
     "text": "It stays the same",
     "misconception": "Ignores the gate.",
     "rationale": "Vov sets the current in saturation."
    },
    {
     "id": "d",
     "text": "It increases by a factor of eight",
     "misconception": "Uses a cubic law.",
     "rationale": "The law is square, not cube."
    }
   ],
   "explanation": "Since ID = ½·Kn·Vov², doubling Vov multiplies ID by 2² = 4. This square-law dependence is what makes the MOSFET a nonlinear device.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-09.html",
     "label": "Lesson 9 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-09.html",
     "section": "Review cutoff, triode and saturation"
    },
    {
     "file": "equation-sheets/sheet-2.html",
     "section": "Sections 1-5"
    }
   ]
  },
  {
   "id": "gr1-reg-007",
   "type": "choice",
   "topic": "Regions of operation and the I-V curves",
   "objective": "Explain channel-length modulation",
   "prompt": "What is channel-length modulation?",
   "answer": {
    "id": "c",
    "text": "The slight shortening of the effective channel as VDS rises in saturation, which makes the drain current rise a little"
   },
   "options": [
    {
     "id": "a",
     "text": "A change in the oxide thickness with temperature",
     "correct": false,
     "rationale": "It concerns channel length, not oxide."
    },
    {
     "id": "b",
     "text": "The gate current rising with VDS",
     "correct": false,
     "rationale": "The effect is in the channel."
    },
    {
     "id": "c",
     "text": "The slight shortening of the effective channel as VDS rises in saturation, which makes the drain current rise a little",
     "correct": true
    },
    {
     "id": "d",
     "text": "The threshold voltage rising with VGS",
     "correct": false,
     "rationale": "The effect is on the effective channel length."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "A change in the oxide thickness with temperature",
     "misconception": "Names an unrelated effect.",
     "rationale": "It concerns channel length, not oxide."
    },
    {
     "id": "b",
     "text": "The gate current rising with VDS",
     "misconception": "Invents gate current.",
     "rationale": "The effect is in the channel."
    },
    {
     "id": "d",
     "text": "The threshold voltage rising with VGS",
     "misconception": "Confuses it with threshold shifts.",
     "rationale": "The effect is on the effective channel length."
    }
   ],
   "explanation": "As VDS increases the pinch-off point moves toward the source and the channel shortens. Since ID is inversely proportional to L, the current increases slightly. The model is ID = ½Kn Vov²(1 + λVDS).",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-09.html",
     "label": "Lesson 9 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-09.html",
     "section": "Channel-length modulation"
    },
    {
     "file": "equation-sheets/sheet-2.html",
     "section": "Sections 1-5"
    }
   ]
  },
  {
   "id": "gr1-reg-008",
   "type": "choice",
   "topic": "Regions of operation and the I-V curves",
   "objective": "Interpret the output resistance",
   "prompt": "What does the finite output resistance ro = VA/ID of a saturated MOSFET represent?",
   "answer": {
    "id": "a",
    "text": "The tilt of the saturation curve: how much ID changes with VDS"
   },
   "options": [
    {
     "id": "a",
     "text": "The tilt of the saturation curve: how much ID changes with VDS",
     "correct": true
    },
    {
     "id": "b",
     "text": "The resistance between gate and source",
     "correct": false,
     "rationale": "The gate resistance is essentially infinite."
    },
    {
     "id": "c",
     "text": "The resistance of the oxide",
     "correct": false,
     "rationale": "ro describes the drain current response to VDS."
    },
    {
     "id": "d",
     "text": "The on-resistance in the deep triode region",
     "correct": false,
     "rationale": "rDS applies in triode; ro applies in saturation."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "The resistance between gate and source",
     "misconception": "Looks at the wrong terminals.",
     "rationale": "The gate resistance is essentially infinite."
    },
    {
     "id": "c",
     "text": "The resistance of the oxide",
     "misconception": "Names the oxide.",
     "rationale": "ro describes the drain current response to VDS."
    },
    {
     "id": "d",
     "text": "The on-resistance in the deep triode region",
     "misconception": "Names rDS.",
     "rationale": "rDS applies in triode; ro applies in saturation."
    }
   ],
   "explanation": "With channel-length modulation the saturation curves tilt upward. The reciprocal slope is ro = VA/ID = 1/(λ·ID); with λ = 0 the curves are flat and ro is infinite.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-09.html",
     "label": "Lesson 9 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-09.html",
     "section": "Channel-length modulation"
    },
    {
     "file": "equation-sheets/sheet-2.html",
     "section": "Sections 1-5"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr1/mos_iv.svg",
    "alt": "Drain current versus drain-source voltage for several gate voltages",
    "caption": "MOSFET family of curves."
   }
  },
  {
   "id": "gr1-reg-009",
   "type": "choice",
   "topic": "Regions of operation and the I-V curves",
   "objective": "Interpret the Early voltage",
   "prompt": "Graphically, what is the Early voltage VA?",
   "answer": {
    "id": "c",
    "text": "The point on the negative VDS axis where the extrapolated saturation curves meet"
   },
   "options": [
    {
     "id": "a",
     "text": "The VDS where the transistor enters saturation",
     "correct": false,
     "rationale": "VA comes from extrapolating the slope, not from the boundary."
    },
    {
     "id": "b",
     "text": "The maximum gate voltage",
     "correct": false,
     "rationale": "VA is a curve-fit parameter."
    },
    {
     "id": "c",
     "text": "The point on the negative VDS axis where the extrapolated saturation curves meet",
     "correct": true
    },
    {
     "id": "d",
     "text": "The threshold voltage",
     "correct": false,
     "rationale": "VA is unrelated to the gate threshold."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The VDS where the transistor enters saturation",
     "misconception": "Confuses VA with Vov.",
     "rationale": "VA comes from extrapolating the slope, not from the boundary."
    },
    {
     "id": "b",
     "text": "The maximum gate voltage",
     "misconception": "Names a rating.",
     "rationale": "VA is a curve-fit parameter."
    },
    {
     "id": "d",
     "text": "The threshold voltage",
     "misconception": "Names Vt.",
     "rationale": "VA is unrelated to the gate threshold."
    }
   ],
   "explanation": "Extending the tilted saturation lines backward, they cross the VDS axis at -VA. A larger VA means flatter curves and larger ro.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-09.html",
     "label": "Lesson 9 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-09.html",
     "section": "Channel-length modulation"
    },
    {
     "file": "equation-sheets/sheet-2.html",
     "section": "Sections 1-5"
    }
   ]
  },
  {
   "id": "gr1-reg-010",
   "type": "choice",
   "topic": "Regions of operation and the I-V curves",
   "objective": "Identify the deep triode model",
   "prompt": "For a very small VDS (much less than Vov), how can the MOSFET be modeled?",
   "answer": {
    "id": "a",
    "text": "As a resistor rDS = 1/(Kn·Vov) controlled by the gate"
   },
   "options": [
    {
     "id": "a",
     "text": "As a resistor rDS = 1/(Kn·Vov) controlled by the gate",
     "correct": true
    },
    {
     "id": "b",
     "text": "As a fixed 1 kilohm resistor",
     "correct": false,
     "rationale": "The value changes with Vov."
    },
    {
     "id": "c",
     "text": "As a current source of ½Kn Vov²",
     "correct": false,
     "rationale": "That model needs VDS ≥ Vov."
    },
    {
     "id": "d",
     "text": "As an open circuit",
     "correct": false,
     "rationale": "With a channel the device conducts."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "As a fixed 1 kilohm resistor",
     "misconception": "Treats the resistance as fixed.",
     "rationale": "The value changes with Vov."
    },
    {
     "id": "c",
     "text": "As a current source of ½Kn Vov²",
     "misconception": "Gives the saturation model.",
     "rationale": "That model needs VDS ≥ Vov."
    },
    {
     "id": "d",
     "text": "As an open circuit",
     "misconception": "Describes cutoff.",
     "rationale": "With a channel the device conducts."
    }
   ],
   "explanation": "Dropping the squared term in the triode equation gives ID ≈ Kn·Vov·VDS, so rDS = VDS/ID = 1/(Kn·Vov). The gate adjusts this resistance.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-09.html",
     "label": "Lesson 9 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-08.html",
     "section": "B3 Channel charge and low-field current"
    },
    {
     "file": "equation-sheets/sheet-2.html",
     "section": "Sections 1-5"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr1/mos_iv.svg",
    "alt": "Drain current versus drain-source voltage for several gate voltages",
    "caption": "MOSFET family of curves."
   }
  },
  {
   "id": "gr1-reg-011",
   "type": "sequence",
   "topic": "Regions of operation and the I-V curves",
   "objective": "Order the region decision",
   "prompt": "Put the decisions in order for finding which region an NMOS is in.",
   "answer": {
    "ids": [
     "s1",
     "s2",
     "s3",
     "s4"
    ]
   },
   "steps": [
    {
     "id": "s1",
     "text": "Compare VGS with Vt: if below, it is in cutoff"
    },
    {
     "id": "s2",
     "text": "Otherwise compute the overdrive voltage Vov = VGS - Vt"
    },
    {
     "id": "s3",
     "text": "Compare VDS with Vov"
    },
    {
     "id": "s4",
     "text": "If VDS is at least Vov, it is in saturation; otherwise it is in triode"
    }
   ],
   "distractors": [
    {
     "id": "d1",
     "text": "Compare VDS with Vt first",
     "misconception": "Uses the wrong reference.",
     "rationale": "The comparison is with Vov, after checking cutoff."
    }
   ],
   "explanation": "Check cutoff first, then form Vov, then compare VDS with Vov to separate saturation from triode.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-09.html",
     "label": "Lesson 9 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-09.html",
     "section": "Analysis of modes of operation"
    },
    {
     "file": "equation-sheets/sheet-2.html",
     "section": "Sections 1-5"
    }
   ]
  },
  {
   "id": "gr1-reg-012",
   "type": "multi-select",
   "topic": "Regions of operation and the I-V curves",
   "objective": "Select the facts about saturation",
   "prompt": "Select all statements that are true for an NMOS in saturation (ideal, λ = 0).",
   "answer": {
    "ids": [
     "b",
     "d",
     "f"
    ]
   },
   "options": [
    {
     "id": "a",
     "text": "The drain current is proportional to VDS",
     "correct": false,
     "rationale": "In saturation the current is flat in VDS."
    },
    {
     "id": "b",
     "text": "The channel is pinched off at the drain end",
     "correct": true
    },
    {
     "id": "c",
     "text": "The device behaves like a resistor of 1/(Kn Vov)",
     "correct": false,
     "rationale": "The resistor model is for small VDS."
    },
    {
     "id": "d",
     "text": "The drain current is independent of VDS",
     "correct": true
    },
    {
     "id": "e",
     "text": "No channel exists",
     "correct": false,
     "rationale": "A channel exists, pinched at the drain end."
    },
    {
     "id": "f",
     "text": "The device acts like a voltage-controlled current source",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The drain current is proportional to VDS",
     "misconception": "Describes triode.",
     "rationale": "In saturation the current is flat in VDS."
    },
    {
     "id": "c",
     "text": "The device behaves like a resistor of 1/(Kn Vov)",
     "misconception": "Describes deep triode.",
     "rationale": "The resistor model is for small VDS."
    },
    {
     "id": "e",
     "text": "No channel exists",
     "misconception": "Describes cutoff.",
     "rationale": "A channel exists, pinched at the drain end."
    }
   ],
   "explanation": "Saturation means VGS > Vt and VDS ≥ Vov: a pinched-off channel carries a current set by the gate, so the device behaves as a voltage-controlled current source.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-09.html",
     "label": "Lesson 9 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-09.html",
     "section": "Review cutoff, triode and saturation"
    },
    {
     "file": "equation-sheets/sheet-2.html",
     "section": "Sections 1-5"
    }
   ]
  },
  {
   "id": "gr1-pmos-001",
   "type": "choice",
   "topic": "PMOS, symbols and circuit models",
   "objective": "Describe PMOS operation",
   "prompt": "How does a p-channel MOSFET differ from an n-channel MOSFET?",
   "answer": {
    "id": "c",
    "text": "It forms a hole channel when VGS is negative, and conducts with a negative VDS"
   },
   "options": [
    {
     "id": "a",
     "text": "It forms an electron channel when VGS is positive",
     "correct": false,
     "rationale": "PMOS needs the opposite polarities."
    },
    {
     "id": "b",
     "text": "It has no gate",
     "correct": false,
     "rationale": "It has gate, source and drain like an NMOS."
    },
    {
     "id": "c",
     "text": "It forms a hole channel when VGS is negative, and conducts with a negative VDS",
     "correct": true
    },
    {
     "id": "d",
     "text": "It conducts with no gate voltage",
     "correct": false,
     "rationale": "An enhancement PMOS needs a negative VGS."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "It forms an electron channel when VGS is positive",
     "misconception": "Describes NMOS.",
     "rationale": "PMOS needs the opposite polarities."
    },
    {
     "id": "b",
     "text": "It has no gate",
     "misconception": "False.",
     "rationale": "It has gate, source and drain like an NMOS."
    },
    {
     "id": "d",
     "text": "It conducts with no gate voltage",
     "misconception": "Describes a depletion device.",
     "rationale": "An enhancement PMOS needs a negative VGS."
    }
   ],
   "explanation": "A PMOS has an n-type substrate and p+ source and drain. A negative gate-source voltage induces a p-type channel of holes, and current flows with negative VDS.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-09.html",
     "label": "Lesson 9 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-09.html",
     "section": "P-channel MOSFET"
    }
   ]
  },
  {
   "id": "gr1-pmos-002",
   "type": "choice",
   "topic": "PMOS, symbols and circuit models",
   "objective": "Compare NMOS and PMOS speed",
   "prompt": "Why are NMOS devices usually preferred over PMOS for the same size in most circuits?",
   "answer": {
    "id": "a",
    "text": "Electron mobility is larger than hole mobility, so the NMOS gives more current for the same geometry"
   },
   "options": [
    {
     "id": "a",
     "text": "Electron mobility is larger than hole mobility, so the NMOS gives more current for the same geometry",
     "correct": true
    },
    {
     "id": "b",
     "text": "Holes move faster than electrons",
     "correct": false,
     "rationale": "Electron mobility is the larger one."
    },
    {
     "id": "c",
     "text": "PMOS devices have no threshold voltage",
     "correct": false,
     "rationale": "PMOS has a negative threshold voltage."
    },
    {
     "id": "d",
     "text": "NMOS devices need no gate",
     "correct": false,
     "rationale": "All MOSFETs have a gate."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "Holes move faster than electrons",
     "misconception": "Reverses the mobilities.",
     "rationale": "Electron mobility is the larger one."
    },
    {
     "id": "c",
     "text": "PMOS devices have no threshold voltage",
     "misconception": "False.",
     "rationale": "PMOS has a negative threshold voltage."
    },
    {
     "id": "d",
     "text": "NMOS devices need no gate",
     "misconception": "False.",
     "rationale": "All MOSFETs have a gate."
    }
   ],
   "explanation": "Because μn > μp, k'n is larger than k'p and an NMOS carries more current at the same W/L and overdrive.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-09.html",
     "label": "Lesson 9 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-09.html",
     "section": "P-channel MOSFET"
    }
   ]
  },
  {
   "id": "gr1-pmos-003",
   "type": "choice",
   "topic": "PMOS, symbols and circuit models",
   "objective": "Describe PMOS equations",
   "prompt": "How do the PMOS current equations compare with those of the NMOS?",
   "answer": {
    "id": "c",
    "text": "They have the same form, with VGS and VDS (and Vt) reversed in sign"
   },
   "options": [
    {
     "id": "a",
     "text": "They are completely different square-law equations",
     "correct": false,
     "rationale": "The form is the same with polarity reversals."
    },
    {
     "id": "b",
     "text": "They contain no overdrive term",
     "correct": false,
     "rationale": "The overdrive is VSG - |Vt|."
    },
    {
     "id": "c",
     "text": "They have the same form, with VGS and VDS (and Vt) reversed in sign",
     "correct": true
    },
    {
     "id": "d",
     "text": "They apply only in cutoff",
     "correct": false,
     "rationale": "They cover triode and saturation too."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "They are completely different square-law equations",
     "misconception": "Overstates the difference.",
     "rationale": "The form is the same with polarity reversals."
    },
    {
     "id": "b",
     "text": "They contain no overdrive term",
     "misconception": "False.",
     "rationale": "The overdrive is VSG - |Vt|."
    },
    {
     "id": "d",
     "text": "They apply only in cutoff",
     "misconception": "False.",
     "rationale": "They cover triode and saturation too."
    }
   ],
   "explanation": "The PMOS follows the same regions and formulas with voltages measured the other way: use VSG, VSD and |Vt| in place of VGS, VDS and Vt.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-09.html",
     "label": "Lesson 9 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-09.html",
     "section": "P-channel MOSFET"
    },
    {
     "file": "equation-sheets/sheet-2.html",
     "section": "Sections 1-5"
    }
   ]
  },
  {
   "id": "gr1-pmos-004",
   "type": "choice",
   "topic": "PMOS, symbols and circuit models",
   "objective": "Read the PMOS symbol",
   "prompt": "In a circuit drawing, where is the source of a PMOS usually placed, and where is the NMOS source?",
   "answer": {
    "id": "a",
    "text": "The PMOS source is toward the top (the supply) and the NMOS source toward the bottom (ground)"
   },
   "options": [
    {
     "id": "a",
     "text": "The PMOS source is toward the top (the supply) and the NMOS source toward the bottom (ground)",
     "correct": true
    },
    {
     "id": "b",
     "text": "Both sources are at the top",
     "correct": false,
     "rationale": "The two polarities are drawn opposite."
    },
    {
     "id": "c",
     "text": "The PMOS source is at the bottom",
     "correct": false,
     "rationale": "The PMOS source connects toward the higher potential."
    },
    {
     "id": "d",
     "text": "Source position is never important",
     "correct": false,
     "rationale": "It helps readers see current direction and polarities."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "Both sources are at the top",
     "misconception": "Ignores the convention.",
     "rationale": "The two polarities are drawn opposite."
    },
    {
     "id": "c",
     "text": "The PMOS source is at the bottom",
     "misconception": "Swaps the two.",
     "rationale": "The PMOS source connects toward the higher potential."
    },
    {
     "id": "d",
     "text": "Source position is never important",
     "misconception": "Ignores the convention.",
     "rationale": "It helps readers see current direction and polarities."
    }
   ],
   "explanation": "The usual convention draws the NMOS with its source at the bottom and the PMOS with its source at the top, matching their current directions from higher to lower potential.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-09.html",
     "label": "Lesson 9 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-09.html",
     "section": "NMOS symbols"
    },
    {
     "file": "equation-sheets/sheet-2.html",
     "section": "Sections 1-5"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr1/pmos_cs.svg",
    "alt": "A common-source stage using a PMOS with its source toward the positive supply",
    "caption": "PMOS circuit."
   }
  },
  {
   "id": "gr1-pmos-005",
   "type": "choice",
   "topic": "PMOS, symbols and circuit models",
   "objective": "Identify the circuit model in saturation",
   "prompt": "In saturation, what is the circuit model of a MOSFET for large signals?",
   "answer": {
    "id": "c",
    "text": "A voltage-controlled current source from drain to source, with ideal ID = ½Kn Vov²"
   },
   "options": [
    {
     "id": "a",
     "text": "A battery of 0.7 V",
     "correct": false,
     "rationale": "The MOSFET is a controlled current source in saturation."
    },
    {
     "id": "b",
     "text": "A resistor that depends on VDS",
     "correct": false,
     "rationale": "In saturation the current is set by Vov."
    },
    {
     "id": "c",
     "text": "A voltage-controlled current source from drain to source, with ideal ID = ½Kn Vov²",
     "correct": true
    },
    {
     "id": "d",
     "text": "An open circuit",
     "correct": false,
     "rationale": "A saturated MOSFET conducts."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "A battery of 0.7 V",
     "misconception": "Gives the diode model.",
     "rationale": "The MOSFET is a controlled current source in saturation."
    },
    {
     "id": "b",
     "text": "A resistor that depends on VDS",
     "misconception": "Gives the triode model.",
     "rationale": "In saturation the current is set by Vov."
    },
    {
     "id": "d",
     "text": "An open circuit",
     "misconception": "Gives cutoff.",
     "rationale": "A saturated MOSFET conducts."
    }
   ],
   "explanation": "The drain-source path behaves like a current source whose value is set by the gate overdrive. With channel-length modulation, ro appears in parallel with the source.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-09.html",
     "label": "Lesson 9 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-09.html",
     "section": "Circuit models"
    },
    {
     "file": "equation-sheets/sheet-2.html",
     "section": "Sections 1-5"
    }
   ]
  },
  {
   "id": "gr1-pmos-006",
   "type": "choice",
   "topic": "PMOS, symbols and circuit models",
   "objective": "Identify the circuit model in triode",
   "prompt": "In the triode region, how does the MOSFET look to the circuit?",
   "answer": {
    "id": "a",
    "text": "As a nonlinear voltage-controlled resistor between drain and source"
   },
   "options": [
    {
     "id": "a",
     "text": "As a nonlinear voltage-controlled resistor between drain and source",
     "correct": true
    },
    {
     "id": "b",
     "text": "As a constant current source",
     "correct": false,
     "rationale": "In triode the current depends on VDS too."
    },
    {
     "id": "c",
     "text": "As a short circuit",
     "correct": false,
     "rationale": "It has a finite, gate-controlled resistance."
    },
    {
     "id": "d",
     "text": "As a diode",
     "correct": false,
     "rationale": "The drain-source path is resistor-like."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "As a constant current source",
     "misconception": "Gives the saturation model.",
     "rationale": "In triode the current depends on VDS too."
    },
    {
     "id": "c",
     "text": "As a short circuit",
     "misconception": "Overstates conduction.",
     "rationale": "It has a finite, gate-controlled resistance."
    },
    {
     "id": "d",
     "text": "As a diode",
     "misconception": "Gives an unrelated model.",
     "rationale": "The drain-source path is resistor-like."
    }
   ],
   "explanation": "In triode, ID depends on both Vov and VDS, behaving like a resistor controlled by the gate (a linear resistor for very small VDS).",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-09.html",
     "label": "Lesson 9 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-09.html",
     "section": "Circuit models"
    },
    {
     "file": "equation-sheets/sheet-2.html",
     "section": "Sections 1-5"
    }
   ]
  },
  {
   "id": "gr1-pmos-007",
   "type": "true-false",
   "topic": "PMOS, symbols and circuit models",
   "objective": "Judge the polarity claim",
   "prompt": "True or false: An enhancement-mode PMOS turns on when its gate is made more negative with respect to its source than the magnitude of its threshold voltage.",
   "answer": {
    "id": "true",
    "text": "True"
   },
   "options": [
    {
     "id": "true",
     "text": "True",
     "correct": true
    },
    {
     "id": "false",
     "text": "False",
     "correct": false,
     "rationale": "The PMOS needs VSG greater than |Vt|, which is VGS more negative than Vt."
    }
   ],
   "distractors": [
    {
     "id": "false",
     "text": "False",
     "misconception": "Applies the NMOS polarity to PMOS.",
     "rationale": "The PMOS needs VSG greater than |Vt|, which is VGS more negative than Vt."
    }
   ],
   "explanation": "A PMOS channel of holes forms when the source-gate voltage exceeds |Vt|; equivalently VGS is more negative than the negative threshold Vt.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-09.html",
     "label": "Lesson 9 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-09.html",
     "section": "P-channel MOSFET"
    }
   ]
  },
  {
   "id": "gr1-dcmos-001",
   "type": "choice",
   "topic": "MOSFET DC analysis",
   "objective": "Begin the DC analysis",
   "prompt": "What is the standard first step in finding the DC bias of an NMOS with a gate voltage divider?",
   "answer": {
    "id": "b",
    "text": "Find the gate voltage from the divider, since the gate draws no current"
   },
   "options": [
    {
     "id": "a",
     "text": "Solve for the drain current immediately",
     "correct": false,
     "rationale": "The gate voltage is needed first."
    },
    {
     "id": "b",
     "text": "Find the gate voltage from the divider, since the gate draws no current",
     "correct": true
    },
    {
     "id": "c",
     "text": "Assume the transistor is off",
     "correct": false,
     "rationale": "A biased amplifier is expected to conduct."
    },
    {
     "id": "d",
     "text": "Replace the transistor by a short",
     "correct": false,
     "rationale": "The transistor is modeled by its region equations."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Solve for the drain current immediately",
     "misconception": "Skips the divider.",
     "rationale": "The gate voltage is needed first."
    },
    {
     "id": "c",
     "text": "Assume the transistor is off",
     "misconception": "Starts with cutoff.",
     "rationale": "A biased amplifier is expected to conduct."
    },
    {
     "id": "d",
     "text": "Replace the transistor by a short",
     "misconception": "Uses a wrong model.",
     "rationale": "The transistor is modeled by its region equations."
    }
   ],
   "explanation": "With zero gate current the divider is unloaded, so VG = VDD·RG2/(RG1 + RG2). Then assume saturation and write the current equation in terms of VG and the source resistor.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-10.html",
     "label": "Lesson 10 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-10.html",
     "section": "MOSFET DC circuit analysis examples"
    },
    {
     "file": "equation-sheets/sheet-2.html",
     "section": "Sections 1-5"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr1/cs_dc_bias.svg",
    "alt": "NMOS bias circuit with a gate divider, drain resistor and source resistor",
    "caption": "Four-resistor bias circuit."
   }
  },
  {
   "id": "gr1-dcmos-002",
   "type": "choice",
   "topic": "MOSFET DC analysis",
   "objective": "Choose the first region assumption",
   "prompt": "When the region is not stated, what should you assume first in a DC analysis for amplifier bias?",
   "answer": {
    "id": "d",
    "text": "Saturation, and then confirm the assumption afterwards"
   },
   "options": [
    {
     "id": "a",
     "text": "Triode, because it applies to all cases",
     "correct": false,
     "rationale": "Saturation is the usual amplifier bias."
    },
    {
     "id": "b",
     "text": "Cutoff",
     "correct": false,
     "rationale": "Biased amplifiers conduct."
    },
    {
     "id": "c",
     "text": "Whatever gives the smallest current",
     "correct": false,
     "rationale": "The choice is confirmed, not optimized."
    },
    {
     "id": "d",
     "text": "Saturation, and then confirm the assumption afterwards",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Triode, because it applies to all cases",
     "misconception": "Chooses the complicated model.",
     "rationale": "Saturation is the usual amplifier bias."
    },
    {
     "id": "b",
     "text": "Cutoff",
     "misconception": "Chooses the trivial case.",
     "rationale": "Biased amplifiers conduct."
    },
    {
     "id": "c",
     "text": "Whatever gives the smallest current",
     "misconception": "Uses an invalid rule.",
     "rationale": "The choice is confirmed, not optimized."
    }
   ],
   "explanation": "Amplifiers are biased in saturation, so assume it, solve, and then verify with VDS ≥ Vov. If the check fails, redo the analysis in triode.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-10.html",
     "label": "Lesson 10 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-10.html",
     "section": "MOSFET DC circuit analysis examples"
    },
    {
     "file": "equation-sheets/sheet-2.html",
     "section": "Sections 1-5"
    }
   ]
  },
  {
   "id": "gr1-dcmos-003",
   "type": "choice",
   "topic": "MOSFET DC analysis",
   "objective": "Choose the correct root",
   "prompt": "Substituting VS = RS·ID into the saturation equation gives a quadratic in ID. How do you pick the valid root?",
   "answer": {
    "id": "b",
    "text": "Keep the root that gives VGS above Vt (the device is on) and a positive current"
   },
   "options": [
    {
     "id": "a",
     "text": "Keep the larger current root always",
     "correct": false,
     "rationale": "The larger root can make VGS fall below Vt, which is not valid."
    },
    {
     "id": "b",
     "text": "Keep the root that gives VGS above Vt (the device is on) and a positive current",
     "correct": true
    },
    {
     "id": "c",
     "text": "Keep the root that gives a negative current",
     "correct": false,
     "rationale": "The current must be positive."
    },
    {
     "id": "d",
     "text": "Average the two roots",
     "correct": false,
     "rationale": "Only one root satisfies the physical conditions."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Keep the larger current root always",
     "misconception": "Uses a blanket rule.",
     "rationale": "The larger root can make VGS fall below Vt, which is not valid."
    },
    {
     "id": "c",
     "text": "Keep the root that gives a negative current",
     "misconception": "Accepts a nonphysical root.",
     "rationale": "The current must be positive."
    },
    {
     "id": "d",
     "text": "Average the two roots",
     "misconception": "Invents a combination.",
     "rationale": "Only one root satisfies the physical conditions."
    }
   ],
   "explanation": "Check each root: the correct one gives VGS = VG - RS·ID greater than Vt. The other root typically corresponds to VGS below Vt and is not physical for this assumption.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-10.html",
     "label": "Lesson 10 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-10.html",
     "section": "MOSFET DC circuit analysis examples"
    },
    {
     "file": "equation-sheets/sheet-2.html",
     "section": "Sections 1-5"
    }
   ]
  },
  {
   "id": "gr1-dcmos-004",
   "type": "choice",
   "topic": "MOSFET DC analysis",
   "objective": "Confirm saturation",
   "prompt": "After finding ID, VS and VD, which check confirms the saturation assumption?",
   "answer": {
    "id": "d",
    "text": "VDS is at least the overdrive voltage (equivalently VGD ≤ Vt)"
   },
   "options": [
    {
     "id": "a",
     "text": "VDS is less than the overdrive voltage",
     "correct": false,
     "rationale": "That would mean the assumption failed."
    },
    {
     "id": "b",
     "text": "VDS is equal to VDD",
     "correct": false,
     "rationale": "VDS is normally below VDD because of RD and RS."
    },
    {
     "id": "c",
     "text": "VGS is below Vt",
     "correct": false,
     "rationale": "The device must be on."
    },
    {
     "id": "d",
     "text": "VDS is at least the overdrive voltage (equivalently VGD ≤ Vt)",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "VDS is less than the overdrive voltage",
     "misconception": "Gives the triode condition.",
     "rationale": "That would mean the assumption failed."
    },
    {
     "id": "b",
     "text": "VDS is equal to VDD",
     "misconception": "Invents a condition.",
     "rationale": "VDS is normally below VDD because of RD and RS."
    },
    {
     "id": "c",
     "text": "VGS is below Vt",
     "misconception": "Gives the cutoff condition.",
     "rationale": "The device must be on."
    }
   ],
   "explanation": "In saturation VDS ≥ Vov. If the check fails the device is in triode and the analysis must be repeated with the triode equation.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-10.html",
     "label": "Lesson 10 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-10.html",
     "section": "MOSFET DC circuit analysis examples"
    },
    {
     "file": "equation-sheets/sheet-2.html",
     "section": "Sections 1-5"
    }
   ]
  },
  {
   "id": "gr1-dcmos-005",
   "type": "choice",
   "topic": "MOSFET DC analysis",
   "objective": "React to a failed saturation check",
   "prompt": "You assumed saturation and found VDS less than Vov. What now?",
   "answer": {
    "id": "b",
    "text": "Redo the analysis with the triode-region equation"
   },
   "options": [
    {
     "id": "a",
     "text": "Accept the result since the current was found",
     "correct": false,
     "rationale": "The result is invalid if the assumption fails."
    },
    {
     "id": "b",
     "text": "Redo the analysis with the triode-region equation",
     "correct": true
    },
    {
     "id": "c",
     "text": "Increase the supply voltage",
     "correct": false,
     "rationale": "The circuit is given."
    },
    {
     "id": "d",
     "text": "Replace the transistor with a short",
     "correct": false,
     "rationale": "Triode is the correct model when saturation fails."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Accept the result since the current was found",
     "misconception": "Skips the check.",
     "rationale": "The result is invalid if the assumption fails."
    },
    {
     "id": "c",
     "text": "Increase the supply voltage",
     "misconception": "Alters the circuit.",
     "rationale": "The circuit is given."
    },
    {
     "id": "d",
     "text": "Replace the transistor with a short",
     "misconception": "Uses an unsupported model.",
     "rationale": "Triode is the correct model when saturation fails."
    }
   ],
   "explanation": "If VDS < Vov the channel is not pinched off. The correct model is triode, so rewrite the drain current equation with the triode formula and solve again.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-10.html",
     "label": "Lesson 10 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-10.html",
     "section": "MOSFET DC circuit analysis examples"
    },
    {
     "file": "equation-sheets/sheet-2.html",
     "section": "Sections 1-5"
    }
   ]
  },
  {
   "id": "gr1-dcmos-006",
   "type": "choice",
   "topic": "MOSFET DC analysis",
   "objective": "Find the drain and source voltages",
   "prompt": "After finding the drain current in the four-resistor bias circuit, how are the drain and source voltages obtained?",
   "answer": {
    "id": "d",
    "text": "The source voltage is RS·ID and the drain voltage is VDD - RD·ID"
   },
   "options": [
    {
     "id": "a",
     "text": "Both equal VDD/2",
     "correct": false,
     "rationale": "They depend on the resistors and the current."
    },
    {
     "id": "b",
     "text": "The drain voltage is RD·ID and the source voltage is VDD",
     "correct": false,
     "rationale": "The drain voltage falls from VDD across RD."
    },
    {
     "id": "c",
     "text": "Both equal VG",
     "correct": false,
     "rationale": "The gate sets VGS, not the drain and source voltages directly."
    },
    {
     "id": "d",
     "text": "The source voltage is RS·ID and the drain voltage is VDD - RD·ID",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Both equal VDD/2",
     "misconception": "Assumes a symmetric split.",
     "rationale": "They depend on the resistors and the current."
    },
    {
     "id": "b",
     "text": "The drain voltage is RD·ID and the source voltage is VDD",
     "misconception": "Mixes up the nodes.",
     "rationale": "The drain voltage falls from VDD across RD."
    },
    {
     "id": "c",
     "text": "Both equal VG",
     "misconception": "Ignores the drops.",
     "rationale": "The gate sets VGS, not the drain and source voltages directly."
    }
   ],
   "explanation": "Ohm's law on the source resistor gives VS = RS·ID, and the drop across the drain resistor gives VD = VDD - RD·ID. Then VDS = VD - VS.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-10.html",
     "label": "Lesson 10 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-10.html",
     "section": "MOSFET DC circuit analysis examples"
    },
    {
     "file": "equation-sheets/sheet-2.html",
     "section": "Sections 1-5"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr1/cs_dc_bias.svg",
    "alt": "NMOS bias circuit with a gate divider, drain resistor and source resistor",
    "caption": "Four-resistor bias circuit."
   }
  },
  {
   "id": "gr1-dcmos-007",
   "type": "choice",
   "topic": "MOSFET DC analysis",
   "objective": "Explain why a source resistor stabilizes bias",
   "prompt": "What does the source resistor RS do to the bias current if the device parameters change?",
   "answer": {
    "id": "b",
    "text": "It provides negative feedback: more current raises VS, which lowers VGS and reduces the current"
   },
   "options": [
    {
     "id": "a",
     "text": "It increases the current when the current is high",
     "correct": false,
     "rationale": "A higher current raises VS and lowers VGS."
    },
    {
     "id": "b",
     "text": "It provides negative feedback: more current raises VS, which lowers VGS and reduces the current",
     "correct": true
    },
    {
     "id": "c",
     "text": "It sets the drain current to zero",
     "correct": false,
     "rationale": "It sets the current through VGS = VG - RS·ID."
    },
    {
     "id": "d",
     "text": "It has no effect on the bias",
     "correct": false,
     "rationale": "It enters the VGS equation."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "It increases the current when the current is high",
     "misconception": "Reverses the feedback.",
     "rationale": "A higher current raises VS and lowers VGS."
    },
    {
     "id": "c",
     "text": "It sets the drain current to zero",
     "misconception": "False.",
     "rationale": "It sets the current through VGS = VG - RS·ID."
    },
    {
     "id": "d",
     "text": "It has no effect on the bias",
     "misconception": "Ignores its role.",
     "rationale": "It enters the VGS equation."
    }
   ],
   "explanation": "Because VGS = VG - RS·ID, any increase in ID lowers VGS and so reduces ID. This feedback makes the bias less sensitive to Kn and Vt.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-10.html",
     "label": "Lesson 10 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-10.html",
     "section": "MOSFET DC circuit analysis examples"
    },
    {
     "file": "equation-sheets/sheet-2.html",
     "section": "Sections 1-5"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr1/cs_dc_bias.svg",
    "alt": "NMOS bias circuit with a gate divider, drain resistor and source resistor",
    "caption": "Four-resistor bias circuit."
   }
  },
  {
   "id": "gr1-dcmos-008",
   "type": "sequence",
   "topic": "MOSFET DC analysis",
   "objective": "Order the NMOS bias solution",
   "prompt": "Put the steps of the DC analysis of an NMOS with a gate divider and source resistor in order.",
   "answer": {
    "ids": [
     "s1",
     "s2",
     "s3",
     "s4",
     "s5"
    ]
   },
   "steps": [
    {
     "id": "s1",
     "text": "Find VG from the divider (gate current is zero)"
    },
    {
     "id": "s2",
     "text": "Assume saturation and write the current equation with VS = RS·ID"
    },
    {
     "id": "s3",
     "text": "Solve the quadratic and keep the root with VGS above Vt"
    },
    {
     "id": "s4",
     "text": "Compute VD, VS and VDS"
    },
    {
     "id": "s5",
     "text": "Confirm VDS is at least Vov, else redo in triode"
    }
   ],
   "distractors": [
    {
     "id": "d1",
     "text": "Confirm the region before solving for the current",
     "misconception": "Reverses the order.",
     "rationale": "The check needs the voltages, which come from the current."
    }
   ],
   "explanation": "The method is divider, assume saturation, solve for ID and keep the valid root, compute node voltages, then confirm the region.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-10.html",
     "label": "Lesson 10 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-10.html",
     "section": "MOSFET DC circuit analysis examples"
    },
    {
     "file": "equation-sheets/sheet-2.html",
     "section": "Sections 1-5"
    }
   ]
  },
  {
   "id": "gr1-dcmos-009",
   "type": "multi-select",
   "topic": "MOSFET DC analysis",
   "objective": "Select valid DC-analysis facts",
   "prompt": "Select all that are true in the DC analysis of an NMOS amplifier bias circuit.",
   "answer": {
    "ids": [
     "b",
     "d",
     "f"
    ]
   },
   "options": [
    {
     "id": "a",
     "text": "The gate current equals the drain current",
     "correct": false,
     "rationale": "The gate current is zero."
    },
    {
     "id": "b",
     "text": "The gate draws no DC current",
     "correct": true
    },
    {
     "id": "c",
     "text": "Coupling capacitors are replaced by shorts",
     "correct": false,
     "rationale": "For DC they are open."
    },
    {
     "id": "d",
     "text": "Capacitors are open circuits",
     "correct": true
    },
    {
     "id": "e",
     "text": "The region assumption is always correct if the current is positive",
     "correct": false,
     "rationale": "A positive current does not prove the region."
    },
    {
     "id": "f",
     "text": "The assumed region must be checked at the end",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The gate current equals the drain current",
     "misconception": "Mixes up currents.",
     "rationale": "The gate current is zero."
    },
    {
     "id": "c",
     "text": "Coupling capacitors are replaced by shorts",
     "misconception": "Uses the signal rule.",
     "rationale": "For DC they are open."
    },
    {
     "id": "e",
     "text": "The region assumption is always correct if the current is positive",
     "misconception": "Skips the check.",
     "rationale": "A positive current does not prove the region."
    }
   ],
   "explanation": "For DC: gate current is zero, capacitors are open, and the region assumption is confirmed with VDS ≥ Vov.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-10.html",
     "label": "Lesson 10 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-10.html",
     "section": "MOSFET DC circuit analysis examples"
    }
   ]
  },
  {
   "id": "gr1-body-001",
   "type": "choice",
   "topic": "Body diode and families of curves",
   "objective": "Explain the body diode",
   "prompt": "What is the body diode of an NMOS?",
   "answer": {
    "id": "c",
    "text": "The pn junction between the p-type body and the n-type drain, which is present because of how the device is built"
   },
   "options": [
    {
     "id": "a",
     "text": "An extra diode that the designer adds in series with the gate",
     "correct": false,
     "rationale": "It is a physical junction, not a discrete component."
    },
    {
     "id": "b",
     "text": "A diode between gate and source",
     "correct": false,
     "rationale": "The junction lies between body and drain (and source)."
    },
    {
     "id": "c",
     "text": "The pn junction between the p-type body and the n-type drain, which is present because of how the device is built",
     "correct": true
    },
    {
     "id": "d",
     "text": "A diode that exists only in PMOS devices",
     "correct": false,
     "rationale": "Both polarities have body junctions."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "An extra diode that the designer adds in series with the gate",
     "misconception": "Treats it as an added part.",
     "rationale": "It is a physical junction, not a discrete component."
    },
    {
     "id": "b",
     "text": "A diode between gate and source",
     "misconception": "Places it at the wrong terminals.",
     "rationale": "The junction lies between body and drain (and source)."
    },
    {
     "id": "d",
     "text": "A diode that exists only in PMOS devices",
     "misconception": "Restricts it to PMOS.",
     "rationale": "Both polarities have body junctions."
    }
   ],
   "explanation": "The p-type body and n-type drain form a pn junction. With the body tied to the source, it appears as a diode between source (body) and drain and conducts if the drain falls below the source.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-11.html",
     "label": "Lesson 11 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-11.html",
     "section": "MOSFET body diode"
    },
    {
     "file": "equation-sheets/sheet-2.html",
     "section": "Sections 1-5"
    }
   ]
  },
  {
   "id": "gr1-body-002",
   "type": "choice",
   "topic": "Body diode and families of curves",
   "objective": "Say when the body diode matters",
   "prompt": "In normal NMOS operation with the body tied to the source, when does the body diode conduct?",
   "answer": {
    "id": "a",
    "text": "Only when the drain voltage goes below the source voltage enough to forward bias it"
   },
   "options": [
    {
     "id": "a",
     "text": "Only when the drain voltage goes below the source voltage enough to forward bias it",
     "correct": true
    },
    {
     "id": "b",
     "text": "Always, whenever the transistor is on",
     "correct": false,
     "rationale": "It is reverse biased in normal operation."
    },
    {
     "id": "c",
     "text": "Only when the gate is negative",
     "correct": false,
     "rationale": "It depends on the drain-source polarity."
    },
    {
     "id": "d",
     "text": "Never, since it is only on paper",
     "correct": false,
     "rationale": "It is a physical junction and does conduct when forward biased."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "Always, whenever the transistor is on",
     "misconception": "Treats it as always conducting.",
     "rationale": "It is reverse biased in normal operation."
    },
    {
     "id": "c",
     "text": "Only when the gate is negative",
     "misconception": "Ties it to the gate.",
     "rationale": "It depends on the drain-source polarity."
    },
    {
     "id": "d",
     "text": "Never, since it is only on paper",
     "misconception": "Treats it as imaginary.",
     "rationale": "It is a physical junction and does conduct when forward biased."
    }
   ],
   "explanation": "In the usual connection the drain is at least as positive as the source, so the body-drain junction is reverse biased and carries no current. If the drain goes below the source, it conducts.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-11.html",
     "label": "Lesson 11 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-11.html",
     "section": "MOSFET body diode"
    }
   ]
  },
  {
   "id": "gr1-body-003",
   "type": "choice",
   "topic": "Body diode and families of curves",
   "objective": "Read a family of curves",
   "prompt": "What does each curve in a MOSFET family of ID-VDS curves represent?",
   "answer": {
    "id": "c",
    "text": "The drain current versus VDS at one fixed gate-source voltage"
   },
   "options": [
    {
     "id": "a",
     "text": "The drain current versus VGS at one fixed VDS",
     "correct": false,
     "rationale": "The family sweeps VDS with VGS as the parameter."
    },
    {
     "id": "b",
     "text": "The gate current at one temperature",
     "correct": false,
     "rationale": "Gate current is essentially zero."
    },
    {
     "id": "c",
     "text": "The drain current versus VDS at one fixed gate-source voltage",
     "correct": true
    },
    {
     "id": "d",
     "text": "A different transistor for each curve",
     "correct": false,
     "rationale": "The curves are the same device at different VGS."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The drain current versus VGS at one fixed VDS",
     "misconception": "Describes the transfer curve.",
     "rationale": "The family sweeps VDS with VGS as the parameter."
    },
    {
     "id": "b",
     "text": "The gate current at one temperature",
     "misconception": "Names the wrong quantity.",
     "rationale": "Gate current is essentially zero."
    },
    {
     "id": "d",
     "text": "A different transistor for each curve",
     "misconception": "Misreads the plot.",
     "rationale": "The curves are the same device at different VGS."
    }
   ],
   "explanation": "A family of curves has one ID-VDS curve for each VGS. Higher VGS gives a higher curve; the triode and saturation parts of each can be read from the curve shape.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-11.html",
     "label": "Lesson 11 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-11.html",
     "section": "Family of curves"
    },
    {
     "file": "equation-sheets/sheet-2.html",
     "section": "Sections 1-5"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr1/mos_iv.svg",
    "alt": "Drain current versus drain-source voltage for several gate voltages",
    "caption": "MOSFET family of curves."
   }
  },
  {
   "id": "gr1-body-004",
   "type": "choice",
   "topic": "Body diode and families of curves",
   "objective": "Find the boundary between regions on the curves",
   "prompt": "On the family of curves, where is the boundary between triode and saturation?",
   "answer": {
    "id": "a",
    "text": "At VDS = VGS - Vt, the points where each curve flattens, which together form a parabola"
   },
   "options": [
    {
     "id": "a",
     "text": "At VDS = VGS - Vt, the points where each curve flattens, which together form a parabola",
     "correct": true
    },
    {
     "id": "b",
     "text": "At VDS = Vt on every curve",
     "correct": false,
     "rationale": "The boundary depends on VGS through Vov."
    },
    {
     "id": "c",
     "text": "At VDS = 0",
     "correct": false,
     "rationale": "That is the start of the triode region."
    },
    {
     "id": "d",
     "text": "At the largest VDS on the plot",
     "correct": false,
     "rationale": "The boundary is a feature of the device."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "At VDS = Vt on every curve",
     "misconception": "Uses the wrong boundary.",
     "rationale": "The boundary depends on VGS through Vov."
    },
    {
     "id": "c",
     "text": "At VDS = 0",
     "misconception": "Marks the origin.",
     "rationale": "That is the start of the triode region."
    },
    {
     "id": "d",
     "text": "At the largest VDS on the plot",
     "misconception": "Picks the plot edge.",
     "rationale": "The boundary is a feature of the device."
    }
   ],
   "explanation": "The knee of each curve occurs at VDS = Vov = VGS - Vt, so the knees of the curves for increasing VGS lie on a parabola ID = ½Kn VDS².",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-11.html",
     "label": "Lesson 11 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-11.html",
     "section": "Family of curves"
    },
    {
     "file": "equation-sheets/sheet-2.html",
     "section": "Sections 1-5"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr1/mos_iv.svg",
    "alt": "Drain current versus drain-source voltage for several gate voltages",
    "caption": "MOSFET family of curves."
   }
  },
  {
   "id": "gr1-body-005",
   "type": "choice",
   "topic": "Body diode and families of curves",
   "objective": "Use a load line",
   "prompt": "What does the intersection of a load line with the family of curves give?",
   "answer": {
    "id": "c",
    "text": "The operating (quiescent) point of the transistor"
   },
   "options": [
    {
     "id": "a",
     "text": "The threshold voltage",
     "correct": false,
     "rationale": "The intersection is a circuit operating point."
    },
    {
     "id": "b",
     "text": "The breakdown voltage",
     "correct": false,
     "rationale": "Not what the intersection gives."
    },
    {
     "id": "c",
     "text": "The operating (quiescent) point of the transistor",
     "correct": true
    },
    {
     "id": "d",
     "text": "The gate current",
     "correct": false,
     "rationale": "Gate current is zero."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The threshold voltage",
     "misconception": "Names a device parameter.",
     "rationale": "The intersection is a circuit operating point."
    },
    {
     "id": "b",
     "text": "The breakdown voltage",
     "misconception": "Names a rating.",
     "rationale": "Not what the intersection gives."
    },
    {
     "id": "d",
     "text": "The gate current",
     "misconception": "Names the wrong quantity.",
     "rationale": "Gate current is zero."
    }
   ],
   "explanation": "The load line is the circuit constraint (from the resistors and supply) in the ID-VDS plane. Where it crosses the transistor curve for the bias VGS is the Q-point.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-11.html",
     "label": "Lesson 11 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-11.html",
     "section": "Family of curves"
    }
   ]
  },
  {
   "id": "gr1-body-006",
   "type": "true-false",
   "topic": "Body diode and families of curves",
   "objective": "Check the saturation slope claim",
   "prompt": "True or false: In a real MOSFET family of curves the saturation portions are slightly sloped (not perfectly flat), which the λ parameter models.",
   "answer": {
    "id": "true",
    "text": "True"
   },
   "options": [
    {
     "id": "true",
     "text": "True",
     "correct": true
    },
    {
     "id": "false",
     "text": "False",
     "correct": false,
     "rationale": "Channel-length modulation tilts the curves, and λ (or VA) describes the tilt."
    }
   ],
   "distractors": [
    {
     "id": "false",
     "text": "False",
     "misconception": "Believes saturation curves are perfectly flat.",
     "rationale": "Channel-length modulation tilts the curves, and λ (or VA) describes the tilt."
    }
   ],
   "explanation": "Real saturation curves rise a little with VDS because the channel shortens. The model ID = ½Kn Vov²(1 + λVDS) and ro = 1/(λ·ID) capture it.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-11.html",
     "label": "Lesson 11 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-09.html",
     "section": "Channel-length modulation"
    },
    {
     "file": "lesson-guides/lesson-11.html",
     "section": "Family of curves"
    }
   ]
  },
  {
   "id": "gr1-wk-001",
   "type": "problem",
   "topic": "Ideal diode analysis",
   "objective": "Analyze a one-diode circuit with the constant-voltage-drop model in order",
   "prompt": "Find the current in a diode circuit",
   "setup": "A DC source drives a resistor in series with a silicon diode, as in the figure. Given: the source voltage, the resistance and the 0.7 V constant-drop model. Decide the steps that find the diode current and confirm the answer.",
   "image": {
    "src": "assets/study/resources/gr1/diode_ckt.svg",
    "alt": "A DC source, a resistor and a diode in series; the diode current iD and voltage vD are marked.",
    "caption": "Source, resistor and diode in series."
   },
   "steps": [
    {
     "id": "gr1-wk-001-s1",
     "prompt": "Where do you start?",
     "brief": "Assume the state",
     "answer": {
      "id": "d",
      "text": "Assume the diode is on (forward biased by the source polarity)"
     },
     "options": [
      {
       "id": "a",
       "text": "Solve with the Shockley equation immediately",
       "correct": false,
       "rationale": "The problem names the CVD model, which needs a state assumption first."
      },
      {
       "id": "b",
       "text": "Assume the diode is off and use the source voltage as the diode voltage",
       "correct": false,
       "rationale": "The source drives current in the forward direction, so on is the natural first assumption."
      },
      {
       "id": "c",
       "text": "Replace the diode by a resistor of 0.7 ohms",
       "correct": false,
       "rationale": "0.7 is a voltage in this model."
      },
      {
       "id": "d",
       "text": "Assume the diode is on (forward biased by the source polarity)",
       "correct": true
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "Solve with the Shockley equation immediately",
       "misconception": "Skips the model choice.",
       "rationale": "The problem names the CVD model, which needs a state assumption first."
      },
      {
       "id": "b",
       "text": "Assume the diode is off and use the source voltage as the diode voltage",
       "misconception": "Starts from a state that contradicts the source polarity.",
       "rationale": "The source drives current in the forward direction, so on is the natural first assumption."
      },
      {
       "id": "c",
       "text": "Replace the diode by a resistor of 0.7 ohms",
       "misconception": "Treats 0.7 as a resistance.",
       "rationale": "0.7 is a voltage in this model."
      }
     ],
     "explanation": "The method is assume, analyze, confirm. The source pushes current through the diode in the forward direction, so assume it is on."
    },
    {
     "id": "gr1-wk-001-s2",
     "prompt": "Which model replaces the diode?",
     "brief": "On-state CVD model",
     "answer": {
      "id": "a",
      "text": "A 0.7 V voltage source with the polarity of a forward drop"
     },
     "options": [
      {
       "id": "a",
       "text": "A 0.7 V voltage source with the polarity of a forward drop",
       "correct": true
      },
      {
       "id": "b",
       "text": "A short circuit with 0 V",
       "correct": false,
       "rationale": "The problem asks for the constant-drop model."
      },
      {
       "id": "c",
       "text": "An open circuit",
       "correct": false,
       "rationale": "The assumed state is on."
      },
      {
       "id": "d",
       "text": "A current source of 0.7 A",
       "correct": false,
       "rationale": "0.7 is in volts."
      }
     ],
     "distractors": [
      {
       "id": "b",
       "text": "A short circuit with 0 V",
       "misconception": "Gives the ideal-diode model.",
       "rationale": "The problem asks for the constant-drop model."
      },
      {
       "id": "c",
       "text": "An open circuit",
       "misconception": "Gives the off state.",
       "rationale": "The assumed state is on."
      },
      {
       "id": "d",
       "text": "A current source of 0.7 A",
       "misconception": "Mixes units.",
       "rationale": "0.7 is in volts."
      }
     ],
     "explanation": "In the CVD model an on diode is a 0.7 V source. The loop now contains only the source, the resistor and that drop."
    },
    {
     "id": "gr1-wk-001-s3",
     "prompt": "How do you find the current?",
     "brief": "Loop equation",
     "answer": {
      "id": "b",
      "text": "Apply KVL around the loop: the source voltage equals the resistor drop plus 0.7 V"
     },
     "options": [
      {
       "id": "a",
       "text": "Divide the source voltage by the diode voltage",
       "correct": false,
       "rationale": "The loop equation uses voltage drops, not a ratio with 0.7 V."
      },
      {
       "id": "b",
       "text": "Apply KVL around the loop: the source voltage equals the resistor drop plus 0.7 V",
       "correct": true
      },
      {
       "id": "c",
       "text": "Divide 0.7 V by the resistance",
       "correct": false,
       "rationale": "The resistor drop is the source voltage minus 0.7 V."
      },
      {
       "id": "d",
       "text": "Assume the current is the diode saturation current",
       "correct": false,
       "rationale": "The current is set by the circuit, not IS."
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "Divide the source voltage by the diode voltage",
       "misconception": "Misuses the diode voltage as a resistance.",
       "rationale": "The loop equation uses voltage drops, not a ratio with 0.7 V."
      },
      {
       "id": "c",
       "text": "Divide 0.7 V by the resistance",
       "misconception": "Ignores the source.",
       "rationale": "The resistor drop is the source voltage minus 0.7 V."
      },
      {
       "id": "d",
       "text": "Assume the current is the diode saturation current",
       "misconception": "Uses the wrong quantity.",
       "rationale": "The current is set by the circuit, not IS."
      }
     ],
     "explanation": "With the diode replaced by 0.7 V, KVL gives I = (VS - 0.7)/R. The result depends only on the loop."
    },
    {
     "id": "gr1-wk-001-s4",
     "prompt": "How do you confirm the assumption?",
     "brief": "Check the current",
     "answer": {
      "id": "c",
      "text": "Check that the diode current is positive in the forward direction"
     },
     "options": [
      {
       "id": "a",
       "text": "Check that the diode voltage is negative",
       "correct": false,
       "rationale": "We assumed on, so the check is on the current."
      },
      {
       "id": "b",
       "text": "Check that the current equals zero",
       "correct": false,
       "rationale": "An on diode carries positive current."
      },
      {
       "id": "c",
       "text": "Check that the diode current is positive in the forward direction",
       "correct": true
      },
      {
       "id": "d",
       "text": "No check is needed because the model is exact",
       "correct": false,
       "rationale": "A wrong state assumption would give a wrong answer."
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "Check that the diode voltage is negative",
       "misconception": "Gives the off check.",
       "rationale": "We assumed on, so the check is on the current."
      },
      {
       "id": "b",
       "text": "Check that the current equals zero",
       "misconception": "Gives the off result.",
       "rationale": "An on diode carries positive current."
      },
      {
       "id": "d",
       "text": "No check is needed because the model is exact",
       "misconception": "Skips verification.",
       "rationale": "A wrong state assumption would give a wrong answer."
      }
     ],
     "explanation": "The on assumption is consistent when ID > 0. If the computed current were negative, the diode would be off and the circuit would be redone with it open."
    }
   ],
   "answer": {
    "text": "Assume on, replace the diode by 0.7 V, apply KVL for the current, and confirm the current is positive."
   },
   "distractors": [],
   "explanation": "Assume on, replace the diode by 0.7 V, apply KVL for the current, and confirm the current is positive.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-05.html",
     "label": "Lesson 5 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-05.html",
     "section": "Constant voltage drop model"
    },
    {
     "file": "equation-sheets/sheet-1.html",
     "section": "Section 7"
    }
   ]
  },
  {
   "id": "gr1-wk-002",
   "type": "problem",
   "topic": "Diode models and iterative solution",
   "objective": "Carry out the iterative solution for a Shockley diode in order",
   "prompt": "Solve a Shockley diode circuit iteratively",
   "setup": "The same series circuit is now analyzed with the exponential Shockley diode. Given: the source, the resistor, IS, n and VT. Decide the steps of the Gauss-Seidel iteration.",
   "image": {
    "src": "assets/study/resources/gr1/diode_ckt.svg",
    "alt": "A DC source, a resistor and a diode in series.",
    "caption": "Source, resistor and diode in series."
   },
   "steps": [
    {
     "id": "gr1-wk-002-s1",
     "prompt": "How do you start?",
     "brief": "Initial guess",
     "answer": {
      "id": "a",
      "text": "Guess a diode voltage near 0.7 V"
     },
     "options": [
      {
       "id": "a",
       "text": "Guess a diode voltage near 0.7 V",
       "correct": true
      },
      {
       "id": "b",
       "text": "Guess the full source voltage",
       "correct": false,
       "rationale": "Most of the source voltage appears across the resistor."
      },
      {
       "id": "c",
       "text": "Guess 0 V and stop",
       "correct": false,
       "rationale": "Zero is allowed but far from the answer; use the typical forward drop."
      },
      {
       "id": "d",
       "text": "Guess a large negative voltage",
       "correct": false,
       "rationale": "The diode conducts in this circuit."
      }
     ],
     "distractors": [
      {
       "id": "b",
       "text": "Guess the full source voltage",
       "misconception": "Ignores the resistor drop.",
       "rationale": "Most of the source voltage appears across the resistor."
      },
      {
       "id": "c",
       "text": "Guess 0 V and stop",
       "misconception": "Gives a poor guess.",
       "rationale": "Zero is allowed but far from the answer; use the typical forward drop."
      },
      {
       "id": "d",
       "text": "Guess a large negative voltage",
       "misconception": "Uses reverse bias.",
       "rationale": "The diode conducts in this circuit."
      }
     ],
     "explanation": "A forward-biased silicon diode usually has about 0.7 V across it, so that is a good first VD."
    },
    {
     "id": "gr1-wk-002-s2",
     "prompt": "What does the first update compute?",
     "brief": "Load-line update",
     "answer": {
      "id": "b",
      "text": "The current from the loop (load-line) equation using the current voltage guess"
     },
     "options": [
      {
       "id": "a",
       "text": "The new diode voltage from the diode equation using the old current",
       "correct": false,
       "rationale": "The first update uses the circuit equation to get ID."
      },
      {
       "id": "b",
       "text": "The current from the loop (load-line) equation using the current voltage guess",
       "correct": true
      },
      {
       "id": "c",
       "text": "The temperature",
       "correct": false,
       "rationale": "The iteration finds ID and VD."
      },
      {
       "id": "d",
       "text": "The saturation current",
       "correct": false,
       "rationale": "IS is a given constant."
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "The new diode voltage from the diode equation using the old current",
       "misconception": "Reverses the order.",
       "rationale": "The first update uses the circuit equation to get ID."
      },
      {
       "id": "c",
       "text": "The temperature",
       "misconception": "Unrelated quantity.",
       "rationale": "The iteration finds ID and VD."
      },
      {
       "id": "d",
       "text": "The saturation current",
       "misconception": "Treats IS as unknown.",
       "rationale": "IS is a given constant."
      }
     ],
     "explanation": "ID2 = (Vth - k·VD1)/Rth: the circuit equation gives the current for the present voltage guess."
    },
    {
     "id": "gr1-wk-002-s3",
     "prompt": "What does the second update compute?",
     "brief": "Shockley update",
     "answer": {
      "id": "c",
      "text": "A refined diode voltage from the diode equation using the ratio of the new and old currents"
     },
     "options": [
      {
       "id": "a",
       "text": "The source voltage",
       "correct": false,
       "rationale": "The source is fixed."
      },
      {
       "id": "b",
       "text": "A refined current from the loop equation again",
       "correct": false,
       "rationale": "The second update corrects the voltage."
      },
      {
       "id": "c",
       "text": "A refined diode voltage from the diode equation using the ratio of the new and old currents",
       "correct": true
      },
      {
       "id": "d",
       "text": "The reverse breakdown voltage",
       "correct": false,
       "rationale": "The diode is forward biased."
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "The source voltage",
       "misconception": "Names a given quantity.",
       "rationale": "The source is fixed."
      },
      {
       "id": "b",
       "text": "A refined current from the loop equation again",
       "misconception": "Repeats the first step.",
       "rationale": "The second update corrects the voltage."
      },
      {
       "id": "d",
       "text": "The reverse breakdown voltage",
       "misconception": "Unrelated quantity.",
       "rationale": "The diode is forward biased."
      }
     ],
     "explanation": "VD2 = VD1 + n·VT·ln(ID2/ID1) corrects the voltage according to the exponential law."
    },
    {
     "id": "gr1-wk-002-s4",
     "prompt": "When do you stop?",
     "brief": "Convergence",
     "answer": {
      "id": "d",
      "text": "When the change in the diode voltage between iterations is smaller than the tolerance"
     },
     "options": [
      {
       "id": "a",
       "text": "After one iteration always",
       "correct": false,
       "rationale": "The count depends on the problem."
      },
      {
       "id": "b",
       "text": "When the current is negative",
       "correct": false,
       "rationale": "A negative current means a wrong assumption."
      },
      {
       "id": "c",
       "text": "When the voltage equals the source voltage",
       "correct": false,
       "rationale": "The voltage settles at the diode drop."
      },
      {
       "id": "d",
       "text": "When the change in the diode voltage between iterations is smaller than the tolerance",
       "correct": true
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "After one iteration always",
       "misconception": "Fixed count.",
       "rationale": "The count depends on the problem."
      },
      {
       "id": "b",
       "text": "When the current is negative",
       "misconception": "Failure sign.",
       "rationale": "A negative current means a wrong assumption."
      },
      {
       "id": "c",
       "text": "When the voltage equals the source voltage",
       "misconception": "Wrong target.",
       "rationale": "The voltage settles at the diode drop."
      }
     ],
     "explanation": "Repeat until successive voltages agree to the tolerance you need."
    }
   ],
   "answer": {
    "text": "Guess VD near 0.7 V, find the current from the load line, correct the voltage with the Shockley equation, repeat until the change is small."
   },
   "distractors": [],
   "explanation": "Guess VD near 0.7 V, find the current from the load line, correct the voltage with the Shockley equation, repeat until the change is small.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-05.html",
     "label": "Lesson 5 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-05.html",
     "section": "Gauss-Seidel analysis with Shockley diode equation"
    },
    {
     "file": "equation-sheets/sheet-1.html",
     "section": "Section 7"
    }
   ]
  },
  {
   "id": "gr1-wk-003",
   "type": "problem",
   "topic": "Small-signal diode model and regulation",
   "objective": "Analyze a Zener regulator in order",
   "prompt": "Analyze a Zener regulator with a load",
   "setup": "A supply feeds a Zener diode and a load through a series resistor, as in the figure. Given: the supply, R, RL, and the Zener data VZ0 and rz. Decide the steps to find the output voltage and check the Zener is working.",
   "image": {
    "src": "assets/study/resources/gr1/zener_reg.svg",
    "alt": "A supply, series resistor R, a Zener diode in breakdown and a load RL in parallel with it.",
    "caption": "Zener regulator with a load."
   },
   "steps": [
    {
     "id": "gr1-wk-003-s1",
     "prompt": "What do you assume first?",
     "brief": "Region",
     "answer": {
      "id": "b",
      "text": "Assume the Zener is in reverse breakdown, so it is represented by VZ0 in series with rz"
     },
     "options": [
      {
       "id": "a",
       "text": "Assume it is off and ignore it",
       "correct": false,
       "rationale": "The point of the circuit is that the Zener is in breakdown."
      },
      {
       "id": "b",
       "text": "Assume the Zener is in reverse breakdown, so it is represented by VZ0 in series with rz",
       "correct": true
      },
      {
       "id": "c",
       "text": "Assume it is forward biased",
       "correct": false,
       "rationale": "The Zener is connected for reverse breakdown."
      },
      {
       "id": "d",
       "text": "Treat it as a short circuit",
       "correct": false,
       "rationale": "In breakdown it is a nearly constant voltage source, not a short."
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "Assume it is off and ignore it",
       "misconception": "Removes the regulating element.",
       "rationale": "The point of the circuit is that the Zener is in breakdown."
      },
      {
       "id": "c",
       "text": "Assume it is forward biased",
       "misconception": "Uses the wrong region.",
       "rationale": "The Zener is connected for reverse breakdown."
      },
      {
       "id": "d",
       "text": "Treat it as a short circuit",
       "misconception": "Uses a wrong model.",
       "rationale": "In breakdown it is a nearly constant voltage source, not a short."
      }
     ],
     "explanation": "The regulator relies on breakdown, so assume breakdown and use the Zener model VZ = VZ0 + IZ·rz."
    },
    {
     "id": "gr1-wk-003-s2",
     "prompt": "How is the output found?",
     "brief": "Circuit solution",
     "answer": {
      "id": "c",
      "text": "Solve the circuit with the Zener replaced by its model: the output is the Zener voltage across the load"
     },
     "options": [
      {
       "id": "a",
       "text": "The output equals the supply voltage",
       "correct": false,
       "rationale": "The resistor drops the difference."
      },
      {
       "id": "b",
       "text": "The output is zero",
       "correct": false,
       "rationale": "The model gives a voltage of about VZ0 plus a small drop."
      },
      {
       "id": "c",
       "text": "Solve the circuit with the Zener replaced by its model: the output is the Zener voltage across the load",
       "correct": true
      },
      {
       "id": "d",
       "text": "The output equals the voltage across R",
       "correct": false,
       "rationale": "The output is across the Zener and load in parallel."
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "The output equals the supply voltage",
       "misconception": "Ignores the series resistor.",
       "rationale": "The resistor drops the difference."
      },
      {
       "id": "b",
       "text": "The output is zero",
       "misconception": "Treats the Zener as a short.",
       "rationale": "The model gives a voltage of about VZ0 plus a small drop."
      },
      {
       "id": "d",
       "text": "The output equals the voltage across R",
       "misconception": "Takes the wrong element.",
       "rationale": "The output is across the Zener and load in parallel."
      }
     ],
     "explanation": "With the Zener model in place, the load sees VZ0 + IZ·rz, nearly constant. The supply current splits between the Zener and the load."
    },
    {
     "id": "gr1-wk-003-s3",
     "prompt": "How is the assumption confirmed?",
     "brief": "Check the Zener current",
     "answer": {
      "id": "d",
      "text": "Check that the Zener current is positive (flowing in the breakdown direction)"
     },
     "options": [
      {
       "id": "a",
       "text": "Check that the load current is zero",
       "correct": false,
       "rationale": "The check is on the Zener current."
      },
      {
       "id": "b",
       "text": "Check that the supply voltage is below VZ0",
       "correct": false,
       "rationale": "The supply must be above VZ for breakdown to occur."
      },
      {
       "id": "c",
       "text": "Check that the Zener voltage is negative",
       "correct": false,
       "rationale": "The check is on current in the breakdown direction."
      },
      {
       "id": "d",
       "text": "Check that the Zener current is positive (flowing in the breakdown direction)",
       "correct": true
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "Check that the load current is zero",
       "misconception": "Wrong quantity.",
       "rationale": "The check is on the Zener current."
      },
      {
       "id": "b",
       "text": "Check that the supply voltage is below VZ0",
       "misconception": "Would imply no breakdown.",
       "rationale": "The supply must be above VZ for breakdown to occur."
      },
      {
       "id": "c",
       "text": "Check that the Zener voltage is negative",
       "misconception": "Misreads polarity.",
       "rationale": "The check is on current in the breakdown direction."
      }
     ],
     "explanation": "If IZ > 0 the Zener is in breakdown and the assumption holds; if not, the Zener is off and the output is just the divider of R and RL."
    },
    {
     "id": "gr1-wk-003-s4",
     "prompt": "How is the effect of supply changes found?",
     "brief": "Line regulation",
     "answer": {
      "id": "a",
      "text": "Use the small-signal circuit: the change in supply divides between R and rz in parallel with RL"
     },
     "options": [
      {
       "id": "a",
       "text": "Use the small-signal circuit: the change in supply divides between R and rz in parallel with RL",
       "correct": true
      },
      {
       "id": "b",
       "text": "The output change equals the supply change",
       "correct": false,
       "rationale": "A divider with small rz passes only a fraction."
      },
      {
       "id": "c",
       "text": "The output change is zero exactly",
       "correct": false,
       "rationale": "rz is small but not zero."
      },
      {
       "id": "d",
       "text": "The output change equals rz times the supply change",
       "correct": false,
       "rationale": "The ratio is rz∥RL over (R + rz∥RL)."
      }
     ],
     "distractors": [
      {
       "id": "b",
       "text": "The output change equals the supply change",
       "misconception": "Ignores regulation.",
       "rationale": "A divider with small rz passes only a fraction."
      },
      {
       "id": "c",
       "text": "The output change is zero exactly",
       "misconception": "Treats rz as zero.",
       "rationale": "rz is small but not zero."
      },
      {
       "id": "d",
       "text": "The output change equals rz times the supply change",
       "misconception": "Drops the divider structure.",
       "rationale": "The ratio is rz∥RL over (R + rz∥RL)."
      }
     ],
     "explanation": "For small changes the Zener is rz, so line regulation is the divider ratio (rz∥RL)/(R + rz∥RL), a small number."
    }
   ],
   "answer": {
    "text": "Assume breakdown, use VZ0 + rz, solve for the output and check IZ > 0, then use a divider for line regulation."
   },
   "distractors": [],
   "explanation": "Assume breakdown, use VZ0 + rz, solve for the output and check IZ > 0, then use a divider for line regulation.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-06.html",
     "label": "Lesson 6 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-06.html",
     "section": "B3 Zener regulation"
    },
    {
     "file": "equation-sheets/sheet-1.html",
     "section": "Section 8"
    }
   ]
  },
  {
   "id": "gr1-wk-004",
   "type": "problem",
   "topic": "Small-signal diode model and regulation",
   "objective": "Carry out the small-signal analysis of a diode in order",
   "prompt": "Find the small-signal output of a biased diode circuit",
   "setup": "The diode is first biased by a DC source and a resistor, then a small signal is added in series. Given: the DC bias circuit, the signal amplitude, n and VT. Decide the steps.",
   "image": {
    "src": "assets/study/resources/gr1/ss_diode.svg",
    "alt": "The small-signal circuit: the signal source, the series resistor and the diode replaced by its dynamic resistance.",
    "caption": "Small-signal diode circuit."
   },
   "steps": [
    {
     "id": "gr1-wk-004-s1",
     "prompt": "What comes first?",
     "brief": "DC bias",
     "answer": {
      "id": "c",
      "text": "Solve the DC circuit for the bias current ID"
     },
     "options": [
      {
       "id": "a",
       "text": "Solve the signal circuit first",
       "correct": false,
       "rationale": "rd needs the bias current."
      },
      {
       "id": "b",
       "text": "Find the gain from the signal source only",
       "correct": false,
       "rationale": "The diode resistance depends on the bias."
      },
      {
       "id": "c",
       "text": "Solve the DC circuit for the bias current ID",
       "correct": true
      },
      {
       "id": "d",
       "text": "Ignore the DC source",
       "correct": false,
       "rationale": "The bias sets the slope at which the diode works."
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "Solve the signal circuit first",
       "misconception": "Reverses the order.",
       "rationale": "rd needs the bias current."
      },
      {
       "id": "b",
       "text": "Find the gain from the signal source only",
       "misconception": "Skips the bias.",
       "rationale": "The diode resistance depends on the bias."
      },
      {
       "id": "d",
       "text": "Ignore the DC source",
       "misconception": "Drops the operating point.",
       "rationale": "The bias sets the slope at which the diode works."
      }
     ],
     "explanation": "The small-signal model is the tangent at the Q-point, so the DC bias comes first."
    },
    {
     "id": "gr1-wk-004-s2",
     "prompt": "What does the bias current give you?",
     "brief": "Dynamic resistance",
     "answer": {
      "id": "d",
      "text": "The diode dynamic resistance rd = n·VT/ID"
     },
     "options": [
      {
       "id": "a",
       "text": "The diode breakdown voltage",
       "correct": false,
       "rationale": "rd comes from the slope of the exponential."
      },
      {
       "id": "b",
       "text": "The saturation current",
       "correct": false,
       "rationale": "IS is a given."
      },
      {
       "id": "c",
       "text": "The source resistance",
       "correct": false,
       "rationale": "The source resistance is given."
      },
      {
       "id": "d",
       "text": "The diode dynamic resistance rd = n·VT/ID",
       "correct": true
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "The diode breakdown voltage",
       "misconception": "Unrelated.",
       "rationale": "rd comes from the slope of the exponential."
      },
      {
       "id": "b",
       "text": "The saturation current",
       "misconception": "Unrelated.",
       "rationale": "IS is a given."
      },
      {
       "id": "c",
       "text": "The source resistance",
       "misconception": "Unrelated.",
       "rationale": "The source resistance is given."
      }
     ],
     "explanation": "rd = n·VT/ID is the reciprocal slope of the i-v curve at the operating point."
    },
    {
     "id": "gr1-wk-004-s3",
     "prompt": "How is the signal circuit formed?",
     "brief": "Turn off DC",
     "answer": {
      "id": "a",
      "text": "Short the DC voltage sources and replace the diode by rd"
     },
     "options": [
      {
       "id": "a",
       "text": "Short the DC voltage sources and replace the diode by rd",
       "correct": true
      },
      {
       "id": "b",
       "text": "Keep the DC source and the diode",
       "correct": false,
       "rationale": "The DC source has no signal change."
      },
      {
       "id": "c",
       "text": "Open the DC voltage source",
       "correct": false,
       "rationale": "An ideal voltage source with no signal becomes a short."
      },
      {
       "id": "d",
       "text": "Replace the diode by 0.7 V",
       "correct": false,
       "rationale": "A constant source has no signal response."
      }
     ],
     "distractors": [
      {
       "id": "b",
       "text": "Keep the DC source and the diode",
       "misconception": "Keeps the bias.",
       "rationale": "The DC source has no signal change."
      },
      {
       "id": "c",
       "text": "Open the DC voltage source",
       "misconception": "Wrong kind of off.",
       "rationale": "An ideal voltage source with no signal becomes a short."
      },
      {
       "id": "d",
       "text": "Replace the diode by 0.7 V",
       "misconception": "Uses the DC model.",
       "rationale": "A constant source has no signal response."
      }
     ],
     "explanation": "In the signal circuit DC voltage sources are shorts and the diode is its small-signal resistance."
    },
    {
     "id": "gr1-wk-004-s4",
     "prompt": "What is the last check?",
     "brief": "Small-signal validity",
     "answer": {
      "id": "b",
      "text": "Check that the signal across the diode is small (about 5 mV times n or less)"
     },
     "options": [
      {
       "id": "a",
       "text": "Check that the DC current is zero",
       "correct": false,
       "rationale": "The bias current is needed."
      },
      {
       "id": "b",
       "text": "Check that the signal across the diode is small (about 5 mV times n or less)",
       "correct": true
      },
      {
       "id": "c",
       "text": "Check that the signal exceeds the DC voltage",
       "correct": false,
       "rationale": "The signal must be small."
      },
      {
       "id": "d",
       "text": "Check that rd is larger than the resistor",
       "correct": false,
       "rationale": "The check is on the diode signal amplitude."
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "Check that the DC current is zero",
       "misconception": "Contradicts the model.",
       "rationale": "The bias current is needed."
      },
      {
       "id": "c",
       "text": "Check that the signal exceeds the DC voltage",
       "misconception": "Reverses the condition.",
       "rationale": "The signal must be small."
      },
      {
       "id": "d",
       "text": "Check that rd is larger than the resistor",
       "misconception": "Invents a condition.",
       "rationale": "The check is on the diode signal amplitude."
      }
     ],
     "explanation": "The linear model is valid only for small signals across the diode."
    }
   ],
   "answer": {
    "text": "Bias first, compute rd from the bias current, form the signal circuit by shorting the DC source, and check the signal amplitude."
   },
   "distractors": [],
   "explanation": "Bias first, compute rd from the bias current, form the signal circuit by shorting the DC source, and check the signal amplitude.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-06.html",
     "label": "Lesson 6 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-06.html",
     "section": "B1 Diode bias and small-signal linearization"
    },
    {
     "file": "equation-sheets/sheet-1.html",
     "section": "Section 8"
    }
   ]
  },
  {
   "id": "gr1-wk-005",
   "type": "problem",
   "topic": "Regions of operation and the I-V curves",
   "objective": "Decide the region of an NMOS from its terminal voltages in order",
   "prompt": "Decide the operating region of an NMOS",
   "setup": "An NMOS has known Vt and Kn and given terminal voltages VGS and VDS. Decide the order of the checks that identify its region and the matching current equation.",
   "image": {
    "src": "assets/study/resources/gr1/nmos_regions.svg",
    "alt": "An NMOS with gate, drain and source terminals; the voltages VGS and VDS are marked.",
    "caption": "NMOS with VGS and VDS."
   },
   "steps": [
    {
     "id": "gr1-wk-005-s1",
     "prompt": "What do you compare first?",
     "brief": "Cutoff test",
     "answer": {
      "id": "d",
      "text": "Compare VGS with Vt: below it, the device is in cutoff and ID is zero"
     },
     "options": [
      {
       "id": "a",
       "text": "Compare VDS with Vt",
       "correct": false,
       "rationale": "The first test is on the gate voltage."
      },
      {
       "id": "b",
       "text": "Compare VDS with VGS",
       "correct": false,
       "rationale": "That comparison relates to VGD, not to turn-on."
      },
      {
       "id": "c",
       "text": "Compute the current first",
       "correct": false,
       "rationale": "The current formula depends on the region."
      },
      {
       "id": "d",
       "text": "Compare VGS with Vt: below it, the device is in cutoff and ID is zero",
       "correct": true
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "Compare VDS with Vt",
       "misconception": "Wrong reference.",
       "rationale": "The first test is on the gate voltage."
      },
      {
       "id": "b",
       "text": "Compare VDS with VGS",
       "misconception": "Wrong pair.",
       "rationale": "That comparison relates to VGD, not to turn-on."
      },
      {
       "id": "c",
       "text": "Compute the current first",
       "misconception": "Skips the logic.",
       "rationale": "The current formula depends on the region."
      }
     ],
     "explanation": "Without a channel (VGS < Vt) there is no current, so the cutoff test comes first."
    },
    {
     "id": "gr1-wk-005-s2",
     "prompt": "What is the next quantity to form?",
     "brief": "Overdrive",
     "answer": {
      "id": "a",
      "text": "The overdrive voltage Vov = VGS - Vt"
     },
     "options": [
      {
       "id": "a",
       "text": "The overdrive voltage Vov = VGS - Vt",
       "correct": true
      },
      {
       "id": "b",
       "text": "The oxide capacitance",
       "correct": false,
       "rationale": "The region test uses Vov."
      },
      {
       "id": "c",
       "text": "The channel length",
       "correct": false,
       "rationale": "The region test uses Vov."
      },
      {
       "id": "d",
       "text": "The mobility",
       "correct": false,
       "rationale": "The region test uses Vov."
      }
     ],
     "distractors": [
      {
       "id": "b",
       "text": "The oxide capacitance",
       "misconception": "Unrelated.",
       "rationale": "The region test uses Vov."
      },
      {
       "id": "c",
       "text": "The channel length",
       "misconception": "Unrelated.",
       "rationale": "The region test uses Vov."
      },
      {
       "id": "d",
       "text": "The mobility",
       "misconception": "Unrelated.",
       "rationale": "The region test uses Vov."
      }
     ],
     "explanation": "Vov is the boundary value of VDS between triode and saturation."
    },
    {
     "id": "gr1-wk-005-s3",
     "prompt": "How do you separate triode from saturation?",
     "brief": "VDS versus Vov",
     "answer": {
      "id": "b",
      "text": "Compare VDS with Vov: VDS at least Vov is saturation, below Vov is triode"
     },
     "options": [
      {
       "id": "a",
       "text": "Compare VDS with Vt",
       "correct": false,
       "rationale": "The comparison uses Vov."
      },
      {
       "id": "b",
       "text": "Compare VDS with Vov: VDS at least Vov is saturation, below Vov is triode",
       "correct": true
      },
      {
       "id": "c",
       "text": "Compare VGS with VDS only",
       "correct": false,
       "rationale": "The overdrive includes Vt."
      },
      {
       "id": "d",
       "text": "Compare ID with zero",
       "correct": false,
       "rationale": "The current depends on the region."
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "Compare VDS with Vt",
       "misconception": "Wrong reference.",
       "rationale": "The comparison uses Vov."
      },
      {
       "id": "c",
       "text": "Compare VGS with VDS only",
       "misconception": "Misses Vt.",
       "rationale": "The overdrive includes Vt."
      },
      {
       "id": "d",
       "text": "Compare ID with zero",
       "misconception": "Cannot be done before the region is known.",
       "rationale": "The current depends on the region."
      }
     ],
     "explanation": "VDS at least Vov means the channel is pinched off at the drain end, which is saturation; a smaller VDS leaves the channel complete, which is triode."
    },
    {
     "id": "gr1-wk-005-s4",
     "prompt": "Which current equation then applies?",
     "brief": "Equation choice",
     "answer": {
      "id": "c",
      "text": "Saturation: ID = ½·Kn·Vov²; triode: ID = Kn[Vov·VDS - ½VDS²]"
     },
     "options": [
      {
       "id": "a",
       "text": "Always ID = Kn·Vov·VDS",
       "correct": false,
       "rationale": "That form holds only for very small VDS."
      },
      {
       "id": "b",
       "text": "Always ID = ½·Kn·VDS²",
       "correct": false,
       "rationale": "The saturation current depends on Vov, not VDS."
      },
      {
       "id": "c",
       "text": "Saturation: ID = ½·Kn·Vov²; triode: ID = Kn[Vov·VDS - ½VDS²]",
       "correct": true
      },
      {
       "id": "d",
       "text": "ID = 0 in both",
       "correct": false,
       "rationale": "Triode and saturation conduct."
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "Always ID = Kn·Vov·VDS",
       "misconception": "Uses only the deep-triode form.",
       "rationale": "That form holds only for very small VDS."
      },
      {
       "id": "b",
       "text": "Always ID = ½·Kn·VDS²",
       "misconception": "Uses the wrong variable.",
       "rationale": "The saturation current depends on Vov, not VDS."
      },
      {
       "id": "d",
       "text": "ID = 0 in both",
       "misconception": "Applies cutoff.",
       "rationale": "Triode and saturation conduct."
      }
     ],
     "explanation": "The region decides the formula: square law in Vov for saturation, the triode expression otherwise."
    }
   ],
   "answer": {
    "text": "Check cutoff first, then form the overdrive voltage, compare VDS with Vov to separate saturation from triode, and finally use the current equation that matches the region found."
   },
   "distractors": [],
   "explanation": "Check cutoff first, then form the overdrive voltage, compare VDS with Vov to separate saturation from triode, and finally use the current equation that matches the region found.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-09.html",
     "label": "Lesson 9 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-09.html",
     "section": "Analysis of modes of operation"
    },
    {
     "file": "equation-sheets/sheet-2.html",
     "section": "Section 2"
    }
   ]
  },
  {
   "id": "gr1-wk-006",
   "type": "problem",
   "topic": "MOSFET DC analysis",
   "objective": "Carry out the DC bias analysis of an NMOS in order",
   "prompt": "Find the DC operating point of a four-resistor NMOS bias circuit",
   "setup": "An NMOS has a gate divider RG1, RG2, a drain resistor RD and a source resistor RS, as in the figure. Given: the supply, the resistors, Kn and Vt. Decide the steps that find the bias point.",
   "image": {
    "src": "assets/study/resources/gr1/cs_dc_bias.svg",
    "alt": "NMOS with a gate divider RG1 and RG2, drain resistor RD from VDD and source resistor RS to ground.",
    "caption": "Four-resistor NMOS bias circuit."
   },
   "steps": [
    {
     "id": "gr1-wk-006-s1",
     "prompt": "How do you start?",
     "brief": "Gate voltage",
     "answer": {
      "id": "a",
      "text": "Find VG from the divider, since the gate draws no DC current"
     },
     "options": [
      {
       "id": "a",
       "text": "Find VG from the divider, since the gate draws no DC current",
       "correct": true
      },
      {
       "id": "b",
       "text": "Find the drain current from VDD/RD",
       "correct": false,
       "rationale": "The transistor sets the current."
      },
      {
       "id": "c",
       "text": "Set VG equal to VDD",
       "correct": false,
       "rationale": "The divider sets VG."
      },
      {
       "id": "d",
       "text": "Set VG to zero",
       "correct": false,
       "rationale": "The divider gives a nonzero VG."
      }
     ],
     "distractors": [
      {
       "id": "b",
       "text": "Find the drain current from VDD/RD",
       "misconception": "Ignores the transistor.",
       "rationale": "The transistor sets the current."
      },
      {
       "id": "c",
       "text": "Set VG equal to VDD",
       "misconception": "Ignores the divider.",
       "rationale": "The divider sets VG."
      },
      {
       "id": "d",
       "text": "Set VG to zero",
       "misconception": "Ignores the divider.",
       "rationale": "The divider gives a nonzero VG."
      }
     ],
     "explanation": "The gate current is zero, so the divider is unloaded and VG = VDD·RG2/(RG1 + RG2)."
    },
    {
     "id": "gr1-wk-006-s2",
     "prompt": "What do you assume next?",
     "brief": "Region and current equation",
     "answer": {
      "id": "b",
      "text": "Assume saturation, and write ID = ½Kn(VG - RS·ID - Vt)²"
     },
     "options": [
      {
       "id": "a",
       "text": "Assume triode and write the triode equation",
       "correct": false,
       "rationale": "Saturation is the usual first assumption."
      },
      {
       "id": "b",
       "text": "Assume saturation, and write ID = ½Kn(VG - RS·ID - Vt)²",
       "correct": true
      },
      {
       "id": "c",
       "text": "Assume cutoff and set ID to zero",
       "correct": false,
       "rationale": "A biased circuit conducts."
      },
      {
       "id": "d",
       "text": "Write ID = VG/RS",
       "correct": false,
       "rationale": "The source voltage is below VG by VGS."
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "Assume triode and write the triode equation",
       "misconception": "Starts with the complicated model.",
       "rationale": "Saturation is the usual first assumption."
      },
      {
       "id": "c",
       "text": "Assume cutoff and set ID to zero",
       "misconception": "Skips conduction.",
       "rationale": "A biased circuit conducts."
      },
      {
       "id": "d",
       "text": "Write ID = VG/RS",
       "misconception": "Ignores VGS.",
       "rationale": "The source voltage is below VG by VGS."
      }
     ],
     "explanation": "Using VS = RS·ID gives VGS = VG - RS·ID, so the saturation equation has only ID unknown."
    },
    {
     "id": "gr1-wk-006-s3",
     "prompt": "How do you handle the quadratic?",
     "brief": "Root choice",
     "answer": {
      "id": "c",
      "text": "Keep the root for which VGS is above Vt (a positive current that turns the device on)"
     },
     "options": [
      {
       "id": "a",
       "text": "Keep the larger current always",
       "correct": false,
       "rationale": "The larger root may give VGS below Vt."
      },
      {
       "id": "b",
       "text": "Average the roots",
       "correct": false,
       "rationale": "Only one root is physical."
      },
      {
       "id": "c",
       "text": "Keep the root for which VGS is above Vt (a positive current that turns the device on)",
       "correct": true
      },
      {
       "id": "d",
       "text": "Keep the negative root",
       "correct": false,
       "rationale": "The current must be positive."
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "Keep the larger current always",
       "misconception": "Blanket rule.",
       "rationale": "The larger root may give VGS below Vt."
      },
      {
       "id": "b",
       "text": "Average the roots",
       "misconception": "Invalid.",
       "rationale": "Only one root is physical."
      },
      {
       "id": "d",
       "text": "Keep the negative root",
       "misconception": "Nonphysical current.",
       "rationale": "The current must be positive."
      }
     ],
     "explanation": "The valid root has VGS = VG - RS·ID greater than Vt, so the device is on; the other root usually puts VGS below Vt and is rejected."
    },
    {
     "id": "gr1-wk-006-s4",
     "prompt": "What is the final check?",
     "brief": "Confirm saturation",
     "answer": {
      "id": "d",
      "text": "Compute VDS = VD - VS and check VDS is at least Vov; if not, redo the analysis in triode"
     },
     "options": [
      {
       "id": "a",
       "text": "Check that VDS equals VDD",
       "correct": false,
       "rationale": "The drops across RD and RS reduce VDS."
      },
      {
       "id": "b",
       "text": "Check that ID is less than 1 mA",
       "correct": false,
       "rationale": "The saturation check is on VDS versus Vov."
      },
      {
       "id": "c",
       "text": "No check is needed",
       "correct": false,
       "rationale": "The assumption must be confirmed."
      },
      {
       "id": "d",
       "text": "Compute VDS = VD - VS and check VDS is at least Vov; if not, redo the analysis in triode",
       "correct": true
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "Check that VDS equals VDD",
       "misconception": "Wrong condition.",
       "rationale": "The drops across RD and RS reduce VDS."
      },
      {
       "id": "b",
       "text": "Check that ID is less than 1 mA",
       "misconception": "Arbitrary.",
       "rationale": "The saturation check is on VDS versus Vov."
      },
      {
       "id": "c",
       "text": "No check is needed",
       "misconception": "Skips verification.",
       "rationale": "The assumption must be confirmed."
      }
     ],
     "explanation": "The node voltages VD = VDD - RD·ID and VS = RS·ID give VDS = VD - VS. Finding VDS at least Vov confirms saturation; otherwise redo it in triode."
    }
   ],
   "answer": {
    "text": "Use the divider for VG, assume saturation, solve the quadratic and keep the valid root with VGS above Vt, then confirm VDS is at least Vov before trusting the result."
   },
   "distractors": [],
   "explanation": "Use the divider for VG, assume saturation, solve the quadratic and keep the valid root with VGS above Vt, then confirm VDS is at least Vov before trusting the result.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-10.html",
     "label": "Lesson 10 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-10.html",
     "section": "MOSFET DC circuit analysis examples"
    },
    {
     "file": "equation-sheets/sheet-2.html",
     "section": "Section 5"
    }
   ]
  }
 ]
});
