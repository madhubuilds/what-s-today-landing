import { ArrowRight, MapPin, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 pb-16 pt-10 sm:px-8 sm:pt-16 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:pb-24 lg:pt-20"
    >
      {/* LEFT: Hero content */}
      <div className="flex flex-col items-start text-left">
        <span className="mb-6 inline-flex items-center gap-2 rounded-md border-2 border-black bg-[#FFE45C] px-3 py-2 text-xs font-extrabold uppercase tracking-wide shadow-[3px_3px_0px_0px_#000]">
          <span className="h-2 w-2 rounded-full bg-green-600" />
          Your city, your next plan
        </span>

        <h1 className="mb-6 max-w-2xl text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
          Your city.
          <br />
          Your moment.
          <br />
          <span className="text-fuchsia-500">Go find it.</span>
        </h1>

        <p className="mb-8 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
          Discover places, find things happening around you, and turn
          spontaneous ideas into real plans. Your next story could start just
          around the corner.
        </p>

        <form
          id="early-access"
          onSubmit={(e) => e.preventDefault()}
          className="flex w-full max-w-lg flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            aria-label="Your email address"
            placeholder="Your email address"
            className="min-w-0 flex-1 rounded-md border-2 border-black bg-white px-4 py-3.5 shadow-[3px_3px_0px_0px_#000] outline-none placeholder:text-slate-400 focus:shadow-[5px_5px_0px_0px_#000]"
          />

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-black bg-[#FFE45C] px-5 py-3.5 font-extrabold shadow-[4px_4px_0px_0px_#000] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            Get Early Access
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <p className="mt-4 text-sm text-slate-500">
          Help shape the first version of What&apos;s Today?
        </p>
      </div>

      {/* RIGHT: Map preview placeholder */}
      <div
        id="discover"
        className="relative min-h-[360px] w-full rounded-xl border-2 border-black bg-[#E8EDE5] p-3 shadow-[7px_7px_0px_0px_#000] sm:min-h-[440px] lg:min-h-[520px]"
      >
        <div className="relative flex min-h-[330px] h-full flex-col overflow-hidden rounded-lg border border-black/20 bg-[#F7F5EC] sm:min-h-[410px] lg:min-h-[490px]">
          {/* Preview header */}
          <div className="relative z-10 flex items-center justify-between gap-2 p-3 sm:p-4">
            <span className="inline-flex items-center gap-2 rounded-md border-2 border-black bg-white px-3 py-2 text-xs font-extrabold shadow-[2px_2px_0px_0px_#000]">
              <MapPin className="h-4 w-4" />
              HYDERABAD
            </span>

            <span className="rounded-md border-2 border-black bg-[#C8F7DC] px-3 py-2 text-xs font-extrabold">
              PREVIEW
            </span>
          </div>

          {/* Decorative map-like canvas */}
          <div className="relative flex flex-1 items-center justify-center overflow-hidden p-5">
            <div className="absolute -left-10 top-16 h-16 w-[120%] rotate-[-22deg] border-y-2 border-white bg-[#DCE4D6]" />
            <div className="absolute -left-10 top-40 h-12 w-[120%] rotate-[28deg] border-y-2 border-white bg-[#DCE4D6]" />
            <div className="absolute left-1/2 top-0 h-[130%] w-12 -translate-x-1/2 rotate-[25deg] border-x-2 border-white bg-[#DCE4D6]" />
            <div className="absolute bottom-8 left-0 h-8 w-full rotate-[-8deg] border-y-2 border-white bg-[#DCE4D6]" />

            {/* Sample discovery cards */}
            <div className="absolute left-[8%] top-[20%] rotate-[-4deg] rounded-lg border-2 border-black bg-white p-3 shadow-[4px_4px_0px_0px_#000] sm:left-[12%]">
              <p className="text-xs font-extrabold">COFFEE SPOT</p>
              <p className="mt-1 text-xs text-slate-500">
                Your next favourite?
              </p>
            </div>

            <div className="absolute right-[6%] top-[42%] rotate-[3deg] rounded-lg border-2 border-black bg-[#FFE45C] p-3 shadow-[4px_4px_0px_0px_#000] sm:right-[10%]">
              <Sparkles className="mb-2 h-5 w-5" />
              <p className="text-xs font-extrabold">WHAT&apos;S HAPPENING?</p>
            </div>

            <div className="absolute bottom-[15%] left-[20%] rotate-[2deg] rounded-lg border-2 border-black bg-[#F9C6E5] p-3 shadow-[4px_4px_0px_0px_#000]">
              <p className="text-xs font-extrabold">MAKE A PLAN</p>
              <p className="mt-1 text-xs">Bring your people.</p>
            </div>

            {/* Central location marker */}
            <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-black bg-fuchsia-400 shadow-[4px_4px_0px_0px_#000]">
              <MapPin className="h-7 w-7" />
            </div>
          </div>

          <div className="relative z-10 border-t-2 border-black bg-white px-4 py-3">
            <p className="text-sm font-extrabold">
              There&apos;s more happening around you.
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Places · People · Plans
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
