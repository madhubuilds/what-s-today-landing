import { useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
  Users,
  Share2,
  Check,
} from "lucide-react";

export default function ActivityDetails({ activity, onBack }) {
  const [joinStatus, setJoinStatus] = useState("none");

  const currentActivity = activity ?? {
    title: "Indie music evening",
    type: "HANGOUT",
    description:
      "Discover new sounds, meet music lovers, and enjoy an evening together. Come for the music, stay for the conversations.",
    location: "Gachibowli, Hyderabad",
    date: "Saturday",
    time: "7:00 PM",
    attendees: 12,
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1400&q=85",
    host: "Community host",
    joinPolicy: "approval",
  };

  const requiresApproval = currentActivity.joinPolicy === "approval";

  function handleJoin() {
    if (joinStatus !== "none") {
      setJoinStatus("none");
      return;
    }

    setJoinStatus(requiresApproval ? "requested" : "joined");
  }

  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-5 pb-20 pt-8 sm:px-8 lg:px-10">
      {/* Top actions */}
      <div className="mb-6 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-md border-2 border-black bg-white px-4 py-2.5 text-sm font-extrabold shadow-[3px_3px_0_#000] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#000]"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <button
          type="button"
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: currentActivity.title,
                text: currentActivity.description,
              }).catch(() => {});
            } else if (navigator.clipboard) {
              navigator.clipboard.writeText(window.location.href);
            }
          }}
          className="inline-flex items-center gap-2 rounded-md border-2 border-black bg-[#FFE45C] px-4 py-2.5 text-sm font-extrabold shadow-[3px_3px_0_#000] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#000]"
        >
          <Share2 size={17} />
          Share
        </button>
      </div>

      {/* Cover image */}
      <div className="relative overflow-hidden rounded-xl border-2 border-black bg-[#E8EDE5] shadow-[6px_6px_0_#000]">
        <img
          src={currentActivity.image}
          alt=""
          className="h-64 w-full object-cover sm:h-80 lg:h-[420px]"
        />

        <span className="absolute left-4 top-4 rounded-md border-2 border-black bg-[#C8F7DC] px-3 py-2 text-xs font-black tracking-wide">
          {currentActivity.type}
        </span>
      </div>

      {/* Main content */}
      <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_320px]">
        <section>
          <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
            THE PLAN
          </span>

          <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            {currentActivity.title}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {currentActivity.description}
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-4 rounded-lg border-2 border-black bg-white p-4 shadow-[3px_3px_0_#000]">
              <div className="rounded-md border-2 border-black bg-[#FFE45C] p-2">
                <CalendarDays size={21} />
              </div>
              <div>
                <p className="font-extrabold">When</p>
                <p className="mt-1 text-sm text-slate-600">
                  {currentActivity.date}
                </p>
                <p className="mt-1 flex items-center gap-2 text-sm text-slate-600">
                  <Clock3 size={15} />
                  {currentActivity.time}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-lg border-2 border-black bg-white p-4 shadow-[3px_3px_0_#000]">
              <div className="rounded-md border-2 border-black bg-[#C8F7DC] p-2">
                <MapPin size={21} />
              </div>
              <div>
                <p className="font-extrabold">Where</p>
                <p className="mt-1 text-sm text-slate-600">
                  {currentActivity.location}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Exact venue details can be shown to authorized attendees.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-lg border-2 border-black bg-white p-4 shadow-[3px_3px_0_#000]">
              <div className="rounded-md border-2 border-black bg-[#F9C6E5] p-2">
                <Users size={21} />
              </div>
              <div>
                <p className="font-extrabold">People interested</p>
                <p className="mt-1 text-sm text-slate-600">
                  {currentActivity.attendees} people
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join card */}
        <aside className="rounded-xl border-2 border-black bg-white p-5 shadow-[6px_6px_0_#000] lg:sticky lg:top-8">
          <p className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
            YOUR NEXT PLAN
          </p>

          <h2 className="mt-3 text-2xl font-black">Sounds good?</h2>

          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {requiresApproval
              ? "Send a request to the host. You'll need their approval to join."
              : "Join this activity and make a plan to be there."}
          </p>

          <button
            type="button"
            onClick={handleJoin}
            className={`mt-6 flex w-full items-center justify-center gap-2 rounded-md border-2 border-black px-4 py-3.5 font-extrabold shadow-[4px_4px_0_#000] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0_#000] ${
              joinStatus !== "none"
                ? "bg-[#C8F7DC]"
                : "bg-[#FFE45C]"
            }`}
          >
            {joinStatus !== "none" ? <Check size={19} /> : <ArrowUpRight size={19} />}
            {joinStatus === "requested"
              ? "Request sent · Cancel"
              : joinStatus === "joined"
                ? "Joined · Leave"
                : requiresApproval
                  ? "Request to join"
                  : "Join activity"}
          </button>

          {joinStatus !== "none" && (
            <p className="mt-3 text-center text-xs text-slate-600">
              Demo interaction only. Your response isn't saved.
            </p>
          )}

          <div className="mt-6 border-t-2 border-dashed border-slate-200 pt-5">
            <p className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
              HOSTED BY
            </p>
            <p className="mt-2 font-extrabold">{currentActivity.host}</p>
          </div>
        </aside>
      </div>
    </main>
  );
}