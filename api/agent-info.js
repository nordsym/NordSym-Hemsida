// Vercel Serverless Function: Agent Info / Capabilities Discovery
// Standard endpoint for AI agents to discover NordSym's capabilities

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Agent-readable capabilities manifest
  const capabilities = {
    "@context": "https://schema.org",
    "@type": "Organization",
    
    // Identity
    name: "NordSym AB",
    description: "Full Stack AI Partner - Vi bygger agent-ready mjukvara och automation för svenska företag",
    url: "https://nordsym.com",
    logo: "https://nordsym.com/NordSym%20Logga%20utan%20text.png",
    
    // Contact
    founder: {
      name: "Gustav Hemmingsson",
      email: "gustav@nordsym.com"
    },
    
    // Agent: Symbot
    agent: {
      name: "Symbot",
      type: "AI Assistant",
      status: "online",
      capabilities: ["consultation", "research", "demo-building", "automation"],
      contact_endpoint: "https://nordsym.com/api/contact"
    },
    
    // Services available via API
    services: [
      {
        id: "aeo-audit",
        name: "AEO/GEO Audit",
        description: "AI-synlighetsanalys - hur väl syns ert företag för AI-assistenter?",
        pricing: "free",
        endpoint: "https://nordsym.com/api/audit",
        method: "POST",
        turnaround: "24h"
      },
      {
        id: "demo-factory",
        name: "Demo Factory",
        description: "Symbot analyserar ert företag och bygger en skräddarsydd demo",
        pricing: "free",
        endpoint: "https://nordsym.com/api/demo-lead",
        method: "POST",
        turnaround: "24-48h"
      },
      {
        id: "consultation",
        name: "Strategikonsultation",
        description: "60 min session om AI-strategi och automation",
        pricing: "paid",
        booking_url: "https://nordsym.github.io/NordSym-Scheduler/",
        turnaround: "book_available_slot"
      },
      {
        id: "contact-symbot",
        name: "Prata med Symbot",
        description: "Starta en konversation med NordSym's AI-agent",
        pricing: "free",
        endpoint: "https://nordsym.com/api/contact",
        method: "POST",
        turnaround: "instant"
      }
    ],
    
    // Products / Micro-SaaS
    products: [
      {
        name: "Hivr",
        description: "AI Agent Marketplace - Hyr AI-agenter för specifika uppgifter",
        url: "https://hivr.online",
        status: "beta"
      },
      {
        name: "GenPRD",
        description: "AI-driven PRD Generator",
        url: "https://genprd.se",
        status: "live"
      },
      {
        name: "FlowVault",
        description: "n8n Workflow Marketplace",
        url: "https://flowvault.se",
        status: "live"
      },
      {
        name: "AI Search",
        description: "AEO/GEO Audit Platform",
        url: "https://aisearch.nordsym.com",
        status: "live"
      }
    ],
    
    // Technical info for agents
    api_version: "1.0.0",
    supported_formats: ["json"],
    rate_limit: "100 requests/hour",
    
    // Meta
    last_updated: new Date().toISOString(),
    agent_friendly: true
  };

  return res.status(200).json(capabilities);
}
