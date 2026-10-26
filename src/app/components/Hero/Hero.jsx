import { ArrowRight, MapPin, Clock, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="mx-auto mt-10 flex w-full flex-col items-center px-4 text-center sm:mt-14 sm:px-6 lg:mt-20 lg:w-[75%] lg:px-0">
      {/* Hero copy */}
      <div className="w-full max-w-4xl">
        <span className="mb-5 inline-flex items-center gap-2 rounded-md border-2 border-black bg-[#FFE45C] px-3 py-1.5 text-xs font-extrabold uppercase tracking-wide text-black shadow-[3px_3px_0px_0px_#000]">
          <span className="h-2 w-2 rounded-full bg-green-600" />A new way to
          experience your city
        </span>

        <h1 className="mb-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
          Your city.
          <br />
          Your moment.
          <br />
          <span className="text-fuchsia-500">Go find it.</span>
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl">
          Discover nearby places, spontaneous plans, and things happening around
          you. Find your next favourite spot, meet your kind of people, and make
          today worth stepping out for.
        </p>
      </div>

      {/* Early access form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="mb-5 flex w-full max-w-lg flex-col gap-3 sm:flex-row"
      >
        <input
          type="email"
          placeholder="Your email address"
          aria-label="Your email address"
          required
          className="min-w-0 flex-1 rounded-md border-2 border-black bg-white px-4 py-3.5 text-base text-slate-950 shadow-[3px_3px_0px_0px_#000] outline-none transition-shadow placeholder:text-slate-400 focus:shadow-[5px_5px_0px_0px_#000]"
        />

        <button
          type="submit"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md border-2 border-black bg-[#FFE45C] px-5 py-3.5 font-extrabold text-black shadow-[4px_4px_0px_0px_#000] transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none"
        >
          Get Early Access
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>

      <p className="mb-12 flex items-center justify-center gap-2 text-sm font-medium text-slate-500 sm:mb-16">
        <Users className="h-4 w-4 shrink-0" />
        Help shape the first version of What’s Today?
      </p>

      {/* Live discovery preview */}
      <div className="relative w-full max-w-md -rotate-1 rounded-xl border-2 border-black bg-white p-4 text-left shadow-[7px_7px_0px_0px_#000] transition-transform duration-200 hover:rotate-0 sm:p-6">
        <div className="mb-5 flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-md border-2 border-black bg-[#C8F7DC] px-2.5 py-1.5 text-xs font-extrabold text-black">
            <span className="h-2 w-2 rounded-full bg-green-600" />
            HAPPENING NOW
          </span>

          <span className="text-xs font-bold text-slate-500">NEAR YOU</span>
        </div>

        <div className="mb-4 flex items-start gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border-2 border-black bg-[#DCD5FF]">
            <span className="text-2xl">🎸</span>
          </div>

          <div className="min-w-0">
            <h2 className="font-extrabold leading-snug text-slate-950 sm:text-lg">
              Underground Indie Music Gig
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              A local find worth checking out.
            </p>
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 text-sm text-slate-600">
          <span className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" />
            Moonshine Cafe, Jubilee Hills
          </span>

          <span className="flex items-start gap-2">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" />
            Check the event details and timing
          </span>
        </div>

        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-md border-2 border-black bg-slate-950 px-4 py-3 text-sm font-extrabold text-white transition-colors hover:bg-slate-800"
        >
          Explore what’s happening
          <ArrowRight className="h-4 w-4" />
        </button>

        <p className="mt-3 text-center text-xs text-slate-400">
          Illustrative preview · Event details may vary
        </p>
      </div>
    </section>
  );
}
