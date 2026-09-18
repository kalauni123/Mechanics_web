// UPDATED CONFIGURATION: 50 Questions, 45 Minutes
const EXAM_CONFIG = {
    questionCount: 50, 
    durationSeconds: 45 * 60,
    marks: { correct: 1, wrong: -0.20 }
};

let currentQuestions = [];
let userAnswers = [];
let currentIndex = 0;
let timerInterval = null;
let timeLeft = 0;

// TRUE RANDOMIZATION: Fisher-Yates Shuffle Algorithm
// This ensures unbiased random selection from large pools (e.g., 200+ questions)
function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

document.addEventListener("DOMContentLoaded", function() {
    const ui = {
        setup: document.getElementById('setupScreen'),
        exam: document.getElementById('examScreen'),
        result: document.getElementById('resultScreen'),
        chapSelect: document.getElementById('chapterSelect'),
        startBtn: document.getElementById('startBtn'),
        error: document.getElementById('errorMsg'),
        qText: document.getElementById('questionText'),
        opts: document.getElementById('optionsContainer'),
        counter: document.getElementById('questionCounter'),
        timer: document.getElementById('timer')
    };

    function buildDropdownSafe() {
        const registry = window.subjectRegistry || [];
        const activeSubject = registry[0];

        if (!activeSubject) return;

        ui.chapSelect.innerHTML = '';
        
        const defaultOption = document.createElement('option');
        defaultOption.value = 'all';
        defaultOption.textContent = 'All Chapters (Comprehensive)';
        ui.chapSelect.appendChild(defaultOption);

        activeSubject.chapters.forEach(function(c) {
            const opt = document.createElement('option');
            opt.value = c.id;
            opt.textContent = 'Chapter ' + (c.number || '') + ': ' + c.title;
            ui.chapSelect.appendChild(opt);
        });
    }

    ui.startBtn.addEventListener('click', function() {
        ui.error.textContent = ""; 

        let pool = [
            ...(window.mechanicsCh1 || []),
            ...(window.mechanicsCh2 || []),
            ...(window.mechanicsCh3 || []),
            ...(window.mechanicsCh4 || []),
            ...(window.mechanicsCh5 || []),
            ...(window.mechanicsCh6 || []),
            ...(window.mechanicsCh7 || []),
            ...(window.mechanicsCh8 || []),
            ...(window.mechanicsCh9 || []),
            ...(window.mechanicsCh10 || [])
        ]; 
        
        // Scope Filter
        if (ui.chapSelect.value !== 'all') {
            pool = pool.filter(function(q) {
                return q.chapterCode === ui.chapSelect.value;
            });
        }

        // Safety check: if there are less than 50 questions, it will use however many exist.
        const actualExamLength = Math.min(pool.length, EXAM_CONFIG.questionCount);

        if (actualExamLength === 0) {
            ui.error.textContent = "Error: No questions found. Check that your database files contain questions and are properly loaded in index.html.";
            return;
        }

        // Apply true randomization, then slice exactly the amount needed (up to 50)
        let shuffledPool = shuffleArray([...pool]);
        currentQuestions = shuffledPool.slice(0, actualExamLength);
        
        userAnswers = new Array(actualExamLength).fill(null);
        currentIndex = 0;
        
        ui.setup.classList.add('hidden');
        ui.exam.classList.remove('hidden');
        
        renderQuestion();
        startTimer();
    });

    function renderQuestion() {
        const q = currentQuestions[currentIndex];
        const totalQ = currentQuestions.length;
        
        ui.counter.textContent = 'Q ' + (currentIndex + 1) + ' / ' + totalQ;
        ui.qText.innerHTML = q.question;
        ui.opts.innerHTML = '';
        
        Object.keys(q.options).forEach(function(key) {
            const text = q.options[key];
            const optContainer = document.createElement('div');
            
            let classString = 'option ';
            if (userAnswers[currentIndex] === key) {
                classString += 'selected';
            }
            optContainer.className = classString;
            
            const labelSpan = document.createElement('span');
            labelSpan.className = 'option-label';
            labelSpan.textContent = key;
            
            const textSpan = document.createElement('span');
            textSpan.innerHTML = text;
            
            optContainer.appendChild(labelSpan);
            optContainer.appendChild(textSpan);
            
            optContainer.onclick = function() {
                userAnswers[currentIndex] = key;
                renderQuestion();
            };
            ui.opts.appendChild(optContainer);
        });

        document.getElementById('prevBtn').disabled = (currentIndex === 0);
        document.getElementById('nextBtn').disabled = (currentIndex === totalQ - 1);

        if (window.MathJax && window.MathJax.typesetPromise) {
            MathJax.typesetPromise([ui.exam]).catch(function(err) { console.log(err); });
        }
    }

    document.getElementById('prevBtn').onclick = function() { currentIndex--; renderQuestion(); };
    document.getElementById('nextBtn').onclick = function() { currentIndex++; renderQuestion(); };
    document.getElementById('submitBtn').onclick = function() { finishExam(); };

    function startTimer() {
        timeLeft = EXAM_CONFIG.durationSeconds;
        
        // Initial text set so it instantly says 45:00
        const mStart = Math.floor(timeLeft / 60).toString().padStart(2, '0');
        const sStart = (timeLeft % 60).toString().padStart(2, '0');
        ui.timer.textContent = mStart + ':' + sStart;

        timerInterval = setInterval(function() {
            timeLeft--;
            const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
            const s = (timeLeft % 60).toString().padStart(2, '0');
            ui.timer.textContent = m + ':' + s;
            
            if (timeLeft <= 0) finishExam();
        }, 1000);
    }

    function finishExam() {
        clearInterval(timerInterval);
        ui.exam.classList.add('hidden');
        ui.result.classList.remove('hidden');

        let correct = 0;
        let wrong = 0;
        const totalQ = currentQuestions.length;

        const revCont = document.getElementById('reviewContainer');
        revCont.innerHTML = '';
        
        const reviewHeader = document.createElement('h3');
        reviewHeader.textContent = 'Detailed Question Review';
        reviewHeader.style.marginBottom = '1rem';
        revCont.appendChild(reviewHeader);

        currentQuestions.forEach(function(q, i) {
            const ans = userAnswers[i];
            if (ans === q.correctAnswer) correct++;
            else if (ans !== null) wrong++;

            const reviewItem = document.createElement('div');
            reviewItem.className = 'review-item';

            const pQuestion = document.createElement('p');
            pQuestion.innerHTML = '<strong>Q' + (i+1) + ':</strong> ' + q.question;
            reviewItem.appendChild(pQuestion);

            const grid = document.createElement('div');
            grid.className = 'options-grid';

            Object.keys(q.options).forEach(function(k) {
                const v = q.options[k];
                const optDiv = document.createElement('div');
                
                let cls = 'option ';
                if (k === q.correctAnswer) cls += 'correct';
                else if (k === ans) cls += 'wrong';
                optDiv.className = cls;

                const lbl = document.createElement('span');
                lbl.className = 'option-label';
                lbl.textContent = k;

                const txt = document.createElement('span');
                txt.innerHTML = v;

                optDiv.appendChild(lbl);
                optDiv.appendChild(txt);
                grid.appendChild(optDiv);
            });

            reviewItem.appendChild(grid);

            const expDiv = document.createElement('div');
            expDiv.className = 'explanation-box';
            expDiv.innerHTML = '<strong>Explanation:</strong> ' + q.explanation;
            reviewItem.appendChild(expDiv);

            revCont.appendChild(reviewItem);
        });

        const raw = correct * EXAM_CONFIG.marks.correct;
        const pen = wrong * Math.abs(EXAM_CONFIG.marks.wrong);
        const finalScore = raw - pen;
        
        document.getElementById('finalScore').textContent = finalScore.toFixed(2);
        document.getElementById('accuracyScore').textContent = totalQ > 0 ? ((correct / totalQ) * 100).toFixed(1) : 0;
        document.getElementById('correctCount').textContent = correct + ' / ' + totalQ;

        if (window.MathJax && window.MathJax.typesetPromise) {
            MathJax.typesetPromise([revCont]).catch(function(err) { console.log(err); });
        }
    }

    document.getElementById('homeBtn').onclick = function() {
        ui.result.classList.add('hidden');
        ui.setup.classList.remove('hidden');
    };

    buildDropdownSafe();
});
