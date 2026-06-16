/* ============================================
   EcoBin Smart — Premium JavaScript
   IoT Smart Waste Management System
   Alva's Institute of Engineering & Technology
   ============================================ */

// ============================================
// DATA
// ============================================
const binsData = [
  { id:'AIT-001', location:'Main Entrance Gate', fill:32, type:'Dry Waste', sensor:'Active', moisture:15, lastUpdated:'5 min ago', lastCleaned:'6:30 AM', lat:13.0672, lng:74.9912 },
  { id:'AIT-002', location:'Administrative Block', fill:78, type:'Wet Waste', sensor:'Active', moisture:62, lastUpdated:'1 min ago', lastCleaned:'7:00 AM', lat:13.0678, lng:74.9918 },
  { id:'AIT-003', location:'Computer Science Department', fill:55, type:'Dry Waste', sensor:'Active', moisture:18, lastUpdated:'3 min ago', lastCleaned:'7:15 AM', lat:13.0684, lng:74.9928 },
  { id:'AIT-004', location:'Electronics & Communication Dept', fill:85, type:'Dry Waste', sensor:'Active', moisture:12, lastUpdated:'2 min ago', lastCleaned:'6:45 AM', lat:13.0690, lng:74.9915 },
  { id:'AIT-005', location:'Mechanical Workshop Area', fill:42, type:'Recyclable', sensor:'Active', moisture:8, lastUpdated:'4 min ago', lastCleaned:'7:30 AM', lat:13.0686, lng:74.9935 },
  { id:'AIT-006', location:'Civil Engineering Block', fill:29, type:'Dry Waste', sensor:'Active', moisture:20, lastUpdated:'6 min ago', lastCleaned:'6:00 AM', lat:13.0692, lng:74.9925 },
  { id:'AIT-007', location:'Library Block', fill:18, type:'Dry Waste', sensor:'Active', moisture:10, lastUpdated:'8 min ago', lastCleaned:'5:30 AM', lat:13.0682, lng:74.9922 },
  { id:'AIT-008', location:'Central Cafeteria', fill:92, type:'Wet Waste', sensor:'Active', moisture:75, lastUpdated:'30 sec ago', lastCleaned:'8:00 AM', lat:13.0688, lng:74.9920 },
  { id:'AIT-009', location:'Boys Hostel', fill:67, type:'Wet Waste', sensor:'Active', moisture:55, lastUpdated:'2 min ago', lastCleaned:'6:00 AM', lat:13.0695, lng:74.9910 },
  { id:'AIT-010', location:'Girls Hostel', fill:88, type:'Wet Waste', sensor:'Warning', moisture:70, lastUpdated:'1 min ago', lastCleaned:'6:15 AM', lat:13.0698, lng:74.9932 },
  { id:'AIT-011', location:'Sports Complex', fill:35, type:'Recyclable', sensor:'Active', moisture:5, lastUpdated:'10 min ago', lastCleaned:'5:00 AM', lat:13.0700, lng:74.9920 },
  { id:'AIT-012', location:'Placement Cell', fill:12, type:'Dry Waste', sensor:'Active', moisture:8, lastUpdated:'15 min ago', lastCleaned:'6:00 AM', lat:13.0676, lng:74.9930 },
  { id:'AIT-013', location:'Innovation Lab', fill:44, type:'Recyclable', sensor:'Active', moisture:6, lastUpdated:'7 min ago', lastCleaned:'7:00 AM', lat:13.0680, lng:74.9936 },
  { id:'AIT-014', location:'Auditorium', fill:21, type:'Dry Waste', sensor:'Active', moisture:11, lastUpdated:'12 min ago', lastCleaned:'5:45 AM', lat:13.0675, lng:74.9916 },
  { id:'AIT-015', location:'Parking Area', fill:58, type:'Dry Waste', sensor:'Active', moisture:14, lastUpdated:'5 min ago', lastCleaned:'7:00 AM', lat:13.0670, lng:74.9926 },
  { id:'AIT-016', location:'Seminar Hall', fill:15, type:'Dry Waste', sensor:'Inactive', moisture:9, lastUpdated:'20 min ago', lastCleaned:'5:30 AM', lat:13.0683, lng:74.9910 },
  { id:'AIT-017', location:'Bus Pickup Zone', fill:48, type:'Dry Waste', sensor:'Active', moisture:16, lastUpdated:'4 min ago', lastCleaned:'6:30 AM', lat:13.0668, lng:74.9918 },
  { id:'AIT-018', location:'Chemistry Lab', fill:71, type:'Wet Waste', sensor:'Active', moisture:58, lastUpdated:'3 min ago', lastCleaned:'7:15 AM', lat:13.0687, lng:74.9912 },
  { id:'AIT-019', location:'Physics Lab', fill:38, type:'Recyclable', sensor:'Active', moisture:7, lastUpdated:'9 min ago', lastCleaned:'6:45 AM', lat:13.0691, lng:74.9930 },
  { id:'AIT-020', location:'Student Activity Center', fill:62, type:'Wet Waste', sensor:'Active', moisture:48, lastUpdated:'2 min ago', lastCleaned:'7:30 AM', lat:13.0694, lng:74.9922 },
  { id:'AIT-021', location:'Research Center', fill:25, type:'Dry Waste', sensor:'Active', moisture:12, lastUpdated:'11 min ago', lastCleaned:'6:00 AM', lat:13.0680, lng:74.9908 },
  { id:'AIT-022', location:'Faculty Quarters', fill:53, type:'Wet Waste', sensor:'Active', moisture:45, lastUpdated:'6 min ago', lastCleaned:'5:30 AM', lat:13.0702, lng:74.9915 },
  { id:'AIT-023', location:'Garden Area', fill:8, type:'Recyclable', sensor:'Active', moisture:3, lastUpdated:'18 min ago', lastCleaned:'5:00 AM', lat:13.0696, lng:74.9938 },
  { id:'AIT-024', location:'Security Gate', fill:30, type:'Dry Waste', sensor:'Active', moisture:13, lastUpdated:'7 min ago', lastCleaned:'6:30 AM', lat:13.0666, lng:74.9914 }
];

const alertsData = [
  { type:'critical', title:'Central Cafeteria Bin Full', desc:'Bin AIT-008 has reached 92% capacity. Immediate collection required to prevent overflow.', location:'Central Cafeteria', time:'2 min ago' },
  { type:'critical', title:'Girls Hostel Wet Waste Overflow Risk', desc:'Bin AIT-010 moisture levels critical at 70%. Overflow risk detected by moisture sensor.', location:'Girls Hostel', time:'5 min ago' },
  { type:'warning', title:'ECE Dept — Sensor Maintenance', desc:'Bin AIT-004 fill level at 85%. Ultrasonic sensor calibration recommended.', location:'Electronics & Communication Dept', time:'8 min ago' },
  { type:'warning', title:'Admin Block — Collection Due', desc:'Bin AIT-002 at 78% capacity. Schedule collection within 2 hours.', location:'Administrative Block', time:'12 min ago' },
  { type:'info', title:'Seminar Hall Sensor Offline', desc:'Bin AIT-016 NodeMCU connectivity lost. Check Wi-Fi module status.', location:'Seminar Hall', time:'20 min ago' },
  { type:'info', title:'Morning Route Completed', desc:'Collection Route A completed. 8 bins emptied successfully across campus.', location:'Campus Wide', time:'1 hour ago' }
];

const HEADER_TITLES = { home:'Dashboard', bins:'Smart Bins', alerts:'Live Alerts', map:'Campus Map', analytics:'Analytics', project:'Project Info', 'bin-detail':'Bin Details' };

let chartsReady = { home:false, analytics:false, map:false };
let leafletMap = null;

// ============================================
// UTILITIES
// ============================================
const fillColor = f => f < 40 ? 'green' : f <= 75 ? 'yellow' : 'red';
const fillStatus = f => f < 40 ? 'Empty' : f <= 75 ? 'Medium' : 'Full';
const fillHex = f => f < 40 ? '#10B981' : f <= 75 ? '#F59E0B' : '#EF4444';

function setupCanvas(canvas, w, h) {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  canvas.style.width = w + 'px';
  canvas.style.height = h + 'px';
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  return ctx;
}

// ============================================
// SPLASH SCREEN
// ============================================
function initSplash() {
  setTimeout(() => {
    document.getElementById('splash-screen').classList.remove('active');
    document.getElementById('login-screen').classList.add('active');
  }, 3600);
}

// ============================================
// LOGIN
// ============================================
function initLogin() {
  document.querySelectorAll('.role-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.role-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
    });
  });
  document.getElementById('login-form').addEventListener('submit', e => { e.preventDefault(); enterApp(); });
  document.getElementById('btn-guest').addEventListener('click', () => enterApp());
}

function enterApp() {
  document.getElementById('login-screen').classList.remove('active');
  document.getElementById('app-wrapper').classList.add('active');
  setTimeout(() => initApp(), 150);
}

// ============================================
// NAVIGATION
// ============================================
window.showTab = function(tab) {
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
  const el = document.getElementById('tab-' + tab);
  if (el) el.classList.add('active');

  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const nav = document.querySelector(`.nav-item[data-tab="${tab}"]`);
  if (nav) nav.classList.add('active');

  document.getElementById('header-title').textContent = HEADER_TITLES[tab] || 'EcoBin Smart';

  document.getElementById('bottom-nav').style.display = 'flex';
  document.querySelector('.tab-content').style.marginBottom = '68px';

  // Lazy-init
  if (tab === 'home' && !chartsReady.home) { setTimeout(initHomeCharts, 80); chartsReady.home = true; }
  if (tab === 'analytics' && !chartsReady.analytics) { setTimeout(initAnalyticsCharts, 80); chartsReady.analytics = true; }
  if (tab === 'map' && !chartsReady.map) { setTimeout(initMap, 80); chartsReady.map = true; }
};

function initSideMenu() {
  document.getElementById('menu-btn').addEventListener('click', () => {
    document.getElementById('side-menu').classList.toggle('open');
    document.getElementById('side-menu-overlay').classList.toggle('open');
  });
  document.getElementById('side-menu-overlay').addEventListener('click', closeSideMenu);
}

window.closeSideMenu = function() {
  document.getElementById('side-menu').classList.remove('open');
  document.getElementById('side-menu-overlay').classList.remove('open');
};

window.handleLogout = function() {
  closeSideMenu();
  document.getElementById('app-wrapper').classList.remove('active');
  document.getElementById('login-screen').classList.add('active');
  chartsReady = { home:false, analytics:false, map:false };
  if (leafletMap) { leafletMap.remove(); leafletMap = null; }
};

// ============================================
// DASHBOARD
// ============================================
function animateCounters() {
  document.querySelectorAll('.stat-number').forEach(el => {
    const target = parseInt(el.dataset.target);
    const dur = 1600;
    const start = performance.now();
    (function tick(now) {
      const p = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 4);
      el.textContent = Math.round(target * ease);
      if (p < 1) requestAnimationFrame(tick);
    })(start);
  });
}

function setGreeting() {
  const h = new Date().getHours();
  const g = h < 12 ? 'Good Morning' : h < 17 ? 'Good Afternoon' : 'Good Evening';
  document.getElementById('welcome-greeting').textContent = g + ' 👋';
  document.getElementById('welcome-date').textContent = new Date().toLocaleDateString('en-IN', { weekday:'short', day:'numeric', month:'short', year:'numeric' });
}

function initHomeCharts() {
  drawDonut('chart-wet', 38, '#10B981');
  drawDonut('chart-dry', 45, '#3B82F6');
  drawDonut('chart-recycle', 17, '#F59E0B');
  drawWeeklyChart();
}

// ============================================
// CHART DRAWING
// ============================================
function drawDonut(id, pct, color) {
  const c = document.getElementById(id);
  if (!c) return;
  const ctx = setupCanvas(c, 90, 90);
  const cx = 45, cy = 45, r = 34, lw = 7;
  const sa = -Math.PI / 2, ea = sa + 2 * Math.PI * pct / 100;
  let cur = sa;
  (function draw() {
    ctx.clearRect(0, 0, 90, 90);
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, 2 * Math.PI);
    ctx.strokeStyle = 'rgba(255,255,255,0.04)'; ctx.lineWidth = lw; ctx.stroke();
    if (cur > sa) {
      ctx.beginPath(); ctx.arc(cx, cy, r, sa, cur);
      ctx.strokeStyle = color; ctx.lineWidth = lw; ctx.lineCap = 'round'; ctx.stroke();
    }
    if (cur < ea) { cur = Math.min(cur + 0.06, ea); requestAnimationFrame(draw); }
  })();
}

function drawWeeklyChart() {
  const c = document.getElementById('weekly-chart');
  if (!c) return;
  const ctx = setupCanvas(c, 360, 200);
  const data = [320, 280, 350, 410, 380, 290, 310];
  const labels = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const max = Math.max(...data) * 1.15;
  const L = 40, B = 170, T = 20, W = 300, H = B - T;
  const bw = 28, gap = (W - bw * 7) / 8;

  let prog = 0;
  (function draw() {
    ctx.clearRect(0, 0, 360, 200);
    // Grid
    ctx.strokeStyle = 'rgba(255,255,255,0.03)'; ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) { const y = T + H / 4 * i; ctx.beginPath(); ctx.moveTo(L, y); ctx.lineTo(L + W, y); ctx.stroke(); }
    // Y labels
    ctx.fillStyle = '#475569'; ctx.font = '9px Inter'; ctx.textAlign = 'right';
    for (let i = 0; i <= 4; i++) { const v = Math.round(max - max / 4 * i); ctx.fillText(v, L - 6, T + H / 4 * i + 3); }

    data.forEach((v, i) => {
      const bh = (v / max) * H * prog;
      const x = L + gap + i * (bw + gap);
      const y = B - bh;
      const g = ctx.createLinearGradient(x, y, x, B);
      g.addColorStop(0, '#34D399'); g.addColorStop(1, '#059669');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.roundRect(x, y, bw, bh, [4, 4, 0, 0]); ctx.fill();
      if (prog >= 0.95) { ctx.fillStyle = 'rgba(255,255,255,0.35)'; ctx.font = '9px Inter'; ctx.textAlign = 'center'; ctx.fillText(v, x + bw / 2, y - 6); }
      ctx.fillStyle = '#64748B'; ctx.font = '10px Inter'; ctx.textAlign = 'center'; ctx.fillText(labels[i], x + bw / 2, B + 16);
    });
    if (prog < 1) { prog += 0.025; requestAnimationFrame(draw); }
  })();
}

// ============================================
// BIN MONITORING
// ============================================
function renderBinCards(filter = 'all', search = '') {
  const container = document.getElementById('bin-cards');
  let bins = [...binsData];
  if (filter === 'full') bins = bins.filter(b => b.fill > 75);
  else if (filter === 'medium') bins = bins.filter(b => b.fill >= 40 && b.fill <= 75);
  else if (filter === 'empty') bins = bins.filter(b => b.fill < 40);
  else if (filter === 'wet') bins = bins.filter(b => b.type === 'Wet Waste');
  else if (filter === 'dry') bins = bins.filter(b => b.type === 'Dry Waste');
  else if (filter === 'recyclable') bins = bins.filter(b => b.type === 'Recyclable');
  if (search) { const s = search.toLowerCase(); bins = bins.filter(b => b.location.toLowerCase().includes(s) || b.id.toLowerCase().includes(s)); }

  document.getElementById('bin-count-badge').textContent = bins.length + ' Bins';
  const typeIcon = t => t === 'Wet Waste' ? '💧' : t === 'Recyclable' ? '♻️' : '📦';
  const sensorIcon = s => s === 'Active' ? '🟢' : s === 'Warning' ? '🟡' : '🔴';

  container.innerHTML = bins.map((b, i) => {
    const c = fillColor(b.fill);
    return `<div class="bin-card status-${c}" style="animation-delay:${i * 0.04}s" onclick="showBinDetail('${b.id}')">
      <div class="bin-card-header">
        <span class="bin-id">${b.id}</span>
        <span class="bin-status-badge ${c}"><span class="bin-status-dot ${c}"></span>${fillStatus(b.fill)}</span>
      </div>
      <div class="bin-location">${b.location}</div>
      <div class="bin-progress-container">
        <div class="bin-progress-bar"><div class="bin-progress-fill ${c}" style="width:${b.fill}%"></div></div>
        <div class="bin-progress-label"><span>Fill Level</span><span>${b.fill}%</span></div>
      </div>
      <div class="bin-meta">
        <span class="bin-meta-item">${typeIcon(b.type)} ${b.type}</span>
        <span class="bin-meta-item">${sensorIcon(b.sensor)} ${b.sensor}</span>
        <span class="bin-meta-item">🕐 ${b.lastUpdated}</span>
      </div>
    </div>`;
  }).join('');
}

function initBinFilters() {
  let cur = 'all';
  document.querySelectorAll('#bin-filters .filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('#bin-filters .filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      cur = chip.dataset.filter;
      renderBinCards(cur, document.getElementById('bin-search').value);
    });
  });
  document.getElementById('bin-search').addEventListener('input', e => renderBinCards(cur, e.target.value));
}

// ============================================
// BIN DETAIL
// ============================================
window.showBinDetail = function(id) {
  const bin = binsData.find(b => b.id === id);
  if (!bin) return;
  const c = fillColor(bin.fill), hex = fillHex(bin.fill);
  const wet = bin.moisture > 40;
  const sHealth = bin.sensor === 'Active' ? 'Good' : bin.sensor === 'Warning' ? 'Warning' : 'Offline';
  const sChip = bin.sensor === 'Active' ? 'green-chip' : bin.sensor === 'Warning' ? 'amber-chip' : 'red-chip';
  const tChip = bin.type === 'Wet Waste' ? 'cyan-chip' : bin.type === 'Recyclable' ? 'amber-chip' : 'blue-chip';

  document.getElementById('detail-header').innerHTML = `
    <div class="bin-id">${bin.id}</div>
    <div class="bin-location">${bin.location}</div>
    <div class="detail-fill-display"><canvas id="detail-ring" width="130" height="130"></canvas>
      <div class="detail-fill-center"><span class="detail-fill-percent" style="color:${hex}">${bin.fill}%</span><span class="detail-fill-label">Fill Level</span></div>
    </div>
    <div class="detail-status-chips">
      <span class="detail-chip ${sChip}">📡 ${bin.sensor}</span>
      <span class="detail-chip ${tChip}">${bin.type}</span>
    </div>`;

  document.getElementById('detail-grid').innerHTML = `
    <div class="detail-grid-item"><div class="detail-item-icon">📊</div><span class="detail-item-value">${bin.fill}%</span><span class="detail-item-label">Fill Level</span></div>
    <div class="detail-grid-item"><div class="detail-item-icon">💧</div><span class="detail-item-value">${bin.moisture}%</span><span class="detail-item-label">Moisture</span></div>
    <div class="detail-grid-item"><div class="detail-item-icon">${wet ? '🌊' : '📦'}</div><span class="detail-item-value">${wet ? 'Wet' : 'Dry'}</span><span class="detail-item-label">Classification</span></div>
    <div class="detail-grid-item"><div class="detail-item-icon">📡</div><span class="detail-item-value">${sHealth}</span><span class="detail-item-label">Sensor Health</span></div>
    <div class="detail-grid-item"><div class="detail-item-icon">🧹</div><span class="detail-item-value">${bin.lastCleaned}</span><span class="detail-item-label">Last Cleaned</span></div>
    <div class="detail-grid-item"><div class="detail-item-icon">🔧</div><span class="detail-item-value">${bin.sensor === 'Warning' ? 'Scheduled' : 'None'}</span><span class="detail-item-label">Maintenance</span></div>`;

  showTab('bin-detail');
  setTimeout(() => {
    drawDetailRing(bin.fill, hex);
    drawDetailLine(bin.fill);
  }, 120);
};

function drawDetailRing(pct, color) {
  const c = document.getElementById('detail-ring');
  if (!c) return;
  const ctx = setupCanvas(c, 130, 130);
  const cx = 65, cy = 65, r = 52, lw = 9;
  const sa = -Math.PI / 2, ea = sa + 2 * Math.PI * pct / 100;
  let cur = sa;
  (function draw() {
    ctx.clearRect(0, 0, 130, 130);
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, 2 * Math.PI);
    ctx.strokeStyle = 'rgba(255,255,255,0.04)'; ctx.lineWidth = lw; ctx.stroke();
    ctx.beginPath(); ctx.arc(cx, cy, r, sa, cur);
    ctx.strokeStyle = color; ctx.lineWidth = lw; ctx.lineCap = 'round'; ctx.stroke();
    if (cur < ea) { cur = Math.min(cur + 0.07, ea); requestAnimationFrame(draw); }
  })();
}

function drawDetailLine(curFill) {
  const c = document.getElementById('detail-fill-chart');
  if (!c) return;
  const ctx = setupCanvas(c, 360, 170);
  const hrs = 24, data = [];
  let v = Math.max(5, curFill - 55 + Math.random() * 15);
  for (let i = 0; i < hrs; i++) { v += (curFill - v) / (hrs - i) + (Math.random() - 0.4) * 7; data.push(Math.round(Math.max(0, Math.min(100, v)))); }
  data[hrs - 1] = curFill;

  const L = 32, R = 340, Tp = 12, Bt = 140, W = R - L, H = Bt - Tp;
  ctx.strokeStyle = 'rgba(255,255,255,0.03)'; ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) { const y = Tp + H / 4 * i; ctx.beginPath(); ctx.moveTo(L, y); ctx.lineTo(R, y); ctx.stroke(); }

  const pts = data.map((val, i) => ({ x: L + (i / (hrs - 1)) * W, y: Bt - (val / 100) * H }));
  // Fill
  const gf = ctx.createLinearGradient(0, Tp, 0, Bt);
  gf.addColorStop(0, 'rgba(16,185,129,0.15)'); gf.addColorStop(1, 'rgba(16,185,129,0)');
  ctx.beginPath(); ctx.moveTo(pts[0].x, Bt);
  pts.forEach(p => ctx.lineTo(p.x, p.y));
  ctx.lineTo(pts[pts.length - 1].x, Bt); ctx.closePath(); ctx.fillStyle = gf; ctx.fill();
  // Line
  ctx.beginPath(); pts.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
  ctx.strokeStyle = '#10B981'; ctx.lineWidth = 2; ctx.stroke();
  // Dot
  const last = pts[pts.length - 1];
  ctx.beginPath(); ctx.arc(last.x, last.y, 5, 0, 2 * Math.PI); ctx.fillStyle = '#10B981'; ctx.fill();
  ctx.beginPath(); ctx.arc(last.x, last.y, 2.5, 0, 2 * Math.PI); ctx.fillStyle = '#060B18'; ctx.fill();
  // Labels
  ctx.fillStyle = '#64748B'; ctx.font = '9px Inter'; ctx.textAlign = 'center';
  [0, 6, 12, 18, 23].forEach(i => ctx.fillText(i + ':00', pts[i].x, Bt + 14));
}

// ============================================
// ALERTS
// ============================================
function renderAlerts(filter = 'all') {
  const list = document.getElementById('alerts-list');
  const filtered = filter === 'all' ? alertsData : alertsData.filter(a => a.type === filter);
  list.innerHTML = filtered.map((a, i) => `
    <div class="alert-card ${a.type}" style="animation-delay:${i * 0.06}s">
      <div class="alert-card-header">
        <span class="alert-type ${a.type}">${a.type.toUpperCase()}</span>
        <span class="alert-time">${a.time}</span>
      </div>
      <div class="alert-title">${a.title}</div>
      <div class="alert-desc">${a.desc}</div>
      <div class="alert-location">📍 ${a.location}</div>
    </div>`).join('');
}

function initAlertFilters() {
  document.querySelectorAll('[data-alert-filter]').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('[data-alert-filter]').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      renderAlerts(chip.dataset.alertFilter);
    });
  });
}

// ============================================
// CAMPUS MAP (Leaflet.js)
// ============================================
function initMap() {
  const container = document.getElementById('map-container');
  if (!container || leafletMap) return;

  // Create map div inside container
  const mapDiv = document.createElement('div');
  mapDiv.id = 'leaflet-map';
  mapDiv.style.height = '100%';
  mapDiv.style.width = '100%';
  container.appendChild(mapDiv);

  // Initialize Leaflet map centered on Alva's campus
  leafletMap = L.map('leaflet-map', {
    center: [13.0685, 74.9920],
    zoom: 17,
    zoomControl: true,
    attributionControl: false
  });

  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 19,
    attribution: 'Esri Satellite'
  }).addTo(leafletMap);

  // Custom icon factory
  function binIcon(color) {
    const hex = color === 'green' ? '#10B981' : color === 'yellow' ? '#F59E0B' : '#EF4444';
    const shadow = color === 'red' ? 'rgba(239,68,68,0.5)' : color === 'yellow' ? 'rgba(245,158,11,0.4)' : 'rgba(16,185,129,0.4)';
    return L.divIcon({
      className: 'custom-bin-marker',
      html: `<div style="width:18px;height:18px;border-radius:50%;background:${hex};border:2.5px solid white;box-shadow:0 0 0 3px ${shadow}, 0 2px 8px rgba(0,0,0,0.4);"></div>`,
      iconSize: [18, 18],
      iconAnchor: [9, 9]
    });
  }

  // Add bin markers
  binsData.forEach(bin => {
    if (!bin.lat || !bin.lng) return;
    const c = fillColor(bin.fill);
    const marker = L.marker([bin.lat, bin.lng], { icon: binIcon(c) }).addTo(leafletMap);
    marker.bindPopup(`<strong>${bin.id}</strong><br>${bin.location}<br>Fill: ${bin.fill}% — ${bin.type}<br>Sensor: ${bin.sensor}`, { closeButton: false });
    marker.on('click', () => marker.openPopup());
  });

  // Collection route — connect full bins
  const routeBins = binsData.filter(b => b.fill > 75).sort((a, b) => b.fill - a.fill);
  const mainGate = binsData.find(b => b.id === 'AIT-001');
  if (mainGate) routeBins.push(mainGate);
  if (routeBins.length > 1) {
    const coords = routeBins.map(b => [b.lat, b.lng]);
    L.polyline(coords, { color: '#10B981', weight: 3, opacity: 0.8, dashArray: '8, 6' }).addTo(leafletMap);

    // Route start/end markers
    const startBin = routeBins[0];
    L.circleMarker([startBin.lat, startBin.lng], { radius: 10, color: '#10B981', fillColor: '#10B981', fillOpacity: 0.3, weight: 2 }).addTo(leafletMap);
  }

  // Force map to resize properly
  setTimeout(() => leafletMap.invalidateSize(), 200);
  setTimeout(() => leafletMap.invalidateSize(), 600);

  // Route stops
  initRouteStops();
}

function initRouteStops() {
  const stops = [
    { name: 'Central Cafeteria', status: '🔴 92% — Start', active: true },
    { name: 'Girls Hostel', status: '🔴 88% Full', active: false },
    { name: 'ECE Department', status: '🔴 85% Full', active: false },
    { name: 'Administrative Block', status: '🟡 78%', active: false },
    { name: 'Main Entrance Gate', status: '🟢 Collection Point', active: false }
  ];
  document.getElementById('route-stops').innerHTML = stops.map(s =>
    `<div class="route-stop ${s.active ? 'active' : ''}"><div class="route-stop-name">${s.name}</div><div class="route-stop-status">${s.status}</div></div>`
  ).join('');
}

// ============================================
// ANALYTICS CHARTS
// ============================================
function initAnalyticsCharts() {
  drawScoreArc();
  drawDailyChart();
  drawPieChart();
  drawOverflowChart();
}

function drawScoreArc() {
  const c = document.getElementById('cleanliness-chart');
  if (!c) return;
  const ctx = setupCanvas(c, 150, 150);
  const cx = 75, cy = 75, r = 58, lw = 10;
  const sa = Math.PI * 0.75, total = Math.PI * 1.5, ea = sa + total * 87 / 100;
  let cur = sa;
  (function draw() {
    ctx.clearRect(0, 0, 150, 150);
    ctx.beginPath(); ctx.arc(cx, cy, r, sa, sa + total);
    ctx.strokeStyle = 'rgba(255,255,255,0.04)'; ctx.lineWidth = lw; ctx.lineCap = 'round'; ctx.stroke();
    const g = ctx.createLinearGradient(0, 0, 150, 150);
    g.addColorStop(0, '#34D399'); g.addColorStop(1, '#06B6D4');
    ctx.beginPath(); ctx.arc(cx, cy, r, sa, cur);
    ctx.strokeStyle = g; ctx.lineWidth = lw; ctx.lineCap = 'round'; ctx.stroke();
    if (cur < ea) { cur = Math.min(cur + 0.04, ea); requestAnimationFrame(draw); }
  })();
}

function drawDailyChart() {
  const c = document.getElementById('daily-chart');
  if (!c) return;
  const ctx = setupCanvas(c, 360, 200);
  const wet = [108,122,112,133,118,95,103], dry = [128,144,133,158,140,113,122], rec = [49,54,50,59,52,42,45];
  const labels = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const max = 420;
  const L = 38, B = 170, T = 15, W = 295, H = B - T, bw = 24, gap = (W - bw * 7) / 8;

  ctx.strokeStyle = 'rgba(255,255,255,0.03)';
  for (let i = 0; i <= 4; i++) { const y = T + H / 4 * i; ctx.beginPath(); ctx.moveTo(L, y); ctx.lineTo(L + W, y); ctx.stroke(); }

  let prog = 0;
  (function draw() {
    ctx.clearRect(L - 5, T - 5, W + 15, H + 35);
    ctx.strokeStyle = 'rgba(255,255,255,0.03)';
    for (let i = 0; i <= 4; i++) { const y = T + H / 4 * i; ctx.beginPath(); ctx.moveTo(L, y); ctx.lineTo(L + W, y); ctx.stroke(); }

    for (let i = 0; i < 7; i++) {
      const x = L + gap + i * (bw + gap);
      const wH = wet[i] / max * H * prog, dH = dry[i] / max * H * prog, rH = rec[i] / max * H * prog;
      ctx.fillStyle = '#F59E0B'; ctx.fillRect(x, B - rH, bw, rH);
      ctx.fillStyle = '#3B82F6'; ctx.fillRect(x, B - rH - dH, bw, dH);
      ctx.fillStyle = '#10B981'; ctx.beginPath(); ctx.roundRect(x, B - rH - dH - wH, bw, wH, [3, 3, 0, 0]); ctx.fill();
      ctx.fillStyle = '#64748B'; ctx.font = '10px Inter'; ctx.textAlign = 'center'; ctx.fillText(labels[i], x + bw / 2, B + 15);
    }
    if (prog < 1) { prog += 0.025; requestAnimationFrame(draw); }
  })();
}

function drawPieChart() {
  const c = document.getElementById('pie-chart');
  if (!c) return;
  const ctx = setupCanvas(c, 170, 170);
  const cx = 85, cy = 85, r = 62, lw = 22;
  const segs = [{ pct: 38, color: '#10B981' }, { pct: 45, color: '#3B82F6' }, { pct: 17, color: '#F59E0B' }];
  let angle = -Math.PI / 2;
  segs.forEach(s => {
    const a = s.pct / 100 * 2 * Math.PI;
    ctx.beginPath(); ctx.arc(cx, cy, r, angle, angle + a - 0.03);
    ctx.strokeStyle = s.color; ctx.lineWidth = lw; ctx.lineCap = 'butt'; ctx.stroke();
    angle += a;
  });
}

function drawOverflowChart() {
  const c = document.getElementById('overflow-chart');
  if (!c) return;
  const ctx = setupCanvas(c, 360, 170);
  const data = [18, 15, 14, 12, 10, 7], labels = ['Jan','Feb','Mar','Apr','May','Jun'];
  const max = 22, L = 35, R = 335, Tp = 15, Bt = 140, W = R - L, H = Bt - Tp;

  ctx.strokeStyle = 'rgba(255,255,255,0.03)';
  for (let i = 0; i <= 4; i++) { const y = Tp + H / 4 * i; ctx.beginPath(); ctx.moveTo(L, y); ctx.lineTo(R, y); ctx.stroke(); }

  const pts = data.map((v, i) => ({ x: L + i / (data.length - 1) * W, y: Bt - v / max * H }));
  // Fill
  const gf = ctx.createLinearGradient(0, Tp, 0, Bt);
  gf.addColorStop(0, 'rgba(6,182,212,0.12)'); gf.addColorStop(1, 'rgba(6,182,212,0)');
  ctx.beginPath(); ctx.moveTo(pts[0].x, Bt);
  pts.forEach(p => ctx.lineTo(p.x, p.y));
  ctx.lineTo(pts[pts.length - 1].x, Bt); ctx.closePath(); ctx.fillStyle = gf; ctx.fill();
  // Line
  ctx.beginPath(); pts.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
  const lg = ctx.createLinearGradient(L, 0, R, 0); lg.addColorStop(0, '#10B981'); lg.addColorStop(1, '#06B6D4');
  ctx.strokeStyle = lg; ctx.lineWidth = 2.5; ctx.stroke();
  // Dots + labels
  pts.forEach((p, i) => {
    ctx.beginPath(); ctx.arc(p.x, p.y, 4, 0, 2 * Math.PI); ctx.fillStyle = '#06B6D4'; ctx.fill();
    ctx.beginPath(); ctx.arc(p.x, p.y, 2, 0, 2 * Math.PI); ctx.fillStyle = '#060B18'; ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.35)'; ctx.font = '10px Inter'; ctx.textAlign = 'center'; ctx.fillText(data[i], p.x, p.y - 10);
    ctx.fillStyle = '#64748B'; ctx.fillText(labels[i], p.x, Bt + 16);
  });
}

// ============================================
// INIT
// ============================================
function getChartTextColor() { return document.documentElement.dataset.theme === 'light' ? '#64748B' : '#64748B'; }
function getChartGridColor() { return document.documentElement.dataset.theme === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.03)'; }
function getChartBg() { return document.documentElement.dataset.theme === 'light' ? '#FFFFFF' : '#060B18'; }

function initThemeToggle() {
  const saved = localStorage.getItem('ecobin-theme');
  if (saved) document.documentElement.dataset.theme = saved;

  document.getElementById('theme-toggle').addEventListener('click', () => {
    const current = document.documentElement.dataset.theme;
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('ecobin-theme', next);

    // Re-render charts for new theme colors
    if (chartsReady.home) { chartsReady.home = false; setTimeout(initHomeCharts, 50); chartsReady.home = true; }
    if (chartsReady.analytics) { chartsReady.analytics = false; setTimeout(initAnalyticsCharts, 50); chartsReady.analytics = true; }
  });
}

function initApp() {
  setGreeting();
  animateCounters();
  renderBinCards();
  initBinFilters();
  renderAlerts();
  initAlertFilters();
  chartsReady.home = true;
  setTimeout(initHomeCharts, 80);
}

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initSplash();
  initLogin();
  initSideMenu();
});
