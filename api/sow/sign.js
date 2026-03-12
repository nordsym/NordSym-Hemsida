// NordSym SoW Signing API
// Handles signature submission and email delivery

const CONVEX_URL = "https://laudable-ladybug-188.convex.cloud";
const N8N_WEBHOOK = "https://nordsym.app.n8n.cloud/webhook/symbot-gmail";

// Partner email configuration
const partnerEmails = {
  nakama: "beidos@nakamaisland.io",
  excom: "peter@fikalabs.com",
  hotclean: "hasse@hotclean.se",
  upwork: "fredrik@[NEEDS_EMAIL]" // TODO: Add Fredrik's email
};

function generateSowHtml(sow, signatureDataUrl, signedDate) {
  const sections = sow.sections.map(section => {
    let content = `<h2 style="color: #00D4FF; margin-top: 30px;">${section.title}</h2>`;
    
    if (section.content) {
      content += section.content.map(item => `<p>${item}</p>`).join('\n');
    }
    
    if (section.items) {
      content += '<ul style="list-style: none; padding-left: 0;">';
      section.items.forEach(item => {
        content += `<li style="margin-bottom: 12px;"><strong>${item.label}:</strong> ${item.value}</li>`;
      });
      content += '</ul>';
    }
    
    return content;
  }).join('\n');

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>NordSym X ${sow.customerName} - Signed SoW</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, sans-serif; max-width: 800px; margin: 0 auto; padding: 40px; background: #0A0908;">
  <div style="background: #12110F; border-radius: 16px; padding: 40px; border: 1px solid #1F1E1C;">
    <!-- Header -->
    <div style="text-align: center; margin-bottom: 40px;">
      <div style="font-size: 42px; font-weight: bold; background: linear-gradient(135deg, #00D4FF 0%, #9370DB 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">NordSym</div>
      <h1 style="margin: 16px 0 8px; color: #FAFAFA; font-size: 28px;">NordSym X ${sow.customerName}</h1>
      <div style="display: inline-block; background: #166534; color: #F0FDF4; padding: 8px 16px; border-radius: 20px; font-size: 14px; font-weight: 600; margin-top: 12px;">
        ✓ Week 1 Checkpoint
      </div>
      <p style="color: #00D4FF; font-weight: 600; margin-top: 16px; font-size: 18px;">SIGNED SCOPE OF WORK</p>
      <p style="color: #A3A3A3; font-size: 14px;">Signed on ${signedDate}</p>
    </div>
    
    <!-- Vertical -->
    <div style="background: #1F1E1C; padding: 20px; border-radius: 12px; margin-bottom: 30px;">
      <p style="color: #9370DB; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px;">Vertical</p>
      <p style="color: #FAFAFA; font-size: 16px; margin: 0; font-weight: 500;">${sow.vertical}</p>
    </div>
    
    <!-- Pricing -->
    <div style="background: #1F1E1C; padding: 20px; border-radius: 12px; margin-bottom: 30px;">
      <p style="color: #9370DB; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 12px;">Investment</p>
      <div style="display: flex; gap: 20px; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 200px;">
          <p style="color: #A3A3A3; font-size: 14px; margin: 0 0 4px;">Fixed Monthly</p>
          <p style="color: #00D4FF; font-size: 24px; font-weight: bold; margin: 0;">$${sow.pricing.fixed}</p>
        </div>
        <div style="flex: 1; min-width: 200px;">
          <p style="color: #A3A3A3; font-size: 14px; margin: 0 0 4px;">Nectar (Usage)</p>
          <p style="color: #FAFAFA; font-size: 16px; margin: 0;">${sow.pricing.nectar}</p>
        </div>
      </div>
    </div>
    
    <!-- Content Sections -->
    <div style="color: #E5E5E5; line-height: 1.8;">
      ${sections}
    </div>
    
    <!-- Signatures -->
    <div style="border-top: 2px solid #1F1E1C; margin-top: 40px; padding-top: 30px;">
      <h2 style="color: #00D4FF; margin-bottom: 24px;">Signatures</h2>
      <table width="100%" style="border-collapse: collapse;">
        <tr>
          <td style="width: 50%; vertical-align: top; padding-right: 20px;">
            <p style="color: #A3A3A3; font-size: 12px; margin: 0 0 12px;">NORDSYM AB</p>
            <p style="font-family: 'Brush Script MT', cursive; font-size: 28px; color: #FAFAFA; margin: 12px 0;">Gustav Hemmingsson</p>
            <p style="color: #E5E5E5; margin: 8px 0 0;"><strong>Gustav Hemmingsson</strong><br>CEO, NordSym AB<br>March 12, 2026</p>
          </td>
          <td style="width: 50%; vertical-align: top; padding-left: 20px; border-left: 1px solid #1F1E1C;">
            <p style="color: #A3A3A3; font-size: 12px; margin: 0 0 12px;">${sow.customerName.toUpperCase()}</p>
            <img src="${signatureDataUrl}" style="max-width: 250px; max-height: 100px; display: block; margin: 12px 0;" alt="Signature"/>
            <p style="color: #E5E5E5; margin: 8px 0 0;"><strong>${sow.signedBy}</strong><br>${sow.signerTitle}<br>${signedDate}</p>
          </td>
        </tr>
      </table>
    </div>
    
    <!-- Footer -->
    <div style="margin-top: 40px; padding: 24px; background: #0F9960; border-radius: 12px; text-align: center;">
      <p style="color: #F0FDF4; margin: 0; font-size: 16px; font-weight: 600;">This document has been digitally signed by both parties</p>
    </div>
  </div>
</body>
</html>`;
}

function generateEmailBody(sow, signedDate) {
  return `<!DOCTYPE html>
<html>
<body style="margin: 0; padding: 40px; background: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, sans-serif;">
  <div style="max-width: 500px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    <div style="background: linear-gradient(135deg, #00D4FF 0%, #9370DB 100%); color: white; padding: 32px; text-align: center;">
      <div style="font-size: 32px; font-weight: bold;">NordSym</div>
      <h1 style="margin: 12px 0 0; font-size: 20px;">NordSym X ${sow.customerName}</h1>
    </div>
    <div style="padding: 32px;">
      <div style="background: #F0FDF4; border-left: 4px solid #166534; padding: 16px; border-radius: 8px; margin-bottom: 24px;">
        <p style="margin: 0; color: #166534; font-weight: 600;">✓ Scope of Work has been signed</p>
      </div>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 12px 0; color: #737373; font-size: 14px;">Signed by</td>
          <td style="padding: 12px 0; font-weight: 600; text-align: right;">${sow.signedBy}</td>
        </tr>
        <tr>
          <td style="padding: 12px 0; color: #737373; font-size: 14px;">Title</td>
          <td style="padding: 12px 0; font-weight: 600; text-align: right;">${sow.signerTitle}</td>
        </tr>
        <tr>
          <td style="padding: 12px 0; color: #737373; font-size: 14px;">Date</td>
          <td style="padding: 12px 0; font-weight: 600; text-align: right;">${signedDate}</td>
        </tr>
        <tr>
          <td style="padding: 12px 0; color: #737373; font-size: 14px;">Document</td>
          <td style="padding: 12px 0; font-weight: 600; text-align: right;">Attached as HTML</td>
        </tr>
      </table>
    </div>
    <div style="padding: 20px 32px; background: #fafafa; border-top: 1px solid #e5e5e5; text-align: center;">
      <p style="margin: 0; font-size: 12px; color: #737373;">NordSym AB - Full Stack AI Partner</p>
      <p style="margin: 4px 0 0; font-size: 12px; color: #737373;">nordsym.com</p>
    </div>
  </div>
</body>
</html>`;
}

async function sendEmailWithAttachment(to, subject, sow, signedDate, attachmentHtml, filename) {
  try {
    const encoder = new TextEncoder();
    const uint8Array = encoder.encode(attachmentHtml);
    let binary = '';
    uint8Array.forEach(byte => binary += String.fromCharCode(byte));
    const base64Data = btoa(binary);

    const emailBody = generateEmailBody(sow, signedDate);

    const response = await fetch(N8N_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "send",
        to,
        subject,
        message: emailBody,
        attachments: [{
          filename,
          data: base64Data,
        }],
      }),
    });

    if (!response.ok) {
      console.error(`Failed to send email to ${to}`);
      return false;
    }
    
    console.log(`Email sent to ${to}`);
    return true;
  } catch (error) {
    console.error(`Error sending email to ${to}:`, error);
    return false;
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { customerId, signatureDataUrl, signerName, signerTitle } = req.body;

    if (!customerId || !signatureDataUrl || !signerName || !signerTitle) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const partnerEmail = partnerEmails[customerId];
    if (!partnerEmail || partnerEmail.includes('[NEEDS_EMAIL]')) {
      return res.status(400).json({ error: 'Partner email not configured' });
    }

    // Get client IP
    const forwardedFor = req.headers['x-forwarded-for'];
    const signerIp = forwardedFor ? forwardedFor.split(',')[0] : 'unknown';

    // Get SoW from Convex
    const queryResponse = await fetch(`${CONVEX_URL}/api/query`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        path: 'sows:getByCustomerId',
        args: { customerId },
      }),
    });

    const queryResult = await queryResponse.json();
    const sow = queryResult.value;

    if (!sow) {
      return res.status(404).json({ error: 'SoW not found' });
    }

    // Sign the SoW in Convex
    const signResponse = await fetch(`${CONVEX_URL}/api/mutation`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        path: 'sows:sign',
        args: {
          customerId,
          signatureDataUrl,
          signerName,
          signerTitle,
          signerIp,
        },
      }),
    });

    const signResult = await signResponse.json();

    if (signResult.status === 'error') {
      return res.status(500).json({ error: signResult.errorMessage || 'Failed to sign SoW' });
    }

    // Generate signed SoW HTML
    const signedDate = new Date().toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
    
    const sowHtml = generateSowHtml({ ...sow, signedBy: signerName, signerTitle }, signatureDataUrl, signedDate);
    
    const filename = `NordSym_SoW_${sow.customerName.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.html`;
    const emailSubject = `Signed SoW: NordSym X ${sow.customerName}`;

    // Send emails to both parties
    await Promise.all([
      sendEmailWithAttachment('gustav@nordsym.com', emailSubject, { ...sow, signedBy: signerName, signerTitle }, signedDate, sowHtml, filename),
      sendEmailWithAttachment(partnerEmail, emailSubject, { ...sow, signedBy: signerName, signerTitle }, signedDate, sowHtml, filename),
    ]);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('SoW signing error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
