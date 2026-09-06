# Microblading Dilfuza

Premium microblading studiyasi uchun to'liq sayt: React/Vite frontend + Node.js/Express backend (Telegram bot integratsiyasi bilan).

## Loyiha strukturasi

```
dilfuza-microblading/
├── frontend/     React + Vite + Tailwind sayt
└── backend/      Booking formani Telegram botga yuboruvchi Express server
```

## 1. Telegram bot yaratish (avval shuni qiling)

1. Telegram'da **@BotFather** ga yozing, `/newbot` buyrug'ini yuboring va bot yarating.
2. BotFather bergan **tokenni** saqlab qo'ying — bu `TELEGRAM_BOT_TOKEN`.
3. So'rovlar qaysi chatga kelishini bilish uchun **@userinfobot** ga yozing — u sizga `chat_id` beradi. Bu — `TELEGRAM_CHAT_ID`. (Guruh yoki kanalga yubormoqchi bo'lsangiz, botni o'sha guruhga admin qilib qo'shing va guruh ID sidan foydalaning.)

## 2. Backend'ni ishga tushirish

```bash
cd backend
npm install
cp .env.example .env
```

`.env` faylini oching va quyidagilarni to'ldiring:

```
TELEGRAM_BOT_TOKEN=...      # BotFather'dan olingan token
TELEGRAM_CHAT_ID=...        # sizning yoki guruhingiz chat ID'si
PORT=4000
FRONTEND_URL=http://localhost:5173
```

Serverni ishga tushirish:

```bash
npm run dev      # avtomatik qayta yuklanadi (development)
# yoki
npm start        # production uchun
```

Tekshirish: `http://localhost:4000/api/health` manzili `{"ok":true}` qaytarishi kerak.

## 3. Frontend'ni ishga tushirish

```bash
cd frontend
npm install
cp .env.example .env   # kerak bo'lsa VITE_API_URL ni o'zgartiring
npm run dev
```

Sayt `http://localhost:5173` da ochiladi.

## 4. Rasmlarni qo'yish

Haqiqiy suratlaringiz tayyor bo'lgach, ularni `frontend/public/images/` papkasiga
`frontend/public/images/README.md` faylida ko'rsatilgan nomlar bilan joylashtiring
(masalan `hero.jpg`, `about.jpg`, `gallery-1-before.jpg`, `gallery-1-after.jpg` ...).
Kodda hech narsani o'zgartirish shart emas — rasm topilsa avtomatik chiqadi,
topilmasa chiroyli placeholder ko'rinadi.

## 5. Matn va narxlarni tahrirlash

Barcha matnlar ikkita faylda:

- `frontend/src/data/uz.js` — o'zbekcha matnlar
- `frontend/src/data/ru.js` — ruscha matnlar

Narxlar shu fayllar ichida `services.items[].priceLabel` va
`pricing.items[].price` maydonlarida — `"___ so'm"` o'rniga haqiqiy narxni yozing.

Kontakt ma'lumotlari (telefon, Instagram, Telegram, manzil, ish vaqti):
`frontend/src/data/uz.js` va `ru.js` dagi `footer` bo'limi, hamda
`frontend/src/data/config.js` (Instagram/Telegram linklar, telefon).

## 6. Yangi xizmat qo'shish

1. `frontend/src/data/uz.js` va `ru.js` dagi `services.items` massiviga yangi
   obyekt qo'shing (`id`, `name`, `description`, `priceLabel`, `duration`).
2. Xuddi shu `id` ni `backend/data/services.js` ga ham qo'shing — bu Telegram
   xabarida xizmat nomi to'g'ri chiqishi uchun kerak.
3. Agar "Narxlar" bo'limida ham ko'rinishini xohlasangiz, `pricing.items` ga
   ham qo'shing.

## 7. Production'ga chiqarish (deploy)

**Frontend:** `npm run build` — natija `frontend/dist/` papkasida. Buni istalgan
statik hosting'ga (Vercel, Netlify, Cloudflare Pages va h.k.) yuklashingiz mumkin.
Deploy paytida `VITE_API_URL` environment variable'ni backend serveringizning
haqiqiy manzili bilan sozlang (masalan `https://api.dilfuza.uz`).

**Backend:** Har qanday Node.js hosting'ga (VPS, Railway, Render va h.k.)
joylashtirishingiz mumkin. Production serverda:
- `.env` faylida `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID` va `FRONTEND_URL`
  (haqiqiy domeningiz) ni to'g'ri sozlang.
- Serverni `npm start` bilan ishga tushiring (yoki PM2 kabi process manager
  bilan doimiy ishlashini ta'minlang).
- HTTPS uchun Nginx/Caddy orqali reverse proxy sozlashni tavsiya qilamiz.

**Muhim:** Telegram bot tokeni hech qachon frontend kodida yoki brauzerda
ko'rinmasligi kerak — shu sababli booking formasi backend orqali ishlaydi,
token faqat backend serverida, `.env` faylida saqlanadi.

## Texnologiyalar

- **Frontend:** React 19, Vite, Tailwind CSS, lucide-react
- **Backend:** Node.js, Express, express-rate-limit, dotenv, cors
- **Tillar:** O'zbek va rus (frontendda til almashtirish tugmasi bilan)
