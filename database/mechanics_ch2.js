// database/mechanics_ch2.js

window.mechanicsCh2 = [
    {
        id: "M2-165",
        subjectCode: "MECH",
        chapterCode: "MECH-02",
        question: "Which of these numerical Debye-model integral facts is worth KNOWING (recognizing) but NOT worth deriving under exam time pressure?",
        options: {
            A: "The overall functional form C_V ∝ T^3 at low T",
            B: "The exact numerical prefactor 12π^4/5 appearing in the low-T Debye formula",
            C: "That high-T gives 3Nk_B",
            D: "That θ_D has units of Kelvin"
        },
        correctAnswer: "B",
        explanation: "The exact numerical prefactor 12π^4/5 is best recognized and memorized rather than derived during a timed exam."
    },

    {
        id: "M2-166",
        subjectCode: "MECH",
        chapterCode: "MECH-02",
        question: "Numerically estimate: using C_V = (12π^4/5)Nk_B(T/θ_D)^3, if N = 6×10^23 (one mole), θ_D = 300 K, and T = 30 K (so T/θ_D = 0.1), estimate C_V (order of magnitude, in J/(mol·K)).",
        options: {
            A: "∼ 0.03 J/(mol·K)",
            B: "∼ 0.3 J/(mol·K)",
            C: "∼ 3 J/(mol·K)",
            D: "∼ 30 J/(mol·K)"
        },
        correctAnswer: "B",
        explanation: "For one mole, Nk_B = R. Thus C_V ≈ (12π^4/5)R(0.1)^3 ≈ 23.7×8.31×0.001 ≈ 0.197 J/(mol·K), making B the closest available choice."
    },

    {
        id: "M2-167",
        subjectCode: "MECH",
        chapterCode: "MECH-02",
        question: "Which of the following BEST describes the qualitative SHAPE of a graph of C_V/T vs T (NOT T^2 as in Q143) for a Debye-only insulator (no electronic term) at low T?",
        options: {
            A: "A straight horizontal line",
            B: "A curve that increases with T, since C_V/T = AT^2 (plotted against T, it rises quadratically from the origin)",
            C: "A line with negative slope",
            D: "A curve that diverges at T = 0"
        },
        correctAnswer: "B",
        explanation: "For a pure Debye insulator, C_V = AT^3, so C_V/T = AT^2. Therefore the graph rises quadratically from the origin."
    },

    {
        id: "M2-168",
        subjectCode: "MECH",
        chapterCode: "MECH-02",
        question: "Contrast Q167 (insulator, C_V/T → 0 as T → 0) with Q143 (metal, C_V/T → γ as T → 0). This contrast provides a DIRECT experimental method to determine whether a material is a metal or insulator, based purely on which behavior?",
        options: {
            A: "The value of θ_D alone",
            B: "Whether C_V/T extrapolates to a NONZERO value (metal, γ ≠ 0) or ZERO (insulator, no electronic contribution) as T → 0 in a low-T specific-heat measurement",
            C: "The melting point",
            D: "The color of the material"
        },
        correctAnswer: "B",
        explanation: "A nonzero low-temperature intercept of C_V/T indicates an electronic contribution, while an ideal Debye insulator has C_V/T → 0."
    },

    {
        id: "M2-169",
        subjectCode: "MECH",
        chapterCode: "MECH-02",
        question: "Which is the correct qualitative graph shape distinguishing Einstein's C_V(T) curve from Debye's C_V(T) curve, in the LOW-T region specifically (both normalized to approach the same high-T Dulong-Petit saturation value)?",
        options: {
            A: "They are identical curves at all T",
            B: "Einstein's curve drops to zero MORE STEEPLY (faster) than Debye's as T decreases, since exponential decay (Einstein) is faster than power-law (T^3, Debye) decay at low T",
            C: "Debye's curve drops MORE STEEPLY than Einstein's",
            D: "Both curves rise (not fall) as T decreases"
        },
        correctAnswer: "B",
        explanation: "Einstein's low-T specific heat decreases exponentially, whereas Debye's decreases as T^3. Exponential decay is faster than power-law decay."
    },

    {
        id: "M2-170",
        subjectCode: "MECH",
        chapterCode: "MECH-02",
        question: "At a GIVEN low temperature T (with comparable θ_E ≈ θ_D for the two models), which theory predicts a HIGHER specific heat value?",
        options: {
            A: "Einstein",
            B: "Debye",
            C: "They predict identical values",
            D: "Neither predicts any specific heat at low T"
        },
        correctAnswer: "B",
        explanation: "At low T, Debye's T^3 decay is slower than Einstein's exponential decay, so Debye predicts the larger specific heat."
    },

    {
        id: "M2-171",
        subjectCode: "MECH",
        chapterCode: "MECH-02",
        question: "Which experimental method is most directly used to determine a material's Debye temperature θ_D independently of specific-heat measurements?",
        options: {
            A: "Measuring the elastic (sound) velocities and atomic density, then computing ω_D via the mode-counting formula (Q80)",
            B: "Measuring the material's color",
            C: "Measuring its electrical resistivity at room temperature only",
            D: "Measuring its melting point directly"
        },
        correctAnswer: "A",
        explanation: "The Debye cutoff frequency is related to the sound velocities and atomic density, allowing θ_D to be obtained independently through elastic measurements."
    },

    {
        id: "M2-172",
        subjectCode: "MECH",
        chapterCode: "MECH-02",
        question: "Suppose two INDEPENDENT experimental methods (elastic sound-velocity measurement per Q171, and low-T specific-heat fitting per Q143–145) give SIGNIFICANTLY DIFFERENT values of θ_D for the same material. What would this MOST LIKELY indicate?",
        options: {
            A: "One of the measurements contains an error, OR the material significantly deviates from the simplified assumptions of the basic Debye model (e.g., strong anisotropy, multiple distinct sound velocities not well-averaged into one effective value)",
            B: "θ_D is not a well-defined physical quantity at all",
            C: "The material violates the laws of thermodynamics",
            D: "This never happens in practice; the two methods always agree exactly"
        },
        correctAnswer: "A",
        explanation: "A discrepancy may indicate experimental error or limitations of the simplified Debye model, such as anisotropy, dispersion, or multiple sound velocities."
    },

    {
        id: "M2-173",
        subjectCode: "MECH",
        chapterCode: "MECH-02",
        question: "Which is the correct ordering (from lowest to highest T-power) of the following specific-heat contributions as T → 0: (i) Debye phonon term, (ii) Sommerfeld electronic term, (iii) a hypothetical T^(3/2) magnon (spin-wave) term found in some magnetic materials?",
        options: {
            A: "(ii) T^1 < (iii) T^(3/2) < (i) T^3",
            B: "(i) T^3 < (ii) T^1 < (iii) T^(3/2)",
            C: "(iii) T^(3/2) < (i) T^3 < (ii) T^1",
            D: "All have the same power"
        },
        correctAnswer: "A",
        explanation: "The powers satisfy 1 < 3/2 < 3. Thus the T term decays most slowly and the T^3 term most rapidly as T approaches zero."
    },

    {
        id: "M2-174",
        subjectCode: "MECH",
        chapterCode: "MECH-02",
        question: "Which of the following is NOT one of the three specific-heat theories (Dulong-Petit, Einstein, Debye) discussed, but is sometimes mentioned as a further refinement addressing Debye's ANISOTROPY limitation (Q140/Q172)?",
        options: {
            A: "The Born-von Karman model, using the ACTUAL lattice dynamics (real dispersion relation, computed from actual interatomic force constants) instead of an idealized continuum approximation",
            B: "The Bohr model",
            C: "The Rutherford model",
            D: "The Drude model"
        },
        correctAnswer: "A",
        explanation: "The Born-von Karman approach uses realistic lattice dynamics and phonon dispersion rather than the idealized isotropic Debye approximation."
    },

    {
        id: "M2-175",
        subjectCode: "MECH",
        chapterCode: "MECH-02",
        question: "Consider these four statements: (i) Dulong-Petit predicts C_V independent of T. (ii) Einstein predicts C_V → 3Nk_B at high T. (iii) Debye predicts C_V ∝ T at low T. (iv) Both Einstein and Debye use Bose-Einstein statistics for the oscillator energy. How many of these four statements are TRUE?",
        options: {
            A: "1",
            B: "2",
            C: "3",
            D: "4"
        },
        correctAnswer: "C",
        explanation: "Statements (i), (ii), and (iv) are true. Statement (iii) is false because Debye predicts C_V ∝ T^3 at low temperature."
    },

    {
        id: "M2-176",
        subjectCode: "MECH",
        chapterCode: "MECH-02",
        question: "If C_V(T = θ_D) is some fraction f of 3Nk_B, and a DIFFERENT material has EXACTLY DOUBLE the θ_D of the first, at what temperature would the SECOND material show the SAME fraction f of its OWN 3Nk_B saturation value?",
        options: {
            A: "At T = θ_D of the first material (unchanged)",
            B: "At T = 2×θ_D of the first material (i.e., at the SECOND material's own θ_D value)",
            C: "At T = θ_D/2 of the first material",
            D: "At T = 4×θ_D of the first material"
        },
        correctAnswer: "B",
        explanation: "The normalized Debye heat capacity depends on T/θ_D. Keeping the same fraction requires the same ratio, so doubling θ_D requires doubling T."
    },

    {
        id: "M2-177",
        subjectCode: "MECH",
        chapterCode: "MECH-02",
        question: "Which of the following is the most defensible, precisely-worded summary of the RELATIONSHIP between Dulong-Petit, Einstein, and Debye theories?",
        options: {
            A: "They are three unrelated, competing theories with no logical connection",
            B: "Dulong-Petit is the classical (T→∞) limit that BOTH Einstein's and Debye's quantum theories correctly reduce to; Einstein and Debye differ from each other ONLY in their assumed phonon density of states, with Debye's more realistic (continuous, ω^2) spectrum giving better LOW-T agreement with experiment than Einstein's simplified single-frequency spectrum",
            C: "Debye's theory is a special case of Einstein's theory",
            D: "Dulong-Petit is more fundamental than either quantum theory"
        },
        correctAnswer: "B",
        explanation: "Both Einstein and Debye recover the Dulong-Petit limit at high temperature. Einstein uses a single characteristic frequency, while Debye uses a continuous ω^2 density of states and correctly predicts the T^3 low-T law."
    },

    {
        id: "M2-178",
        subjectCode: "MECH",
        chapterCode: "MECH-02",
        question: "Which is the correct qualitative comparison of the ENTROPY (not just specific heat) of a solid, as T→0, according to quantum lattice-dynamics theory (Einstein or Debye), consistent with the third law of thermodynamics (Q164)?",
        options: {
            A: "Entropy diverges to infinity",
            B: "Entropy approaches a well-defined, material-independent constant (often taken as zero, per Nernst's theorem) as T→0",
            C: "Entropy is undefined at T=0",
            D: "Entropy increases without bound as T decreases"
        },
        correctAnswer: "B",
        explanation: "For a perfect crystal, the third law requires entropy to approach zero as T approaches absolute zero. Quantum models give a vanishing low-T heat capacity, making the entropy integral finite."
    },

    {
        id: "M2-179",
        subjectCode: "MECH",
        chapterCode: "MECH-02",
        question: "Which of these captures the correct GENERAL LESSON (a 'master concept,' per the syllabus's own emphasis on cross-cutting themes) illustrated by the ENTIRE historical progression Dulong-Petit → Einstein → Debye?",
        options: {
            A: "Later theories are always more complicated for no good reason",
            B: "Progressively including a more physically REALISTIC treatment of the underlying microscopic degrees of freedom (from ignoring quantization entirely, to a crude single-frequency quantization, to a genuinely spectrum-aware quantization) systematically improves agreement with experiment, particularly in previously-unexplained regimes (here, low T)",
            C: "Quantum mechanics is unnecessary for understanding solids",
            D: "The three theories give completely unrelated numerical predictions with no common limit"
        },
        correctAnswer: "B",
        explanation: "The progression from Dulong-Petit to Einstein to Debye adds increasing physical realism: classical oscillators, quantized single-frequency oscillators, and finally a continuous acoustic spectrum."
    },

    {
        id: "M2-180",
        subjectCode: "MECH",
        chapterCode: "MECH-02",
        question: "Numerically, if the Debye temperature of a hypothetical material is such that at T = θ_D/10, the measured C_V is 0.5% of the Dulong-Petit value, roughly what functional form/scaling is this measurement consistent with (T^3 or some other power)?",
        options: {
            A: "Consistent with T^3: (1/10)^3 = 0.001 = 0.1%, reasonably close in order of magnitude to the measured 0.5%",
            B: "Consistent with T^1 (linear): (1/10)^1 = 0.1 = 10%, NOT close to 0.5%",
            C: "Consistent with T^10",
            D: "Cannot be assessed without more information"
        },
        correctAnswer: "A",
        explanation: "The Debye law gives C_V ∝ T^3 at low temperature. At T/θ_D = 0.1, the cubic scaling gives 10^-3, which is of the same order as the measured fraction."
    },

    {
        id: "M2-181",
        subjectCode: "MECH",
        chapterCode: "MECH-02",
        question: "Which combination of factors would give a material the SMALLEST possible low-T specific heat at a FIXED given temperature T (assuming pure Debye/insulator behavior)?",
        options: {
            A: "Light atoms, stiff bonds (high θ_D)",
            B: "Heavy atoms, soft bonds (low θ_D)",
            C: "θ_D has no effect on the magnitude of C_V at fixed T",
            D: "Only N (number of atoms) matters"
        },
        correctAnswer: "A",
        explanation: "At low temperature, C_V ∝ (T/θ_D)^3. Therefore a high θ_D gives a smaller C_V at fixed T. High θ_D is associated with light atoms and stiff bonds."
    },

    {
        id: "M2-182",
        subjectCode: "MECH",
        chapterCode: "MECH-02",
        question: "If a material's θ_D is UNDERESTIMATED (measured too low) due to experimental error, the Debye model would then PREDICT (using this wrong θ_D) a low-T specific heat that is:",
        options: {
            A: "Too LOW compared to the true value",
            B: "Too HIGH compared to the true value",
            C: "Exactly correct regardless of the θ_D error",
            D: "Exactly zero"
        },
        correctAnswer: "B",
        explanation: "Since C_V ∝ θ_D^(-3), underestimating θ_D makes the predicted specific heat too high."
    },

    {
        id: "M2-183",
        subjectCode: "MECH",
        chapterCode: "MECH-02",
        question: "Which of these units combinations would be dimensionally CONSISTENT for the Debye specific-heat formula C_V = (12π^4/5)Nk_B(T/θ_D)^3?",
        options: {
            A: "N (dimensionless count), k_B (J/K), T and θ_D both in Kelvin (so the ratio T/θ_D is dimensionless) → C_V comes out in J/K",
            B: "N in kg, k_B in J/K, T in seconds",
            C: "N in meters, k_B in J, T in K^2",
            D: "Any units work equally well"
        },
        correctAnswer: "A",
        explanation: "N is dimensionless, k_B has units J/K, and T/θ_D is dimensionless. Hence C_V has units J/K."
    },

    {
        id: "M2-184",
        subjectCode: "MECH",
        chapterCode: "MECH-02",
        question: "Which of these correctly identifies BOTH the 'what to memorize' and 'what to reconstruct' split for the ENTIRE Dulong-Petit/Einstein/Debye specific-heat block, as a final summary?",
        options: {
            A: "Memorize: 3Nk_B high-T limit (all theories), Debye T^3 low-T scaling, Einstein exponential low-T scaling, θ_D/θ_E always in Kelvin. Reconstruct: full derivation of each formula from first principles if time allows, exact numerical Debye integral prefactor only if directly needed",
            B: "Memorize nothing; reconstruct everything from scratch every time",
            C: "Memorize every intermediate algebraic step of every derivation",
            D: "Memorize only the names of the three scientists, nothing quantitative"
        },
        correctAnswer: "A",
        explanation: "The efficient strategy is to memorize the key limits, scaling laws, units, and important constants while understanding enough of the derivations to reconstruct relationships when necessary."
    },

    {
        id: "M2-185",
        subjectCode: "MECH",
        chapterCode: "MECH-02",
        question: "In an exam with negative marking, if you can CONFIDENTLY recall that 'Debye gives T^3, not exponential, at low T' but CANNOT recall the exact numerical prefactor (12π^4/5) needed for a fully quantitative numerical question, what is the strategically BEST approach?",
        options: {
            A: "Skip the question entirely, since you don't know the exact prefactor",
            B: "Attempt CONCEPTUAL/qualitative sub-parts or PROPORTIONAL-REASONING variants of the question while being more cautious specifically about any sub-part requiring the exact numerical coefficient",
            C: "Guess randomly on the entire question",
            D: "Always attempt every question regardless of confidence level, with equal confidence"
        },
        correctAnswer: "B",
        explanation: "The T^3 scaling is sufficient for many qualitative, graph, ratio, and proportionality questions. Under negative marking, numerical parts requiring an unknown coefficient should be treated cautiously."
    },

    {
        id: "M2-186",
        subjectCode: "MECH",
        chapterCode: "MECH-02",
        question: "Which of the following BEST illustrates 'using a limiting case to check a formula,' specifically applied to verifying the Einstein specific-heat formula is correctly remembered/written down?",
        options: {
            A: "Plugging in T→∞ and checking the result correctly reduces to 3Nk_B; if it doesn't, the formula as written/recalled must contain an error",
            B: "Checking the formula's units only",
            C: "Checking that the formula contains the letter 'E' for Einstein",
            D: "There is no way to self-check a recalled formula during an exam"
        },
        correctAnswer: "A",
        explanation: "The high-temperature limit must reproduce the Dulong-Petit result 3Nk_B. This provides a rapid check for errors in a recalled Einstein formula."
    },

    {
        id: "M2-187",
        subjectCode: "MECH",
        chapterCode: "MECH-02",
        question: "Suppose, under exam pressure, a student MISREMEMBERS the Einstein formula with an extra factor of 2, writing C_V = 6Nk_B(...)^2 e^(...)/(e^(...)-1)^2 instead of the correct 3Nk_B prefactor. Applying the Q186 high-T-limit self-check to this MISREMEMBERED formula would reveal:",
        options: {
            A: "The formula correctly gives 3Nk_B at high T, so no error is detected",
            B: "The formula incorrectly gives 6Nk_B (not 3Nk_B) at high T, immediately revealing the recall error via the self-check",
            C: "The self-check technique cannot detect this type of error",
            D: "The formula gives zero at high T"
        },
        correctAnswer: "B",
        explanation: "The incorrect factor of 2 remains in the high-temperature limit, giving 6Nk_B rather than the required 3Nk_B and immediately exposing the error."
    },

    {
        id: "M2-188",
        subjectCode: "MECH",
        chapterCode: "MECH-02",
        question: "Which of the following is the BEST 'fast recognition rule' for immediately identifying, from a bare formula alone, whether a given specific-heat expression COULD PLAUSIBLY be a correct Debye-type (rather than Einstein-type) result?",
        options: {
            A: "Check if the formula contains an integral or involves an ω^2 (or T^3, in the resulting low-T limit) structure, characteristic of a continuous spectrum, rather than a single exponential term characteristic of one fixed frequency",
            B: "Check if the formula contains the letter D",
            C: "Check if the formula is longer than the Einstein formula",
            D: "There is no reliable way to distinguish them by inspection"
        },
        correctAnswer: "A",
        explanation: "Debye theory uses a continuous density of states g(ω) ∝ ω^2 and produces a T^3 low-T law, whereas Einstein theory uses a single characteristic frequency."
    },

    {
        id: "M2-189",
        subjectCode: "MECH",
        chapterCode: "MECH-02",
        question: "Which OTHER major physics problem (outside solid-state specific heat) uses the EXACT SAME mathematical structure — namely, integrating a Bose-Einstein-distributed quantity over a continuous density of states with an ω^2 weighting — that a student should recognize as structurally analogous to the Debye specific-heat calculation?",
        options: {
            A: "Blackbody (Planck) radiation — the Planck radiation law/Stefan-Boltzmann law derivation uses an essentially identical mathematical structure",
            B: "The photoelectric effect",
            C: "Compton scattering",
            D: "The Bohr model of the hydrogen atom"
        },
        correctAnswer: "A",
        explanation: "The photon gas in blackbody radiation has a three-dimensional density of states proportional to ω^2 and obeys Bose-Einstein statistics, producing a mathematically analogous integral."
    },

    {
        id: "M2-190",
        subjectCode: "MECH",
        chapterCode: "MECH-02",
        question: "Given the deep structural analogy established in Q189, which KEY DIFFERENCE between the phonon (Debye) case and the photon (Planck/blackbody) case explains why the Debye model needs a FINITE cutoff frequency ω_D while the Planck blackbody formula integrates over ALL frequencies (0 to ∞) with NO cutoff?",
        options: {
            A: "Photons travel faster than phonons",
            B: "The total number of phonon MODES in a crystal is fixed and finite (exactly 3N, tied to the finite number of atoms), requiring a cutoff to correctly normalize the mode count; there is no analogous fixed 'total number of photon modes' constraint for the electromagnetic field in free space",
            C: "Photons obey Fermi-Dirac statistics while phonons obey Bose-Einstein statistics",
            D: "There is no real difference; both actually do require the same finite cutoff"
        },
        correctAnswer: "B",
        explanation: "A crystal with N atoms has exactly 3N vibrational degrees of freedom, so the Debye model requires a cutoff to avoid overcounting modes. Free-space electromagnetic modes do not have this finite 3N constraint."
    }
];
