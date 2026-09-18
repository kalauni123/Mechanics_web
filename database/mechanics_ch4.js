window.mechanicsCh4 = [
    {
        id: "M4-01", subjectCode: "MECH", chapterCode: "MECH-04",
        question: "The moment of inertia of a uniform solid cylinder of mass \\(M\\) and radius \\(R\\) about its central longitudinal axis is:",
        options: { A: "\\( MR^2 \\)", B: "\\( \\frac{1}{2}MR^2 \\)", C: "\\( \\frac{2}{5}MR^2 \\)", D: "\\( \\frac{1}{12}MR^2 \\)" },
        correctAnswer: "B",
        explanation: "Integrating \\(r^2 dm\\) over a solid cylinder yields \\(\\frac{1}{2}MR^2\\)."
    },
    {
        id: "M4-02", subjectCode: "MECH", chapterCode: "MECH-04",
        question: "For a rigid body rolling without slipping on a horizontal surface, the ratio of its rotational kinetic energy to its total kinetic energy depends purely on:",
        options: { A: "Its mass", B: "Its radius", C: "Its shape (moment of inertia factor)", D: "Its linear velocity" },
        correctAnswer: "C",
        explanation: "Total KE = \\(K_{trans} + K_{rot} = \\frac{1}{2}Mv^2 + \\frac{1}{2}I\\omega^2\\). Since \\(v = \\omega R\\), the ratio depends entirely on the geometric factor \\(k\\) where \\(I = kMR^2\\)."
    },
    {
        id: "M4-03", subjectCode: "MECH", chapterCode: "MECH-04",
        question: "When a solid sphere and a hollow spherical shell of the same mass and radius roll down an incline without slipping, which reaches the bottom first?",
        options: { A: "Solid sphere", B: "Hollow shell", C: "They arrive simultaneously", D: "Depends on the incline angle" },
        correctAnswer: "A",
        explanation: "The solid sphere has a smaller moment of inertia factor (2/5 vs 2/3), meaning less energy goes into rotation and more into linear translation, resulting in higher linear acceleration."
    },
    {
        id: "M4-04", subjectCode: "MECH", chapterCode: "MECH-04",
        question: "The Theorem of Parallel Axes states that \\(I = I_{cm} + Md^2\\). This theorem is valid for:",
        options: { A: "1D bodies only.", B: "2D planar bodies only.", C: "Any 3D rigid body.", D: "Spherical bodies only." },
        correctAnswer: "C",
        explanation: "The parallel axis theorem is generally applicable to any rigid body in 1D, 2D, or 3D, linking the moment of inertia about the CM to any parallel axis."
    },
    {
        id: "M4-05", subjectCode: "MECH", chapterCode: "MECH-04",
        question: "The Theorem of Perpendicular Axes (\\(I_z = I_x + I_y\\)) is strictly valid for:",
        options: { A: "Any rigid body.", B: "Plane laminas (2D objects) only.", C: "Symmetrical 3D objects.", D: "Cylindrical objects." },
        correctAnswer: "B",
        explanation: "The perpendicular axis theorem relies on \\(z^2 = x^2 + y^2\\), which is only valid when the mass is confined to the xy-plane (a thin lamina)."
    },
    {
        id: "M4-06", subjectCode: "MECH", chapterCode: "MECH-04",
        question: "The moment of inertia of a solid uniform rectangular lamina of sides \\(a\\) and \\(b\\) about an axis passing through its center and perpendicular to its plane is:",
        options: { A: "\\( \\frac{M(a^2+b^2)}{12} \\)", B: "\\( \\frac{M(a^2+b^2)}{3} \\)", C: "\\( \\frac{Mab}{12} \\)", D: "\\( \\frac{M(a^2+b^2)}{6} \\)" },
        correctAnswer: "A",
        explanation: "By the perpendicular axis theorem, \\(I_z = I_x + I_y\\). Since \\(I_x = Mb^2/12\\) and \\(I_y = Ma^2/12\\), the sum is \\(M(a^2+b^2)/12\\)."
    },
    {
        id: "M4-07", subjectCode: "MECH", chapterCode: "MECH-04",
        question: "Reducing a two-body central force problem into a one-body problem involves replacing the two masses with a single fictitious mass known as:",
        options: { A: "Center of mass", B: "Reduced mass", C: "Effective mass", D: "Inertial mass" },
        correctAnswer: "B",
        explanation: "The problem of two bodies interacting via central force is solved by using the reduced mass \\(\\mu = \frac{m_1 m_2}{m_1 + m_2}\\) moving about a fixed center."
    },
    {
        id: "M4-08", subjectCode: "MECH", chapterCode: "MECH-04",
        question: "For a body rolling down an incline of angle \\(\\theta\\) without slipping, the frictional force required is:",
        options: { A: "Proportional to \\(\\cos\\theta\\)", B: "Proportional to \\(\\sin\\theta\\)", C: "Zero", D: "Independent of \\(\\theta\\)" },
        correctAnswer: "B",
        explanation: "The static friction provides the torque for rolling: \\(f = \\frac{I}{I + MR^2} Mg \\sin\\theta\\). It increases with the angle \\(\\theta\\)."
    },
    {
        id: "M4-09", subjectCode: "MECH", chapterCode: "MECH-04",
        question: "The Euler equations of motion for a rigid body describe the rotation in terms of:",
        options: { A: "The fixed laboratory frame", B: "The body's principal axes", C: "Spherical polar coordinates", D: "The center of mass velocity" },
        correctAnswer: "B",
        explanation: "Euler's equations are derived in the rotating body frame aligned with the principal axes of inertia, where the inertia tensor is diagonal."
    },
    {
        id: "M4-10", subjectCode: "MECH", chapterCode: "MECH-04",
        question: "The moment of inertia of a uniform solid bar of length \\(L\\) about an axis through one of its ends is:",
        options: { A: "\\( \\frac{1}{12}ML^2 \\)", B: "\\( \\frac{1}{3}ML^2 \\)", C: "\\( \\frac{1}{2}ML^2 \\)", D: "\\( \\frac{2}{5}ML^2 \\)" },
        correctAnswer: "B",
        explanation: "Using the parallel axis theorem: \\(I = I_{cm} + Md^2 = \\frac{1}{12}ML^2 + M(L/2)^2 = \\frac{1}{3}ML^2\\)."
    },
    {
        id: "M4-11", subjectCode: "MECH", chapterCode: "MECH-04",
        question: "When a rigid body undergoes general planar motion, it can be entirely described as:",
        options: { A: "Pure rotation about its center of mass.", B: "Pure translation of its center of mass.", C: "Translation of the center of mass plus rotation about the center of mass.", D: "Pure rolling motion." },
        correctAnswer: "C",
        explanation: "Chasles' theorem (or general planar kinematics) states any rigid body displacement is equivalent to a translation of a base point (like the CM) and a rotation about that point."
    }
];
