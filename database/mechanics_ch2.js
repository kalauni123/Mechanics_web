window.mechanicsCh2 = [
    {
        id: "M2-01", subjectCode: "MECH", chapterCode: "MECH-02",
        question: "In two-body collisions with no external forces, what is ALWAYS conserved regardless of elasticity?",
        options: { A: "Kinetic Energy", B: "Mechanical Energy", C: "Linear Momentum", D: "Relative Velocity" },
        correctAnswer: "C",
        explanation: "Internal forces cancel out per Newton's Third Law, conserving total linear momentum in all collision types."
    },
    {
        id: "M2-02", subjectCode: "MECH", chapterCode: "MECH-02",
        question: "The angular momentum \\(\\mathbf{L}\\) of a particle is conserved if and only if:",
        options: { A: "The net force on the particle is zero.", B: "The net external torque on the particle is zero.", C: "The particle moves in a perfect circle.", D: "The central force is proportional to distance." },
        correctAnswer: "B",
        explanation: "Since \\(\\frac{d\\mathbf{L}}{dt} = \\boldsymbol{\\tau}_{net}\\), angular momentum is strictly conserved when the net external torque is zero."
    },
    {
        id: "M2-03", subjectCode: "MECH", chapterCode: "MECH-02",
        question: "For a particle moving under the influence of a central force \\(F(r)\\mathbf{\\hat{r}}\\), its areal velocity is:",
        options: { A: "Proportional to \\(r^2\\)", B: "Zero", C: "Constant", D: "Exponentially decaying" },
        correctAnswer: "C",
        explanation: "A central force exerts zero torque about the origin. Thus, angular momentum is conserved, which geometrically corresponds to a constant areal velocity (Kepler's Second Law)."
    },
    {
        id: "M2-04", subjectCode: "MECH", chapterCode: "MECH-02",
        question: "In a one-dimensional perfectly inelastic collision between a mass \\(m\\) moving at \\(v\\) and an identical mass at rest, the fractional loss of kinetic energy is:",
        options: { A: "0%", B: "25%", C: "50%", D: "100%" },
        correctAnswer: "C",
        explanation: "Initial KE = \\(0.5mv^2\\). After collision, mass is \\(2m\\), velocity is \\(v/2\\). Final KE = \\(0.5(2m)(v/2)^2 = 0.25mv^2\\). The loss is half the initial energy, or 50%."
    },
    {
        id: "M2-05", subjectCode: "MECH", chapterCode: "MECH-02",
        question: "A rocket of mass \\(M\\) ejects gas at relative velocity \\(u\\). The general equation of motion in free space is:",
        options: { A: "\\( M \\frac{dv}{dt} = -u \\frac{dM}{dt} \\)", B: "\\( M \\frac{dv}{dt} = u \\frac{dM}{dt} \\)", C: "\\( \\frac{d(Mv)}{dt} = 0 \\)", D: "\\( M \\frac{dv}{dt} = \\frac{1}{2} u^2 \\frac{dM}{dt} \\)" },
        correctAnswer: "A",
        explanation: "From conservation of momentum for a variable mass system, thrust equals the mass ejection rate multiplied by the relative exhaust velocity."
    },
    {
        id: "M2-06", subjectCode: "MECH", chapterCode: "MECH-02",
        question: "The center of mass of a system of particles moves as if:",
        options: { A: "Only internal forces are acting on it.", B: "All mass is concentrated there and all external forces act on it.", C: "It has zero acceleration regardless of forces.", D: "It is unaffected by gravity." },
        correctAnswer: "B",
        explanation: "Newton's second law for a system of particles reduces to \\(\\mathbf{F}_{ext} = M\\mathbf{A}_{cm}\\), where the internal forces sum to zero."
    },
    {
        id: "M2-07", subjectCode: "MECH", chapterCode: "MECH-02",
        question: "For an elastic collision in one dimension, the relative velocity of approach equals:",
        options: { A: "Zero", B: "Half the relative velocity of separation", C: "The relative velocity of separation", D: "The sum of the initial velocities" },
        correctAnswer: "C",
        explanation: "In a perfectly elastic collision, the coefficient of restitution \\(e=1\\), meaning \\(v_1 - v_2 = -(u_1 - u_2)\\)."
    },
    {
        id: "M2-08", subjectCode: "MECH", chapterCode: "MECH-02",
        question: "A spinning ice skater pulls her arms in, decreasing her moment of inertia by half. What happens to her rotational kinetic energy?",
        options: { A: "It halves.", B: "It remains constant.", C: "It doubles.", D: "It quadruples." },
        correctAnswer: "C",
        explanation: "Angular momentum \\(L\\) is conserved. Rotational KE = \\(L^2 / (2I)\\). If \\(I\\) becomes \\(I/2\\), the kinetic energy becomes \\(2(L^2 / 2I)\\), thus doubling. Work was done by the skater's muscles."
    },
    {
        id: "M2-09", subjectCode: "MECH", chapterCode: "MECH-02",
        question: "Deflection of a moving particle by a particle at rest in an elastic collision implies that if the masses are equal, the angle between their final velocities is:",
        options: { A: "0 degrees", B: "45 degrees", C: "90 degrees", D: "180 degrees" },
        correctAnswer: "C",
        explanation: "Using conservation of kinetic energy and momentum vectors for equal masses, the dot product of their final velocity vectors is zero, meaning they emerge at exactly 90 degrees."
    },
    {
        id: "M2-10", subjectCode: "MECH", chapterCode: "MECH-02",
        question: "The cross section of collision is essentially a measure of:",
        options: { A: "The physical volume of the particles.", B: "The effective area presented by the target for a specific interaction.", C: "The distance between the two particles.", D: "The loss of momentum." },
        correctAnswer: "B",
        explanation: "Collision cross-section is defined as the effective area that quantifies the intrinsic probability of a scattering event."
    },
    {
        id: "M2-11", subjectCode: "MECH", chapterCode: "MECH-02",
        question: "Angular momentum \\(\\mathbf{L}\\) is defined as:",
        options: { A: "\\( \\mathbf{r} \\cdot \\mathbf{p} \\)", B: "\\( \\mathbf{p} \\times \\mathbf{r} \\)", C: "\\( \\mathbf{r} \\times \\mathbf{p} \\)", D: "\\( I\\mathbf{\\alpha} \\)" },
        correctAnswer: "C",
        explanation: "The definition of angular momentum of a particle about an origin is the cross product of its position vector and its linear momentum vector: \\(\\mathbf{L} = \\mathbf{r} \\times \\mathbf{p}\\)."
    }
];
