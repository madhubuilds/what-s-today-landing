import { BRAND_NAME } from "../constance/constance";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Vision from "../components/Vision/Vision";
import CreateActivity from "../components/Activity/CreateActivity";
import Discover from "../components/Discover/Discover";
import ActivityDetails from "../components/ActivityDetails/ActivityDetails";

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#FFFDF7] font-sans text-slate-950">
      <Navbar />

      <main className="w-full pt-24 sm:pt-28">
        {/* Hero: headline, CTA, and map */}
        <Hero />
        <Discover />
        <CreateActivity />
        <ActivityDetails />
        {/* Vision: purpose and product explanation */}
        <section className="mt-16 border-t-2 border-black/10 sm:mt-24">
          <Vision />
        </section>
      </main>

      <footer
        id="contact"
        className="border-t-2 border-black bg-[#FFFDF7] px-4 pb-24 pt-8 sm:px-6 md:pb-8 lg:px-8"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <a href="#home" className="text-sm font-black tracking-tight">
            {BRAND_NAME}
            <span className="text-teal-600">?</span>
          </a>

          <p className="text-xs text-slate-500 sm:text-sm">
            © {new Date().getFullYear()} {BRAND_NAME}. Built in Hyderabad.
          </p>

          <a
            href="mailto:hello@whatstoday.in"
            className="text-sm font-bold transition-colors hover:text-teal-700"
          >
            Get in touch ↗
          </a>
        </div>
      </footer>
    </div>
  );
}
