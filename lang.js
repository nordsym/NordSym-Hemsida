/**
 * NordSym Language System
 * Auto-detects user language and translates site content
 * Supports: Svenska (sv) | English (en)
 */

const NordSymLang = {
  // Current language
  current: 'sv',

  // Translations database
  translations: {
    sv: {
      // Meta & Title
      metaTitle: 'NordSym AB - Bygg bort begränsningar',
      metaDescription: 'NordSym AB är en byrå för systemautomation och AI-arkitektur. NordSym optimerar er verksamhet för AEO (Answer Engine Optimization) och bygger intelligenta ekosystem.',
      metaKeywords: 'Systemautomation Sverige, intelligenta system, AEO, GEO, AI-arkitektur, digital transformation, NordSym',

      // Hero Section
      heroTitle: 'Bygg bort begränsningar',
      heroSubtitle: 'NordSym designar intelligent mjukvara och bygger digitala verktyg som <span class="animate-emphasis relative inline-block px-2 py-0.5 mx-1 bg-nord-sym-cyan text-nord-sym-deep-space-blue font-bold text-sm md:text-base rounded shadow-[0_0_15px_rgba(0,212,255,0.5)] border border-white/20 align-middle my-1">FAKTISKT</span> gör skillnad.',
      btnBookCall: 'Boka Strategisamtal',
      btnRnD: 'R&D',
      labelMicroSaaS: 'MICRO-SAAS',
      labelIntelligentArch: 'INTELLIGENT ARKITEKTUR',
      labelIntelligentAuto: 'INTELLIGENT AUTOMATION',
      placeholderAsk: 'Fråga NordSym...',
      btnSend: 'Skicka',
      labelActiveSession: 'Aktiv session',

      // Product Showcase
      showcaseTitle: 'Operativsystemet i <span class="section-title-accent">Action</span>',
      showcaseSubtitle: 'Inga rökridåer. Bara ren, funktionell intelligens.',
      btnPrevSystem: 'Föregående system',
      btnNextSystem: 'Nästa system',

      // Products
      productFlowVault: 'FlowVault',
      productFlowVaultDesc: 'Världens största n8n Flow-bibliotek',
      productGenPRD: 'GenPRD',
      productGenPRDDesc: 'AI-driven specifikationsgenerator',
      productAEO: 'AEO & GEO',
      productAEODesc: 'AI-sökoptimering för moderna sökmotorer',
      productAEOPrice: '1 999 kr/mån',

      // Services Section
      labelServices: 'TJÄNSTER',
      servicesTitle: 'Intelligent mjukvara anpassad efter er verksamhet',

      // Pricing - MLP
      pricingMLPTitle: 'MINIMUM LOVABLE PRODUCT',
      pricingMLPPrice: '75k',
      pricingMLPCurrency: 'SEK',
      pricingMLPDesc: 'Slipp standardlösningar som inte passar. Skräddarsydda verktyg som löser era specifika problem exakt så som ni vill ha det.',
      pricingMLPFeature1: 'Anpassad kod',
      pricingMLPFeature2: 'Exakt Lösning',
      pricingMLPBtn: 'Starta Pilot',
      pricingMLPNote: 'Exakt arkitektur definieras tillsammans med kund',

      // Pricing - Operating System
      pricingOSTitle: 'OPERATIVSYSTEM',
      pricingOSPrice: '250k',
      pricingOSCurrency: 'SEK',
      pricingOSDesc: 'En skräddarsydd mjukvaruplattform som blir bolagets hjärna. Den samlar er data, kopplar ihop systemen och låter AI agera autonomt – men ger er full kontroll där mänskligt omdöme krävs.',
      pricingOSFeature1: 'Data-Hub',
      pricingOSFeature2: 'AI-Beslut',
      pricingOSFeature3: 'Kontroll',
      pricingOSLink: 'Behöver ni en ritning? <a href="https://genprd.se" target="_blank" rel="noopener noreferrer" class="text-nord-sym-cyan hover:text-white transition-colors underline decoration-dotted underline-offset-4">Testa GenPRD</a>',
      pricingOSBtn: 'Diskutera Behov',

      // Pricing - Enterprise
      pricingEnterpriseTitle: 'STÖRRE PROJEKT',
      pricingEnterprisePrice: '500k+',
      pricingEnterpriseCurrency: 'SEK',
      pricingEnterpriseDesc: 'För komplexa behov där standardlösningar inte räcker. Vi går in som teknisk partner och definierar leverans och omfattning helt baserat på ert unika scope och era affärsmål.',
      pricingEnterpriseFeature1: 'Strategi',
      pricingEnterpriseFeature2: 'Arkitektur',
      pricingEnterpriseFeature3: 'AI-Orkestrering',
      pricingEnterpriseBtn: 'Diskutera Behov',

      // Support
      supportTitle: '<strong>Drift & Förvaltning:</strong> 15k SEK/mån.',
      supportDesc: 'Det är här partnerskapet börjar. NordSym garanterar driften, utvecklar nya features och växer med er verksamhet.',

      // Founder
      founderName: 'Gustav Hemmingsson',
      founderTitle: 'Grundare',

      // FAQ
      faqTitle: 'Vanliga frågor',
      faqQ1: 'Vad får vi för investeringen?',
      faqA1: 'Konkreta resultat i produktion, ofta inom 4-8 veckor. Vi fokuserar på snabb "time-to-value" så att ni ser mätbar avkastning direkt, istället för långdragna förstudier.',
      faqQ2: 'Äger vi koden?',
      faqA2: 'Det beror på uppdraget. Skräddarsydd affärslogik äger ni oftast, medan generella plattformskomponenter licensieras. Vi anpassar äganderätten helt efter era önskemål.',
      faqQ3: 'Kan ni integrera med våra gamla system?',
      faqA3: 'Absolut. Bryggor byggs mellan moderna AI-modeller och era befintliga affärssystem (ERP, CRM), oavsett ålder.',
      faqQ4: 'Vad händer efter leverans?',
      faqA4: 'NordSym erbjuder avtal för drift och förvaltning. Systemet övervakas proaktivt, säkerhetsuppdateringar hanteras och era AI-modeller hålls alltid uppdaterade.',

      // R&D Section
      labelRnD: 'R&D',
      rndTitle: 'Gaming + AI + Three.js',
      rndSubtitle: 'Här experimenterar vi med WebGL och AI. Vi testar gränserna för vad som är möjligt att köra direkt i en webbläsare, med fokus på spelmekanik och interaktiva gränssnitt.',
      rndCard1Title: 'Varför Three.js?',
      rndCard1Desc: 'Traditionell 3D kräver tunga nedladdningar. Med Three.js och AI kan vi generera innehåll direkt i webbläsaren ("procedurellt"). Det ger snabba, lättviktiga upplevelser tillgängliga överallt.',
      rndCard2Title: 'Prova Tekniken',
      rndCard2Desc: 'Detta är en live-demonstration. Gå in i verkstaden för att rotera objektet, byta visuella teman och testa fysikmotorn i realtid.',
      rndCard2Btn: 'Starta',
      rndCard3Title: 'Gaming R&D',
      rndCard3Desc: 'AI-genererade spel är en sektor som växer snabbt.',
      rndCard3Link: 'Följ projektet →',

      // Contact Form
      contactTitle: 'Diskutera ert Case',
      contactSubtitle: 'Beskriv utmaningen ni står inför. NordSym återkommer med ett konkret förslag på hur vi kan bygga bort problemet.',
      contactFormTitle: 'Kontaktinformation',
      labelName: 'Ditt Namn',
      labelCompany: 'Företagsnamn',
      labelEmail: 'E-post',
      labelPhone: 'Telefon',
      labelChallenge: 'Beskriv utmaningen',
      placeholderChallenge: 'Vad hindrar er från att växa? Manuella flöden, datakaos eller saknade integrationer?',
      btnNext: 'Nästa',
      btnPrev: 'Föregående',
      btnSubmit: 'Skicka',
    },

    en: {
      // Meta & Title
      metaTitle: 'NordSym AB - Build Away Limitations',
      metaDescription: 'NordSym AB is an agency for system automation and AI architecture. We optimize your operations for AEO (Answer Engine Optimization) and build intelligent ecosystems.',
      metaKeywords: 'System automation, intelligent systems, AEO, GEO, AI architecture, digital transformation, NordSym',

      // Hero Section
      heroTitle: 'Build Away <br class="md:hidden"> Limitations',
      heroSubtitle: 'NordSym designs intelligent software and builds digital tools that <span class="animate-emphasis relative inline-block px-2 py-0.5 mx-1 bg-nord-sym-cyan text-nord-sym-deep-space-blue font-bold text-sm md:text-base rounded shadow-[0_0_15px_rgba(0,212,255,0.5)] border border-white/20 align-middle my-1">ACTUALLY</span> make a difference.',
      btnBookCall: 'Book Strategy Call',
      btnRnD: 'R&D',
      labelMicroSaaS: 'MICRO-SAAS',
      labelIntelligentArch: 'INTELLIGENT ARCHITECTURE',
      labelIntelligentAuto: 'INTELLIGENT AUTOMATION',
      placeholderAsk: 'Ask NordSym...',
      btnSend: 'Send',
      labelActiveSession: 'Active session',

      // Product Showcase
      showcaseTitle: 'The Operating System in <span class="section-title-accent">Action</span>',
      showcaseSubtitle: 'No smoke and mirrors. Just pure, functional intelligence.',
      btnPrevSystem: 'Previous system',
      btnNextSystem: 'Next system',

      // Products
      productFlowVault: 'FlowVault',
      productFlowVaultDesc: 'World\'s largest n8n Flow library',
      productGenPRD: 'GenPRD',
      productGenPRDDesc: 'AI-powered specification generator',
      productAEO: 'AEO & GEO',
      productAEODesc: 'AI search optimization for modern search engines',
      productAEOPrice: '$199/month',

      // Services Section
      labelServices: 'SERVICES',
      servicesTitle: 'Intelligent software tailored to your business',

      // Pricing - MLP
      pricingMLPTitle: 'MINIMUM LOVABLE PRODUCT',
      pricingMLPPrice: '$7.5k',
      pricingMLPCurrency: 'USD',
      pricingMLPDesc: 'Skip one-size-fits-all solutions. Custom-built tools that solve your specific problems exactly the way you want them.',
      pricingMLPFeature1: 'Custom Code',
      pricingMLPFeature2: 'Exact Solution',
      pricingMLPBtn: 'Start Pilot',
      pricingMLPNote: 'Exact architecture defined together with client',

      // Pricing - Operating System
      pricingOSTitle: 'OPERATING SYSTEM',
      pricingOSPrice: '$25k',
      pricingOSCurrency: 'USD',
      pricingOSDesc: 'A custom software platform that becomes your company\'s brain. It centralizes your data, connects your systems, and lets AI act autonomously – while giving you full control where human judgment is needed.',
      pricingOSFeature1: 'Data Hub',
      pricingOSFeature2: 'AI Decisions',
      pricingOSFeature3: 'Control',
      pricingOSLink: 'Need a blueprint? <a href="https://genprd.se" target="_blank" rel="noopener noreferrer" class="text-nord-sym-cyan hover:text-white transition-colors underline decoration-dotted underline-offset-4">Try GenPRD</a>',
      pricingOSBtn: 'Discuss Needs',

      // Pricing - Enterprise
      pricingEnterpriseTitle: 'LARGER PROJECTS',
      pricingEnterprisePrice: '$50k+',
      pricingEnterpriseCurrency: 'USD',
      pricingEnterpriseDesc: 'For complex needs where standard solutions fall short. We act as your technical partner and define delivery and scope entirely based on your unique requirements and business goals.',
      pricingEnterpriseFeature1: 'Strategy',
      pricingEnterpriseFeature2: 'Architecture',
      pricingEnterpriseFeature3: 'AI Orchestration',
      pricingEnterpriseBtn: 'Discuss Needs',

      // Support
      supportTitle: '<strong>Operations & Maintenance:</strong> $1.5k/month',
      supportDesc: 'This is where the partnership begins. NordSym guarantees operations, develops new features, and grows with your business.',

      // Founder
      founderName: 'Gustav Hemmingsson',
      founderTitle: 'Founder',

      // FAQ
      faqTitle: 'Frequently Asked Questions',
      faqQ1: 'What do we get for our investment?',
      faqA1: 'Concrete results in production, often within 4-8 weeks. We focus on rapid "time-to-value" so you see measurable ROI immediately, instead of lengthy feasibility studies.',
      faqQ2: 'Do we own the code?',
      faqA2: 'It depends on the project. You typically own custom business logic, while general platform components are licensed. We tailor ownership rights entirely to your preferences.',
      faqQ3: 'Can you integrate with our legacy systems?',
      faqA3: 'Absolutely. We build bridges between modern AI models and your existing business systems (ERP, CRM), regardless of age.',
      faqQ4: 'What happens after delivery?',
      faqA4: 'NordSym offers operations and maintenance contracts. The system is proactively monitored, security updates are handled, and your AI models are always kept up-to-date.',

      // R&D Section
      labelRnD: 'R&D',
      rndTitle: 'Gaming + AI + Three.js',
      rndSubtitle: 'We experiment with WebGL and AI here. We test the boundaries of what\'s possible to run directly in a browser, focusing on game mechanics and interactive interfaces.',
      rndCard1Title: 'Why Three.js?',
      rndCard1Desc: 'Traditional 3D requires heavy downloads. With Three.js and AI, we can generate content directly in the browser ("procedurally"). This delivers fast, lightweight experiences accessible anywhere.',
      rndCard2Title: 'Try the Technology',
      rndCard2Desc: 'This is a live demonstration. Enter the workshop to rotate the object, switch visual themes, and test the physics engine in real-time.',
      rndCard2Btn: 'Start',
      rndCard3Title: 'Gaming R&D',
      rndCard3Desc: 'AI-generated games are a rapidly growing sector.',
      rndCard3Link: 'Follow the project →',

      // Contact Form
      contactTitle: 'Discuss Your Case',
      contactSubtitle: 'Describe the challenge you\'re facing. NordSym will respond with a concrete proposal on how we can build away the problem.',
      contactFormTitle: 'Contact Information',
      labelName: 'Your Name',
      labelCompany: 'Company Name',
      labelEmail: 'Email',
      labelPhone: 'Phone',
      labelChallenge: 'Describe the challenge',
      placeholderChallenge: 'What\'s preventing you from growing? Manual workflows, data chaos, or missing integrations?',
      btnNext: 'Next',
      btnPrev: 'Previous',
      btnSubmit: 'Submit',
    }
  },

  /**
   * Initialize language system
   * Auto-detects user language or uses stored preference
   */
  init() {
    // Check localStorage first
    const stored = localStorage.getItem('nordsym-lang');
    if (stored && (stored === 'sv' || stored === 'en')) {
      this.current = stored;
    } else {
      // Auto-detect from browser
      const browserLang = navigator.language || navigator.userLanguage;
      this.current = browserLang.startsWith('sv') ? 'sv' : 'en';
      localStorage.setItem('nordsym-lang', this.current);
    }

    // Apply translations
    this.apply();

    // Update HTML lang attribute
    document.documentElement.lang = this.current;
  },

  /**
   * Switch language and save preference
   */
  switch(lang) {
    if (lang !== 'sv' && lang !== 'en') return;
    this.current = lang;
    localStorage.setItem('nordsym-lang', lang);
    this.apply();
    document.documentElement.lang = lang;
  },

  /**
   * Apply translations to page
   */
  apply() {
    const t = this.translations[this.current];

    // Update meta tags
    document.title = t.metaTitle;
    this.updateMeta('description', t.metaDescription);
    this.updateMeta('keywords', t.metaKeywords);
    this.updateMeta('og:title', t.metaTitle, 'property');
    this.updateMeta('og:description', t.metaDescription, 'property');
    this.updateMeta('twitter:title', t.metaTitle);
    this.updateMeta('twitter:description', t.metaDescription);

    // Update locale
    this.updateMeta('og:locale', this.current === 'sv' ? 'sv_SE' : 'en_US', 'property');

    // Apply translations to DOM elements
    this.translateElements(t);
  },

  /**
   * Update meta tag content
   */
  updateMeta(name, content, attr = 'name') {
    let meta = document.querySelector(`meta[${attr}="${name}"]`);
    if (meta) {
      meta.setAttribute('content', content);
    }
  },

  /**
   * Translate DOM elements using intelligent text matching
   */
  translateElements(t) {
    // Translation map: Swedish → Translation key
    const textMap = {
      // Hero
      'Bygg bort begränsningar': 'heroTitle',
      'Boka Strategisamtal': 'btnBookCall',
      'Fråga NordSym...': 'placeholderAsk',
      'Skicka': 'btnSend',
      'Aktiv session': 'labelActiveSession',
      'MICRO-SAAS': 'labelMicroSaaS',
      'INTELLIGENT ARKITEKTUR': 'labelIntelligentArch',
      'INTELLIGENT AUTOMATION': 'labelIntelligentAuto',

      // Showcase
      'Operativsystemet i': 'showcaseTitle',
      'Inga rökridåer. Bara ren, funktionell intelligens.': 'showcaseSubtitle',
      'Föregående system': 'btnPrevSystem',
      'Nästa system': 'btnNextSystem',

      // Products
      'FlowVault': 'productFlowVault',
      'Världens största n8n Flow-bibliotek': 'productFlowVaultDesc',
      'GenPRD': 'productGenPRD',
      'AI-driven specifikationsgenerator': 'productGenPRDDesc',
      'AEO & GEO': 'productAEO',
      'AI-sökoptimering för moderna sökmotorer': 'productAEODesc',
      '1 999 kr/mån': 'productAEOPrice',

      // Services
      'TJÄNSTER': 'labelServices',
      'Intelligent mjukvara anpassad efter er verksamhet': 'servicesTitle',

      // Pricing
      'MINIMUM LOVABLE PRODUCT': 'pricingMLPTitle',
      '75k': 'pricingMLPPrice',
      'OPERATIVSYSTEM': 'pricingOSTitle',
      '250k': 'pricingOSPrice',
      'STÖRRE PROJEKT': 'pricingEnterpriseTitle',
      '500k+': 'pricingEnterprisePrice',
      'SEK': this.current === 'en' ? 'USD' : 'SEK',
      'Starta Pilot': 'pricingMLPBtn',
      'Diskutera Behov': 'pricingOSBtn',
      'Anpassad kod': 'pricingMLPFeature1',
      'Exakt Lösning': 'pricingMLPFeature2',
      'Data-Hub': 'pricingOSFeature1',
      'AI-Beslut': 'pricingOSFeature2',
      'Kontroll': 'pricingOSFeature3',
      'Strategi': 'pricingEnterpriseFeature1',
      'Arkitektur': 'pricingEnterpriseFeature2',
      'AI-Orkestrering': 'pricingEnterpriseFeature3',

      // R&D
      'R&D': 'labelRnD',
      'Gaming + AI + Three.js': 'rndTitle',
      'Varför Three.js?': 'rndCard1Title',
      'Prova Tekniken': 'rndCard2Title',
      'Gaming R&D': 'rndCard3Title',
      'Starta': 'rndCard2Btn',
      'Följ projektet →': 'rndCard3Link',

      // FAQ
      'Vanliga frågor': 'faqTitle',
      'Vad får vi för investeringen?': 'faqQ1',
      'Äger vi koden?': 'faqQ2',
      'Kan ni integrera med våra gamla system?': 'faqQ3',
      'Vad händer efter leverans?': 'faqQ4',

      // Contact
      'Diskutera ert Case': 'contactTitle',
      'Kontaktinformation': 'contactFormTitle',
      'Ditt Namn': 'labelName',
      'Företagsnamn': 'labelCompany',
      'E-post': 'labelEmail',
      'Telefon': 'labelPhone',
      'Beskriv utmaningen': 'labelChallenge',
      'Nästa': 'btnNext',
      'Föregående': 'btnPrev',

      // Founder
      'Gustav Hemmingsson': 'founderName',
      'Grundare': 'founderTitle',
    };

    // Walk through all text nodes and translate
    this.translateNode(document.body, textMap, t);

    // Translate placeholder attributes
    const inputs = document.querySelectorAll('input[placeholder], textarea[placeholder]');
    inputs.forEach(input => {
      const placeholder = input.getAttribute('placeholder');
      if (placeholder && textMap[placeholder]) {
        input.setAttribute('placeholder', t[textMap[placeholder]]);
      }
    });

    // Translate aria-label attributes
    const ariaElements = document.querySelectorAll('[aria-label]');
    ariaElements.forEach(el => {
      const label = el.getAttribute('aria-label');
      if (label && textMap[label]) {
        el.setAttribute('aria-label', t[textMap[label]]);
      }
    });

    // Special cases that need HTML preservation
    this.translateSpecialCases(t);
  },

  /**
   * Recursively translate text nodes
   */
  translateNode(node, textMap, t) {
    if (node.nodeType === Node.TEXT_NODE) {
      const trimmed = node.textContent.trim();
      if (trimmed && textMap[trimmed]) {
        node.textContent = t[textMap[trimmed]];
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      // Skip script and style tags
      if (node.tagName === 'SCRIPT' || node.tagName === 'STYLE') return;

      Array.from(node.childNodes).forEach(child => {
        this.translateNode(child, textMap, t);
      });
    }
  },

  /**
   * Handle special cases with HTML content
   */
  translateSpecialCases(t) {
    // Hero title (contains <br> tag)
    const heroTitle = document.querySelector('h1');
    if (heroTitle && heroTitle.textContent.includes('Bygg bort')) {
      // Preserve the <br> tag structure
      const hasMobileBr = heroTitle.innerHTML.includes('<br class="md:hidden">');
      if (hasMobileBr) {
        heroTitle.innerHTML = t.heroTitle.replace('Limitations', 'Limitations');
      } else {
        heroTitle.textContent = t.heroTitle.replace(/<br[^>]*>/g, ' ');
      }
    }

    // Hero subtitle with FAKTISKT/ACTUALLY emphasis
    const heroSubtitle = document.querySelector('p.text-lg.md\\:text-xl.text-sky-100');
    if (heroSubtitle) {
      heroSubtitle.innerHTML = t.heroSubtitle;
    }

    // Showcase title with accent span
    const showcaseTitle = document.querySelector('h2.section-title');
    if (showcaseTitle) {
      const originalText = showcaseTitle.textContent.trim();
      if (originalText.includes('Operativsystemet') || originalText.includes('Operating System')) {
        showcaseTitle.innerHTML = t.showcaseTitle;
      }
    }

    // Support text with bold
    const supportTitle = document.querySelector('p.text-lg.text-sky-200 strong');
    if (supportTitle && supportTitle.parentElement) {
      supportTitle.parentElement.innerHTML = t.supportTitle;
    }

    // Support description
    const supportDesc = document.querySelector('p.text-md.text-sky-300');
    if (supportDesc && supportDesc.textContent.includes('partnerskapet')) {
      supportDesc.innerHTML = t.supportDesc;
    }

    // GenPRD link in pricing
    const genPRDLink = document.querySelector('.mb-6.flex.flex-col.gap-1\\.5.text-center p');
    if (genPRDLink && genPRDLink.innerHTML.includes('GenPRD')) {
      genPRDLink.innerHTML = t.pricingOSLink;
    }

    // Pricing descriptions (paragraphs in pricing cards)
    document.querySelectorAll('.pricing-card p').forEach(p => {
      const text = p.textContent.trim();
      if (text.includes('Slipp standardlösningar')) {
        p.innerHTML = t.pricingMLPDesc;
      } else if (text.includes('skräddarsydd mjukvaruplattform')) {
        p.innerHTML = t.pricingOSDesc;
      } else if (text.includes('För komplexa behov')) {
        p.innerHTML = t.pricingEnterpriseDesc;
      }
    });

    // Navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      const text = link.textContent.trim();
      if (text === 'Hem') link.textContent = this.current === 'en' ? 'Home' : 'Hem';
      if (text === 'Home') link.textContent = this.current === 'en' ? 'Home' : 'Hem';
      if (text === 'Tjänster') link.textContent = this.current === 'en' ? 'Services' : 'Tjänster';
      if (text === 'Services') link.textContent = this.current === 'en' ? 'Services' : 'Tjänster';
    });

    // FAQ questions and answers
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach((item, index) => {
      const question = item.querySelector('.faq-question span');
      const answer = item.querySelector('.faq-answer');

      if (question && answer) {
        question.textContent = t[`faqQ${index + 1}`] || question.textContent;
        answer.textContent = t[`faqA${index + 1}`] || answer.textContent;
      }
    });

    // R&D descriptions
    const rndCards = document.querySelectorAll('.ritbordet-card p');
    rndCards.forEach(p => {
      const text = p.textContent.trim();
      if (text.includes('Traditionell 3D')) {
        p.textContent = t.rndCard1Desc;
      } else if (text.includes('live-demonstration')) {
        p.textContent = t.rndCard2Desc;
      } else if (text.includes('AI-genererade spel')) {
        p.textContent = t.rndCard3Desc;
      }
    });

    // Contact form subtitle
    const contactSubtitle = document.querySelector('#boka-samtal-skraddarsydd p.text-lg');
    if (contactSubtitle && contactSubtitle.textContent.includes('Beskriv utmaningen')) {
      contactSubtitle.textContent = t.contactSubtitle;
    }
  },

  /**
   * Get translation for a key
   */
  t(key) {
    return this.translations[this.current][key] || key;
  }
};

// Auto-initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => NordSymLang.init());
} else {
  NordSymLang.init();
}

// Make available globally
window.NordSymLang = NordSymLang;
