const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function sendContactEmail({ name, email, company, phone, service, message }) {
  const html = `
    <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;background:#0A0A0A;color:#fff;padding:32px;border-radius:12px;border:1px solid rgba(212,175,55,0.2)">
      <h2 style="color:#D4AF37;margin-bottom:24px">New Enquiry — VINOFYX</h2>
      <table style="width:100%;border-collapse:collapse">
        ${[
          ["Name", name], ["Email", email], ["Company", company || "—"],
          ["Phone", phone || "—"], ["Service", service || "—"],
        ].map(([k, v]) => `
          <tr>
            <td style="padding:8px 0;color:#888;width:110px;vertical-align:top">${k}</td>
            <td style="padding:8px 0;color:#fff;font-weight:500">${v}</td>
          </tr>
        `).join("")}
      </table>
      <div style="margin-top:24px;padding:16px;background:#111;border-radius:8px;border-left:3px solid #D4AF37">
        <p style="color:#aaa;margin:0 0 8px;font-size:12px">MESSAGE</p>
        <p style="color:#fff;margin:0;line-height:1.6">${message}</p>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
    replyTo: email,
    subject: `[VINOFYX] New enquiry from ${name}${company ? ` — ${company}` : ""}`,
    html,
  });
}

async function sendAutoReply({ name, email }) {
  await transporter.sendMail({
    from: process.env.MAIL_FROM,
    to: email,
    subject: "Thank you for reaching out — VINOFYX",
    html: `
      <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;background:#0A0A0A;color:#fff;padding:32px;border-radius:12px">
        <h2 style="color:#D4AF37">Thank you, ${name}!</h2>
        <p style="color:#aaa;line-height:1.7">
          We've received your enquiry and our team will be in touch within 24 hours.
          In the meantime, feel free to explore our solutions at <a href="https://vinofyx.com" style="color:#D4AF37">vinofyx.com</a>.
        </p>
        <p style="color:#666;font-size:12px;margin-top:32px">
          VINOFYX PRIVATE LIMITED — Your Growth, Our Responsibility
        </p>
      </div>
    `,
  });
}

module.exports = { sendContactEmail, sendAutoReply };
