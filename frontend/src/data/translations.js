import uz from "./uz";
import ru from "./ru";

// Add a new language by importing its dictionary above and registering it here.
const translations = { uz, ru };

export const defaultLanguage = "uz";
export const availableLanguages = [
  { code: "uz", label: "UZ" },
  { code: "ru", label: "RU" },
];

export default translations;
