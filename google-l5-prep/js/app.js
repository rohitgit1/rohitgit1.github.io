// Google L5 Career & Prep Portal - Application Logic

class PrepPortalApp {
  constructor() {
    this.state = {
      currentDay: 1,
      completedDays: [],
      solvedDsa: [],
      solvedSql: [],
      solvedSys: [],
      leadershipNotes: {},
      codeNotes: {},
      isStealthMode: false,
      activeDsaCategory: "all",
      activePhase: "all",
      currentFlashcardIndex: 0,
      activeReadingId: "read-1",
      activeQuestionRole: "all",
      questionSearchTerm: "",
      userSkills: {
        dsa: 4,
        sql: 8,
        systemDesign: 6,
        cloud: 7,
        businessMetrics: 7,
        clientFacing: 6
      }
    };

    this.init();
  }

  init() {
    this.loadState();
    this.setupEventListeners();
    this.renderAll();
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
    if (this.state.isStealthMode) {
      document.body.classList.add("stealth-mode");
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

    // Office Stealth Mode Toggle
    const stealthBtn = document.getElementById("btnStealthMode");
    if (stealthBtn) {
      stealthBtn.addEventListener("click", () => this.toggleStealthMode());
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

  toggleStealthMode() {
    this.state.isStealthMode = !this.state.isStealthMode;
    document.body.classList.toggle("stealth-mode", this.state.isStealthMode);
    this.saveState();
  }

  // Render All
  renderAll() {
    this.renderHeader();
    this.renderCareerRadar();
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
  }

  updateStats() {
    const dsaCount = this.state.solvedDsa.length;
    const sqlCount = this.state.solvedSql.length;
    const sysCount = this.state.solvedSys.length;
    const glCount = Object.keys(this.state.leadershipNotes).filter(k => this.state.leadershipNotes[k].action).length;

    // Stat values
    document.getElementById("statDsaSolved").textContent = dsaCount;
    document.getElementById("statSqlSolved").textContent = sqlCount;
    document.getElementById("statSysSolved").textContent = sysCount;
    document.getElementById("statGlSolved").textContent = glCount;

    // Stat bars
    document.getElementById("statDsaBar").style.width = `${Math.min(100, (dsaCount / 75) * 100)}%`;
    document.getElementById("statSqlBar").style.width = `${Math.min(100, (sqlCount / 20) * 100)}%`;
    document.getElementById("statSysBar").style.width = `${Math.min(100, (sysCount / 10) * 100)}%`;
    document.getElementById("statGlBar").style.width = `${Math.min(100, (glCount / 8) * 100)}%`;

    // Overall readiness
    const overallWeight = (
      (dsaCount / 75) * 30 +
      (sqlCount / 20) * 25 +
      (sysCount / 10) * 30 +
      (glCount / 8) * 15
    );
    const rounded = Math.round(overallWeight);
    document.getElementById("readinessPercent").textContent = `${rounded}%`;
    document.getElementById("masterProgressBar").style.width = `${Math.max(4, rounded)}%`;
    document.getElementById("dsaCountBadge").textContent = `${dsaCount}/75`;
  }

  // 0. SMART CAREER RADAR & ODDS CALCULATOR
  renderCareerRadar() {
    // Populate slider positions
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

    // Calculate match probability for each role
    const scoredRoles = PREP_DATA.targetRoles.map(role => {
      const req = role.strengthsNeeded;
      // Fitness calculation: penalty for being under required bar
      let penalty = 0;
      let totalReq = 0;
      for (const key in req) {
        totalReq += req[key];
        const diff = req[key] - this.state.userSkills[key];
        if (diff > 0) {
          // Penalty if user is below required strength
          penalty += diff * 1.5;
        }
      }
      const rawFit = Math.max(20, Math.min(95, Math.round(100 - (penalty / totalReq) * 80)));
      return { ...role, matchScore: rawFit };
    });

    // Sort by match score descending
    scoredRoles.sort((a, b) => b.matchScore - a.matchScore);
    const topRole = scoredRoles[0];
    document.getElementById("topRecRoleName").textContent = `${topRole.title} (${topRole.matchScore}% Match)`;

    // Render Roles Grid
    const container = document.getElementById("rolesGrid");
    container.innerHTML = scoredRoles.map((role, idx) => {
      const isTop = idx === 0;
      const isTrojan = role.id === "role-bie" || role.id === "role-cse";
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

  // 2. READING VAULT
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

      <div style="font-size:0.95rem; line-height:1.6; color:#e2e8f0; background:rgba(0,0,0,0.25); padding:14px; border-radius:6px; border:1px solid var(--border-subtle);">
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

  // 3. QUESTIONS BANK
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

      <div style="font-size:0.9rem; line-height:1.6; color:#cbd5e1;">
        ${prob.problemStatement}
      </div>

      <div class="code-container">
        <div class="code-header">
          <span>Python 3 Interactive Scratchpad</span>
          <button class="btn btn-sm btn-outline" onclick="app.resetDsaCode('${prob.id}')">Reset Starter</button>
        </div>
        <textarea class="code-editor" id="dsaEditor" oninput="app.saveDsaCode('${prob.id}', this.value)">${userCode}</textarea>
      </div>

      <div style="display:flex; gap:10px;">
        <button class="btn btn-outline" onclick="document.getElementById('solBox-${prob.id}').style.display = document.getElementById('solBox-${prob.id}').style.display === 'none' ? 'block' : 'none'">
          Toggle Optimal Solution & Interviewer Tips
        </button>
      </div>

      <div class="solution-box" id="solBox-${prob.id}" style="display:none;">
        <div style="margin-bottom:8px;">
          <span class="complexity-pill">Time: ${prob.timeComplexity}</span>
          <span class="complexity-pill">Space: ${prob.spaceComplexity}</span>
        </div>
        <pre style="background:#050811; padding:12px; border-radius:4px; font-family:var(--font-mono); font-size:0.85rem; color:#86efac; overflow-x:auto;">${prob.optimalSolution}</pre>
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

      <div style="font-size:0.9rem; line-height:1.5; color:#cbd5e1;">
        <strong>Scenario:</strong> ${sql.scenario}
      </div>

      <div style="background:rgba(0,0,0,0.3); padding:10px 14px; border-radius:4px; font-family:var(--font-mono); font-size:0.8rem; border:1px solid var(--border-subtle);">
        <strong style="color:var(--g-blue);">Schema:</strong><br>
        ${sql.sampleSchema.replace(/\n/g, '<br>')}
      </div>

      <div class="code-container">
        <div class="code-header"><span>SQL Solution (BigQuery / Standard SQL)</span></div>
        <pre style="padding:14px; color:#38bdf8; font-family:var(--font-mono); font-size:0.85rem; line-height:1.5; overflow-x:auto;">${sql.solutionQuery}</pre>
      </div>

      <div style="background:rgba(52, 168, 83, 0.1); border-left:3px solid var(--g-green); padding:10px 14px; font-size:0.85rem; color:#bbf7d0;">
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

  // Leadership
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
            <textarea class="star-textarea" placeholder="Describe the background and technical complexity..." oninput="app.saveStarField('${prompt.id}', 'situation', this.value)">${savedNote.situation || ''}</textarea>
          </div>

          <div class="star-input-group">
            <label>Task (Your Explicit Ownership as L5)</label>
            <textarea class="star-textarea" placeholder="What were you specifically responsible for solving?" oninput="app.saveStarField('${prompt.id}', 'task', this.value)">${savedNote.task || ''}</textarea>
          </div>

          <div class="star-input-group">
            <label>Action (Architectural Decisions, Consensus, Execution)</label>
            <textarea class="star-textarea" style="min-height:80px;" placeholder="Detail what YOU personally architected, coded, or led..." oninput="app.saveStarField('${prompt.id}', 'action', this.value)">${savedNote.action || ''}</textarea>
          </div>

          <div class="star-input-group">
            <label>Result (Quantified Business Impact & Metrics)</label>
            <textarea class="star-textarea" placeholder="e.g. Reduced latency by 65%, saved $200k/yr in Cloud slots, zero outages..." oninput="app.saveStarField('${prompt.id}', 'result', this.value)">${savedNote.result || ''}</textarea>
          </div>
        </div>
      `;
    }).join("");
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

// Instantiate globally
let app;
window.addEventListener("DOMContentLoaded", () => {
  app = new PrepPortalApp();
});
