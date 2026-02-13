/**
 * NordSym Language System v3
 * Clean data-i18n attribute-based translation system
 * Supports: Svenska (sv) | English (en)
 * 
 * COMPLETE i18n COVERAGE - All site sections translated
 */

const NordSymLang = {
  current: 'sv',

  translations: {
    sv: {
      // Meta & Title
      metaTitle: 'NordSym AB - Bygg bort begränsningar',
      metaDescription: 'NordSym AB är en byrå för systemautomation och AI-arkitektur. NordSym optimerar er verksamhet för AEO (Answer Engine Optimization) och bygger intelligenta ekosystem.',
      metaKeywords: 'Systemautomation Sverige, intelligenta system, AEO, GEO, AI-arkitektur, digital transformation, NordSym',

      // Hero Section
      heroTitle: 'Bygg bort <br class="md:hidden"> begränsningar',
      heroSubtitle: 'NordSym är er <span class="animate-emphasis relative inline-block px-2 py-0.5 mx-1 bg-nord-sym-cyan text-nord-sym-deep-space-blue font-bold text-sm md:text-base rounded shadow-[0_0_15px_rgba(0,212,255,0.5)] border border-white/20 align-middle my-1">FULL STACK AI PARTNER</span> som bygger verktyg som <span class="animate-emphasis relative inline-block px-2 py-0.5 mx-1 bg-nord-sym-cyan text-nord-sym-deep-space-blue font-bold text-sm md:text-base rounded shadow-[0_0_15px_rgba(0,212,255,0.5)] border border-white/20 align-middle my-1" style="animation-delay: 1.5s;">FAKTISKT</span> gör skillnad.',
      btnBookCall: 'Boka Strategisamtal',
      btnRnD: 'R&D',
      labelMicroSaaS: 'MICRO-SAAS',
      labelIntelligentArch: 'INTELLIGENT ARKITEKTUR',
      labelIntelligentAuto: 'INTELLIGENT AUTOMATION',
      placeholderAsk: 'Fråga NordSym...',
      btnSend: 'Skicka',
      labelActiveSession: 'Aktiv session',

      // AI Context Hub
      contextHubTitle: 'Ge din AI kontext',

      // Home Diagram Section
      homeDiagramTitle: 'Frigör er potential',
      homeDiagramDesc: 'Manuella processer sätter ett tak för er tillväxt. NordSym bygger bort det genom att utveckla skräddarsydd mjukvara som automatiserar era unika flöden och frigör tid för expansion.',
      homeDiagramLink: 'Utforska tjänster →',
      vennFlows: 'Unika<br>Flöden',
      vennSoftware: 'Agent&shy;anpassad<br>Mjukvara',
      vennCenter: 'Sparade<br>Timmar',

      // Product Showcase
      showcaseTitle: 'Operativsystemet i <span class="section-title-accent">Action</span>',
      showcaseSubtitle: 'Inga rökridåer. Bara ren, funktionell intelligens.',
      btnPrevSystem: 'Föregående system',
      btnNextSystem: 'Nästa system',
      showcaseLiveDemo: 'Live demonstration',

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
      btnSubmitRequest: 'Skicka förfrågan',

      // Navigation
      navHome: 'Hem',
      navMicroSaaS: 'Micro-SaaS',
      navServices: 'Tjänster',
      navRnD: 'R&D',

      // Footer
      footerQuickLinks: 'Snabblänkar',
      footerPrivacy: 'Integritetspolicy',
      footerTerms: 'Användarvillkor',
      footerCopyright: '© 2025 NordSym AB. Alla rättigheter förbehållna.',
      footerReadyToScale: 'Redo att skala upp?',
      footerTagline: 'NordSym bygger infrastrukturen för skalbar, agent-driven tillväxt.',
      footerFollowUs: 'Följ NordSym',

      // ============================================
      // TESTIMONIALS SECTION
      // ============================================
      testimonialsLabel: 'Beprövad i praktiken',
      testimonialsTitle: 'Vad säger kunderna?',
      testimonialsSubtitle: 'Svenska företag som byggt med NordSym',
      
      // Testimonial 1 - Mohammed A.
      testimonial1Quote: 'AI Search från NordSym sparar oss timmar varje vecka på due diligence och marknadsresearch.',
      testimonial1Name: 'Mohammed A.',
      testimonial1Role: 'Partner, CQT Invest',
      
      // Testimonial 2 - David M.
      testimonial2Quote: 'NordSym förstod våra processer snabbt. N8n-integrationerna de byggde kopplar ihop våra system på ett sätt vi inte trodde var möjligt.',
      testimonial2Name: 'David M.',
      testimonial2Role: 'VD, Konsultbolag',
      
      // Testimonial 3 - Linda S.
      testimonial3Quote: 'Skräddarsydd lösning som gör precis vad vi behöver. Inget överkill, bara rätt funktionalitet för vårt sätt att jobba.',
      testimonial3Name: 'Linda S.',
      testimonial3Role: 'Produktchef, E-handel',

      // ============================================
      // GALLERY TABS (STACK / SYSTEM)
      // ============================================
      galleryTabStack: 'STACK',
      galleryTabSystem: 'SYSTEM',
      
      // Stack description
      galleryStackDesc: 'Tekniken under huven. Arkitekturen baseras på ett ekosystem av Claude, Gemini och OpenAI, orkestrerat av n8n och moderna vektordatabaser. Rätt verktyg för rätt kognitiv uppgift.',
      galleryStackContext: 'Utforska stacken',
      
      // System description  
      gallerySystemDesc: 'Färdiga produkter och Micro-SaaS lösningar. Från AEO-analys till automatiserade PRD-flöden. Specialiserad mjukvara som löser specifika problem direkt.',
      gallerySystemContext: 'Utforska systemen',

      // ============================================
      // MICRO-SAAS PRODUCT CARDS
      // ============================================
      // Intro text
      microSaasIntro: '<strong>GenPRD</strong>, <strong>FlowVault</strong>, <strong>Hivr</strong> och <strong>Skeppa</strong> är våra Micro-SaaS. Ni kan börja använda dem direkt, helt utan kostnad.',
      
      // FlowVault
      flowvaultTitle: 'FlowVault',
      flowvaultDesc: 'Ett kurerat bibliotek av produktionsfärdiga n8n-flöden. Från komplexa svenska integrationer (t.ex. Fortnox) till avancerade AI-svärmar. Hämta verifierade blåkopior och accelerera er utvecklingstakt drastiskt.',
      flowvaultSig1: 'Svenska API:er',
      flowvaultSig2: 'AI-Svärmar',
      flowvaultSig3: 'Open Source',
      flowvaultIndicator: 'Automatisera snabbare. Starta gratis.',
      flowvaultCta: 'Öppna Valvet',
      
      // AI-Sök (AEO)
      aisearchTitle: 'Syns du i AI-Sök?',
      aisearchDesc: 'Från traditionellt sök till GEO och AEO. Optimera din digitala närvaro för AI-sökmotorer som ChatGPT, Claude och Perplexity. Vi transformerar din webbplats från en statisk sida till en källa som AI-motorer litar på och citerar.',
      aisearchSig1: 'AEO',
      aisearchSig2: 'GEO',
      aisearchSig3: 'SEO',
      aisearchIndicator: 'Är ditt varumärke redo? Från 1,999 kr/mån.',
      aisearchCta: 'Gör Gratis Analys',
      
      // GenPRD
      genprdTitle: 'GenPRD',
      genprdDesc: 'Sluta gissa, börja bygga. GenPRD omvandlar din produktidé till en detaljerad teknisk kravspecifikation (PRD) optimerad för AI-agenter. Få databasscheman, user flows och tech stacks på sekunder.',
      genprdSig1: 'PRD-Generator',
      genprdSig2: 'SQL-Schema',
      genprdSig3: 'AI-Kontext',
      genprdIndicator: 'Context-as-a-Service. Testa gratis.',
      genprdCta: 'Testa GenPRD',
      
      // Skeppa
      skeppaTitle: 'Skeppa',
      skeppaDesc: 'Bygg, skeppa, vinn. Månatliga utmaningar för AI-utvecklare. Tävla mot andra, få feedback från communityn och bygg din portfolio. Nya teman varje månad.',
      skeppaSig1: 'Månadsteman',
      skeppaSig2: 'Community',
      skeppaSig3: 'Skeppa Kod',
      skeppaIndicator: 'Gå med gratis. Nästa tema startar snart.',
      skeppaCta: 'Skeppa NU',
      
      // Hivr
      hivrTitle: 'Hivr.Online',
      hivrDesc: 'Marknadsplats för AI-agenter. Hyr färdiga "worker bees" eller lista dina egna agenter och tjäna pengar. Från research till automation — hitta rätt agent för jobbet.',
      hivrSig1: 'Multi-Agent',
      hivrSig2: 'Marknadsplats',
      hivrSig3: 'AI Workers',
      hivrIndicator: 'Har du en uppgift? Hyr en AI.',
      hivrCta: 'Utforska Hivr',
      
      // Teaser cards
      teaserAiCoreTitle: 'Nästa Generations AI-Kärna',
      teaserAiCoreDesc: 'En ny nivå av autonomi och proaktiv intelligens, designad för att förutse och agera på framtida behov.',
      teaserAiCoreIndicator: 'Lansering Q2 2026',
      
      teaserAdaptiveUiTitle: 'Adaptiva Gränssnitt',
      teaserAdaptiveUiDesc: 'Revolutionerande UI som anpassar sig i realtid efter användarens unika kontext, mål och arbetsflöde.',
      teaserAdaptiveUiIndicator: 'Lansering Q3 2026',

      // ============================================
      // PRODUCT SHOWCASE SLIDE CONTENT
      // ============================================
      showcaseGenPRDTitle: 'GenPRD',
      showcaseGenPRDDesc: 'GenPRD tar din idé och genererar en komplett teknisk specifikation. Få databasscheman, user flows och arkitektur optimerad för att AI-agenter ska kunna bygga din produkt direkt.',
      
      showcaseFlowVaultTitle: 'FlowVault',
      showcaseFlowVaultDesc: 'Varje flöde i biblioteket är battle-testat och redo att köra. Hitta blåkopior för Fortnox, CRM-synkar och AI-pipelines på sekunder istället för timmar.',
      showcaseFlowVaultCta: 'Öppna Valvet',

      // ============================================
      // COOKIE BANNER
      // ============================================
      cookieTitle: 'Digital Integritet',
      cookieText: 'Vi använder cookies för att optimera systemets prestanda. Genom att fortsätta godkänner du vår',
      cookieLink: 'Integritetspolicy',
      cookieAccept: 'Godkänn',
    },

    en: {
      // Meta & Title
      metaTitle: 'NordSym AB - Build Away Limitations',
      metaDescription: 'NordSym AB is an agency for system automation and AI architecture. We optimize your operations for AEO (Answer Engine Optimization) and build intelligent ecosystems.',
      metaKeywords: 'System automation, intelligent systems, AEO, GEO, AI architecture, digital transformation, NordSym',

      // Hero Section
      heroTitle: 'Build Away <br class="md:hidden"> Limitations',
      heroSubtitle: 'NordSym is your <span class="animate-emphasis relative inline-block px-2 py-0.5 mx-1 bg-nord-sym-cyan text-nord-sym-deep-space-blue font-bold text-sm md:text-base rounded shadow-[0_0_15px_rgba(0,212,255,0.5)] border border-white/20 align-middle my-1">FULL STACK AI PARTNER</span> building tools that <span class="animate-emphasis relative inline-block px-2 py-0.5 mx-1 bg-nord-sym-cyan text-nord-sym-deep-space-blue font-bold text-sm md:text-base rounded shadow-[0_0_15px_rgba(0,212,255,0.5)] border border-white/20 align-middle my-1" style="animation-delay: 1.5s;">ACTUALLY</span> make a difference.',
      btnBookCall: 'Book Strategy Call',
      btnRnD: 'R&D',
      labelMicroSaaS: 'MICRO-SAAS',
      labelIntelligentArch: 'INTELLIGENT ARCHITECTURE',
      labelIntelligentAuto: 'INTELLIGENT AUTOMATION',
      placeholderAsk: 'Ask NordSym...',
      btnSend: 'Send',
      labelActiveSession: 'Active session',

      // AI Context Hub
      contextHubTitle: 'Give your AI context',

      // Home Diagram Section
      homeDiagramTitle: 'Unlock your potential',
      homeDiagramDesc: 'Manual processes cap your growth. NordSym removes that ceiling by developing custom software that automates your unique workflows and frees up time for expansion.',
      homeDiagramLink: 'Explore services →',
      vennFlows: 'Unique<br>Workflows',
      vennSoftware: 'Agent-adapted<br>Software',
      vennCenter: 'Hours<br>Saved',

      // Product Showcase
      showcaseTitle: 'The Operating System in <span class="section-title-accent">Action</span>',
      showcaseSubtitle: 'No smoke and mirrors. Just pure, functional intelligence.',
      btnPrevSystem: 'Previous system',
      btnNextSystem: 'Next system',
      showcaseLiveDemo: 'Live demonstration',

      // Products
      productFlowVault: 'FlowVault',
      productFlowVaultDesc: "World's largest n8n Flow library",
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
      pricingOSDesc: "A custom software platform that becomes your company's brain. It centralizes your data, connects your systems, and lets AI act autonomously – while giving you full control where human judgment is needed.",
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
      rndSubtitle: "We experiment with WebGL and AI here. We test the boundaries of what's possible to run directly in a browser, focusing on game mechanics and interactive interfaces.",
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
      contactSubtitle: "Describe the challenge you're facing. NordSym will respond with a concrete proposal on how we can build away the problem.",
      contactFormTitle: 'Contact Information',
      labelName: 'Your Name',
      labelCompany: 'Company Name',
      labelEmail: 'Email',
      labelPhone: 'Phone',
      labelChallenge: 'Describe the challenge',
      placeholderChallenge: "What's preventing you from growing? Manual workflows, data chaos, or missing integrations?",
      btnNext: 'Next',
      btnPrev: 'Previous',
      btnSubmit: 'Submit',
      btnSubmitRequest: 'Submit Request',

      // Navigation
      navHome: 'Home',
      navMicroSaaS: 'Micro-SaaS',
      navServices: 'Services',
      navRnD: 'R&D',

      // Footer
      footerQuickLinks: 'Quick Links',
      footerPrivacy: 'Privacy Policy',
      footerTerms: 'Terms of Use',
      footerCopyright: '© 2025 NordSym AB. All rights reserved.',
      footerReadyToScale: 'Ready to scale up?',
      footerTagline: 'NordSym builds the infrastructure for scalable, agent-driven growth.',
      footerFollowUs: 'Follow NordSym',

      // ============================================
      // TESTIMONIALS SECTION
      // ============================================
      testimonialsLabel: 'Proven in practice',
      testimonialsTitle: 'What do customers say?',
      testimonialsSubtitle: 'Swedish companies that built with NordSym',
      
      // Testimonial 1 - Mohammed A.
      testimonial1Quote: 'AI Search from NordSym saves us hours every week on due diligence and market research.',
      testimonial1Name: 'Mohammed A.',
      testimonial1Role: 'Partner, CQT Invest',
      
      // Testimonial 2 - David M.
      testimonial2Quote: 'NordSym understood our processes quickly. The n8n integrations they built connect our systems in ways we didn\'t think were possible.',
      testimonial2Name: 'David M.',
      testimonial2Role: 'CEO, Consulting Firm',
      
      // Testimonial 3 - Linda S.
      testimonial3Quote: 'Custom solution that does exactly what we need. No overkill, just the right functionality for how we work.',
      testimonial3Name: 'Linda S.',
      testimonial3Role: 'Product Manager, E-commerce',

      // ============================================
      // GALLERY TABS (STACK / SYSTEM)
      // ============================================
      galleryTabStack: 'STACK',
      galleryTabSystem: 'SYSTEM',
      
      // Stack description
      galleryStackDesc: 'The technology under the hood. The architecture is based on an ecosystem of Claude, Gemini and OpenAI, orchestrated by n8n and modern vector databases. The right tool for the right cognitive task.',
      galleryStackContext: 'Explore the stack',
      
      // System description  
      gallerySystemDesc: 'Ready-made products and Micro-SaaS solutions. From AEO analysis to automated PRD workflows. Specialized software that solves specific problems directly.',
      gallerySystemContext: 'Explore systems',

      // ============================================
      // MICRO-SAAS PRODUCT CARDS
      // ============================================
      // Intro text
      microSaasIntro: '<strong>GenPRD</strong>, <strong>FlowVault</strong>, <strong>Hivr</strong> and <strong>Skeppa</strong> are our Micro-SaaS products. You can start using them right away, completely free.',
      
      // FlowVault
      flowvaultTitle: 'FlowVault',
      flowvaultDesc: 'A curated library of production-ready n8n flows. From complex Swedish integrations (e.g. Fortnox) to advanced AI swarms. Get verified blueprints and accelerate your development pace drastically.',
      flowvaultSig1: 'Swedish APIs',
      flowvaultSig2: 'AI Swarms',
      flowvaultSig3: 'Open Source',
      flowvaultIndicator: 'Automate faster. Start free.',
      flowvaultCta: 'Open Vault',
      
      // AI-Sök (AEO)
      aisearchTitle: 'Are you visible in AI Search?',
      aisearchDesc: 'From traditional search to GEO and AEO. Optimize your digital presence for AI search engines like ChatGPT, Claude and Perplexity. We transform your website from a static page to a source that AI engines trust and cite.',
      aisearchSig1: 'AEO',
      aisearchSig2: 'GEO',
      aisearchSig3: 'SEO',
      aisearchIndicator: 'Is your brand ready? From $199/month.',
      aisearchCta: 'Get Free Analysis',
      
      // GenPRD
      genprdTitle: 'GenPRD',
      genprdDesc: 'Stop guessing, start building. GenPRD transforms your product idea into a detailed technical specification (PRD) optimized for AI agents. Get database schemas, user flows and tech stacks in seconds.',
      genprdSig1: 'PRD Generator',
      genprdSig2: 'SQL Schema',
      genprdSig3: 'AI Context',
      genprdIndicator: 'Context-as-a-Service. Try free.',
      genprdCta: 'Try GenPRD',
      
      // Skeppa
      skeppaTitle: 'Skeppa',
      skeppaDesc: 'Build, ship, win. Monthly challenges for AI developers. Compete against others, get community feedback and build your portfolio. New themes every month.',
      skeppaSig1: 'Monthly Themes',
      skeppaSig2: 'Community',
      skeppaSig3: 'Ship Code',
      skeppaIndicator: 'Join free. Next theme starts soon.',
      skeppaCta: 'Ship NOW',
      
      // Hivr
      hivrTitle: 'Hivr.Online',
      hivrDesc: 'Marketplace for AI agents. Hire ready-made "worker bees" or list your own agents and earn money. From research to automation — find the right agent for the job.',
      hivrSig1: 'Multi-Agent',
      hivrSig2: 'Marketplace',
      hivrSig3: 'AI Workers',
      hivrIndicator: 'Got a task? Hire an AI.',
      hivrCta: 'Explore Hivr',
      
      // Teaser cards
      teaserAiCoreTitle: 'Next Generation AI Core',
      teaserAiCoreDesc: 'A new level of autonomy and proactive intelligence, designed to anticipate and act on future needs.',
      teaserAiCoreIndicator: 'Launch Q2 2026',
      
      teaserAdaptiveUiTitle: 'Adaptive Interfaces',
      teaserAdaptiveUiDesc: 'Revolutionary UI that adapts in real-time to the user\'s unique context, goals and workflow.',
      teaserAdaptiveUiIndicator: 'Launch Q3 2026',

      // ============================================
      // PRODUCT SHOWCASE SLIDE CONTENT
      // ============================================
      showcaseGenPRDTitle: 'GenPRD',
      showcaseGenPRDDesc: 'GenPRD takes your idea and generates a complete technical specification. Get database schemas, user flows and architecture optimized for AI agents to build your product directly.',
      
      showcaseFlowVaultTitle: 'FlowVault',
      showcaseFlowVaultDesc: 'Every flow in the library is battle-tested and ready to run. Find blueprints for Fortnox, CRM syncs and AI pipelines in seconds instead of hours.',
      showcaseFlowVaultCta: 'Open Vault',

      // ============================================
      // COOKIE BANNER
      // ============================================
      cookieTitle: 'Digital Privacy',
      cookieText: 'We use cookies to optimize system performance. By continuing you accept our',
      cookieLink: 'Privacy Policy',
      cookieAccept: 'Accept',
    }
  },

  /**
   * Initialize language system
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

    this.apply();
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
    
    // Re-populate gallery cards with new language
    if (window.GalleryManager && typeof window.GalleryManager.refreshTranslations === 'function') {
      window.GalleryManager.refreshTranslations();
    }
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
    this.updateMeta('og:locale', this.current === 'sv' ? 'sv_SE' : 'en_US', 'property');

    // Apply translations using data-i18n attributes
    this.translateDataAttributes(t);

    // Update placeholders
    this.translatePlaceholders(t);

    // Update active flag styling
    this.updateFlagStyles();
  },

  /**
   * Translate elements with data-i18n attribute
   * Automatically uses innerHTML if translation contains HTML, otherwise textContent
   */
  translateDataAttributes(t) {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = t[key];
      
      if (translation === undefined) {
        console.warn(`Translation missing for key: ${key}`);
        return;
      }

      // Check if translation contains HTML tags
      const containsHTML = /<[^>]+>/.test(translation);
      
      if (containsHTML) {
        el.innerHTML = translation;
      } else {
        el.textContent = translation;
      }
    });
  },

  /**
   * Translate placeholder and aria-label attributes
   */
  translatePlaceholders(t) {
    // Placeholders with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key]) {
        el.setAttribute('placeholder', t[key]);
      }
    });

    // Aria-labels with data-i18n-aria
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (t[key]) {
        el.setAttribute('aria-label', t[key]);
      }
    });
  },

  /**
   * Update language flag button styles
   */
  updateFlagStyles() {
    // Desktop flags
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const onclick = btn.getAttribute('onclick') || '';
      const isActive = onclick.includes(`'${this.current}'`);
      btn.classList.toggle('ring-2', isActive);
      btn.classList.toggle('ring-nord-sym-cyan', isActive);
      btn.classList.toggle('bg-white/10', isActive);
    });

    // Mobile flags
    document.querySelectorAll('.lang-btn-mobile').forEach(btn => {
      const onclick = btn.getAttribute('onclick') || '';
      const isActive = onclick.includes(`'${this.current}'`);
      btn.classList.toggle('bg-sky-700/50', isActive);
      btn.classList.toggle('ring-1', isActive);
      btn.classList.toggle('ring-nord-sym-cyan', isActive);
    });
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
