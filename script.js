// ===== i18n =====
const I18N_EN = {
  "nav-about": '<span class="nav-index">01.</span> about',
  "nav-exp": '<span class="nav-index">02.</span> experience',
  "nav-skills": '<span class="nav-index">03.</span> skills',
  "nav-projects": '<span class="nav-index">04.</span> projects',
  "nav-contact": '<span class="nav-index">05.</span> contact',
  "hero-hello": "Hi, I'm",
  "hero-desc":
    'Cybersecurity engineer at <strong>EPITA</strong>, apprentice at ' +
    "<strong>Cyber Test Systems</strong>. Passionate about offensive security, " +
    "networks and tool development.",
  "btn-see-projects": "View my projects",
  "btn-contact-me": "Contact me",
  "btn-cv": "📄 Download my CV",
  "title-about": '<span class="section-index mono">01.</span> About',
  "title-exp": '<span class="section-index mono">02.</span> Experience',
  "title-skills": '<span class="section-index mono">03.</span> Skills',
  "title-projects": '<span class="section-index mono">04.</span> Projects',
  "title-contact": '<span class="section-index mono">05.</span> Contact',
  "about-p1":
    'My name is Lucas, I\'m <span id="age-inline"></span> years old and I\'m an ' +
    "engineering student in <strong>cybersecurity at EPITA</strong>, after a " +
    "bachelor's degree (BUT) in computer science at Sorbonne Paris Nord. Since " +
    "October 2022, I've been an apprentice at <strong>Cyber Test Systems</strong>.",
  "about-p2":
    "What drives me: understanding how systems work — and how they break. " +
    "Between pentesting, network analysis and tool development, I enjoy " +
    "building as much as breaking.",
  "fact-birth": '30/08/2003 (<span id="age"></span> y/o)',
  "fact-school": "EPITA — Cybersecurity engineering",
  "fact-uptime": "apprenticeship since Oct 2022",
  "fact-status": "● available",
  "cts-badge": "2022 — today",
  "cts-title": 'Cybersecurity engineer <span class="at">@</span> Cyber Test Systems',
  "cts-sub": "Apprenticeship · since October 2022",
  "cts-redacted":
    '<span class="prompt">$</span> cat missions.txt<br>' +
    '<span class="redacted-out">cat: missions.txt: Permission denied — 🔒 confidential</span>',
  "epita-badge": "2024 — today",
  "epita-title": 'Cybersecurity engineering cycle <span class="at">@</span> EPITA',
  "epita-sub": "Computer science engineering school · Paris",
  "epita-list":
    "<li>Offensive security: pentesting, attack techniques, reverse engineering, forensics</li>" +
    "<li>Defensive security: secure development, web security, standards &amp; cyber crisis management</li>" +
    "<li>Cryptology, AI for cybersecurity, networks &amp; systems</li>" +
    "<li>Major C system projects: 42SH (full shell), kernel</li>",
  "epita-tags":
    '<span class="tag">Pentest</span><span class="tag">Reverse</span>' +
    '<span class="tag">Kernel</span><span class="tag">Crypto</span>',
  "but-title": 'BUT in Computer Science <span class="at">@</span> Sorbonne Paris Nord',
  "but-sub": "Sorbonne Paris Nord University",
  "but-list":
    "<li>Development, networks, systems and databases</li>" +
    "<li>Started the apprenticeship at Cyber Test Systems in October 2022</li>",
  "but-tags":
    '<span class="tag">Python</span><span class="tag">Web</span>' +
    '<span class="tag">SQL</span><span class="tag">Networks</span>',
  "skill1-title": "Security",
  "skill1-list":
    "<li>Pentesting &amp; security audits</li><li>Reverse engineering</li>" +
    "<li>Forensics</li><li>Web security: attacks &amp; defenses</li>" +
    "<li>Cryptography</li><li>Cyber crisis management</li>",
  "skill2-title": "Development",
  "skill2-list":
    "<li>C — 42SH, kernel</li><li>Python</li><li>Java / C++ / JS</li>" +
    "<li>Assembly</li><li>Secure development</li>" +
    "<li>Algorithms &amp; data structures</li>",
  "skill3-title": "Networks &amp; systems",
  "skill3-list":
    "<li>TCP/IP, OSI model, LAN</li><li>Linux / Unix</li>" +
    "<li>Operating systems &amp; kernel</li><li>Windows security</li>" +
    "<li>Virtualization</li><li>Wireshark, nmap…</li>",
  "pe-title": 'Pacific Endeavor <span class="at">·</span> Instructor',
  "pe-sub": "Multinational cyber exercise · Asia-Pacific region",
  "pe-desc":
    "Pacific Endeavor brings together armed forces and stakeholders from the " +
    "Asia-Pacific region around cybersecurity and communications " +
    "interoperability. I took part as an <strong>instructor</strong> in the " +
    "<strong>2023</strong> and <strong>2024</strong> editions.",
  "pe-list":
    "<li>Delivered several training modules</li>" +
    "<li>Hands-on support for international participants</li>" +
    "<li>Ran cybersecurity exercises in real-world conditions</li>",
  "pe-tags":
    '<span class="tag">Training</span><span class="tag">Cyberdefense</span>' +
    '<span class="tag">Networks</span><span class="tag">International</span>',
  "eu-badge": "June 2024 · Paris",
  "eu-title": 'Eurosatory 2024 <span class="at">·</span> Exhibitor',
  "eu-sub": "International defence and security exhibition",
  "eu-desc":
    "Eurosatory is the world's largest defence and security exhibition. With " +
    "<strong>Cyber Test Systems</strong>, I took part in assembling the " +
    "<strong>CTS-CTL</strong> (Cyber Test Systems Cyber Test Lab) and presented both the company " +
    "and the lab on the booth.",
  "eu-list":
    "<li>Helped assemble the CTS-CTL (Cyber Test Lab)</li>" +
    "<li>Presented Cyber Test Systems as a whole</li>" +
    "<li>Demonstrated the CTS-CTL to visitors and delegations</li>",
  "eu-tags":
    '<span class="tag">Cyberdefense</span><span class="tag">CTS-CTL</span>' +
    '<span class="tag">Demos</span><span class="tag">Trade show</span>',
  "eu-link": "read the Pôle d'Excellence Cyber article →",
  "p42-badge": "1 month · team project",
  "p42-title": '42SH <span class="at">·</span> UNIX shell in C',
  "p42-desc":
    "One month to rebuild a complete terminal in C: lexer, parser, execution, " +
    "redirections, builtins. EPITA's iconic system project.",
  "pk-badge": "C · low-level",
  "pk-title": 'Kernel project <span class="at">·</span> OS from scratch',
  "pk-desc":
    "Rebuilding an operating system kernel from scratch: boot, memory " +
    "management, interrupts. Understanding the machine where it all begins.",
  "contact-cmd":
    '<span class="prompt">$</span> ping lucas.aguetai.fr ' +
    '<span class="status-ok">— 0% packet loss, I reply fast.</span>',
  "contact-p": "A project, an opportunity, a security question? Drop me a line.",
  "footer-line":
    '<span class="prompt">$</span> echo "© <span id="year"></span> Lucas Aguetaï — built with ❤️ and lots of coffee"',
};

const PAGE_TITLES = {
  fr: "Lucas Aguetaï — Ingénieur Cybersécurité",
  en: "Lucas Aguetaï — Cybersecurity Engineer",
};

// le français est la source : on le capture depuis le HTML au chargement
const I18N_FR = {};
document.querySelectorAll("[data-i18n]").forEach((el) => {
  I18N_FR[el.dataset.i18n] = el.innerHTML;
});

let currentLang = localStorage.getItem("lang") === "en" ? "en" : "fr";

function fillYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

function fillAge() {
  const birth = new Date(2003, 7, 30); // 30/08/2003
  const now = new Date();
  let age = now.getFullYear() - birth.getFullYear();
  if (now.getMonth() < birth.getMonth() ||
      (now.getMonth() === birth.getMonth() && now.getDate() < birth.getDate())) {
    age--;
  }
  for (const id of ["age", "age-inline"]) {
    const el = document.getElementById(id);
    if (el) el.textContent = age;
  }
}

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;
  document.title = PAGE_TITLES[lang];
  const dict = lang === "fr" ? I18N_FR : I18N_EN;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const html = dict[el.dataset.i18n];
    if (html !== undefined) el.innerHTML = html;
  });
  document.querySelectorAll("#lang-toggle [data-lang]").forEach((s) => {
    s.classList.toggle("active", s.dataset.lang === lang);
  });
  fillYear();
  fillAge();
  renderPrintedTerminal();
}

document.getElementById("lang-toggle").addEventListener("click", () => {
  applyLang(currentLang === "fr" ? "en" : "fr");
});

// ===== Effet de frappe sur le rôle =====
const ROLES = {
  fr: [
    "Ingénieur cybersécurité",
    "Étudiant @ EPITA",
    "Alternant @ Cyber Test Systems",
  ],
  en: [
    "Cybersecurity engineer",
    "Student @ EPITA",
    "Apprentice @ Cyber Test Systems",
  ],
};
const typedEl = document.getElementById("typed-role");
let roleIndex = 0, charIndex = 0, deleting = false;

function typeLoop() {
  const roles = ROLES[currentLang];
  roleIndex = roleIndex % roles.length;
  const current = roles[roleIndex];
  if (charIndex > current.length) {
    // la langue a changé pour un texte plus court : on repart en effacement
    charIndex = current.length;
    deleting = true;
  }
  if (!deleting) {
    charIndex++;
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1800);
    } else {
      setTimeout(typeLoop, 55 + Math.random() * 60);
    }
  } else {
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeLoop, 350);
    } else {
      setTimeout(typeLoop, 28);
    }
  }
  typedEl.textContent = current.slice(0, charIndex);
}

// ===== Terminal animé =====
const TERMINAL_LINES = {
  fr: [
    { html: '<span class="t-prompt">lucas@epita:~$</span> <span class="t-cmd">whoami</span>', delay: 400 },
    { html: '<span class="t-out">Lucas Aguetaï — Ingénieur cybersécurité</span>', delay: 250 },
    { html: '<span class="t-prompt">lucas@epita:~$</span> <span class="t-cmd">cat skills.txt</span>', delay: 700 },
    { html: '<span class="t-out">[ pentest, réseaux, python, C, linux, CTF ]</span>', delay: 250 },
    { html: '<span class="t-prompt">lucas@epita:~$</span> <span class="t-cmd">nmap -sV lucas.aguetai.fr</span>', delay: 800 },
    { html: '<span class="t-out">PORT     STATE  SERVICE</span>', delay: 200 },
    { html: '<span class="t-out">22/tcp   open   motivation</span>', delay: 150 },
    { html: '<span class="t-out">443/tcp  open   compétences <span class="t-accent">(TLS 1.3)</span></span>', delay: 150 },
    { html: '<span class="t-out">1337/tcp open   créativité</span>', delay: 150 },
    { html: '<span class="t-prompt">lucas@epita:~$</span> <span class="t-cmd">sudo ./hire_me.sh</span>', delay: 900 },
    { html: '<span class="t-out">[<span class="status-ok">OK</span>] Contact disponible → <span class="t-accent">lucas@aguetai.fr</span></span>', delay: 300 },
    { html: '<span class="t-prompt">lucas@epita:~$</span> <span class="cursor-blink">▊</span>', delay: 300 },
  ],
  en: [
    { html: '<span class="t-prompt">lucas@epita:~$</span> <span class="t-cmd">whoami</span>', delay: 400 },
    { html: '<span class="t-out">Lucas Aguetaï — Cybersecurity engineer</span>', delay: 250 },
    { html: '<span class="t-prompt">lucas@epita:~$</span> <span class="t-cmd">cat skills.txt</span>', delay: 700 },
    { html: '<span class="t-out">[ pentest, networks, python, C, linux, CTF ]</span>', delay: 250 },
    { html: '<span class="t-prompt">lucas@epita:~$</span> <span class="t-cmd">nmap -sV lucas.aguetai.fr</span>', delay: 800 },
    { html: '<span class="t-out">PORT     STATE  SERVICE</span>', delay: 200 },
    { html: '<span class="t-out">22/tcp   open   motivation</span>', delay: 150 },
    { html: '<span class="t-out">443/tcp  open   skills <span class="t-accent">(TLS 1.3)</span></span>', delay: 150 },
    { html: '<span class="t-out">1337/tcp open   creativity</span>', delay: 150 },
    { html: '<span class="t-prompt">lucas@epita:~$</span> <span class="t-cmd">sudo ./hire_me.sh</span>', delay: 900 },
    { html: '<span class="t-out">[<span class="status-ok">OK</span>] Contact available → <span class="t-accent">lucas@aguetai.fr</span></span>', delay: 300 },
    { html: '<span class="t-prompt">lucas@epita:~$</span> <span class="cursor-blink">▊</span>', delay: 300 },
  ],
};

const termBody = document.getElementById("terminal-body");
let lineIndex = 0;

function printLine() {
  const lines = TERMINAL_LINES[currentLang];
  if (lineIndex >= lines.length) return;
  const div = document.createElement("div");
  div.innerHTML = lines[lineIndex].html;
  termBody.appendChild(div);
  lineIndex++;
  setTimeout(printLine, lines[lineIndex - 1].delay);
}

// re-rend instantanément les lignes déjà affichées (utilisé au changement de langue)
function renderPrintedTerminal() {
  const lines = TERMINAL_LINES[currentLang];
  termBody.innerHTML = "";
  for (let i = 0; i < lineIndex; i++) {
    const div = document.createElement("div");
    div.innerHTML = lines[i].html;
    termBody.appendChild(div);
  }
}

// lancer le terminal quand il devient visible
const termObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    printLine();
    termObserver.disconnect();
  }
}, { threshold: 0.3 });
termObserver.observe(document.getElementById("terminal"));

// ===== Initialisation langue + compteurs =====
if (currentLang === "en") {
  applyLang("en");
} else {
  fillYear();
  fillAge();
}
typeLoop();

// ===== Reveal au scroll =====
const revealObserver = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  }
}, { threshold: 0.12 });

document.querySelectorAll(".section .card, .section-title, .timeline-item, .pe-card").forEach((el) => {
  el.classList.add("reveal");
  revealObserver.observe(el);
});

// ===== Menu mobile =====
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open);
});
navLinks.addEventListener("click", (e) => {
  if (e.target.closest("a")) {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

// ===== Pluie matrix discrète =====
const canvas = document.getElementById("matrix-canvas");
const ctx = canvas.getContext("2d");
const chars = "01アイウエオカキクケコサシスセソ<>/{}[]$#";
let columns, drops;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  columns = Math.floor(canvas.width / 18);
  drops = Array(columns).fill(0).map(() => Math.floor(Math.random() * -50));
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function drawMatrix() {
  ctx.fillStyle = "rgba(7, 9, 15, 0.12)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = "13px 'JetBrains Mono', monospace";
  for (let i = 0; i < columns; i++) {
    const char = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillStyle = Math.random() > 0.985 ? "#67e8f9" : "rgba(74, 222, 128, 0.55)";
    ctx.fillText(char, i * 18, drops[i] * 18);
    if (drops[i] * 18 > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }
}
if (!reducedMotion) setInterval(drawMatrix, 66);
