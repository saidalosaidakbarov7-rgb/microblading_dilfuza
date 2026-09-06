import { useState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useBooking } from "../context/BookingContext";
import BrowStrokes from "./BrowStrokes";
import config from "../data/config";

const initialForm = { name: "", phone: "", service: "", date: "", time: "", note: "" };

export default function BookingForm() {
  const { t, lang } = useLanguage();
  const { selectedService, setSelectedService } = useBooking();
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const service = selectedService || form.service;

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const payload = { ...form, service, lang };

    try {
      const res = await fetch(`${config.apiUrl}/api/booking`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      console.log("Booking response:", res.status, data);

    if (!res.ok || !data.ok) {
    throw new Error(data.message || data.error || "Request failed");
    }

      setStatus("success");
      setForm(initialForm);
      setSelectedService("");
      setForm(initialForm);
      setSelectedService("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="booking" className="py-20 md:py-28 bg-beige/40">
      <div className="container-page grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
        <div>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-clay mb-4">{t.booking.eyebrow}</p>
          <h2 className="font-display text-4xl sm:text-5xl text-ink">{t.booking.title}</h2>
          <BrowStrokes className="mt-5" />
          <p className="mt-5 font-body text-espresso/75 leading-relaxed max-w-sm">{t.booking.subtitle}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl border border-line p-6 sm:p-8 grid sm:grid-cols-2 gap-5"
        >
          <Field label={t.booking.labels.name}>
            <input
              required
              type="text"
              value={form.name}
              onChange={update("name")}
              placeholder={t.booking.placeholders.name}
              className="input"
            />
          </Field>

          <Field label={t.booking.labels.phone}>
            <input
              required
              type="tel"
              value={form.phone}
              onChange={update("phone")}
              placeholder={t.booking.placeholders.phone}
              className="input"
            />
          </Field>

          <Field label={t.booking.labels.service} className="sm:col-span-2">
            <select value={service} onChange={(e) => { setSelectedService(""); update("service")(e); }} required className="input">
              <option value="" disabled>
                {t.booking.servicePlaceholder}
              </option>
              {t.services.items.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </Field>

          <Field label={t.booking.labels.date}>
            <input required type="date" value={form.date} onChange={update("date")} className="input" />
          </Field>

          <Field label={t.booking.labels.time}>
            <input required type="time" value={form.time} onChange={update("time")} className="input" />
          </Field>

          <Field label={t.booking.labels.note} className="sm:col-span-2">
            <textarea
              value={form.note}
              onChange={update("note")}
              placeholder={t.booking.placeholders.note}
              rows={3}
              className="input resize-none"
            />
          </Field>

          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full rounded-full bg-ink text-ivory py-3.5 text-sm font-semibold tracking-wide hover:bg-espresso transition-colors disabled:opacity-60"
            >
              {status === "submitting" ? t.booking.submitting : t.booking.submit}
            </button>

            {status === "success" && (
              <p className="mt-4 flex items-center gap-2 text-sm font-body text-green-700 bg-green-50 border border-green-200 rounded-xl px-4 py-3">
                <CheckCircle2 size={16} className="shrink-0" />
                {t.booking.success}
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 flex items-center gap-2 text-sm font-body text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                <AlertCircle size={16} className="shrink-0" />
                {t.booking.error}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, children, className = "" }) {
  return (
    <label className={`block ${className}`}>
      <span className="block font-body text-xs font-semibold tracking-wide text-espresso/70 mb-2">{label}</span>
      {children}
    </label>
  );
}
