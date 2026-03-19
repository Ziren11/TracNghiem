const subjects = [
  { id: "anh", label: "🇬🇧 Tiếng Anh", data: () => exams },
  { id: "hoa", label: "⚗️ Hóa Học",    data: () => examsHoa }
];

let currentSubjectIdx = 0;
let currentExamIdx = 0;
let currentSectionIdx = 0;
let userAnswers = {};
let submitted = {};

function getCurrentExams() {
  return subjects[currentSubjectIdx].data();
}

function init() {
  renderSubjectTabs();
  renderExamTabs();
  renderSection();
}

function renderSubjectTabs() {
  const wrap = document.getElementById('subject-tabs');
  wrap.innerHTML = subjects.map((s, i) =>
    `<button class="subject-tab ${i === currentSubjectIdx ? 'active' : ''}" onclick="selectSubject(${i})">${s.label}</button>`
  ).join('');
}

function selectSubject(idx) {
  currentSubjectIdx = idx;
  currentExamIdx = 0;
  currentSectionIdx = 0;
  renderSubjectTabs();
  renderExamTabs();
  renderSection();
}

function renderExamTabs() {
  const exams = getCurrentExams();
  const wrap = document.getElementById('exam-tabs');
  wrap.innerHTML = exams.map((e, i) =>
    `<button class="exam-tab ${i === currentExamIdx ? 'active' : ''}" onclick="selectExam(${i})">${e.title}</button>`
  ).join('');
}

function selectExam(idx) {
  currentExamIdx = idx;
  currentSectionIdx = 0;
  renderExamTabs();
  renderSection();
}

function renderSection() {
  const exams = getCurrentExams();
  const exam = exams[currentExamIdx];
  const section = exam.sections[currentSectionIdx];

  const nav = document.getElementById('section-nav');
  nav.innerHTML = exam.sections.map((s, i) =>
    `<button class="section-btn ${i === currentSectionIdx ? 'active' : ''}" onclick="selectSection(${i})">Phần ${i + 1}</button>`
  ).join('');

  const content = document.getElementById('content');
  const isSubmitted = submitted[section.id];

  let html = `<div class="card"><h2>${section.title}</h2>`;

  if (section.passage) {
    html += `<div class="passage">${escHtml(section.passage)}</div>`;
  }

  const total = section.questions.length;
  const answered = section.questions.filter(q => userAnswers[q.id]).length;
  html += `<div class="progress-wrap">
    <div class="progress-bar-bg"><div class="progress-bar-fill" style="width:${total ? (answered/total*100) : 0}%"></div></div>
    <div class="progress-text">Đã trả lời: ${answered}/${total}</div>
  </div>`;

  section.questions.forEach(q => {
    const selected = userAnswers[q.id];
    const isCorrect = selected && selected[0] === q.answer;
    let blockClass = '';
    if (isSubmitted) blockClass = isCorrect ? 'correct' : 'wrong';

    html += `<div class="question-block ${blockClass}" id="qblock-${q.id}">
      <div class="question-text">Câu ${q.num}${q.text ? '. ' + escHtml(q.text) : '.'}</div>
      <div class="options">`;

    q.options.forEach(opt => {
      const letter = opt[0];
      let labelClass = '';
      if (isSubmitted) {
        if (letter === q.answer) labelClass = 'correct-ans';
        else if (selected && selected[0] === letter && letter !== q.answer) labelClass = 'wrong-ans';
      } else if (selected && selected[0] === letter) {
        labelClass = 'selected';
      }
      const checked = selected && selected[0] === letter ? 'checked' : '';
      const disabled = isSubmitted ? 'disabled' : '';
      html += `<label class="option-label ${labelClass}">
        <input type="radio" name="${q.id}" value="${letter}" ${checked} ${disabled} onchange="selectAnswer('${q.id}', '${letter}')">
        <span>${escHtml(opt)}</span>
      </label>`;
    });

    html += `</div>`;
    if (isSubmitted) {
      const fb = isCorrect ? `✓ Đúng! Đáp án: ${q.answer}` : `✗ Sai. Đáp án đúng: ${q.answer}`;
      html += `<div class="feedback show ${isCorrect ? 'correct' : 'wrong'}">${fb}</div>`;
    }
    html += `</div>`;
  });

  if (isSubmitted) {
    const correct = section.questions.filter(q => userAnswers[q.id] && userAnswers[q.id][0] === q.answer).length;
    html += `<div class="score-box show">
      <div class="score-num">${correct}/${total}</div>
      <div class="score-label">Số câu đúng — ${Math.round(correct/total*100)}%</div>
    </div>`;
  }

  html += `<div class="btn-row">`;
  if (!isSubmitted) {
    html += `<button class="btn btn-primary" onclick="submitSection('${section.id}')">Nộp bài</button>`;
  } else {
    html += `<button class="btn btn-outline" onclick="resetSection('${section.id}')">Làm lại</button>`;
  }
  const examsArr = getCurrentExams();
  const exam2 = examsArr[currentExamIdx];
  if (currentSectionIdx < exam2.sections.length - 1) {
    html += `<button class="btn btn-success" onclick="selectSection(${currentSectionIdx + 1})">Phần tiếp theo →</button>`;
  }
  html += `</div></div>`;

  content.innerHTML = html;
}

function selectSection(idx) {
  currentSectionIdx = idx;
  renderSection();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function selectAnswer(qId, letter) {
  userAnswers[qId] = letter;
  const exams = getCurrentExams();
  const section = exams[currentExamIdx].sections[currentSectionIdx];
  const total = section.questions.length;
  const answered = section.questions.filter(q => userAnswers[q.id]).length;
  const fill = document.querySelector('.progress-bar-fill');
  const text = document.querySelector('.progress-text');
  if (fill) fill.style.width = (answered / total * 100) + '%';
  if (text) text.textContent = `Đã trả lời: ${answered}/${total}`;
}

function submitSection(sectionId) {
  const exams = getCurrentExams();
  const section = exams[currentExamIdx].sections[currentSectionIdx];
  const unanswered = section.questions.filter(q => !userAnswers[q.id]);
  if (unanswered.length > 0) {
    if (!confirm(`Còn ${unanswered.length} câu chưa trả lời. Bạn có muốn nộp bài không?`)) return;
  }
  submitted[sectionId] = true;
  renderSection();
}

function resetSection(sectionId) {
  const exams = getCurrentExams();
  const section = exams[currentExamIdx].sections[currentSectionIdx];
  section.questions.forEach(q => delete userAnswers[q.id]);
  delete submitted[sectionId];
  renderSection();
}

function escHtml(str) {
  if (!str) return '';
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

document.addEventListener('DOMContentLoaded', init);
