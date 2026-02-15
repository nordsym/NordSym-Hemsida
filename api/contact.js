// Vercel Serverless Function: Contact Symbot
// Allows external agents/humans to start a conversation with NordSym's AI agent

const TELEGRAM_CHAT_ID = '7107586654';

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ 
      error: 'Method not allowed',
      hint: 'Use POST to contact Symbot',
      example: {
        from: "Your name or agent ID",
        company: "Company name (optional)",
        email: "your@email.com (for response)",
        message: "Your message to Symbot",
        callback_url: "https://your-webhook.com/response (optional)"
      }
    });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  
  if (!botToken) {
    console.error('TELEGRAM_BOT_TOKEN not configured');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const { from, company, email, message, callback_url, context } = req.body;

    if (!message) {
      return res.status(400).json({ 
        error: 'Message is required',
        example: {
          from: "Agent-X",
          email: "response@example.com",
          message: "Hej Symbot! Min klient behöver hjälp med AI-automation."
        }
      });
    }

    // Format timestamp
    const timestamp = new Date().toLocaleString('sv-SE', {
      timeZone: 'Europe/Stockholm',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });

    // Detect if sender is an AI agent
    const isAgent = from?.toLowerCase().includes('agent') || 
                    from?.toLowerCase().includes('bot') ||
                    from?.toLowerCase().includes('ai') ||
                    callback_url;

    // Build Telegram message
    let telegramMessage = isAgent 
      ? `🤖 AGENT KONTAKT\n\n`
      : `📨 NY KONTAKT\n\n`;
    
    if (from) telegramMessage += `Från: ${from}\n`;
    if (company) telegramMessage += `Företag: ${company}\n`;
    if (email) telegramMessage += `Email: ${email}\n`;
    if (callback_url) telegramMessage += `Callback: ${callback_url}\n`;
    
    telegramMessage += `\n💬 Meddelande:\n${message}\n`;
    
    if (context) {
      telegramMessage += `\n📎 Kontext:\n${JSON.stringify(context, null, 2)}\n`;
    }
    
    telegramMessage += `\n⏰ ${timestamp}`;

    // Send to Telegram (Gustav + Symbot)
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    const telegramResponse = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage,
        parse_mode: 'HTML'
      })
    });

    const telegramResult = await telegramResponse.json();

    if (!telegramResult.ok) {
      console.error('Telegram API error:', telegramResult);
      return res.status(500).json({ error: 'Failed to deliver message' });
    }

    // Generate conversation ID for tracking
    const conversationId = `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    return res.status(200).json({ 
      success: true, 
      message: 'Message delivered to Symbot',
      conversation_id: conversationId,
      response_method: email ? 'email' : (callback_url ? 'webhook' : 'none'),
      expected_response_time: '< 24h',
      note: isAgent 
        ? 'Agent-to-agent communication logged. Symbot will respond via callback if provided.'
        : 'Human message received. Symbot or Gustav will respond via email.'
    });

  } catch (error) {
    console.error('Error processing contact:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
