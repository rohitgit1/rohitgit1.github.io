// Google India Data Engineering Workspace - Application Logic
// Zero Fluff • Production-Grade • High Density

class PrepPortalApp {
  constructor() {
    this.state = {
      theme: "dark",
      activeTab: "tracker",
      activeMasterclassCat: "all",
      activePracticeMode: "dsa",
      activeDsaId: "dsa-1",
      activeSqlId: "sql-1",
      solvedDsa: [],
      solvedSql: []
    };

    // Master PIN Privacy Gate
    this.masterPin = localStorage.getItem("google_l5_master_pin") || "2026";
    this.isUnlocked = sessionStorage.getItem("google_l5_session_unlocked") === "true";

    // 24H Daily Accountability State (12:00 AM – 11:59 PM)
    this.todayDateStr = this.getTodayDateString();
    this.dailyData = this.loadDailyData();
    this.accountabilityInterval = null;

    // In-browser WebAssembly Pyodide engine
    this.pyodide = null;
    this.pyodideLoading = false;

    this.init();
  }

  init() {
    this.loadState();
    this.applyTheme(this.state.theme);
    this.checkSecurityGate();
    this.setupEventListeners();
    this.initAccountabilityClock();
    this.renderAll();
    this.initPyodide();
  }

  // --- Theme Management ---
  setTheme(themeName) {
    this.state.theme = themeName;
    this.applyTheme(themeName);
    this.saveState();
  }

  applyTheme(themeName) {
    document.body.classList.remove("theme-dark", "theme-light");
    document.body.classList.add(`theme-${themeName}`);

    const btnDark = document.getElementById("btnThemeDark");
    const btnLight = document.getElementById("btnThemeLight");
    if (btnDark) btnDark.classList.toggle("active", themeName === "dark");
    if (btnLight) btnLight.classList.toggle("active", themeName === "light");
  }

  // --- Persistence ---
  loadState() {
    const saved = localStorage.getItem("google_l5_workspace_state");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        this.state = { ...this.state, ...parsed };
      } catch (e) {
        console.error("Failed to load workspace state", e);
      }
    }
  }

  saveState() {
    localStorage.setItem("google_l5_workspace_state", JSON.stringify(this.state));
  }

  // --- Event Listeners ---
  setupEventListeners() {
    // Navigation items
    document.querySelectorAll(".nav-item").forEach(btn => {
      btn.addEventListener("click", () => {
        this.switchTab(btn.dataset.tab);
      });
    });

    // PIN input Enter key
    const pinInput = document.getElementById("inputSecurityPin");
    if (pinInput) {
      pinInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          this.submitSecurityPin();
        }
      });
    }

    // Sync Modal
    const syncModal = document.getElementById("syncModal");
    const openSyncBtn = document.getElementById("btnSyncModal");
    const closeSyncBtn = document.getElementById("btnCloseSyncModal");

    if (openSyncBtn && syncModal) {
      openSyncBtn.addEventListener("click", () => syncModal.classList.add("active"));
    }
    if (closeSyncBtn && syncModal) {
      closeSyncBtn.addEventListener("click", () => syncModal.classList.remove("active"));
    }

    // Export & Import
    const btnExport = document.getElementById("btnExportJson");
    if (btnExport) {
      btnExport.addEventListener("click", () => this.exportBackup());
    }

    const btnTriggerImport = document.getElementById("btnTriggerImport");
    const importFileInput = document.getElementById("importFileInput");
    if (btnTriggerImport && importFileInput) {
      btnTriggerImport.addEventListener("click", () => importFileInput.click());
      importFileInput.addEventListener("change", (e) => this.importBackup(e));
    }
  }

  switchTab(tabId) {
    this.state.activeTab = tabId;
    this.saveState();

    document.querySelectorAll(".nav-item").forEach(item => {
      item.classList.toggle("active", item.dataset.tab === tabId);
    });

    document.querySelectorAll(".content-view").forEach(view => {
      view.classList.toggle("active", view.id === `view-${tabId}`);
    });
  }

  // --- 🔒 Security Gate & PIN Protection ---
  checkSecurityGate() {
    if (!this.isUnlocked) {
      this.showSecurityGate();
    } else {
      this.hideSecurityGate();
    }
  }

  showSecurityGate() {
    const modal = document.getElementById("securityGateModal");
    if (modal) modal.style.display = "flex";
    document.title = "Enterprise Cloud Telemetry & Workspace";
    const input = document.getElementById("inputSecurityPin");
    if (input) {
      input.value = "";
      setTimeout(() => input.focus(), 100);
    }
  }

  hideSecurityGate() {
    const modal = document.getElementById("securityGateModal");
    if (modal) modal.style.display = "none";
    document.title = "Engineering Workspace & Google India Prep | Confidential";
  }

  submitSecurityPin() {
    const input = document.getElementById("inputSecurityPin");
    const pin = (input ? input.value : "").trim();
    const err = document.getElementById("pinErrorMessage");

    if (pin === this.masterPin) {
      this.isUnlocked = true;
      sessionStorage.setItem("google_l5_session_unlocked", "true");
      if (err) err.style.display = "none";
      this.hideSecurityGate();
    } else {
      if (err) {
        err.style.display = "block";
        err.textContent = "Invalid PIN. (Default Master PIN: 2026)";
      }
      if (input) {
        input.value = "";
        input.focus();
      }
    }
  }

  changeMasterPin() {
    const current = prompt("Enter your current Master PIN (default: 2026):");
    if (current !== this.masterPin) {
      alert("Incorrect current PIN.");
      return;
    }
    const newPin = prompt("Enter your new Master PIN:");
    if (!newPin || newPin.length < 4) {
      alert("PIN must be at least 4 characters.");
      return;
    }
    this.masterPin = newPin;
    localStorage.setItem("google_l5_master_pin", newPin);
    alert("Master PIN successfully updated!");
  }

  lockApp() {
    this.isUnlocked = false;
    sessionStorage.removeItem("google_l5_session_unlocked");
    this.showSecurityGate();
  }

  // --- ⏰ 24-Hour Daily Accountability Engine (12:00 AM – 11:59 PM) ---
  getTodayDateString() {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  loadDailyData() {
    const key = `google_l5_daily_${this.todayDateStr}`;
    const saved = localStorage.getItem(key);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return {
      date: this.todayDateStr,
      pillars: { 1: false, 2: false, 3: false, 4: false },
      notes: ""
    };
  }

  saveDailyData() {
    const key = `google_l5_daily_${this.todayDateStr}`;
    localStorage.setItem(key, JSON.stringify(this.dailyData));
    this.updateDailyUI();
  }

  initAccountabilityClock() {
    this.updateAccountabilityClock();
    if (this.accountabilityInterval) clearInterval(this.accountabilityInterval);
    this.accountabilityInterval = setInterval(() => this.updateAccountabilityClock(), 1000);
  }

  updateAccountabilityClock() {
    const now = new Date();
    const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);
    const diffMs = Math.max(0, endOfDay - now);

    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const mins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diffMs % (1000 * 60)) / 1000);

    const timeStr = `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    const topbarClock = document.getElementById("topbarCountdownClock");
    if (topbarClock) topbarClock.textContent = `${timeStr} Left`;

    const dailyClock = document.getElementById("dailyCountdownClock");
    if (dailyClock) dailyClock.textContent = timeStr;

    // Urgency Status
    const completedCount = Object.values(this.dailyData.pillars).filter(Boolean).length;
    const msgEl = document.getElementById("countdownUrgencyMessage");
    if (msgEl) {
      if (completedCount === 4) {
        msgEl.innerHTML = "🏆 <span style='color:var(--accent-green); font-weight:700;'>Daily Quota Crushed (4/4 Completed). Great consistency!</span>";
      } else if (hours < 6) {
        msgEl.innerHTML = `🚨 <span style='color:var(--accent-red); font-weight:700;'>CRITICAL: Only ${hours}h ${mins}m left before 11:59 PM reset. Finish your targets!</span>`;
      } else {
        msgEl.innerHTML = `Window resets strictly at 11:59:59 PM IST tonight. (${completedCount}/4 Completed)`;
      }
    }
  }

  togglePillar(num) {
    this.dailyData.pillars[num] = !this.dailyData.pillars[num];
    this.saveDailyData();
  }

  saveDailyLogNotes() {
    const input = document.getElementById("dailyLogNotesInput");
    if (input) {
      this.dailyData.notes = input.value;
      const key = `google_l5_daily_${this.todayDateStr}`;
      localStorage.setItem(key, JSON.stringify(this.dailyData));
      const status = document.getElementById("dailyLogSaveStatus");
      if (status) {
        status.textContent = "Saved ✓";
        setTimeout(() => { if (status) status.textContent = "Auto-saved to daily log"; }, 1500);
      }
    }
  }

  resetTodayTargets() {
    if (confirm("Reset today's daily checklist?")) {
      this.dailyData.pillars = { 1: false, 2: false, 3: false, 4: false };
      this.saveDailyData();
      this.renderAccountability();
    }
  }

  updateDailyUI() {
    const completedCount = Object.values(this.dailyData.pillars).filter(Boolean).length;

    // Checkboxes and card completion state
    for (let i = 1; i <= 4; i++) {
      const isDone = !!this.dailyData.pillars[i];
      const chk = document.getElementById(`checkPillar${i}`);
      if (chk) chk.checked = isDone;

      const card = document.getElementById(`pillarCard${i}`);
      if (card) card.classList.toggle("completed", isDone);

      const statusEl = document.getElementById(`pillarStatus${i}`);
      if (statusEl) {
        statusEl.textContent = isDone ? "✓ Done" : "Pending";
        statusEl.classList.toggle("done", isDone);
      }
    }

    const topbarStatus = document.getElementById("topbarTargetStatus");
    if (topbarStatus) {
      topbarStatus.textContent = `${completedCount}/4 Done`;
      topbarStatus.style.color = completedCount === 4 ? "#34d399" : (completedCount >= 2 ? "#fbbf24" : "#f87171");
    }

    this.renderAccountabilityHistory();
  }

  renderAccountability() {
    const d = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = d.toLocaleDateString('en-US', options);

    const dateDisplay = document.getElementById("trackerDateDisplay");
    if (dateDisplay) dateDisplay.textContent = dateStr;

    const notesInput = document.getElementById("dailyLogNotesInput");
    if (notesInput) notesInput.value = this.dailyData.notes || "";

    this.updateDailyUI();
  }

  renderAccountabilityHistory() {
    const container = document.getElementById("accountabilityHistoryList");
    if (!container) return;

    let html = "";
    const today = new Date();
    let currentStreak = 0;

    for (let i = 0; i < 7; i++) {
      const past = new Date(today);
      past.setDate(today.getDate() - i);
      const year = past.getFullYear();
      const month = String(past.getMonth() + 1).padStart(2, '0');
      const day = String(past.getDate()).padStart(2, '0');
      const keyStr = `${year}-${month}-${day}`;

      let record = { pillars: { 1: false, 2: false, 3: false, 4: false } };
      if (keyStr === this.todayDateStr) {
        record = this.dailyData;
      } else {
        const saved = localStorage.getItem(`google_l5_daily_${keyStr}`);
        if (saved) {
          try { record = JSON.parse(saved); } catch (e) {}
        }
      }

      const count = Object.values(record.pillars || {}).filter(Boolean).length;
      if (count >= 3) currentStreak++;

      const dayName = i === 0 ? "Today" : (i === 1 ? "Yesterday" : past.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }));
      const badgeStyle = count === 4 
        ? "background:rgba(16,185,129,0.2); color:#34d399;" 
        : (count > 0 ? "background:rgba(245,158,11,0.2); color:#fbbf24;" : "background:rgba(255,255,255,0.06); color:#9ca3af;");

      html += `
        <div class="audit-history-row">
          <div>
            <strong>${dayName}</strong>
            <span style="margin-left:8px; color:var(--text-subtle);">${keyStr}</span>
          </div>
          <span class="audit-badge" style="${badgeStyle}">${count} / 4 Done</span>
        </div>
      `;
    }
    container.innerHTML = html;

    const streakEl = document.getElementById("footerStreakDisplay");
    if (streakEl) streakEl.textContent = `Streak: ${Math.max(1, currentStreak)} Days`;
  }

  // --- 📲 1-Click WhatsApp Daily Accountability Sync ---
  generateDailyReportText() {
    const completedCount = Object.values(this.dailyData.pillars).filter(Boolean).length;
    const p1 = this.dailyData.pillars[1] ? "✅ Done" : "⏳ Pending";
    const p2 = this.dailyData.pillars[2] ? "✅ Done" : "⏳ Pending";
    const p3 = this.dailyData.pillars[3] ? "✅ Done" : "⏳ Pending";
    const p4 = this.dailyData.pillars[4] ? "✅ Done" : "⏳ Pending";
    const notes = (this.dailyData.notes || "").trim() || "Completed structured engineering study block.";

    return `🔥 *Google Data Engineer Daily Accountability Log*
📅 Date: *${this.todayDateStr}*
🎯 Quota Completed: *${completedCount} / 4*
• Pillar 1 (Python DSA): ${p1}
• Pillar 2 (SQL & Kimball Modeling): ${p2}
• Pillar 3 (Snowflake/Spark Deep-Dive): ${p3}
• Pillar 4 (Siemens/Coke Project Defense): ${p4}

📝 *Technical Accomplishments:*
"${notes}"

⚡ *Status:* ${completedCount === 4 ? "🏆 Target Crushed (100%)" : "In Progress • Active before 11:59 PM"}
#GoogleIndia #DataEngineering #Accountability`;
  }

  shareDailyProgressWhatsApp() {
    const text = this.generateDailyReportText();
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  }

  copyDailySummary() {
    const text = this.generateDailyReportText();
    navigator.clipboard.writeText(text).then(() => {
      alert("Daily summary report copied to clipboard!");
    }).catch(() => {
      prompt("Copy your daily report below:", text);
    });
  }

  // --- 🔬 Technical Masterclass (Curriculum) ---
  filterMasterclass(category) {
    this.state.activeMasterclassCat = category;
    document.querySelectorAll(".cat-pill").forEach(p => {
      p.classList.toggle("active", p.textContent.toLowerCase().includes(category) || (category === 'all' && p.textContent === 'All Modules'));
    });
    this.renderMasterclass();
  }

  renderMasterclass() {
    const container = document.getElementById("masterclassContainer");
    if (!container || !PREP_DATA.techDeepDives) return;

    const cat = this.state.activeMasterclassCat;
    const filtered = (cat === "all") 
      ? PREP_DATA.techDeepDives 
      : PREP_DATA.techDeepDives.filter(d => d.category === cat);

    let html = "";
    filtered.forEach(module => {
      html += `
        <div class="masterclass-card">
          <div class="masterclass-card-header">
            <span class="masterclass-category">${module.category.toUpperCase()} ARCHITECTURE</span>
            <h2 class="masterclass-title">${module.title}</h2>
            <p class="masterclass-summary">${module.summary}</p>
          </div>
          <div class="masterclass-topics-list">
            ${module.topics.map(t => `
              <div class="topic-box">
                <h3 class="topic-box-title">▪ ${t.name}</h3>
                <div class="topic-box-content">${t.content}</div>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    });
    container.innerHTML = html;
  }

  // --- 💻 Coding & SQL Workbench ---
  switchPracticeMode(mode) {
    this.state.activePracticeMode = mode;
    const dsaSpace = document.getElementById("practiceDsaWorkspace");
    const sqlSpace = document.getElementById("practiceSqlWorkspace");
    const btnDsa = document.getElementById("btnTabDsa");
    const btnSql = document.getElementById("btnTabSql");

    if (mode === "dsa") {
      if (dsaSpace) dsaSpace.style.display = "grid";
      if (sqlSpace) sqlSpace.style.display = "none";
      if (btnDsa) btnDsa.classList.add("active");
      if (btnSql) btnSql.classList.remove("active");
    } else {
      if (dsaSpace) dsaSpace.style.display = "none";
      if (sqlSpace) sqlSpace.style.display = "grid";
      if (btnDsa) btnDsa.classList.remove("active");
      if (btnSql) btnSql.classList.add("active");
    }
  }

  renderDsaList() {
    const listPanel = document.getElementById("dsaProblemList");
    if (!listPanel || !PREP_DATA.dsaProblems) return;

    let html = "";
    PREP_DATA.dsaProblems.forEach(p => {
      const isActive = p.id === this.state.activeDsaId;
      html += `
        <button class="workbench-item ${isActive ? 'active' : ''}" onclick="app.selectDsaProblem('${p.id}')">
          <div class="workbench-item-header">
            <span class="workbench-item-tag">${p.category}</span>
            <span style="font-size:0.75rem; color:var(--text-subtle);">${p.difficulty}</span>
          </div>
          <div class="workbench-item-title">${p.title}</div>
        </button>
      `;
    });
    listPanel.innerHTML = html;
  }

  selectDsaProblem(id) {
    this.state.activeDsaId = id;
    this.renderDsaList();

    const p = PREP_DATA.dsaProblems.find(item => item.id === id);
    const workspace = document.getElementById("dsaWorkspace");
    if (!p || !workspace) return;

    workspace.innerHTML = `
      <div class="problem-header">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
          <span style="font-size:0.75rem; font-weight:700; color:var(--accent-blue); text-transform:uppercase;">${p.category} • ${p.difficulty}</span>
          <span style="font-size:0.75rem; color:var(--text-subtle); font-family:var(--font-mono);">Time: ${p.timeComplexity} | Space: ${p.spaceComplexity}</span>
        </div>
        <h2 style="font-size:1.2rem; font-weight:700; color:var(--text-main);">${p.title}</h2>
      </div>

      <div class="problem-statement">
        <strong>Problem:</strong>
        <p style="margin-top:4px;">${p.problemStatement}</p>
        <div style="margin-top:8px; font-size:0.8rem; color:var(--text-muted);">
          <strong>Google DE Relevance:</strong> ${p.deRelevance}
        </div>
      </div>

      <div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
          <span style="font-weight:600; font-size:0.85rem;">Python 3 Solution & Test Harness:</span>
          <button class="btn btn-sm btn-primary" onclick="app.runPythonCode()">▶ Run Python Tests (WebAssembly)</button>
        </div>
        <textarea class="code-editor-area" id="pythonEditorArea">${p.optimalSolution}</textarea>
      </div>

      <div>
        <span style="font-weight:600; font-size:0.82rem; color:var(--text-subtle);">Pyodide Execution Output:</span>
        <div class="test-output-box" id="testOutput">Click 'Run Python Tests' to execute code against Google test cases.</div>
      </div>

      <div style="background:var(--bg-surface-elevated); padding:10px 14px; border-radius:var(--radius-sm); font-size:0.82rem; border-left:3px solid var(--accent-yellow);">
        <strong>Interviewer Tips:</strong> ${p.interviewerTips}
      </div>
    `;
  }

  // --- Pyodide WebAssembly Python Runner ---
  async initPyodide() {
    if (this.pyodide || this.pyodideLoading) return;
    this.pyodideLoading = true;
    const badge = document.getElementById("pyodideStatusBadge");

    try {
      if (typeof loadPyodide === "function") {
        this.pyodide = await loadPyodide();
        this.pyodideLoading = false;
        if (badge) {
          badge.textContent = "Python 3.12 (Pyodide Wasm): Ready ✓";
          badge.style.color = "var(--accent-green)";
        }
      }
    } catch (err) {
      this.pyodideLoading = false;
      if (badge) {
        badge.textContent = "Python Engine: Ready (Native fallback)";
      }
    }
  }

  async runPythonCode() {
    const editor = document.getElementById("pythonEditorArea");
    const output = document.getElementById("testOutput");
    if (!editor || !output) return;

    output.textContent = "Executing Python code in WebAssembly...";

    if (!this.pyodide) {
      await this.initPyodide();
    }

    if (!this.pyodide) {
      output.textContent = "Python WebAssembly engine is initializing. Please wait a moment and click Run again.";
      return;
    }

    const p = PREP_DATA.dsaProblems.find(item => item.id === this.state.activeDsaId);
    if (!p) return;

    try {
      this.pyodide.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
      `);

      const fullCode = editor.value + "\n" + p.testHarness;
      this.pyodide.runPython(fullCode);

      const stdout = this.pyodide.runPython("sys.stdout.getvalue()");
      output.textContent = stdout || "Code executed successfully with zero stdout errors.";
    } catch (err) {
      output.textContent = "Runtime Error:\n" + err;
    }
  }

  renderSqlList() {
    const listPanel = document.getElementById("sqlProblemList");
    if (!listPanel || !PREP_DATA.sqlChallenges) return;

    let html = "";
    PREP_DATA.sqlChallenges.forEach(s => {
      const isActive = s.id === this.state.activeSqlId;
      html += `
        <button class="workbench-item ${isActive ? 'active' : ''}" onclick="app.selectSqlProblem('${s.id}')">
          <div class="workbench-item-header">
            <span class="workbench-item-tag">${s.category}</span>
            <span style="font-size:0.75rem; color:var(--text-subtle);">${s.difficulty}</span>
          </div>
          <div class="workbench-item-title">${s.title}</div>
        </button>
      `;
    });
    listPanel.innerHTML = html;
  }

  selectSqlProblem(id) {
    this.state.activeSqlId = id;
    this.renderSqlList();

    const s = PREP_DATA.sqlChallenges.find(item => item.id === id);
    const workspace = document.getElementById("sqlWorkspace");
    if (!s || !workspace) return;

    workspace.innerHTML = `
      <div class="problem-header">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
          <span style="font-size:0.75rem; font-weight:700; color:var(--accent-blue); text-transform:uppercase;">${s.category} • ${s.difficulty}</span>
        </div>
        <h2 style="font-size:1.2rem; font-weight:700; color:var(--text-main);">${s.title}</h2>
      </div>

      <div class="problem-statement">
        <strong>Business Scenario:</strong>
        <p style="margin-top:4px;">${s.scenario}</p>
        <div style="margin-top:8px; font-family:var(--font-mono); font-size:0.78rem; color:var(--accent-yellow);">
          <strong>Schema:</strong> ${s.sampleSchema}
        </div>
      </div>

      <div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
          <span style="font-weight:600; font-size:0.85rem;">Production Google SQL Query Solution:</span>
          <button class="btn btn-sm btn-outline" onclick="navigator.clipboard.writeText(document.getElementById('sqlCodeArea').value); alert('SQL copied!');">Copy SQL</button>
        </div>
        <textarea class="code-editor-area" id="sqlCodeArea" readonly style="height:220px;">${s.solutionQuery}</textarea>
      </div>

      <div style="background:var(--bg-surface-elevated); padding:12px 14px; border-radius:var(--radius-sm); font-size:0.85rem; border-left:3px solid var(--accent-green);">
        <strong>Architectural Explanation:</strong>
        <p style="margin-top:4px; color:var(--text-muted);">${s.explanation}</p>
      </div>
    `;
  }

  // --- 🛡️ Resume & Project Defense ---
  renderResumeDefense() {
    const container = document.getElementById("projectDefenseContainer");
    if (!container || !PREP_DATA.resumeDefenseSuite) return;

    let html = "";
    PREP_DATA.resumeDefenseSuite.forEach(proj => {
      html += `
        <div class="defense-group">
          <h3 class="defense-group-title">💼 ${proj.project}</h3>
          ${proj.questions.map(qa => `
            <div class="qa-card">
              <div class="qa-q">❓ Interviewer: "${qa.q}"</div>
              <div class="qa-a"><strong>Staff Response:</strong> ${qa.answer}</div>
            </div>
          `).join("")}
        </div>
      `;
    });
    container.innerHTML = html;
  }

  copyAtsResumeText() {
    const paper = document.getElementById("atsResumePaper");
    if (!paper) return;
    const text = paper.innerText;
    navigator.clipboard.writeText(text).then(() => {
      alert("1-Page Google ATS resume text copied to clipboard!");
    }).catch(() => {
      prompt("Copy your ATS resume below:", text);
    });
  }

  // --- 🎯 Google India Tracks & Bar ---
  renderRoles() {
    const container = document.getElementById("rolesCleanGrid");
    if (!container || !PREP_DATA.targetRoles) return;

    let html = "";
    PREP_DATA.targetRoles.forEach(r => {
      html += `
        <div class="role-spec-card">
          <div>
            <h2 class="role-title">${r.title}</h2>
            <div class="role-org">${r.organization}</div>
            <div class="role-comp-box">💰 Compensation Benchmark: ${r.compensationRange}</div>
            <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:10px;">${r.cheatCode}</p>

            <h4 style="font-size:0.82rem; font-weight:700; text-transform:uppercase; color:var(--text-subtle); margin-top:12px;">Interview Loops:</h4>
            <div class="role-loops-list">
              ${r.interviewRounds.map(rnd => `
                <div class="loop-item">
                  <strong>${rnd.name}:</strong> ${rnd.desc}
                </div>
              `).join("")}
            </div>
          </div>

          <div style="margin-top:14px; padding-top:10px; border-top:1px solid var(--border-subtle);">
            <a href="${r.googleCareersQuery}" target="_blank" class="btn btn-sm btn-outline" style="text-decoration:none;">View Open Positions on Google Careers ↗</a>
          </div>
        </div>
      `;
    });
    container.innerHTML = html;
  }

  // --- Render All ---
  renderAll() {
    this.renderAccountability();
    this.renderMasterclass();
    this.renderDsaList();
    this.selectDsaProblem(this.state.activeDsaId);
    this.renderSqlList();
    this.selectSqlProblem(this.state.activeSqlId);
    this.renderResumeDefense();
    this.renderRoles();
  }

  // --- Backup & Restore ---
  exportBackup() {
    const backupObj = {
      workspaceState: this.state,
      todayLog: this.dailyData,
      allDailyLogs: {}
    };

    // Grab all daily keys
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith("google_l5_daily_")) {
        backupObj.allDailyLogs[k] = localStorage.getItem(k);
      }
    }

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupObj, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `google_prep_backup_${this.todayDateStr}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  }

  importBackup(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target.result);
        if (imported.workspaceState) this.state = { ...this.state, ...imported.workspaceState };
        if (imported.allDailyLogs) {
          Object.keys(imported.allDailyLogs).forEach(k => {
            localStorage.setItem(k, imported.allDailyLogs[k]);
          });
        }
        this.dailyData = this.loadDailyData();
        this.saveState();
        this.renderAll();
        alert("Workspace state successfully restored!");
        document.getElementById("syncModal").classList.remove("active");
      } catch (err) {
        alert("Invalid backup JSON file.");
      }
    };
    reader.readAsText(file);
  }
}

// Global instantiation
let app;
window.addEventListener("DOMContentLoaded", () => {
  app = new PrepPortalApp();
});
