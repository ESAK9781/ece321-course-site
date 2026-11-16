window.CourseCram.registerDeck({
 "id": "gr1",
 "title": "GR1 Cram",
 "subtitle": "Lessons 1 to 13",
 "packetTitle": "ECE 321 GR1 Cram Packet",
 "bank": "gr1",
 "studyHref": "index.html#study/gr1",
 "topics": [
  {
   "title": "Semiconductors, carriers and doping",
   "lessons": "Lessons 1 and 4",
   "slides": [
    {
     "title": "What a semiconductor is",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "A **semiconductor** (silicon, germanium, gallium arsenide) conducts between a metal and an insulator, and we can **control** how well",
        "Silicon has **4 valence electrons**; each atom shares them in bonds with 4 neighbors",
        "At absolute zero all bonds are full, so no charge moves. Heat breaks some bonds",
        "A broken bond frees an **electron** and leaves a **hole**: carriers are always made in **pairs**"
       ]
      },
      {
       "t": "call",
       "kind": "tip",
       "text": "Electrons carry negative charge; a hole behaves as a mobile positive charge."
      }
     ],
     "id": "t1-1"
    },
    {
     "title": "Bandgap and intrinsic carriers",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "The **bandgap energy Eg** is the energy needed to free an electron: Si 1.12 eV, Ge 0.66 eV, GaAs 1.42 eV @S1 §2",
        "In pure (**intrinsic**) silicon the electron and hole densities are **equal**: n = p = ni",
        "ni grows **very fast** with temperature and falls as Eg grows"
       ]
      },
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"n_i=B\\,T^{3/2}e^{-E_g/(2kT)}\"><mrow><msub><mi>n</mi><mi mathvariant=\"normal\">i</mi></msub><mo>=</mo><mi>B</mi><mspace width=\"0.17em\"/><msup><mi>T</mi><mrow><mn>3</mn><mo lspace=\"0.05em\" rspace=\"0.05em\">/</mo><mn>2</mn></mrow></msup><msup><mi>e</mi><mrow><mo form=\"prefix\" lspace=\"0\" rspace=\"0.04em\">−</mo><msub><mi mathvariant=\"normal\">E</mi><mi mathvariant=\"normal\">g</mi></msub><mo lspace=\"0.05em\" rspace=\"0.05em\">/</mo><mo stretchy=\"false\">(</mo><mn>2</mn><mi mathvariant=\"normal\">kT</mi><mo stretchy=\"false\">)</mo></mrow></msup></mrow></math>",
         "sheet": "S1 §1"
        },
        {
         "math": "<math alttext=\"\\text{Si, }300\\ \\text{K}:\\ n_i=1.5\\times10^{10}\\ \\text{cm}^{-3}\"><mrow><mtext>Si, </mtext><mn>300</mn><mspace width=\"0.25em\"/><mtext>K</mtext><mo>:</mo><mspace width=\"0.25em\"/><msub><mi>n</mi><mi mathvariant=\"normal\">i</mi></msub><mo>=</mo><mn>1.5</mn><mo>×</mo><msup><mn>10</mn><mrow><mn>10</mn></mrow></msup><mspace width=\"0.25em\"/><msup><mtext>cm</mtext><mrow><mo form=\"prefix\" lspace=\"0\" rspace=\"0.04em\">−</mo><mn>3</mn></mrow></msup></mrow></math>",
         "sheet": "S1 §1"
        }
       ]
      },
      {
       "t": "call",
       "kind": "why",
       "text": "Larger Eg means fewer bonds break at a given temperature, so fewer carriers."
      }
     ],
     "id": "t1-2"
    },
    {
     "title": "Doping: donors and acceptors",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "**Doping** adds a small number of impurity atoms to control the carrier type",
        "**Donors** (Group V: P, As, Sb) give an extra electron: **n-type**, majority carriers are electrons",
        "**Acceptors** (Group III: B, Al, Ga, In) leave a bond vacancy: **p-type**, majority carriers are holes",
        "The doped crystal stays **neutral**: each free carrier is balanced by a fixed ion"
       ]
      },
      {
       "t": "tbl",
       "head": [
        "Type",
        "Dopant",
        "Majority",
        "Minority"
       ],
       "rows": [
        [
         "n-type",
         "Donor (Group V)",
         "electrons",
         "holes"
        ],
        [
         "p-type",
         "Acceptor (Group III)",
         "holes",
         "electrons"
        ]
       ],
       "sheet": "S1 §5"
      }
     ],
     "id": "t1-3"
    },
    {
     "title": "The mass-action law",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"n\\,p=n_i^{2}\"><mrow><mi>n</mi><mspace width=\"0.17em\"/><mi>p</mi><mo>=</mo><msubsup><mi>n</mi><mi mathvariant=\"normal\">i</mi><mrow><mn>2</mn></mrow></msubsup></mrow></math>",
         "sheet": "S1 §1"
        },
        {
         "math": "<math alttext=\"\\text{n-type:}\\ n_{n0}\\approx N_D,\\quad p_{n0}=\\dfrac{n_i^2}{N_D}\"><mrow><mtext>n-type:</mtext><mspace width=\"0.25em\"/><msub><mi>n</mi><mrow><mi mathvariant=\"normal\">n</mi><mn>0</mn></mrow></msub><mo>≈</mo><msub><mi>N</mi><mi mathvariant=\"normal\">D</mi></msub><mo>,</mo><mspace width=\"1em\"/><msub><mi>p</mi><mrow><mi mathvariant=\"normal\">n</mi><mn>0</mn></mrow></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msubsup><mi>n</mi><mi mathvariant=\"normal\">i</mi><mn>2</mn></msubsup></mrow><mrow><msub><mi>N</mi><mi mathvariant=\"normal\">D</mi></msub></mrow></mfrac></mstyle></mrow></math>",
         "sheet": "S1 §1"
        },
        {
         "math": "<math alttext=\"\\text{p-type:}\\ p_{p0}\\approx N_A,\\quad n_{p0}=\\dfrac{n_i^2}{N_A}\"><mrow><mtext>p-type:</mtext><mspace width=\"0.25em\"/><msub><mi>p</mi><mrow><mi mathvariant=\"normal\">p</mi><mn>0</mn></mrow></msub><mo>≈</mo><msub><mi>N</mi><mi mathvariant=\"normal\">A</mi></msub><mo>,</mo><mspace width=\"1em\"/><msub><mi>n</mi><mrow><mi mathvariant=\"normal\">p</mi><mn>0</mn></mrow></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msubsup><mi>n</mi><mi mathvariant=\"normal\">i</mi><mn>2</mn></msubsup></mrow><mrow><msub><mi>N</mi><mi mathvariant=\"normal\">A</mi></msub></mrow></mfrac></mstyle></mrow></math>",
         "sheet": "S1 §1"
        }
       ]
      },
      {
       "t": "ul",
       "items": [
        "ND and NA are the **donor** and **acceptor** concentrations (per cm³)",
        "Adding donors raises n and **forces p down** so that n·p stays ni²",
        "The minority carrier density is tiny but sets the **reverse current** of a junction later"
       ]
      },
      {
       "t": "call",
       "kind": "watch",
       "text": "Use the majority-carrier approximation only when doping is far above ni."
      }
     ],
     "id": "t1-4"
    },
    {
     "title": "Hole density in n-type silicon",
     "kind": "example",
     "blocks": [
      {
       "t": "given",
       "items": [
        "Si at 300 K",
        "ni = 1.5×10¹⁰ cm⁻³",
        "ND = 10¹⁶ cm⁻³"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Majority carriers",
         "res": "n ≈ ND = 1e+16 cm⁻³"
        },
        {
         "h": "2",
         "text": "Mass action",
         "res": "p = ni²/ND = (1.5×10¹⁰)²/10¹⁶"
        },
        {
         "h": "3",
         "text": "Result",
         "res": "p = 2.25e+04 cm⁻³"
        },
        {
         "h": "4",
         "text": "Ratio",
         "res": "electrons outnumber holes by 4.4e+11: the minority carrier is negligible for conduction"
        }
       ]
      }
     ],
     "id": "t1-5"
    },
    {
     "title": "Compensated doping",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "A sample can contain **both** donors and acceptors; they **compensate** each other",
        "The larger concentration wins: the **net** doping decides the type",
        "If ND > NA it is n-type with n ≈ ND − NA; if NA > ND it is p-type with p ≈ NA − ND"
       ]
      },
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"N_D&gt;N_A:\\ n\\approx N_D-N_A\\qquad N_A&gt;N_D:\\ p\\approx N_A-N_D\"><mrow><msub><mi>N</mi><mi mathvariant=\"normal\">D</mi></msub><mo>&gt;</mo><msub><mi>N</mi><mi mathvariant=\"normal\">A</mi></msub><mo>:</mo><mspace width=\"0.25em\"/><mi>n</mi><mo>≈</mo><msub><mi>N</mi><mi mathvariant=\"normal\">D</mi></msub><mo>−</mo><msub><mi>N</mi><mi mathvariant=\"normal\">A</mi></msub><mspace width=\"2em\"/><msub><mi>N</mi><mi mathvariant=\"normal\">A</mi></msub><mo>&gt;</mo><msub><mi>N</mi><mi mathvariant=\"normal\">D</mi></msub><mo>:</mo><mspace width=\"0.25em\"/><mi>p</mi><mo>≈</mo><msub><mi>N</mi><mi mathvariant=\"normal\">A</mi></msub><mo>−</mo><msub><mi>N</mi><mi mathvariant=\"normal\">D</mi></msub></mrow></math>"
        }
       ]
      },
      {
       "t": "call",
       "kind": "watch",
       "text": "Do not add the two concentrations; subtract the smaller from the larger."
      }
     ],
     "id": "t1-6"
    },
    {
     "title": "Compensated sample",
     "kind": "example",
     "blocks": [
      {
       "t": "given",
       "items": [
        "NA = 5×10¹⁶ cm⁻³",
        "ND = 2×10¹⁶ cm⁻³",
        "ni = 1.5×10¹⁰ cm⁻³"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Which is larger?",
         "res": "NA > ND, so the sample is p-type"
        },
        {
         "h": "2",
         "text": "Net doping",
         "res": "p ≈ NA − ND = 3e+16 cm⁻³"
        },
        {
         "h": "3",
         "text": "Minority carriers",
         "res": "n = ni²/p = 7.50e+03 cm⁻³"
        }
       ]
      }
     ],
     "id": "t1-7"
    },
    {
     "title": "gr1-semi-001",
     "kind": "q",
     "ref": "gr1-semi-001",
     "blocks": [],
     "id": "t1-8"
    },
    {
     "title": "gr1-semi-003",
     "kind": "q",
     "ref": "gr1-semi-003",
     "blocks": [],
     "id": "t1-9"
    },
    {
     "title": "gr1-semi-006",
     "kind": "q",
     "ref": "gr1-semi-006",
     "blocks": [],
     "id": "t1-10"
    }
   ],
   "id": "t1-semiconductors-carriers-and-do"
  },
  {
   "title": "Drift and diffusion",
   "lessons": "Lesson 2",
   "slides": [
    {
     "title": "Two ways carriers move",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "**Drift**: carriers pushed by an **electric field**",
        "**Diffusion**: carriers spreading from **high to low concentration**, with no field needed",
        "Total current is the sum of both for each carrier type"
       ]
      },
      {
       "t": "call",
       "kind": "tip",
       "text": "Drift needs a field; diffusion needs a gradient."
      }
     ],
     "id": "t2-1"
    },
    {
     "title": "Drift",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"v_p=\\mu_pE,\\qquad v_n=-\\mu_nE\"><mrow><msub><mi>v</mi><mi mathvariant=\"normal\">p</mi></msub><mo>=</mo><msub><mi>μ</mi><mi mathvariant=\"normal\">p</mi></msub><mi>E</mi><mo>,</mo><mspace width=\"2em\"/><msub><mi>v</mi><mi mathvariant=\"normal\">n</mi></msub><mo>=</mo><mo form=\"prefix\" lspace=\"0\" rspace=\"0.04em\">−</mo><msub><mi>μ</mi><mi mathvariant=\"normal\">n</mi></msub><mi>E</mi></mrow></math>",
         "sheet": "S1 §3"
        },
        {
         "math": "<math alttext=\"J_{drift}=q\\,(p\\mu_p+n\\mu_n)\\,E=\\sigma E\"><mrow><msub><mi>J</mi><mrow><mi mathvariant=\"normal\">drift</mi></mrow></msub><mo>=</mo><mi>q</mi><mspace width=\"0.17em\"/><mo stretchy=\"false\">(</mo><mi>p</mi><msub><mi>μ</mi><mi mathvariant=\"normal\">p</mi></msub><mo>+</mo><mi>n</mi><msub><mi>μ</mi><mi mathvariant=\"normal\">n</mi></msub><mo stretchy=\"false\">)</mo><mspace width=\"0.17em\"/><mi>E</mi><mo>=</mo><mi>σ</mi><mi>E</mi></mrow></math>",
         "sheet": "S1 §3"
        },
        {
         "math": "<math alttext=\"\\rho=\\dfrac{1}{q\\,(p\\mu_p+n\\mu_n)}\\quad(\\Omega\\cdot\\text{cm})\"><mrow><mi>ρ</mi><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><mn>1</mn></mrow><mrow><mi>q</mi><mspace width=\"0.17em\"/><mo stretchy=\"false\">(</mo><mi>p</mi><msub><mi>μ</mi><mi mathvariant=\"normal\">p</mi></msub><mo>+</mo><mi>n</mi><msub><mi>μ</mi><mi mathvariant=\"normal\">n</mi></msub><mo stretchy=\"false\">)</mo></mrow></mfrac></mstyle><mspace width=\"1em\"/><mo stretchy=\"false\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo>·</mo><mtext>cm</mtext><mo stretchy=\"false\">)</mo></mrow></math>",
         "sheet": "S1 §3"
        }
       ]
      },
      {
       "t": "ul",
       "items": [
        "μ (mobility, cm²/V·s) is how fast a carrier moves per unit field",
        "Holes move **with** the field, electrons **against** it, but both add to current in the field direction",
        "Mobility **decreases** as doping rises (impurity scattering) @S1 §3"
       ]
      },
      {
       "t": "call",
       "kind": "watch",
       "text": "Keep units consistent: E in V/cm, μ in cm²/V·s, densities in cm⁻³."
      }
     ],
     "id": "t2-2"
    },
    {
     "title": "Diffusion",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"J_{p,diff}=-qD_p\\dfrac{dp}{dx}\"><mrow><msub><mi>J</mi><mrow><mi mathvariant=\"normal\">p</mi><mo>,</mo><mi mathvariant=\"normal\">diff</mi></mrow></msub><mo>=</mo><mo form=\"prefix\" lspace=\"0\" rspace=\"0.04em\">−</mo><mi>q</mi><msub><mi>D</mi><mi mathvariant=\"normal\">p</mi></msub><mstyle displaystyle=\"true\"><mfrac><mrow><mi>d</mi><mi>p</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac></mstyle></mrow></math>",
         "sheet": "S1 §3"
        },
        {
         "math": "<math alttext=\"J_{n,diff}=+qD_n\\dfrac{dn}{dx}\"><mrow><msub><mi>J</mi><mrow><mi mathvariant=\"normal\">n</mi><mo>,</mo><mi mathvariant=\"normal\">diff</mi></mrow></msub><mo>=</mo><mo>+</mo><mi>q</mi><msub><mi>D</mi><mi mathvariant=\"normal\">n</mi></msub><mstyle displaystyle=\"true\"><mfrac><mrow><mi>d</mi><mi>n</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac></mstyle></mrow></math>",
         "sheet": "S1 §3"
        }
       ]
      },
      {
       "t": "ul",
       "items": [
        "D (cm²/s) is the diffusion coefficient",
        "Carriers move **down** the gradient. For holes the current points down the gradient; for electrons the current is opposite their motion, hence the sign difference",
        "Current density units: A/cm²"
       ]
      }
     ],
     "id": "t2-3"
    },
    {
     "title": "The Einstein relation",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"\\dfrac{D_n}{\\mu_n}=\\dfrac{D_p}{\\mu_p}=V_T=\\dfrac{kT}{q}\"><mrow><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>D</mi><mi mathvariant=\"normal\">n</mi></msub></mrow><mrow><msub><mi>μ</mi><mi mathvariant=\"normal\">n</mi></msub></mrow></mfrac></mstyle><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>D</mi><mi mathvariant=\"normal\">p</mi></msub></mrow><mrow><msub><mi>μ</mi><mi mathvariant=\"normal\">p</mi></msub></mrow></mfrac></mstyle><mo>=</mo><msub><mi>V</mi><mi mathvariant=\"normal\">T</mi></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><mi>k</mi><mi>T</mi></mrow><mrow><mi>q</mi></mrow></mfrac></mstyle></mrow></math>",
         "sheet": "S1 §3"
        },
        {
         "math": "<math alttext=\"V_T=25.9\\ \\text{mV at }300\\ \\text{K}\\ (25.0\\ \\text{mV at }290\\ \\text{K})\"><mrow><msub><mi>V</mi><mi mathvariant=\"normal\">T</mi></msub><mo>=</mo><mn>25.9</mn><mspace width=\"0.25em\"/><mtext>mV at </mtext><mn>300</mn><mspace width=\"0.25em\"/><mtext>K</mtext><mspace width=\"0.25em\"/><mo stretchy=\"false\">(</mo><mn>25.0</mn><mspace width=\"0.25em\"/><mtext>mV at </mtext><mn>290</mn><mspace width=\"0.25em\"/><mtext>K</mtext><mo stretchy=\"false\">)</mo></mrow></math>",
         "sheet": "S1 §3"
        }
       ]
      },
      {
       "t": "ul",
       "items": [
        "One scattering process limits **both** drift and diffusion, so the two are tied together",
        "VT is the **thermal voltage**: it appears again in the diode equation"
       ]
      },
      {
       "t": "call",
       "kind": "why",
       "text": "If a carrier moves easily in a field it also spreads easily."
      }
     ],
     "id": "t2-4"
    },
    {
     "title": "Resistivity of doped silicon",
     "kind": "example",
     "blocks": [
      {
       "t": "given",
       "items": [
        "n-type Si, n ≈ 10¹⁶ cm⁻³",
        "μn = 1360 cm²/V·s (sheet value)",
        "ignore holes"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Conductivity",
         "res": "σ = q·n·μn = 1.602×10⁻¹⁹ × 10¹⁶ × 1360 = 2.18 S/cm"
        },
        {
         "h": "2",
         "text": "Resistivity",
         "res": "ρ = 1/σ = 0.459 Ω·cm"
        },
        {
         "h": "3",
         "text": "Drift speed in E = 100 V/cm",
         "res": "vn = μnE = 1.36e+05 cm/s"
        }
       ]
      }
     ],
     "id": "t2-5"
    },
    {
     "title": "A diffusion current",
     "kind": "example",
     "blocks": [
      {
       "t": "given",
       "items": [
        "electron density falls from 10¹⁶ cm⁻³ to 0 over 1 μm",
        "Dn = 34 cm²/s"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Gradient",
         "res": "dn/dx = 10¹⁶/10⁻⁴ cm = 1.0e+20 cm⁻⁴"
        },
        {
         "h": "2",
         "text": "Current density",
         "res": "Jn = q·Dn·dn/dx = 1.602×10⁻¹⁹ × 34 × 1.0e+20 = 5.45e+02 A/cm²"
        },
        {
         "h": "3",
         "text": "Check",
         "res": "the profile decreases with x, so electrons diffuse toward +x and the electron-current sign follows the equation"
        }
       ]
      }
     ],
     "id": "t2-6"
    },
    {
     "title": "gr1-drift-001",
     "kind": "q",
     "ref": "gr1-drift-001",
     "blocks": [],
     "id": "t2-7"
    },
    {
     "title": "gr1-drift-004",
     "kind": "q",
     "ref": "gr1-drift-004",
     "blocks": [],
     "id": "t2-8"
    },
    {
     "title": "gr1-drift-006",
     "kind": "q",
     "ref": "gr1-drift-006",
     "blocks": [],
     "id": "t2-9"
    }
   ],
   "id": "t2-drift-and-diffusion"
  },
  {
   "title": "The pn junction in equilibrium",
   "lessons": "Lessons 2 and 3",
   "slides": [
    {
     "title": "Forming the junction",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "Join p-type and n-type material. Electrons **diffuse** to the p side, holes to the n side",
        "They recombine near the junction, leaving **fixed ions**: positive donors on the n side, negative acceptors on the p side",
        "This **depletion region** has almost no mobile carriers",
        "The ions create an electric field from **n to p** that pushes carriers back (**drift**)"
       ]
      },
      {
       "t": "fig",
       "src": "assets/study/resources/gr1/pn_junction.svg",
       "alt": "A pn junction showing p region, n region, depletion region with fixed ions and the built-in field"
      }
     ],
     "id": "t3-1"
    },
    {
     "title": "Equilibrium: drift balances diffusion",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "The region grows until the field-driven drift **exactly cancels** diffusion for each carrier type",
        "Net current at equilibrium is **zero**",
        "The potential step across the region is the **built-in barrier voltage V0**",
        "A voltmeter does not read V0: the contact potentials at the metal leads cancel it"
       ]
      },
      {
       "t": "call",
       "kind": "rule",
       "text": "Unbiased junction: no net current, no terminal voltage, but a real internal field."
      }
     ],
     "id": "t3-2"
    },
    {
     "title": "Barrier voltage",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"V_0=V_T\\ln\\left(\\dfrac{N_AN_D}{n_i^2}\\right)\"><mrow><msub><mi>V</mi><mn>0</mn></msub><mo>=</mo><msub><mi>V</mi><mi mathvariant=\"normal\">T</mi></msub><mi>ln</mi><mrow><mo stretchy=\"true\">(</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>N</mi><mi mathvariant=\"normal\">A</mi></msub><msub><mi>N</mi><mi mathvariant=\"normal\">D</mi></msub></mrow><mrow><msubsup><mi>n</mi><mi mathvariant=\"normal\">i</mi><mn>2</mn></msubsup></mrow></mfrac></mstyle><mo stretchy=\"true\">)</mo></mrow></mrow></math>",
         "sheet": "S1 §4"
        }
       ]
      },
      {
       "t": "ul",
       "items": [
        "Heavier doping raises V0; for silicon it is a few tenths of a volt",
        "VT = kT/q depends on temperature, ni too"
       ]
      },
      {
       "t": "call",
       "kind": "watch",
       "text": "V0 is not the 0.7 V forward drop, although both are of the same size."
      }
     ],
     "id": "t3-3"
    },
    {
     "title": "Depletion width",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"W=\\sqrt{\\dfrac{2\\varepsilon_s}{q}\\left(\\dfrac{1}{N_A}+\\dfrac{1}{N_D}\\right)(V_0+V_R)}\"><mrow><mi>W</mi><mo>=</mo><msqrt><mrow><mstyle displaystyle=\"true\"><mfrac><mrow><mn>2</mn><msub><mi>ε</mi><mi mathvariant=\"normal\">s</mi></msub></mrow><mrow><mi>q</mi></mrow></mfrac></mstyle><mrow><mo stretchy=\"true\">(</mo><mstyle displaystyle=\"true\"><mfrac><mrow><mn>1</mn></mrow><mrow><msub><mi>N</mi><mi mathvariant=\"normal\">A</mi></msub></mrow></mfrac></mstyle><mo>+</mo><mstyle displaystyle=\"true\"><mfrac><mrow><mn>1</mn></mrow><mrow><msub><mi>N</mi><mi mathvariant=\"normal\">D</mi></msub></mrow></mfrac></mstyle><mo stretchy=\"true\">)</mo></mrow><mo stretchy=\"false\">(</mo><msub><mi>V</mi><mn>0</mn></msub><mo>+</mo><msub><mi>V</mi><mi mathvariant=\"normal\">R</mi></msub><mo stretchy=\"false\">)</mo></mrow></msqrt></mrow></math>",
         "sheet": "S1 §4"
        },
        {
         "math": "<math alttext=\"\\varepsilon_s=11.7\\,\\varepsilon_0=1.04\\times10^{-12}\\ \\text{F/cm}\"><mrow><msub><mi>ε</mi><mi mathvariant=\"normal\">s</mi></msub><mo>=</mo><mn>11.7</mn><mspace width=\"0.17em\"/><msub><mi>ε</mi><mn>0</mn></msub><mo>=</mo><mn>1.04</mn><mo>×</mo><msup><mn>10</mn><mrow><mo form=\"prefix\" lspace=\"0\" rspace=\"0.04em\">−</mo><mn>12</mn></mrow></msup><mspace width=\"0.25em\"/><mtext>F/cm</mtext></mrow></math>",
         "sheet": "S1 §4"
        },
        {
         "math": "<math alttext=\"x_n=W\\dfrac{N_A}{N_A+N_D},\\quad x_p=W\\dfrac{N_D}{N_A+N_D}\"><mrow><msub><mi>x</mi><mi mathvariant=\"normal\">n</mi></msub><mo>=</mo><mi>W</mi><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>N</mi><mi mathvariant=\"normal\">A</mi></msub></mrow><mrow><msub><mi>N</mi><mi mathvariant=\"normal\">A</mi></msub><mo>+</mo><msub><mi>N</mi><mi mathvariant=\"normal\">D</mi></msub></mrow></mfrac></mstyle><mo>,</mo><mspace width=\"1em\"/><msub><mi>x</mi><mi mathvariant=\"normal\">p</mi></msub><mo>=</mo><mi>W</mi><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>N</mi><mi mathvariant=\"normal\">D</mi></msub></mrow><mrow><msub><mi>N</mi><mi mathvariant=\"normal\">A</mi></msub><mo>+</mo><msub><mi>N</mi><mi mathvariant=\"normal\">D</mi></msub></mrow></mfrac></mstyle></mrow></math>",
         "sheet": "S1 §4"
        }
       ]
      },
      {
       "t": "ul",
       "items": [
        "Charge neutrality: q·A·xp·NA = q·A·xn·ND, so **xn/xp = NA/ND**",
        "The region extends **farther into the lightly doped side**",
        "Forward bias: replace V0 + VR by V0 − VF @S1 §4"
       ]
      }
     ],
     "id": "t3-4"
    },
    {
     "title": "Barrier and width of a pn junction",
     "kind": "example",
     "blocks": [
      {
       "t": "given",
       "items": [
        "NA = 10¹⁷ cm⁻³",
        "ND = 10¹⁶ cm⁻³",
        "T = 300 K (VT = 25.9 mV)",
        "ni = 1.5×10¹⁰ cm⁻³"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Barrier voltage",
         "res": "V0 = VT ln(NA·ND/ni²) = 0.0259 × ln(4.44e+12) = 0.754 V"
        },
        {
         "h": "2",
         "text": "Total width at VR = 0",
         "res": "W = √[2·1.04×10⁻¹²/1.602×10⁻¹⁹ × (1/NA + 1/ND) × V0] = 0.328 μm"
        },
        {
         "h": "3",
         "text": "Split",
         "res": "xn = 0.298 μm (n side, lighter doping), xp = 0.030 μm"
        },
        {
         "h": "4",
         "text": "Check",
         "res": "xn/xp = 10.0 = NA/ND = 10"
        }
       ]
      }
     ],
     "id": "t3-5"
    },
    {
     "title": "gr1-pn-001",
     "kind": "q",
     "ref": "gr1-pn-001",
     "blocks": [],
     "id": "t3-6"
    },
    {
     "title": "gr1-pn-003",
     "kind": "q",
     "ref": "gr1-pn-003",
     "blocks": [],
     "id": "t3-7"
    },
    {
     "title": "gr1-pn-005",
     "kind": "q",
     "ref": "gr1-pn-005",
     "blocks": [],
     "id": "t3-8"
    },
    {
     "title": "gr1-pn-007",
     "kind": "q",
     "ref": "gr1-pn-007",
     "blocks": [],
     "id": "t3-9"
    }
   ],
   "id": "t3-the-pn-junction-in-equilibrium"
  },
  {
   "title": "Junction bias and the Shockley equation",
   "lessons": "Lesson 3",
   "slides": [
    {
     "title": "Forward and reverse bias",
     "kind": "learn",
     "blocks": [
      {
       "t": "tbl",
       "head": [
        "Bias",
        "Barrier",
        "Depletion region",
        "Current"
       ],
       "rows": [
        [
         "Forward (p more positive)",
         "V0 − VF (lower)",
         "narrower",
         "large, grows exponentially"
        ],
        [
         "Reverse (p more negative)",
         "V0 + VR (higher)",
         "wider",
         "tiny, about −IS"
        ]
       ]
      },
      {
       "t": "ul",
       "items": [
        "**Forward**: majority carriers cross the lowered barrier and become **minority carriers** on the other side (injection), then diffuse and recombine",
        "**Reverse**: only thermally generated minority carriers flow, so the current is the small **reverse saturation current**"
       ]
      },
      {
       "t": "call",
       "kind": "tip",
       "text": "Bias changes the barrier, and the barrier controls the current.  @S1 §4"
      }
     ],
     "id": "t4-1"
    },
    {
     "title": "The Shockley equation",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"i_D=I_S\\left(e^{v_D/(nV_T)}-1\\right)\"><mrow><msub><mi>i</mi><mi mathvariant=\"normal\">D</mi></msub><mo>=</mo><msub><mi>I</mi><mi mathvariant=\"normal\">S</mi></msub><mrow><mo stretchy=\"true\">(</mo><msup><mi>e</mi><mrow><msub><mi mathvariant=\"normal\">v</mi><mi mathvariant=\"normal\">D</mi></msub><mo lspace=\"0.05em\" rspace=\"0.05em\">/</mo><mo stretchy=\"false\">(</mo><msub><mi mathvariant=\"normal\">nV</mi><mi mathvariant=\"normal\">T</mi></msub><mo stretchy=\"false\">)</mo></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\">)</mo></mrow></mrow></math>",
         "sheet": "S1 §4"
        },
        {
         "math": "<math alttext=\"I_S=qA\\,n_i^{2}\\left(\\dfrac{D_p}{L_pN_D}+\\dfrac{D_n}{L_nN_A}\\right)\"><mrow><msub><mi>I</mi><mi mathvariant=\"normal\">S</mi></msub><mo>=</mo><mi>q</mi><mi>A</mi><mspace width=\"0.17em\"/><msubsup><mi>n</mi><mi mathvariant=\"normal\">i</mi><mrow><mn>2</mn></mrow></msubsup><mrow><mo stretchy=\"true\">(</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>D</mi><mi mathvariant=\"normal\">p</mi></msub></mrow><mrow><msub><mi>L</mi><mi mathvariant=\"normal\">p</mi></msub><msub><mi>N</mi><mi mathvariant=\"normal\">D</mi></msub></mrow></mfrac></mstyle><mo>+</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>D</mi><mi mathvariant=\"normal\">n</mi></msub></mrow><mrow><msub><mi>L</mi><mi mathvariant=\"normal\">n</mi></msub><msub><mi>N</mi><mi mathvariant=\"normal\">A</mi></msub></mrow></mfrac></mstyle><mo stretchy=\"true\">)</mo></mrow></mrow></math>",
         "sheet": "S1 §4"
        }
       ]
      },
      {
       "t": "ul",
       "items": [
        "**IS** is the reverse saturation current: it grows with junction **area** and with **ni²** (so strongly with temperature)",
        "**n** is the ideality factor, 1 ≤ n ≤ 2 (1 for ideal diffusion) @S1 §4",
        "**VT = kT/q** is 25.9 mV at 300 K",
        "For forward bias with vD ≫ nVT: iD ≈ IS·e^(vD/nVT) @S1 §7"
       ]
      }
     ],
     "id": "t4-2"
    },
    {
     "title": "Reading the curve",
     "kind": "learn",
     "blocks": [
      {
       "t": "fig",
       "src": "assets/study/resources/gr1/diode_iv.svg",
       "alt": "Diode I-V curve with forward conduction and reverse breakdown"
      },
      {
       "t": "ul",
       "items": [
        "Below about 0.5 V the forward current is negligible; above it the current climbs steeply",
        "In reverse the current stays near −IS until **breakdown**",
        "A decade of current needs only n·VT·ln10 ≈ 60 mV·n more voltage: the diode voltage is nearly constant (0.6 to 0.8 V) over a huge current range"
       ]
      },
      {
       "t": "call",
       "kind": "watch",
       "text": "IS depends on temperature; do not treat it as fixed when temperature changes."
      }
     ],
     "id": "t4-3"
    },
    {
     "title": "Current at a given voltage",
     "kind": "example",
     "blocks": [
      {
       "t": "given",
       "items": [
        "IS = 10⁻¹⁴ A",
        "n = 1",
        "T = 300 K (VT = 25.9 mV)",
        "vD = 0.65 V"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Exponent",
         "res": "vD/(nVT) = 0.65/0.0259 = 25.10"
        },
        {
         "h": "2",
         "text": "Current",
         "res": "iD = IS(e^25.1 − 1) = 0.79 mA"
        },
        {
         "h": "3",
         "text": "Add one decade of current",
         "res": "ΔvD = nVT ln10 = 59.6 mV, so at 0.65 V + 59.6 mV the current is 7.9 mA (10×)"
        }
       ]
      }
     ],
     "id": "t4-4"
    },
    {
     "title": "gr1-bias-001",
     "kind": "q",
     "ref": "gr1-bias-001",
     "blocks": [],
     "id": "t4-5"
    },
    {
     "title": "gr1-bias-003",
     "kind": "q",
     "ref": "gr1-bias-003",
     "blocks": [],
     "id": "t4-6"
    },
    {
     "title": "gr1-bias-005",
     "kind": "q",
     "ref": "gr1-bias-005",
     "blocks": [],
     "id": "t4-7"
    }
   ],
   "id": "t4-junction-bias-and-the-shockley"
  },
  {
   "title": "Breakdown, Zener diodes and junction capacitance",
   "lessons": "Lessons 3, 5 and 6",
   "slides": [
    {
     "title": "Reverse breakdown",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "At the **breakdown voltage** the reverse current rises very sharply while the voltage stays almost constant",
        "Two mechanisms: **avalanche** (fast carriers ionize atoms and multiply) and **Zener** (a strong field tears electrons from bonds)",
        "Breakdown is **not destructive** if the external circuit limits the power"
       ]
      },
      {
       "t": "fig",
       "src": "assets/study/resources/gr1/diode_iv.svg",
       "alt": "Diode I-V curve with reverse breakdown at VZ"
      }
     ],
     "id": "t5-1"
    },
    {
     "title": "The Zener diode",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "A **Zener diode** is built to operate in breakdown, giving a nearly constant voltage VZ",
        "Model: a source VZ0 in series with a small resistance rz"
       ]
      },
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"V_Z=V_{Z0}+I_Zr_z\"><mrow><msub><mi>V</mi><mi mathvariant=\"normal\">Z</mi></msub><mo>=</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">Z</mi><mn>0</mn></mrow></msub><mo>+</mo><msub><mi>I</mi><mi mathvariant=\"normal\">Z</mi></msub><msub><mi>r</mi><mi mathvariant=\"normal\">z</mi></msub></mrow></math>",
         "sheet": "S1 §8"
        },
        {
         "math": "<math alttext=\"V_{Z0}=V_Z-r_zI_Z\"><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">Z</mi><mn>0</mn></mrow></msub><mo>=</mo><msub><mi>V</mi><mi mathvariant=\"normal\">Z</mi></msub><mo>−</mo><msub><mi>r</mi><mi mathvariant=\"normal\">z</mi></msub><msub><mi>I</mi><mi mathvariant=\"normal\">Z</mi></msub></mrow></math>",
         "sheet": "S1 §8"
        },
        {
         "math": "<math alttext=\"P_Z=I_ZV_Z=I_Z(V_{Z0}+I_Zr_z)\"><mrow><msub><mi>P</mi><mi mathvariant=\"normal\">Z</mi></msub><mo>=</mo><msub><mi>I</mi><mi mathvariant=\"normal\">Z</mi></msub><msub><mi>V</mi><mi mathvariant=\"normal\">Z</mi></msub><mo>=</mo><msub><mi>I</mi><mi mathvariant=\"normal\">Z</mi></msub><mo stretchy=\"false\">(</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">Z</mi><mn>0</mn></mrow></msub><mo>+</mo><msub><mi>I</mi><mi mathvariant=\"normal\">Z</mi></msub><msub><mi>r</mi><mi mathvariant=\"normal\">z</mi></msub><mo stretchy=\"false\">)</mo></mrow></math>",
         "sheet": "S1 §8"
        }
       ]
      },
      {
       "t": "call",
       "kind": "rule",
       "text": "Small rz means good regulation; keep IZ above the knee and PZ below the rating."
      }
     ],
     "id": "t5-2"
    },
    {
     "title": "Junction capacitance",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "The two edges of the depletion region are like **plates**; the depleted layer is the dielectric",
        "Reverse bias **widens** the region, so the capacitance **falls**"
       ]
      },
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"C_j=\\dfrac{C_{j0}}{\\left(1+\\dfrac{V_R}{V_0}\\right)^{m}}\"><mrow><msub><mi>C</mi><mi mathvariant=\"normal\">j</mi></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>C</mi><mrow><mi mathvariant=\"normal\">j</mi><mn>0</mn></mrow></msub></mrow><mrow><msup><mrow><mo stretchy=\"true\">(</mo><mn>1</mn><mo>+</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>V</mi><mi mathvariant=\"normal\">R</mi></msub></mrow><mrow><msub><mi>V</mi><mn>0</mn></msub></mrow></mfrac></mstyle><mo stretchy=\"true\">)</mo></mrow><mrow><mi mathvariant=\"normal\">m</mi></mrow></msup></mrow></mfrac></mstyle></mrow></math>",
         "sheet": "S1 §6"
        },
        {
         "math": "<math alttext=\"C_{j0}=A\\sqrt{\\dfrac{\\varepsilon_sq}{2}\\dfrac{N_AN_D}{N_A+N_D}\\dfrac{1}{V_0}}\"><mrow><msub><mi>C</mi><mrow><mi mathvariant=\"normal\">j</mi><mn>0</mn></mrow></msub><mo>=</mo><mi>A</mi><msqrt><mrow><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>ε</mi><mi mathvariant=\"normal\">s</mi></msub><mi>q</mi></mrow><mrow><mn>2</mn></mrow></mfrac></mstyle><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>N</mi><mi mathvariant=\"normal\">A</mi></msub><msub><mi>N</mi><mi mathvariant=\"normal\">D</mi></msub></mrow><mrow><msub><mi>N</mi><mi mathvariant=\"normal\">A</mi></msub><mo>+</mo><msub><mi>N</mi><mi mathvariant=\"normal\">D</mi></msub></mrow></mfrac></mstyle><mstyle displaystyle=\"true\"><mfrac><mrow><mn>1</mn></mrow><mrow><msub><mi>V</mi><mn>0</mn></msub></mrow></mfrac></mstyle></mrow></msqrt></mrow></math>",
         "sheet": "S1 §6"
        }
       ]
      },
      {
       "t": "ul",
       "items": [
        "m is the **grading coefficient**: 1/2 for an abrupt junction, 1/3 for a linearly graded one @S1 §6",
        "Cj0 is the capacitance at zero bias"
       ]
      }
     ],
     "id": "t5-3"
    },
    {
     "title": "Capacitance and Zener voltage",
     "kind": "example",
     "blocks": [
      {
       "t": "given",
       "items": [
        "Cj0 = 2 pF",
        "V0 = 0.7 V",
        "m = 1/2",
        "VR = 3.3 V",
        "VZ0 = 6.7 V",
        "rz = 10 Ω",
        "IZ = 10 mA"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Capacitance",
         "res": "Cj = 2 pF/(1 + 3.3/0.7)^0.5 = 0.84 pF"
        },
        {
         "h": "2",
         "text": "Zener voltage",
         "res": "VZ = VZ0 + IZ·rz = 6.7 + 0.010 × 10 = 6.80 V"
        },
        {
         "h": "3",
         "text": "Zener power",
         "res": "PZ = IZ·VZ = 68 mW"
        }
       ]
      }
     ],
     "id": "t5-4"
    },
    {
     "title": "gr1-brk-001",
     "kind": "q",
     "ref": "gr1-brk-001",
     "blocks": [],
     "id": "t5-5"
    },
    {
     "title": "gr1-brk-004",
     "kind": "q",
     "ref": "gr1-brk-004",
     "blocks": [],
     "id": "t5-6"
    },
    {
     "title": "gr1-brk-005",
     "kind": "q",
     "ref": "gr1-brk-005",
     "blocks": [],
     "id": "t5-7"
    }
   ],
   "id": "t5-breakdown-zener-diodes-and-jun"
  },
  {
   "title": "Ideal diode analysis",
   "lessons": "Lesson 4",
   "slides": [
    {
     "title": "The ideal diode",
     "kind": "learn",
     "blocks": [
      {
       "t": "fig",
       "src": "assets/study/resources/gr1/diode_ckt.svg",
       "alt": "A source, a resistor and a diode in series"
      },
      {
       "t": "ul",
       "items": [
        "A one-way **switch**: conducts from **anode to cathode**, blocks the other way",
        "**ON**: a short circuit, vD = 0 V, current iD > 0",
        "**OFF**: an open circuit, iD = 0 A, vD < 0 V"
       ]
      },
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"\\text{ON: }v_D=0,\\ i_D&gt;0\\qquad\\text{OFF: }i_D=0,\\ v_D&lt;0\"><mrow><mtext>ON: </mtext><msub><mi>v</mi><mi mathvariant=\"normal\">D</mi></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.25em\"/><msub><mi>i</mi><mi mathvariant=\"normal\">D</mi></msub><mo>&gt;</mo><mn>0</mn><mspace width=\"2em\"/><mtext>OFF: </mtext><msub><mi>i</mi><mi mathvariant=\"normal\">D</mi></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.25em\"/><msub><mi>v</mi><mi mathvariant=\"normal\">D</mi></msub><mo>&lt;</mo><mn>0</mn></mrow></math>",
         "sheet": "S1 §7"
        }
       ]
      }
     ],
     "id": "t6-1"
    },
    {
     "title": "Assume, analyze, confirm",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "**Assume** a state for each diode (on or off)",
        "**Replace** the diode by a short (on) or an open (off) and **solve** the circuit",
        "**Confirm**: ON needs iD > 0; OFF needs vD < 0",
        "If a check fails, **switch** the assumption and repeat"
       ]
      },
      {
       "t": "call",
       "kind": "watch",
       "text": "Never skip the confirmation: a wrong state gives a wrong circuit."
      }
     ],
     "id": "t6-2"
    },
    {
     "title": "Forward-biased: diode ON",
     "kind": "example",
     "blocks": [
      {
       "t": "given",
       "items": [
        "VS = 5 V (anode side positive)",
        "R = 1 kΩ",
        "ideal diode"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Assume",
         "res": "diode ON, a short with vD = 0"
        },
        {
         "h": "2",
         "text": "Solve",
         "res": "iD = VS/R = 5/1000 = 5 mA"
        },
        {
         "h": "3",
         "text": "Confirm",
         "res": "iD > 0, consistent"
        }
       ]
      }
     ],
     "id": "t6-3"
    },
    {
     "title": "Reversed source: diode OFF",
     "kind": "example",
     "blocks": [
      {
       "t": "given",
       "items": [
        "VS = 5 V with the diode reversed (cathode side positive)",
        "R = 1 kΩ"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Assume",
         "res": "diode OFF, an open circuit: iD = 0"
        },
        {
         "h": "2",
         "text": "Voltage across the open diode",
         "res": "no current, so no drop across R: vD = −5 V"
        },
        {
         "h": "3",
         "text": "Confirm",
         "res": "vD < 0, consistent: the diode is reverse biased"
        }
       ]
      }
     ],
     "id": "t6-4"
    },
    {
     "title": "Applications",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "**Rectifier**: passes one polarity of a signal",
        "**Limiter**: a diode (or Zener) turns on at a level and **clamps** the voltage",
        "**Clamper** and **Zener protection**: shift or cap a waveform to protect later stages"
       ]
      },
      {
       "t": "call",
       "kind": "tip",
       "text": "Each application is a switch that turns on at a particular voltage."
      }
     ],
     "id": "t6-5"
    },
    {
     "title": "gr1-ideal-001",
     "kind": "q",
     "ref": "gr1-ideal-001",
     "blocks": [],
     "id": "t6-6"
    },
    {
     "title": "gr1-ideal-003",
     "kind": "q",
     "ref": "gr1-ideal-003",
     "blocks": [],
     "id": "t6-7"
    },
    {
     "title": "gr1-ideal-007",
     "kind": "q",
     "ref": "gr1-ideal-007",
     "blocks": [],
     "id": "t6-8"
    },
    {
     "title": "gr1-wk-001",
     "kind": "workout",
     "ref": "gr1-wk-001",
     "blocks": [],
     "id": "t6-9"
    }
   ],
   "id": "t6-ideal-diode-analysis"
  },
  {
   "title": "Diode models and iterative solution",
   "lessons": "Lesson 5",
   "slides": [
    {
     "title": "Three models",
     "kind": "learn",
     "blocks": [
      {
       "t": "tbl",
       "head": [
        "Model",
        "ON",
        "OFF",
        "Use"
       ],
       "rows": [
        [
         "Ideal",
         "short, vD = 0",
         "open",
         "quick logic"
        ],
        [
         "Constant drop (CVD)",
         "0.7 V source",
         "open",
         "hand estimates"
        ],
        [
         "Shockley",
         "iD = IS e^(vD/nVT)",
         "iD ≈ −IS",
         "accuracy, bias"
        ]
       ]
      },
      {
       "t": "call",
       "kind": "tip",
       "text": "Each model keeps more of the real diode. Pick the simplest one that is accurate enough.  @S1 §7"
      }
     ],
     "id": "t7-1"
    },
    {
     "title": "Constant voltage drop",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "**ON**: replace the diode by a 0.7 V source (anode positive); confirm iD > 0",
        "**OFF**: open circuit; confirm vD < 0.7 V"
       ]
      },
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"\\text{ON: }v_D=0.7\\ \\text{V},\\ i_D&gt;0\\qquad\\text{OFF: }i_D=0,\\ v_D&lt;0.7\\ \\text{V}\"><mrow><mtext>ON: </mtext><msub><mi>v</mi><mi mathvariant=\"normal\">D</mi></msub><mo>=</mo><mn>0.7</mn><mspace width=\"0.25em\"/><mtext>V</mtext><mo>,</mo><mspace width=\"0.25em\"/><msub><mi>i</mi><mi mathvariant=\"normal\">D</mi></msub><mo>&gt;</mo><mn>0</mn><mspace width=\"2em\"/><mtext>OFF: </mtext><msub><mi>i</mi><mi mathvariant=\"normal\">D</mi></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.25em\"/><msub><mi>v</mi><mi mathvariant=\"normal\">D</mi></msub><mo>&lt;</mo><mn>0.7</mn><mspace width=\"0.25em\"/><mtext>V</mtext></mrow></math>",
         "sheet": "S1 §7"
        }
       ]
      },
      {
       "t": "call",
       "kind": "why",
       "text": "The ideal model ignores the forward drop; CVD adds it and keeps the arithmetic simple."
      }
     ],
     "id": "t7-2"
    },
    {
     "title": "CVD refinement of the 5 V, 1 kΩ circuit",
     "kind": "example",
     "blocks": [
      {
       "t": "given",
       "items": [
        "VS = 5 V",
        "R = 1 kΩ",
        "CVD model, VD = 0.7 V"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Assume",
         "res": "diode ON, a 0.7 V source"
        },
        {
         "h": "2",
         "text": "KVL",
         "res": "VS − iD·R − 0.7 = 0, so iD = (5 − 0.7)/1000 = 4.3 mA"
        },
        {
         "h": "3",
         "text": "Confirm",
         "res": "iD = 4.3 mA > 0, consistent (the ideal model gave 5 mA)"
        }
       ]
      }
     ],
     "id": "t7-3"
    },
    {
     "title": "Why iterate?",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "The loop equation is **linear**; the Shockley diode is **exponential**",
        "Together they have no simple closed form, so we solve by **iteration** (Gauss-Seidel)",
        "Each pass uses one equation to improve the guess from the other"
       ]
      },
      {
       "t": "fig",
       "src": "assets/study/resources/gr1/diode_ckt.svg",
       "alt": "Diode with series resistor and source"
      }
     ],
     "id": "t7-4"
    },
    {
     "title": "Gauss-Seidel update equations",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"\\text{Load line: } I_{D2}=\\dfrac{V_{th}-kV_{D1}}{R_{th}}\"><mrow><mtext>Load line: </mtext><msub><mi>I</mi><mrow><mi mathvariant=\"normal\">D</mi><mn>2</mn></mrow></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">th</mi></mrow></msub><mo>−</mo><mi>k</mi><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">D</mi><mn>1</mn></mrow></msub></mrow><mrow><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">th</mi></mrow></msub></mrow></mfrac></mstyle></mrow></math>",
         "sheet": "S1 §7"
        },
        {
         "math": "<math alttext=\"\\text{Shockley: } V_{D2}=V_{D1}+nV_T\\ln\\dfrac{I_{D2}}{I_{D1}}\"><mrow><mtext>Shockley: </mtext><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">D</mi><mn>2</mn></mrow></msub><mo>=</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">D</mi><mn>1</mn></mrow></msub><mo>+</mo><mi>n</mi><msub><mi>V</mi><mi mathvariant=\"normal\">T</mi></msub><mi>ln</mi><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>I</mi><mrow><mi mathvariant=\"normal\">D</mi><mn>2</mn></mrow></msub></mrow><mrow><msub><mi>I</mi><mrow><mi mathvariant=\"normal\">D</mi><mn>1</mn></mrow></msub></mrow></mfrac></mstyle></mrow></math>",
         "sheet": "S1 §7"
        }
       ]
      },
      {
       "t": "ul",
       "items": [
        "k is the number of identical diodes in series; Vth and Rth are the Thevenin values seen by the diode",
        "(ID1, VD1) is the **previous point on the diode curve**; start from a known point (for example from the CVD answer)",
        "Use the new VD in the load line for the next pass and repeat until the change in VD is within your tolerance"
       ]
      },
      {
       "t": "call",
       "kind": "watch",
       "text": "A negative current during iteration means the diode-on assumption is wrong."
      }
     ],
     "id": "t7-5"
    },
    {
     "title": "Gauss-Seidel for the 5 V, 1 kΩ circuit",
     "kind": "example",
     "blocks": [
      {
       "t": "given",
       "items": [
        "Vth = 5 V, Rth = 1 kΩ, k = 1, n = 1",
        "VT = 25.9 mV",
        "a known diode point: ID1 = 1 mA at VD1 = 0.7 V"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Pass 1, load line",
         "res": "ID2 = (5 − 0.7000)/1000 = 4.300 mA"
        },
        {
         "h": "2",
         "text": "Pass 1, diode",
         "res": "VD2 = 0.7 + 0.0259 ln(4.300/1) = 0.7378 V"
        },
        {
         "h": "3",
         "text": "Pass 2",
         "res": "ID = (5 − 0.7378)/1000 = 4.262 mA, VD = 0.7378 + 0.0259 ln(4.262/4.300) = 0.7375 V"
        },
        {
         "h": "4",
         "text": "Pass 3",
         "res": "ID = 4.262 mA, VD = 0.7376 V"
        },
        {
         "h": "5",
         "text": "Converged",
         "res": "ID ≈ 4.262 mA, VD ≈ 0.7376 V: close to the CVD estimate (4.3 mA, 0.7 V)"
        }
       ]
      }
     ],
     "id": "t7-6"
    },
    {
     "title": "gr1-model-001",
     "kind": "q",
     "ref": "gr1-model-001",
     "blocks": [],
     "id": "t7-7"
    },
    {
     "title": "gr1-model-004",
     "kind": "q",
     "ref": "gr1-model-004",
     "blocks": [],
     "id": "t7-8"
    },
    {
     "title": "gr1-model-005",
     "kind": "q",
     "ref": "gr1-model-005",
     "blocks": [],
     "id": "t7-9"
    },
    {
     "title": "gr1-wk-002",
     "kind": "workout",
     "ref": "gr1-wk-002",
     "blocks": [],
     "id": "t7-10"
    }
   ],
   "id": "t7-diode-models-and-iterative-sol"
  },
  {
   "title": "Small-signal diode model and regulation",
   "lessons": "Lesson 6",
   "slides": [
    {
     "title": "Why linearize",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "A signal on top of a bias: **vD = VD + vd**, **iD = ID + id**",
        "For a **small** signal the exponential curve is nearly a straight line at the Q-point",
        "The slope of that line gives a **resistance**: the dynamic resistance rd"
       ]
      },
      {
       "t": "tbl",
       "head": [
        "Symbol",
        "Meaning"
       ],
       "rows": [
        [
         "VD, ID",
         "DC bias (capital, capital)"
        ],
        [
         "vd, id",
         "small signal (lowercase, lowercase)"
        ],
        [
         "vD, iD",
         "total instantaneous (lowercase, capital)"
        ]
       ]
      }
     ],
     "id": "t8-1"
    },
    {
     "title": "Dynamic resistance",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"i_D=I_De^{v_d/(nV_T)}\\approx I_D+\\dfrac{v_d}{r_d}\"><mrow><msub><mi>i</mi><mi mathvariant=\"normal\">D</mi></msub><mo>=</mo><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub><msup><mi>e</mi><mrow><msub><mi mathvariant=\"normal\">v</mi><mi mathvariant=\"normal\">d</mi></msub><mo lspace=\"0.05em\" rspace=\"0.05em\">/</mo><mo stretchy=\"false\">(</mo><msub><mi mathvariant=\"normal\">nV</mi><mi mathvariant=\"normal\">T</mi></msub><mo stretchy=\"false\">)</mo></mrow></msup><mo>≈</mo><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub><mo>+</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>v</mi><mi mathvariant=\"normal\">d</mi></msub></mrow><mrow><msub><mi>r</mi><mi mathvariant=\"normal\">d</mi></msub></mrow></mfrac></mstyle></mrow></math>",
         "sheet": "S1 §8"
        },
        {
         "math": "<math alttext=\"r_d=\\dfrac{nV_T}{I_D}\"><mrow><msub><mi>r</mi><mi mathvariant=\"normal\">d</mi></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><mi>n</mi><msub><mi>V</mi><mi mathvariant=\"normal\">T</mi></msub></mrow><mrow><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub></mrow></mfrac></mstyle></mrow></math>",
         "sheet": "S1 §8"
        }
       ]
      },
      {
       "t": "ul",
       "items": [
        "rd **falls** as the bias current rises",
        "Valid only for small signals: **vd ≤ 5 mV × n** @S1 §8",
        "Order: **DC first** (find ID), then the signal circuit"
       ]
      },
      {
       "t": "call",
       "kind": "watch",
       "text": "rd depends on ID: a different bias gives a different rd."
      }
     ],
     "id": "t8-2"
    },
    {
     "title": "The small-signal circuit",
     "kind": "learn",
     "blocks": [
      {
       "t": "fig",
       "src": "assets/study/resources/gr1/ss_diode.svg",
       "alt": "Signal source, series resistor and the diode replaced by rd"
      },
      {
       "t": "ul",
       "items": [
        "Turn off DC sources for the signal: a DC **voltage** source becomes a **short**, a DC **current** source an **open**",
        "Replace the diode by **rd** and solve the linear circuit"
       ]
      }
     ],
     "id": "t8-3"
    },
    {
     "title": "Signal across the diode",
     "kind": "example",
     "blocks": [
      {
       "t": "given",
       "items": [
        "ID = 4.3 mA (from the CVD example)",
        "n = 1, VT = 25.9 mV",
        "signal vs = 2 mV through R = 1 kΩ"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Dynamic resistance",
         "res": "rd = nVT/ID = 0.0259/0.0043 = 6.02 Ω"
        },
        {
         "h": "2",
         "text": "Divider",
         "res": "vd = vs·rd/(R + rd) = 2 mV × 6.02/1006 = 0.012 mV"
        },
        {
         "h": "3",
         "text": "Validity",
         "res": "vd = 0.012 mV ≤ 5 mV, so the small-signal model holds"
        }
       ]
      }
     ],
     "id": "t8-4"
    },
    {
     "title": "Voltage regulation",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"\\text{Line regulation}=\\dfrac{\\Delta V_{out}}{\\Delta V_{in}}\"><mrow><mtext>Line regulation</mtext><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">out</mi></mrow></msub></mrow><mrow><mi mathvariant=\"normal\">Δ</mi><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">in</mi></mrow></msub></mrow></mfrac></mstyle></mrow></math>",
         "sheet": "S1 §8"
        }
       ]
      },
      {
       "t": "ul",
       "items": [
        "A **regulator** holds the output nearly constant when the input or load changes",
        "A **diode string** of k forward diodes holds about k × 0.7 V; its small-signal resistance k·rd is tiny",
        "A **Zener regulator** uses the breakdown region: the series resistor R and the small rz form a divider for supply changes"
       ]
      }
     ],
     "id": "t8-5"
    },
    {
     "title": "Zener regulator with a load",
     "kind": "example",
     "blocks": [
      {
       "t": "given",
       "items": [
        "Vin = 15 V",
        "R = 500 Ω",
        "RL = 1 kΩ",
        "VZ0 = 6.7 V, rz = 10 Ω"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Assume",
         "res": "Zener in breakdown: Vo = VZ0 + IZ·rz"
        },
        {
         "h": "2",
         "text": "KCL at the output",
         "res": "(15 − Vo)/500 = IZ + Vo/1000 gives IZ = 9.61 mA"
        },
        {
         "h": "3",
         "text": "Output",
         "res": "Vo = 6.7 + 0.00961 × 10 = 6.796 V"
        },
        {
         "h": "4",
         "text": "Confirm",
         "res": "IZ > 0, so breakdown is consistent"
        },
        {
         "h": "5",
         "text": "Line regulation",
         "res": "(rz∥RL)/(R + rz∥RL) = 9.90/509.9 = 0.0194: about 1.9 % of a supply change reaches the output"
        }
       ]
      }
     ],
     "id": "t8-6"
    },
    {
     "title": "gr1-ss-001",
     "kind": "q",
     "ref": "gr1-ss-001",
     "blocks": [],
     "id": "t8-7"
    },
    {
     "title": "gr1-ss-003",
     "kind": "q",
     "ref": "gr1-ss-003",
     "blocks": [],
     "id": "t8-8"
    },
    {
     "title": "gr1-ss-004",
     "kind": "q",
     "ref": "gr1-ss-004",
     "blocks": [],
     "id": "t8-9"
    },
    {
     "title": "gr1-ss-009",
     "kind": "q",
     "ref": "gr1-ss-009",
     "blocks": [],
     "id": "t8-10"
    },
    {
     "title": "gr1-wk-003",
     "kind": "workout",
     "ref": "gr1-wk-003",
     "blocks": [],
     "id": "t8-11"
    },
    {
     "title": "gr1-wk-004",
     "kind": "workout",
     "ref": "gr1-wk-004",
     "blocks": [],
     "id": "t8-12"
    }
   ],
   "id": "t8-small-signal-diode-model-and-r"
  },
  {
   "title": "MOSFET structure and channel formation",
   "lessons": "Lesson 8",
   "slides": [
    {
     "title": "The n-channel enhancement MOSFET",
     "kind": "learn",
     "blocks": [
      {
       "t": "fig",
       "src": "assets/study/resources/gr1/mos_struct.svg",
       "alt": "Cross-section of an n-channel MOSFET"
      },
      {
       "t": "ul",
       "items": [
        "Terminals: **gate (G)**, **drain (D)**, **source (S)** and the body (B), usually tied to the source",
        "A p-type substrate with two n+ regions (source and drain)",
        "A thin **oxide** (SiO₂) insulates the gate: **no DC gate current**"
       ]
      },
      {
       "t": "call",
       "kind": "tip",
       "text": "Three independent terminals: the gate voltage controls the drain-source current.  @S2 §3"
      }
     ],
     "id": "t9-1"
    },
    {
     "title": "Creating the channel",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "A **positive** gate voltage repels holes and **attracts electrons** to the surface under the oxide",
        "Once enough electrons collect, the surface **inverts** to n-type and joins the n+ source and drain: a **conducting channel**",
        "The gate voltage at which this happens is the **threshold voltage Vt** (positive for an enhancement NMOS, typically 0.3 to 4 V) @S2 §1"
       ]
      },
      {
       "t": "call",
       "kind": "rule",
       "text": "No channel until VGS > Vt; more VGS means more channel charge."
      }
     ],
     "id": "t9-2"
    },
    {
     "title": "Overdrive and channel charge",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"V_{ov}=V_{GS}-V_t\"><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">ov</mi></mrow></msub><mo>=</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">GS</mi></mrow></msub><mo>−</mo><msub><mi>V</mi><mi mathvariant=\"normal\">t</mi></msub></mrow></math>",
         "sheet": "S2 §1"
        },
        {
         "math": "<math alttext=\"|Q_{chan}|=C_{ox}\\,W\\,L\\,V_{ov}\\quad(\\text{small }v_{DS})\"><mrow><mo stretchy=\"false\" lspace=\"0\" rspace=\"0\">|</mo><msub><mi>Q</mi><mrow><mi mathvariant=\"normal\">chan</mi></mrow></msub><mo stretchy=\"false\" lspace=\"0\" rspace=\"0\">|</mo><mo>=</mo><msub><mi>C</mi><mrow><mi mathvariant=\"normal\">ox</mi></mrow></msub><mspace width=\"0.17em\"/><mi>W</mi><mspace width=\"0.17em\"/><mi>L</mi><mspace width=\"0.17em\"/><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">ov</mi></mrow></msub><mspace width=\"1em\"/><mo stretchy=\"false\">(</mo><mtext>small </mtext><msub><mi>v</mi><mrow><mi mathvariant=\"normal\">DS</mi></mrow></msub><mo stretchy=\"false\">)</mo></mrow></math>",
         "sheet": "S2 §1"
        },
        {
         "math": "<math alttext=\"C_{ox}=\\dfrac{\\varepsilon_{ox}}{t_{ox}}=\\dfrac{3.9\\,\\varepsilon_0}{t_{ox}}\"><mrow><msub><mi>C</mi><mrow><mi mathvariant=\"normal\">ox</mi></mrow></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>ε</mi><mrow><mi mathvariant=\"normal\">ox</mi></mrow></msub></mrow><mrow><msub><mi>t</mi><mrow><mi mathvariant=\"normal\">ox</mi></mrow></msub></mrow></mfrac></mstyle><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><mn>3.9</mn><mspace width=\"0.17em\"/><msub><mi>ε</mi><mn>0</mn></msub></mrow><mrow><msub><mi>t</mi><mrow><mi mathvariant=\"normal\">ox</mi></mrow></msub></mrow></mfrac></mstyle></mrow></math>",
         "sheet": "S2 §1"
        }
       ]
      },
      {
       "t": "ul",
       "items": [
        "**Vov** is how far the gate is above threshold; it sets the channel charge and the current",
        "Cox is the oxide capacitance **per unit area** (parallel-plate: ε/thickness)"
       ]
      }
     ],
     "id": "t9-3"
    },
    {
     "title": "Process and device constants",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"k_n^{\\prime}=\\mu_nC_{ox}\\ (\\text{A/V}^2)\"><mrow><msubsup><mi>k</mi><mi mathvariant=\"normal\">n</mi><mrow><mo>′</mo></mrow></msubsup><mo>=</mo><msub><mi>μ</mi><mi mathvariant=\"normal\">n</mi></msub><msub><mi>C</mi><mrow><mi mathvariant=\"normal\">ox</mi></mrow></msub><mspace width=\"0.25em\"/><mo stretchy=\"false\">(</mo><msup><mtext>A/V</mtext><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow></math>",
         "sheet": "S2 §1"
        },
        {
         "math": "<math alttext=\"K_n=k_n^{\\prime}\\,\\dfrac{W}{L}\"><mrow><msub><mi>K</mi><mi mathvariant=\"normal\">n</mi></msub><mo>=</mo><msubsup><mi>k</mi><mi mathvariant=\"normal\">n</mi><mrow><mo>′</mo></mrow></msubsup><mspace width=\"0.17em\"/><mstyle displaystyle=\"true\"><mfrac><mrow><mi>W</mi></mrow><mrow><mi>L</mi></mrow></mfrac></mstyle></mrow></math>",
         "sheet": "S2 §1"
        }
       ]
      },
      {
       "t": "ul",
       "items": [
        "**k′n** is set by the **process** (mobility and oxide)",
        "**W/L** is the designer's sizing knob",
        "Kn tells how much current the device gives per volt² of overdrive"
       ]
      }
     ],
     "id": "t9-4"
    },
    {
     "title": "Kn and Vov",
     "kind": "example",
     "blocks": [
      {
       "t": "given",
       "items": [
        "k′n = 200 μA/V²",
        "W/L = 10",
        "VGS = 1.8 V, Vt = 0.5 V"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Device constant",
         "res": "Kn = k′n·W/L = 200 μA/V² × 10 = 2.0 mA/V²"
        },
        {
         "h": "2",
         "text": "Overdrive",
         "res": "Vov = VGS − Vt = 1.8 − 0.5 = 1.3 V"
        },
        {
         "h": "3",
         "text": "Meaning",
         "res": "a channel exists because VGS > Vt"
        }
       ]
      }
     ],
     "id": "t9-5"
    },
    {
     "title": "Small VDS: a gate-controlled resistor",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"I_D=K_nV_{ov}V_{DS}\\ (V_{DS}\\ll V_{ov})\"><mrow><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub><mo>=</mo><msub><mi>K</mi><mi mathvariant=\"normal\">n</mi></msub><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">ov</mi></mrow></msub><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">DS</mi></mrow></msub><mspace width=\"0.25em\"/><mo stretchy=\"false\">(</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">DS</mi></mrow></msub><mo>≪</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">ov</mi></mrow></msub><mo stretchy=\"false\">)</mo></mrow></math>",
         "sheet": "S2 §2"
        },
        {
         "math": "<math alttext=\"r_{DS}=\\dfrac{V_{DS}}{I_D}=\\dfrac{1}{K_nV_{ov}}\"><mrow><msub><mi>r</mi><mrow><mi mathvariant=\"normal\">DS</mi></mrow></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">DS</mi></mrow></msub></mrow><mrow><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub></mrow></mfrac></mstyle><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><mn>1</mn></mrow><mrow><msub><mi>K</mi><mi mathvariant=\"normal\">n</mi></msub><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">ov</mi></mrow></msub></mrow></mfrac></mstyle></mrow></math>",
         "sheet": "S2 §2"
        }
       ]
      },
      {
       "t": "ul",
       "items": [
        "With a tiny VDS the channel is nearly uniform: the device is a **linear resistor** set by Vov",
        "More Vov, lower resistance"
       ]
      }
     ],
     "id": "t9-6"
    },
    {
     "title": "gr1-mos-001",
     "kind": "q",
     "ref": "gr1-mos-001",
     "blocks": [],
     "id": "t9-7"
    },
    {
     "title": "gr1-mos-003",
     "kind": "q",
     "ref": "gr1-mos-003",
     "blocks": [],
     "id": "t9-8"
    },
    {
     "title": "gr1-mos-005",
     "kind": "q",
     "ref": "gr1-mos-005",
     "blocks": [],
     "id": "t9-9"
    }
   ],
   "id": "t9-mosfet-structure-and-channel-f"
  },
  {
   "title": "Regions of operation and the I-V curves",
   "lessons": "Lessons 8 and 9",
   "slides": [
    {
     "title": "Three regions",
     "kind": "learn",
     "blocks": [
      {
       "t": "fig",
       "src": "assets/study/resources/gr1/mos_iv.svg",
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
       ],
       "sheet": "S2 §2"
      }
     ],
     "id": "t10-1"
    },
    {
     "title": "Pinch-off and saturation",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "The channel voltage rises toward the drain, so the gate-to-channel voltage **falls** toward the drain",
        "When VGD drops to Vt the drain end has **no inversion charge**: the channel is **pinched off**",
        "The current is then set by the gate: it no longer grows with VDS"
       ]
      },
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"V_{GD}=V_{GS}-V_{DS}\\qquad\\text{saturation:}\\ V_{DS}\\ge V_{ov}\\Longleftrightarrow V_{GD}\\le V_t\"><mrow><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">GD</mi></mrow></msub><mo>=</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">GS</mi></mrow></msub><mo>−</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">DS</mi></mrow></msub><mspace width=\"2em\"/><mtext>saturation:</mtext><mspace width=\"0.25em\"/><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">DS</mi></mrow></msub><mo>≥</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">ov</mi></mrow></msub><mo>⇔</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">GD</mi></mrow></msub><mo>≤</mo><msub><mi>V</mi><mi mathvariant=\"normal\">t</mi></msub></mrow></math>",
         "sheet": "S2 §4"
        }
       ]
      },
      {
       "t": "call",
       "kind": "watch",
       "text": "Compare VDS with Vov = VGS − Vt, not with Vt."
      }
     ],
     "id": "t10-2"
    },
    {
     "title": "Saturation: a voltage-controlled current source",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"I_D=\\tfrac{1}{2}K_nV_{ov}^{2}=\\tfrac{1}{2}K_n(V_{GS}-V_t)^2\"><mrow><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub><mo>=</mo><mstyle displaystyle=\"false\"><mfrac><mrow><mn>1</mn></mrow><mrow><mn>2</mn></mrow></mfrac></mstyle><msub><mi>K</mi><mi mathvariant=\"normal\">n</mi></msub><msubsup><mi>V</mi><mrow><mi mathvariant=\"normal\">ov</mi></mrow><mrow><mn>2</mn></mrow></msubsup><mo>=</mo><mstyle displaystyle=\"false\"><mfrac><mrow><mn>1</mn></mrow><mrow><mn>2</mn></mrow></mfrac></mstyle><msub><mi>K</mi><mi mathvariant=\"normal\">n</mi></msub><mo stretchy=\"false\">(</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">GS</mi></mrow></msub><mo>−</mo><msub><mi>V</mi><mi mathvariant=\"normal\">t</mi></msub><msup><mo stretchy=\"false\">)</mo><mn>2</mn></msup></mrow></math>",
         "sheet": "S2 §2"
        }
       ]
      },
      {
       "t": "ul",
       "items": [
        "ID depends on VGS only (ideal), through a **square law**: doubling Vov makes ID **four times** larger",
        "Amplifiers use **saturation**: the gate voltage controls the current"
       ]
      },
      {
       "t": "call",
       "kind": "tip",
       "text": "Triode: a resistor. Saturation: a current source."
      }
     ],
     "id": "t10-3"
    },
    {
     "title": "Channel-length modulation",
     "kind": "learn",
     "blocks": [
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"I_D=\\tfrac{1}{2}K_nV_{ov}^{2}(1+\\lambda V_{DS})\"><mrow><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub><mo>=</mo><mstyle displaystyle=\"false\"><mfrac><mrow><mn>1</mn></mrow><mrow><mn>2</mn></mrow></mfrac></mstyle><msub><mi>K</mi><mi mathvariant=\"normal\">n</mi></msub><msubsup><mi>V</mi><mrow><mi mathvariant=\"normal\">ov</mi></mrow><mrow><mn>2</mn></mrow></msubsup><mo stretchy=\"false\">(</mo><mn>1</mn><mo>+</mo><mi>λ</mi><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">DS</mi></mrow></msub><mo stretchy=\"false\">)</mo></mrow></math>",
         "sheet": "S2 §2"
        },
        {
         "math": "<math alttext=\"r_o=\\dfrac{V_A+V_{DS}}{I_D}\\approx\\dfrac{V_A}{I_D}=\\dfrac{1}{\\lambda I_D}\"><mrow><msub><mi>r</mi><mi mathvariant=\"normal\">o</mi></msub><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>V</mi><mi mathvariant=\"normal\">A</mi></msub><mo>+</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">DS</mi></mrow></msub></mrow><mrow><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub></mrow></mfrac></mstyle><mo>≈</mo><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>V</mi><mi mathvariant=\"normal\">A</mi></msub></mrow><mrow><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub></mrow></mfrac></mstyle><mo>=</mo><mstyle displaystyle=\"true\"><mfrac><mrow><mn>1</mn></mrow><mrow><mi>λ</mi><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub></mrow></mfrac></mstyle></mrow></math>",
         "sheet": "S2 §2"
        }
       ]
      },
      {
       "t": "ul",
       "items": [
        "As VDS rises the pinch-off point moves toward the source: the **effective channel shortens** and ID tilts up",
        "λ (or the **Early voltage VA = 1/λ**) measures the tilt; with λ = 0 the curves are flat and ro = ∞",
        "VA is where the extrapolated saturation lines cross the negative VDS axis @S2 §2"
       ]
      }
     ],
     "id": "t10-4"
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
         "res": "Vov = 2 V, VDS < Vov: triode, ID = 2[2·1 − ½·1²] = 3 mA"
        },
        {
         "h": "3",
         "text": "VGS = 3 V, VDS = 5 V",
         "res": "Vov = 2 V, VDS ≥ Vov: saturation, ID = ½·2·2² = 4 mA"
        }
       ]
      }
     ],
     "id": "t10-5"
    },
    {
     "title": "Effect of channel-length modulation",
     "kind": "example",
     "blocks": [
      {
       "t": "given",
       "items": [
        "Kn = 2 mA/V²",
        "Vov = 2 V",
        "VDS = 5 V",
        "λ = 0.02 V⁻¹"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Ideal current",
         "res": "ID = ½·Kn·Vov² = 4 mA"
        },
        {
         "h": "2",
         "text": "With λ",
         "res": "ID = 4 × (1 + 0.02 × 5) = 4.4 mA"
        },
        {
         "h": "3",
         "text": "Output resistance",
         "res": "ro = 1/(λ·ID) = 1/(0.02 × 4.4 mA) = 11364 Ω"
        }
       ]
      }
     ],
     "id": "t10-6"
    },
    {
     "title": "gr1-reg-001",
     "kind": "q",
     "ref": "gr1-reg-001",
     "blocks": [],
     "id": "t10-7"
    },
    {
     "title": "gr1-reg-003",
     "kind": "q",
     "ref": "gr1-reg-003",
     "blocks": [],
     "id": "t10-8"
    },
    {
     "title": "gr1-reg-006",
     "kind": "q",
     "ref": "gr1-reg-006",
     "blocks": [],
     "id": "t10-9"
    },
    {
     "title": "gr1-reg-008",
     "kind": "q",
     "ref": "gr1-reg-008",
     "blocks": [],
     "id": "t10-10"
    },
    {
     "title": "gr1-wk-005",
     "kind": "workout",
     "ref": "gr1-wk-005",
     "blocks": [],
     "id": "t10-11"
    }
   ],
   "id": "t10-regions-of-operation-and-the-i"
  },
  {
   "title": "PMOS, symbols and circuit models",
   "lessons": "Lesson 9",
   "slides": [
    {
     "title": "The p-channel MOSFET",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "An n-type substrate with p+ source and drain: the channel carries **holes**",
        "A **negative** VGS (more negative than Vt, which is negative) induces the channel; current flows with a **negative** VDS",
        "Same regions and equations as the NMOS with the polarities reversed: use **VSG, VSD and |Vt|**"
       ]
      },
      {
       "t": "fig",
       "src": "assets/study/resources/gr1/pmos_cs.svg",
       "alt": "A common-source stage with a PMOS whose source is toward the positive supply"
      }
     ],
     "id": "t11-1"
    },
    {
     "title": "NMOS versus PMOS",
     "kind": "learn",
     "blocks": [
      {
       "t": "tbl",
       "head": [
        "",
        "NMOS",
        "PMOS"
       ],
       "rows": [
        [
         "Channel carriers",
         "electrons",
         "holes"
        ],
        [
         "Vt",
         "positive",
         "negative"
        ],
        [
         "On when",
         "VGS > Vt",
         "VSG > |Vt|"
        ],
        [
         "Source drawn",
         "bottom (toward ground)",
         "top (toward VDD)"
        ],
        [
         "Mobility",
         "μn (larger)",
         "μp (smaller, ≈ μn/3)"
        ]
       ]
      },
      {
       "t": "call",
       "kind": "why",
       "text": "μn > μp, so an NMOS carries more current than a PMOS of the same size. CMOS uses both for low static power.  @S2 §1"
      }
     ],
     "id": "t11-2"
    },
    {
     "title": "Circuit models",
     "kind": "learn",
     "blocks": [
      {
       "t": "tbl",
       "head": [
        "Region",
        "Large-signal model"
       ],
       "rows": [
        [
         "Cutoff",
         "open circuit between D and S"
        ],
        [
         "Triode",
         "nonlinear resistor (linear for small VDS)"
        ],
        [
         "Saturation",
         "current source ½Kn·Vov² in parallel with ro"
        ]
       ]
      },
      {
       "t": "ul",
       "items": [
        "For a PMOS the current flows **from source to drain**",
        "Check the region with the **reversed** voltages: VSD < Vov (triode) or VSD ≥ Vov (saturation), Vov = VSG − |Vt|"
       ]
      }
     ],
     "id": "t11-3"
    },
    {
     "title": "A PMOS in triode",
     "kind": "example",
     "blocks": [
      {
       "t": "given",
       "items": [
        "Kp = 1 mA/V²",
        "Vt = −1 V",
        "VSG = 3 V",
        "VSD = 1 V"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Overdrive",
         "res": "Vov = VSG − |Vt| = 3 − 1 = 2 V"
        },
        {
         "h": "2",
         "text": "Region",
         "res": "VSD = 1 V < Vov = 2 V: triode"
        },
        {
         "h": "3",
         "text": "Current",
         "res": "ID = Kp[Vov·VSD − ½VSD²] = 1 × [2 × 1 − ½] = 1.5 mA"
        }
       ]
      }
     ],
     "id": "t11-4"
    },
    {
     "title": "gr1-pmos-001",
     "kind": "q",
     "ref": "gr1-pmos-001",
     "blocks": [],
     "id": "t11-5"
    },
    {
     "title": "gr1-pmos-002",
     "kind": "q",
     "ref": "gr1-pmos-002",
     "blocks": [],
     "id": "t11-6"
    },
    {
     "title": "gr1-pmos-004",
     "kind": "q",
     "ref": "gr1-pmos-004",
     "blocks": [],
     "id": "t11-7"
    }
   ],
   "id": "t11-pmos-symbols-and-circuit-model"
  },
  {
   "title": "MOSFET DC analysis",
   "lessons": "Lesson 10",
   "slides": [
    {
     "title": "The four-resistor bias circuit",
     "kind": "learn",
     "blocks": [
      {
       "t": "fig",
       "src": "assets/study/resources/gr1/cs_dc_bias.svg",
       "alt": "NMOS with gate divider RG1 and RG2, drain resistor RD and source resistor RS"
      },
      {
       "t": "ul",
       "items": [
        "Capacitors are **opens** for DC; the gate draws **no** current",
        "The divider sets the gate voltage; **RS** gives negative feedback: more ID raises VS and lowers VGS",
        "The goal: find ID, VGS, VDS and **confirm the region**"
       ]
      },
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"V_G=V_{DD}\\dfrac{R_{G2}}{R_{G1}+R_{G2}}\\qquad V_S=R_SI_D\\qquad V_D=V_{DD}-R_DI_D\"><mrow><msub><mi>V</mi><mi mathvariant=\"normal\">G</mi></msub><mo>=</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">DD</mi></mrow></msub><mstyle displaystyle=\"true\"><mfrac><mrow><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">G</mi><mn>2</mn></mrow></msub></mrow><mrow><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">G</mi><mn>1</mn></mrow></msub><mo>+</mo><msub><mi>R</mi><mrow><mi mathvariant=\"normal\">G</mi><mn>2</mn></mrow></msub></mrow></mfrac></mstyle><mspace width=\"2em\"/><msub><mi>V</mi><mi mathvariant=\"normal\">S</mi></msub><mo>=</mo><msub><mi>R</mi><mi mathvariant=\"normal\">S</mi></msub><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub><mspace width=\"2em\"/><msub><mi>V</mi><mi mathvariant=\"normal\">D</mi></msub><mo>=</mo><msub><mi>V</mi><mrow><mi mathvariant=\"normal\">DD</mi></mrow></msub><mo>−</mo><msub><mi>R</mi><mi mathvariant=\"normal\">D</mi></msub><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub></mrow></math>",
         "sheet": "S2 §5"
        }
       ]
      }
     ],
     "id": "t12-1"
    },
    {
     "title": "Assume, analyze, confirm",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "Find **VG** from the divider",
        "**Assume saturation**: ID = ½Kn(VG − RS·ID − Vt)² (since VGS = VG − RS·ID)",
        "Solve the **quadratic** in ID and keep the root with **VGS > Vt**",
        "Compute VD, VS and VDS = VD − VS",
        "**Confirm** VDS ≥ Vov; if not, redo it in **triode**"
       ]
      },
      {
       "t": "eq",
       "lines": [
        {
         "math": "<math alttext=\"I_D=\\tfrac{1}{2}K_n\\left(V_G-R_SI_D-V_t\\right)^2\"><mrow><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub><mo>=</mo><mstyle displaystyle=\"false\"><mfrac><mrow><mn>1</mn></mrow><mrow><mn>2</mn></mrow></mfrac></mstyle><msub><mi>K</mi><mi mathvariant=\"normal\">n</mi></msub><msup><mrow><mo stretchy=\"true\">(</mo><msub><mi>V</mi><mi mathvariant=\"normal\">G</mi></msub><mo>−</mo><msub><mi>R</mi><mi mathvariant=\"normal\">S</mi></msub><msub><mi>I</mi><mi mathvariant=\"normal\">D</mi></msub><mo>−</mo><msub><mi>V</mi><mi mathvariant=\"normal\">t</mi></msub><mo stretchy=\"true\">)</mo></mrow><mn>2</mn></msup></mrow></math>",
         "sheet": "S2 §5"
        }
       ]
      },
      {
       "t": "call",
       "kind": "watch",
       "text": "Both roots solve the equation; only one gives VGS above Vt."
      }
     ],
     "id": "t12-2"
    },
    {
     "title": "Four-resistor NMOS bias",
     "kind": "example",
     "blocks": [
      {
       "t": "given",
       "items": [
        "VDD = 10 V",
        "RG1 = 2 MΩ, RG2 = 1 MΩ",
        "RD = 2 kΩ, RS = 1 kΩ",
        "Kn = 2 mA/V², Vt = 1 V"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "Gate voltage",
         "res": "VG = 10 × 1/(2 + 1) = 3.333 V"
        },
        {
         "h": "2",
         "text": "Saturation equation",
         "res": "ID = (VG − 1·ID − 1)² in mA and kΩ, a quadratic in ID"
        },
        {
         "h": "3",
         "text": "Roots",
         "res": "ID = 1.226 mA or 4.441 mA; the larger gives VGS = -1.11 V < Vt, rejected"
        },
        {
         "h": "4",
         "text": "Voltages",
         "res": "ID = 1.226 mA, VGS = 2.107 V, VS = 1.226 V, VD = 7.548 V, VDS = 6.322 V"
        },
        {
         "h": "5",
         "text": "Confirm",
         "res": "Vov = 1.107 V and VDS = 6.322 V ≥ Vov: saturation holds"
        }
       ]
      }
     ],
     "id": "t12-3"
    },
    {
     "title": "If saturation fails",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "VDS < Vov means the channel is not pinched off: use the **triode** equation",
        "ID = Kn[Vov·VDS − ½VDS²], with VDS = VD − VS written in terms of ID",
        "Solve again, then confirm VDS < Vov and VGS > Vt"
       ]
      },
      {
       "t": "call",
       "kind": "tip",
       "text": "Check VGS > Vt first (device on), then compare VDS with Vov."
      }
     ],
     "id": "t12-4"
    },
    {
     "title": "gr1-dcmos-001",
     "kind": "q",
     "ref": "gr1-dcmos-001",
     "blocks": [],
     "id": "t12-5"
    },
    {
     "title": "gr1-dcmos-003",
     "kind": "q",
     "ref": "gr1-dcmos-003",
     "blocks": [],
     "id": "t12-6"
    },
    {
     "title": "gr1-dcmos-004",
     "kind": "q",
     "ref": "gr1-dcmos-004",
     "blocks": [],
     "id": "t12-7"
    },
    {
     "title": "gr1-wk-006",
     "kind": "workout",
     "ref": "gr1-wk-006",
     "blocks": [],
     "id": "t12-8"
    }
   ],
   "id": "t12-mosfet-dc-analysis"
  },
  {
   "title": "Body diode and families of curves",
   "lessons": "Lesson 11",
   "slides": [
    {
     "title": "The body diode",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "The p-type **body** and the n-type **drain** form a pn junction: the **body diode**",
        "With the body tied to the source it sits between source and drain, reverse biased in normal NMOS operation",
        "It **conducts** if the drain falls below the source enough to forward bias it",
        "It is a physical junction, not an added part"
       ]
      },
      {
       "t": "call",
       "kind": "tip",
       "text": "Normal NMOS operation keeps VDS ≥ 0, so the body diode stays off."
      }
     ],
     "id": "t13-1"
    },
    {
     "title": "A family of curves",
     "kind": "learn",
     "blocks": [
      {
       "t": "fig",
       "src": "assets/study/resources/gr1/mos_iv.svg",
       "alt": "Drain current versus VDS for several VGS values"
      },
      {
       "t": "ul",
       "items": [
        "Each curve is **iD versus vDS at one fixed VGS**",
        "Higher VGS gives a higher curve",
        "Each curve bends over (the **knee**) at VDS = Vov and then flattens: saturation",
        "In a real device the flat part tilts slightly (channel-length modulation)"
       ]
      }
     ],
     "id": "t13-2"
    },
    {
     "title": "Load line and the Q-point",
     "kind": "learn",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "A **load line** is the circuit constraint (from the supply and resistors) drawn on the same axes",
        "Where it crosses the curve for the bias VGS is the **operating (quiescent) point** Q",
        "It tells you the region and how far the signal can swing"
       ]
      },
      {
       "t": "call",
       "kind": "rule",
       "text": "Curves describe the transistor; the load line describes the circuit; their intersection is the answer."
      }
     ],
     "id": "t13-3"
    },
    {
     "title": "Knees on a parabola",
     "kind": "example",
     "blocks": [
      {
       "t": "given",
       "items": [
        "Kn = 2 mA/V²",
        "Vt = 1 V",
        "VGS = 2, 3, 4 V"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "h": "1",
         "text": "VGS = 2 V",
         "res": "knee at VDS = Vov = 1 V, saturation current ½Kn·Vov² = 1 mA"
        },
        {
         "h": "2",
         "text": "VGS = 3 V",
         "res": "knee at VDS = 2 V, current 4 mA"
        },
        {
         "h": "3",
         "text": "VGS = 4 V",
         "res": "knee at VDS = 3 V, current 9 mA"
        },
        {
         "h": "4",
         "text": "The knees",
         "res": "all lie on ID = ½Kn·VDS²: a parabola that separates triode from saturation"
        }
       ]
      }
     ],
     "id": "t13-4"
    },
    {
     "title": "gr1-body-001",
     "kind": "q",
     "ref": "gr1-body-001",
     "blocks": [],
     "id": "t13-5"
    },
    {
     "title": "gr1-body-003",
     "kind": "q",
     "ref": "gr1-body-003",
     "blocks": [],
     "id": "t13-6"
    },
    {
     "title": "gr1-body-004",
     "kind": "q",
     "ref": "gr1-body-004",
     "blocks": [],
     "id": "t13-7"
    }
   ],
   "id": "t13-body-diode-and-families-of-cur"
  }
 ]
});
