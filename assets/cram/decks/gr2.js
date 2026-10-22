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
     "id": "t1-1"
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
     "id": "t1-2"
    },
    {
     "title": "Source and load losses",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        "Vi = VS · Ri / (Ri + RS)        input divider",
        "Vo = Avo · Vi · RL / (RL + Ro)   output divider",
        "Loaded gain:   Av = vo/vi = Avo · RL / (Ro + RL)  @S3 §1",
        "Overall gain:  Gv = vo/vs = [Ri/(Rs + Ri)] · Avo · [RL/(Ro + RL)]  @S3 §1"
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
     "id": "t1-3"
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
     "id": "t1-4"
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
        "Loaded gain of stage k:  Avk = Avo,k · Ri,k+1 / (Ri,k+1 + Ro,k)",
        "Last stage:  use RL in place of Ri,k+1",
        "Av = Av1 · Av2 · Av3 ...      Gv = [Ri1/(RS + Ri1)] · Av"
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
     "id": "t1-5"
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
     "id": "t1-6"
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
     "id": "t1-7"
    },
    {
     "title": "gr2-model-006",
     "kind": "q",
     "ref": "gr2-model-006",
     "blocks": [],
     "id": "t1-8"
    },
    {
     "title": "gr2-wk-004",
     "kind": "workout",
     "ref": "gr2-wk-004",
     "blocks": [],
     "id": "t1-9"
    }
   ],
   "id": "t1-amplifier-models-and-cascades"
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
        "Avo = Vout,pp / Vin,pp   (load disconnected)  @S3 §8",
        "Av = Vout,pp / Vin,pp   (specified RL connected)  @S3 §8"
       ]
      }
     ],
     "id": "t2-1"
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
        "Ri = Rtest · V2,pp / (V1,pp − V2,pp)  @S3 §8"
       ]
      }
     ],
     "id": "t2-2"
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
     "id": "t2-3"
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
     "id": "t2-4"
    },
    {
     "title": "gr2-measure-001",
     "kind": "q",
     "ref": "gr2-measure-001",
     "blocks": [],
     "id": "t2-5"
    },
    {
     "title": "gr2-measure-005",
     "kind": "q",
     "ref": "gr2-measure-005",
     "blocks": [],
     "id": "t2-6"
    },
    {
     "title": "gr2-wk-009",
     "kind": "workout",
     "ref": "gr2-wk-009",
     "blocks": [],
     "id": "t2-7"
    }
   ],
   "id": "t2-measuring-ri-ro-and-avo"
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
        "vo = vDS = VDD − RD·iD",
        "Overdrive:  Vov = VGS − Vt  @S2 §1",
        "Saturation current:  ID = ½·Kn·Vov²  @S2 §2"
       ]
      }
     ],
     "id": "t3-1"
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
        "Saturation:  vD = VDD − RD·[½·Kn·(vGS − Vt)²]  @S3 §2",
        "Triode:  iD = Kn·[Vov·vDS − ½·vDS²]  @S2 §2"
       ]
      }
     ],
     "id": "t3-2"
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
        "VDS,B = Vov,B = (√(1 + 2·Kn·RD·VDD) − 1) / (Kn·RD)  @S3 §2",
        "VGS,B = Vt + VDS,B"
       ]
      },
      {
       "t": "call",
       "kind": "why",
       "text": "At B set vDS = vGS − Vt in the saturation equation: ½·Kn·RD·V² + V − VDD = 0, then take the positive root."
      }
     ],
     "id": "t3-3"
    },
    {
     "title": "Q-point and gain",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        "Avo = dvDS/dvGS at Q = −Kn·RD·Vov = −gm·RD  @S3 §2"
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
     "id": "t3-4"
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
     "id": "t3-5"
    },
    {
     "title": "gr2-vtc-003",
     "kind": "q",
     "ref": "gr2-vtc-003",
     "blocks": [],
     "id": "t3-6"
    },
    {
     "title": "gr2-vtc-006",
     "kind": "q",
     "ref": "gr2-vtc-006",
     "blocks": [],
     "id": "t3-7"
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
        "vGS = VGS + vgs        iD = ID + id"
       ]
      },
      {
       "t": "call",
       "kind": "rule",
       "text": "The signal rides on the DC bias. DC analysis first, signal analysis second."
      }
     ],
     "id": "t4-1"
    },
    {
     "title": "Why a model, and where it comes from",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        "iD = ½·Kn·(VGS + vgs − Vt)²  =  ID + Kn·Vov·vgs + ½·Kn·vgs²"
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
     "id": "t4-2"
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
     "id": "t4-3"
    },
    {
     "title": "The parameters",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        "gm = Kn·Vov  @S3 §5",
        "gm = 2·ID / Vov = √(2·Kn·ID)",
        "ro = VA / ID = 1/(λ·ID)  @S2 §2",
        "|Avo| = gm·RD   (RS bypassed or absent, ro ignored)  @S3 §2"
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
     "id": "t4-4"
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
     "id": "t4-5"
    },
    {
     "title": "gr2-ss-004",
     "kind": "q",
     "ref": "gr2-ss-004",
     "blocks": [],
     "id": "t4-6"
    },
    {
     "title": "gr2-ss-013",
     "kind": "q",
     "ref": "gr2-ss-013",
     "blocks": [],
     "id": "t4-7"
    },
    {
     "title": "gr2-wk-006",
     "kind": "workout",
     "ref": "gr2-wk-006",
     "blocks": [],
     "id": "t4-8"
    }
   ],
   "id": "t4-small-signal-model-and-gm"
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
        "VG = VDD·RG2/(RG1 + RG2)  @S2 §5"
       ]
      }
     ],
     "id": "t5-1"
    },
    {
     "title": "What it gives you",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        "Ri = RG1 ∥ RG2        Ro = RD ∥ ro ≈ RD  @S3 §7",
        "Avo = −gm·(RD ∥ ro) ≈ −gm·RD  @S3 §7",
        "Loaded gain: replace RD with RD ∥ RL  @S3 §7"
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
     "id": "t5-2"
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
     "id": "t5-3"
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
     "id": "t5-4"
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
     "id": "t5-5"
    },
    {
     "title": "gr2-csdes-006",
     "kind": "q",
     "ref": "gr2-csdes-006",
     "blocks": [],
     "id": "t5-6"
    },
    {
     "title": "gr2-csdes-009",
     "kind": "q",
     "ref": "gr2-csdes-009",
     "blocks": [],
     "id": "t5-7"
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
       "t": "fig",
       "src": "assets/study/resources/gr2/cs_rs.svg",
       "alt": "Common-source stage with a source resistor"
      },
      {
       "t": "eq",
       "lines": [
        "ID rises  →  VS = ID·RS rises  →  VGS = VG − VS falls  →  ID falls back"
       ]
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
     "id": "t6-1"
    },
    {
     "title": "The price: lost gain",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        "Unbypassed:   Avo = −gm·RD / (1 + gm·RS)   (ro ignored)  @S3 §7",
        "because  vgs = vin / (1 + gm·RS)  : the source resistor drops part of the input"
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
     "id": "t6-2"
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
        "Fully bypassed:   |Avo| = gm·RD  @S3 §4"
       ]
      }
     ],
     "id": "t6-3"
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
        "Avo = −gm·RD / (1 + gm·RS1)  @S3 §7",
        "RS1 = 1/gm   →   |Avo| = gm·RD / 2  @S3 §5"
       ]
      }
     ],
     "id": "t6-4"
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
     "id": "t6-5"
    },
    {
     "title": "gr2-fb-001",
     "kind": "q",
     "ref": "gr2-fb-001",
     "blocks": [],
     "id": "t6-6"
    },
    {
     "title": "gr2-fb-014",
     "kind": "q",
     "ref": "gr2-fb-014",
     "blocks": [],
     "id": "t6-7"
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
     "id": "t7-1"
    },
    {
     "title": "Current from the gain",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        "Fully bypassed:   ID = 2·Kn·[ (VDD/3) / |Avo| ]²  @S3 §4",
        "Partially bypassed:  ID = 2·Kn·[ VDD / (6·|Avo|) ]²  @S3 §5"
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
     "id": "t7-2"
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
        "RD = RS = (VDD/3) / ID  @S3 §4",
        "Vov = √(2·ID/Kn),   gm = Kn·Vov  @S3 §5",
        "RS1 = 1/gm,   RS2 = RS − RS1  @S3 §5",
        "VGS = Vov + Vt,   VG = VGS + VRS = VGS + VDD/3  @S3 §5"
       ]
      }
     ],
     "id": "t7-3"
    },
    {
     "title": "Divider and checks",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        "RG1 ≥ (VDD/VG)·Rin,   RG2 = RG1 / (VDD/VG − 1)  @S3 §5",
        "Headroom:  vd,pk = |Avo|·vg,pk;  VD,max = VD + vd,pk ≤ VDD  @S3 §5",
        "Legroom:   VD,min = VD − vd,pk ≥ VS + Vov  @S3 §5",
        "Linearity:  vgs,pk = vg,pk / (1 + gm·RS1) ≤ 0.2·Vov  @S3 §5"
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
     "id": "t7-4"
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
     "id": "t7-5"
    },
    {
     "title": "gr2-des-001",
     "kind": "q",
     "ref": "gr2-des-001",
     "blocks": [],
     "id": "t7-6"
    },
    {
     "title": "gr2-wk-001",
     "kind": "workout",
     "ref": "gr2-wk-001",
     "blocks": [],
     "id": "t7-7"
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
     "id": "t8-1"
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
     "id": "t8-2"
    },
    {
     "title": "Results",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        "Ri = RG1 ∥ RG2   (very high)  @S3 §6",
        "Avo = RS/(RS + 1/gm) = gm·RS/(1 + gm·RS) ≈ 1   (< 1)  @S3 §6",
        "Ro = RS ∥ 1/gm ≈ 1/gm   (low)  @S3 §6",
        "Loaded: replace RS with RS ∥ RL  →  Av = gm(RS∥RL) / (1 + gm(RS∥RL))  @S3 §7",
        "With λ: Ro = RS ∥ 1/gm ∥ ro  @S3 §7"
       ]
      }
     ],
     "id": "t8-3"
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
     "id": "t8-4"
    },
    {
     "title": "gr2-cd-003",
     "kind": "q",
     "ref": "gr2-cd-003",
     "blocks": [],
     "id": "t8-5"
    },
    {
     "title": "gr2-cd-005",
     "kind": "q",
     "ref": "gr2-cd-005",
     "blocks": [],
     "id": "t8-6"
    }
   ],
   "id": "t8-common-drain-amplifier-behavio"
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
        "Preliminary input swing:  Vload,pp / Vin,pp ≈ 0.85  @S3 §6",
        "Pick VS ≈ VDD/2  @S3 §6"
       ]
      },
      {
       "t": "call",
       "kind": "watch",
       "text": "Peak-to-peak where a peak is needed is the classic slip. The notes sometimes start with a gain of 0.8 instead of 0.85."
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
        "The load pushes current **back into the source node**, so RS must carry **ID,min + IL,pk**",
        "Pick **ID,min** (a few mA) so the device never cuts off"
       ]
      },
      {
       "t": "eq",
       "lines": [
        "IL,pk = Vload,pp / (2·RL)  @S3 §6",
        "IRS,max = ID,min + IL,pk  @S3 §6",
        "VRS,min = VS − Vload,pp/2  @S3 §6"
       ]
      }
     ],
     "id": "t9-2"
    },
    {
     "title": "The 11-step workflow",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        "RS = VRS,min / IRS,max   (then a standard value)  @S3 §6",
        "ID = VS / RS  @S3 §6",
        "Vov = √(2·ID/Kn)  @S3 §6",
        "VG = VS + Vov + Vt  @S3 §6",
        "RG1 ≥ (VDD/VG)·Rin,   RG2 = RG1/(VDD/VG − 1)  @S3 §6"
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
     "id": "t9-3"
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
     "id": "t9-4"
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
     "id": "t9-5"
    },
    {
     "title": "gr2-cddes-004",
     "kind": "q",
     "ref": "gr2-cddes-004",
     "blocks": [],
     "id": "t9-6"
    },
    {
     "title": "gr2-wk-002",
     "kind": "workout",
     "ref": "gr2-wk-002",
     "blocks": [],
     "id": "t9-7"
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
        "**CS:** big gain, but Ro ≈ RD is large, so it collapses into a small load",
        "**CD:** small Ro, but gain below 1",
        "High gain into a low-resistance load needs **both**"
       ]
      },
      {
       "t": "eq",
       "lines": [
        "Single CS into RL:  Av = Avo · RL / (RL + Ro)  with Ro ≈ RD  @S3 §1"
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
        "CS makes the voltage gain",
        "CD buffers: its large Ri barely loads the CS stage and its small Ro barely loses signal into RL",
        "The CD input resistance **is** the CS load"
       ]
      },
      {
       "t": "eq",
       "lines": [
        "Av = Avo1·[Ri2/(Ri2 + Ro1)] · Avo2·[RL/(RL + Ro2)]  @S3 §1"
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
     "id": "t10-3"
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
     "id": "t10-4"
    },
    {
     "title": "gr2-multi-002",
     "kind": "q",
     "ref": "gr2-multi-002",
     "blocks": [],
     "id": "t10-5"
    },
    {
     "title": "gr2-multi-003",
     "kind": "q",
     "ref": "gr2-multi-003",
     "blocks": [],
     "id": "t10-6"
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
        "Gate held at **ac ground** by a bypass capacitor",
        "Signal enters at the **source**; the output leaves at the **drain**",
        "The gate bias divider still sets VG; the DC analysis is the same as for any bias network"
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
        "Ri = RS ∥ 1/gm ≈ 1/gm   (low)  @S3 §7",
        "Avo = + gm·RD   (non-inverting)  @S3 §7",
        "Ro = RD ∥ [ro·(1 + gm·RS) + RS] ≈ RD  @S3 §7",
        "Loaded: replace RD with RD ∥ RL  @S3 §7"
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
     "id": "t11-2"
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
     "id": "t11-3"
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
     "id": "t11-4"
    },
    {
     "title": "gr2-cg-002",
     "kind": "q",
     "ref": "gr2-cg-002",
     "blocks": [],
     "id": "t11-5"
    },
    {
     "title": "gr2-cg-003",
     "kind": "q",
     "ref": "gr2-cg-003",
     "blocks": [],
     "id": "t11-6"
    }
   ],
   "id": "t11-common-gate-amplifier"
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
     "id": "t12-1"
    },
    {
     "title": "Loading and rule of thumb",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        "Loaded gain:  replace RD with RD ∥ RL  (CS, CG)  @S3 §7",
        "Loaded gain:  replace RS with RS ∥ RL  (CD)  @S3 §7",
        "Av = Avo · RL / (RL + Ro)  @S3 §1"
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
     "id": "t12-2"
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
     "id": "t12-3"
    },
    {
     "title": "gr2-cmp-002",
     "kind": "q",
     "ref": "gr2-cmp-002",
     "blocks": [],
     "id": "t12-4"
    },
    {
     "title": "gr2-cmp-004",
     "kind": "q",
     "ref": "gr2-cmp-004",
     "blocks": [],
     "id": "t12-5"
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
        "Run a **DC operating point**; compare node voltages and ID with the hand values",
        "A few percent off is normal: the hand method ignores λ and uses ideal parameters",
        "Sweep **Vt and Kn** over their stated values and tabulate ID, VD, VS and the gain",
        "The bias with a source resistor should barely move; the no-RS bias should move a lot"
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
        "|Av| = Vout,pp / Vin,pp   (Multisim source: Vin,pp = 2 × Vpk)"
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
     "id": "t13-2"
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
     "id": "t13-3"
    },
    {
     "title": "Power dissipation",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        "DC, MOSFET:  Pdiss = VDS·ID  @S3 §8",
        "DC, resistor:  Pdiss = V²/R = I²·R  @S3 §8",
        "AC, sinusoid:  Vrms = Vpp/(2√2) = Vpk/√2  @S3 §8",
        "AC, resistor:  Pdiss = Vrms²/R  @S3 §8",
        "AC, MOSFET:  Pdiss = ½·vds,pk·ids,pk  @S3 §8"
       ]
      },
      {
       "t": "call",
       "kind": "tip",
       "text": "Check that each device and resistor in a design is within its power rating."
      }
     ],
     "id": "t13-4"
    },
    {
     "title": "gr2-sim-001",
     "kind": "q",
     "ref": "gr2-sim-001",
     "blocks": [],
     "id": "t13-5"
    },
    {
     "title": "gr2-sim-002",
     "kind": "q",
     "ref": "gr2-sim-002",
     "blocks": [],
     "id": "t13-6"
    }
   ],
   "id": "t13-simulation-and-measurement"
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
        "Cutoff:  VGS < Vt (Vov ≤ 0),  ID = 0  @S2 §2",
        "Saturation:  VGS ≥ Vt and VDS ≥ Vov  (equivalently VGD ≤ Vt)  @S2 §2",
        "Triode:  VDS < Vov,  ID = Kn·[Vov·VDS − ½·VDS²]  @S2 §2"
       ]
      }
     ],
     "id": "t14-1"
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
        "VG = VDD·RG2/(RG1 + RG2)   (IG = 0)  @S2 §5",
        "VS = RS·ID,   VD = VDD − RD·ID  @S2 §5",
        "VGS = VG − VS = VG − RS·ID  @S2 §5",
        "VDS = VD − VS,   VGD = VG − VD,   Vov = VGS − Vt  @S2 §5"
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
       "t": "eq",
       "lines": [
        "ID = ½·Kn·(VG − RS·ID − Vt)²  @S2 §5",
        "a·ID² + b·ID + c = 0   →   ID = (−b ± √(b² − 4ac)) / (2a)"
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
        "RG1 runs from the **drain** to the gate, RG2 from the gate to ground",
        "ID up → VD down → VG down → ID down: built-in negative feedback",
        "The problem states that the current in RG1 is negligible next to ID"
       ]
      },
      {
       "t": "eq",
       "lines": [
        "VD = VDD − RD·ID,    VG = VD·RG2 / (RG1 + RG2)",
        "Source grounded:  VGS = VG"
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
        "Substitute into **ID = ½·Kn·(VG − Vt)²** (sheet 2) to get a **quadratic** in ID",
        "Reject the root that puts VD below ground or VGS below Vt",
        "Check **VDS ≥ VOV** (here VD above Vov)",
        "Check that the current in RG1, (VD − VG)/RG1, is negligible next to ID"
       ]
      },
      {
       "t": "eq",
       "lines": [
        "Square law:  ID = ½·Kn·(VGS − Vt)²  @S2 §2"
       ]
      }
     ],
     "id": "t15-2"
    },
    {
     "title": "Small-signal gain",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        "Nodal equation at the drain, vgs = vin:   vo/RD + gm·vgs + (vo − vgs)/RG1 = 0",
        "vo/vin = (1/RG1 − gm) / (1/RD + 1/RG1)  ≈  −gm·RD"
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
     "id": "t15-3"
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
     "id": "t15-4"
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
     "id": "t15-5"
    },
    {
     "title": "gr2-fbk-002",
     "kind": "q",
     "ref": "gr2-fbk-002",
     "blocks": [],
     "id": "t15-6"
    },
    {
     "title": "gr2-pmos-002",
     "kind": "q",
     "ref": "gr2-pmos-002",
     "blocks": [],
     "id": "t15-7"
    },
    {
     "title": "gr2-wk-007",
     "kind": "workout",
     "ref": "gr2-wk-007",
     "blocks": [],
     "id": "t15-8"
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
        "**Emitter** heavily doped, **base** thin and lightly doped, **collector** lightly doped: N_D,E ≫ N_A,B ≫ N_D,C",
        "Two pn junctions: the emitter-base junction (**EBJ**) and the collector-base junction (**CBJ**)",
        "Carriers of **both** polarities take part, hence \"bipolar\""
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
     "id": "t16-2"
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
        "IC = IS·e^(VBE/VT)  @S3 §9"
       ]
      }
     ],
     "id": "t16-3"
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
        "i1/i2 = (Dn/Dp)·(N_D,E·Lp)/(N_A,B·W)"
       ]
      }
     ],
     "id": "t16-4"
    },
    {
     "title": "gr2-bjt-003",
     "kind": "q",
     "ref": "gr2-bjt-003",
     "blocks": [],
     "id": "t16-5"
    },
    {
     "title": "gr2-bjt-005",
     "kind": "q",
     "ref": "gr2-bjt-005",
     "blocks": [],
     "id": "t16-6"
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
       "t": "fig",
       "src": "assets/study/resources/gr2/bjt_currents.svg",
       "alt": "npn transistor with its three currents"
      },
      {
       "t": "eq",
       "lines": [
        "iC = β·iB,   iE = iB + iC = (β + 1)·iB  @S3 §9",
        "iC = α·iE,   α = β/(β + 1),   β = α/(1 − α)  @S3 §9",
        "IC = IS·e^(VBE/VT)  @S3 §9"
       ]
      },
      {
       "t": "call",
       "kind": "tip",
       "text": "iE is the largest current. α is just below 1, β is large. For silicon in active mode VBE ≈ 0.65–0.7 V.  @S3 §9"
      }
     ],
     "id": "t17-1"
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
     "id": "t17-2"
    },
    {
     "title": "Stability and the shortcut",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        "IB = (Vth − VBE) / (Rth + (β + 1)·RE)",
        "If (β+1)·RE ≫ Rth:   IC ≈ (Vth − VBE) / RE   (independent of β)"
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
     "id": "t17-3"
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
        "gm = IC / VT   (VT ≈ 25 mV)  @S3 §9",
        "rπ = β/gm = β·VT/IC  @S3 §9",
        "ro = VA / IC  @S3 §9"
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
     "id": "t17-4"
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
     "id": "t17-5"
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
     "id": "t17-6"
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
     "id": "t17-7"
    },
    {
     "title": "gr2-bjt2-007",
     "kind": "q",
     "ref": "gr2-bjt2-007",
     "blocks": [],
     "id": "t17-8"
    },
    {
     "title": "gr2-bjt2-010",
     "kind": "q",
     "ref": "gr2-bjt2-010",
     "blocks": [],
     "id": "t17-9"
    },
    {
     "title": "gr2-wk-005",
     "kind": "workout",
     "ref": "gr2-wk-005",
     "blocks": [],
     "id": "t17-10"
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
      },
      {
       "t": "ul",
       "items": [
        "Both are controlled current sources in their amplifying region",
        "A BJT is controlled by the **base current** (iC = β·iB); a MOSFET by the **gate voltage** with zero DC gate current"
       ]
      }
     ],
     "id": "t18-1"
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
     "id": "t18-2"
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
     "id": "t18-3"
    },
    {
     "title": "gr2-cmp2-001",
     "kind": "q",
     "ref": "gr2-cmp2-001",
     "blocks": [],
     "id": "t18-4"
    },
    {
     "title": "gr2-cmp2-003",
     "kind": "q",
     "ref": "gr2-cmp2-003",
     "blocks": [],
     "id": "t18-5"
    }
   ],
   "id": "t18-bjt-versus-mosfet"
  }
 ]
});
