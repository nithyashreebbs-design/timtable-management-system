const DAYS    = ['Monday','Tuesday','Wednesday','Thursday','Friday'];
const PERIODS = ['P1 (9:00-10:00)','P2 (10:00-11:00)','P3 (11:00-12:00)',
                 'P4 (12:00-1:00)','P5 (2:00-3:00)','P6 (3:00-4:00)'];
const SECTIONS = ['A','B','C','D','E','F','G','H','I'];

const SEC_COLORS = {
  A:'#a99ffe', B:'#f7b26a', C:'#6af7c8', D:'#f76a8a', E:'#6ac8f7',
  F:'#c8f76a', G:'#f76af7', H:'#f7f76a', I:'#f78c6a'
};

const SUBJECTS = {
  MATHS: { name:'Maths',   code:'MTH', credits:4, css:'s-maths', color:'#a99ffe' },
  OS:    { name:'OS',      code:'OS',  credits:4, css:'s-os',    color:'#f7b26a', lab:true },
  DDCO:  { name:'DDCO',    code:'DDC', credits:4, css:'s-ddco',  color:'#6af7c8' },
  DS:    { name:'DS',      code:'DS',  credits:3, css:'s-ds',    color:'#f76a8a', lab:true },
  CPP:   { name:'C++',     code:'C++', credits:3, css:'s-cpp',   color:'#6ac8f7' },
  DBMS:  { name:'DBMS',    code:'DBM', credits:1, css:'s-dbms',  color:'#c8f76a', lab:true },
  MC:    { name:'MC',      code:'MC',  credits:1, css:'s-mc',    color:'#f76af7' },
  ADA:   { name:'ADA',     code:'ADA', credits:1, css:'s-ada',   color:'#f7f76a', lab:true },
  LIB:   { name:'Library', code:'LIB', credits:0, css:'s-lib',   color:'#6af7c8' }
};

const TEACHERS = {
  T01: { name:'Prof. Chamanthi.S',    subjects:['MATHS'] },
  T02: { name:'Prof. SowmyaShree', subjects:['MATHS'] },
  T03: { name:'Prof. Sridevi',     subjects:['OS']    },
  T04: { name:'Prof. Manjunath',   subjects:['OS']    },
  T05: { name:'Prof. Suresh',     subjects:['DDCO']  },
  T06: { name:'Prof. Madhu',     subjects:['DDCO']  },
  T07: { name:'Prof. Lokesh',      subjects:['DS']    },
  T08: { name:'Prof. Bharath',  subjects:['DS']    },
  T09: { name:'Prof. Ranajan Thakuria',    subjects:['CPP']   },
  T10: { name:'Prof. Nazarath',   subjects:['CPP']   },
  T11: { name:'Prof. Padmavathi',     subjects:['DBMS']  },
  T12: { name:'Prof. Sathyasheelan',    subjects:['MC']    },
  T13: { name:'Prof. Kavitha',     subjects:['MC']    },
  T14: { name:'Prof. Latha',   subjects:['ADA']   },
  T15: { name:'Mr. Arjun',     subjects:['ADA']   },
  T16: { name:'Ms. Sneha',      subjects:['LIB']   },
};

const SEC_TEACHERS = {
  A: { MATHS:'T01', OS:'T03', DDCO:'T05', DS:'T07', CPP:'T09', DBMS:'T11', MC:'T12', ADA:'T14', LIB:'T16' },
  B: { MATHS:'T01', OS:'T03', DDCO:'T05', DS:'T07', CPP:'T09', DBMS:'T11', MC:'T12', ADA:'T14', LIB:'T16' },
  C: { MATHS:'T01', OS:'T03', DDCO:'T05', DS:'T07', CPP:'T09', DBMS:'T11', MC:'T12', ADA:'T14', LIB:'T16' },
  D: { MATHS:'T01', OS:'T03', DDCO:'T05', DS:'T07', CPP:'T09', DBMS:'T11', MC:'T12', ADA:'T14', LIB:'T16' },
  E: { MATHS:'T01', OS:'T03', DDCO:'T05', DS:'T07', CPP:'T09', DBMS:'T11', MC:'T12', ADA:'T14', LIB:'T16' },
  F: { MATHS:'T02', OS:'T04', DDCO:'T06', DS:'T08', CPP:'T10', DBMS:'T11', MC:'T13', ADA:'T15', LIB:'T16' },
  G: { MATHS:'T02', OS:'T04', DDCO:'T06', DS:'T08', CPP:'T10', DBMS:'T11', MC:'T13', ADA:'T15', LIB:'T16' },
  H: { MATHS:'T02', OS:'T04', DDCO:'T06', DS:'T08', CPP:'T10', DBMS:'T11', MC:'T13', ADA:'T15', LIB:'T16' },
  I: { MATHS:'T02', OS:'T04', DDCO:'T06', DS:'T08', CPP:'T10', DBMS:'T11', MC:'T13', ADA:'T15', LIB:'T16' }
};

const mk = (s, lab=false) => ({ subj:s, lab });

const TIMETABLE = {
A: [
  [mk('DS',true),mk('DS',true),mk('DDCO'),mk('MATHS'),mk('OS'),mk('CPP')],
  [mk('CPP'),mk('LIB'),mk('ADA',true),mk('ADA',true),mk('MATHS'),mk('OS')],
  [mk('OS',true),mk('OS',true),mk('MC'),mk('DDCO'),mk('CPP'),mk('MATHS')],
  [mk('DBMS',true),mk('DBMS',true),mk('MC'),mk('MATHS'),mk('OS'),mk('DDCO')],
  [mk('MATHS'),mk('DDCO'),mk('ADA'),mk('MC'),mk('DS'),mk('CPP')]
],
B: [
  [mk('DDCO'),mk('CPP'),mk('ADA',true),mk('ADA',true),mk('MC'),mk('MATHS')],
  [mk('MATHS'),mk('OS'),mk('DS',true),mk('DS',true),mk('CPP'),mk('DDCO')],
  [mk('DDCO'),mk('MC'),mk('LIB'),mk('MATHS'),mk('OS',true),mk('OS',true)],
  [mk('ADA'),mk('OS'),mk('DBMS',true),mk('DBMS',true),mk('MATHS'),mk('CPP')],
  [mk('DDCO'),mk('OS'),mk('CPP'),mk('DS'),mk('MATHS'),mk('MC')]
],
C: [
  [mk('OS',true),mk('OS',true),mk('MATHS'),mk('MC'),mk('CPP'),mk('DS')],
  [mk('MC'),mk('MATHS'),mk('OS'),mk('DDCO'),mk('DS',true),mk('DS',true)],
  [mk('CPP'),mk('MATHS'),mk('DDCO'),mk('OS'),mk('DBMS',true),mk('DBMS',true)],
  [mk('ADA',true),mk('ADA',true),mk('DDCO'),mk('CPP'),mk('LIB'),mk('MATHS')],
  [mk('MC'),mk('MATHS'),mk('OS'),mk('CPP'),mk('DDCO'),mk('ADA')]
],
D: [
  [mk('MATHS'),mk('MC'),mk('OS'),mk('CPP'),mk('ADA',true),mk('ADA',true)],
  [mk('DDCO'),mk('MC'),mk('OS',true),mk('OS',true),mk('DS'),mk('MATHS')],
  [mk('MATHS'),mk('DDCO'),mk('DBMS',true),mk('DBMS',true),mk('MC'),mk('CPP')],
  [mk('DS',true),mk('DS',true),mk('MATHS'),mk('DDCO'),mk('CPP'),mk('OS')],
  [mk('ADA'),mk('CPP'),mk('DDCO'),mk('MATHS'),mk('OS'),mk('LIB')]
],
E: [
  [mk('CPP'),mk('DDCO'),mk('DBMS',true),mk('DBMS',true),mk('MATHS'),mk('OS')],
  [mk('ADA',true),mk('ADA',true),mk('DDCO'),mk('MATHS'),mk('MC'),mk('CPP')],
  [mk('DS',true),mk('DS',true),mk('MATHS'),mk('CPP'),mk('DDCO'),mk('OS')],
  [mk('DDCO'),mk('MATHS'),mk('OS',true),mk('OS',true),mk('DS'),mk('MC')],
  [mk('LIB'),mk('ADA'),mk('MC'),mk('OS'),mk('CPP'),mk('MATHS')]
],
F: [
  [mk('MC'),mk('CPP'),mk('OS'),mk('MATHS'),mk('DS',true),mk('DS',true)],
  [mk('DBMS',true),mk('DBMS',true),mk('CPP'),mk('MATHS'),mk('DDCO'),mk('OS')],
  [mk('CPP'),mk('MC'),mk('OS',true),mk('OS',true),mk('DDCO'),mk('MATHS')],
  [mk('MATHS'),mk('DS'),mk('ADA',true),mk('ADA',true),mk('CPP'),mk('DDCO')],
  [mk('ADA'),mk('MC'),mk('LIB'),mk('DDCO'),mk('MATHS'),mk('OS')]
],
G: [
  [mk('ADA',true),mk('ADA',true),mk('MATHS'),mk('DDCO'),mk('LIB'),mk('CPP')],
  [mk('DS',true),mk('DS',true),mk('MATHS'),mk('ADA'),mk('OS'),mk('MC')],
  [mk('DBMS',true),mk('DBMS',true),mk('DDCO'),mk('MATHS'),mk('OS'),mk('CPP')],
  [mk('DDCO'),mk('CPP'),mk('MC'),mk('MATHS'),mk('OS',true),mk('OS',true)],
  [mk('OS'),mk('MATHS'),mk('DDCO'),mk('MC'),mk('CPP'),mk('DS')]
],
H: [
  [mk('MATHS'),mk('MC'),mk('OS',true),mk('OS',true),mk('CPP'),mk('DDCO')],
  [mk('MATHS'),mk('CPP'),mk('OS'),mk('DDCO'),mk('ADA',true),mk('ADA',true)],
  [mk('MC'),mk('DDCO'),mk('DS',true),mk('DS',true),mk('MATHS'),mk('OS')],
  [mk('DS'),mk('OS'),mk('MATHS'),mk('CPP'),mk('DBMS',true),mk('DBMS',true)],
  [mk('CPP'),mk('DDCO'),mk('MATHS'),mk('ADA'),mk('LIB'),mk('MC')]
],
I: [
  [mk('DDCO'),mk('MATHS'),mk('MC'),mk('CPP'),mk('OS',true),mk('OS',true)],
  [mk('DDCO'),mk('MATHS'),mk('ADA'),mk('MC'),mk('DBMS',true),mk('DBMS',true)],
  [mk('LIB'),mk('CPP'),mk('MATHS'),mk('OS'),mk('ADA',true),mk('ADA',true)],
  [mk('CPP'),mk('MATHS'),mk('DDCO'),mk('OS'),mk('DS',true),mk('DS',true)],
  [mk('DDCO'),mk('CPP'),mk('OS'),mk('DS'),mk('MC'),mk('MATHS')]
]
};

function getTeacherShort(tid) {
  const t = TEACHERS[tid];
  const parts = t.name.replace(/Dr\.|Prof\.|Mr\.|Ms\./g, '').trim().split(' ');
  return parts[0][0] + '. ' + parts[parts.length - 1];
}

function renderCell(entry, section) {
  const subj        = SUBJECTS[entry.subj];
  const teacherKey  = SEC_TEACHERS[section][entry.subj];
  const teacherShort = getTeacherShort(teacherKey);
  const labBadge    = entry.lab ? `<span class="badge lab-badge">LAB</span>` : '';
  const libBadge    = entry.subj === 'LIB' ? `<span class="badge lib-badge">FREE</span>` : '';
  return `<div class="cell ${subj.css}">
    <span class="subj">${subj.code}</span>
    <span class="teacher">${teacherShort}</span>
    ${labBadge}${libBadge}
  </div>`;
}

function renderSection(sec) {
  const tt = TIMETABLE[sec];
  let rows = '';

  for (let p = 0; p < 6; p++) {
    const isLabRow = tt.some(day => day[p] && day[p].lab);
    rows += `<tr class="${isLabRow ? 'lab-row' : ''}">
      <td>${PERIODS[p]}</td>`;
    for (let d = 0; d < 5; d++) {
      rows += `<td>${renderCell(tt[d][p], sec)}</td>`;
    }
    rows += `</tr>`;
  }

  return `
  <div class="section-title">
    <div class="section-badge sec-${sec}">${sec}</div>
    <div>
      <h2>Section ${sec} — Weekly Timetable</h2>
      <p>6 PERIODS/DAY · 4 LAB DAYS · 1 LIBRARY PERIOD/WEEK</p>
    </div>
  </div>
  <div class="tt-wrap">
    <table>
      <thead>
        <tr>
          <th>Period</th>
          <th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  </div>`;
}

function buildTeacherTimetable(tid) {
  const result = {};
  for (let d = 0; d < 5; d++) {
    result[d] = {};
    for (let p = 0; p < 6; p++) {
      result[d][p] = null;
      for (const sec of SECTIONS) {
        const entry = TIMETABLE[sec][d][p];
        if (SEC_TEACHERS[sec][entry.subj] === tid) {
          result[d][p] = { sec, subj: entry.subj, lab: entry.lab || false };
          break;
        }
      }
    }
  }
  return result;
}

function renderTeacherTimetable(tid) {
  const t  = TEACHERS[tid];
  const tt = buildTeacherTimetable(tid);

  let totalPeriods = 0;
  for (let d = 0; d < 5; d++)
    for (let p = 0; p < 6; p++)
      if (tt[d][p]) totalPeriods++;

  const subjTags = t.subjects.map(sk => {
    const s = SUBJECTS[sk];
    return `<span style="color:${s.color};background:${s.color}18;border:1px solid ${s.color}44;
      padding:4px 12px;border-radius:6px;font-size:.75rem;font-weight:700;">${s.name}</span>`;
  }).join('');

  let rows = '';
  for (let p = 0; p < 6; p++) {
    rows += `<tr>
      <td style="font-family:'Space Mono';font-size:.7rem;color:var(--muted);
        padding-left:18px;white-space:nowrap;">${PERIODS[p]}</td>`;
    for (let d = 0; d < 5; d++) {
      const slot = tt[d][p];
      if (!slot) {
        rows += `<td><div style="display:inline-flex;align-items:center;justify-content:center;
          padding:8px 14px;border-radius:8px;background:rgba(255,255,255,.03);
          border:1px dashed rgba(255,255,255,.08);min-width:110px;">
          <span style="font-size:.7rem;color:var(--muted);font-family:'Space Mono';">FREE</span>
          </div></td>`;
      } else {
        const s      = SUBJECTS[slot.subj];
        const secCol = SEC_COLORS[slot.sec];
        const labBadge = slot.lab
          ? `<span style="font-size:.55rem;padding:1px 6px;border-radius:10px;
              background:rgba(247,178,106,.2);color:#f7b26a;font-weight:700;
              letter-spacing:.05em;">LAB</span>`
          : '';
        rows += `<td><div class="cell ${s.css}" style="min-width:110px;gap:3px;">
          <div><span style="padding:2px 8px;border-radius:5px;font-size:.7rem;font-weight:800;
            background:${secCol}22;color:${secCol};border:1px solid ${secCol}44;">Sec ${slot.sec}</span></div>
          <span class="subj" style="font-size:.76rem;">${s.name}</span>
          ${labBadge}
        </div></td>`;
      }
    }
    rows += `</tr>`;
  }

  const daySummary = [0,1,2,3,4].map(d => {
    const chips = [0,1,2,3,4,5].filter(p => tt[d][p]).map(p => {
      const sl  = tt[d][p];
      const col = SEC_COLORS[sl.sec];
      return `<span style="font-size:.68rem;padding:2px 7px;border-radius:5px;
        background:${col}22;color:${col};border:1px solid ${col}44;
        font-weight:700;">Sec ${sl.sec}</span>`;
    });
    const count = chips.length;
    return `<div style="display:flex;flex-direction:column;gap:5px;background:var(--surface2);
      border:1px solid var(--border);border-radius:10px;padding:12px 14px;min-width:110px;">
      <span style="font-size:.65rem;font-weight:700;letter-spacing:.08em;
        color:var(--muted);text-transform:uppercase;">${DAYS[d].slice(0,3)}</span>
      <div style="display:flex;flex-wrap:wrap;gap:4px;">
        ${chips.join('') || '<span style="font-size:.68rem;color:var(--muted);">—</span>'}
      </div>
      <span style="font-size:.62rem;color:var(--muted);font-family:'Space Mono';">
        ${count} period${count !== 1 ? 's' : ''}
      </span>
    </div>`;
  }).join('');

  return `
  <div style="display:flex;align-items:flex-start;gap:16px;margin-bottom:22px;flex-wrap:wrap;">
    <div style="width:52px;height:52px;border-radius:12px;
      background:linear-gradient(135deg,var(--accent),var(--accent3));
      display:flex;align-items:center;justify-content:center;
      font-weight:800;font-size:.85rem;color:#fff;flex-shrink:0;">${tid}</div>
    <div>
      <h2 style="font-size:1.25rem;font-weight:700;">${t.name}</h2>
      <div style="display:flex;gap:8px;margin-top:6px;flex-wrap:wrap;">${subjTags}</div>
    </div>
    <div style="margin-left:auto;text-align:right;">
      <div style="font-size:1.8rem;font-weight:800;color:var(--accent);line-height:1;">${totalPeriods}</div>
      <div style="font-size:.68rem;color:var(--muted);text-transform:uppercase;
        letter-spacing:.08em;">Total Periods/Week</div>
    </div>
  </div>
  <div style="display:flex;gap:10px;margin-bottom:20px;flex-wrap:wrap;">${daySummary}</div>
  <div style="overflow-x:auto;border-radius:14px;border:1px solid var(--border);">
    <table style="width:100%;border-collapse:collapse;min-width:700px;">
      <thead>
        <tr style="background:var(--surface2);">
          <th style="padding:13px 10px 13px 18px;font-size:.72rem;font-weight:700;
            letter-spacing:.06em;text-transform:uppercase;color:var(--muted);
            border-bottom:1px solid var(--border);text-align:left;width:90px;">Period</th>
          ${DAYS.map(d => `<th style="padding:13px 10px;font-size:.72rem;font-weight:700;
            letter-spacing:.06em;text-transform:uppercase;color:var(--muted);
            border-bottom:1px solid var(--border);text-align:center;">${d}</th>`).join('')}
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  </div>`;
}

function renderSummary() {
  // Subject rows
  const subjectRows = Object.entries(SUBJECTS).map(([key, s]) => {
    const labs = s.lab
      ? `<span style="font-size:.7rem;padding:2px 8px;border-radius:6px;
          background:rgba(247,178,106,.15);color:#f7b26a;font-weight:700;">HAS LAB</span>`
      : '';
    const once = key === 'LIB'
      ? `<span style="font-size:.7rem;padding:2px 8px;border-radius:6px;
          background:rgba(106,247,200,.12);color:#6af7c8;font-weight:700;">ONCE/WEEK</span>`
      : '';
    return `<tr>
      <td><div class="cell ${s.css}" style="min-width:auto;padding:5px 12px;display:inline-flex">
        <span class="subj">${s.name}</span></div></td>
      <td style="text-align:center">
        <span class="credit-badge" style="${s.credits === 0 ? 'background:var(--muted)' : ''}">
          ${s.credits}</span></td>
      <td>${labs}${once}</td>
    </tr>`;
  }).join('');

  // Teacher rows
  const teacherRows = Object.entries(TEACHERS).map(([tid, t]) => {
    const subj = SUBJECTS[t.subjects[0]];
    return `<tr>
      <td style="font-family:'Space Mono';font-size:.72rem;color:var(--muted);">${tid}</td>
      <td style="font-size:.82rem;font-weight:600;">${t.name}</td>
      <td><span class="cell ${subj.css}" style="min-width:auto;padding:3px 10px;display:inline-flex">
        <span class="subj" style="font-size:.7rem;">${subj.name}</span></span></td>
    </tr>`;
  }).join('');

  return `
    <div class="summary-grid">
      <div class="stat-card">
        <div class="num" style="color:var(--accent)">9</div>
        <div class="lbl">Sections</div>
      </div>
      <div class="stat-card">
        <div class="num" style="color:var(--accent3)">16</div>
        <div class="lbl">Teachers</div>
      </div>
      <div class="stat-card">
        <div class="num" style="color:var(--accent2)">9</div>
        <div class="lbl">Subjects</div>
      </div>
      <div class="stat-card">
        <div class="num" style="color:var(--accent4)">21</div>
        <div class="lbl">Total Credits</div>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;flex-wrap:wrap;">
      <div>
        <h3 style="margin-bottom:14px;font-size:1rem;color:var(--muted);
          letter-spacing:.06em;text-transform:uppercase;">Subject Details</h3>
        <div class="subject-table-wrap">
          <table class="subject-table">
            <thead><tr><th>Subject</th><th>Credits</th><th>Note</th></tr></thead>
            <tbody>${subjectRows}</tbody>
          </table>
        </div>
      </div>
      <div>
        <h3 style="margin-bottom:14px;font-size:1rem;color:var(--muted);
          letter-spacing:.06em;text-transform:uppercase;">Teacher List</h3>
        <div class="subject-table-wrap">
          <table class="subject-table">
            <thead><tr><th>ID</th><th>Name</th><th>Subject</th></tr></thead>
            <tbody>${teacherRows}</tbody>
          </table>
        </div>
      </div>
    </div>`;
}

function switchView(v) {
  const views   = ['section', 'teacher', 'summary'];
  const viewEls = ['view-section', 'view-teacher', 'view-summary'];

  document.querySelectorAll('.tab-btn').forEach((btn, i) => {
    btn.classList.toggle('active', views[i] === v);
  });
  viewEls.forEach((id, i) => {
    document.getElementById(id).classList.toggle('active', views[i] === v);
  });

  document.getElementById('sectionSelect').style.display = v === 'section' ? '' : 'none';
  document.getElementById('teacherSelect').style.display = v === 'teacher' ? '' : 'none';

  if (v === 'teacher') {
    document.getElementById('teacherContent').innerHTML = renderTeacherTimetable('T01');
    document.getElementById('teacherSelect').value = 'T01';
  }
  if (v === 'summary') {
    document.getElementById('summaryContent').innerHTML = renderSummary();
  }
}

function switchSection(sec) {
  document.getElementById('sectionContent').innerHTML = renderSection(sec);
}

function switchTeacher(tid) {
  document.getElementById('teacherContent').innerHTML = renderTeacherTimetable(tid);
}

switchSection('A');