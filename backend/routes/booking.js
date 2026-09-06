import { Router } from "express";
import { buildMessage, sendTelegramMessage } from "../telegram.js";
import { serviceName } from "../data/services.js";

const router = Router();

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function isPlausiblePhone(value) {
  const digits = String(value).replace(/\D/g, "");
  return digits.length >= 9;
}

router.post("/", async (req, res) => {
  const {
    name,
    phone,
    service,
    date,
    time,
    note,
    lang,
  } = req.body || {};

  if (!isNonEmptyString(name) || name.length > 100) {
    return res.status(400).json({
      ok: false,
      error: "invalid_name",
    });
  }

  if (!isNonEmptyString(phone) || !isPlausiblePhone(phone)) {
    return res.status(400).json({
      ok: false,
      error: "invalid_phone",
    });
  }

  if (!isNonEmptyString(service)) {
    return res.status(400).json({
      ok: false,
      error: "invalid_service",
    });
  }

  if (!isNonEmptyString(date)) {
    return res.status(400).json({
      ok: false,
      error: "invalid_date",
    });
  }

  if (!isNonEmptyString(time)) {
    return res.status(400).json({
      ok: false,
      error: "invalid_time",
    });
  }

  const serviceLabel = serviceName(
    service,
    lang === "ru" ? "ru" : "uz"
  );

  const message = buildMessage({
    name: name.trim(),
    phone: phone.trim(),
    serviceLabel,
    date,
    time,
    note: (note || "").trim().slice(0, 500),
  });

  try {
    await sendTelegramMessage(message);

    console.log("✅ Telegramga muvaffaqiyatli yuborildi!");

    return res.status(200).json({
      ok: true,
      message: "Telegramga yuborildi",
    });
  } catch (error) {
    console.error("❌ TELEGRAM XATOSI:", error.message);

    return res.status(502).json({
      ok: false,
      error: "telegram_failed",
      message: error.message,
    });
  }
});

export default router;