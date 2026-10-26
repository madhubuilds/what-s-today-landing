
import {
  MapPin,
  House,
  Compass,
  Lightbulb,
  ArrowUpRight,
} from "lucide-react";

const navLinks = [
  { label: "Our Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
];

const mobileLinks = [
  { label: "Home", href: "#home", Icon: House },
  { label: "Discover", href: "#discover", Icon: Compass },
  { label: "Vision", href: "#vision", Icon: Lightbulb },
];

export default function Navbar() {
  return (
    <>
      {/* Desktop + Mobile Top Bar */}
      <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-black bg-[#FFFDF7]">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8"
        >
          {/* Brand */}
          <a
            href="#home"
            aria-label="What's Today? Home"
            className="group flex min-w-0 items-center gap-2.5"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border-2 border-black bg-[#FFE45C] shadow-[3px_3px_0px_0px_#000] transition-transform group-hover:-translate-y-0.5 sm:h-11 sm:w-11">
              <MapPin
                className="h-6 w-6 text-black sm:h-7 sm:w-7"
                strokeWidth={2.8}
              />
            </span>

            <span className="flex flex-col leading-none">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-500 sm:text-[11px]">
                Your city, today
              </span>
              <span className="mt-1 whitespace-nowrap text-lg font-black tracking-tight text-slate-950 sm:text-2xl">
                WHAT'S TODAY<span className="text-teal-600">?</span>
              </span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden items-center gap-7 md:flex lg:gap-9">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-slate-700 transition-colors hover:text-teal-700"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#early-access"
              className="inline-flex items-center gap-2 rounded-md border-2 border-black bg-[#FFE45C] px-5 py-2.5 text-sm font-extrabold text-black shadow-[4px_4px_0px_0px_#000] transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none"
            >
              Get Early Access
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* Compact mobile CTA */}
          <a
            href="#early-access"
            className="rounded-md border-2 border-black bg-[#FFE45C] px-3 py-2 text-xs font-extrabold text-black shadow-[3px_3px_0px_0px_#000] transition-transform active:translate-x-0.5 active:translate-y-0.5 active:shadow-none sm:px-4 sm:text-sm md:hidden"
          >
            Join Us
          </a>
        </nav>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav
        aria-label="Mobile navigation"
        className="fixed inset-x-0 bottom-0 z-50 border-t-2 border-black bg-[#FFFDF7] pb-[env(safe-area-inset-bottom)] md:hidden"
      >
        <div className="mx-auto grid h-[66px] max-w-lg grid-cols-4 items-center px-2">
          {mobileLinks.map(({ label, href, Icon }) => (
            <a
              key={href}
              href={href}
              className="flex h-full flex-col items-center justify-center gap-1 text-slate-600 transition-colors hover:text-black"
            >
              <Icon className="h-5 w-5" strokeWidth={2.2} />
              <span className="text-[10px] font-extrabold">{label}</span>
            </a>
          ))}

          <a
            href="#early-access"
            className="mx-auto flex h-11 w-full max-w-[76px] flex-col items-center justify-center gap-0.5 rounded-md border-2 border-black bg-[#FFE45C] text-black shadow-[2px_2px_0px_0px_#000] transition-transform active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
          >
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.8} />
            <span className="text-[9px] font-black">JOIN</span>
          </a>
        </div>
      </nav>
    </>
  );
}
