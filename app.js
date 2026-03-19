const subjects = [
  { id: "anh", label: "🇬🇧 Tiếng Anh", data: () => exams },
  { id: "hoa", label: "⚗️ Hóa Học",    data: () => examsHoa }
];

let currentSubjectIdx = 0;
let currentExamIdx = 0;
let currentSectionIdx = 0;
let userAnswers = {}; // mcq: { qId: "A" }, truefalse: { "qId_a": "D", "qId_b": "S", ... }
let submitted = {};

function getCurrentExams() { return subjects[currentSubjectIdx].data(); }

function init() { renderSubjectTabs(); renderExamTabs(); renderSection(); }

function renderSubjectTabs() {
  document.getElementById('subject-tabs').innerHTML = subjects.map((s, i) =>
    `<button class="subject-tab ${i===currentSubjectIdx?'active':''}" onclick="selectSubject(${i})">${s.label}</button>`
  ).join('');
}

function selectSubject(idx) {
  currentSubjectIdx = idx; currentExamIdx = 0; currentSectionIdx = 0;
  renderSubjectTabs(); renderExamTabs(); renderSection();
}

function renderExamTabs() {
  document.getElementById('exam-tabs').innerHTML = getCurrentExams().map((e, i) =>
    `<button class="exam-tab ${i===currentExamIdx?'active':''}" onclick="selectExam(${i})">${e.title}</button>`
  ).join('');
}

function selectExam(idx) {
  currentExamIdx = idx; currentSectionIdx = 0;
  renderExamTabs(); renderSection();
}

// ── Count answered for a section (handles both types) ──
function countAnswered(section) {
  if (section.type === 'truefalse') {
    return section.questions.filter(q =>
      ['a','b','c','d'].every(k => userAnswers[q.id+'_'+k])
    ).length;
  }
  return section.questions.filter(q => userAnswers[q.id]).length;
}

// ── Count correct for a section ──
function countCorrect(section) {
  if (section.type === 'truefalse') {
    return section.questions.filter(q =>
      ['a','b','c','d'].every(k => userAnswers[q.id+'_'+k] === q.answers[k])
    ).length;
  }
  return section.questions.filter(q => userAnswers[q.id] && userAnswers[q.id][0] === q.answer).length;
}

// ── Check unanswered ──
function getUnanswered(section) {
  if (section.type === 'truefalse') {
    return section.questions.filter(q =>
      ['a','b','c','d'].some(k => !userAnswers[q.id+'_'+k])
    );
  }
  return section.questions.filter(q => !userAnswers[q.id]);
}

function renderSection() {
  const exam = getCurrentExams()[currentExamIdx];
  const section = exam.sections[currentSectionIdx];

  document.getElementById('section-nav').innerHTML = exam.sections.map((s, i) =>
    `<button class="section-btn ${i===currentSectionIdx?'active':''}" onclick="selectSection(${i})">Phần ${i+1}</button>`
  ).join('');

  const isSubmitted = submitted[section.id];
  const total = section.questions.length;
  const answered = countAnswered(section);

  let html = `<div class="card"><h2>${section.title}</h2>`;
  if (section.passage) html += `<div class="passage">${escHtml(section.passage)}</div>`;

  html += `<div class="progress-wrap">
    <div class="progress-bar-bg"><div class="progress-bar-fill" style="width:${total?(answered/total*100):0}%"></div></div>
    <div class="progress-text">Đã trả lời: ${answered}/${total}</div>
  </div>`;

  if (section.type === 'truefalse') {
    html += renderTrueFalseQuestions(section, isSubmitted);
  } else {
    html += renderMCQQuestions(section, isSubmitted);
  }

  if (isSubmitted) {
    const correct = countCorrect(section);
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
  if (currentSectionIdx < exam.sections.length - 1) {
    html += `<button class="btn btn-success" onclick="selectSection(${currentSectionIdx+1})">Phần tiếp theo →</button>`;
  }
  html += `</div></div>`;

  document.getElementById('content').innerHTML = html;
}

function renderMCQQuestions(section, isSubmitted) {
  let html = '';
  section.questions.forEach(q => {
    const selected = userAnswers[q.id];
    const isCorrect = selected && selected[0] === q.answer;
    let blockClass = isSubmitted ? (isCorrect ? 'correct' : 'wrong') : '';
    html += `<div class="question-block ${blockClass}">
      <div class="question-text">Câu ${q.num}${q.text ? '. '+escHtml(q.text) : '.'}</div>
      <div class="options">`;
    q.options.forEach(opt => {
      const letter = opt[0];
      let lc = '';
      if (isSubmitted) {
        if (letter === q.answer) lc = 'correct-ans';
        else if (selected && selected[0] === letter) lc = 'wrong-ans';
      } else if (selected && selected[0] === letter) lc = 'selected';
      html += `<label class="option-label ${lc}">
        <input type="radio" name="${q.id}" value="${letter}" ${selected&&selected[0]===letter?'checked':''} ${isSubmitted?'disabled':''} onchange="selectAnswer('${q.id}','${letter}')">
        <span>${escHtml(opt)}</span>
      </label>`;
    });
    html += `</div>`;
    if (isSubmitted) {
      html += `<div class="feedback show ${isCorrect?'correct':'wrong'}">${isCorrect?'✓ Đúng! Đáp án: '+q.answer:'✗ Sai. Đáp án đúng: '+q.answer}</div>`;
    }
    html += `</div>`;
  });
  return html;
}

function renderTrueFalseQuestions(section, isSubmitted) {
  let html = '';
  section.questions.forEach(q => {
    // Check if all 4 sub-answers correct
    const allCorrect = isSubmitted && ['a','b','c','d'].every(k => userAnswers[q.id+'_'+k] === q.answers[k]);
    const anyAnswered = ['a','b','c','d'].some(k => userAnswers[q.id+'_'+k]);
    let blockClass = isSubmitted ? (allCorrect ? 'correct' : 'wrong') : '';

    html += `<div class="question-block ${blockClass}">
      <div class="question-text">Câu ${q.num}. ${escHtml(q.stem)}</div>
      <div class="tf-table">`;

    ['a','b','c','d'].forEach(k => {
      const subKey = q.id+'_'+k;
      const chosen = userAnswers[subKey];
      const correct = q.answers[k]; // "D" or "S"
      let rowClass = '';
      if (isSubmitted) rowClass = chosen === correct ? 'tf-row-correct' : 'tf-row-wrong';

      html += `<div class="tf-row ${rowClass}">
        <div class="tf-label">${escHtml(k+'. '+q.items[k])}</div>
        <div class="tf-btns">`;

      ['D','S'].forEach(val => {
        const active = chosen === val;
        let btnClass = 'tf-btn';
        if (isSubmitted) {
          if (val === correct) btnClass += ' tf-btn-correct';
          else if (active && val !== correct) btnClass += ' tf-btn-wrong';
        } else if (active) btnClass += ' tf-btn-active';
        html += `<button class="${btnClass}" ${isSubmitted?'disabled':''} onclick="selectTF('${subKey}','${val}',this)">${val==='D'?'Đúng':'Sai'}</button>`;
      });

      html += `</div>`;
      if (isSubmitted) {
        const ok = chosen === correct;
        html += `<div class="tf-hint ${ok?'correct':'wrong'}">${ok?'✓':'✗'} Đáp án: ${correct==='D'?'Đúng':'Sai'}</div>`;
      }
      html += `</div>`;
    });

    html += `</div></div>`;
  });
  return html;
}

function selectSection(idx) {
  currentSectionIdx = idx;
  renderSection();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function selectAnswer(qId, letter) {
  userAnswers[qId] = letter;
  updateProgress();
}

function selectTF(subKey, val, btn) {
  userAnswers[subKey] = val;
  // Update button styles in the same tf-btns container
  const btns = btn.parentElement.querySelectorAll('.tf-btn');
  btns.forEach(b => {
    b.classList.remove('tf-btn-active');
    if (b === btn) b.classList.add('tf-btn-active');
  });
  updateProgress();
}

function updateProgress() {
  const section = getCurrentExams()[currentExamIdx].sections[currentSectionIdx];
  const total = section.questions.length;
  const answered = countAnswered(section);
  const fill = document.querySelector('.progress-bar-fill');
  const text = document.querySelector('.progress-text');
  if (fill) fill.style.width = (answered/total*100)+'%';
  if (text) text.textContent = `Đã trả lời: ${answered}/${total}`;
}

function submitSection(sectionId) {
  const section = getCurrentExams()[currentExamIdx].sections[currentSectionIdx];
  const unanswered = getUnanswered(section);
  if (unanswered.length > 0) {
    if (!confirm(`Còn ${unanswered.length} câu chưa trả lời đủ. Bạn có muốn nộp bài không?`)) return;
  }
  submitted[sectionId] = true;
  renderSection();
}

function resetSection(sectionId) {
  const section = getCurrentExams()[currentExamIdx].sections[currentSectionIdx];
  section.questions.forEach(q => {
    if (section.type === 'truefalse') {
      ['a','b','c','d'].forEach(k => delete userAnswers[q.id+'_'+k]);
    } else {
      delete userAnswers[q.id];
    }
  });
  delete submitted[sectionId];
  renderSection();
}

function escHtml(str) {
  if (!str) return '';
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

document.addEventListener('DOMContentLoaded', init);
