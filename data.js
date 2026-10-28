const CURRICULUM = {
      "12": {
        label: "Class 12th (HSC)",
        subjects: {
          "Physics": {
            icon: "⚛️",
            pdf: "https://books.ebalbharati.in/pdfs/1203020415.pdf",
            solutionSlug: "maharashtra-board-class-12-physics-solutions-chapter-",
            impSlug: "maharashtra-board-class-12-physics-important-questions-chapter-",
            highYield: [1, 2, 4, 7, 9, 12, 16],
            chapters: [
              "Rotational Dynamics",
              "Mechanical Properties of Fluids",
              "Kinetic Theory of Gases and Radiation",
              "Thermodynamics",
              "Oscillations",
              "Superposition of Waves",
              "Wave Optics",
              "Electrostatics",
              "Current Electricity",
              "Magnetic Fields due to Electric Current",
              "Magnetic Materials",
              "Electromagnetic Induction",
              "AC Circuits",
              "Dual Nature of Radiation and Matter",
              "Structure of Atoms and Nuclei",
              "Semiconductor Devices"
            ]
          },
          "Chemistry": {
            icon: "🧪",
            pdf: "https://books.ebalbharati.in/pdfs/1203030414.pdf",
            solutionSlug: "maharashtra-board-class-12-chemistry-solutions-chapter-",
            impSlug: "maharashtra-board-class-12-chemistry-important-questions-chapter-",
            highYield: [1, 2, 4, 5, 6, 9, 10, 11, 12],
            chapters: [
              "Solid State",
              "Solutions",
              "Ionic Equilibria",
              "Chemical Thermodynamics",
              "Electrochemistry",
              "Chemical Kinetics",
              "Elements of Groups 16, 17 and 18",
              "Transition and Inner Transition Elements",
              "Coordination Compounds",
              "Halogen Derivatives",
              "Alcohols, Phenols and Ethers",
              "Aldehydes, Ketones and Carboxylic Acids",
              "Amines",
              "Biomolecules",
              "Introduction to Polymer Chemistry",
              "Green Chemistry and Nanochemistry"
            ]
          },
          "Biology": {
            icon: "🧬",
            // Fixed Direct Balbharati Class 12 Biology PDF
            pdf: "https://books.ebalbharati.in/pdfs/1203030421.pdf",
            solutionSlug: "maharashtra-board-class-12-biology-solutions-chapter-",
            impSlug: "maharashtra-board-class-12-biology-important-questions-chapter-",
            highYield: [1, 2, 3, 4, 6, 8, 9, 12],
            chapters: [
              "Reproduction in Lower and Higher Plants",
              "Reproduction in Lower and Higher Animals",
              "Inheritance and Variation",
              "Molecular Basis of Inheritance",
              "Origin and Evolution of Life",
              "Plant Water Relation",
              "Plant Growth and Mineral Nutrition",
              "Respiration and Circulation",
              "Control and Co-ordination",
              "Human Health and Diseases",
              "Enhancement of Food Production",
              "Biotechnology",
              "Organisms and Populations",
              "Ecosystems and Energy Flow",
              "Biodiversity, Conservation and Environmental Issues"
            ]
          },
          "Maths Part 1": {
            icon: "📐",
            pdf: "https://books.ebalbharati.in/pdfs/1203020423.pdf",
            solutionSlug: "maharashtra-board-class-12-maths-solutions-chapter-",
            impSlug: "maharashtra-board-class-12-maths-important-questions-chapter-",
            impUrls: [
              "https://www.shaalaa.com/search-important-solutions/maharashtra-board-12th-standard-board-exam-hsc-science-general_573?subjects=mathematics-statistics-arts-science_756&topics=9101",
              "https://www.shaalaa.com/search-important-solutions/maharashtra-board-12th-standard-board-exam-hsc-science-general_573?subjects=mathematics-statistics-arts-science_756&topics=9102",
              "https://www.shaalaa.com/search-important-solutions/maharashtra-board-12th-standard-board-exam-hsc-science-general_573?subjects=mathematics-statistics-arts-science_756&topics=9103",
              "https://www.shaalaa.com/search-important-solutions/maharashtra-board-12th-standard-board-exam-hsc-science-general_573?subjects=mathematics-statistics-arts-science_756&topics=9104",
              "https://www.shaalaa.com/search-important-solutions/maharashtra-board-12th-standard-board-exam-hsc-science-general_573?subjects=mathematics-statistics-arts-science_756&topics=9105",
              "https://www.shaalaa.com/search-important-solutions/maharashtra-board-12th-standard-board-exam-hsc-science-general_573?subjects=mathematics-statistics-arts-science_756&topics=9106",
              "https://www.shaalaa.com/search-important-solutions/maharashtra-board-12th-standard-board-exam-hsc-science-general_573?subjects=mathematics-statistics-arts-science_756&topics=9107"
            ],
            highYield: [1, 2, 3, 5, 6],
            chapters: [
              "Mathematical Logic",
              "Matrices",
              "Trigonometric Functions",
              "Pair of Straight Lines",
              "Vectors",
              "Line and Plane",
              "Linear Programming"
            ]
          },
          "Maths Part 2": {
            icon: "∫",
            pdf: "https://books.ebalbharati.in/pdfs/1203020424.pdf",
            solutionSlug: "maharashtra-board-class-12-maths-solutions-part-2-chapter-",
            impSlug: "maharashtra-board-class-12-maths-important-questions-part-2-chapter-",
            impUrls: [
              "https://www.shaalaa.com/search-important-solutions/maharashtra-board-12th-standard-board-exam-hsc-science-general_573?subjects=mathematics-statistics-arts-science_756&topics=9118",
              "https://www.shaalaa.com/search-important-solutions/maharashtra-board-12th-standard-board-exam-hsc-science-general_573?subjects=mathematics-statistics-arts-science_756&topics=9119",
              "https://www.shaalaa.com/search-important-solutions/maharashtra-board-12th-standard-board-exam-hsc-science-general_573?subjects=mathematics-statistics-arts-science_756&topics=9120",
              "https://www.shaalaa.com/search-important-solutions/maharashtra-board-12th-standard-board-exam-hsc-science-general_573?subjects=mathematics-statistics-arts-science_756&topics=9121",
              null,
              "https://www.shaalaa.com/search-important-solutions/maharashtra-board-12th-standard-board-exam-hsc-science-general_573?subjects=mathematics-statistics-arts-science_756&topics=9123",
              "https://www.shaalaa.com/search-important-solutions/maharashtra-board-12th-standard-board-exam-hsc-science-general_573?subjects=mathematics-statistics-arts-science_756&topics=9124",
              "https://www.shaalaa.com/search-important-solutions/maharashtra-board-12th-standard-board-exam-hsc-science-general_573?subjects=mathematics-statistics-arts-science_756&topics=9125"
            ],
            highYield: [1, 2, 3, 4, 6, 7],
            chapters: [
              "Differentiation",
              "Applications of Derivatives",
              "Indefinite Integration",
              "Definite Integration",
              "Application of Definite Integration",
              "Differential Equations",
              "Probability Distributions",
              "Binomial Distribution"
            ]
          },
          "English Yuvakbharati": {
            icon: "📖",
            pdf: "https://books.ebalbharati.in/pdfs/1203040026.pdf",
            solutionSlug: "maharashtra-board-class-12-english-yuvakbharati-solutions-chapter-",
            impSlug: null,
            highYield: [1, 2, 4, 9, 10],
            chapters: [
              "An Astrologer's Day",
              "On Saying 'Please'",
              "The Cop and the Anthem",
              "Big Data - Big Insights",
              "The New Dress",
              "Into the Wild",
              "Why We Travel",
              "Voyaging Towards Excellence",
              "Song of the Open Road (Poetry)",
              "Indian Weavers (Poetry)",
              "The Inchcape Rock (Poetry)",
              "Have you Earned your Tomorrow (Poetry)",
              "Father Returning Home (Poetry)",
              "Money (Poetry)",
              "She Walks in Beauty (Poetry)",
              "Small Towns and Rivers (Poetry)"
            ]
          }
        }
      },

      "11": {
        "label": "Class 11th (FYJC)",
        "subjects": {
                "Physics": {
                        "icon": "\u269b\ufe0f",
                        "pdf": "https://books.ebalbharati.in/pdfs/1103020415.pdf",
                        "solutionSlug": "maharashtra-board-class-11-physics-solutions-chapter-",
                        "impSlug": null,
                        "chapters": [
                                "Units and Measurements",
                                "Mathematical Methods",
                                "Motion in a Plane",
                                "Laws of Motion",
                                "Gravitation",
                                "Mechanical Properties of Solids",
                                "Thermal Properties of Matter",
                                "Sound",
                                "Optics",
                                "Electrostatics",
                                "Electric Current Through Conductors",
                                "Magnetism",
                                "Electromagnetic Waves and Communication System",
                                "Semiconductors"
                        ],
                        "highYield": [
                                1,
                                2,
                                4,
                                6
                        ]
                },
                "Chemistry": {
                        "icon": "\ud83e\uddea",
                        "pdf": "https://books.ebalbharati.in/pdfs/1103030414.pdf",
                        "solutionSlug": "maharashtra-board-class-11-chemistry-solutions-chapter-",
                        "impSlug": null,
                        "chapters": [
                                "Some Basic Concepts of Chemistry",
                                "Introduction to Analytical Chemistry",
                                "Basic Analytical Techniques",
                                "Structure of Atom",
                                "Chemical Bonding",
                                "Redox Reactions",
                                "Modern Periodic Table",
                                "Elements of Group 1 and 2",
                                "Elements of Group 13, 14 and 15",
                                "States of Matter",
                                "Adsorption and Colloids",
                                "Chemical Equilibrium",
                                "Nuclear Chemistry and Radioactivity",
                                "Basic Principles of Organic Chemistry",
                                "Hydrocarbons",
                                "Chemistry in Everyday Life"
                        ],
                        "highYield": [
                                1,
                                2,
                                4,
                                6
                        ]
                },
                "Biology": {
                        "icon": "\ud83e\uddec",
                        "pdf": "https://books.ebalbharati.in/pdfs/1103030421.pdf",
                        "solutionSlug": "maharashtra-board-class-11-biology-solutions-chapter-",
                        "impSlug": null,
                        "chapters": [
                                "Living World",
                                "Systematics of Living Organisms",
                                "Kingdom Plantae",
                                "Kingdom Animalia",
                                "Cell Structure and Organization",
                                "Biomolecules",
                                "Cell Division",
                                "Plant Tissues and Anatomy",
                                "Morphology of Flowering Plants",
                                "Animal Tissue",
                                "Study of Animal Type (Cockroach)",
                                "Photosynthesis",
                                "Respiration and Energy Transfer",
                                "Human Nutrition",
                                "Excretion and Osmoregulation",
                                "Skeleton and Movement"
                        ],
                        "highYield": [
                                1,
                                2,
                                4,
                                6
                        ]
                },
                "Maths Part 1": {
                        "icon": "\ud83d\udcd0",
                        "pdf": "https://books.ebalbharati.in/pdfs/1103010023.pdf",
                        "solutionSlug": "maharashtra-board-class-11-maths-solutions-chapter-",
                        "impSlug": null,
                        "chapters": [
                                "Angle and its Measurement",
                                "Trigonometry - I",
                                "Trigonometry - II",
                                "Determinants and Matrices",
                                "Straight Line",
                                "Circle",
                                "Conic Sections",
                                "Measures of Dispersion",
                                "Probability"
                        ],
                        "impUrls": [
                                "https://maharashtraboardsolutions.guru/maharashtra-board-11th-maths-solutions-chapter-1-miscellaneous-exercise-1-part-1/",
                                "https://maharashtraboardsolutions.guru/maharashtra-board-11th-maths-solutions-chapter-2-miscellaneous-exercise-2-part-1/",
                                "https://maharashtraboardsolutions.guru/maharashtra-board-11th-maths-solutions-chapter-3-miscellaneous-exercise-3-part-1/",
                                "https://maharashtraboardsolutions.guru/maharashtra-board-11th-maths-solutions-chapter-4-miscellaneous-exercise-4a-part-1/",
                                "https://maharashtraboardsolutions.guru/maharashtra-board-11th-maths-solutions-chapter-5-miscellaneous-exercise-5-part-1/",
                                "https://maharashtraboardsolutions.guru/maharashtra-board-11th-maths-solutions-chapter-6-miscellaneous-exercise-6-part-1/",
                                "https://maharashtraboardsolutions.guru/maharashtra-board-11th-maths-solutions-chapter-7-miscellaneous-exercise-7-part-1/",
                                "https://maharashtraboardsolutions.guru/maharashtra-board-11th-maths-solutions-chapter-8-miscellaneous-exercise-8-part-1/",
                                "https://maharashtraboardsolutions.guru/maharashtra-board-11th-maths-solutions-chapter-9-miscellaneous-exercise-9-part-1/"
                        ],
                        "highYield": [
                                1,
                                2,
                                4,
                                6
                        ]
                },
                "Maths Part 2": {
                        "icon": "\u222b",
                        "pdf": "https://books.ebalbharati.in/pdfs/1103010024.pdf",
                        "solutionSlug": "maharashtra-board-class-11-maths-solutions-part-2-chapter-",
                        "impSlug": null,
                        "chapters": [
                                "Complex Numbers",
                                "Sequences and Series",
                                "Permutations and Combination",
                                "Methods of Induction and Binomial Theorem",
                                "Sets and Relations",
                                "Functions",
                                "Limits",
                                "Continuity",
                                "Differentiation"
                        ],
                        "impUrls": [
                                "https://maharashtraboardsolutions.guru/maharashtra-board-11th-maths-solutions-chapter-1-miscellaneous-exercise-1-part-2/",
                                "https://maharashtraboardsolutions.guru/maharashtra-board-11th-maths-solutions-chapter-2-miscellaneous-exercise-2-part-2/",
                                "https://maharashtraboardsolutions.guru/maharashtra-board-11th-maths-solutions-chapter-3-miscellaneous-exercise-3-part-2/",
                                "https://maharashtraboardsolutions.guru/maharashtra-board-11th-maths-solutions-chapter-4-miscellaneous-exercise-4-part-2/",
                                "https://maharashtraboardsolutions.guru/maharashtra-board-11th-maths-solutions-chapter-5-miscellaneous-exercise-5-part-2/",
                                "https://maharashtraboardsolutions.guru/maharashtra-board-11th-maths-solutions-chapter-6-miscellaneous-exercise-6-part-2/",
                                "https://maharashtraboardsolutions.guru/maharashtra-board-11th-maths-solutions-chapter-7-miscellaneous-exercise-7-part-2/",
                                "https://maharashtraboardsolutions.guru/maharashtra-board-11th-maths-solutions-chapter-8-miscellaneous-exercise-8-part-2/",
                                "https://maharashtraboardsolutions.guru/maharashtra-board-11th-maths-solutions-chapter-9-miscellaneous-exercise-9-part-2/"
                        ],
                        "highYield": [
                                1,
                                2,
                                4,
                                6
                        ]
                },
                "English Yuvakbharati": {
                        "icon": "\ud83d\udcd6",
                        "pdf": "https://books.ebalbharati.in/pdfs/1103040026.pdf",
                        "solutionSlug": "maharashtra-board-class-11-english-yuvakbharati-solutions-chapter-",
                        "impSlug": null,
                        "chapters": [
                                "Being Neighborly",
                                "On To The Summit: We Reach The Top",
                                "The Call of the Soil",
                                "Pillars of Democracy",
                                "Mrs. Adis",
                                "Tiger Hills",
                                "Cherry Tree",
                                "The Sower",
                                "There is Another Sky",
                                "Upon Westminster Bridge",
                                "Nose versus Eyes",
                                "The Planners"
                        ],
                        "highYield": [
                                1,
                                2,
                                4,
                                6
                        ]
                },
                "Information Technology": {
                        "icon": "\ud83d\udcbb",
                        "pdf": "https://books.ebalbharati.in/pdfs/1103010025.pdf",
                        "solutionSlug": "maharashtra-board-class-11-information-technology-solutions-chapter-",
                        "impSlug": null,
                        "chapters": [
                                "Basics of Information Technology",
                                "Introduction to DBMS",
                                "Impressive Web Designing",
                                "Cyber Law"
                        ],
                        "highYield": [
                                1,
                                2,
                                4,
                                6
                        ]
                },
                "Hindi Yuvakbharati": {
                        "icon": "\ud83d\udcdd",
                        "pdf": "https://books.ebalbharati.in/pdfs/1103050027.pdf",
                        "solutionSlug": "maharashtra-board-class-11-hindi-yuvakbharati-solutions-chapter-",
                        "impSlug": null,
                        "chapters": [
                                "Prerana / \u092a\u094d\u0930\u0947\u0930\u0923\u093e",
                                "Laghu Kathayein (Usha ki Deepawali / Muskurati Chot) / \u0932\u0918\u0941 \u0915\u0925\u093e\u090f\u0901 (\u0909\u0937\u093e \u0915\u0940 \u0926\u0940\u092a\u093e\u0935\u0932\u0940 / \u092e\u0941\u0938\u094d\u0915\u0941\u0930\u093e\u0924\u0940 \u091a\u094b\u091f)",
                                "Pandraha August / \u092a\u0902\u0926\u094d\u0930\u0939 \u0905\u0917\u0938\u094d\u0924",
                                "Mera Bhala Karne Walon Se Bachaye / \u092e\u0947\u0930\u093e \u092d\u0932\u093e \u0915\u0930\u0928\u0947 \u0935\u093e\u0932\u094b\u0902 \u0938\u0947 \u092c\u091a\u093e\u090f\u0901",
                                "Madhya Yugin Kavya (Bhakti Mahima / Bal Leela) / \u092e\u0927\u094d\u092f\u092f\u0941\u0917\u0940\u0928 \u0915\u093e\u0935\u094d\u092f (\u092d\u0915\u094d\u0924\u093f \u092e\u0939\u093f\u092e\u093e / \u092c\u093e\u0932 \u0932\u0940\u0932\u093e)",
                                "Kalam ka Sipahi / \u0915\u0932\u092e \u0915\u093e \u0938\u093f\u092a\u093e\u0939\u0940",
                                "Swagat Hai / \u0938\u094d\u0935\u093e\u0917\u0924 \u0939\u0948",
                                "Tat Sat / \u0924\u0924\u094d\u0938\u0924",
                                "Mahadevi Verma / \u092e\u0939\u093e\u0926\u0947\u0935\u0940 \u0935\u0930\u094d\u092e\u093e",
                                "Nukkad Natak (Mausam) / \u0928\u0915\u094d\u0915\u0921\u093c \u0928\u093e\u091f\u0915 (\u092e\u094c\u0938\u092e)"
                        ],
                        "highYield": [
                                1,
                                2,
                                4,
                                6
                        ]
                }
        }
},

      "10": {
        label: "Class 10th (SSC)",
        subjects: {
          "Science & Tech Part 1": {
            icon: "🔬",
            pdf: "https://books.ebalbharati.in/pdfs/1003010039.pdf",
            solutionSlug: "maharashtra-board-class-10-science-solutions-part-1-chapter-",
            impSlug: null,
            highYield: [1, 2, 4, 6, 9],
            chapters: [
              "Gravitation",
              "Periodic Classification of Elements",
              "Chemical Reactions and Equations",
              "Effects of Electric Current",
              "Heat",
              "Refraction of Light",
              "Lenses",
              "Metallurgy",
              "Carbon Compounds",
              "Space Missions"
            ]
          },
          "Science & Tech Part 2": {
            icon: "🌿",
            pdf: "https://books.ebalbharati.in/pdfs/1003010040.pdf",
            solutionSlug: "maharashtra-board-class-10-science-solutions-part-2-chapter-",
            impSlug: null,
            highYield: [1, 2, 3, 4, 8],
            chapters: [
              "Heredity and Evolution",
              "Life Processes in Living Organisms Part 1",
              "Life Processes in Living Organisms Part 2",
              "Environmental Management",
              "Towards Green Energy",
              "Animal Classification",
              "Introduction to Microbiology",
              "Cell Biology and Biotechnology",
              "Social Health",
              "Disaster Management"
            ]
          },
          "Maths Part 1 (Algebra)": {
            icon: "📊",
            pdf: "https://books.ebalbharati.in/pdfs/1003010023.pdf",
            solutionSlug: "maharashtra-board-class-10-maths-solutions-chapter-",
            impSlug: null,
            highYield: [1, 2, 3, 5, 6],
            chapters: [
              "Linear Equations in Two Variables",
              "Quadratic Equations",
              "Arithmetic Progression (AP)",
              "Financial Planning",
              "Probability",
              "Statistics"
            ]
          },
          "Maths Part 2 (Geometry)": {
            icon: "📐",
            pdf: "https://books.ebalbharati.in/pdfs/1003010024.pdf",
            solutionSlug: "maharashtra-board-class-10-geometry-solutions-chapter-",
            impSlug: null,
            highYield: [1, 2, 3, 6, 7],
            chapters: [
              "Similarity",
              "Pythagoras Theorem",
              "Circle",
              "Geometric Constructions",
              "Co-ordinate Geometry",
              "Trigonometry",
              "Mensuration"
            ]
          }
        }
      }
    };
