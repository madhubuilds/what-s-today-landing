import { useState } from "react";
import { Menu, X, MapPin } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-lg border-b border-slate-200/50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo Section */}
          <div className="flex items-center gap-1 cursor-pointer">
            <div className="bg-gradient-to-tr from-brand-600 to-brand-400 rounded-xl shadow-soft">
              <MapPin className="" strokeWidth={2.5} color="red" size={30} />
            </div>
            <span className="uppercase font-display font-bold text-4xl text-slate-900 tracking-tight">
              What's Today?
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#vision"
              className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
            >
              Our Vision
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
            >
              Contact
            </a>
            <button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-soft hover:shadow-lg hover:-translate-y-0.5">
              Join Early Access
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 p-2"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-6 shadow-xl absolute w-full left-0">
          <div className="flex flex-col space-y-4">
            <a
              href="#vision"
              className="text-base font-medium text-slate-600 px-2 py-1"
              onClick={() => setIsOpen(false)}
            >
              Our Vision
            </a>
            <a
              href="#contact"
              className="text-base font-medium text-slate-600 px-2 py-1"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <button className="bg-slate-900 text-white px-5 py-3.5 rounded-xl text-center font-medium w-full mt-4 shadow-soft">
              Join Early Access
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
