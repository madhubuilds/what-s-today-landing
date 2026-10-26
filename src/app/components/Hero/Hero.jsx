import { ArrowRight, MapPin, Clock, Users } from "lucide-react";
export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center mt-12 md:mt-20 w-full max-w-4xl mx-auto">
      {/* Main Typography */}
      <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
        Stop scrolling. <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">
          Start exploring.
        </span>
      </h1>
      <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
        Hyderabad's real-time social radar. We cut through the algorithm noise
        to connect you with hidden spots, live events, and activities happening
        exactly right now.
      </p>

      {/* Email Capture Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full max-w-md flex flex-col sm:flex-row gap-3 mb-8"
      >
        <input
          type="email"
          placeholder="Enter your email address"
          required
          className="flex-1 px-5 py-3.5 rounded-xl border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all text-slate-900 placeholder:text-slate-400"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
        >
          Get Access
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>
      <p className="text-sm text-slate-500 font-medium flex items-center gap-2 mb-16">
        <Users className="w-4 h-4" />
        Join 50+ early explorers shaping V1
      </p>

      {/* Floating App Card Mockup */}
      <div className="relative w-full max-w-sm text-left bg-white/60 backdrop-blur-xl border border-white rounded-3xl p-5 shadow-2xl hover:shadow-3xl transition-shadow duration-500 hover:-translate-y-1">
        {/* Subtle Top Glow inside the card */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-teal-400/50 to-transparent"></div>

        <div className="flex justify-between items-start mb-4">
          <div className="bg-indigo-50 text-indigo-700 text-xs font-bold px-2.5 py-1 rounded-md">
            HAPPENING NOW
          </div>
          <span className="text-xs font-semibold text-slate-400">
            0.5 km away
          </span>
        </div>

        <h3 className="font-display text-xl font-bold text-slate-900 mb-2">
          Underground Indie Music Gig
        </h3>

        <div className="flex flex-col gap-2 text-sm text-slate-600 mb-5">
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-slate-400" />
            Moonshine Cafe, Jubilee Hills
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-slate-400" />
            Started 15 mins ago • Ends at 11 PM
          </span>
        </div>

        <button className="w-full py-2.5 rounded-lg bg-teal-50 text-teal-700 font-semibold hover:bg-teal-100 transition-colors text-sm">
          View Details
        </button>
      </div>
    </section>
  );
}
