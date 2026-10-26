
import { BRAND_NAME } from "../constance/constance";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Vision from "../components/Vision/Vision";

export default function HomePage() {
  return (
    <div className="relative isolate min-h-screen bg-[#FFFDF7] font-sans text-slate-900">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[900px] overflow-hidden"
      >
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-teal-300/20 blur-[100px] sm:h-96 sm:w-96" />

        <div className="absolute -right-40 top-72 h-80 w-80 rounded-full bg-[#DCD5FF]/50 blur-[100px] sm:h-[30rem] sm:w-[30rem]" />

        <div className="absolute left-1/2 top-[480px] h-64 w-64 -translate-x-1/2 rounded-full bg-[#FFE45C]/15 blur-[100px]" />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main page content */}
      <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-col pt-24 pb-12 sm:pt-28 sm:pb-16">
        {/* Primary message and early access */}
        <Hero />

        {/* Product purpose and discovery preview */}
        <Vision />
      </main>

      {/* Footer */}
      <footer
        id="contact"
        className="relative z-10 border-t-2 border-black/10 bg-[#FFFDF7] px-4 pb-24 pt-7 sm:px-6 md:pb-8 lg:px-8"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <a
            href="#home"
            className="text-sm font-black tracking-tight text-slate-950"
          >
            {BRAND_NAME}
            <span className="text-teal-600">.</span>
          </a>

          <p className="text-xs font-medium text-slate-500 sm:text-sm">
            © {new Date().getFullYear()} {BRAND_NAME}. Built with love in
            Hyderabad.
          </p>

          <a
            href="mailto:hello@whatstoday.in"
            className="text-sm font-bold text-slate-700 transition-colors hover:text-teal-700"
          >
            Get in touch
          </a>
        </div>
      </footer>
    </div>
  );
}
