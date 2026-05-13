// ════════════════════════════════════════════════════════════════
// SECURITY NAVIGATOR — APP v2.0
// ════════════════════════════════════════════════════════════════

// ── State ────────────────────────────────────────────────────────
let lang = 'nl';
let currentTopic = null;
let isSaved = false;

// ── i18n ─────────────────────────────────────────────────────────
const T = {
  nl: {
    appSub:'Energiesector NL', topicsLabel:"Thema's", searchPlaceholder:'Zoek een onderwerp...',
    summaryLabel:'Samenvatting', saveBtnLabel:'Bewaren', savedBtnLabel:'Bewaard',
    navNavigator:'Navigator', navSaved:'Opgeslagen', navInfo:'Info',
    savedEmpty:'Nog niets bewaard.\nRaadpleeg een onderwerp en sla het op.',
    noResults:'Geen resultaten voor', required:'Wat is vereist',
    crossSector:'Andere sectoren', tips:'Aandachtspunten',
    deleteAll:'Alle opgeslagen sessies verwijderen', confirmDelete:'Alle sessies verwijderen?'
  },
  en: {
    appSub:'Energy sector NL', topicsLabel:'Topics', searchPlaceholder:'Search a topic...',
    summaryLabel:'Summary', saveBtnLabel:'Save', savedBtnLabel:'Saved',
    navNavigator:'Navigator', navSaved:'Saved', navInfo:'Info',
    savedEmpty:'Nothing saved yet.\nLook up a topic and save it.',
    noResults:'No results for', required:'What is required',
    crossSector:'Other sectors', tips:'Points to watch',
    deleteAll:'Delete all saved sessions', confirmDelete:'Delete all sessions?'
  }
};
function t(k) { return T[lang][k] || k; }

// ── Framework badge metadata ─────────────────────────────────────
const FW_META = {
  NIS2:     { label:'NIS2',       cls:'fw-nis2' },
  ISO27001: { label:'ISO 27001',  cls:'fw-iso'  },
  ISO27035: { label:'ISO 27035',  cls:'fw-iso'  },
  ISO27036: { label:'ISO 27036',  cls:'fw-iso'  },
  ISO22301: { label:'ISO 22301',  cls:'fw-iso'  },
  IEC62443: { label:'IEC 62443',  cls:'fw-ot'   },
  NIST_CSF: { label:'NIST CSF',   cls:'fw-cross'},
  DNB:      { label:'DNB',        cls:'fw-dnb'  },
  DORA:     { label:'DORA',       cls:'fw-cross'},
  CISM:     { label:'CISM',       cls:'fw-cism' }
};

// ── Render topic list ────────────────────────────────────────────
function renderTopics(filter) {
  const list = document.getElementById('topicsList');
  const topics = KB[lang].filter(topic => {
    if (!filter) return true;
    const q = filter.toLowerCase();
    return topic.name.toLowerCase().includes(q) ||
           topic.summary.toLowerCase().includes(q) ||
           topic.frameworks.some(f => f.toLowerCase().includes(q));
  });

  if (!topics.length) {
    list.innerHTML = `<div class="no-results">${t('noResults')} "${filter}"</div>`;
    return;
  }

  list.innerHTML = topics.map(topic => `
    <div class="topic-item" onclick="loadTopic('${topic.id}')">
      <div>
        <div class="topic-name">${topic.name}</div>
        <div class="topic-meta">${topic.frameworks.slice(0, 4).map(f => FW_META[f]?.label || f).join(' · ')}</div>
      </div>
      <svg viewBox="0 0 24 24" style="width:14px;height:14px;stroke:var(--text3);fill:none;stroke-width:2;flex-shrink:0"><polyline points="9 18 15 12 9 6"/></svg>
    </div>`).join('');
}

// ── Load & render topic ──────────────────────────────────────────
function loadTopic(id) {
  const topic = KB[lang].find(t => t.id === id);
  if (!topic) return;
  currentTopic = topic;
  isSaved = isAlreadySaved(id);

  showScreen('result');
  document.getElementById('tbTitle').textContent = topic.name.length > 28 ? topic.name.slice(0, 26) + '…' : topic.name;
  document.getElementById('tbSub').textContent = t('appSub');

  // Badges
  document.getElementById('fwBadges').innerHTML = topic.frameworks
    .map(f => { const m = FW_META[f] || { label: f, cls: 'fw-iso' }; return `<span class="fw-badge ${m.cls}">${m.label}</span>`; })
    .join('');

  // Summary
  document.getElementById('summaryLabel').textContent = t('summaryLabel');
  document.getElementById('summaryText').textContent = topic.summary;

  // Save button
  updateSaveButton();

  // Detail cards
  const container = document.getElementById('detailCards');
  container.innerHTML = topic.details.map((d, i) => {
    const m = FW_META[d.framework] || { label: d.framework, cls: 'fw-iso' };
    return `
      <div class="detail-card">
        <div class="detail-header" onclick="toggleDetail(${i})">
          <div class="detail-header-left">
            <span class="fw-badge ${d.cls || m.cls}" style="font-size:9px">${m.label}</span>
            <span class="detail-title">${d.framework}</span>
          </div>
          <svg class="detail-chevron" id="chev-${i}" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
        <div class="detail-body" id="detail-${i}">
          ${d.required  ? `<div class="detail-section"><div class="detail-section-label">${t('required')}</div><div class="detail-section-text">${d.required}</div></div>` : ''}
          ${d.crossSector ? `<div class="detail-section"><div class="detail-section-label">${t('crossSector')}</div><div class="detail-section-text">${d.crossSector}</div></div>` : ''}
          ${d.tips      ? `<div class="detail-section"><div class="detail-section-label">${t('tips')}</div><div class="detail-section-text">${d.tips}</div></div>` : ''}
        </div>
      </div>`;
  }).join('');
}

function toggleDetail(i) {
  document.getElementById(`detail-${i}`).classList.toggle('open');
  document.getElementById(`chev-${i}`).classList.toggle('open');
}

// ── Save / sessions ──────────────────────────────────────────────
function getSessions() {
  return JSON.parse(localStorage.getItem('bpn_sessions') || '[]');
}

function isAlreadySaved(topicId) {
  return getSessions().some(s => s.topicId === topicId);
}

function updateSaveButton() {
  const btn = document.getElementById('saveBtn');
  const lbl = document.getElementById('saveBtnLabel');
  if (isSaved) {
    btn.className = 'action-btn saved';
    lbl.textContent = t('savedBtnLabel');
  } else {
    btn.className = 'action-btn primary';
    lbl.textContent = t('saveBtnLabel');
  }
}

function saveResult() {
  if (isSaved || !currentTopic) return;
  const sessions = getSessions();
  sessions.unshift({
    id: Date.now().toString(),
    savedAt: new Date().toISOString(),
    topicId: currentTopic.id,
    topicName: currentTopic.name,
    frameworks: currentTopic.frameworks,
    lang
  });
  localStorage.setItem('bpn_sessions', JSON.stringify(sessions));
  isSaved = true;
  updateSaveButton();
}

function renderSaved() {
  const sessions = getSessions();
  const el = document.getElementById('savedList');
  if (!sessions.length) {
    el.innerHTML = `<div class="saved-empty">${t('savedEmpty').replace('\n', '<br>')}</div>`;
    return;
  }
  el.innerHTML = sessions.map(s => {
    const date = new Date(s.savedAt).toLocaleDateString(lang === 'nl' ? 'nl-NL' : 'en-GB', { day: 'numeric', month: 'short' });
    return `
      <div class="saved-item" onclick="loadTopic('${s.topicId}')">
        <div class="saved-item-top">
          <div class="saved-topic">${s.topicName}</div>
          <div style="display:flex;align-items:center;gap:6px">
            <span class="saved-date">${date}</span>
            <button class="saved-delete" onclick="event.stopPropagation();deleteSession('${s.id}')" aria-label="Verwijder">×</button>
          </div>
        </div>
        <div>${s.frameworks.slice(0, 4).map(f => `<span class="fw-badge ${FW_META[f]?.cls || 'fw-iso'}" style="font-size:9px">${FW_META[f]?.label || f}</span>`).join(' ')}</div>
      </div>`;
  }).join('');
}

function deleteSession(id) {
  const sessions = getSessions().filter(s => s.id !== id);
  localStorage.setItem('bpn_sessions', JSON.stringify(sessions));
  renderSaved();
}

function clearAllSessions() {
  if (confirm(t('confirmDelete'))) {
    localStorage.removeItem('bpn_sessions');
    renderSaved();
  }
}

// ── Screen routing ───────────────────────────────────────────────
function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById(`screen-${name}`).classList.add('active');
  const nav = document.getElementById(`nav-${name}`);
  if (nav) nav.classList.add('active');
  document.getElementById('backBtn').style.display = name === 'result' ? 'flex' : 'none';
  if (name === 'saved') renderSaved();
  if (name === 'home') {
    document.getElementById('tbTitle').textContent = 'Security navigator';
    document.getElementById('tbSub').textContent = t('appSub');
  }
}

function goBack() { showScreen('home'); }

// ── Language ─────────────────────────────────────────────────────
function setLang(l) {
  lang = l;
  document.getElementById('btnNL').classList.toggle('active', l === 'nl');
  document.getElementById('btnEN').classList.toggle('active', l === 'en');
  document.getElementById('tbSub').textContent = t('appSub');
  document.getElementById('topicsLabel').textContent = t('topicsLabel');
  document.getElementById('searchInput').placeholder = t('searchPlaceholder');
  document.getElementById('nav-home-label').textContent = t('navNavigator');
  document.getElementById('nav-saved-label').textContent = t('navSaved');
  document.getElementById('nav-settings-label').textContent = t('navInfo');
  document.getElementById('set-clear-label').textContent = t('deleteAll');
  const filter = document.getElementById('searchInput').value;
  renderTopics(filter);
  if (currentTopic) { loadTopic(currentTopic.id); }
  if (document.getElementById('screen-saved').classList.contains('active')) renderSaved();
}

// ── PWA ──────────────────────────────────────────────────────────
(function () {
  const manifest = {
    name: 'Security Navigator', short_name: 'SecNav',
    start_url: './', display: 'standalone',
    background_color: '#0f1117', theme_color: '#0f1117',
    orientation: 'portrait',
    icons: [{ src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgMTkyIj48cmVjdCB3aWR0aD0iMTkyIiBoZWlnaHQ9IjE5MiIgcng9IjQwIiBmaWxsPSIjMGYxMTE3Ii8+PHJlY3QgeD0iMjQiIHk9IjI0IiB3aWR0aD0iMTQ0IiBoZWlnaHQ9IjE0NCIgcng9IjI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM0ZjhlZjciIHN0cm9rZS13aWR0aD0iOCIvPjxwYXRoIGQ9Ik02NCA4MGgzMm0tMzIgMTZoNjRtLTY0IDE2aDQ4IiBzdHJva2U9IiM0ZjhlZjciIHN0cm9rZS13aWR0aD0iOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9zdmc+', sizes: '192x192', type: 'image/svg+xml' }]
  };
  const blob = new Blob([JSON.stringify(manifest)], { type: 'application/json' });
  document.querySelector('link[rel="manifest"]').href = URL.createObjectURL(blob);

  if ('serviceWorker' in navigator) {
    const sw = `const C='secnav-v2';self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll([self.location.pathname])));self.skipWaiting()});self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))));self.clients.claim()});self.addEventListener('fetch',e=>{if(e.request.url.includes('fonts.googleapis.com'))return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{const cl=res.clone();caches.open(C).then(c=>c.put(e.request,cl));return res})))});`;
    const url = URL.createObjectURL(new Blob([sw], { type: 'application/javascript' }));
    navigator.serviceWorker.register(url, { scope: './' }).catch(() => {});
  }
})();

// ── Init ─────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('searchInput');
  input.placeholder = t('searchPlaceholder');
  input.addEventListener('input', () => renderTopics(input.value));
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter' && input.value) {
      const match = KB[lang].find(topic =>
        topic.name.toLowerCase().includes(input.value.toLowerCase()) ||
        topic.summary.toLowerCase().includes(input.value.toLowerCase())
      );
      if (match) loadTopic(match.id);
    }
  });
  renderTopics();
});
