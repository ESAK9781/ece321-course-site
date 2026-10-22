window.CourseStudy.registerBank({
 "id": "gr2",
 "title": "GR2 · Concept practice",
 "course": "ECE 321",
 "policy": {
  "requiresCalculations": false
 },
 "sources": [
  "Course syllabus, Version 4 (Lessons 15-26)",
  "Lesson objectives",
  "Equation Sheet 3: Transistor Amplifiers & BJTs",
  "Instructor notetakers for Lessons 15-21, 25 and 26",
  "Lesson guides 15, 16, 17, 18, 19, 20, 21, 25, 26",
  "Reading guide HW9"
 ],
 "questions": [
  {
   "id": "gr2-model-001",
   "type": "choice",
   "topic": "Amplifier models and cascades",
   "objective": "Name the three parameters of the amplifier behavioral model",
   "prompt": "Which three parameters make up the course's behavioral (two-port) model of a voltage amplifier?",
   "answer": {
    "id": "b",
    "text": "Input resistance Ri, output resistance Ro, and open-circuit voltage gain Avo"
   },
   "options": [
    {
     "id": "a",
     "text": "Transconductance gm, output resistance ro, and overdrive voltage VOV",
     "correct": false,
     "rationale": "gm, ro and VOV describe the transistor inside the amplifier; the behavioral model treats the whole amplifier as a black box."
    },
    {
     "id": "b",
     "text": "Input resistance Ri, output resistance Ro, and open-circuit voltage gain Avo",
     "correct": true
    },
    {
     "id": "c",
     "text": "Supply voltage VDD, drain resistor RD, and source resistor RS",
     "correct": false,
     "rationale": "Those set the bias; the model captures only what the terminals see: input resistance, output resistance and gain."
    },
    {
     "id": "d",
     "text": "Source resistance RS, load resistance RL, and closed-loop gain",
     "correct": false,
     "rationale": "RS and RL are outside the amplifier; they are what the model is connected to."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Transconductance gm, output resistance ro, and overdrive voltage VOV",
     "misconception": "Confuses transistor small-signal parameters with the amplifier-level model.",
     "rationale": "gm, ro and VOV describe the transistor inside the amplifier; the behavioral model treats the whole amplifier as a black box."
    },
    {
     "id": "c",
     "text": "Supply voltage VDD, drain resistor RD, and source resistor RS",
     "misconception": "Lists bias-circuit components instead of terminal behavior.",
     "rationale": "Those set the bias; the model captures only what the terminals see: input resistance, output resistance and gain."
    },
    {
     "id": "d",
     "text": "Source resistance RS, load resistance RL, and closed-loop gain",
     "misconception": "Includes the external source and load as if they belonged to the amplifier.",
     "rationale": "RS and RL are outside the amplifier; they are what the model is connected to."
    }
   ],
   "explanation": "The behavioral model replaces the amplifier by Ri at the input, and a controlled source Avo·vi in series with Ro at the output. Any source and load are attached to that model from outside.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-15.html",
     "label": "Lesson 15 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-15.html",
     "section": "A1 / B2 Amplifier models"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 15 objectives"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/two_port.svg",
    "alt": "Amplifier drawn as a two-port model: source resistance, input resistance, controlled source, output resistance and load"
   }
  },
  {
   "id": "gr2-model-002",
   "type": "choice",
   "topic": "Amplifier models and cascades",
   "objective": "Define Avo as an open-circuit gain",
   "prompt": "In the amplifier model built from Ri, Ro and a controlled source, what does the parameter Avo represent?",
   "answer": {
    "id": "d",
    "text": "The voltage gain from input to output with the load disconnected"
   },
   "options": [
    {
     "id": "a",
     "text": "The voltage gain from the source voltage to the load voltage",
     "correct": false,
     "rationale": "That overall quantity includes both dividers; Avo is defined before the output divider."
    },
    {
     "id": "b",
     "text": "The gain measured with the load attached",
     "correct": false,
     "rationale": "With the load attached the output divider reduces the gain below Avo."
    },
    {
     "id": "c",
     "text": "The DC gain from the supply to the output",
     "correct": false,
     "rationale": "Avo is a signal gain at the input and output terminals, not a supply relationship."
    },
    {
     "id": "d",
     "text": "The voltage gain from input to output with the load disconnected",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The voltage gain from the source voltage to the load voltage",
     "misconception": "Mixes the open-circuit gain with the overall gain G that includes source and load resistances.",
     "rationale": "That overall quantity includes both dividers; Avo is defined before the output divider."
    },
    {
     "id": "b",
     "text": "The gain measured with the load attached",
     "misconception": "Uses the loaded gain Av instead of Avo.",
     "rationale": "With the load attached the output divider reduces the gain below Avo."
    },
    {
     "id": "c",
     "text": "The DC gain from the supply to the output",
     "misconception": "Confuses signal gain with supply-to-output behavior.",
     "rationale": "Avo is a signal gain at the input and output terminals, not a supply relationship."
    }
   ],
   "explanation": "Avo is the controlled-source gain: output voltage over input voltage with nothing loading the output. Once a load RL is attached, the output divider RL/(RL+Ro) lowers the gain.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-15.html",
     "label": "Lesson 15 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-15.html",
     "section": "A1"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 15 objectives"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/two_port.svg",
    "alt": "Amplifier drawn as a two-port model: source resistance, input resistance, controlled source, output resistance and load"
   }
  },
  {
   "id": "gr2-model-003",
   "type": "choice",
   "topic": "Amplifier models and cascades",
   "objective": "Say how large Ri should be compared with the source resistance",
   "prompt": "To avoid losing signal at the input of an amplifier driven by a source with resistance RS, what should the amplifier's Ri be?",
   "answer": {
    "id": "b",
    "text": "Much larger than RS, so most of the source voltage appears across Ri"
   },
   "options": [
    {
     "id": "a",
     "text": "Much smaller than RS, so the amplifier draws a large signal current",
     "correct": false,
     "rationale": "A small Ri makes the input divider throw most of the source voltage across RS."
    },
    {
     "id": "b",
     "text": "Much larger than RS, so most of the source voltage appears across Ri",
     "correct": true
    },
    {
     "id": "c",
     "text": "Exactly equal to RS for maximum voltage transfer",
     "correct": false,
     "rationale": "Equal resistances halve the voltage; a voltage amplifier wants Ri ≫ RS."
    },
    {
     "id": "d",
     "text": "It does not matter because Avo sets the gain",
     "correct": false,
     "rationale": "The input divider multiplies the overall gain by Ri/(Ri+RS), so Ri matters."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Much smaller than RS, so the amplifier draws a large signal current",
     "misconception": "Thinks more input current is always better.",
     "rationale": "A small Ri makes the input divider throw most of the source voltage across RS."
    },
    {
     "id": "c",
     "text": "Exactly equal to RS for maximum voltage transfer",
     "misconception": "Applies the maximum-power-transfer rule to a voltage amplifier.",
     "rationale": "Equal resistances halve the voltage; a voltage amplifier wants Ri ≫ RS."
    },
    {
     "id": "d",
     "text": "It does not matter because Avo sets the gain",
     "misconception": "Ignores the input divider.",
     "rationale": "The input divider multiplies the overall gain by Ri/(Ri+RS), so Ri matters."
    }
   ],
   "explanation": "The input divider passes the fraction Ri/(Ri+RS) of the source voltage. Making Ri ≫ RS makes that fraction approach 1.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-15.html",
     "label": "Lesson 15 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-15.html",
     "section": "A1 Checks, B2 Matching Ri ≫ RS"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 15 objectives"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/two_port.svg",
    "alt": "Amplifier drawn as a two-port model: source resistance, input resistance, controlled source, output resistance and load"
   }
  },
  {
   "id": "gr2-model-004",
   "type": "choice",
   "topic": "Amplifier models and cascades",
   "objective": "Say how small Ro should be compared with the load",
   "prompt": "For an amplifier that must deliver its voltage to a load RL, what should Ro be?",
   "answer": {
    "id": "d",
    "text": "Much smaller than RL, so little output voltage is lost in the output divider"
   },
   "options": [
    {
     "id": "a",
     "text": "Much larger than RL so the amplifier acts as a current source",
     "correct": false,
     "rationale": "A large Ro makes the output divider drop most of the voltage across Ro."
    },
    {
     "id": "b",
     "text": "Equal to RL for matched loading",
     "correct": false,
     "rationale": "Equal values halve the output voltage; the goal is Ro ≪ RL."
    },
    {
     "id": "c",
     "text": "Zero is bad because it makes the gain infinite",
     "correct": false,
     "rationale": "Ro only forms the output divider; Ro → 0 simply removes the loss."
    },
    {
     "id": "d",
     "text": "Much smaller than RL, so little output voltage is lost in the output divider",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Much larger than RL so the amplifier acts as a current source",
     "misconception": "Reverses the requirement for a voltage amplifier.",
     "rationale": "A large Ro makes the output divider drop most of the voltage across Ro."
    },
    {
     "id": "b",
     "text": "Equal to RL for matched loading",
     "misconception": "Applies matching to a voltage amplifier.",
     "rationale": "Equal values halve the output voltage; the goal is Ro ≪ RL."
    },
    {
     "id": "c",
     "text": "Zero is bad because it makes the gain infinite",
     "misconception": "Thinks a small Ro changes the controlled source.",
     "rationale": "Ro only forms the output divider; Ro → 0 simply removes the loss."
    }
   ],
   "explanation": "The output divider is RL/(RL+Ro). It tends to 1 only when Ro ≪ RL, so a good voltage amplifier has small Ro.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-15.html",
     "label": "Lesson 15 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-15.html",
     "section": "A1, B2"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 15 objectives"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/two_port.svg",
    "alt": "Amplifier drawn as a two-port model: source resistance, input resistance, controlled source, output resistance and load"
   }
  },
  {
   "id": "gr2-model-005",
   "type": "true-false",
   "topic": "Amplifier models and cascades",
   "objective": "Separate Av from the overall gain that includes the source",
   "prompt": "True or false: the voltage gain Av of an amplifier from its own input terminals to the output includes the loss caused by the source resistance.",
   "answer": {
    "id": "false",
    "text": "False"
   },
   "options": [
    {
     "id": "true",
     "text": "True",
     "correct": false,
     "rationale": "Av starts at the amplifier input terminals; the input divider with RS belongs to the overall gain Gv."
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
     "misconception": "Treats every quoted gain as source-to-load.",
     "rationale": "Av starts at the amplifier input terminals; the input divider with RS belongs to the overall gain Gv."
    }
   ],
   "explanation": "Av is measured from the input terminals, so it does not contain the input divider. Gv (source to load) includes Ri/(Ri+RS) as well.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-15.html",
     "label": "Lesson 15 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-15.html",
     "section": "A2 Checks"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 15 objectives"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/two_port.svg",
    "alt": "Amplifier drawn as a two-port model: source resistance, input resistance, controlled source, output resistance and load"
   }
  },
  {
   "id": "gr2-model-006",
   "type": "choice",
   "topic": "Amplifier models and cascades",
   "objective": "Find where the loading divider comes from in a cascade",
   "prompt": "In a cascade of amplifier stages, which resistances form the loading divider that reduces the gain of stage 1?",
   "answer": {
    "id": "d",
    "text": "Stage 1's own Ro against stage 2's Ri"
   },
   "options": [
    {
     "id": "a",
     "text": "Stage 1's Ri against stage 2's Ro",
     "correct": false,
     "rationale": "The signal flows out of stage 1 into stage 2, so stage 1's Ro drives stage 2's Ri."
    },
    {
     "id": "b",
     "text": "The source resistance against stage 1's Ro",
     "correct": false,
     "rationale": "RS pairs with the first stage's Ri at the input, not with its Ro."
    },
    {
     "id": "c",
     "text": "Stage 2's Ro against the load",
     "correct": false,
     "rationale": "That divider reduces the gain of the last stage, not of stage 1."
    },
    {
     "id": "d",
     "text": "Stage 1's own Ro against stage 2's Ri",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Stage 1's Ri against stage 2's Ro",
     "misconception": "Takes the divider from the wrong side.",
     "rationale": "The signal flows out of stage 1 into stage 2, so stage 1's Ro drives stage 2's Ri."
    },
    {
     "id": "b",
     "text": "The source resistance against stage 1's Ro",
     "misconception": "Mixes up input and output of the stage.",
     "rationale": "RS pairs with the first stage's Ri at the input, not with its Ro."
    },
    {
     "id": "c",
     "text": "Stage 2's Ro against the load",
     "misconception": "Describes the loading of stage 2, not stage 1.",
     "rationale": "That divider reduces the gain of the last stage, not of stage 1."
    }
   ],
   "explanation": "Each stage output looks like Avo·vi in series with Ro, and the next stage appears as its Ri. The divider is Ri(next)/(Ri(next)+Ro(this)).",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-15.html",
     "label": "Lesson 15 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-15.html",
     "section": "A2 Analyzing a cascade"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 15 objectives"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cascade.svg",
    "alt": "Two amplifier stages in cascade, each drawn as a two-port model, with a source resistance and a load"
   }
  },
  {
   "id": "gr2-model-007",
   "type": "choice",
   "topic": "Amplifier models and cascades",
   "objective": "Spot the error of multiplying open-circuit gains",
   "prompt": "A student finds a three-stage cascade's gain by multiplying the three open-circuit gains Avo1·Avo2·Avo3. What is wrong?",
   "answer": {
    "id": "b",
    "text": "The loading divider at every stage output is left out, so the result is too large"
   },
   "options": [
    {
     "id": "a",
     "text": "Nothing: open-circuit gains multiply exactly in a cascade",
     "correct": false,
     "rationale": "Each stage is loaded by the next one's input resistance, which lowers its gain below Avo."
    },
    {
     "id": "b",
     "text": "The loading divider at every stage output is left out, so the result is too large",
     "correct": true
    },
    {
     "id": "c",
     "text": "The result is too small because Ri adds to the gain",
     "correct": false,
     "rationale": "Ri forms a divider that can only reduce the gain."
    },
    {
     "id": "d",
     "text": "The source resistance was forgotten, but the stage dividers are fine",
     "correct": false,
     "rationale": "The interstage dividers are the main omission; the source divider affects only the overall Gv."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Nothing: open-circuit gains multiply exactly in a cascade",
     "misconception": "Believes stages do not load each other.",
     "rationale": "Each stage is loaded by the next one's input resistance, which lowers its gain below Avo."
    },
    {
     "id": "c",
     "text": "The result is too small because Ri adds to the gain",
     "misconception": "Thinks input resistance boosts gain.",
     "rationale": "Ri forms a divider that can only reduce the gain."
    },
    {
     "id": "d",
     "text": "The source resistance was forgotten, but the stage dividers are fine",
     "misconception": "Looks only at the source and misses the interstage loading.",
     "rationale": "The interstage dividers are the main omission; the source divider affects only the overall Gv."
    }
   ],
   "explanation": "Avo is the unloaded gain. In a cascade each stage drives the next stage's Ri, so each stage's real gain is Avo times a divider smaller than 1.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-15.html",
     "label": "Lesson 15 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-15.html",
     "section": "A2 Common mistakes"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 15 objectives"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cascade.svg",
    "alt": "Two amplifier stages in cascade, each drawn as a two-port model, with a source resistance and a load"
   }
  },
  {
   "id": "gr2-model-008",
   "type": "choice",
   "topic": "Amplifier models and cascades",
   "objective": "Explain why a stage cannot simply be divided out of a cascade",
   "prompt": "Why is the gain of a two-stage amplifier not simply the three-stage gain divided by the third stage's gain?",
   "answer": {
    "id": "d",
    "text": "Removing a stage changes the load seen by the stage before it, so that stage's own gain changes too"
   },
   "options": [
    {
     "id": "a",
     "text": "Because dividing by a gain always introduces a phase error",
     "correct": false,
     "rationale": "Phase is not the issue; the gains are scalar multipliers."
    },
    {
     "id": "b",
     "text": "Because the third stage has no effect on the earlier stages",
     "correct": false,
     "rationale": "Loading is a property of the next stage's input resistance, so the earlier stage is affected."
    },
    {
     "id": "c",
     "text": "Because gains in decibels cannot be divided",
     "correct": false,
     "rationale": "The problem is the changed loading divider, not the unit used."
    },
    {
     "id": "d",
     "text": "Removing a stage changes the load seen by the stage before it, so that stage's own gain changes too",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Because dividing by a gain always introduces a phase error",
     "misconception": "Invents a phase effect.",
     "rationale": "Phase is not the issue; the gains are scalar multipliers."
    },
    {
     "id": "b",
     "text": "Because the third stage has no effect on the earlier stages",
     "misconception": "Assumes one-way signal flow means no loading.",
     "rationale": "Loading is a property of the next stage's input resistance, so the earlier stage is affected."
    },
    {
     "id": "c",
     "text": "Because gains in decibels cannot be divided",
     "misconception": "Confuses unit conventions with circuit loading.",
     "rationale": "The problem is the changed loading divider, not the unit used."
    }
   ],
   "explanation": "The load on stage 2 was stage 3's Ri. Without stage 3 that load becomes RL, so stage 2's loaded gain is different. Each stage's gain depends on what follows it.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-15.html",
     "label": "Lesson 15 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-15.html",
     "section": "A2 Checks"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 15 objectives"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cascade.svg",
    "alt": "Two amplifier stages in cascade, each drawn as a two-port model, with a source resistance and a load"
   }
  },
  {
   "id": "gr2-model-009",
   "type": "choice",
   "topic": "Amplifier models and cascades",
   "objective": "Match stage roles in a multistage amplifier",
   "prompt": "In a multistage amplifier whose last stage must drive a low-resistance load, which property matters most for that last stage?",
   "answer": {
    "id": "b",
    "text": "A low output resistance so the output divider loses little signal"
   },
   "options": [
    {
     "id": "a",
     "text": "A very high output resistance to maximize its own gain",
     "correct": false,
     "rationale": "A high Ro against a small RL would throw the signal away."
    },
    {
     "id": "b",
     "text": "A low output resistance so the output divider loses little signal",
     "correct": true
    },
    {
     "id": "c",
     "text": "A very low input resistance so it loads the previous stage heavily",
     "correct": false,
     "rationale": "Heavy loading would reduce the previous stage's gain; it helps nothing here."
    },
    {
     "id": "d",
     "text": "A gain as large as possible, regardless of Ro",
     "correct": false,
     "rationale": "The output stage is chosen to deliver the signal to RL, which is a question of Ro."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "A very high output resistance to maximize its own gain",
     "misconception": "Maximizes gain while ignoring the load divider.",
     "rationale": "A high Ro against a small RL would throw the signal away."
    },
    {
     "id": "c",
     "text": "A very low input resistance so it loads the previous stage heavily",
     "misconception": "Mixes up what the last stage needs.",
     "rationale": "Heavy loading would reduce the previous stage's gain; it helps nothing here."
    },
    {
     "id": "d",
     "text": "A gain as large as possible, regardless of Ro",
     "misconception": "Thinks gain is the only requirement.",
     "rationale": "The output stage is chosen to deliver the signal to RL, which is a question of Ro."
    }
   ],
   "explanation": "Gain stages can be chosen for gain, but the stage that meets the load must have small Ro compared with RL. That is why a follower often ends a chain.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-15.html",
     "label": "Lesson 15 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    },
    {
     "type": "link",
     "href": "lesson-guides/lesson-19.html",
     "label": "Lesson 19 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-15.html",
     "section": "B3 Roles of input, middle and output stages"
    },
    {
     "file": "lesson-guides/lesson-19.html",
     "section": "A1"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cascade.svg",
    "alt": "Two amplifier stages in cascade, each drawn as a two-port model, with a source resistance and a load"
   }
  },
  {
   "id": "gr2-model-010",
   "type": "multi-select",
   "topic": "Amplifier models and cascades",
   "objective": "Recognize true statements about the two-port amplifier model",
   "prompt": "Which statements about the two-port amplifier model are correct? Select all that apply.",
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
     "text": "Ro appears across the input terminals",
     "correct": false,
     "rationale": "Ro belongs in the output branch with the controlled source."
    },
    {
     "id": "b",
     "text": "The controlled source Avo·vi is in series with Ro at the output",
     "correct": true
    },
    {
     "id": "c",
     "text": "Avo already includes the effect of the load",
     "correct": false,
     "rationale": "Avo is defined with the load removed."
    },
    {
     "id": "d",
     "text": "Ri is the resistance seen looking into the input terminals",
     "correct": true
    },
    {
     "id": "e",
     "text": "Ri and Ro must always be equal",
     "correct": false,
     "rationale": "They are independent parameters of the amplifier."
    },
    {
     "id": "f",
     "text": "With a load attached, the output voltage is Avo·vi reduced by the Ro–RL divider",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Ro appears across the input terminals",
     "misconception": "Places the output resistance at the input.",
     "rationale": "Ro belongs in the output branch with the controlled source."
    },
    {
     "id": "c",
     "text": "Avo already includes the effect of the load",
     "misconception": "Treats Avo as a loaded gain.",
     "rationale": "Avo is defined with the load removed."
    },
    {
     "id": "e",
     "text": "Ri and Ro must always be equal",
     "misconception": "Believes the two resistances are linked.",
     "rationale": "They are independent parameters of the amplifier."
    }
   ],
   "explanation": "The model has Ri at the input, and at the output a source Avo·vi in series with Ro. A load RL forms a divider with Ro, and the source resistance forms a divider with Ri.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-15.html",
     "label": "Lesson 15 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-15.html",
     "section": "A1"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 15 objectives"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/two_port.svg",
    "alt": "Amplifier drawn as a two-port model: source resistance, input resistance, controlled source, output resistance and load"
   }
  },
  {
   "id": "gr2-model-011",
   "type": "sequence",
   "topic": "Amplifier models and cascades",
   "objective": "Order the stages of the source-to-load gain",
   "prompt": "Put the steps for finding the voltage from source to load in the order the signal experiences them.",
   "answer": {
    "ids": [
     "s1",
     "s2",
     "s3"
    ]
   },
   "steps": [
    {
     "id": "s1",
     "text": "The source voltage is divided between RS and Ri to give the amplifier input voltage"
    },
    {
     "id": "s2",
     "text": "The controlled source produces Avo times that input voltage"
    },
    {
     "id": "s3",
     "text": "The output divider between Ro and RL sets the load voltage"
    }
   ],
   "distractors": [
    {
     "id": "d1",
     "text": "Apply the Ro–RL divider first, then the controlled source, then the input divider",
     "misconception": "Reverses the signal path.",
     "rationale": "The signal enters at the input, so the input divider comes first."
    },
    {
     "id": "d2",
     "text": "Multiply Avo by the source voltage directly and ignore both dividers",
     "misconception": "Skips the loading effects.",
     "rationale": "The dividers are the source/load effects that the overall gain must include."
    }
   ],
   "explanation": "Signal flow runs input to output: input divider, controlled source, output divider. The overall gain is the product of the three factors.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-15.html",
     "label": "Lesson 15 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-15.html",
     "section": "A1 Method"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 15 objectives"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/two_port.svg",
    "alt": "Amplifier drawn as a two-port model: source resistance, input resistance, controlled source, output resistance and load"
   }
  },
  {
   "id": "gr2-model-012",
   "type": "true-false",
   "topic": "Amplifier models and cascades",
   "objective": "Recall the op-amp idealization used for the amplifier model",
   "prompt": "True or false: an ideal voltage amplifier has a very large input resistance and a very small output resistance.",
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
     "rationale": "Ideal for voltage gain means no input loading (Ri large) and no output loss (Ro small)."
    }
   ],
   "distractors": [
    {
     "id": "false",
     "text": "False",
     "misconception": "Thinks ideal means matched resistances.",
     "rationale": "Ideal for voltage gain means no input loading (Ri large) and no output loss (Ro small)."
    }
   ],
   "explanation": "Large Ri avoids loss at the source, and small Ro avoids loss at the load, so the voltage gain reaches the load unreduced.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-15.html",
     "label": "Lesson 15 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-15.html",
     "section": "B2 Open-loop op amp model"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 15 objectives"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/two_port.svg",
    "alt": "Amplifier drawn as a two-port model: source resistance, input resistance, controlled source, output resistance and load"
   }
  },
  {
   "id": "gr2-model-013",
   "type": "choice",
   "topic": "Amplifier models and cascades",
   "objective": "Identify the role of the DC supplies",
   "prompt": "Where does the extra signal power at an amplifier's output come from?",
   "answer": {
    "id": "b",
    "text": "From the DC power supplies, with the input signal controlling how much is delivered"
   },
   "options": [
    {
     "id": "a",
     "text": "From the input signal source alone",
     "correct": false,
     "rationale": "The input power is tiny; the supplies provide the extra power."
    },
    {
     "id": "b",
     "text": "From the DC power supplies, with the input signal controlling how much is delivered",
     "correct": true
    },
    {
     "id": "c",
     "text": "From the coupling capacitors storing energy",
     "correct": false,
     "rationale": "Coupling capacitors only pass the signal and block DC."
    },
    {
     "id": "d",
     "text": "From the resistors, which generate power",
     "correct": false,
     "rationale": "Resistors dissipate power; they cannot provide gain."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "From the input signal source alone",
     "misconception": "Believes the signal supplies the power it amplifies.",
     "rationale": "The input power is tiny; the supplies provide the extra power."
    },
    {
     "id": "c",
     "text": "From the coupling capacitors storing energy",
     "misconception": "Credits the capacitors with amplification.",
     "rationale": "Coupling capacitors only pass the signal and block DC."
    },
    {
     "id": "d",
     "text": "From the resistors, which generate power",
     "misconception": "Thinks resistors can add power.",
     "rationale": "Resistors dissipate power; they cannot provide gain."
    }
   ],
   "explanation": "An amplifier converts DC supply power into signal power. This is also why the output cannot go beyond the supply limits.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-15.html",
     "label": "Lesson 15 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-15.html",
     "section": "B1 Amplifier basics"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 15 objectives"
    }
   ]
  },
  {
   "id": "gr2-measure-001",
   "type": "choice",
   "topic": "Measuring Ri, Ro and Avo",
   "objective": "Choose the experimental method for Ri",
   "prompt": "How do you measure an amplifier's input resistance with a function generator, a variable resistor and a scope?",
   "answer": {
    "id": "c",
    "text": "Put the variable resistor in series with the source and adjust it until the amplifier input voltage is half the source voltage; that resistance equals Ri"
   },
   "options": [
    {
     "id": "a",
     "text": "Short the input and read the resulting output voltage",
     "correct": false,
     "rationale": "A shorted input removes the signal and says nothing about the input resistance."
    },
    {
     "id": "b",
     "text": "Adjust the variable resistor until the output voltage is maximum",
     "correct": false,
     "rationale": "Maximum output is not a resistance measurement; the half-voltage condition is."
    },
    {
     "id": "c",
     "text": "Put the variable resistor in series with the source and adjust it until the amplifier input voltage is half the source voltage; that resistance equals Ri",
     "correct": true
    },
    {
     "id": "d",
     "text": "Remove the load and divide output by input",
     "correct": false,
     "rationale": "That measures the open-circuit gain, not the input resistance."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Short the input and read the resulting output voltage",
     "misconception": "Thinks shorting the input reveals Ri.",
     "rationale": "A shorted input removes the signal and says nothing about the input resistance."
    },
    {
     "id": "b",
     "text": "Adjust the variable resistor until the output voltage is maximum",
     "misconception": "Looks for a gain maximum instead of a divider balance.",
     "rationale": "Maximum output is not a resistance measurement; the half-voltage condition is."
    },
    {
     "id": "d",
     "text": "Remove the load and divide output by input",
     "misconception": "Describes the Avo measurement.",
     "rationale": "That measures the open-circuit gain, not the input resistance."
    }
   ],
   "explanation": "With R in series with the source, the input divider is Ri/(Ri+R). When it equals one half, R = Ri.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-15.html",
     "label": "Lesson 15 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-15.html",
     "section": "A3 Measuring Ri"
    },
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 7 Measuring Ri"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/meas_ri.svg",
    "alt": "Measuring input resistance: a variable resistor in series with the source and a voltmeter at the amplifier input"
   }
  },
  {
   "id": "gr2-measure-002",
   "type": "choice",
   "topic": "Measuring Ri, Ro and Avo",
   "objective": "Choose the experimental method for Avo",
   "prompt": "When measuring an amplifier's open-circuit gain Avo, how must the load resistor be handled?",
   "answer": {
    "id": "a",
    "text": "It must be removed so the output is unloaded"
   },
   "options": [
    {
     "id": "a",
     "text": "It must be removed so the output is unloaded",
     "correct": true
    },
    {
     "id": "b",
     "text": "It must stay connected so the measurement matches normal use",
     "correct": false,
     "rationale": "The loaded gain includes the Ro–RL divider and is not Avo."
    },
    {
     "id": "c",
     "text": "It must be shorted to ground",
     "correct": false,
     "rationale": "A shorted output forces the output voltage to zero."
    },
    {
     "id": "d",
     "text": "It does not matter because the load carries no current",
     "correct": false,
     "rationale": "Any load current through Ro lowers the output voltage."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "It must stay connected so the measurement matches normal use",
     "misconception": "Measures the loaded gain.",
     "rationale": "The loaded gain includes the Ro–RL divider and is not Avo."
    },
    {
     "id": "c",
     "text": "It must be shorted to ground",
     "misconception": "Confuses open-circuit with short-circuit.",
     "rationale": "A shorted output forces the output voltage to zero."
    },
    {
     "id": "d",
     "text": "It does not matter because the load carries no current",
     "misconception": "Ignores the divider.",
     "rationale": "Any load current through Ro lowers the output voltage."
    }
   ],
   "explanation": "Avo is the open-circuit gain, so the output must be left open. Measure the output and input voltages and take their ratio.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-15.html",
     "label": "Lesson 15 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-15.html",
     "section": "A3"
    },
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 7"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/two_port.svg",
    "alt": "Amplifier drawn as a two-port model: source resistance, input resistance, controlled source, output resistance and load"
   }
  },
  {
   "id": "gr2-measure-003",
   "type": "choice",
   "topic": "Measuring Ri, Ro and Avo",
   "objective": "Choose the experimental method for Ro",
   "prompt": "When measuring Ro, why is the amplifier's input shorted (the signal set to zero)?",
   "answer": {
    "id": "c",
    "text": "So the controlled source is zero and only Ro is seen looking back into the output"
   },
   "options": [
    {
     "id": "a",
     "text": "To make the gain infinite",
     "correct": false,
     "rationale": "Shorting the input zeroes the controlled source; it does not change the gain."
    },
    {
     "id": "b",
     "text": "To remove the supply voltage",
     "correct": false,
     "rationale": "The DC supplies stay on; only the signal input is zeroed."
    },
    {
     "id": "c",
     "text": "So the controlled source is zero and only Ro is seen looking back into the output",
     "correct": true
    },
    {
     "id": "d",
     "text": "To measure Ri at the same time",
     "correct": false,
     "rationale": "Ri needs the input signal present; Ro needs it removed."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "To make the gain infinite",
     "misconception": "Invents a gain effect.",
     "rationale": "Shorting the input zeroes the controlled source; it does not change the gain."
    },
    {
     "id": "b",
     "text": "To remove the supply voltage",
     "misconception": "Confuses the input with the supply.",
     "rationale": "The DC supplies stay on; only the signal input is zeroed."
    },
    {
     "id": "d",
     "text": "To measure Ri at the same time",
     "misconception": "Merges two measurements.",
     "rationale": "Ri needs the input signal present; Ro needs it removed."
    }
   ],
   "explanation": "With vi = 0 the dependent source is off, so a test source at the output sees Ro alone. A variable resistor is adjusted until the output is half of the test source, giving R = Ro.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-15.html",
     "label": "Lesson 15 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-15.html",
     "section": "A3 Measuring Ro"
    },
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 7 Measuring Ro"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/meas_ro.svg",
    "alt": "Measuring output resistance: input set to zero, a test source driving the output through a variable resistor"
   }
  },
  {
   "id": "gr2-measure-004",
   "type": "true-false",
   "topic": "Measuring Ri, Ro and Avo",
   "objective": "Know the effect of leaving the load on during an Avo test",
   "prompt": "True or false: measuring \"Avo\" with the load connected gives the loaded gain, not the open-circuit gain.",
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
     "rationale": "The output divider reduces the voltage whenever a load draws current through Ro."
    }
   ],
   "distractors": [
    {
     "id": "false",
     "text": "False",
     "misconception": "Believes the load cannot change the measured gain.",
     "rationale": "The output divider reduces the voltage whenever a load draws current through Ro."
    }
   ],
   "explanation": "With RL attached, the output sits at Avo·vi times RL/(RL+Ro), which is below Avo unless Ro is negligible.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-15.html",
     "label": "Lesson 15 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-15.html",
     "section": "A3 Common mistakes"
    },
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 7"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/two_port.svg",
    "alt": "Amplifier drawn as a two-port model: source resistance, input resistance, controlled source, output resistance and load"
   }
  },
  {
   "id": "gr2-measure-005",
   "type": "choice",
   "topic": "Measuring Ri, Ro and Avo",
   "objective": "Detect an Ro measurement error",
   "prompt": "While measuring an amplifier's output resistance Ro, a student leaves the input signal turned on. What goes wrong?",
   "answer": {
    "id": "c",
    "text": "The amplifier keeps producing its own output signal, which hides the divider effect that identifies Ro"
   },
   "options": [
    {
     "id": "a",
     "text": "Nothing: the input signal does not affect the output resistance",
     "correct": false,
     "rationale": "Ro is physically unaffected, but the measurement is spoiled by the amplifier's own output."
    },
    {
     "id": "b",
     "text": "The amplifier's Ri changes",
     "correct": false,
     "rationale": "Ri does not change; the contamination is at the output."
    },
    {
     "id": "c",
     "text": "The amplifier keeps producing its own output signal, which hides the divider effect that identifies Ro",
     "correct": true
    },
    {
     "id": "d",
     "text": "The coupling capacitors discharge",
     "correct": false,
     "rationale": "The capacitors play no role in this error."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Nothing: the input signal does not affect the output resistance",
     "misconception": "Thinks input signals and Ro are unrelated in this test.",
     "rationale": "Ro is physically unaffected, but the measurement is spoiled by the amplifier's own output."
    },
    {
     "id": "b",
     "text": "The amplifier's Ri changes",
     "misconception": "Thinks Ri depends on the signal.",
     "rationale": "Ri does not change; the contamination is at the output."
    },
    {
     "id": "d",
     "text": "The coupling capacitors discharge",
     "misconception": "Invents a capacitor effect.",
     "rationale": "The capacitors play no role in this error."
    }
   ],
   "explanation": "To see only Ro the controlled source must be off. An active input makes the output contain Avo·vi plus the test response, so the half-voltage condition no longer identifies Ro.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-15.html",
     "label": "Lesson 15 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-15.html",
     "section": "A3 Common mistakes"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/meas_ro.svg",
    "alt": "Measuring output resistance: input set to zero, a test source driving the output through a variable resistor"
   }
  },
  {
   "id": "gr2-vtc-001",
   "type": "choice",
   "topic": "Voltage transfer curve and Q-point",
   "objective": "Describe cutoff on the CS voltage transfer curve",
   "prompt": "On the voltage transfer curve of a common-source stage, what happens to the output when the gate voltage is below Vt?",
   "answer": {
    "id": "d",
    "text": "The transistor is off, no drain current flows, and the output sits at VDD"
   },
   "options": [
    {
     "id": "a",
     "text": "The output falls toward ground because the gate is low",
     "correct": false,
     "rationale": "A low gate turns an NMOS off, so no current drops voltage across RD."
    },
    {
     "id": "b",
     "text": "The transistor is in triode and the output follows the input",
     "correct": false,
     "rationale": "Triode needs the transistor on; below Vt it is off."
    },
    {
     "id": "c",
     "text": "The output equals Vt",
     "correct": false,
     "rationale": "Vt is a gate threshold; with no current the output equals VDD."
    },
    {
     "id": "d",
     "text": "The transistor is off, no drain current flows, and the output sits at VDD",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The output falls toward ground because the gate is low",
     "misconception": "Reverses the effect of a low gate in an NMOS stage.",
     "rationale": "A low gate turns an NMOS off, so no current drops voltage across RD."
    },
    {
     "id": "b",
     "text": "The transistor is in triode and the output follows the input",
     "misconception": "Mislabels cutoff as triode.",
     "rationale": "Triode needs the transistor on; below Vt it is off."
    },
    {
     "id": "c",
     "text": "The output equals Vt",
     "misconception": "Treats the threshold as an output level.",
     "rationale": "Vt is a gate threshold; with no current the output equals VDD."
    }
   ],
   "explanation": "With vGS below Vt there is no channel and no drain current, so there is no drop across RD and the output is at the supply.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-15.html",
     "label": "Lesson 15 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-15.html",
     "section": "B5 VTC; A5"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 15 objectives"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/vtc.svg",
    "alt": "Voltage transfer curve of a common-source stage with points A, B and Q"
   }
  },
  {
   "id": "gr2-vtc-002",
   "type": "choice",
   "topic": "Voltage transfer curve and Q-point",
   "objective": "Identify point A on the VTC",
   "prompt": "What marks point A on the common-source voltage transfer curve?",
   "answer": {
    "id": "b",
    "text": "The gate voltage at which the transistor just turns on, the start of the saturation region"
   },
   "options": [
    {
     "id": "a",
     "text": "The gate voltage at which the transistor enters triode",
     "correct": false,
     "rationale": "Entering triode happens later, at point B."
    },
    {
     "id": "b",
     "text": "The gate voltage at which the transistor just turns on, the start of the saturation region",
     "correct": true
    },
    {
     "id": "c",
     "text": "The point of maximum gain",
     "correct": false,
     "rationale": "Gain magnitude grows from A toward B; the maximum is at B."
    },
    {
     "id": "d",
     "text": "The supply voltage VDD on the horizontal axis",
     "correct": false,
     "rationale": "VDD is the output level at cutoff, not a gate-voltage marker."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The gate voltage at which the transistor enters triode",
     "misconception": "Swaps points A and B.",
     "rationale": "Entering triode happens later, at point B."
    },
    {
     "id": "c",
     "text": "The point of maximum gain",
     "misconception": "Associates A with the steepest slope.",
     "rationale": "Gain magnitude grows from A toward B; the maximum is at B."
    },
    {
     "id": "d",
     "text": "The supply voltage VDD on the horizontal axis",
     "misconception": "Reads the output level as a gate voltage.",
     "rationale": "VDD is the output level at cutoff, not a gate-voltage marker."
    }
   ],
   "explanation": "Point A is where vGS reaches Vt: the device leaves cutoff and enters saturation, where it can amplify.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-15.html",
     "label": "Lesson 15 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-15.html",
     "section": "A5; B5"
    },
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 1"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/vtc.svg",
    "alt": "Voltage transfer curve of a common-source stage with points A, B and Q"
   }
  },
  {
   "id": "gr2-vtc-003",
   "type": "choice",
   "topic": "Voltage transfer curve and Q-point",
   "objective": "Identify point B on the VTC",
   "prompt": "On the common-source voltage transfer curve, what condition defines point B?",
   "answer": {
    "id": "d",
    "text": "The drain-source voltage has fallen to the overdrive voltage, the edge between saturation and triode"
   },
   "options": [
    {
     "id": "a",
     "text": "The drain current reaches zero",
     "correct": false,
     "rationale": "Zero current is the cutoff side, point A."
    },
    {
     "id": "b",
     "text": "The drain-source voltage equals the supply voltage",
     "correct": false,
     "rationale": "The output equals VDD at cutoff, not at B."
    },
    {
     "id": "c",
     "text": "The gate voltage equals the supply voltage",
     "correct": false,
     "rationale": "B is defined by VDS = VOV, not by the gate reaching VDD."
    },
    {
     "id": "d",
     "text": "The drain-source voltage has fallen to the overdrive voltage, the edge between saturation and triode",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The drain current reaches zero",
     "misconception": "Places point B at cutoff.",
     "rationale": "Zero current is the cutoff side, point A."
    },
    {
     "id": "b",
     "text": "The drain-source voltage equals the supply voltage",
     "misconception": "Confuses the cutoff output level with B.",
     "rationale": "The output equals VDD at cutoff, not at B."
    },
    {
     "id": "c",
     "text": "The gate voltage equals the supply voltage",
     "misconception": "Uses an unrelated gate level.",
     "rationale": "B is defined by VDS = VOV, not by the gate reaching VDD."
    }
   ],
   "explanation": "In saturation VDS ≥ VOV. At B, VDS = VOV exactly: beyond it the transistor leaves saturation and enters triode.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-15.html",
     "label": "Lesson 15 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-15.html",
     "section": "A5 Method; C3"
    },
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 1"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/vtc.svg",
    "alt": "Voltage transfer curve of a common-source stage with points A, B and Q"
   }
  },
  {
   "id": "gr2-vtc-004",
   "type": "choice",
   "topic": "Voltage transfer curve and Q-point",
   "objective": "Know where the magnitude of the gain is largest",
   "prompt": "Within the saturation region of the CS voltage transfer curve, where is the slope (the gain magnitude) greatest?",
   "answer": {
    "id": "b",
    "text": "At point B, the boundary with triode"
   },
   "options": [
    {
     "id": "a",
     "text": "At point A, where the transistor turns on",
     "correct": false,
     "rationale": "The slope is small near A and grows as VGS rises toward B."
    },
    {
     "id": "b",
     "text": "At point B, the boundary with triode",
     "correct": true
    },
    {
     "id": "c",
     "text": "Halfway between A and B",
     "correct": false,
     "rationale": "The slope magnitude keeps increasing across saturation, so the maximum is at the end."
    },
    {
     "id": "d",
     "text": "In the triode region",
     "correct": false,
     "rationale": "In triode the curve flattens; gain magnitude falls."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "At point A, where the transistor turns on",
     "misconception": "Thinks gain is greatest just after turn-on.",
     "rationale": "The slope is small near A and grows as VGS rises toward B."
    },
    {
     "id": "c",
     "text": "Halfway between A and B",
     "misconception": "Assumes the steepest point is the midpoint.",
     "rationale": "The slope magnitude keeps increasing across saturation, so the maximum is at the end."
    },
    {
     "id": "d",
     "text": "In the triode region",
     "misconception": "Believes triode amplifies most.",
     "rationale": "In triode the curve flattens; gain magnitude falls."
    }
   ],
   "explanation": "The gain is the slope of the VTC. It is smallest at A, increases through saturation and peaks at B before the curve flattens in triode.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-15.html",
     "label": "Lesson 15 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-15.html",
     "section": "A5 Checks"
    },
    {
     "file": "lesson-guides/lesson-16.html",
     "section": "p. 16-2 \"Where in SAT is the slope the greatest?\""
    },
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 1"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/vtc.svg",
    "alt": "Voltage transfer curve of a common-source stage with points A, B and Q"
   }
  },
  {
   "id": "gr2-vtc-005",
   "type": "true-false",
   "topic": "Voltage transfer curve and Q-point",
   "objective": "Compare gain magnitude between A and B",
   "prompt": "True or false: on the common-source voltage transfer curve, the gain magnitude at every point between A and B is smaller than the gain magnitude at point B.",
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
     "rationale": "The slope increases monotonically toward B within saturation."
    }
   ],
   "distractors": [
    {
     "id": "false",
     "text": "False",
     "misconception": "Thinks gain could peak inside the saturation region.",
     "rationale": "The slope increases monotonically toward B within saturation."
    }
   ],
   "explanation": "The curve steepens as vGS increases, so the largest saturation-region gain is at B, and every earlier point has smaller magnitude.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-15.html",
     "label": "Lesson 15 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-16.html",
     "section": "p. 16-2 (A_v,max)"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 16 objectives"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/vtc.svg",
    "alt": "Voltage transfer curve of a common-source stage with points A, B and Q"
   }
  },
  {
   "id": "gr2-vtc-006",
   "type": "choice",
   "topic": "Voltage transfer curve and Q-point",
   "objective": "Explain why not to bias exactly at B",
   "prompt": "On the common-source voltage transfer curve, why is it a poor idea to bias the amplifier (place the Q-point) exactly at point B?",
   "answer": {
    "id": "b",
    "text": "The signal would drive the transistor into triode on the downswing, causing distortion"
   },
   "options": [
    {
     "id": "a",
     "text": "Because the gain is zero at B",
     "correct": false,
     "rationale": "B has the largest gain; the problem is lack of swing, not gain."
    },
    {
     "id": "b",
     "text": "The signal would drive the transistor into triode on the downswing, causing distortion",
     "correct": true
    },
    {
     "id": "c",
     "text": "Because the transistor is cut off at B",
     "correct": false,
     "rationale": "Cutoff is on the A side; B is the triode edge."
    },
    {
     "id": "d",
     "text": "Because the drain current is maximum there",
     "correct": false,
     "rationale": "The issue is the missing room for the output to go lower without leaving saturation."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Because the gain is zero at B",
     "misconception": "Believes B has no gain.",
     "rationale": "B has the largest gain; the problem is lack of swing, not gain."
    },
    {
     "id": "c",
     "text": "Because the transistor is cut off at B",
     "misconception": "Mixes up B with A.",
     "rationale": "Cutoff is on the A side; B is the triode edge."
    },
    {
     "id": "d",
     "text": "Because the drain current is maximum there",
     "misconception": "Focuses on current rather than headroom.",
     "rationale": "The issue is the missing room for the output to go lower without leaving saturation."
    }
   ],
   "explanation": "At B there is no room below the Q-point before the device enters triode. Any further downswing is distorted, so Q is chosen between A and B.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-15.html",
     "label": "Lesson 15 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-15.html",
     "section": "A6 Common mistakes"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 15 objectives"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/vtc.svg",
    "alt": "Voltage transfer curve of a common-source stage with points A, B and Q"
   }
  },
  {
   "id": "gr2-vtc-007",
   "type": "choice",
   "topic": "Voltage transfer curve and Q-point",
   "objective": "Explain why not to bias near A",
   "prompt": "On the common-source voltage transfer curve, why is a Q-point very close to point A also unattractive?",
   "answer": {
    "id": "d",
    "text": "The gain is small there and the output has little room to move toward cutoff"
   },
   "options": [
    {
     "id": "a",
     "text": "The transistor is in triode near A",
     "correct": false,
     "rationale": "Triode is on the other side, near B."
    },
    {
     "id": "b",
     "text": "The gain is largest near A, which distorts",
     "correct": false,
     "rationale": "The gain is smallest near A."
    },
    {
     "id": "c",
     "text": "The supply current is zero so nothing happens",
     "correct": false,
     "rationale": "The device amplifies a little, but with weak gain and limited swing toward cutoff."
    },
    {
     "id": "d",
     "text": "The gain is small there and the output has little room to move toward cutoff",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The transistor is in triode near A",
     "misconception": "Mislocates the triode region.",
     "rationale": "Triode is on the other side, near B."
    },
    {
     "id": "b",
     "text": "The gain is largest near A, which distorts",
     "misconception": "Thinks high gain is the problem.",
     "rationale": "The gain is smallest near A."
    },
    {
     "id": "c",
     "text": "The supply current is zero so nothing happens",
     "misconception": "Oversimplifies to a dead circuit.",
     "rationale": "The device amplifies a little, but with weak gain and limited swing toward cutoff."
    }
   ],
   "explanation": "Near A the slope is small, so gain is weak, and the output is near VDD with little room to rise further. A middle Q-point balances gain and swing.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-15.html",
     "label": "Lesson 15 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-15.html",
     "section": "A6 Method"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 15 objectives"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/vtc.svg",
    "alt": "Voltage transfer curve of a common-source stage with points A, B and Q"
   }
  },
  {
   "id": "gr2-vtc-008",
   "type": "choice",
   "topic": "Voltage transfer curve and Q-point",
   "objective": "Explain the minus sign in the CS gain",
   "prompt": "What does the minus sign in the small-signal gain of a common-source amplifier tell you?",
   "answer": {
    "id": "b",
    "text": "The output is inverted: it is 180° out of phase with the input"
   },
   "options": [
    {
     "id": "a",
     "text": "The amplifier attenuates the signal",
     "correct": false,
     "rationale": "The sign gives phase; the magnitude says whether it amplifies."
    },
    {
     "id": "b",
     "text": "The output is inverted: it is 180° out of phase with the input",
     "correct": true
    },
    {
     "id": "c",
     "text": "The gate voltage must be negative",
     "correct": false,
     "rationale": "The minus sign is about the relation between small signals, not the DC bias."
    },
    {
     "id": "d",
     "text": "The drain current flows backward",
     "correct": false,
     "rationale": "Drain current still flows from drain to source; the output inverts because a larger current drops more voltage across RD."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The amplifier attenuates the signal",
     "misconception": "Reads the sign as a loss.",
     "rationale": "The sign gives phase; the magnitude says whether it amplifies."
    },
    {
     "id": "c",
     "text": "The gate voltage must be negative",
     "misconception": "Ties the sign to a bias polarity.",
     "rationale": "The minus sign is about the relation between small signals, not the DC bias."
    },
    {
     "id": "d",
     "text": "The drain current flows backward",
     "misconception": "Misreads current direction.",
     "rationale": "Drain current still flows from drain to source; the output inverts because a larger current drops more voltage across RD."
    }
   ],
   "explanation": "When vgs rises, drain current rises and the drop across RD rises, so the drain voltage falls. That is an inversion: gain negative.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-15.html",
     "label": "Lesson 15 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-16.html",
     "section": "p. 16-1 \"phase shift\""
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 16 objectives"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/vtc.svg",
    "alt": "Voltage transfer curve of a common-source stage with points A, B and Q"
   }
  },
  {
   "id": "gr2-vtc-009",
   "type": "multi-select",
   "topic": "Voltage transfer curve and Q-point",
   "objective": "Judge what a good Q-point must satisfy",
   "prompt": "Which considerations should guide where you place the Q-point of a common-source stage? Select all that apply.",
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
     "text": "Maximum gain only, regardless of swing",
     "correct": false,
     "rationale": "Maximum gain is at B, where the output has no downward room."
    },
    {
     "id": "b",
     "text": "Enough room for the output to swing toward both cutoff and triode",
     "correct": true
    },
    {
     "id": "c",
     "text": "The point where the drain current is zero",
     "correct": false,
     "rationale": "With zero current there is no amplification."
    },
    {
     "id": "d",
     "text": "Enough gain for the specification",
     "correct": true
    },
    {
     "id": "e",
     "text": "The point where VDS equals VDD",
     "correct": false,
     "rationale": "That is the cutoff output, where gain is nil."
    },
    {
     "id": "f",
     "text": "A signal small enough that the small-signal approximation stays valid",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Maximum gain only, regardless of swing",
     "misconception": "Treats gain as the only goal.",
     "rationale": "Maximum gain is at B, where the output has no downward room."
    },
    {
     "id": "c",
     "text": "The point where the drain current is zero",
     "misconception": "Mistakes cutoff for a bias point.",
     "rationale": "With zero current there is no amplification."
    },
    {
     "id": "e",
     "text": "The point where VDS equals VDD",
     "misconception": "Confuses the cutoff level with a bias choice.",
     "rationale": "That is the cutoff output, where gain is nil."
    }
   ],
   "explanation": "The Q-point is a compromise between gain, swing in both directions, and linearity. A usable point lies between A and B and keeps the signal small relative to VOV.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-15.html",
     "label": "Lesson 15 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-15.html",
     "section": "A6"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 15 objectives"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/vtc.svg",
    "alt": "Voltage transfer curve of a common-source stage with points A, B and Q"
   }
  },
  {
   "id": "gr2-vtc-010",
   "type": "sequence",
   "topic": "Voltage transfer curve and Q-point",
   "objective": "Order the reasoning for locating point B",
   "prompt": "Put the reasoning for finding where saturation ends on the CS voltage transfer curve in order.",
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
     "text": "Recognize that at B the drain-source voltage equals the overdrive voltage"
    },
    {
     "id": "s2",
     "text": "Write the saturation drain current and the loop equation for the output voltage"
    },
    {
     "id": "s3",
     "text": "Combine them into one quadratic equation for the drain-source voltage"
    },
    {
     "id": "s4",
     "text": "Keep the physically valid (positive) root"
    },
    {
     "id": "s5",
     "text": "Add the threshold voltage to obtain the gate voltage at B"
    }
   ],
   "distractors": [
    {
     "id": "d1",
     "text": "Solve a quadratic before stating the boundary condition",
     "misconception": "Skips the defining condition.",
     "rationale": "The quadratic only exists after the B condition is substituted."
    },
    {
     "id": "d2",
     "text": "Keep the negative root because it is smaller",
     "misconception": "Picks a root by size, not physical validity.",
     "rationale": "A negative drain-source voltage is not meaningful here."
    }
   ],
   "explanation": "The condition VDS = VOV links the saturation current to the output loop equation, giving a quadratic in VDS. The positive root is physical, and VGS,B follows by adding Vt.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-15.html",
     "label": "Lesson 15 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-15.html",
     "section": "A5 Method"
    },
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 1"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/vtc.svg",
    "alt": "Voltage transfer curve of a common-source stage with points A, B and Q"
   }
  },
  {
   "id": "gr2-vtc-011",
   "type": "choice",
   "topic": "Voltage transfer curve and Q-point",
   "objective": "Name the transistor model used in saturation for amplification",
   "prompt": "In saturation, how does a MOSFET behave as seen from its drain terminal?",
   "answer": {
    "id": "d",
    "text": "Like a voltage-controlled current source: the gate-source voltage sets the drain current"
   },
   "options": [
    {
     "id": "a",
     "text": "Like a resistor set by the drain voltage",
     "correct": false,
     "rationale": "In triode the channel acts like a voltage-dependent resistor."
    },
    {
     "id": "b",
     "text": "Like a battery fixing the drain voltage",
     "correct": false,
     "rationale": "The drain current is controlled, not the drain voltage."
    },
    {
     "id": "c",
     "text": "Like an open circuit",
     "correct": false,
     "rationale": "Saturation carries current set by vGS."
    },
    {
     "id": "d",
     "text": "Like a voltage-controlled current source: the gate-source voltage sets the drain current",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Like a resistor set by the drain voltage",
     "misconception": "Describes triode.",
     "rationale": "In triode the channel acts like a voltage-dependent resistor."
    },
    {
     "id": "b",
     "text": "Like a battery fixing the drain voltage",
     "misconception": "Treats the drain as a voltage source.",
     "rationale": "The drain current is controlled, not the drain voltage."
    },
    {
     "id": "c",
     "text": "Like an open circuit",
     "misconception": "Describes cutoff.",
     "rationale": "Saturation carries current set by vGS."
    }
   ],
   "explanation": "In saturation the drain current depends (to first order) only on vGS, not on vDS, so the drain behaves like a controlled current source. This is what makes amplification possible.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-15.html",
     "label": "Lesson 15 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-15.html",
     "section": "B5 Saturation as a voltage-controlled current source"
    }
   ]
  },
  {
   "id": "gr2-vtc-012",
   "type": "choice",
   "topic": "Voltage transfer curve and Q-point",
   "objective": "Define linearity for an amplifier",
   "prompt": "What does it mean for an amplifier to operate linearly?",
   "answer": {
    "id": "b",
    "text": "The output is a scaled copy of the input, with no distortion from the transistor leaving its small-signal range"
   },
   "options": [
    {
     "id": "a",
     "text": "The output equals the input with no gain",
     "correct": false,
     "rationale": "Linear means proportional, not equal."
    },
    {
     "id": "b",
     "text": "The output is a scaled copy of the input, with no distortion from the transistor leaving its small-signal range",
     "correct": true
    },
    {
     "id": "c",
     "text": "The circuit contains no capacitors",
     "correct": false,
     "rationale": "Linearity is about signal behavior, not component types."
    },
    {
     "id": "d",
     "text": "The drain current is constant",
     "correct": false,
     "rationale": "A constant current gives no output signal at all."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The output equals the input with no gain",
     "misconception": "Equates linear with unity gain.",
     "rationale": "Linear means proportional, not equal."
    },
    {
     "id": "c",
     "text": "The circuit contains no capacitors",
     "misconception": "Associates linear with the parts list.",
     "rationale": "Linearity is about signal behavior, not component types."
    },
    {
     "id": "d",
     "text": "The drain current is constant",
     "misconception": "Confuses linear with DC.",
     "rationale": "A constant current gives no output signal at all."
    }
   ],
   "explanation": "A linear amplifier produces an output proportional to the input. For a MOSFET this holds when the signal across gate and source is small compared with the overdrive voltage.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-15.html",
     "label": "Lesson 15 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-15.html",
     "section": "B5 signal swing, linearity"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 15 objectives"
    }
   ]
  },
  {
   "id": "gr2-vtc-013",
   "type": "choice",
   "topic": "Voltage transfer curve and Q-point",
   "objective": "Interpret a headroom and legroom check",
   "prompt": "In a common-source amplifier you check the highest and lowest drain-source voltage reached during the signal swing. What are you verifying?",
   "answer": {
    "id": "d",
    "text": "That the output stays inside saturation at both ends: above the triode limit and below the cutoff/supply limit"
   },
   "options": [
    {
     "id": "a",
     "text": "That the average gain is high enough",
     "correct": false,
     "rationale": "The check is about where the output goes, not how big the gain is."
    },
    {
     "id": "b",
     "text": "That the input resistance is large enough",
     "correct": false,
     "rationale": "Input resistance is checked with the gate divider, not with the swing."
    },
    {
     "id": "c",
     "text": "That the capacitors are charged",
     "correct": false,
     "rationale": "The swing check concerns the transistor's operating region."
    },
    {
     "id": "d",
     "text": "That the output stays inside saturation at both ends: above the triode limit and below the cutoff/supply limit",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "That the average gain is high enough",
     "misconception": "Treats the check as a gain test.",
     "rationale": "The check is about where the output goes, not how big the gain is."
    },
    {
     "id": "b",
     "text": "That the input resistance is large enough",
     "misconception": "Mixes up different checks.",
     "rationale": "Input resistance is checked with the gate divider, not with the swing."
    },
    {
     "id": "c",
     "text": "That the capacitors are charged",
     "misconception": "Brings in capacitor charging.",
     "rationale": "The swing check concerns the transistor's operating region."
    }
   ],
   "explanation": "The headroom/legroom step adds and subtracts the peak output swing from the DC drain level to confirm the transistor never leaves saturation.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-18.html",
     "label": "Lesson 18 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 2 Step 6"
    },
    {
     "file": "lesson-guides/lesson-18.html",
     "section": "A4 Checking the output swing"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/vtc.svg",
    "alt": "Voltage transfer curve of a common-source stage with points A, B and Q"
   }
  },
  {
   "id": "gr2-ss-001",
   "type": "choice",
   "topic": "Small-signal model and gm",
   "objective": "Read the course notation for total, DC and signal quantities",
   "prompt": "In the course notation, what does the symbol vgs (lowercase v, lowercase subscript) stand for?",
   "answer": {
    "id": "a",
    "text": "The small-signal (ac) part of the gate-source voltage"
   },
   "options": [
    {
     "id": "a",
     "text": "The small-signal (ac) part of the gate-source voltage",
     "correct": true
    },
    {
     "id": "b",
     "text": "The total instantaneous gate-source voltage",
     "correct": false,
     "rationale": "The total instantaneous value is written vGS: lowercase v with uppercase subscript."
    },
    {
     "id": "c",
     "text": "The DC bias gate-source voltage",
     "correct": false,
     "rationale": "The DC bias is VGS, uppercase with uppercase subscript."
    },
    {
     "id": "d",
     "text": "The peak gate-source voltage",
     "correct": false,
     "rationale": "The peak is written with a comma-pk subscript such as vgs,pk."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "The total instantaneous gate-source voltage",
     "misconception": "Mixes up the lowercase/uppercase conventions.",
     "rationale": "The total instantaneous value is written vGS: lowercase v with uppercase subscript."
    },
    {
     "id": "c",
     "text": "The DC bias gate-source voltage",
     "misconception": "Treats any V symbol as DC.",
     "rationale": "The DC bias is VGS, uppercase with uppercase subscript."
    },
    {
     "id": "d",
     "text": "The peak gate-source voltage",
     "misconception": "Confuses the signal with its peak value.",
     "rationale": "The peak is written with a comma-pk subscript such as vgs,pk."
    }
   ],
   "explanation": "Uppercase letter with uppercase subscript is DC (VGS); lowercase with uppercase subscript is the total (vGS); lowercase with lowercase subscript is the signal (vgs).",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-16.html",
     "label": "Lesson 16 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-16.html",
     "section": "p. 16-4 notation iD, ID, id; vGS, VGS, vgs"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 5 objectives"
    }
   ]
  },
  {
   "id": "gr2-ss-002",
   "type": "choice",
   "topic": "Small-signal model and gm",
   "objective": "Read the course notation for drain current",
   "prompt": "Which symbol is the total instantaneous drain current, DC plus signal?",
   "answer": {
    "id": "c",
    "text": "iD"
   },
   "options": [
    {
     "id": "a",
     "text": "ID",
     "correct": false,
     "rationale": "ID is only the DC bias part."
    },
    {
     "id": "b",
     "text": "id",
     "correct": false,
     "rationale": "id is only the signal part."
    },
    {
     "id": "c",
     "text": "iD",
     "correct": true
    },
    {
     "id": "d",
     "text": "Id",
     "correct": false,
     "rationale": "The notation uses iD, ID and id; Id is not one of them."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "ID",
     "misconception": "Treats the uppercase symbol as the total.",
     "rationale": "ID is only the DC bias part."
    },
    {
     "id": "b",
     "text": "id",
     "misconception": "Treats the lowercase symbol as the total.",
     "rationale": "id is only the signal part."
    },
    {
     "id": "d",
     "text": "Id",
     "misconception": "Invents a mixed-case form.",
     "rationale": "The notation uses iD, ID and id; Id is not one of them."
    }
   ],
   "explanation": "iD = ID + id: the total current is the DC bias current plus the signal current. Keeping the three forms straight matters because the small-signal current id is what the model multiplies by gm, while ID is the DC bias that sets gm.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-16.html",
     "label": "Lesson 16 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-16.html",
     "section": "p. 16-4"
    }
   ]
  },
  {
   "id": "gr2-ss-003",
   "type": "choice",
   "topic": "Small-signal model and gm",
   "objective": "Say why a small-signal model is used",
   "prompt": "Why do we replace the MOSFET with a small-signal model when analyzing an amplifier's gain?",
   "answer": {
    "id": "a",
    "text": "The square-law current can be treated as linear around the Q-point when the signal is small, which lets us use simple linear circuit analysis"
   },
   "options": [
    {
     "id": "a",
     "text": "The square-law current can be treated as linear around the Q-point when the signal is small, which lets us use simple linear circuit analysis",
     "correct": true
    },
    {
     "id": "b",
     "text": "Because the transistor stops obeying the square law when a signal is applied",
     "correct": false,
     "rationale": "The device obeys the same law; the model is a linear approximation of it near the bias point."
    },
    {
     "id": "c",
     "text": "Because the DC bias no longer matters once a signal is present",
     "correct": false,
     "rationale": "The bias sets the model parameters such as gm."
    },
    {
     "id": "d",
     "text": "Because capacitors cannot be handled in DC analysis",
     "correct": false,
     "rationale": "Capacitors are handled by short-circuiting them for signals; that is not the reason for the model."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "Because the transistor stops obeying the square law when a signal is applied",
     "misconception": "Thinks signals change the device physics.",
     "rationale": "The device obeys the same law; the model is a linear approximation of it near the bias point."
    },
    {
     "id": "c",
     "text": "Because the DC bias no longer matters once a signal is present",
     "misconception": "Drops the bias from the analysis.",
     "rationale": "The bias sets the model parameters such as gm."
    },
    {
     "id": "d",
     "text": "Because capacitors cannot be handled in DC analysis",
     "misconception": "Confuses the reason with a circuit detail.",
     "rationale": "Capacitors are handled by short-circuiting them for signals; that is not the reason for the model."
    }
   ],
   "explanation": "Around a Q-point the nonlinear iD–vGS curve looks like a straight line of slope gm for small signals. This turns the amplifier into a linear circuit.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-16.html",
     "label": "Lesson 16 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-16.html",
     "section": "pp. 16-4 to 16-6"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 16 objectives"
    }
   ]
  },
  {
   "id": "gr2-ss-004",
   "type": "choice",
   "topic": "Small-signal model and gm",
   "objective": "Define transconductance",
   "prompt": "How is the small-signal transconductance gm defined?",
   "answer": {
    "id": "c",
    "text": "As the ratio of the signal drain current to the signal gate-source voltage, the slope of the iD–vGS curve at the Q-point"
   },
   "options": [
    {
     "id": "a",
     "text": "As the ratio of signal gate-source voltage to signal drain current",
     "correct": false,
     "rationale": "That ratio would be a resistance; gm is a current per volt."
    },
    {
     "id": "b",
     "text": "As the ratio of DC drain current to DC gate-source voltage",
     "correct": false,
     "rationale": "gm is a slope at the Q-point, not a DC ratio."
    },
    {
     "id": "c",
     "text": "As the ratio of the signal drain current to the signal gate-source voltage, the slope of the iD–vGS curve at the Q-point",
     "correct": true
    },
    {
     "id": "d",
     "text": "As the ratio of signal drain voltage to signal gate-source voltage",
     "correct": false,
     "rationale": "That ratio is the gain Av, which also involves RD."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "As the ratio of signal gate-source voltage to signal drain current",
     "misconception": "Inverts the ratio.",
     "rationale": "That ratio would be a resistance; gm is a current per volt."
    },
    {
     "id": "b",
     "text": "As the ratio of DC drain current to DC gate-source voltage",
     "misconception": "Uses DC quantities instead of the slope.",
     "rationale": "gm is a slope at the Q-point, not a DC ratio."
    },
    {
     "id": "d",
     "text": "As the ratio of signal drain voltage to signal gate-source voltage",
     "misconception": "Describes the voltage gain.",
     "rationale": "That ratio is the gain Av, which also involves RD."
    }
   ],
   "explanation": "gm = id / vgs is the slope of the drain current versus gate-source voltage curve at the operating point: how much signal current one volt of signal voltage produces.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-18.html",
     "label": "Lesson 18 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-16.html",
     "section": "p. 16-5 DEF small-signal transconductance"
    },
    {
     "file": "lesson-guides/lesson-18.html",
     "section": "B2 Saturation and overdrive"
    }
   ]
  },
  {
   "id": "gr2-ss-005",
   "type": "choice",
   "topic": "Small-signal model and gm",
   "objective": "Say why the vgs-squared term is dropped",
   "prompt": "When the MOSFET's saturation drain current is expanded around the Q-point for small signals, why can the term proportional to vgs squared be neglected?",
   "answer": {
    "id": "a",
    "text": "It is negligible compared with the linear term as long as vgs is much smaller than twice the overdrive voltage"
   },
   "options": [
    {
     "id": "a",
     "text": "It is negligible compared with the linear term as long as vgs is much smaller than twice the overdrive voltage",
     "correct": true
    },
    {
     "id": "b",
     "text": "It is always exactly zero in saturation",
     "correct": false,
     "rationale": "It exists; it is merely small compared with the linear term for small signals."
    },
    {
     "id": "c",
     "text": "It is part of the DC bias current",
     "correct": false,
     "rationale": "The DC part is the constant term; the squared term varies with the signal."
    },
    {
     "id": "d",
     "text": "It is removed by the coupling capacitors",
     "correct": false,
     "rationale": "Capacitors do not change the transistor's current law."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "It is always exactly zero in saturation",
     "misconception": "Believes the quadratic term does not exist.",
     "rationale": "It exists; it is merely small compared with the linear term for small signals."
    },
    {
     "id": "c",
     "text": "It is part of the DC bias current",
     "misconception": "Assigns it to the DC part.",
     "rationale": "The DC part is the constant term; the squared term varies with the signal."
    },
    {
     "id": "d",
     "text": "It is removed by the coupling capacitors",
     "misconception": "Credits the capacitors.",
     "rationale": "Capacitors do not change the transistor's current law."
    }
   ],
   "explanation": "The signal current has a linear part (gm vgs) and a small quadratic part. The model keeps only the linear part, so it is valid while vgs ≪ 2VOV.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-16.html",
     "label": "Lesson 16 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-16.html",
     "section": "pp. 16-4 to 16-5 \"Want to know when KnVOV >> ½Kn...\""
    },
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 1 Validity check"
    }
   ]
  },
  {
   "id": "gr2-ss-006",
   "type": "true-false",
   "topic": "Small-signal model and gm",
   "objective": "Relate gm to bias current",
   "prompt": "True or false: for a given transistor, raising the DC drain current increases its transconductance gm.",
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
     "rationale": "gm depends on the Q-point; a larger bias current means a larger overdrive voltage and a larger gm."
    }
   ],
   "distractors": [
    {
     "id": "false",
     "text": "False",
     "misconception": "Thinks gm is a fixed device constant.",
     "rationale": "gm depends on the Q-point; a larger bias current means a larger overdrive voltage and a larger gm."
    }
   ],
   "explanation": "The slope of the square-law curve grows with the bias point, so gm increases with ID (and with VOV).",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-18.html",
     "label": "Lesson 18 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-18.html",
     "section": "B2 gm = Kn VOV = √(2 Kn ID)"
    },
    {
     "file": "lesson-guides/lesson-16.html",
     "section": "p. 16-5"
    }
   ]
  },
  {
   "id": "gr2-ss-007",
   "type": "multi-select",
   "topic": "Small-signal model and gm",
   "objective": "Know which Q-point information fixes gm",
   "prompt": "Which of these pairs of Q-point information is enough to determine gm? Select all that apply.",
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
     "text": "The supply VDD and the drain resistor RD only",
     "correct": false,
     "rationale": "Those fix the bias circuit but not the device parameters needed for gm."
    },
    {
     "id": "b",
     "text": "The device constant Kn and the overdrive voltage VOV",
     "correct": true
    },
    {
     "id": "c",
     "text": "The threshold voltage Vt and the DC gate voltage only",
     "correct": false,
     "rationale": "They give VOV only if the source voltage is known, and still lack the current scale."
    },
    {
     "id": "d",
     "text": "The bias current ID and the overdrive voltage VOV",
     "correct": true
    },
    {
     "id": "e",
     "text": "The output resistance ro alone",
     "correct": false,
     "rationale": "ro describes channel-length modulation and does not determine gm."
    },
    {
     "id": "f",
     "text": "The device constant Kn and the bias current ID",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The supply VDD and the drain resistor RD only",
     "misconception": "Thinks the circuit values alone fix gm.",
     "rationale": "Those fix the bias circuit but not the device parameters needed for gm."
    },
    {
     "id": "c",
     "text": "The threshold voltage Vt and the DC gate voltage only",
     "misconception": "Stops before finding the overdrive and current scale.",
     "rationale": "They give VOV only if the source voltage is known, and still lack the current scale."
    },
    {
     "id": "e",
     "text": "The output resistance ro alone",
     "misconception": "Confuses gm with ro.",
     "rationale": "ro describes channel-length modulation and does not determine gm."
    }
   ],
   "explanation": "The course writes gm in three equivalent forms, using Kn and VOV, or ID and VOV, or Kn and ID. Any pair that contains the current scale and the overdrive (or Kn) works.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-18.html",
     "label": "Lesson 18 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-18.html",
     "section": "B2"
    },
    {
     "file": "lesson-guides/lesson-16.html",
     "section": "p. 16-5"
    }
   ]
  },
  {
   "id": "gr2-ss-008",
   "type": "choice",
   "topic": "Small-signal model and gm",
   "objective": "Treat DC voltage sources in the signal analysis",
   "prompt": "When building the small-signal circuit, how is an ideal DC voltage supply treated?",
   "answer": {
    "id": "c",
    "text": "It is replaced by a short circuit (ac ground)"
   },
   "options": [
    {
     "id": "a",
     "text": "It is replaced by an open circuit",
     "correct": false,
     "rationale": "An ideal voltage source with zero signal has zero voltage across it, which is a short."
    },
    {
     "id": "b",
     "text": "It is kept at its DC value",
     "correct": false,
     "rationale": "The signal analysis uses only the changes; a DC supply does not change."
    },
    {
     "id": "c",
     "text": "It is replaced by a short circuit (ac ground)",
     "correct": true
    },
    {
     "id": "d",
     "text": "It is replaced by a resistor equal to RD",
     "correct": false,
     "rationale": "No such substitution exists."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "It is replaced by an open circuit",
     "misconception": "Mixes up voltage and current sources.",
     "rationale": "An ideal voltage source with zero signal has zero voltage across it, which is a short."
    },
    {
     "id": "b",
     "text": "It is kept at its DC value",
     "misconception": "Keeps the bias in the signal circuit.",
     "rationale": "The signal analysis uses only the changes; a DC supply does not change."
    },
    {
     "id": "d",
     "text": "It is replaced by a resistor equal to RD",
     "misconception": "Invents a substitution.",
     "rationale": "No such substitution exists."
    }
   ],
   "explanation": "A DC voltage source holds its voltage constant, so its signal voltage is zero: electrically a short. A DC current source carries zero signal current: an open circuit.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-26.html",
     "label": "Lesson 26 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-16.html",
     "section": "p. 16-6 To use: DC voltage supplies →"
    },
    {
     "file": "lesson-guides/lesson-26.html",
     "section": "A4 Method"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_basic.svg",
    "alt": "Common-source amplifier with gate divider, coupling capacitors and load"
   }
  },
  {
   "id": "gr2-ss-009",
   "type": "multi-select",
   "topic": "Small-signal model and gm",
   "objective": "Know the standard small-signal replacements",
   "prompt": "Which replacements are correct when forming the small-signal circuit? Select all that apply.",
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
     "text": "Ideal DC voltage sources become open circuits",
     "correct": false,
     "rationale": "Their signal voltage is zero, so they act as shorts."
    },
    {
     "id": "b",
     "text": "Ideal DC voltage sources become short circuits",
     "correct": true
    },
    {
     "id": "c",
     "text": "Coupling capacitors become open circuits",
     "correct": false,
     "rationale": "At signal frequencies a large capacitor passes the signal, so it is a short."
    },
    {
     "id": "d",
     "text": "Ideal DC current sources become open circuits",
     "correct": true
    },
    {
     "id": "e",
     "text": "The transistor is kept as its square-law model",
     "correct": false,
     "rationale": "The transistor is replaced by the linear small-signal model."
    },
    {
     "id": "f",
     "text": "Large coupling and bypass capacitors become short circuits",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Ideal DC voltage sources become open circuits",
     "misconception": "Swaps the short and open rules.",
     "rationale": "Their signal voltage is zero, so they act as shorts."
    },
    {
     "id": "c",
     "text": "Coupling capacitors become open circuits",
     "misconception": "Uses the DC behavior of a capacitor.",
     "rationale": "At signal frequencies a large capacitor passes the signal, so it is a short."
    },
    {
     "id": "e",
     "text": "The transistor is kept as its square-law model",
     "misconception": "Keeps the nonlinear device.",
     "rationale": "The transistor is replaced by the linear small-signal model."
    }
   ],
   "explanation": "For signals: DC voltage sources are shorts, DC current sources are opens, and large capacitors are shorts. The transistor is replaced by its linear model.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-16.html",
     "label": "Lesson 16 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-16.html",
     "section": "p. 16-6, p. 16-9"
    },
    {
     "file": "lesson-guides/lesson-17.html",
     "section": "p. 17-3"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_basic.svg",
    "alt": "Common-source amplifier with gate divider, coupling capacitors and load"
   }
  },
  {
   "id": "gr2-ss-010",
   "type": "choice",
   "topic": "Small-signal model and gm",
   "objective": "Know the gate current in the model",
   "prompt": "What does the small-signal MOSFET model say about the current into the gate terminal?",
   "answer": {
    "id": "c",
    "text": "It is zero: the gate draws no current, so the transistor itself presents an infinite input resistance at the gate"
   },
   "options": [
    {
     "id": "a",
     "text": "It equals the drain current",
     "correct": false,
     "rationale": "The gate is insulated by the oxide; the drain current flows in the channel."
    },
    {
     "id": "b",
     "text": "It equals gm times vgs",
     "correct": false,
     "rationale": "gm·vgs is the drain-to-source controlled current, not a gate current."
    },
    {
     "id": "c",
     "text": "It is zero: the gate draws no current, so the transistor itself presents an infinite input resistance at the gate",
     "correct": true
    },
    {
     "id": "d",
     "text": "It depends on the load resistance",
     "correct": false,
     "rationale": "The gate current is zero regardless of the load."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "It equals the drain current",
     "misconception": "Confuses gate and drain current.",
     "rationale": "The gate is insulated by the oxide; the drain current flows in the channel."
    },
    {
     "id": "b",
     "text": "It equals gm times vgs",
     "misconception": "Assigns the controlled-source current to the gate.",
     "rationale": "gm·vgs is the drain-to-source controlled current, not a gate current."
    },
    {
     "id": "d",
     "text": "It depends on the load resistance",
     "misconception": "Links gate current to the load.",
     "rationale": "The gate current is zero regardless of the load."
    }
   ],
   "explanation": "The gate is insulated, so ig = 0. Any input resistance of the amplifier therefore comes from the bias resistors, not from the transistor.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-16.html",
     "label": "Lesson 16 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-16.html",
     "section": "pp. 16-7, 16-8 (ig = 0)"
    },
    {
     "file": "lesson-guides/lesson-17.html",
     "section": "p. 17-3"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/ss_model.svg",
    "alt": "Small-signal model of a MOSFET: open gate, controlled current source gm vgs and output resistance ro"
   }
  },
  {
   "id": "gr2-ss-011",
   "type": "choice",
   "topic": "Small-signal model and gm",
   "objective": "Say where ro goes in the model",
   "prompt": "Where does the transistor output resistance ro appear in the small-signal model, and what causes it?",
   "answer": {
    "id": "a",
    "text": "In parallel with the controlled current source between drain and source, caused by channel-length modulation"
   },
   "options": [
    {
     "id": "a",
     "text": "In parallel with the controlled current source between drain and source, caused by channel-length modulation",
     "correct": true
    },
    {
     "id": "b",
     "text": "In series with the gate, caused by the oxide capacitance",
     "correct": false,
     "rationale": "The gate carries no current; ro is a drain-side effect."
    },
    {
     "id": "c",
     "text": "Across the supply, caused by the bias resistors",
     "correct": false,
     "rationale": "ro is a property of the device between drain and source."
    },
    {
     "id": "d",
     "text": "In series with the controlled source, caused by Vt",
     "correct": false,
     "rationale": "It sits in parallel with the controlled source and comes from λ, not Vt."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "In series with the gate, caused by the oxide capacitance",
     "misconception": "Puts it at the gate and blames the oxide.",
     "rationale": "The gate carries no current; ro is a drain-side effect."
    },
    {
     "id": "c",
     "text": "Across the supply, caused by the bias resistors",
     "misconception": "Moves it to the supply.",
     "rationale": "ro is a property of the device between drain and source."
    },
    {
     "id": "d",
     "text": "In series with the controlled source, caused by Vt",
     "misconception": "Wrong placement and wrong cause.",
     "rationale": "It sits in parallel with the controlled source and comes from λ, not Vt."
    }
   ],
   "explanation": "Channel-length modulation makes the saturation current rise slightly with vDS. That slope is modeled as a resistor ro in parallel with gm vgs.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-21.html",
     "label": "Lesson 21 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-16.html",
     "section": "p. 16-8"
    },
    {
     "file": "lesson-guides/lesson-21.html",
     "section": "A5 r_o = 1/(λ ID)"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/ss_model.svg",
    "alt": "Small-signal model of a MOSFET: open gate, controlled current source gm vgs and output resistance ro"
   }
  },
  {
   "id": "gr2-ss-012",
   "type": "choice",
   "topic": "Small-signal model and gm",
   "objective": "Choose between the π-model and the T-model",
   "prompt": "When is the T-model usually preferred over the hybrid-π model?",
   "answer": {
    "id": "c",
    "text": "When other components are connected to the source terminal, such as a source resistor"
   },
   "options": [
    {
     "id": "a",
     "text": "When other components are connected to the gate",
     "correct": false,
     "rationale": "The gate draws no current; the T-model helps when the source has components."
    },
    {
     "id": "b",
     "text": "When the circuit has no coupling capacitors",
     "correct": false,
     "rationale": "Capacitors do not decide the model."
    },
    {
     "id": "c",
     "text": "When other components are connected to the source terminal, such as a source resistor",
     "correct": true
    },
    {
     "id": "d",
     "text": "When ro is zero",
     "correct": false,
     "rationale": "Both models include or omit ro the same way."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "When other components are connected to the gate",
     "misconception": "Swaps the roles of gate and source.",
     "rationale": "The gate draws no current; the T-model helps when the source has components."
    },
    {
     "id": "b",
     "text": "When the circuit has no coupling capacitors",
     "misconception": "Ties the choice to capacitors.",
     "rationale": "Capacitors do not decide the model."
    },
    {
     "id": "d",
     "text": "When ro is zero",
     "misconception": "Invents a condition.",
     "rationale": "Both models include or omit ro the same way."
    }
   ],
   "explanation": "Both models predict identical behavior. The T-model shows the source current path with 1/gm, which makes analysis easier when a resistor hangs on the source.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-16.html",
     "label": "Lesson 16 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-16.html",
     "section": "p. 16-8"
    },
    {
     "file": "lesson-guides/lesson-17.html",
     "section": "p. 17-8"
    },
    {
     "file": "lesson-guides/lesson-19.html",
     "section": "A2"
    }
   ]
  },
  {
   "id": "gr2-ss-013",
   "type": "choice",
   "topic": "Small-signal model and gm",
   "objective": "Link gain to gm and the drain resistance",
   "prompt": "In a common-source stage whose source is grounded (no source resistor), which two quantities set the magnitude of the open-circuit voltage gain?",
   "answer": {
    "id": "a",
    "text": "The transconductance gm and the drain resistance RD"
   },
   "options": [
    {
     "id": "a",
     "text": "The transconductance gm and the drain resistance RD",
     "correct": true
    },
    {
     "id": "b",
     "text": "The source resistance and the supply voltage",
     "correct": false,
     "rationale": "With a grounded source there is no RS in the gain, and VDD enters only through the bias."
    },
    {
     "id": "c",
     "text": "The gate divider resistors",
     "correct": false,
     "rationale": "The divider sets the bias and Ri, not the gain."
    },
    {
     "id": "d",
     "text": "The coupling capacitor values",
     "correct": false,
     "rationale": "Large capacitors are shorts for the signal and do not set the gain."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "The source resistance and the supply voltage",
     "misconception": "Names circuit pieces that are not in the gain.",
     "rationale": "With a grounded source there is no RS in the gain, and VDD enters only through the bias."
    },
    {
     "id": "c",
     "text": "The gate divider resistors",
     "misconception": "Thinks the bias divider sets the gain.",
     "rationale": "The divider sets the bias and Ri, not the gain."
    },
    {
     "id": "d",
     "text": "The coupling capacitor values",
     "misconception": "Credits the capacitors.",
     "rationale": "Large capacitors are shorts for the signal and do not set the gain."
    }
   ],
   "explanation": "The signal drain current gm vgs flows through RD, giving a drain signal of −gm vgs RD. So gain magnitude is gm times RD (with a load, RD in parallel with RL).",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-16.html",
     "label": "Lesson 16 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-16.html",
     "section": "p. 16-6, p. 16-9"
    },
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 1"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_basic.svg",
    "alt": "Common-source amplifier with gate divider, coupling capacitors and load"
   }
  },
  {
   "id": "gr2-ss-014",
   "type": "choice",
   "topic": "Small-signal model and gm",
   "objective": "Say what a load does to the gain formula",
   "prompt": "A load resistor RL is connected to the output of a common-source stage. How does the gain expression change?",
   "answer": {
    "id": "c",
    "text": "RD is replaced by RD in parallel with RL, while the open-circuit gain stays the same"
   },
   "options": [
    {
     "id": "a",
     "text": "RL is added in series with RD",
     "correct": false,
     "rationale": "For the signal the load is in parallel with RD at the output node."
    },
    {
     "id": "b",
     "text": "The gain is unchanged because RL is after the capacitor",
     "correct": false,
     "rationale": "The coupling capacitor passes the signal, so RL loads the output."
    },
    {
     "id": "c",
     "text": "RD is replaced by RD in parallel with RL, while the open-circuit gain stays the same",
     "correct": true
    },
    {
     "id": "d",
     "text": "gm changes by the ratio of RL to RD",
     "correct": false,
     "rationale": "gm is a device property at the Q-point; loading changes the resistance only."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "RL is added in series with RD",
     "misconception": "Combines the resistors in series.",
     "rationale": "For the signal the load is in parallel with RD at the output node."
    },
    {
     "id": "b",
     "text": "The gain is unchanged because RL is after the capacitor",
     "misconception": "Believes the capacitor isolates the load for the signal.",
     "rationale": "The coupling capacitor passes the signal, so RL loads the output."
    },
    {
     "id": "d",
     "text": "gm changes by the ratio of RL to RD",
     "misconception": "Alters the transistor parameter.",
     "rationale": "gm is a device property at the Q-point; loading changes the resistance only."
    }
   ],
   "explanation": "For the signal the coupling capacitor is a short, so RL appears from the drain to ground in parallel with RD. Avo is the no-load value and is unchanged.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-16.html",
     "label": "Lesson 16 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-16.html",
     "section": "p. 16-9 \"If we consider no-load or ...\""
    },
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 6 Table, Av row"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_basic.svg",
    "alt": "Common-source amplifier with gate divider, coupling capacitors and load"
   }
  },
  {
   "id": "gr2-ss-015",
   "type": "choice",
   "topic": "Small-signal model and gm",
   "objective": "Link gain magnitude to the overdrive voltage",
   "prompt": "In a common-source stage the DC voltage dropped across RD is held fixed. What happens to the gain magnitude as the overdrive voltage VOV is made smaller?",
   "answer": {
    "id": "a",
    "text": "The gain magnitude increases, because it is inversely proportional to VOV"
   },
   "options": [
    {
     "id": "a",
     "text": "The gain magnitude increases, because it is inversely proportional to VOV",
     "correct": true
    },
    {
     "id": "b",
     "text": "The gain magnitude decreases because less current flows",
     "correct": false,
     "rationale": "Smaller VOV with a fixed drop means a larger RD relative to gm, so gain rises."
    },
    {
     "id": "c",
     "text": "The gain magnitude is unchanged",
     "correct": false,
     "rationale": "VOV sets gm, which sets the gain."
    },
    {
     "id": "d",
     "text": "The gain magnitude becomes zero",
     "correct": false,
     "rationale": "The transistor is still on; the gain is large, not zero."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "The gain magnitude decreases because less current flows",
     "misconception": "Reasons only from current.",
     "rationale": "Smaller VOV with a fixed drop means a larger RD relative to gm, so gain rises."
    },
    {
     "id": "c",
     "text": "The gain magnitude is unchanged",
     "misconception": "Thinks VOV only affects DC.",
     "rationale": "VOV sets gm, which sets the gain."
    },
    {
     "id": "d",
     "text": "The gain magnitude becomes zero",
     "misconception": "Confuses small VOV with cutoff.",
     "rationale": "The transistor is still on; the gain is large, not zero."
    }
   ],
   "explanation": "The gain magnitude can be written as the drop across RD divided by half of VOV. For a fixed drop, a smaller VOV gives a larger gain.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-16.html",
     "label": "Lesson 16 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-16.html",
     "section": "p. 16-2"
    },
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 1 gain expression"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_basic.svg",
    "alt": "Common-source amplifier with gate divider, coupling capacitors and load"
   }
  },
  {
   "id": "gr2-ss-016",
   "type": "choice",
   "topic": "Small-signal model and gm",
   "objective": "Link a small overdrive to the linearity cost",
   "prompt": "Making the overdrive voltage VOV very small raises a common-source stage's gain. Why does that cost you linearity?",
   "answer": {
    "id": "c",
    "text": "The signal across gate and source must stay small compared with the overdrive, so a small overdrive leaves very little allowed signal"
   },
   "options": [
    {
     "id": "a",
     "text": "Because a small overdrive turns the transistor off",
     "correct": false,
     "rationale": "The device is still on; the problem is the allowed signal size."
    },
    {
     "id": "b",
     "text": "Because a small overdrive raises the supply current",
     "correct": false,
     "rationale": "A small VOV generally means less current."
    },
    {
     "id": "c",
     "text": "The signal across gate and source must stay small compared with the overdrive, so a small overdrive leaves very little allowed signal",
     "correct": true
    },
    {
     "id": "d",
     "text": "Because it increases the gate current",
     "correct": false,
     "rationale": "The gate draws no current at any overdrive."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Because a small overdrive turns the transistor off",
     "misconception": "Treats small VOV as cutoff.",
     "rationale": "The device is still on; the problem is the allowed signal size."
    },
    {
     "id": "b",
     "text": "Because a small overdrive raises the supply current",
     "misconception": "Reverses the current trend.",
     "rationale": "A small VOV generally means less current."
    },
    {
     "id": "d",
     "text": "Because it increases the gate current",
     "misconception": "Invents gate current.",
     "rationale": "The gate draws no current at any overdrive."
    }
   ],
   "explanation": "The linearity test compares vgs,pk with VOV (the course uses a fraction of VOV). The smaller VOV is, the smaller the signal you may apply, which is why design steps say VOV must not be too small.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-16.html",
     "label": "Lesson 16 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 2 Step 4 note"
    },
    {
     "file": "lesson-guides/lesson-16.html",
     "section": "p. 16-5"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_basic.svg",
    "alt": "Common-source amplifier with gate divider, coupling capacitors and load"
   }
  },
  {
   "id": "gr2-ss-017",
   "type": "choice",
   "topic": "Small-signal model and gm",
   "objective": "Identify the check that sets the largest input amplitude",
   "prompt": "What limits how large an input signal a common-source amplifier can handle before its output distorts?",
   "answer": {
    "id": "a",
    "text": "The output must not enter triode: the lowest drain voltage must stay above the edge of saturation"
   },
   "options": [
    {
     "id": "a",
     "text": "The output must not enter triode: the lowest drain voltage must stay above the edge of saturation",
     "correct": true
    },
    {
     "id": "b",
     "text": "The gate voltage must never exceed the supply",
     "correct": false,
     "rationale": "The distortion comes from the output leaving saturation, not from the gate limit."
    },
    {
     "id": "c",
     "text": "The drain current must stay constant",
     "correct": false,
     "rationale": "The signal current is what amplification produces."
    },
    {
     "id": "d",
     "text": "The output must stay above zero volts",
     "correct": false,
     "rationale": "The limit is the triode edge, which is above ground by VOV in this arrangement."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "The gate voltage must never exceed the supply",
     "misconception": "Limits the gate by the supply.",
     "rationale": "The distortion comes from the output leaving saturation, not from the gate limit."
    },
    {
     "id": "c",
     "text": "The drain current must stay constant",
     "misconception": "Wants no signal current.",
     "rationale": "The signal current is what amplification produces."
    },
    {
     "id": "d",
     "text": "The output must stay above zero volts",
     "misconception": "Uses ground as the limit.",
     "rationale": "The limit is the triode edge, which is above ground by VOV in this arrangement."
    }
   ],
   "explanation": "During the downswing the drain-source voltage falls by the gain times vgs. It must remain at least VOV. That inequality bounds the allowed amplitude.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-16.html",
     "label": "Lesson 16 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-16.html",
     "section": "pp. 16-3, 16-4 Steps 3-4"
    },
    {
     "file": "lesson-guides/lesson-15.html",
     "section": "A6"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_basic.svg",
    "alt": "Common-source amplifier with gate divider, coupling capacitors and load"
   }
  },
  {
   "id": "gr2-ss-018",
   "type": "sequence",
   "topic": "Small-signal model and gm",
   "objective": "Order the max-input-amplitude reasoning",
   "prompt": "Put the steps for finding the largest signal a CS amplifier can handle without appreciable distortion in order.",
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
     "text": "Find VGS, VOV and the drain current assuming saturation"
    },
    {
     "id": "s2",
     "text": "Find VDS and verify saturation"
    },
    {
     "id": "s3",
     "text": "Find the small-signal gain"
    },
    {
     "id": "s4",
     "text": "Require the lowest drain-source voltage to stay at or above the saturation edge, using the gain to relate vds to vgs"
    },
    {
     "id": "s5",
     "text": "Solve that inequality for the allowed peak vgs and confirm in simulation"
    }
   ],
   "distractors": [
    {
     "id": "d1",
     "text": "Find the gain first, then guess the bias",
     "misconception": "Runs the steps backwards.",
     "rationale": "The gain depends on the bias point, so the bias comes first."
    },
    {
     "id": "d2",
     "text": "Skip checking that the device is in saturation",
     "misconception": "Assumes the model without checking.",
     "rationale": "The gain formula is only valid in saturation, so verify the mode first."
    }
   ],
   "explanation": "The analysis starts with DC (bias and mode), then the small-signal gain, then a boundary condition on the output swing that gives the allowed vgs,pk.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-16.html",
     "label": "Lesson 16 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-16.html",
     "section": "pp. 16-3, 16-4 Ex. 2"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_basic.svg",
    "alt": "Common-source amplifier with gate divider, coupling capacitors and load"
   }
  },
  {
   "id": "gr2-ss-019",
   "type": "sequence",
   "topic": "Small-signal model and gm",
   "objective": "Order the small-signal gain analysis of a biased CS stage",
   "prompt": "Put these steps for finding the gain of a CS amplifier with a gate bias circuit in order.",
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
     "text": "Set the DC sources to zero (supplies to ground)"
    },
    {
     "id": "s2",
     "text": "Replace the coupling capacitors by short circuits"
    },
    {
     "id": "s3",
     "text": "Insert the small-signal model of the transistor"
    },
    {
     "id": "s4",
     "text": "Write vgs and vo in terms of the signal source"
    },
    {
     "id": "s5",
     "text": "Form the ratio vo / vi to get the gain"
    }
   ],
   "distractors": [
    {
     "id": "d1",
     "text": "Insert the model before removing the DC sources",
     "misconception": "Skips the simplification steps.",
     "rationale": "The DC sources and capacitors are simplified first so the signal circuit is clear."
    },
    {
     "id": "d2",
     "text": "Replace coupling capacitors with open circuits",
     "misconception": "Uses DC behavior.",
     "rationale": "At signal frequencies they pass the signal, so they become shorts."
    }
   ],
   "explanation": "The standard recipe is: simplify the circuit for signals (zero DC sources, capacitors shorted), insert the model, write the node relations, and form the gain ratio.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-16.html",
     "label": "Lesson 16 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-16.html",
     "section": "p. 16-9 Steps 1-3"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_basic.svg",
    "alt": "Common-source amplifier with gate divider, coupling capacitors and load"
   }
  },
  {
   "id": "gr2-csdes-001",
   "type": "choice",
   "topic": "CS design with no source resistor",
   "objective": "Explain the job of the coupling capacitors",
   "prompt": "What is the purpose of the coupling capacitors C1 and C2 in a common-source amplifier?",
   "answer": {
    "id": "d",
    "text": "They pass the signal between source, amplifier and load while blocking DC, so the bias point is not disturbed"
   },
   "options": [
    {
     "id": "a",
     "text": "They amplify the signal by storing charge",
     "correct": false,
     "rationale": "Capacitors pass and block; the transistor does the amplifying."
    },
    {
     "id": "b",
     "text": "They set the drain current of the transistor",
     "correct": false,
     "rationale": "The bias resistors set the drain current; the capacitors are open for DC."
    },
    {
     "id": "c",
     "text": "They increase the input resistance",
     "correct": false,
     "rationale": "For the signal they are shorts, so they do not raise Ri."
    },
    {
     "id": "d",
     "text": "They pass the signal between source, amplifier and load while blocking DC, so the bias point is not disturbed",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "They amplify the signal by storing charge",
     "misconception": "Credits capacitors with gain.",
     "rationale": "Capacitors pass and block; the transistor does the amplifying."
    },
    {
     "id": "b",
     "text": "They set the drain current of the transistor",
     "misconception": "Confuses coupling with biasing.",
     "rationale": "The bias resistors set the drain current; the capacitors are open for DC."
    },
    {
     "id": "c",
     "text": "They increase the input resistance",
     "misconception": "Thinks capacitors affect Ri for the signal.",
     "rationale": "For the signal they are shorts, so they do not raise Ri."
    }
   ],
   "explanation": "The signal source and load would otherwise change the DC bias. Large capacitors block DC but look like shorts to the signal.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-17.html",
     "label": "Lesson 17 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-17.html",
     "section": "p. 17-1 (C1 and C2 couple the source and load without affecting the biasing)"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 17 objectives"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_basic.svg",
    "alt": "Common-source amplifier with gate divider, coupling capacitors and load"
   }
  },
  {
   "id": "gr2-csdes-002",
   "type": "choice",
   "topic": "CS design with no source resistor",
   "objective": "Decide a coupling capacitor polarity",
   "prompt": "How do you decide which way to orient a polarized coupling capacitor?",
   "answer": {
    "id": "b",
    "text": "Put the plus plate on the side that sits at the higher DC voltage"
   },
   "options": [
    {
     "id": "a",
     "text": "Always put the plus plate toward the signal source",
     "correct": false,
     "rationale": "The orientation depends on the DC voltages, not on where the source is."
    },
    {
     "id": "b",
     "text": "Put the plus plate on the side that sits at the higher DC voltage",
     "correct": true
    },
    {
     "id": "c",
     "text": "Put the plus plate toward ground",
     "correct": false,
     "rationale": "Ground is at zero DC; the capacitor's plus plate goes to the higher DC voltage."
    },
    {
     "id": "d",
     "text": "Either way works because the signal is ac",
     "correct": false,
     "rationale": "A polarized capacitor sees a DC voltage and must be oriented accordingly."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Always put the plus plate toward the signal source",
     "misconception": "Uses a fixed rule.",
     "rationale": "The orientation depends on the DC voltages, not on where the source is."
    },
    {
     "id": "c",
     "text": "Put the plus plate toward ground",
     "misconception": "Thinks ground should be the positive side.",
     "rationale": "Ground is at zero DC; the capacitor's plus plate goes to the higher DC voltage."
    },
    {
     "id": "d",
     "text": "Either way works because the signal is ac",
     "misconception": "Ignores the DC across the capacitor.",
     "rationale": "A polarized capacitor sees a DC voltage and must be oriented accordingly."
    }
   ],
   "explanation": "Each coupling capacitor holds the DC difference between its two sides. The plate on the higher DC voltage side must be the positive plate.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-17.html",
     "label": "Lesson 17 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-17.html",
     "section": "p. 17-1 \"polarity requirement sets the side where voltage is higher\""
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 17 objectives"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_basic.svg",
    "alt": "Common-source amplifier with gate divider, coupling capacitors and load"
   }
  },
  {
   "id": "gr2-csdes-003",
   "type": "choice",
   "topic": "CS design with no source resistor",
   "objective": "Say how VGS is set when the source is grounded",
   "prompt": "In a common-source amplifier whose source is grounded (no source resistor), what sets the DC gate-source voltage VGS in the design?",
   "answer": {
    "id": "d",
    "text": "The gate resistor divider: VG sets VGS directly, since the source is at ground"
   },
   "options": [
    {
     "id": "a",
     "text": "The drain resistor RD",
     "correct": false,
     "rationale": "RD affects the drain voltage, not the gate voltage."
    },
    {
     "id": "b",
     "text": "The signal source voltage",
     "correct": false,
     "rationale": "The signal source is blocked for DC by the coupling capacitor."
    },
    {
     "id": "c",
     "text": "The supply directly, with no divider",
     "correct": false,
     "rationale": "The gate must sit at a fraction of VDD that equals VGS, which needs a divider."
    },
    {
     "id": "d",
     "text": "The gate resistor divider: VG sets VGS directly, since the source is at ground",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The drain resistor RD",
     "misconception": "Credits RD with setting VGS.",
     "rationale": "RD affects the drain voltage, not the gate voltage."
    },
    {
     "id": "b",
     "text": "The signal source voltage",
     "misconception": "Believes the signal sets the DC bias.",
     "rationale": "The signal source is blocked for DC by the coupling capacitor."
    },
    {
     "id": "c",
     "text": "The supply directly, with no divider",
     "misconception": "Ignores the need for a divider.",
     "rationale": "The gate must sit at a fraction of VDD that equals VGS, which needs a divider."
    }
   ],
   "explanation": "With the source at ground, VGS equals the gate voltage. The two gate resistors program that voltage from VDD, and since no gate current flows the divider is unloaded.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-17.html",
     "label": "Lesson 17 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-17.html",
     "section": "p. 17-1 \"gate resistors program the voltage VG = VGS\""
    },
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 2 Steps 4-5"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_basic.svg",
    "alt": "Common-source amplifier with gate divider, coupling capacitors and load"
   }
  },
  {
   "id": "gr2-csdes-004",
   "type": "choice",
   "topic": "CS design with no source resistor",
   "objective": "Know what determines Ri of the CS stage",
   "prompt": "What sets the input resistance of a common-source amplifier that has no source resistor?",
   "answer": {
    "id": "b",
    "text": "The two gate bias resistors in parallel, since the transistor gate itself draws no current"
   },
   "options": [
    {
     "id": "a",
     "text": "The transconductance gm of the transistor",
     "correct": false,
     "rationale": "gm relates input voltage to output current; the gate draws none."
    },
    {
     "id": "b",
     "text": "The two gate bias resistors in parallel, since the transistor gate itself draws no current",
     "correct": true
    },
    {
     "id": "c",
     "text": "The drain resistor RD",
     "correct": false,
     "rationale": "RD is at the output and sets Ro and the gain."
    },
    {
     "id": "d",
     "text": "The load resistor RL",
     "correct": false,
     "rationale": "The load is at the output side and does not change Ri."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The transconductance gm of the transistor",
     "misconception": "Believes gm sets input resistance.",
     "rationale": "gm relates input voltage to output current; the gate draws none."
    },
    {
     "id": "c",
     "text": "The drain resistor RD",
     "misconception": "Looks at the wrong side.",
     "rationale": "RD is at the output and sets Ro and the gain."
    },
    {
     "id": "d",
     "text": "The load resistor RL",
     "misconception": "Thinks the load sets Ri.",
     "rationale": "The load is at the output side and does not change Ri."
    }
   ],
   "explanation": "Looking into the coupling capacitor (a short for signals), the signal sees RG1 and RG2 to ground in parallel. The gate adds nothing.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-17.html",
     "label": "Lesson 17 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-17.html",
     "section": "p. 17-3 For Ri"
    },
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 6 Table, Ri row"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_basic.svg",
    "alt": "Common-source amplifier with gate divider, coupling capacitors and load"
   }
  },
  {
   "id": "gr2-csdes-005",
   "type": "multi-select",
   "topic": "CS design with no source resistor",
   "objective": "Set up the Ro finding conditions",
   "prompt": "Which conditions are used when finding the output resistance of a common-source amplifier? Select all that apply.",
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
     "text": "The input signal is left on at its normal level",
     "correct": false,
     "rationale": "With the signal on, the dependent source is active and hides Ro."
    },
    {
     "id": "b",
     "text": "The input source is set to zero so the dependent source is off",
     "correct": true
    },
    {
     "id": "c",
     "text": "The load stays connected",
     "correct": false,
     "rationale": "Ro is a property of the amplifier alone; the load is what it will drive."
    },
    {
     "id": "d",
     "text": "The load is disconnected",
     "correct": true
    },
    {
     "id": "e",
     "text": "The coupling capacitors are treated as open circuits",
     "correct": false,
     "rationale": "For signals they are shorts."
    },
    {
     "id": "f",
     "text": "DC supplies and large capacitors are replaced by their signal equivalents (shorts)",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The input signal is left on at its normal level",
     "misconception": "Keeps the signal in the Ro test.",
     "rationale": "With the signal on, the dependent source is active and hides Ro."
    },
    {
     "id": "c",
     "text": "The load stays connected",
     "misconception": "Includes RL in Ro.",
     "rationale": "Ro is a property of the amplifier alone; the load is what it will drive."
    },
    {
     "id": "e",
     "text": "The coupling capacitors are treated as open circuits",
     "misconception": "Uses DC behavior.",
     "rationale": "For signals they are shorts."
    }
   ],
   "explanation": "Output resistance is the resistance looking back into the output with the input signal zeroed and the load removed, using the signal-circuit simplifications.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-17.html",
     "label": "Lesson 17 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-17.html",
     "section": "p. 17-3 For Ro"
    },
    {
     "file": "lesson-guides/lesson-15.html",
     "section": "A3 R_o"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_basic.svg",
    "alt": "Common-source amplifier with gate divider, coupling capacitors and load"
   }
  },
  {
   "id": "gr2-csdes-006",
   "type": "choice",
   "topic": "CS design with no source resistor",
   "objective": "Explain why no-RS bias is sensitive to the device",
   "prompt": "Why does the operating point of a CS amplifier with no source resistor vary so much from one transistor to another?",
   "answer": {
    "id": "b",
    "text": "The gate voltage is fixed by the divider, so any change in Vt or Kn changes the drain current directly, with nothing to oppose it"
   },
   "options": [
    {
     "id": "a",
     "text": "Because the divider resistors drift with temperature",
     "correct": false,
     "rationale": "The divider is stable; the device parameters are what differ between units."
    },
    {
     "id": "b",
     "text": "The gate voltage is fixed by the divider, so any change in Vt or Kn changes the drain current directly, with nothing to oppose it",
     "correct": true
    },
    {
     "id": "c",
     "text": "Because the coupling capacitors change the DC level",
     "correct": false,
     "rationale": "They are open for DC and do not affect the bias."
    },
    {
     "id": "d",
     "text": "Because the supply voltage changes with the transistor",
     "correct": false,
     "rationale": "The supply is independent of the transistor."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Because the divider resistors drift with temperature",
     "misconception": "Blames the resistors.",
     "rationale": "The divider is stable; the device parameters are what differ between units."
    },
    {
     "id": "c",
     "text": "Because the coupling capacitors change the DC level",
     "misconception": "Blames the capacitors.",
     "rationale": "They are open for DC and do not affect the bias."
    },
    {
     "id": "d",
     "text": "Because the supply voltage changes with the transistor",
     "misconception": "Invents a supply effect.",
     "rationale": "The supply is independent of the transistor."
    }
   ],
   "explanation": "The drain current follows the square law of (VGS − Vt) with VGS fixed. If Vt or Kn differs, the current shifts directly. A source resistor would add feedback to resist this.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-17.html",
     "label": "Lesson 17 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-17.html",
     "section": "pp. 17-6, 17-7 (V(2) and ID change when Vt changes)"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 17 objectives"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_basic.svg",
    "alt": "Common-source amplifier with gate divider, coupling capacitors and load"
   }
  },
  {
   "id": "gr2-csdes-007",
   "type": "choice",
   "topic": "CS design with no source resistor",
   "objective": "Say what the simulation shows when Vt changes",
   "prompt": "In a simulation of the no-source-resistor design, what happens to the operating point when the transistor is replaced by one with a different threshold voltage?",
   "answer": {
    "id": "d",
    "text": "The drain current and drain voltage shift substantially, moving the output swing and the gain"
   },
   "options": [
    {
     "id": "a",
     "text": "Nothing noticeable: the bias is insensitive to Vt",
     "correct": false,
     "rationale": "There is no source resistor to stabilize the current, so Vt matters a lot."
    },
    {
     "id": "b",
     "text": "The gate voltage shifts but the drain current does not",
     "correct": false,
     "rationale": "The gate voltage is set by the divider and does not move; the current does."
    },
    {
     "id": "c",
     "text": "Only the input resistance changes",
     "correct": false,
     "rationale": "Ri comes from the bias resistors and is unaffected."
    },
    {
     "id": "d",
     "text": "The drain current and drain voltage shift substantially, moving the output swing and the gain",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Nothing noticeable: the bias is insensitive to Vt",
     "misconception": "Assumes feedback exists in this circuit.",
     "rationale": "There is no source resistor to stabilize the current, so Vt matters a lot."
    },
    {
     "id": "b",
     "text": "The gate voltage shifts but the drain current does not",
     "misconception": "Moves the effect to the wrong place.",
     "rationale": "The gate voltage is set by the divider and does not move; the current does."
    },
    {
     "id": "c",
     "text": "Only the input resistance changes",
     "misconception": "Thinks Ri depends on Vt.",
     "rationale": "Ri comes from the bias resistors and is unaffected."
    }
   ],
   "explanation": "The two printed simulations use the same resistors but different device parameters. The drain current and drain voltage differ greatly, showing how sensitive this bias is.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-17.html",
     "label": "Lesson 17 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-17.html",
     "section": "pp. 17-6, 17-7 simulation results"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_basic.svg",
    "alt": "Common-source amplifier with gate divider, coupling capacitors and load"
   }
  },
  {
   "id": "gr2-csdes-008",
   "type": "choice",
   "topic": "CS design with no source resistor",
   "objective": "Explain the VDS starting choice for the CS design",
   "prompt": "In the common-source design with no source resistor, the first step picks the DC drain-source voltage VDS near the middle of the supply. Why?",
   "answer": {
    "id": "b",
    "text": "It gives balanced room for the output to swing toward cutoff and toward triode; if gain is too low it can be moved closer to point B"
   },
   "options": [
    {
     "id": "a",
     "text": "Because the transistor works only at half the supply",
     "correct": false,
     "rationale": "It is a starting choice for symmetric swing, not a device limit."
    },
    {
     "id": "b",
     "text": "It gives balanced room for the output to swing toward cutoff and toward triode; if gain is too low it can be moved closer to point B",
     "correct": true
    },
    {
     "id": "c",
     "text": "Because the gain is greatest at half the supply",
     "correct": false,
     "rationale": "Gain is greatest nearer B; the middle trades gain for swing."
    },
    {
     "id": "d",
     "text": "Because it makes RD equal to RG1",
     "correct": false,
     "rationale": "No such equality is intended."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Because the transistor works only at half the supply",
     "misconception": "Treats the middle as a requirement.",
     "rationale": "It is a starting choice for symmetric swing, not a device limit."
    },
    {
     "id": "c",
     "text": "Because the gain is greatest at half the supply",
     "misconception": "Believes the middle maximizes gain.",
     "rationale": "Gain is greatest nearer B; the middle trades gain for swing."
    },
    {
     "id": "d",
     "text": "Because it makes RD equal to RG1",
     "misconception": "Invents a resistor relationship.",
     "rationale": "No such equality is intended."
    }
   ],
   "explanation": "Choosing the middle gives a safe starting point with symmetric room. If the gain target cannot be met, move toward point B, accepting less downward swing.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-17.html",
     "label": "Lesson 17 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-17.html",
     "section": "p. 17-4 Step 1"
    },
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 2 Step 1"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_basic.svg",
    "alt": "Common-source amplifier with gate divider, coupling capacitors and load"
   }
  },
  {
   "id": "gr2-csdes-009",
   "type": "choice",
   "topic": "CS design with no source resistor",
   "objective": "Say what the gain target fixes in the CS design",
   "prompt": "In the common-source design with no source resistor, once VDS has been chosen, which design quantity does the target gain magnitude determine?",
   "answer": {
    "id": "d",
    "text": "The overdrive voltage VOV"
   },
   "options": [
    {
     "id": "a",
     "text": "The gate resistor RG1 directly",
     "correct": false,
     "rationale": "RG1 follows later from the required gate voltage and input resistance."
    },
    {
     "id": "b",
     "text": "The supply voltage",
     "correct": false,
     "rationale": "The supply was given."
    },
    {
     "id": "c",
     "text": "The threshold voltage",
     "correct": false,
     "rationale": "Vt is a device parameter that is given."
    },
    {
     "id": "d",
     "text": "The overdrive voltage VOV",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The gate resistor RG1 directly",
     "misconception": "Skips the overdrive step.",
     "rationale": "RG1 follows later from the required gate voltage and input resistance."
    },
    {
     "id": "b",
     "text": "The supply voltage",
     "misconception": "Treats the supply as unfixed.",
     "rationale": "The supply was given."
    },
    {
     "id": "c",
     "text": "The threshold voltage",
     "misconception": "Thinks the design can change Vt.",
     "rationale": "Vt is a device parameter that is given."
    }
   ],
   "explanation": "With VDS chosen, the voltage dropped across RD is known, and the gain magnitude is that drop divided by half of VOV. So the gain target fixes VOV.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-17.html",
     "label": "Lesson 17 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-17.html",
     "section": "p. 17-4 Step 2"
    },
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 2 Steps 2-3"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_basic.svg",
    "alt": "Common-source amplifier with gate divider, coupling capacitors and load"
   }
  },
  {
   "id": "gr2-csdes-010",
   "type": "sequence",
   "topic": "CS design with no source resistor",
   "objective": "Order the CS design with no source resistor",
   "prompt": "Put the main steps of the common-source design with no source resistor in order.",
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
     "text": "Choose the drain-source voltage (start near the middle of the supply)"
    },
    {
     "id": "s2",
     "text": "Use the gain target to fix the overdrive voltage"
    },
    {
     "id": "s3",
     "text": "Find the drain resistor from the voltage dropped across it and the drain current"
    },
    {
     "id": "s4",
     "text": "Find VGS = VOV + Vt, then the gate divider for the required input resistance"
    },
    {
     "id": "s5",
     "text": "Check headroom and legroom, then check linearity"
    }
   ],
   "distractors": [
    {
     "id": "d1",
     "text": "Design the gate divider before knowing VGS",
     "misconception": "Reverses the order.",
     "rationale": "The divider must produce VGS, so VGS must be known first."
    },
    {
     "id": "d2",
     "text": "Check linearity first and then choose the drain-source voltage",
     "misconception": "Tests before designing.",
     "rationale": "The checks apply to the finished design."
    }
   ],
   "explanation": "The sequence runs bias choice, gain-driven overdrive, RD, gate bias and finally the swing and linearity checks, ending with a simulation.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-17.html",
     "label": "Lesson 17 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-17.html",
     "section": "p. 17-4, p. 17-5 Steps 1-7"
    },
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 2"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_basic.svg",
    "alt": "Common-source amplifier with gate divider, coupling capacitors and load"
   }
  },
  {
   "id": "gr2-csdes-011",
   "type": "choice",
   "topic": "CS design with no source resistor",
   "objective": "Explain what the final simulation step is for",
   "prompt": "What is the purpose of simulating a finished hand design?",
   "answer": {
    "id": "d",
    "text": "To confirm that the hand-calculated bias, gain and swing agree with a more detailed circuit model"
   },
   "options": [
    {
     "id": "a",
     "text": "To replace the hand checks entirely",
     "correct": false,
     "rationale": "The hand checks justify the design; simulation confirms it."
    },
    {
     "id": "b",
     "text": "To change the specifications",
     "correct": false,
     "rationale": "The specifications are fixed inputs to the design."
    },
    {
     "id": "c",
     "text": "To measure the real transistor's parameters",
     "correct": false,
     "rationale": "It simulates a model; it does not measure a physical part."
    },
    {
     "id": "d",
     "text": "To confirm that the hand-calculated bias, gain and swing agree with a more detailed circuit model",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "To replace the hand checks entirely",
     "misconception": "Treats simulation as a substitute.",
     "rationale": "The hand checks justify the design; simulation confirms it."
    },
    {
     "id": "b",
     "text": "To change the specifications",
     "misconception": "Thinks simulation edits the requirements.",
     "rationale": "The specifications are fixed inputs to the design."
    },
    {
     "id": "c",
     "text": "To measure the real transistor's parameters",
     "misconception": "Thinks Multisim measures hardware.",
     "rationale": "It simulates a model; it does not measure a physical part."
    }
   ],
   "explanation": "The simulated DC operating point, gain and distortion are compared with the hand values. Small differences (for example from λ) are expected.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-18.html",
     "label": "Lesson 18 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-17.html",
     "section": "p. 17-5 Step 7"
    },
    {
     "file": "lesson-guides/lesson-18.html",
     "section": "A7"
    }
   ]
  },
  {
   "id": "gr2-fb-001",
   "type": "choice",
   "topic": "Source resistor feedback and bypassing",
   "objective": "Explain how a source resistor stabilizes the bias",
   "prompt": "In a common-source circuit with a source resistor RS, a change in a transistor parameter makes the DC drain current start to rise. How does the circuit oppose that change?",
   "answer": {
    "id": "c",
    "text": "The larger current raises the source voltage, which lowers VGS (the gate voltage is fixed by the divider) and pushes the current back down"
   },
   "options": [
    {
     "id": "a",
     "text": "The larger current raises the gate voltage, which turns the transistor off",
     "correct": false,
     "rationale": "The gate voltage is set by the divider and does not follow the current."
    },
    {
     "id": "b",
     "text": "The coupling capacitors discharge and reduce the current",
     "correct": false,
     "rationale": "Capacitors are open for DC and do not take part in the bias feedback."
    },
    {
     "id": "c",
     "text": "The larger current raises the source voltage, which lowers VGS (the gate voltage is fixed by the divider) and pushes the current back down",
     "correct": true
    },
    {
     "id": "d",
     "text": "The drain resistor expands to limit the current",
     "correct": false,
     "rationale": "Resistors are fixed; the feedback comes from VS rising."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The larger current raises the gate voltage, which turns the transistor off",
     "misconception": "Moves the effect to the gate.",
     "rationale": "The gate voltage is set by the divider and does not follow the current."
    },
    {
     "id": "b",
     "text": "The coupling capacitors discharge and reduce the current",
     "misconception": "Credits capacitors.",
     "rationale": "Capacitors are open for DC and do not take part in the bias feedback."
    },
    {
     "id": "d",
     "text": "The drain resistor expands to limit the current",
     "misconception": "Treats resistors as variable.",
     "rationale": "Resistors are fixed; the feedback comes from VS rising."
    }
   ],
   "explanation": "This is negative feedback: ID up → VS up → VGS down → ID down. It holds the operating point steadier against variations in Vt and Kn.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-18.html",
     "label": "Lesson 18 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-17.html",
     "section": "p. 17-8 \"Add resistor to contribute feedback\""
    },
    {
     "file": "lesson-guides/lesson-18.html",
     "section": "B1 R_S as negative feedback"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_rs.svg",
    "alt": "Common-source amplifier with a source resistor RS and no capacitor across it"
   }
  },
  {
   "id": "gr2-fb-002",
   "type": "choice",
   "topic": "Source resistor feedback and bypassing",
   "objective": "State the cost of an unbypassed source resistor",
   "prompt": "What is the price of leaving the source resistor RS of a common-source stage unbypassed (no capacitor across it)?",
   "answer": {
    "id": "a",
    "text": "The signal gain is reduced, because the resistor is in the signal path as well"
   },
   "options": [
    {
     "id": "a",
     "text": "The signal gain is reduced, because the resistor is in the signal path as well",
     "correct": true
    },
    {
     "id": "b",
     "text": "The DC bias becomes less stable",
     "correct": false,
     "rationale": "The resistor improves bias stability; the cost is on the signal side."
    },
    {
     "id": "c",
     "text": "The input resistance drops to zero",
     "correct": false,
     "rationale": "The gate still draws no current, so Ri comes from the divider."
    },
    {
     "id": "d",
     "text": "The transistor leaves saturation",
     "correct": false,
     "rationale": "A source resistor does not by itself force triode."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "The DC bias becomes less stable",
     "misconception": "Reverses the effect.",
     "rationale": "The resistor improves bias stability; the cost is on the signal side."
    },
    {
     "id": "c",
     "text": "The input resistance drops to zero",
     "misconception": "Invents an input effect.",
     "rationale": "The gate still draws no current, so Ri comes from the divider."
    },
    {
     "id": "d",
     "text": "The transistor leaves saturation",
     "misconception": "Assumes a mode change.",
     "rationale": "A source resistor does not by itself force triode."
    }
   ],
   "explanation": "With RS in the source lead the gain becomes −RD / (1/gm + RS): the denominator is larger, so the gain magnitude is smaller.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-18.html",
     "label": "Lesson 18 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-17.html",
     "section": "p. 17-9"
    },
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 4 Gain with source degeneration"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_rs.svg",
    "alt": "Common-source amplifier with a source resistor RS and no capacitor across it"
   }
  },
  {
   "id": "gr2-fb-003",
   "type": "choice",
   "topic": "Source resistor feedback and bypassing",
   "objective": "Say what a bypass capacitor does",
   "prompt": "What does a large capacitor placed across the source resistor accomplish?",
   "answer": {
    "id": "c",
    "text": "It shorts the resistor for the signal, restoring the gain, while the resistor still provides DC bias feedback"
   },
   "options": [
    {
     "id": "a",
     "text": "It removes the resistor from the DC circuit as well",
     "correct": false,
     "rationale": "A capacitor is open for DC, so the resistor still sets the DC bias."
    },
    {
     "id": "b",
     "text": "It raises the DC drain current",
     "correct": false,
     "rationale": "The bias is unchanged by a capacitor."
    },
    {
     "id": "c",
     "text": "It shorts the resistor for the signal, restoring the gain, while the resistor still provides DC bias feedback",
     "correct": true
    },
    {
     "id": "d",
     "text": "It converts the amplifier to common drain",
     "correct": false,
     "rationale": "The output is still taken at the drain; this is still common source."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "It removes the resistor from the DC circuit as well",
     "misconception": "Thinks the capacitor also changes DC.",
     "rationale": "A capacitor is open for DC, so the resistor still sets the DC bias."
    },
    {
     "id": "b",
     "text": "It raises the DC drain current",
     "misconception": "Links the capacitor to the bias current.",
     "rationale": "The bias is unchanged by a capacitor."
    },
    {
     "id": "d",
     "text": "It converts the amplifier to common drain",
     "misconception": "Mislabels the topology.",
     "rationale": "The output is still taken at the drain; this is still common source."
    }
   ],
   "explanation": "For DC the capacitor is an open circuit, so RS keeps the bias stable. For signals it is a short, so the full gain is recovered.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-18.html",
     "label": "Lesson 18 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-18.html",
     "section": "B1 Adding RS... bypassing it for the signal"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 18 objectives"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_bypassed.svg",
    "alt": "Common-source amplifier with a bypass capacitor across the source resistor RS"
   }
  },
  {
   "id": "gr2-fb-004",
   "type": "choice",
   "topic": "Source resistor feedback and bypassing",
   "objective": "Describe what remains sensitive in a fully bypassed design",
   "prompt": "In a fully bypassed common-source amplifier, the bias is stable. What still varies noticeably from one device to the next?",
   "answer": {
    "id": "a",
    "text": "The gain, because it depends on gm, which depends on the device constant Kn"
   },
   "options": [
    {
     "id": "a",
     "text": "The gain, because it depends on gm, which depends on the device constant Kn",
     "correct": true
    },
    {
     "id": "b",
     "text": "The DC drain current, because the source resistor is bypassed",
     "correct": false,
     "rationale": "The bypass is open for DC, so the DC feedback remains."
    },
    {
     "id": "c",
     "text": "The input resistance, because the capacitor adds capacitance",
     "correct": false,
     "rationale": "Ri comes from the divider and is unchanged."
    },
    {
     "id": "d",
     "text": "Nothing varies once the bias is stable",
     "correct": false,
     "rationale": "The gain formula still contains gm, which tracks the device."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "The DC drain current, because the source resistor is bypassed",
     "misconception": "Thinks bypassing removes DC feedback.",
     "rationale": "The bypass is open for DC, so the DC feedback remains."
    },
    {
     "id": "c",
     "text": "The input resistance, because the capacitor adds capacitance",
     "misconception": "Wrong link to Ri.",
     "rationale": "Ri comes from the divider and is unchanged."
    },
    {
     "id": "d",
     "text": "Nothing varies once the bias is stable",
     "misconception": "Equates bias stability with gain stability.",
     "rationale": "The gain formula still contains gm, which tracks the device."
    }
   ],
   "explanation": "Fully bypassed gain is gm·RD. gm depends on Kn, so devices with different Kn at the same current give different gain.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-18.html",
     "label": "Lesson 18 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-18.html",
     "section": "A8 Predicting how the gain changes from device to device"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 18 objectives"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_bypassed.svg",
    "alt": "Common-source amplifier with a bypass capacitor across the source resistor RS"
   }
  },
  {
   "id": "gr2-fb-005",
   "type": "choice",
   "topic": "Source resistor feedback and bypassing",
   "objective": "Explain the benefit of partial bypass",
   "prompt": "In a partially bypassed common-source stage, what does the unbypassed part of the source resistance (RS1) do for the gain?",
   "answer": {
    "id": "c",
    "text": "It makes the gain depend more on resistor values and less on the transistor's gm"
   },
   "options": [
    {
     "id": "a",
     "text": "It makes the gain depend entirely on the supply voltage",
     "correct": false,
     "rationale": "The supply sets the bias, not the small-signal gain."
    },
    {
     "id": "b",
     "text": "It raises the gain above the fully bypassed value",
     "correct": false,
     "rationale": "The extra resistance in the signal path lowers the gain."
    },
    {
     "id": "c",
     "text": "It makes the gain depend more on resistor values and less on the transistor's gm",
     "correct": true
    },
    {
     "id": "d",
     "text": "It makes the gain independent of the load",
     "correct": false,
     "rationale": "The load still reduces the gain through RD ∥ RL."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "It makes the gain depend entirely on the supply voltage",
     "misconception": "Moves the dependence to the supply.",
     "rationale": "The supply sets the bias, not the small-signal gain."
    },
    {
     "id": "b",
     "text": "It raises the gain above the fully bypassed value",
     "misconception": "Reverses the effect.",
     "rationale": "The extra resistance in the signal path lowers the gain."
    },
    {
     "id": "d",
     "text": "It makes the gain independent of the load",
     "misconception": "Ignores output loading.",
     "rationale": "The load still reduces the gain through RD ∥ RL."
    }
   ],
   "explanation": "The gain becomes about −RD / (1/gm + RS1). When RS1 is a meaningful part of the denominator, variations in gm change the gain less.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-18.html",
     "label": "Lesson 18 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-18.html",
     "section": "A6, A8"
    },
    {
     "file": "lesson-guides/lesson-17.html",
     "section": "p. 17-10"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 18 objectives"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_partial.svg",
    "alt": "Common-source amplifier with RS split into RS1 and RS2, with a bypass capacitor across RS2"
   }
  },
  {
   "id": "gr2-fb-006",
   "type": "choice",
   "topic": "Source resistor feedback and bypassing",
   "objective": "Say why RS1 should not be too large",
   "prompt": "In the partially bypassed common-source design, why is the unbypassed part RS1 not made very large?",
   "answer": {
    "id": "a",
    "text": "It would swamp out the gain, reducing it too much"
   },
   "options": [
    {
     "id": "a",
     "text": "It would swamp out the gain, reducing it too much",
     "correct": true
    },
    {
     "id": "b",
     "text": "It would make the bias unstable",
     "correct": false,
     "rationale": "A larger RS makes bias more stable, not less."
    },
    {
     "id": "c",
     "text": "It would raise the drain current",
     "correct": false,
     "rationale": "More source resistance tends to lower the current for a given gate voltage."
    },
    {
     "id": "d",
     "text": "It would turn the transistor into a diode",
     "correct": false,
     "rationale": "The device stays a MOSFET; the issue is gain."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "It would make the bias unstable",
     "misconception": "Reverses the effect.",
     "rationale": "A larger RS makes bias more stable, not less."
    },
    {
     "id": "c",
     "text": "It would raise the drain current",
     "misconception": "Links resistance to current wrongly.",
     "rationale": "More source resistance tends to lower the current for a given gate voltage."
    },
    {
     "id": "d",
     "text": "It would turn the transistor into a diode",
     "misconception": "Invents a mode change.",
     "rationale": "The device stays a MOSFET; the issue is gain."
    }
   ],
   "explanation": "A large RS1 divides the signal away from the gate-source junction and cuts gain. The lesson balances stability against gain.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-17.html",
     "label": "Lesson 17 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-17.html",
     "section": "p. 17-10 \"do not want RS too ... or else it swamps out the gain\""
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_partial.svg",
    "alt": "Common-source amplifier with RS split into RS1 and RS2, with a bypass capacitor across RS2"
   }
  },
  {
   "id": "gr2-fb-007",
   "type": "choice",
   "topic": "Source resistor feedback and bypassing",
   "objective": "Say why RS should not be too small",
   "prompt": "In a common-source design, why must the total source resistor RS not be made too small?",
   "answer": {
    "id": "c",
    "text": "The operating point would vary too much with changes in Vt and Kn"
   },
   "options": [
    {
     "id": "a",
     "text": "The gain would become too large to measure",
     "correct": false,
     "rationale": "The issue the lesson names is bias sensitivity."
    },
    {
     "id": "b",
     "text": "The coupling capacitors would be short-circuited",
     "correct": false,
     "rationale": "Capacitors are unaffected by RS."
    },
    {
     "id": "c",
     "text": "The operating point would vary too much with changes in Vt and Kn",
     "correct": true
    },
    {
     "id": "d",
     "text": "The transistor would be cut off",
     "correct": false,
     "rationale": "A small RS tends to increase current, not cut it off."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The gain would become too large to measure",
     "misconception": "Treats large gain as a problem here.",
     "rationale": "The issue the lesson names is bias sensitivity."
    },
    {
     "id": "b",
     "text": "The coupling capacitors would be short-circuited",
     "misconception": "Invents a capacitor issue.",
     "rationale": "Capacitors are unaffected by RS."
    },
    {
     "id": "d",
     "text": "The transistor would be cut off",
     "misconception": "Assumes a mode change.",
     "rationale": "A small RS tends to increase current, not cut it off."
    }
   ],
   "explanation": "The resistor provides the feedback that stabilizes ID. Too little feedback leaves the bias as sensitive as the no-RS design.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-17.html",
     "label": "Lesson 17 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-17.html",
     "section": "p. 17-10 \"do not want RS too small\""
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_rs.svg",
    "alt": "Common-source amplifier with a source resistor RS and no capacitor across it"
   }
  },
  {
   "id": "gr2-fb-008",
   "type": "multi-select",
   "topic": "Source resistor feedback and bypassing",
   "objective": "Collect the effects of unbypassed source resistance",
   "prompt": "Which are effects of leaving a source resistor unbypassed (partially bypassed)? Select all that apply.",
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
     "text": "The gain is higher than with full bypass",
     "correct": false,
     "rationale": "The unbypassed resistor reduces gain."
    },
    {
     "id": "b",
     "text": "The DC operating point is more stable against device variation",
     "correct": true
    },
    {
     "id": "c",
     "text": "The DC feedback disappears",
     "correct": false,
     "rationale": "The DC feedback is present with or without bypassing."
    },
    {
     "id": "d",
     "text": "The small-signal gain magnitude is lower than with full bypass",
     "correct": true
    },
    {
     "id": "e",
     "text": "The input resistance of the transistor becomes finite",
     "correct": false,
     "rationale": "The gate still draws no current."
    },
    {
     "id": "f",
     "text": "The signal across gate and source is smaller than the input signal, which helps linearity",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The gain is higher than with full bypass",
     "misconception": "Reverses the gain effect.",
     "rationale": "The unbypassed resistor reduces gain."
    },
    {
     "id": "c",
     "text": "The DC feedback disappears",
     "misconception": "Thinks leaving a resistor unbypassed removes feedback.",
     "rationale": "The DC feedback is present with or without bypassing."
    },
    {
     "id": "e",
     "text": "The input resistance of the transistor becomes finite",
     "misconception": "Thinks RS makes the gate draw current.",
     "rationale": "The gate still draws no current."
    }
   ],
   "explanation": "Unbypassed source resistance adds negative feedback for DC and for the signal: more stable bias, less gain, and less signal at the gate-source junction.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-18.html",
     "label": "Lesson 18 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-18.html",
     "section": "A6"
    },
    {
     "file": "lesson-guides/lesson-18.html",
     "section": "A5"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_partial.svg",
    "alt": "Common-source amplifier with RS split into RS1 and RS2, with a bypass capacitor across RS2"
   }
  },
  {
   "id": "gr2-fb-009",
   "type": "choice",
   "topic": "Source resistor feedback and bypassing",
   "objective": "Explain what partial bypass does to the gate-source signal",
   "prompt": "In a partially bypassed stage, how does the signal across gate and source compare with the signal applied at the gate?",
   "answer": {
    "id": "c",
    "text": "It is smaller, because part of the input appears across the unbypassed source resistance"
   },
   "options": [
    {
     "id": "a",
     "text": "It is larger, because the source resistance adds gain",
     "correct": false,
     "rationale": "Feedback reduces the portion across gate and source."
    },
    {
     "id": "b",
     "text": "They are identical",
     "correct": false,
     "rationale": "That is true only if the entire source resistor is bypassed."
    },
    {
     "id": "c",
     "text": "It is smaller, because part of the input appears across the unbypassed source resistance",
     "correct": true
    },
    {
     "id": "d",
     "text": "It is zero",
     "correct": false,
     "rationale": "Some signal remains across gate and source; that is what drives the transistor."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "It is larger, because the source resistance adds gain",
     "misconception": "Believes feedback boosts the gate signal.",
     "rationale": "Feedback reduces the portion across gate and source."
    },
    {
     "id": "b",
     "text": "They are identical",
     "misconception": "Treats the stage as fully bypassed.",
     "rationale": "That is true only if the entire source resistor is bypassed."
    },
    {
     "id": "d",
     "text": "It is zero",
     "misconception": "Takes the effect to the extreme.",
     "rationale": "Some signal remains across gate and source; that is what drives the transistor."
    }
   ],
   "explanation": "The source node moves with the signal, so vgs = vg / (1 + gm RS1) is smaller than vg. This is also why linearity is easier to achieve.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-18.html",
     "label": "Lesson 18 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-18.html",
     "section": "A5 partial bypass"
    },
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 4 Step 9"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_partial.svg",
    "alt": "Common-source amplifier with RS split into RS1 and RS2, with a bypass capacitor across RS2"
   }
  },
  {
   "id": "gr2-fb-010",
   "type": "choice",
   "topic": "Source resistor feedback and bypassing",
   "objective": "Say which signal is tested for linearity in the partial bypass design",
   "prompt": "In the partially bypassed design, which signal is compared with the overdrive voltage in the linearity check?",
   "answer": {
    "id": "a",
    "text": "The signal across gate and source, which is the gate signal reduced by the unbypassed source resistance"
   },
   "options": [
    {
     "id": "a",
     "text": "The signal across gate and source, which is the gate signal reduced by the unbypassed source resistance",
     "correct": true
    },
    {
     "id": "b",
     "text": "The full signal at the gate",
     "correct": false,
     "rationale": "The model's validity depends on the gate-source signal, which is smaller here."
    },
    {
     "id": "c",
     "text": "The peak-to-peak drain voltage",
     "correct": false,
     "rationale": "The output is tested by the swing check, not the linearity test."
    },
    {
     "id": "d",
     "text": "The DC gate voltage",
     "correct": false,
     "rationale": "Linearity concerns the signal part only."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "The full signal at the gate",
     "misconception": "Uses the input amplitude instead of vgs.",
     "rationale": "The model's validity depends on the gate-source signal, which is smaller here."
    },
    {
     "id": "c",
     "text": "The peak-to-peak drain voltage",
     "misconception": "Uses the output instead.",
     "rationale": "The output is tested by the swing check, not the linearity test."
    },
    {
     "id": "d",
     "text": "The DC gate voltage",
     "misconception": "Uses a DC quantity.",
     "rationale": "Linearity concerns the signal part only."
    }
   ],
   "explanation": "The small-signal approximation requires the signal across gate-source to be small compared with VOV. In the partial-bypass design that signal is vg,pk divided by (1 + gm RS1).",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-18.html",
     "label": "Lesson 18 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-18.html",
     "section": "A5 Common mistakes"
    },
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 4 Step 9"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_partial.svg",
    "alt": "Common-source amplifier with RS split into RS1 and RS2, with a bypass capacitor across RS2"
   }
  },
  {
   "id": "gr2-fb-011",
   "type": "choice",
   "topic": "Source resistor feedback and bypassing",
   "objective": "Explain the supply split used in the CS designs",
   "prompt": "In the bypassed common-source designs the supply is split into equal thirds: VRD = VDS = VRS = VDD/3. What is the main idea behind this?",
   "answer": {
    "id": "c",
    "text": "The drain sits high enough for downswing and low enough for upswing, while enough voltage is across RS for useful feedback"
   },
   "options": [
    {
     "id": "a",
     "text": "It makes RD, the transistor and RS have equal resistance",
     "correct": false,
     "rationale": "Equal voltage drops do not mean equal resistances."
    },
    {
     "id": "b",
     "text": "It maximizes the drain current",
     "correct": false,
     "rationale": "The split balances swing and feedback, not maximum current."
    },
    {
     "id": "c",
     "text": "The drain sits high enough for downswing and low enough for upswing, while enough voltage is across RS for useful feedback",
     "correct": true
    },
    {
     "id": "d",
     "text": "It forces VDS to be less than VOV",
     "correct": false,
     "rationale": "The split is chosen so VDS stays above VOV."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "It makes RD, the transistor and RS have equal resistance",
     "misconception": "Mistakes equal voltage drops for equal resistance.",
     "rationale": "Equal voltage drops do not mean equal resistances."
    },
    {
     "id": "b",
     "text": "It maximizes the drain current",
     "misconception": "Links the split to current only.",
     "rationale": "The split balances swing and feedback, not maximum current."
    },
    {
     "id": "d",
     "text": "It forces VDS to be less than VOV",
     "misconception": "Reverses the saturation requirement.",
     "rationale": "The split is chosen so VDS stays above VOV."
    }
   ],
   "explanation": "Each of the three series elements gets one third of VDD. VDS remains above VOV, giving swing room, and VRS supports bias stability.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-18.html",
     "label": "Lesson 18 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-18.html",
     "section": "A2 Splitting the supply"
    },
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 3 Step 1"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_partial.svg",
    "alt": "Common-source amplifier with RS split into RS1 and RS2, with a bypass capacitor across RS2"
   }
  },
  {
   "id": "gr2-fb-012",
   "type": "choice",
   "topic": "Source resistor feedback and bypassing",
   "objective": "Explain why the drain is biased at about two thirds of the supply",
   "prompt": "In the bypassed common-source designs the DC drain voltage sits near two thirds of VDD and the DC voltage at the transistor's source terminal near one third. Why does that help the output signal?",
   "answer": {
    "id": "a",
    "text": "The drain voltage then has room to move both up toward the supply and down toward the triode limit"
   },
   "options": [
    {
     "id": "a",
     "text": "The drain voltage then has room to move both up toward the supply and down toward the triode limit",
     "correct": true
    },
    {
     "id": "b",
     "text": "It makes the gain equal to one",
     "correct": false,
     "rationale": "The gain is set by gm and resistances, not by this choice alone."
    },
    {
     "id": "c",
     "text": "It guarantees zero distortion",
     "correct": false,
     "rationale": "It improves swing room but does not eliminate distortion."
    },
    {
     "id": "d",
     "text": "It sets RD equal to RG1",
     "correct": false,
     "rationale": "The resistors are chosen from the voltage drops and currents."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "It makes the gain equal to one",
     "misconception": "Associates the bias with unity gain.",
     "rationale": "The gain is set by gm and resistances, not by this choice alone."
    },
    {
     "id": "c",
     "text": "It guarantees zero distortion",
     "misconception": "Overclaims.",
     "rationale": "It improves swing room but does not eliminate distortion."
    },
    {
     "id": "d",
     "text": "It sets RD equal to RG1",
     "misconception": "Invents a relationship.",
     "rationale": "The resistors are chosen from the voltage drops and currents."
    }
   ],
   "explanation": "With VD = 2VDD/3 and VS = VDD/3, the drain is centered between the supply and the triode edge, which centers the output variations.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-18.html",
     "label": "Lesson 18 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "Lesson objectives",
     "section": "Lesson 18 objectives"
    },
    {
     "file": "lesson-guides/lesson-18.html",
     "section": "B1"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_partial.svg",
    "alt": "Common-source amplifier with RS split into RS1 and RS2, with a bypass capacitor across RS2"
   }
  },
  {
   "id": "gr2-fb-013",
   "type": "true-false",
   "topic": "Source resistor feedback and bypassing",
   "objective": "Compare gain with a half-bypassed degeneration choice",
   "prompt": "True or false: with the rule RS1 = 1/gm, the open-circuit gain magnitude is about half of what it would be with RS fully bypassed (same gm and RD).",
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
     "rationale": "The denominator 1/gm + RS1 becomes 2/gm, so gain is gm·RD/2."
    }
   ],
   "distractors": [
    {
     "id": "false",
     "text": "False",
     "misconception": "Thinks partial bypass leaves the gain unchanged.",
     "rationale": "The denominator 1/gm + RS1 becomes 2/gm, so gain is gm·RD/2."
    }
   ],
   "explanation": "With RS1 = 1/gm the gain −RD/(1/gm+RS1) equals −gmRD/2, half the fully bypassed value gmRD.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-18.html",
     "label": "Lesson 18 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-18.html",
     "section": "A6 Checks"
    },
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 4 Step 2 note"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_partial.svg",
    "alt": "Common-source amplifier with RS split into RS1 and RS2, with a bypass capacitor across RS2"
   }
  },
  {
   "id": "gr2-fb-014",
   "type": "choice",
   "topic": "Source resistor feedback and bypassing",
   "objective": "Explain the rule of thumb RS1 = 1/gm",
   "prompt": "In the partially bypassed common-source design, what does choosing RS1 equal to 1/gm achieve?",
   "answer": {
    "id": "a",
    "text": "It makes the gain depend about equally on the gm term and on a resistor, roughly halving the gain's sensitivity to device variation at the cost of half the gain"
   },
   "options": [
    {
     "id": "a",
     "text": "It makes the gain depend about equally on the gm term and on a resistor, roughly halving the gain's sensitivity to device variation at the cost of half the gain",
     "correct": true
    },
    {
     "id": "b",
     "text": "It cancels the gain entirely",
     "correct": false,
     "rationale": "They add in the denominator; they do not cancel."
    },
    {
     "id": "c",
     "text": "It makes the gain independent of RD",
     "correct": false,
     "rationale": "RD remains in the numerator."
    },
    {
     "id": "d",
     "text": "It sets the DC drain current to zero",
     "correct": false,
     "rationale": "RS1 is a signal-path resistor; the DC current is set by the bias design."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "It cancels the gain entirely",
     "misconception": "Thinks the terms cancel.",
     "rationale": "They add in the denominator; they do not cancel."
    },
    {
     "id": "c",
     "text": "It makes the gain independent of RD",
     "misconception": "Removes RD from the gain.",
     "rationale": "RD remains in the numerator."
    },
    {
     "id": "d",
     "text": "It sets the DC drain current to zero",
     "misconception": "Links RS1 to current.",
     "rationale": "RS1 is a signal-path resistor; the DC current is set by the bias design."
    }
   ],
   "explanation": "With gm RS1 = 1 the denominator is twice 1/gm. A change in gm now changes the gain only about half as much, while the gain itself is halved.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-18.html",
     "label": "Lesson 18 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-18.html",
     "section": "A8 Variants"
    },
    {
     "file": "lesson-guides/lesson-17.html",
     "section": "p. 17-10 \"We will choose RS1 =\""
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_partial.svg",
    "alt": "Common-source amplifier with RS split into RS1 and RS2, with a bypass capacitor across RS2"
   }
  },
  {
   "id": "gr2-fb-015",
   "type": "choice",
   "topic": "Source resistor feedback and bypassing",
   "objective": "Say why the open-circuit gain target is set slightly high",
   "prompt": "Why is the open-circuit gain target set slightly above the required midrange (loaded) gain?",
   "answer": {
    "id": "c",
    "text": "Because connecting a load reduces the gain below the open-circuit value"
   },
   "options": [
    {
     "id": "a",
     "text": "Because the coupling capacitors add gain",
     "correct": false,
     "rationale": "Capacitors do not add gain."
    },
    {
     "id": "b",
     "text": "Because standard resistors always raise the gain",
     "correct": false,
     "rationale": "Rounding can go either way."
    },
    {
     "id": "c",
     "text": "Because connecting a load reduces the gain below the open-circuit value",
     "correct": true
    },
    {
     "id": "d",
     "text": "Because the supply is not exactly regulated",
     "correct": false,
     "rationale": "The reason is the load divider."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Because the coupling capacitors add gain",
     "misconception": "Credits capacitors.",
     "rationale": "Capacitors do not add gain."
    },
    {
     "id": "b",
     "text": "Because standard resistors always raise the gain",
     "misconception": "Invents a rounding effect.",
     "rationale": "Rounding can go either way."
    },
    {
     "id": "d",
     "text": "Because the supply is not exactly regulated",
     "misconception": "Brings in a supply effect.",
     "rationale": "The reason is the load divider."
    }
   ],
   "explanation": "The loaded gain is Avo times RL/(RL + Ro), which is below Avo. Targeting a slightly higher Avo leaves margin for that loss.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-18.html",
     "label": "Lesson 18 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 4 Step 1 \"slightly above midrange\""
    },
    {
     "file": "lesson-guides/lesson-18.html",
     "section": "B6 Rules of thumb"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_partial.svg",
    "alt": "Common-source amplifier with RS split into RS1 and RS2, with a bypass capacitor across RS2"
   }
  },
  {
   "id": "gr2-fb-016",
   "type": "choice",
   "topic": "Source resistor feedback and bypassing",
   "objective": "Say which part of the source resistor the capacitor bypasses",
   "prompt": "In RS = RS1 + RS2 with a bypass capacitor, which portion does the capacitor short for the signal?",
   "answer": {
    "id": "a",
    "text": "RS2 only; RS1 stays in the signal path"
   },
   "options": [
    {
     "id": "a",
     "text": "RS2 only; RS1 stays in the signal path",
     "correct": true
    },
    {
     "id": "b",
     "text": "RS1 only",
     "correct": false,
     "rationale": "RS1 is the unbypassed part."
    },
    {
     "id": "c",
     "text": "Both RS1 and RS2",
     "correct": false,
     "rationale": "Then there would be no RS1."
    },
    {
     "id": "d",
     "text": "Neither, because capacitors do not affect signals",
     "correct": false,
     "rationale": "A large capacitor is a short at signal frequencies."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "RS1 only",
     "misconception": "Swaps the two resistors.",
     "rationale": "RS1 is the unbypassed part."
    },
    {
     "id": "c",
     "text": "Both RS1 and RS2",
     "misconception": "Describes full bypass.",
     "rationale": "Then there would be no RS1."
    },
    {
     "id": "d",
     "text": "Neither, because capacitors do not affect signals",
     "misconception": "Misunderstands capacitors.",
     "rationale": "A large capacitor is a short at signal frequencies."
    }
   ],
   "explanation": "The capacitor is connected across RS2 only. For DC the full RS1 + RS2 sets the bias; for the signal only RS1 remains.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-18.html",
     "label": "Lesson 18 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-18.html",
     "section": "A6"
    },
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 4 diagram"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_partial.svg",
    "alt": "Common-source amplifier with RS split into RS1 and RS2, with a bypass capacitor across RS2"
   }
  },
  {
   "id": "gr2-fb-017",
   "type": "choice",
   "topic": "Source resistor feedback and bypassing",
   "objective": "Describe THD",
   "prompt": "What does total harmonic distortion (THD) measure?",
   "answer": {
    "id": "c",
    "text": "How much of the output is energy at harmonics of the input frequency, a measure of nonlinear distortion"
   },
   "options": [
    {
     "id": "a",
     "text": "How much noise the supply adds at random frequencies",
     "correct": false,
     "rationale": "THD counts harmonics of the signal, not random noise."
    },
    {
     "id": "b",
     "text": "The gain at the input frequency",
     "correct": false,
     "rationale": "Gain is the signal ratio; THD is about the unwanted harmonics."
    },
    {
     "id": "c",
     "text": "How much of the output is energy at harmonics of the input frequency, a measure of nonlinear distortion",
     "correct": true
    },
    {
     "id": "d",
     "text": "How much power the amplifier dissipates",
     "correct": false,
     "rationale": "THD says nothing about power dissipation."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "How much noise the supply adds at random frequencies",
     "misconception": "Confuses distortion with noise.",
     "rationale": "THD counts harmonics of the signal, not random noise."
    },
    {
     "id": "b",
     "text": "The gain at the input frequency",
     "misconception": "Mixes THD with gain.",
     "rationale": "Gain is the signal ratio; THD is about the unwanted harmonics."
    },
    {
     "id": "d",
     "text": "How much power the amplifier dissipates",
     "misconception": "Mixes distortion with power.",
     "rationale": "THD says nothing about power dissipation."
    }
   ],
   "explanation": "A pure sine at the input should produce a pure sine at the output. Nonlinearity creates harmonics, and THD compares their total strength with the fundamental.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-19.html",
     "label": "Lesson 19 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-19.html",
     "section": "A6 Measuring distortion"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 19 objectives"
    }
   ]
  },
  {
   "id": "gr2-fb-018",
   "type": "choice",
   "topic": "Source resistor feedback and bypassing",
   "objective": "Link degeneration to THD",
   "prompt": "In general, what should leaving more of the source resistance unbypassed do to the output THD, and why?",
   "answer": {
    "id": "a",
    "text": "THD should fall, because the signal across gate and source is smaller and the transistor is driven more linearly"
   },
   "options": [
    {
     "id": "a",
     "text": "THD should fall, because the signal across gate and source is smaller and the transistor is driven more linearly",
     "correct": true
    },
    {
     "id": "b",
     "text": "THD should rise, because feedback adds harmonics",
     "correct": false,
     "rationale": "Negative feedback of this kind reduces the effective drive and the distortion."
    },
    {
     "id": "c",
     "text": "THD stays the same because THD depends only on the input",
     "correct": false,
     "rationale": "THD depends on how nonlinearly the circuit responds."
    },
    {
     "id": "d",
     "text": "THD becomes zero",
     "correct": false,
     "rationale": "THD is reduced, not eliminated."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "THD should rise, because feedback adds harmonics",
     "misconception": "Believes feedback adds distortion.",
     "rationale": "Negative feedback of this kind reduces the effective drive and the distortion."
    },
    {
     "id": "c",
     "text": "THD stays the same because THD depends only on the input",
     "misconception": "Ignores the amplifier.",
     "rationale": "THD depends on how nonlinearly the circuit responds."
    },
    {
     "id": "d",
     "text": "THD becomes zero",
     "misconception": "Overclaims.",
     "rationale": "THD is reduced, not eliminated."
    }
   ],
   "explanation": "Smaller vgs means the square-law curve is used over a smaller, straighter range. In the Lesson 20 simulations with the same supply split, THD fell from 0.604% to 0.486% when more resistance was left unbypassed.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-20.html",
     "label": "Lesson 20 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-20.html",
     "section": "pp. 20-7 and 20-10 THD readouts"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 20 objectives"
    }
   ]
  },
  {
   "id": "gr2-fb-019",
   "type": "choice",
   "topic": "Source resistor feedback and bypassing",
   "objective": "Say what changes when the supply split changes",
   "prompt": "Why must the CS design equations be modified if the supply is not split into equal thirds?",
   "answer": {
    "id": "c",
    "text": "The formula for the drain current used the voltage across RD and the gain relation, so a different split changes those relationships"
   },
   "options": [
    {
     "id": "a",
     "text": "Because KVL no longer applies",
     "correct": false,
     "rationale": "KVL always applies."
    },
    {
     "id": "b",
     "text": "Because the transistor changes type",
     "correct": false,
     "rationale": "It is the same transistor; the allocation changed."
    },
    {
     "id": "c",
     "text": "The formula for the drain current used the voltage across RD and the gain relation, so a different split changes those relationships",
     "correct": true
    },
    {
     "id": "d",
     "text": "Because the gate resistors disappear",
     "correct": false,
     "rationale": "The divider is still needed."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Because KVL no longer applies",
     "misconception": "Invents a law violation.",
     "rationale": "KVL always applies."
    },
    {
     "id": "b",
     "text": "Because the transistor changes type",
     "misconception": "Thinks the device changes.",
     "rationale": "It is the same transistor; the allocation changed."
    },
    {
     "id": "d",
     "text": "Because the gate resistors disappear",
     "misconception": "Thinks the divider is removed.",
     "rationale": "The divider is still needed."
    }
   ],
   "explanation": "The \"thirds\" formula assumed VRD = VDD/3. With another allocation, the voltage across RD differs, so the current formula and swing room change.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-20.html",
     "label": "Lesson 20 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "Lesson objectives",
     "section": "Lesson 20 objectives"
    },
    {
     "file": "lesson-guides/lesson-20.html",
     "section": "p. 20-8 \"we must modify the ID design formula\""
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_partial.svg",
    "alt": "Common-source amplifier with RS split into RS1 and RS2, with a bypass capacitor across RS2"
   }
  },
  {
   "id": "gr2-des-001",
   "type": "choice",
   "topic": "Partially and fully bypassed CS design",
   "objective": "Explain where the factor 6 comes from",
   "prompt": "In the partially bypassed common-source design, the drain-current formula has 6 times the gain in its denominator. Where does the 6 come from?",
   "answer": {
    "id": "b",
    "text": "A factor of 3 from the equal-thirds supply split and a factor of 2 because the gain is halved by RS1 = 1/gm"
   },
   "options": [
    {
     "id": "a",
     "text": "Six design steps in the procedure",
     "correct": false,
     "rationale": "The number of steps has no role in the equation."
    },
    {
     "id": "b",
     "text": "A factor of 3 from the equal-thirds supply split and a factor of 2 because the gain is halved by RS1 = 1/gm",
     "correct": true
    },
    {
     "id": "c",
     "text": "Six standard resistor values in the divider",
     "correct": false,
     "rationale": "The divider values do not appear in this equation."
    },
    {
     "id": "d",
     "text": "A factor of 6 relating Kn and gm",
     "correct": false,
     "rationale": "gm and Kn are related by overdrive, not a constant factor of 6."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Six design steps in the procedure",
     "misconception": "Counts steps.",
     "rationale": "The number of steps has no role in the equation."
    },
    {
     "id": "c",
     "text": "Six standard resistor values in the divider",
     "misconception": "Invents a resistor count.",
     "rationale": "The divider values do not appear in this equation."
    },
    {
     "id": "d",
     "text": "A factor of 6 relating Kn and gm",
     "misconception": "Invents a device relation.",
     "rationale": "gm and Kn are related by overdrive, not a constant factor of 6."
    }
   ],
   "explanation": "The equation sheet notes it directly: 6 from VDD/3 and gmRD/2 from RS1 = 1/gm. Without the halving, the full-bypass formula carries 3 instead of 6.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-18.html",
     "label": "Lesson 18 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 4 Step 2 note"
    },
    {
     "file": "lesson-guides/lesson-18.html",
     "section": "A6 Common mistakes"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_partial.svg",
    "alt": "Common-source amplifier with RS split into RS1 and RS2, with a bypass capacitor across RS2"
   }
  },
  {
   "id": "gr2-des-002",
   "type": "choice",
   "topic": "Partially and fully bypassed CS design",
   "objective": "Compare full and partial bypass design formulas",
   "prompt": "Compared with the partial-bypass drain-current formula, why does the fully bypassed formula have 3 times the gain in the denominator instead of 6?",
   "answer": {
    "id": "d",
    "text": "Because the fully bypassed gain is the full gm·RD, so no factor of 2 from RS1 is needed"
   },
   "options": [
    {
     "id": "a",
     "text": "Because full bypass uses twice the supply",
     "correct": false,
     "rationale": "The supply is the same; the gain relation differs."
    },
    {
     "id": "b",
     "text": "Because full bypass removes RD",
     "correct": false,
     "rationale": "RD remains and sets the gain."
    },
    {
     "id": "c",
     "text": "Because the thirds rule is not used with full bypass",
     "correct": false,
     "rationale": "The same thirds rule is used."
    },
    {
     "id": "d",
     "text": "Because the fully bypassed gain is the full gm·RD, so no factor of 2 from RS1 is needed",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Because full bypass uses twice the supply",
     "misconception": "Alters the supply.",
     "rationale": "The supply is the same; the gain relation differs."
    },
    {
     "id": "b",
     "text": "Because full bypass removes RD",
     "misconception": "Removes a component.",
     "rationale": "RD remains and sets the gain."
    },
    {
     "id": "c",
     "text": "Because the thirds rule is not used with full bypass",
     "misconception": "Drops the split.",
     "rationale": "The same thirds rule is used."
    }
   ],
   "explanation": "The full-bypass gain is gm·RD. With VRD = VDD/3 the current formula contains VDD/(3|Avo|); partial bypass halves the gain, leading to VDD/(6|Avo|).",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-18.html",
     "label": "Lesson 18 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 3 Step 2 vs p. 4 Step 2"
    },
    {
     "file": "lesson-guides/lesson-18.html",
     "section": "A1 vs A6"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_bypassed.svg",
    "alt": "Common-source amplifier with a bypass capacitor across the source resistor RS"
   }
  },
  {
   "id": "gr2-des-003",
   "type": "sequence",
   "topic": "Partially and fully bypassed CS design",
   "objective": "Order the partially bypassed CS design",
   "prompt": "Put the main steps of the partially bypassed CS design in order.",
   "answer": {
    "ids": [
     "s1",
     "s2",
     "s3",
     "s4",
     "s5",
     "s6"
    ]
   },
   "steps": [
    {
     "id": "s1",
     "text": "Split the supply into equal thirds and choose RS1 = 1/gm"
    },
    {
     "id": "s2",
     "text": "Find the drain current from the gain requirement"
    },
    {
     "id": "s3",
     "text": "Find RD and RS from the one-third drop and the current"
    },
    {
     "id": "s4",
     "text": "Find VOV and gm, then split RS into RS1 and RS2"
    },
    {
     "id": "s5",
     "text": "Find VGS and VG, then design the gate divider for the input resistance"
    },
    {
     "id": "s6",
     "text": "Check swing (headroom and legroom) and linearity"
    }
   ],
   "distractors": [
    {
     "id": "d1",
     "text": "Design the gate divider before the drain current is known",
     "misconception": "Uses the wrong order.",
     "rationale": "The divider needs VG, which needs VGS, which needs the current."
    },
    {
     "id": "d2",
     "text": "Split RS into RS1 and RS2 before finding gm",
     "misconception": "Skips a dependency.",
     "rationale": "RS1 = 1/gm requires gm first."
    }
   ],
   "explanation": "This is the equation-sheet sequence: allocate, current from gain, resistors, overdrive and gm, then the gate bias and checks.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-26.html",
     "label": "Lesson 26 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 4 Steps 1-9"
    },
    {
     "file": "lesson-guides/lesson-26.html",
     "section": "A1"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_partial.svg",
    "alt": "Common-source amplifier with RS split into RS1 and RS2, with a bypass capacitor across RS2"
   }
  },
  {
   "id": "gr2-des-004",
   "type": "sequence",
   "topic": "Partially and fully bypassed CS design",
   "objective": "Order the fully bypassed CS design",
   "prompt": "Put the main steps of the fully bypassed CS design in order.",
   "answer": {
    "ids": [
     "s1",
     "s2",
     "s3",
     "s4",
     "s5",
     "s6"
    ]
   },
   "steps": [
    {
     "id": "s1",
     "text": "Split the supply into equal thirds"
    },
    {
     "id": "s2",
     "text": "Find the drain current from the gain requirement"
    },
    {
     "id": "s3",
     "text": "Find RD = RS from the one-third drop and the current"
    },
    {
     "id": "s4",
     "text": "Find VOV, then VGS and VG"
    },
    {
     "id": "s5",
     "text": "Design the gate divider for the input resistance"
    },
    {
     "id": "s6",
     "text": "Check swing and linearity"
    }
   ],
   "distractors": [
    {
     "id": "d1",
     "text": "Choose the gate divider first and then find the drain current",
     "misconception": "Reverses the dependency.",
     "rationale": "The gate voltage required is the result of the bias design."
    },
    {
     "id": "d2",
     "text": "Check linearity before choosing VOV",
     "misconception": "Tests before designing.",
     "rationale": "The check uses the finished design values."
    }
   ],
   "explanation": "The full-bypass design is the same chain as the partial one without the RS1/RS2 split: allocation, current, resistors, overdrive, gate bias, checks.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-18.html",
     "label": "Lesson 18 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 3 Steps 1-8"
    },
    {
     "file": "lesson-guides/lesson-18.html",
     "section": "A1"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_bypassed.svg",
    "alt": "Common-source amplifier with a bypass capacitor across the source resistor RS"
   }
  },
  {
   "id": "gr2-des-005",
   "type": "choice",
   "topic": "Partially and fully bypassed CS design",
   "objective": "Design the gate divider conceptually",
   "prompt": "When designing the two gate bias resistors RG1 and RG2 of a common-source or common-drain stage, what two conditions must they satisfy together?",
   "answer": {
    "id": "b",
    "text": "Produce the required gate voltage and keep their parallel combination at least as large as the input resistance requirement"
   },
   "options": [
    {
     "id": "a",
     "text": "Produce the required drain current and set the gain",
     "correct": false,
     "rationale": "The divider sets the gate voltage and Ri, not the gain."
    },
    {
     "id": "b",
     "text": "Produce the required gate voltage and keep their parallel combination at least as large as the input resistance requirement",
     "correct": true
    },
    {
     "id": "c",
     "text": "Equal each other so the gate sits at VDD/2",
     "correct": false,
     "rationale": "The ratio is set by the needed VG, which is generally not VDD/2."
    },
    {
     "id": "d",
     "text": "Include the transistor as a third resistor",
     "correct": false,
     "rationale": "No gate current flows, so the divider is unloaded."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Produce the required drain current and set the gain",
     "misconception": "Gives the divider jobs it does not have.",
     "rationale": "The divider sets the gate voltage and Ri, not the gain."
    },
    {
     "id": "c",
     "text": "Equal each other so the gate sits at VDD/2",
     "misconception": "Forces equal resistors.",
     "rationale": "The ratio is set by the needed VG, which is generally not VDD/2."
    },
    {
     "id": "d",
     "text": "Include the transistor as a third resistor",
     "misconception": "Treats the gate as a resistor.",
     "rationale": "No gate current flows, so the divider is unloaded."
    }
   ],
   "explanation": "Two requirements: the divider ratio gives VG, and the parallel resistance (the input resistance seen by the signal) must meet the RIN requirement.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-18.html",
     "label": "Lesson 18 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-18.html",
     "section": "A3"
    },
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 3 Step 6"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_partial.svg",
    "alt": "Common-source amplifier with RS split into RS1 and RS2, with a bypass capacitor across RS2"
   }
  },
  {
   "id": "gr2-des-006",
   "type": "choice",
   "topic": "Partially and fully bypassed CS design",
   "objective": "Explain the swing check",
   "prompt": "In the swing check of a bypassed common-source design, how are the maximum and minimum drain voltages found?",
   "answer": {
    "id": "d",
    "text": "By adding and subtracting the peak signal at the drain (gain times the peak gate signal) from the DC drain voltage"
   },
   "options": [
    {
     "id": "a",
     "text": "By adding and subtracting the supply voltage from the drain voltage",
     "correct": false,
     "rationale": "The swing is the amplified signal, not the supply."
    },
    {
     "id": "b",
     "text": "By multiplying the DC drain voltage by the gain",
     "correct": false,
     "rationale": "Gain applies to the signal, not to the DC level."
    },
    {
     "id": "c",
     "text": "By the average of the gate and source voltages",
     "correct": false,
     "rationale": "The drain swing is set by the signal gain."
    },
    {
     "id": "d",
     "text": "By adding and subtracting the peak signal at the drain (gain times the peak gate signal) from the DC drain voltage",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "By adding and subtracting the supply voltage from the drain voltage",
     "misconception": "Uses the supply as the swing.",
     "rationale": "The swing is the amplified signal, not the supply."
    },
    {
     "id": "b",
     "text": "By multiplying the DC drain voltage by the gain",
     "misconception": "Applies the gain to the DC level.",
     "rationale": "Gain applies to the signal, not to the DC level."
    },
    {
     "id": "c",
     "text": "By the average of the gate and source voltages",
     "misconception": "Invents an average.",
     "rationale": "The drain swing is set by the signal gain."
    }
   ],
   "explanation": "The drain voltage swings around its DC value by ±|Avo|·vg,pk. These extremes must stay between the triode limit and the supply.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-18.html",
     "label": "Lesson 18 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-18.html",
     "section": "A4"
    },
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 3 Step 7"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_partial.svg",
    "alt": "Common-source amplifier with RS split into RS1 and RS2, with a bypass capacitor across RS2"
   }
  },
  {
   "id": "gr2-des-007",
   "type": "choice",
   "topic": "Partially and fully bypassed CS design",
   "objective": "Say which limits the swing check compares against",
   "prompt": "In a common-source design the drain voltage swings above and below its DC value. At the low end of the swing, what must the minimum drain voltage stay above?",
   "answer": {
    "id": "b",
    "text": "The edge of saturation, which is the gate voltage minus the threshold voltage"
   },
   "options": [
    {
     "id": "a",
     "text": "Zero volts",
     "correct": false,
     "rationale": "The device would already be in triode above zero."
    },
    {
     "id": "b",
     "text": "The edge of saturation, which is the gate voltage minus the threshold voltage",
     "correct": true
    },
    {
     "id": "c",
     "text": "The source voltage only",
     "correct": false,
     "rationale": "Saturation requires the drain above VG − Vt, not just above VS."
    },
    {
     "id": "d",
     "text": "The supply voltage",
     "correct": false,
     "rationale": "The supply is the upper limit."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Zero volts",
     "misconception": "Uses ground as the limit.",
     "rationale": "The device would already be in triode above zero."
    },
    {
     "id": "c",
     "text": "The source voltage only",
     "misconception": "Compares with VS instead of the saturation edge.",
     "rationale": "Saturation requires the drain above VG − Vt, not just above VS."
    },
    {
     "id": "d",
     "text": "The supply voltage",
     "misconception": "Uses the wrong end of the swing.",
     "rationale": "The supply is the upper limit."
    }
   ],
   "explanation": "The device stays in saturation as long as VD ≥ VG − Vt. That is the bottom limit for the drain swing.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-18.html",
     "label": "Lesson 18 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-18.html",
     "section": "A4 Common mistakes"
    },
    {
     "file": "lesson-guides/lesson-26.html",
     "section": "A1 Checks"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_partial.svg",
    "alt": "Common-source amplifier with RS split into RS1 and RS2, with a bypass capacitor across RS2"
   }
  },
  {
   "id": "gr2-des-008",
   "type": "choice",
   "topic": "Partially and fully bypassed CS design",
   "objective": "Explain what a standard-value rounding does",
   "prompt": "After computing resistor values, what should you do when you replace them by standard values?",
   "answer": {
    "id": "d",
    "text": "Recompute the bias and checks with the built values, since small shifts change the bias and the gain"
   },
   "options": [
    {
     "id": "a",
     "text": "Nothing: standard values never matter",
     "correct": false,
     "rationale": "A few percent change can move the bias and the swing."
    },
    {
     "id": "b",
     "text": "Always round up so the gain increases",
     "correct": false,
     "rationale": "Rounding direction depends on which quantity matters."
    },
    {
     "id": "c",
     "text": "Change the supply voltage to compensate",
     "correct": false,
     "rationale": "The supply is fixed; re-evaluate the checks instead."
    },
    {
     "id": "d",
     "text": "Recompute the bias and checks with the built values, since small shifts change the bias and the gain",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Nothing: standard values never matter",
     "misconception": "Assumes rounding is harmless.",
     "rationale": "A few percent change can move the bias and the swing."
    },
    {
     "id": "b",
     "text": "Always round up so the gain increases",
     "misconception": "Believes rounding up helps.",
     "rationale": "Rounding direction depends on which quantity matters."
    },
    {
     "id": "c",
     "text": "Change the supply voltage to compensate",
     "misconception": "Alters a fixed given.",
     "rationale": "The supply is fixed; re-evaluate the checks instead."
    }
   ],
   "explanation": "Rounded values shift V_G, ID and the swing slightly. A design is only finished after the checks are redone with the built values.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-18.html",
     "label": "Lesson 18 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-18.html",
     "section": "A1 Variants"
    },
    {
     "file": "lesson-guides/lesson-21.html",
     "section": "A2 Checks and mistakes"
    }
   ]
  },
  {
   "id": "gr2-des-009",
   "type": "choice",
   "topic": "Partially and fully bypassed CS design",
   "objective": "Link the gain target to the drain current",
   "prompt": "In the fully bypassed common-source design, with the supply and device fixed, what happens to the required DC drain current when the target gain magnitude is raised?",
   "answer": {
    "id": "b",
    "text": "It decreases, since the formula contains the gain in the denominator squared"
   },
   "options": [
    {
     "id": "a",
     "text": "It increases, because more gain needs more current",
     "correct": false,
     "rationale": "The formula shows the opposite for this design."
    },
    {
     "id": "b",
     "text": "It decreases, since the formula contains the gain in the denominator squared",
     "correct": true
    },
    {
     "id": "c",
     "text": "It stays the same",
     "correct": false,
     "rationale": "The current is derived from the gain."
    },
    {
     "id": "d",
     "text": "It becomes equal to the signal current",
     "correct": false,
     "rationale": "The DC bias current is set by design, not by the signal."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "It increases, because more gain needs more current",
     "misconception": "Assumes more gain means more current.",
     "rationale": "The formula shows the opposite for this design."
    },
    {
     "id": "c",
     "text": "It stays the same",
     "misconception": "Believes current is independent of gain.",
     "rationale": "The current is derived from the gain."
    },
    {
     "id": "d",
     "text": "It becomes equal to the signal current",
     "misconception": "Mixes DC and signal.",
     "rationale": "The DC bias current is set by design, not by the signal."
    }
   ],
   "explanation": "The design chooses a smaller overdrive for a larger gain with the same drop across RD, which needs less bias current: current falls as 1/|Avo|².",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-18.html",
     "label": "Lesson 18 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-18.html",
     "section": "A1 Variants \"goes as 1/|Avo|²\""
    },
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 3 Step 2"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_bypassed.svg",
    "alt": "Common-source amplifier with a bypass capacitor across the source resistor RS"
   }
  },
  {
   "id": "gr2-des-010",
   "type": "choice",
   "topic": "Partially and fully bypassed CS design",
   "objective": "Say how a changed RS1 alters the design",
   "prompt": "If RS1 is not chosen equal to 1/gm, what in the partial-bypass design procedure must change?",
   "answer": {
    "id": "d",
    "text": "The drain-current formula, because the gain relation −RD/(1/gm + RS1) no longer reduces to half of gm·RD"
   },
   "options": [
    {
     "id": "a",
     "text": "The gate divider resistors only",
     "correct": false,
     "rationale": "The divider follows from the bias, not from the gain relation."
    },
    {
     "id": "b",
     "text": "Nothing, because RS1 is chosen after everything else",
     "correct": false,
     "rationale": "RS1 enters the gain, which sets the drain current."
    },
    {
     "id": "c",
     "text": "The threshold voltage",
     "correct": false,
     "rationale": "Vt is fixed."
    },
    {
     "id": "d",
     "text": "The drain-current formula, because the gain relation −RD/(1/gm + RS1) no longer reduces to half of gm·RD",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The gate divider resistors only",
     "misconception": "Moves the change to the divider.",
     "rationale": "The divider follows from the bias, not from the gain relation."
    },
    {
     "id": "b",
     "text": "Nothing, because RS1 is chosen after everything else",
     "misconception": "Ignores the dependency.",
     "rationale": "RS1 enters the gain, which sets the drain current."
    },
    {
     "id": "c",
     "text": "The threshold voltage",
     "misconception": "Alters a device parameter.",
     "rationale": "Vt is fixed."
    }
   ],
   "explanation": "The factor 6 arose from RS1 = 1/gm. A different RS1 changes the gain relation and therefore the current formula, as the Lesson 20 Example 2 notes.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-20.html",
     "label": "Lesson 20 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-20.html",
     "section": "p. 20-8 Step 2"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 20 objectives"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_partial.svg",
    "alt": "Common-source amplifier with RS split into RS1 and RS2, with a bypass capacitor across RS2"
   }
  },
  {
   "id": "gr2-cd-001",
   "type": "choice",
   "topic": "Common-drain amplifier behavior",
   "objective": "Explain why a CS stage is a poor driver of a small load",
   "prompt": "Why is a common-source amplifier a poor choice to drive a low-resistance load with a large voltage swing?",
   "answer": {
    "id": "d",
    "text": "Its output resistance is roughly RD, which is large compared with the load, so most of the gain is lost in the output divider"
   },
   "options": [
    {
     "id": "a",
     "text": "Its input resistance is too low",
     "correct": false,
     "rationale": "The problem is at the output: the divider between Ro and RL."
    },
    {
     "id": "b",
     "text": "It has no gain at all with a load",
     "correct": false,
     "rationale": "It still has gain, but a large part is lost."
    },
    {
     "id": "c",
     "text": "Its output is not inverted",
     "correct": false,
     "rationale": "A CS stage inverts; that is not the issue."
    },
    {
     "id": "d",
     "text": "Its output resistance is roughly RD, which is large compared with the load, so most of the gain is lost in the output divider",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Its input resistance is too low",
     "misconception": "Blames the input side.",
     "rationale": "The problem is at the output: the divider between Ro and RL."
    },
    {
     "id": "b",
     "text": "It has no gain at all with a load",
     "misconception": "Overstates the loss.",
     "rationale": "It still has gain, but a large part is lost."
    },
    {
     "id": "c",
     "text": "Its output is not inverted",
     "misconception": "Wrong fact.",
     "rationale": "A CS stage inverts; that is not the issue."
    }
   ],
   "explanation": "A CS stage looks like Avo·vi in series with an Ro of about RD. A small RL forms a divider with that Ro and takes only a fraction of the signal.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-19.html",
     "label": "Lesson 19 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-19.html",
     "section": "A1"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 19 objectives"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_basic.svg",
    "alt": "Common-source amplifier with gate divider, coupling capacitors and load"
   }
  },
  {
   "id": "gr2-cd-002",
   "type": "choice",
   "topic": "Common-drain amplifier behavior",
   "objective": "Identify the common-drain topology",
   "prompt": "What defines a common-drain (source-follower) amplifier?",
   "answer": {
    "id": "b",
    "text": "The input is applied at the gate, the output is taken at the source, and the drain is at ac ground"
   },
   "options": [
    {
     "id": "a",
     "text": "The input is at the drain and the output at the gate",
     "correct": false,
     "rationale": "The gate is the high-impedance input."
    },
    {
     "id": "b",
     "text": "The input is applied at the gate, the output is taken at the source, and the drain is at ac ground",
     "correct": true
    },
    {
     "id": "c",
     "text": "The input is at the source and the output at the drain",
     "correct": false,
     "rationale": "That arrangement is common gate."
    },
    {
     "id": "d",
     "text": "The input is at the gate and the output at the drain",
     "correct": false,
     "rationale": "Taking the output at the drain is common source."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The input is at the drain and the output at the gate",
     "misconception": "Mixes the terminals.",
     "rationale": "The gate is the high-impedance input."
    },
    {
     "id": "c",
     "text": "The input is at the source and the output at the drain",
     "misconception": "Describes common gate.",
     "rationale": "That arrangement is common gate."
    },
    {
     "id": "d",
     "text": "The input is at the gate and the output at the drain",
     "misconception": "Describes common source.",
     "rationale": "Taking the output at the drain is common source."
    }
   ],
   "explanation": "In a CD stage the drain connects to the supply (ac ground), the gate takes the input, and the source drives the output through a coupling capacitor.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-19.html",
     "label": "Lesson 19 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-19.html",
     "section": "A2"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 19 objectives"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cd_stage.svg",
    "alt": "Common-drain (source-follower) stage driving a load"
   }
  },
  {
   "id": "gr2-cd-003",
   "type": "choice",
   "topic": "Common-drain amplifier behavior",
   "objective": "State the gain behavior of a source follower",
   "prompt": "Compared with a common-source amplifier, what is the voltage gain of a common-drain (source-follower) amplifier like?",
   "answer": {
    "id": "d",
    "text": "Positive and slightly below 1; the output follows the input without inversion"
   },
   "options": [
    {
     "id": "a",
     "text": "Large and negative",
     "correct": false,
     "rationale": "A follower does not invert and does not give a large gain."
    },
    {
     "id": "b",
     "text": "Large and positive",
     "correct": false,
     "rationale": "The follower's voltage gain is just under one."
    },
    {
     "id": "c",
     "text": "Exactly zero",
     "correct": false,
     "rationale": "The output tracks the input at nearly the same size."
    },
    {
     "id": "d",
     "text": "Positive and slightly below 1; the output follows the input without inversion",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Large and negative",
     "misconception": "Describes the CS stage.",
     "rationale": "A follower does not invert and does not give a large gain."
    },
    {
     "id": "b",
     "text": "Large and positive",
     "misconception": "Assumes a follower amplifies voltage.",
     "rationale": "The follower's voltage gain is just under one."
    },
    {
     "id": "c",
     "text": "Exactly zero",
     "misconception": "Confuses buffering with no gain.",
     "rationale": "The output tracks the input at nearly the same size."
    }
   ],
   "explanation": "The follower's gain is gm·RS / (1 + gm·RS), always below 1 and positive. Its value is as a buffer, not as a voltage amplifier.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-19.html",
     "label": "Lesson 19 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-19.html",
     "section": "A2 Method"
    },
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 5 header"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cd_stage.svg",
    "alt": "Common-drain (source-follower) stage driving a load"
   }
  },
  {
   "id": "gr2-cd-004",
   "type": "choice",
   "topic": "Common-drain amplifier behavior",
   "objective": "Explain why the follower gain is below one",
   "prompt": "Why is the voltage gain of a source follower slightly less than 1?",
   "answer": {
    "id": "b",
    "text": "The 1/gm of the transistor in series with RS forms a divider, so only part of the input appears across RS"
   },
   "options": [
    {
     "id": "a",
     "text": "The drain resistor takes part of the signal",
     "correct": false,
     "rationale": "A follower has no drain resistor in the signal path."
    },
    {
     "id": "b",
     "text": "The 1/gm of the transistor in series with RS forms a divider, so only part of the input appears across RS",
     "correct": true
    },
    {
     "id": "c",
     "text": "The coupling capacitors attenuate the signal",
     "correct": false,
     "rationale": "Large capacitors are shorts for the signal."
    },
    {
     "id": "d",
     "text": "The gate draws current from the source",
     "correct": false,
     "rationale": "The gate draws no current."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The drain resistor takes part of the signal",
     "misconception": "Thinks RD is present.",
     "rationale": "A follower has no drain resistor in the signal path."
    },
    {
     "id": "c",
     "text": "The coupling capacitors attenuate the signal",
     "misconception": "Credits the capacitors.",
     "rationale": "Large capacitors are shorts for the signal."
    },
    {
     "id": "d",
     "text": "The gate draws current from the source",
     "misconception": "Invents gate current.",
     "rationale": "The gate draws no current."
    }
   ],
   "explanation": "The signal current flows through 1/gm and RS in series. The output across RS is RS/(RS + 1/gm) of the input. It approaches 1 when gm·RS is large.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-19.html",
     "label": "Lesson 19 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-19.html",
     "section": "A2 Checks and mistakes"
    },
    {
     "file": "lesson-guides/lesson-21.html",
     "section": "A6"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cd_stage.svg",
    "alt": "Common-drain (source-follower) stage driving a load"
   }
  },
  {
   "id": "gr2-cd-005",
   "type": "choice",
   "topic": "Common-drain amplifier behavior",
   "objective": "Estimate the output resistance of a source follower",
   "prompt": "What is the output resistance of a common-drain stage approximately?",
   "answer": {
    "id": "d",
    "text": "About 1/gm (in parallel with RS), which is small"
   },
   "options": [
    {
     "id": "a",
     "text": "About RD",
     "correct": false,
     "rationale": "There is no RD at the output of a follower."
    },
    {
     "id": "b",
     "text": "About the gate divider resistance",
     "correct": false,
     "rationale": "The divider gives the input resistance."
    },
    {
     "id": "c",
     "text": "Infinite",
     "correct": false,
     "rationale": "Followers are chosen for their low output resistance."
    },
    {
     "id": "d",
     "text": "About 1/gm (in parallel with RS), which is small",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "About RD",
     "misconception": "Uses the CS result.",
     "rationale": "There is no RD at the output of a follower."
    },
    {
     "id": "b",
     "text": "About the gate divider resistance",
     "misconception": "Mixes up Ri and Ro.",
     "rationale": "The divider gives the input resistance."
    },
    {
     "id": "c",
     "text": "Infinite",
     "misconception": "Thinks followers have high output resistance.",
     "rationale": "Followers are chosen for their low output resistance."
    }
   ],
   "explanation": "Looking into the source with vi = 0, the circuit shows RS in parallel with 1/gm (and ro, which is large). This is why a follower drives low-resistance loads well.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-19.html",
     "label": "Lesson 19 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 5 header and p. 6 table"
    },
    {
     "file": "lesson-guides/lesson-19.html",
     "section": "A2"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cd_stage.svg",
    "alt": "Common-drain (source-follower) stage driving a load"
   }
  },
  {
   "id": "gr2-cd-006",
   "type": "choice",
   "topic": "Common-drain amplifier behavior",
   "objective": "Identify the input resistance of a source follower",
   "prompt": "What sets the input resistance of the common-drain stage in the course's bias network?",
   "answer": {
    "id": "b",
    "text": "The two gate bias resistors in parallel, because the gate draws no current"
   },
   "options": [
    {
     "id": "a",
     "text": "1/gm",
     "correct": false,
     "rationale": "1/gm appears at the output side."
    },
    {
     "id": "b",
     "text": "The two gate bias resistors in parallel, because the gate draws no current",
     "correct": true
    },
    {
     "id": "c",
     "text": "RS",
     "correct": false,
     "rationale": "RS is at the output and does not load the gate DC-wise."
    },
    {
     "id": "d",
     "text": "The load resistor",
     "correct": false,
     "rationale": "The load is at the output."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "1/gm",
     "misconception": "Uses the output resistance.",
     "rationale": "1/gm appears at the output side."
    },
    {
     "id": "c",
     "text": "RS",
     "misconception": "Thinks the source resistor sets Ri.",
     "rationale": "RS is at the output and does not load the gate DC-wise."
    },
    {
     "id": "d",
     "text": "The load resistor",
     "misconception": "Thinks the load sets Ri.",
     "rationale": "The load is at the output."
    }
   ],
   "explanation": "The gate presents no resistance. The signal sees RG1 and RG2 to ground, so Ri = RG1 ∥ RG2.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-19.html",
     "label": "Lesson 19 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-19.html",
     "section": "A2"
    },
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 5 header"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cd_stage.svg",
    "alt": "Common-drain (source-follower) stage driving a load"
   }
  },
  {
   "id": "gr2-cd-007",
   "type": "multi-select",
   "topic": "Common-drain amplifier behavior",
   "objective": "Collect the buffer properties of a common-drain stage",
   "prompt": "Which statements about a common-drain amplifier are correct? Select all that apply.",
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
     "text": "Its voltage gain is large and negative",
     "correct": false,
     "rationale": "A follower neither inverts nor gives large voltage gain."
    },
    {
     "id": "b",
     "text": "Its voltage gain is positive and a little below 1",
     "correct": true
    },
    {
     "id": "c",
     "text": "Its output resistance is approximately RD",
     "correct": false,
     "rationale": "The follower has no RD at the output."
    },
    {
     "id": "d",
     "text": "Its output resistance is small",
     "correct": true
    },
    {
     "id": "e",
     "text": "It has no DC bias circuit",
     "correct": false,
     "rationale": "It needs a gate divider and RS to set a Q-point."
    },
    {
     "id": "f",
     "text": "Its input resistance comes from the gate bias network",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Its voltage gain is large and negative",
     "misconception": "Describes the CS stage.",
     "rationale": "A follower neither inverts nor gives large voltage gain."
    },
    {
     "id": "c",
     "text": "Its output resistance is approximately RD",
     "misconception": "Uses the CS result.",
     "rationale": "The follower has no RD at the output."
    },
    {
     "id": "e",
     "text": "It has no DC bias circuit",
     "misconception": "Thinks followers need no biasing.",
     "rationale": "It needs a gate divider and RS to set a Q-point."
    }
   ],
   "explanation": "The follower is a buffer: high input resistance from the bias network, small output resistance and a gain near one.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-19.html",
     "label": "Lesson 19 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-19.html",
     "section": "B2"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 20 objectives"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cd_stage.svg",
    "alt": "Common-drain (source-follower) stage driving a load"
   }
  },
  {
   "id": "gr2-cd-008",
   "type": "true-false",
   "topic": "Common-drain amplifier behavior",
   "objective": "Test the follower inversion fact",
   "prompt": "True or false: a common-drain amplifier inverts the signal, like a common-source amplifier.",
   "answer": {
    "id": "false",
    "text": "False"
   },
   "options": [
    {
     "id": "true",
     "text": "True",
     "correct": false,
     "rationale": "The follower output moves in the same direction as the input."
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
     "misconception": "Applies the CS phase relationship to every transistor stage.",
     "rationale": "The follower output moves in the same direction as the input."
    }
   ],
   "explanation": "When vgs rises, the source follows upward, so the output rises with the input. There is no inversion.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-19.html",
     "label": "Lesson 19 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-19.html",
     "section": "A2"
    },
    {
     "file": "lesson-guides/lesson-21.html",
     "section": "A6"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cd_stage.svg",
    "alt": "Common-drain (source-follower) stage driving a load"
   }
  },
  {
   "id": "gr2-cd-009",
   "type": "choice",
   "topic": "Common-drain amplifier behavior",
   "objective": "Explain why a follower works as a buffer",
   "prompt": "Why is a common-drain stage called a buffer when it follows a high-gain stage?",
   "answer": {
    "id": "d",
    "text": "It has a large input resistance that does not load the gain stage, and a small output resistance that delivers the signal to the load"
   },
   "options": [
    {
     "id": "a",
     "text": "It raises the voltage gain of the previous stage",
     "correct": false,
     "rationale": "Its voltage gain is below one."
    },
    {
     "id": "b",
     "text": "It inverts the signal to correct phase errors",
     "correct": false,
     "rationale": "It does not invert."
    },
    {
     "id": "c",
     "text": "It stores energy for the next stage",
     "correct": false,
     "rationale": "Buffering means isolating, not storing."
    },
    {
     "id": "d",
     "text": "It has a large input resistance that does not load the gain stage, and a small output resistance that delivers the signal to the load",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "It raises the voltage gain of the previous stage",
     "misconception": "Credits it with extra gain.",
     "rationale": "Its voltage gain is below one."
    },
    {
     "id": "b",
     "text": "It inverts the signal to correct phase errors",
     "misconception": "Invents a correction.",
     "rationale": "It does not invert."
    },
    {
     "id": "c",
     "text": "It stores energy for the next stage",
     "misconception": "Thinks buffering means storing.",
     "rationale": "Buffering means isolating, not storing."
    }
   ],
   "explanation": "A buffer isolates the source of the signal from the load: little loading on the input side, a low-resistance drive on the output side.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-19.html",
     "label": "Lesson 19 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-19.html",
     "section": "A1"
    },
    {
     "file": "lesson-guides/lesson-21.html",
     "section": "A8"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 20 objectives"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cd_stage.svg",
    "alt": "Common-drain (source-follower) stage driving a load"
   }
  },
  {
   "id": "gr2-cd-010",
   "type": "choice",
   "topic": "Common-drain amplifier behavior",
   "objective": "Use small-signal reasoning for the follower model",
   "prompt": "What simplification is used to analyze a common-drain stage with the small-signal model?",
   "answer": {
    "id": "b",
    "text": "The supply and coupling capacitors become ac grounds/shorts, so the drain is at ground and RS connects from the source to ground"
   },
   "options": [
    {
     "id": "a",
     "text": "The supply is replaced by an open circuit",
     "correct": false,
     "rationale": "A DC voltage supply is an ac short."
    },
    {
     "id": "b",
     "text": "The supply and coupling capacitors become ac grounds/shorts, so the drain is at ground and RS connects from the source to ground",
     "correct": true
    },
    {
     "id": "c",
     "text": "The gate is shorted to the drain",
     "correct": false,
     "rationale": "The gate is the input; it is not tied to the drain."
    },
    {
     "id": "d",
     "text": "RS is removed from the model",
     "correct": false,
     "rationale": "RS sets the gain and the output resistance."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The supply is replaced by an open circuit",
     "misconception": "Mixes up the replacement.",
     "rationale": "A DC voltage supply is an ac short."
    },
    {
     "id": "c",
     "text": "The gate is shorted to the drain",
     "misconception": "Invents a connection.",
     "rationale": "The gate is the input; it is not tied to the drain."
    },
    {
     "id": "d",
     "text": "RS is removed from the model",
     "misconception": "Deletes a needed component.",
     "rationale": "RS sets the gain and the output resistance."
    }
   ],
   "explanation": "Short VDD and the capacitors, insert the T-model, and RS runs from the source node to ground. Ri, Avo and Ro then follow by inspection.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-19.html",
     "label": "Lesson 19 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-19.html",
     "section": "A2 Method"
    },
    {
     "file": "lesson-guides/lesson-20.html",
     "section": "p. 20-1"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cd_stage.svg",
    "alt": "Common-drain (source-follower) stage driving a load"
   }
  },
  {
   "id": "gr2-cddes-001",
   "type": "choice",
   "topic": "Common-drain design",
   "objective": "Explain why the input must exceed the desired output",
   "prompt": "In the common-drain (source-follower) design, the input amplitude is estimated to be larger than the desired output amplitude. Why?",
   "answer": {
    "id": "b",
    "text": "The follower's gain is a bit below 1, so a slightly larger input is needed for the required output"
   },
   "options": [
    {
     "id": "a",
     "text": "Because the follower inverts and loses sign",
     "correct": false,
     "rationale": "A follower does not invert."
    },
    {
     "id": "b",
     "text": "The follower's gain is a bit below 1, so a slightly larger input is needed for the required output",
     "correct": true
    },
    {
     "id": "c",
     "text": "Because the supply limits the input",
     "correct": false,
     "rationale": "The reason is the gain below one."
    },
    {
     "id": "d",
     "text": "Because the load draws gate current",
     "correct": false,
     "rationale": "The gate draws none."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Because the follower inverts and loses sign",
     "misconception": "Invents inversion loss.",
     "rationale": "A follower does not invert."
    },
    {
     "id": "c",
     "text": "Because the supply limits the input",
     "misconception": "Uses the supply as the reason.",
     "rationale": "The reason is the gain below one."
    },
    {
     "id": "d",
     "text": "Because the load draws gate current",
     "misconception": "Invents gate current.",
     "rationale": "The gate draws none."
    }
   ],
   "explanation": "Output = gain × input with gain below 1. The design divides the required output swing by an assumed gain (about 0.85) to estimate the input.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-19.html",
     "label": "Lesson 19 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 5 Step 1"
    },
    {
     "file": "lesson-guides/lesson-19.html",
     "section": "A3 Method"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cd_stage.svg",
    "alt": "Common-drain (source-follower) stage driving a load"
   }
  },
  {
   "id": "gr2-cddes-002",
   "type": "choice",
   "topic": "Common-drain design",
   "objective": "Explain the VDD/2 source bias",
   "prompt": "In the common-drain (source-follower) design, the DC voltage at the transistor's source terminal is set to about half of VDD. Why?",
   "answer": {
    "id": "d",
    "text": "It gives the output room to swing symmetrically up and down"
   },
   "options": [
    {
     "id": "a",
     "text": "To make the gain equal to one",
     "correct": false,
     "rationale": "Gain depends on gm and RS, not on this centering alone."
    },
    {
     "id": "b",
     "text": "To make the transistor cut off",
     "correct": false,
     "rationale": "The aim is to keep the device on."
    },
    {
     "id": "c",
     "text": "To make the load current zero",
     "correct": false,
     "rationale": "The load current depends on the signal and RL."
    },
    {
     "id": "d",
     "text": "It gives the output room to swing symmetrically up and down",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "To make the gain equal to one",
     "misconception": "Links the bias to gain.",
     "rationale": "Gain depends on gm and RS, not on this centering alone."
    },
    {
     "id": "b",
     "text": "To make the transistor cut off",
     "misconception": "Reverses the aim.",
     "rationale": "The aim is to keep the device on."
    },
    {
     "id": "c",
     "text": "To make the load current zero",
     "misconception": "Confuses bias and load current.",
     "rationale": "The load current depends on the signal and RL."
    }
   ],
   "explanation": "The output swings about the DC source voltage. Centering it between ground and the supply gives the maximum symmetric swing.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-21.html",
     "label": "Lesson 21 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 5 Step 2"
    },
    {
     "file": "lesson-guides/lesson-21.html",
     "section": "A1 Method"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cd_stage.svg",
    "alt": "Common-drain (source-follower) stage driving a load"
   }
  },
  {
   "id": "gr2-cddes-003",
   "type": "choice",
   "topic": "Common-drain design",
   "objective": "Recognize where the worst case for RS appears",
   "prompt": "A source follower drives a load through a coupling capacitor. During which part of the output cycle must the source resistor RS carry the most current?",
   "answer": {
    "id": "b",
    "text": "At the negative output peak, where the load current returns to the source node on top of the drain current"
   },
   "options": [
    {
     "id": "a",
     "text": "At the positive output peak",
     "correct": false,
     "rationale": "At the positive peak the load takes current away from the source node."
    },
    {
     "id": "b",
     "text": "At the negative output peak, where the load current returns to the source node on top of the drain current",
     "correct": true
    },
    {
     "id": "c",
     "text": "When the signal is zero",
     "correct": false,
     "rationale": "The extreme case is at the peak, not at rest."
    },
    {
     "id": "d",
     "text": "When the load is disconnected",
     "correct": false,
     "rationale": "Without a load there is no extra load current."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "At the positive output peak",
     "misconception": "Picks the wrong half cycle.",
     "rationale": "At the positive peak the load takes current away from the source node."
    },
    {
     "id": "c",
     "text": "When the signal is zero",
     "misconception": "Looks at the quiescent point only.",
     "rationale": "The extreme case is at the peak, not at rest."
    },
    {
     "id": "d",
     "text": "When the load is disconnected",
     "misconception": "Removes the load effect.",
     "rationale": "Without a load there is no extra load current."
    }
   ],
   "explanation": "At the negative peak the load pushes current back into the source node, so RS carries the drain current plus the load current. Sizing RS from the drain current alone is not enough.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-21.html",
     "label": "Lesson 21 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-21.html",
     "section": "A1 Common mistakes"
    },
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 5 Steps 5-6"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cd_stage.svg",
    "alt": "Common-drain (source-follower) stage driving a load"
   }
  },
  {
   "id": "gr2-cddes-004",
   "type": "choice",
   "topic": "Common-drain design",
   "objective": "Explain the role of the minimum drain current",
   "prompt": "In the common-drain design, why is a minimum drain current ID,min chosen, and why is it made large enough?",
   "answer": {
    "id": "d",
    "text": "So the transistor stays on at the worst moment of the swing and across different devices"
   },
   "options": [
    {
     "id": "a",
     "text": "So the gain exceeds one",
     "correct": false,
     "rationale": "A follower's gain stays below one."
    },
    {
     "id": "b",
     "text": "So the gate current is large",
     "correct": false,
     "rationale": "The gate draws none."
    },
    {
     "id": "c",
     "text": "So the supply voltage can be lowered",
     "correct": false,
     "rationale": "The supply is a given."
    },
    {
     "id": "d",
     "text": "So the transistor stays on at the worst moment of the swing and across different devices",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "So the gain exceeds one",
     "misconception": "Thinks more current gives gain above one.",
     "rationale": "A follower's gain stays below one."
    },
    {
     "id": "b",
     "text": "So the gate current is large",
     "misconception": "Invents gate current.",
     "rationale": "The gate draws none."
    },
    {
     "id": "c",
     "text": "So the supply voltage can be lowered",
     "misconception": "Links current to the supply.",
     "rationale": "The supply is a given."
    }
   ],
   "explanation": "During the negative output peak the drain current dips. Choosing a minimum value keeps it above zero, preventing cutoff and clipping for varied devices.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-21.html",
     "label": "Lesson 21 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 5 Step 4"
    },
    {
     "file": "lesson-guides/lesson-21.html",
     "section": "A1 Method"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cd_stage.svg",
    "alt": "Common-drain (source-follower) stage driving a load"
   }
  },
  {
   "id": "gr2-cddes-005",
   "type": "choice",
   "topic": "Common-drain design",
   "objective": "Say what the source node current balance is",
   "prompt": "With the load current defined as flowing from the source node into the load, how do the drain current, the RS current and the load current relate at the source node?",
   "answer": {
    "id": "b",
    "text": "The drain current equals the sum of the RS current and the load current"
   },
   "options": [
    {
     "id": "a",
     "text": "The RS current equals the sum of the drain and load currents",
     "correct": false,
     "rationale": "The drain current is the supply into the node."
    },
    {
     "id": "b",
     "text": "The drain current equals the sum of the RS current and the load current",
     "correct": true
    },
    {
     "id": "c",
     "text": "The drain current equals the RS current only",
     "correct": false,
     "rationale": "The load takes part of the current."
    },
    {
     "id": "d",
     "text": "The load current equals the drain current",
     "correct": false,
     "rationale": "RS also carries current."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The RS current equals the sum of the drain and load currents",
     "misconception": "Reverses the KCL roles.",
     "rationale": "The drain current is the supply into the node."
    },
    {
     "id": "c",
     "text": "The drain current equals the RS current only",
     "misconception": "Ignores the load.",
     "rationale": "The load takes part of the current."
    },
    {
     "id": "d",
     "text": "The load current equals the drain current",
     "misconception": "Assumes RS carries nothing.",
     "rationale": "RS also carries current."
    }
   ],
   "explanation": "KCL at the source node: current in from the drain leaves through RS and the load. At the negative peak the load current is negative, so RS carries more than ID.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-19.html",
     "label": "Lesson 19 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-19.html",
     "section": "A5 Method"
    },
    {
     "file": "lesson-guides/lesson-26.html",
     "section": "A2 Common mistakes"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cd_stage.svg",
    "alt": "Common-drain (source-follower) stage driving a load"
   }
  },
  {
   "id": "gr2-cddes-006",
   "type": "choice",
   "topic": "Common-drain design",
   "objective": "Say which current amplitude the load current uses",
   "prompt": "When the output swing is given peak-to-peak, which amplitude is used to find the peak load current?",
   "answer": {
    "id": "d",
    "text": "Half of the peak-to-peak output swing divided by the load resistance"
   },
   "options": [
    {
     "id": "a",
     "text": "The full peak-to-peak swing divided by the load resistance",
     "correct": false,
     "rationale": "That doubles the peak current."
    },
    {
     "id": "b",
     "text": "The supply voltage divided by the load resistance",
     "correct": false,
     "rationale": "The load current depends on the output signal."
    },
    {
     "id": "c",
     "text": "The DC source voltage divided by the load resistance",
     "correct": false,
     "rationale": "The load is ac coupled and carries only the signal."
    },
    {
     "id": "d",
     "text": "Half of the peak-to-peak output swing divided by the load resistance",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The full peak-to-peak swing divided by the load resistance",
     "misconception": "Uses peak-to-peak instead of peak.",
     "rationale": "That doubles the peak current."
    },
    {
     "id": "b",
     "text": "The supply voltage divided by the load resistance",
     "misconception": "Uses the supply.",
     "rationale": "The load current depends on the output signal."
    },
    {
     "id": "c",
     "text": "The DC source voltage divided by the load resistance",
     "misconception": "Uses a DC level.",
     "rationale": "The load is ac coupled and carries only the signal."
    }
   ],
   "explanation": "The peak load current is the peak output voltage (half the peak-to-peak) over RL. Mixing peak and peak-to-peak is a listed common mistake.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-19.html",
     "label": "Lesson 19 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-19.html",
     "section": "A3 Common mistakes"
    },
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 5 Step 3"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cd_stage.svg",
    "alt": "Common-drain (source-follower) stage driving a load"
   }
  },
  {
   "id": "gr2-cddes-007",
   "type": "choice",
   "topic": "Common-drain design",
   "objective": "Say what must be true at the positive output peak",
   "prompt": "At the positive peak of a source follower's output, which condition must still hold for the output to stay undistorted?",
   "answer": {
    "id": "b",
    "text": "The drain-source voltage must still exceed the overdrive voltage, so the transistor stays in saturation"
   },
   "options": [
    {
     "id": "a",
     "text": "The drain current must be zero",
     "correct": false,
     "rationale": "Zero current means the transistor is off."
    },
    {
     "id": "b",
     "text": "The drain-source voltage must still exceed the overdrive voltage, so the transistor stays in saturation",
     "correct": true
    },
    {
     "id": "c",
     "text": "The load current must be zero",
     "correct": false,
     "rationale": "The load current is at a peak there."
    },
    {
     "id": "d",
     "text": "The source voltage must equal the supply",
     "correct": false,
     "rationale": "The source must stay below the supply by at least VOV."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The drain current must be zero",
     "misconception": "Describes cutoff.",
     "rationale": "Zero current means the transistor is off."
    },
    {
     "id": "c",
     "text": "The load current must be zero",
     "misconception": "Invents a condition.",
     "rationale": "The load current is at a peak there."
    },
    {
     "id": "d",
     "text": "The source voltage must equal the supply",
     "misconception": "Sets an impossible limit.",
     "rationale": "The source must stay below the supply by at least VOV."
    }
   ],
   "explanation": "The source rises at the positive peak, shrinking VDS. If VDS falls below VOV the device enters triode and the output distorts.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-21.html",
     "label": "Lesson 21 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-19.html",
     "section": "A3 Checks"
    },
    {
     "file": "lesson-guides/lesson-21.html",
     "section": "A1 Checks"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cd_stage.svg",
    "alt": "Common-drain (source-follower) stage driving a load"
   }
  },
  {
   "id": "gr2-cddes-008",
   "type": "choice",
   "topic": "Common-drain design",
   "objective": "Explain how a larger swing or smaller load changes the CD design",
   "prompt": "If the load resistance is decreased or the output swing is increased in a follower design, what happens to the source resistor and bias current?",
   "answer": {
    "id": "d",
    "text": "The peak load current grows, so RS must be smaller and the bias current larger"
   },
   "options": [
    {
     "id": "a",
     "text": "RS must be larger and the bias current smaller",
     "correct": false,
     "rationale": "More load current needs a stiffer drive: smaller RS, more current."
    },
    {
     "id": "b",
     "text": "Nothing changes because the load is ac coupled",
     "correct": false,
     "rationale": "The load still draws signal current from the source node."
    },
    {
     "id": "c",
     "text": "Only the gate divider changes",
     "correct": false,
     "rationale": "RS and the bias current change first; the divider follows."
    },
    {
     "id": "d",
     "text": "The peak load current grows, so RS must be smaller and the bias current larger",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "RS must be larger and the bias current smaller",
     "misconception": "Reverses the trend.",
     "rationale": "More load current needs a stiffer drive: smaller RS, more current."
    },
    {
     "id": "b",
     "text": "Nothing changes because the load is ac coupled",
     "misconception": "Believes ac coupling isolates the load.",
     "rationale": "The load still draws signal current from the source node."
    },
    {
     "id": "c",
     "text": "Only the gate divider changes",
     "misconception": "Limits the effect to the divider.",
     "rationale": "RS and the bias current change first; the divider follows."
    }
   ],
   "explanation": "A larger peak load current increases the worst-case RS current, so RS must shrink to keep enough voltage and current margin, and the quiescent current rises.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-21.html",
     "label": "Lesson 21 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-21.html",
     "section": "A1 Variants"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 21 objectives"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cd_stage.svg",
    "alt": "Common-drain (source-follower) stage driving a load"
   }
  },
  {
   "id": "gr2-cddes-009",
   "type": "choice",
   "topic": "Common-drain design",
   "objective": "Diagnose clipping on the negative peak",
   "prompt": "The output of a follower design clips on the negative peak. What is the most likely cause?",
   "answer": {
    "id": "b",
    "text": "The transistor is cutting off, so the minimum drain current was chosen too small"
   },
   "options": [
    {
     "id": "a",
     "text": "The transistor has entered triode",
     "correct": false,
     "rationale": "Triode problems appear at the positive peak in a follower."
    },
    {
     "id": "b",
     "text": "The transistor is cutting off, so the minimum drain current was chosen too small",
     "correct": true
    },
    {
     "id": "c",
     "text": "The gate divider has the wrong ratio",
     "correct": false,
     "rationale": "The divider sets the bias level but clipping at the negative peak points to cutoff."
    },
    {
     "id": "d",
     "text": "The supply voltage is too high",
     "correct": false,
     "rationale": "A high supply does not cause negative-peak clipping."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The transistor has entered triode",
     "misconception": "Mixes up the clipping side.",
     "rationale": "Triode problems appear at the positive peak in a follower."
    },
    {
     "id": "c",
     "text": "The gate divider has the wrong ratio",
     "misconception": "Blames the divider first.",
     "rationale": "The divider sets the bias level but clipping at the negative peak points to cutoff."
    },
    {
     "id": "d",
     "text": "The supply voltage is too high",
     "misconception": "Blames the supply.",
     "rationale": "A high supply does not cause negative-peak clipping."
    }
   ],
   "explanation": "At the negative peak the drain current is lowest. If it reaches zero the device cuts off. The remedy is a larger ID,min (smaller RS).",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-21.html",
     "label": "Lesson 21 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-21.html",
     "section": "A1 Variants"
    },
    {
     "file": "lesson-guides/lesson-19.html",
     "section": "A3 Variants"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cd_stage.svg",
    "alt": "Common-drain (source-follower) stage driving a load"
   }
  },
  {
   "id": "gr2-cddes-010",
   "type": "sequence",
   "topic": "Common-drain design",
   "objective": "Order the common-drain design",
   "prompt": "Put the main steps of the common-drain design in order.",
   "answer": {
    "ids": [
     "s1",
     "s2",
     "s3",
     "s4",
     "s5",
     "s6"
    ]
   },
   "steps": [
    {
     "id": "s1",
     "text": "Estimate the needed input swing from the output swing and the gain below one"
    },
    {
     "id": "s2",
     "text": "Bias the source near half the supply"
    },
    {
     "id": "s3",
     "text": "Find the peak load current and pick a minimum drain current"
    },
    {
     "id": "s4",
     "text": "Size RS from the worst-case current and its minimum voltage"
    },
    {
     "id": "s5",
     "text": "Find the DC current, overdrive and gate voltage"
    },
    {
     "id": "s6",
     "text": "Design the gate divider and verify by simulation"
    }
   ],
   "distractors": [
    {
     "id": "d1",
     "text": "Size RS before finding the load current",
     "misconception": "Skips the worst-case current.",
     "rationale": "RS depends on the worst-case current, which includes the load."
    },
    {
     "id": "d2",
     "text": "Design the gate divider first",
     "misconception": "Reverses the dependency.",
     "rationale": "The divider needs the gate voltage, which comes last."
    }
   ],
   "explanation": "The equation-sheet sequence moves from the swing requirements to the worst-case current and RS, then to the DC bias and finally the gate network.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-19.html",
     "label": "Lesson 19 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 5 Steps 1-11"
    },
    {
     "file": "lesson-guides/lesson-19.html",
     "section": "A3 Method"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cd_stage.svg",
    "alt": "Common-drain (source-follower) stage driving a load"
   }
  },
  {
   "id": "gr2-cddes-011",
   "type": "choice",
   "topic": "Common-drain design",
   "objective": "Explain what a poor follower looks like",
   "prompt": "Why does a follower with a light bias current give a poor gain (further below 1)?",
   "answer": {
    "id": "b",
    "text": "A small bias current gives a small gm, so 1/gm is large compared with RS and the divider loses more signal"
   },
   "options": [
    {
     "id": "a",
     "text": "A small current raises the supply voltage",
     "correct": false,
     "rationale": "The supply is independent."
    },
    {
     "id": "b",
     "text": "A small bias current gives a small gm, so 1/gm is large compared with RS and the divider loses more signal",
     "correct": true
    },
    {
     "id": "c",
     "text": "A small current makes the gate draw current",
     "correct": false,
     "rationale": "The gate draws none at any bias."
    },
    {
     "id": "d",
     "text": "A small current makes RS zero",
     "correct": false,
     "rationale": "RS is a fixed resistor."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "A small current raises the supply voltage",
     "misconception": "Links current to supply.",
     "rationale": "The supply is independent."
    },
    {
     "id": "c",
     "text": "A small current makes the gate draw current",
     "misconception": "Invents gate current.",
     "rationale": "The gate draws none at any bias."
    },
    {
     "id": "d",
     "text": "A small current makes RS zero",
     "misconception": "Changes a component.",
     "rationale": "RS is a fixed resistor."
    }
   ],
   "explanation": "Follower gain approaches 1 only when gm·RS is large, which requires a healthy bias current.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-21.html",
     "label": "Lesson 21 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-21.html",
     "section": "A6 Common mistakes"
    },
    {
     "file": "lesson-guides/lesson-19.html",
     "section": "A2"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cd_stage.svg",
    "alt": "Common-drain (source-follower) stage driving a load"
   }
  },
  {
   "id": "gr2-multi-001",
   "type": "choice",
   "topic": "Multi-stage amplifier planning",
   "objective": "Choose stages to meet gain and drive requirements",
   "prompt": "A specification needs both high voltage gain and the ability to drive a low-resistance load. Which two-stage arrangement fits best?",
   "answer": {
    "id": "a",
    "text": "A common-source stage for gain followed by a common-drain stage to drive the load"
   },
   "options": [
    {
     "id": "a",
     "text": "A common-source stage for gain followed by a common-drain stage to drive the load",
     "correct": true
    },
    {
     "id": "b",
     "text": "A common-drain stage first, then common source",
     "correct": false,
     "rationale": "The follower has no voltage gain to contribute and the CS stage would still drive the small load."
    },
    {
     "id": "c",
     "text": "Two common-drain stages for extra gain",
     "correct": false,
     "rationale": "Followers have gain below one."
    },
    {
     "id": "d",
     "text": "A single common-source stage with a larger RD",
     "correct": false,
     "rationale": "A larger RD makes the output resistance worse for a small load."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "A common-drain stage first, then common source",
     "misconception": "Reverses the order.",
     "rationale": "The follower has no voltage gain to contribute and the CS stage would still drive the small load."
    },
    {
     "id": "c",
     "text": "Two common-drain stages for extra gain",
     "misconception": "Thinks followers add gain.",
     "rationale": "Followers have gain below one."
    },
    {
     "id": "d",
     "text": "A single common-source stage with a larger RD",
     "misconception": "Raises the output resistance.",
     "rationale": "A larger RD makes the output resistance worse for a small load."
    }
   ],
   "explanation": "A CS stage provides voltage gain but has a high Ro. A CD stage has small Ro and low voltage gain. Cascading CS then CD combines the strengths.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-21.html",
     "label": "Lesson 21 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-21.html",
     "section": "A8"
    },
    {
     "file": "lesson-guides/lesson-19.html",
     "section": "A1"
    }
   ]
  },
  {
   "id": "gr2-multi-002",
   "type": "choice",
   "topic": "Multi-stage amplifier planning",
   "objective": "Explain the CS-to-CD interface",
   "prompt": "In a common-source stage followed by a common-drain stage, what is the load seen by the common-source stage?",
   "answer": {
    "id": "c",
    "text": "The input resistance of the CD stage"
   },
   "options": [
    {
     "id": "a",
     "text": "The final load resistor directly",
     "correct": false,
     "rationale": "The CS stage drives the follower, not the final load."
    },
    {
     "id": "b",
     "text": "The supply resistance",
     "correct": false,
     "rationale": "The supply is not a load."
    },
    {
     "id": "c",
     "text": "The input resistance of the CD stage",
     "correct": true
    },
    {
     "id": "d",
     "text": "The output resistance of the CD stage",
     "correct": false,
     "rationale": "The CD stage output faces the final load."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The final load resistor directly",
     "misconception": "Skips the interstage connection.",
     "rationale": "The CS stage drives the follower, not the final load."
    },
    {
     "id": "b",
     "text": "The supply resistance",
     "misconception": "Invents a load.",
     "rationale": "The supply is not a load."
    },
    {
     "id": "d",
     "text": "The output resistance of the CD stage",
     "misconception": "Uses the wrong side.",
     "rationale": "The CD stage output faces the final load."
    }
   ],
   "explanation": "The CS stage output drives the CD stage input, so the divider uses the CS Ro and the CD Ri. Because the follower's Ri is high, the CS gain is hardly reduced.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-21.html",
     "label": "Lesson 21 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-21.html",
     "section": "A8 Method"
    },
    {
     "file": "lesson-guides/lesson-15.html",
     "section": "A2"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cascade.svg",
    "alt": "Two amplifier stages in cascade, each drawn as a two-port model, with a source resistance and a load"
   }
  },
  {
   "id": "gr2-multi-003",
   "type": "choice",
   "topic": "Multi-stage amplifier planning",
   "objective": "State why one stage cannot do everything",
   "prompt": "Why can a single common-source stage not give both large gain and low output resistance?",
   "answer": {
    "id": "a",
    "text": "The large-gain stage has output resistance near RD, which is not small, and making RD small lowers the gain"
   },
   "options": [
    {
     "id": "a",
     "text": "The large-gain stage has output resistance near RD, which is not small, and making RD small lowers the gain",
     "correct": true
    },
    {
     "id": "b",
     "text": "Because the CS stage has no output resistance",
     "correct": false,
     "rationale": "It has an output resistance of about RD."
    },
    {
     "id": "c",
     "text": "Because gain and output resistance are unrelated",
     "correct": false,
     "rationale": "In a CS stage both involve RD."
    },
    {
     "id": "d",
     "text": "Because the CS stage inverts",
     "correct": false,
     "rationale": "Inversion is unrelated to Ro."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "Because the CS stage has no output resistance",
     "misconception": "Wrong fact.",
     "rationale": "It has an output resistance of about RD."
    },
    {
     "id": "c",
     "text": "Because gain and output resistance are unrelated",
     "misconception": "Ignores the link.",
     "rationale": "In a CS stage both involve RD."
    },
    {
     "id": "d",
     "text": "Because the CS stage inverts",
     "misconception": "Mixes inversion with resistance.",
     "rationale": "Inversion is unrelated to Ro."
    }
   ],
   "explanation": "Gain ∝ gm·RD while Ro ≈ RD. To get gain you want a large RD, but low Ro wants a small RD. A follower after the gain stage resolves the conflict.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-21.html",
     "label": "Lesson 21 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-21.html",
     "section": "A8 Recognize it"
    },
    {
     "file": "lesson-guides/lesson-19.html",
     "section": "A1"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cascade.svg",
    "alt": "Two amplifier stages in cascade, each drawn as a two-port model, with a source resistance and a load"
   }
  },
  {
   "id": "gr2-multi-004",
   "type": "choice",
   "topic": "Multi-stage amplifier planning",
   "objective": "Plan the Lab 3 spec",
   "prompt": "The Lab 3 specifications list input resistance, gain, output swing into a small load and distortion. What is the right order of work before designing any single stage?",
   "answer": {
    "id": "c",
    "text": "Decide which stage types are needed from the specifications first, then design each stage and check the overall gain with loading"
   },
   "options": [
    {
     "id": "a",
     "text": "Design the gate divider first, then decide the stages",
     "correct": false,
     "rationale": "The architecture determines what has to be designed."
    },
    {
     "id": "b",
     "text": "Simulate first, then pick stage types",
     "correct": false,
     "rationale": "Simulation verifies a design; it does not choose it."
    },
    {
     "id": "c",
     "text": "Decide which stage types are needed from the specifications first, then design each stage and check the overall gain with loading",
     "correct": true
    },
    {
     "id": "d",
     "text": "Pick the largest transistor and tune later",
     "correct": false,
     "rationale": "The design is driven by specifications, not by device size."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Design the gate divider first, then decide the stages",
     "misconception": "Designs before architecture.",
     "rationale": "The architecture determines what has to be designed."
    },
    {
     "id": "b",
     "text": "Simulate first, then pick stage types",
     "misconception": "Reverses analysis and simulation.",
     "rationale": "Simulation verifies a design; it does not choose it."
    },
    {
     "id": "d",
     "text": "Pick the largest transistor and tune later",
     "misconception": "Skips design.",
     "rationale": "The design is driven by specifications, not by device size."
    }
   ],
   "explanation": "The lesson stresses choosing stages (CS for gain, CD for drive) as two-ports, checking each against the load, and only then biasing and designing each.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-21.html",
     "label": "Lesson 21 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-21.html",
     "section": "A8 Recognize it"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 21 objectives"
    }
   ]
  },
  {
   "id": "gr2-multi-005",
   "type": "true-false",
   "topic": "Multi-stage amplifier planning",
   "objective": "Check the loading of a follower",
   "prompt": "True or false: because a common-drain stage has high input resistance, adding it after a CS stage barely changes the CS stage's gain.",
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
     "rationale": "High Ri of the follower makes the divider with the CS Ro close to 1."
    }
   ],
   "distractors": [
    {
     "id": "false",
     "text": "False",
     "misconception": "Believes every added stage loads the previous one heavily.",
     "rationale": "High Ri of the follower makes the divider with the CS Ro close to 1."
    }
   ],
   "explanation": "The loading divider Ri(CD)/(Ri(CD) + Ro(CS)) approaches 1 when Ri(CD) ≫ Ro(CS), so the CS stage is hardly loaded.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-21.html",
     "label": "Lesson 21 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-21.html",
     "section": "A8"
    },
    {
     "file": "lesson-guides/lesson-15.html",
     "section": "A2"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cascade.svg",
    "alt": "Two amplifier stages in cascade, each drawn as a two-port model, with a source resistance and a load"
   }
  },
  {
   "id": "gr2-multi-006",
   "type": "choice",
   "topic": "Multi-stage amplifier planning",
   "objective": "Explain how to measure Ro without a variable resistor",
   "prompt": "Without a variable resistor, how can an amplifier's output resistance Ro be found using one known load resistor?",
   "answer": {
    "id": "c",
    "text": "Compare the open-circuit output voltage with the output when the known load is connected; the drop reveals Ro through the divider"
   },
   "options": [
    {
     "id": "a",
     "text": "Measure only the loaded output; the unloaded value is not needed",
     "correct": false,
     "rationale": "Without the unloaded value you cannot form the divider ratio."
    },
    {
     "id": "b",
     "text": "Short the output and measure the input",
     "correct": false,
     "rationale": "The measurement must be at the output with a known load."
    },
    {
     "id": "c",
     "text": "Compare the open-circuit output voltage with the output when the known load is connected; the drop reveals Ro through the divider",
     "correct": true
    },
    {
     "id": "d",
     "text": "Increase the supply until the output clips",
     "correct": false,
     "rationale": "Clipping does not give Ro."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Measure only the loaded output; the unloaded value is not needed",
     "misconception": "Uses one measurement.",
     "rationale": "Without the unloaded value you cannot form the divider ratio."
    },
    {
     "id": "b",
     "text": "Short the output and measure the input",
     "misconception": "Mixes terminals.",
     "rationale": "The measurement must be at the output with a known load."
    },
    {
     "id": "d",
     "text": "Increase the supply until the output clips",
     "misconception": "Invents a clipping test.",
     "rationale": "Clipping does not give Ro."
    }
   ],
   "explanation": "The loaded output is the open-circuit value times RL/(RL + Ro). Knowing both outputs and RL fixes Ro.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-26.html",
     "label": "Lesson 26 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-26.html",
     "section": "A9 Measuring Ro"
    },
    {
     "file": "lesson-guides/lesson-15.html",
     "section": "A3"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/two_port.svg",
    "alt": "Amplifier drawn as a two-port model: source resistance, input resistance, controlled source, output resistance and load"
   }
  },
  {
   "id": "gr2-cg-001",
   "type": "choice",
   "topic": "Common-gate amplifier",
   "objective": "Identify the common-gate topology",
   "prompt": "What defines a common-gate amplifier?",
   "answer": {
    "id": "c",
    "text": "The gate is held at ac ground by a capacitor, the signal enters at the source, and the output is taken at the drain"
   },
   "options": [
    {
     "id": "a",
     "text": "The signal enters at the gate and the output is taken at the source",
     "correct": false,
     "rationale": "That arrangement is a source follower."
    },
    {
     "id": "b",
     "text": "The signal enters at the gate and the output is taken at the drain",
     "correct": false,
     "rationale": "That is the common-source arrangement."
    },
    {
     "id": "c",
     "text": "The gate is held at ac ground by a capacitor, the signal enters at the source, and the output is taken at the drain",
     "correct": true
    },
    {
     "id": "d",
     "text": "The drain is held at ac ground and the signal enters at the drain",
     "correct": false,
     "rationale": "In common gate the gate is the ac-grounded terminal."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The signal enters at the gate and the output is taken at the source",
     "misconception": "Describes common drain.",
     "rationale": "That arrangement is a source follower."
    },
    {
     "id": "b",
     "text": "The signal enters at the gate and the output is taken at the drain",
     "misconception": "Describes common source.",
     "rationale": "That is the common-source arrangement."
    },
    {
     "id": "d",
     "text": "The drain is held at ac ground and the signal enters at the drain",
     "misconception": "Misplaces the grounded terminal.",
     "rationale": "In common gate the gate is the ac-grounded terminal."
    }
   ],
   "explanation": "Common gate: bypass the gate to ac ground, couple the input source into the source terminal and take the output from the drain through a coupling capacitor.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-20.html",
     "label": "Lesson 20 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-20.html",
     "section": "p. 20-2 What is the Common Gate topology?"
    },
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 6"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cg_stage.svg",
    "alt": "Common-gate stage: gate held at ac ground by a capacitor, input at the source, output at the drain"
   }
  },
  {
   "id": "gr2-cg-002",
   "type": "choice",
   "topic": "Common-gate amplifier",
   "objective": "Estimate the common-gate input resistance",
   "prompt": "What is the input resistance of a common-gate amplifier approximately?",
   "answer": {
    "id": "a",
    "text": "Small: about 1/gm in parallel with the source resistor RS"
   },
   "options": [
    {
     "id": "a",
     "text": "Small: about 1/gm in parallel with the source resistor RS",
     "correct": true
    },
    {
     "id": "b",
     "text": "Very large, set by the gate bias resistors",
     "correct": false,
     "rationale": "The input is at the source, where the transistor looks like 1/gm."
    },
    {
     "id": "c",
     "text": "Equal to RD",
     "correct": false,
     "rationale": "RD is at the output."
    },
    {
     "id": "d",
     "text": "Infinite because the gate draws no current",
     "correct": false,
     "rationale": "The signal enters at the source, which does draw current."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "Very large, set by the gate bias resistors",
     "misconception": "Uses the CS/CD result.",
     "rationale": "The input is at the source, where the transistor looks like 1/gm."
    },
    {
     "id": "c",
     "text": "Equal to RD",
     "misconception": "Uses the output side.",
     "rationale": "RD is at the output."
    },
    {
     "id": "d",
     "text": "Infinite because the gate draws no current",
     "misconception": "Applies the gate property to the wrong terminal.",
     "rationale": "The signal enters at the source, which does draw current."
    }
   ],
   "explanation": "Looking into the source, the signal current flows through the transistor with an effective resistance of 1/gm, in parallel with RS.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-20.html",
     "label": "Lesson 20 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 6 Table, Ri row"
    },
    {
     "file": "lesson-guides/lesson-20.html",
     "section": "p. 20-3 By inspection Ri"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cg_stage.svg",
    "alt": "Common-gate stage: gate held at ac ground by a capacitor, input at the source, output at the drain"
   }
  },
  {
   "id": "gr2-cg-003",
   "type": "choice",
   "topic": "Common-gate amplifier",
   "objective": "State the common-gate gain behavior",
   "prompt": "What are the sign and rough size of the common-gate voltage gain?",
   "answer": {
    "id": "c",
    "text": "Positive (non-inverting) with a magnitude of about gm times RD"
   },
   "options": [
    {
     "id": "a",
     "text": "Negative with magnitude about gm times RD",
     "correct": false,
     "rationale": "In common gate the output does not invert."
    },
    {
     "id": "b",
     "text": "Positive and slightly below 1",
     "correct": false,
     "rationale": "The CG gain is gm·RD, which can be large."
    },
    {
     "id": "c",
     "text": "Positive (non-inverting) with a magnitude of about gm times RD",
     "correct": true
    },
    {
     "id": "d",
     "text": "Zero because the gate is grounded",
     "correct": false,
     "rationale": "The signal drives the source, and the output current still flows through RD."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Negative with magnitude about gm times RD",
     "misconception": "Applies the CS inversion.",
     "rationale": "In common gate the output does not invert."
    },
    {
     "id": "b",
     "text": "Positive and slightly below 1",
     "misconception": "Describes the follower.",
     "rationale": "The CG gain is gm·RD, which can be large."
    },
    {
     "id": "d",
     "text": "Zero because the gate is grounded",
     "misconception": "Thinks a grounded gate kills gain.",
     "rationale": "The signal drives the source, and the output current still flows through RD."
    }
   ],
   "explanation": "A positive signal at the source reduces vgs, but the output node is at the drain; the net result is a non-inverting gain of about gm·RD.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-20.html",
     "label": "Lesson 20 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 6 Table, Avo row"
    },
    {
     "file": "lesson-guides/lesson-20.html",
     "section": "p. 20-3"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cg_stage.svg",
    "alt": "Common-gate stage: gate held at ac ground by a capacitor, input at the source, output at the drain"
   }
  },
  {
   "id": "gr2-cg-004",
   "type": "choice",
   "topic": "Common-gate amplifier",
   "objective": "Estimate the common-gate output resistance",
   "prompt": "What is the output resistance of the common-gate amplifier approximately?",
   "answer": {
    "id": "a",
    "text": "About RD in parallel with ro, similar to the common-source stage"
   },
   "options": [
    {
     "id": "a",
     "text": "About RD in parallel with ro, similar to the common-source stage",
     "correct": true
    },
    {
     "id": "b",
     "text": "About 1/gm",
     "correct": false,
     "rationale": "The 1/gm is at the input of a CG stage."
    },
    {
     "id": "c",
     "text": "Zero",
     "correct": false,
     "rationale": "The output is at the drain, behind RD."
    },
    {
     "id": "d",
     "text": "About RS",
     "correct": false,
     "rationale": "The output is at the drain, not the source."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "About 1/gm",
     "misconception": "Uses the follower result.",
     "rationale": "The 1/gm is at the input of a CG stage."
    },
    {
     "id": "c",
     "text": "Zero",
     "misconception": "Thinks CG has an ideal output.",
     "rationale": "The output is at the drain, behind RD."
    },
    {
     "id": "d",
     "text": "About RS",
     "misconception": "Uses the source resistor.",
     "rationale": "The output is at the drain, not the source."
    }
   ],
   "explanation": "Looking into the drain with the source signal off, the circuit appears as RD in parallel with ro (to first approximation).",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-20.html",
     "label": "Lesson 20 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 6 Table, Ro row"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cg_stage.svg",
    "alt": "Common-gate stage: gate held at ac ground by a capacitor, input at the source, output at the drain"
   }
  },
  {
   "id": "gr2-cg-005",
   "type": "choice",
   "topic": "Common-gate amplifier",
   "objective": "Say why CG is a poor voltage amplifier",
   "prompt": "Why is a common-gate stage not an attractive choice for a typical voltage amplifier?",
   "answer": {
    "id": "c",
    "text": "Its input resistance is small, so it loads the signal source heavily"
   },
   "options": [
    {
     "id": "a",
     "text": "Its gain is always below 1",
     "correct": false,
     "rationale": "Its gain magnitude is about gm·RD."
    },
    {
     "id": "b",
     "text": "It needs a negative supply",
     "correct": false,
     "rationale": "It can be biased from a single supply."
    },
    {
     "id": "c",
     "text": "Its input resistance is small, so it loads the signal source heavily",
     "correct": true
    },
    {
     "id": "d",
     "text": "It inverts the signal",
     "correct": false,
     "rationale": "It is non-inverting."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Its gain is always below 1",
     "misconception": "Wrong fact.",
     "rationale": "Its gain magnitude is about gm·RD."
    },
    {
     "id": "b",
     "text": "It needs a negative supply",
     "misconception": "Invents a supply need.",
     "rationale": "It can be biased from a single supply."
    },
    {
     "id": "d",
     "text": "It inverts the signal",
     "misconception": "Wrong fact.",
     "rationale": "It is non-inverting."
    }
   ],
   "explanation": "A voltage amplifier wants Ri ≫ RS. The CG stage has Ri ≈ 1/gm, a few ohms to tens of ohms, which throws away much of the source voltage.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-20.html",
     "label": "Lesson 20 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "Lesson objectives",
     "section": "Lesson 20 objectives"
    },
    {
     "file": "lesson-guides/lesson-20.html",
     "section": "p. 20-4"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cg_stage.svg",
    "alt": "Common-gate stage: gate held at ac ground by a capacitor, input at the source, output at the drain"
   }
  },
  {
   "id": "gr2-cg-006",
   "type": "true-false",
   "topic": "Common-gate amplifier",
   "objective": "Check the grounded-gate bypass idea",
   "prompt": "True or false: in a common-gate amplifier the bypass capacitor on the gate makes the gate an ac ground while the gate divider still sets the DC gate voltage.",
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
     "rationale": "The capacitor is open for DC, so the divider still biases the gate."
    }
   ],
   "distractors": [
    {
     "id": "false",
     "text": "False",
     "misconception": "Believes a bypass capacitor removes the DC bias.",
     "rationale": "The capacitor is open for DC, so the divider still biases the gate."
    }
   ],
   "explanation": "DC sees the divider only; signals see the gate shorted to ground by the large capacitor. The grounded gate sets the DC voltage through the divider, while the large capacitor only affects how the signal sees the gate, so both statements hold together.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-20.html",
     "label": "Lesson 20 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 6 diagram"
    },
    {
     "file": "lesson-guides/lesson-20.html",
     "section": "p. 20-2"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cg_stage.svg",
    "alt": "Common-gate stage: gate held at ac ground by a capacitor, input at the source, output at the drain"
   }
  },
  {
   "id": "gr2-cmp-001",
   "type": "choice",
   "topic": "Comparing amplifier configurations",
   "objective": "Match a configuration to the highest input resistance",
   "prompt": "In the amplifier-parameter table (CS with no RS, CS with partial RS, CD, CG), which configurations have a large input resistance set by the gate bias network?",
   "answer": {
    "id": "a",
    "text": "Common source (with or without a partly unbypassed RS) and common drain"
   },
   "options": [
    {
     "id": "a",
     "text": "Common source (with or without a partly unbypassed RS) and common drain",
     "correct": true
    },
    {
     "id": "b",
     "text": "Common gate and common drain",
     "correct": false,
     "rationale": "CG has a small Ri of about 1/gm."
    },
    {
     "id": "c",
     "text": "Only common gate",
     "correct": false,
     "rationale": "CG is the low-Ri configuration."
    },
    {
     "id": "d",
     "text": "None; all have small input resistance",
     "correct": false,
     "rationale": "Three of the four have the gate as their input."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "Common gate and common drain",
     "misconception": "Includes CG.",
     "rationale": "CG has a small Ri of about 1/gm."
    },
    {
     "id": "c",
     "text": "Only common gate",
     "misconception": "Reverses the answer.",
     "rationale": "CG is the low-Ri configuration."
    },
    {
     "id": "d",
     "text": "None; all have small input resistance",
     "misconception": "Ignores the insulated gate.",
     "rationale": "Three of the four have the gate as their input."
    }
   ],
   "explanation": "The parameter table lists Ri = RG1 ∥ RG2 for CS and CD, and Ri = RS ∥ 1/gm for CG. In the CG column the input is at the source, so the resistance seen is the transistor's 1/gm in parallel with RS rather than the insulated gate.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-20.html",
     "label": "Lesson 20 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 6 Table of amplifier parameters"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/param_table.svg",
    "alt": "Table of Ri, Avo and Ro for the CS, partially bypassed CS, CD and CG stages"
   }
  },
  {
   "id": "gr2-cmp-002",
   "type": "choice",
   "topic": "Comparing amplifier configurations",
   "objective": "Match a configuration to the lowest output resistance",
   "prompt": "Which configuration has the lowest output resistance?",
   "answer": {
    "id": "c",
    "text": "Common drain, at about 1/gm"
   },
   "options": [
    {
     "id": "a",
     "text": "Common source",
     "correct": false,
     "rationale": "RD is typically much larger than 1/gm."
    },
    {
     "id": "b",
     "text": "Common gate",
     "correct": false,
     "rationale": "CG has Ro near RD."
    },
    {
     "id": "c",
     "text": "Common drain, at about 1/gm",
     "correct": true
    },
    {
     "id": "d",
     "text": "They all have the same output resistance",
     "correct": false,
     "rationale": "The values differ by configuration."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Common source",
     "misconception": "Takes Ro ≈ RD as small.",
     "rationale": "RD is typically much larger than 1/gm."
    },
    {
     "id": "b",
     "text": "Common gate",
     "misconception": "Takes Ro ≈ RD as small.",
     "rationale": "CG has Ro near RD."
    },
    {
     "id": "d",
     "text": "They all have the same output resistance",
     "misconception": "Ignores the table.",
     "rationale": "The values differ by configuration."
    }
   ],
   "explanation": "The follower's output looks into the source: RS ∥ 1/gm ∥ ro, dominated by 1/gm. Because 1/gm is only tens of ohms at typical bias while RD is kilohms, the follower is the clear winner for low output resistance.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-20.html",
     "label": "Lesson 20 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 6 Table, Ro row"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/param_table.svg",
    "alt": "Table of Ri, Avo and Ro for the CS, partially bypassed CS, CD and CG stages"
   }
  },
  {
   "id": "gr2-cmp-003",
   "type": "multi-select",
   "topic": "Comparing amplifier configurations",
   "objective": "Pick the non-inverting configurations",
   "prompt": "Which configurations do not invert the signal? Select all that apply.",
   "answer": {
    "ids": [
     "b",
     "d"
    ]
   },
   "options": [
    {
     "id": "a",
     "text": "Common source with no RS",
     "correct": false,
     "rationale": "The CS stage inverts."
    },
    {
     "id": "b",
     "text": "Common drain",
     "correct": true
    },
    {
     "id": "c",
     "text": "Common source with a partly bypassed RS",
     "correct": false,
     "rationale": "The partial-bypass CS stage still inverts."
    },
    {
     "id": "d",
     "text": "Common gate",
     "correct": true
    },
    {
     "id": "e",
     "text": "Common source with a load connected",
     "correct": false,
     "rationale": "A load changes the size, not the sign."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Common source with no RS",
     "misconception": "Believes every stage inverts or none does.",
     "rationale": "The CS stage inverts."
    },
    {
     "id": "c",
     "text": "Common source with a partly bypassed RS",
     "misconception": "Thinks RS removes inversion.",
     "rationale": "The partial-bypass CS stage still inverts."
    },
    {
     "id": "e",
     "text": "Common source with a load connected",
     "misconception": "Thinks a load changes polarity.",
     "rationale": "A load changes the size, not the sign."
    }
   ],
   "explanation": "Gain signs: CS −, CD +, CG +. Only the follower and the common-gate stage are in phase with their inputs.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-20.html",
     "label": "Lesson 20 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 6 Table, Avo row"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/param_table.svg",
    "alt": "Table of Ri, Avo and Ro for the CS, partially bypassed CS, CD and CG stages"
   }
  },
  {
   "id": "gr2-cmp-004",
   "type": "choice",
   "topic": "Comparing amplifier configurations",
   "objective": "Choose a configuration for a specific need",
   "prompt": "Which single-transistor configuration is the best choice as a buffer that must drive a low-resistance load from a high-resistance source?",
   "answer": {
    "id": "c",
    "text": "Common drain"
   },
   "options": [
    {
     "id": "a",
     "text": "Common source",
     "correct": false,
     "rationale": "Its Ro is too large for a small load."
    },
    {
     "id": "b",
     "text": "Common gate",
     "correct": false,
     "rationale": "Its Ri is too small for a high-resistance source."
    },
    {
     "id": "c",
     "text": "Common drain",
     "correct": true
    },
    {
     "id": "d",
     "text": "Common source with large RS",
     "correct": false,
     "rationale": "It still has a high Ro."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Common source",
     "misconception": "Chooses for gain.",
     "rationale": "Its Ro is too large for a small load."
    },
    {
     "id": "b",
     "text": "Common gate",
     "misconception": "Chooses for non-inversion.",
     "rationale": "Its Ri is too small for a high-resistance source."
    },
    {
     "id": "d",
     "text": "Common source with large RS",
     "misconception": "Chooses a degenerated stage.",
     "rationale": "It still has a high Ro."
    }
   ],
   "explanation": "A buffer needs high Ri and low Ro: that is the follower. A buffer is judged by loading on both sides: a follower leaves the source almost unloaded and drives the load through a small Ro.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-19.html",
     "label": "Lesson 19 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-19.html",
     "section": "A1"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 20 objectives"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/param_table.svg",
    "alt": "Table of Ri, Avo and Ro for the CS, partially bypassed CS, CD and CG stages"
   }
  },
  {
   "id": "gr2-cmp-005",
   "type": "choice",
   "topic": "Comparing amplifier configurations",
   "objective": "Say how loading changes the gain formulas in the table",
   "prompt": "In the amplifier-parameter table, how is the loaded gain Av obtained from the open-circuit gain Avo for the CS and CG stages?",
   "answer": {
    "id": "a",
    "text": "Replace RD by RD in parallel with RL in the Avo expression"
   },
   "options": [
    {
     "id": "a",
     "text": "Replace RD by RD in parallel with RL in the Avo expression",
     "correct": true
    },
    {
     "id": "b",
     "text": "Multiply Avo by RL",
     "correct": false,
     "rationale": "The load enters as a parallel resistance, not a multiplier."
    },
    {
     "id": "c",
     "text": "Replace RS by RS in parallel with RL",
     "correct": false,
     "rationale": "That substitution is for the CD stage."
    },
    {
     "id": "d",
     "text": "Nothing; the load does not change the gain",
     "correct": false,
     "rationale": "The load changes the effective drain resistance."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "Multiply Avo by RL",
     "misconception": "Applies the load as a multiplier.",
     "rationale": "The load enters as a parallel resistance, not a multiplier."
    },
    {
     "id": "c",
     "text": "Replace RS by RS in parallel with RL",
     "misconception": "Uses the follower rule.",
     "rationale": "That substitution is for the CD stage."
    },
    {
     "id": "d",
     "text": "Nothing; the load does not change the gain",
     "misconception": "Ignores loading.",
     "rationale": "The load changes the effective drain resistance."
    }
   ],
   "explanation": "Av is the same expression with the output resistor replaced by its parallel combination with the load: RD → RD ∥ RL (and RS → RS ∥ RL for the follower).",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-20.html",
     "label": "Lesson 20 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 6 Table, Av row"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/param_table.svg",
    "alt": "Table of Ri, Avo and Ro for the CS, partially bypassed CS, CD and CG stages"
   }
  },
  {
   "id": "gr2-cmp-006",
   "type": "choice",
   "topic": "Comparing amplifier configurations",
   "objective": "Say what partial bypass does to Ro and Ri",
   "prompt": "Compared with the CS stage with no RS, what does a partly unbypassed source resistance do to Ri and Ro of the stage?",
   "answer": {
    "id": "c",
    "text": "Ri is unchanged (set by the gate divider) and Ro is still about RD; the gain is what changes"
   },
   "options": [
    {
     "id": "a",
     "text": "Ri drops to 1/gm",
     "correct": false,
     "rationale": "The gate input is unchanged."
    },
    {
     "id": "b",
     "text": "Ro drops to 1/gm",
     "correct": false,
     "rationale": "The output is still at the drain."
    },
    {
     "id": "c",
     "text": "Ri is unchanged (set by the gate divider) and Ro is still about RD; the gain is what changes",
     "correct": true
    },
    {
     "id": "d",
     "text": "Both Ri and Ro become infinite",
     "correct": false,
     "rationale": "Ri remains the divider; Ro stays near RD."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Ri drops to 1/gm",
     "misconception": "Applies the CG result.",
     "rationale": "The gate input is unchanged."
    },
    {
     "id": "b",
     "text": "Ro drops to 1/gm",
     "misconception": "Applies the CD result.",
     "rationale": "The output is still at the drain."
    },
    {
     "id": "d",
     "text": "Both Ri and Ro become infinite",
     "misconception": "Overstates the feedback effect.",
     "rationale": "Ri remains the divider; Ro stays near RD."
    }
   ],
   "explanation": "The table shows RG1 ∥ RG2 for Ri in both CS columns and Ro ≈ RD for both; only Avo differs.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-20.html",
     "label": "Lesson 20 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 6 Table"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/param_table.svg",
    "alt": "Table of Ri, Avo and Ro for the CS, partially bypassed CS, CD and CG stages"
   }
  },
  {
   "id": "gr2-cmp-007",
   "type": "choice",
   "topic": "Comparing amplifier configurations",
   "objective": "Interpret the 1/gm term across configurations",
   "prompt": "What role does the quantity 1/gm play across the configurations in the table?",
   "answer": {
    "id": "a",
    "text": "It is the small-signal resistance looking into the source of the transistor: it shows up in the follower's output resistance and the common-gate input resistance"
   },
   "options": [
    {
     "id": "a",
     "text": "It is the small-signal resistance looking into the source of the transistor: it shows up in the follower's output resistance and the common-gate input resistance",
     "correct": true
    },
    {
     "id": "b",
     "text": "It is the drain resistor in disguise",
     "correct": false,
     "rationale": "RD is a separate component."
    },
    {
     "id": "c",
     "text": "It is the gate resistance",
     "correct": false,
     "rationale": "The gate draws no current."
    },
    {
     "id": "d",
     "text": "It is the supply resistance",
     "correct": false,
     "rationale": "The supply is ideal."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "It is the drain resistor in disguise",
     "misconception": "Equates 1/gm with RD.",
     "rationale": "RD is a separate component."
    },
    {
     "id": "c",
     "text": "It is the gate resistance",
     "misconception": "Gives the gate a resistance.",
     "rationale": "The gate draws no current."
    },
    {
     "id": "d",
     "text": "It is the supply resistance",
     "misconception": "Invents a supply resistance.",
     "rationale": "The supply is ideal."
    }
   ],
   "explanation": "Looking into the source with the gate fixed, the transistor behaves like a 1/gm resistor. That is why 1/gm appears wherever the source terminal is the input or output.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-20.html",
     "label": "Lesson 20 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-16.html",
     "section": "p. 16-7 T-model"
    },
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 6"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/param_table.svg",
    "alt": "Table of Ri, Avo and Ro for the CS, partially bypassed CS, CD and CG stages"
   }
  },
  {
   "id": "gr2-sim-001",
   "type": "choice",
   "topic": "Simulation and measurement",
   "objective": "Read gain from two cursors on a transient plot",
   "prompt": "On a Multisim transient plot, how do you find the amplifier voltage gain with two cursors?",
   "answer": {
    "id": "d",
    "text": "Place one cursor on a crest and the other on a trough; divide the output peak-to-peak value by the input peak-to-peak value"
   },
   "options": [
    {
     "id": "a",
     "text": "Divide dy by dx between the cursors",
     "correct": false,
     "rationale": "dy/dx is a slope in volts per second, not a gain."
    },
    {
     "id": "b",
     "text": "Divide the output peak value by the input peak-to-peak value",
     "correct": false,
     "rationale": "Use the same type of amplitude on both sides."
    },
    {
     "id": "c",
     "text": "Read the DC level at one cursor",
     "correct": false,
     "rationale": "The gain concerns the signal swing."
    },
    {
     "id": "d",
     "text": "Place one cursor on a crest and the other on a trough; divide the output peak-to-peak value by the input peak-to-peak value",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Divide dy by dx between the cursors",
     "misconception": "Uses the slope readout.",
     "rationale": "dy/dx is a slope in volts per second, not a gain."
    },
    {
     "id": "b",
     "text": "Divide the output peak value by the input peak-to-peak value",
     "misconception": "Mixes peak and peak-to-peak.",
     "rationale": "Use the same type of amplitude on both sides."
    },
    {
     "id": "c",
     "text": "Read the DC level at one cursor",
     "misconception": "Uses a DC reading.",
     "rationale": "The gain concerns the signal swing."
    }
   ],
   "explanation": "The cursors give the output peak-to-peak (dy). Dividing by the peak-to-peak input gives the gain magnitude. The slope dy/dx is irrelevant.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-18.html",
     "label": "Lesson 18 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-18.html",
     "section": "A7"
    },
    {
     "file": "lesson-guides/lesson-21.html",
     "section": "A7"
    }
   ]
  },
  {
   "id": "gr2-sim-002",
   "type": "choice",
   "topic": "Simulation and measurement",
   "objective": "Catch the Vpk labeling trap",
   "prompt": "Multisim labels the signal source in Vpk. What is the usual mistake when computing gain from a transient plot?",
   "answer": {
    "id": "b",
    "text": "Dividing the output peak-to-peak by the input peak (the source label) instead of the input peak-to-peak"
   },
   "options": [
    {
     "id": "a",
     "text": "Using the DC supply as the input",
     "correct": false,
     "rationale": "The supply is not the input signal."
    },
    {
     "id": "b",
     "text": "Dividing the output peak-to-peak by the input peak (the source label) instead of the input peak-to-peak",
     "correct": true
    },
    {
     "id": "c",
     "text": "Using the cursor time difference",
     "correct": false,
     "rationale": "Time differences are not amplitudes."
    },
    {
     "id": "d",
     "text": "Forgetting the ground symbol",
     "correct": false,
     "rationale": "The mismatch of amplitude types is the real error."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Using the DC supply as the input",
     "misconception": "Takes the wrong source.",
     "rationale": "The supply is not the input signal."
    },
    {
     "id": "c",
     "text": "Using the cursor time difference",
     "misconception": "Uses dx.",
     "rationale": "Time differences are not amplitudes."
    },
    {
     "id": "d",
     "text": "Forgetting the ground symbol",
     "misconception": "Treats a layout detail as the cause.",
     "rationale": "The mismatch of amplitude types is the real error."
    }
   ],
   "explanation": "The source is labeled by its peak value, but the plot cursors give peak-to-peak. Compare like with like by doubling the input peak.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-21.html",
     "label": "Lesson 21 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-18.html",
     "section": "A7 Common mistakes"
    },
    {
     "file": "lesson-guides/lesson-21.html",
     "section": "A7"
    }
   ]
  },
  {
   "id": "gr2-sim-003",
   "type": "choice",
   "topic": "Simulation and measurement",
   "objective": "Explain what a DC operating-point analysis checks",
   "prompt": "What do you compare a DC operating-point simulation against?",
   "answer": {
    "id": "d",
    "text": "The hand-calculated node voltages and drain current of the bias design"
   },
   "options": [
    {
     "id": "a",
     "text": "The signal gain of the amplifier",
     "correct": false,
     "rationale": "Gain comes from the transient or ac analysis."
    },
    {
     "id": "b",
     "text": "The distortion of the output",
     "correct": false,
     "rationale": "Distortion is measured with the analyzer."
    },
    {
     "id": "c",
     "text": "The input signal frequency",
     "correct": false,
     "rationale": "The DC analysis has no signal."
    },
    {
     "id": "d",
     "text": "The hand-calculated node voltages and drain current of the bias design",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The signal gain of the amplifier",
     "misconception": "Mixes DC and AC checks.",
     "rationale": "Gain comes from the transient or ac analysis."
    },
    {
     "id": "b",
     "text": "The distortion of the output",
     "misconception": "Mixes DC and distortion.",
     "rationale": "Distortion is measured with the analyzer."
    },
    {
     "id": "c",
     "text": "The input signal frequency",
     "misconception": "Invents a comparison.",
     "rationale": "The DC analysis has no signal."
    }
   ],
   "explanation": "The DC operating point gives V(node) and the drain current, which verify the Q-point the hand design predicted.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-18.html",
     "label": "Lesson 18 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-18.html",
     "section": "A7 Method"
    },
    {
     "file": "lesson-guides/lesson-21.html",
     "section": "A7"
    }
   ]
  },
  {
   "id": "gr2-sim-004",
   "type": "choice",
   "topic": "Simulation and measurement",
   "objective": "Explain a small mismatch between hand and simulation",
   "prompt": "The simulated gain is a few percent below the hand design. What is a common explanation?",
   "answer": {
    "id": "b",
    "text": "The hand design ignores effects such as channel-length modulation and the load, which the simulation includes"
   },
   "options": [
    {
     "id": "a",
     "text": "The simulator is wrong whenever it disagrees with hand work",
     "correct": false,
     "rationale": "A small difference is expected from the simplified hand model."
    },
    {
     "id": "b",
     "text": "The hand design ignores effects such as channel-length modulation and the load, which the simulation includes",
     "correct": true
    },
    {
     "id": "c",
     "text": "The coupling capacitors are open circuits",
     "correct": false,
     "rationale": "They are shorts at the signal frequency."
    },
    {
     "id": "d",
     "text": "The supply voltage was not applied",
     "correct": false,
     "rationale": "A missing supply would give a gross failure, not a few percent."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The simulator is wrong whenever it disagrees with hand work",
     "misconception": "Trusts the hand method blindly.",
     "rationale": "A small difference is expected from the simplified hand model."
    },
    {
     "id": "c",
     "text": "The coupling capacitors are open circuits",
     "misconception": "Wrong fact.",
     "rationale": "They are shorts at the signal frequency."
    },
    {
     "id": "d",
     "text": "The supply voltage was not applied",
     "misconception": "Assumes an error.",
     "rationale": "A missing supply would give a gross failure, not a few percent."
    }
   ],
   "explanation": "Hand calculations ignore λ unless told otherwise; the simulation model includes it. A few percent difference is normal.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-21.html",
     "label": "Lesson 21 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-18.html",
     "section": "A7 Common mistakes"
    },
    {
     "file": "lesson-guides/lesson-21.html",
     "section": "A5"
    }
   ]
  },
  {
   "id": "gr2-sim-005",
   "type": "choice",
   "topic": "Simulation and measurement",
   "objective": "Connect the distortion analyzer correctly",
   "prompt": "Where do you connect the Multisim distortion analyzer to measure an amplifier's THD?",
   "answer": {
    "id": "d",
    "text": "To the output node, with the fundamental frequency set to the input frequency"
   },
   "options": [
    {
     "id": "a",
     "text": "To the input node",
     "correct": false,
     "rationale": "The input is a clean source; the distortion appears at the output."
    },
    {
     "id": "b",
     "text": "To the supply node",
     "correct": false,
     "rationale": "The supply carries DC."
    },
    {
     "id": "c",
     "text": "To the gate with any fundamental setting",
     "correct": false,
     "rationale": "A mismatched fundamental gives a meaningless reading."
    },
    {
     "id": "d",
     "text": "To the output node, with the fundamental frequency set to the input frequency",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "To the input node",
     "misconception": "Measures the source.",
     "rationale": "The input is a clean source; the distortion appears at the output."
    },
    {
     "id": "b",
     "text": "To the supply node",
     "misconception": "Measures the supply.",
     "rationale": "The supply carries DC."
    },
    {
     "id": "c",
     "text": "To the gate with any fundamental setting",
     "misconception": "Ignores the fundamental setting.",
     "rationale": "A mismatched fundamental gives a meaningless reading."
    }
   ],
   "explanation": "THD compares the output harmonic content with its fundamental, so the analyzer must watch the output at the correct fundamental frequency.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-19.html",
     "label": "Lesson 19 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-19.html",
     "section": "A6"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 19 objectives"
    }
   ]
  },
  {
   "id": "gr2-sim-006",
   "type": "choice",
   "topic": "Simulation and measurement",
   "objective": "Say why sweeps of Vt and Kn are run",
   "prompt": "Why do the design simulations sweep the transistor parameters Vt and Kn?",
   "answer": {
    "id": "b",
    "text": "To see how the bias point and gain change from one transistor to another"
   },
   "options": [
    {
     "id": "a",
     "text": "To find the best supply voltage",
     "correct": false,
     "rationale": "The supply is a given."
    },
    {
     "id": "b",
     "text": "To see how the bias point and gain change from one transistor to another",
     "correct": true
    },
    {
     "id": "c",
     "text": "To reduce simulation time",
     "correct": false,
     "rationale": "Sweeps add runs; they do not save time."
    },
    {
     "id": "d",
     "text": "To change the input frequency",
     "correct": false,
     "rationale": "Frequency is not swept in these notes."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "To find the best supply voltage",
     "misconception": "Sweeps the wrong parameter.",
     "rationale": "The supply is a given."
    },
    {
     "id": "c",
     "text": "To reduce simulation time",
     "misconception": "Misreads the purpose.",
     "rationale": "Sweeps add runs; they do not save time."
    },
    {
     "id": "d",
     "text": "To change the input frequency",
     "misconception": "Confuses parameters.",
     "rationale": "Frequency is not swept in these notes."
    }
   ],
   "explanation": "Real transistors differ. Sweeping Vt and Kn shows how well a design resists device variation, which is the reason for source-resistor feedback.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-18.html",
     "label": "Lesson 18 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    },
    {
     "type": "link",
     "href": "lesson-guides/lesson-17.html",
     "label": "Lesson 17 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-18.html",
     "section": "A7 Method, A8"
    },
    {
     "file": "lesson-guides/lesson-17.html",
     "section": "pp. 17-6, 17-7"
    }
   ]
  },
  {
   "id": "gr2-sim-007",
   "type": "choice",
   "topic": "Simulation and measurement",
   "objective": "Say what a transient with a large input shows",
   "prompt": "In a simulation of a follower designed for a given output swing, why might you raise the input amplitude?",
   "answer": {
    "id": "d",
    "text": "To find the input that actually produces the required output swing and confirm that the waveform does not clip"
   },
   "options": [
    {
     "id": "a",
     "text": "To make the transistor leave saturation on purpose",
     "correct": false,
     "rationale": "The goal is to stay in saturation while meeting the swing."
    },
    {
     "id": "b",
     "text": "To change the DC bias",
     "correct": false,
     "rationale": "Raising the signal does not change the DC design."
    },
    {
     "id": "c",
     "text": "To reduce the gain",
     "correct": false,
     "rationale": "Gain is independent of the input amplitude in the linear range."
    },
    {
     "id": "d",
     "text": "To find the input that actually produces the required output swing and confirm that the waveform does not clip",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "To make the transistor leave saturation on purpose",
     "misconception": "Misreads the goal.",
     "rationale": "The goal is to stay in saturation while meeting the swing."
    },
    {
     "id": "b",
     "text": "To change the DC bias",
     "misconception": "Mixes signal and bias.",
     "rationale": "Raising the signal does not change the DC design."
    },
    {
     "id": "c",
     "text": "To reduce the gain",
     "misconception": "Invents an effect.",
     "rationale": "Gain is independent of the input amplitude in the linear range."
    }
   ],
   "explanation": "A follower's gain is below one, so the input must be larger than the required output. The simulation checks that the needed swing is reached without clipping.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-21.html",
     "label": "Lesson 21 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-21.html",
     "section": "A7 Method"
    },
    {
     "file": "lesson-guides/lesson-19.html",
     "section": "B4"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cd_stage.svg",
    "alt": "Common-drain (source-follower) stage driving a load"
   }
  },
  {
   "id": "gr2-sim-008",
   "type": "true-false",
   "topic": "Simulation and measurement",
   "objective": "Check the ground rule for gain measurements",
   "prompt": "True or false: a simulated gain can be read correctly from any two cursor positions, as long as dy is nonzero.",
   "answer": {
    "id": "false",
    "text": "False"
   },
   "options": [
    {
     "id": "true",
     "text": "True",
     "correct": false,
     "rationale": "The cursors must sit on a peak and the adjacent trough to read the peak-to-peak swing."
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
     "misconception": "Believes any two points give the swing.",
     "rationale": "The cursors must sit on a peak and the adjacent trough to read the peak-to-peak swing."
    }
   ],
   "explanation": "Only a crest-to-trough pair gives the peak-to-peak value; other positions give a partial swing.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-18.html",
     "label": "Lesson 18 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-18.html",
     "section": "A7 Common mistakes"
    },
    {
     "file": "lesson-guides/lesson-21.html",
     "section": "A7 Common mistakes"
    }
   ]
  },
  {
   "id": "gr2-sim-009",
   "type": "choice",
   "topic": "Simulation and measurement",
   "objective": "Explain why measured THD readings can differ",
   "prompt": "Two simulations of related designs show different THD values. What does a larger THD indicate?",
   "answer": {
    "id": "d",
    "text": "More of the output energy is in harmonics, meaning the transistor is being driven less linearly"
   },
   "options": [
    {
     "id": "a",
     "text": "A larger gain at the fundamental",
     "correct": false,
     "rationale": "THD is a ratio of harmonics to the fundamental."
    },
    {
     "id": "b",
     "text": "A more stable operating point",
     "correct": false,
     "rationale": "They are different properties."
    },
    {
     "id": "c",
     "text": "A smaller supply current",
     "correct": false,
     "rationale": "THD is about waveform shape."
    },
    {
     "id": "d",
     "text": "More of the output energy is in harmonics, meaning the transistor is being driven less linearly",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "A larger gain at the fundamental",
     "misconception": "Equates THD with gain.",
     "rationale": "THD is a ratio of harmonics to the fundamental."
    },
    {
     "id": "b",
     "text": "A more stable operating point",
     "misconception": "Equates THD with bias stability.",
     "rationale": "They are different properties."
    },
    {
     "id": "c",
     "text": "A smaller supply current",
     "misconception": "Equates THD with current.",
     "rationale": "THD is about waveform shape."
    }
   ],
   "explanation": "THD increases when the signal explores more of the curved part of the transistor characteristic, i.e. when the small-signal approximation is stretched.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-19.html",
     "label": "Lesson 19 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-19.html",
     "section": "A6"
    },
    {
     "file": "lesson-guides/lesson-20.html",
     "section": "pp. 20-7, 20-10, 20-11 THD readouts"
    }
   ]
  },
  {
   "id": "gr2-dc-001",
   "type": "choice",
   "topic": "DC operating point and region checks",
   "objective": "Handle capacitors in the DC analysis",
   "prompt": "How are capacitors treated when finding the DC operating point of an amplifier?",
   "answer": {
    "id": "a",
    "text": "They are replaced by open circuits"
   },
   "options": [
    {
     "id": "a",
     "text": "They are replaced by open circuits",
     "correct": true
    },
    {
     "id": "b",
     "text": "They are replaced by short circuits",
     "correct": false,
     "rationale": "Shorts are for the signal analysis; for DC a capacitor blocks current."
    },
    {
     "id": "c",
     "text": "They are replaced by resistors",
     "correct": false,
     "rationale": "An ideal capacitor passes no DC current."
    },
    {
     "id": "d",
     "text": "They are kept and their charge is computed",
     "correct": false,
     "rationale": "In steady state the capacitor simply blocks DC."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "They are replaced by short circuits",
     "misconception": "Uses the signal rule.",
     "rationale": "Shorts are for the signal analysis; for DC a capacitor blocks current."
    },
    {
     "id": "c",
     "text": "They are replaced by resistors",
     "misconception": "Invents a substitution.",
     "rationale": "An ideal capacitor passes no DC current."
    },
    {
     "id": "d",
     "text": "They are kept and their charge is computed",
     "misconception": "Over-complicates.",
     "rationale": "In steady state the capacitor simply blocks DC."
    }
   ],
   "explanation": "In DC steady state no current flows through a capacitor, so it is an open circuit. The gate divider and supply then set the bias.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-21.html",
     "label": "Lesson 21 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-21.html",
     "section": "A3 Method"
    },
    {
     "file": "lesson-guides/lesson-26.html",
     "section": "A3"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_basic.svg",
    "alt": "Common-source amplifier with gate divider, coupling capacitors and load"
   }
  },
  {
   "id": "gr2-dc-002",
   "type": "choice",
   "topic": "DC operating point and region checks",
   "objective": "Explain why the gate divider is unloaded",
   "prompt": "Why can the gate voltage be found from the divider ratio alone, without including the transistor?",
   "answer": {
    "id": "c",
    "text": "The gate draws no DC current, so the divider carries the same current in both resistors"
   },
   "options": [
    {
     "id": "a",
     "text": "Because the transistor has zero resistance",
     "correct": false,
     "rationale": "The gate has no resistance path; it simply draws no current."
    },
    {
     "id": "b",
     "text": "Because the drain current flows through the divider",
     "correct": false,
     "rationale": "The drain current does not pass through the divider."
    },
    {
     "id": "c",
     "text": "The gate draws no DC current, so the divider carries the same current in both resistors",
     "correct": true
    },
    {
     "id": "d",
     "text": "Because the capacitors supply the gate current",
     "correct": false,
     "rationale": "Capacitors are open for DC."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Because the transistor has zero resistance",
     "misconception": "Gives the gate a resistance.",
     "rationale": "The gate has no resistance path; it simply draws no current."
    },
    {
     "id": "b",
     "text": "Because the drain current flows through the divider",
     "misconception": "Misroutes current.",
     "rationale": "The drain current does not pass through the divider."
    },
    {
     "id": "d",
     "text": "Because the capacitors supply the gate current",
     "misconception": "Credits capacitors.",
     "rationale": "Capacitors are open for DC."
    }
   ],
   "explanation": "With zero gate current, the divider is a simple two-resistor series string, so VG = VDD·RG2/(RG1+RG2).",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-21.html",
     "label": "Lesson 21 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-21.html",
     "section": "A2 Checks and mistakes"
    },
    {
     "file": "lesson-guides/lesson-26.html",
     "section": "A3 Method"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_dc_bias.svg",
    "alt": "DC bias circuit of a common-source stage with gate divider, RD and RS"
   }
  },
  {
   "id": "gr2-dc-003",
   "type": "choice",
   "topic": "DC operating point and region checks",
   "objective": "State the first step in finding the operating point",
   "prompt": "When the circuit and device are given and the operating mode is unknown, what is the standard first move?",
   "answer": {
    "id": "a",
    "text": "Assume a mode (usually saturation), analyze, and then confirm the assumption"
   },
   "options": [
    {
     "id": "a",
     "text": "Assume a mode (usually saturation), analyze, and then confirm the assumption",
     "correct": true
    },
    {
     "id": "b",
     "text": "Use the triode equation first because it is more general",
     "correct": false,
     "rationale": "Saturation is the usual starting assumption and is checked afterwards."
    },
    {
     "id": "c",
     "text": "Skip the mode and solve numerically",
     "correct": false,
     "rationale": "The equations depend on the mode, so one must be assumed."
    },
    {
     "id": "d",
     "text": "Assume the transistor is cut off",
     "correct": false,
     "rationale": "A biased amplifier is expected to conduct."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "Use the triode equation first because it is more general",
     "misconception": "Chooses the complicated model.",
     "rationale": "Saturation is the usual starting assumption and is checked afterwards."
    },
    {
     "id": "c",
     "text": "Skip the mode and solve numerically",
     "misconception": "Avoids the model.",
     "rationale": "The equations depend on the mode, so one must be assumed."
    },
    {
     "id": "d",
     "text": "Assume the transistor is cut off",
     "misconception": "Chooses the trivial case.",
     "rationale": "A biased amplifier is expected to conduct."
    }
   ],
   "explanation": "The method is assume, analyze, confirm: assume saturation, solve for the current, then verify VDS ≥ VOV (and VGS > Vt). If it fails, redo with the other mode.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-21.html",
     "label": "Lesson 21 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-21.html",
     "section": "A4 Confirming the operating region"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_dc_bias.svg",
    "alt": "DC bias circuit of a common-source stage with gate divider, RD and RS"
   }
  },
  {
   "id": "gr2-dc-004",
   "type": "choice",
   "topic": "DC operating point and region checks",
   "objective": "Say which comparison confirms saturation",
   "prompt": "Which comparison confirms that an NMOS transistor is in saturation after solving the circuit?",
   "answer": {
    "id": "c",
    "text": "The drain-source voltage is at least the overdrive voltage"
   },
   "options": [
    {
     "id": "a",
     "text": "The drain-source voltage is at least the threshold voltage",
     "correct": false,
     "rationale": "The saturation test uses VOV = VGS − Vt, not Vt."
    },
    {
     "id": "b",
     "text": "The gate-source voltage is below the threshold voltage",
     "correct": false,
     "rationale": "Below Vt the device is off."
    },
    {
     "id": "c",
     "text": "The drain-source voltage is at least the overdrive voltage",
     "correct": true
    },
    {
     "id": "d",
     "text": "The drain current is larger than the source current",
     "correct": false,
     "rationale": "ID and IS are equal."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The drain-source voltage is at least the threshold voltage",
     "misconception": "Compares with Vt.",
     "rationale": "The saturation test uses VOV = VGS − Vt, not Vt."
    },
    {
     "id": "b",
     "text": "The gate-source voltage is below the threshold voltage",
     "misconception": "Describes cutoff.",
     "rationale": "Below Vt the device is off."
    },
    {
     "id": "d",
     "text": "The drain current is larger than the source current",
     "misconception": "Invents a current test.",
     "rationale": "ID and IS are equal."
    }
   ],
   "explanation": "Saturation (pinch-off) needs VDS ≥ VOV. Comparing VDS with Vt is a common mistake. The mode must be assumed before any equation can be written, because each region has a different current law; the check afterwards decides if it was right.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-21.html",
     "label": "Lesson 21 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-21.html",
     "section": "A4 Common mistakes"
    },
    {
     "file": "lesson-guides/lesson-15.html",
     "section": "A4 Common mistakes"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_dc_bias.svg",
    "alt": "DC bias circuit of a common-source stage with gate divider, RD and RS"
   }
  },
  {
   "id": "gr2-dc-005",
   "type": "choice",
   "topic": "DC operating point and region checks",
   "objective": "Explain why a source resistor turns the square law into a quadratic",
   "prompt": "In a MOSFET circuit that has a source resistor, why does finding the DC drain current lead to a quadratic equation?",
   "answer": {
    "id": "a",
    "text": "VGS itself depends on the drain current (VGS = VG − ID·RS), so the current appears inside the square"
   },
   "options": [
    {
     "id": "a",
     "text": "VGS itself depends on the drain current (VGS = VG − ID·RS), so the current appears inside the square",
     "correct": true
    },
    {
     "id": "b",
     "text": "Because the drain resistor is nonlinear",
     "correct": false,
     "rationale": "Resistors are linear; the dependence is through VGS."
    },
    {
     "id": "c",
     "text": "Because the supply voltage varies",
     "correct": false,
     "rationale": "The supply is constant."
    },
    {
     "id": "d",
     "text": "Because the gate draws current",
     "correct": false,
     "rationale": "The gate draws none."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "Because the drain resistor is nonlinear",
     "misconception": "Blames a resistor.",
     "rationale": "Resistors are linear; the dependence is through VGS."
    },
    {
     "id": "c",
     "text": "Because the supply voltage varies",
     "misconception": "Invents a variable supply.",
     "rationale": "The supply is constant."
    },
    {
     "id": "d",
     "text": "Because the gate draws current",
     "misconception": "Invents gate current.",
     "rationale": "The gate draws none."
    }
   ],
   "explanation": "Substituting VGS = VG − ID RS into ID = ½Kn(VGS − Vt)² gives an equation that is quadratic in ID.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-21.html",
     "label": "Lesson 21 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-21.html",
     "section": "A3 Recognize it"
    },
    {
     "file": "lesson-guides/lesson-26.html",
     "section": "A3"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_dc_bias.svg",
    "alt": "DC bias circuit of a common-source stage with gate divider, RD and RS"
   }
  },
  {
   "id": "gr2-dc-006",
   "type": "choice",
   "topic": "DC operating point and region checks",
   "objective": "Say which root of the quadratic to keep",
   "prompt": "The quadratic for the drain current gives two roots. How do you decide which to keep?",
   "answer": {
    "id": "c",
    "text": "Keep the root that gives VGS above the threshold voltage (and a saturated device); the other root implies the transistor is off or inconsistent"
   },
   "options": [
    {
     "id": "a",
     "text": "Always keep the larger root",
     "correct": false,
     "rationale": "The larger root can give VGS below Vt."
    },
    {
     "id": "b",
     "text": "Always keep the smaller root",
     "correct": false,
     "rationale": "The smaller root may be the one that is inconsistent."
    },
    {
     "id": "c",
     "text": "Keep the root that gives VGS above the threshold voltage (and a saturated device); the other root implies the transistor is off or inconsistent",
     "correct": true
    },
    {
     "id": "d",
     "text": "Average the two roots",
     "correct": false,
     "rationale": "Only one root can correspond to the actual circuit."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Always keep the larger root",
     "misconception": "Uses a fixed rule.",
     "rationale": "The larger root can give VGS below Vt."
    },
    {
     "id": "b",
     "text": "Always keep the smaller root",
     "misconception": "Uses a fixed rule.",
     "rationale": "The smaller root may be the one that is inconsistent."
    },
    {
     "id": "d",
     "text": "Average the two roots",
     "misconception": "Combines them.",
     "rationale": "Only one root can correspond to the actual circuit."
    }
   ],
   "explanation": "One root usually corresponds to VGS < Vt, which contradicts the assumption of a conducting device. Check VGS and the saturation condition for each.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-21.html",
     "label": "Lesson 21 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-21.html",
     "section": "A3 Common mistakes"
    },
    {
     "file": "lesson-guides/lesson-26.html",
     "section": "A3 Method"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_dc_bias.svg",
    "alt": "DC bias circuit of a common-source stage with gate divider, RD and RS"
   }
  },
  {
   "id": "gr2-dc-007",
   "type": "multi-select",
   "topic": "DC operating point and region checks",
   "objective": "Collect the checks after a DC solution",
   "prompt": "Which checks should you make after solving for the DC operating point of a MOSFET circuit? Select all that apply.",
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
     "text": "The drain voltage equals the supply voltage",
     "correct": false,
     "rationale": "A drain at the supply would mean no current."
    },
    {
     "id": "b",
     "text": "The gate-source voltage is above the threshold voltage",
     "correct": true
    },
    {
     "id": "c",
     "text": "The drain current equals the gate current",
     "correct": false,
     "rationale": "The gate current is zero."
    },
    {
     "id": "d",
     "text": "The drain-source voltage is at least the overdrive voltage",
     "correct": true
    },
    {
     "id": "e",
     "text": "The coupling capacitors are charged to zero volts",
     "correct": false,
     "rationale": "Capacitors charge to their DC voltages."
    },
    {
     "id": "f",
     "text": "The kept root reproduces the drain current when substituted back",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The drain voltage equals the supply voltage",
     "misconception": "Wants an unbiased result.",
     "rationale": "A drain at the supply would mean no current."
    },
    {
     "id": "c",
     "text": "The drain current equals the gate current",
     "misconception": "Invents a relation.",
     "rationale": "The gate current is zero."
    },
    {
     "id": "e",
     "text": "The coupling capacitors are charged to zero volts",
     "misconception": "Invents a condition.",
     "rationale": "Capacitors charge to their DC voltages."
    }
   ],
   "explanation": "Confirm conduction (VGS > Vt), saturation (VDS ≥ VOV) and consistency of the solution. Skipping one of these checks is how a plausible-looking but wrong operating point gets accepted, so all three are routine.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-26.html",
     "label": "Lesson 26 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-26.html",
     "section": "A3 Checks"
    },
    {
     "file": "lesson-guides/lesson-21.html",
     "section": "A4"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_dc_bias.svg",
    "alt": "DC bias circuit of a common-source stage with gate divider, RD and RS"
   }
  },
  {
   "id": "gr2-dc-008",
   "type": "true-false",
   "topic": "DC operating point and region checks",
   "objective": "Check the units remark",
   "prompt": "True or false: mixing units (for example milliamps with amps) in the drain-current equation is a legitimate source of a factor-of-1000 error in the result.",
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
     "rationale": "Mixed unit systems change the numerical scale of terms, producing wrong results."
    }
   ],
   "distractors": [
    {
     "id": "false",
     "text": "False",
     "misconception": "Believes units cancel automatically.",
     "rationale": "Mixed unit systems change the numerical scale of terms, producing wrong results."
    }
   ],
   "explanation": "The guides stress working in one consistent system (for example mA, kΩ and mA/V²) so voltages come out in volts.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-21.html",
     "label": "Lesson 21 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-21.html",
     "section": "A3 Common mistakes"
    },
    {
     "file": "lesson-guides/lesson-26.html",
     "section": "A3 Common mistakes"
    }
   ]
  },
  {
   "id": "gr2-dc-009",
   "type": "choice",
   "topic": "DC operating point and region checks",
   "objective": "Describe the cutoff test",
   "prompt": "What is the cutoff test for an NMOS transistor?",
   "answer": {
    "id": "a",
    "text": "If the gate-source voltage does not exceed the threshold voltage, the drain current is zero"
   },
   "options": [
    {
     "id": "a",
     "text": "If the gate-source voltage does not exceed the threshold voltage, the drain current is zero",
     "correct": true
    },
    {
     "id": "b",
     "text": "If the drain voltage is above the supply",
     "correct": false,
     "rationale": "Drain voltage cannot exceed the supply in these circuits."
    },
    {
     "id": "c",
     "text": "If the drain current is zero the gate must be zero",
     "correct": false,
     "rationale": "Cutoff is determined by VGS versus Vt."
    },
    {
     "id": "d",
     "text": "If VDS is below VOV",
     "correct": false,
     "rationale": "That is the triode condition."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "If the drain voltage is above the supply",
     "misconception": "Invents a condition.",
     "rationale": "Drain voltage cannot exceed the supply in these circuits."
    },
    {
     "id": "c",
     "text": "If the drain current is zero the gate must be zero",
     "misconception": "Reverses cause and effect.",
     "rationale": "Cutoff is determined by VGS versus Vt."
    },
    {
     "id": "d",
     "text": "If VDS is below VOV",
     "misconception": "Describes triode.",
     "rationale": "That is the triode condition."
    }
   ],
   "explanation": "Cutoff requires VGS ≤ Vt (no channel). It is the first check in the region-of-operation procedure.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-21.html",
     "label": "Lesson 21 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-21.html",
     "section": "A4 Method"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_dc_bias.svg",
    "alt": "DC bias circuit of a common-source stage with gate divider, RD and RS"
   }
  },
  {
   "id": "gr2-dc-010",
   "type": "choice",
   "topic": "DC operating point and region checks",
   "objective": "Choose the triode check",
   "prompt": "If the saturation check fails because VDS is below VOV, what should you do?",
   "answer": {
    "id": "c",
    "text": "Redo the analysis with the triode current equation"
   },
   "options": [
    {
     "id": "a",
     "text": "Increase the supply voltage",
     "correct": false,
     "rationale": "The supply is a fixed input."
    },
    {
     "id": "b",
     "text": "Ignore the result because it is close",
     "correct": false,
     "rationale": "The wrong equation gives a wrong answer."
    },
    {
     "id": "c",
     "text": "Redo the analysis with the triode current equation",
     "correct": true
    },
    {
     "id": "d",
     "text": "Switch to the cutoff equation",
     "correct": false,
     "rationale": "The device is conducting, just not saturated."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Increase the supply voltage",
     "misconception": "Changes a given.",
     "rationale": "The supply is a fixed input."
    },
    {
     "id": "b",
     "text": "Ignore the result because it is close",
     "misconception": "Skips the check.",
     "rationale": "The wrong equation gives a wrong answer."
    },
    {
     "id": "d",
     "text": "Switch to the cutoff equation",
     "misconception": "Chooses the wrong mode.",
     "rationale": "The device is conducting, just not saturated."
    }
   ],
   "explanation": "A failed saturation check means the assumed mode was wrong. Repeat with the triode equation and recheck.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-21.html",
     "label": "Lesson 21 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-21.html",
     "section": "A4"
    },
    {
     "file": "lesson-guides/lesson-15.html",
     "section": "A4 Method"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/cs_dc_bias.svg",
    "alt": "DC bias circuit of a common-source stage with gate divider, RD and RS"
   }
  },
  {
   "id": "gr2-fbk-001",
   "type": "choice",
   "topic": "Drain-feedback bias and PMOS",
   "objective": "Recognize the drain-feedback bias",
   "prompt": "In the self-biased common-source circuit where RG1 connects the drain to the gate and RG2 takes the gate to ground, what sets the gate voltage?",
   "answer": {
    "id": "c",
    "text": "A divider fed from the drain voltage, not from the supply"
   },
   "options": [
    {
     "id": "a",
     "text": "A divider fed from the supply",
     "correct": false,
     "rationale": "RG1 returns to the drain here, so the drain voltage is divided."
    },
    {
     "id": "b",
     "text": "The signal source",
     "correct": false,
     "rationale": "The signal is ac coupled."
    },
    {
     "id": "c",
     "text": "A divider fed from the drain voltage, not from the supply",
     "correct": true
    },
    {
     "id": "d",
     "text": "The source resistor",
     "correct": false,
     "rationale": "The source is grounded in this circuit."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "A divider fed from the supply",
     "misconception": "Treats it as the usual bias divider.",
     "rationale": "RG1 returns to the drain here, so the drain voltage is divided."
    },
    {
     "id": "b",
     "text": "The signal source",
     "misconception": "Credits the signal.",
     "rationale": "The signal is ac coupled."
    },
    {
     "id": "d",
     "text": "The source resistor",
     "misconception": "Credits an absent resistor.",
     "rationale": "The source is grounded in this circuit."
    }
   ],
   "explanation": "The gate voltage is the drain voltage times RG2/(RG1+RG2). Because the drain voltage depends on the drain current, the circuit has built-in negative feedback.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-26.html",
     "label": "Lesson 26 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-26.html",
     "section": "A8 Recognize it"
    },
    {
     "file": "reading-guides/hw9.html",
     "section": "Problem 7.103"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/self_bias.svg",
    "alt": "Common-source stage biased by a divider fed from the drain"
   }
  },
  {
   "id": "gr2-fbk-002",
   "type": "choice",
   "topic": "Drain-feedback bias and PMOS",
   "objective": "Explain the negative feedback of the self-bias",
   "prompt": "In the drain-feedback bias, why does the drain current tend to settle?",
   "answer": {
    "id": "a",
    "text": "If the current rises the drain voltage falls, which lowers the gate voltage and pulls the current back"
   },
   "options": [
    {
     "id": "a",
     "text": "If the current rises the drain voltage falls, which lowers the gate voltage and pulls the current back",
     "correct": true
    },
    {
     "id": "b",
     "text": "If the current rises the gate voltage rises, which raises the current further",
     "correct": false,
     "rationale": "The drain falls when current rises, so the feedback is negative."
    },
    {
     "id": "c",
     "text": "The current is fixed by the supply alone",
     "correct": false,
     "rationale": "The supply does not fix the current."
    },
    {
     "id": "d",
     "text": "The capacitors hold the current constant",
     "correct": false,
     "rationale": "They are open for DC."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "If the current rises the gate voltage rises, which raises the current further",
     "misconception": "Believes feedback is positive.",
     "rationale": "The drain falls when current rises, so the feedback is negative."
    },
    {
     "id": "c",
     "text": "The current is fixed by the supply alone",
     "misconception": "Ignores feedback.",
     "rationale": "The supply does not fix the current."
    },
    {
     "id": "d",
     "text": "The capacitors hold the current constant",
     "misconception": "Credits capacitors.",
     "rationale": "They are open for DC."
    }
   ],
   "explanation": "Higher ID → lower VD → lower VG (divider) → lower ID. This stabilizes the Q-point without a source resistor.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-26.html",
     "label": "Lesson 26 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-26.html",
     "section": "A8"
    },
    {
     "file": "reading-guides/hw9.html",
     "section": "Problem 7.103"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/self_bias.svg",
    "alt": "Common-source stage biased by a divider fed from the drain"
   }
  },
  {
   "id": "gr2-fbk-003",
   "type": "choice",
   "topic": "Drain-feedback bias and PMOS",
   "objective": "Know why the feedback resistor current is neglected",
   "prompt": "The self-bias analysis assumes the current in RG1 is negligible next to the drain current. What makes that reasonable?",
   "answer": {
    "id": "c",
    "text": "RG1 is very large, so it carries only a tiny current compared with the drain current"
   },
   "options": [
    {
     "id": "a",
     "text": "The gate carries the current instead",
     "correct": false,
     "rationale": "The gate draws none."
    },
    {
     "id": "b",
     "text": "RG1 is a short circuit",
     "correct": false,
     "rationale": "A large resistor is nearly open, not shorted."
    },
    {
     "id": "c",
     "text": "RG1 is very large, so it carries only a tiny current compared with the drain current",
     "correct": true
    },
    {
     "id": "d",
     "text": "The drain current is zero",
     "correct": false,
     "rationale": "The transistor conducts normally."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The gate carries the current instead",
     "misconception": "Invents gate current.",
     "rationale": "The gate draws none."
    },
    {
     "id": "b",
     "text": "RG1 is a short circuit",
     "misconception": "Mistakes large for zero.",
     "rationale": "A large resistor is nearly open, not shorted."
    },
    {
     "id": "d",
     "text": "The drain current is zero",
     "misconception": "Contradicts the premise.",
     "rationale": "The transistor conducts normally."
    }
   ],
   "explanation": "A large RG1 passes only microamps against milliamps in the drain resistor, so the drain current is treated as flowing entirely through RD.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-26.html",
     "label": "Lesson 26 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-26.html",
     "section": "A8 Checks"
    },
    {
     "file": "reading-guides/hw9.html",
     "section": "Problem 7.103"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/self_bias.svg",
    "alt": "Common-source stage biased by a divider fed from the drain"
   }
  },
  {
   "id": "gr2-fbk-004",
   "type": "choice",
   "topic": "Drain-feedback bias and PMOS",
   "objective": "Say what VGS is in the self-biased circuit",
   "prompt": "In the self-bias circuit with a grounded source, how is VGS related to the gate voltage?",
   "answer": {
    "id": "a",
    "text": "They are equal, because the source is at ground"
   },
   "options": [
    {
     "id": "a",
     "text": "They are equal, because the source is at ground",
     "correct": true
    },
    {
     "id": "b",
     "text": "VGS is half of the gate voltage",
     "correct": false,
     "rationale": "With the source grounded the gate voltage is the gate-source voltage."
    },
    {
     "id": "c",
     "text": "VGS equals the drain voltage",
     "correct": false,
     "rationale": "The gate voltage is a fraction of the drain voltage."
    },
    {
     "id": "d",
     "text": "VGS is zero in saturation",
     "correct": false,
     "rationale": "The device needs VGS above Vt to conduct."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "VGS is half of the gate voltage",
     "misconception": "Invents a factor.",
     "rationale": "With the source grounded the gate voltage is the gate-source voltage."
    },
    {
     "id": "c",
     "text": "VGS equals the drain voltage",
     "misconception": "Mixes terminals.",
     "rationale": "The gate voltage is a fraction of the drain voltage."
    },
    {
     "id": "d",
     "text": "VGS is zero in saturation",
     "misconception": "Misreads saturation.",
     "rationale": "The device needs VGS above Vt to conduct."
    }
   ],
   "explanation": "With the source at ground, the voltage from gate to source is simply the gate voltage. Remembering this saves a step: the gate voltage is the same node voltage that appears in the divider, with no source drop to subtract.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-26.html",
     "label": "Lesson 26 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-26.html",
     "section": "A8 Method"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/self_bias.svg",
    "alt": "Common-source stage biased by a divider fed from the drain"
   }
  },
  {
   "id": "gr2-fbk-005",
   "type": "choice",
   "topic": "Drain-feedback bias and PMOS",
   "objective": "Say which root to reject in the self-bias quadratic",
   "prompt": "The self-bias analysis gives two solutions for the current. Which one is rejected?",
   "answer": {
    "id": "c",
    "text": "The one that puts the drain voltage below ground or the gate-source voltage below the threshold"
   },
   "options": [
    {
     "id": "a",
     "text": "The one with the smaller current always",
     "correct": false,
     "rationale": "The rejected root is chosen by physical consistency."
    },
    {
     "id": "b",
     "text": "The one with the larger current always",
     "correct": false,
     "rationale": "Again, physical consistency decides."
    },
    {
     "id": "c",
     "text": "The one that puts the drain voltage below ground or the gate-source voltage below the threshold",
     "correct": true
    },
    {
     "id": "d",
     "text": "Neither; both are valid",
     "correct": false,
     "rationale": "Only one root satisfies the circuit."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The one with the smaller current always",
     "misconception": "Uses a fixed rule.",
     "rationale": "The rejected root is chosen by physical consistency."
    },
    {
     "id": "b",
     "text": "The one with the larger current always",
     "misconception": "Uses a fixed rule.",
     "rationale": "Again, physical consistency decides."
    },
    {
     "id": "d",
     "text": "Neither; both are valid",
     "misconception": "Keeps both.",
     "rationale": "Only one root satisfies the circuit."
    }
   ],
   "explanation": "A root that makes VD negative or VGS below Vt is not a solution of the actual circuit. Checking each root against the circuit, not against its size, is what separates the physical solution from the algebraic extra.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-26.html",
     "label": "Lesson 26 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-26.html",
     "section": "A8 Method, Common mistakes"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/self_bias.svg",
    "alt": "Common-source stage biased by a divider fed from the drain"
   }
  },
  {
   "id": "gr2-pmos-001",
   "type": "choice",
   "topic": "Drain-feedback bias and PMOS",
   "objective": "Identify the PMOS carriers and polarities",
   "prompt": "How does a PMOS transistor differ from an NMOS transistor in how it conducts?",
   "answer": {
    "id": "d",
    "text": "Its channel carries holes, and the voltage polarities are reversed: the source is at the more positive side and the gate is pulled below it to turn it on"
   },
   "options": [
    {
     "id": "a",
     "text": "Its channel carries electrons and it needs a larger threshold",
     "correct": false,
     "rationale": "PMOS carries holes."
    },
    {
     "id": "b",
     "text": "It conducts when the gate is above the source",
     "correct": false,
     "rationale": "A PMOS turns on when the gate is sufficiently below the source."
    },
    {
     "id": "c",
     "text": "It has no source terminal",
     "correct": false,
     "rationale": "It has source, drain and gate like an NMOS."
    },
    {
     "id": "d",
     "text": "Its channel carries holes, and the voltage polarities are reversed: the source is at the more positive side and the gate is pulled below it to turn it on",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Its channel carries electrons and it needs a larger threshold",
     "misconception": "Treats it as an NMOS.",
     "rationale": "PMOS carries holes."
    },
    {
     "id": "b",
     "text": "It conducts when the gate is above the source",
     "misconception": "Uses NMOS polarity.",
     "rationale": "A PMOS turns on when the gate is sufficiently below the source."
    },
    {
     "id": "c",
     "text": "It has no source terminal",
     "misconception": "Invents a structure.",
     "rationale": "It has source, drain and gate like an NMOS."
    }
   ],
   "explanation": "A PMOS has a p-type channel, so holes are the carriers. Voltages and currents are the mirror image of the NMOS: in circuits the source is usually drawn at the top, toward the positive supply.",
   "resources": [
    {
     "type": "text",
     "text": "PMOS was introduced in Lesson 9; this item rests on Equation Sheet 2 (p. 1) and the Lesson 26 syllabus topic list."
    }
   ],
   "sources": [
    {
     "file": "Equation Sheet 2: MOSFET Fundamentals & DC Analysis",
     "section": "symbols, source at top"
    },
    {
     "file": "Course syllabus, Version 4",
     "section": "Lesson 26 topics: PMOS Design"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/pmos_cs.svg",
    "alt": "Common-source stage built with a PMOS transistor, source at the positive supply"
   }
  },
  {
   "id": "gr2-pmos-002",
   "type": "choice",
   "topic": "Drain-feedback bias and PMOS",
   "objective": "Apply the NMOS design idea to a PMOS circuit",
   "prompt": "When a CS amplifier design is done with a PMOS transistor instead of an NMOS, what is the right overall approach?",
   "answer": {
    "id": "b",
    "text": "Use the same procedure with all voltage and current polarities mirrored, with the source toward the positive supply"
   },
   "options": [
    {
     "id": "a",
     "text": "Use a completely different method",
     "correct": false,
     "rationale": "The same square-law logic applies with reversed polarities."
    },
    {
     "id": "b",
     "text": "Use the same procedure with all voltage and current polarities mirrored, with the source toward the positive supply",
     "correct": true
    },
    {
     "id": "c",
     "text": "Use the NMOS procedure with the polarities unchanged",
     "correct": false,
     "rationale": "Unchanged polarities would bias the PMOS off."
    },
    {
     "id": "d",
     "text": "A PMOS cannot be used as an amplifier",
     "correct": false,
     "rationale": "It amplifies like an NMOS."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Use a completely different method",
     "misconception": "Thinks PMOS needs a new theory.",
     "rationale": "The same square-law logic applies with reversed polarities."
    },
    {
     "id": "c",
     "text": "Use the NMOS procedure with the polarities unchanged",
     "misconception": "Ignores the mirror.",
     "rationale": "Unchanged polarities would bias the PMOS off."
    },
    {
     "id": "d",
     "text": "A PMOS cannot be used as an amplifier",
     "misconception": "Wrong fact.",
     "rationale": "It amplifies like an NMOS."
    }
   ],
   "explanation": "The PMOS version is the mirror image: supplies and polarities flip, and the same checks (saturation, swing, linearity) apply.",
   "resources": [
    {
     "type": "text",
     "text": "PMOS is on the Lesson 26 topic list; this item is kept general."
    }
   ],
   "sources": [
    {
     "file": "Course syllabus, Version 4",
     "section": "Lesson 26: PMOS Design"
    },
    {
     "file": "Equation Sheet 2: MOSFET Fundamentals & DC Analysis",
     "section": "symbols"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/pmos_cs.svg",
    "alt": "Common-source stage built with a PMOS transistor, source at the positive supply"
   }
  },
  {
   "id": "gr2-bjt-001",
   "type": "choice",
   "topic": "BJT structure and operating modes",
   "objective": "Identify the BJT regions and doping order",
   "prompt": "How are the three regions of an npn transistor doped relative to each other?",
   "answer": {
    "id": "b",
    "text": "The emitter is the most heavily doped, the base is lighter, and the collector is lightest"
   },
   "options": [
    {
     "id": "a",
     "text": "The base is the most heavily doped",
     "correct": false,
     "rationale": "A heavy base would send most current into the base instead of the collector."
    },
    {
     "id": "b",
     "text": "The emitter is the most heavily doped, the base is lighter, and the collector is lightest",
     "correct": true
    },
    {
     "id": "c",
     "text": "All three regions have the same doping",
     "correct": false,
     "rationale": "The unequal doping is what makes the device work."
    },
    {
     "id": "d",
     "text": "The collector is the most heavily doped",
     "correct": false,
     "rationale": "The emitter must inject many carriers, so it is the heaviest."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The base is the most heavily doped",
     "misconception": "Believes the control terminal is the heaviest.",
     "rationale": "A heavy base would send most current into the base instead of the collector."
    },
    {
     "id": "c",
     "text": "All three regions have the same doping",
     "misconception": "Ignores the design.",
     "rationale": "The unequal doping is what makes the device work."
    },
    {
     "id": "d",
     "text": "The collector is the most heavily doped",
     "misconception": "Reverses the order.",
     "rationale": "The emitter must inject many carriers, so it is the heaviest."
    }
   ],
   "explanation": "Emitter ≫ base ≫ collector in doping (N_D,E ≫ N_A,B ≫ N_D,C). Heavy emitter doping injects many electrons; the light collector supports a wide depletion region.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-25.html",
     "label": "Lesson 25 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-25.html",
     "section": "B1"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 25 objectives"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/bjt_struct.svg",
    "alt": "npn transistor structure: emitter, thin base and collector with the two junctions"
   }
  },
  {
   "id": "gr2-bjt-002",
   "type": "choice",
   "topic": "BJT structure and operating modes",
   "objective": "Count the junctions",
   "prompt": "How many pn junctions are in a BJT, and what do they do in active mode?",
   "answer": {
    "id": "d",
    "text": "Two: the emitter-base junction is forward biased and the collector-base junction is reverse biased"
   },
   "options": [
    {
     "id": "a",
     "text": "One: a single junction is forward biased",
     "correct": false,
     "rationale": "It has two junctions."
    },
    {
     "id": "b",
     "text": "Two: both are forward biased in active mode",
     "correct": false,
     "rationale": "Both forward is saturation."
    },
    {
     "id": "c",
     "text": "Two: both are reverse biased in active mode",
     "correct": false,
     "rationale": "Both reverse is cutoff."
    },
    {
     "id": "d",
     "text": "Two: the emitter-base junction is forward biased and the collector-base junction is reverse biased",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "One: a single junction is forward biased",
     "misconception": "Treats the BJT like a diode.",
     "rationale": "It has two junctions."
    },
    {
     "id": "b",
     "text": "Two: both are forward biased in active mode",
     "misconception": "Describes saturation.",
     "rationale": "Both forward is saturation."
    },
    {
     "id": "c",
     "text": "Two: both are reverse biased in active mode",
     "misconception": "Describes cutoff.",
     "rationale": "Both reverse is cutoff."
    }
   ],
   "explanation": "Active mode: EBJ forward, CBJ reverse. Cutoff: both reverse. Saturation: both forward. The two-junction picture is the key to the mode table: each mode is a combination of the bias states of the two junctions.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-25.html",
     "label": "Lesson 25 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-25.html",
     "section": "A1"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 25 objectives"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/bjt_struct.svg",
    "alt": "npn transistor structure: emitter, thin base and collector with the two junctions"
   }
  },
  {
   "id": "gr2-bjt-003",
   "type": "choice",
   "topic": "BJT structure and operating modes",
   "objective": "Identify the mode from junction biases",
   "prompt": "An npn BJT has its emitter-base junction forward biased and its collector-base junction forward biased. What mode is it in?",
   "answer": {
    "id": "b",
    "text": "Saturation"
   },
   "options": [
    {
     "id": "a",
     "text": "Active",
     "correct": false,
     "rationale": "Active requires the collector junction to be reverse biased."
    },
    {
     "id": "b",
     "text": "Saturation",
     "correct": true
    },
    {
     "id": "c",
     "text": "Cutoff",
     "correct": false,
     "rationale": "Cutoff needs both junctions reverse biased."
    },
    {
     "id": "d",
     "text": "Reverse active",
     "correct": false,
     "rationale": "Both forward is saturation."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Active",
     "misconception": "Assumes forward EBJ means active.",
     "rationale": "Active requires the collector junction to be reverse biased."
    },
    {
     "id": "c",
     "text": "Cutoff",
     "misconception": "Picks the no-current mode.",
     "rationale": "Cutoff needs both junctions reverse biased."
    },
    {
     "id": "d",
     "text": "Reverse active",
     "misconception": "Picks a mode not used here.",
     "rationale": "Both forward is saturation."
    }
   ],
   "explanation": "Reverse/reverse = cutoff, forward/reverse = active, forward/forward = saturation. Both junctions forward biased means the collector can no longer hold its voltage above the base, which is the defining feature of saturation.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-25.html",
     "label": "Lesson 25 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-25.html",
     "section": "A1 Method"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 25 objectives"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/bjt_struct.svg",
    "alt": "npn transistor structure: emitter, thin base and collector with the two junctions"
   }
  },
  {
   "id": "gr2-bjt-004",
   "type": "choice",
   "topic": "BJT structure and operating modes",
   "objective": "Check the active-mode assumption",
   "prompt": "After assuming active mode in a bias analysis, which result tells you the assumption is wrong?",
   "answer": {
    "id": "d",
    "text": "The collector voltage comes out below the base voltage, which would forward bias the collector junction"
   },
   "options": [
    {
     "id": "a",
     "text": "The base current is positive",
     "correct": false,
     "rationale": "A positive base current is expected."
    },
    {
     "id": "b",
     "text": "The emitter voltage is below the base voltage",
     "correct": false,
     "rationale": "The emitter sits about one diode drop below the base in active mode."
    },
    {
     "id": "c",
     "text": "The collector current is larger than the base current",
     "correct": false,
     "rationale": "IC = βIB is larger than IB in active mode."
    },
    {
     "id": "d",
     "text": "The collector voltage comes out below the base voltage, which would forward bias the collector junction",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The base current is positive",
     "misconception": "Believes a positive base current is a failure.",
     "rationale": "A positive base current is expected."
    },
    {
     "id": "b",
     "text": "The emitter voltage is below the base voltage",
     "misconception": "Misreads the normal drop.",
     "rationale": "The emitter sits about one diode drop below the base in active mode."
    },
    {
     "id": "c",
     "text": "The collector current is larger than the base current",
     "misconception": "Misreads the gain.",
     "rationale": "IC = βIB is larger than IB in active mode."
    }
   ],
   "explanation": "In active mode VC ≥ VB. If the computed VC falls below VB the collector junction is forward biased, so the device is saturated.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-25.html",
     "label": "Lesson 25 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-25.html",
     "section": "A1 Checks"
    },
    {
     "file": "lesson-guides/lesson-25.html",
     "section": "A4 Checks"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/bjt_bias.svg",
    "alt": "Voltage-divider-biased npn transistor with collector and emitter resistors"
   }
  },
  {
   "id": "gr2-bjt-005",
   "type": "choice",
   "topic": "BJT structure and operating modes",
   "objective": "Explain the role of a thin base",
   "prompt": "Why is the base of a BJT made very thin?",
   "answer": {
    "id": "b",
    "text": "So most injected electrons cross to the collector before they can recombine in the base"
   },
   "options": [
    {
     "id": "a",
     "text": "So the base can carry the load current",
     "correct": false,
     "rationale": "The collector carries the main current."
    },
    {
     "id": "b",
     "text": "So most injected electrons cross to the collector before they can recombine in the base",
     "correct": true
    },
    {
     "id": "c",
     "text": "So the emitter-base junction becomes reverse biased",
     "correct": false,
     "rationale": "Thinness does not change junction bias."
    },
    {
     "id": "d",
     "text": "So the transistor gives zero gain",
     "correct": false,
     "rationale": "A thin base increases the gain."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "So the base can carry the load current",
     "misconception": "Believes the base carries the main current.",
     "rationale": "The collector carries the main current."
    },
    {
     "id": "c",
     "text": "So the emitter-base junction becomes reverse biased",
     "misconception": "Invents a bias effect.",
     "rationale": "Thinness does not change junction bias."
    },
    {
     "id": "d",
     "text": "So the transistor gives zero gain",
     "misconception": "Reverses the goal.",
     "rationale": "A thin base increases the gain."
    }
   ],
   "explanation": "A short path through the base reduces recombination, so almost all injected electrons are swept into the collector, giving a large β.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-25.html",
     "label": "Lesson 25 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-25.html",
     "section": "A2 Method"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 25 objectives"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/bjt_struct.svg",
    "alt": "npn transistor structure: emitter, thin base and collector with the two junctions"
   }
  },
  {
   "id": "gr2-bjt-006",
   "type": "choice",
   "topic": "BJT structure and operating modes",
   "objective": "Say what carries the collector current",
   "prompt": "In an npn transistor in active mode, what carries most of the collector current?",
   "answer": {
    "id": "d",
    "text": "Electrons injected from the emitter that diffuse across the base and are swept into the collector"
   },
   "options": [
    {
     "id": "a",
     "text": "Holes injected from the base into the collector",
     "correct": false,
     "rationale": "In an npn device the collector current is electrons."
    },
    {
     "id": "b",
     "text": "Electrons drifting through the base in a strong field",
     "correct": false,
     "rationale": "In the base the carriers move mainly by diffusion."
    },
    {
     "id": "c",
     "text": "Current flowing in through the gate",
     "correct": false,
     "rationale": "A BJT has no gate."
    },
    {
     "id": "d",
     "text": "Electrons injected from the emitter that diffuse across the base and are swept into the collector",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Holes injected from the base into the collector",
     "misconception": "Mixes up the carrier type.",
     "rationale": "In an npn device the collector current is electrons."
    },
    {
     "id": "b",
     "text": "Electrons drifting through the base in a strong field",
     "misconception": "Says drift instead of diffusion.",
     "rationale": "In the base the carriers move mainly by diffusion."
    },
    {
     "id": "c",
     "text": "Current flowing in through the gate",
     "misconception": "Uses FET language.",
     "rationale": "A BJT has no gate."
    }
   ],
   "explanation": "The EBJ injects electrons into the thin p base; they diffuse to the collector junction where its field sweeps them in.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-25.html",
     "label": "Lesson 25 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-25.html",
     "section": "A2"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 25 objectives"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/bjt_struct.svg",
    "alt": "npn transistor structure: emitter, thin base and collector with the two junctions"
   }
  },
  {
   "id": "gr2-bjt-007",
   "type": "choice",
   "topic": "BJT structure and operating modes",
   "objective": "Explain why the BJT is called bipolar",
   "prompt": "Why is the BJT called bipolar, while the FET is called unipolar?",
   "answer": {
    "id": "b",
    "text": "BJT conduction uses both electrons and holes (majority and minority carriers), while FET conduction uses one carrier type"
   },
   "options": [
    {
     "id": "a",
     "text": "The BJT has two supply voltages",
     "correct": false,
     "rationale": "The name refers to carrier types."
    },
    {
     "id": "b",
     "text": "BJT conduction uses both electrons and holes (majority and minority carriers), while FET conduction uses one carrier type",
     "correct": true
    },
    {
     "id": "c",
     "text": "The FET has only one terminal",
     "correct": false,
     "rationale": "A FET has three terminals."
    },
    {
     "id": "d",
     "text": "The BJT conducts in both directions",
     "correct": false,
     "rationale": "Bipolar refers to both carrier polarities."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The BJT has two supply voltages",
     "misconception": "Reads \"bi\" as two supplies.",
     "rationale": "The name refers to carrier types."
    },
    {
     "id": "c",
     "text": "The FET has only one terminal",
     "misconception": "Counts terminals.",
     "rationale": "A FET has three terminals."
    },
    {
     "id": "d",
     "text": "The BJT conducts in both directions",
     "misconception": "Reads \"bipolar\" as bidirectional.",
     "rationale": "Bipolar refers to both carrier polarities."
    }
   ],
   "explanation": "In the BJT both electrons and holes take part in conduction; in the FET channel only one type does.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-25.html",
     "label": "Lesson 25 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-25.html",
     "section": "A6"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 25 objectives"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/bjt_struct.svg",
    "alt": "npn transistor structure: emitter, thin base and collector with the two junctions"
   }
  },
  {
   "id": "gr2-bjt2-001",
   "type": "choice",
   "topic": "BJT currents, bias and small-signal model",
   "objective": "Explain what β is",
   "prompt": "What does the current gain β of a BJT relate?",
   "answer": {
    "id": "a",
    "text": "The collector current to the base current in active mode"
   },
   "options": [
    {
     "id": "a",
     "text": "The collector current to the base current in active mode",
     "correct": true
    },
    {
     "id": "b",
     "text": "The collector current to the emitter current",
     "correct": false,
     "rationale": "That ratio is α, just below 1."
    },
    {
     "id": "c",
     "text": "The base current to the emitter current",
     "correct": false,
     "rationale": "That ratio is small and not β."
    },
    {
     "id": "d",
     "text": "The collector voltage to the base voltage",
     "correct": false,
     "rationale": "β is a ratio of currents."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "The collector current to the emitter current",
     "misconception": "Describes α.",
     "rationale": "That ratio is α, just below 1."
    },
    {
     "id": "c",
     "text": "The base current to the emitter current",
     "misconception": "Mixes up the ratio.",
     "rationale": "That ratio is small and not β."
    },
    {
     "id": "d",
     "text": "The collector voltage to the base voltage",
     "misconception": "Uses voltages.",
     "rationale": "β is a ratio of currents."
    }
   ],
   "explanation": "β = IC/IB and is large (tens to hundreds) in active mode. α = IC/IE is slightly below 1. The ratio α = IC/IE is the companion quantity, always just below one because a small base current is lost to recombination.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-25.html",
     "label": "Lesson 25 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-25.html",
     "section": "A3"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 25 objectives"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/bjt_currents.svg",
    "alt": "npn transistor symbol with the base, collector and emitter currents"
   }
  },
  {
   "id": "gr2-bjt2-002",
   "type": "true-false",
   "topic": "BJT currents, bias and small-signal model",
   "objective": "Check β stability",
   "prompt": "True or false: β is a fixed constant of a BJT that does not vary with collector current or temperature.",
   "answer": {
    "id": "false",
    "text": "False"
   },
   "options": [
    {
     "id": "true",
     "text": "True",
     "correct": false,
     "rationale": "β varies considerably with IC and temperature."
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
     "misconception": "Treats β as a constant.",
     "rationale": "β varies considerably with IC and temperature."
    }
   ],
   "explanation": "The lesson stresses that β can vary significantly, which is why good bias circuits are designed not to depend on it.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-25.html",
     "label": "Lesson 25 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "Lesson objectives",
     "section": "Lesson 25 objectives"
    },
    {
     "file": "lesson-guides/lesson-25.html",
     "section": "B2"
    }
   ]
  },
  {
   "id": "gr2-bjt2-003",
   "type": "choice",
   "topic": "BJT currents, bias and small-signal model",
   "objective": "Relate the three currents",
   "prompt": "In an npn BJT, how are the emitter, base and collector currents related?",
   "answer": {
    "id": "a",
    "text": "The emitter current is the sum of the base and collector currents, so it is the largest"
   },
   "options": [
    {
     "id": "a",
     "text": "The emitter current is the sum of the base and collector currents, so it is the largest",
     "correct": true
    },
    {
     "id": "b",
     "text": "The collector current is the sum of the base and emitter currents",
     "correct": false,
     "rationale": "The emitter current is the total."
    },
    {
     "id": "c",
     "text": "The base current is the largest",
     "correct": false,
     "rationale": "The base current is the smallest."
    },
    {
     "id": "d",
     "text": "All three are equal",
     "correct": false,
     "rationale": "IB is small but not zero."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "The collector current is the sum of the base and emitter currents",
     "misconception": "Misapplies KCL.",
     "rationale": "The emitter current is the total."
    },
    {
     "id": "c",
     "text": "The base current is the largest",
     "misconception": "Reverses the sizes.",
     "rationale": "The base current is the smallest."
    },
    {
     "id": "d",
     "text": "All three are equal",
     "misconception": "Ignores the base current.",
     "rationale": "IB is small but not zero."
    }
   ],
   "explanation": "KCL on the transistor gives IE = IB + IC, and IC = βIB, so IE = (β+1)IB. Treating the three currents consistently with KCL keeps every later bias calculation honest.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-25.html",
     "label": "Lesson 25 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-25.html",
     "section": "A3 Checks"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/bjt_currents.svg",
    "alt": "npn transistor symbol with the base, collector and emitter currents"
   }
  },
  {
   "id": "gr2-bjt2-004",
   "type": "choice",
   "topic": "BJT currents, bias and small-signal model",
   "objective": "Say why the base current is needed",
   "prompt": "Compare the BJT and the FET: what must flow for a BJT to carry collector current?",
   "answer": {
    "id": "c",
    "text": "A base current; a FET needs no gate current for drain current"
   },
   "options": [
    {
     "id": "a",
     "text": "Nothing: a BJT carries collector current with no base current",
     "correct": false,
     "rationale": "No base current means no collector current."
    },
    {
     "id": "b",
     "text": "A gate current, as in a FET",
     "correct": false,
     "rationale": "A BJT has a base."
    },
    {
     "id": "c",
     "text": "A base current; a FET needs no gate current for drain current",
     "correct": true
    },
    {
     "id": "d",
     "text": "A collector-base short circuit",
     "correct": false,
     "rationale": "The collector junction is reverse biased in active mode."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Nothing: a BJT carries collector current with no base current",
     "misconception": "Treats the BJT like a FET.",
     "rationale": "No base current means no collector current."
    },
    {
     "id": "b",
     "text": "A gate current, as in a FET",
     "misconception": "Uses FET terminals.",
     "rationale": "A BJT has a base."
    },
    {
     "id": "d",
     "text": "A collector-base short circuit",
     "misconception": "Invents a condition.",
     "rationale": "The collector junction is reverse biased in active mode."
    }
   ],
   "explanation": "The EBJ must be forward biased, which requires a base current. The FET gate is insulated and draws none.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-25.html",
     "label": "Lesson 25 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "Lesson objectives",
     "section": "Lesson 25 objectives"
    },
    {
     "file": "lesson-guides/lesson-25.html",
     "section": "A6"
    }
   ]
  },
  {
   "id": "gr2-bjt2-005",
   "type": "choice",
   "topic": "BJT currents, bias and small-signal model",
   "objective": "Model the BJT DC bias",
   "prompt": "In the large-signal DC model used for bias analysis, what does the base-emitter junction look like?",
   "answer": {
    "id": "a",
    "text": "A diode with a roughly constant forward drop, with a current source β·IB from collector to emitter"
   },
   "options": [
    {
     "id": "a",
     "text": "A diode with a roughly constant forward drop, with a current source β·IB from collector to emitter",
     "correct": true
    },
    {
     "id": "b",
     "text": "A resistor with a very large value",
     "correct": false,
     "rationale": "The junction is a conducting diode in active mode."
    },
    {
     "id": "c",
     "text": "An open circuit",
     "correct": false,
     "rationale": "The junction conducts."
    },
    {
     "id": "d",
     "text": "A voltage source equal to VCC",
     "correct": false,
     "rationale": "The drop is about 0.7 V, not the supply."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "A resistor with a very large value",
     "misconception": "Uses a resistor.",
     "rationale": "The junction is a conducting diode in active mode."
    },
    {
     "id": "c",
     "text": "An open circuit",
     "misconception": "Treats it as off.",
     "rationale": "The junction conducts."
    },
    {
     "id": "d",
     "text": "A voltage source equal to VCC",
     "misconception": "Uses the supply.",
     "rationale": "The drop is about 0.7 V, not the supply."
    }
   ],
   "explanation": "The DC model replaces the transistor by a constant-drop diode from base to emitter and a controlled current source βIB from collector to emitter.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-25.html",
     "label": "Lesson 25 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-25.html",
     "section": "A4 Method"
    },
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 8 BJT"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/bjt_bias.svg",
    "alt": "Voltage-divider-biased npn transistor with collector and emitter resistors"
   }
  },
  {
   "id": "gr2-bjt2-006",
   "type": "choice",
   "topic": "BJT currents, bias and small-signal model",
   "objective": "Explain the Thevenin step in the BJT bias",
   "prompt": "Why is the base divider replaced by its Thevenin equivalent in the BJT bias analysis?",
   "answer": {
    "id": "c",
    "text": "Because the base draws current, so the divider is loaded and its equivalent source and resistance are needed"
   },
   "options": [
    {
     "id": "a",
     "text": "Because the divider is open circuit at the base",
     "correct": false,
     "rationale": "Unlike a FET gate, the base draws a current."
    },
    {
     "id": "b",
     "text": "Because the divider supplies the collector current",
     "correct": false,
     "rationale": "The collector current comes from VCC through RC."
    },
    {
     "id": "c",
     "text": "Because the base draws current, so the divider is loaded and its equivalent source and resistance are needed",
     "correct": true
    },
    {
     "id": "d",
     "text": "Because the divider must be removed",
     "correct": false,
     "rationale": "The Thevenin equivalent keeps its effect."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Because the divider is open circuit at the base",
     "misconception": "Treats the base as drawing no current.",
     "rationale": "Unlike a FET gate, the base draws a current."
    },
    {
     "id": "b",
     "text": "Because the divider supplies the collector current",
     "misconception": "Misroutes current.",
     "rationale": "The collector current comes from VCC through RC."
    },
    {
     "id": "d",
     "text": "Because the divider must be removed",
     "misconception": "Deletes it.",
     "rationale": "The Thevenin equivalent keeps its effect."
    }
   ],
   "explanation": "With base current flowing, the divider no longer simply sets the base voltage; the Thevenin form with Vth and Rth gives the exact base loop.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-25.html",
     "label": "Lesson 25 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-25.html",
     "section": "A4"
    },
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 8"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/bjt_bias.svg",
    "alt": "Voltage-divider-biased npn transistor with collector and emitter resistors"
   }
  },
  {
   "id": "gr2-bjt2-007",
   "type": "choice",
   "topic": "BJT currents, bias and small-signal model",
   "objective": "Explain how RE makes the bias less sensitive to β",
   "prompt": "In a divider-biased BJT with an emitter resistor, why can the collector current become nearly independent of β?",
   "answer": {
    "id": "a",
    "text": "When the emitter resistor term dominates the base loop, the current is set by the Thevenin voltage minus the diode drop over RE, not by β"
   },
   "options": [
    {
     "id": "a",
     "text": "When the emitter resistor term dominates the base loop, the current is set by the Thevenin voltage minus the diode drop over RE, not by β",
     "correct": true
    },
    {
     "id": "b",
     "text": "Because β is always exactly 100",
     "correct": false,
     "rationale": "β varies; the design merely makes the result insensitive to it."
    },
    {
     "id": "c",
     "text": "Because the base current is zero",
     "correct": false,
     "rationale": "Base current exists but its effect is small."
    },
    {
     "id": "d",
     "text": "Because the collector resistor sets the current",
     "correct": false,
     "rationale": "RC sets the collector voltage, not the current in this regime."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "Because β is always exactly 100",
     "misconception": "Assumes a fixed β.",
     "rationale": "β varies; the design merely makes the result insensitive to it."
    },
    {
     "id": "c",
     "text": "Because the base current is zero",
     "misconception": "Treats the base like a FET gate.",
     "rationale": "Base current exists but its effect is small."
    },
    {
     "id": "d",
     "text": "Because the collector resistor sets the current",
     "misconception": "Credits RC.",
     "rationale": "RC sets the collector voltage, not the current in this regime."
    }
   ],
   "explanation": "If (β+1)RE ≫ Rth, the base loop equation reduces to IC ≈ (Vth − VBE)/RE. β drops out, so the bias is stable.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-25.html",
     "label": "Lesson 25 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-25.html",
     "section": "A4 Variants"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 25 objectives"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/bjt_bias.svg",
    "alt": "Voltage-divider-biased npn transistor with collector and emitter resistors"
   }
  },
  {
   "id": "gr2-bjt2-008",
   "type": "choice",
   "topic": "BJT currents, bias and small-signal model",
   "objective": "Compare an RE-free bias",
   "prompt": "With no emitter resistor, how does the BJT bias behave when β changes?",
   "answer": {
    "id": "c",
    "text": "The collector current is proportional to β, so the bias is much less stable"
   },
   "options": [
    {
     "id": "a",
     "text": "It is more stable because there is less feedback",
     "correct": false,
     "rationale": "RE provides the stabilizing feedback."
    },
    {
     "id": "b",
     "text": "It is unaffected by β",
     "correct": false,
     "rationale": "Without RE, IC = βIB follows β directly."
    },
    {
     "id": "c",
     "text": "The collector current is proportional to β, so the bias is much less stable",
     "correct": true
    },
    {
     "id": "d",
     "text": "The base current becomes infinite",
     "correct": false,
     "rationale": "It is limited by the Thevenin resistance."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "It is more stable because there is less feedback",
     "misconception": "Misreads feedback.",
     "rationale": "RE provides the stabilizing feedback."
    },
    {
     "id": "b",
     "text": "It is unaffected by β",
     "misconception": "Ignores β.",
     "rationale": "Without RE, IC = βIB follows β directly."
    },
    {
     "id": "d",
     "text": "The base current becomes infinite",
     "misconception": "Overstates.",
     "rationale": "It is limited by the Thevenin resistance."
    }
   ],
   "explanation": "Without RE, IB is set by the Thevenin loop alone, so IC = βIB scales with β. The constant-drop diode model is the BJT counterpart of the constant-voltage-drop diode model used earlier in the course.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-25.html",
     "label": "Lesson 25 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-25.html",
     "section": "A4 Variants"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 25 objectives"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/bjt_bias.svg",
    "alt": "Voltage-divider-biased npn transistor with collector and emitter resistors"
   }
  },
  {
   "id": "gr2-bjt2-009",
   "type": "sequence",
   "topic": "BJT currents, bias and small-signal model",
   "objective": "Order the divider-bias analysis",
   "prompt": "Put the steps of the voltage-divider BJT bias analysis in order.",
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
     "text": "Replace the transistor with its DC model"
    },
    {
     "id": "s2",
     "text": "Thevenize the base divider"
    },
    {
     "id": "s3",
     "text": "Write KVL around the base loop and solve for the base current"
    },
    {
     "id": "s4",
     "text": "Find the collector and emitter currents from the base current"
    },
    {
     "id": "s5",
     "text": "Find the terminal voltages and confirm active mode"
    }
   ],
   "distractors": [
    {
     "id": "d1",
     "text": "Find the terminal voltages before the base current",
     "misconception": "Reverses the dependency.",
     "rationale": "The voltages follow from the currents."
    },
    {
     "id": "d2",
     "text": "Confirm active mode before solving anything",
     "misconception": "Checks before analyzing.",
     "rationale": "The check uses the computed voltages."
    }
   ],
   "explanation": "Model, Thevenin, base loop, currents, voltages and then the mode check. This is why the same divider-bias method that works for a MOSFET needs the Thevenin step for a BJT.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-25.html",
     "label": "Lesson 25 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-25.html",
     "section": "A4 Method"
    },
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 8"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/bjt_bias.svg",
    "alt": "Voltage-divider-biased npn transistor with collector and emitter resistors"
   }
  },
  {
   "id": "gr2-bjt2-010",
   "type": "choice",
   "topic": "BJT currents, bias and small-signal model",
   "objective": "State the BJT transconductance relation",
   "prompt": "How is the BJT transconductance gm determined?",
   "answer": {
    "id": "c",
    "text": "By the DC collector current divided by the thermal voltage"
   },
   "options": [
    {
     "id": "a",
     "text": "By the square root of twice Kn times the current",
     "correct": false,
     "rationale": "That is the FET formula."
    },
    {
     "id": "b",
     "text": "By the base current alone",
     "correct": false,
     "rationale": "gm is tied to the collector current."
    },
    {
     "id": "c",
     "text": "By the DC collector current divided by the thermal voltage",
     "correct": true
    },
    {
     "id": "d",
     "text": "By the supply voltage",
     "correct": false,
     "rationale": "The supply does not set gm directly."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "By the square root of twice Kn times the current",
     "misconception": "Uses the MOSFET relation.",
     "rationale": "That is the FET formula."
    },
    {
     "id": "b",
     "text": "By the base current alone",
     "misconception": "Uses the base current.",
     "rationale": "gm is tied to the collector current."
    },
    {
     "id": "d",
     "text": "By the supply voltage",
     "misconception": "Uses the supply.",
     "rationale": "The supply does not set gm directly."
    }
   ],
   "explanation": "gm = IC/VT, a much larger gm per milliamp than a MOSFET. It depends on the DC collector current only.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-25.html",
     "label": "Lesson 25 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-25.html",
     "section": "A5"
    },
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 8 Small-signal model"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/bjt_ss.svg",
    "alt": "Hybrid-pi small-signal model of a BJT"
   }
  },
  {
   "id": "gr2-bjt2-011",
   "type": "choice",
   "topic": "BJT currents, bias and small-signal model",
   "objective": "Relate rπ to β and gm",
   "prompt": "How is the small-signal input resistance rπ of a BJT related to β and gm?",
   "answer": {
    "id": "a",
    "text": "rπ is β divided by gm"
   },
   "options": [
    {
     "id": "a",
     "text": "rπ is β divided by gm",
     "correct": true
    },
    {
     "id": "b",
     "text": "rπ is gm divided by β",
     "correct": false,
     "rationale": "That would be a conductance-like quantity."
    },
    {
     "id": "c",
     "text": "rπ equals gm",
     "correct": false,
     "rationale": "They have different units."
    },
    {
     "id": "d",
     "text": "rπ is independent of the bias point",
     "correct": false,
     "rationale": "rπ varies with the bias current through gm."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "rπ is gm divided by β",
     "misconception": "Inverts the relation.",
     "rationale": "That would be a conductance-like quantity."
    },
    {
     "id": "c",
     "text": "rπ equals gm",
     "misconception": "Equates a resistance with a conductance.",
     "rationale": "They have different units."
    },
    {
     "id": "d",
     "text": "rπ is independent of the bias point",
     "misconception": "Ignores the dependence.",
     "rationale": "rπ varies with the bias current through gm."
    }
   ],
   "explanation": "Input resistance looking into the base is rπ = vbe/ib = β/gm, unlike the FET whose gate resistance is infinite.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-25.html",
     "label": "Lesson 25 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-25.html",
     "section": "A5 Method"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/bjt_ss.svg",
    "alt": "Hybrid-pi small-signal model of a BJT"
   }
  },
  {
   "id": "gr2-bjt2-012",
   "type": "choice",
   "topic": "BJT currents, bias and small-signal model",
   "objective": "Say how the BJT small-signal model differs from the FET one",
   "prompt": "What is the key difference between the BJT and FET small-signal models at the input?",
   "answer": {
    "id": "c",
    "text": "The BJT has a finite input resistance rπ, while the FET gate draws no current (infinite input resistance)"
   },
   "options": [
    {
     "id": "a",
     "text": "The BJT has no controlled source",
     "correct": false,
     "rationale": "It has gm·vbe."
    },
    {
     "id": "b",
     "text": "The FET has a finite input resistance rπ",
     "correct": false,
     "rationale": "The FET gate current is zero."
    },
    {
     "id": "c",
     "text": "The BJT has a finite input resistance rπ, while the FET gate draws no current (infinite input resistance)",
     "correct": true
    },
    {
     "id": "d",
     "text": "There is no difference",
     "correct": false,
     "rationale": "The base current gives rπ."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The BJT has no controlled source",
     "misconception": "Wrong fact.",
     "rationale": "It has gm·vbe."
    },
    {
     "id": "b",
     "text": "The FET has a finite input resistance rπ",
     "misconception": "Swaps the devices.",
     "rationale": "The FET gate current is zero."
    },
    {
     "id": "d",
     "text": "There is no difference",
     "misconception": "Ignores the base current.",
     "rationale": "The base current gives rπ."
    }
   ],
   "explanation": "Both models have a controlled current source, but the BJT adds rπ between base and emitter.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-25.html",
     "label": "Lesson 25 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "Lesson objectives",
     "section": "Lesson 25 objectives"
    },
    {
     "file": "lesson-guides/lesson-25.html",
     "section": "A6"
    }
   ],
   "image": {
    "src": "assets/study/resources/gr2/bjt_ss.svg",
    "alt": "Hybrid-pi small-signal model of a BJT"
   }
  },
  {
   "id": "gr2-cmp2-001",
   "type": "choice",
   "topic": "BJT versus MOSFET",
   "objective": "Compare conduction mechanisms",
   "prompt": "Which pair correctly describes how the BJT and FET carry current?",
   "answer": {
    "id": "a",
    "text": "The BJT uses diffusion of injected carriers; the FET uses drift of carriers in a channel"
   },
   "options": [
    {
     "id": "a",
     "text": "The BJT uses diffusion of injected carriers; the FET uses drift of carriers in a channel",
     "correct": true
    },
    {
     "id": "b",
     "text": "The BJT uses drift; the FET uses diffusion",
     "correct": false,
     "rationale": "The roles are the other way round."
    },
    {
     "id": "c",
     "text": "Both use diffusion only",
     "correct": false,
     "rationale": "The FET current is drift in the channel."
    },
    {
     "id": "d",
     "text": "Both use drift only",
     "correct": false,
     "rationale": "The BJT current is mainly diffusion."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "The BJT uses drift; the FET uses diffusion",
     "misconception": "Swaps the mechanisms.",
     "rationale": "The roles are the other way round."
    },
    {
     "id": "c",
     "text": "Both use diffusion only",
     "misconception": "Ignores the FET channel.",
     "rationale": "The FET current is drift in the channel."
    },
    {
     "id": "d",
     "text": "Both use drift only",
     "misconception": "Ignores BJT diffusion.",
     "rationale": "The BJT current is mainly diffusion."
    }
   ],
   "explanation": "In a BJT, current is carried by minority carriers diffusing across the base; in a FET, majority carriers drift along an induced channel.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-25.html",
     "label": "Lesson 25 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "Lesson objectives",
     "section": "Lesson 25 objectives"
    },
    {
     "file": "lesson-guides/lesson-25.html",
     "section": "A6"
    },
    {
     "file": "lesson-guides/lesson-26.html",
     "section": "A5"
    }
   ]
  },
  {
   "id": "gr2-cmp2-002",
   "type": "choice",
   "topic": "BJT versus MOSFET",
   "objective": "Match terminals",
   "prompt": "Which terminal pairing between BJT and MOSFET is correct?",
   "answer": {
    "id": "c",
    "text": "Base ↔ gate, collector ↔ drain, emitter ↔ source"
   },
   "options": [
    {
     "id": "a",
     "text": "Base ↔ drain, collector ↔ gate, emitter ↔ source",
     "correct": false,
     "rationale": "The base controls like the gate."
    },
    {
     "id": "b",
     "text": "Base ↔ source, collector ↔ gate, emitter ↔ drain",
     "correct": false,
     "rationale": "The control terminals correspond."
    },
    {
     "id": "c",
     "text": "Base ↔ gate, collector ↔ drain, emitter ↔ source",
     "correct": true
    },
    {
     "id": "d",
     "text": "Base ↔ gate, collector ↔ source, emitter ↔ drain",
     "correct": false,
     "rationale": "The collector corresponds to the drain."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "Base ↔ drain, collector ↔ gate, emitter ↔ source",
     "misconception": "Mixes control and output.",
     "rationale": "The base controls like the gate."
    },
    {
     "id": "b",
     "text": "Base ↔ source, collector ↔ gate, emitter ↔ drain",
     "misconception": "Scrambles the map.",
     "rationale": "The control terminals correspond."
    },
    {
     "id": "d",
     "text": "Base ↔ gate, collector ↔ source, emitter ↔ drain",
     "misconception": "Swaps the output terminals.",
     "rationale": "The collector corresponds to the drain."
    }
   ],
   "explanation": "The base controls the device like the gate, the collector collects current like the drain, and the emitter is the common terminal like the source.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-26.html",
     "label": "Lesson 26 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-26.html",
     "section": "A5 Method"
    },
    {
     "file": "lesson-guides/lesson-25.html",
     "section": "A6"
    }
   ]
  },
  {
   "id": "gr2-cmp2-003",
   "type": "choice",
   "topic": "BJT versus MOSFET",
   "objective": "Compare temperature behavior",
   "prompt": "How does the drain or collector current typically change with rising temperature in the two devices?",
   "answer": {
    "id": "a",
    "text": "The BJT current tends to rise with temperature, while the MOSFET current tends to fall"
   },
   "options": [
    {
     "id": "a",
     "text": "The BJT current tends to rise with temperature, while the MOSFET current tends to fall",
     "correct": true
    },
    {
     "id": "b",
     "text": "Both rise",
     "correct": false,
     "rationale": "The MOSFET current tends to fall as mobility drops."
    },
    {
     "id": "c",
     "text": "Both fall",
     "correct": false,
     "rationale": "The BJT current rises with temperature."
    },
    {
     "id": "d",
     "text": "Neither depends on temperature",
     "correct": false,
     "rationale": "Both are temperature dependent."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "Both rise",
     "misconception": "Applies BJT behavior to both.",
     "rationale": "The MOSFET current tends to fall as mobility drops."
    },
    {
     "id": "c",
     "text": "Both fall",
     "misconception": "Applies FET behavior to both.",
     "rationale": "The BJT current rises with temperature."
    },
    {
     "id": "d",
     "text": "Neither depends on temperature",
     "misconception": "Ignores the effect.",
     "rationale": "Both are temperature dependent."
    }
   ],
   "explanation": "A rising BJT current can lead to even more heating (a stability concern), while the MOSFET tends to limit itself.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-25.html",
     "label": "Lesson 25 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-25.html",
     "section": "A6 Method"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 25 objectives"
    }
   ]
  },
  {
   "id": "gr2-cmp2-004",
   "type": "true-false",
   "topic": "BJT versus MOSFET",
   "objective": "Check the Early effect",
   "prompt": "True or false: the Early effect (finite output resistance from the output voltage changing the effective width) occurs in both BJTs and FETs.",
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
     "rationale": "Both devices show a slight rise in current with output voltage."
    }
   ],
   "distractors": [
    {
     "id": "false",
     "text": "False",
     "misconception": "Believes it is only a FET effect.",
     "rationale": "Both devices show a slight rise in current with output voltage."
    }
   ],
   "explanation": "The BJT version is base-width modulation and the FET version is channel-length modulation; both give a finite output resistance ro.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-25.html",
     "label": "Lesson 25 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "Lesson objectives",
     "section": "Lesson 25 objectives"
    },
    {
     "file": "lesson-guides/lesson-25.html",
     "section": "A6"
    }
   ]
  },
  {
   "id": "gr2-cmp2-005",
   "type": "choice",
   "topic": "BJT versus MOSFET",
   "objective": "Compare turn-on conditions",
   "prompt": "Which turn-on condition belongs to a BJT rather than a MOSFET?",
   "answer": {
    "id": "a",
    "text": "The base-emitter voltage reaching about 0.7 V"
   },
   "options": [
    {
     "id": "a",
     "text": "The base-emitter voltage reaching about 0.7 V",
     "correct": true
    },
    {
     "id": "b",
     "text": "The gate-source voltage exceeding Vt",
     "correct": false,
     "rationale": "That is the MOSFET threshold."
    },
    {
     "id": "c",
     "text": "The drain voltage exceeding the supply",
     "correct": false,
     "rationale": "The drain cannot exceed the supply."
    },
    {
     "id": "d",
     "text": "The source current exceeding the gate current",
     "correct": false,
     "rationale": "The gate current is zero."
    }
   ],
   "distractors": [
    {
     "id": "b",
     "text": "The gate-source voltage exceeding Vt",
     "misconception": "Gives the FET condition.",
     "rationale": "That is the MOSFET threshold."
    },
    {
     "id": "c",
     "text": "The drain voltage exceeding the supply",
     "misconception": "Invents a condition.",
     "rationale": "The drain cannot exceed the supply."
    },
    {
     "id": "d",
     "text": "The source current exceeding the gate current",
     "misconception": "Invents a condition.",
     "rationale": "The gate current is zero."
    }
   ],
   "explanation": "The BJT needs VBE of roughly 0.7 V (a forward diode); the MOSFET needs VGS above its threshold.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-25.html",
     "label": "Lesson 25 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-25.html",
     "section": "A6 Method"
    }
   ]
  },
  {
   "id": "gr2-cmp2-006",
   "type": "choice",
   "topic": "BJT versus MOSFET",
   "objective": "Identify the unipolar claim",
   "prompt": "Which statement about the FET is correct?",
   "answer": {
    "id": "c",
    "text": "It requires no DC gate current to produce a drain current"
   },
   "options": [
    {
     "id": "a",
     "text": "It requires a gate current equal to the drain current",
     "correct": false,
     "rationale": "The gate is insulated."
    },
    {
     "id": "b",
     "text": "It conducts by both electrons and holes",
     "correct": false,
     "rationale": "It is unipolar."
    },
    {
     "id": "c",
     "text": "It requires no DC gate current to produce a drain current",
     "correct": true
    },
    {
     "id": "d",
     "text": "Its emitter is the most heavily doped region",
     "correct": false,
     "rationale": "A FET has no emitter."
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "It requires a gate current equal to the drain current",
     "misconception": "Confuses the FET with the BJT.",
     "rationale": "The gate is insulated."
    },
    {
     "id": "b",
     "text": "It conducts by both electrons and holes",
     "misconception": "Calls it bipolar.",
     "rationale": "It is unipolar."
    },
    {
     "id": "d",
     "text": "Its emitter is the most heavily doped region",
     "misconception": "Uses BJT language.",
     "rationale": "A FET has no emitter."
    }
   ],
   "explanation": "The FET gate is insulated by an oxide, so no DC gate current flows. This is what gives it a very high input resistance.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-26.html",
     "label": "Lesson 26 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-26.html",
     "section": "A5"
    },
    {
     "file": "Lesson objectives",
     "section": "Lesson 25 objectives"
    }
   ]
  },
  {
   "id": "gr2-cmp2-007",
   "type": "multi-select",
   "topic": "BJT versus MOSFET",
   "objective": "Select the BJT-only facts",
   "prompt": "Which of these are true of the BJT but not of the MOSFET? Select all that apply.",
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
     "text": "The gate draws no DC current",
     "correct": false,
     "rationale": "That is the MOSFET property."
    },
    {
     "id": "b",
     "text": "A base current is required for collector current",
     "correct": true
    },
    {
     "id": "c",
     "text": "Conduction is by drift in an induced channel",
     "correct": false,
     "rationale": "That is the MOSFET mechanism."
    },
    {
     "id": "d",
     "text": "Conduction uses both electrons and holes",
     "correct": true
    },
    {
     "id": "e",
     "text": "The threshold voltage Vt sets when it turns on",
     "correct": false,
     "rationale": "The BJT turns on at about 0.7 V."
    },
    {
     "id": "f",
     "text": "The input has a finite small-signal resistance rπ",
     "correct": true
    }
   ],
   "distractors": [
    {
     "id": "a",
     "text": "The gate draws no DC current",
     "misconception": "Gives the FET property.",
     "rationale": "That is the MOSFET property."
    },
    {
     "id": "c",
     "text": "Conduction is by drift in an induced channel",
     "misconception": "Gives the FET mechanism.",
     "rationale": "That is the MOSFET mechanism."
    },
    {
     "id": "e",
     "text": "The threshold voltage Vt sets when it turns on",
     "misconception": "Gives the FET property.",
     "rationale": "The BJT turns on at about 0.7 V."
    }
   ],
   "explanation": "The BJT is bipolar, needs base current and presents an rπ at the base. The insulated oxide is also why the FET's input resistance is so large compared with the BJT's rπ.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-25.html",
     "label": "Lesson 25 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-25.html",
     "section": "A6"
    },
    {
     "file": "lesson-guides/lesson-26.html",
     "section": "A5"
    }
   ]
  },
  {
   "id": "gr2-wk-001",
   "type": "problem",
   "topic": "Partially and fully bypassed CS design",
   "objective": "Carry out the partially bypassed common-source design in order",
   "prompt": "Design a partially bypassed common-source amplifier",
   "setup": "Choose RD, RS1, RS2, RG1 and RG2 for the stage in the figure. Given: the device (Kn, Vt), the supply VDD, a target open-circuit gain magnitude, a minimum input resistance and the peak signal at the gate.",
   "image": {
    "src": "assets/study/resources/gr2/cs_partial.svg",
    "alt": "Common-source stage with gate divider RG1/RG2, drain resistor RD, source resistor split into RS1 and RS2 with a bypass capacitor across RS2, coupling capacitors and a load.",
    "caption": "Partially bypassed common-source amplifier: the capacitor bypasses RS2 only."
   },
   "steps": [
    {
     "id": "gr2-wk-001-s1",
     "prompt": "Where does the design start?",
     "brief": "Supply split in thirds, RS1 = 1/gm",
     "answer": {
      "id": "c",
      "text": "Split the supply into equal thirds across RD, the transistor and RS, and decide RS1 = 1/gm"
     },
     "options": [
      {
       "id": "a",
       "text": "Choose RG1 and RG2 first so the gate voltage is fixed",
       "correct": false,
       "rationale": "The gate voltage depends on VGS and VS, which are not known yet."
      },
      {
       "id": "b",
       "text": "Pick the largest drain current the device allows",
       "correct": false,
       "rationale": "The current comes from the gain target and the supply allocation."
      },
      {
       "id": "c",
       "text": "Split the supply into equal thirds across RD, the transistor and RS, and decide RS1 = 1/gm",
       "correct": true
      },
      {
       "id": "d",
       "text": "Use the peak input signal to size RD",
       "correct": false,
       "rationale": "The input amplitude is used only in the final swing and linearity checks."
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "Choose RG1 and RG2 first so the gate voltage is fixed",
       "misconception": "Starts at the end of the chain.",
       "rationale": "The gate voltage depends on VGS and VS, which are not known yet."
      },
      {
       "id": "b",
       "text": "Pick the largest drain current the device allows",
       "misconception": "Treats the bias current as a free choice.",
       "rationale": "The current comes from the gain target and the supply allocation."
      },
      {
       "id": "d",
       "text": "Use the peak input signal to size RD",
       "misconception": "Mixes signal size with bias design.",
       "rationale": "The input amplitude is used only in the final swing and linearity checks."
      }
     ],
     "explanation": "The thirds rule gives RD, the transistor and RS a known voltage each, and RS1 = 1/gm fixes how the gain depends on gm. Everything else follows from those two choices."
    },
    {
     "id": "gr2-wk-001-s2",
     "prompt": "What fixes the DC drain current?",
     "brief": "ID set by the gain target",
     "answer": {
      "id": "d",
      "text": "The gain requirement: the gain depends on gm, which depends on the current, so the target gain determines ID"
     },
     "options": [
      {
       "id": "a",
       "text": "The supply voltage divided by the total resistance",
       "correct": false,
       "rationale": "The transistor current follows its own law and the gain relation, not Ohm's law for the whole string."
      },
      {
       "id": "b",
       "text": "The input-resistance requirement",
       "correct": false,
       "rationale": "Input resistance only sets how the gate divider is chosen."
      },
      {
       "id": "c",
       "text": "The source resistance RS, chosen first",
       "correct": false,
       "rationale": "RS cannot be found until the current is known; it comes from the allocated voltage over the current."
      },
      {
       "id": "d",
       "text": "The gain requirement: the gain depends on gm, which depends on the current, so the target gain determines ID",
       "correct": true
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "The supply voltage divided by the total resistance",
       "misconception": "Treats the transistor like a resistor in a series path.",
       "rationale": "The transistor current follows its own law and the gain relation, not Ohm's law for the whole string."
      },
      {
       "id": "b",
       "text": "The input-resistance requirement",
       "misconception": "Confuses the bias current with the input network.",
       "rationale": "Input resistance only sets how the gate divider is chosen."
      },
      {
       "id": "c",
       "text": "The source resistance RS, chosen first",
       "misconception": "Works in a circular order.",
       "rationale": "RS cannot be found until the current is known; it comes from the allocated voltage over the current."
      }
     ],
     "explanation": "With RS1 = 1/gm the gain is about gm·RD/2, and with a fixed voltage across RD that ties the gain target directly to the drain current."
    },
    {
     "id": "gr2-wk-001-s3",
     "prompt": "How are RD and RS found?",
     "brief": "RD and RS from one third of VDD",
     "answer": {
      "id": "a",
      "text": "Each drops one third of VDD at that current, so each equals that voltage divided by the drain current"
     },
     "options": [
      {
       "id": "a",
       "text": "Each drops one third of VDD at that current, so each equals that voltage divided by the drain current",
       "correct": true
      },
      {
       "id": "b",
       "text": "RD from the gain and RS from the input resistance",
       "correct": false,
       "rationale": "Both resistors are set by the allocated voltage and the DC current."
      },
      {
       "id": "c",
       "text": "RD equal to RG1 in parallel with RG2",
       "correct": false,
       "rationale": "The gate divider sets the gate voltage and Rin, not RD."
      },
      {
       "id": "d",
       "text": "RS equal to 1/gm",
       "correct": false,
       "rationale": "Only the unbypassed part RS1 is set to 1/gm; RS comes from its voltage and the current."
      }
     ],
     "distractors": [
      {
       "id": "b",
       "text": "RD from the gain and RS from the input resistance",
       "misconception": "Assigns each resistor to the wrong requirement.",
       "rationale": "Both resistors are set by the allocated voltage and the DC current."
      },
      {
       "id": "c",
       "text": "RD equal to RG1 in parallel with RG2",
       "misconception": "Mixes the output and the gate network.",
       "rationale": "The gate divider sets the gate voltage and Rin, not RD."
      },
      {
       "id": "d",
       "text": "RS equal to 1/gm",
       "misconception": "Confuses RS with its unbypassed part.",
       "rationale": "Only the unbypassed part RS1 is set to 1/gm; RS comes from its voltage and the current."
      }
     ],
     "explanation": "Ohm's law on each resistor with its allocated voltage and the DC drain current gives RD and RS."
    },
    {
     "id": "gr2-wk-001-s4",
     "prompt": "How do you finish the source network?",
     "brief": "RS1 = 1/gm, RS2 is the rest",
     "answer": {
      "id": "b",
      "text": "Find gm from the overdrive voltage, set RS1 = 1/gm, and let RS2 be what remains of RS"
     },
     "options": [
      {
       "id": "a",
       "text": "Set RS2 = 1/gm and make RS1 the remainder",
       "correct": false,
       "rationale": "The capacitor shorts RS2, so the part left in the signal path, RS1, is the one set to 1/gm."
      },
      {
       "id": "b",
       "text": "Find gm from the overdrive voltage, set RS1 = 1/gm, and let RS2 be what remains of RS",
       "correct": true
      },
      {
       "id": "c",
       "text": "Make RS1 and RS2 equal",
       "correct": false,
       "rationale": "The split is not arbitrary: RS1 sets the gain relation."
      },
      {
       "id": "d",
       "text": "Set RS1 equal to RD",
       "correct": false,
       "rationale": "The two resistors have different jobs; RD sets the output voltage drop."
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "Set RS2 = 1/gm and make RS1 the remainder",
       "misconception": "Swaps the two parts.",
       "rationale": "The capacitor shorts RS2, so the part left in the signal path, RS1, is the one set to 1/gm."
      },
      {
       "id": "c",
       "text": "Make RS1 and RS2 equal",
       "misconception": "Picks a convenient split.",
       "rationale": "The split is not arbitrary: RS1 sets the gain relation."
      },
      {
       "id": "d",
       "text": "Set RS1 equal to RD",
       "misconception": "Mixes drain and source resistors.",
       "rationale": "The two resistors have different jobs; RD sets the output voltage drop."
      }
     ],
     "explanation": "RS1 stays in the signal path and sets how the gain depends on gm; RS2 only completes the DC resistance RS and is bypassed for the signal."
    },
    {
     "id": "gr2-wk-001-s5",
     "prompt": "How is the gate network designed?",
     "brief": "VG = VGS + VS, divider for VG and Rin",
     "answer": {
      "id": "c",
      "text": "Find VGS = VOV + Vt, then VG = VGS + VS; choose RG1 and RG2 to give that VG while keeping their parallel resistance above the input requirement"
     },
     "options": [
      {
       "id": "a",
       "text": "VG equals VGS because the source is at ground",
       "correct": false,
       "rationale": "With a source resistor the source sits above ground, so VG = VGS + VS."
      },
      {
       "id": "b",
       "text": "Choose RG1 = RG2 so the gate sits at half the supply",
       "correct": false,
       "rationale": "The ratio must produce the required VG, which is generally not half the supply."
      },
      {
       "id": "c",
       "text": "Find VGS = VOV + Vt, then VG = VGS + VS; choose RG1 and RG2 to give that VG while keeping their parallel resistance above the input requirement",
       "correct": true
      },
      {
       "id": "d",
       "text": "Choose the divider to meet the input resistance only; VG follows",
       "correct": false,
       "rationale": "Both conditions apply: the right VG and a large enough parallel resistance."
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "VG equals VGS because the source is at ground",
       "misconception": "Forgets the DC voltage across RS.",
       "rationale": "With a source resistor the source sits above ground, so VG = VGS + VS."
      },
      {
       "id": "b",
       "text": "Choose RG1 = RG2 so the gate sits at half the supply",
       "misconception": "Picks a convenient ratio.",
       "rationale": "The ratio must produce the required VG, which is generally not half the supply."
      },
      {
       "id": "d",
       "text": "Choose the divider to meet the input resistance only; VG follows",
       "misconception": "Ignores the bias requirement.",
       "rationale": "Both conditions apply: the right VG and a large enough parallel resistance."
      }
     ],
     "explanation": "The divider has two jobs, setting VG and keeping Rin large. No gate current flows, so the divider is unloaded by the transistor."
    },
    {
     "id": "gr2-wk-001-s6",
     "prompt": "What must still be checked?",
     "brief": "Swing and linearity checked",
     "answer": {
      "id": "d",
      "text": "That the drain swing stays in saturation, and that the gate-source signal (reduced by RS1) is small compared with the overdrive voltage"
     },
     "options": [
      {
       "id": "a",
       "text": "Only that the gain equals the target",
       "correct": false,
       "rationale": "A correct gain with a clipped swing or a nonlinear signal is still a failed design."
      },
      {
       "id": "b",
       "text": "That the bypass capacitor is large enough, and nothing else",
       "correct": false,
       "rationale": "The capacitor matters, but the design checks are the swing and the linearity."
      },
      {
       "id": "c",
       "text": "That the supply is much larger than the input peak",
       "correct": false,
       "rationale": "The checks compare the swing with the saturation limits and vgs with VOV."
      },
      {
       "id": "d",
       "text": "That the drain swing stays in saturation, and that the gate-source signal (reduced by RS1) is small compared with the overdrive voltage",
       "correct": true
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "Only that the gain equals the target",
       "misconception": "Treats gain as the only requirement.",
       "rationale": "A correct gain with a clipped swing or a nonlinear signal is still a failed design."
      },
      {
       "id": "b",
       "text": "That the bypass capacitor is large enough, and nothing else",
       "misconception": "Focuses on a component detail.",
       "rationale": "The capacitor matters, but the design checks are the swing and the linearity."
      },
      {
       "id": "c",
       "text": "That the supply is much larger than the input peak",
       "misconception": "Invents a supply rule.",
       "rationale": "The checks compare the swing with the saturation limits and vgs with VOV."
      }
     ],
     "explanation": "Headroom and legroom confirm the output stays in saturation; the linearity test confirms the small-signal model applies."
    }
   ],
   "answer": {
    "text": "Allocate the supply, set the current from the gain, size RD and RS from the thirds, split RS using 1/gm, bias the gate for VG and Rin, then check swing and linearity."
   },
   "distractors": [],
   "explanation": "Allocate the supply, set the current from the gain, size RD and RS from the thirds, split RS using 1/gm, bias the gate for VG and Rin, then check swing and linearity.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-18.html",
     "label": "Lesson 18 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    },
    {
     "type": "link",
     "href": "lesson-guides/lesson-26.html",
     "label": "Lesson 26 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-18.html",
     "section": "A6"
    },
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 4"
    },
    {
     "file": "lesson-guides/lesson-26.html",
     "section": "A1"
    }
   ]
  },
  {
   "id": "gr2-wk-002",
   "type": "problem",
   "topic": "Common-drain design",
   "objective": "Carry out the source-follower design in order",
   "prompt": "Design a source follower to drive a load",
   "setup": "The follower in the figure must deliver a given peak-to-peak output into the load RL. Given: VDD, the device, RL, the output swing and an input-resistance requirement.",
   "image": {
    "src": "assets/study/resources/gr2/cd_stage.svg",
    "alt": "Common-drain stage: gate divider RG1/RG2, drain at VDD, source resistor RS, coupling capacitors and a load RL.",
    "caption": "Source follower with a coupling capacitor to the load."
   },
   "steps": [
    {
     "id": "gr2-wk-002-s1",
     "prompt": "What do you settle first?",
     "brief": "Input swing and source bias near VDD/2",
     "answer": {
      "id": "d",
      "text": "The input swing needed (the gain is a little below 1) and a DC source-terminal voltage near half the supply"
     },
     "options": [
      {
       "id": "a",
       "text": "The gate divider, because it sets everything",
       "correct": false,
       "rationale": "The divider can only be designed once VG is known, which comes last."
      },
      {
       "id": "b",
       "text": "A drain resistor RD for gain",
       "correct": false,
       "rationale": "A follower has no drain resistor in the signal path; it is not a gain stage."
      },
      {
       "id": "c",
       "text": "The gain, by making gm·RS very large",
       "correct": false,
       "rationale": "The gain is a result of the bias, not a first design choice."
      },
      {
       "id": "d",
       "text": "The input swing needed (the gain is a little below 1) and a DC source-terminal voltage near half the supply",
       "correct": true
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "The gate divider, because it sets everything",
       "misconception": "Starts at the end of the chain.",
       "rationale": "The divider can only be designed once VG is known, which comes last."
      },
      {
       "id": "b",
       "text": "A drain resistor RD for gain",
       "misconception": "Applies the common-source recipe.",
       "rationale": "A follower has no drain resistor in the signal path; it is not a gain stage."
      },
      {
       "id": "c",
       "text": "The gain, by making gm·RS very large",
       "misconception": "Aims for unity gain first.",
       "rationale": "The gain is a result of the bias, not a first design choice."
      }
     ],
     "explanation": "The follower's gain is below 1, so the input must be a bit larger than the output, and centering the source voltage gives symmetric swing room."
    },
    {
     "id": "gr2-wk-002-s2",
     "prompt": "Which quantity then drives the design?",
     "brief": "Peak load current from the output peak",
     "answer": {
      "id": "a",
      "text": "The peak load current: the peak output voltage divided by RL"
     },
     "options": [
      {
       "id": "a",
       "text": "The peak load current: the peak output voltage divided by RL",
       "correct": true
      },
      {
       "id": "b",
       "text": "The peak-to-peak output voltage divided by RL",
       "correct": false,
       "rationale": "The peak load current uses the peak value, half of the peak-to-peak swing."
      },
      {
       "id": "c",
       "text": "The DC supply voltage divided by RL",
       "correct": false,
       "rationale": "The load is ac coupled and carries only the signal."
      },
      {
       "id": "d",
       "text": "The input signal divided by Ri",
       "correct": false,
       "rationale": "The load current comes from the output voltage and RL."
      }
     ],
     "distractors": [
      {
       "id": "b",
       "text": "The peak-to-peak output voltage divided by RL",
       "misconception": "Uses peak-to-peak instead of peak.",
       "rationale": "The peak load current uses the peak value, half of the peak-to-peak swing."
      },
      {
       "id": "c",
       "text": "The DC supply voltage divided by RL",
       "misconception": "Uses a DC quantity.",
       "rationale": "The load is ac coupled and carries only the signal."
      },
      {
       "id": "d",
       "text": "The input signal divided by Ri",
       "misconception": "Uses the input side.",
       "rationale": "The load current comes from the output voltage and RL."
      }
     ],
     "explanation": "The load takes a current that follows the output waveform; its peak value sets how much extra current RS must handle."
    },
    {
     "id": "gr2-wk-002-s3",
     "prompt": "Which moment in the output cycle sets RS?",
     "brief": "Worst case at the negative peak",
     "answer": {
      "id": "b",
      "text": "The negative output peak, where RS carries the drain current plus the load current"
     },
     "options": [
      {
       "id": "a",
       "text": "The positive output peak",
       "correct": false,
       "rationale": "At the positive peak the load draws current away from the source node, so RS carries less."
      },
      {
       "id": "b",
       "text": "The negative output peak, where RS carries the drain current plus the load current",
       "correct": true
      },
      {
       "id": "c",
       "text": "The instant the signal crosses zero",
       "correct": false,
       "rationale": "The extreme case occurs at the peaks, not at rest."
      },
      {
       "id": "d",
       "text": "Whenever the load is disconnected",
       "correct": false,
       "rationale": "Without a load there is no extra current to account for."
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "The positive output peak",
       "misconception": "Picks the wrong half cycle.",
       "rationale": "At the positive peak the load draws current away from the source node, so RS carries less."
      },
      {
       "id": "c",
       "text": "The instant the signal crosses zero",
       "misconception": "Looks only at the quiescent point.",
       "rationale": "The extreme case occurs at the peaks, not at rest."
      },
      {
       "id": "d",
       "text": "Whenever the load is disconnected",
       "misconception": "Removes the load effect.",
       "rationale": "Without a load there is no extra current to account for."
      }
     ],
     "explanation": "At the negative peak the load pushes current back into the source node, so RS must carry ID,min plus the peak load current."
    },
    {
     "id": "gr2-wk-002-s4",
     "prompt": "How is RS found?",
     "brief": "RS from the worst-case voltage and current",
     "answer": {
      "id": "c",
      "text": "The smallest RS voltage over the largest RS current (ID,min plus the peak load current), then a standard value"
     },
     "options": [
      {
       "id": "a",
       "text": "The DC source voltage divided by the DC drain current only",
       "correct": false,
       "rationale": "That would size RS for the quiescent case and give far too little drive."
      },
      {
       "id": "b",
       "text": "RL in parallel with 1/gm",
       "correct": false,
       "rationale": "That expression describes Ro, not the bias resistor."
      },
      {
       "id": "c",
       "text": "The smallest RS voltage over the largest RS current (ID,min plus the peak load current), then a standard value",
       "correct": true
      },
      {
       "id": "d",
       "text": "VDD divided by the peak load current",
       "correct": false,
       "rationale": "The relevant voltage is the lowest voltage across RS, near the negative peak."
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "The DC source voltage divided by the DC drain current only",
       "misconception": "Ignores the load current.",
       "rationale": "That would size RS for the quiescent case and give far too little drive."
      },
      {
       "id": "b",
       "text": "RL in parallel with 1/gm",
       "misconception": "Uses the output-resistance expression.",
       "rationale": "That expression describes Ro, not the bias resistor."
      },
      {
       "id": "d",
       "text": "VDD divided by the peak load current",
       "misconception": "Uses the wrong voltage.",
       "rationale": "The relevant voltage is the lowest voltage across RS, near the negative peak."
      }
     ],
     "explanation": "Ohm's law at the worst case: the lowest voltage across RS divided by the highest current through it."
    },
    {
     "id": "gr2-wk-002-s5",
     "prompt": "Then the DC bias?",
     "brief": "ID, VOV, VGS and VG from RS",
     "answer": {
      "id": "d",
      "text": "The DC drain current equals the DC source voltage over RS; the overdrive follows from that current; then VGS and VG"
     },
     "options": [
      {
       "id": "a",
       "text": "The drain current from the gain target, as in the CS design",
       "correct": false,
       "rationale": "The follower is designed from the load and swing, not from a gain target."
      },
      {
       "id": "b",
       "text": "VG equals VGS because the source is grounded",
       "correct": false,
       "rationale": "The source sits near half the supply, so VG = VGS plus that voltage."
      },
      {
       "id": "c",
       "text": "The drain current equals the peak load current",
       "correct": false,
       "rationale": "The quiescent current is set by the source voltage and RS."
      },
      {
       "id": "d",
       "text": "The DC drain current equals the DC source voltage over RS; the overdrive follows from that current; then VGS and VG",
       "correct": true
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "The drain current from the gain target, as in the CS design",
       "misconception": "Applies the common-source recipe.",
       "rationale": "The follower is designed from the load and swing, not from a gain target."
      },
      {
       "id": "b",
       "text": "VG equals VGS because the source is grounded",
       "misconception": "Forgets the source is above ground.",
       "rationale": "The source sits near half the supply, so VG = VGS plus that voltage."
      },
      {
       "id": "c",
       "text": "The drain current equals the peak load current",
       "misconception": "Equates a bias value with a signal peak.",
       "rationale": "The quiescent current is set by the source voltage and RS."
      }
     ],
     "explanation": "With RS fixed, the DC current is VS/RS. The device equation then gives the overdrive and VGS, and VG is VGS plus VS."
    },
    {
     "id": "gr2-wk-002-s6",
     "prompt": "What finishes the design?",
     "brief": "Gate divider and simulation checks",
     "answer": {
      "id": "a",
      "text": "The gate divider for VG and Rin, then a check: no cutoff at the negative peak, still saturated at the positive peak, and the gain close to the estimate"
     },
     "options": [
      {
       "id": "a",
       "text": "The gate divider for VG and Rin, then a check: no cutoff at the negative peak, still saturated at the positive peak, and the gain close to the estimate",
       "correct": true
      },
      {
       "id": "b",
       "text": "Nothing: the design is complete once RS is chosen",
       "correct": false,
       "rationale": "The gate must be biased and the swing verified."
      },
      {
       "id": "c",
       "text": "Only a check that the gain equals 1",
       "correct": false,
       "rationale": "The follower's gain is a little below 1; the swing checks matter more."
      },
      {
       "id": "d",
       "text": "Adding a drain resistor to improve the gain",
       "correct": false,
       "rationale": "That would change the stage into something else."
      }
     ],
     "distractors": [
      {
       "id": "b",
       "text": "Nothing: the design is complete once RS is chosen",
       "misconception": "Stops before the gate network.",
       "rationale": "The gate must be biased and the swing verified."
      },
      {
       "id": "c",
       "text": "Only a check that the gain equals 1",
       "misconception": "Expects unity gain.",
       "rationale": "The follower's gain is a little below 1; the swing checks matter more."
      },
      {
       "id": "d",
       "text": "Adding a drain resistor to improve the gain",
       "misconception": "Applies the CS recipe again.",
       "rationale": "That would change the stage into something else."
      }
     ],
     "explanation": "The divider sets VG and Rin; the checks confirm both ends of the swing and the gain."
    }
   ],
   "answer": {
    "text": "Estimate the input swing and bias the source near mid-supply, use the peak load current, size RS at the negative-peak worst case, set the DC bias, then design the gate divider and verify."
   },
   "distractors": [],
   "explanation": "Estimate the input swing and bias the source near mid-supply, use the peak load current, size RS at the negative-peak worst case, set the DC bias, then design the gate divider and verify.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-19.html",
     "label": "Lesson 19 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    },
    {
     "type": "link",
     "href": "lesson-guides/lesson-21.html",
     "label": "Lesson 21 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-19.html",
     "section": "A3"
    },
    {
     "file": "lesson-guides/lesson-21.html",
     "section": "A1"
    },
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 5"
    }
   ]
  },
  {
   "id": "gr2-wk-003",
   "type": "problem",
   "topic": "DC operating point and region checks",
   "objective": "Find a MOSFET operating point with a source resistor",
   "prompt": "Find the DC operating point with a source resistor",
   "setup": "For the circuit in the figure, find the DC drain current and decide the operating region. Given: VDD, RG1, RG2, RD, RS, Kn and Vt.",
   "image": {
    "src": "assets/study/resources/gr2/cs_dc_bias.svg",
    "alt": "DC circuit: gate divider RG1/RG2, drain resistor RD from VDD, source resistor RS to ground.",
    "caption": "DC bias circuit of an NMOS stage with a source resistor."
   },
   "steps": [
    {
     "id": "gr2-wk-003-s1",
     "prompt": "What is the first move?",
     "brief": "Assume saturation",
     "answer": {
      "id": "a",
      "text": "Assume a region (saturation) and write the DC equations for it"
     },
     "options": [
      {
       "id": "a",
       "text": "Assume a region (saturation) and write the DC equations for it",
       "correct": true
      },
      {
       "id": "b",
       "text": "Use the triode equation first because it is more general",
       "correct": false,
       "rationale": "Saturation is the usual starting assumption and is checked afterwards."
      },
      {
       "id": "c",
       "text": "Find the small-signal gain first",
       "correct": false,
       "rationale": "The gain needs the bias point, which is what we are finding."
      },
      {
       "id": "d",
       "text": "Check VDS against VOV before doing anything",
       "correct": false,
       "rationale": "The check uses voltages that only exist after the analysis."
      }
     ],
     "distractors": [
      {
       "id": "b",
       "text": "Use the triode equation first because it is more general",
       "misconception": "Chooses the complicated model.",
       "rationale": "Saturation is the usual starting assumption and is checked afterwards."
      },
      {
       "id": "c",
       "text": "Find the small-signal gain first",
       "misconception": "Mixes DC and signal analysis.",
       "rationale": "The gain needs the bias point, which is what we are finding."
      },
      {
       "id": "d",
       "text": "Check VDS against VOV before doing anything",
       "misconception": "Tests before solving.",
       "rationale": "The check uses voltages that only exist after the analysis."
      }
     ],
     "explanation": "The equations depend on the region, so assume one, solve, and then confirm. That is the assume, analyze, confirm method."
    },
    {
     "id": "gr2-wk-003-s2",
     "prompt": "How is the gate voltage obtained?",
     "brief": "VG from the divider",
     "answer": {
      "id": "b",
      "text": "From the RG1–RG2 divider, since the gate draws no current"
     },
     "options": [
      {
       "id": "a",
       "text": "From VDD minus the drop across RD",
       "correct": false,
       "rationale": "The gate is connected to the divider, not to RD."
      },
      {
       "id": "b",
       "text": "From the RG1–RG2 divider, since the gate draws no current",
       "correct": true
      },
      {
       "id": "c",
       "text": "It equals VGS",
       "correct": false,
       "rationale": "VG is measured to ground; VGS is measured to the source, which is above ground."
      },
      {
       "id": "d",
       "text": "It equals the threshold voltage",
       "correct": false,
       "rationale": "The gate voltage is set by the divider, whatever Vt is."
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "From VDD minus the drop across RD",
       "misconception": "Uses the drain side.",
       "rationale": "The gate is connected to the divider, not to RD."
      },
      {
       "id": "c",
       "text": "It equals VGS",
       "misconception": "Confuses VG with the gate-source voltage.",
       "rationale": "VG is measured to ground; VGS is measured to the source, which is above ground."
      },
      {
       "id": "d",
       "text": "It equals the threshold voltage",
       "misconception": "Assumes the gate sits at Vt.",
       "rationale": "The gate voltage is set by the divider, whatever Vt is."
      }
     ],
     "explanation": "No gate current means the divider is unloaded, so VG = VDD·RG2/(RG1+RG2)."
    },
    {
     "id": "gr2-wk-003-s3",
     "prompt": "How does the source resistor enter?",
     "brief": "VGS = VG − ID·RS",
     "answer": {
      "id": "c",
      "text": "VGS = VG − ID·RS, so the gate-source voltage depends on the drain current"
     },
     "options": [
      {
       "id": "a",
       "text": "VGS = VG because the source is grounded",
       "correct": false,
       "rationale": "With RS the source voltage is ID·RS, not zero."
      },
      {
       "id": "b",
       "text": "VGS = VDD − ID·RD",
       "correct": false,
       "rationale": "VGS is between gate and source; RD is on the drain side."
      },
      {
       "id": "c",
       "text": "VGS = VG − ID·RS, so the gate-source voltage depends on the drain current",
       "correct": true
      },
      {
       "id": "d",
       "text": "RS simply adds to the gate divider",
       "correct": false,
       "rationale": "RS carries the drain current and sets the source voltage."
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "VGS = VG because the source is grounded",
       "misconception": "Ignores RS.",
       "rationale": "With RS the source voltage is ID·RS, not zero."
      },
      {
       "id": "b",
       "text": "VGS = VDD − ID·RD",
       "misconception": "Uses the drain network.",
       "rationale": "VGS is between gate and source; RD is on the drain side."
      },
      {
       "id": "d",
       "text": "RS simply adds to the gate divider",
       "misconception": "Treats RS as part of the divider.",
       "rationale": "RS carries the drain current and sets the source voltage."
      }
     ],
     "explanation": "The source sits at ID·RS above ground, so any change in the current changes VGS. This is the feedback."
    },
    {
     "id": "gr2-wk-003-s4",
     "prompt": "What equation results, and what do you do?",
     "brief": "Quadratic in ID",
     "answer": {
      "id": "d",
      "text": "Substituting into the square law gives a quadratic in ID; solve it"
     },
     "options": [
      {
       "id": "a",
       "text": "A linear equation in ID",
       "correct": false,
       "rationale": "The square law makes ID appear squared once VGS depends on ID."
      },
      {
       "id": "b",
       "text": "An equation to iterate with the Shockley diode equation",
       "correct": false,
       "rationale": "The transistor follows the MOSFET square law, not the diode equation."
      },
      {
       "id": "c",
       "text": "Neglect RS and use VGS = VG",
       "correct": false,
       "rationale": "That would remove the very effect the circuit has."
      },
      {
       "id": "d",
       "text": "Substituting into the square law gives a quadratic in ID; solve it",
       "correct": true
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "A linear equation in ID",
       "misconception": "Overlooks the square law.",
       "rationale": "The square law makes ID appear squared once VGS depends on ID."
      },
      {
       "id": "b",
       "text": "An equation to iterate with the Shockley diode equation",
       "misconception": "Imports a diode method.",
       "rationale": "The transistor follows the MOSFET square law, not the diode equation."
      },
      {
       "id": "c",
       "text": "Neglect RS and use VGS = VG",
       "misconception": "Drops the key element.",
       "rationale": "That would remove the very effect the circuit has."
      }
     ],
     "explanation": "Writing ID = ½Kn(VG − ID·RS − Vt)² and expanding gives a quadratic. Use consistent units."
    },
    {
     "id": "gr2-wk-003-s5",
     "prompt": "Which root do you keep?",
     "brief": "The root with VGS above Vt",
     "answer": {
      "id": "a",
      "text": "The one for which VGS is above the threshold voltage (the other implies the device is off)"
     },
     "options": [
      {
       "id": "a",
       "text": "The one for which VGS is above the threshold voltage (the other implies the device is off)",
       "correct": true
      },
      {
       "id": "b",
       "text": "Always the larger root",
       "correct": false,
       "rationale": "The larger root can correspond to VGS below Vt."
      },
      {
       "id": "c",
       "text": "Always the smaller root",
       "correct": false,
       "rationale": "Sometimes the smaller root is the inconsistent one."
      },
      {
       "id": "d",
       "text": "The average of the two roots",
       "correct": false,
       "rationale": "Only one root matches the physical circuit."
      }
     ],
     "distractors": [
      {
       "id": "b",
       "text": "Always the larger root",
       "misconception": "Uses a fixed rule.",
       "rationale": "The larger root can correspond to VGS below Vt."
      },
      {
       "id": "c",
       "text": "Always the smaller root",
       "misconception": "Uses a fixed rule.",
       "rationale": "Sometimes the smaller root is the inconsistent one."
      },
      {
       "id": "d",
       "text": "The average of the two roots",
       "misconception": "Combines the roots.",
       "rationale": "Only one root matches the physical circuit."
      }
     ],
     "explanation": "Substitute each root back: the valid one gives VGS > Vt and a saturated device."
    },
    {
     "id": "gr2-wk-003-s6",
     "prompt": "What confirms the result?",
     "brief": "VDS ≥ VOV, else triode",
     "answer": {
      "id": "b",
      "text": "Find VD, VS and VDS from the current, then check VDS ≥ VOV; if it fails, redo the analysis in triode"
     },
     "options": [
      {
       "id": "a",
       "text": "Check that VGS is smaller than VDS",
       "correct": false,
       "rationale": "Saturation compares VDS with the overdrive voltage VOV = VGS − Vt."
      },
      {
       "id": "b",
       "text": "Find VD, VS and VDS from the current, then check VDS ≥ VOV; if it fails, redo the analysis in triode",
       "correct": true
      },
      {
       "id": "c",
       "text": "Check that ID equals IS",
       "correct": false,
       "rationale": "The drain and source currents are equal anyway."
      },
      {
       "id": "d",
       "text": "Check that VD equals VG",
       "correct": false,
       "rationale": "There is no such requirement."
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "Check that VGS is smaller than VDS",
       "misconception": "Compares the wrong pair.",
       "rationale": "Saturation compares VDS with the overdrive voltage VOV = VGS − Vt."
      },
      {
       "id": "c",
       "text": "Check that ID equals IS",
       "misconception": "Checks something always true.",
       "rationale": "The drain and source currents are equal anyway."
      },
      {
       "id": "d",
       "text": "Check that VD equals VG",
       "misconception": "Invents a condition.",
       "rationale": "There is no such requirement."
      }
     ],
     "explanation": "Saturation requires VDS ≥ VOV. If it is not met, the assumed region was wrong and the triode equation applies."
    }
   ],
   "answer": {
    "text": "Assume saturation, get VG from the divider, write VGS = VG − ID·RS, solve the resulting quadratic, keep the root with VGS > Vt, and confirm VDS ≥ VOV."
   },
   "distractors": [],
   "explanation": "Assume saturation, get VG from the divider, write VGS = VG − ID·RS, solve the resulting quadratic, keep the root with VGS > Vt, and confirm VDS ≥ VOV.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-21.html",
     "label": "Lesson 21 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    },
    {
     "type": "link",
     "href": "lesson-guides/lesson-26.html",
     "label": "Lesson 26 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-21.html",
     "section": "A3"
    },
    {
     "file": "lesson-guides/lesson-21.html",
     "section": "A4"
    },
    {
     "file": "lesson-guides/lesson-26.html",
     "section": "A3"
    }
   ]
  },
  {
   "id": "gr2-wk-004",
   "type": "problem",
   "topic": "Multi-stage amplifier planning",
   "objective": "Find the gain of a cascade including loading",
   "prompt": "Gain of a two-stage amplifier from the source to the load",
   "setup": "Each stage in the figure is described by its input resistance, open-circuit gain and output resistance. Find the overall voltage gain from the source voltage VS to the load voltage vo.",
   "image": {
    "src": "assets/study/resources/gr2/cascade.svg",
    "alt": "Two stages drawn as two-port models: Ri1, Avo1·vi1, Ro1 then Ri2, Avo2·vi2, Ro2, with a source resistance RS and load RL.",
    "caption": "Source, two cascaded two-port stages and a load."
   },
   "steps": [
    {
     "id": "gr2-wk-004-s1",
     "prompt": "How do you treat each stage?",
     "brief": "Each stage as a two-port",
     "answer": {
      "id": "b",
      "text": "As a two-port: an input resistance, a controlled source Avo·vi and a series output resistance"
     },
     "options": [
      {
       "id": "a",
       "text": "As a transistor with its own bias network",
       "correct": false,
       "rationale": "The two-port model summarizes the stage from the outside."
      },
      {
       "id": "b",
       "text": "As a two-port: an input resistance, a controlled source Avo·vi and a series output resistance",
       "correct": true
      },
      {
       "id": "c",
       "text": "As an ideal voltage source of value Avo·vi",
       "correct": false,
       "rationale": "The resistances create the loading dividers."
      },
      {
       "id": "d",
       "text": "By its open-circuit gain only",
       "correct": false,
       "rationale": "Gain alone ignores how the stages load each other."
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "As a transistor with its own bias network",
       "misconception": "Looks inside the stage.",
       "rationale": "The two-port model summarizes the stage from the outside."
      },
      {
       "id": "c",
       "text": "As an ideal voltage source of value Avo·vi",
       "misconception": "Drops the resistances.",
       "rationale": "The resistances create the loading dividers."
      },
      {
       "id": "d",
       "text": "By its open-circuit gain only",
       "misconception": "Drops Ri and Ro.",
       "rationale": "Gain alone ignores how the stages load each other."
      }
     ],
     "explanation": "The two-port model captures what a neighbor stage sees (Ri) and what it drives with (Avo·vi behind Ro)."
    },
    {
     "id": "gr2-wk-004-s2",
     "prompt": "What loads stage 1?",
     "brief": "Ro1 against Ri2",
     "answer": {
      "id": "c",
      "text": "Stage 2's input resistance Ri2, in a divider with stage 1's output resistance Ro1"
     },
     "options": [
      {
       "id": "a",
       "text": "The load RL directly",
       "correct": false,
       "rationale": "Stage 1 drives stage 2, not the final load."
      },
      {
       "id": "b",
       "text": "Stage 1's own input resistance Ri1",
       "correct": false,
       "rationale": "Ri1 is at the input of stage 1."
      },
      {
       "id": "c",
       "text": "Stage 2's input resistance Ri2, in a divider with stage 1's output resistance Ro1",
       "correct": true
      },
      {
       "id": "d",
       "text": "The source resistance RS",
       "correct": false,
       "rationale": "RS is at the front end and faces Ri1."
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "The load RL directly",
       "misconception": "Skips the interstage connection.",
       "rationale": "Stage 1 drives stage 2, not the final load."
      },
      {
       "id": "b",
       "text": "Stage 1's own input resistance Ri1",
       "misconception": "Uses the wrong side.",
       "rationale": "Ri1 is at the input of stage 1."
      },
      {
       "id": "d",
       "text": "The source resistance RS",
       "misconception": "Mixes up input and output.",
       "rationale": "RS is at the front end and faces Ri1."
      }
     ],
     "explanation": "Stage 1 looks like Avo1·vi1 behind Ro1, and stage 2 appears as Ri2, so the divider is Ri2/(Ri2+Ro1)."
    },
    {
     "id": "gr2-wk-004-s3",
     "prompt": "What loads stage 2?",
     "brief": "Ro2 against RL",
     "answer": {
      "id": "d",
      "text": "The load RL, in a divider with stage 2's output resistance Ro2"
     },
     "options": [
      {
       "id": "a",
       "text": "Stage 1's output resistance",
       "correct": false,
       "rationale": "Signal flows forward; stage 2 is loaded by what follows it."
      },
      {
       "id": "b",
       "text": "Stage 2's input resistance",
       "correct": false,
       "rationale": "Ri2 loads stage 1, not stage 2."
      },
      {
       "id": "c",
       "text": "Nothing: the last stage is unloaded",
       "correct": false,
       "rationale": "The load always forms a divider with the output resistance."
      },
      {
       "id": "d",
       "text": "The load RL, in a divider with stage 2's output resistance Ro2",
       "correct": true
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "Stage 1's output resistance",
       "misconception": "Looks backward.",
       "rationale": "Signal flows forward; stage 2 is loaded by what follows it."
      },
      {
       "id": "b",
       "text": "Stage 2's input resistance",
       "misconception": "Confuses input and output.",
       "rationale": "Ri2 loads stage 1, not stage 2."
      },
      {
       "id": "c",
       "text": "Nothing: the last stage is unloaded",
       "misconception": "Ignores RL.",
       "rationale": "The load always forms a divider with the output resistance."
      }
     ],
     "explanation": "The divider RL/(RL+Ro2) reduces the voltage reaching the load."
    },
    {
     "id": "gr2-wk-004-s4",
     "prompt": "How do you combine the stages?",
     "brief": "Product of loaded gains",
     "answer": {
      "id": "a",
      "text": "Multiply the two stage gains, each already reduced by its loading divider, to get the gain from the input of stage 1 to the load"
     },
     "options": [
      {
       "id": "a",
       "text": "Multiply the two stage gains, each already reduced by its loading divider, to get the gain from the input of stage 1 to the load",
       "correct": true
      },
      {
       "id": "b",
       "text": "Multiply Avo1 and Avo2 only",
       "correct": false,
       "rationale": "The dividers reduce each stage below its open-circuit gain."
      },
      {
       "id": "c",
       "text": "Add the two gains",
       "correct": false,
       "rationale": "Cascaded gains multiply."
      },
      {
       "id": "d",
       "text": "Use only the last stage's gain",
       "correct": false,
       "rationale": "Both stages amplify the signal."
      }
     ],
     "distractors": [
      {
       "id": "b",
       "text": "Multiply Avo1 and Avo2 only",
       "misconception": "Uses the unloaded gains.",
       "rationale": "The dividers reduce each stage below its open-circuit gain."
      },
      {
       "id": "c",
       "text": "Add the two gains",
       "misconception": "Adds instead of multiplies.",
       "rationale": "Cascaded gains multiply."
      },
      {
       "id": "d",
       "text": "Use only the last stage's gain",
       "misconception": "Drops stage 1.",
       "rationale": "Both stages amplify the signal."
      }
     ],
     "explanation": "The overall gain is Av = [Avo1·Ri2/(Ri2+Ro1)]·[Avo2·RL/(RL+Ro2)]."
    },
    {
     "id": "gr2-wk-004-s5",
     "prompt": "How is the source included?",
     "brief": "Input divider with RS",
     "answer": {
      "id": "b",
      "text": "Multiply by the input divider Ri1/(Ri1 + RS) to get the gain from VS to the load"
     },
     "options": [
      {
       "id": "a",
       "text": "Add RS to Ro1",
       "correct": false,
       "rationale": "RS is in series with the source and faces the input of stage 1."
      },
      {
       "id": "b",
       "text": "Multiply by the input divider Ri1/(Ri1 + RS) to get the gain from VS to the load",
       "correct": true
      },
      {
       "id": "c",
       "text": "Divide the gain by RS",
       "correct": false,
       "rationale": "RS only forms a voltage divider."
      },
      {
       "id": "d",
       "text": "Nothing: Av already includes the source",
       "correct": false,
       "rationale": "Av starts at the amplifier input; the source loss is extra."
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "Add RS to Ro1",
       "misconception": "Places RS at the wrong node.",
       "rationale": "RS is in series with the source and faces the input of stage 1."
      },
      {
       "id": "c",
       "text": "Divide the gain by RS",
       "misconception": "Treats RS as a gain factor.",
       "rationale": "RS only forms a voltage divider."
      },
      {
       "id": "d",
       "text": "Nothing: Av already includes the source",
       "misconception": "Confuses Av with Gv.",
       "rationale": "Av starts at the amplifier input; the source loss is extra."
      }
     ],
     "explanation": "The source resistance forms a divider with Ri1 at the front of the cascade, so Gv = Ri1/(Ri1+RS) × Av includes that front-end loss on top of the stage-to-stage losses."
    },
    {
     "id": "gr2-wk-004-s6",
     "prompt": "Why is a common-drain stage a good second stage?",
     "brief": "Large Ri2, small Ro2",
     "answer": {
      "id": "c",
      "text": "Its large input resistance barely loads stage 1, and its small output resistance barely loses signal into RL"
     },
     "options": [
      {
       "id": "a",
       "text": "It provides more voltage gain than any other stage",
       "correct": false,
       "rationale": "A follower has a gain just below 1."
      },
      {
       "id": "b",
       "text": "It inverts the signal to correct the first stage",
       "correct": false,
       "rationale": "It does not invert."
      },
      {
       "id": "c",
       "text": "Its large input resistance barely loads stage 1, and its small output resistance barely loses signal into RL",
       "correct": true
      },
      {
       "id": "d",
       "text": "It has the same Ri and Ro as the first stage",
       "correct": false,
       "rationale": "Its value is exactly that it differs from a gain stage."
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "It provides more voltage gain than any other stage",
       "misconception": "Credits it with gain.",
       "rationale": "A follower has a gain just below 1."
      },
      {
       "id": "b",
       "text": "It inverts the signal to correct the first stage",
       "misconception": "Invents a correction.",
       "rationale": "It does not invert."
      },
      {
       "id": "d",
       "text": "It has the same Ri and Ro as the first stage",
       "misconception": "Assumes matched stages.",
       "rationale": "Its value is exactly that it differs from a gain stage."
      }
     ],
     "explanation": "A CS stage gives gain but has a large Ro; a CD stage after it keeps both dividers close to 1."
    }
   ],
   "answer": {
    "text": "Model each stage as a two-port, include the divider between Ro of one stage and Ri of the next, apply the last divider with RL, multiply, then include the source divider for the gain from VS."
   },
   "distractors": [],
   "explanation": "Model each stage as a two-port, include the divider between Ro of one stage and Ri of the next, apply the last divider with RL, multiply, then include the source divider for the gain from VS.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-15.html",
     "label": "Lesson 15 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    },
    {
     "type": "link",
     "href": "lesson-guides/lesson-21.html",
     "label": "Lesson 21 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-15.html",
     "section": "A2"
    },
    {
     "file": "lesson-guides/lesson-21.html",
     "section": "A8"
    },
    {
     "file": "lesson-guides/lesson-19.html",
     "section": "A1"
    }
   ]
  },
  {
   "id": "gr2-wk-005",
   "type": "problem",
   "topic": "BJT currents, bias and small-signal model",
   "objective": "Bias a divider-biased BJT and find its small-signal parameters",
   "prompt": "Bias a divider-biased BJT and find its small-signal model",
   "setup": "Analyze the biased npn transistor in the figure. Given: VCC, RB1, RB2, RC, RE, β and the base-emitter turn-on voltage.",
   "image": {
    "src": "assets/study/resources/gr2/bjt_bias.svg",
    "alt": "npn transistor with base divider RB1/RB2 from VCC, collector resistor RC and emitter resistor RE.",
    "caption": "Voltage-divider-biased npn BJT."
   },
   "steps": [
    {
     "id": "gr2-wk-005-s1",
     "prompt": "How is the transistor modeled for the DC analysis?",
     "brief": "Diode plus βIB source",
     "answer": {
      "id": "c",
      "text": "A diode drop from base to emitter and a controlled source β·IB from collector to emitter"
     },
     "options": [
      {
       "id": "a",
       "text": "A resistor from base to emitter",
       "correct": false,
       "rationale": "The forward-biased junction has an almost constant drop."
      },
      {
       "id": "b",
       "text": "A voltage source equal to VCC",
       "correct": false,
       "rationale": "The drop across the junction is about 0.7 V, not the supply."
      },
      {
       "id": "c",
       "text": "A diode drop from base to emitter and a controlled source β·IB from collector to emitter",
       "correct": true
      },
      {
       "id": "d",
       "text": "An open circuit at the base",
       "correct": false,
       "rationale": "The base draws a current that sets the collector current."
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "A resistor from base to emitter",
       "misconception": "Treats the junction as a resistor.",
       "rationale": "The forward-biased junction has an almost constant drop."
      },
      {
       "id": "b",
       "text": "A voltage source equal to VCC",
       "misconception": "Uses the supply.",
       "rationale": "The drop across the junction is about 0.7 V, not the supply."
      },
      {
       "id": "d",
       "text": "An open circuit at the base",
       "misconception": "Treats the base like a FET gate.",
       "rationale": "The base draws a current that sets the collector current."
      }
     ],
     "explanation": "In active mode the base-emitter junction is a diode with roughly constant drop, and the collector current is β times the base current."
    },
    {
     "id": "gr2-wk-005-s2",
     "prompt": "How do you handle the base divider?",
     "brief": "Thevenin equivalent",
     "answer": {
      "id": "d",
      "text": "Replace it by its Thevenin equivalent (Vth and Rth), because the base draws current"
     },
     "options": [
      {
       "id": "a",
       "text": "Treat it as an unloaded divider",
       "correct": false,
       "rationale": "Unlike a FET gate, the base draws current and loads the divider."
      },
      {
       "id": "b",
       "text": "Ignore RB2",
       "correct": false,
       "rationale": "Both resistors set the Thevenin values."
      },
      {
       "id": "c",
       "text": "Put RB1 and RB2 in series with RE",
       "correct": false,
       "rationale": "The divider connects from VCC to ground, not in series with RE."
      },
      {
       "id": "d",
       "text": "Replace it by its Thevenin equivalent (Vth and Rth), because the base draws current",
       "correct": true
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "Treat it as an unloaded divider",
       "misconception": "Assumes no base current.",
       "rationale": "Unlike a FET gate, the base draws current and loads the divider."
      },
      {
       "id": "b",
       "text": "Ignore RB2",
       "misconception": "Drops a component.",
       "rationale": "Both resistors set the Thevenin values."
      },
      {
       "id": "c",
       "text": "Put RB1 and RB2 in series with RE",
       "misconception": "Rearranges the circuit.",
       "rationale": "The divider connects from VCC to ground, not in series with RE."
      }
     ],
     "explanation": "Vth = VCC·RB2/(RB1+RB2) and Rth = RB1∥RB2 give a single-loop base circuit."
    },
    {
     "id": "gr2-wk-005-s3",
     "prompt": "What equation gives the base current?",
     "brief": "KVL around the base loop",
     "answer": {
      "id": "a",
      "text": "KVL around the base loop, with the emitter current (β+1)IB flowing in RE"
     },
     "options": [
      {
       "id": "a",
       "text": "KVL around the base loop, with the emitter current (β+1)IB flowing in RE",
       "correct": true
      },
      {
       "id": "b",
       "text": "KVL with only IB flowing in RE",
       "correct": false,
       "rationale": "All of the emitter current, (β+1)IB, flows through RE."
      },
      {
       "id": "c",
       "text": "KCL at the collector node",
       "correct": false,
       "rationale": "The base current comes from the base loop."
      },
      {
       "id": "d",
       "text": "Ohm's law across RB2 only",
       "correct": false,
       "rationale": "The loop includes Rth, the junction drop and RE."
      }
     ],
     "distractors": [
      {
       "id": "b",
       "text": "KVL with only IB flowing in RE",
       "misconception": "Forgets the collector current in the emitter.",
       "rationale": "All of the emitter current, (β+1)IB, flows through RE."
      },
      {
       "id": "c",
       "text": "KCL at the collector node",
       "misconception": "Uses a different node equation.",
       "rationale": "The base current comes from the base loop."
      },
      {
       "id": "d",
       "text": "Ohm's law across RB2 only",
       "misconception": "Uses part of the circuit.",
       "rationale": "The loop includes Rth, the junction drop and RE."
      }
     ],
     "explanation": "Going around the base loop: Vth − Rth·IB − VBE − (β+1)IB·RE = 0. Solving it for IB gives the base current from which every other DC quantity follows."
    },
    {
     "id": "gr2-wk-005-s4",
     "prompt": "Then what?",
     "brief": "Collector and emitter currents, voltages",
     "answer": {
      "id": "b",
      "text": "IC = β·IB and IE = (β+1)·IB, then the terminal voltages"
     },
     "options": [
      {
       "id": "a",
       "text": "IC = IB and IE = 2·IB",
       "correct": false,
       "rationale": "IC is β times IB, and IE is the sum of IB and IC."
      },
      {
       "id": "b",
       "text": "IC = β·IB and IE = (β+1)·IB, then the terminal voltages",
       "correct": true
      },
      {
       "id": "c",
       "text": "IC from VCC divided by RC",
       "correct": false,
       "rationale": "The collector current follows the transistor, not VCC over RC."
      },
      {
       "id": "d",
       "text": "IE = IB",
       "correct": false,
       "rationale": "The emitter carries both the base and the collector current."
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "IC = IB and IE = 2·IB",
       "misconception": "Guesses simple ratios.",
       "rationale": "IC is β times IB, and IE is the sum of IB and IC."
      },
      {
       "id": "c",
       "text": "IC from VCC divided by RC",
       "misconception": "Ignores the transistor.",
       "rationale": "The collector current follows the transistor, not VCC over RC."
      },
      {
       "id": "d",
       "text": "IE = IB",
       "misconception": "Drops the collector current.",
       "rationale": "The emitter carries both the base and the collector current."
      }
     ],
     "explanation": "Currents then give VE = IE·RE, VB = VE + VBE and VC = VCC − IC·RC."
    },
    {
     "id": "gr2-wk-005-s5",
     "prompt": "What confirms active mode?",
     "brief": "VC ≥ VB",
     "answer": {
      "id": "c",
      "text": "The collector voltage is at least the base voltage (the collector junction is reverse biased)"
     },
     "options": [
      {
       "id": "a",
       "text": "VBE is larger than VCC",
       "correct": false,
       "rationale": "The test is on the collector junction."
      },
      {
       "id": "b",
       "text": "IC is smaller than IB",
       "correct": false,
       "rationale": "In active mode IC = βIB is larger than IB."
      },
      {
       "id": "c",
       "text": "The collector voltage is at least the base voltage (the collector junction is reverse biased)",
       "correct": true
      },
      {
       "id": "d",
       "text": "The emitter voltage is above the base voltage",
       "correct": false,
       "rationale": "The emitter sits about one diode drop below the base."
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "VBE is larger than VCC",
       "misconception": "Compares the wrong voltages.",
       "rationale": "The test is on the collector junction."
      },
      {
       "id": "b",
       "text": "IC is smaller than IB",
       "misconception": "Inverts the gain relation.",
       "rationale": "In active mode IC = βIB is larger than IB."
      },
      {
       "id": "d",
       "text": "The emitter voltage is above the base voltage",
       "misconception": "Reverses the junction.",
       "rationale": "The emitter sits about one diode drop below the base."
      }
     ],
     "explanation": "If VC falls below VB, the collector junction is forward biased and the transistor is in saturation."
    },
    {
     "id": "gr2-wk-005-s6",
     "prompt": "Which small-signal parameters follow?",
     "brief": "gm = IC/VT, rπ = β/gm",
     "answer": {
      "id": "d",
      "text": "gm = IC/VT, then rπ = β/gm"
     },
     "options": [
      {
       "id": "a",
       "text": "gm = √(2·Kn·IC), as for a MOSFET",
       "correct": false,
       "rationale": "The BJT's gm depends on IC and the thermal voltage."
      },
      {
       "id": "b",
       "text": "rπ = VT/IC",
       "correct": false,
       "rationale": "The input resistance relates to the base current: β/gm."
      },
      {
       "id": "c",
       "text": "gm = β/rπ with rπ set by RE",
       "correct": false,
       "rationale": "RE does not define rπ; the Q-point does."
      },
      {
       "id": "d",
       "text": "gm = IC/VT, then rπ = β/gm",
       "correct": true
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "gm = √(2·Kn·IC), as for a MOSFET",
       "misconception": "Uses the FET formula.",
       "rationale": "The BJT's gm depends on IC and the thermal voltage."
      },
      {
       "id": "b",
       "text": "rπ = VT/IC",
       "misconception": "Uses the wrong current.",
       "rationale": "The input resistance relates to the base current: β/gm."
      },
      {
       "id": "c",
       "text": "gm = β/rπ with rπ set by RE",
       "misconception": "Mixes bias and signal elements.",
       "rationale": "RE does not define rπ; the Q-point does."
      }
     ],
     "explanation": "Once the Q-point is known, gm is IC over the thermal voltage and the input resistance rπ is β/gm."
    }
   ],
   "answer": {
    "text": "Use the diode-plus-controlled-source model, Thevenize the divider, write the base-loop KVL, get IC and IE, confirm VC ≥ VB, then gm = IC/VT and rπ = β/gm."
   },
   "distractors": [],
   "explanation": "Use the diode-plus-controlled-source model, Thevenize the divider, write the base-loop KVL, get IC and IE, confirm VC ≥ VB, then gm = IC/VT and rπ = β/gm.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-25.html",
     "label": "Lesson 25 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-25.html",
     "section": "A4"
    },
    {
     "file": "lesson-guides/lesson-25.html",
     "section": "A5"
    }
   ]
  },
  {
   "id": "gr2-wk-006",
   "type": "problem",
   "topic": "Small-signal model and gm",
   "objective": "Find the small-signal gain of a loaded common-source stage",
   "prompt": "Small-signal gain of a common-source stage with a load",
   "setup": "The stage in the figure is already biased. Find its small-signal voltage gain with the load RL connected.",
   "image": {
    "src": "assets/study/resources/gr2/cs_basic.svg",
    "alt": "Common-source stage with gate divider, drain resistor RD, grounded source, coupling capacitors and load RL.",
    "caption": "Biased common-source stage with coupling capacitors and a load."
   },
   "steps": [
    {
     "id": "gr2-wk-006-s1",
     "prompt": "What happens to the DC supply?",
     "brief": "Supply becomes ac ground",
     "answer": {
      "id": "d",
      "text": "It is set to zero: VDD becomes an ac ground"
     },
     "options": [
      {
       "id": "a",
       "text": "It is replaced by an open circuit",
       "correct": false,
       "rationale": "An ideal DC voltage supply has no signal across it, so it acts as a short."
      },
      {
       "id": "b",
       "text": "It is kept at its DC value",
       "correct": false,
       "rationale": "The signal analysis uses only the changes."
      },
      {
       "id": "c",
       "text": "It becomes a resistor equal to RD",
       "correct": false,
       "rationale": "No such replacement exists."
      },
      {
       "id": "d",
       "text": "It is set to zero: VDD becomes an ac ground",
       "correct": true
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "It is replaced by an open circuit",
       "misconception": "Mixes up voltage and current sources.",
       "rationale": "An ideal DC voltage supply has no signal across it, so it acts as a short."
      },
      {
       "id": "b",
       "text": "It is kept at its DC value",
       "misconception": "Keeps the bias in the signal circuit.",
       "rationale": "The signal analysis uses only the changes."
      },
      {
       "id": "c",
       "text": "It becomes a resistor equal to RD",
       "misconception": "Invents a replacement.",
       "rationale": "No such replacement exists."
      }
     ],
     "explanation": "A DC voltage source holds its voltage constant, so its signal voltage is zero: a short to ground."
    },
    {
     "id": "gr2-wk-006-s2",
     "prompt": "What about the coupling capacitors?",
     "brief": "Capacitors become shorts",
     "answer": {
      "id": "a",
      "text": "Large coupling capacitors become short circuits at signal frequencies"
     },
     "options": [
      {
       "id": "a",
       "text": "Large coupling capacitors become short circuits at signal frequencies",
       "correct": true
      },
      {
       "id": "b",
       "text": "They become open circuits",
       "correct": false,
       "rationale": "They block DC but pass the signal."
      },
      {
       "id": "c",
       "text": "They are kept as capacitors and their charge computed",
       "correct": false,
       "rationale": "For mid-band they are simply shorts."
      },
      {
       "id": "d",
       "text": "They are replaced by resistors equal to RL",
       "correct": false,
       "rationale": "No such substitution exists."
      }
     ],
     "distractors": [
      {
       "id": "b",
       "text": "They become open circuits",
       "misconception": "Uses the DC behavior.",
       "rationale": "They block DC but pass the signal."
      },
      {
       "id": "c",
       "text": "They are kept as capacitors and their charge computed",
       "misconception": "Over-complicates.",
       "rationale": "For mid-band they are simply shorts."
      },
      {
       "id": "d",
       "text": "They are replaced by resistors equal to RL",
       "misconception": "Invents a substitution.",
       "rationale": "No such substitution exists."
      }
     ],
     "explanation": "At the signal frequency a large capacitor is a short, so RL appears at the drain."
    },
    {
     "id": "gr2-wk-006-s3",
     "prompt": "What replaces the transistor?",
     "brief": "Small-signal model",
     "answer": {
      "id": "b",
      "text": "A small-signal model: an open gate and a controlled current source gm·vgs from drain to source (with ro in parallel)"
     },
     "options": [
      {
       "id": "a",
       "text": "The square-law equation, kept as is",
       "correct": false,
       "rationale": "The small-signal model is linear."
      },
      {
       "id": "b",
       "text": "A small-signal model: an open gate and a controlled current source gm·vgs from drain to source (with ro in parallel)",
       "correct": true
      },
      {
       "id": "c",
       "text": "A short between gate and source",
       "correct": false,
       "rationale": "The gate draws no current."
      },
      {
       "id": "d",
       "text": "A resistor between drain and source of value RD",
       "correct": false,
       "rationale": "The transistor is replaced by a controlled source."
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "The square-law equation, kept as is",
       "misconception": "Keeps the nonlinear model.",
       "rationale": "The small-signal model is linear."
      },
      {
       "id": "c",
       "text": "A short between gate and source",
       "misconception": "Treats the gate as a short.",
       "rationale": "The gate draws no current."
      },
      {
       "id": "d",
       "text": "A resistor between drain and source of value RD",
       "misconception": "Uses the load resistor.",
       "rationale": "The transistor is replaced by a controlled source."
      }
     ],
     "explanation": "The model is linear: the gate is open and the drain current is gm times the gate-source signal."
    },
    {
     "id": "gr2-wk-006-s4",
     "prompt": "How is vgs related to the input?",
     "brief": "vgs equals the input signal",
     "answer": {
      "id": "c",
      "text": "The source is grounded, so the gate-source signal equals the input signal"
     },
     "options": [
      {
       "id": "a",
       "text": "vgs equals the output voltage",
       "correct": false,
       "rationale": "The output is at the drain."
      },
      {
       "id": "b",
       "text": "vgs is reduced by gm·RS",
       "correct": false,
       "rationale": "There is no source resistor here."
      },
      {
       "id": "c",
       "text": "The source is grounded, so the gate-source signal equals the input signal",
       "correct": true
      },
      {
       "id": "d",
       "text": "vgs is zero",
       "correct": false,
       "rationale": "The signal is applied between gate and ground."
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "vgs equals the output voltage",
       "misconception": "Mixes input and output.",
       "rationale": "The output is at the drain."
      },
      {
       "id": "b",
       "text": "vgs is reduced by gm·RS",
       "misconception": "Applies the degeneration result.",
       "rationale": "There is no source resistor here."
      },
      {
       "id": "d",
       "text": "vgs is zero",
       "misconception": "Assumes a grounded source removes the signal.",
       "rationale": "The signal is applied between gate and ground."
      }
     ],
     "explanation": "With no source resistor, the whole input signal appears across gate and source."
    },
    {
     "id": "gr2-wk-006-s5",
     "prompt": "What does the controlled current flow through?",
     "brief": "Current through RD ∥ RL",
     "answer": {
      "id": "d",
      "text": "RD in parallel with RL (RD, RL and ro are all connected from drain to ground for the signal)"
     },
     "options": [
      {
       "id": "a",
       "text": "RD only, because the capacitor blocks the load",
       "correct": false,
       "rationale": "The capacitor is a short, so RL is in parallel with RD."
      },
      {
       "id": "b",
       "text": "RD in series with RL",
       "correct": false,
       "rationale": "Both connect from the drain node to ground."
      },
      {
       "id": "c",
       "text": "The gate resistors RG1 and RG2",
       "correct": false,
       "rationale": "The controlled source drives the output node."
      },
      {
       "id": "d",
       "text": "RD in parallel with RL (RD, RL and ro are all connected from drain to ground for the signal)",
       "correct": true
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "RD only, because the capacitor blocks the load",
       "misconception": "Treats the capacitor as an open circuit.",
       "rationale": "The capacitor is a short, so RL is in parallel with RD."
      },
      {
       "id": "b",
       "text": "RD in series with RL",
       "misconception": "Combines the resistors incorrectly.",
       "rationale": "Both connect from the drain node to ground."
      },
      {
       "id": "c",
       "text": "The gate resistors RG1 and RG2",
       "misconception": "Uses the input network.",
       "rationale": "The controlled source drives the output node."
      }
     ],
     "explanation": "The controlled current gm·vgs flows through the parallel combination of RD, RL and ro at the drain node, so the drain signal is vo = −gm·vgs·(RD ∥ RL ∥ ro); the minus sign is the inversion."
    },
    {
     "id": "gr2-wk-006-s6",
     "prompt": "What are the gain and the open-circuit gain?",
     "brief": "Av and Avo",
     "answer": {
      "id": "a",
      "text": "The gain is vo/vi = −gm(RD ∥ RL); removing RL gives the open-circuit gain −gm·RD"
     },
     "options": [
      {
       "id": "a",
       "text": "The gain is vo/vi = −gm(RD ∥ RL); removing RL gives the open-circuit gain −gm·RD",
       "correct": true
      },
      {
       "id": "b",
       "text": "Av = +gm·RD, with the load not mattering",
       "correct": false,
       "rationale": "The stage inverts and RL reduces the gain."
      },
      {
       "id": "c",
       "text": "Av = −gm·RL",
       "correct": false,
       "rationale": "The drain resistor also appears."
      },
      {
       "id": "d",
       "text": "Av = −gm·RD without a load, and unchanged with a load",
       "correct": false,
       "rationale": "The load changes the effective resistance at the drain."
      }
     ],
     "distractors": [
      {
       "id": "b",
       "text": "Av = +gm·RD, with the load not mattering",
       "misconception": "Drops the sign and the load.",
       "rationale": "The stage inverts and RL reduces the gain."
      },
      {
       "id": "c",
       "text": "Av = −gm·RL",
       "misconception": "Uses the load alone.",
       "rationale": "The drain resistor also appears."
      },
      {
       "id": "d",
       "text": "Av = −gm·RD without a load, and unchanged with a load",
       "misconception": "Ignores loading.",
       "rationale": "The load changes the effective resistance at the drain."
      }
     ],
     "explanation": "The minus sign is the inversion; RL in parallel with RD lowers the gain magnitude below the no-load value."
    }
   ],
   "answer": {
    "text": "Zero the supply, short the capacitors, insert the small-signal model, note vgs = vi, find the drain voltage across RD∥RL, and read off Av = −gm(RD∥RL); removing RL gives Avo."
   },
   "distractors": [],
   "explanation": "Zero the supply, short the capacitors, insert the small-signal model, note vgs = vi, find the drain voltage across RD∥RL, and read off Av = −gm(RD∥RL); removing RL gives Avo.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-21.html",
     "label": "Lesson 21 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    },
    {
     "type": "link",
     "href": "lesson-guides/lesson-16.html",
     "label": "Lesson 16 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-16.html",
     "section": "p. 16-9"
    },
    {
     "file": "lesson-guides/lesson-21.html",
     "section": "A5"
    }
   ]
  },
  {
   "id": "gr2-wk-007",
   "type": "problem",
   "topic": "Drain-feedback bias and PMOS",
   "objective": "Bias and gain of a drain-feedback common-source stage",
   "prompt": "Bias and gain of a drain-feedback common-source stage",
   "setup": "The stage in the figure is biased by a divider fed from its own drain. Find its bias point and small-signal gain. Assume the current in RG1 is negligible next to the drain current.",
   "image": {
    "src": "assets/study/resources/gr2/self_bias.svg",
    "alt": "Common-source stage with RG1 from the drain to the gate, RG2 from the gate to ground, drain resistor RD and a coupling capacitor at the input.",
    "caption": "Self-biased common-source stage."
   },
   "steps": [
    {
     "id": "gr2-wk-007-s1",
     "prompt": "What is unusual about the bias?",
     "brief": "Gate divider fed from the drain",
     "answer": {
      "id": "a",
      "text": "The divider is fed from the drain, so the gate voltage depends on the drain voltage"
     },
     "options": [
      {
       "id": "a",
       "text": "The divider is fed from the drain, so the gate voltage depends on the drain voltage",
       "correct": true
      },
      {
       "id": "b",
       "text": "The gate is fed from the supply, as usual",
       "correct": false,
       "rationale": "RG1 returns to the drain here, not to VDD."
      },
      {
       "id": "c",
       "text": "The gate is connected directly to the drain",
       "correct": false,
       "rationale": "RG1 and RG2 divide the drain voltage."
      },
      {
       "id": "d",
       "text": "The source has a resistor that sets the bias",
       "correct": false,
       "rationale": "The source is grounded in this circuit."
      }
     ],
     "distractors": [
      {
       "id": "b",
       "text": "The gate is fed from the supply, as usual",
       "misconception": "Assumes the standard divider.",
       "rationale": "RG1 returns to the drain here, not to VDD."
      },
      {
       "id": "c",
       "text": "The gate is connected directly to the drain",
       "misconception": "Assumes a diode connection.",
       "rationale": "RG1 and RG2 divide the drain voltage."
      },
      {
       "id": "d",
       "text": "The source has a resistor that sets the bias",
       "misconception": "Looks for RS.",
       "rationale": "The source is grounded in this circuit."
      }
     ],
     "explanation": "Because the drain voltage depends on the drain current, this is a built-in negative feedback."
    },
    {
     "id": "gr2-wk-007-s2",
     "prompt": "What do you write for the gate voltage?",
     "brief": "VG from the drain voltage",
     "answer": {
      "id": "b",
      "text": "VG = VD·RG2/(RG1 + RG2), with VD = VDD − RD·ID"
     },
     "options": [
      {
       "id": "a",
       "text": "VG = VDD·RG2/(RG1 + RG2)",
       "correct": false,
       "rationale": "The divider is fed by the drain voltage, not VDD."
      },
      {
       "id": "b",
       "text": "VG = VD·RG2/(RG1 + RG2), with VD = VDD − RD·ID",
       "correct": true
      },
      {
       "id": "c",
       "text": "VG = VD",
       "correct": false,
       "rationale": "The divider reduces the drain voltage."
      },
      {
       "id": "d",
       "text": "VG = ID·RG2",
       "correct": false,
       "rationale": "The gate voltage comes from the divider ratio."
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "VG = VDD·RG2/(RG1 + RG2)",
       "misconception": "Uses the usual supply divider.",
       "rationale": "The divider is fed by the drain voltage, not VDD."
      },
      {
       "id": "c",
       "text": "VG = VD",
       "misconception": "Treats the gate as connected to the drain.",
       "rationale": "The divider reduces the drain voltage."
      },
      {
       "id": "d",
       "text": "VG = ID·RG2",
       "misconception": "Uses a single resistor.",
       "rationale": "The gate voltage comes from the divider ratio."
      }
     ],
     "explanation": "With negligible current in RG1, the divider output is the fraction RG2/(RG1+RG2) of the drain voltage."
    },
    {
     "id": "gr2-wk-007-s3",
     "prompt": "How do you get ID?",
     "brief": "Quadratic in ID",
     "answer": {
      "id": "c",
      "text": "Substitute into the square law with VGS = VG (source at ground) to get a quadratic in ID"
     },
     "options": [
      {
       "id": "a",
       "text": "Solve a linear equation",
       "correct": false,
       "rationale": "ID appears squared once VGS depends on ID."
      },
      {
       "id": "b",
       "text": "Use VGS = VDD",
       "correct": false,
       "rationale": "The gate sits at a fraction of the drain voltage."
      },
      {
       "id": "c",
       "text": "Substitute into the square law with VGS = VG (source at ground) to get a quadratic in ID",
       "correct": true
      },
      {
       "id": "d",
       "text": "Take ID = VDD/RD",
       "correct": false,
       "rationale": "That would be the current with a short circuit."
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "Solve a linear equation",
       "misconception": "Overlooks the square law.",
       "rationale": "ID appears squared once VGS depends on ID."
      },
      {
       "id": "b",
       "text": "Use VGS = VDD",
       "misconception": "Ignores the divider.",
       "rationale": "The gate sits at a fraction of the drain voltage."
      },
      {
       "id": "d",
       "text": "Take ID = VDD/RD",
       "misconception": "Ignores the transistor.",
       "rationale": "That would be the current with a short circuit."
      }
     ],
     "explanation": "ID = ½Kn(VG − Vt)² with VG a function of ID gives a quadratic."
    },
    {
     "id": "gr2-wk-007-s4",
     "prompt": "Which root is rejected?",
     "brief": "Reject the inconsistent root",
     "answer": {
      "id": "d",
      "text": "The one that puts the drain voltage below ground or VGS below the threshold"
     },
     "options": [
      {
       "id": "a",
       "text": "Always the smaller current",
       "correct": false,
       "rationale": "Physical consistency decides."
      },
      {
       "id": "b",
       "text": "Always the larger current",
       "correct": false,
       "rationale": "Physical consistency decides."
      },
      {
       "id": "c",
       "text": "Neither: both are valid",
       "correct": false,
       "rationale": "Only one root matches the circuit."
      },
      {
       "id": "d",
       "text": "The one that puts the drain voltage below ground or VGS below the threshold",
       "correct": true
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "Always the smaller current",
       "misconception": "Uses a fixed rule.",
       "rationale": "Physical consistency decides."
      },
      {
       "id": "b",
       "text": "Always the larger current",
       "misconception": "Uses a fixed rule.",
       "rationale": "Physical consistency decides."
      },
      {
       "id": "c",
       "text": "Neither: both are valid",
       "misconception": "Keeps both.",
       "rationale": "Only one root matches the circuit."
      }
     ],
     "explanation": "A negative drain voltage or VGS below Vt cannot occur in the actual circuit."
    },
    {
     "id": "gr2-wk-007-s5",
     "prompt": "Which checks follow?",
     "brief": "Saturation and negligible RG1 current",
     "answer": {
      "id": "a",
      "text": "VDS ≥ VOV (here VD above VOV) and that the current in RG1 is negligible next to the drain current"
     },
     "options": [
      {
       "id": "a",
       "text": "VDS ≥ VOV (here VD above VOV) and that the current in RG1 is negligible next to the drain current",
       "correct": true
      },
      {
       "id": "b",
       "text": "Check that VG equals VDD",
       "correct": false,
       "rationale": "The gate sits well below the supply."
      },
      {
       "id": "c",
       "text": "Check that the gate draws current",
       "correct": false,
       "rationale": "The gate draws no DC current."
      },
      {
       "id": "d",
       "text": "Check that RG1 equals RG2",
       "correct": false,
       "rationale": "No such equality is required."
      }
     ],
     "distractors": [
      {
       "id": "b",
       "text": "Check that VG equals VDD",
       "misconception": "Invents a condition.",
       "rationale": "The gate sits well below the supply."
      },
      {
       "id": "c",
       "text": "Check that the gate draws current",
       "misconception": "Contradicts the model.",
       "rationale": "The gate draws no DC current."
      },
      {
       "id": "d",
       "text": "Check that RG1 equals RG2",
       "misconception": "Invents a condition.",
       "rationale": "No such equality is required."
      }
     ],
     "explanation": "The mode check and the negligible-current assumption both validate the solution."
    },
    {
     "id": "gr2-wk-007-s6",
     "prompt": "How is the small-signal gain found?",
     "brief": "Nodal equation at the drain",
     "answer": {
      "id": "b",
      "text": "Write a nodal equation at the drain with vgs = vin; for large RG1 the gain is about −gm·RD"
     },
     "options": [
      {
       "id": "a",
       "text": "Ignore RG1 and say the gain is zero",
       "correct": false,
       "rationale": "The controlled source still produces a gain."
      },
      {
       "id": "b",
       "text": "Write a nodal equation at the drain with vgs = vin; for large RG1 the gain is about −gm·RD",
       "correct": true
      },
      {
       "id": "c",
       "text": "The gain equals RG2/(RG1+RG2)",
       "correct": false,
       "rationale": "That ratio is a DC quantity, not the small-signal gain."
      },
      {
       "id": "d",
       "text": "The gain equals −gm·RG1",
       "correct": false,
       "rationale": "The drain resistor sets the gain when RG1 is large."
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "Ignore RG1 and say the gain is zero",
       "misconception": "Drops the stage's gain.",
       "rationale": "The controlled source still produces a gain."
      },
      {
       "id": "c",
       "text": "The gain equals RG2/(RG1+RG2)",
       "misconception": "Uses the bias divider ratio.",
       "rationale": "That ratio is a DC quantity, not the small-signal gain."
      },
      {
       "id": "d",
       "text": "The gain equals −gm·RG1",
       "misconception": "Uses the feedback resistor.",
       "rationale": "The drain resistor sets the gain when RG1 is large."
      }
     ],
     "explanation": "The feedback current through RG1 is small, so the gain approaches −gm·RD."
    }
   ],
   "answer": {
    "text": "Recognize the drain-fed divider, express VG from VD = VDD − RD·ID, solve the quadratic, reject the inconsistent root, confirm saturation and the negligible RG1 current, then write a nodal equation for the gain."
   },
   "distractors": [],
   "explanation": "Recognize the drain-fed divider, express VG from VD = VDD − RD·ID, solve the quadratic, reject the inconsistent root, confirm saturation and the negligible RG1 current, then write a nodal equation for the gain.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-26.html",
     "label": "Lesson 26 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-26.html",
     "section": "A8"
    }
   ]
  },
  {
   "id": "gr2-wk-008",
   "type": "problem",
   "topic": "Common-drain design",
   "objective": "Diagnose and fix a source follower that clips",
   "prompt": "Diagnose a source follower that clips",
   "setup": "A built source follower (figure) flattens the negative peaks of its output while the positive peaks look fine. Work out what is wrong and how to fix it.",
   "image": {
    "src": "assets/study/resources/gr2/cd_stage.svg",
    "alt": "Common-drain stage with gate divider, source resistor RS and a coupling capacitor to a load.",
    "caption": "Source follower driving a load."
   },
   "steps": [
    {
     "id": "gr2-wk-008-s1",
     "prompt": "What does the flat negative peak suggest?",
     "brief": "Cutoff at the negative peak",
     "answer": {
      "id": "b",
      "text": "The transistor is cutting off at the lowest part of the swing"
     },
     "options": [
      {
       "id": "a",
       "text": "The transistor has entered triode",
       "correct": false,
       "rationale": "In a follower triode appears at the positive peak."
      },
      {
       "id": "b",
       "text": "The transistor is cutting off at the lowest part of the swing",
       "correct": true
      },
      {
       "id": "c",
       "text": "The supply voltage is too low",
       "correct": false,
       "rationale": "A low supply would clip the positive side first."
      },
      {
       "id": "d",
       "text": "The coupling capacitor is open",
       "correct": false,
       "rationale": "An open capacitor would remove the signal, not clip one side."
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "The transistor has entered triode",
       "misconception": "Mixes up which end clips.",
       "rationale": "In a follower triode appears at the positive peak."
      },
      {
       "id": "c",
       "text": "The supply voltage is too low",
       "misconception": "Blames the supply.",
       "rationale": "A low supply would clip the positive side first."
      },
      {
       "id": "d",
       "text": "The coupling capacitor is open",
       "misconception": "Blames a component.",
       "rationale": "An open capacitor would remove the signal, not clip one side."
      }
     ],
     "explanation": "At the negative peak the drain current is lowest; if it reaches zero the transistor turns off and the output flattens."
    },
    {
     "id": "gr2-wk-008-s2",
     "prompt": "Which design quantity was set too small?",
     "brief": "ID,min too small",
     "answer": {
      "id": "c",
      "text": "The minimum drain current, so RS is too large for the load current"
     },
     "options": [
      {
       "id": "a",
       "text": "The gate resistance",
       "correct": false,
       "rationale": "The gate network does not affect clipping at the output peak."
      },
      {
       "id": "b",
       "text": "The load resistance",
       "correct": false,
       "rationale": "The load is fixed; the design must handle it."
      },
      {
       "id": "c",
       "text": "The minimum drain current, so RS is too large for the load current",
       "correct": true
      },
      {
       "id": "d",
       "text": "The threshold voltage",
       "correct": false,
       "rationale": "Vt is a device property, not a design quantity."
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "The gate resistance",
       "misconception": "Blames the input network.",
       "rationale": "The gate network does not affect clipping at the output peak."
      },
      {
       "id": "b",
       "text": "The load resistance",
       "misconception": "Blames the load.",
       "rationale": "The load is fixed; the design must handle it."
      },
      {
       "id": "d",
       "text": "The threshold voltage",
       "misconception": "Blames the device.",
       "rationale": "Vt is a device property, not a design quantity."
      }
     ],
     "explanation": "RS must carry the drain current plus the load current at the negative peak; if RS is too large, ID,min is too small."
    },
    {
     "id": "gr2-wk-008-s3",
     "prompt": "What is the fix?",
     "brief": "Smaller RS, larger ID,min",
     "answer": {
      "id": "d",
      "text": "Choose a smaller RS, which raises the bias current so the drain current stays positive at the negative peak"
     },
     "options": [
      {
       "id": "a",
       "text": "Choose a larger RS",
       "correct": false,
       "rationale": "A larger RS lowers the current further."
      },
      {
       "id": "b",
       "text": "Reduce the input amplitude only",
       "correct": false,
       "rationale": "The limit is the bias; reducing the signal hides rather than fixes it."
      },
      {
       "id": "c",
       "text": "Add a drain resistor",
       "correct": false,
       "rationale": "A follower has no drain resistor."
      },
      {
       "id": "d",
       "text": "Choose a smaller RS, which raises the bias current so the drain current stays positive at the negative peak",
       "correct": true
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "Choose a larger RS",
       "misconception": "Reverses the change.",
       "rationale": "A larger RS lowers the current further."
      },
      {
       "id": "b",
       "text": "Reduce the input amplitude only",
       "misconception": "Treats it as a signal problem.",
       "rationale": "The limit is the bias; reducing the signal hides rather than fixes it."
      },
      {
       "id": "c",
       "text": "Add a drain resistor",
       "misconception": "Changes the topology.",
       "rationale": "A follower has no drain resistor."
      }
     ],
     "explanation": "More bias current gives the transistor room to absorb the negative-peak load current."
    },
    {
     "id": "gr2-wk-008-s4",
     "prompt": "What must you recheck after the change?",
     "brief": "Saturation at the positive peak and power",
     "answer": {
      "id": "a",
      "text": "That the transistor still stays in saturation at the positive peak, and that power dissipation is acceptable"
     },
     "options": [
      {
       "id": "a",
       "text": "That the transistor still stays in saturation at the positive peak, and that power dissipation is acceptable",
       "correct": true
      },
      {
       "id": "b",
       "text": "Nothing: a larger current only helps",
       "correct": false,
       "rationale": "A larger current uses more VDS headroom and power."
      },
      {
       "id": "c",
       "text": "Only that the gain is exactly 1",
       "correct": false,
       "rationale": "The gain is slightly below 1."
      },
      {
       "id": "d",
       "text": "Only the coupling capacitor value",
       "correct": false,
       "rationale": "The swing and power checks matter here."
      }
     ],
     "distractors": [
      {
       "id": "b",
       "text": "Nothing: a larger current only helps",
       "misconception": "Assumes no side effects.",
       "rationale": "A larger current uses more VDS headroom and power."
      },
      {
       "id": "c",
       "text": "Only that the gain is exactly 1",
       "misconception": "Expects unity gain.",
       "rationale": "The gain is slightly below 1."
      },
      {
       "id": "d",
       "text": "Only the coupling capacitor value",
       "misconception": "Focuses on a component.",
       "rationale": "The swing and power checks matter here."
      }
     ],
     "explanation": "More current changes the DC bias, so the positive-peak saturation margin and the dissipation must be checked again."
    },
    {
     "id": "gr2-wk-008-s5",
     "prompt": "What else changes in the bias?",
     "brief": "VOV, VGS and VG",
     "answer": {
      "id": "b",
      "text": "The DC current rises, so the overdrive, VGS and the gate voltage VG change; the gate divider must be redone"
     },
     "options": [
      {
       "id": "a",
       "text": "Nothing else changes",
       "correct": false,
       "rationale": "The device equation ties VGS to the current."
      },
      {
       "id": "b",
       "text": "The DC current rises, so the overdrive, VGS and the gate voltage VG change; the gate divider must be redone",
       "correct": true
      },
      {
       "id": "c",
       "text": "Only the load resistor changes",
       "correct": false,
       "rationale": "The load is fixed."
      },
      {
       "id": "d",
       "text": "Only the supply voltage changes",
       "correct": false,
       "rationale": "The supply is fixed."
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "Nothing else changes",
       "misconception": "Assumes RS is independent.",
       "rationale": "The device equation ties VGS to the current."
      },
      {
       "id": "c",
       "text": "Only the load resistor changes",
       "misconception": "Changes a given.",
       "rationale": "The load is fixed."
      },
      {
       "id": "d",
       "text": "Only the supply voltage changes",
       "misconception": "Changes a given.",
       "rationale": "The supply is fixed."
      }
     ],
     "explanation": "VG = VGS + VS, so the divider must be recomputed for the new VGS."
    },
    {
     "id": "gr2-wk-008-s6",
     "prompt": "How do you confirm the fix?",
     "brief": "Simulate swing and THD",
     "answer": {
      "id": "c",
      "text": "Simulate: the output meets the required swing without clipping, and the THD is acceptable"
     },
     "options": [
      {
       "id": "a",
       "text": "Simulate only the DC operating point",
       "correct": false,
       "rationale": "Clipping only shows up in a transient run."
      },
      {
       "id": "b",
       "text": "Check only the supply current",
       "correct": false,
       "rationale": "The requirement is the undistorted output swing."
      },
      {
       "id": "c",
       "text": "Simulate: the output meets the required swing without clipping, and the THD is acceptable",
       "correct": true
      },
      {
       "id": "d",
       "text": "Assume the fix works because the maths is right",
       "correct": false,
       "rationale": "The guides always confirm the hand design in simulation."
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "Simulate only the DC operating point",
       "misconception": "Skips the signal check.",
       "rationale": "Clipping only shows up in a transient run."
      },
      {
       "id": "b",
       "text": "Check only the supply current",
       "misconception": "Checks a side effect only.",
       "rationale": "The requirement is the undistorted output swing."
      },
      {
       "id": "d",
       "text": "Assume the fix works because the maths is right",
       "misconception": "Skips verification.",
       "rationale": "The guides always confirm the hand design in simulation."
      }
     ],
     "explanation": "A transient run with the required input shows the undistorted swing; the distortion analyzer gives the THD."
    }
   ],
   "answer": {
    "text": "Flat negative peaks mean cutoff, so ID,min was too small; lower RS to raise the bias current, recheck positive-peak saturation and power, redo the gate divider, and confirm by simulation."
   },
   "distractors": [],
   "explanation": "Flat negative peaks mean cutoff, so ID,min was too small; lower RS to raise the bias current, recheck positive-peak saturation and power, redo the gate divider, and confirm by simulation.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-19.html",
     "label": "Lesson 19 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    },
    {
     "type": "link",
     "href": "lesson-guides/lesson-21.html",
     "label": "Lesson 21 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-21.html",
     "section": "A1"
    },
    {
     "file": "lesson-guides/lesson-19.html",
     "section": "A3"
    }
   ]
  },
  {
   "id": "gr2-wk-009",
   "type": "problem",
   "topic": "Measuring Ri, Ro and Avo",
   "objective": "Measure the two-port parameters of an unknown amplifier",
   "prompt": "Measure the parameters of an unknown amplifier",
   "setup": "An amplifier on the bench is a black box. You have a function generator, an oscilloscope and a variable resistor. Find Avo, Ri and Ro, then predict how it behaves with a source and a load.",
   "image": {
    "src": "assets/study/resources/gr2/two_port.svg",
    "alt": "Amplifier drawn as a two-port with source resistance RS, input resistance Ri, controlled source Avo·vi, output resistance Ro and load RL.",
    "caption": "Amplifier as a two-port model."
   },
   "steps": [
    {
     "id": "gr2-wk-009-s1",
     "prompt": "Which parameter do you measure first, and how?",
     "brief": "Avo with the load removed",
     "answer": {
      "id": "c",
      "text": "Avo: remove the load so the output is open, then compare output with input"
     },
     "options": [
      {
       "id": "a",
       "text": "Ri, with the output shorted",
       "correct": false,
       "rationale": "Shorting the output forces the output voltage to zero."
      },
      {
       "id": "b",
       "text": "Ro, with the signal on",
       "correct": false,
       "rationale": "Ro needs the input zeroed."
      },
      {
       "id": "c",
       "text": "Avo: remove the load so the output is open, then compare output with input",
       "correct": true
      },
      {
       "id": "d",
       "text": "Avo, with the load connected",
       "correct": false,
       "rationale": "The load forms a divider with Ro and reduces the output."
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "Ri, with the output shorted",
       "misconception": "Shorts the output.",
       "rationale": "Shorting the output forces the output voltage to zero."
      },
      {
       "id": "b",
       "text": "Ro, with the signal on",
       "misconception": "Leaves the controlled source active.",
       "rationale": "Ro needs the input zeroed."
      },
      {
       "id": "d",
       "text": "Avo, with the load connected",
       "misconception": "Measures a loaded gain.",
       "rationale": "The load forms a divider with Ro and reduces the output."
      }
     ],
     "explanation": "Avo is the open-circuit gain, so the output must be unloaded."
    },
    {
     "id": "gr2-wk-009-s2",
     "prompt": "How is Ri measured?",
     "brief": "Variable resistor in series with the source",
     "answer": {
      "id": "d",
      "text": "Put the variable resistor in series with the source and adjust it until the amplifier input is half the source; that resistance equals Ri"
     },
     "options": [
      {
       "id": "a",
       "text": "Put the resistor across the input and adjust for maximum output",
       "correct": false,
       "rationale": "A gain peak says nothing about input resistance."
      },
      {
       "id": "b",
       "text": "Short the input and measure the current",
       "correct": false,
       "rationale": "A shorted input removes the signal."
      },
      {
       "id": "c",
       "text": "Remove the load and divide output by input",
       "correct": false,
       "rationale": "That gives the open-circuit gain."
      },
      {
       "id": "d",
       "text": "Put the variable resistor in series with the source and adjust it until the amplifier input is half the source; that resistance equals Ri",
       "correct": true
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "Put the resistor across the input and adjust for maximum output",
       "misconception": "Looks for a gain peak.",
       "rationale": "A gain peak says nothing about input resistance."
      },
      {
       "id": "b",
       "text": "Short the input and measure the current",
       "misconception": "Shorts the input.",
       "rationale": "A shorted input removes the signal."
      },
      {
       "id": "c",
       "text": "Remove the load and divide output by input",
       "misconception": "Describes the Avo measurement.",
       "rationale": "That gives the open-circuit gain."
      }
     ],
     "explanation": "When R = Ri the input divider gives one half of the source voltage at the amplifier input."
    },
    {
     "id": "gr2-wk-009-s3",
     "prompt": "What condition is needed to measure Ro?",
     "brief": "Input zeroed",
     "answer": {
      "id": "a",
      "text": "The input signal is set to zero so the controlled source is off"
     },
     "options": [
      {
       "id": "a",
       "text": "The input signal is set to zero so the controlled source is off",
       "correct": true
      },
      {
       "id": "b",
       "text": "The input is left at its normal amplitude",
       "correct": false,
       "rationale": "The amplifier's own output would hide the divider effect."
      },
      {
       "id": "c",
       "text": "The output is shorted",
       "correct": false,
       "rationale": "The test must see the output resistance, not a short."
      },
      {
       "id": "d",
       "text": "The supply is turned off",
       "correct": false,
       "rationale": "The supplies stay on; only the signal input is zeroed."
      }
     ],
     "distractors": [
      {
       "id": "b",
       "text": "The input is left at its normal amplitude",
       "misconception": "Keeps the controlled source active.",
       "rationale": "The amplifier's own output would hide the divider effect."
      },
      {
       "id": "c",
       "text": "The output is shorted",
       "misconception": "Shorts the node being measured.",
       "rationale": "The test must see the output resistance, not a short."
      },
      {
       "id": "d",
       "text": "The supply is turned off",
       "misconception": "Removes the bias.",
       "rationale": "The supplies stay on; only the signal input is zeroed."
      }
     ],
     "explanation": "With vi = 0 the controlled source Avo·vi is zero, so a test source connected at the output sees only the output resistance Ro looking back into the amplifier."
    },
    {
     "id": "gr2-wk-009-s4",
     "prompt": "How is Ro read out?",
     "brief": "Half-voltage with a variable resistor",
     "answer": {
      "id": "b",
      "text": "Drive the output through the variable resistor and adjust until the output voltage is half of the test source; that resistance equals Ro"
     },
     "options": [
      {
       "id": "a",
       "text": "Adjust until the output voltage is maximum",
       "correct": false,
       "rationale": "There is no peak; the divider condition identifies Ro."
      },
      {
       "id": "b",
       "text": "Drive the output through the variable resistor and adjust until the output voltage is half of the test source; that resistance equals Ro",
       "correct": true
      },
      {
       "id": "c",
       "text": "Adjust until the output equals the input",
       "correct": false,
       "rationale": "The test voltage, not the input, is the reference."
      },
      {
       "id": "d",
       "text": "Read the output with no resistor and no test source",
       "correct": false,
       "rationale": "Without a test source nothing can be measured."
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "Adjust until the output voltage is maximum",
       "misconception": "Looks for a peak.",
       "rationale": "There is no peak; the divider condition identifies Ro."
      },
      {
       "id": "c",
       "text": "Adjust until the output equals the input",
       "misconception": "Compares unrelated voltages.",
       "rationale": "The test voltage, not the input, is the reference."
      },
      {
       "id": "d",
       "text": "Read the output with no resistor and no test source",
       "misconception": "Skips the test.",
       "rationale": "Without a test source nothing can be measured."
      }
     ],
     "explanation": "The same half-voltage divider trick as for Ri, now at the output."
    },
    {
     "id": "gr2-wk-009-s5",
     "prompt": "What do the three numbers tell you about its use?",
     "brief": "Match against source and load",
     "answer": {
      "id": "c",
      "text": "Whether Ri is large compared with the source resistance and Ro small compared with the load, because those set the losses"
     },
     "options": [
      {
       "id": "a",
       "text": "Whether Avo is larger than 1 only",
       "correct": false,
       "rationale": "Ri and Ro set the divider losses."
      },
      {
       "id": "b",
       "text": "Whether Ri equals Ro",
       "correct": false,
       "rationale": "They are independent quantities."
      },
      {
       "id": "c",
       "text": "Whether Ri is large compared with the source resistance and Ro small compared with the load, because those set the losses",
       "correct": true
      },
      {
       "id": "d",
       "text": "Nothing: the three parameters are unrelated",
       "correct": false,
       "rationale": "Together they predict the loaded gain."
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "Whether Avo is larger than 1 only",
       "misconception": "Looks at gain only.",
       "rationale": "Ri and Ro set the divider losses."
      },
      {
       "id": "b",
       "text": "Whether Ri equals Ro",
       "misconception": "Invents a matching rule.",
       "rationale": "They are independent quantities."
      },
      {
       "id": "d",
       "text": "Nothing: the three parameters are unrelated",
       "misconception": "Ignores the model.",
       "rationale": "Together they predict the loaded gain."
      }
     ],
     "explanation": "Ri ≫ RS and Ro ≪ RL keep both dividers near 1, so the loaded gain is close to Avo."
    },
    {
     "id": "gr2-wk-009-s6",
     "prompt": "How do you predict the loaded gain?",
     "brief": "Divider × Avo × divider",
     "answer": {
      "id": "d",
      "text": "Input divider Ri/(Ri+RS), times Avo, times output divider RL/(RL+Ro)"
     },
     "options": [
      {
       "id": "a",
       "text": "Avo alone",
       "correct": false,
       "rationale": "The dividers reduce the gain."
      },
      {
       "id": "b",
       "text": "Avo multiplied by RL",
       "correct": false,
       "rationale": "The load only forms a divider."
      },
      {
       "id": "c",
       "text": "Avo divided by Ri",
       "correct": false,
       "rationale": "Gain is dimensionless; the dividers are ratios."
      },
      {
       "id": "d",
       "text": "Input divider Ri/(Ri+RS), times Avo, times output divider RL/(RL+Ro)",
       "correct": true
      }
     ],
     "distractors": [
      {
       "id": "a",
       "text": "Avo alone",
       "misconception": "Ignores both dividers.",
       "rationale": "The dividers reduce the gain."
      },
      {
       "id": "b",
       "text": "Avo multiplied by RL",
       "misconception": "Treats the load as a gain factor.",
       "rationale": "The load only forms a divider."
      },
      {
       "id": "c",
       "text": "Avo divided by Ri",
       "misconception": "Divides by a resistance.",
       "rationale": "Gain is dimensionless; the dividers are ratios."
      }
     ],
     "explanation": "The signal passes the input divider Ri/(Ri+RS), is multiplied by Avo, then passes the output divider RL/(RL+Ro): G = Ri/(Ri+RS) · Avo · RL/(RL+Ro)."
    }
   ],
   "answer": {
    "text": "Measure Avo with the load removed, Ri with a series variable resistor (half-voltage), Ro with the input zeroed and a half-voltage test at the output, then predict the loaded gain from the two dividers and Avo."
   },
   "distractors": [],
   "explanation": "Measure Avo with the load removed, Ri with a series variable resistor (half-voltage), Ro with the input zeroed and a half-voltage test at the output, then predict the loaded gain from the two dividers and Avo.",
   "resources": [
    {
     "type": "link",
     "href": "lesson-guides/lesson-15.html",
     "label": "Lesson 15 guide",
     "description": "Filled notetaker with expansion notes and worked problem types."
    }
   ],
   "sources": [
    {
     "file": "lesson-guides/lesson-15.html",
     "section": "A3"
    },
    {
     "file": "Equation Sheet 3: Transistor Amplifiers & BJTs",
     "section": "p. 7"
    }
   ]
  }
 ]
});
