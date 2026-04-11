import nodemailer from 'nodemailer';

type MailField = {
  label: string;
  value: string;
};

type SendOwnerNotificationOptions = {
  formName: string;
  subject: string;
  fields: MailField[];
  replyTo?: string;
  userAgent?: string;
  ipAddress?: string;
};

let transporter: nodemailer.Transporter | null = null;

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function getRequiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function getTransporter(): nodemailer.Transporter {
  if (transporter) {
    return transporter;
  }

  const host = process.env.SMTP_HOST ?? 'smtp.gmail.com';
  const port = Number(process.env.SMTP_PORT ?? 587);
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;

  transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user: getRequiredEnv('SMTP_USER'),
      pass: getRequiredEnv('SMTP_PASS'),
    },
  });

  return transporter;
}

export async function sendOwnerNotification({
  formName,
  subject,
  fields,
  replyTo,
  userAgent,
  ipAddress,
}: SendOwnerNotificationOptions) {
  const smtpUser = getRequiredEnv('SMTP_USER');
  const recipient = process.env.CONTACT_EMAIL ?? smtpUser;
  const fromAddress = process.env.SMTP_FROM ?? smtpUser;

  const rowsHtml = fields
    .map(
      (field) =>
        `<tr><td style="padding:8px 12px;border:1px solid #d1d5db;font-weight:600;background:#f8fafc;">${escapeHtml(
          field.label
        )}</td><td style="padding:8px 12px;border:1px solid #d1d5db;">${escapeHtml(field.value)}</td></tr>`
    )
    .join('');

  const rowsText = fields.map((field) => `${field.label}: ${field.value}`).join('\n');

  const html = `
    <div style="font-family:Arial,sans-serif;color:#0f172a;">
      <h2 style="margin:0 0 12px;">${escapeHtml(formName)} Submission</h2>
      <p style="margin:0 0 12px;">A new submission was received from your website.</p>
      <table style="border-collapse:collapse;width:100%;max-width:680px;">${rowsHtml}</table>
      <p style="margin:16px 0 4px;"><strong>IP Address:</strong> ${escapeHtml(ipAddress ?? 'Unknown')}</p>
      <p style="margin:0 0 4px;"><strong>User Agent:</strong> ${escapeHtml(userAgent ?? 'Unknown')}</p>
      <p style="margin:0;"><strong>Submitted At:</strong> ${new Date().toISOString()}</p>
    </div>
  `;

  const text = [
    `${formName} Submission`,
    '',
    rowsText,
    '',
    `IP Address: ${ipAddress ?? 'Unknown'}`,
    `User Agent: ${userAgent ?? 'Unknown'}`,
    `Submitted At: ${new Date().toISOString()}`,
  ].join('\n');

  await getTransporter().sendMail({
    from: fromAddress,
    to: recipient,
    subject,
    replyTo,
    html,
    text,
  });
}
