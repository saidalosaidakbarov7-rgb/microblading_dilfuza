import "dotenv/config";
import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import bookingRouter from "./routes/booking.js";

const app = express();
const PORT = process.env.PORT || 4000;

// Bir nechta manzilni vergul bilan ajratib yozish mumkin:
// FRONTEND_URL=http://localhost:5173,https://dilfuza.uz
const allowedOrigins = (process.env.FRONTEND_URL || "http://localhost:5173")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      // Postman kabi origin'siz so'rovlarga ham ruxsat beramiz (health-check uchun)
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("CORS: ruxsat etilmagan manzil"));
    },
  })
);
app.use(express.json({ limit: "20kb" }));

// Spam/DDoS'dan himoya: 1 IP uchun 15 daqiqada 10 ta so'rov
const bookingLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
});

app.get("/api/health", (_req, res) => res.json({ ok: true }));
app.use("/api/booking", bookingLimiter, bookingRouter);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ ok: false, error: "server_error" });
});

app.listen(PORT, () => {
  console.log(`Dilfuza backend ${PORT}-portda ishga tushdi`);
});
