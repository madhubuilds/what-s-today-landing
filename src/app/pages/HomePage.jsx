import React from "react";
import { BRAND_NAME } from "../constance/constance";

import {
  MoveUpRight,
  MoveDownRight,
  MapPin,
  Compass,
  Calendar,
  Coffee,
} from "lucide-react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden font-sans text-slate-800">
      {/* Ambient Background Gradients */}
      {/* Top Left Teal Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-brand-400/20 rounded-full blur-[100px] pointer-events-none"></div>
      {/* Center Right Purple Glow (subtle contrast) */}
      <div className="absolute top-[20%] right-[-5%] w-[30rem] h-[30rem] bg-indigo-400/10 rounded-full blur-[120px] pointer-events-none"></div>
      <Navbar />

      {/* Main Content Container - Pushed down to account for fixed Navbar */}
      <main className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center">
       <Hero />
      </main>
    </div>
  );
}
