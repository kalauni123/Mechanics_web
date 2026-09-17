const EXAM_CONFIG = {
    questionCount: 20, 
    durationSeconds: 20 * 60,
    marks: { correct: 1, wrong: -0.20 }
};

let currentQuestions = [];
let userAnswers = [];
let currentIndex = 0;
let timerInterval = null;
let timeLeft = 0;

document.addEventListener("DOMContentLoaded", () => {
    const ui = {
        setup: document.getElementById('setupScreen'),
        exam: document.getElementById('examScreen'),
        result: document.getElementById('resultScreen'),
        subjSelect: document.getElementById('subjectSelect'),
        chapSelect: document.getElementById('chapterSelect'),
        startBtn: document.getElementById('startBtn'),
        error: document.getElementById('errorMsg'),
        qText: document.getElementById('questionText'),
        opts: document.getElementById('optionsContainer'),
        counter: document.getElementById('questionCounter'),
        timer: document.getElementById('timer')
    };

    function init() {
        const registry = window.subjectRegistry || [];
        
        ui.subjSelect.innerHTML = `<option value="all">All Subjects</option>` + 
            registry.map(s => `<option value="${s.id}">${s.name}</option>`).join('');
            
        ui.subjSelect.addEventListener('change', (e) => {
            if (e.target.value === 'all') {
                ui.chapSelect.innerHTML = `<option value="all">All Chapters</option>`;
                return;
            }
            const subj = registry.find(s => s.id === e.target.value);
            ui.chapSelect.innerHTML = `<option value="all">All Chapters</option>` + 
                subj.chapters.map(c => `<option value="${c.id}">${c.title}</option>`).join('');
        });
        
        ui.subjSelect.dispatchEvent(new Event('change'));
    }

    ui.startBtn.addEventListener('click', () => {
        // MERGE ALL CHAPTERS HERE
        let pool = [
            ...(window.mechanicsMCQs || []),
            ...(window.mechanicsCh2 || []) // New chapter successfully merged!
        ]; 
        
        if (ui.subjSelect.value !== 'all') {
            pool = pool.filter(q => q.subjectCode === ui.subjSelect.value);
            if (ui.chapSelect.value !== 'all') {
                pool = pool.filter(q => q.chapterCode === ui.chapSelect.value);
            }
        }

        const actualExamLength = Math.min(pool.length, EXAM_CONFIG.questionCount);

        if (actualExamLength === 0) {
            ui.error.innerText = "Error: Cannot find question database. Check your chapter files.";
            return;
        }

        currentQuestions = [...pool].sort(() => 0.5 - Math.random()).slice(0, actualExamLength);
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
        
        ui.counter.innerText = `Q ${currentIndex + 1} / ${totalQ}`;
        ui.qText.innerHTML = q.question;
        ui.opts.innerHTML = '';
        
        Object.entries(q.options).forEach(([key, text]) => {
            const div = document.createElement('div');
            div.className = `option ${userAnswers[currentIndex] === key ? 'selected' : ''}`;
            div.innerHTML = `<span class="option-label">${key}</span> <span>${text}</span>`;
            div.onclick = () => {
                userAnswers[currentIndex] = key;
                renderQuestion();
            };
            ui.opts.appendChild(div);
        });

        document.getElementById('prevBtn').disabled = currentIndex === 0;
        document.getElementById('nextBtn').disabled = currentIndex === totalQ - 1;

        if (window.MathJax && window.MathJax.typesetPromise) {
            MathJax.typesetPromise([ui.exam]).catch(err => console.log(err));
        }
    }

    document.getElementById('prevBtn').onclick = () => { currentIndex--; renderQuestion(); };
    document.getElementById('nextBtn').onclick = () => { currentIndex++; renderQuestion(); };
    document.getElementById('submitBtn').onclick = () => finishExam();

    function startTimer() {
        timeLeft = EXAM_CONFIG.durationSeconds;
        timerInterval = setInterval(() => {
            timeLeft--;
            const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
            const s = (timeLeft % 60).toString().padStart(2, '0');
            ui.timer.innerText = `${m}:${s}`;
            
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
        revCont.innerHTML = '<h3>Detailed Question Review</h3>';

        currentQuestions.forEach((q, i) => {
            const ans = userAnswers[i];
            if (ans === q.correctAnswer) correct++;
            else if (ans !== null) wrong++;

            let html = `<div class="review-item"><p><strong>Q${i+1}:</strong> ${q.question}</p><div class="options-grid" style="margin-top:1rem;">`;
            Object.entries(q.options).forEach(([k, v]) => {
                let cls = 'option ';
                if (k === q.correctAnswer) cls += 'correct';
                else if (k === ans) cls += 'wrong';
                html += `<div class="${cls}"><span class="option-label">${k}</span> ${v}</div>`;
            });
            html += `</div><div class="explanation-box"><strong>Explanation:</strong> ${q.explanation}</div></div>`;
            revCont.innerHTML += html;
        });

        const raw = correct * EXAM_CONFIG.marks.correct;
        const pen = wrong * Math.abs(EXAM_CONFIG.marks.wrong);
        
        document.getElementById('finalScore').innerText = (raw - pen).toFixed(2);
        document.getElementById('accuracyScore').innerText = totalQ > 0 ? ((correct / totalQ) * 100).toFixed(1) : 0;
        document.getElementById('correctCount').innerText = `${correct} / ${totalQ}`;

        if (window.MathJax && window.MathJax.typesetPromise) {
            MathJax.typesetPromise([revCont]).catch(err => console.log(err));
        }
    }

    document.getElementById('homeBtn').onclick = () => {
        ui.result.classList.add('hidden');
        ui.setup.classList.remove('hidden');
    };

    init();
});
