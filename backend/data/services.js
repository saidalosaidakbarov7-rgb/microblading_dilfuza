// Bu ro'yxatdagi id'lar frontend/src/data/uz.js va ru.js dagi
// services.items[].id bilan bir xil bo'lishi kerak. Agar frontendda yangi
// xizmat qo'shsangiz, shu yerga ham qo'shing — aks holda Telegram xabarida
// xizmat nomi o'rniga id chiqadi.

const services = {
  microblading: { uz: "Microblading", ru: "Микроблейдинг" },
  korrektsiya: { uz: "Korreksiya", ru: "Коррекция" },
  shakllantirish: { uz: "Qosh shakllantirish", ru: "Дизайн формы бровей" },
  boyash: { uz: "Qosh bo'yash", ru: "Окрашивание бровей" },
  laminatsiya: { uz: "Laminatsiya", ru: "Ламинирование" },
  boshqa: { uz: "Boshqa xizmatlar", ru: "Другие услуги" },
};

export function serviceName(id, lang = "uz") {
  const entry = services[id];
  if (!entry) return id || "-";
  return entry[lang] || entry.uz;
}

export default services;
