window.CourseCram.registerDeck({
 "id": "gr2",
 "title": "GR2 Cram",
 "subtitle": "Lessons 15 to 26",
 "packetTitle": "ECE 321 GR2 Cram Packet",
 "bank": "gr2",
 "studyHref": "index.html#study/gr2",
 "topics": [
  {
   "title": "Amplifier models and cascades",
   "lessons": "Lesson 15",
   "slides": [
    {
     "title": "Three numbers describe an amplifier",
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
        "**Ri**: resistance looking into the input",
        "**Avo**: open-circuit gain (load removed)",
        "**Ro**: resistance looking back into the output"
       ]
      },
      {
       "t": "call",
       "kind": "why",
       "text": "The extra output power comes from the DC supply, not from the signal."
      }
     ],
     "id": "t1-1"
    },
    {
     "title": "Source and load losses",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        "Vi = VS · Ri / (Ri + RS)",
        "Vo = Avo · Vi · RL / (RL + Ro)",
        "VS to Vo:  G = [Ri/(Ri+RS)] · Avo · [RL/(RL+Ro)]"
       ]
      },
      {
       "t": "call",
       "kind": "rule",
       "text": "Want **Ri ≫ RS** and **Ro ≪ RL** so both dividers stay near 1."
      },
      {
       "t": "call",
       "kind": "watch",
       "text": "Avo is the open-circuit gain. It applies before the output divider."
      }
     ],
     "id": "t1-2"
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
       "t": "ul",
       "items": [
        "Loaded gain of a stage: **Avo,k · Ri,k+1 / (Ri,k+1 + Ro,k)**",
        "Last stage uses **RL**",
        "**Av** = product of loaded gains;  **Gv** = Ri1/(Ri1+RS) · Av"
       ]
      },
      {
       "t": "call",
       "kind": "watch",
       "text": "Av never includes RS. Gv does."
      }
     ],
     "id": "t1-3"
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
     "id": "t1-4"
    },
    {
     "title": "gr2-model-006",
     "kind": "q",
     "ref": "gr2-model-006",
     "blocks": [],
     "id": "t1-5"
    },
    {
     "title": "gr2-wk-004",
     "kind": "workout",
     "ref": "gr2-wk-004",
     "blocks": [],
     "id": "t1-6"
    }
   ],
   "id": "t1-amplifier-models-and-cascades"
  },
  {
   "title": "Measuring Ri, Ro and Avo",
   "lessons": "Lesson 15",
   "slides": [
    {
     "title": "Treat it as a black box",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "**Avo**: remove the load, apply a signal, Avo = Vo / Vi",
        "**Ri**: put a variable R in series with the source; adjust until Vi = VS/2, then **R = Ri**",
        "**Ro**: set the input to zero (controlled source off), drive the output through a variable R; adjust until Vo = half the test source, then **R = Ro**"
       ]
      },
      {
       "t": "call",
       "kind": "watch",
       "text": "Measuring Avo with the load attached gives the loaded gain, not Avo."
      }
     ],
     "id": "t2-1"
    },
    {
     "title": "Ro from two readings",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        "Ro = RL · (v_open / v_loaded − 1)"
       ]
      },
      {
       "t": "ul",
       "items": [
        "v_open: output with no load",
        "v_loaded: output with RL connected",
        "Same input signal for both readings"
       ]
      },
      {
       "t": "call",
       "kind": "watch",
       "text": "Leave the input signal on for this method, but off for the half-voltage method."
      }
     ],
     "id": "t2-2"
    },
    {
     "title": "Find Ro from two readings",
     "kind": "example",
     "blocks": [
      {
       "t": "given",
       "items": [
        "v_open = 1.00 V",
        "v_loaded = 0.80 V",
        "RL = 1 kΩ"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Ratio of the two readings",
         "res": "1.0/0.8 = 1.25"
        },
        {
         "h": "2",
         "text": "Ro = RL (ratio − 1)",
         "res": "1 kΩ × 0.25 = 250 Ω"
        },
        {
         "h": "3",
         "text": "Check with the divider RL/(RL+Ro)",
         "res": "0.8, matching 0.8 / 1.0"
        }
       ]
      }
     ],
     "id": "t2-3"
    },
    {
     "title": "gr2-measure-001",
     "kind": "q",
     "ref": "gr2-measure-001",
     "blocks": [],
     "id": "t2-4"
    },
    {
     "title": "gr2-measure-005",
     "kind": "q",
     "ref": "gr2-measure-005",
     "blocks": [],
     "id": "t2-5"
    },
    {
     "title": "gr2-wk-009",
     "kind": "workout",
     "ref": "gr2-wk-009",
     "blocks": [],
     "id": "t2-6"
    }
   ],
   "id": "t2-measuring-ri-ro-and-avo"
  },
  {
   "title": "Voltage transfer curve and Q-point",
   "lessons": "Lesson 15",
   "slides": [
    {
     "title": "Three regions of a common-source stage",
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
        "**Cutoff** (vGS < Vt): no current, vo = VDD",
        "**Saturation** (A to B): the amplifying region",
        "**Triode** (beyond B): vo creeps toward 0"
       ]
      },
      {
       "t": "eq",
       "lines": [
        "Saturation:  vDS = VDD − ½ Kn RD (vGS − Vt)²"
       ]
      }
     ],
     "id": "t3-1"
    },
    {
     "title": "Points A, B and Q",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "**A**: vGS = Vt, where the device turns on",
        "**B**: vDS = vGS − Vt, the edge of saturation",
        "**Q**: the DC bias point, on the slope between A and B"
       ]
      },
      {
       "t": "eq",
       "lines": [
        "VDS,B = (√(1 + 2 Kn RD VDD) − 1) / (Kn RD)",
        "VGS,B = Vt + VDS,B"
       ]
      },
      {
       "t": "call",
       "kind": "rule",
       "text": "The slope at Q is the small-signal gain. Near B: more gain, no room to swing toward triode. Near A: less gain, no room toward cutoff."
      }
     ],
     "id": "t3-2"
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
         "text": "Gain = −gm·RD",
         "res": "gm = Kn·VOV = 2 mS;  Av = −2 × 2 = -4"
        }
       ]
      }
     ],
     "id": "t3-3"
    },
    {
     "title": "gr2-vtc-003",
     "kind": "q",
     "ref": "gr2-vtc-003",
     "blocks": [],
     "id": "t3-4"
    },
    {
     "title": "gr2-vtc-006",
     "kind": "q",
     "ref": "gr2-vtc-006",
     "blocks": [],
     "id": "t3-5"
    }
   ],
   "id": "t3-voltage-transfer-curve-and-q-p"
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
        "Meaning"
       ],
       "rows": [
        [
         "VGS, ID",
         "DC value only"
        ],
        [
         "vgs, id",
         "Signal only"
        ],
        [
         "vGS, iD",
         "Total = DC + signal"
        ]
       ]
      },
      {
       "t": "call",
       "kind": "rule",
       "text": "Capital letters with capital subscripts are DC. Lowercase with lowercase subscripts are the signal."
      }
     ],
     "id": "t4-1"
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
       "t": "ul",
       "items": [
        "DC supplies become **ac ground**",
        "Large capacitors become **shorts**",
        "Gate is open: **ig = 0**",
        "Drain: current source **gm·vgs** with **ro** in parallel"
       ]
      }
     ],
     "id": "t4-2"
    },
    {
     "title": "Transconductance",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        "gm = Kn·VOV = 2·ID / VOV = √(2·Kn·ID)",
        "ro = 1 / (λ·ID)",
        "|Avo| = gm·RD"
       ]
      },
      {
       "t": "ul",
       "items": [
        "More DC current gives more gm",
        "With the RD drop fixed: |Avo| = 2(VDD − VDS) / VOV"
       ]
      },
      {
       "t": "call",
       "kind": "watch",
       "text": "Small VOV gives big gain but little signal range. Keep vgs well below 2·VOV."
      }
     ],
     "id": "t4-3"
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
     "id": "t4-4"
    },
    {
     "title": "gr2-ss-004",
     "kind": "q",
     "ref": "gr2-ss-004",
     "blocks": [],
     "id": "t4-5"
    },
    {
     "title": "gr2-ss-013",
     "kind": "q",
     "ref": "gr2-ss-013",
     "blocks": [],
     "id": "t4-6"
    },
    {
     "title": "gr2-wk-006",
     "kind": "workout",
     "ref": "gr2-wk-006",
     "blocks": [],
     "id": "t4-7"
    }
   ],
   "id": "t4-small-signal-model-and-gm"
  },
  {
   "title": "CS design with no source resistor",
   "lessons": "Lesson 17",
   "slides": [
    {
     "title": "The circuit and its numbers",
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
        "**C1, C2** block DC, pass the signal",
        "Gate divider sets **VG = VDD·RG2 / (RG1 + RG2)**",
        "Source grounded, so **VGS = VG**"
       ]
      },
      {
       "t": "eq",
       "lines": [
        "Ri = RG1 ∥ RG2     Avo = −gm·RD     Ro = RD"
       ]
      }
     ],
     "id": "t5-1"
    },
    {
     "title": "Why this bias is weak",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        "ID = ½·Kn·(VG − Vt)²"
       ]
      },
      {
       "t": "ul",
       "items": [
        "ID follows **Kn** and **Vt** directly",
        "Swap the transistor and the Q-point moves a lot",
        "Simulations sweeping Vt and Kn show it"
       ]
      },
      {
       "t": "call",
       "kind": "why",
       "text": "Nothing in the circuit pushes back when ID changes. A source resistor will (next topic)."
      }
     ],
     "id": "t5-2"
    },
    {
     "title": "Design recipe",
     "kind": "learn",
     "blocks": [
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Pick VDS near the middle of the supply",
         "res": "move toward B if the gain target is hard"
        },
        {
         "h": "2",
         "text": "Gain fixes the overdrive",
         "res": "VOV = 2(VDD − VDS) / |Avo|"
        },
        {
         "h": "3",
         "text": "RD from the drop across it",
         "res": "RD = (VDD − VDS) / ID"
        },
        {
         "h": "4",
         "text": "VGS = VOV + Vt, then the divider",
         "res": "RG1 ∥ RG2 ≥ Rin"
        },
        {
         "h": "5",
         "text": "Check swing, linearity, simulate"
        }
       ]
      }
     ],
     "id": "t5-3"
    },
    {
     "title": "gr2-csdes-006",
     "kind": "q",
     "ref": "gr2-csdes-006",
     "blocks": [],
     "id": "t5-4"
    },
    {
     "title": "gr2-csdes-009",
     "kind": "q",
     "ref": "gr2-csdes-009",
     "blocks": [],
     "id": "t5-5"
    }
   ],
   "id": "t5-cs-design-with-no-source-resis"
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
       "t": "eq",
       "lines": [
        "ID rises  →  VS = ID·RS rises  →  VGS falls  →  ID falls back"
       ]
      },
      {
       "t": "ul",
       "items": [
        "Negative feedback on the DC current",
        "Bias depends much less on Kn and Vt",
        "VRS also uses part of the supply"
       ]
      },
      {
       "t": "call",
       "kind": "watch",
       "text": "Do not make RS too small: the feedback gets weak."
      }
     ],
     "id": "t6-1"
    },
    {
     "title": "The price, and the bypass",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        "Unbypassed:   Avo = −gm·RD / (1 + gm·RS)",
        "Fully bypassed:   Avo = −gm·RD"
       ]
      },
      {
       "t": "ul",
       "items": [
        "A big capacitor across RS keeps DC feedback and restores signal gain",
        "Fully bypassed: stable Q, but gain still follows gm (and so Kn)"
       ]
      }
     ],
     "id": "t6-2"
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
        "Gain set mostly by resistors, less by the device",
        "vgs shrinks by 1 + gm·RS1, so linearity improves and THD falls"
       ]
      },
      {
       "t": "call",
       "kind": "rule",
       "text": "Choose **RS1 = 1/gm**: |Avo| ≈ gm·RD / 2."
      }
     ],
     "id": "t6-3"
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
        "Linearity"
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
         "Set by resistors, lower",
         "Best"
        ]
       ]
      }
     ],
     "id": "t6-4"
    },
    {
     "title": "gr2-fb-001",
     "kind": "q",
     "ref": "gr2-fb-001",
     "blocks": [],
     "id": "t6-5"
    },
    {
     "title": "gr2-fb-014",
     "kind": "q",
     "ref": "gr2-fb-014",
     "blocks": [],
     "id": "t6-6"
    }
   ],
   "id": "t6-source-resistor-feedback-and-b"
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
        "**Thirds:** VRD = VDS = VRS = VDD/3",
        "**RS1 = 1/gm:** gain is about gm·RD/2"
       ]
      },
      {
       "t": "call",
       "kind": "rule",
       "text": "The supply is split three ways between RD, the transistor and RS. This sets swing, gain and bias stability."
      }
     ],
     "id": "t7-1"
    },
    {
     "title": "Design recipe",
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
        "ID = 2·Kn·[VDD / (6|Avo|)]²   (partial)",
        "ID = 2·Kn·[VDD / (3|Avo|)]²   (full)",
        "RD = RS = (VDD/3) / ID",
        "VOV = √(2ID/Kn),  gm = Kn·VOV,  RS1 = 1/gm,  RS2 = RS − RS1",
        "VGS = Vt + VOV,   VG = VGS + VRS"
       ]
      }
     ],
     "id": "t7-2"
    },
    {
     "title": "Divider and checks",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        "RG1 ≥ (VDD/VG)·Rin     RG2 = RG1 / (VDD/VG − 1)"
       ]
      },
      {
       "t": "ul",
       "items": [
        "**Swing:** VD,max = VD + |Avo|·vg,pk < VDD;  VD,min stays above VG − Vt",
        "**Linearity (partial):** vgs,pk = vg,pk / (1 + gm·RS1) ≤ 0.2·VOV",
        "Standard resistor values shift things a bit: recompute"
       ]
      },
      {
       "t": "call",
       "kind": "watch",
       "text": "Use peak values, not peak-to-peak. VG = VGS + VS, not just VGS."
      }
     ],
     "id": "t7-3"
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
         "text": "Checks",
         "res": "VD = 10 V, swing ±0.25 V stays inside; vgs,pk = 25 mV ≤ 0.2·VOV = 200 mV"
        }
       ]
      }
     ],
     "id": "t7-4"
    },
    {
     "title": "gr2-des-001",
     "kind": "q",
     "ref": "gr2-des-001",
     "blocks": [],
     "id": "t7-5"
    },
    {
     "title": "gr2-wk-001",
     "kind": "workout",
     "ref": "gr2-wk-001",
     "blocks": [],
     "id": "t7-6"
    }
   ],
   "id": "t7-partially-and-fully-bypassed-c"
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
        "Into a small RL the divider RL/(RL + Ro) throws gain away",
        "A **common-drain** stage has small Ro: a buffer"
       ]
      },
      {
       "t": "call",
       "kind": "rule",
       "text": "Drain at ac ground, signal in at the gate, output taken at the source."
      }
     ],
     "id": "t8-1"
    },
    {
     "title": "Small-signal results",
     "kind": "learn",
     "blocks": [
      {
       "t": "fig",
       "src": "assets/study/resources/gr2/cd_stage.svg",
       "alt": "Common-drain stage driving a load"
      },
      {
       "t": "eq",
       "lines": [
        "Ri = RG1 ∥ RG2",
        "Avo = gm·RS / (1 + gm·RS)  (< 1)",
        "Ro = RS ∥ 1/gm",
        "Loaded:  Av = gm(RS ∥ RL) / (1 + gm(RS ∥ RL))"
       ]
      }
     ],
     "id": "t8-2"
    },
    {
     "title": "Reading the results",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "Gain just **below 1**, **not inverting**",
        "Part of the signal falls across 1/gm, so the gain is under 1",
        "Larger gm·RS pushes the gain toward 1: light bias current gives a poor follower",
        "High Ri after a CS stage barely loads it"
       ]
      },
      {
       "t": "call",
       "kind": "why",
       "text": "Same trade as an op-amp buffer: no voltage gain, but a strong, low-resistance output."
      }
     ],
     "id": "t8-3"
    },
    {
     "title": "gr2-cd-003",
     "kind": "q",
     "ref": "gr2-cd-003",
     "blocks": [],
     "id": "t8-4"
    },
    {
     "title": "gr2-cd-005",
     "kind": "q",
     "ref": "gr2-cd-005",
     "blocks": [],
     "id": "t8-5"
    }
   ],
   "id": "t8-common-drain-amplifier-behavio"
  },
  {
   "title": "Common-drain design",
   "lessons": "Lessons 19, 21, 26",
   "slides": [
    {
     "title": "Setup",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "Givens: RL, Vo,pp, VDD, device, Rin",
        "Bias the source near **VDD/2**",
        "Input swing needed ≈ Vo,pp / Av (start with Av ≈ 0.8)",
        "Use **peak** values: Vo,pk = Vo,pp / 2"
       ]
      },
      {
       "t": "call",
       "kind": "watch",
       "text": "Peak-to-peak where a peak is needed is the classic slip."
      }
     ],
     "id": "t9-1"
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
        "The load pushes current **back into the source node**",
        "So RS carries **ID,min + IL,pk**"
       ]
      },
      {
       "t": "eq",
       "lines": [
        "IL,pk = Vo,pk / RL",
        "RS = (VS − Vo,pk) / (IL,pk + ID,min)",
        "ID = VS / RS",
        "VOV = √(2ID/Kn),  VGS = Vt + VOV,  VG = VS + VGS"
       ]
      }
     ],
     "id": "t9-2"
    },
    {
     "title": "Checks and fixes",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "**Negative peak:** ID stays above 0.  Clips here? ID,min too small: use a smaller RS",
        "**Positive peak:** VDS = VDD − VS − Vo,pk still above VOV.  Clips here? Lower VS or raise VDD",
        "Bigger swing or smaller RL: RS shrinks, ID rises. Check power: PD = (VDD − VS)·ID"
       ]
      }
     ],
     "id": "t9-3"
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
         "res": "gm = 82.6 mS;  gm(RS∥RL) = 5.68;  Av = 0.85"
        }
       ]
      }
     ],
     "id": "t9-4"
    },
    {
     "title": "gr2-cddes-004",
     "kind": "q",
     "ref": "gr2-cddes-004",
     "blocks": [],
     "id": "t9-5"
    },
    {
     "title": "gr2-wk-002",
     "kind": "workout",
     "ref": "gr2-wk-002",
     "blocks": [],
     "id": "t9-6"
    }
   ],
   "id": "t9-common-drain-design"
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
        "**CS:** big gain, but Ro ≈ RD is large",
        "**CD:** small Ro, but gain below 1",
        "High gain into a low-resistance load needs **both**"
       ]
      }
     ],
     "id": "t10-1"
    },
    {
     "title": "CS then CD",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "CS makes the gain",
        "CD buffers: its large Ri barely loads the CS stage, its small Ro barely loses signal into RL",
        "The CD input resistance is the CS load"
       ]
      },
      {
       "t": "eq",
       "lines": [
        "Av = Avo1·[Ri2/(Ri2+Ro1)] · Avo2·[RL/(RL+Ro2)]"
       ]
      }
     ],
     "id": "t10-2"
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
         "res": "a two-port: Ri, Avo, Ro"
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
         "text": "Check each ID and the power"
        }
       ]
      }
     ],
     "id": "t10-3"
    },
    {
     "title": "gr2-multi-002",
     "kind": "q",
     "ref": "gr2-multi-002",
     "blocks": [],
     "id": "t10-4"
    },
    {
     "title": "gr2-multi-003",
     "kind": "q",
     "ref": "gr2-multi-003",
     "blocks": [],
     "id": "t10-5"
    }
   ],
   "id": "t10-multi-stage-amplifier-planning"
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
        "Gate held at **ac ground** by a capacitor",
        "Signal enters at the **source**",
        "Output leaves at the **drain**"
       ]
      }
     ],
     "id": "t11-1"
    },
    {
     "title": "Its numbers",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        "Ri ≈ RS ∥ 1/gm   (small)",
        "Avo ≈ + gm·RD   (not inverting)",
        "Ro ≈ RD ∥ ro"
       ]
      },
      {
       "t": "call",
       "kind": "watch",
       "text": "A weak voltage amplifier: Ri of a few ohms to tens of ohms throws away much of the source voltage."
      }
     ],
     "id": "t11-2"
    },
    {
     "title": "gr2-cg-002",
     "kind": "q",
     "ref": "gr2-cg-002",
     "blocks": [],
     "id": "t11-3"
    },
    {
     "title": "gr2-cg-003",
     "kind": "q",
     "ref": "gr2-cg-003",
     "blocks": [],
     "id": "t11-4"
    }
   ],
   "id": "t11-common-gate-amplifier"
  },
  {
   "title": "Comparing amplifier configurations",
   "lessons": "Lessons 20, 26",
   "slides": [
    {
     "title": "The parameter table",
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
         "−gm·RD",
         "RD ∥ ro"
        ],
        [
         "CS, partial RS",
         "RG1 ∥ RG2",
         "−gm·RD / (1 + gm·RS1)",
         "≈ RD"
        ],
        [
         "CD",
         "RG1 ∥ RG2",
         "gm·RS / (1 + gm·RS)",
         "RS ∥ 1/gm"
        ],
        [
         "CG",
         "RS ∥ 1/gm",
         "+ gm·RD",
         "RD ∥ ro"
        ]
       ]
      },
      {
       "t": "call",
       "kind": "tip",
       "text": "Loaded gain from any row: Av = Avo · RL / (RL + Ro)."
      }
     ],
     "id": "t12-1"
    },
    {
     "title": "Which one when",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "**Most gain:** CS with RS bypassed",
        "**Stable, predictable gain, lower THD:** CS with partial bypass",
        "**Drive a low-resistance load:** CD",
        "**Not inverting:** CD and CG",
        "**1/gm shows up** as Ro (CD) and as Ri (CG)"
       ]
      }
     ],
     "id": "t12-2"
    },
    {
     "title": "gr2-cmp-002",
     "kind": "q",
     "ref": "gr2-cmp-002",
     "blocks": [],
     "id": "t12-3"
    },
    {
     "title": "gr2-cmp-004",
     "kind": "q",
     "ref": "gr2-cmp-004",
     "blocks": [],
     "id": "t12-4"
    }
   ],
   "id": "t12-comparing-amplifier-configurat"
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
        "Run a DC operating point; compare node voltages and ID with the hand values",
        "A few percent off is normal (λ, model parameters)",
        "Sweep Vt and Kn to see how robust the Q-point is"
       ]
      }
     ],
     "id": "t13-1"
    },
    {
     "title": "Gain from a transient run",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        "|Av| = Vo,pp / Vin,pp"
       ]
      },
      {
       "t": "ul",
       "items": [
        "Cursors on a **crest** and the next **trough**: dy is Vo,pp",
        "Multisim sources are labeled in **Vpk**: Vin,pp = 2 × Vpk",
        "Ignore dy/dx (that is a slope, in V/s)"
       ]
      },
      {
       "t": "call",
       "kind": "watch",
       "text": "Cursors that are not on a peak and a trough give a meaningless number."
      }
     ],
     "id": "t13-2"
    },
    {
     "title": "Swing and distortion",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "Raise the input until the output reaches the required swing; confirm it does not clip",
        "THD: connect the **distortion analyzer to the output**",
        "Set the fundamental to the source frequency",
        "Larger THD means more distortion; more unbypassed RS lowers it"
       ]
      }
     ],
     "id": "t13-3"
    },
    {
     "title": "gr2-sim-001",
     "kind": "q",
     "ref": "gr2-sim-001",
     "blocks": [],
     "id": "t13-4"
    },
    {
     "title": "gr2-sim-002",
     "kind": "q",
     "ref": "gr2-sim-002",
     "blocks": [],
     "id": "t13-5"
    }
   ],
   "id": "t13-simulation-and-measurement"
  },
  {
   "title": "DC operating point and region checks",
   "lessons": "Lessons 15, 21, 26",
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
         "text": "Capacitors become opens"
        },
        {
         "h": "2",
         "text": "Assume a region (saturation)",
         "res": "write its equations"
        },
        {
         "h": "3",
         "text": "Solve"
        },
        {
         "h": "4",
         "text": "Confirm the region",
         "res": "if it fails, redo in triode"
        }
       ]
      },
      {
       "t": "call",
       "kind": "tip",
       "text": "Cutoff test: VGS > Vt?  Saturation test: VDS ≥ VOV (compare with VOV, not Vt)."
      }
     ],
     "id": "t14-1"
    },
    {
     "title": "With a source resistor",
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
        "VG = VDD·RG2 / (RG1 + RG2)    (no gate current)",
        "VGS = VG − ID·RS",
        "ID = ½·Kn·(VG − ID·RS − Vt)²   →  quadratic in ID"
       ]
      }
     ],
     "id": "t14-2"
    },
    {
     "title": "Solving the quadratic",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "Two roots come out: keep the one with **VGS > Vt**",
        "The other implies the device is off",
        "Then VD = VDD − RD·ID, VS = RS·ID, VDS = VD − VS"
       ]
      },
      {
       "t": "call",
       "kind": "watch",
       "text": "Use consistent units: mA with kΩ, and Kn in mA/V²."
      }
     ],
     "id": "t14-3"
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
     "id": "t14-4"
    },
    {
     "title": "gr2-dc-005",
     "kind": "q",
     "ref": "gr2-dc-005",
     "blocks": [],
     "id": "t14-5"
    },
    {
     "title": "gr2-dc-006",
     "kind": "q",
     "ref": "gr2-dc-006",
     "blocks": [],
     "id": "t14-6"
    },
    {
     "title": "gr2-wk-003",
     "kind": "workout",
     "ref": "gr2-wk-003",
     "blocks": [],
     "id": "t14-7"
    }
   ],
   "id": "t14-dc-operating-point-and-region-"
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
        "RG1 runs from drain to gate, RG2 from gate to ground",
        "ID up → VD down → VG down: built-in negative feedback"
       ]
      },
      {
       "t": "eq",
       "lines": [
        "VG = VD·RG2 / (RG1 + RG2),    VD = VDD − RD·ID",
        "Source grounded: VGS = VG"
       ]
      }
     ],
     "id": "t15-1"
    },
    {
     "title": "Solve and check",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "Square law with VG(ID) gives a **quadratic**",
        "Reject the root that puts VD below ground or VGS below Vt",
        "Check VDS ≥ VOV (here VD above VOV)",
        "Check that the current in RG1 is negligible next to ID"
       ]
      },
      {
       "t": "eq",
       "lines": [
        "Gain:  vo/vin = (1/RG1 − gm) / (1/RD + 1/RG1)  ≈  −gm·RD"
       ]
      }
     ],
     "id": "t15-2"
    },
    {
     "title": "PMOS: the mirror image",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "p-type channel, **holes** carry the current",
        "Source sits toward the **positive** supply",
        "Supplies and polarities flip; the same checks apply (saturation, swing, linearity)",
        "Work with magnitudes: |Vt|, |VGS|"
       ]
      }
     ],
     "id": "t15-3"
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
     "id": "t15-4"
    },
    {
     "title": "gr2-fbk-002",
     "kind": "q",
     "ref": "gr2-fbk-002",
     "blocks": [],
     "id": "t15-5"
    },
    {
     "title": "gr2-pmos-002",
     "kind": "q",
     "ref": "gr2-pmos-002",
     "blocks": [],
     "id": "t15-6"
    },
    {
     "title": "gr2-wk-007",
     "kind": "workout",
     "ref": "gr2-wk-007",
     "blocks": [],
     "id": "t15-7"
    }
   ],
   "id": "t15-drain-feedback-bias-and-pmos"
  },
  {
   "title": "BJT structure and operating modes",
   "lessons": "Lesson 25",
   "slides": [
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
        "**Emitter** heavily doped, **base** thin and lightly doped, **collector** lightly doped",
        "Two pn junctions: **EBJ** and **CBJ**"
       ]
      }
     ],
     "id": "t16-1"
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
        "CBJ"
       ],
       "rows": [
        [
         "Cutoff",
         "Reverse",
         "Reverse"
        ],
        [
         "Active",
         "Forward",
         "Reverse"
        ],
        [
         "Saturation",
         "Forward",
         "Forward"
        ]
       ]
      },
      {
       "t": "call",
       "kind": "rule",
       "text": "Active mode: VBE ≈ 0.7 V and VC ≥ VB."
      },
      {
       "t": "call",
       "kind": "watch",
       "text": "If you assume active and get VC below VB, the device is saturated."
      }
     ],
     "id": "t16-2"
    },
    {
     "title": "Why β is large",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "Doping of emitter ≫ base: electrons injected into the base far outnumber holes injected into the emitter",
        "Thin base: few electrons recombine on the way",
        "The CBJ field sweeps the rest into the collector: **collector current is electrons**",
        "Wider base or lighter emitter doping: β falls"
       ]
      }
     ],
     "id": "t16-3"
    },
    {
     "title": "gr2-bjt-003",
     "kind": "q",
     "ref": "gr2-bjt-003",
     "blocks": [],
     "id": "t16-4"
    },
    {
     "title": "gr2-bjt-005",
     "kind": "q",
     "ref": "gr2-bjt-005",
     "blocks": [],
     "id": "t16-5"
    }
   ],
   "id": "t16-bjt-structure-and-operating-mo"
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
       "t": "eq",
       "lines": [
        "iE = iB + iC",
        "iC = β·iB,    iE = (β + 1)·iB",
        "α = β / (β + 1),    β = α / (1 − α),    iC = α·iE"
       ]
      },
      {
       "t": "call",
       "kind": "tip",
       "text": "iE is the largest current. α is just below 1, β is large."
      }
     ],
     "id": "t17-1"
    },
    {
     "title": "Divider-bias recipe",
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
         "text": "Model: a diode drop VBE plus β·IB"
        },
        {
         "h": "2",
         "text": "Thevenize the divider",
         "res": "Vth = VCC·RB2/(RB1+RB2),  Rth = RB1 ∥ RB2"
        },
        {
         "h": "3",
         "text": "KVL on the base loop",
         "res": "IB = (Vth − VBE) / (Rth + (β+1)·RE)"
        },
        {
         "h": "4",
         "text": "IC = β·IB, IE = (β+1)·IB, then VE, VB, VC"
        },
        {
         "h": "5",
         "text": "Check VC ≥ VB (active)"
        }
       ]
      }
     ],
     "id": "t17-2"
    },
    {
     "title": "Shortcut and small-signal model",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        "If (β+1)·RE ≫ Rth:   IC ≈ (Vth − VBE) / RE   (independent of β)",
        "gm = IC / VT   (VT ≈ 25 mV)",
        "rπ = β / gm"
       ]
      },
      {
       "t": "ul",
       "items": [
        "With no RE, IC is proportional to β: poor bias",
        "Unlike a MOSFET, the BJT input **draws base current** (rπ, not infinite)",
        "Signal must be small: vbe well under about 10 mV"
       ]
      },
      {
       "t": "call",
       "kind": "watch",
       "text": "gm uses the DC value IC, not the total iC."
      }
     ],
     "id": "t17-3"
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
     "id": "t17-4"
    },
    {
     "title": "gr2-bjt2-007",
     "kind": "q",
     "ref": "gr2-bjt2-007",
     "blocks": [],
     "id": "t17-5"
    },
    {
     "title": "gr2-bjt2-010",
     "kind": "q",
     "ref": "gr2-bjt2-010",
     "blocks": [],
     "id": "t17-6"
    },
    {
     "title": "gr2-wk-005",
     "kind": "workout",
     "ref": "gr2-wk-005",
     "blocks": [],
     "id": "t17-7"
    }
   ],
   "id": "t17-bjt-currents-bias-and-small-si"
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
      }
     ],
     "id": "t18-1"
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
         "Bipolar (both types)",
         "Unipolar (one type)"
        ],
        [
         "Current by",
         "Diffusion",
         "Drift"
        ],
        [
         "Controlled by",
         "Base current",
         "Gate voltage, zero DC gate current"
        ],
        [
         "Turn-on",
         "VBE ≈ 0.7 V",
         "VGS > Vt"
        ],
        [
         "Temperature",
         "Current rises (can run away)",
         "Current falls (self-limiting)"
        ],
        [
         "gm",
         "IC / VT",
         "√(2·Kn·ID)"
        ],
        [
         "Output resistance",
         "Early effect (base width)",
         "Channel-length modulation"
        ]
       ]
      },
      {
       "t": "call",
       "kind": "tip",
       "text": "Both have a finite ro: the output voltage nudges the effective width."
      }
     ],
     "id": "t18-2"
    },
    {
     "title": "gr2-cmp2-001",
     "kind": "q",
     "ref": "gr2-cmp2-001",
     "blocks": [],
     "id": "t18-3"
    },
    {
     "title": "gr2-cmp2-003",
     "kind": "q",
     "ref": "gr2-cmp2-003",
     "blocks": [],
     "id": "t18-4"
    }
   ],
   "id": "t18-bjt-versus-mosfet"
  }
 ]
});
