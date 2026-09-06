import { Telegraf, Markup } from "telegraf";
import dotenv from "dotenv";

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

const mainMenu = Markup.inlineKeyboard([
  [
    Markup.button.callback("👩 Biz kimmiz?", "ABOUT"),
  ],
  [
    Markup.button.callback("💰 Xizmatlar va narxlar", "PRICES"),
  ],
  [
    Markup.button.callback("📅 Qabulga yozilish", "BOOKING"),
  ],
  [
    Markup.button.callback("❓ Ko‘p so‘raladigan savollar", "FAQ"),
  ],
  [
    Markup.button.url(
      "📸 Instagram",
      "https://instagram.com/microblading_dilfuza"
    ),
  ],
]);

bot.start(async (ctx) => {
  await ctx.reply(
    `👋 Assalomu alaykum!

🤎 *Microblading Dilfuza* studiyasiga xush kelibsiz.

Sizga qanday yordam bera olamiz?`,
    {
      parse_mode: "Markdown",
      ...mainMenu,
    }
  );
});

bot.action("ABOUT", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    `👩 *Biz kimmiz?*

Men — Dilfuza, microblading va qosh dizayni bo‘yicha mutaxassisman.

Har bir mijozning yuz tuzilishi, teri toni va individual xususiyatlarini hisobga olib, sizga mos qosh shaklini tanlaymiz.

✨ Bizning asosiy maqsadimiz — tabiiy va chiroyli natija.

🤎 Individual yondashuv
✨ Tabiiy natija
🧼 Gigiyena va sterillik`,
    {
      parse_mode: "Markdown",
      ...Markup.inlineKeyboard([
        [Markup.button.callback("⬅️ Bosh menyu", "MENU")],
      ]),
    }
  );
});

bot.action("PRICES", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    `💰 *Xizmatlar va narxlar*

✨ Microblading
💵 ___ so‘m

🔄 Korreksiya
💵 ___ so‘m

✨ Qosh shakllantirish
💵 ___ so‘m

🎨 Qosh bo‘yash
💵 ___ so‘m

💫 Laminatsiya
💵 ___ so‘m`,
    {
      parse_mode: "Markdown",
      ...Markup.inlineKeyboard([
        [Markup.button.callback("⬅️ Bosh menyu", "MENU")],
      ]),
    }
  );
});

bot.action("FAQ", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    `❓ *Ko‘p so‘raladigan savollar*

*Microblading nima?*

Microblading — qoshga tabiiy tukchaga o‘xshash nozik chiziqlar yaratish protsedurasi.

⏱ *Qancha vaqt davom etadi?*

Odatda 2–2.5 soat.

✨ *Natija qancha saqlanadi?*

Teri turi va parvarishga qarab odatda 12–18 oy.

🔄 *Korreksiya kerakmi?*

Odatda 4–6 haftadan keyin tavsiya qilinadi.`,
    {
      parse_mode: "Markdown",
      ...Markup.inlineKeyboard([
        [Markup.button.callback("⬅️ Bosh menyu", "MENU")],
      ]),
    }
  );
});

bot.action("MENU", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    `👋 *Microblading Dilfuza*

Sizga qanday yordam bera olamiz?`,
    {
      parse_mode: "Markdown",
      ...mainMenu,
    }
  );
});

bot.action("BOOKING", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    `📅 *Qabulga yozilish*

Bu bo‘limni hozir keyingi bosqichda to‘liq qilamiz.

Unda ism, telefon, Telegram username, xizmat, sana va izoh olinadi.`,
    {
      parse_mode: "Markdown",
      ...Markup.inlineKeyboard([
        [Markup.button.callback("⬅️ Bosh menyu", "MENU")],
      ]),
    }
  );
});

bot.launch();

console.log("🤎 Microblading Dilfuza bot ishga tushdi!");