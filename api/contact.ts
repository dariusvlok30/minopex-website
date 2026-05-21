import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { translate } from '@vitalets/google-translate-api';

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENT = 'darius.vlok@draglobal.com';

const LANG_NAMES: Record<string, string> = {
  ar: 'Arabic',
  el: 'Greek',
  fr: 'French',
  es: 'Spanish',
  de: 'German',
  zh: 'Chinese',
  pt: 'Portuguese',
  af: 'Afrikaans',
  sw: 'Swahili',
  zu: 'Zulu',
  xh: 'Xhosa',
  hi: 'Hindi',
  ru: 'Russian',
  it: 'Italian',
  nl: 'Dutch',
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, subject, message } = req.body as {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
  };

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Attempt translation — silently skip if it fails or message is already English
  let translatedMessage: string | null = null;
  let detectedLangName: string | null = null;

  try {
    const result = await translate(message, { to: 'en' });
    const srcCode: string = (result.raw as any)?.src ?? '';
    if (srcCode && srcCode !== 'en') {
      translatedMessage = result.text;
      detectedLangName = LANG_NAMES[srcCode] ?? srcCode.toUpperCase();
    }
  } catch {
    // Translation unavailable — email still sends without it
  }

  const safeMessage = message.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>');
  const safeTranslated = translatedMessage
    ? translatedMessage.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>')
    : null;

  const translationBlock = safeTranslated
    ? `
      <tr>
        <td style="padding: 20px 0 0;">
          <p style="margin: 0 0 8px; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
            English Translation
          </p>
          <div style="background: #fffbeb; border: 1px solid #F7C200; border-radius: 6px; padding: 16px; color: #111111; line-height: 1.7; font-size: 15px;">
            ${safeTranslated}
          </div>
        </td>
      </tr>`
    : '';

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin: 0; padding: 0; background: #f3f4f6; font-family: Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #f3f4f6; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%;">

          <!-- Header -->
          <tr>
            <td style="background: #111111; padding: 28px 32px; border-radius: 10px 10px 0 0;">
              <p style="margin: 0 0 4px; color: #F7C200; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em;">Minopex Website</p>
              <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 700;">New Contact Form Submission</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background: #ffffff; padding: 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
              <table width="100%" cellpadding="0" cellspacing="0">

                <!-- Contact details -->
                <tr>
                  <td style="padding-bottom: 20px; border-bottom: 1px solid #f3f4f6;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 5px 0; width: 90px; color: #9ca3af; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">Name</td>
                        <td style="padding: 5px 0; color: #111111; font-size: 15px; font-weight: 600;">${name}</td>
                      </tr>
                      <tr>
                        <td style="padding: 5px 0; color: #9ca3af; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">Email</td>
                        <td style="padding: 5px 0;"><a href="mailto:${email}" style="color: #CC1919; text-decoration: none; font-size: 15px;">${email}</a></td>
                      </tr>
                      ${phone ? `
                      <tr>
                        <td style="padding: 5px 0; color: #9ca3af; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">Phone</td>
                        <td style="padding: 5px 0; color: #111111; font-size: 15px;">${phone}</td>
                      </tr>` : ''}
                      <tr>
                        <td style="padding: 5px 0; color: #9ca3af; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">Subject</td>
                        <td style="padding: 5px 0; color: #111111; font-size: 15px; font-weight: 600;">${subject}</td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Original message -->
                <tr>
                  <td style="padding: 20px 0 0;">
                    <p style="margin: 0 0 8px; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                      Message${detectedLangName ? ` <span style="color: #F7C200;">(${detectedLangName})</span>` : ''}
                    </p>
                    <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 16px; color: #111111; line-height: 1.7; font-size: 15px;">
                      ${safeMessage}
                    </div>
                  </td>
                </tr>

                ${translationBlock}

                <!-- Footer note -->
                <tr>
                  <td style="padding: 24px 0 0; border-top: 1px solid #f3f4f6; margin-top: 20px;">
                    <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                      Reply to this email to respond directly to ${name}.
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  await resend.emails.send({
    from: 'Minopex Website <onboarding@resend.dev>',
    to: RECIPIENT,
    replyTo: email,
    subject: `[Minopex] ${subject} — ${name}`,
    html,
  });

  return res.status(200).json({ success: true });
}
