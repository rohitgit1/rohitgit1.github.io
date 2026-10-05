// Google India Data Engineering Workspace - Application Logic
// Zero Fluff • Production-Grade • High Density • Complete 90-Day Progression

// =========================================================================
// 1. 🔊 ZERO-DEPENDENCY WEB AUDIO HAPTIC SYNTHESIZER
// =========================================================================
class AudioHapticEngine {
  constructor() {
    this.ctx = null;
    this.enabled = localStorage.getItem("google_l5_audio_enabled") !== "false";
  }

  init() {
    if (!this.ctx && typeof AudioContext !== "undefined") {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem("google_l5_audio_enabled", this.enabled ? "true" : "false");
    if (this.enabled) {
      this.play("click");
    }
    return this.enabled;
  }

  play(type = "click") {
    if (!this.enabled) return;
    try {
      this.init();
      if (this.ctx && this.ctx.state === "suspended") {
        this.ctx.resume();
      }
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);

      if (type === "click") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(300, now + 0.035);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);
        osc.start(now);
        osc.stop(now + 0.04);
      } else if (type === "toggle") {
        osc.type = "triangle";
        osc.frequency.setValueAtTime(450, now);
        osc.frequency.exponentialRampToValueAtTime(750, now + 0.05);
        gain.gain.setValueAtTime(0.09, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.055);
      } else if (type === "solved") {
        // Triumphant harmonic arpeggio (C5 -> E5 -> G5)
        const notes = [523.25, 659.25, 783.99];
        notes.forEach((freq, idx) => {
          const noteOsc = this.ctx.createOscillator();
          const noteGain = this.ctx.createGain();
          noteOsc.connect(noteGain);
          noteGain.connect(this.ctx.destination);
          noteOsc.type = "sine";
          noteOsc.frequency.setValueAtTime(freq, now + idx * 0.07);
          noteGain.gain.setValueAtTime(0.12, now + idx * 0.07);
          noteGain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.28);
          noteOsc.start(now + idx * 0.07);
          noteOsc.stop(now + idx * 0.07 + 0.3);
        });
      } else if (type === "error") {
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(110, now);
        osc.frequency.setValueAtTime(80, now + 0.08);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
        osc.start(now);
        osc.stop(now + 0.17);
      } else if (type === "navigate") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(900, now + 0.04);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        osc.start(now);
        osc.stop(now + 0.045);
      }
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }
}

// =========================================================================
// 2. 🌌 GPU-ACCELERATED AMBIENT MESH & INTERACTIVE CONSTELLATION
// =========================================================================
class AmbientMeshEngine {
  constructor() {
    this.canvas = document.getElementById("ambientMeshCanvas");
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.particles = [];
    this.numParticles = 50;
    this.mouseX = -1000;
    this.mouseY = -1000;
    this.cursorX = -1000;
    this.cursorY = -1000;
    this.animId = null;
    this.isPaused = false;

    this.resize();
    this.initParticles();
    this.bindEvents();
    this.loop();
  }

  resize() {
    if (!this.canvas) return;
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  initParticles() {
    this.particles = [];
    for (let i = 0; i < this.numParticles; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.6 + 0.8,
        baseAlpha: Math.random() * 0.35 + 0.15,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulseOffset: Math.random() * Math.PI * 2
      });
    }
  }

  bindEvents() {
    window.addEventListener("resize", () => {
      this.resize();
      this.initParticles();
    });

    window.addEventListener("mousemove", (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });

    window.addEventListener("mouseleave", () => {
      this.mouseX = -1000;
      this.mouseY = -1000;
    });

    document.addEventListener("visibilitychange", () => {
      this.isPaused = document.hidden;
    });
  }

  loop() {
    this.animId = requestAnimationFrame(() => this.loop());
    if (this.isPaused || !this.ctx) return;

    // Smooth cursor inertia
    this.cursorX += (this.mouseX - this.cursorX) * 0.08;
    this.cursorY += (this.mouseY - this.cursorY) * 0.08;

    this.ctx.clearRect(0, 0, this.width, this.height);

    const isLight = document.body.classList.contains("theme-light");
    const nodeColor = isLight ? "rgba(29, 78, 216," : "rgba(96, 165, 250,";
    const lineColor = isLight ? "rgba(37, 99, 235," : "rgba(59, 130, 246,";

    // Draw ambient cursor glow aura
    if (this.cursorX > 0 && this.cursorY > 0) {
      const grad = this.ctx.createRadialGradient(
        this.cursorX, this.cursorY, 0,
        this.cursorX, this.cursorY, 320
      );
      if (isLight) {
        grad.addColorStop(0, "rgba(37, 99, 235, 0.16)"); // Crisp visible glow on white
        grad.addColorStop(0.5, "rgba(99, 102, 241, 0.08)");
        grad.addColorStop(1, "transparent");
      } else {
        grad.addColorStop(0, "rgba(59, 130, 246, 0.10)");
        grad.addColorStop(1, "transparent");
      }
      this.ctx.fillStyle = grad;
      this.ctx.fillRect(0, 0, this.width, this.height);
    }

    const t = Date.now() * 0.001;

    // Update and draw particles
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = this.width;
      if (p.x > this.width) p.x = 0;
      if (p.y < 0) p.y = this.height;
      if (p.y > this.height) p.y = 0;

      // Mouse proximity repulsion
      const dx = p.x - this.cursorX;
      const dy = p.y - this.cursorY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 125 && dist > 0) {
        const force = (125 - dist) / 125 * 1.3;
        p.x += (dx / dist) * force;
        p.y += (dy / dist) * force;
      }

      const baseAlpha = isLight ? (p.baseAlpha * 1.5 + 0.3) : p.baseAlpha;
      const alpha = baseAlpha + Math.sin(t * p.pulseSpeed * 20 + p.pulseOffset) * 0.12;
      const radius = isLight ? p.radius * 1.35 : p.radius;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `${nodeColor} ${Math.min(1, Math.max(0.15, alpha))})`;
      this.ctx.fill();

      // Connecting filaments
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const fdx = p.x - p2.x;
        const fdy = p.y - p2.y;
        const fdist = Math.sqrt(fdx * fdx + fdy * fdy);
        if (fdist < 125) {
          const lalpha = (1 - fdist / 125) * (isLight ? 0.38 : 0.18);
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = `${lineColor} ${lalpha})`;
          this.ctx.lineWidth = isLight ? 1.25 : 0.75;
          this.ctx.stroke();
        }
      }
    }
  }
}

// =========================================================================
// 3. 🎆 HIGH-FPS FULL-SCREEN CELEBRATION BURST ENGINE
// =========================================================================
class BurstEngine {
  constructor() {
    this.canvas = document.getElementById("burstFxCanvas");
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.particles = [];
    this.animId = null;

    this.resize();
    window.addEventListener("resize", () => this.resize());
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  fire(originX, originY, count = 40) {
    if (!this.canvas || !this.ctx) return;
    this.resize();

    const isLight = document.body.classList.contains("theme-light");
    const colors = isLight ? [
      "#1d4ed8", // Deep Sapphire Blue
      "#059669", // Emerald Green
      "#d97706", // Amber
      "#7c3aed", // Vivid Violet
      "#dc2626"  // Crimson
    ] : [
      "#60a5fa", // Cyan Blue
      "#34d399", // Emerald Green
      "#fbbf24", // Gold Yellow
      "#a78bfa", // Electric Purple
      "#ffffff"  // Crisp White
    ];

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 8 + 3;
      const shapeType = Math.random() > 0.4 ? "rect" : "circle";
      this.particles.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2.5,
        gravity: 0.22,
        friction: 0.965,
        size: Math.random() * 6 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.25,
        alpha: 1,
        decay: Math.random() * 0.018 + 0.012,
        shape: shapeType
      });
    }

    if (!this.animId) {
      this.loop();
    }
  }

  loop() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.vx *= p.friction;
      p.vy *= p.friction;
      p.vy += p.gravity;
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.vRot;
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.globalAlpha = Math.max(0, p.alpha);
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate(p.rotation);
      this.ctx.fillStyle = p.color;

      if (p.shape === "rect") {
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      } else {
        this.ctx.beginPath();
        this.ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        this.ctx.fill();
      }
      this.ctx.restore();
    }

    if (this.particles.length > 0) {
      this.animId = requestAnimationFrame(() => this.loop());
    } else {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.animId = null;
    }
  }
}

// =========================================================================
// 🔒 PERMANENT MISSION TIMELINE CONFIGURATION (IMMUTABLE ANCHORS)
// =========================================================================
// This timeline is permanently anchored. Future code updates or refreshes will NEVER
// break the 24H countdown timer or miscalculate the 90-day trajectory.
const MISSION_CONFIG = {
  START_DATE: "2026-10-05T00:00:00+05:30", // Day 1: Monday, October 5, 2026 12:00 AM IST
  END_DATE: "2027-01-02T23:59:59+05:30",   // Day 90: Saturday, January 2, 2027 11:59:59 PM IST
  BIRTHDAY_DATE: "2027-01-03T00:00:00+05:30", // Rohit's Birthday (Jan 3)
  TOTAL_DAYS: 90
};

class PrepPortalApp {
  constructor() {
    // Permanent candidate persistence: Never overwrite candidate progress or day on updates
    const realToday = this.getTodayDayNum();
    const savedDay = parseInt(localStorage.getItem("google_l5_selected_day") || "0");
    const activeDay = (savedDay >= 1 && savedDay <= 90) ? savedDay : realToday;
    localStorage.setItem("google_l5_selected_day", activeDay);

    this.state = {
      theme: localStorage.getItem("google_l5_theme") || "dark",
      activeTab: "tracker",
      activeMasterclassCat: "all",
      activePracticeMode: "dsa",
      activeDsaId: "dsa-1",
      activeSqlId: "sql-1",
      selectedDay: activeDay,
      dsaCategoryFilter: "all",
      curriculumPhaseFilter: "all",
      curriculumSearchQuery: "",
      solvedDsa: [],
      solvedSql: []
    };

    // Micro-Engines (Zero Fluff, High-FPS Physics)
    this.audio = new AudioHapticEngine();
    this.mesh = new AmbientMeshEngine();
    this.burst = new BurstEngine();

    // Master PIN Privacy Gate
    this.masterPin = localStorage.getItem("google_l5_master_pin") || "2026";
    this.isUnlocked = sessionStorage.getItem("google_l5_session_unlocked") === "true";

    // 24H Daily Accountability State (12:00 AM – 11:59 PM)
    this.todayDateStr = this.getTodayDateString();
    this.dailyData = this.loadDailyData();
    this.accountabilityInterval = null;

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
    this.initCardSpotlightPhysics();
    this.initMagneticButtons();
    this.updateNavIndicator(false);
    this.updateSoundToggleBtn();
    this.renderHorizonTimeline();
  }

  // --- Theme Management ---
  setTheme(themeName) {
    this.state.theme = themeName;
    localStorage.setItem("google_l5_theme", themeName);
    this.applyTheme(themeName);
    this.saveState();
    this.renderHorizonTimeline();
    setTimeout(() => {
      this.initCardSpotlightPhysics();
      this.initMagneticButtons();
    }, 40);
  }

  applyTheme(themeName) {
    document.body.classList.remove("theme-dark", "theme-light");
    document.body.classList.add(`theme-${themeName}`);

    const btnDark = document.getElementById("btnThemeDark");
    const btnLight = document.getElementById("btnThemeLight");
    if (btnDark) btnDark.classList.toggle("active", themeName === "dark");
    if (btnLight) btnLight.classList.toggle("active", themeName === "light");

    if (this.mesh) {
      this.mesh.initParticles();
    }
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
      const isActive = view.id === `view-${tabId}`;
      view.classList.toggle("active", isActive);
      if (isActive) {
        const titleEl = view.querySelector(".section-title");
        if (titleEl) this.scrambleText(titleEl);
      }
    });

    this.updateNavIndicator(true);
    this.audio.play("click");
    setTimeout(() => {
      this.initCardSpotlightPhysics();
      this.initMagneticButtons();
    }, 50);

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
      this.audio.play("solved");
      this.burst.fire(window.innerWidth / 2, window.innerHeight / 2, 45);
      setTimeout(() => this.updateNavIndicator(false), 100);
    } else {
      if (errEl) errEl.style.display = "block";
      this.audio.play("error");
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

  // --- 📅 90-Day Calendar & Birthday Timeline Calculator ---
  getTodayDayNum() {
    const startDate = new Date(2026, 9, 5); // Oct 5, 2026 (Month 9 = October)
    const now = new Date();
    const startMidnight = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    const todayMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const diffDays = Math.round((todayMidnight - startMidnight) / (1000 * 60 * 60 * 24)) + 1;
    return Math.max(1, Math.min(90, diffDays));
  }

  getDateForDayNum(dayNum) {
    const startDate = new Date(2026, 9, 5); // Oct 5, 2026
    const targetDate = new Date(startDate);
    targetDate.setDate(startDate.getDate() + (dayNum - 1));
    return targetDate;
  }

  formatDateForDay(dayNum) {
    const d = this.getDateForDayNum(dayNum);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayName = days[d.getDay()];
    const monthName = months[d.getMonth()];
    const dateNum = d.getDate();
    return `${dayName}, ${monthName} ${dateNum}`;
  }

  updateBirthdayCountdown() {
    const todayDayNum = this.getTodayDayNum();
    const daysRemaining = Math.max(0, 91 - todayDayNum);
    const el = document.getElementById("bdayCountdownDays");
    if (el) {
      el.textContent = daysRemaining;
    }
  }

  // --- ⏱️ 90-Day Progression & Day Selector ---
  initDaySelector() {
    const select = document.getElementById("daySelectDropdown");
    if (!select || !PREP_DATA.schedule) return;

    select.innerHTML = "";
    PREP_DATA.schedule.forEach(s => {
      const opt = document.createElement("option");
      opt.value = s.day;
      const dateStr = this.formatDateForDay(s.day);
      const isBdayEve = s.day === 90;
      opt.textContent = `Day ${s.day} (${dateStr})${isBdayEve ? ' 🏁 [Day 90 Final Milestone]' : ''}: ${s.dsaProblem.title}`;
      if (s.day === this.state.selectedDay) {
        opt.selected = true;
      }
      select.appendChild(opt);
    });

    this.updateBirthdayCountdown();
    this.renderDailyPillars();
  }

  changeSelectedDay(dayNum) {
    this.state.selectedDay = parseInt(dayNum);
    sessionStorage.setItem("user_manually_chose_day", "true");
    localStorage.setItem("google_l5_selected_day", this.state.selectedDay);
    
    const select = document.getElementById("daySelectDropdown");
    if (select) select.value = this.state.selectedDay;

    this.audio.play("navigate");
    this.renderDailyPillars();
    this.renderHorizonTimeline();
    setTimeout(() => {
      this.initCardSpotlightPhysics();
      this.initMagneticButtons();
    }, 40);
  }

  navigateDay(delta) {
    let nextDay = this.state.selectedDay + delta;
    if (nextDay < 1) nextDay = 1;
    if (nextDay > 90) nextDay = 90;
    this.changeSelectedDay(nextDay);
  }

  jumpToCurrentDay() {
    this.changeSelectedDay(this.getTodayDayNum());
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

    const dateStr = this.formatDateForDay(day);
    const todayDay = this.getTodayDayNum();
    const isToday = day === todayDay;

    // Header & Phase Badge
    const headerEl = document.getElementById("dailyPillarsHeader");
    if (headerEl) {
      if (day === 90) {
        headerEl.innerHTML = `Day 90 Quota <span style="color:#2563eb; font-size:0.85rem; font-weight:700;">• ${dateStr} 🏁 Final Sprint Milestone (Target Assessment: Jan 03)</span>`;
      } else {
        headerEl.innerHTML = `Day ${day} Quota <span style="font-size:0.85rem; font-weight:500; color:var(--text-muted);">• ${dateStr} ${isToday ? '<span style="color:#60a5fa; font-weight:700;">(Today)</span>' : ''}</span>`;
      }
    }

    const phaseBadge = document.getElementById("currentPhaseBadge");
    if (phaseBadge) {
      if (day === 90) {
        phaseBadge.innerHTML = `🏁 Day 90 Finale (Week 13) • Graduation & Target Readiness`;
        phaseBadge.style.borderColor = "rgba(37, 99, 235, 0.6)";
        phaseBadge.style.color = "#3b82f6";
      } else {
        phaseBadge.textContent = `${sched.phaseName} (Week ${sched.week})`;
        phaseBadge.style.borderColor = "";
        phaseBadge.style.color = "";
      }
    }

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
    if (dayPillars[num]) {
      this.audio.play("toggle");
    } else {
      this.audio.play("click");
    }
    this.saveDayPillarsState(day, dayPillars);
    this.renderDailyPillars();
    this.renderAccountabilityHistory();

    const doneCount = Object.values(dayPillars).filter(Boolean).length;
    if (doneCount === 4) {
      this.audio.play("solved");
      this.burst.fire(window.innerWidth / 2, window.innerHeight / 2, 50);
    }
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

  // --- 🔬 Technical Masterclass (First-Principles Production Lab) ---
  escapeHtml(str) {
    if (!str) return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  filterMasterclass(category) {
    this.state.activeMasterclassCat = category;
    document.querySelectorAll(".cat-pill").forEach(p => {
      p.classList.toggle("active", p.textContent.toLowerCase().includes(category) || (category === 'all' && p.textContent === 'All Modules'));
    });
    this.audio.play("click");
    this.renderMasterclass();
  }

  switchMasterclassSubtab(moduleId, tabKey) {
    if (!this.state.mcTabs) this.state.mcTabs = {};
    this.state.mcTabs[moduleId] = tabKey;
    this.audio.play("click");
    this.renderMasterclass();
  }

  runSnowflakePruningQuery(queryId) {
    if (!this.state.mcSimulatorState) this.state.mcSimulatorState = {};
    this.state.mcSimulatorState.snowflakeQuery = queryId;
    this.audio.play("click");
    this.renderMasterclass();
  }

  toggleSparkSkew(scenarioId) {
    if (!this.state.mcSimulatorState) this.state.mcSimulatorState = {};
    this.state.mcSimulatorState.sparkScenario = scenarioId;
    this.audio.play("click");
    this.renderMasterclass();
  }

  copyScriptCode(btn, encodedCode) {
    const rawCode = decodeURIComponent(encodedCode);
    navigator.clipboard.writeText(rawCode).then(() => {
      this.audio.play("celebrate");
      const orig = btn.innerHTML;
      btn.innerHTML = "✓ Copied!";
      btn.style.borderColor = "#10b981";
      btn.style.color = "#10b981";
      setTimeout(() => {
        btn.innerHTML = orig;
        btn.style.borderColor = "";
        btn.style.color = "";
      }, 1500);
    });
  }

  renderMasterclass() {
    const container = document.getElementById("masterclassContainer");
    if (!container || !PREP_DATA.techDeepDives) return;

    if (!this.state.mcTabs) this.state.mcTabs = {};
    if (!this.state.mcSimulatorState) {
      this.state.mcSimulatorState = { snowflakeQuery: 'q1', sparkScenario: 'skew-default' };
    }

    const cat = this.state.activeMasterclassCat;
    const filtered = (cat === "all") 
      ? PREP_DATA.techDeepDives 
      : PREP_DATA.techDeepDives.filter(d => d.category === cat);

    let html = "";
    filtered.forEach(module => {
      const activeTab = this.state.mcTabs[module.id] || "arch";

      // 1. Module Metrics Grid
      let metricsHtml = "";
      if (module.metrics) {
        metricsHtml = `
          <div class="mc-metrics-grid">
            ${module.metrics.map(m => `
              <div class="mc-metric-box">
                <div class="mc-metric-label">${m.label}</div>
                <div class="mc-metric-val">${m.val}</div>
              </div>
            `).join("")}
          </div>
        `;
      }

      // 2. Sub-Tab Navigation Bar
      const codeCount = module.productionCode ? module.productionCode.length : 0;
      const bcCount = module.defenseBattlecards ? module.defenseBattlecards.length : 0;
      const incCount = module.incidentPostMortems ? module.incidentPostMortems.length : 0;

      const tabsNavHtml = `
        <div class="mc-nav-tabs">
          <button class="mc-nav-btn ${activeTab === 'arch' ? 'active' : ''}" onclick="app.switchMasterclassSubtab('${module.id}', 'arch')">
            📐 Architecture Blueprint &amp; Simulator
          </button>
          <button class="mc-nav-btn ${activeTab === 'code' ? 'active' : ''}" onclick="app.switchMasterclassSubtab('${module.id}', 'code')">
            💻 Production Code Lab (${codeCount})
          </button>
          <button class="mc-nav-btn ${activeTab === 'defense' ? 'active' : ''}" onclick="app.switchMasterclassSubtab('${module.id}', 'defense')">
            🛡️ Google L5 Interview Defense (${bcCount})
          </button>
          <button class="mc-nav-btn ${activeTab === 'incident' ? 'active' : ''}" onclick="app.switchMasterclassSubtab('${module.id}', 'incident')">
            🚨 Incident Post-Mortem (${incCount})
          </button>
        </div>
      `;

      // 3. Tab Contents
      let tabContentHtml = "";
      if (activeTab === "arch") {
        let tiersHtml = "";
        if (module.architecture && module.architecture.tiers) {
          tiersHtml = `
            <div class="mc-tiers-grid">
              ${module.architecture.tiers.map(t => `
                <div class="mc-tier-card">
                  <div class="mc-tier-title">${t.name}</div>
                  <div class="mc-tier-tech">${t.tech}</div>
                  <div class="mc-tier-details">${t.details}</div>
                </div>
              `).join("")}
            </div>
          `;
        }

        let simHtml = "";
        if (module.architecture && module.architecture.simulator) {
          const sim = module.architecture.simulator;
          if (sim.type === "snowflake-pruning") {
            const activeQId = this.state.mcSimulatorState.snowflakeQuery || "q1";
            const currentQ = sim.queries.find(q => q.id === activeQId) || sim.queries[0];

            simHtml = `
              <div class="mc-sim-box">
                <div class="mc-sim-header">
                  <span class="mc-sim-title">⚡ Interactive Micro-Partition Pruning &amp; Cluster Depth Simulator</span>
                  <span style="font-family:var(--font-mono); font-size:0.75rem; color:#3b82f6;">Table: ${sim.tableName}</span>
                </div>
                <div class="mc-sim-controls">
                  ${sim.queries.map(q => `
                    <div class="mc-sim-query-btn ${q.id === activeQId ? 'active' : ''}" onclick="app.runSnowflakePruningQuery('${q.id}')">
                      <div class="mc-sim-query-label">${q.label}</div>
                      <code class="mc-sim-query-sql">${q.sql}</code>
                    </div>
                  `).join("")}
                </div>
                <div class="mc-partitions-grid">
                  ${sim.partitions.map(p => {
                    const isScanned = currentQ.scannedIds.includes(p.id);
                    return `
                      <div class="mc-partition-card ${isScanned ? 'scanned' : 'pruned'}">
                        <div class="mc-p-header">
                          <span>${p.name}</span>
                          <span class="mc-p-badge">${isScanned ? 'READ' : 'SKIPPED'}</span>
                        </div>
                        <div class="mc-p-detail"><strong>Region:</strong> ${p.region}</div>
                        <div class="mc-p-detail"><strong>Date:</strong> ${p.dateRange}</div>
                        <div class="mc-p-detail"><strong>Rows:</strong> ${p.rows} (${p.size})</div>
                      </div>
                    `;
                  }).join("")}
                </div>
                <div class="mc-sim-telemetry">
                  <div class="mc-telemetry-metrics-row">
                    <div class="mc-t-item">
                      <span class="mc-t-label">Pruning Rate</span>
                      <span class="mc-t-val emerald">${currentQ.prunedPercent} (${currentQ.prunedCount}/16 Skipped)</span>
                    </div>
                    <div class="mc-t-item">
                      <span class="mc-t-label">Bytes Scanned</span>
                      <span class="mc-t-val ${currentQ.scannedCount > 8 ? 'red' : 'emerald'}">${currentQ.bytesScanned} (Saved ${currentQ.bytesSaved})</span>
                    </div>
                    <div class="mc-t-item">
                      <span class="mc-t-label">Query Latency</span>
                      <span class="mc-t-val">${currentQ.latency}</span>
                    </div>
                  </div>
                  <div class="mc-telemetry-verdict">
                    <strong>Technical Execution Trace:</strong> ${currentQ.verdict}
                  </div>
                </div>
              </div>
            `;
          } else if (sim.type === "spark-skew") {
            const activeScenId = this.state.mcSimulatorState.sparkScenario || "skew-default";
            const scen = sim.scenarios.find(s => s.id === activeScenId) || sim.scenarios[0];

            simHtml = `
              <div class="mc-sim-box">
                <div class="mc-sim-header">
                  <span class="mc-sim-title">⚡ Interactive PySpark Partition Skew &amp; Key Salting Simulator</span>
                  <span style="font-family:var(--font-mono); font-size:0.75rem; color:#3b82f6;">Stage: ${sim.tableName}</span>
                </div>
                <div style="display:flex; gap:10px; margin-bottom:14px; flex-wrap:wrap;">
                  ${sim.scenarios.map(s => `
                    <button class="btn btn-sm ${s.id === activeScenId ? 'btn-primary' : 'btn-outline'}" onclick="app.toggleSparkSkew('${s.id}')">
                      ${s.name}
                    </button>
                  `).join("")}
                </div>
                <div class="mc-skew-executors">
                  ${scen.executors.map(ex => `
                    <div class="mc-executor-card ${ex.failed ? 'straggler' : 'balanced'}">
                      <div class="mc-exec-name">
                        <span>${ex.name}</span>
                        <span style="color:${ex.failed ? '#ef4444' : '#10b981'};">${ex.failed ? '⚠️ Straggler' : '✓ Done'}</span>
                      </div>
                      <div class="mc-exec-task">${ex.task}</div>
                      <div class="mc-exec-stat-row">
                        <span>Rows Processed:</span>
                        <strong>${ex.rows}</strong>
                      </div>
                      <div class="mc-exec-stat-row">
                        <span>JVM Memory:</span>
                        <strong style="color:${ex.failed ? '#ef4444' : 'inherit'};">${ex.memory}</strong>
                      </div>
                      <div class="mc-exec-stat-row">
                        <span>Stage Time:</span>
                        <strong>${ex.status}</strong>
                      </div>
                    </div>
                  `).join("")}
                </div>
                <div class="mc-sim-telemetry">
                  <div class="mc-telemetry-verdict">
                    <strong>Cluster Execution Verdict:</strong> ${scen.verdict}
                  </div>
                </div>
              </div>
            `;
          }
        }

        tabContentHtml = `
          <div style="margin-bottom:16px;">
            <p style="font-size:0.86rem; color:var(--text-main); line-height:1.6;">${module.architecture ? module.architecture.overview : ''}</p>
          </div>
          ${tiersHtml}
          ${simHtml}
        `;
      } else if (activeTab === "code") {
        tabContentHtml = `
          <div class="mc-code-group">
            ${(module.productionCode || []).map((c, i) => `
              <div class="mc-code-box">
                <div class="mc-code-header">
                  <span class="mc-code-title">${c.title}</span>
                  <button class="btn btn-sm btn-outline mc-copy-btn" id="btnCopyCode_${module.id}_${i}" onclick="app.copyScriptCode(this, '${encodeURIComponent(c.code)}')">
                    📋 Copy Script
                  </button>
                </div>
                <pre class="mc-code-block"><code>${this.escapeHtml(c.code)}</code></pre>
              </div>
            `).join("")}
          </div>
        `;
      } else if (activeTab === "defense") {
        tabContentHtml = `
          <div class="mc-battlecards-list">
            ${(module.defenseBattlecards || []).map(b => `
              <div class="mc-battlecard">
                <div class="mc-bc-question">🎯 Interview Scenario: ${b.question}</div>
                <div class="mc-bc-trap">
                  <div class="mc-bc-trap-title">❌ Junior Trap / Common Candidate Blunder</div>
                  <div class="mc-bc-trap-text">${b.juniorTrap}</div>
                </div>
                <div class="mc-bc-staff">
                  <div class="mc-bc-staff-title">💡 Google L5 Staff Engineer Response (First-Principles)</div>
                  <div class="mc-bc-staff-text">${b.staffResponse}</div>
                </div>
                <div class="mc-bc-internals">
                  <div class="mc-bc-internals-title">🔍 Under-The-Hood Mechanics (How the Engine Actually Operates)</div>
                  <div class="mc-bc-internals-text">${b.underTheHood}</div>
                </div>
              </div>
            `).join("")}
          </div>
        `;
      } else if (activeTab === "incident") {
        tabContentHtml = `
          <div style="display:flex; flex-direction:column; gap:16px;">
            ${(module.incidentPostMortems || []).map(inc => `
              <div class="mc-incident-card">
                <div class="mc-inc-title">🚨 ${inc.title}</div>
                <div class="mc-inc-section">
                  <div class="mc-inc-sec-title">Production Symptoms</div>
                  <div class="mc-inc-sec-text">${inc.symptoms}</div>
                </div>
                <div class="mc-inc-section">
                  <div class="mc-inc-sec-title">Root Cause Mechanical Analysis</div>
                  <div class="mc-inc-sec-text">${inc.rootCause}</div>
                </div>
                <div class="mc-inc-section">
                  <div class="mc-inc-sec-title">Staff Remediation &amp; Permanent Architecture Fix</div>
                  <div class="mc-inc-sec-text" style="color:#10b981;">${inc.resolution}</div>
                </div>
              </div>
            `).join("")}
          </div>
        `;
      }

      html += `
        <div class="masterclass-card">
          <div class="mc-badge-row">
            <span class="mc-tag">${module.tag || module.category.toUpperCase() + ' ARCHITECTURE'}</span>
            <span class="mc-difficulty">Level 4/5 Staff Core</span>
          </div>
          <h2 class="mc-title">${module.title}</h2>
          <p class="mc-summary">${module.summary || ''}</p>
          ${metricsHtml}
          ${tabsNavHtml}
          <div class="mc-tab-content">
            ${tabContentHtml}
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

  toggleProblemSolved(id, evt) {
    let solved = JSON.parse(localStorage.getItem("google_l5_solved_dsa") || "[]");
    const wasSolved = solved.includes(id);
    if (wasSolved) {
      solved = solved.filter(x => x !== id);
      this.audio.play("click");
    } else {
      solved.push(id);
      this.audio.play("solved");
      const x = evt && evt.clientX ? evt.clientX : window.innerWidth / 2;
      const y = evt && evt.clientY ? evt.clientY : window.innerHeight / 2;
      this.burst.fire(x, y, 45);
    }
    localStorage.setItem("google_l5_solved_dsa", JSON.stringify(solved));
    this.renderDsaList();
    this.selectDsaProblem(id);
    this.renderHorizonTimeline();
  }

  copyProblemSolution(id) {
    const p = PREP_DATA.dsaProblems.find(item => item.id === id);
    if (!p) return;
    navigator.clipboard.writeText(p.optimalSolution).then(() => {
      this.audio.play("click");
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
          <a href="${p.leetcodeUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-magnetic" style="display:inline-flex; align-items:center; gap:6px; font-weight:600;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            <span>Solve on LeetCode.com ↗</span>
          </a>
          <button class="btn btn-outline btn-magnetic" onclick="app.toggleProblemSolved('${p.id}', event)">
            ${isSolved ? '✓ Marked as Solved' : '○ Mark as Solved'}
          </button>
          <button class="btn btn-outline btn-magnetic" onclick="app.copyProblemSolution('${p.id}')">
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
    this.renderHorizonTimeline();
    setTimeout(() => {
      this.initCardSpotlightPhysics();
      this.initMagneticButtons();
    }, 60);
  }

  // --- 🪄 INNOVATIVE INTERACTIVE PHYSICS & MOTION UTILITIES ---
  initCardSpotlightPhysics() {
    const handleMove = (e, card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);

      // Micro 3D perspective tilt
      const rx = ((y / rect.height) - 0.5) * -6;
      const ry = ((x / rect.width) - 0.5) * 6;
      card.style.transform = `perspective(1000px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateZ(1px)`;
    };

    const handleLeave = (card) => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)";
    };

    document.querySelectorAll(".card, .pillar-card, .footer-accountability-card, .dojo-problem-content, .defense-drill-card").forEach(card => {
      card.removeEventListener("mousemove", card._spotlightMove);
      card.removeEventListener("mouseleave", card._spotlightLeave);
      card._spotlightMove = (e) => handleMove(e, card);
      card._spotlightLeave = () => handleLeave(card);
      card.addEventListener("mousemove", card._spotlightMove);
      card.addEventListener("mouseleave", card._spotlightLeave);
    });
  }

  initMagneticButtons() {
    document.querySelectorAll(".btn-magnetic").forEach(btn => {
      btn.removeEventListener("mousemove", btn._magMove);
      btn.removeEventListener("mouseleave", btn._magLeave);
      btn._magMove = (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
      };
      btn._magLeave = () => {
        btn.style.transform = "translate(0px, 0px)";
      };
      btn.addEventListener("mousemove", btn._magMove);
      btn.addEventListener("mouseleave", btn._magLeave);
    });
  }

  updateNavIndicator(animated = true) {
    const navMenu = document.querySelector(".nav-menu");
    const indicator = document.getElementById("navIndicatorPill");
    const activeItem = document.querySelector(".nav-item.active");
    if (!navMenu || !indicator || !activeItem) return;

    const offsetTop = activeItem.offsetTop;
    const height = activeItem.offsetHeight;

    if (!animated) {
      indicator.style.transition = "none";
    }
    indicator.style.transform = `translateY(${offsetTop}px)`;
    indicator.style.height = `${height}px`;
    indicator.style.opacity = "1";
    if (!animated) {
      requestAnimationFrame(() => {
        indicator.style.transition = "";
      });
    }
  }

  toggleSound() {
    const isEnabled = this.audio.toggle();
    this.updateSoundToggleBtn(isEnabled);
  }

  updateSoundToggleBtn(isEnabled = this.audio.enabled) {
    const btn = document.getElementById("btnSoundToggle");
    if (btn) {
      btn.textContent = isEnabled ? "🔊 Audio: On" : "🔇 Audio: Muted";
      btn.classList.toggle("muted", !isEnabled);
    }
  }

  renderHorizonTimeline() {
    const container = document.getElementById("horizonTimelineContainer");
    if (!container || !PREP_DATA.schedule) return;

    const solvedDsa = JSON.parse(localStorage.getItem("google_l5_solved_dsa") || "[]");
    let solvedDaysCount = 0;

    let html = "";
    PREP_DATA.schedule.forEach(s => {
      const isCurrent = s.day === this.state.selectedDay;
      const isSolved = solvedDsa.includes(s.dsaProblem.id);
      if (isSolved) solvedDaysCount++;

      const dateStr = this.formatDateForDay(s.day);
      const isBdayEve = s.day === 90;

      html += `
        <div class="horizon-bar-node ${isCurrent ? 'current-selected' : ''} ${isSolved ? 'solved-day' : ''}"
             data-day="${s.day}"
             data-phase="${s.phase}"
             title="Day ${s.day} (${dateStr}): ${s.dsaProblem.title}${isSolved ? ' [✓ Solved]' : ''}${isBdayEve ? ' 🏁 [Day 90 Final Milestone]' : ''}"
             onclick="app.changeSelectedDay(${s.day})">
        </div>
      `;
    });

    // Append the Jan 03 Benchmark Horizon Flag right next to Day 90
    html += `
      <span class="bday-horizon-flag" title="Jan 03: Final Target Benchmark Assessment">
        🎯 Jan 03 Benchmark
      </span>
    `;

    container.innerHTML = html;

    const statsEl = document.getElementById("horizonStats");
    if (statsEl) {
      statsEl.textContent = `Solved: ${solvedDaysCount}/90 Days`;
    }
    this.updateBirthdayCountdown();
  }

  scrambleText(el) {
    if (!el) return;
    const originalText = el.textContent;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!<>-_\\/[]{}—=+*^?#";
    let iteration = 0;

    clearInterval(el._scrambleInterval);
    el._scrambleInterval = setInterval(() => {
      el.textContent = originalText
        .split("")
        .map((char, index) => {
          if (char === " " || index < iteration) {
            return originalText[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      if (iteration >= originalText.length) {
        clearInterval(el._scrambleInterval);
      }
      iteration += 1.5;
    }, 25);
  }
}

// Global App Instance
let app;
document.addEventListener("DOMContentLoaded", () => {
  app = new PrepPortalApp();
});
