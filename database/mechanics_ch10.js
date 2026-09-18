window.mechanicsCh10 = [
    {
        id: "M10-01", subjectCode: "MECH", chapterCode: "MECH-10",
        question: "Constraints that can be expressed as algebraic equations relating coordinates (and possibly time) independently of velocities are known as:",
        options: { A: "Non-holonomic constraints", B: "Holonomic constraints", C: "Rheonomic constraints", D: "Scleronomic constraints" },
        correctAnswer: "B",
        explanation: "Holonomic constraints are of the form \\(f(q_1, q_2, ..., q_n, t) = 0\\). If velocities are inherently involved and cannot be integrated out, the constraint is non-holonomic."
    },
    {
        id: "M10-02", subjectCode: "MECH", chapterCode: "MECH-10",
        question: "D'Alembert's principle states that the virtual work done by the forces of constraint is:",
        options: { A: "Equal to the change in kinetic energy", B: "Maximum", C: "Zero", D: "Equal to the applied forces" },
        correctAnswer: "C",
        explanation: "D'Alembert's principle asserts that for systems with ideal (frictionless) constraints, the internal constraint forces do no virtual work: \\(\\sum (\\mathbf{F}_i - \dot{\\mathbf{p}}_i) \\cdot \\delta \\mathbf{r}_i = 0\\)."
    },
    {
        id: "M10-03", subjectCode: "MECH", chapterCode: "MECH-10",
        question: "The Lagrangian \\(L\\) of a conservative system is defined in terms of kinetic energy \\(T\\) and potential energy \\(V\\) as:",
        options: { A: "\\( L = T + V \\)", B: "\\( L = T - V \\)", C: "\\( L = V - T \\)", D: "\\( L = T/V \\)" },
        correctAnswer: "B",
        explanation: "By definition in analytical mechanics, the Lagrangian is the difference between the kinetic and potential energies: \\(L = T - V\\)."
    },
    {
        id: "M10-04", subjectCode: "MECH", chapterCode: "MECH-10",
        question: "If the Lagrangian of a system does not explicitly depend on a particular generalized coordinate \\(q_k\\) (i.e., \\(q_k\\) is cyclic), then:",
        options: { A: "The corresponding generalized force is zero.", B: "The total energy is conserved.", C: "The corresponding generalized momentum \\(p_k\\) is conserved.", D: "The kinetic energy is independent of time." },
        correctAnswer: "C",
        explanation: "From Lagrange's equation \\(\\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial \\dot{q}_k}\\right) - \\frac{\\partial L}{\\partial q_k} = 0\\). If \\(\\frac{\\partial L}{\\partial q_k} = 0\\), then \\(\\frac{d}{dt}(p_k) = 0\\), meaning \\(p_k\\) is a constant of motion."
    },
    {
        id: "M10-05", subjectCode: "MECH", chapterCode: "MECH-10",
        question: "Hamilton's Principle (the principle of least action) states that the actual path taken by a dynamical system between two states at times \\(t_1\\) and \\(t_2\\) is the one that:",
        options: { A: "Maximizes the kinetic energy.", B: "Minimizes the potential energy.", C: "Makes the action integral \\( S = \\int_{t_1}^{t_2} L dt \\) stationary.", D: "Conserves total mechanical energy." },
        correctAnswer: "C",
        explanation: "Hamilton's Principle is a variational principle asserting that the variation of the action \\(\\delta S = \\delta \\int L dt = 0\\) for the true physical path."
    }
];
