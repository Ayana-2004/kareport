import { Resend } from 'resend';

// Placeholder-friendly by design: every provider credential below is optional.
// If a credential is missing, that channel is skipped and the request still
// succeeds — the form always completes for the client, automation kicks in
// once real Resend / Meta WhatsApp Cloud API credentials are supplied.

const TREATMENT_CATEGORIES = ['modern medicine and advanced surgery', 'Ayurveda', 'Dentistry', 'Other'];

function isValidEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}
function isValidPhone(v) {
  return /^[0-9+()\-\s]{7,}$/.test(v);
}
function escapeHtml(v) {
  return String(v)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: 'Invalid request body.' }, { status: 400 });
  }

  const fullName = String(body.fullName || '').trim();
  const email = String(body.email || '').trim();
  const phone = String(body.phone || '').trim();
  const treatmentCategory = String(body.treatmentCategory || '').trim();
  const comments = String(body.comments || '').trim();

  if (
    fullName.length < 2 ||
    !isValidEmail(email) ||
    !isValidPhone(phone) ||
    !TREATMENT_CATEGORIES.includes(treatmentCategory)
  ) {
    return Response.json({ ok: false, error: 'Missing or invalid enquiry fields.' }, { status: 400 });
  }

  const result = { ok: true, emailSent: false, whatsappSent: false };

  // --- Email (Resend): confirmation to client + alert to doctor/desk ---
  // kareport.com is verified on Resend, so RESEND_FROM_EMAIL should be an
  // address on that domain (e.g. info@kareport.com) — delivery then works
  // to any recipient, not just the Resend account's own email.
  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const fromAddress = process.env.RESEND_FROM_EMAIL || 'KarePort <info@kareport.com>';
      const doctorEmail = process.env.DOCTOR_NOTIFY_EMAIL || 'info@kareport.com';

      // Absolute URL required: email clients load images from the public
      // internet, not the Next.js app, so a relative /kareport-navbar-logo.png
      // path (as used in app/layout.js metadata) won't resolve here.
      // The source PNG is a flat (non-transparent) square with the circular
      // badge centered on a white background, so it's clipped to a circle
      // via border-radius, same treatment as the site header (Header.jsx,
      // rounded-full) for the same source image — sized down further here
      // to sit as a small signature mark rather than a header-sized logo.
      const logoHtml = `
        <p style="margin: 20px 0 0;">
          <img src="https://kareport.com/kareport-navbar-logo.png" alt="KarePort" width="36" height="36" style="display: block; border: 0; border-radius: 50%;" />
        </p>
      `;

      const detailsHtml = `
        <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Treatment category:</strong> ${escapeHtml(treatmentCategory)}</p>
        ${comments ? `<p><strong>Additional notes:</strong> ${escapeHtml(comments)}</p>` : ''}
      `;

      await Promise.all([
        resend.emails.send({
          from: fromAddress,
          to: doctorEmail,
          // Includes the enquirer's name so each enquiry gets a distinct subject —
          // an identical subject on every send makes Gmail thread them all into
          // a single conversation instead of separate messages.
          subject: `New KarePort Enquiry — ${fullName}`,
          html: `
            <p>You have a new enquiry from the KarePort website:</p>
            ${detailsHtml}
            ${logoHtml}
          `,
        }),
        resend.emails.send({
          from: fromAddress,
          to: email,
          subject: 'We have received your enquiry',
          html: `
            <p>Thank you for contacting KarePort.</p>
            <p>Our clinical coordination team has received your enquiry and will review the
            details shortly. A coordinator will contact you within 48 hours.</p>
            <p>Regards,<br />KarePort Team</p>
            ${logoHtml}
          `,
        }),
      ]);

      result.emailSent = true;
    } catch (err) {
      console.error('Enquiry email send failed:', err);
    }
  }

  // --- WhatsApp (Meta Cloud API): automated acknowledgment to client ---
  // Requires WHATSAPP_CLOUD_TOKEN + WHATSAPP_PHONE_NUMBER_ID (the Meta Cloud
  // API sending number's ID, not the wa.me contact number). WHATSAPP_TEMPLATE_NAME
  // must be an approved template in the Meta Business account — defaults to
  // Meta's built-in "hello_world" test template until a real one is approved.
  if (process.env.WHATSAPP_CLOUD_TOKEN && process.env.WHATSAPP_PHONE_NUMBER_ID) {
    try {
      const toNumber = phone.replace(/[^0-9]/g, '');
      const templateName = process.env.WHATSAPP_TEMPLATE_NAME || 'hello_world';
      const templateLang = process.env.WHATSAPP_TEMPLATE_LANG || 'en_US';

      const waResponse = await fetch(
        `https://graph.facebook.com/v19.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${process.env.WHATSAPP_CLOUD_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            messaging_product: 'whatsapp',
            to: toNumber,
            type: 'template',
            template: {
              name: templateName,
              language: { code: templateLang },
            },
          }),
        }
      );

      if (!waResponse.ok) {
        console.error('WhatsApp send failed:', await waResponse.text());
      } else {
        result.whatsappSent = true;
      }
    } catch (err) {
      console.error('WhatsApp send failed:', err);
    }
  }

  return Response.json(result);
}
