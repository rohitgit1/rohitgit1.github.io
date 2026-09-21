/**
 * ROHIT SINGH - PORTFOLIO INTERACTIVE CORE JAVASCRIPT
 * Features: Particle Constellation Canvas, Interactive Terminal, Typewriter,
 *           Filterable Projects, Certificate Modal, Toast Notifications, Scroll-Spy
 */

document.addEventListener('DOMContentLoaded', () => {
  initParticleCanvas();
  initTypewriter();
  initTerminal();
  initProjectFilters();
  initCertModal();
  initCopyEmail();
  initNavScroll();
  initContactForm();
});

/* ==========================================================================
   1. PARTICLE CONSTELLATION CANVAS
   ========================================================================== */
function initParticleCanvas() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const particleCount = 65;
  const maxDistance = 140;
  let mouse = { x: null, y: null, radius: 150 };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.8;
      this.vy = (Math.random() - 0.5) * 0.8;
      this.radius = Math.random() * 1.8 + 1;
      this.color = Math.random() > 0.4 ? 'rgba(16, 185, 129, ' : 'rgba(6, 182, 212, ';
      this.alpha = Math.random() * 0.5 + 0.3;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse collision repulsion
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const dirX = dx / dist;
          const dirY = dy / dist;
          this.x -= dirX * force * 3;
          this.y -= dirY * force * 3;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color + this.alpha + ')';
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.color + '0.6)';
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const alpha = (1 - dist / maxDistance) * 0.22;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
          ctx.lineWidth = 0.9;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   2. TYPEWRITER EFFECT
   ========================================================================== */
function initTypewriter() {
  const el = document.getElementById('typewriter-text');
  if (!el) return;

  const roles = [
    "Data, AI & Application Engineer",
    "Claude Certified Architect - Professional (Anthropic)",
    "SnowPro Core Certified (Snowflake)",
    "Databricks, Spark & Delta Lake Builder",
    "Generative AI, RAG & LLM Systems Architect",
    "Full-Stack App Developer & Cloud Engineer"
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 80;

  function tick() {
    const current = roles[roleIdx];

    if (isDeleting) {
      el.textContent = current.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 35;
    } else {
      el.textContent = current.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 70;
    }

    if (!isDeleting && charIdx === current.length) {
      typingSpeed = 2200; // Pause at end of text
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typingSpeed = 400; // Pause before starting new word
    }

    setTimeout(tick, typingSpeed);
  }

  tick();
}

/* ==========================================================================
   3. INTERACTIVE DEVELOPER TERMINAL
   ========================================================================== */
function initTerminal() {
  const tabs = document.querySelectorAll('.term-tab');
  const codeBox = document.getElementById('term-code-display');
  const promptBox = document.getElementById('term-cmd-prompt');
  const copyBtn = document.getElementById('btn-copy-terminal');

  const snippets = {
    profile: {
      cmd: "cat profile.json",
      raw: `{\n  "name": "Rohit Singh",\n  "role": "Data, AI & Application Engineer",\n  "status": "Available for High-Impact Roles",\n  "certifications": 5,\n  "location": "Kanpur, India (Open to Remote/Relocation)",\n  "philosophy": "Architecting resilient data lakehouses and intelligent AI agents.",\n  "contact": "rohitpsit44@gmail.com"\n}`,
      html: `{\n  <span class="json-key">"name"</span>: <span class="json-string">"Rohit Singh"</span>,\n  <span class="json-key">"role"</span>: <span class="json-string">"Data, AI & Application Engineer"</span>,\n  <span class="json-key">"status"</span>: <span class="json-string">"Available for High-Impact Roles"</span>,\n  <span class="json-key">"certifications"</span>: <span class="json-num">5</span>,\n  <span class="json-key">"location"</span>: <span class="json-string">"Kanpur, India (Open to Remote/Relocation)"</span>,\n  <span class="json-key">"philosophy"</span>: <span class="json-string">"Architecting resilient data lakehouses and intelligent AI agents."</span>,\n  <span class="json-key">"contact"</span>: <span class="json-string">"rohitpsit44@gmail.com"</span>\n}`
    },
    stack: {
      cmd: "cat stack.json",
      raw: `{\n  "data_platforms": ["Snowflake", "Databricks", "Apache Spark", "Delta Lake", "Kafka"],\n  "ai_machine_learning": ["Claude 3.7", "Generative AI", "RAG", "PyTorch", "OpenCV"],\n  "app_development": ["Python", "FastAPI", "React", "TypeScript", "Node.js", "C++"],\n  "cloud_devops": ["AWS", "Docker", "Kubernetes", "GitHub Actions", "CI/CD"]\n}`,
      html: `{\n  <span class="json-key">"data_platforms"</span>: [\n    <span class="json-string">"Snowflake"</span>, <span class="json-string">"Databricks"</span>, <span class="json-string">"Apache Spark"</span>, <span class="json-string">"Delta Lake"</span>, <span class="json-string">"Kafka"</span>\n  ],\n  <span class="json-key">"ai_machine_learning"</span>: [\n    <span class="json-string">"Claude 3.7"</span>, <span class="json-string">"Generative AI"</span>, <span class="json-string">"RAG"</span>, <span class="json-string">"PyTorch"</span>, <span class="json-string">"OpenCV"</span>\n  ],\n  <span class="json-key">"app_development"</span>: [\n    <span class="json-string">"Python"</span>, <span class="json-string">"FastAPI"</span>, <span class="json-string">"React"</span>, <span class="json-string">"TypeScript"</span>, <span class="json-string">"Node.js"</span>, <span class="json-string">"C++"</span>\n  ],\n  <span class="json-key">"cloud_devops"</span>: [\n    <span class="json-string">"AWS"</span>, <span class="json-string">"Docker"</span>, <span class="json-string">"Kubernetes"</span>, <span class="json-string">"GitHub Actions"</span>, <span class="json-string">"CI/CD"</span>\n  ]\n}`
    },
    certs: {
      cmd: "cat certs.log",
      raw: `[VERIFIED CREDENTIALS 2026]\n✓ Claude Certified Architect - Professional (CCAR-P) | Anthropic\n✓ Claude Certified Architect - Foundations (CCAR-F) | Anthropic\n✓ Claude Certified Developer - Foundations (CCDV-F) | Anthropic\n✓ Claude Certified Associate - Foundations (CCAO-F) | Anthropic\n✓ SnowPro Core Certified (COF-C02) | Snowflake Inc.`,
      html: `<span class="json-bool">[VERIFIED CREDENTIALS 2026]</span>\n<span class="json-key">✓</span> <span class="json-string">Claude Certified Architect - Professional (CCAR-P)</span> | <span class="json-num">Anthropic</span>\n<span class="json-key">✓</span> <span class="json-string">Claude Certified Architect - Foundations (CCAR-F)</span>    | <span class="json-num">Anthropic</span>\n<span class="json-key">✓</span> <span class="json-string">Claude Certified Developer - Foundations (CCDV-F)</span>    | <span class="json-num">Anthropic</span>\n<span class="json-key">✓</span> <span class="json-string">Claude Certified Associate - Foundations (CCAO-F)</span>    | <span class="json-num">Anthropic</span>\n<span class="json-key">✓</span> <span class="json-string">SnowPro Core Certified (COF-C02)</span>                  | <span class="json-num">Snowflake</span>`
    }
  };

  let activeTab = 'profile';

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeTab = tab.getAttribute('data-tab');
      if (snippets[activeTab]) {
        promptBox.textContent = `rohit@cluster:~$ ${snippets[activeTab].cmd}`;
        codeBox.innerHTML = snippets[activeTab].html;
      }
    });
  });

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const textToCopy = snippets[activeTab] ? snippets[activeTab].raw : '';
      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalHTML = copyBtn.innerHTML;
        copyBtn.innerHTML = `✓ Copied!`;
        setTimeout(() => {
          copyBtn.innerHTML = originalHTML;
        }, 2000);
      });
    });
  }
}

/* ==========================================================================
   4. PROJECT FILTERING LOGIC
   ========================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/* ==========================================================================
   5. CERTIFICATE MODAL VIEWER
   ========================================================================== */
const certDetailsData = {
  'ccar-p': {
    title: 'Claude Certified Architect - Professional',
    code: 'CCAR-P',
    issuer: 'Anthropic',
    image: 'assets/img/certs/Claude_Certified_Architect_CCAR-P_Professional.png',
    pdf: 'assets/img/certs/Claude_Certified_Architect_CCAR-P_Professional.pdf',
    verifyUrl: 'https://www.credly.com/badges/05bc8519-1d82-46b1-a327-5ba90e393772',
    description: 'Demonstrates professional-tier mastery in architecting large-scale, production-ready AI systems using Anthropic Claude models. Covers complex multi-agent orchestration, advanced prompt engineering, latency & throughput optimization, guardrails, and enterprise RAG architectures.'
  },
  'ccar-f': {
    title: 'Claude Certified Architect - Foundations',
    code: 'CCAR-F',
    issuer: 'Anthropic',
    image: 'assets/img/certs/Claude_Certified_Architect_CCAR-F_Foundations.png',
    pdf: 'assets/img/certs/Claude_Certified_Architect_CCAR-F_Foundations.pdf',
    verifyUrl: 'https://www.credly.com/badges/6f26916c-0066-46b2-aca2-3e2788a8e3a6',
    description: 'Validates architectural fundamentals for designing robust enterprise solutions with Claude, focusing on model selection, context caching, tool calling, and token efficiency.'
  },
  'ccdv-f': {
    title: 'Claude Certified Developer - Foundations',
    code: 'CCDV-F',
    issuer: 'Anthropic',
    image: 'assets/img/certs/Claude_Certified_Developer_CCDV-F_Foundations.png',
    pdf: 'assets/img/certs/Claude_Certified_Developer_CCDV-F_Foundations.pdf',
    verifyUrl: 'https://www.credly.com/badges/e1af33de-ab05-43d2-ba78-989f4e102cf3',
    description: 'Proves developer competency in integrating Anthropic Claude APIs, implementing streaming responses, structured JSON outputs, function calling, and asynchronous pipelines.'
  },
  'ccao-f': {
    title: 'Claude Certified Associate - Foundations',
    code: 'CCAO-F',
    issuer: 'Anthropic',
    image: 'assets/img/certs/Claude_Certified_Associate_CCAO-F_Foundations.png',
    pdf: 'assets/img/certs/Claude_Certified_Associate_CCAO-F_Foundations.pdf',
    verifyUrl: 'https://www.credly.com/badges/afe62a8b-6093-499f-8e2d-cec9043c4bb1',
    description: 'Foundational certification recognizing clear understanding of Anthropic Claude capabilities, safety principles, ethical AI alignment, and core usage patterns.'
  },
  'snowflake-core': {
    title: 'Snowflake SnowPro Core Certified',
    code: 'COF-C02',
    issuer: 'Snowflake Inc.',
    image: 'assets/img/certs/Snowflake_SnowPro_Core_Certified.png',
    pdf: 'assets/img/certs/Snowflake_SnowPro_Core_Certified.pdf',
    verifyUrl: 'https://achieve.snowflake.com/8cbfeb4c-6a85-4a41-8cd8-d89bf58958f9#acc.VQczvoaD',
    description: 'Industry-standard Snowflake SnowPro Core credential validating in-depth knowledge of Snowflake Cloud Data Platform architecture, Virtual Warehouses, Time Travel, Zero-Copy Cloning, Data Sharing, Micro-partitioning, and Performance Tuning.'
  }
};

function initCertModal() {
  const modal = document.getElementById('cert-modal');
  const closeBtn = document.getElementById('modal-close');
  const viewBtns = document.querySelectorAll('[data-cert-id]');

  if (!modal) return;

  viewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const certId = btn.getAttribute('data-cert-id');
      const data = certDetailsData[certId];
      if (!data) return;

      document.getElementById('modal-cert-img').src = data.image;
      document.getElementById('modal-cert-title').textContent = data.title;
      document.getElementById('modal-cert-code').textContent = data.code;
      document.getElementById('modal-cert-issuer').textContent = `Issued by: ${data.issuer}`;
      document.getElementById('modal-cert-desc').textContent = data.description;
      document.getElementById('modal-cert-verify-link').href = data.verifyUrl;
      document.getElementById('modal-cert-pdf-link').href = data.pdf;

      modal.classList.add('active');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      modal.classList.remove('active');
    }
  });
}

/* ==========================================================================
   6. COPY EMAIL & TOAST NOTIFICATION
   ========================================================================== */
function initCopyEmail() {
  const copyButtons = document.querySelectorAll('.btn-copy-email');
  const toast = document.getElementById('toast-notification');
  const email = "rohitpsit44@gmail.com";

  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(email).then(() => {
        showToast("Email copied to clipboard: " + email);
      }).catch(() => {
        showToast("Contact: " + email);
      });
    });
  });

  function showToast(msg) {
    if (!toast) return;
    const toastMsg = document.getElementById('toast-msg');
    if (toastMsg) toastMsg.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }
}

/* ==========================================================================
   7. NAVIGATION SCROLL-SPY & MOBILE MENU
   ========================================================================== */
function initNavScroll() {
  const nav = document.querySelector('.site-nav');
  const mobileToggle = document.getElementById('mobile-nav-toggle');
  const navLinksList = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    // Scroll-spy active link highlighting
    let currentId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });

  if (mobileToggle && navLinksList) {
    mobileToggle.addEventListener('click', () => {
      navLinksList.classList.toggle('mobile-open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinksList.classList.remove('mobile-open');
      });
    });
  }
}

/* ==========================================================================
   8. INTERACTIVE CONTACT FORM
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const subject = document.getElementById('form-subject').value.trim();
    const message = document.getElementById('form-message').value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    // Construct clean mailto link
    const mailtoSubject = encodeURIComponent(`Portfolio Inquiry: ${subject || 'Collaboration'} (from ${name})`);
    const mailtoBody = encodeURIComponent(`Hi Rohit,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:rohitpsit44@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    const statusEl = document.getElementById('form-status');
    if (statusEl) {
      statusEl.style.display = 'block';
      statusEl.innerHTML = `<span style="color: #10b981;">✓ Email client launched with your message! Thank you.</span>`;
    }
  });
}
