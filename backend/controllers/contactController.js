const { validationResult } = require("express-validator");
const { sendContactEmail, sendAutoReply } = require("../services/emailService");
const pool = require("../config/db");

exports.submitContact = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ success: false, errors: errors.array() });
    }

    const { name, email, company, phone, service, message } = req.body;

    // Store in DB (non-blocking — if DB fails, still send email)
    pool.query(
      `INSERT INTO contacts (name, email, company, phone, service, message, created_at)
       VALUES ($1,$2,$3,$4,$5,$6,NOW())`,
      [name, email, company, phone, service, message]
    ).catch((err) => console.error("DB insert failed:", err.message));

    // Send emails in parallel
    await Promise.all([
      sendContactEmail({ name, email, company, phone, service, message }),
      sendAutoReply({ name, email }),
    ]);

    res.status(200).json({
      success: true,
      message: "Message received. We'll be in touch within 24 hours.",
    });
  } catch (err) {
    next(err);
  }
};
