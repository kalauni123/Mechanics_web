window.mechanicsCh6 = [
    {
        id: "M6-01", subjectCode: "MECH", chapterCode: "MECH-06",
        question: "The general three-dimensional differential equation of wave motion for a scalar quantity \\(\\psi\\) propagating with velocity \\(v\\) is:",
        options: { A: "\\( \\nabla^2 \\psi = \\frac{1}{v^2} \\frac{\\partial^2 \\psi}{\\partial t^2} \\)", B: "\\( \\nabla^2 \\psi = v^2 \\frac{\\partial^2 \\psi}{\\partial t^2} \\)", C: "\\( \\nabla^2 \\psi = \\frac{1}{v} \\frac{\\partial \\psi}{\\partial t} \\)", D: "\\( \\nabla \\psi = \\frac{1}{v^2} \\frac{\\partial^2 \\psi}{\\partial t^2} \\)" },
        correctAnswer: "A",
        explanation: "The standard wave equation relates the spatial Laplacian of the wave function to its second time derivative, scaled by the inverse square of the phase velocity."
    },
    {
        id: "M6-02", subjectCode: "MECH", chapterCode: "MECH-06",
        question: "For a plane progressive harmonic wave described by \\(y(x,t) = A \\sin(kx - \\omega t)\\), the maximum particle velocity \\(v_p\\) is related to the wave velocity \\(v\\) by:",
        options: { A: "\\( v_p = v \\)", B: "\\( v_p = kA v \\)", C: "\\( v_p = \\frac{v}{kA} \\)", D: "\\( v_p = \\omega A v \\)" },
        correctAnswer: "B",
        explanation: "Particle velocity is \\(v_p = \\frac{\\partial y}{\\partial t} = -A\\omega \\cos(kx - \\omega t)\\). The maximum particle velocity is \\(A\\omega\\). Since wave velocity \\(v = \\frac{\\omega}{k}\\), we have \\(\\omega = kv\\). Thus, \\(v_p (max) = A(kv) = kA v\\)."
    },
    {
        id: "M6-03", subjectCode: "MECH", chapterCode: "MECH-06",
        question: "The time-averaged energy density \\(\\langle u \\rangle\\) for a plane progressive wave in a medium of density \\(\\rho\\) with amplitude \\(A\\) and angular frequency \\(\\omega\\) is:",
        options: { A: "\\( \\frac{1}{2}\\rho A \\omega^2 \\)", B: "\\( \\frac{1}{2}\\rho A^2 \\omega^2 \\)", C: "\\( \\rho A^2 \\omega^2 \\)", D: "\\( \\frac{1}{4}\\rho A^2 \\omega^2 \\)" },
        correctAnswer: "B",
        explanation: "The total energy density is the sum of kinetic and potential energy densities. Averaged over one cycle, it equals \\(\\frac{1}{2}\\rho A^2 \\omega^2\\)."
    },
    {
        id: "M6-04", subjectCode: "MECH", chapterCode: "MECH-06",
        question: "In a stretched string of length \\(L\\), fixed at both ends, the wavelength \\(\\lambda_n\\) of the \\(n\\)-th normal mode of vibration is:",
        options: { A: "\\( \\frac{2L}{n} \\)", B: "\\( \\frac{L}{2n} \\)", C: "\\( \\frac{nL}{2} \\)", D: "\\( \\frac{4L}{n} \\)" },
        correctAnswer: "A",
        explanation: "Boundary conditions require nodes at both ends. Thus, the length \\(L\\) must be an integer number of half-wavelengths: \\(L = n\\frac{\\lambda_n}{2}\\), which gives \\(\\lambda_n = \\frac{2L}{n}\\)."
    },
    {
        id: "M6-05", subjectCode: "MECH", chapterCode: "MECH-06",
        question: "What is the net time-averaged flow of energy (intensity) across any section of a purely stationary (standing) wave?",
        options: { A: "Zero", B: "Maximum at the antinodes", C: "Maximum at the nodes", D: "Equal to the energy of the progressive wave" },
        correctAnswer: "A",
        explanation: "A stationary wave is formed by the superposition of two identical waves traveling in opposite directions. Their energy fluxes cancel out perfectly, resulting in zero net transport of energy."
    }
];
