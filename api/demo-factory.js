// Vercel Serverless Function: Demo Factory
// Sends formatted demo request to Telegram with actionable command

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
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  
  if (!botToken) {
    console.error('TELEGRAM_BOT_TOKEN not configured');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const { company, email, challenge } = req.body;

    if (!company || !email) {
      return res.status(400).json({ error: 'Company and email are required' });
    }

    // Generate demo_id
    const demo_id = `demo_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;

    // Format timestamp in Swedish timezone
    const timestamp = new Date().toLocaleString('sv-SE', {
      timeZone: 'Europe/Stockholm',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });

    // Build Telegram message
    let message = `🏭 DEMO FACTORY REQUEST\n\n`;
    message += `Företag: ${company}\n`;
    message += `Email: ${email}\n`;
    
    if (challenge && challenge.trim()) {
      message += `Utmaning: ${challenge}\n`;
    }
    
    message += `\n⏰ ${timestamp}\n`;
    message += `\n🤖 Symbot: Starta research med kommando nedan\n`;
    message += `/demo-research ${company}`;

    // Send to Telegram
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    const telegramResponse = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      })
    });

    const telegramResult = await telegramResponse.json();

    if (!telegramResult.ok) {
      console.error('Telegram API error:', telegramResult);
      return res.status(500).json({ error: 'Failed to send notification' });
    }

    // Return structured response
    return res.status(200).json({ 
      success: true, 
      demo_id: demo_id,
      status: 'received',
      message: 'Demo request received. We will reach out shortly.'
    });

  } catch (error) {
    console.error('Error processing demo request:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
