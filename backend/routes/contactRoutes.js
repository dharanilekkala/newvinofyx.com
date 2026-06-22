const express = require("express");
const { body } = require("express-validator");
const { submitContact } = require("../controllers/contactController");

const router = express.Router();

router.post(
  "/",
  [
    body("name").trim().notEmpty().withMessage("Name is required").isLength({ max: 100 }),
    body("email").trim().isEmail().withMessage("Valid email is required").normalizeEmail(),
    body("message").trim().notEmpty().withMessage("Message is required").isLength({ max: 2000 }),
    body("company").optional().trim().isLength({ max: 200 }),
    body("phone").optional().trim().isLength({ max: 30 }),
    body("service").optional().trim().isLength({ max: 100 }),
  ],
  submitContact
);

module.exports = router;
