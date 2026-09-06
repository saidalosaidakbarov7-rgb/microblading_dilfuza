const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function buildMessage({
  name,
  phone,
  serviceLabel,
  date,
  time,
  note,
}) {
  return [
    "🔔 <b>YANGI QABUL!</b>",
    "",
    `👤 <b>Ism:</b> ${escapeHtml(name)}`,
    `📞 <b>Telefon:</b> ${escapeHtml(phone)}`,
    `💄 <b>Xizmat:</b> ${escapeHtml(serviceLabel)}`,
    `📅 <b>Sana:</b> ${escapeHtml(date)}`,
    `🕐 <b>Vaqt:</b> ${escapeHtml(time)}`,
    `💬 <b>Izoh:</b> ${escapeHtml(note) || "—"}`,
  ].join("\n");
}

export async function sendTelegramMessage(text) {
  if (!TELEGRAM_BOT_TOKEN) {
    throw new Error("TELEGRAM_BOT_TOKEN .env da yo'q");
  }

  if (!TELEGRAM_CHAT_ID) {
    throw new Error("TELEGRAM_CHAT_ID .env da yo'q");
  }

  const url =
    `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  console.log("📤 Telegramga yuborilmoqda...");

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text,
      parse_mode: "HTML",
    }),
  });

  const data = await response.json();

  console.log("Telegram javobi:", data);

  if (!response.ok || !data.ok) {
    throw new Error(
      data.description || "Telegram API xatosi"
    );
  }

  return data;
}