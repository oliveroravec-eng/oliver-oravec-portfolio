/* Content and links are kept here so the visual structure stays independent of later edits. */
const PORTFOLIO = {
  email: 'olivera25@gmail.com',
  linkedin: '', // Set the verified personal profile URL to make this link visible.
  title: { sk: 'Oliver Oravec · Portfólio', en: 'Oliver Oravec · Portfolio' },
  copy: {
    sk: {
      skip: 'Preskočiť na obsah', projects: 'Projekty', about: 'O mne', contact: 'Kontakt',
      experience: 'Skúsenosti', menu: 'Menu', closeMenu: 'Zavrieť', myProjects: 'Moje projekty',
      skills: 'Zručnosti',
      hardSkills: 'Technické zručnosti',
      softSkills: 'Mäkké zručnosti',
      schoolProjects: 'Školské projekty',
      otherProjects: 'Iné projekty',
      webDevelopment: 'Vývoj webu',
      webDevelopmentDetail: 'Intranet pre Commander som postavil na SharePointe s Reactom a TypeScriptom.',
      analysisAndDesign: 'Analýza a návrh služieb',
      analysisAndDesignDetail: 'Pri onboardingu som porovnal nástroje a navrhol prototyp podľa potrieb HR, IT a manažérov.',
      contentProduction: 'Marketing a tvorba obsahu',
      contentProductionDetail: 'Pre Filter som plánoval obsah, pripravoval fotky, videá a texty a vyhodnocoval výsledky.',
      communication: 'Komunikácia',
      communicationDetail: 'Pri zbierke pre OZ Bublina sme darcom vysvetlili, čo ich príspevky pokryjú.',
      teamwork: 'Tímová spolupráca',
      teamworkDetail: 'Počas stáže v Compass Group sme v tíme pripravili videonávod, ktorý CENT používa pri práčkach.',
      responsibility: 'Zodpovednosť',
      responsibilityDetail: 'Pri intranete som mal na starosti návrh, vývoj, testovanie aj zaškolenie redaktorov.',
      commanderExperience: 'Pri nástupe nových zamestnancov som mapoval úlohy HR, IT a manažérov. Pre internú komunikáciu som navrhol a vyvinul intranet.',
      compassExperience: 'S tímom sme pripravili videonávod pre samoobslužné práčovne CENT.',
      filterExperience: 'Zastrešoval som tvorbu a plánovanie obsahu pre Instagram butiku.',
      intro: 'Študujem podnikanie na Lýceu C. S. Lewisa v Bratislave.',
      moreAbout: 'Viac o mne', intranetTitle: 'Commander Intranet',
      intranetSummary: 'Kompletný fullstack vývoj firemného intranetu na SharePointe.',
      intranetSubtitle: 'Nový firemný intranet pre Commander Services na SharePointe',
      onboardingTitle: 'Commander Onboarding Hub',
      onboardingSummary: 'Analýza nástupu zamestnancov a funkčný online prototyp.',
      bookmatchTitle: 'Martinus / BooksMatch', bookmatchSummary: 'Klikateľný prototyp, ktorý mladým čitateľom pomáha vybrať si knihu.',
      jobinoTitle: 'Jobino', jobinoSummary: 'Startupový koncept na hľadanie výpomoci v okolí.',
      bublinaTitle: 'Crowdfunding pre OZ Bublina',
      bublinaSummary: 'Na splav pre deti z centier pre deti a rodiny sme vyzbierali 1 636 €.',
      bublinaSubtitle: 'Zbierka na trojdňový splav na Malom Dunaji pre deti z centier pre deti a rodiny',
      filterTitle: 'Filter Multibrand Store',
      filterSummary: 'Kompletný marketing na sociálnych sieťach pre high-end módny butik.',
      centTitle: 'Práčovne CENT',
      centSummary: 'Videonávod na pranie a sušenie pre zákazníkov samoobslužných práčovní.',
      commanderRole: 'Podpora vedenia a HR', internship: 'Stáž',
      filterRole: 'Marketing na sociálnych sieťach',
      aboutIntro: 'Volám sa Oliver a študujem podnikanie na Lýceu C. S. Lewisa v Bratislave. Odmalička ma zaujíma, čo stojí za podnikmi a ako sa ich filozofia prejavuje v rozhodnutiach.',
      aboutApproach: 'Baví ma marketing a tvorba digitálnych produktov. Obom sa chcem ďalej venovať aj vo vlastnom podnikaní.',
      aboutClosing: 'Radšej poviem, že ešte nie je hotovo, než odovzdám niečo, za čím si nestojím.',
      backToTop: 'Späť hore', backToProjects: 'Späť na projekty', context: 'Kontext',
      projectBrief: 'Zadanie projektu', nextProject: 'Ďalší projekt',
      navLabel: 'Hlavná navigácia', mobileNavLabel: 'Mobilná navigácia',
      homeLabel: 'Oliver Oravec, úvodná stránka', languageChanged: 'Jazyk stránky: slovenčina.',
    },
    en: {
      skip: 'Skip to content', projects: 'Projects', about: 'About', contact: 'Contact',
      experience: 'Experience', menu: 'Menu', closeMenu: 'Close', myProjects: 'My projects',
      skills: 'Skills',
      hardSkills: 'Hard skills',
      softSkills: 'Soft skills',
      schoolProjects: 'School projects',
      otherProjects: 'Other projects',
      webDevelopment: 'Web development',
      webDevelopmentDetail: 'I built the Commander intranet on SharePoint using React and TypeScript.',
      analysisAndDesign: 'Research and service design',
      analysisAndDesignDetail: 'For the onboarding project, I compared tools and designed a prototype around the needs of HR, IT and managers.',
      contentProduction: 'Marketing and content production',
      contentProductionDetail: 'For Filter, I planned content, produced photos and videos, wrote copy and reviewed performance.',
      communication: 'Communication',
      communicationDetail: 'In the OZ Bublina fundraiser, we explained what the donations would pay for.',
      teamwork: 'Teamwork',
      teamworkDetail: 'During my internship at Compass Group, I worked with a team on a video guide CENT uses at its washing machines.',
      responsibility: 'Ownership',
      responsibilityDetail: 'I took responsibility for the intranet from design and development through testing and editor training.',
      commanderExperience: 'I mapped the responsibilities of HR, IT and managers when a new employee joins. I also designed and built an intranet for internal communication.',
      compassExperience: 'Our team produced a video guide for CENT’s self-service laundromats.',
      filterExperience: 'I handled content production and planning for the boutique’s Instagram.',
      intro: 'I study entrepreneurship at C. S. Lewis Lyceum in Bratislava.',
      moreAbout: 'More about me', intranetTitle: 'Commander Intranet',
      intranetSummary: 'Full-stack development of a corporate intranet on SharePoint.',
      intranetSubtitle: 'A new corporate intranet for Commander Services on SharePoint',
      intranetMeta: 'Company project · 2026',
      intranetProblemTitle: 'The problem',
      intranetProblem: 'Commander Services has around 200 employees across several divisions. The old intranet was hard to navigate, and only HR could publish content. Departments relied on email and personal contacts to share information, which often arrived late or did not reach people at all. An internal survey ranked communication between departments last across the 11 areas assessed.',
      intranetSolutionTitle: 'The solution',
      intranetSolution: 'I designed and built the new intranet as a custom SharePoint extension (SharePoint Framework, React, TypeScript), integrated with Microsoft 365 and Entra ID.',
      intranetEditorialTitle: 'Publishing workspace.',
      intranetEditorial: 'Each department can publish its own articles without waiting for HR. Editors see articles as readers will see them, with support for photos, galleries, videos and attachments.',
      intranetDirectoryTitle: 'People and organisational structure.',
      intranetDirectory: 'Search by name, department or topic, with a directory of who handles what.',
      intranetSections: 'News, events, a CEO column, an HR area, manuals and policies, and administration tools.',
      intranetBrand: 'The design follows Commander’s brand guidelines, with Commu as the face of the launch campaign.',
      intranetEventsCaption: 'Upcoming events and new colleagues on the intranet homepage.',
      intranetRoleTitle: 'What I did',
      intranetRoleBuild: 'Planned, designed and developed the full solution, from prototype to a deployment-ready package.',
      intranetRoleTest: 'Deployed and tested the solution in a SharePoint environment, including load tests and testing with everyday users.',
      intranetRoleDocs: 'Documented the architecture, data storage and roles for internal IT, and adapted the solution to its development guidelines.',
      intranetRoleTraining: 'Trained department editors and produced the “How to add an article” video tutorial.',
      intranetRoleBrand: 'Created the design system and produced videos featuring Commu.',
      intranetTutorial: 'How to add an article',
      intranetTutorialIntro: 'A Slovak-language video tutorial for department editors.',
      intranetCommu: 'The mascot for the intranet launch campaign.',
      intranetResultTitle: 'The result',
      intranetResult: 'A working intranet ready for company-wide rollout. Trained editors from each department will publish their own content.',
      intranetTech: 'Technology',
      onboardingTitle: 'Commander Onboarding Hub',
      onboardingSummary: 'Employee onboarding analysis and a working online prototype.',
      onboardingMeta: 'Commander Services · 2026',
      onboardingProcessTitle: 'Process analysis',
      onboardingProcess: 'At Commander Services, I mapped the full onboarding process, from accepting a job offer to the end of the probation period. I identified who was responsible for each step, where data had to be re-entered manually and which tasks could be automated.',
      onboardingDesignTitle: 'From design to prototype',
      onboardingDesign: 'I compared Sloneek and Personio and looked at how Power Automate could transfer data between existing systems, including Vema. I documented my findings in an internal proposal and presentation. I then designed the interface for a custom application, and our team developed it into a working online prototype.',
      onboardingDemoTitle: 'What the demo shows',
      onboardingDemo: 'The demo shows how HR, IT and managers can track new hires, tasks and deadlines, and work with documents and templates in one place. New employees have their own overview of the steps they need to complete as they join.',
      onboardingOpenDemo: 'Open the online prototype',
      bookmatchTitle: 'Martinus / BooksMatch', bookmatchSummary: 'An interactive prototype that helps young readers choose a book.',
      bookmatchMeta: 'Service Design · Lyceum × Martinus · 2026',
      bookmatchProblemTitle: 'Where readers got stuck',
      bookmatchProblem: 'Through interviews, a questionnaire and in-store observation, we found that young people often wanted to read and struggled to know where to start. With no title or genre in mind, the sheer number of options made choosing a book harder.',
      bookmatchPrototypeTitle: 'What we designed',
      bookmatchPrototype: 'We built a quiz prototype in Lovable that asks about mood, interests and the kind of reading experience someone wants. It returns a reader type and three book recommendations, each with a short explanation of why it might fit.',
      bookmatchOpenDemo: 'Try the BooksMatch prototype',
      bookmatchScreensTitle: 'Prototype screens',
      bookmatchQuizCaption: 'A quiz question with a sample answer.',
      bookmatchResultCaption: 'The reader type and three book recommendations after completing the quiz.',
      bookmatchTestingTitle: 'What testing changed',
      bookmatchTesting: 'In tests with classmates, the questions about mood and everyday life worked best. We revised the questions and added a short explanation to each recommendation.',
      jobinoTitle: 'Jobino', jobinoSummary: 'A startup concept for finding help nearby.',
      jobinoMeta: 'SPARX · C. S. Lewis Lyceum',
      jobinoProblemTitle: 'Who it would help',
      jobinoProblem: 'In the SPARX programme, David Dobrik and I developed a platform concept for people who need help nearby and for students and others who want to earn extra money on a flexible schedule. We drew on more than 30 interviews for the pitch.',
      jobinoConceptTitle: 'How it would work',
      jobinoConcept: 'Someone would post a task with its location, time and payment. They would choose a helper based on their profile, reviews and availability. The platform would release payment once the task was confirmed complete.',
      jobinoSlideCaption: 'Interface concept from the original pitch deck.',
      jobinoPitchTitle: 'From idea to pitch',
      jobinoPitch: 'We took the idea to a public pitch. We proposed a 15% fee on completed tasks and prepared a pilot plan for Bratislava, Košice and Žilina.',
      bublinaTitle: 'Crowdfunding for OZ Bublina',
      bublinaSummary: 'We raised €1,636 for a canoe trip for children in residential care.',
      bublinaSubtitle: 'Fundraising for a three-day canoe trip on the Little Danube for children in residential care',
      bublinaMeta: 'C. S. Lewis Lyceum team project · 2025',
      bublinaRaised: 'Raised',
      bublinaAmount: '€1,636',
      bublinaTarget: 'Of the original €900 goal',
      bublinaSupporters: 'Supporters',
      bublinaGoalTitle: 'Campaign goal',
      bublinaGoal: 'Our team at C. S. Lewis Lyceum launched a StartLab fundraiser for OZ Bublina. The initial €900 goal was set to cover boat and equipment hire for a three-day canoe trip on the Little Danube. Once we reached it, we added a €1,350 stretch goal to help cover an overnight stay at the campsite.',
      bublinaStartLab: 'Campaign on StartLab',
      bublinaRoleTitle: 'My role',
      bublinaRole: 'I was responsible for the campaign’s visual identity and communication strategy. We built the campaign around a specific goal and showed what each contribution would help pay for.',
      bublinaVideo: 'Watch the campaign video on YouTube',
      bublinaResultTitle: 'The result',
      bublinaResult: 'The campaign exceeded both goals. OZ Bublina held the Little Danube trip from 20 to 22 June 2025. According to the campaign report, 56 children and OZ Bublina volunteers took part, joined by six additional helpers.',
      bublinaPhotoCaption: 'Photo from the trip, published in the campaign report on StartLab.',
      filterTitle: 'Filter Multibrand Store',
      filterSummary: 'End-to-end social media marketing for a high-end fashion boutique.',
      filterMeta: 'Instagram · 21 May to 12 July 2025',
      filterRoleTitle: 'My role',
      filterRoleDescription: 'I handled visual direction, photo and video production, copywriting, content planning and performance review.',
      filterContent: 'I told the stories of C.P. Company, Brunello Cucinelli and Gran Sasso in carousels. I introduced the boutique in a dedicated post. For the summer offers, I photographed Hogan sneakers and made short videos featuring Premiata sneakers.',
      filterShowcase: 'Selected posts',
      filterArchive: 'All 17 posts on Instagram',
      filterCarousel: 'Carousel', filterReel: 'Reel', filterPhoto: 'Photo',
      filterPost1: 'Zielinski & Rozen at the boutique',
      filterPost2: 'Details from Jacob Cohën, Hogan and C.P. Company',
      filterPost3: 'The story of C.P. Company',
      filterPost4: 'Gran Sasso Spring/Summer 2025',
      filterPost5: 'Dondup denim',
      filterPost6: 'An introduction to Filter',
      filterPost7: 'Unboxing and trying on sneakers',
      filterPost8: 'Summer fragrances from Zielinski & Rozen',
      filterPost9: 'Hogan sneakers',
      filterPost10: 'Women’s Hogan sneakers',
      filterPost11: 'Premiata sneakers',
      filterPost12: 'Barba Napoli backpack',
      filterPost13: 'The story of Brunello Cucinelli',
      filterPost14: 'The Gran Sasso family story',
      filterPost15: 'Women’s summer sale',
      filterPost16: 'The last pairs of Premiata sneakers',
      filterPost17: 'Premiata sneaker sale',
      centTitle: 'CENT Laundromats',
      centSummary: 'A washing and drying video guide for self-service laundry customers.',
      centMeta: 'Internship at Compass Group',
      centWorkTitle: 'The video guide',
      centWork: 'During my internship at Compass Group, our team filmed a short guide for CENT laundromats. It shows customers how to pay by card, choose a wash cycle and use both the washer and the dryer.',
      centUseTitle: 'At the machine',
      centUse: 'CENT made the video available via QR codes on the washing machines so customers can follow the steps while doing their laundry. The network operates in Bratislava, Nitra, Galanta and Trnava.',
      centLocations: 'See CENT locations',
      centVideo: 'How to wash and dry your clothes at CENT',
      commanderRole: 'Management and HR support', internship: 'Internship',
      filterRole: 'Social media marketing',
      aboutIntro: 'I’m Oliver, and I study entrepreneurship at C. S. Lewis Lyceum in Bratislava. Since childhood, I’ve been interested in what drives businesses and how their philosophy shapes their decisions.',
      aboutApproach: 'I enjoy marketing and building digital products. I want to pursue both in a business of my own.',
      aboutClosing: 'I would rather say it is not finished yet than deliver something I cannot stand behind.',
      backToTop: 'Back to top', backToProjects: 'Back to projects', context: 'Context',
      projectBrief: 'Project brief', nextProject: 'Next project',
      navLabel: 'Main navigation', mobileNavLabel: 'Mobile navigation',
      homeLabel: 'Oliver Oravec, home', languageChanged: 'Page language: English.',
    },
  },
  alts: {
    sk: {
      intranet: 'Domovská stránka intranetu Commander.',
      intranetEvents: 'Prehľad najbližších eventov a nových kolegov na intranete Commander.',
      commuFront: 'Commu spredu.', commuAngle: 'Commu v trojštvrťovom pohľade.',
      commuSide: 'Commu zboku.', commuBack: 'Commu zozadu.',
      commuSmile: 'Portrét usmiatej Commu.', commuNeutral: 'Portrét Commu s neutrálnym výrazom.',
      onboarding: 'Prehľad nástupov a úloh v prototype Commander Onboarding Hub.',
      bookmatch: 'Úvodná obrazovka BooksMatch s tlačidlom na spustenie kvízu.',
      bookmatchQuiz: 'Prvá otázka kvízu o tom, aký deň má čitateľ za sebou, s vyplnenou ukážkovou odpoveďou.',
      bookmatchResult: 'Výsledok BooksMatch s typom Pokojný čitateľ a tromi odporúčanými knihami s vysvetlením.',
      jobino: 'Titulný slajd pitchu Jobino.',
      jobinoConceptSlide: 'Slajd Jobino znázorňujúci zadanie úlohy, výber pomocníka a platbu po potvrdení.',
      bublina: 'Titulný vizuál kampane OZ Bublina so záberom zo splavu.',
      bublinaTrip: 'Spoločná fotografia účastníkov pri kanoe.',
      filter: 'Vstup do butiku Filter na Múzejnej ulici v Bratislave.',
      cent: 'Práčka a sušička v samoobslužnej práčovni CENT.',
    },
    en: {
      intranet: 'The Commander Intranet homepage.',
      intranetEvents: 'Upcoming events and new colleagues on the Commander Intranet.',
      commuFront: 'Front view of Commu.', commuAngle: 'Three-quarter view of Commu.',
      commuSide: 'Side view of Commu.', commuBack: 'Rear view of Commu.',
      commuSmile: 'Portrait of Commu smiling.', commuNeutral: 'Portrait of Commu with a neutral expression.',
      onboarding: 'The new-hire and task dashboard in the Commander Onboarding Hub prototype.',
      bookmatch: 'BooksMatch homepage with a button to start the quiz.',
      bookmatchQuiz: 'The first quiz question about the reader’s day, with a sample answer filled in.',
      bookmatchResult: 'BooksMatch results showing the Calm Reader type and three book recommendations with explanations.',
      jobino: 'Title slide from the Jobino pitch deck.',
      jobinoConceptSlide: 'Jobino slide showing task posting, helper selection and payment after confirmation.',
      bublina: 'OZ Bublina campaign cover featuring a photograph from a canoe trip.',
      bublinaTrip: 'Group photo of the participants beside a canoe.',
      filter: 'The entrance to the Filter boutique on Múzejná Street in Bratislava.',
      cent: 'A washer and dryer in a CENT self-service laundromat.',
    },
  },
  projects: {
    intranet: {
      titleKey: 'intranetTitle', summaryKey: 'intranetSummary', subtitleKey: 'intranetSubtitle',
      image: '/assets/commander/home.png', width: 2048, height: 1106,
    },
    onboarding: {
      titleKey: 'onboardingTitle', summaryKey: 'onboardingSummary',
      image: '/assets/onboarding/dashboard.png', width: 2048, height: 1162,
    },
    bookmatch: {
      titleKey: 'bookmatchTitle', summaryKey: 'bookmatchSummary',
      image: '/assets/booksmatch/start.jpg', width: 1280, height: 720,
    },
    jobino: {
      titleKey: 'jobinoTitle', summaryKey: 'jobinoSummary',
      image: '/assets/jobino/pitch-cover.jpg', width: 1440, height: 810,
    },
    bublina: {
      titleKey: 'bublinaTitle', summaryKey: 'bublinaSummary', subtitleKey: 'bublinaSubtitle',
      image: '/assets/bublina/kampan.png', width: 800, height: 500,
    },
    filter: {
      titleKey: 'filterTitle', summaryKey: 'filterSummary',
      image: '/assets/filter/butik.jpg', width: 1440, height: 1918, portrait: true,
    },
    cent: {
      titleKey: 'centTitle', summaryKey: 'centSummary',
      image: '/assets/cent/navod-pranie-susenie.jpg', width: 720, height: 1280, hideDetailCover: true,
    },
  },
};


/* Copy added for this design (the rest comes from the original PORTFOLIO object above). */
Object.assign(PORTFOLIO.copy.sk, {
  heroFrom: 'Od', heroIdea: 'nápadu', heroTo: 'po hotový', heroProduct: 'produkt.',
  viewProjects: 'Pozrieť projekty', writeEmail: 'Napísať e-mail',
  contactAsk: 'Máte projekt, ponuku alebo otázku?',
  intranetField: 'Vývoj webu · Commander Services', onboardingField: 'Analýza a prototyp · Commander Services',
  bookmatchField: 'Service design · Lýceum × Martinus', jobinoField: 'Startup · SPARX',
  bublinaField: 'Crowdfunding · StartLab', filterField: 'Sociálne siete · Instagram', centField: 'Videonávod · Compass Group',
});
Object.assign(PORTFOLIO.copy.en, {
  heroFrom: 'From', heroIdea: 'idea', heroTo: 'to finished', heroProduct: 'product.',
  viewProjects: 'View projects', writeEmail: 'Send an email',
  contactAsk: 'Have a project, an offer or a question?',
  intranetField: 'Web development · Commander Services', onboardingField: 'Research and prototype · Commander Services',
  bookmatchField: 'Service design · Lyceum × Martinus', jobinoField: 'Startup · SPARX',
  bublinaField: 'Crowdfunding · StartLab', filterField: 'Social media · Instagram', centField: 'Video guide · Compass Group',
});
/* the picture each project shows in the list (cover crops that read at a glance) */
const STAGE = {
  intranet: { src: '/assets/commander/home.png' },
  onboarding: { src: '/assets/onboarding/dashboard.png' },
  bookmatch: { src: '/assets/booksmatch/start.jpg' },
  jobino: { src: '/assets/jobino/pitch-cover.jpg' },
  bublina: { src: '/assets/bublina/kampan.png' },
  filter: { src: '/assets/filter/cucinelli.jpg', pos: '50% 22%' },
  cent: { src: '/assets/cent/navod-pranie-susenie.jpg', pos: '50% 40%' },
};

(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const root = document.documentElement;
  const home = $('#home-view');
  const detail = $('#project-view');
  const caseStudies = $$('[data-case-project]');
  const projectIds = Object.keys(PORTFOLIO.projects);
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  let reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let language = 'sk';
  let openProject = null;
  let savedHomeScroll = 0;
  let menuOpen = false;

  /* the Slovak copy of the case studies lives in the markup; keep it before any language switch */
  $$('[data-i18n]').forEach(node => { if (!(node.dataset.i18n in PORTFOLIO.copy.sk)) PORTFOLIO.copy.sk[node.dataset.i18n] = node.textContent; });
  try { if (localStorage.getItem('oliver-portfolio-language') === 'en') language = 'en'; } catch { /* storage can be off */ }
  const t = key => PORTFOLIO.copy[language][key] ?? PORTFOLIO.copy.sk[key] ?? '';

  /* ── project list and its resting picture ── */
  const list = $('#list');
  const frame = $('#frame');
  list.innerHTML = projectIds.map((id, i) => `<li><a href="#projekt/${id}" data-k="${id}" data-focus><span class="n">${String(i + 1).padStart(2, '0')}</span><span class="t" data-i18n="${PORTFOLIO.projects[id].titleKey}"></span><span class="k" data-i18n="${id}Field"></span></a></li>`).join('');
  frame.innerHTML = projectIds.map(id => `<img data-k="${id}" src="${STAGE[id].src}" alt="" loading="lazy" decoding="async"${STAGE[id].pos ? ` style="object-position:${STAGE[id].pos}"` : ''}>`).join('');
  const stageImgs = $$('img', frame);
  stageImgs[0].classList.add('shown'); stageImgs[0].loading = 'eager';
  let current = projectIds[0], z = 2, hoverWait = 0;
  function showStage(id) {
    $$('a', list).forEach(a => a.classList.toggle('on', a.dataset.k === id));
    $('#stage-s').textContent = t(PORTFOLIO.projects[id].summaryKey);
    if (id === current) return;
    current = id;
    const img = stageImgs.find(i => i.dataset.k === id);
    img.style.zIndex = ++z;
    img.classList.remove('in', 'shown'); void img.offsetWidth; img.classList.add('in');
  }
  $$('a', list).forEach(a => {
    a.addEventListener('pointerenter', () => { clearTimeout(hoverWait); hoverWait = setTimeout(() => showStage(a.dataset.k), 70); });
    a.addEventListener('focus', () => showStage(a.dataset.k));
  });
  list.addEventListener('pointerleave', () => { clearTimeout(hoverWait); $$('a', list).forEach(a => a.classList.remove('on')); });
  if (!fine) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) showStage(e.target.dataset.k); }), { rootMargin: '-45% 0px -45% 0px' });
    $$('a', list).forEach(a => io.observe(a));
  }

  /* ── language ── */
  function buildMotto() {
    const motto = $('#motto');
    motto.innerHTML = t('aboutClosing').split(/\s+/).map(w => `<span class="w${/hotovo|finished/.test(w) ? ' hot' : ''}">${w}</span>`).join(' ');
    mottoWords = $$('.w', motto);
    onScroll();
  }
  function applyLanguage(next, announce = false) {
    language = next;
    root.lang = language;
    $$('[data-i18n]').forEach(node => { if (node.id !== 'motto') node.textContent = t(node.dataset.i18n); });
    $$('[data-i18n-label]').forEach(node => node.setAttribute('aria-label', t(node.dataset.i18nLabel)));
    $$('[data-alt]').forEach(node => { node.alt = PORTFOLIO.alts[language][node.dataset.alt] || node.alt; });
    $$('[data-lang]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === language)));
    $('.menu-btn').textContent = t(menuOpen ? 'closeMenu' : 'menu');
    $('#stage-s').textContent = t(PORTFOLIO.projects[current].summaryKey);
    buildMotto();
    document.title = openProject ? `${t(PORTFOLIO.projects[openProject].titleKey)} · Oliver Oravec` : PORTFOLIO.title[language];
    if (openProject) renderProject(openProject);
    if (announce) $('#page-status').textContent = t('languageChanged');
    try { localStorage.setItem('oliver-portfolio-language', language); } catch { /* fine */ }
  }
  $$('[data-lang]').forEach(b => b.addEventListener('click', () => { if (b.dataset.lang !== language) applyLanguage(b.dataset.lang, true); }));

  /* ── mobile menu ── */
  const menu = $('#menu'), menuBtn = $('.menu-btn');
  function setMenu(open) {
    menuOpen = open;
    menu.classList.toggle('open', open);
    menu.inert = !open;
    document.body.classList.toggle('menu-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.textContent = t(open ? 'closeMenu' : 'menu');
    if (open) $('a', menu).focus({ preventScroll: true });
  }
  menuBtn.addEventListener('click', () => setMenu(!menuOpen));
  $$('a', menu).forEach(a => a.addEventListener('click', () => setMenu(false)));
  addEventListener('keydown', e => { if (e.key === 'Escape' && menuOpen) { setMenu(false); menuBtn.focus(); } });

  /* ── project pages ── */
  function renderProject(id) {
    const project = PORTFOLIO.projects[id];
    const i = projectIds.indexOf(id);
    $('#detail-n').textContent = `${String(i + 1).padStart(2, '0')} / ${String(projectIds.length).padStart(2, '0')}`;
    $('#detail-title').textContent = t(project.titleKey);
    $('#detail-summary').textContent = t(project.subtitleKey ?? project.summaryKey);
    const cover = $('#detail-cover');
    if (cover.getAttribute('src') !== project.image) cover.src = project.image;
    cover.alt = PORTFOLIO.alts[language][id] || '';
    cover.width = project.width; cover.height = project.height;
    $('#detail-cover-wrap').hidden = Boolean(project.hideDetailCover);
    $('#detail-cover-wrap').classList.toggle('portrait', Boolean(project.portrait));
    caseStudies.forEach(s => { s.hidden = s.dataset.caseProject !== id; });
    const nextId = projectIds[(i + 1) % projectIds.length];
    $('#next-project').href = `#projekt/${nextId}`;
    $('#next-project-title').textContent = t(PORTFOLIO.projects[nextId].titleKey);
    $('#next-img').src = STAGE[nextId].src;
    $('#next-img').style.objectPosition = STAGE[nextId].pos || '';
    document.title = `${t(project.titleKey)} · Oliver Oravec`;
  }
  function parse() {
    const hash = decodeURIComponent(location.hash.slice(1));
    const cand = hash.startsWith('projekt/') ? hash.slice(8) : null;
    return { hash, cand, id: cand && PORTFOLIO.projects[cand] ? cand : null };
  }
  function route(focus) {
    const { hash, cand, id } = parse();
    if (openProject && id !== openProject) $$('video', detail).forEach(v => v.pause());
    if (id) {
      if (!openProject) savedHomeScroll = scrollY;
      openProject = id;
      home.hidden = true; detail.hidden = false;
      renderProject(id);
      scrollTo({ top: 0, behavior: 'instant' });
      $$('.rv', detail).forEach(n => n.classList.remove('in'));
      requestAnimationFrame(() => $$('.rv', detail).forEach(n => reveal.observe(n)));
      if (focus) $('#detail-title').focus({ preventScroll: true });
    } else {
      const was = Boolean(openProject);
      openProject = null;
      home.hidden = false; detail.hidden = true;
      document.title = PORTFOLIO.title[language];
      if (cand) history.replaceState(null, '', '#projekty');
      const target = document.getElementById(cand ? 'projekty' : hash || 'domov');
      if (was) {
        $$('.rv', home).forEach(n => n.classList.add('in'));
        if (hash === 'projekty' && savedHomeScroll) scrollTo({ top: savedHomeScroll, behavior: 'instant' });
        else target?.scrollIntoView({ behavior: 'instant', block: 'start' });
      } else if (target && (focus || hash)) {
        target.scrollIntoView({ behavior: reduced || !focus ? 'instant' : 'smooth', block: 'start' });
      }
    }
    if (menuOpen) setMenu(false);
    aim(null);
  }
  function go() {
    const { id } = parse();
    if (id === openProject || !document.startViewTransition || reduced) return route(true);
    const vt = document.startViewTransition(() => route(true));
    vt.ready.catch(() => {});
  }
  addEventListener('hashchange', go);
  $$('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    if (a.getAttribute('href') === location.hash) { e.preventDefault(); go(); }
  }));
  /* one reel or video at a time */
  detail.addEventListener('play', e => $$('video', detail).forEach(v => { if (v !== e.target) v.pause(); }), true);

  /* ── the focus frame: four corners that spring to whatever is being looked at ── */
  const focus = $('#focus');
  let target = null, fx = 0, fy = 0, fw = 0, fh = 0, running = false, intro = true;
  const pad = 10;
  function rectOf(el) { const r = el.getBoundingClientRect(); return { x: r.left - pad, y: r.top - pad, w: r.width + pad * 2, h: r.height + pad * 2 }; }
  function aim(el, snap) {
    target = el && el.getClientRects().length ? el : null;
    focus.classList.toggle('on', Boolean(target));
    if (!target) return;
    if (snap) { const r = rectOf(target); fx = r.x; fy = r.y; fw = r.w; fh = r.h; }
    if (!running) { running = true; requestAnimationFrame(tick); }
  }
  function tick() {
    if (!target) { running = false; return; }
    const r = rectOf(target), k = reduced ? 1 : .17;
    fx += (r.x - fx) * k; fy += (r.y - fy) * k; fw += (r.w - fw) * k; fh += (r.h - fh) * k;
    focus.style.transform = `translate3d(${fx.toFixed(1)}px,${fy.toFixed(1)}px,0)`;
    focus.style.width = `${fw.toFixed(1)}px`; focus.style.height = `${fh.toFixed(1)}px`;
    requestAnimationFrame(tick);
  }
  if (fine) {
    document.addEventListener('pointerover', e => { const el = e.target.closest('[data-focus]'); if (el) { intro = false; aim(el); } });
    document.addEventListener('pointerout', e => { const el = e.target.closest('[data-focus]'); if (el && !el.contains(e.relatedTarget)) aim(null); });
    addEventListener('scroll', () => { if (intro && target) { intro = false; aim(null); } }, { passive: true });
  }

  /* ── reveal once, the motto reads itself ── */
  const reveal = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); reveal.unobserve(e.target); } }), { threshold: .15 });
  $$('.rv').forEach((n, i) => { n.style.transitionDelay = `${(i % 3) * 80}ms`; reveal.observe(n); });
  $$('.case-row, .case-media, .campaign-stats, .filter-gallery, .filter-reels-grid, .cent-layout').forEach(n => n.classList.add('rv'));
  let mottoWords = [], queued = false;
  function onScroll() {
    queued = false;
    if (!mottoWords.length || home.hidden) return;
    const r = $('#motto').getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (innerHeight * .8 - r.top) / (r.height + innerHeight * .3)));
    const n = Math.round(p * mottoWords.length);
    mottoWords.forEach((w, i) => w.classList.toggle('on', i < n));
  }
  addEventListener('scroll', () => { if (!queued) { queued = true; requestAnimationFrame(onScroll); } }, { passive: true });

  /* ── contact ── */
  $('#email-link').href = `mailto:${PORTFOLIO.email}`;
  $('#email-link').textContent = PORTFOLIO.email;
  const linkedIn = $('#linkedin-link');
  if (/^https:\/\/(www\.)?linkedin\.com\/in\/[\w%-]+\/?$/.test(PORTFOLIO.linkedin)) { linkedIn.href = PORTFOLIO.linkedin; linkedIn.hidden = false; }
  matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', e => { reduced = e.matches; });

  /* ── start ── */
  applyLanguage(language);
  route(false);
  const ready = () => requestAnimationFrame(() => requestAnimationFrame(() => {
    root.classList.add('ready');
    if (fine && !openProject && scrollY < 50) {
      setTimeout(() => { if (intro) aim($('#w-idea'), true); }, 900);
      setTimeout(() => { if (intro) aim($('#w-product')); }, 1900);
    }
  }));
  Promise.race([document.fonts.ready, new Promise(r => setTimeout(r, 1200))]).then(ready);
})();
