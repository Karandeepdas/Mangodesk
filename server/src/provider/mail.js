import nodemailer from 'nodemailer';

function makeTransport() {
  const { EMAIL_USER, EMAIL_PASS } = process.env;
  if (!EMAIL_USER || !EMAIL_PASS) {
    throw new Error('EMAIL_USER or EMAIL_PASS missing in environment');
  }
  return nodemailer.createTransport({
    service: 'gmail',
    auth: { user: EMAIL_USER, pass: EMAIL_PASS }
  });
}

export default async function mailSender(req, res) {
  try {
    const { emails,title, description } = req.body;

    if (!Array.isArray(emails) || emails.length === 0) {
      return res.status(400).json({ message: 'emails must be a non-empty array' });
    }

    const transporter = makeTransport();

    const info = await transporter.sendMail({
      from:process.env.EMAIL_USER,
      to: emails.join(','),
      subject: title,
      text: description
    });

    return res.status(200).json({ ok: true, id: info.messageId });
  } catch (err) {
    console.error('[Mail Error]', err);
    return res.status(500).json({ message: 'Failed to send email' });
  }
}