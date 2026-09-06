// Sayt bo'yicha umumiy sozlamalar. Bu yerdagi qiymatlarni o'zgartirish
// butun sayt bo'ylab avtomatik yangilanadi.

const config = {
  // Backend booking API manzili. Development va production uchun .env
  // orqali VITE_API_URL o'zgaruvchisi bilan almashtiring.
  apiUrl: import.meta.env.VITE_API_URL || "http://localhost:4000",

  instagramHandle: "@microblading_dilfuza",
  instagramUrl: "https://instagram.com/microblading_dilfuza",

  telegramHandle: "@microblading_dilfuza",
  telegramUrl: "https://t.me/microblading_dilfuza",

  phoneDisplay: "+998 90 951 35 51",
  phoneHref: "+998909513551",
};

export default config;
