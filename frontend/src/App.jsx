import { LanguageProvider } from "./context/LanguageContext";
import { BookingProvider } from "./context/BookingContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import BookingForm from "./components/BookingForm";
import Instagram from "./components/Instagram";
import Footer from "./components/Footer";
export default function App() {
  return (
    <LanguageProvider>
      <BookingProvider>
        <div className="min-h-screen bg-[#FAF6F0] text-[#3B2A20] transition-colors duration-500 dark:bg-[#171311] dark:text-[#F5EDE4]">
          <Header />

          <main>
            <Hero />
            <About />
            <Services />
            <Pricing />
            <Gallery />
            <Testimonials />
            <FAQ />
            <BookingForm />
            <Instagram />
          </main>

          <Footer />
        </div>
      </BookingProvider>
    </LanguageProvider>
  );
}