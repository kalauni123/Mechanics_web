window.mechanicsCh3 = [
    {
        id: "M3-01", subjectCode: "MECH", chapterCode: "MECH-03",
        question: "The gravitational potential \\(V(r)\\) inside a uniform solid sphere of mass \\(M\\) and radius \\(R\\) (for \\(r < R\\)) is given by:",
        options: { A: "\\( -\\frac{GM}{r} \\)", B: "\\( -\\frac{GM}{2R^3}(3R^2 - r^2) \\)", C: "Zero", D: "\\( -\\frac{GM}{R} \\)" },
        correctAnswer: "B",
        explanation: "Integrating the gravitational field inside a solid sphere from infinity yields a parabolic potential curve: \\(V(r) = -\\frac{GM}{2R^3}(3R^2 - r^2)\\)."
    },
    {
        id: "M3-02", subjectCode: "MECH", chapterCode: "MECH-03",
        question: "According to Kepler's Third Law, the square of the orbital period \\(T\\) of a planet is proportional to:",
        options: { A: "The semi-major axis \\(a\\)", B: "The square of the semi-major axis \\(a^2\\)", C: "The cube of the semi-major axis \\(a^3\\)", D: "The mass of the planet" },
        correctAnswer: "C",
        explanation: "Kepler's Third Law states \\(T^2 \\propto a^3\\), derived from equating gravitational force to centripetal force for circular orbits."
    },
    {
        id: "M3-03", subjectCode: "MECH", chapterCode: "MECH-03",
        question: "Escape velocity \\(v_e\\) from the surface of a spherical planet of mass \\(M\\) and radius \\(R\\) is:",
        options: { A: "\\( \\sqrt{GM/R} \\)", B: "\\( \\sqrt{2GM/R} \\)", C: "\\( 2GM/R \\)", D: "\\( GM/R^2 \\)" },
        correctAnswer: "B",
        explanation: "Setting total mechanical energy to zero at infinity: \\(\\frac{1}{2}mv_e^2 - \\frac{GMm}{R} = 0\\), solving for \\(v_e\\) yields \\(\\sqrt{2GM/R}\\)."
    },
    {
        id: "M3-04", subjectCode: "MECH", chapterCode: "MECH-03",
        question: "The gravitational field inside a uniform thin spherical shell of mass \\(M\\) is:",
        options: { A: "\\( \\frac{GM}{r^2} \\)", B: "\\( \\frac{GM}{R^2} \\)", C: "Zero", D: "\\( \\frac{GM}{r} \\)" },
        correctAnswer: "C",
        explanation: "By Newton's shell theorem (or Gauss's law for gravity), the net gravitational force exerted by a thin shell on any point inside it is identically zero."
    },
    {
        id: "M3-05", subjectCode: "MECH", chapterCode: "MECH-03",
        question: "The gravitational self-energy of a uniform solid sphere of mass \\(M\\) and radius \\(R\\) is:",
        options: { A: "\\( -\\frac{GM^2}{R} \\)", B: "\\( -\\frac{3GM^2}{5R} \\)", C: "\\( -\\frac{GM^2}{2R} \\)", D: "\\( -\\frac{5GM^2}{3R} \\)" },
        correctAnswer: "B",
        explanation: "The work done to assemble a solid sphere from infinitesimal shells brought from infinity is \\(U = -\\frac{3}{5}\\frac{GM^2}{R}\\)."
    },
    {
        id: "M3-06", subjectCode: "MECH", chapterCode: "MECH-03",
        question: "Poisson's equation for a gravitational potential \\(V\\) in a region with mass density \\(\\rho\\) is:",
        options: { A: "\\( \\nabla^2 V = 0 \\)", B: "\\( \\nabla^2 V = 4\\pi G\\rho \\)", C: "\\( \\nabla^2 V = -4\\pi G\\rho \\)", D: "\\( \\nabla \\cdot V = 4\\pi G\\rho \\)" },
        correctAnswer: "B",
        explanation: "Combining Gauss's Law for gravity (\\(\\nabla \\cdot \\mathbf{g} = -4\\pi G\\rho\\)) with \\(\\mathbf{g} = -\\nabla V\\) yields \\(\\nabla^2 V = 4\\pi G\\rho\\)."
    },
    {
        id: "M3-07", subjectCode: "MECH", chapterCode: "MECH-03",
        question: "For an inverse-square central force, the shape of the orbit for a particle with total energy \\(E = 0\\) is a:",
        options: { A: "Circle", B: "Ellipse", C: "Parabola", D: "Hyperbola" },
        correctAnswer: "C",
        explanation: "Energy defines the eccentricity \\(e\\). \\(E < 0\\) is elliptical (bound), \\(E > 0\\) is hyperbolic, and \\(E = 0\\) represents exactly the parabolic escape threshold."
    },
    {
        id: "M3-08", subjectCode: "MECH", chapterCode: "MECH-03",
        question: "Kepler's First Law states that planets move in elliptical orbits with the Sun located at:",
        options: { A: "The exact center", B: "One of the foci", C: "The semi-minor axis", D: "The perihelion" },
        correctAnswer: "B",
        explanation: "The Sun sits at one focus of the ellipse, derived from the \\(1/r\\) solution to the Binet equation."
    },
    {
        id: "M3-09", subjectCode: "MECH", chapterCode: "MECH-03",
        question: "In a central force field, which geometrical property remains constant according to Kepler's Second Law?",
        options: { A: "Linear velocity", B: "Angular acceleration", C: "Areal velocity", D: "Radial distance" },
        correctAnswer: "C",
        explanation: "Areal velocity \\(dA/dt = L / (2m)\\). Since angular momentum \\(L\\) is conserved in a central field, areal velocity is constant."
    },
    {
        id: "M3-10", subjectCode: "MECH", chapterCode: "MECH-03",
        question: "The deduction of Newton's Law of Gravitation from Kepler's Laws fundamentally relies on the fact that planetary accelerations are:",
        options: { A: "Directed tangentially", B: "Inversely proportional to mass", C: "Directed strictly towards the Sun", D: "Constant over time" },
        correctAnswer: "C",
        explanation: "Kepler's second law requires the force to be central (directed to the Sun), while the third law forces it to follow an inverse-square relationship."
    },
    {
        id: "M3-11", subjectCode: "MECH", chapterCode: "MECH-03",
        question: "What happens to the gravitational potential \\(V(r)\\) of a uniform spherical shell as one moves outward from the center to the inner surface?",
        options: { A: "It decreases linearly.", B: "It increases quadratically.", C: "It remains constant.", D: "It drops to zero." },
        correctAnswer: "C",
        explanation: "Since the gravitational field inside the shell is zero (\\(\\mathbf{g} = 0\\)), the potential \\(V\\) must be constant everywhere inside, matching the value exactly at the surface: \\(-GM/R\\)."
    }
];
