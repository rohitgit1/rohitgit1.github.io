// Google L5 Career & Prep Portal - Complete Application Logic

class PrepPortalApp {
  constructor() {
    this.state = {
      theme: "dark",
      currentDay: 1,
      completedDays: [],
      solvedDsa: [],
      solvedSql: [],
      solvedSys: [],
      leadershipNotes: {},
      codeNotes: {},
      activeDsaCategory: "all",
      activePhase: "all",
      currentFlashcardIndex: 0,
      activeReadingId: "read-1",
      activeQuestionRole: "all",
      questionSearchTerm: "",
      activeMockId: "mock-1",
      userSkills: {
        dsa: 4,
        sql: 8,
        systemDesign: 6,
        cloud: 7,
        businessMetrics: 7,
        clientFacing: 6
      }
    };

    // Pomodoro Timer State
    this.timerSeconds = 25 * 60;
    this.timerRunning = false;
    this.timerInterval = null;

    // Mock Interview Timer State
    this.mockSeconds = 45 * 60;
    this.mockRunning = false;
    this.mockInterval = null;

    // In-browser WebAssembly Pyodide engine
    this.pyodide = null;
    this.pyodideLoading = false;

    this.init();
  }

  init() {
    this.loadState();
    this.applyTheme(this.state.theme);
    this.setupEventListeners();
    this.renderAll();
    this.initPyodide();
  }

  // Theme Management (☀️ Light / 🌙 Dark / 🕶️ Office Stealth)
  setTheme(themeName) {
    this.state.theme = themeName;
    this.applyTheme(themeName);
    this.saveState();
  }

  applyTheme(themeName) {
    document.body.classList.remove("theme-dark", "theme-light", "theme-stealth");
    document.body.classList.add(`theme-${themeName}`);

    // Update buttons
    const btnDark = document.getElementById("btnThemeDark");
    const btnLight = document.getElementById("btnThemeLight");
    const btnStealth = document.getElementById("btnThemeStealth");

    if (btnDark) btnDark.classList.toggle("active", themeName === "dark");
    if (btnLight) btnLight.classList.toggle("active", themeName === "light");
    if (btnStealth) btnStealth.classList.toggle("active", themeName === "stealth");
  }

  // State Persistence
  loadState() {
    const saved = localStorage.getItem("google_l5_prep_state");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        this.state = { ...this.state, ...parsed };
      } catch (e) {
        console.error("Failed to parse saved state", e);
      }
    }
  }

  saveState() {
    localStorage.setItem("google_l5_prep_state", JSON.stringify(this.state));
    this.updateStats();
  }

  // Event Listeners
  setupEventListeners() {
    // Navigation Tabs
    document.querySelectorAll(".nav-item").forEach(btn => {
      btn.addEventListener("click", () => {
        this.switchTab(btn.dataset.tab);
      });
    });

    // Pomodoro Timer Controls
    const btnToggleTimer = document.getElementById("btnToggleTimer");
    const btnResetTimer = document.getElementById("btnResetTimer");
    if (btnToggleTimer) {
      btnToggleTimer.addEventListener("click", () => this.togglePomodoro());
    }
    if (btnResetTimer) {
      btnResetTimer.addEventListener("click", () => this.resetPomodoro());
    }

    // Mock Timer Controls
    const btnStartMock = document.getElementById("btnStartMock");
    const btnPauseMock = document.getElementById("btnPauseMock");
    const btnResetMock = document.getElementById("btnResetMock");
    if (btnStartMock) btnStartMock.addEventListener("click", () => this.startMockTimer());
    if (btnPauseMock) btnPauseMock.addEventListener("click", () => this.pauseMockTimer());
    if (btnResetMock) btnResetMock.addEventListener("click", () => this.resetMockTimer());

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

    // Flashcard Controls
    const fcBox = document.getElementById("flashcardBox");
    if (fcBox) {
      fcBox.addEventListener("click", () => fcBox.classList.toggle("flipped"));
    }
    const fcNext = document.getElementById("btnFcNext");
    const fcPrev = document.getElementById("btnFcPrev");
    if (fcNext) fcNext.addEventListener("click", () => this.nextFlashcard());
    if (fcPrev) fcPrev.addEventListener("click", () => this.prevFlashcard());

    // Phase Filters
    document.querySelectorAll("#phaseFilters .filter-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        document.querySelectorAll("#phaseFilters .filter-chip").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        this.state.activePhase = chip.dataset.phase;
        this.renderSchedule();
      });
    });

    // Mark Day Complete
    const btnMarkDay = document.getElementById("btnMarkDayComplete");
    if (btnMarkDay) {
      btnMarkDay.addEventListener("click", () => {
        if (!this.state.completedDays.includes(this.state.currentDay)) {
          this.state.completedDays.push(this.state.currentDay);
          if (this.state.currentDay < 90) {
            this.state.currentDay += 1;
          }
          this.saveState();
          this.renderAll();
        }
      });
    }
  }

  switchTab(tabId) {
    document.querySelectorAll(".nav-item").forEach(item => {
      item.classList.toggle("active", item.dataset.tab === tabId);
    });
    document.querySelectorAll(".content-view").forEach(view => {
      view.classList.toggle("active", view.id === `view-${tabId}`);
    });
  }

  // Pomodoro Focus Timer
  togglePomodoro() {
    if (this.timerRunning) {
      clearInterval(this.timerInterval);
      this.timerRunning = false;
      document.getElementById("btnToggleTimer").textContent = "▶";
    } else {
      this.timerRunning = true;
      document.getElementById("btnToggleTimer").textContent = "⏸";
      this.timerInterval = setInterval(() => {
        if (this.timerSeconds > 0) {
          this.timerSeconds--;
          this.updatePomodoroDisplay();
        } else {
          clearInterval(this.timerInterval);
          this.timerRunning = false;
          document.getElementById("btnToggleTimer").textContent = "▶";
          alert("Focus study session complete! Take a 5-minute break.");
        }
      }, 1000);
    }
  }

  resetPomodoro() {
    clearInterval(this.timerInterval);
    this.timerRunning = false;
    this.timerSeconds = 25 * 60;
    document.getElementById("btnToggleTimer").textContent = "▶";
    this.updatePomodoroDisplay();
  }

  updatePomodoroDisplay() {
    const mins = Math.floor(this.timerSeconds / 60);
    const secs = this.timerSeconds % 60;
    const str = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    const el = document.getElementById("pomodoroDisplay");
    if (el) el.textContent = str;
  }

  // Mock Interview Timer
  startMockTimer() {
    if (this.mockRunning) return;
    this.mockRunning = true;
    this.mockInterval = setInterval(() => {
      if (this.mockSeconds > 0) {
        this.mockSeconds--;
        this.updateMockTimerDisplay();
      } else {
        clearInterval(this.mockInterval);
        this.mockRunning = false;
        alert("45-Minute Mock Round Time Expired! Great job simulating under pressure.");
      }
    }, 1000);
  }

  pauseMockTimer() {
    clearInterval(this.mockInterval);
    this.mockRunning = false;
  }

  resetMockTimer() {
    clearInterval(this.mockInterval);
    this.mockRunning = false;
    this.mockSeconds = 45 * 60;
    this.updateMockTimerDisplay();
  }

  updateMockTimerDisplay() {
    const mins = Math.floor(this.mockSeconds / 60);
    const secs = this.mockSeconds % 60;
    const str = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    const el = document.getElementById("mockCountdownDisplay");
    if (el) el.textContent = str;

    // Check milestones
    const elapsedMinutes = 45 - mins;
    document.querySelectorAll(".milestone-row").forEach(row => {
      const targetMin = parseInt(row.dataset.minute);
      if (elapsedMinutes >= targetMin) {
        row.classList.add("reached");
      } else {
        row.classList.remove("reached");
      }
    });
  }

  speakMockPrompt() {
    if (!('speechSynthesis' in window)) {
      alert("Text-to-speech is not supported in this browser.");
      return;
    }
    window.speechSynthesis.cancel();
    const promptText = document.getElementById("mockPromptDisplay")?.textContent || "";
    const titleText = document.getElementById("mockTitleDisplay")?.textContent || "";
    const utterance = new SpeechSynthesisUtterance(`Google Mock Interview: ${titleText}. Here is your prompt: ${promptText}. Your 45 minutes start now.`);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
    this.startMockTimer();
  }

  // Render All Views
  renderAll() {
    this.renderHeader();
    this.renderCareerRadar();
    this.renderPrimer();
    this.renderOutreach();
    this.renderGrillingSimulator();
    this.renderResumeOptimizer();
    this.renderMockSimulator();
    this.renderDashboard();
    this.renderSchedule();
    this.renderDsaDojo();
    this.renderSqlStudio();
    this.renderSystemDesign();
    this.renderLeadership();
    this.renderReadingVault();
    this.renderQuestions();
    this.renderFlashcard();
    this.updateStats();
  }

  renderHeader() {
    const dayDisplay = document.getElementById("dayNumberDisplay");
    if (dayDisplay) dayDisplay.textContent = this.state.currentDay;
    this.updatePomodoroDisplay();
  }

  updateStats() {
    const dsaCount = this.state.solvedDsa.length;
    const sqlCount = this.state.solvedSql.length;
    const sysCount = this.state.solvedSys.length;
    const glCount = Object.keys(this.state.leadershipNotes).filter(k => this.state.leadershipNotes[k].action).length;

    // Stat values
    if (document.getElementById("statDsaSolved")) document.getElementById("statDsaSolved").textContent = dsaCount;
    if (document.getElementById("statSqlSolved")) document.getElementById("statSqlSolved").textContent = sqlCount;
    if (document.getElementById("statSysSolved")) document.getElementById("statSysSolved").textContent = sysCount;
    if (document.getElementById("statGlSolved")) document.getElementById("statGlSolved").textContent = glCount;

    // Stat bars
    if (document.getElementById("statDsaBar")) document.getElementById("statDsaBar").style.width = `${Math.min(100, (dsaCount / 75) * 100)}%`;
    if (document.getElementById("statSqlBar")) document.getElementById("statSqlBar").style.width = `${Math.min(100, (sqlCount / 20) * 100)}%`;
    if (document.getElementById("statSysBar")) document.getElementById("statSysBar").style.width = `${Math.min(100, (sysCount / 10) * 100)}%`;
    if (document.getElementById("statGlBar")) document.getElementById("statGlBar").style.width = `${Math.min(100, (glCount / 8) * 100)}%`;

    // Overall readiness
    const overallWeight = (
      (dsaCount / 75) * 30 +
      (sqlCount / 20) * 25 +
      (sysCount / 10) * 30 +
      (glCount / 8) * 15
    );
    const rounded = Math.round(overallWeight);
    if (document.getElementById("readinessPercent")) document.getElementById("readinessPercent").textContent = `${rounded}%`;
    if (document.getElementById("masterProgressBar")) document.getElementById("masterProgressBar").style.width = `${Math.max(4, rounded)}%`;
    const dsaCountBadge = document.getElementById("dsaCountBadge");
    if (dsaCountBadge) dsaCountBadge.textContent = `${dsaCount}/75`;
  }

  // 0. SMART CAREER RADAR
  renderCareerRadar() {
    const s = this.state.userSkills;
    if (document.getElementById("slideDsa")) document.getElementById("slideDsa").value = s.dsa;
    if (document.getElementById("slideSql")) document.getElementById("slideSql").value = s.sql;
    if (document.getElementById("slideSys")) document.getElementById("slideSys").value = s.systemDesign;
    if (document.getElementById("slideCloud")) document.getElementById("slideCloud").value = s.cloud;
    if (document.getElementById("slideBiz")) document.getElementById("slideBiz").value = s.businessMetrics;
    if (document.getElementById("slideClient")) document.getElementById("slideClient").value = s.clientFacing;

    this.recalcRoleOdds();
  }

  recalcRoleOdds() {
    const dsa = parseInt(document.getElementById("slideDsa").value);
    const sql = parseInt(document.getElementById("slideSql").value);
    const sys = parseInt(document.getElementById("slideSys").value);
    const cloud = parseInt(document.getElementById("slideCloud").value);
    const biz = parseInt(document.getElementById("slideBiz").value);
    const client = parseInt(document.getElementById("slideClient").value);

    // Update labels
    document.getElementById("valDsa").textContent = `${dsa} / 10`;
    document.getElementById("valSql").textContent = `${sql} / 10`;
    document.getElementById("valSys").textContent = `${sys} / 10`;
    document.getElementById("valCloud").textContent = `${cloud} / 10`;
    document.getElementById("valBiz").textContent = `${biz} / 10`;
    document.getElementById("valClient").textContent = `${client} / 10`;

    this.state.userSkills = { dsa, sql, systemDesign: sys, cloud, businessMetrics: biz, clientFacing: client };
    this.saveState();

    const scoredRoles = PREP_DATA.targetRoles.map(role => {
      const req = role.strengthsNeeded;
      let penalty = 0;
      let totalReq = 0;
      for (const key in req) {
        totalReq += req[key];
        const diff = req[key] - this.state.userSkills[key];
        if (diff > 0) {
          penalty += diff * 1.5;
        }
      }
      const rawFit = Math.max(20, Math.min(95, Math.round(100 - (penalty / totalReq) * 80)));
      return { ...role, matchScore: rawFit };
    });

    scoredRoles.sort((a, b) => b.matchScore - a.matchScore);
    const topRole = scoredRoles[0];
    document.getElementById("topRecRoleName").textContent = `${topRole.title} (${topRole.matchScore}% Match)`;

    const container = document.getElementById("rolesGrid");
    container.innerHTML = scoredRoles.map((role, idx) => {
      const isTop = idx === 0;
      const badgeClass = role.matchScore >= 80 ? "odds-high" : (role.matchScore >= 60 ? "odds-moderate" : "odds-tough");

      return `
        <div class="role-card ${isTop ? 'highlighted-trojan' : ''}">
          <div>
            <div class="role-top">
              <div>
                <h3 class="role-title">${role.title}</h3>
                <div class="role-org">${role.organization}</div>
              </div>
              <span class="role-odds-badge ${badgeClass}">${role.matchScore}% Match Odds</span>
            </div>

            <div class="role-comp" style="margin-top:10px;">
              <strong>Google L5 Compensation:</strong> ${role.compensationRange}
            </div>

            <div class="cheat-code-box" style="margin-top:12px;">
              <strong>⚡ Google Insider Strategy / Cheat Code:</strong>
              ${role.cheatCode}
            </div>

            <div style="margin-top:14px;">
              <span style="font-size:0.75rem; font-weight:700; text-transform:uppercase; color:var(--text-subtle);">Interview Rounds Structure:</span>
              <div class="rounds-list" style="margin-top:6px;">
                ${role.interviewRounds.map(r => `
                  <div class="round-item">
                    <strong>${r.name}:</strong> <span>${r.desc}</span>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>

          <div>
            <a href="${role.googleCareersQuery}" target="_blank" rel="noopener noreferrer" class="google-jobs-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              Search Open ${role.title.split('(')[0]} Jobs at Google
            </a>
          </div>
        </div>
      `;
    }).join("");
  }

  // 0.5. BEGINNER-TO-GOOGLE ELI5 FIRST PRINCIPLES PRIMER
  renderPrimer() {
    const container = document.getElementById("primerGrid");
    if (!container || !PREP_DATA.beginnerPrimer) return;

    container.innerHTML = PREP_DATA.beginnerPrimer.map((item, idx) => `
      <div class="primer-card">
        <div class="primer-header">
          <div style="display:flex; gap:8px; align-items:center;">
            <span class="badge badge-accent">${item.category}</span>
            <span class="badge" style="background:#0284c7; color:#fff;">${item.badge}</span>
          </div>
          <span style="font-size:0.8rem; color:var(--text-subtle); font-family:var(--font-mono);">Lesson #${idx + 1}</span>
        </div>

        <h2 style="font-family:var(--font-display); font-size:1.35rem; color:var(--text-main); margin-top:8px;">${item.topic}</h2>

        <div class="primer-analogy-box">
          <div style="font-weight:700; text-transform:uppercase; font-size:0.75rem; color:#0284c7; letter-spacing:0.05em; margin-bottom:4px;">💡 Everyday Analogy:</div>
          <p style="color:var(--text-main); font-size:0.92rem; line-height:1.55;">${item.analogy}</p>
        </div>

        <div style="margin-top:14px;">
          <h3 style="font-size:0.95rem; font-weight:700; color:var(--text-main); margin-bottom:8px;">${item.coreConcept}</h3>
          <div class="primer-breakdown-list">
            ${item.breakdown.map(pt => `
              <div class="primer-point-item">
                <span class="primer-bullet-dot"></span>
                <span style="line-height:1.55;">${pt}</span>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="primer-takeaway-banner">
          <strong>⚡ Actionable Google Rule:</strong>
          <span>${item.actionableTakeaway}</span>
        </div>
      </div>
    `).join("");
  }

  // 1. RECRUITER & REFERRAL OUTREACH ENGINE
  renderOutreach() {
    const container = document.getElementById("outreachGrid");
    if (!container || !PREP_DATA.outreachTemplates) return;

    container.innerHTML = PREP_DATA.outreachTemplates.map(tpl => `
      <div class="outreach-card">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:flex-start;">
            <span class="badge badge-accent">${tpl.target}</span>
            <span style="font-size:0.75rem; color:var(--g-green); font-weight:600;">High Conversion</span>
          </div>
          <h3 style="font-family:var(--font-display); font-size:1.05rem; margin-top:8px; color:var(--text-main);">${tpl.subject}</h3>
        </div>

        <div class="outreach-body" id="body-${tpl.id}">${tpl.body}</div>

        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:10px;">
          <span style="font-size:0.75rem; color:var(--text-subtle);">Tip: Personalize [brackets] with your exact stats</span>
          <button class="btn btn-sm btn-primary" onclick="app.copyOutreach('${tpl.id}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy Message
          </button>
        </div>
      </div>
    `).join("");
  }

  copyOutreach(id) {
    const tpl = PREP_DATA.outreachTemplates.find(t => t.id === id);
    if (tpl) {
      navigator.clipboard.writeText(tpl.body);
      alert("Outreach template copied to clipboard! Customize the bracketed details before sending on LinkedIn.");
    }
  }

  // 2. L5 GRILLING SIMULATOR
  renderGrillingSimulator() {
    const container = document.getElementById("grillGrid");
    if (!container || !PREP_DATA.grillingScenarios) return;

    container.innerHTML = PREP_DATA.grillingScenarios.map((s, idx) => `
      <div class="grill-card" id="grill-card-${s.id}">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span class="badge" style="background:var(--g-red); color:#ffffff; font-weight:700;">Scenario #${idx + 1}: Architectural Edge Case</span>
          <span style="font-size:0.8rem; color:var(--text-subtle); font-family:var(--font-mono);">L5 System Design Bar</span>
        </div>

        <div class="grill-question-banner">
          <strong>Interviewer Question:</strong> ${s.interviewerQuestion}
        </div>

        <div class="grill-comparison-grid">
          <div class="trap-box">
            <strong>❌ Junior / Mid-Level Trap Response:</strong>
            <p style="margin-top:6px; font-style:italic; color:var(--text-main);">"${s.juniorTrapResponse}"</p>
            <div style="margin-top:10px; padding-top:8px; border-top:1px solid rgba(234,67,53,0.2); color:var(--g-red); font-size:0.8rem;">
              <strong>Why This Fails at Google:</strong>
              ${s.whyJuniorFails}
            </div>
          </div>

          <div class="staff-box">
            <strong>✓ Google Senior (L5) / Staff Architect Response:</strong>
            <p style="margin-top:6px; line-height:1.55; color:var(--text-main); font-size:0.88rem;">${s.seniorL5Response}</p>
          </div>
        </div>
      </div>
    `).join("");
  }

  // 3. GOOGLE RESUME BULLETS OPTIMIZER
  renderResumeOptimizer() {
    const list = document.getElementById("resumeTemplatesList");
    if (!list) return;

    list.innerHTML = PREP_DATA.resumeTemplates.map(tpl => `
      <div style="background:var(--bg-surface-elevated); padding:12px; border-radius:6px; border:1px solid var(--border-subtle);">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span class="badge badge-accent">${tpl.category}</span>
          <span style="font-size:0.75rem; color:var(--text-subtle);">${tpl.role}</span>
        </div>
        <p style="font-size:0.85rem; line-height:1.5; color:var(--text-main); margin-top:8px;">"${tpl.exampleBullet}"</p>
        <button class="btn btn-sm btn-outline" style="margin-top:8px;" onclick="app.copyTemplateBullet('${tpl.id}')">
          Copy Template
        </button>
      </div>
    `).join("");
  }

  generateCustomBullet() {
    const x = document.getElementById("resumeInputX")?.value.trim() || "[Accomplished X]";
    const y = document.getElementById("resumeInputY")?.value.trim() || "[as measured by Y]";
    const z = document.getElementById("resumeInputZ")?.value.trim() || "[by doing Z]";

    const formatted = `${x}, as measured by ${y}, by ${z}.`;
    const resBox = document.getElementById("generatedBulletResult");
    if (resBox) resBox.textContent = formatted;
  }

  copyCustomBullet() {
    const resBox = document.getElementById("generatedBulletResult");
    if (resBox && resBox.textContent) {
      navigator.clipboard.writeText(resBox.textContent);
      alert("Google-formatted bullet copied to clipboard!");
    }
  }

  copyTemplateBullet(id) {
    const tpl = PREP_DATA.resumeTemplates.find(t => t.id === id);
    if (tpl) {
      navigator.clipboard.writeText(tpl.exampleBullet);
      alert("Template copied to clipboard! Paste it into your resume.");
    }
  }

  // 2. MOCK INTERVIEW SIMULATOR
  renderMockSimulator() {
    const grid = document.getElementById("mockSelectorGrid");
    if (!grid) return;

    grid.innerHTML = PREP_DATA.mockSimulations.map(sim => `
      <div class="mock-card ${this.state.activeMockId === sim.id ? 'active' : ''}" onclick="app.selectMockScenario('${sim.id}')">
        <span class="badge badge-accent">${sim.roundType}</span>
        <h3 style="font-family:var(--font-display); font-size:1.05rem; margin-top:6px;">${sim.title}</h3>
        <p style="font-size:0.8rem; color:var(--text-muted); margin-top:4px;">Duration: ${sim.durationMinutes} Minutes &bull; 5 Live Milestones</p>
      </div>
    `).join("");

    this.selectMockScenario(this.state.activeMockId);
  }

  selectMockScenario(id) {
    this.state.activeMockId = id;
    const sim = PREP_DATA.mockSimulations.find(s => s.id === id) || PREP_DATA.mockSimulations[0];

    document.querySelectorAll(".mock-card").forEach(c => c.classList.remove("active"));
    const cards = Array.from(document.querySelectorAll(".mock-card"));
    const active = cards.find(c => c.innerHTML.includes(sim.title));
    if (active) active.classList.add("active");

    document.getElementById("mockRoundBadge").textContent = sim.roundType;
    document.getElementById("mockTitleDisplay").textContent = sim.title;
    document.getElementById("mockPromptDisplay").textContent = sim.prompt;

    const milestonesContainer = document.getElementById("mockMilestonesList");
    milestonesContainer.innerHTML = sim.milestones.map(m => `
      <div class="milestone-row" data-minute="${m.minute}">
        <span style="font-family:var(--font-mono); font-weight:700; color:var(--g-blue); white-space:nowrap;">Min ${m.minute}:</span>
        <span>${m.goal}</span>
      </div>
    `).join("");

    this.resetMockTimer();
  }

  // 3. READING VAULT
  renderReadingVault() {
    const navContainer = document.getElementById("vaultNav");
    navContainer.innerHTML = PREP_DATA.readingVault.map(paper => `
      <div class="vault-nav-item ${this.state.activeReadingId === paper.id ? 'active' : ''}" onclick="app.selectReadingPaper('${paper.id}')">
        <div class="vault-nav-title">${paper.title}</div>
        <div class="vault-nav-meta">${paper.category} &bull; ${paper.readTime}</div>
      </div>
    `).join("");

    this.selectReadingPaper(this.state.activeReadingId);
  }

  selectReadingPaper(id) {
    this.state.activeReadingId = id;
    document.querySelectorAll(".vault-nav-item").forEach(item => item.classList.remove("active"));
    const activeNav = Array.from(document.querySelectorAll(".vault-nav-item")).find(item => item.innerHTML.includes(id));
    if (activeNav) activeNav.classList.add("active");

    const paper = PREP_DATA.readingVault.find(p => p.id === id) || PREP_DATA.readingVault[0];
    const contentContainer = document.getElementById("vaultContent");

    contentContainer.innerHTML = `
      <div>
        <h2 class="paper-title">${paper.title}</h2>
        <div class="paper-meta">
          <span>${paper.category}</span> &bull; <span>${paper.readTime}</span>
        </div>
      </div>

      <div style="font-size:0.95rem; line-height:1.6; color:var(--text-main); background:var(--bg-surface-elevated); padding:14px; border-radius:6px; border:1px solid var(--border-subtle);">
        <strong>Executive Summary:</strong> ${paper.summary}
      </div>

      <div>
        <h3 style="font-family:var(--font-display); font-size:1.15rem; margin-bottom:10px;">Core Architectural Takeaways:</h3>
        <ul class="takeaways-list">
          ${paper.keyTakeaways.map(t => `<li>${t}</li>`).join("")}
        </ul>
      </div>

      <div class="l5-context-box">
        <strong>🎯 How to Reference This in a Google L5 System Design Round:</strong>
        ${paper.l5InterviewContext}
      </div>
    `;
  }

  // 4. QUESTIONS BANK
  renderQuestions() {
    const roles = ["all", "Senior Data Engineer (L5)", "Business Intelligence Engineer (L5)", "Customer Solutions Engineer (L5)"];
    const filtersContainer = document.getElementById("questionRoleFilters");

    filtersContainer.innerHTML = roles.map(r => `
      <button class="filter-chip ${this.state.activeQuestionRole === r ? 'active' : ''}" onclick="app.setQuestionRoleFilter('${r}')">
        ${r === 'all' ? 'All Roles' : r.replace(' (L5)', '')}
      </button>
    `).join("");

    this.filterQuestions();
  }

  setQuestionRoleFilter(role) {
    this.state.activeQuestionRole = role;
    this.renderQuestions();
  }

  filterQuestions() {
    const term = (document.getElementById("questionSearchInput")?.value || "").toLowerCase();
    const roleFilter = this.state.activeQuestionRole;
    const grid = document.getElementById("questionsGrid");

    const filtered = PREP_DATA.recentGoogleQuestions.filter(q => {
      const matchesRole = roleFilter === "all" || q.role === roleFilter;
      const matchesTerm = !term || q.question.toLowerCase().includes(term) || q.hints.toLowerCase().includes(term) || q.round.toLowerCase().includes(term);
      return matchesRole && matchesTerm;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `<div class="empty-state">No questions found matching your search.</div>`;
      return;
    }

    grid.innerHTML = filtered.map(q => `
      <div class="question-card">
        <div class="question-meta-row">
          <span class="badge badge-accent">${q.role}</span>
          <span>${q.round}</span>
        </div>
        <div style="font-size:0.75rem; color:var(--text-subtle);">📍 ${q.source}</div>
        <div class="question-body">"${q.question}"</div>
        <div class="question-hints-box">
          <strong>Key Architectural Solution Hint:</strong>
          ${q.hints}
        </div>
      </div>
    `).join("");
  }

  // Dashboard
  renderDashboard() {
    const currentScheduleItem = PREP_DATA.schedule.find(s => s.day === this.state.currentDay) || PREP_DATA.schedule[0];
    document.getElementById("todayMissionTitle").textContent = `Day ${currentScheduleItem.day}: ${currentScheduleItem.title}`;

    const taskContainer = document.getElementById("todayMissionTasks");
    taskContainer.innerHTML = `
      <div class="task-item">
        <input type="checkbox" class="task-checkbox" id="taskDsaCheck">
        <div class="task-content">
          <div class="task-title">Pillar 1: Python DSA Drill</div>
          <div class="task-desc">${currentScheduleItem.focus}</div>
        </div>
        <button class="btn btn-sm btn-outline" onclick="app.switchTab('dsa')">Open Dojo</button>
      </div>
      <div class="task-item">
        <input type="checkbox" class="task-checkbox" id="taskSqlCheck">
        <div class="task-content">
          <div class="task-title">Pillar 2: SQL & Modeling Drill</div>
          <div class="task-desc">${currentScheduleItem.sql}</div>
        </div>
        <button class="btn btn-sm btn-outline" onclick="app.switchTab('sql')">Open SQL</button>
      </div>
      <div class="task-item">
        <input type="checkbox" class="task-checkbox" id="taskSysCheck">
        <div class="task-content">
          <div class="task-title">Pillar 3: Distributed System Concept</div>
          <div class="task-desc">${currentScheduleItem.design}</div>
        </div>
        <button class="btn btn-sm btn-outline" onclick="app.switchTab('system-design')">Open Vault</button>
      </div>
    `;
  }

  // Schedule Timeline
  renderSchedule() {
    const container = document.getElementById("scheduleTimeline");
    const phase = this.state.activePhase;
    
    const filtered = PREP_DATA.schedule.filter(item => {
      if (phase === "all") return true;
      return item.phase.toString() === phase;
    });

    container.innerHTML = filtered.map(item => {
      const isDone = this.state.completedDays.includes(item.day);
      const isCurrent = item.day === this.state.currentDay;
      return `
        <div class="schedule-card ${isDone ? 'completed' : ''} ${isCurrent ? 'active' : ''}">
          <div class="day-tag">Day ${item.day}</div>
          <div>
            <div class="sched-title">${item.title}</div>
            <div class="text-muted" style="font-size:0.75rem;">Phase ${item.phase} &bull; Week ${item.week} &bull; Est. ${item.estMinutes} mins</div>
          </div>
          <div class="sched-col"><span>DSA Focus</span>${item.focus}</div>
          <div class="sched-col"><span>Architecture</span>${item.design}</div>
          <div>
            <input type="checkbox" class="task-checkbox" ${isDone ? 'checked' : ''} onchange="app.toggleDayCompleted(${item.day})">
          </div>
        </div>
      `;
    }).join("");
  }

  toggleDayCompleted(day) {
    if (this.state.completedDays.includes(day)) {
      this.state.completedDays = this.state.completedDays.filter(d => d !== day);
    } else {
      this.state.completedDays.push(day);
    }
    this.saveState();
    this.renderSchedule();
  }

  // DSA Dojo
  renderDsaDojo() {
    const listContainer = document.getElementById("dsaProblemList");
    const categories = ["all", ...new Set(PREP_DATA.dsaProblems.map(p => p.category))];
    
    const filtersContainer = document.getElementById("dsaCategoryFilters");
    filtersContainer.innerHTML = categories.map(cat => `
      <button class="filter-chip ${this.state.activeDsaCategory === cat ? 'active' : ''}" onclick="app.setDsaCategory('${cat}')">
        ${cat === 'all' ? 'All Patterns' : cat}
      </button>
    `).join("");

    const filtered = PREP_DATA.dsaProblems.filter(p => {
      if (this.state.activeDsaCategory === "all") return true;
      return p.category === this.state.activeDsaCategory;
    });

    listContainer.innerHTML = filtered.map(p => {
      const isSolved = this.state.solvedDsa.includes(p.id);
      return `
        <div class="item-card" onclick="app.selectDsaProblem('${p.id}')" id="card-${p.id}">
          <div class="item-top">
            <span class="item-title">${p.title}</span>
            <span class="diff-${p.difficulty.toLowerCase()}">${p.difficulty}</span>
          </div>
          <div class="item-meta">
            <span>${p.category}</span> &bull; 
            <span style="color: ${isSolved ? 'var(--g-green)' : 'var(--text-subtle)'};">
              ${isSolved ? '✓ Solved' : 'Todo'}
            </span>
          </div>
        </div>
      `;
    }).join("");

    if (filtered.length > 0 && !this.selectedDsaId) {
      this.selectDsaProblem(filtered[0].id);
    }
  }

  setDsaCategory(cat) {
    this.state.activeDsaCategory = cat;
    this.renderDsaDojo();
  }

  selectDsaProblem(id) {
    this.selectedDsaId = id;
    document.querySelectorAll(".dsa-list-panel .item-card").forEach(c => c.classList.remove("active"));
    const activeCard = document.getElementById(`card-${id}`);
    if (activeCard) activeCard.classList.add("active");

    const prob = PREP_DATA.dsaProblems.find(p => p.id === id);
    if (!prob) return;

    const isSolved = this.state.solvedDsa.includes(id);
    const userCode = this.state.codeNotes[id] || prob.pythonStarter;

    const workspace = document.getElementById("dsaWorkspace");
    workspace.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <div>
          <h2 style="font-family:var(--font-display); font-size:1.4rem;">${prob.title}</h2>
          <div style="font-size:0.85rem; color:var(--text-muted); margin-top:4px;">
            <span class="diff-${prob.difficulty.toLowerCase()}">${prob.difficulty}</span> &bull; ${prob.category}
          </div>
        </div>
        <button class="btn ${isSolved ? 'btn-outline' : 'btn-primary'}" onclick="app.toggleDsaSolved('${prob.id}')">
          ${isSolved ? '✓ Solved (Unmark)' : 'Mark as Mastered'}
        </button>
      </div>

      <div class="de-relevance-banner">
        <strong>🎯 Why Google Tests This for DE/Data Roles:</strong> ${prob.deRelevance}
      </div>

      <div style="font-size:0.9rem; line-height:1.6; color:var(--text-main);">
        ${prob.problemStatement}
      </div>

      <div class="code-container">
        <div class="code-header">
          <span>Python 3 Interactive Scratchpad</span>
          <div style="display:flex; gap:8px;">
            <button class="btn btn-sm btn-outline" onclick="app.resetDsaCode('${prob.id}')">Reset Starter</button>
            <button class="btn btn-sm" id="runBtn-${prob.id}" onclick="app.runDsaCode('${prob.id}')" style="background:#1e8e3e; border:1px solid #1e8e3e; color:#fff; font-weight:600;">
              ▶ Run Tests (Pyodide Wasm)
            </button>
          </div>
        </div>
        <textarea class="code-editor" id="dsaEditor" oninput="app.saveDsaCode('${prob.id}', this.value)">${userCode}</textarea>
      </div>

      <div class="test-terminal" id="terminal-${prob.id}" style="display:none; margin-top:12px;"></div>

      <div style="display:flex; gap:10px; margin-top:12px;">
        <button class="btn btn-outline" onclick="document.getElementById('solBox-${prob.id}').style.display = document.getElementById('solBox-${prob.id}').style.display === 'none' ? 'block' : 'none'">
          Toggle Optimal Solution & Interviewer Tips
        </button>
      </div>

      <div class="solution-box" id="solBox-${prob.id}" style="display:none;">
        <div style="margin-bottom:8px;">
          <span class="complexity-pill">Time: ${prob.timeComplexity}</span>
          <span class="complexity-pill">Space: ${prob.spaceComplexity}</span>
        </div>
        <pre style="padding:12px; border-radius:4px; font-family:var(--font-mono); font-size:0.85rem; color:#86efac; overflow-x:auto;">${prob.optimalSolution}</pre>
        <div style="margin-top:12px; font-size:0.85rem; color:#fbbf24; border-top:1px solid rgba(255,255,255,0.1); padding-top:8px;">
          <strong>💡 Google Interviewer Tip:</strong> ${prob.interviewerTips}
        </div>
      </div>
    `;
  }

  saveDsaCode(id, code) {
    this.state.codeNotes[id] = code;
    this.saveState();
  }

  resetDsaCode(id) {
    const prob = PREP_DATA.dsaProblems.find(p => p.id === id);
    if (prob) {
      this.state.codeNotes[id] = prob.pythonStarter;
      this.saveState();
      this.selectDsaProblem(id);
    }
  }

  toggleDsaSolved(id) {
    if (this.state.solvedDsa.includes(id)) {
      this.state.solvedDsa = this.state.solvedDsa.filter(x => x !== id);
    } else {
      this.state.solvedDsa.push(id);
    }
    this.saveState();
    this.renderDsaDojo();
    this.selectDsaProblem(id);
  }

  // In-Browser CPython 3.12 WebAssembly Engine
  async initPyodide() {
    const badge = document.getElementById("pyodideStatusBadge");
    if (this.pyodide || this.pyodideLoading) return;
    this.pyodideLoading = true;

    try {
      if (badge) {
        badge.textContent = "Python Engine: Loading CPython 3.12...";
        badge.style.background = "#d97706";
        badge.style.color = "#ffffff";
      }

      if (typeof loadPyodide === "undefined") {
        console.warn("loadPyodide script not yet loaded, waiting 1s...");
        await new Promise(r => setTimeout(r, 1000));
      }

      if (typeof loadPyodide === "function") {
        this.pyodide = await loadPyodide({
          indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/"
        });
        if (badge) {
          badge.textContent = "Python Engine: Ready (CPython 3.12 Wasm)";
          badge.style.background = "#1e8e3e";
          badge.style.color = "#ffffff";
        }
      } else {
        throw new Error("loadPyodide unavailable");
      }
    } catch (err) {
      console.warn("Pyodide CDN initialization fallback:", err);
      if (badge) {
        badge.textContent = "Python Engine: Client Mode";
        badge.style.background = "#475569";
        badge.style.color = "#ffffff";
      }
    } finally {
      this.pyodideLoading = false;
    }
  }

  async runDsaCode(problemId) {
    const prob = PREP_DATA.dsaProblems.find(p => p.id === problemId);
    if (!prob) return;

    const term = document.getElementById(`terminal-${problemId}`);
    const runBtn = document.getElementById(`runBtn-${problemId}`);
    if (!term) return;

    term.style.display = "block";
    term.textContent = "⏳ Executing test suite in CPython 3.12 WebAssembly sandbox...\n";
    if (runBtn) {
      runBtn.disabled = true;
      runBtn.textContent = "⏳ Running...";
    }

    if (!this.pyodide) {
      term.textContent += "⚙️ Initializing Pyodide runtime (first run downloads ~6MB WebAssembly binary)...\n";
      await this.initPyodide();
    }

    if (!this.pyodide) {
      term.textContent += "⚠️ WebAssembly Python engine could not be initialized (network offline or CDN blocked). Please run code in local Python or verify connectivity.";
      if (runBtn) {
        runBtn.disabled = false;
        runBtn.textContent = "▶ Run Tests (Pyodide Wasm)";
      }
      return;
    }

    const userCode = document.getElementById("dsaEditor")?.value || prob.pythonStarter;
    const testHarness = prob.testHarness;

    const fullScript = `
import sys
import io

_stdout_buffer = io.StringIO()
_orig_stdout = sys.stdout
sys.stdout = _stdout_buffer

try:
${userCode.split('\n').map(l => '    ' + l).join('\n')}

${testHarness.split('\n').map(l => '    ' + l).join('\n')}
finally:
    sys.stdout = _orig_stdout

_final_output = _stdout_buffer.getvalue()
`;

    try {
      const t0 = performance.now();
      await this.pyodide.runPythonAsync(fullScript);
      const output = this.pyodide.globals.get("_final_output");
      const elapsed = (performance.now() - t0).toFixed(1);

      term.textContent = `▶ Execution finished in ${elapsed} ms (CPython 3.12 Wasm)\n=======================================================\n${output}`;

      if (output && output.includes("PASSED") && !output.includes("FAILED")) {
        term.textContent += "\n🎉 100% OF TESTS PASSED! Solution verified for Google L5.";
        if (!this.state.solvedDsa.includes(problemId)) {
          this.state.solvedDsa.push(problemId);
          this.saveState();
          this.updateStats();
          this.renderDsaDojo();
        }
        if (typeof confetti === "function") {
          confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
        }
      } else if (output && output.includes("FAILED")) {
        term.textContent += "\n⚠️ Some test assertions failed. Inspect the output above and refine your logic.";
      }
    } catch (err) {
      term.textContent += `\n❌ Python Runtime / Syntax Error:\n${err.message}`;
    } finally {
      if (runBtn) {
        runBtn.disabled = false;
        runBtn.textContent = "▶ Run Tests (Pyodide Wasm)";
      }
    }
  }

  // SQL Studio
  renderSqlStudio() {
    const list = document.getElementById("sqlProblemList");
    list.innerHTML = PREP_DATA.sqlChallenges.map(s => {
      const isSolved = this.state.solvedSql.includes(s.id);
      return `
        <div class="item-card" onclick="app.selectSqlProblem('${s.id}')" id="sql-card-${s.id}">
          <div class="item-top">
            <span class="item-title">${s.title}</span>
            <span class="diff-${s.difficulty.toLowerCase()}">${s.difficulty}</span>
          </div>
          <div class="item-meta">${s.category} &bull; ${isSolved ? '✓ Mastered' : 'Todo'}</div>
        </div>
      `;
    }).join("");

    if (PREP_DATA.sqlChallenges.length > 0 && !this.selectedSqlId) {
      this.selectSqlProblem(PREP_DATA.sqlChallenges[0].id);
    }
  }

  selectSqlProblem(id) {
    this.selectedSqlId = id;
    document.querySelectorAll(".sql-list-panel .item-card").forEach(c => c.classList.remove("active"));
    const active = document.getElementById(`sql-card-${id}`);
    if (active) active.classList.add("active");

    const sql = PREP_DATA.sqlChallenges.find(s => s.id === id);
    if (!sql) return;

    const isSolved = this.state.solvedSql.includes(id);
    const workspace = document.getElementById("sqlWorkspace");
    workspace.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <div>
          <h2 style="font-family:var(--font-display); font-size:1.35rem;">${sql.title}</h2>
          <div style="font-size:0.85rem; color:var(--text-muted);">${sql.category} &bull; ${sql.difficulty}</div>
        </div>
        <button class="btn ${isSolved ? 'btn-outline' : 'btn-primary'}" onclick="app.toggleSqlSolved('${sql.id}')">
          ${isSolved ? '✓ Mastered' : 'Mark as Mastered'}
        </button>
      </div>

      <div style="font-size:0.9rem; line-height:1.5; color:var(--text-main);">
        <strong>Scenario:</strong> ${sql.scenario}
      </div>

      <div style="background:var(--bg-surface-elevated); padding:10px 14px; border-radius:4px; font-family:var(--font-mono); font-size:0.8rem; border:1px solid var(--border-subtle);">
        <strong style="color:var(--g-blue);">Schema:</strong><br>
        ${sql.sampleSchema.replace(/\n/g, '<br>')}
      </div>

      <div class="code-container">
        <div class="code-header"><span>SQL Solution (BigQuery / Standard SQL)</span></div>
        <pre style="padding:14px; color:var(--code-text); font-family:var(--font-mono); font-size:0.85rem; line-height:1.5; overflow-x:auto;">${sql.solutionQuery}</pre>
      </div>

      <div style="background:rgba(52, 168, 83, 0.1); border-left:3px solid var(--g-green); padding:10px 14px; font-size:0.85rem; color:var(--text-main);">
        <strong>Architectural Rationale:</strong> ${sql.explanation}
      </div>
    `;
  }

  toggleSqlSolved(id) {
    if (this.state.solvedSql.includes(id)) {
      this.state.solvedSql = this.state.solvedSql.filter(x => x !== id);
    } else {
      this.state.solvedSql.push(id);
    }
    this.saveState();
    this.renderSqlStudio();
    this.selectSqlProblem(id);
  }

  // System Design
  renderSystemDesign() {
    const grid = document.getElementById("systemDesignGrid");
    grid.innerHTML = PREP_DATA.systemDesigns.map(sys => {
      const isMastered = this.state.solvedSys.includes(sys.id);
      return `
        <div class="design-card">
          <div style="display:flex; justify-content:space-between; align-items:flex-start;">
            <h3 style="font-family:var(--font-display); font-size:1.15rem;">${sys.title}</h3>
            <button class="btn btn-sm ${isMastered ? 'btn-outline' : 'btn-primary'}" onclick="app.toggleSysMastered('${sys.id}')">
              ${isMastered ? '✓ Mastered' : 'Mark Reviewed'}
            </button>
          </div>
          
          <div style="font-size:0.8rem; color:var(--text-muted);">
            <div><strong>Scale:</strong> ${sys.scale}</div>
            <div><strong>Latency SLA:</strong> ${sys.latencySLA}</div>
          </div>

          <!-- Interactive Visual Flow Diagram -->
          <div>
            <span style="font-size:0.75rem; font-weight:700; text-transform:uppercase; color:var(--text-subtle);">End-to-End Architectural Pipeline Flow:</span>
            <div class="pipeline-flow-container">
              ${sys.flowNodes ? sys.flowNodes.map((n, i) => `
                <div class="flow-node">
                  <div class="flow-tier-name">${n.tier}</div>
                  <div class="flow-tech-name">${n.tech}</div>
                  <div class="flow-node-note">${n.note}</div>
                </div>
                ${i < sys.flowNodes.length - 1 ? '<span class="flow-arrow">→</span>' : ''}
              `).join("") : ''}
            </div>
          </div>

          <div class="design-tier-grid">
            <div class="tier-item"><strong>Ingestion Tier:</strong> ${sys.architectureTiers.ingestion}</div>
            <div class="tier-item"><strong>Streaming / Compute:</strong> ${sys.architectureTiers.streamingEngine}</div>
            <div class="tier-item"><strong>Storage Engine:</strong> ${sys.architectureTiers.storage}</div>
            <div class="tier-item"><strong>Serving Tier:</strong> ${sys.architectureTiers.serving}</div>
          </div>

          <div>
            <span style="font-size:0.75rem; font-weight:700; text-transform:uppercase; color:var(--g-red);">Key Bottlenecks & Google L5 Trade-offs</span>
            <div style="display:flex; flex-direction:column; gap:6px; margin-top:6px;">
              ${sys.bottlenecksAndSolutions.map(b => `
                <div class="bottleneck-box">
                  <strong>⚠️ ${b.issue}</strong>
                  ${b.solution}
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  toggleSysMastered(id) {
    if (this.state.solvedSys.includes(id)) {
      this.state.solvedSys = this.state.solvedSys.filter(x => x !== id);
    } else {
      this.state.solvedSys.push(id);
    }
    this.saveState();
    this.renderSystemDesign();
  }

  // Leadership (G&L) with Automated L5 Grader
  renderLeadership() {
    const grid = document.getElementById("leadershipGrid");
    grid.innerHTML = PREP_DATA.leadershipPrompts.map(prompt => {
      const savedNote = this.state.leadershipNotes[prompt.id] || { situation: "", task: "", action: "", result: "" };
      return `
        <div class="leadership-card">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span class="badge badge-accent">${prompt.competency}</span>
            <span style="font-size:0.75rem; color:var(--text-subtle);">L5 Evaluation Bar</span>
          </div>
          <h3 style="font-family:var(--font-display); font-size:1.1rem;">${prompt.title}</h3>
          <p style="font-size:0.85rem; color:var(--text-muted);">${prompt.prompt}</p>

          <div class="star-input-group">
            <label>Situation (Context, Scale, Constraints)</label>
            <textarea class="star-textarea" id="star-${prompt.id}-sit" placeholder="Describe the background and technical complexity..." oninput="app.saveStarField('${prompt.id}', 'situation', this.value)">${savedNote.situation || ''}</textarea>
          </div>

          <div class="star-input-group">
            <label>Task (Your Explicit Ownership as L5)</label>
            <textarea class="star-textarea" id="star-${prompt.id}-task" placeholder="What were you specifically responsible for solving?" oninput="app.saveStarField('${prompt.id}', 'task', this.value)">${savedNote.task || ''}</textarea>
          </div>

          <div class="star-input-group">
            <label>Action (Architectural Decisions, Consensus, Execution)</label>
            <textarea class="star-textarea" id="star-${prompt.id}-act" style="min-height:80px;" placeholder="Detail what YOU personally architected, coded, or led..." oninput="app.saveStarField('${prompt.id}', 'action', this.value)">${savedNote.action || ''}</textarea>
          </div>

          <div class="star-input-group">
            <label>Result (Quantified Business Impact & Metrics)</label>
            <textarea class="star-textarea" id="star-${prompt.id}-res" placeholder="e.g. Reduced latency by 65%, saved $200k/yr in Cloud slots, zero outages..." oninput="app.saveStarField('${prompt.id}', 'result', this.value)">${savedNote.result || ''}</textarea>
          </div>

          <div>
            <button class="btn btn-sm btn-primary" onclick="app.evaluateStarStory('${prompt.id}')">
              ⚡ Grade My Story Against Google L5 Rubric
            </button>
            <div id="starGradeBox-${prompt.id}" style="display:none;"></div>
          </div>
        </div>
      `;
    }).join("");
  }

  evaluateStarStory(id) {
    const sit = document.getElementById(`star-${id}-sit`)?.value.trim() || "";
    const task = document.getElementById(`star-${id}-task`)?.value.trim() || "";
    const act = document.getElementById(`star-${id}-act`)?.value.trim() || "";
    const res = document.getElementById(`star-${id}-res`)?.value.trim() || "";

    const combined = `${sit} ${task} ${act} ${res}`.toLowerCase();
    let score = 50;
    const feedback = [];

    // Check 1: Quantified metrics ($ / % / QPS / TB / latency / ms)
    const hasNumbers = /\d+[%$kmb]|percent|\d+\s*(seconds|ms|qps|tb|gb|hours)/i.test(combined);
    if (hasNumbers) {
      score += 15;
      feedback.push("✓ Strong quantitative impact metrics detected ($ / % / latency / throughput).");
    } else {
      feedback.push("⚠️ Missing quantitative metrics. Quantify impact (e.g. 'reduced latency by 45%', 'saved $120k/yr').");
    }

    // Check 2: Active first-person ownership ("I architected", "I designed", "I benchmarked")
    const hasFirstPerson = /\b(i architected|i designed|i implemented|i led|i benchmarked|i proposed|i drove|my responsibility)\b/i.test(combined);
    if (hasFirstPerson) {
      score += 15;
      feedback.push("✓ Strong executive ownership ('I architected / I led') demonstrated.");
    } else {
      feedback.push("⚠️ Too much passive voice. Replace 'we did' with 'I architected', 'I evaluated', 'I proposed'.");
    }

    // Check 3: Trade-off & Technical Rigor
    const hasTradeoffs = /\b(trade-off|because|instead of|alternative|evaluated|benchmarked|latency vs|cost vs)\b/i.test(combined);
    if (hasTradeoffs) {
      score += 10;
      feedback.push("✓ Clear architectural trade-offs articulated.");
    } else {
      feedback.push("⚠️ Add explicit trade-offs (e.g. 'We chose Bigtable over Spanner because write throughput was the bottleneck').");
    }

    // Check 4: Systemic prevention / guardrails
    const hasPrevention = /\b(prevented|post-mortem|monitoring|alert|automated|guardrail|ci\/cd|sla)\b/i.test(combined);
    if (hasPrevention) {
      score += 10;
      feedback.push("✓ Systemic preventative guardrails and monitoring mentioned.");
    } else {
      feedback.push("⚠️ Mention how you prevented recurrence (e.g. 'instituted automated CI/CD schema validation').");
    }

    score = Math.min(100, score);
    const box = document.getElementById(`starGradeBox-${id}`);
    box.style.display = "block";
    box.className = "star-grader-box";
    box.innerHTML = `
      <div class="star-score-row">
        <strong>Google L5 Behavioral Score:</strong>
        <span class="star-score-number">${score} / 100</span>
      </div>
      <div class="star-feedback-list">
        ${feedback.map(f => `<div>${f}</div>`).join("")}
      </div>
    `;
  }

  saveStarField(id, field, value) {
    if (!this.state.leadershipNotes[id]) {
      this.state.leadershipNotes[id] = {};
    }
    this.state.leadershipNotes[id][field] = value;
    this.saveState();
  }

  // Flashcards
  renderFlashcard() {
    const fc = PREP_DATA.flashcards[this.state.currentFlashcardIndex];
    if (!fc) return;

    document.getElementById("flashcardBox").classList.remove("flipped");
    document.getElementById("fcCategory").textContent = fc.category;
    document.getElementById("fcCategoryBack").textContent = fc.category;
    document.getElementById("fcQuestion").textContent = fc.q;
    document.getElementById("fcAnswer").textContent = fc.a;
    document.getElementById("fcCounter").textContent = `${this.state.currentFlashcardIndex + 1} / ${PREP_DATA.flashcards.length}`;
  }

  nextFlashcard() {
    this.state.currentFlashcardIndex = (this.state.currentFlashcardIndex + 1) % PREP_DATA.flashcards.length;
    this.renderFlashcard();
  }

  prevFlashcard() {
    this.state.currentFlashcardIndex = (this.state.currentFlashcardIndex - 1 + PREP_DATA.flashcards.length) % PREP_DATA.flashcards.length;
    this.renderFlashcard();
  }

  // Backup & Restore
  exportBackup() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.state, null, 2));
    const downloadAnchor = document.createElement("a");
    const date = new Date().toISOString().slice(0, 10);
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `google_career_prep_backup_${date}.json`);
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
        this.state = { ...this.state, ...imported };
        if (this.state.theme) this.applyTheme(this.state.theme);
        this.saveState();
        this.renderAll();
        alert("Progress successfully restored!");
        document.getElementById("syncModal").classList.remove("active");
      } catch (err) {
        alert("Failed to parse the backup file. Please ensure it is a valid JSON export.");
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
