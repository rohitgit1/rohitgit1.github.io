// Google India Data Engineering Workspace - Application Logic
// Zero Fluff • Production-Grade • High Density • Complete 90-Day Progression

class PrepPortalApp {
  constructor() {
    this.state = {
      theme: "dark",
      activeTab: "tracker",
      activeMasterclassCat: "all",
      activePracticeMode: "dsa",
      activeDsaId: "dsa-1",
      activeSqlId: "sql-1",
      selectedDay: parseInt(localStorage.getItem("google_l5_selected_day") || "1"),
      dsaCategoryFilter: "all",
      curriculumPhaseFilter: "all",
      curriculumSearchQuery: "",
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
    this.initDaySelector();
    this.renderAll();
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

    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    const errEl = document.getElementById("pinErrorMessage");
    if (!input) return;

    if (input.value === this.masterPin) {
      this.isUnlocked = true;
      sessionStorage.setItem("google_l5_session_unlocked", "true");
      this.hideSecurityGate();
      if (errEl) errEl.style.display = "none";
    } else {
      if (errEl) errEl.style.display = "block";
      input.value = "";
      input.focus();
    }
  }

  lockApp() {
    this.isUnlocked = false;
    sessionStorage.removeItem("google_l5_session_unlocked");
    this.showSecurityGate();
  }

  changeMasterPin() {
    const current = prompt("Enter current Master PIN (Default: 2026):");
    if (current === this.masterPin) {
      const newPin = prompt("Enter new 4 to 8 digit Master PIN:");
      if (newPin && newPin.trim().length >= 4) {
        this.masterPin = newPin.trim();
        localStorage.setItem("google_l5_master_pin", this.masterPin);
        alert("Master PIN updated successfully!");
      } else {
        alert("PIN must be at least 4 digits.");
      }
    } else if (current !== null) {
      alert("Incorrect current PIN.");
    }
  }

  // --- Backup & Restore ---
  exportBackup() {
    const backup = {
      timestamp: new Date().toISOString(),
      state: this.state,
      dailyData: this.dailyData,
      allStorage: {}
    };
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("google_l5_")) {
        backup.allStorage[key] = localStorage.getItem(key);
      }
    }
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `google_l5_prep_backup_${this.todayDateStr}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  importBackup(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        if (data.allStorage) {
          Object.keys(data.allStorage).forEach(key => {
            localStorage.setItem(key, data.allStorage[key]);
          });
          alert("Backup successfully restored! Reloading...");
          window.location.reload();
        }
      } catch (err) {
        alert("Invalid backup file: " + err.message);
      }
    };
    reader.readAsText(file);
  }

  // --- ⏱️ 90-Day Progression & Day Selector ---
  initDaySelector() {
    const select = document.getElementById("daySelectDropdown");
    if (!select || !PREP_DATA.schedule) return;

    select.innerHTML = "";
    PREP_DATA.schedule.forEach(s => {
      const opt = document.createElement("option");
      opt.value = s.day;
      opt.textContent = `Day ${s.day}: ${s.dsaProblem.title}`;
      if (s.day === this.state.selectedDay) {
        opt.selected = true;
      }
      select.appendChild(opt);
    });

    this.renderDailyPillars();
  }

  changeSelectedDay(dayNum) {
    this.state.selectedDay = parseInt(dayNum);
    localStorage.setItem("google_l5_selected_day", this.state.selectedDay);
    
    const select = document.getElementById("daySelectDropdown");
    if (select) select.value = this.state.selectedDay;

    this.renderDailyPillars();
  }

  navigateDay(delta) {
    let nextDay = this.state.selectedDay + delta;
    if (nextDay < 1) nextDay = 1;
    if (nextDay > 90) nextDay = 90;
    this.changeSelectedDay(nextDay);
  }

  jumpToCurrentDay() {
    this.changeSelectedDay(1);
  }

  loadDayPillarsState(dayNum) {
    const key = `google_l5_day_${dayNum}_pillars`;
    const saved = localStorage.getItem(key);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return { 1: false, 2: false, 3: false, 4: false };
  }

  saveDayPillarsState(dayNum, pillars) {
    const key = `google_l5_day_${dayNum}_pillars`;
    localStorage.setItem(key, JSON.stringify(pillars));
    // If it's today's day, sync to dailyData
    if (dayNum === this.state.selectedDay) {
      this.dailyData.pillars = pillars;
      this.saveDailyData();
    }
  }

  renderDailyPillars() {
    const day = this.state.selectedDay;
    const sched = (PREP_DATA.schedule && PREP_DATA.schedule.find(s => s.day === day)) || {
      day: day,
      phase: 1,
      phaseName: "Phase 1: Foundations",
      week: 1,
      dsaProblem: { id: "dsa-1", title: "LC 1 - Two Sum", category: "Arrays & Hashing", difficulty: "Easy" },
      sqlChallenge: { id: "sql-1", title: "User Sessionization" },
      techTopic: "Snowflake: Micro-partitions & Pruning",
      defenseTopic: "Siemens: 40k Object Migration AST Parser"
    };

    // Header & Phase Badge
    const headerEl = document.getElementById("dailyPillarsHeader");
    if (headerEl) headerEl.textContent = `Day ${day} Quota (Target Completion Before 11:59 PM)`;

    const phaseBadge = document.getElementById("currentPhaseBadge");
    if (phaseBadge) phaseBadge.textContent = `${sched.phaseName} (Week ${sched.week})`;

    // Pillar 1: DSA
    const cat1 = document.getElementById("pillarCategory1");
    const title1 = document.getElementById("pillarTitle1");
    const desc1 = document.getElementById("pillarDesc1");
    if (cat1) cat1.textContent = `Pillar 1: Data Structures & Algorithms (${sched.dsaProblem.difficulty})`;
    if (title1) title1.textContent = sched.dsaProblem.title;
    if (desc1) desc1.textContent = `${sched.dsaProblem.category} • ${sched.dsaProblem.difficulty} | Solve in Dojo with automated Pyodide test harness.`;

    // Pillar 2: SQL
    const cat2 = document.getElementById("pillarCategory2");
    const title2 = document.getElementById("pillarTitle2");
    const desc2 = document.getElementById("pillarDesc2");
    if (cat2) cat2.textContent = "Pillar 2: SQL & Kimball Modeling";
    if (title2) title2.textContent = sched.sqlChallenge.title;
    if (desc2) desc2.textContent = "Master complex query mechanics, window functions, and dimensional schemas.";

    // Pillar 3: Tech Deep-Dive
    const cat3 = document.getElementById("pillarCategory3");
    const title3 = document.getElementById("pillarTitle3");
    const desc3 = document.getElementById("pillarDesc3");
    if (cat3) cat3.textContent = "Pillar 3: Stack Deep-Dive";
    if (title3) title3.textContent = sched.techTopic;
    if (desc3) desc3.textContent = "Production-grade architecture, memory models, query optimization & failure modes.";

    // Pillar 4: Project Defense
    const cat4 = document.getElementById("pillarCategory4");
    const title4 = document.getElementById("pillarTitle4");
    const desc4 = document.getElementById("pillarDesc4");
    if (cat4) cat4.textContent = "Pillar 4: Defense & Story";
    if (title4) title4.textContent = sched.defenseTopic;
    if (desc4) desc4.textContent = "Defend this exact architectural decision on your Capgemini resume without stuttering.";

    // Load Pillar Checkboxes for this day
    const dayPillars = this.loadDayPillarsState(day);
    let doneCount = 0;
    for (let i = 1; i <= 4; i++) {
      const isDone = !!dayPillars[i];
      if (isDone) doneCount++;
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


    const leetcodeBtn = document.getElementById("pillarLeetCodeBtn1");
    if (leetcodeBtn) {
      leetcodeBtn.href = sched.leetcodeUrl || "https://leetcode.com/problemset/all/";
    }

    const summaryEl = document.getElementById("dayCompletionSummary");
    if (summaryEl) {
      summaryEl.textContent = `${doneCount}/4 Completed`;
      summaryEl.style.color = doneCount === 4 ? "#34d399" : (doneCount >= 2 ? "#fbbf24" : "#9ca3af");
    }

    const topbarStatus = document.getElementById("topbarTargetStatus");
    if (topbarStatus) {
      topbarStatus.textContent = `Day ${day}: ${doneCount}/4 Done`;
      topbarStatus.style.color = doneCount === 4 ? "#34d399" : (doneCount >= 2 ? "#fbbf24" : "#f87171");
    }
  }

  togglePillar(num) {
    const day = this.state.selectedDay;
    const dayPillars = this.loadDayPillarsState(day);
    dayPillars[num] = !dayPillars[num];
    this.saveDayPillarsState(day, dayPillars);
    this.renderDailyPillars();
    this.renderAccountabilityHistory();
  }

  openDojoForCurrentDay() {
    const day = this.state.selectedDay;
    const sched = PREP_DATA.schedule.find(s => s.day === day) || PREP_DATA.schedule[0];
    const targetProblemId = sched.dsaProblem.id || "dsa-1";
    
    this.switchTab("practice");
    this.switchPracticeMode("dsa");
    this.selectDsaProblem(targetProblemId);
  }

  openSqlForCurrentDay() {
    const day = this.state.selectedDay;
    const sched = PREP_DATA.schedule.find(s => s.day === day) || PREP_DATA.schedule[0];
    const targetSqlId = sched.sqlChallenge.id || "sql-1";

    this.switchTab("practice");
    this.switchPracticeMode("sql");
    this.selectSqlProblem(targetSqlId);
  }

  // --- ⏱️ 24-Hour Cutoff Accountability Clock ---
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
      try { return JSON.parse(saved); } catch (e) {}
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
    const dayPillars = this.loadDayPillarsState(this.state.selectedDay);
    const completedCount = Object.values(dayPillars).filter(Boolean).length;
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
      this.saveDayPillarsState(this.state.selectedDay, { 1: false, 2: false, 3: false, 4: false });
      this.renderDailyPillars();
      this.renderAccountabilityHistory();
    }
  }

  renderAccountability() {
    const d = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = d.toLocaleDateString('en-US', options);

    const dateDisplay = document.getElementById("trackerDateDisplay");
    if (dateDisplay) dateDisplay.textContent = dateStr;

    const notesInput = document.getElementById("dailyLogNotesInput");
    if (notesInput) notesInput.value = this.dailyData.notes || "";

    this.renderDailyPillars();
    this.renderAccountabilityHistory();
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

  // --- 📲 WhatsApp Daily Sync ---
  generateDailyReportText() {
    const day = this.state.selectedDay;
    const sched = PREP_DATA.schedule.find(s => s.day === day) || PREP_DATA.schedule[0];
    const dayPillars = this.loadDayPillarsState(day);
    const completedCount = Object.values(dayPillars).filter(Boolean).length;
    const p1 = dayPillars[1] ? "✅ Done" : "⏳ Pending";
    const p2 = dayPillars[2] ? "✅ Done" : "⏳ Pending";
    const p3 = dayPillars[3] ? "✅ Done" : "⏳ Pending";
    const p4 = dayPillars[4] ? "✅ Done" : "⏳ Pending";
    const notes = (this.dailyData.notes || "").trim() || "Completed structured engineering study block.";

    return `🔥 *Google Data Engineer Daily Accountability Log*
📅 Date: *${this.todayDateStr}* (Day ${day} of 90)
🎯 Quota Completed: *${completedCount} / 4*
• Pillar 1 (${sched.dsaProblem.title}): ${p1}
• Pillar 2 (${sched.sqlChallenge.title}): ${p2}
• Pillar 3 (${sched.techTopic}): ${p3}
• Pillar 4 (${sched.defenseTopic}): ${p4}

📝 *Technical Notes:*
"${notes}"

⚡ *Status:* ${completedCount === 4 ? "🏆 Day Target Crushed (100%)" : "In Progress • Active before 11:59 PM"}
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

  // --- 🔬 Technical Masterclass ---
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
        <div class="card masterclass-card">
          <div class="masterclass-header">
            <span class="masterclass-tag">${module.category.toUpperCase()} ARCHITECTURE</span>
            <h2 class="masterclass-title">${module.title}</h2>
            <p class="masterclass-subtitle">${module.subtitle}</p>
          </div>
          <div class="masterclass-topics">
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
    const curSpace = document.getElementById("practiceCurriculumWorkspace");

    const btnDsa = document.getElementById("btnTabDsa");
    const btnSql = document.getElementById("btnTabSql");
    const btnCur = document.getElementById("btnTabCurriculum");

    if (dsaSpace) dsaSpace.style.display = mode === "dsa" ? "grid" : "none";
    if (sqlSpace) sqlSpace.style.display = mode === "sql" ? "grid" : "none";
    if (curSpace) curSpace.style.display = mode === "curriculum" ? "block" : "none";

    if (btnDsa) btnDsa.classList.toggle("active", mode === "dsa");
    if (btnSql) btnSql.classList.toggle("active", mode === "sql");
    if (btnCur) btnCur.classList.toggle("active", mode === "curriculum");

    if (mode === "curriculum") {
      this.renderCurriculumTable();
    }
  }

  filterDsaByCategory(category) {
    this.state.dsaCategoryFilter = category;
    this.renderDsaList();
  }

  isProblemSolved(id) {
    const solved = JSON.parse(localStorage.getItem("google_l5_solved_dsa") || "[]");
    return solved.includes(id);
  }

  toggleProblemSolved(id) {
    let solved = JSON.parse(localStorage.getItem("google_l5_solved_dsa") || "[]");
    if (solved.includes(id)) {
      solved = solved.filter(x => x !== id);
    } else {
      solved.push(id);
    }
    localStorage.setItem("google_l5_solved_dsa", JSON.stringify(solved));
    this.renderDsaList();
    this.selectDsaProblem(id);
  }

  copyProblemSolution(id) {
    const p = PREP_DATA.dsaProblems.find(item => item.id === id);
    if (!p) return;
    navigator.clipboard.writeText(p.optimalSolution).then(() => {
      alert("Optimal Python solution copied to clipboard!");
    }).catch(() => {
      prompt("Copy Python Solution:", p.optimalSolution);
    });
  }

  renderDsaList() {
    const listPanel = document.getElementById("dsaProblemList");
    if (!listPanel || !PREP_DATA.dsaProblems) return;

    const filter = this.state.dsaCategoryFilter;
    const problems = (filter === "all")
      ? PREP_DATA.dsaProblems
      : PREP_DATA.dsaProblems.filter(p => p.category === filter);

    let html = "";
    problems.forEach(p => {
      const isActive = p.id === this.state.activeDsaId;
      const isSolved = this.isProblemSolved(p.id);
      html += `
        <button class="workbench-item ${isActive ? 'active' : ''}" onclick="app.selectDsaProblem('${p.id}')">
          <div class="workbench-item-header">
            <span class="workbench-item-tag">${p.category}</span>
            <span style="font-size:0.75rem; color:${isSolved ? 'var(--accent-green)' : 'var(--text-subtle)'}; font-weight:${isSolved ? '700' : '400'};">${isSolved ? '✓ Solved' : p.difficulty}</span>
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

    const isSolved = this.isProblemSolved(p.id);

    workspace.innerHTML = `
      <div class="problem-header">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px; flex-wrap:wrap; gap:8px;">
          <span style="font-size:0.75rem; font-weight:700; color:var(--accent-blue); text-transform:uppercase;">${p.category} • ${p.difficulty}</span>
          <span style="font-size:0.75rem; color:var(--text-subtle); font-family:var(--font-mono);">Time: ${p.timeComplexity} | Space: ${p.spaceComplexity}</span>
        </div>
        <h2 style="font-size:1.3rem; font-weight:700; color:var(--text-main); margin-bottom:10px;">${p.title}</h2>

        <!-- Primary Action Bar linking directly to official LeetCode -->
        <div style="display:flex; gap:10px; align-items:center; flex-wrap:wrap; margin-bottom:14px;">
          <a href="${p.leetcodeUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="display:inline-flex; align-items:center; gap:6px; font-weight:600;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            <span>Solve on LeetCode.com ↗</span>
          </a>
          <button class="btn btn-outline" onclick="app.toggleProblemSolved('${p.id}')">
            ${isSolved ? '✓ Marked as Solved' : '○ Mark as Solved'}
          </button>
          <button class="btn btn-outline" onclick="app.copyProblemSolution('${p.id}')">
            📋 Copy Python Solution
          </button>
        </div>
      </div>

      <div class="problem-statement">
        <strong>Problem Statement:</strong>
        <p style="margin-top:4px; line-height:1.5;">${p.problemStatement}</p>
        <div style="margin-top:8px; font-size:0.8rem; color:var(--text-muted); background:var(--bg-surface-elevated); padding:8px 12px; border-radius:var(--radius-sm); border-left:3px solid var(--accent-blue);">
          <strong>Google DE Relevance:</strong> ${p.deRelevance}
        </div>
      </div>

      <div style="margin-top:14px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
          <span style="font-weight:600; font-size:0.85rem; color:var(--text-main);">Optimal Google-Standard Python 3 Solution:</span>
          <span style="font-size:0.75rem; color:var(--accent-green); font-weight:600;">O(N) Optimal & Scalable</span>
        </div>
        <pre style="background:var(--bg-surface-elevated); border:1px solid var(--border-subtle); border-radius:var(--radius-sm); padding:14px; font-family:var(--font-mono); font-size:0.82rem; color:var(--text-main); overflow-x:auto; line-height:1.5;"><code>${p.optimalSolution}</code></pre>
      </div>

      <div style="background:var(--bg-surface-elevated); padding:12px 14px; border-radius:var(--radius-sm); font-size:0.82rem; border-left:3px solid var(--accent-yellow); margin-top:12px;">
        <strong style="color:var(--accent-yellow);">Google Interviewer Traps & Follow-Up Questions:</strong>
        <p style="margin-top:4px; line-height:1.5;">${p.interviewerTips}</p>
      </div>
    `;
  }

  // --- SQL Workbench ---
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
        <div style="margin-top:8px; font-size:0.8rem; color:var(--text-muted);">
          <strong>Sample Schema:</strong> <code>${s.sampleSchema}</code>
        </div>
      </div>

      <div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
          <span style="font-weight:600; font-size:0.85rem;">Production Google SQL Solution:</span>
          <button class="btn btn-sm btn-outline" onclick="navigator.clipboard.writeText(document.getElementById('sqlCodeArea').value)">Copy Query</button>
        </div>
        <textarea class="code-editor-area" id="sqlCodeArea" readonly style="height:240px;">${s.solutionQuery}</textarea>
      </div>

      <div style="background:var(--bg-surface-elevated); padding:10px 14px; border-radius:var(--radius-sm); font-size:0.82rem; border-left:3px solid var(--accent-blue);">
        <strong>Architecture & Window Mechanics:</strong> ${s.explanation}
      </div>
    `;
  }

  // --- 🗓️ Full 90-Day Curriculum Matrix Table ---
  filterCurriculumPhase(phase) {
    this.state.curriculumPhaseFilter = phase;
    document.querySelectorAll("#btnPhaseAll, #btnPhase1, #btnPhase2, #btnPhase3, #btnPhase4").forEach(btn => {
      btn.classList.remove("active");
    });
    if (phase === 'all') {
      const btn = document.getElementById("btnPhaseAll");
      if (btn) btn.classList.add("active");
    } else {
      const btn = document.getElementById(`btnPhase${phase}`);
      if (btn) btn.classList.add("active");
    }
    this.renderCurriculumTable();
  }

  filterCurriculumTable() {
    const input = document.getElementById("curriculumSearchInput");
    if (input) {
      this.state.curriculumSearchQuery = input.value.toLowerCase().trim();
      this.renderCurriculumTable();
    }
  }

  jumpToDayFromCurriculum(dayNum) {
    this.changeSelectedDay(dayNum);
    this.openDojoForCurrentDay();
  }

  renderCurriculumTable() {
    const tbody = document.getElementById("curriculumTableBody");
    if (!tbody || !PREP_DATA.schedule) return;

    const phase = this.state.curriculumPhaseFilter;
    const query = this.state.curriculumSearchQuery;

    let list = PREP_DATA.schedule;
    if (phase !== "all") {
      list = list.filter(item => item.phase === parseInt(phase));
    }
    if (query) {
      list = list.filter(item => {
        return item.dsaProblem.title.toLowerCase().includes(query) ||
               item.dsaProblem.category.toLowerCase().includes(query) ||
               item.sqlChallenge.title.toLowerCase().includes(query) ||
               item.techTopic.toLowerCase().includes(query) ||
               item.defenseTopic.toLowerCase().includes(query) ||
               String(item.day).includes(query);
      });
    }

    let html = "";
    list.forEach(item => {
      const isCurrentDay = item.day === this.state.selectedDay;
      const dayPillars = this.loadDayPillarsState(item.day);
      const isDone = Object.values(dayPillars).filter(Boolean).length === 4;

      html += `
        <tr class="${isCurrentDay ? 'active-day-row' : ''}">
          <td style="font-weight:700; color:var(--text-main);">Day ${item.day}</td>
          <td>
            <span class="phase-pill-badge" style="font-size:0.7rem; padding:2px 6px;">P${item.phase} (W${item.week})</span>
          </td>
          <td>
            <strong>${item.dsaProblem.title}</strong>
            <div style="font-size:0.74rem; color:var(--text-subtle);">${item.dsaProblem.category} • ${item.dsaProblem.difficulty}</div>
          </td>
          <td>
            <div style="font-weight:600;">${item.sqlChallenge.title}</div>
          </td>
          <td>
            <div style="font-size:0.8rem; color:var(--text-muted);">${item.techTopic}</div>
          </td>
          <td>
            <div style="display:flex; gap:6px;">
              <a href="${item.leetcodeUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">
                ↗ LeetCode
              </a>
              <button class="btn btn-sm btn-outline" onclick="app.jumpToDayFromCurriculum(${item.day})">
                Study →
              </button>
            </div>
          </td>
        </tr>
      `;
    });

    if (list.length === 0) {
      html = `<tr><td colspan="6" style="text-align:center; padding:20px; color:var(--text-muted);">No matching days found.</td></tr>`;
    }

    tbody.innerHTML = html;
  }

  // --- 🛡️ Resume & Project Defense ---
  renderDefense() {
    const listPanel = document.getElementById("defenseQuestionsList");
    if (!listPanel || !PREP_DATA.resumeDefenseSuite) return;

    let html = "";
    PREP_DATA.resumeDefenseSuite.forEach((q, idx) => {
      html += `
        <div class="card defense-card">
          <div class="defense-badge">${q.project} • INTERROGATION ${idx + 1}</div>
          <h3 class="defense-q">${q.interviewerTrap}</h3>
          
          <div class="defense-answer-box">
            <div style="font-weight:700; color:var(--accent-green); margin-bottom:4px;">Senior L5 Defense Script:</div>
            <p style="font-size:0.85rem; line-height:1.5;">${q.bulletproofDefense}</p>
          </div>

          <div class="defense-meta-row">
            <span><strong>Resume Bullet:</strong> "${q.resumeBulletTarget}"</span>
            <span class="defense-tag">${q.architectureKeywords.join(", ")}</span>
          </div>
        </div>
      `;
    });
    listPanel.innerHTML = html;
  }

  copyAtsResumeText() {
    const paper = document.getElementById("atsResumePaper");
    if (!paper) return;
    navigator.clipboard.writeText(paper.innerText).then(() => {
      alert("Google 1-Page ATS Resume copied to clipboard!");
    }).catch(() => {
      prompt("Copy resume text:", paper.innerText);
    });
  }

  // --- 🎯 Google India Tracks & Bar ---
  renderRoles() {
    const container = document.getElementById("rolesListContainer");
    if (!container || !PREP_DATA.targetRoles) return;

    let html = "";
    PREP_DATA.targetRoles.forEach(r => {
      html += `
        <div class="card role-card">
          <div class="role-header">
            <div>
              <span class="role-org">${r.organization}</span>
              <h2 class="role-title">${r.title}</h2>
            </div>
            <div class="role-comp">${r.compensationRange}</div>
          </div>

          <div class="role-cheatcode">
            <strong>Google Hiring Context:</strong> ${r.cheatCode}
          </div>

          <div class="role-rounds">
            <h4 style="font-size:0.8rem; text-transform:uppercase; color:var(--text-subtle); margin-bottom:8px;">Interview Loop Structure:</h4>
            <div class="rounds-list">
              ${r.interviewRounds.map(rnd => `
                <div class="round-item">
                  <strong>${rnd.name}</strong>: ${rnd.desc}
                </div>
              `).join("")}
            </div>
          </div>

          <div style="margin-top:14px;">
            <a href="${r.googleCareersQuery}" target="_blank" class="btn btn-sm btn-outline">
              Search Open Positions on Google Careers ↗
            </a>
          </div>
        </div>
      `;
    });
    container.innerHTML = html;
  }

  // --- Master Render ---
  renderAll() {
    this.renderAccountability();
    this.renderMasterclass();
    this.renderDsaList();
    this.selectDsaProblem(this.state.activeDsaId);
    this.renderSqlList();
    this.selectSqlProblem(this.state.activeSqlId);
    this.renderDefense();
    this.renderRoles();
  }
}

// Global App Instance
let app;
document.addEventListener("DOMContentLoaded", () => {
  app = new PrepPortalApp();
});
