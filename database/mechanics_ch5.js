window.mechanicsCh5 = [
    {
        id: "M5-01", subjectCode: "MECH", chapterCode: "MECH-05",
        question: "For a simple harmonic oscillator of mass \\(m\\) and spring constant \\(k\\), the angular frequency \\(\\omega\\) is:",
        options: { A: "\\( \\sqrt{m/k} \\)", B: "\\( \\sqrt{k/m} \\)", C: "\\( k/m \\)", D: "\\( 2\\pi\\sqrt{k/m} \\)" },
        correctAnswer: "B",
        explanation: "From the equation of motion \\(m\\ddot{x} + kx = 0\\), we define \\(\\omega^2 = k/m\\), thus \\(\\omega = \\sqrt{k/m}\\)."
    },
    {
        id: "M5-02", subjectCode: "MECH", chapterCode: "MECH-05",
        question: "In a damped harmonic oscillator, if the damping coefficient is equal to the critical damping value, the system will:",
        options: { A: "Oscillate with decreasing amplitude indefinitely.", B: "Return to equilibrium as fast as possible without oscillating.", C: "Take an infinitely long time to return to equilibrium.", D: "Oscillate with constant amplitude." },
        correctAnswer: "B",
        explanation: "Critical damping (where the damping ratio is 1) provides the fastest return to equilibrium without the system undergoing any oscillations."
    },
    {
        id: "M5-03", subjectCode: "MECH", chapterCode: "MECH-05",
        question: "The Quality Factor \\(Q\\) of a lightly damped harmonic oscillator is defined as \\(2\\pi\\) times the ratio of:",
        options: { A: "Energy stored to energy dissipated per cycle.", B: "Energy dissipated to energy stored per cycle.", C: "Amplitude to initial amplitude.", D: "Resonant frequency to damping constant." },
        correctAnswer: "A",
        explanation: "By definition, \\(Q = 2\\pi \\frac{E}{\\Delta E}\\), where \\(E\\) is the total energy stored and \\(\\Delta E\\) is the energy dissipated in one cycle."
    },
    {
        id: "M5-04", subjectCode: "MECH", chapterCode: "MECH-05",
        question: "The period of a simple pendulum of length \\(l\\) undergoing small oscillations is:",
        options: { A: "\\( 2\\pi \\sqrt{g/l} \\)", B: "\\( 2\\pi \\sqrt{l/g} \\)", C: "\\( \\sqrt{l/g} \\)", D: "\\( 2\\pi (l/g) \\)" },
        correctAnswer: "B",
        explanation: "For small angles \\(\\sin\\theta \\approx \\theta\\), the restoring torque leads to an angular frequency \\(\\omega = \\sqrt{g/l}\\). Since \\(T = 2\\pi/\\omega\\), \\(T = 2\\pi \\sqrt{l/g}\\)."
    },
    {
        id: "M5-05", subjectCode: "MECH", chapterCode: "MECH-05",
        question: "In a compound pendulum, the point of suspension and the center of oscillation are:",
        options: { A: "Identical", B: "Interchangeable", C: "Always separated by the radius of gyration", D: "Located at the center of mass" },
        correctAnswer: "B",
        explanation: "By the properties of a physical (compound) pendulum, if it is suspended from its center of oscillation, its period is identical to when it is suspended from its original pivot. They are interchangeable."
    },
    {
        id: "M5-06", subjectCode: "MECH", chapterCode: "MECH-05",
        question: "For a torsional pendulum with a wire of torsional constant \\(C\\) and a disk of moment of inertia \\(I\\), the time period is:",
        options: { A: "\\( 2\\pi \\sqrt{I/C} \\)", B: "\\( 2\\pi \\sqrt{C/I} \\)", C: "\\( 2\\pi \\sqrt{I C} \\)", D: "\\( \\frac{1}{2\\pi} \\sqrt{I/C} \\)" },
        correctAnswer: "A",
        explanation: "The restoring torque is \\(\\tau = -C\\theta\\). Newton's second law for rotation \\(I\\ddot{\\theta} + C\\theta = 0\\) yields \\(\\omega = \\sqrt{C/I}\\), so \\(T = 2\\pi \\sqrt{I/C}\\)."
    },
    {
        id: "M5-07", subjectCode: "MECH", chapterCode: "MECH-05",
        question: "When a harmonic oscillator is driven by a periodic external force \\(F_0 \\cos(\\omega t)\\), power absorption is maximum at:",
        options: { A: "Zero frequency", B: "Infinite frequency", C: "Velocity resonance", D: "Amplitude resonance" },
        correctAnswer: "C",
        explanation: "Power is \\(F \\cdot v\\). Power absorption is maximized when the velocity is perfectly in phase with the driving force, which occurs exactly at the undamped natural frequency (velocity resonance)."
    },
    {
        id: "M5-08", subjectCode: "MECH", chapterCode: "MECH-05",
        question: "A Helmholtz resonator relies on the compressibility of a gas acting as a spring. The mass component in this oscillating system is primarily:",
        options: { A: "The entire volume of gas in the cavity.", B: "The walls of the resonator.", C: "The plug of air in the neck of the resonator.", D: "The external driving air." },
        correctAnswer: "C",
        explanation: "In a Helmholtz resonator, the large volume of air acts as the restoring spring, while the small plug of air localized in the narrow neck provides the oscillating mass."
    },
    {
        id: "M5-09", subjectCode: "MECH", chapterCode: "MECH-05",
        question: "For N-coupled identical oscillators, how many distinct normal modes of vibration exist?",
        options: { A: "1", B: "N", C: "N-1", D: "N+1" },
        correctAnswer: "B",
        explanation: "A system of N coupled oscillators having N degrees of freedom will possess exactly N independent normal modes of vibration."
    },
    {
        id: "M5-10", subjectCode: "MECH", chapterCode: "MECH-05",
        question: "In an underdamped harmonic oscillator, the amplitude of oscillation decays:",
        options: { A: "Linearly with time", B: "Quadratically with time", C: "Exponentially with time", D: "Inversely with time" },
        correctAnswer: "C",
        explanation: "The solution to the underdamped equation is \\(x(t) = A_0 e^{-\\gamma t} \\cos(\\omega' t + \\phi)\\). The envelope \\(A_0 e^{-\\gamma t}\\) shows an exponential decay."
    },
    {
        id: "M5-11", subjectCode: "MECH", chapterCode: "MECH-05",
        question: "Amplitude resonance for a driven damped oscillator occurs at a frequency \\(\\omega_R\\) that is:",
        options: { A: "Exactly equal to the natural undamped frequency \\(\\omega_0\\).", B: "Slightly less than the natural undamped frequency \\(\\omega_0\\).", C: "Slightly greater than the natural undamped frequency \\(\\omega_0\\).", D: "Exactly equal to the damping coefficient \\(\\gamma\\)." },
        correctAnswer: "B",
        explanation: "Amplitude resonance occurs at \\(\\omega_R = \\sqrt{\\omega_0^2 - 2\\gamma^2}\\), which is slightly lower than the natural frequency \\(\\omega_0\\) due to the presence of damping."
    }
];
