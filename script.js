'use strict';

const PROJECTS = {
  'erp-aero': {
    sector: '✈️ Aéronautique', year: '2023',
    title: 'Déploiement ERP IFS – Sous-traitant aéronautique',
    desc: "Accompagnement d'un équipementier Tier 2 (750 collaborateurs, 3 lignes de production) dans la migration de solutions hétérogènes vers IFS Applications 10. Mission couvrant le cadrage fonctionnel, le paramétrage des modules Manufacturing, Supply Chain et Finance, la conduite du changement et la formation des key-users.",
    metrics: [
      { value: '96 %',   label: 'OTD post-déploiement',    trend: '+11 pts vs baseline' },
      { value: '98.4 %', label: 'OQD (taux qualité livré)', trend: '+2.1 pts' },
      { value: '−18 %',  label: 'Délai moyen de clôture commande', trend: 'Gain opérationnel' },
      { value: '8 mois', label: 'Durée de la mission',     trend: 'Dans les temps & budget' },
    ],
    details: { titre: 'Activités principales', items: [
      'Rédaction et validation du cahier des charges fonctionnel (modules MFG, SCM, Finance)',
      'Animation de 24 ateliers de paramétrage et de recette avec les métiers',
      'Pilotage du plan de formation (62 key-users formés, 3 vagues)',
      "Suivi budgétaire du projet (budget : 1,8 M€ fictif) – respect de l'enveloppe à −2 %",
      'Gestion des incidents P1/P2 post go-live pendant la période de stabilisation',
    ]},
  },
  'lean-emballage': {
    sector: '🍃 Agro-alimentaire', year: '2022',
    title: "Chantier Lean – Ligne d'emballage agro-alimentaire",
    desc: "Optimisation complète d'une ligne de conditionnement (conserves végétales) par l'application des outils Lean Manufacturing : VSM, chantiers 5S, SMED et réduction des gaspillages. Résultats atteints en 5 mois.",
    metrics: [
      { value: '+22 %', label: 'TRS (Taux de Rendement Synthétique)', trend: 'De 61 % à 83 %' },
      { value: '−47 %', label: 'Temps de changement de série (SMED)', trend: 'De 94 min à 50 min' },
      { value: '−31 %', label: 'Rebuts & non-conformités ligne',       trend: 'vs référence N-1' },
      { value: '5',      label: 'Chantiers Kaizen menés',              trend: 'Sur 5 mois' },
    ],
    details: { titre: 'Activités principales', items: [
      'Cartographie de la chaîne de valeur (VSM) état actuel / état futur',
      'Animation de 2 chantiers 5S sur les postes de conditionnement prioritaires',
      'Chantier SMED sur la ligne de thermoformeuse (réduction de 94 min à 50 min)',
      'Mise en place de standards de travail (fiches poste, audits réguliers)',
      'Formation des équipes de production aux fondamentaux Lean (2 x 1 jour)',
    ]},
  },
  'sap-chimie': {
    sector: '🧪 Chimie / Matériaux', year: '2021',
    title: 'Migration SAP S/4HANA – Groupe chimique multi-sites',
    desc: "Pilotage MOA de la migration vers SAP S/4HANA (modules PP et QM) pour un groupe chimique de 3 sites (France ×2 + Belgique). Contexte post-fusion nécessitant une harmonisation des processus et des référentiels données.",
    metrics: [
      { value: '3',      label: 'Sites industriels harmonisés',         trend: 'FR ×2 + BE' },
      { value: '100 %',  label: 'Go-live dans les délais contractuels',  trend: 'Projet 14 mois' },
      { value: '−25 %',  label: 'Écarts de stock inventaire annuel',     trend: 'vs avant migration' },
      { value: '99.1 %', label: 'OQD après stabilisation (6 mois)',      trend: '+3.4 pts' },
    ],
    details: { titre: 'Activités principales', items: [
      'Rédaction des spécifications fonctionnelles pour les modules PP-PI (Process Industry) et QM',
      "Coordination de 3 équipes locales et d'un intégrateur SAP (offshore/nearshore)",
      'Gestion du plan de reprise des données (articles, nomenclatures, gammes)',
      'Animation du comité de pilotage mensuel (COPIL) avec les directions de site',
      'Suivi du plan de conduite du changement (80 utilisateurs finaux formés)',
    ]},
  },
  'flux-meca': {
    sector: '🔩 Mécanique de précision', year: '2020',
    title: 'Réorganisation des flux – Mécanique de précision',
    desc: "Reconfiguration complète de l'atelier de mécanique de précision (200 machines, 90 opérateurs) : passage d'une organisation en ateliers technologiques à une organisation en îlots de production, avec mise en place d'un ordonnancement Kanban et d'un MES léger.",
    metrics: [
      { value: '−34 %', label: 'Lead time moyen de fabrication',     trend: 'De 18 j à 12 j' },
      { value: '+19 %', label: 'OTD clients (livraison à date)',      trend: 'De 74 % à 93 %' },
      { value: '−28 %', label: 'En-cours de production (WIP)',        trend: 'Libération surface' },
      { value: '12 j',  label: 'Lead time moyen atteint',            trend: 'Objectif : 14 j' },
    ],
    details: { titre: 'Activités principales', items: [
      'Analyse des flux physiques et informationnels par familles de produits (technologie de groupe)',
      'Conception de la nouvelle implantation en 7 îlots de production (simulation Arena)',
      'Paramétrage et déploiement de cartes Kanban (électroniques + physiques)',
      "Sélection et intégration d'un MES léger (suivi OF, traçabilité, alertes)",
      'Accompagnement du management de proximité sur le pilotage visuel',
    ]},
  },
  'perf-logistique': {
    sector: '📦 Distribution industrielle', year: '2022',
    title: 'Plan de performance logistique – Distributeur industriel',
    desc: "Diagnostic logistique complet et plan d'actions sur 4 dépôts régionaux (Rhône-Alpes, Provence, Occitanie, Pays de la Loire) pour réduire les ruptures de stock et améliorer le taux de service client.",
    metrics: [
      { value: '95.8 %', label: 'Taux de service client (OTD)',      trend: 'De 82 % à 95.8 %' },
      { value: '−41 %',  label: 'Ruptures de stock référencées',     trend: 'vs diagnostic initial' },
      { value: '−12 %',  label: 'Coût de possession des stocks',     trend: 'Optimisation ABC' },
      { value: '4',       label: 'Dépôts optimisés',                 trend: 'En 6 mois' },
    ],
    details: { titre: 'Activités principales', items: [
      "Diagnostic de l'existant : analyse ABC/XYZ du catalogue (12 000 références)",
      'Redéfinition des paramètres de réapprovisionnement (stock de sécurité, point de commande)',
      'Mise en place de tableaux de bord logistiques hebdomadaires par dépôt',
      'Formation des responsables dépôts aux indicateurs OTD, OTIF et gestion des ruptures',
      "Rédaction du plan d'actions priorisé et suivi de la mise en œuvre sur 6 mois",
    ]},
  },
  'cadrage-erp-energie': {
    sector: '🌱 Énergies renouvelables', year: '2024',
    title: "Cadrage ERP – Fabricant d'équipements EnR",
    desc: "Étude d'opportunité et rédaction du cahier des charges ERP pour une PMI en forte croissance (×3 en CA sur 4 ans) dans le secteur des énergies renouvelables. Objectif : structurer le SI pour absorber la croissance et préparer une internationalisation.",
    metrics: [
      { value: '5',      label: 'Éditeurs ERP évalués',              trend: 'Benchmark structuré' },
      { value: '3 mois', label: 'Phase de cadrage',                  trend: 'Dans les délais' },
      { value: '140+',   label: 'Exigences fonctionnelles formalisées', trend: 'Couverture complète' },
      { value: '×3',     label: 'Croissance CA client (4 ans)',       trend: 'Contexte hypercroissance' },
    ],
    details: { titre: 'Activités principales', items: [
      'Cartographie des processus métier As-Is (Production, Achats, Finance, Commerce)',
      'Ateliers To-Be avec les directions métier pour définir les cibles fonctionnelles',
      "Rédaction du cahier des charges ERP (140 exigences fonctionnelles, 18 critères d'évaluation)",
      'Benchmark de 5 éditeurs ERP (IFS, SAP B1, Dynamics 365, Sage X3, Infor M3)',
      'Présentation de la recommandation au CODIR et accompagnement dans le choix final',
    ]},
  },
};

function createElement(tag, attrs = {}, innerHTML = '') {
  const el = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  if (innerHTML) el.innerHTML = innerHTML;
  return el;
}

(function initMobileNav() {
  const toggle = document.getElementById('navToggle');
  const nav    = document.getElementById('mainNav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
  document.addEventListener('click', e => {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();

(function initScrollspy() {
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  if (!sections.length || !navLinks.length) return;
  const observer = new IntersectionObserver(
    entries => { entries.forEach(entry => { if (entry.isIntersecting) { const id = entry.target.id; navLinks.forEach(link => { link.classList.toggle('is-active', link.getAttribute('href') === '#' + id); }); } }); },
    { rootMargin: '-40% 0px -55% 0px' }
  );
  sections.forEach(s => observer.observe(s));
})();

(function initReveal() {
  const targets = document.querySelectorAll('.about-card, .project-card, .skill-category, .cert-item, .contact-info, .contact-sectors, .timeline-item, .hero-kpis .kpi');
  targets.forEach(el => el.classList.add('reveal'));
  const observer = new IntersectionObserver(
    entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }); },
    { threshold: 0.12 }
  );
  targets.forEach(el => observer.observe(el));
})();

(function initProjectModal() {
  const overlay   = document.getElementById('projectModal');
  const closeBtn  = document.getElementById('modalClose');
  const grid      = document.getElementById('projectsGrid');
  if (!overlay || !closeBtn || !grid) return;
  const elSector  = document.getElementById('modalSector');
  const elYear    = document.getElementById('modalYear');
  const elTitle   = document.getElementById('modalTitle');
  const elDesc    = document.getElementById('modalDesc');
  const elMetrics = document.getElementById('modalMetrics');
  const elDetails = document.getElementById('modalDetails');
  let triggerEl = null;

  function populateModal(key) {
    const data = PROJECTS[key];
    if (!data) return;
    elSector.textContent = data.sector;
    elYear.textContent   = data.year;
    elTitle.textContent  = data.title;
    elDesc.textContent   = data.desc;
    elMetrics.innerHTML  = '';
    data.metrics.forEach(m => {
      const card = createElement('div', { class: 'metric-card' });
      card.innerHTML = '<span class="metric-value">' + m.value + '</span><span class="metric-label">' + m.label + '</span>' + (m.trend ? '<span class="metric-trend">' + m.trend + '</span>' : '');
      elMetrics.appendChild(card);
    });
    elDetails.innerHTML = '';
    if (data.details) {
      const h4 = createElement('h4', {}, data.details.titre);
      const ul = createElement('ul', {});
      data.details.items.forEach(item => ul.appendChild(createElement('li', {}, item)));
      elDetails.appendChild(h4);
      elDetails.appendChild(ul);
    }
  }

  function openModal(key, trigger) {
    populateModal(key);
    triggerEl = trigger;
    overlay.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => requestAnimationFrame(() => closeBtn.focus()));
  }

  function closeModal() {
    overlay.setAttribute('hidden', '');
    document.body.style.overflow = '';
    if (triggerEl) { triggerEl.focus(); triggerEl = null; }
  }

  grid.addEventListener('click', e => { const card = e.target.closest('.project-card[data-project]'); if (card) openModal(card.dataset.project, card); });
  grid.addEventListener('keydown', e => { const card = e.target.closest('.project-card[data-project]'); if (card && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openModal(card.dataset.project, card); } });
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => {
    if (overlay.hasAttribute('hidden')) return;
    if (e.key === 'Escape') { closeModal(); return; }
    if (e.key === 'Tab') {
      const focusable = Array.from(overlay.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(el => !el.hasAttribute('disabled'));
      if (!focusable.length) { e.preventDefault(); return; }
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (e.shiftKey) { if (document.activeElement === first) { e.preventDefault(); last.focus(); } }
      else { if (document.activeElement === last) { e.preventDefault(); first.focus(); } }
    }
  });
})();

(function initHeaderShadow() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 10 ? '0 4px 20px rgba(0,0,0,0.22)' : '0 2px 12px rgba(0,0,0,0.18)';
  }, { passive: true });
})();

(function syncStickyOffsets() {
  const disclaimer = document.querySelector('.disclaimer-banner');
  const header     = document.querySelector('.site-header');
  if (!disclaimer || !header) return;
  function update() { header.style.top = disclaimer.getBoundingClientRect().height + 'px'; }
  update();
  window.addEventListener('resize', update, { passive: true });
  if (typeof ResizeObserver !== 'undefined') new ResizeObserver(update).observe(disclaimer);
})();