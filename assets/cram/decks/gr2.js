window.CourseCram.registerDeck({
 "id": "gr2",
 "title": "GR2 Cram",
 "subtitle": "Lessons 15 to 26",
 "packetTitle": "ECE 321 GR2 Cram Packet",
 "bank": "gr2",
 "studyHref": "index.html#study/gr2",
 "topics": [
  {
   "title": "MOSFET and signal basics",
   "lessons": "Review of Lessons 8-14",
   "slides": [
    {
     "title": "The big picture",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "Prior circuit analysis (KVL, KCL, dividers, Thevenin) is assumed; this topic reviews only what the course added: the MOSFET and how amplifiers use it",
        "A transistor amplifier takes a **small signal** and produces a **larger copy** of it",
        "The transistor only works as an amplifier if it is first set up with **DC voltages and currents** (the **bias**, or Q-point)",
        "So every problem is solved **twice**: a **DC analysis** (find the bias) and a **signal analysis** (find the gain)",
        "GR2 covers how to **model**, **design** and **measure** these amplifiers"
       ]
      },
      {
       "t": "call",
       "kind": "rule",
       "text": "DC first, signal second. Never mix the two in one set of equations."
      }
     ],
     "id": "t1-1"
    },
    {
     "title": "DC, signal and notation",
     "kind": "learn",
     "blocks": [
      {
       "t": "tbl",
       "head": [
        "Quantity",
        "Meaning",
        "Examples"
       ],
       "rows": [
        [
         "Capital letter, capital subscript",
         "DC (bias) value",
         "VGS, ID, VDD"
        ],
        [
         "Lowercase letter, lowercase subscript",
         "Signal only",
         "vgs, id, vin"
        ],
        [
         "Lowercase letter, capital subscript",
         "Total = DC + signal",
         "vGS, iD"
        ]
       ]
      },
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"v_{GS}=V_{GS}+v_{gs}\\qquad i_D=I_D+i_d\"><mrow><msub><mi>v</mi><mrow><mi mathvariant=\"normal\">GS</mi></mrow></msub><mo>=</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">GS</mi></mrow></msub><mo>+</mo><msub><mi>v</mi><mrow><mi mathvariant=\"normal\">gs</mi></mrow></msub><mspace width=\"2em\"/><msub><mi>i</mi><mi mathvariant=\"normal\">D</mi></msub><mo>=</mo><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub><mo>+</mo><msub><mi>i</mi><mi mathvariant=\"normal\">d</mi></msub></mrow></math>"
        }
       ]
      },
      {
       "t": "ul",
       "items": [
        "**Superposition** lets us split the problem: the DC solution does not depend on the signal, and (for small signals) the signal solution does not depend on the DC values except through gm and ro",
        "The **peak** value of a sinusoid is half of its **peak-to-peak** value"
       ]
      }
     ],
     "id": "t1-2"
    },
    {
     "title": "Capacitors in amplifier circuits",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "A capacitor is an **open circuit for DC** and, if it is large, a **short circuit for the signal**: its impedance is 1/(ωC)",
        "**Coupling capacitors** (C1 at the input, C2 at the output) pass the signal and block the DC levels, so source and load do not disturb the bias",
        "**Bypass capacitors** (across RS, or from the gate to ground) put a point at **ac ground** while leaving its DC voltage alone",
        "\"Large\" means the capacitor impedance is **much smaller** than the resistance it is working against at the lowest signal frequency"
       ]
      },
      {
       "t": "call",
       "kind": "rule",
       "text": "DC analysis: capacitors become **opens**.  Signal analysis: large capacitors become **shorts**."
      }
     ],
     "id": "t1-3"
    },
    {
     "title": "Controlled sources and killing sources",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "An amplifier model uses **dependent (controlled) sources**: the source value depends on a voltage or current elsewhere",
        "Voltage-controlled voltage source: **Avo·vi**   (the amplifier model)",
        "Voltage-controlled current source: **gm·vgs**   (the transistor model)",
        "**Killing** an independent source for a resistance calculation: a **voltage source becomes a short**, a **current source becomes an open**",
        "A DC supply is a voltage source, so it is a short (ac ground) for the signal"
       ]
      },
      {
       "t": "call",
       "kind": "watch",
       "text": "Never kill a dependent source: its value is set by the circuit."
      }
     ],
     "id": "t1-4"
    },
    {
     "title": "The MOSFET",
     "kind": "learn",
     "blocks": [
      {
       "t": "fig",
       "src": "assets/study/resources/gr2/mos_struct.svg",
       "alt": "Cross-section of an n-channel MOSFET"
      },
      {
       "t": "ul",
       "items": [
        "Three terminals: **gate (G)**, **drain (D)** and **source (S)**; the body (B) is tied to the source",
        "A positive gate voltage attracts electrons under the oxide and forms a **conducting n-channel** between source and drain once VGS exceeds the **threshold Vt**",
        "The gate is **insulated** by the oxide: **iG = 0** at DC and at low frequency",
        "The gate voltage **controls** the drain current: a voltage-controlled current source"
       ]
      }
     ],
     "id": "t1-5"
    },
    {
     "title": "Overdrive and the device constant",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"V_{ov}=V_{GS}-V_t\"><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">ov</mi></mrow></msub><mo>=</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">GS</mi></mrow></msub><mo>−</mo><msub><mi>V</mi><mi mathvariant=\"normal\">t</mi></msub></mrow></math>",
         "label": "Overdrive",
         "sheet": "S2 §1"
        },
        {
         "math": "<math alttext=\"k_n^{\\prime}=\\mu_nC_{ox}\\quad(\\text{A/V}^2)\"><mrow><msubsup><mi>k</mi><mi mathvariant=\"normal\">n</mi><mrow><mo>′</mo></mrow></msubsup><mo>=</mo><msub><mi>μ</mi><mi mathvariant=\"normal\">n</mi></msub><msub><mi>C</mi><mrow><mi mathvariant=\"normal\">ox</mi></mrow></msub><mspace width=\"1em\"/><mo stretchy=\"false\">(</mo><msup><mtext>A/V</mtext><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow></math>",
         "label": "Process constant",
         "sheet": "S2 §1"
        },
        {
         "math": "<math alttext=\"K_n=k_n^{\\prime}\\,\\dfrac{W}{L}\"><mrow><msub><mi>K</mi><mi mathvariant=\"normal\">n</mi></msub><mo>=</mo><msubsup><mi>k</mi><mi mathvariant=\"normal\">n</mi><mrow><mo>′</mo></mrow></msubsup><mspace width=\"0.17em\"/><mstyle displaystyle=\"true\"><mfrac><mrow><mi>W</mi></mrow><mrow><mi>L</mi></mrow></mfrac></mstyle></mrow></math>",
         "label": "Device constant",
         "sheet": "S2 §1"
        }
       ]
      },
      {
       "t": "ul",
       "items": [
        "**Vt** is the threshold voltage, typically 0.3 V to 4 V",
        "**Vov** is the **overdrive voltage**: how far the gate is above threshold",
        "**Kn** sets how much current the device gives per volt of overdrive; the designer raises it with a wider channel (larger W/L)"
       ]
      }
     ],
     "id": "t1-6"
    },
    {
     "title": "The three regions",
     "kind": "learn",
     "blocks": [
      {
       "t": "fig",
       "src": "assets/study/resources/gr2/mos_iv.svg",
       "alt": "Drain current versus drain-source voltage for several gate voltages"
      },
      {
       "t": "tbl",
       "head": [
        "Region",
        "Condition",
        "Drain current"
       ],
       "rows": [
        [
         "Cutoff",
         "VGS < Vt",
         "ID = 0"
        ],
        [
         "Triode",
         "VGS ≥ Vt and VDS < Vov",
         "ID = Kn[Vov·VDS − ½VDS²]"
        ],
        [
         "Saturation",
         "VGS ≥ Vt and VDS ≥ Vov",
         "ID = ½·Kn·Vov²"
        ]
       ]
      },
      {
       "t": "call",
       "kind": "tip",
       "text": "Amplifiers use **saturation**: the current is set by the gate voltage and is flat against VDS.  @S2 §2"
      }
     ],
     "id": "t1-7"
    },
    {
     "title": "Saturation current and channel-length modulation",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"I_D=\\tfrac{1}{2}K_nV_{ov}^2\"><mrow><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub><mo>=</mo><mstyle displaystyle=\"false\"><mfrac><mrow><mn>1</mn></mrow><mrow><mn>2</mn></mrow></mfrac></mstyle><msub><mi>K</mi><mi mathvariant=\"normal\">n</mi></msub><msubsup><mi>V</mi><mrow><mi mathvariant=\"normal\">ov</mi></mrow><mn>2</mn></msubsup></mrow></math>",
         "label": "Ideal saturation",
         "sheet": "S2 §2"
        },
        {
         "math": "<math alttext=\"I_D=\\tfrac{1}{2}K_nV_{ov}^2\\,(1+\\lambda V_{DS})\"><mrow><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub><mo>=</mo><mstyle displaystyle=\"false\"><mfrac><mrow><mn>1</mn></mrow><mrow><mn>2</mn></mrow></mfrac></mstyle><msub><mi>K</mi><mi mathvariant=\"normal\">n</mi></msub><msubsup><mi>V</mi><mrow><mi mathvariant=\"normal\">ov</mi></mrow><mn>2</mn></msubsup><mspace width=\"0.17em\"/><mo stretchy=\"false\">(</mo><mn>1</mn><mo>+</mo><mi>λ</mi><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">DS</mi></mrow></msub><mo stretchy=\"false\">)</mo></mrow></math>",
         "label": "With λ",
         "sheet": "S2 §2"
        },
        {
         "math": "<math alttext=\"r_o=\\dfrac{V_A}{I_D}=\\dfrac{1}{\\lambda I_D}\"><mrow><msub><mi>r</mi><mi mathvariant=\"normal\">o</mi></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>V</mi><mi mathvariant=\"normal\">A</mi></msub></mrow><mrow><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub></mrow></mfrac></mstyle><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><mn>1</mn></mrow><mrow><mi>λ</mi><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub></mrow></mfrac></mstyle></mrow></math>",
         "label": "Output resistance",
         "sheet": "S2 §2"
        }
       ]
      },
      {
       "t": "ul",
       "items": [
        "In real devices the \"flat\" curve tilts up slightly: **channel-length modulation**",
        "λ (or the Early voltage VA = 1/λ) measures the tilt; the hand method usually sets **λ = 0**, so ro = ∞",
        "The tilt is why a transistor has a finite output resistance **ro**"
       ]
      }
     ],
     "id": "t1-8"
    },
    {
     "title": "Subscripts and the saturation test",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"V_{GS}=V_G-V_S\\qquad V_{DS}=V_D-V_S\\qquad V_{GD}=V_G-V_D=V_{GS}-V_{DS}\"><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">GS</mi></mrow></msub><mo>=</mo><msub><mi>V</mi><mi mathvariant=\"normal\">G</mi></msub><mo>−</mo><msub><mi>V</mi><mi mathvariant=\"normal\">S</mi></msub><mspace width=\"2em\"/><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">DS</mi></mrow></msub><mo>=</mo><msub><mi>V</mi><mi mathvariant=\"normal\">D</mi></msub><mo>−</mo><msub><mi>V</mi><mi mathvariant=\"normal\">S</mi></msub><mspace width=\"2em\"/><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">GD</mi></mrow></msub><mo>=</mo><msub><mi>V</mi><mi mathvariant=\"normal\">G</mi></msub><mo>−</mo><msub><mi>V</mi><mi mathvariant=\"normal\">D</mi></msub><mo>=</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">GS</mi></mrow></msub><mo>−</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">DS</mi></mrow></msub></mrow></math>",
         "sheet": "S2 §4"
        },
        {
         "math": "<math alttext=\"\\text{Saturation}:\\ V_{DS}\\ge V_{ov}\\ \\Longleftrightarrow\\ V_{GD}\\le V_t\"><mrow><mtext>Saturation</mtext><mo>:</mo><mspace width=\"0.25em\"/><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">DS</mi></mrow></msub><mo>≥</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">ov</mi></mrow></msub><mspace width=\"0.25em\"/><mo>⇔</mo><mspace width=\"0.25em\"/><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">GD</mi></mrow></msub><mo>≤</mo><msub><mi>V</mi><mi mathvariant=\"normal\">t</mi></msub></mrow></math>",
         "sheet": "S2 §4"
        }
       ]
      },
      {
       "t": "call",
       "kind": "rule",
       "text": "The first subscript is the point, the second the reference: V_XY = V_X − V_Y."
      },
      {
       "t": "call",
       "kind": "watch",
       "text": "The saturation test compares VDS with **Vov**, not with Vt."
      }
     ],
     "id": "t1-9"
    },
    {
     "title": "Which region? Find ID",
     "kind": "example",
     "blocks": [
      {
       "t": "given",
       "items": [
        "Kn = 2 mA/V²",
        "Vt = 1 V",
        "three bias points (VGS, VDS)"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "VGS = 0.5 V, VDS = 5 V",
         "res": "VGS < Vt, so cutoff: ID = 0"
        },
        {
         "h": "2",
         "text": "VGS = 3 V, VDS = 1 V",
         "res": "Vov = 2 V and VDS = 1 V < Vov: triode, ID = 2[2·1 − ½·1²] = 3 mA"
        },
        {
         "h": "3",
         "text": "VGS = 3 V, VDS = 5 V",
         "res": "Vov = 2 V and VDS = 5 V ≥ Vov: saturation, ID = ½·2·2² = 4 mA"
        }
       ]
      }
     ],
     "id": "t1-10"
    }
   ],
   "id": "t1-mosfet-and-signal-basics"
  },
  {
   "title": "Amplifier models and cascades",
   "lessons": "Lesson 15",
   "slides": [
    {
     "title": "What an amplifier does",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "Output **signal power is larger** than input signal power",
        "The extra power comes from the **DC supplies**, not from the signal: P_DC = VCC·ICC + VEE·IEE",
        "The supplies also **limit the output**: it clips near the supply voltages",
        "Gain can be quoted as a ratio or in decibels: |Av| in dB = 20·log10|Av|"
       ]
      },
      {
       "t": "call",
       "kind": "tip",
       "text": "Voltage gain Av = vo/vi, current gain Ai = io/ii, power gain Ap = po/pi."
      }
     ],
     "id": "t2-1"
    },
    {
     "title": "Gain, ratios and decibels",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"A_v=\\dfrac{v_o}{v_i}\\qquad A_i=\\dfrac{i_o}{i_i}\\qquad A_p=\\dfrac{p_o}{p_i}\"><mrow><msub><mi>A</mi><mi mathvariant=\"normal\">v</mi></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>v</mi><mi mathvariant=\"normal\">o</mi></msub></mrow><mrow><msub><mi>v</mi><mi mathvariant=\"normal\">i</mi></msub></mrow></mfrac></mstyle><mspace width=\"2em\"/><msub><mi>A</mi><mi mathvariant=\"normal\">i</mi></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>i</mi><mi mathvariant=\"normal\">o</mi></msub></mrow><mrow><msub><mi>i</mi><mi mathvariant=\"normal\">i</mi></msub></mrow></mfrac></mstyle><mspace width=\"2em\"/><msub><mi>A</mi><mi mathvariant=\"normal\">p</mi></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>p</mi><mi mathvariant=\"normal\">o</mi></msub></mrow><mrow><msub><mi>p</mi><mi mathvariant=\"normal\">i</mi></msub></mrow></mfrac></mstyle></mrow></math>"
        },
        {
         "math": "<math alttext=\"|A_v|\\ \\text{in dB}=20\\log_{10}|A_v|\"><mrow><mo stretchy=\"false\" lspace=\"0\" rspace=\"0\">|</mo><msub><mi>A</mi><mi mathvariant=\"normal\">v</mi></msub><mo stretchy=\"false\" lspace=\"0\" rspace=\"0\">|</mo><mspace width=\"0.25em\"/><mtext>in dB</mtext><mo>=</mo><mn>20</mn><msub><mi>log</mi><mrow><mn>10</mn></mrow></msub><mo stretchy=\"false\" lspace=\"0\" rspace=\"0\">|</mo><msub><mi>A</mi><mi mathvariant=\"normal\">v</mi></msub><mo stretchy=\"false\" lspace=\"0\" rspace=\"0\">|</mo></mrow></math>"
        }
       ]
      },
      {
       "t": "ul",
       "items": [
        "A gain of 10 is 20 dB, 100 is 40 dB, 1000 is 60 dB: every factor of 10 in voltage adds 20 dB",
        "|Av| = 100 is 40 dB; |Av| = 75 is 37.5 dB",
        "A negative gain means the output is **inverted** (180° phase shift); the dB value uses the magnitude"
       ]
      }
     ],
     "id": "t2-2"
    },
    {
     "title": "Why we use a model",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "The inside of a real amplifier is a complicated circuit; we only care what it does at its **terminals**",
        "A **behavioral model** replaces it with a few components that behave the same at the terminals",
        "Once you have the model you can find the effect of any source and load **without** solving the transistor circuit again",
        "The same model is used to **measure** an unknown amplifier in the lab and to **plan** a cascade"
       ]
      },
      {
       "t": "call",
       "kind": "rule",
       "text": "Input side: a resistor.  Output side: a voltage source behind a resistor."
      }
     ],
     "id": "t2-3"
    },
    {
     "title": "The three-parameter model",
     "kind": "learn",
     "blocks": [
      {
       "t": "fig",
       "src": "assets/study/resources/gr2/two_port.svg",
       "alt": "Two-port amplifier model with source resistance and load"
      },
      {
       "t": "ul",
       "items": [
        "**Ri**: resistance seen looking into the input terminals",
        "**Ro**: resistance seen looking back into the output with the independent input source set to zero",
        "**Avo**: open-circuit voltage gain, vo/vi with the load disconnected (RL = ∞)",
        "The output is a controlled source **Avo·vi in series with Ro**"
       ]
      },
      {
       "t": "call",
       "kind": "tip",
       "text": "Any linear amplifier stage reduces to these three numbers @S3 §1"
      }
     ],
     "id": "t2-4"
    },
    {
     "title": "Source and load losses",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"V_i=V_S\\cdot\\dfrac{R_i}{R_i+R_S}\"><mrow><msub><mi>V</mi><mi mathvariant=\"normal\">i</mi></msub><mo>=</mo><msub><mi>V</mi><mi mathvariant=\"normal\">S</mi></msub><mo>·</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>R</mi><mi mathvariant=\"normal\">i</mi></msub></mrow><mrow><msub><mi>R</mi><mi mathvariant=\"normal\">i</mi></msub><mo>+</mo><msub><mi>R</mi><mi mathvariant=\"normal\">S</mi></msub></mrow></mfrac></mstyle></mrow></math>",
         "label": "Input divider"
        },
        {
         "math": "<math alttext=\"V_o=A_{vo}V_i\\cdot\\dfrac{R_L}{R_L+R_o}\"><mrow><msub><mi>V</mi><mi mathvariant=\"normal\">o</mi></msub><mo>=</mo><msub><mi>A</mi><mrow><mi mathvariant=\"normal\">vo</mi></mrow></msub><msub><mi>V</mi><mi mathvariant=\"normal\">i</mi></msub><mo>·</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>R</mi><mi mathvariant=\"normal\">L</mi></msub></mrow><mrow><msub><mi>R</mi><mi mathvariant=\"normal\">L</mi></msub><mo>+</mo><msub><mi>R</mi><mi mathvariant=\"normal\">o</mi></msub></mrow></mfrac></mstyle></mrow></math>",
         "label": "Output divider"
        },
        {
         "math": "<math alttext=\"A_v=\\dfrac{v_o}{v_i}=A_{vo}\\,\\dfrac{R_L}{R_o+R_L}\"><mrow><msub><mi>A</mi><mi mathvariant=\"normal\">v</mi></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>v</mi><mi mathvariant=\"normal\">o</mi></msub></mrow><mrow><msub><mi>v</mi><mi mathvariant=\"normal\">i</mi></msub></mrow></mfrac></mstyle><mo>=</mo><msub><mi>A</mi><mrow><mi mathvariant=\"normal\">vo</mi></mrow></msub><mspace width=\"0.17em\"/><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>R</mi><mi mathvariant=\"normal\">L</mi></msub></mrow><mrow><msub><mi>R</mi><mi mathvariant=\"normal\">o</mi></msub><mo>+</mo><msub><mi>R</mi><mi mathvariant=\"normal\">L</mi></msub></mrow></mfrac></mstyle></mrow></math>",
         "label": "Loaded gain",
         "sheet": "S3 §1"
        },
        {
         "math": "<math alttext=\"G_v=\\dfrac{v_o}{v_s}=\\dfrac{R_i}{R_s+R_i}\\,A_{vo}\\,\\dfrac{R_L}{R_o+R_L}\"><mrow><msub><mi>G</mi><mi mathvariant=\"normal\">v</mi></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>v</mi><mi mathvariant=\"normal\">o</mi></msub></mrow><mrow><msub><mi>v</mi><mi mathvariant=\"normal\">s</mi></msub></mrow></mfrac></mstyle><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>R</mi><mi mathvariant=\"normal\">i</mi></msub></mrow><mrow><msub><mi>R</mi><mi mathvariant=\"normal\">s</mi></msub><mo>+</mo><msub><mi>R</mi><mi mathvariant=\"normal\">i</mi></msub></mrow></mfrac></mstyle><mspace width=\"0.17em\"/><msub><mi>A</mi><mrow><mi mathvariant=\"normal\">vo</mi></mrow></msub><mspace width=\"0.17em\"/><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>R</mi><mi mathvariant=\"normal\">L</mi></msub></mrow><mrow><msub><mi>R</mi><mi mathvariant=\"normal\">o</mi></msub><mo>+</mo><msub><mi>R</mi><mi mathvariant=\"normal\">L</mi></msub></mrow></mfrac></mstyle></mrow></math>",
         "label": "Overall gain",
         "sheet": "S3 §1"
        }
       ]
      },
      {
       "t": "call",
       "kind": "rule",
       "text": "Both dividers are below 1, so |Gv| < |Avo|. They approach 1 when **Ri ≫ RS** and **Ro ≪ RL**."
      },
      {
       "t": "call",
       "kind": "watch",
       "text": "Avo already assumes no load. Use it only before the output divider."
      }
     ],
     "id": "t2-5"
    },
    {
     "title": "Deriving the overall gain",
     "kind": "learn",
     "blocks": [
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Input loop: source RS drives Ri",
         "res": "vi = vs·Ri/(RS + Ri)"
        },
        {
         "h": "2",
         "text": "Amplifier output (no load): the controlled source",
         "res": "Avo·vi appears behind Ro"
        },
        {
         "h": "3",
         "text": "Output loop: Ro drives RL",
         "res": "vo = Avo·vi·RL/(Ro + RL)"
        },
        {
         "h": "4",
         "text": "Substitute step 1 into step 3",
         "res": "vo/vs = [Ri/(RS + Ri)]·Avo·[RL/(Ro + RL)]  @S3 §1"
        }
       ]
      },
      {
       "t": "call",
       "kind": "tip",
       "text": "Every \"loss\" is just a voltage divider. Spot the two dividers and write the product."
      }
     ],
     "id": "t2-6"
    },
    {
     "title": "Source and load loss on one stage",
     "kind": "example",
     "blocks": [
      {
       "t": "given",
       "items": [
        "RS = 1 kΩ",
        "Ri = 9 kΩ, Avo = −100, Ro = 0.5 kΩ",
        "RL = 1.5 kΩ"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Input divider",
         "res": "Ri/(RS + Ri) = 9/10 = 0.9"
        },
        {
         "h": "2",
         "text": "Output divider",
         "res": "RL/(Ro + RL) = 1.5/2.0 = 0.75"
        },
        {
         "h": "3",
         "text": "Loaded gain (no RS)",
         "res": "Av = −100 × 0.75 = -75"
        },
        {
         "h": "4",
         "text": "Overall gain (with RS)",
         "res": "Gv = 0.9 × -75 = -67.5"
        },
        {
         "h": "5",
         "text": "Compare with the open-circuit gain",
         "res": "−100 became -67.5: about 32.5 % of the gain was lost to the two dividers"
        }
       ]
      }
     ],
     "id": "t2-7"
    },
    {
     "title": "Av versus Gv",
     "kind": "learn",
     "blocks": [
      {
       "t": "tbl",
       "head": [
        "",
        "Starts at",
        "Includes RS?",
        "Includes RL?"
       ],
       "rows": [
        [
         "Avo",
         "amplifier input",
         "no",
         "no (open circuit)"
        ],
        [
         "Av",
         "amplifier input",
         "no",
         "yes"
        ],
        [
         "Gv",
         "the source VS",
         "yes",
         "yes"
        ]
       ]
      },
      {
       "t": "ul",
       "items": [
        "An **ideal voltage amplifier** has Ri = ∞ and Ro = 0: no losses at either end",
        "Real stages trade these off, which is why stages are combined (see the CS/CD topics)"
       ]
      },
      {
       "t": "call",
       "kind": "watch",
       "text": "A quoted \"gain\" may be Av or Gv. Check where it starts."
      }
     ],
     "id": "t2-8"
    },
    {
     "title": "Cascades: stage by stage",
     "kind": "learn",
     "blocks": [
      {
       "t": "fig",
       "src": "assets/study/resources/gr2/cascade.svg",
       "alt": "Two-stage cascade of two-port models"
      },
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"A_{v,k}=A_{vo,k}\\,\\dfrac{R_{i,k+1}}{R_{i,k+1}+R_{o,k}}\"><mrow><msub><mi>A</mi><mrow><mi mathvariant=\"normal\">v</mi><mo>,</mo><mi mathvariant=\"normal\">k</mi></mrow></msub><mo>=</mo><msub><mi>A</mi><mrow><mi mathvariant=\"normal\">vo</mi><mo>,</mo><mi mathvariant=\"normal\">k</mi></mrow></msub><mspace width=\"0.17em\"/><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">i</mi><mo>,</mo><mi mathvariant=\"normal\">k</mi><mo>+</mo><mn>1</mn></mrow></msub></mrow><mrow><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">i</mi><mo>,</mo><mi mathvariant=\"normal\">k</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>+</mo><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">o</mi><mo>,</mo><mi mathvariant=\"normal\">k</mi></mrow></msub></mrow></mfrac></mstyle></mrow></math>",
         "label": "Stage k, loaded"
        },
        {
         "math": "<math alttext=\"R_{i,k+1}\\ \\to\\ R_L\"><mrow><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">i</mi><mo>,</mo><mi mathvariant=\"normal\">k</mi><mo>+</mo><mn>1</mn></mrow></msub><mspace width=\"0.25em\"/><mo>→</mo><mspace width=\"0.25em\"/><msub><mi>R</mi><mi mathvariant=\"normal\">L</mi></msub></mrow></math>",
         "label": "Last stage"
        },
        {
         "math": "<math alttext=\"A_v=A_{v1}A_{v2}A_{v3}\\cdots\\qquad G_v=\\dfrac{R_{i1}}{R_S+R_{i1}}\\,A_v\"><mrow><msub><mi>A</mi><mi mathvariant=\"normal\">v</mi></msub><mo>=</mo><msub><mi>A</mi><mrow><mi mathvariant=\"normal\">v</mi><mn>1</mn></mrow></msub><msub><mi>A</mi><mrow><mi mathvariant=\"normal\">v</mi><mn>2</mn></mrow></msub><msub><mi>A</mi><mrow><mi mathvariant=\"normal\">v</mi><mn>3</mn></mrow></msub><mo>⋯</mo><mspace width=\"2em\"/><msub><mi>G</mi><mi mathvariant=\"normal\">v</mi></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">i</mi><mn>1</mn></mrow></msub></mrow><mrow><msub><mi>R</mi><mi mathvariant=\"normal\">S</mi></msub><mo>+</mo><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">i</mi><mn>1</mn></mrow></msub></mrow></mfrac></mstyle><mspace width=\"0.17em\"/><msub><mi>A</mi><mi mathvariant=\"normal\">v</mi></msub></mrow></math>"
        }
       ]
      },
      {
       "t": "ul",
       "items": [
        "Each stage is loaded by the **next stage's input resistance**",
        "Typical roles: input stage (high Ri), middle stages (gain), output stage (low Ro)"
       ]
      }
     ],
     "id": "t2-9"
    },
    {
     "title": "Cascade pitfalls",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "Do **not** just multiply the open-circuit gains: the loading dividers are part of the answer",
        "The divider pairs a stage's **own Ro** with the **next** stage's Ri (not its own Ri)",
        "Removing a stage changes the loading on the one before it, so the total gain does not simply divide by that stage's gain",
        "Av never includes RS. Gv does."
       ]
      }
     ],
     "id": "t2-10"
    },
    {
     "title": "Two-stage gain with loading",
     "kind": "example",
     "blocks": [
      {
       "t": "fig",
       "src": "assets/study/resources/gr2/cascade.svg",
       "alt": "Two-stage cascade"
      },
      {
       "t": "given",
       "items": [
        "RS = 10 kΩ",
        "Ri1 = 40 kΩ, Avo1 = −100, Ro1 = 10 kΩ",
        "Ri2 = 90 kΩ, Avo2 = 0.95, Ro2 = 50 Ω",
        "RL = 100 Ω"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Stage 1 sees Ri2: Avo1 · Ri2/(Ri2+Ro1)",
         "res": "−100 × 0.9 = -90"
        },
        {
         "h": "2",
         "text": "Stage 2 sees RL: Avo2 · RL/(RL+Ro2)",
         "res": "0.95 × 0.667 = 0.633"
        },
        {
         "h": "3",
         "text": "Av = product of loaded gains",
         "res": "-90 × 0.633 = -57"
        },
        {
         "h": "4",
         "text": "Add the source divider Ri1/(Ri1+RS)",
         "res": "Gv = 0.8 × -57 = -45.6"
        }
       ]
      }
     ],
     "id": "t2-11"
    },
    {
     "title": "gr2-model-006",
     "kind": "q",
     "ref": "gr2-model-006",
     "blocks": [],
     "id": "t2-12"
    },
    {
     "title": "gr2-wk-004",
     "kind": "workout",
     "ref": "gr2-wk-004",
     "blocks": [],
     "id": "t2-13"
    }
   ],
   "id": "t2-amplifier-models-and-cascades"
  },
  {
   "title": "Measuring Ri, Ro and Avo",
   "lessons": "Lesson 15",
   "slides": [
    {
     "title": "The setup",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "Treat the amplifier as a **black box**: you only apply a signal and read voltages",
        "Use the function generator and scope with **peak-to-peak** readings",
        "Keep the DC supplies **on** for every measurement",
        "Do each measurement with the correct load: Avo needs **no load**, Av needs the **specified RL**"
       ]
      },
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"A_{vo}=\\dfrac{V_{out,pp}}{V_{in,pp}}\"><mrow><msub><mi>A</mi><mrow><mi mathvariant=\"normal\">vo</mi></mrow></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">out</mi><mo>,</mo><mi mathvariant=\"normal\">pp</mi></mrow></msub></mrow><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">in</mi><mo>,</mo><mi mathvariant=\"normal\">pp</mi></mrow></msub></mrow></mfrac></mstyle></mrow></math>",
         "note": "load disconnected",
         "sheet": "S3 §8"
        },
        {
         "math": "<math alttext=\"A_v=\\dfrac{V_{out,pp}}{V_{in,pp}}\"><mrow><msub><mi>A</mi><mi mathvariant=\"normal\">v</mi></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">out</mi><mo>,</mo><mi mathvariant=\"normal\">pp</mi></mrow></msub></mrow><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">in</mi><mo>,</mo><mi mathvariant=\"normal\">pp</mi></mrow></msub></mrow></mfrac></mstyle></mrow></math>",
         "note": "specified load connected",
         "sheet": "S3 §8"
        }
       ]
      }
     ],
     "id": "t3-1"
    },
    {
     "title": "Why the half-voltage trick works",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "With a series resistor R, the input is a **divider**: vi = vs·Ri/(R + Ri)",
        "It equals **vs/2** only when **R = Ri**",
        "So when the scope shows half the generator voltage, the variable resistor **equals** Ri: you read Ri off the resistor",
        "The same argument on the output side gives Ro: the test source drives Ro through R, and v_o = Vtest/2 when R = Ro"
       ]
      },
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"v_i=v_s\\dfrac{R_i}{R+R_i}=\\dfrac{v_s}{2}\\ \\Longleftrightarrow\\ R=R_i\"><mrow><msub><mi>v</mi><mi mathvariant=\"normal\">i</mi></msub><mo>=</mo><msub><mi>v</mi><mi mathvariant=\"normal\">s</mi></msub><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>R</mi><mi mathvariant=\"normal\">i</mi></msub></mrow><mrow><mi>R</mi><mo>+</mo><msub><mi>R</mi><mi mathvariant=\"normal\">i</mi></msub></mrow></mfrac></mstyle><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>v</mi><mi mathvariant=\"normal\">s</mi></msub></mrow><mrow><mn>2</mn></mrow></mfrac></mstyle><mspace width=\"0.25em\"/><mo>⇔</mo><mspace width=\"0.25em\"/><mi>R</mi><mo>=</mo><msub><mi>R</mi><mi mathvariant=\"normal\">i</mi></msub></mrow></math>"
        }
       ]
      }
     ],
     "id": "t3-2"
    },
    {
     "title": "Input resistance Ri",
     "kind": "learn",
     "blocks": [
      {
       "t": "fig",
       "src": "assets/study/resources/gr2/meas_ri.svg",
       "alt": "Measuring input resistance with a variable resistor in series with the source"
      },
      {
       "t": "ul",
       "items": [
        "**Potentiometer:** series pot Rpot; adjust until the amplifier input is **half** the generator voltage (V2,pp = 0.5·V1,pp); then **Ri = Rpot**  @S3 §8",
        "**Test resistor:** insert a known Rtest in series with the input and read both voltages"
       ]
      },
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"R_i=R_{test}\\,\\dfrac{V_{2,pp}}{V_{1,pp}-V_{2,pp}}\"><mrow><msub><mi>R</mi><mi mathvariant=\"normal\">i</mi></msub><mo>=</mo><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">test</mi></mrow></msub><mspace width=\"0.17em\"/><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>V</mi><mrow><mn>2</mn><mo>,</mo><mi mathvariant=\"normal\">pp</mi></mrow></msub></mrow><mrow><msub><mi>V</mi><mrow><mn>1</mn><mo>,</mo><mi mathvariant=\"normal\">pp</mi></mrow></msub><mo>−</mo><msub><mi>V</mi><mrow><mn>2</mn><mo>,</mo><mi mathvariant=\"normal\">pp</mi></mrow></msub></mrow></mfrac></mstyle></mrow></math>",
         "sheet": "S3 §8"
        }
       ]
      }
     ],
     "id": "t3-3"
    },
    {
     "title": "Output resistance Ro",
     "kind": "learn",
     "blocks": [
      {
       "t": "fig",
       "src": "assets/study/resources/gr2/meas_ro.svg",
       "alt": "Measuring output resistance with the input shorted and a test source through a variable resistor"
      },
      {
       "t": "ul",
       "items": [
        "**Short the ac input to ground** (DC supplies stay on): the controlled source Avo·vi becomes 0",
        "Drive the **output** from an external generator through Rpot or Rtest",
        "When V2,pp = 0.5·V1,pp, **Ro = Rpot**  @S3 §8"
       ]
      },
      {
       "t": "call",
       "kind": "tip",
       "text": "Two-reading shortcut with a known load: Ro = RL·(v_open / v_loaded − 1)"
      }
     ],
     "id": "t3-4"
    },
    {
     "title": "A lab checklist",
     "kind": "learn",
     "blocks": [
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Set the DC supplies and confirm the bias",
         "res": "the amplifier must be in its normal operating state"
        },
        {
         "h": "2",
         "text": "Choose a small input",
         "res": "the output must not clip; check the waveform"
        },
        {
         "h": "3",
         "text": "Measure Avo with the load removed",
         "res": "then Av with the specified RL"
        },
        {
         "h": "4",
         "text": "Measure Ri with the series pot or Rtest",
         "res": "read V1,pp and V2,pp"
        },
        {
         "h": "5",
         "text": "Measure Ro: input to ground, drive the output",
         "res": "DC supplies stay on"
        },
        {
         "h": "6",
         "text": "Predict, then compare",
         "res": "Gv = Ri/(RS + Ri) · Avo · RL/(Ro + RL)"
        }
       ]
      },
      {
       "t": "call",
       "kind": "watch",
       "text": "A reading taken while the output is clipping is meaningless: reduce the input first."
      }
     ],
     "id": "t3-5"
    },
    {
     "title": "Find Ri and Ro from readings",
     "kind": "example",
     "blocks": [
      {
       "t": "given",
       "items": [
        "Ri test: Rtest = 10 Ω, V1 = 1.00 V, V2 = 0.80 V",
        "Ro readings: v_open = 1.00 V, v_loaded = 0.80 V, RL = 1 kΩ"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Ri from the test-resistor formula",
         "res": "Ri = 10 × 0.8 / (1 − 0.8) = 40 Ω"
        },
        {
         "h": "2",
         "text": "Ratio of the two Ro readings",
         "res": "1.0/0.8 = 1.25"
        },
        {
         "h": "3",
         "text": "Ro = RL (ratio − 1)",
         "res": "1 kΩ × 0.25 = 250 Ω"
        },
        {
         "h": "4",
         "text": "Check with the output divider RL/(RL+Ro)",
         "res": "0.8, matching 0.8 / 1.0"
        }
       ]
      },
      {
       "t": "call",
       "kind": "watch",
       "text": "Measuring Avo with the load attached gives the loaded gain, not Avo. Leaving the input signal on while measuring Ro adds the Avo·vi term."
      }
     ],
     "id": "t3-6"
    },
    {
     "title": "gr2-measure-001",
     "kind": "q",
     "ref": "gr2-measure-001",
     "blocks": [],
     "id": "t3-7"
    },
    {
     "title": "gr2-measure-005",
     "kind": "q",
     "ref": "gr2-measure-005",
     "blocks": [],
     "id": "t3-8"
    },
    {
     "title": "gr2-wk-009",
     "kind": "workout",
     "ref": "gr2-wk-009",
     "blocks": [],
     "id": "t3-9"
    }
   ],
   "id": "t3-measuring-ri-ro-and-avo"
  },
  {
   "title": "Voltage transfer curve and Q-point",
   "lessons": "Lesson 15",
   "slides": [
    {
     "title": "The common-source stage",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "Gate is the input (vGS), drain is the output (vo = vDS), source at ground",
        "The drain resistor turns drain current into a voltage",
        "KVL on the output side gives vo for any region"
       ]
      },
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"v_o=v_{DS}=V_{DD}-R_D\\,i_D\"><mrow><msub><mi>v</mi><mi mathvariant=\"normal\">o</mi></msub><mo>=</mo><msub><mi>v</mi><mrow><mi mathvariant=\"normal\">DS</mi></mrow></msub><mo>=</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">DD</mi></mrow></msub><mo>−</mo><msub><mi>R</mi><mi mathvariant=\"normal\">D</mi></msub><mspace width=\"0.17em\"/><msub><mi>i</mi><mi mathvariant=\"normal\">D</mi></msub></mrow></math>"
        },
        {
         "math": "<math alttext=\"V_{ov}=V_{GS}-V_t\"><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">ov</mi></mrow></msub><mo>=</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">GS</mi></mrow></msub><mo>−</mo><msub><mi>V</mi><mi mathvariant=\"normal\">t</mi></msub></mrow></math>",
         "label": "Overdrive",
         "sheet": "S2 §1"
        },
        {
         "math": "<math alttext=\"I_D=\\tfrac{1}{2}K_nV_{ov}^2\"><mrow><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub><mo>=</mo><mstyle displaystyle=\"false\"><mfrac><mrow><mn>1</mn></mrow><mrow><mn>2</mn></mrow></mfrac></mstyle><msub><mi>K</mi><mi mathvariant=\"normal\">n</mi></msub><msubsup><mi>V</mi><mrow><mi mathvariant=\"normal\">ov</mi></mrow><mn>2</mn></msubsup></mrow></math>",
         "label": "Saturation current",
         "sheet": "S2 §2"
        }
       ]
      }
     ],
     "id": "t4-1"
    },
    {
     "title": "Reading the curve as a table",
     "kind": "learn",
     "blocks": [
      {
       "t": "tbl",
       "head": [
        "vGS (V)",
        "Region",
        "vo = vDS (V)"
       ],
       "rows": [
        [
         "0.5",
         "cutoff",
         "10"
        ],
        [
         "1",
         "cutoff",
         "10"
        ],
        [
         "1.5",
         "saturation",
         "9.5"
        ],
        [
         "2",
         "saturation",
         "8"
        ],
        [
         "2.5",
         "saturation",
         "5.5"
        ],
        [
         "3",
         "saturation",
         "2"
        ],
        [
         "4",
         "triode",
         "0.892"
        ],
        [
         "5",
         "triode",
         "0.636"
        ]
       ]
      },
      {
       "t": "ul",
       "items": [
        "Same stage as the worked example: VDD = 10 V, Kn = 2 mA/V², RD = 2 kΩ, Vt = 1 V",
        "Below Vt the output sits at VDD; between A and B it falls steeply (high gain); past B it flattens in triode"
       ]
      },
      {
       "t": "call",
       "kind": "tip",
       "text": "To find a point: pick vGS, decide the region, then use that region's equation for vo."
      }
     ],
     "id": "t4-2"
    },
    {
     "title": "Three regions",
     "kind": "learn",
     "blocks": [
      {
       "t": "fig",
       "src": "assets/study/resources/gr2/vtc.svg",
       "alt": "Voltage transfer curve with points A, B and Q"
      },
      {
       "t": "ul",
       "items": [
        "**Cutoff** (vGS < Vt): iD = 0, so vo = VDD",
        "**Saturation** (A to B): the amplifying region",
        "**Triode** (beyond B): vo falls slowly toward 0"
       ]
      },
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"v_D=V_{DD}-R_D\\left[\\tfrac{1}{2}K_n(v_{GS}-V_t)^2\\right]\"><mrow><msub><mi>v</mi><mi mathvariant=\"normal\">D</mi></msub><mo>=</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">DD</mi></mrow></msub><mo>−</mo><msub><mi>R</mi><mi mathvariant=\"normal\">D</mi></msub><mrow><mo stretchy=\"true\">[</mo><mstyle displaystyle=\"false\"><mfrac><mrow><mn>1</mn></mrow><mrow><mn>2</mn></mrow></mfrac></mstyle><msub><mi>K</mi><mi mathvariant=\"normal\">n</mi></msub><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mrow><mi mathvariant=\"normal\">GS</mi></mrow></msub><mo>−</mo><msub><mi>V</mi><mi mathvariant=\"normal\">t</mi></msub><msup><mo stretchy=\"false\">)</mo><mn>2</mn></msup><mo stretchy=\"true\">]</mo></mrow></mrow></math>",
         "label": "Saturation",
         "sheet": "S3 §2"
        },
        {
         "math": "<math alttext=\"i_D=K_n\\left[V_{ov}v_{DS}-\\tfrac{1}{2}v_{DS}^2\\right]\"><mrow><msub><mi>i</mi><mi mathvariant=\"normal\">D</mi></msub><mo>=</mo><msub><mi>K</mi><mi mathvariant=\"normal\">n</mi></msub><mrow><mo stretchy=\"true\">[</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">ov</mi></mrow></msub><msub><mi>v</mi><mrow><mi mathvariant=\"normal\">DS</mi></mrow></msub><mo>−</mo><mstyle displaystyle=\"false\"><mfrac><mrow><mn>1</mn></mrow><mrow><mn>2</mn></mrow></mfrac></mstyle><msubsup><mi>v</mi><mrow><mi mathvariant=\"normal\">DS</mi></mrow><mn>2</mn></msubsup><mo stretchy=\"true\">]</mo></mrow></mrow></math>",
         "label": "Triode",
         "sheet": "S2 §2"
        }
       ]
      }
     ],
     "id": "t4-3"
    },
    {
     "title": "Points A, B and C",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "**A:** vGS = Vt and vDS = VDD, the device turns on  @S3 §2",
        "**B:** vDS = Vov, the edge of saturation (largest gain)  @S3 §2",
        "**C:** deep triode, vDS ≈ 0 V  @S3 §2"
       ]
      },
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"V_{DS,B}=V_{ov,B}=\\dfrac{\\sqrt{1+2K_nR_DV_{DD}}-1}{K_nR_D}\"><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">DS</mi><mo>,</mo><mi mathvariant=\"normal\">B</mi></mrow></msub><mo>=</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">ov</mi><mo>,</mo><mi mathvariant=\"normal\">B</mi></mrow></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msqrt><mrow><mn>1</mn><mo>+</mo><mn>2</mn><msub><mi>K</mi><mi mathvariant=\"normal\">n</mi></msub><msub><mi>R</mi><mi mathvariant=\"normal\">D</mi></msub><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">DD</mi></mrow></msub></mrow></msqrt><mo>−</mo><mn>1</mn></mrow><mrow><msub><mi>K</mi><mi mathvariant=\"normal\">n</mi></msub><msub><mi>R</mi><mi mathvariant=\"normal\">D</mi></msub></mrow></mfrac></mstyle></mrow></math>",
         "sheet": "S3 §2"
        },
        {
         "math": "<math alttext=\"V_{GS,B}=V_t+V_{DS,B}\"><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">GS</mi><mo>,</mo><mi mathvariant=\"normal\">B</mi></mrow></msub><mo>=</mo><msub><mi>V</mi><mi mathvariant=\"normal\">t</mi></msub><mo>+</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">DS</mi><mo>,</mo><mi mathvariant=\"normal\">B</mi></mrow></msub></mrow></math>"
        }
       ]
      },
      {
       "t": "call",
       "kind": "why",
       "text": "At B set vDS = vGS − Vt in the saturation equation: ½·Kn·RD·V² + V − VDD = 0, then take the positive root."
      }
     ],
     "id": "t4-4"
    },
    {
     "title": "Small signal versus large signal",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "The whole curve is the **large-signal** behavior: nonlinear",
        "Near Q the curve looks like a **straight line** (its tangent); the slope of that line is the small-signal gain",
        "If the input swings so far that the output leaves the steep part, the output is **distorted** (clipped or flattened)",
        "The usable output swing is limited above by the supply and below by the edge of saturation (point B)"
       ]
      },
      {
       "t": "call",
       "kind": "rule",
       "text": "Small signal = stay on the tangent line."
      }
     ],
     "id": "t4-5"
    },
    {
     "title": "Q-point and gain",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"A_{vo}=\\dfrac{dv_{DS}}{dv_{GS}}\\ \\text{at } Q\\ =-K_nR_DV_{ov}=-g_mR_D\"><mrow><msub><mi>A</mi><mrow><mi mathvariant=\"normal\">vo</mi></mrow></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><mi>d</mi><msub><mi>v</mi><mrow><mi mathvariant=\"normal\">DS</mi></mrow></msub></mrow><mrow><mi>d</mi><msub><mi>v</mi><mrow><mi mathvariant=\"normal\">GS</mi></mrow></msub></mrow></mfrac></mstyle><mspace width=\"0.25em\"/><mtext>at </mtext><mi>Q</mi><mspace width=\"0.25em\"/><mo>=</mo><mo form=\"prefix\" lspace=\"0\" rspace=\"0.04em\">−</mo><msub><mi>K</mi><mi mathvariant=\"normal\">n</mi></msub><msub><mi>R</mi><mi mathvariant=\"normal\">D</mi></msub><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">ov</mi></mrow></msub><mo>=</mo><mo form=\"prefix\" lspace=\"0\" rspace=\"0.04em\">−</mo><msub><mi>g</mi><mi mathvariant=\"normal\">m</mi></msub><msub><mi>R</mi><mi mathvariant=\"normal\">D</mi></msub></mrow></math>",
         "sheet": "S3 §2"
        }
       ]
      },
      {
       "t": "ul",
       "items": [
        "The **slope at Q is the small-signal gain**; the minus sign is a 180° inversion",
        "**Q near B:** more gain, but little room for vo to swing down before triode",
        "**Q near A:** less gain and little room toward cutoff",
        "Place Q **between A and B**, and keep vgs small enough that the section is linear"
       ]
      },
      {
       "t": "call",
       "kind": "watch",
       "text": "Do not bias at B or at A itself."
      }
     ],
     "id": "t4-6"
    },
    {
     "title": "Find B, then the gain at a chosen Q",
     "kind": "example",
     "blocks": [
      {
       "t": "fig",
       "src": "assets/study/resources/gr2/vtc.svg",
       "alt": "Voltage transfer curve"
      },
      {
       "t": "given",
       "items": [
        "VDD = 10 V",
        "Kn = 2 mA/V²",
        "RD = 2 kΩ",
        "Vt = 1 V"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Kn·RD, then VDS at B",
         "res": "Kn·RD = 4 /V;  VDS,B = (√81 − 1)/4 = 2 V"
        },
        {
         "h": "2",
         "text": "VGS at B",
         "res": "1 + 2 = 3 V"
        },
        {
         "h": "3",
         "text": "Pick Q at VGS = 2 V: overdrive and current",
         "res": "VOV = 1 V;  ID = ½·2·1² = 1 mA"
        },
        {
         "h": "4",
         "text": "Q output voltage",
         "res": "VDS = 10 − 1·2 = 8 V (between A and B)"
        },
        {
         "h": "5",
         "text": "Gain = −Kn·RD·Vov = −gm·RD",
         "res": "gm = Kn·VOV = 2 mS;  Av = −2 × 2 = -4"
        }
       ]
      }
     ],
     "id": "t4-7"
    },
    {
     "title": "gr2-vtc-003",
     "kind": "q",
     "ref": "gr2-vtc-003",
     "blocks": [],
     "id": "t4-8"
    },
    {
     "title": "gr2-vtc-006",
     "kind": "q",
     "ref": "gr2-vtc-006",
     "blocks": [],
     "id": "t4-9"
    }
   ],
   "id": "t4-voltage-transfer-curve-and-q-p"
  },
  {
   "title": "Small-signal model and gm",
   "lessons": "Lessons 16, 17",
   "slides": [
    {
     "title": "Notation: who is who",
     "kind": "learn",
     "blocks": [
      {
       "t": "tbl",
       "head": [
        "Symbol",
        "Meaning",
        "Example"
       ],
       "rows": [
        [
         "Capital + capital subscript",
         "DC value",
         "VGS, ID"
        ],
        [
         "Lowercase + lowercase subscript",
         "Signal only",
         "vgs, id"
        ],
        [
         "Lowercase + capital subscript",
         "Total = DC + signal",
         "vGS, iD"
        ]
       ]
      },
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"v_{GS}=V_{GS}+v_{gs}\\qquad i_D=I_D+i_d\"><mrow><msub><mi>v</mi><mrow><mi mathvariant=\"normal\">GS</mi></mrow></msub><mo>=</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">GS</mi></mrow></msub><mo>+</mo><msub><mi>v</mi><mrow><mi mathvariant=\"normal\">gs</mi></mrow></msub><mspace width=\"2em\"/><msub><mi>i</mi><mi mathvariant=\"normal\">D</mi></msub><mo>=</mo><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub><mo>+</mo><msub><mi>i</mi><mi mathvariant=\"normal\">d</mi></msub></mrow></math>"
        }
       ]
      },
      {
       "t": "call",
       "kind": "rule",
       "text": "The signal rides on the DC bias. DC analysis first, signal analysis second."
      }
     ],
     "id": "t5-1"
    },
    {
     "title": "Why a model, and where it comes from",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"i_D=\\tfrac{1}{2}K_n(V_{GS}+v_{gs}-V_t)^2=I_D+K_nV_{ov}v_{gs}+\\tfrac{1}{2}K_nv_{gs}^2\"><mrow><msub><mi>i</mi><mi mathvariant=\"normal\">D</mi></msub><mo>=</mo><mstyle displaystyle=\"false\"><mfrac><mrow><mn>1</mn></mrow><mrow><mn>2</mn></mrow></mfrac></mstyle><msub><mi>K</mi><mi mathvariant=\"normal\">n</mi></msub><mo stretchy=\"false\">(</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">GS</mi></mrow></msub><mo>+</mo><msub><mi>v</mi><mrow><mi mathvariant=\"normal\">gs</mi></mrow></msub><mo>−</mo><msub><mi>V</mi><mi mathvariant=\"normal\">t</mi></msub><msup><mo stretchy=\"false\">)</mo><mn>2</mn></msup><mo>=</mo><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub><mo>+</mo><msub><mi>K</mi><mi mathvariant=\"normal\">n</mi></msub><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">ov</mi></mrow></msub><msub><mi>v</mi><mrow><mi mathvariant=\"normal\">gs</mi></mrow></msub><mo>+</mo><mstyle displaystyle=\"false\"><mfrac><mrow><mn>1</mn></mrow><mrow><mn>2</mn></mrow></mfrac></mstyle><msub><mi>K</mi><mi mathvariant=\"normal\">n</mi></msub><msubsup><mi>v</mi><mrow><mi mathvariant=\"normal\">gs</mi></mrow><mn>2</mn></msubsup></mrow></math>"
        }
       ]
      },
      {
       "t": "ul",
       "items": [
        "The first term is the DC current, the second is **linear in vgs**",
        "The third is the distortion term; it is small only if **vgs ≪ 2·Vov**",
        "So id ≈ gm·vgs with gm = Kn·Vov: the transistor becomes a linear controlled source"
       ]
      },
      {
       "t": "call",
       "kind": "watch",
       "text": "Small-signal results are valid only while the signal is small. Check linearity at the end of every design."
      }
     ],
     "id": "t5-2"
    },
    {
     "title": "Where gm and ro come from",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"g_m=\\dfrac{\\partial i_D}{\\partial v_{GS}}\\ \\text{at } Q=K_nV_{ov}\"><mrow><msub><mi>g</mi><mi mathvariant=\"normal\">m</mi></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><mi>∂</mi><msub><mi>i</mi><mi mathvariant=\"normal\">D</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>v</mi><mrow><mi mathvariant=\"normal\">GS</mi></mrow></msub></mrow></mfrac></mstyle><mspace width=\"0.25em\"/><mtext>at </mtext><mi>Q</mi><mo>=</mo><msub><mi>K</mi><mi mathvariant=\"normal\">n</mi></msub><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">ov</mi></mrow></msub></mrow></math>"
        },
        {
         "math": "<math alttext=\"i_D=\\tfrac{1}{2}K_nV_{ov}^2(1+\\lambda v_{DS})\\ \\Rightarrow\\ \\dfrac{1}{r_o}=\\dfrac{\\partial i_D}{\\partial v_{DS}}=\\lambda I_D\"><mrow><msub><mi>i</mi><mi mathvariant=\"normal\">D</mi></msub><mo>=</mo><mstyle displaystyle=\"false\"><mfrac><mrow><mn>1</mn></mrow><mrow><mn>2</mn></mrow></mfrac></mstyle><msub><mi>K</mi><mi mathvariant=\"normal\">n</mi></msub><msubsup><mi>V</mi><mrow><mi mathvariant=\"normal\">ov</mi></mrow><mn>2</mn></msubsup><mo stretchy=\"false\">(</mo><mn>1</mn><mo>+</mo><mi>λ</mi><msub><mi>v</mi><mrow><mi mathvariant=\"normal\">DS</mi></mrow></msub><mo stretchy=\"false\">)</mo><mspace width=\"0.25em\"/><mo>⇒</mo><mspace width=\"0.25em\"/><mstyle displaystyle=\"true\"><mfrac><mrow><mn>1</mn></mrow><mrow><msub><mi>r</mi><mi mathvariant=\"normal\">o</mi></msub></mrow></mfrac></mstyle><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><mi>∂</mi><msub><mi>i</mi><mi mathvariant=\"normal\">D</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>v</mi><mrow><mi mathvariant=\"normal\">DS</mi></mrow></msub></mrow></mfrac></mstyle><mo>=</mo><mi>λ</mi><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub></mrow></math>"
        }
       ]
      },
      {
       "t": "ul",
       "items": [
        "**gm** is the slope of the iD–vGS curve at Q: how many mA of drain current per volt of gate signal",
        "**1/ro** is the slope of the iD–vDS curve at Q: it is zero if λ = 0",
        "The small-signal model is just these two slopes as circuit elements"
       ]
      }
     ],
     "id": "t5-3"
    },
    {
     "title": "Build the small-signal circuit",
     "kind": "learn",
     "blocks": [
      {
       "t": "fig",
       "src": "assets/study/resources/gr2/ss_model.svg",
       "alt": "Small-signal model of a MOSFET"
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "DC supplies become ac ground",
         "res": "their signal voltage is 0"
        },
        {
         "h": "2",
         "text": "Large capacitors become shorts",
         "res": "coupling and bypass capacitors"
        },
        {
         "h": "3",
         "text": "Replace the MOSFET",
         "res": "open gate (ig = 0), gm·vgs from drain to source"
        },
        {
         "h": "4",
         "text": "Add ro in parallel with the source",
         "res": "ro = 1/(λ·ID)"
        }
       ]
      }
     ],
     "id": "t5-4"
    },
    {
     "title": "The parameters",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"g_m=K_nV_{ov}\"><mrow><msub><mi>g</mi><mi mathvariant=\"normal\">m</mi></msub><mo>=</mo><msub><mi>K</mi><mi mathvariant=\"normal\">n</mi></msub><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">ov</mi></mrow></msub></mrow></math>",
         "sheet": "S3 §5"
        },
        {
         "math": "<math alttext=\"g_m=\\dfrac{2I_D}{V_{ov}}=\\sqrt{2K_nI_D}\"><mrow><msub><mi>g</mi><mi mathvariant=\"normal\">m</mi></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><mn>2</mn><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub></mrow><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">ov</mi></mrow></msub></mrow></mfrac></mstyle><mo>=</mo><msqrt><mrow><mn>2</mn><msub><mi>K</mi><mi mathvariant=\"normal\">n</mi></msub><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub></mrow></msqrt></mrow></math>"
        },
        {
         "math": "<math alttext=\"r_o=\\dfrac{V_A}{I_D}=\\dfrac{1}{\\lambda I_D}\"><mrow><msub><mi>r</mi><mi mathvariant=\"normal\">o</mi></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>V</mi><mi mathvariant=\"normal\">A</mi></msub></mrow><mrow><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub></mrow></mfrac></mstyle><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><mn>1</mn></mrow><mrow><mi>λ</mi><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub></mrow></mfrac></mstyle></mrow></math>",
         "sheet": "S2 §2"
        },
        {
         "math": "<math alttext=\"|A_{vo}|=g_mR_D\"><mrow><mo stretchy=\"false\" lspace=\"0\" rspace=\"0\">|</mo><msub><mi>A</mi><mrow><mi mathvariant=\"normal\">vo</mi></mrow></msub><mo stretchy=\"false\" lspace=\"0\" rspace=\"0\">|</mo><mo>=</mo><msub><mi>g</mi><mi mathvariant=\"normal\">m</mi></msub><msub><mi>R</mi><mi mathvariant=\"normal\">D</mi></msub></mrow></math>",
         "note": "RS bypassed or absent, ro ignored",
         "sheet": "S3 §2"
        }
       ]
      },
      {
       "t": "ul",
       "items": [
        "Larger ID gives larger gm",
        "With the RD drop fixed: |Avo| = 2·(VDD − VDS) / Vov, so small Vov = big gain but little linear range",
        "The T-model is handy when a source resistor is present: it puts 1/gm in series with the source lead"
       ]
      }
     ],
     "id": "t5-5"
    },
    {
     "title": "The T-model",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "An equivalent model for the same transistor: the controlled source **gm·vgs** is replaced by a current **ie** that flows out of the source through a resistor **1/gm**",
        "Both models give the same answers; the T-model is **easier when a resistor sits in the source lead**, because that resistor adds directly to 1/gm",
        "Rule: looking into the **source** you see 1/gm; looking into the **gate** you see an open circuit"
       ]
      },
      {
       "t": "call",
       "kind": "tip",
       "text": "1/gm shows up again as the output resistance of the follower and the input resistance of the common gate."
      }
     ],
     "id": "t5-6"
    },
    {
     "title": "Find gm, ro and the linear limit",
     "kind": "example",
     "blocks": [
      {
       "t": "given",
       "items": [
        "ID = 0.5 mA",
        "Vov = 0.25 V",
        "λ = 0.02 V⁻¹"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Transconductance",
         "res": "gm = 2·ID/Vov = 2 × 0.5 / 0.25 = 4 mS"
        },
        {
         "h": "2",
         "text": "Output resistance",
         "res": "ro = 1/(λ·ID) = 1/(0.02 × 0.5) = 100 kΩ"
        },
        {
         "h": "3",
         "text": "Check Kn",
         "res": "Kn = gm/Vov = 16 mA/V²"
        },
        {
         "h": "4",
         "text": "Linear limit on the signal",
         "res": "vgs,pk ≤ 0.2·Vov = 50 mV; absolute limit vgs ≪ 2·Vov = 0.5 V"
        }
       ]
      }
     ],
     "id": "t5-7"
    },
    {
     "title": "Gain of a CS stage with a load",
     "kind": "example",
     "blocks": [
      {
       "t": "fig",
       "src": "assets/study/resources/gr2/cs_basic.svg",
       "alt": "Common-source stage with load"
      },
      {
       "t": "given",
       "items": [
        "gm = 2 mS",
        "RD = 2 kΩ",
        "RL = 6 kΩ",
        "source grounded"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Supply to ground, capacitors to shorts",
         "res": "RD and RL both sit from drain to ground"
        },
        {
         "h": "2",
         "text": "vgs = vin (no source resistor)",
         "res": "whole input appears across gate-source"
        },
        {
         "h": "3",
         "text": "RD ∥ RL",
         "res": "2 × 6 / (2 + 6) = 1.5 kΩ"
        },
        {
         "h": "4",
         "text": "Loaded gain −gm(RD ∥ RL)",
         "res": "−2.0 × 1.5 = -3"
        },
        {
         "h": "5",
         "text": "Open-circuit gain −gm·RD",
         "res": "−2.0 × 2.0 = -4"
        }
       ]
      }
     ],
     "id": "t5-8"
    },
    {
     "title": "gr2-ss-004",
     "kind": "q",
     "ref": "gr2-ss-004",
     "blocks": [],
     "id": "t5-9"
    },
    {
     "title": "gr2-ss-013",
     "kind": "q",
     "ref": "gr2-ss-013",
     "blocks": [],
     "id": "t5-10"
    },
    {
     "title": "gr2-wk-006",
     "kind": "workout",
     "ref": "gr2-wk-006",
     "blocks": [],
     "id": "t5-11"
    }
   ],
   "id": "t5-small-signal-model-and-gm"
  },
  {
   "title": "CS design with no source resistor",
   "lessons": "Lesson 17",
   "slides": [
    {
     "title": "The circuit",
     "kind": "learn",
     "blocks": [
      {
       "t": "fig",
       "src": "assets/study/resources/gr2/cs_basic.svg",
       "alt": "Common-source amplifier with gate divider and coupling capacitors"
      },
      {
       "t": "ul",
       "items": [
        "**C1, C2** block DC and pass the signal. A polarized capacitor goes with its + plate toward the **higher DC voltage**",
        "Gate divider sets **VG = VDD·RG2 / (RG1 + RG2)** (no gate current, so it is unloaded)",
        "Source grounded, so **VGS = VG**"
       ]
      },
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"V_G=V_{DD}\\dfrac{R_{G2}}{R_{G1}+R_{G2}}\"><mrow><msub><mi>V</mi><mi mathvariant=\"normal\">G</mi></msub><mo>=</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">DD</mi></mrow></msub><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">G</mi><mn>2</mn></mrow></msub></mrow><mrow><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">G</mi><mn>1</mn></mrow></msub><mo>+</mo><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">G</mi><mn>2</mn></mrow></msub></mrow></mfrac></mstyle></mrow></math>",
         "sheet": "S2 §5"
        }
       ]
      }
     ],
     "id": "t6-1"
    },
    {
     "title": "What it gives you",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"R_i=R_{G1}\\parallel R_{G2}\\qquad R_o=R_D\\parallel r_o\\approx R_D\"><mrow><msub><mi>R</mi><mi mathvariant=\"normal\">i</mi></msub><mo>=</mo><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">G</mi><mn>1</mn></mrow></msub><mo>∥</mo><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">G</mi><mn>2</mn></mrow></msub><mspace width=\"2em\"/><msub><mi>R</mi><mi mathvariant=\"normal\">o</mi></msub><mo>=</mo><msub><mi>R</mi><mi mathvariant=\"normal\">D</mi></msub><mo>∥</mo><msub><mi>r</mi><mi mathvariant=\"normal\">o</mi></msub><mo>≈</mo><msub><mi>R</mi><mi mathvariant=\"normal\">D</mi></msub></mrow></math>",
         "sheet": "S3 §7"
        },
        {
         "math": "<math alttext=\"A_{vo}=-g_m(R_D\\parallel r_o)\\approx -g_mR_D\"><mrow><msub><mi>A</mi><mrow><mi mathvariant=\"normal\">vo</mi></mrow></msub><mo>=</mo><mo form=\"prefix\" lspace=\"0\" rspace=\"0.04em\">−</mo><msub><mi>g</mi><mi mathvariant=\"normal\">m</mi></msub><mo stretchy=\"false\">(</mo><msub><mi>R</mi><mi mathvariant=\"normal\">D</mi></msub><mo>∥</mo><msub><mi>r</mi><mi mathvariant=\"normal\">o</mi></msub><mo stretchy=\"false\">)</mo><mo>≈</mo><mo form=\"prefix\" lspace=\"0\" rspace=\"0.04em\">−</mo><msub><mi>g</mi><mi mathvariant=\"normal\">m</mi></msub><msub><mi>R</mi><mi mathvariant=\"normal\">D</mi></msub></mrow></math>",
         "sheet": "S3 §7"
        },
        {
         "math": "<math alttext=\"R_D\\ \\to\\ R_D\\parallel R_L\"><mrow><msub><mi>R</mi><mi mathvariant=\"normal\">D</mi></msub><mspace width=\"0.25em\"/><mo>→</mo><mspace width=\"0.25em\"/><msub><mi>R</mi><mi mathvariant=\"normal\">D</mi></msub><mo>∥</mo><msub><mi>R</mi><mi mathvariant=\"normal\">L</mi></msub></mrow></math>",
         "label": "Loaded gain",
         "sheet": "S3 §7"
        }
       ]
      },
      {
       "t": "ul",
       "items": [
        "To find Ro: set the input source to zero, remove the load, look back into the drain",
        "RL and ro both reduce the gain through the parallel combination"
       ]
      }
     ],
     "id": "t6-2"
    },
    {
     "title": "Two circuits: DC and signal",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "**DC view:** capacitors open, supply is a supply. The divider sets VG, the transistor draws ID, RD drops (VDD − VDS)",
        "**Signal view:** capacitors short, supply is ground. RG1 and RG2 are in parallel at the input; RD (in parallel with RL) is the load of the controlled source",
        "Design the DC circuit first for the chosen Q-point, then check what the signal circuit gives"
       ]
      },
      {
       "t": "call",
       "kind": "rule",
       "text": "The divider resistors are chosen **large** so that Ri = RG1 ∥ RG2 is large, but their ratio sets VG."
      }
     ],
     "id": "t6-3"
    },
    {
     "title": "Why this bias is weak",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"I_D=\\tfrac{1}{2}K_n(V_G-V_t)^2\"><mrow><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub><mo>=</mo><mstyle displaystyle=\"false\"><mfrac><mrow><mn>1</mn></mrow><mrow><mn>2</mn></mrow></mfrac></mstyle><msub><mi>K</mi><mi mathvariant=\"normal\">n</mi></msub><mo stretchy=\"false\">(</mo><msub><mi>V</mi><mi mathvariant=\"normal\">G</mi></msub><mo>−</mo><msub><mi>V</mi><mi mathvariant=\"normal\">t</mi></msub><msup><mo stretchy=\"false\">)</mo><mn>2</mn></msup></mrow></math>"
        }
       ]
      },
      {
       "t": "ul",
       "items": [
        "ID follows **Kn** and **Vt** directly: nothing resists a change",
        "Swap the transistor (different Vt, Kn) and Q moves a lot; the output can even clip or enter triode",
        "In simulation, sweeping Vt and Kn shows the drain voltage wandering"
       ]
      },
      {
       "t": "call",
       "kind": "why",
       "text": "A source resistor adds negative feedback and fixes this (next topic)."
      }
     ],
     "id": "t6-4"
    },
    {
     "title": "Design recipe (equation sheet)",
     "kind": "learn",
     "blocks": [
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Choose VDS = VDD/2",
         "res": "centers the drain voltage for symmetric swing  @S3 §3"
        },
        {
         "h": "2",
         "text": "Gain fixes the overdrive",
         "res": "Vov = 2(VDD − VDS)/|Avo| = VDD/|Avo|  @S3 §3"
        },
        {
         "h": "3",
         "text": "Check linearity",
         "res": "vgs,pk ≤ 0.2·Vov  @S3 §3"
        },
        {
         "h": "4",
         "text": "RD from the gain",
         "res": "RD = |Avo|·Vov/(Kn·Vov²) = (VDD − VDS)/ID  @S3 §3"
        },
        {
         "h": "5",
         "text": "Gate bias",
         "res": "VG = VGS = Vov + Vt (VS = 0)  @S3 §3"
        },
        {
         "h": "6",
         "text": "Gate divider",
         "res": "RG1 ≥ (VDD/VG)·Rin,  RG2 = RG1/(VDD/VG − 1)  @S3 §3"
        }
       ]
      }
     ],
     "id": "t6-5"
    },
    {
     "title": "CS design with no source resistor",
     "kind": "example",
     "blocks": [
      {
       "t": "given",
       "items": [
        "VDD = 12 V",
        "Kn = 2 mA/V², Vt = 1 V",
        "|Avo| = 10",
        "Rin ≥ 100 kΩ"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "VDS at the middle",
         "res": "VDS = 6 V"
        },
        {
         "h": "2",
         "text": "Overdrive from the gain",
         "res": "Vov = 2·(12 − 6)/10 = 1.2 V"
        },
        {
         "h": "3",
         "text": "Drain current",
         "res": "ID = ½·2·1.2² = 1.44 mA"
        },
        {
         "h": "4",
         "text": "RD",
         "res": "RD = (12 − 6)/1.44 = 4.17 kΩ  (also |Avo|/gm = 4.17 kΩ)"
        },
        {
         "h": "5",
         "text": "Gate voltage",
         "res": "VG = 1.2 + 1 = 2.2 V"
        },
        {
         "h": "6",
         "text": "Divider",
         "res": "RG1 ≥ (12/2.2)·100 = 545 kΩ;  RG2 = 122 kΩ"
        },
        {
         "h": "7",
         "text": "Linearity limit",
         "res": "vgs,pk ≤ 0.2·1.2 = 240 mV, so output ≤ 2.4 V peak"
        }
       ]
      }
     ],
     "id": "t6-6"
    },
    {
     "title": "Swing limits",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "The output swings about the DC drain voltage VD = VDD − RD·ID by ±|Avo|·vg,pk",
        "**Headroom:** VD + swing must stay below VDD",
        "**Legroom:** VD − swing must stay above **Vov** (so the device stays in saturation; with the source grounded, VDS ≥ Vov)",
        "VDS = VDD/2 gives equal room above and below, which is why step 1 picks it"
       ]
      },
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"V_{D,max}=V_D+|A_{vo}|v_{g,pk}\\le V_{DD}\\qquad V_{D,min}=V_D-|A_{vo}|v_{g,pk}\\ge V_{ov}\"><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">D</mi><mo>,</mo><mi mathvariant=\"normal\">max</mi></mrow></msub><mo>=</mo><msub><mi>V</mi><mi mathvariant=\"normal\">D</mi></msub><mo>+</mo><mo stretchy=\"false\" lspace=\"0\" rspace=\"0\">|</mo><msub><mi>A</mi><mrow><mi mathvariant=\"normal\">vo</mi></mrow></msub><mo stretchy=\"false\" lspace=\"0\" rspace=\"0\">|</mo><msub><mi>v</mi><mrow><mi mathvariant=\"normal\">g</mi><mo>,</mo><mi mathvariant=\"normal\">pk</mi></mrow></msub><mo>≤</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">DD</mi></mrow></msub><mspace width=\"2em\"/><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">D</mi><mo>,</mo><mi mathvariant=\"normal\">min</mi></mrow></msub><mo>=</mo><msub><mi>V</mi><mi mathvariant=\"normal\">D</mi></msub><mo>−</mo><mo stretchy=\"false\" lspace=\"0\" rspace=\"0\">|</mo><msub><mi>A</mi><mrow><mi mathvariant=\"normal\">vo</mi></mrow></msub><mo stretchy=\"false\" lspace=\"0\" rspace=\"0\">|</mo><msub><mi>v</mi><mrow><mi mathvariant=\"normal\">g</mi><mo>,</mo><mi mathvariant=\"normal\">pk</mi></mrow></msub><mo>≥</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">ov</mi></mrow></msub></mrow></math>"
        }
       ]
      }
     ],
     "id": "t6-7"
    },
    {
     "title": "gr2-csdes-006",
     "kind": "q",
     "ref": "gr2-csdes-006",
     "blocks": [],
     "id": "t6-8"
    },
    {
     "title": "gr2-csdes-009",
     "kind": "q",
     "ref": "gr2-csdes-009",
     "blocks": [],
     "id": "t6-9"
    }
   ],
   "id": "t6-cs-design-with-no-source-resis"
  },
  {
   "title": "Source resistor feedback and bypassing",
   "lessons": "Lesson 18",
   "slides": [
    {
     "title": "RS holds the bias steady",
     "kind": "learn",
     "blocks": [
      {
       "t": "fig",
       "src": "assets/study/resources/gr2/cs_rs.svg",
       "alt": "Common-source stage with a source resistor"
      },
      {
       "t": "call",
       "kind": "rule",
       "text": "If ID rises, VS = ID·RS rises, so VGS = VG − VS falls and ID falls back."
      },
      {
       "t": "ul",
       "items": [
        "Negative feedback on the **DC** current: bias depends much less on Kn and Vt",
        "VRS also uses part of the supply, so there is less left for RD and the transistor",
        "Do not make RS too small, or the feedback gets weak"
       ]
      }
     ],
     "id": "t7-1"
    },
    {
     "title": "The price: lost gain",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"A_{vo}=-\\dfrac{g_mR_D}{1+g_mR_S}\"><mrow><msub><mi>A</mi><mrow><mi mathvariant=\"normal\">vo</mi></mrow></msub><mo>=</mo><mo form=\"prefix\" lspace=\"0\" rspace=\"0.04em\">−</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>g</mi><mi mathvariant=\"normal\">m</mi></msub><msub><mi>R</mi><mi mathvariant=\"normal\">D</mi></msub></mrow><mrow><mn>1</mn><mo>+</mo><msub><mi>g</mi><mi mathvariant=\"normal\">m</mi></msub><msub><mi>R</mi><mi mathvariant=\"normal\">S</mi></msub></mrow></mfrac></mstyle></mrow></math>",
         "label": "Unbypassed",
         "note": "ro ignored",
         "sheet": "S3 §7"
        },
        {
         "math": "<math alttext=\"v_{gs}=\\dfrac{v_{in}}{1+g_mR_S}\"><mrow><msub><mi>v</mi><mrow><mi mathvariant=\"normal\">gs</mi></mrow></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>v</mi><mrow><mi mathvariant=\"normal\">in</mi></mrow></msub></mrow><mrow><mn>1</mn><mo>+</mo><msub><mi>g</mi><mi mathvariant=\"normal\">m</mi></msub><msub><mi>R</mi><mi mathvariant=\"normal\">S</mi></msub></mrow></mfrac></mstyle></mrow></math>",
         "label": "Because",
         "note": "the source resistor drops part of the input"
        }
       ]
      },
      {
       "t": "ul",
       "items": [
        "RS reduces the signal across gate-source, so it reduces the gain and also improves linearity",
        "Ri and Ro of the stage are essentially unchanged (Ri = RG1 ∥ RG2, Ro ≈ RD)"
       ]
      }
     ],
     "id": "t7-2"
    },
    {
     "title": "Deriving the reduced gain",
     "kind": "learn",
     "blocks": [
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "KVL around the input loop",
         "res": "vin = vgs + vs, where vs = id·RS"
        },
        {
         "h": "2",
         "text": "The transistor gives id",
         "res": "id = gm·vgs"
        },
        {
         "h": "3",
         "text": "Substitute",
         "res": "vin = vgs·(1 + gm·RS), so vgs = vin/(1 + gm·RS)"
        },
        {
         "h": "4",
         "text": "Output",
         "res": "vo = −id·RD = −gm·vgs·RD"
        },
        {
         "h": "5",
         "text": "Combine",
         "res": "vo/vin = −gm·RD/(1 + gm·RS)  @S3 §7"
        }
       ]
      },
      {
       "t": "call",
       "kind": "why",
       "text": "The source resistor feeds back part of the output current as a voltage subtracted from vgs."
      }
     ],
     "id": "t7-3"
    },
    {
     "title": "The bypass capacitor",
     "kind": "learn",
     "blocks": [
      {
       "t": "fig",
       "src": "assets/study/resources/gr2/cs_bypassed.svg",
       "alt": "Common-source stage with a bypass capacitor across RS"
      },
      {
       "t": "ul",
       "items": [
        "A large capacitor across RS is an **open for DC** (feedback stays) and a **short for the signal** (gain returns)",
        "Fully bypassed: stable Q and |Avo| = gm·RD",
        "But the gain still follows gm, so it still depends on Kn and the bias point"
       ]
      },
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"|A_{vo}|=g_mR_D\"><mrow><mo stretchy=\"false\" lspace=\"0\" rspace=\"0\">|</mo><msub><mi>A</mi><mrow><mi mathvariant=\"normal\">vo</mi></mrow></msub><mo stretchy=\"false\" lspace=\"0\" rspace=\"0\">|</mo><mo>=</mo><msub><mi>g</mi><mi mathvariant=\"normal\">m</mi></msub><msub><mi>R</mi><mi mathvariant=\"normal\">D</mi></msub></mrow></math>",
         "label": "Fully bypassed",
         "sheet": "S3 §4"
        }
       ]
      }
     ],
     "id": "t7-4"
    },
    {
     "title": "Partial bypass: RS = RS1 + RS2",
     "kind": "learn",
     "blocks": [
      {
       "t": "fig",
       "src": "assets/study/resources/gr2/cs_partial.svg",
       "alt": "Partially bypassed common-source stage"
      },
      {
       "t": "ul",
       "items": [
        "The capacitor shorts **RS2** only; **RS1** stays in the signal path",
        "Gain set mostly by resistors instead of by the device",
        "vgs shrinks by (1 + gm·RS1): better linearity, lower THD"
       ]
      },
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"A_{vo}=-\\dfrac{g_mR_D}{1+g_mR_{S1}}\"><mrow><msub><mi>A</mi><mrow><mi mathvariant=\"normal\">vo</mi></mrow></msub><mo>=</mo><mo form=\"prefix\" lspace=\"0\" rspace=\"0.04em\">−</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>g</mi><mi mathvariant=\"normal\">m</mi></msub><msub><mi>R</mi><mi mathvariant=\"normal\">D</mi></msub></mrow><mrow><mn>1</mn><mo>+</mo><msub><mi>g</mi><mi mathvariant=\"normal\">m</mi></msub><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">S</mi><mn>1</mn></mrow></msub></mrow></mfrac></mstyle></mrow></math>",
         "sheet": "S3 §7"
        },
        {
         "math": "<math alttext=\"R_{S1}=\\dfrac{1}{g_m}\\ \\Rightarrow\\ |A_{vo}|=\\dfrac{g_mR_D}{2}\"><mrow><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">S</mi><mn>1</mn></mrow></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><mn>1</mn></mrow><mrow><msub><mi>g</mi><mi mathvariant=\"normal\">m</mi></msub></mrow></mfrac></mstyle><mspace width=\"0.25em\"/><mo>⇒</mo><mspace width=\"0.25em\"/><mo stretchy=\"false\" lspace=\"0\" rspace=\"0\">|</mo><msub><mi>A</mi><mrow><mi mathvariant=\"normal\">vo</mi></mrow></msub><mo stretchy=\"false\" lspace=\"0\" rspace=\"0\">|</mo><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>g</mi><mi mathvariant=\"normal\">m</mi></msub><msub><mi>R</mi><mi mathvariant=\"normal\">D</mi></msub></mrow><mrow><mn>2</mn></mrow></mfrac></mstyle></mrow></math>",
         "sheet": "S3 §5"
        }
       ]
      }
     ],
     "id": "t7-5"
    },
    {
     "title": "Why partial bypass makes the gain steadier",
     "kind": "example",
     "blocks": [
      {
       "t": "given",
       "items": [
        "gm = 4 mS (nominal), RD = 5 kΩ",
        "a different transistor gives gm = 3 mS",
        "partial bypass with RS1 = 1/gm(nominal) = 250 Ω"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Fully bypassed, nominal",
         "res": "Avo = −4 × 5 = -20"
        },
        {
         "h": "2",
         "text": "Fully bypassed, gm = 3 mS",
         "res": "Avo = −3 × 5 = -15: a 25 % drop"
        },
        {
         "h": "3",
         "text": "Partial bypass, nominal",
         "res": "Avo = −4×5 / (1 + 4×0.25) = -10"
        },
        {
         "h": "4",
         "text": "Partial bypass, gm = 3 mS",
         "res": "Avo = −3×5 / (1 + 3×0.25) = -8.57: only a 14.3 % drop"
        }
       ]
      }
     ],
     "id": "t7-6"
    },
    {
     "title": "Three options side by side",
     "kind": "learn",
     "blocks": [
      {
       "t": "tbl",
       "head": [
        "Source resistor",
        "Q-point",
        "Signal gain",
        "Linearity / THD"
       ],
       "rows": [
        [
         "None",
         "Moves a lot",
         "gm·RD, depends on gm",
         "Fair"
        ],
        [
         "Fully bypassed",
         "Stable",
         "gm·RD, depends on gm",
         "Fair"
        ],
        [
         "Partly bypassed",
         "Stable",
         "Set mostly by resistors, lower",
         "Best"
        ]
       ]
      },
      {
       "t": "call",
       "kind": "tip",
       "text": "Less unbypassed RS means higher gain and more distortion; more unbypassed RS means lower gain and less distortion."
      }
     ],
     "id": "t7-7"
    },
    {
     "title": "gr2-fb-001",
     "kind": "q",
     "ref": "gr2-fb-001",
     "blocks": [],
     "id": "t7-8"
    },
    {
     "title": "gr2-fb-014",
     "kind": "q",
     "ref": "gr2-fb-014",
     "blocks": [],
     "id": "t7-9"
    }
   ],
   "id": "t7-source-resistor-feedback-and-b"
  },
  {
   "title": "Partially and fully bypassed CS design",
   "lessons": "Lessons 18, 26",
   "slides": [
    {
     "title": "Two rules of thumb",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "**Thirds:** VRD = VDS = VRS = VDD/3  @S3 §4",
        "**RS1 = 1/gm:** the gain is about half of gm·RD  @S3 §5"
       ]
      },
      {
       "t": "call",
       "kind": "rule",
       "text": "The supply is split three ways between RD, the transistor and RS. This sets swing, gain and bias stability. Other splits change the formulas below."
      },
      {
       "t": "call",
       "kind": "tip",
       "text": "Fully bypassed means the whole of RS is bypassed; partial means RS1 stays in the signal path and RS2 is bypassed."
      }
     ],
     "id": "t8-1"
    },
    {
     "title": "Current from the gain",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"I_D=2K_n\\left[\\dfrac{V_{DD}/3}{|A_{vo}|}\\right]^2\"><mrow><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub><mo>=</mo><mn>2</mn><msub><mi>K</mi><mi mathvariant=\"normal\">n</mi></msub><msup><mrow><mo stretchy=\"true\">[</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">DD</mi></mrow></msub><mo lspace=\"0.05em\" rspace=\"0.05em\">/</mo><mn>3</mn></mrow><mrow><mo stretchy=\"false\" lspace=\"0\" rspace=\"0\">|</mo><msub><mi>A</mi><mrow><mi mathvariant=\"normal\">vo</mi></mrow></msub><mo stretchy=\"false\" lspace=\"0\" rspace=\"0\">|</mo></mrow></mfrac></mstyle><mo stretchy=\"true\">]</mo></mrow><mn>2</mn></msup></mrow></math>",
         "label": "Fully bypassed",
         "sheet": "S3 §4"
        },
        {
         "math": "<math alttext=\"I_D=2K_n\\left[\\dfrac{V_{DD}}{6|A_{vo}|}\\right]^2\"><mrow><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub><mo>=</mo><mn>2</mn><msub><mi>K</mi><mi mathvariant=\"normal\">n</mi></msub><msup><mrow><mo stretchy=\"true\">[</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">DD</mi></mrow></msub></mrow><mrow><mn>6</mn><mo stretchy=\"false\" lspace=\"0\" rspace=\"0\">|</mo><msub><mi>A</mi><mrow><mi mathvariant=\"normal\">vo</mi></mrow></msub><mo stretchy=\"false\" lspace=\"0\" rspace=\"0\">|</mo></mrow></mfrac></mstyle><mo stretchy=\"true\">]</mo></mrow><mn>2</mn></msup></mrow></math>",
         "label": "Partially bypassed",
         "sheet": "S3 §5"
        }
       ]
      },
      {
       "t": "ul",
       "items": [
        "Fully bypassed: |Avo| = gm·RD = (VDD/3)·√(2Kn/ID), which gives the first formula",
        "Partial: the gain is halved by RS1, so a 2 enters and the 3 becomes 6",
        "For the same gain the partial design needs **less current** (here 4× less)"
       ]
      },
      {
       "t": "call",
       "kind": "watch",
       "text": "The exponent is on the whole bracket. Do not use VDD in place of VDD/3 or VDD/6."
      }
     ],
     "id": "t8-2"
    },
    {
     "title": "Where the current formula comes from",
     "kind": "learn",
     "blocks": [
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Fully bypassed gain",
         "res": "|Avo| = gm·RD"
        },
        {
         "h": "2",
         "text": "Use gm = 2·ID/Vov and RD = (VDD/3)/ID",
         "res": "|Avo| = (2·ID/Vov)·(VDD/3)/ID = 2·(VDD/3)/Vov"
        },
        {
         "h": "3",
         "text": "Solve for the overdrive",
         "res": "Vov = 2·(VDD/3)/|Avo|"
        },
        {
         "h": "4",
         "text": "ID = ½·Kn·Vov²",
         "res": "ID = 2·Kn·[(VDD/3)/|Avo|]²  @S3 §4"
        },
        {
         "h": "5",
         "text": "Partial bypass: the gain is halved",
         "res": "replace |Avo| by 2|Avo|: ID = 2·Kn·[VDD/(6|Avo|)]²  @S3 §5"
        }
       ]
      },
      {
       "t": "call",
       "kind": "tip",
       "text": "Notice the gain target alone fixes ID once the supply split and the device are chosen."
      }
     ],
     "id": "t8-3"
    },
    {
     "title": "Resistors and gate bias",
     "kind": "learn",
     "blocks": [
      {
       "t": "fig",
       "src": "assets/study/resources/gr2/cs_partial.svg",
       "alt": "Partially bypassed common-source stage"
      },
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"R_D=R_S=\\dfrac{V_{DD}/3}{I_D}\"><mrow><msub><mi>R</mi><mi mathvariant=\"normal\">D</mi></msub><mo>=</mo><msub><mi>R</mi><mi mathvariant=\"normal\">S</mi></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">DD</mi></mrow></msub><mo lspace=\"0.05em\" rspace=\"0.05em\">/</mo><mn>3</mn></mrow><mrow><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub></mrow></mfrac></mstyle></mrow></math>",
         "sheet": "S3 §4"
        },
        {
         "math": "<math alttext=\"V_{ov}=\\sqrt{\\dfrac{2I_D}{K_n}}\\qquad g_m=K_nV_{ov}\"><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">ov</mi></mrow></msub><mo>=</mo><msqrt><mrow><mstyle displaystyle=\"true\"><mfrac><mrow><mn>2</mn><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub></mrow><mrow><msub><mi>K</mi><mi mathvariant=\"normal\">n</mi></msub></mrow></mfrac></mstyle></mrow></msqrt><mspace width=\"2em\"/><msub><mi>g</mi><mi mathvariant=\"normal\">m</mi></msub><mo>=</mo><msub><mi>K</mi><mi mathvariant=\"normal\">n</mi></msub><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">ov</mi></mrow></msub></mrow></math>",
         "sheet": "S3 §5"
        },
        {
         "math": "<math alttext=\"R_{S1}=\\dfrac{1}{g_m}\\qquad R_{S2}=R_S-R_{S1}\"><mrow><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">S</mi><mn>1</mn></mrow></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><mn>1</mn></mrow><mrow><msub><mi>g</mi><mi mathvariant=\"normal\">m</mi></msub></mrow></mfrac></mstyle><mspace width=\"2em\"/><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">S</mi><mn>2</mn></mrow></msub><mo>=</mo><msub><mi>R</mi><mi mathvariant=\"normal\">S</mi></msub><mo>−</mo><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">S</mi><mn>1</mn></mrow></msub></mrow></math>",
         "sheet": "S3 §5"
        },
        {
         "math": "<math alttext=\"V_{GS}=V_{ov}+V_t\\qquad V_G=V_{GS}+V_{RS}=V_{GS}+\\dfrac{V_{DD}}{3}\"><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">GS</mi></mrow></msub><mo>=</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">ov</mi></mrow></msub><mo>+</mo><msub><mi>V</mi><mi mathvariant=\"normal\">t</mi></msub><mspace width=\"2em\"/><msub><mi>V</mi><mi mathvariant=\"normal\">G</mi></msub><mo>=</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">GS</mi></mrow></msub><mo>+</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">RS</mi></mrow></msub><mo>=</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">GS</mi></mrow></msub><mo>+</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">DD</mi></mrow></msub></mrow><mrow><mn>3</mn></mrow></mfrac></mstyle></mrow></math>",
         "sheet": "S3 §5"
        }
       ]
      }
     ],
     "id": "t8-4"
    },
    {
     "title": "Divider and checks",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"R_{G1}\\ge\\dfrac{V_{DD}}{V_G}R_{in}\\qquad R_{G2}=\\dfrac{R_{G1}}{V_{DD}/V_G-1}\"><mrow><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">G</mi><mn>1</mn></mrow></msub><mo>≥</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">DD</mi></mrow></msub></mrow><mrow><msub><mi>V</mi><mi mathvariant=\"normal\">G</mi></msub></mrow></mfrac></mstyle><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">in</mi></mrow></msub><mspace width=\"2em\"/><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">G</mi><mn>2</mn></mrow></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">G</mi><mn>1</mn></mrow></msub></mrow><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">DD</mi></mrow></msub><mo lspace=\"0.05em\" rspace=\"0.05em\">/</mo><msub><mi>V</mi><mi mathvariant=\"normal\">G</mi></msub><mo>−</mo><mn>1</mn></mrow></mfrac></mstyle></mrow></math>",
         "sheet": "S3 §5"
        },
        {
         "math": "<math alttext=\"v_{d,pk}=|A_{vo}|v_{g,pk}\\qquad V_{D,max}=V_D+v_{d,pk}\\le V_{DD}\"><mrow><msub><mi>v</mi><mrow><mi mathvariant=\"normal\">d</mi><mo>,</mo><mi mathvariant=\"normal\">pk</mi></mrow></msub><mo>=</mo><mo stretchy=\"false\" lspace=\"0\" rspace=\"0\">|</mo><msub><mi>A</mi><mrow><mi mathvariant=\"normal\">vo</mi></mrow></msub><mo stretchy=\"false\" lspace=\"0\" rspace=\"0\">|</mo><msub><mi>v</mi><mrow><mi mathvariant=\"normal\">g</mi><mo>,</mo><mi mathvariant=\"normal\">pk</mi></mrow></msub><mspace width=\"2em\"/><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">D</mi><mo>,</mo><mi mathvariant=\"normal\">max</mi></mrow></msub><mo>=</mo><msub><mi>V</mi><mi mathvariant=\"normal\">D</mi></msub><mo>+</mo><msub><mi>v</mi><mrow><mi mathvariant=\"normal\">d</mi><mo>,</mo><mi mathvariant=\"normal\">pk</mi></mrow></msub><mo>≤</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">DD</mi></mrow></msub></mrow></math>",
         "label": "Headroom",
         "sheet": "S3 §5"
        },
        {
         "math": "<math alttext=\"V_{D,min}=V_D-v_{d,pk}\\ge V_S+V_{ov}\"><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">D</mi><mo>,</mo><mi mathvariant=\"normal\">min</mi></mrow></msub><mo>=</mo><msub><mi>V</mi><mi mathvariant=\"normal\">D</mi></msub><mo>−</mo><msub><mi>v</mi><mrow><mi mathvariant=\"normal\">d</mi><mo>,</mo><mi mathvariant=\"normal\">pk</mi></mrow></msub><mo>≥</mo><msub><mi>V</mi><mi mathvariant=\"normal\">S</mi></msub><mo>+</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">ov</mi></mrow></msub></mrow></math>",
         "label": "Legroom",
         "sheet": "S3 §5"
        },
        {
         "math": "<math alttext=\"v_{gs,pk}=\\dfrac{v_{g,pk}}{1+g_mR_{S1}}\\le 0.2\\,V_{ov}\"><mrow><msub><mi>v</mi><mrow><mi mathvariant=\"normal\">gs</mi><mo>,</mo><mi mathvariant=\"normal\">pk</mi></mrow></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>v</mi><mrow><mi mathvariant=\"normal\">g</mi><mo>,</mo><mi mathvariant=\"normal\">pk</mi></mrow></msub></mrow><mrow><mn>1</mn><mo>+</mo><msub><mi>g</mi><mi mathvariant=\"normal\">m</mi></msub><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">S</mi><mn>1</mn></mrow></msub></mrow></mfrac></mstyle><mo>≤</mo><mn>0.2</mn><mspace width=\"0.17em\"/><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">ov</mi></mrow></msub></mrow></math>",
         "label": "Linearity",
         "sheet": "S3 §5"
        }
       ]
      },
      {
       "t": "ul",
       "items": [
        "Use **standard resistor values** at the end and recompute VG, gain and swing",
        "Use **peak** values (not peak-to-peak) for the swing checks"
       ]
      },
      {
       "t": "call",
       "kind": "watch",
       "text": "VG = VGS + VS, not just VGS."
      }
     ],
     "id": "t8-5"
    },
    {
     "title": "Fully bypassed design, for comparison",
     "kind": "example",
     "blocks": [
      {
       "t": "given",
       "items": [
        "VDD = 15 V",
        "Kn = 4 mA/V², Vt = 1 V",
        "|Avo| = 5",
        "Rin ≥ 100 kΩ"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Drain current",
         "res": "ID = 2·4·[(15/3)/5]² = 8 mA"
        },
        {
         "h": "2",
         "text": "RD = RS from one third of VDD",
         "res": "RD = RS = 5 V / 8 mA = 625 Ω"
        },
        {
         "h": "3",
         "text": "Overdrive and gm",
         "res": "Vov = √(2·8/4) = 2 V;  gm = 8 mS"
        },
        {
         "h": "4",
         "text": "Check the gain",
         "res": "gm·RD = 8 × 0.625 = 5"
        },
        {
         "h": "5",
         "text": "Gate voltage and divider",
         "res": "VGS = 3 V;  VG = 8 V;  RG1 ≥ 188 kΩ, RG2 = 214 kΩ"
        }
       ]
      }
     ],
     "id": "t8-6"
    },
    {
     "title": "Partially bypassed design, start to finish",
     "kind": "example",
     "blocks": [
      {
       "t": "given",
       "items": [
        "VDD = 15 V",
        "Kn = 4 mA/V², Vt = 1 V",
        "|Avo| = 5",
        "Rin ≥ 100 kΩ",
        "vg,pk = 50 mV"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Drain current from the gain",
         "res": "ID = 2·4·[15/(6·5)]² = 2 mA  (a fully bypassed design would need 8 mA)"
        },
        {
         "h": "2",
         "text": "RD and RS from one third of VDD",
         "res": "RD = RS = 5 V / 2 mA = 2.5 kΩ"
        },
        {
         "h": "3",
         "text": "Overdrive and gm",
         "res": "VOV = √(2·2/4) = 1 V;  gm = 4 mS"
        },
        {
         "h": "4",
         "text": "Split RS",
         "res": "RS1 = 1/gm = 250 Ω;  RS2 = 2500 − 250 = 2250 Ω"
        },
        {
         "h": "5",
         "text": "Gate voltage and divider",
         "res": "VGS = 2 V;  VG = 7 V;  RG1 ≥ 214 kΩ, RG2 = 188 kΩ"
        },
        {
         "h": "6",
         "text": "Headroom and legroom",
         "res": "VD = 10 V, vd,pk = 0.25 V: 10.2 V ≤ 15 V and 9.75 V ≥ VS + Vov = 6 V"
        },
        {
         "h": "7",
         "text": "Linearity",
         "res": "vgs,pk = 25 mV ≤ 0.2·VOV = 200 mV"
        }
       ]
      }
     ],
     "id": "t8-7"
    },
    {
     "title": "gr2-des-001",
     "kind": "q",
     "ref": "gr2-des-001",
     "blocks": [],
     "id": "t8-8"
    },
    {
     "title": "gr2-wk-001",
     "kind": "workout",
     "ref": "gr2-wk-001",
     "blocks": [],
     "id": "t8-9"
    }
   ],
   "id": "t8-partially-and-fully-bypassed-c"
  },
  {
   "title": "Common-drain amplifier behavior",
   "lessons": "Lesson 19",
   "slides": [
    {
     "title": "Why a follower",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "A CS stage has **Ro ≈ RD**: large",
        "Into a small RL the divider RL/(RL + Ro) throws the gain away",
        "A **common-drain** stage has small Ro: it can drive a low-resistance load",
        "Placed after a CS stage it acts as a **buffer**"
       ]
      },
      {
       "t": "call",
       "kind": "rule",
       "text": "Drain at ac ground, signal in at the gate, output taken at the source."
      }
     ],
     "id": "t9-1"
    },
    {
     "title": "Small-signal analysis",
     "kind": "learn",
     "blocks": [
      {
       "t": "fig",
       "src": "assets/study/resources/gr2/cd_stage.svg",
       "alt": "Common-drain stage driving a load"
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Short VDD and the coupling capacitors",
         "res": "the drain is at ac ground"
        },
        {
         "h": "2",
         "text": "Replace the MOSFET with the T-model",
         "res": "RS from the source node to ground"
        },
        {
         "h": "3",
         "text": "Input: ig = 0",
         "res": "Ri = RG1 ∥ RG2"
        },
        {
         "h": "4",
         "text": "Open-circuit gain",
         "res": "I = vi/(1/gm + RS), vo = I·RS"
        },
        {
         "h": "5",
         "text": "Output resistance",
         "res": "load off, vi = 0: RS ∥ 1/gm"
        }
       ]
      }
     ],
     "id": "t9-2"
    },
    {
     "title": "Why the gain is just below 1",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "In the T-model the input drives the series path **1/gm + RS**: current i = vi/(1/gm + RS)",
        "The output is the part of that current across RS: vo = i·RS",
        "So vo/vi = RS/(RS + 1/gm): a divider between RS and 1/gm",
        "When gm·RS is large, 1/gm is tiny next to RS and the gain approaches 1"
       ]
      },
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"A_{vo}=\\dfrac{R_S}{R_S+1/g_m}=\\dfrac{g_mR_S}{1+g_mR_S}\"><mrow><msub><mi>A</mi><mrow><mi mathvariant=\"normal\">vo</mi></mrow></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>R</mi><mi mathvariant=\"normal\">S</mi></msub></mrow><mrow><msub><mi>R</mi><mi mathvariant=\"normal\">S</mi></msub><mo>+</mo><mn>1</mn><mo lspace=\"0.05em\" rspace=\"0.05em\">/</mo><msub><mi>g</mi><mi mathvariant=\"normal\">m</mi></msub></mrow></mfrac></mstyle><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>g</mi><mi mathvariant=\"normal\">m</mi></msub><msub><mi>R</mi><mi mathvariant=\"normal\">S</mi></msub></mrow><mrow><mn>1</mn><mo>+</mo><msub><mi>g</mi><mi mathvariant=\"normal\">m</mi></msub><msub><mi>R</mi><mi mathvariant=\"normal\">S</mi></msub></mrow></mfrac></mstyle></mrow></math>"
        }
       ]
      }
     ],
     "id": "t9-3"
    },
    {
     "title": "Results",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"R_i=R_{G1}\\parallel R_{G2}\"><mrow><msub><mi>R</mi><mi mathvariant=\"normal\">i</mi></msub><mo>=</mo><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">G</mi><mn>1</mn></mrow></msub><mo>∥</mo><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">G</mi><mn>2</mn></mrow></msub></mrow></math>",
         "note": "very high",
         "sheet": "S3 §6"
        },
        {
         "math": "<math alttext=\"A_{vo}=\\dfrac{R_S}{R_S+1/g_m}=\\dfrac{g_mR_S}{1+g_mR_S}\\approx 1\"><mrow><msub><mi>A</mi><mrow><mi mathvariant=\"normal\">vo</mi></mrow></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>R</mi><mi mathvariant=\"normal\">S</mi></msub></mrow><mrow><msub><mi>R</mi><mi mathvariant=\"normal\">S</mi></msub><mo>+</mo><mn>1</mn><mo lspace=\"0.05em\" rspace=\"0.05em\">/</mo><msub><mi>g</mi><mi mathvariant=\"normal\">m</mi></msub></mrow></mfrac></mstyle><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>g</mi><mi mathvariant=\"normal\">m</mi></msub><msub><mi>R</mi><mi mathvariant=\"normal\">S</mi></msub></mrow><mrow><mn>1</mn><mo>+</mo><msub><mi>g</mi><mi mathvariant=\"normal\">m</mi></msub><msub><mi>R</mi><mi mathvariant=\"normal\">S</mi></msub></mrow></mfrac></mstyle><mo>≈</mo><mn>1</mn></mrow></math>",
         "note": "just below 1",
         "sheet": "S3 §6"
        },
        {
         "math": "<math alttext=\"R_o=R_S\\parallel\\dfrac{1}{g_m}\\approx\\dfrac{1}{g_m}\"><mrow><msub><mi>R</mi><mi mathvariant=\"normal\">o</mi></msub><mo>=</mo><msub><mi>R</mi><mi mathvariant=\"normal\">S</mi></msub><mo>∥</mo><mstyle displaystyle=\"true\"><mfrac><mrow><mn>1</mn></mrow><mrow><msub><mi>g</mi><mi mathvariant=\"normal\">m</mi></msub></mrow></mfrac></mstyle><mo>≈</mo><mstyle displaystyle=\"true\"><mfrac><mrow><mn>1</mn></mrow><mrow><msub><mi>g</mi><mi mathvariant=\"normal\">m</mi></msub></mrow></mfrac></mstyle></mrow></math>",
         "note": "low",
         "sheet": "S3 §6"
        },
        {
         "math": "<math alttext=\"A_v=\\dfrac{g_m(R_S\\parallel R_L)}{1+g_m(R_S\\parallel R_L)}\"><mrow><msub><mi>A</mi><mi mathvariant=\"normal\">v</mi></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>g</mi><mi mathvariant=\"normal\">m</mi></msub><mo stretchy=\"false\">(</mo><msub><mi>R</mi><mi mathvariant=\"normal\">S</mi></msub><mo>∥</mo><msub><mi>R</mi><mi mathvariant=\"normal\">L</mi></msub><mo stretchy=\"false\">)</mo></mrow><mrow><mn>1</mn><mo>+</mo><msub><mi>g</mi><mi mathvariant=\"normal\">m</mi></msub><mo stretchy=\"false\">(</mo><msub><mi>R</mi><mi mathvariant=\"normal\">S</mi></msub><mo>∥</mo><msub><mi>R</mi><mi mathvariant=\"normal\">L</mi></msub><mo stretchy=\"false\">)</mo></mrow></mfrac></mstyle></mrow></math>",
         "label": "Loaded",
         "note": "RS is replaced by RS ∥ RL",
         "sheet": "S3 §7"
        },
        {
         "math": "<math alttext=\"R_o=R_S\\parallel\\dfrac{1}{g_m}\\parallel r_o\"><mrow><msub><mi>R</mi><mi mathvariant=\"normal\">o</mi></msub><mo>=</mo><msub><mi>R</mi><mi mathvariant=\"normal\">S</mi></msub><mo>∥</mo><mstyle displaystyle=\"true\"><mfrac><mrow><mn>1</mn></mrow><mrow><msub><mi>g</mi><mi mathvariant=\"normal\">m</mi></msub></mrow></mfrac></mstyle><mo>∥</mo><msub><mi>r</mi><mi mathvariant=\"normal\">o</mi></msub></mrow></math>",
         "label": "With λ",
         "sheet": "S3 §7"
        }
       ]
      }
     ],
     "id": "t9-4"
    },
    {
     "title": "A follower driving a small load",
     "kind": "example",
     "blocks": [
      {
       "t": "given",
       "items": [
        "gm = 20 mS",
        "RS = 1 kΩ",
        "RL = 100 Ω"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Open-circuit gain",
         "res": "Avo = 20×1/(1 + 20×1) = 0.952"
        },
        {
         "h": "2",
         "text": "Output resistance",
         "res": "Ro = 1 kΩ ∥ 50 Ω = 47.6 Ω"
        },
        {
         "h": "3",
         "text": "Loaded gain from the two-port model",
         "res": "Av = 0.952 × 100/(100 + 47.6) = 0.645"
        },
        {
         "h": "4",
         "text": "Check with RS replaced by RS ∥ RL",
         "res": "RS ∥ RL = 90.9 Ω;  Av = gm·(RS∥RL)/(1 + gm·(RS∥RL)) = 0.645"
        }
       ]
      }
     ],
     "id": "t9-5"
    },
    {
     "title": "Reading the results",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "Gain just **below 1**, **not inverting**: the output follows the input",
        "Part of the input falls across 1/gm, so the gain is under 1",
        "Larger **gm·RS** pushes the gain toward 1; a light bias current (small gm) gives a poor follower",
        "High Ri after a CS stage barely loads it"
       ]
      },
      {
       "t": "call",
       "kind": "why",
       "text": "No voltage gain, but a strong low-resistance output: that is what a buffer is for."
      }
     ],
     "id": "t9-6"
    },
    {
     "title": "gr2-cd-003",
     "kind": "q",
     "ref": "gr2-cd-003",
     "blocks": [],
     "id": "t9-7"
    },
    {
     "title": "gr2-cd-005",
     "kind": "q",
     "ref": "gr2-cd-005",
     "blocks": [],
     "id": "t9-8"
    }
   ],
   "id": "t9-common-drain-amplifier-behavio"
  },
  {
   "title": "Common-drain design",
   "lessons": "Lessons 19, 21, 26",
   "slides": [
    {
     "title": "Why the design differs",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "The follower must **supply the load current**, so the bias is set by the load and the swing, not by a gain target",
        "Givens: RL, Vo,pp, VDD, device (Kn, Vt), Rin",
        "Use **peak** values: Vo,pk = Vo,pp / 2"
       ]
      },
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"\\dfrac{V_{load,pp}}{V_{in,pp}}\\approx 0.85\"><mrow><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">load</mi><mo>,</mo><mi mathvariant=\"normal\">pp</mi></mrow></msub></mrow><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">in</mi><mo>,</mo><mi mathvariant=\"normal\">pp</mi></mrow></msub></mrow></mfrac></mstyle><mo>≈</mo><mn>0.85</mn></mrow></math>",
         "label": "Preliminary swing",
         "sheet": "S3 §6"
        },
        {
         "math": "<math alttext=\"V_S\\approx\\dfrac{V_{DD}}{2}\"><mrow><msub><mi>V</mi><mi mathvariant=\"normal\">S</mi></msub><mo>≈</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">DD</mi></mrow></msub></mrow><mrow><mn>2</mn></mrow></mfrac></mstyle></mrow></math>",
         "label": "Source bias",
         "sheet": "S3 §6"
        }
       ]
      },
      {
       "t": "call",
       "kind": "watch",
       "text": "Peak-to-peak where a peak is needed is the classic slip. The notes sometimes start with a gain of 0.8 instead of 0.85."
      }
     ],
     "id": "t10-1"
    },
    {
     "title": "Worst case: the negative peak",
     "kind": "learn",
     "blocks": [
      {
       "t": "fig",
       "src": "assets/study/resources/gr2/cd_stage.svg",
       "alt": "Source follower with load"
      },
      {
       "t": "ul",
       "items": [
        "The load pushes current **back into the source node**, so RS must carry **ID,min + IL,pk**",
        "Pick **ID,min** (a few mA) so the device never cuts off"
       ]
      },
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"I_{L,pk}=\\dfrac{V_{load,pp}}{2R_L}\"><mrow><msub><mi>I</mi><mrow><mi mathvariant=\"normal\">L</mi><mo>,</mo><mi mathvariant=\"normal\">pk</mi></mrow></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">load</mi><mo>,</mo><mi mathvariant=\"normal\">pp</mi></mrow></msub></mrow><mrow><mn>2</mn><msub><mi>R</mi><mi mathvariant=\"normal\">L</mi></msub></mrow></mfrac></mstyle></mrow></math>",
         "sheet": "S3 §6"
        },
        {
         "math": "<math alttext=\"I_{RS,max}=I_{D,min}+I_{L,pk}\"><mrow><msub><mi>I</mi><mrow><mi mathvariant=\"normal\">RS</mi><mo>,</mo><mi mathvariant=\"normal\">max</mi></mrow></msub><mo>=</mo><msub><mi>I</mi><mrow><mi mathvariant=\"normal\">D</mi><mo>,</mo><mi mathvariant=\"normal\">min</mi></mrow></msub><mo>+</mo><msub><mi>I</mi><mrow><mi mathvariant=\"normal\">L</mi><mo>,</mo><mi mathvariant=\"normal\">pk</mi></mrow></msub></mrow></math>",
         "sheet": "S3 §6"
        },
        {
         "math": "<math alttext=\"V_{RS,min}=V_S-\\dfrac{V_{load,pp}}{2}\"><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">RS</mi><mo>,</mo><mi mathvariant=\"normal\">min</mi></mrow></msub><mo>=</mo><msub><mi>V</mi><mi mathvariant=\"normal\">S</mi></msub><mo>−</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">load</mi><mo>,</mo><mi mathvariant=\"normal\">pp</mi></mrow></msub></mrow><mrow><mn>2</mn></mrow></mfrac></mstyle></mrow></math>",
         "sheet": "S3 §6"
        }
       ]
      }
     ],
     "id": "t10-2"
    },
    {
     "title": "The 11-step workflow",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"R_S=\\dfrac{V_{RS,min}}{I_{RS,max}}\"><mrow><msub><mi>R</mi><mi mathvariant=\"normal\">S</mi></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">RS</mi><mo>,</mo><mi mathvariant=\"normal\">min</mi></mrow></msub></mrow><mrow><msub><mi>I</mi><mrow><mi mathvariant=\"normal\">RS</mi><mo>,</mo><mi mathvariant=\"normal\">max</mi></mrow></msub></mrow></mfrac></mstyle></mrow></math>",
         "note": "then pick a standard value",
         "sheet": "S3 §6"
        },
        {
         "math": "<math alttext=\"I_D=\\dfrac{V_S}{R_S}\"><mrow><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>V</mi><mi mathvariant=\"normal\">S</mi></msub></mrow><mrow><msub><mi>R</mi><mi mathvariant=\"normal\">S</mi></msub></mrow></mfrac></mstyle></mrow></math>",
         "sheet": "S3 §6"
        },
        {
         "math": "<math alttext=\"V_{ov}=\\sqrt{\\dfrac{2I_D}{K_n}}\"><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">ov</mi></mrow></msub><mo>=</mo><msqrt><mrow><mstyle displaystyle=\"true\"><mfrac><mrow><mn>2</mn><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub></mrow><mrow><msub><mi>K</mi><mi mathvariant=\"normal\">n</mi></msub></mrow></mfrac></mstyle></mrow></msqrt></mrow></math>",
         "sheet": "S3 §6"
        },
        {
         "math": "<math alttext=\"V_G=V_S+V_{ov}+V_t\"><mrow><msub><mi>V</mi><mi mathvariant=\"normal\">G</mi></msub><mo>=</mo><msub><mi>V</mi><mi mathvariant=\"normal\">S</mi></msub><mo>+</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">ov</mi></mrow></msub><mo>+</mo><msub><mi>V</mi><mi mathvariant=\"normal\">t</mi></msub></mrow></math>",
         "sheet": "S3 §6"
        },
        {
         "math": "<math alttext=\"R_{G1}\\ge\\dfrac{V_{DD}}{V_G}R_{in}\\qquad R_{G2}=\\dfrac{R_{G1}}{V_{DD}/V_G-1}\"><mrow><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">G</mi><mn>1</mn></mrow></msub><mo>≥</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">DD</mi></mrow></msub></mrow><mrow><msub><mi>V</mi><mi mathvariant=\"normal\">G</mi></msub></mrow></mfrac></mstyle><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">in</mi></mrow></msub><mspace width=\"2em\"/><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">G</mi><mn>2</mn></mrow></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">G</mi><mn>1</mn></mrow></msub></mrow><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">DD</mi></mrow></msub><mo lspace=\"0.05em\" rspace=\"0.05em\">/</mo><msub><mi>V</mi><mi mathvariant=\"normal\">G</mi></msub><mo>−</mo><mn>1</mn></mrow></mfrac></mstyle></mrow></math>",
         "sheet": "S3 §6"
        }
       ]
      },
      {
       "t": "ul",
       "items": [
        "Round RS **down**: ID,min then stays at or above target",
        "Power check: DC loss in the MOSFET = VDS·ID  @S3 §8"
       ]
      }
     ],
     "id": "t10-3"
    },
    {
     "title": "Checks and fixes",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "**Negative peak:** ID = (VS − Vo,pk)/RS − IL,pk must stay above 0.  Clips here? ID,min was too small: use a smaller RS",
        "**Positive peak:** VDS = VDD − VS − Vo,pk must still exceed Vov at that current.  Clips here? Lower VS or raise VDD",
        "Bigger swing or smaller RL: IL,pk grows, RS shrinks, ID rises. Recheck power",
        "Simulate: confirm the swing, the gain and THD"
       ]
      },
      {
       "t": "call",
       "kind": "tip",
       "text": "Each waveform (vL, iL, vRS, iRS, iD) is in phase; mark each maximum and minimum."
      }
     ],
     "id": "t10-4"
    },
    {
     "title": "Source follower into a small load",
     "kind": "example",
     "blocks": [
      {
       "t": "fig",
       "src": "assets/study/resources/gr2/cd_stage.svg",
       "alt": "Source follower with load"
      },
      {
       "t": "given",
       "items": [
        "VDD = 15 V",
        "RL = 100 Ω",
        "Vo,pk = 2 V (4 V pp)",
        "ID,min = 5 mA",
        "Kn = 100 mA/V², Vt = 2 V"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Bias the source mid-supply",
         "res": "VS = 7.5 V"
        },
        {
         "h": "2",
         "text": "Peak load current",
         "res": "IL,pk = 2 V / 100 Ω = 20 mA"
        },
        {
         "h": "3",
         "text": "RS at the negative peak",
         "res": "RS = (7.5 − 2) V / (20 + 5) mA = 220 Ω"
        },
        {
         "h": "4",
         "text": "Quiescent current",
         "res": "ID = 7.5 V / 220 Ω = 34.1 mA"
        },
        {
         "h": "5",
         "text": "Overdrive, VGS, VG",
         "res": "VOV = √(2·34.1/100) = 0.826 V;  VGS = 2.83 V;  VG = 10.3 V"
        },
        {
         "h": "6",
         "text": "Gain check",
         "res": "gm = 82.6 mS;  gm(RS∥RL) = 5.68;  Av = 0.85  (matches the 0.85 estimate)"
        },
        {
         "h": "7",
         "text": "Power in the MOSFET",
         "res": "PD = (15 − 7.5) × 34.1 mA = 256 mW"
        }
       ]
      }
     ],
     "id": "t10-5"
    },
    {
     "title": "Checking both output peaks",
     "kind": "example",
     "blocks": [
      {
       "t": "given",
       "items": [
        "the follower just designed",
        "RS = 220 Ω, VS = 7.5 V, RL = 100 Ω",
        "Vo,pk = 2 V"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Negative peak: source node at VS − 2",
         "res": "IRS = 5.5 V/220 Ω = 25 mA; the load takes back 20 mA"
        },
        {
         "h": "2",
         "text": "Drain current there",
         "res": "ID = 25 − 20 = 5 mA, which is ID,min: the device just stays on"
        },
        {
         "h": "3",
         "text": "Positive peak: source node at VS + 2",
         "res": "IRS = 9.5 V/220 Ω = 43.2 mA; the load takes 20 mA"
        },
        {
         "h": "4",
         "text": "Drain current there",
         "res": "ID = 23.2 mA, so Vov = 0.681 V"
        },
        {
         "h": "5",
         "text": "Still saturated?",
         "res": "VDS = 15 − 7.5 − 2 = 5.5 V ≥ 0.681 V: yes"
        }
       ]
      }
     ],
     "id": "t10-6"
    },
    {
     "title": "gr2-cddes-004",
     "kind": "q",
     "ref": "gr2-cddes-004",
     "blocks": [],
     "id": "t10-7"
    },
    {
     "title": "gr2-wk-002",
     "kind": "workout",
     "ref": "gr2-wk-002",
     "blocks": [],
     "id": "t10-8"
    }
   ],
   "id": "t10-common-drain-design"
  },
  {
   "title": "Multi-stage amplifier planning",
   "lessons": "Lessons 19, 21",
   "slides": [
    {
     "title": "One stage cannot do both jobs",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "**CS:** big gain, but Ro ≈ RD is large, so it collapses into a small load",
        "**CD:** small Ro, but gain below 1",
        "High gain into a low-resistance load needs **both**"
       ]
      },
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"A_v=A_{vo}\\dfrac{R_L}{R_L+R_o}\"><mrow><msub><mi>A</mi><mi mathvariant=\"normal\">v</mi></msub><mo>=</mo><msub><mi>A</mi><mrow><mi mathvariant=\"normal\">vo</mi></mrow></msub><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>R</mi><mi mathvariant=\"normal\">L</mi></msub></mrow><mrow><msub><mi>R</mi><mi mathvariant=\"normal\">L</mi></msub><mo>+</mo><msub><mi>R</mi><mi mathvariant=\"normal\">o</mi></msub></mrow></mfrac></mstyle></mrow></math>",
         "label": "Single CS stage",
         "note": "with Ro ≈ RD",
         "sheet": "S3 §1"
        }
       ]
      }
     ],
     "id": "t11-1"
    },
    {
     "title": "CS then CD",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "CS makes the voltage gain",
        "CD buffers: its large Ri barely loads the CS stage and its small Ro barely loses signal into RL",
        "The CD input resistance **is** the CS load"
       ]
      },
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"A_v=A_{vo1}\\dfrac{R_{i2}}{R_{i2}+R_{o1}}\\cdot A_{vo2}\\dfrac{R_L}{R_L+R_{o2}}\"><mrow><msub><mi>A</mi><mi mathvariant=\"normal\">v</mi></msub><mo>=</mo><msub><mi>A</mi><mrow><mi mathvariant=\"normal\">vo</mi><mn>1</mn></mrow></msub><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">i</mi><mn>2</mn></mrow></msub></mrow><mrow><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">i</mi><mn>2</mn></mrow></msub><mo>+</mo><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">o</mi><mn>1</mn></mrow></msub></mrow></mfrac></mstyle><mo>·</mo><msub><mi>A</mi><mrow><mi mathvariant=\"normal\">vo</mi><mn>2</mn></mrow></msub><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>R</mi><mi mathvariant=\"normal\">L</mi></msub></mrow><mrow><msub><mi>R</mi><mi mathvariant=\"normal\">L</mi></msub><mo>+</mo><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">o</mi><mn>2</mn></mrow></msub></mrow></mfrac></mstyle></mrow></math>",
         "sheet": "S3 §1"
        }
       ]
      }
     ],
     "id": "t11-2"
    },
    {
     "title": "Plan from the spec",
     "kind": "learn",
     "blocks": [
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "List the requirements",
         "res": "Rin, gain, swing into RL, distortion"
        },
        {
         "h": "2",
         "text": "Model each candidate stage",
         "res": "a two-port: Ri, Avo, Ro (use the parameter table)"
        },
        {
         "h": "3",
         "text": "Check each stage against its load",
         "res": "Av = Avo·RL/(RL + Ro)"
        },
        {
         "h": "4",
         "text": "Bias each stage so Kn and Vt matter little",
         "res": "source resistor, stiff divider"
        },
        {
         "h": "5",
         "text": "Check each ID and the power",
         "res": "then design and simulate each stage"
        }
       ]
      },
      {
       "t": "call",
       "kind": "tip",
       "text": "Choosing the stages comes before designing any of them."
      }
     ],
     "id": "t11-3"
    },
    {
     "title": "Why the CD stage is worth adding",
     "kind": "example",
     "blocks": [
      {
       "t": "given",
       "items": [
        "CS: gm = 5 mS, RD = 10 kΩ (Ro ≈ RD)",
        "CD: gm = 40 mS, RS = 1 kΩ, Ri = 500 kΩ",
        "RL = 50 Ω"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "CS stage alone",
         "res": "Avo1 = −5·10 = -50;  into RL: -50 × 50/(50 + 10000) = -0.249"
        },
        {
         "h": "2",
         "text": "CD parameters",
         "res": "Avo2 = gm·RS/(1 + gm·RS) = 0.976;  Ro2 = RS ∥ 1/gm = 24.4 Ω"
        },
        {
         "h": "3",
         "text": "CS stage loaded by the CD input",
         "res": "Av1 = −50 × 500/(500 + 10) = -49"
        },
        {
         "h": "4",
         "text": "CD stage loaded by RL",
         "res": "Av2 = 0.976 × 50/(50 + 24.4) = 0.656"
        },
        {
         "h": "5",
         "text": "Cascade",
         "res": "Av = -49 × 0.656 = -32.1  versus -0.249 for the CS alone"
        }
       ]
      }
     ],
     "id": "t11-4"
    },
    {
     "title": "gr2-multi-002",
     "kind": "q",
     "ref": "gr2-multi-002",
     "blocks": [],
     "id": "t11-5"
    },
    {
     "title": "gr2-multi-003",
     "kind": "q",
     "ref": "gr2-multi-003",
     "blocks": [],
     "id": "t11-6"
    }
   ],
   "id": "t11-multi-stage-amplifier-planning"
  },
  {
   "title": "Common-gate amplifier",
   "lessons": "Lesson 20",
   "slides": [
    {
     "title": "What it is",
     "kind": "learn",
     "blocks": [
      {
       "t": "fig",
       "src": "assets/study/resources/gr2/cg_stage.svg",
       "alt": "Common-gate stage"
      },
      {
       "t": "ul",
       "items": [
        "Gate held at **ac ground** by a bypass capacitor",
        "Signal enters at the **source**; the output leaves at the **drain**",
        "The gate bias divider still sets VG; the DC analysis is the same as for any bias network"
       ]
      }
     ],
     "id": "t12-1"
    },
    {
     "title": "Its numbers",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"R_i=R_S\\parallel\\dfrac{1}{g_m}\\approx\\dfrac{1}{g_m}\"><mrow><msub><mi>R</mi><mi mathvariant=\"normal\">i</mi></msub><mo>=</mo><msub><mi>R</mi><mi mathvariant=\"normal\">S</mi></msub><mo>∥</mo><mstyle displaystyle=\"true\"><mfrac><mrow><mn>1</mn></mrow><mrow><msub><mi>g</mi><mi mathvariant=\"normal\">m</mi></msub></mrow></mfrac></mstyle><mo>≈</mo><mstyle displaystyle=\"true\"><mfrac><mrow><mn>1</mn></mrow><mrow><msub><mi>g</mi><mi mathvariant=\"normal\">m</mi></msub></mrow></mfrac></mstyle></mrow></math>",
         "note": "low",
         "sheet": "S3 §7"
        },
        {
         "math": "<math alttext=\"A_{vo}=+g_mR_D\"><mrow><msub><mi>A</mi><mrow><mi mathvariant=\"normal\">vo</mi></mrow></msub><mo>=</mo><mo>+</mo><msub><mi>g</mi><mi mathvariant=\"normal\">m</mi></msub><msub><mi>R</mi><mi mathvariant=\"normal\">D</mi></msub></mrow></math>",
         "note": "non-inverting",
         "sheet": "S3 §7"
        },
        {
         "math": "<math alttext=\"R_o=R_D\\parallel\\left[r_o(1+g_mR_S)+R_S\\right]\\approx R_D\"><mrow><msub><mi>R</mi><mi mathvariant=\"normal\">o</mi></msub><mo>=</mo><msub><mi>R</mi><mi mathvariant=\"normal\">D</mi></msub><mo>∥</mo><mrow><mo stretchy=\"true\">[</mo><msub><mi>r</mi><mi mathvariant=\"normal\">o</mi></msub><mo stretchy=\"false\">(</mo><mn>1</mn><mo>+</mo><msub><mi>g</mi><mi mathvariant=\"normal\">m</mi></msub><msub><mi>R</mi><mi mathvariant=\"normal\">S</mi></msub><mo stretchy=\"false\">)</mo><mo>+</mo><msub><mi>R</mi><mi mathvariant=\"normal\">S</mi></msub><mo stretchy=\"true\">]</mo></mrow><mo>≈</mo><msub><mi>R</mi><mi mathvariant=\"normal\">D</mi></msub></mrow></math>",
         "sheet": "S3 §7"
        },
        {
         "math": "<math alttext=\"R_D\\ \\to\\ R_D\\parallel R_L\"><mrow><msub><mi>R</mi><mi mathvariant=\"normal\">D</mi></msub><mspace width=\"0.25em\"/><mo>→</mo><mspace width=\"0.25em\"/><msub><mi>R</mi><mi mathvariant=\"normal\">D</mi></msub><mo>∥</mo><msub><mi>R</mi><mi mathvariant=\"normal\">L</mi></msub></mrow></math>",
         "label": "Loaded",
         "sheet": "S3 §7"
        }
       ]
      },
      {
       "t": "ul",
       "items": [
        "The input current flows through the source, where the transistor looks like **1/gm**",
        "Same size of gain as CS (gm·RD) but **no inversion**"
       ]
      }
     ],
     "id": "t12-2"
    },
    {
     "title": "Why Ri = 1/gm",
     "kind": "learn",
     "blocks": [
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Gate at ac ground",
         "res": "so vgs = 0 − vs = −vi when the signal is applied to the source"
        },
        {
         "h": "2",
         "text": "The controlled current",
         "res": "id = gm·vgs = −gm·vi (it flows from source to drain)"
        },
        {
         "h": "3",
         "text": "The input current is that same current",
         "res": "ii = gm·vi flowing into the source"
        },
        {
         "h": "4",
         "text": "Ri = vi/ii",
         "res": "Ri = 1/gm, in parallel with RS from the bias network"
        }
       ]
      },
      {
       "t": "call",
       "kind": "tip",
       "text": "The output current gm·vi flows through RD, so vo = gm·vi·RD with no sign change: Avo = +gm·RD."
      }
     ],
     "id": "t12-3"
    },
    {
     "title": "When to use it",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "Ri of a few ohms to tens of ohms **throws away** much of a source with a larger RS",
        "So it is a poor general voltage amplifier",
        "It only works well from a source whose resistance is small compared with 1/gm"
       ]
      },
      {
       "t": "call",
       "kind": "watch",
       "text": "The gate being \"grounded\" does not make the gain zero: the signal drives the source, and the output current still flows through RD."
      }
     ],
     "id": "t12-4"
    },
    {
     "title": "Source loss at a common-gate input",
     "kind": "example",
     "blocks": [
      {
       "t": "given",
       "items": [
        "gm = 10 mS",
        "RS = 1 kΩ",
        "RD = 5 kΩ",
        "signal source resistance 100 Ω"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Input resistance",
         "res": "Ri = 1 kΩ ∥ 1/10 mS = 1000 ∥ 100 = 90.9 Ω"
        },
        {
         "h": "2",
         "text": "Input divider with the source",
         "res": "90.9 / (90.9 + 100) = 0.476"
        },
        {
         "h": "3",
         "text": "Open-circuit gain",
         "res": "Avo = +gm·RD = 50"
        },
        {
         "h": "4",
         "text": "Gain from the source",
         "res": "Gv ≈ 0.476 × 50 = 23.8 (the divider costs about half)"
        }
       ]
      }
     ],
     "id": "t12-5"
    },
    {
     "title": "gr2-cg-002",
     "kind": "q",
     "ref": "gr2-cg-002",
     "blocks": [],
     "id": "t12-6"
    },
    {
     "title": "gr2-cg-003",
     "kind": "q",
     "ref": "gr2-cg-003",
     "blocks": [],
     "id": "t12-7"
    }
   ],
   "id": "t12-common-gate-amplifier"
  },
  {
   "title": "Comparing amplifier configurations",
   "lessons": "Lessons 20, 26",
   "slides": [
    {
     "title": "The master parameter table",
     "kind": "learn",
     "blocks": [
      {
       "t": "tbl",
       "head": [
        "Stage",
        "Ri",
        "Avo",
        "Ro"
       ],
       "rows": [
        [
         "CS, no RS",
         "RG1 ∥ RG2",
         "−gm(RD ∥ ro) ≈ −gm·RD",
         "RD ∥ ro ≈ RD"
        ],
        [
         "CS, partial RS1",
         "RG1 ∥ RG2",
         "−gm(RD ∥ ro)/(1 + gm·RS1) ≈ −RD/(RS1 + 1/gm)",
         "≈ RD"
        ],
        [
         "CD",
         "RG1 ∥ RG2",
         "gm·RS/(1 + gm·RS) < 1",
         "RS ∥ 1/gm ∥ ro ≈ 1/gm"
        ],
        [
         "CG",
         "RS ∥ 1/gm ≈ 1/gm",
         "+ gm·RD  (non-inverting)",
         "≈ RD"
        ]
       ],
       "sheet": "S3 §7"
      },
      {
       "t": "call",
       "kind": "tip",
       "text": "The sheet also gives the exact Ro with ro, for example CS partial: RD ∥ [ro(1 + gm·RS1) + RS1]."
      }
     ],
     "id": "t13-1"
    },
    {
     "title": "Loading and rule of thumb",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"R_D\\ \\to\\ R_D\\parallel R_L\"><mrow><msub><mi>R</mi><mi mathvariant=\"normal\">D</mi></msub><mspace width=\"0.25em\"/><mo>→</mo><mspace width=\"0.25em\"/><msub><mi>R</mi><mi mathvariant=\"normal\">D</mi></msub><mo>∥</mo><msub><mi>R</mi><mi mathvariant=\"normal\">L</mi></msub></mrow></math>",
         "label": "Loaded gain (CS, CG)",
         "sheet": "S3 §7"
        },
        {
         "math": "<math alttext=\"R_S\\ \\to\\ R_S\\parallel R_L\"><mrow><msub><mi>R</mi><mi mathvariant=\"normal\">S</mi></msub><mspace width=\"0.25em\"/><mo>→</mo><mspace width=\"0.25em\"/><msub><mi>R</mi><mi mathvariant=\"normal\">S</mi></msub><mo>∥</mo><msub><mi>R</mi><mi mathvariant=\"normal\">L</mi></msub></mrow></math>",
         "label": "Loaded gain (CD)",
         "sheet": "S3 §7"
        },
        {
         "math": "<math alttext=\"A_v=A_{vo}\\dfrac{R_L}{R_L+R_o}\"><mrow><msub><mi>A</mi><mi mathvariant=\"normal\">v</mi></msub><mo>=</mo><msub><mi>A</mi><mrow><mi mathvariant=\"normal\">vo</mi></mrow></msub><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>R</mi><mi mathvariant=\"normal\">L</mi></msub></mrow><mrow><msub><mi>R</mi><mi mathvariant=\"normal\">L</mi></msub><mo>+</mo><msub><mi>R</mi><mi mathvariant=\"normal\">o</mi></msub></mrow></mfrac></mstyle></mrow></math>",
         "sheet": "S3 §1"
        }
       ]
      },
      {
       "t": "ul",
       "items": [
        "1/gm shows up as **Ro of the follower** and as **Ri of the common gate**",
        "With the usual approximations RD, RS1 and 1/gm are all you need"
       ]
      }
     ],
     "id": "t13-2"
    },
    {
     "title": "Which one when",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "**Most gain:** CS with RS bypassed (stable Q, gain follows gm)",
        "**Stable, predictable gain and lower THD:** CS with partial bypass",
        "**Drive a low-resistance load:** CD (low Ro, gain just below 1)",
        "**Not inverting:** CD and CG",
        "**High Ri:** CS and CD; **low Ri:** CG"
       ]
      }
     ],
     "id": "t13-3"
    },
    {
     "title": "Choosing a stage: quick cases",
     "kind": "learn",
     "blocks": [
      {
       "t": "tbl",
       "head": [
        "You need ...",
        "Use",
        "Because"
       ],
       "rows": [
        [
         "Large voltage gain, any load",
         "CS (bypassed)",
         "Avo = −gm·RD is the largest"
        ],
        [
         "Gain that does not drift with the transistor",
         "CS with partial bypass",
         "gain set by RD/(RS1 + 1/gm)"
        ],
        [
         "To drive a low-resistance load",
         "CD",
         "Ro ≈ 1/gm is small"
        ],
        [
         "To isolate a high-gain stage from its load",
         "CD after CS",
         "Ri of the CD is large, Ro small"
        ],
        [
         "A very low input resistance",
         "CG",
         "Ri ≈ 1/gm"
        ]
       ]
      }
     ],
     "id": "t13-4"
    },
    {
     "title": "gr2-cmp-002",
     "kind": "q",
     "ref": "gr2-cmp-002",
     "blocks": [],
     "id": "t13-5"
    },
    {
     "title": "gr2-cmp-004",
     "kind": "q",
     "ref": "gr2-cmp-004",
     "blocks": [],
     "id": "t13-6"
    }
   ],
   "id": "t13-comparing-amplifier-configurat"
  },
  {
   "title": "Simulation and measurement",
   "lessons": "Lessons 17, 18, 19",
   "slides": [
    {
     "title": "Operating point",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "Run a **DC operating point**; compare node voltages and ID with the hand values",
        "A few percent off is normal: the hand method ignores λ and uses ideal parameters",
        "Sweep **Vt and Kn** over their stated values and tabulate ID, VD, VS and the gain",
        "The bias with a source resistor should barely move; the no-RS bias should move a lot"
       ]
      }
     ],
     "id": "t14-1"
    },
    {
     "title": "Gain from a transient run",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"|A_v|=\\dfrac{V_{out,pp}}{V_{in,pp}}\"><mrow><mo stretchy=\"false\" lspace=\"0\" rspace=\"0\">|</mo><msub><mi>A</mi><mi mathvariant=\"normal\">v</mi></msub><mo stretchy=\"false\" lspace=\"0\" rspace=\"0\">|</mo><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">out</mi><mo>,</mo><mi mathvariant=\"normal\">pp</mi></mrow></msub></mrow><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">in</mi><mo>,</mo><mi mathvariant=\"normal\">pp</mi></mrow></msub></mrow></mfrac></mstyle></mrow></math>",
         "note": "Multisim sources are labeled in Vpk, so Vin,pp = 2 × Vpk"
        }
       ]
      },
      {
       "t": "ul",
       "items": [
        "Put the cursors on a **crest** and the next **trough**; dy is Vout,pp",
        "Ignore dy/dx: that is a slope in V/s",
        "Raise the input until the output reaches the required swing and confirm it does not clip"
       ]
      },
      {
       "t": "call",
       "kind": "watch",
       "text": "Dividing by the peak instead of the peak-to-peak input, or reading cursors that are not on a peak and a trough, gives the wrong gain."
      }
     ],
     "id": "t14-2"
    },
    {
     "title": "Distortion",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "Connect the **distortion analyzer to the output**, not the input",
        "Set the fundamental to the source frequency; the resolution must divide it",
        "Read **THD** in percent: larger THD means more distortion",
        "More unbypassed RS (a smaller vgs) lowers THD"
       ]
      }
     ],
     "id": "t14-3"
    },
    {
     "title": "Power dissipation",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"P_{diss}=V_{DS}I_D\"><mrow><msub><mi>P</mi><mrow><mi mathvariant=\"normal\">diss</mi></mrow></msub><mo>=</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">DS</mi></mrow></msub><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub></mrow></math>",
         "label": "DC, MOSFET",
         "sheet": "S3 §8"
        },
        {
         "math": "<math alttext=\"P_{diss}=\\dfrac{V^2}{R}=I^2R\"><mrow><msub><mi>P</mi><mrow><mi mathvariant=\"normal\">diss</mi></mrow></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msup><mi>V</mi><mn>2</mn></msup></mrow><mrow><mi>R</mi></mrow></mfrac></mstyle><mo>=</mo><msup><mi>I</mi><mn>2</mn></msup><mi>R</mi></mrow></math>",
         "label": "DC, resistor",
         "sheet": "S3 §8"
        },
        {
         "math": "<math alttext=\"V_{rms}=\\dfrac{V_{pp}}{2\\sqrt{2}}=\\dfrac{V_{pk}}{\\sqrt{2}}\"><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">rms</mi></mrow></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">pp</mi></mrow></msub></mrow><mrow><mn>2</mn><msqrt><mrow><mn>2</mn></mrow></msqrt></mrow></mfrac></mstyle><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">pk</mi></mrow></msub></mrow><mrow><msqrt><mrow><mn>2</mn></mrow></msqrt></mrow></mfrac></mstyle></mrow></math>",
         "label": "AC, sinusoid",
         "sheet": "S3 §8"
        },
        {
         "math": "<math alttext=\"P_{diss}=\\dfrac{V_{rms}^2}{R}\"><mrow><msub><mi>P</mi><mrow><mi mathvariant=\"normal\">diss</mi></mrow></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msubsup><mi>V</mi><mrow><mi mathvariant=\"normal\">rms</mi></mrow><mn>2</mn></msubsup></mrow><mrow><mi>R</mi></mrow></mfrac></mstyle></mrow></math>",
         "label": "AC, resistor",
         "sheet": "S3 §8"
        },
        {
         "math": "<math alttext=\"P_{diss}=\\tfrac{1}{2}v_{ds,pk}\\,i_{ds,pk}\"><mrow><msub><mi>P</mi><mrow><mi mathvariant=\"normal\">diss</mi></mrow></msub><mo>=</mo><mstyle displaystyle=\"false\"><mfrac><mrow><mn>1</mn></mrow><mrow><mn>2</mn></mrow></mfrac></mstyle><msub><mi>v</mi><mrow><mi mathvariant=\"normal\">ds</mi><mo>,</mo><mi mathvariant=\"normal\">pk</mi></mrow></msub><mspace width=\"0.17em\"/><msub><mi>i</mi><mrow><mi mathvariant=\"normal\">ds</mi><mo>,</mo><mi mathvariant=\"normal\">pk</mi></mrow></msub></mrow></math>",
         "label": "AC, MOSFET",
         "sheet": "S3 §8"
        }
       ]
      },
      {
       "t": "call",
       "kind": "tip",
       "text": "Check that each device and resistor in a design is within its power rating."
      }
     ],
     "id": "t14-4"
    },
    {
     "title": "Reading the gain from the cursors",
     "kind": "example",
     "blocks": [
      {
       "t": "given",
       "items": [
        "Multisim source labeled 0.05 Vpk",
        "cursor readout: dy = 1.02 V (crest to trough of vo)"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Input peak-to-peak",
         "res": "Vin,pp = 2 × 0.05 = 0.1 V"
        },
        {
         "h": "2",
         "text": "Gain magnitude",
         "res": "|Av| = 1.02 / 0.1 = 10.2"
        },
        {
         "h": "3",
         "text": "Wrong way (peak input)",
         "res": "1.02 / 0.05 = 20.4: twice too large"
        }
       ]
      }
     ],
     "id": "t14-5"
    },
    {
     "title": "gr2-sim-001",
     "kind": "q",
     "ref": "gr2-sim-001",
     "blocks": [],
     "id": "t14-6"
    },
    {
     "title": "gr2-sim-002",
     "kind": "q",
     "ref": "gr2-sim-002",
     "blocks": [],
     "id": "t14-7"
    }
   ],
   "id": "t14-simulation-and-measurement"
  },
  {
   "title": "DC operating point and region checks",
   "lessons": "Lessons 10, 15, 21, 26",
   "slides": [
    {
     "title": "Assume, analyze, confirm",
     "kind": "learn",
     "blocks": [
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Capacitors become opens",
         "res": "so only the DC network remains"
        },
        {
         "h": "2",
         "text": "Assume a region (saturation)",
         "res": "and write its equations"
        },
        {
         "h": "3",
         "text": "Solve for ID, then the voltages"
        },
        {
         "h": "4",
         "text": "Confirm the region",
         "res": "if it fails, redo the analysis in triode"
        }
       ]
      },
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"V_{GS}&lt;V_t\\ (V_{ov}\\le 0),\\quad I_D=0\"><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">GS</mi></mrow></msub><mo>&lt;</mo><msub><mi>V</mi><mi mathvariant=\"normal\">t</mi></msub><mspace width=\"0.25em\"/><mo stretchy=\"false\">(</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">ov</mi></mrow></msub><mo>≤</mo><mn>0</mn><mo stretchy=\"false\">)</mo><mo>,</mo><mspace width=\"1em\"/><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub><mo>=</mo><mn>0</mn></mrow></math>",
         "label": "Cutoff",
         "sheet": "S2 §2"
        },
        {
         "math": "<math alttext=\"V_{GS}\\ge V_t\\ \\text{ and }\\ V_{DS}\\ge V_{ov}\"><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">GS</mi></mrow></msub><mo>≥</mo><msub><mi>V</mi><mi mathvariant=\"normal\">t</mi></msub><mspace width=\"0.25em\"/><mtext> and </mtext><mspace width=\"0.25em\"/><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">DS</mi></mrow></msub><mo>≥</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">ov</mi></mrow></msub></mrow></math>",
         "label": "Saturation",
         "note": "equivalently VGD ≤ Vt",
         "sheet": "S2 §2"
        },
        {
         "math": "<math alttext=\"V_{DS}&lt;V_{ov},\\quad I_D=K_n\\left[V_{ov}V_{DS}-\\tfrac{1}{2}V_{DS}^2\\right]\"><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">DS</mi></mrow></msub><mo>&lt;</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">ov</mi></mrow></msub><mo>,</mo><mspace width=\"1em\"/><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub><mo>=</mo><msub><mi>K</mi><mi mathvariant=\"normal\">n</mi></msub><mrow><mo stretchy=\"true\">[</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">ov</mi></mrow></msub><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">DS</mi></mrow></msub><mo>−</mo><mstyle displaystyle=\"false\"><mfrac><mrow><mn>1</mn></mrow><mrow><mn>2</mn></mrow></mfrac></mstyle><msubsup><mi>V</mi><mrow><mi mathvariant=\"normal\">DS</mi></mrow><mn>2</mn></msubsup><mo stretchy=\"true\">]</mo></mrow></mrow></math>",
         "label": "Triode",
         "sheet": "S2 §2"
        }
       ]
      }
     ],
     "id": "t15-1"
    },
    {
     "title": "The bias network equations",
     "kind": "learn",
     "blocks": [
      {
       "t": "fig",
       "src": "assets/study/resources/gr2/cs_dc_bias.svg",
       "alt": "DC bias circuit of a common-source stage"
      },
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"V_G=V_{DD}\\dfrac{R_{G2}}{R_{G1}+R_{G2}}\"><mrow><msub><mi>V</mi><mi mathvariant=\"normal\">G</mi></msub><mo>=</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">DD</mi></mrow></msub><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">G</mi><mn>2</mn></mrow></msub></mrow><mrow><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">G</mi><mn>1</mn></mrow></msub><mo>+</mo><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">G</mi><mn>2</mn></mrow></msub></mrow></mfrac></mstyle></mrow></math>",
         "note": "IG = 0",
         "sheet": "S2 §5"
        },
        {
         "math": "<math alttext=\"V_S=R_SI_D\\qquad V_D=V_{DD}-R_DI_D\"><mrow><msub><mi>V</mi><mi mathvariant=\"normal\">S</mi></msub><mo>=</mo><msub><mi>R</mi><mi mathvariant=\"normal\">S</mi></msub><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub><mspace width=\"2em\"/><msub><mi>V</mi><mi mathvariant=\"normal\">D</mi></msub><mo>=</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">DD</mi></mrow></msub><mo>−</mo><msub><mi>R</mi><mi mathvariant=\"normal\">D</mi></msub><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub></mrow></math>",
         "sheet": "S2 §5"
        },
        {
         "math": "<math alttext=\"V_{GS}=V_G-V_S=V_G-R_SI_D\"><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">GS</mi></mrow></msub><mo>=</mo><msub><mi>V</mi><mi mathvariant=\"normal\">G</mi></msub><mo>−</mo><msub><mi>V</mi><mi mathvariant=\"normal\">S</mi></msub><mo>=</mo><msub><mi>V</mi><mi mathvariant=\"normal\">G</mi></msub><mo>−</mo><msub><mi>R</mi><mi mathvariant=\"normal\">S</mi></msub><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub></mrow></math>",
         "sheet": "S2 §5"
        },
        {
         "math": "<math alttext=\"V_{DS}=V_D-V_S\\qquad V_{GD}=V_G-V_D\\qquad V_{ov}=V_{GS}-V_t\"><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">DS</mi></mrow></msub><mo>=</mo><msub><mi>V</mi><mi mathvariant=\"normal\">D</mi></msub><mo>−</mo><msub><mi>V</mi><mi mathvariant=\"normal\">S</mi></msub><mspace width=\"2em\"/><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">GD</mi></mrow></msub><mo>=</mo><msub><mi>V</mi><mi mathvariant=\"normal\">G</mi></msub><mo>−</mo><msub><mi>V</mi><mi mathvariant=\"normal\">D</mi></msub><mspace width=\"2em\"/><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">ov</mi></mrow></msub><mo>=</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">GS</mi></mrow></msub><mo>−</mo><msub><mi>V</mi><mi mathvariant=\"normal\">t</mi></msub></mrow></math>",
         "sheet": "S2 §5"
        }
       ]
      }
     ],
     "id": "t15-2"
    },
    {
     "title": "Solving the quadratic",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"I_D=\\tfrac{1}{2}K_n(V_G-R_SI_D-V_t)^2\"><mrow><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub><mo>=</mo><mstyle displaystyle=\"false\"><mfrac><mrow><mn>1</mn></mrow><mrow><mn>2</mn></mrow></mfrac></mstyle><msub><mi>K</mi><mi mathvariant=\"normal\">n</mi></msub><mo stretchy=\"false\">(</mo><msub><mi>V</mi><mi mathvariant=\"normal\">G</mi></msub><mo>−</mo><msub><mi>R</mi><mi mathvariant=\"normal\">S</mi></msub><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub><mo>−</mo><msub><mi>V</mi><mi mathvariant=\"normal\">t</mi></msub><msup><mo stretchy=\"false\">)</mo><mn>2</mn></msup></mrow></math>",
         "sheet": "S2 §5"
        },
        {
         "math": "<math alttext=\"aI_D^2+bI_D+c=0\\ \\Rightarrow\\ I_D=\\dfrac{-b\\pm\\sqrt{b^2-4ac}}{2a}\"><mrow><mi>a</mi><msubsup><mi>I</mi><mi mathvariant=\"normal\">D</mi><mn>2</mn></msubsup><mo>+</mo><mi>b</mi><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub><mo>+</mo><mi>c</mi><mo>=</mo><mn>0</mn><mspace width=\"0.25em\"/><mo>⇒</mo><mspace width=\"0.25em\"/><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><mo form=\"prefix\" lspace=\"0\" rspace=\"0.04em\">−</mo><mi>b</mi><mo>±</mo><msqrt><mrow><msup><mi>b</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>a</mi><mi>c</mi></mrow></msqrt></mrow><mrow><mn>2</mn><mi>a</mi></mrow></mfrac></mstyle></mrow></math>"
        }
       ]
      },
      {
       "t": "ul",
       "items": [
        "Two roots come out: keep the one with **VGS > Vt**; the other implies the device is off",
        "Use consistent units: **mA with kΩ**, and Kn in **mA/V²**",
        "With no RS: VGS = VG directly and there is no quadratic"
       ]
      },
      {
       "t": "call",
       "kind": "watch",
       "text": "Compare VDS with **Vov**, not with Vt. If the saturation check fails, the assumed region was wrong."
      }
     ],
     "id": "t15-3"
    },
    {
     "title": "Find ID and check the region",
     "kind": "example",
     "blocks": [
      {
       "t": "fig",
       "src": "assets/study/resources/gr2/cs_dc_bias.svg",
       "alt": "DC bias circuit"
      },
      {
       "t": "given",
       "items": [
        "VDD = 12 V",
        "RG1 = 200 kΩ, RG2 = 100 kΩ",
        "RD = 2 kΩ, RS = 1 kΩ",
        "Kn = 2 mA/V², Vt = 1 V"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Gate voltage from the divider",
         "res": "VG = 12 × 100/300 = 4 V"
        },
        {
         "h": "2",
         "text": "Square law with VGS = VG − ID·RS",
         "res": "ID = (3 − ID)²  →  ID² − 7·ID + 9 = 0"
        },
        {
         "h": "3",
         "text": "Two roots",
         "res": "ID = 1.7 mA or 5.3 mA"
        },
        {
         "h": "4",
         "text": "Keep the root with VGS > Vt",
         "res": "1.7 mA gives VGS = 2.3 V.  5.3 mA gives -1.3 V: rejected"
        },
        {
         "h": "5",
         "text": "Voltages",
         "res": "VD = 8.61 V, VS = 1.7 V, VDS = 6.91 V"
        },
        {
         "h": "6",
         "text": "Confirm: VDS ≥ VOV",
         "res": "6.91 V ≥ 1.3 V: saturation holds"
        }
       ]
      }
     ],
     "id": "t15-4"
    },
    {
     "title": "When saturation fails: redo in triode",
     "kind": "example",
     "blocks": [
      {
       "t": "given",
       "items": [
        "VDD = 10 V, VG = 5 V (divider already solved)",
        "RD = 5 kΩ, RS = 0.5 kΩ",
        "Kn = 2 mA/V², Vt = 1 V"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Assume saturation and solve",
         "res": "ID = (4 − 0.5·ID)²  →  ID = 4 mA"
        },
        {
         "h": "2",
         "text": "Check the voltages",
         "res": "VD = 10 − 5×4 = -10 V: impossible (below ground), so the assumption is wrong"
        },
        {
         "h": "3",
         "text": "Triode equations",
         "res": "VGS = 5 − 0.5·ID,  VDS = 10 − 5.5·ID,  ID = 2[(VGS − 1)·VDS − ½·VDS²]"
        },
        {
         "h": "4",
         "text": "Solve numerically",
         "res": "ID = 1.76 mA, VGS = 4.12 V, VDS = 0.297 V"
        },
        {
         "h": "5",
         "text": "Confirm triode",
         "res": "VDS = 0.297 V < Vov = 3.12 V: consistent"
        }
       ]
      }
     ],
     "id": "t15-5"
    },
    {
     "title": "gr2-dc-005",
     "kind": "q",
     "ref": "gr2-dc-005",
     "blocks": [],
     "id": "t15-6"
    },
    {
     "title": "gr2-dc-006",
     "kind": "q",
     "ref": "gr2-dc-006",
     "blocks": [],
     "id": "t15-7"
    },
    {
     "title": "gr2-wk-003",
     "kind": "workout",
     "ref": "gr2-wk-003",
     "blocks": [],
     "id": "t15-8"
    }
   ],
   "id": "t15-dc-operating-point-and-region-"
  },
  {
   "title": "Drain-feedback bias and PMOS",
   "lessons": "Lesson 26",
   "slides": [
    {
     "title": "Divider fed from the drain",
     "kind": "learn",
     "blocks": [
      {
       "t": "fig",
       "src": "assets/study/resources/gr2/self_bias.svg",
       "alt": "Self-biased common-source stage"
      },
      {
       "t": "ul",
       "items": [
        "RG1 runs from the **drain** to the gate, RG2 from the gate to ground",
        "ID up → VD down → VG down → ID down: built-in negative feedback",
        "The problem states that the current in RG1 is negligible next to ID"
       ]
      },
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"V_D=V_{DD}-R_DI_D\\qquad V_G=V_D\\dfrac{R_{G2}}{R_{G1}+R_{G2}}\"><mrow><msub><mi>V</mi><mi mathvariant=\"normal\">D</mi></msub><mo>=</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">DD</mi></mrow></msub><mo>−</mo><msub><mi>R</mi><mi mathvariant=\"normal\">D</mi></msub><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub><mspace width=\"2em\"/><msub><mi>V</mi><mi mathvariant=\"normal\">G</mi></msub><mo>=</mo><msub><mi>V</mi><mi mathvariant=\"normal\">D</mi></msub><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">G</mi><mn>2</mn></mrow></msub></mrow><mrow><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">G</mi><mn>1</mn></mrow></msub><mo>+</mo><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">G</mi><mn>2</mn></mrow></msub></mrow></mfrac></mstyle></mrow></math>"
        },
        {
         "math": "<math alttext=\"V_{GS}=V_G\"><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">GS</mi></mrow></msub><mo>=</mo><msub><mi>V</mi><mi mathvariant=\"normal\">G</mi></msub></mrow></math>",
         "label": "Source grounded"
        }
       ]
      }
     ],
     "id": "t16-1"
    },
    {
     "title": "Solve and check",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "Substitute into **ID = ½·Kn·(VG − Vt)²** (sheet 2) to get a **quadratic** in ID",
        "Reject the root that puts VD below ground or VGS below Vt",
        "Check **VDS ≥ VOV** (here VD above Vov)",
        "Check that the current in RG1, (VD − VG)/RG1, is negligible next to ID"
       ]
      },
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"I_D=\\tfrac{1}{2}K_n(V_{GS}-V_t)^2\"><mrow><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub><mo>=</mo><mstyle displaystyle=\"false\"><mfrac><mrow><mn>1</mn></mrow><mrow><mn>2</mn></mrow></mfrac></mstyle><msub><mi>K</mi><mi mathvariant=\"normal\">n</mi></msub><mo stretchy=\"false\">(</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">GS</mi></mrow></msub><mo>−</mo><msub><mi>V</mi><mi mathvariant=\"normal\">t</mi></msub><msup><mo stretchy=\"false\">)</mo><mn>2</mn></msup></mrow></math>",
         "label": "Square law",
         "sheet": "S2 §2"
        }
       ]
      }
     ],
     "id": "t16-2"
    },
    {
     "title": "Small-signal gain",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"\\dfrac{v_o}{R_D}+g_mv_{gs}+\\dfrac{v_o-v_{gs}}{R_{G1}}=0\"><mrow><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>v</mi><mi mathvariant=\"normal\">o</mi></msub></mrow><mrow><msub><mi>R</mi><mi mathvariant=\"normal\">D</mi></msub></mrow></mfrac></mstyle><mo>+</mo><msub><mi>g</mi><mi mathvariant=\"normal\">m</mi></msub><msub><mi>v</mi><mrow><mi mathvariant=\"normal\">gs</mi></mrow></msub><mo>+</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>v</mi><mi mathvariant=\"normal\">o</mi></msub><mo>−</mo><msub><mi>v</mi><mrow><mi mathvariant=\"normal\">gs</mi></mrow></msub></mrow><mrow><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">G</mi><mn>1</mn></mrow></msub></mrow></mfrac></mstyle><mo>=</mo><mn>0</mn></mrow></math>",
         "label": "Drain node (vgs = vin)"
        },
        {
         "math": "<math alttext=\"\\dfrac{v_o}{v_{in}}=\\dfrac{1/R_{G1}-g_m}{1/R_D+1/R_{G1}}\\approx -g_mR_D\"><mrow><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>v</mi><mi mathvariant=\"normal\">o</mi></msub></mrow><mrow><msub><mi>v</mi><mrow><mi mathvariant=\"normal\">in</mi></mrow></msub></mrow></mfrac></mstyle><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><mn>1</mn><mo lspace=\"0.05em\" rspace=\"0.05em\">/</mo><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">G</mi><mn>1</mn></mrow></msub><mo>−</mo><msub><mi>g</mi><mi mathvariant=\"normal\">m</mi></msub></mrow><mrow><mn>1</mn><mo lspace=\"0.05em\" rspace=\"0.05em\">/</mo><msub><mi>R</mi><mi mathvariant=\"normal\">D</mi></msub><mo>+</mo><mn>1</mn><mo lspace=\"0.05em\" rspace=\"0.05em\">/</mo><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">G</mi><mn>1</mn></mrow></msub></mrow></mfrac></mstyle><mo>≈</mo><mo form=\"prefix\" lspace=\"0\" rspace=\"0.04em\">−</mo><msub><mi>g</mi><mi mathvariant=\"normal\">m</mi></msub><msub><mi>R</mi><mi mathvariant=\"normal\">D</mi></msub></mrow></math>"
        }
       ]
      },
      {
       "t": "ul",
       "items": [
        "A large RG1 carries little feedback current, so the gain approaches −gm·RD",
        "A different RD changes **both** the bias and the gain"
       ]
      }
     ],
     "id": "t16-3"
    },
    {
     "title": "PMOS: the mirror image",
     "kind": "learn",
     "blocks": [
      {
       "t": "fig",
       "src": "assets/study/resources/gr2/pmos_cs.svg",
       "alt": "PMOS common-source stage"
      },
      {
       "t": "ul",
       "items": [
        "p-type channel, **holes** carry the current; the source sits toward the **positive** supply",
        "Supplies and polarities flip; the same checks apply (saturation, swing, linearity)",
        "Work with magnitudes: |Vt|, |VGS|, |Vov|"
       ]
      },
      {
       "t": "call",
       "kind": "tip",
       "text": "PMOS symbol: arrow on the source, source at the top in circuits.  @S2 §1"
      }
     ],
     "id": "t16-4"
    },
    {
     "title": "Why drain feedback stabilizes ID",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "Suppose a transistor has a larger Kn, so ID tries to rise",
        "More ID drops more voltage across RD, so **VD falls**",
        "The divider passes the lower VD to the gate: **VG falls**, which cuts ID back",
        "The result: the bias changes less with Kn and Vt than with a plain gate divider"
       ]
      },
      {
       "t": "call",
       "kind": "tip",
       "text": "Compare: a fixed divider from VDD has no such feedback."
      }
     ],
     "id": "t16-5"
    },
    {
     "title": "A PMOS stage",
     "kind": "example",
     "blocks": [
      {
       "t": "fig",
       "src": "assets/study/resources/gr2/pmos_cs.svg",
       "alt": "PMOS common-source stage"
      },
      {
       "t": "given",
       "items": [
        "VDD = 10 V, source tied to VDD",
        "gate held at VG = 7 V",
        "|Vt| = 1 V, Kp = 2 mA/V²",
        "RD = 1 kΩ to ground"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Source-gate voltage",
         "res": "VSG = VDD − VG = 3 V"
        },
        {
         "h": "2",
         "text": "Overdrive",
         "res": "Vov = VSG − |Vt| = 2 V"
        },
        {
         "h": "3",
         "text": "Saturation current (same law, with magnitudes)",
         "res": "ID = ½·2·2² = 4 mA"
        },
        {
         "h": "4",
         "text": "Drain voltage",
         "res": "VD = 1 × 4 = 4 V, so VSD = 6 V"
        },
        {
         "h": "5",
         "text": "Saturation check",
         "res": "VSD = 6 V ≥ Vov = 2 V: yes"
        }
       ]
      }
     ],
     "id": "t16-6"
    },
    {
     "title": "Drain-feedback bias and gain",
     "kind": "example",
     "blocks": [
      {
       "t": "given",
       "items": [
        "VDD = 10 V",
        "RD = 2 kΩ",
        "RG1 = 200 kΩ, RG2 = 100 kΩ",
        "Kn = 2 mA/V², Vt = 1 V"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Divider fraction",
         "res": "RG2/(RG1+RG2) = 0.333;  VG = 0.333·(10 − 2·ID)"
        },
        {
         "h": "2",
         "text": "Square law",
         "res": "ID = (VG − 1)²  →  4·ID² − 37·ID + 49 = 0"
        },
        {
         "h": "3",
         "text": "Two roots",
         "res": "ID = 1.6 mA or 7.65 mA"
        },
        {
         "h": "4",
         "text": "Reject the root with VD below ground",
         "res": "7.65 mA would give VD = -5.3 V"
        },
        {
         "h": "5",
         "text": "Voltages",
         "res": "VD = 6.8 V, VG = VGS = 2.27 V, VOV = 1.27 V"
        },
        {
         "h": "6",
         "text": "Current in RG1 is negligible",
         "res": "22656 µA against 1.6 mA"
        },
        {
         "h": "7",
         "text": "Gain",
         "res": "gm = 2.53 mS;  vo/vin = -5, close to −gm·RD = -5.06"
        }
       ]
      }
     ],
     "id": "t16-7"
    },
    {
     "title": "gr2-fbk-002",
     "kind": "q",
     "ref": "gr2-fbk-002",
     "blocks": [],
     "id": "t16-8"
    },
    {
     "title": "gr2-pmos-002",
     "kind": "q",
     "ref": "gr2-pmos-002",
     "blocks": [],
     "id": "t16-9"
    },
    {
     "title": "gr2-wk-007",
     "kind": "workout",
     "ref": "gr2-wk-007",
     "blocks": [],
     "id": "t16-10"
    }
   ],
   "id": "t16-drain-feedback-bias-and-pmos"
  },
  {
   "title": "BJT structure and operating modes",
   "lessons": "Lesson 25",
   "slides": [
    {
     "title": "Background: n, p and the pn junction",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "**n-type** silicon has extra electrons (donor atoms); **p-type** has holes (acceptor atoms)",
        "A **pn junction** is a diode: **forward bias** (p positive) lets a large current flow once the voltage reaches about 0.7 V; **reverse bias** blocks it",
        "An **npn** transistor is two junctions back to back: n (emitter) – p (base) – n (collector)",
        "**Minority carriers** (electrons in the p base) are the ones that cross the base"
       ]
      },
      {
       "t": "call",
       "kind": "rule",
       "text": "Forward bias: roughly a constant 0.65–0.7 V drop. Reverse bias: no current."
      }
     ],
     "id": "t17-1"
    },
    {
     "title": "The npn transistor",
     "kind": "learn",
     "blocks": [
      {
       "t": "fig",
       "src": "assets/study/resources/gr2/bjt_struct.svg",
       "alt": "npn transistor structure"
      },
      {
       "t": "ul",
       "items": [
        "**Emitter** heavily doped, **base** thin and lightly doped, **collector** lightly doped: N_D,E ≫ N_A,B ≫ N_D,C",
        "Two pn junctions: the emitter-base junction (**EBJ**) and the collector-base junction (**CBJ**)",
        "Carriers of **both** polarities take part, hence \"bipolar\""
       ]
      }
     ],
     "id": "t17-2"
    },
    {
     "title": "Operating modes",
     "kind": "learn",
     "blocks": [
      {
       "t": "tbl",
       "head": [
        "Mode",
        "EBJ",
        "CBJ",
        "Typical sign"
       ],
       "rows": [
        [
         "Cutoff",
         "Reverse",
         "Reverse",
         "VBE ≲ 0, no current"
        ],
        [
         "Active",
         "Forward",
         "Reverse",
         "VBE ≈ 0.65–0.7 V, VC ≥ VB"
        ],
        [
         "Saturation",
         "Forward",
         "Forward",
         "VC below VB"
        ]
       ]
      },
      {
       "t": "ul",
       "items": [
        "For an npn, VCB > 0 means the CBJ is reverse biased",
        "Active mode is the one used for amplification  @S3 §9"
       ]
      },
      {
       "t": "call",
       "kind": "watch",
       "text": "If you assume active and compute VC below VB, the device is actually saturated."
      }
     ],
     "id": "t17-3"
    },
    {
     "title": "Active-mode physics",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "The forward EBJ **injects electrons** into the base (current i1) and holes into the emitter (i2)",
        "The base minority-carrier profile is a **straight line** from nP0·e^(VBE/VT) at the emitter side to zero at the collector side",
        "The reverse-biased CBJ field **sweeps** base electrons into the collector"
       ]
      },
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"I_C=I_Se^{V_{BE}/V_T}\"><mrow><msub><mi>I</mi><mi mathvariant=\"normal\">C</mi></msub><mo>=</mo><msub><mi>I</mi><mi mathvariant=\"normal\">S</mi></msub><msup><mi>e</mi><mrow><msub><mi mathvariant=\"normal\">V</mi><mrow><mi mathvariant=\"normal\">BE</mi></mrow></msub><mo lspace=\"0.05em\" rspace=\"0.05em\">/</mo><msub><mi mathvariant=\"normal\">V</mi><mi mathvariant=\"normal\">T</mi></msub></mrow></msup></mrow></math>",
         "sheet": "S3 §9"
        }
       ]
      }
     ],
     "id": "t17-4"
    },
    {
     "title": "Why β is large",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "Emitter doping ≫ base: electrons injected into the base far outnumber holes into the emitter (i1 ≫ i2)",
        "**Thin base:** few electrons recombine on the way",
        "The rest reach the collector: the **collector current is electrons**",
        "A wider base or lighter emitter doping makes β fall"
       ]
      },
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"\\dfrac{i_1}{i_2}=\\dfrac{D_n}{D_p}\\cdot\\dfrac{N_{D,E}L_p}{N_{A,B}W}\"><mrow><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>i</mi><mn>1</mn></msub></mrow><mrow><msub><mi>i</mi><mn>2</mn></msub></mrow></mfrac></mstyle><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>D</mi><mi mathvariant=\"normal\">n</mi></msub></mrow><mrow><msub><mi>D</mi><mi mathvariant=\"normal\">p</mi></msub></mrow></mfrac></mstyle><mo>·</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>N</mi><mrow><mi mathvariant=\"normal\">D</mi><mo>,</mo><mi mathvariant=\"normal\">E</mi></mrow></msub><msub><mi>L</mi><mi mathvariant=\"normal\">p</mi></msub></mrow><mrow><msub><mi>N</mi><mrow><mi mathvariant=\"normal\">A</mi><mo>,</mo><mi mathvariant=\"normal\">B</mi></mrow></msub><mi>W</mi></mrow></mfrac></mstyle></mrow></math>"
        }
       ]
      }
     ],
     "id": "t17-5"
    },
    {
     "title": "Find the operating mode from the voltages",
     "kind": "example",
     "blocks": [
      {
       "t": "given",
       "items": [
        "npn transistor",
        "three cases (VB, VC, VE)"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "VB = 0, VC = 5 V, VE = 0",
         "res": "VBE = 0 < 0.7 V: EBJ off. CBJ reverse: cutoff, no current"
        },
        {
         "h": "2",
         "text": "VB = 0.7 V, VC = 5 V, VE = 0",
         "res": "VBE = 0.7 V: EBJ forward. VC > VB: CBJ reverse: active"
        },
        {
         "h": "3",
         "text": "VB = 0.7 V, VC = 0.2 V, VE = 0",
         "res": "EBJ forward. VC < VB: CBJ forward as well: saturation"
        }
       ]
      }
     ],
     "id": "t17-6"
    },
    {
     "title": "gr2-bjt-003",
     "kind": "q",
     "ref": "gr2-bjt-003",
     "blocks": [],
     "id": "t17-7"
    },
    {
     "title": "gr2-bjt-005",
     "kind": "q",
     "ref": "gr2-bjt-005",
     "blocks": [],
     "id": "t17-8"
    }
   ],
   "id": "t17-bjt-structure-and-operating-mo"
  },
  {
   "title": "BJT currents, bias and small-signal model",
   "lessons": "Lesson 25",
   "slides": [
    {
     "title": "Terminal currents",
     "kind": "learn",
     "blocks": [
      {
       "t": "fig",
       "src": "assets/study/resources/gr2/bjt_currents.svg",
       "alt": "npn transistor with its three currents"
      },
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"i_C=\\beta i_B\\qquad i_E=i_B+i_C=(\\beta+1)i_B\"><mrow><msub><mi>i</mi><mi mathvariant=\"normal\">C</mi></msub><mo>=</mo><mi>β</mi><msub><mi>i</mi><mi mathvariant=\"normal\">B</mi></msub><mspace width=\"2em\"/><msub><mi>i</mi><mi mathvariant=\"normal\">E</mi></msub><mo>=</mo><msub><mi>i</mi><mi mathvariant=\"normal\">B</mi></msub><mo>+</mo><msub><mi>i</mi><mi mathvariant=\"normal\">C</mi></msub><mo>=</mo><mo stretchy=\"false\">(</mo><mi>β</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\">)</mo><msub><mi>i</mi><mi mathvariant=\"normal\">B</mi></msub></mrow></math>",
         "sheet": "S3 §9"
        },
        {
         "math": "<math alttext=\"i_C=\\alpha i_E\\qquad \\alpha=\\dfrac{\\beta}{\\beta+1}\\qquad \\beta=\\dfrac{\\alpha}{1-\\alpha}\"><mrow><msub><mi>i</mi><mi mathvariant=\"normal\">C</mi></msub><mo>=</mo><mi>α</mi><msub><mi>i</mi><mi mathvariant=\"normal\">E</mi></msub><mspace width=\"2em\"/><mi>α</mi><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><mi>β</mi></mrow><mrow><mi>β</mi><mo>+</mo><mn>1</mn></mrow></mfrac></mstyle><mspace width=\"2em\"/><mi>β</mi><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><mi>α</mi></mrow><mrow><mn>1</mn><mo>−</mo><mi>α</mi></mrow></mfrac></mstyle></mrow></math>",
         "sheet": "S3 §9"
        },
        {
         "math": "<math alttext=\"I_C=I_Se^{V_{BE}/V_T}\"><mrow><msub><mi>I</mi><mi mathvariant=\"normal\">C</mi></msub><mo>=</mo><msub><mi>I</mi><mi mathvariant=\"normal\">S</mi></msub><msup><mi>e</mi><mrow><msub><mi mathvariant=\"normal\">V</mi><mrow><mi mathvariant=\"normal\">BE</mi></mrow></msub><mo lspace=\"0.05em\" rspace=\"0.05em\">/</mo><msub><mi mathvariant=\"normal\">V</mi><mi mathvariant=\"normal\">T</mi></msub></mrow></msup></mrow></math>",
         "sheet": "S3 §9"
        }
       ]
      },
      {
       "t": "call",
       "kind": "tip",
       "text": "iE is the largest current. α is just below 1, β is large. For silicon in active mode VBE ≈ 0.65–0.7 V.  @S3 §9"
      }
     ],
     "id": "t18-1"
    },
    {
     "title": "Divider-bias analysis",
     "kind": "learn",
     "blocks": [
      {
       "t": "fig",
       "src": "assets/study/resources/gr2/bjt_bias.svg",
       "alt": "Voltage-divider-biased BJT"
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Model: a diode drop VBE plus β·IB",
         "res": "active mode"
        },
        {
         "h": "2",
         "text": "Thevenize the divider",
         "res": "Vth = VCC·RB2/(RB1+RB2),  Rth = RB1 ∥ RB2"
        },
        {
         "h": "3",
         "text": "KVL on the base loop",
         "res": "Vth − Rth·IB − VBE − (β+1)·IB·RE = 0"
        },
        {
         "h": "4",
         "text": "IC = β·IB, IE = (β+1)·IB, then VE, VB, VC",
         "res": "VE = IE·RE, VB = VE + VBE, VC = VCC − IC·RC"
        },
        {
         "h": "5",
         "text": "Check VC ≥ VB (active)"
        }
       ]
      }
     ],
     "id": "t18-2"
    },
    {
     "title": "Stability and the shortcut",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"I_B=\\dfrac{V_{th}-V_{BE}}{R_{th}+(\\beta+1)R_E}\"><mrow><msub><mi>I</mi><mi mathvariant=\"normal\">B</mi></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">th</mi></mrow></msub><mo>−</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">BE</mi></mrow></msub></mrow><mrow><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">th</mi></mrow></msub><mo>+</mo><mo stretchy=\"false\">(</mo><mi>β</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\">)</mo><msub><mi>R</mi><mi mathvariant=\"normal\">E</mi></msub></mrow></mfrac></mstyle></mrow></math>"
        },
        {
         "math": "<math alttext=\"I_C\\approx\\dfrac{V_{th}-V_{BE}}{R_E}\"><mrow><msub><mi>I</mi><mi mathvariant=\"normal\">C</mi></msub><mo>≈</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">th</mi></mrow></msub><mo>−</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">BE</mi></mrow></msub></mrow><mrow><msub><mi>R</mi><mi mathvariant=\"normal\">E</mi></msub></mrow></mfrac></mstyle></mrow></math>",
         "label": "If (β+1)·RE ≫ Rth",
         "note": "independent of β"
        }
       ]
      },
      {
       "t": "ul",
       "items": [
        "With **RE** the bias barely depends on β",
        "With **no RE** (RE = 0): IB = (Vth − VBE)/Rth, so IC is proportional to β: poor bias",
        "Check (β+1)·RE ≫ Rth before using the shortcut"
       ]
      },
      {
       "t": "call",
       "kind": "watch",
       "text": "Do not drop the (β+1) on RE: the whole emitter current flows in RE."
      }
     ],
     "id": "t18-3"
    },
    {
     "title": "Small-signal model",
     "kind": "learn",
     "blocks": [
      {
       "t": "fig",
       "src": "assets/study/resources/gr2/bjt_ss.svg",
       "alt": "Hybrid-pi small-signal model of a BJT"
      },
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"g_m=\\dfrac{I_C}{V_T}\"><mrow><msub><mi>g</mi><mi mathvariant=\"normal\">m</mi></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>I</mi><mi mathvariant=\"normal\">C</mi></msub></mrow><mrow><msub><mi>V</mi><mi mathvariant=\"normal\">T</mi></msub></mrow></mfrac></mstyle></mrow></math>",
         "note": "VT ≈ 25 mV",
         "sheet": "S3 §9"
        },
        {
         "math": "<math alttext=\"r_\\pi=\\dfrac{\\beta}{g_m}=\\dfrac{\\beta V_T}{I_C}\"><mrow><msub><mi>r</mi><mi>π</mi></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><mi>β</mi></mrow><mrow><msub><mi>g</mi><mi mathvariant=\"normal\">m</mi></msub></mrow></mfrac></mstyle><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><mi>β</mi><msub><mi>V</mi><mi mathvariant=\"normal\">T</mi></msub></mrow><mrow><msub><mi>I</mi><mi mathvariant=\"normal\">C</mi></msub></mrow></mfrac></mstyle></mrow></math>",
         "sheet": "S3 §9"
        },
        {
         "math": "<math alttext=\"r_o=\\dfrac{V_A}{I_C}\"><mrow><msub><mi>r</mi><mi mathvariant=\"normal\">o</mi></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>V</mi><mi mathvariant=\"normal\">A</mi></msub></mrow><mrow><msub><mi>I</mi><mi mathvariant=\"normal\">C</mi></msub></mrow></mfrac></mstyle></mrow></math>",
         "sheet": "S3 §9"
        }
       ]
      },
      {
       "t": "ul",
       "items": [
        "Unlike a MOSFET, the BJT input **draws base current** (rπ, not infinite)",
        "The signal must be small: vbe well below about 10 mV",
        "AC recipe: find the DC bias, compute gm, then the voltage gain"
       ]
      },
      {
       "t": "call",
       "kind": "watch",
       "text": "gm uses the DC value IC, not the total iC."
      }
     ],
     "id": "t18-4"
    },
    {
     "title": "Gain of the BJT stage (from the model)",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "With the emitter resistor **bypassed** and no load: the controlled source drives RC",
        "With **RE unbypassed**: the signal also drops across RE, which reduces the gain the same way RS does for a MOSFET",
        "These follow directly from the hybrid-π model"
       ]
      },
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"A_{vo}=-g_mR_C\\quad(R_E\\ \\text{bypassed})\"><mrow><msub><mi>A</mi><mrow><mi mathvariant=\"normal\">vo</mi></mrow></msub><mo>=</mo><mo form=\"prefix\" lspace=\"0\" rspace=\"0.04em\">−</mo><msub><mi>g</mi><mi mathvariant=\"normal\">m</mi></msub><msub><mi>R</mi><mi mathvariant=\"normal\">C</mi></msub><mspace width=\"1em\"/><mo stretchy=\"false\">(</mo><msub><mi>R</mi><mi mathvariant=\"normal\">E</mi></msub><mspace width=\"0.25em\"/><mtext>bypassed</mtext><mo stretchy=\"false\">)</mo></mrow></math>"
        },
        {
         "math": "<math alttext=\"A_{vo}=-\\dfrac{\\beta R_C}{r_\\pi+(\\beta+1)R_E}\\approx-\\dfrac{R_C}{R_E}\\quad(R_E\\ \\text{unbypassed})\"><mrow><msub><mi>A</mi><mrow><mi mathvariant=\"normal\">vo</mi></mrow></msub><mo>=</mo><mo form=\"prefix\" lspace=\"0\" rspace=\"0.04em\">−</mo><mstyle displaystyle=\"true\"><mfrac><mrow><mi>β</mi><msub><mi>R</mi><mi mathvariant=\"normal\">C</mi></msub></mrow><mrow><msub><mi>r</mi><mi>π</mi></msub><mo>+</mo><mo stretchy=\"false\">(</mo><mi>β</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\">)</mo><msub><mi>R</mi><mi mathvariant=\"normal\">E</mi></msub></mrow></mfrac></mstyle><mo>≈</mo><mo form=\"prefix\" lspace=\"0\" rspace=\"0.04em\">−</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>R</mi><mi mathvariant=\"normal\">C</mi></msub></mrow><mrow><msub><mi>R</mi><mi mathvariant=\"normal\">E</mi></msub></mrow></mfrac></mstyle><mspace width=\"1em\"/><mo stretchy=\"false\">(</mo><msub><mi>R</mi><mi mathvariant=\"normal\">E</mi></msub><mspace width=\"0.25em\"/><mtext>unbypassed</mtext><mo stretchy=\"false\">)</mo></mrow></math>"
        }
       ]
      }
     ],
     "id": "t18-5"
    },
    {
     "title": "Biasing design procedure (equation sheet)",
     "kind": "learn",
     "blocks": [
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Allocate the voltages",
         "res": "VRC = VCE = 0.4·VCC,  VRE = 0.2·VCC  @S3 §9"
        },
        {
         "h": "2",
         "text": "Base current",
         "res": "IB = IC/β"
        },
        {
         "h": "3",
         "text": "Divider bleed current",
         "res": "IRB1 = 50·IB (a stiff base voltage)"
        },
        {
         "h": "4",
         "text": "RC and RE",
         "res": "RC = VRC/IC,  RE = VRE/(IC + IB)"
        },
        {
         "h": "5",
         "text": "Base voltage",
         "res": "VB = VBE + VRE"
        },
        {
         "h": "6",
         "text": "Lower resistor",
         "res": "IRB2 = IRB1 − IB,  RB2 = VB/IRB2"
        },
        {
         "h": "7",
         "text": "Upper resistor",
         "res": "RB1 = (VCC − VB)/IRB1"
        }
       ]
      }
     ],
     "id": "t18-6"
    },
    {
     "title": "Bias a BJT, then find gm and rπ",
     "kind": "example",
     "blocks": [
      {
       "t": "fig",
       "src": "assets/study/resources/gr2/bjt_bias.svg",
       "alt": "Voltage-divider-biased BJT"
      },
      {
       "t": "given",
       "items": [
        "VCC = 12 V",
        "RB1 = 40 kΩ, RB2 = 10 kΩ",
        "RC = 3 kΩ, RE = 1 kΩ",
        "β = 100, VBE = 0.7 V"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Thevenin equivalent",
         "res": "Vth = 2.4 V, Rth = 8 kΩ"
        },
        {
         "h": "2",
         "text": "Base current",
         "res": "IB = (2.4 − 0.7) / (8 + 101·1) = 15.6 µA"
        },
        {
         "h": "3",
         "text": "Collector and emitter currents",
         "res": "IC = 1.56 mA;  IE = 1.58 mA"
        },
        {
         "h": "4",
         "text": "Terminal voltages",
         "res": "VE = 1.58 V, VB = 2.28 V, VC = 7.32 V"
        },
        {
         "h": "5",
         "text": "Active check VC ≥ VB",
         "res": "7.32 V ≥ 2.28 V: yes"
        },
        {
         "h": "6",
         "text": "Small-signal parameters",
         "res": "gm = 1.56/0.025 = 62.4 mS;  rπ = 100/62.4 = 1.6 kΩ"
        },
        {
         "h": "7",
         "text": "Shortcut for comparison",
         "res": "IC ≈ (2.4 − 0.7)/1 = 1.7 mA: within 9 %"
        }
       ]
      }
     ],
     "id": "t18-7"
    },
    {
     "title": "Design the bias from a collector current",
     "kind": "example",
     "blocks": [
      {
       "t": "given",
       "items": [
        "VCC = 12 V",
        "IC = 2 mA",
        "β = 100",
        "VBE = 0.65 V"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Allocate voltages",
         "res": "VRC = VCE = 4.8 V,  VRE = 2.4 V"
        },
        {
         "h": "2",
         "text": "Base current and bleed current",
         "res": "IB = 20 µA;  IRB1 = 50·IB = 1 mA"
        },
        {
         "h": "3",
         "text": "RC and RE",
         "res": "RC = 4.8/2 = 2.4 kΩ;  RE = 2.4/(2 + 0.02) = 1.19 kΩ"
        },
        {
         "h": "4",
         "text": "Base voltage",
         "res": "VB = 0.65 + 2.4 = 3.05 V"
        },
        {
         "h": "5",
         "text": "Lower base resistor",
         "res": "IRB2 = 1 − 0.02 = 0.98 mA;  RB2 = 3.05/0.98 = 3.11 kΩ"
        },
        {
         "h": "6",
         "text": "Upper base resistor",
         "res": "RB1 = (12 − 3.05)/1 = 8.95 kΩ"
        }
       ]
      }
     ],
     "id": "t18-8"
    },
    {
     "title": "BJT stage gain from the bias point",
     "kind": "example",
     "blocks": [
      {
       "t": "given",
       "items": [
        "the biased stage above: IC = 1.56 mA, β = 100",
        "RC = 3 kΩ, RE = 1 kΩ"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Small-signal parameters",
         "res": "gm = 62.4 mS;  rπ = 1.6 kΩ"
        },
        {
         "h": "2",
         "text": "RE bypassed",
         "res": "Avo = −gm·RC = −62.4 × 3 = -187"
        },
        {
         "h": "3",
         "text": "RE unbypassed",
         "res": "Avo = −100×3 / (1.6 + 101×1) = -2.92"
        },
        {
         "h": "4",
         "text": "Compare with −RC/RE",
         "res": "−3/1 = −3: close to -2.92"
        }
       ]
      }
     ],
     "id": "t18-9"
    },
    {
     "title": "gr2-bjt2-007",
     "kind": "q",
     "ref": "gr2-bjt2-007",
     "blocks": [],
     "id": "t18-10"
    },
    {
     "title": "gr2-bjt2-010",
     "kind": "q",
     "ref": "gr2-bjt2-010",
     "blocks": [],
     "id": "t18-11"
    },
    {
     "title": "gr2-wk-005",
     "kind": "workout",
     "ref": "gr2-wk-005",
     "blocks": [],
     "id": "t18-12"
    }
   ],
   "id": "t18-bjt-currents-bias-and-small-si"
  },
  {
   "title": "BJT versus MOSFET",
   "lessons": "Lessons 25, 26",
   "slides": [
    {
     "title": "Pairing the terminals",
     "kind": "learn",
     "blocks": [
      {
       "t": "tbl",
       "head": [
        "BJT",
        "MOSFET"
       ],
       "rows": [
        [
         "Emitter",
         "Source"
        ],
        [
         "Base",
         "Gate"
        ],
        [
         "Collector",
         "Drain"
        ]
       ]
      },
      {
       "t": "ul",
       "items": [
        "Both are controlled current sources in their amplifying region",
        "A BJT is controlled by the **base current** (iC = β·iB); a MOSFET by the **gate voltage** with zero DC gate current"
       ]
      }
     ],
     "id": "t19-1"
    },
    {
     "title": "Models side by side",
     "kind": "learn",
     "blocks": [
      {
       "t": "tbl",
       "head": [
        "",
        "BJT (active)",
        "MOSFET (saturation)"
       ],
       "rows": [
        [
         "Current law",
         "IC = IS·e^(VBE/VT)",
         "ID = ½·Kn·Vov²"
        ],
        [
         "Turn-on",
         "VBE ≈ 0.65–0.7 V",
         "VGS > Vt"
        ],
        [
         "gm",
         "IC / VT",
         "Kn·Vov = √(2·Kn·ID)"
        ],
        [
         "Input resistance",
         "rπ = β/gm",
         "∞ (ig = 0)"
        ],
        [
         "Output resistance",
         "ro = VA / IC",
         "ro = VA / ID = 1/(λ·ID)"
        ]
       ]
      },
      {
       "t": "call",
       "kind": "tip",
       "text": "Both ro formulas come from the same idea: the output voltage nudges the effective width. BJT: Early effect in the base. MOSFET: channel-length modulation.  @S3 §9"
      }
     ],
     "id": "t19-2"
    },
    {
     "title": "Key differences",
     "kind": "learn",
     "blocks": [
      {
       "t": "tbl",
       "head": [
        "",
        "BJT",
        "MOSFET"
       ],
       "rows": [
        [
         "Carriers",
         "Bipolar: electrons and holes",
         "Unipolar: one carrier type"
        ],
        [
         "Current mechanism",
         "Diffusion",
         "Drift"
        ],
        [
         "Gate / base current",
         "Base draws current",
         "Gate draws none (DC)"
        ],
        [
         "Temperature",
         "Current rises (can run away)",
         "Current falls (self-limiting)"
        ]
       ]
      }
     ],
     "id": "t19-3"
    },
    {
     "title": "Same current, different gm",
     "kind": "example",
     "blocks": [
      {
       "t": "given",
       "items": [
        "both devices carry 1 mA",
        "MOSFET overdrive Vov = 0.25 V"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "BJT",
         "res": "gm = IC/VT = 1/0.025 = 40 mS"
        },
        {
         "h": "2",
         "text": "MOSFET",
         "res": "gm = 2·ID/Vov = 2×1/0.25 = 8 mS"
        },
        {
         "h": "3",
         "text": "Compare",
         "res": "The BJT gives 5× more gm for the same current, so it gives more gain per mA"
        },
        {
         "h": "4",
         "text": "But the input",
         "res": "the BJT draws base current (rπ = β/gm); the MOSFET gate draws none"
        }
       ]
      }
     ],
     "id": "t19-4"
    },
    {
     "title": "gr2-cmp2-001",
     "kind": "q",
     "ref": "gr2-cmp2-001",
     "blocks": [],
     "id": "t19-5"
    },
    {
     "title": "gr2-cmp2-003",
     "kind": "q",
     "ref": "gr2-cmp2-003",
     "blocks": [],
     "id": "t19-6"
    }
   ],
   "id": "t19-bjt-versus-mosfet"
  }
 ]
});
