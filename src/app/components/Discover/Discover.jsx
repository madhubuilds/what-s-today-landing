import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
  Search,
  Users,
  Plus,
} from "lucide-react";

const categories = [
  "For you",
  "Food",
  "Music",
  "Outdoors",
  "Hangouts",
  "Events",
];

const discoveries = [
  {
    id: 1,
    type: "Food",
    kind: "PLACE",
    title: "Find your next coffee spot",
    location: "Jubilee Hills, Hyderabad",
    description: "A cosy corner for coffee and conversations.",
    image:
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=900&q=80",
    color: "bg-[#C8F7DC]",
    date: "",
    time: "",
    attendees: null,
  },
  {
    id: 2,
    type: "Music",
    kind: "HANGOUT",
    title: "Indie music evening",
    location: "Gachibowli, Hyderabad",
    description: "Discover new sounds and meet music lovers.",
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=900&q=80",
    color: "bg-[#F9C6E5]",
    date: "Saturday",
    time: "7:00 PM",
    attendees: 12,
  },
  {
    id: 3,
    type: "Outdoors",
    kind: "HANGOUT",
    title: "Sunset and a long walk",
    location: "Durgam Cheruvu, Hyderabad",
    description: "Get outside, slow down, and enjoy the evening.",
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=80",
    color: "bg-[#FFE45C]",
    date: "Sunday",
    time: "5:30 PM",
    attendees: 6,
  },
  {
    id: 4,
    type: "Food",
    kind: "PLACE",
    title: "A new place to try",
    location: "Hitech City, Hyderabad",
    description: "Save this idea for your next food adventure.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    color: "bg-[#DDE5FF]",
    date: "",
    time: "",
    attendees: null,
  },
  {
    id: 5,
    type: "Hangouts",
    kind: "HANGOUT",
    title: "Board games and new friends",
    location: "Madhapur, Hyderabad",
    description: "Bring your competitive side and meet new people.",
    image:
      "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=900&q=80",
    color: "bg-[#F9C6E5]",
    date: "Friday",
    time: "6:30 PM",
    attendees: 8,
  },
  {
    id: 6,
    type: "Events",
    kind: "EVENT",
    title: "A creative community meetup",
    location: "Hyderabad",
    description: "Share ideas, meet makers, and find your people.",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=80",
    color: "bg-[#C8F7DC]",
    date: "Next weekend",
    time: "4:00 PM",
    attendees: 15,
  },
];

export default function Discover() {
  const [activeCategory, setActiveCategory] = useState("For you");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDiscoveries = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return discoveries.filter((item) => {
      const matchesCategory =
        activeCategory === "For you" || item.type === activeCategory;

      const searchableText = [
        item.title,
        item.location,
        item.description,
        item.type,
        item.kind,
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && (!query || searchableText.includes(query));
    });
  }, [activeCategory, searchQuery]);

  return (
    <section
      id="discover"
      className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24"
    >
      {/* Heading */}
      <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl text-left">
          <span className="inline-block rounded-md border-2 border-black bg-[#C8F7DC] px-3 py-2 text-xs font-extrabold tracking-widest shadow-[3px_3px_0_#000]">
            OUT THERE, RIGHT NOW
          </span>

          <h2 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Your city is
            <br />
            <span className="text-fuchsia-500">doing something.</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Find interesting places, discover local happenings, and make plans
            worth leaving home for.
          </p>
        </div>

        <a
          href="#create-activity"
          className="inline-flex shrink-0 items-center gap-2 rounded-md border-2 border-black bg-[#FFE45C] px-5 py-3.5 font-extrabold shadow-[4px_4px_0_#000] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none"
        >
          <Plus size={19} />
          Create a plan
        </a>
      </div>

      {/* Search */}
      <div className="mb-8">
        <label className="flex w-full items-center gap-3 rounded-md border-2 border-black bg-white px-4 py-3.5 shadow-[3px_3px_0_#000] focus-within:shadow-[5px_5px_0_#000] sm:max-w-2xl">
          <Search size={20} className="shrink-0" aria-hidden="true" />
          <input
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search places, activities, areas..."
            aria-label="Search discoveries"
            className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400 sm:text-base"
          />
        </label>
      </div>

      {/* Category filters */}
      <div className="mb-12 flex gap-3 overflow-x-auto pb-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
            className={`shrink-0 rounded-md border-2 border-black px-4 py-2.5 text-sm font-extrabold transition ${
              activeCategory === category
                ? "translate-x-[-2px] translate-y-[-2px] bg-[#FFE45C] shadow-[4px_4px_0_#000]"
                : "bg-white hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0_#000]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Results heading */}
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h3 className="text-2xl font-black tracking-tight sm:text-3xl">
            {activeCategory === "For you"
              ? "Explore Hyderabad"
              : activeCategory}
          </h3>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            Little ideas for your next big moment.
          </p>
        </div>

        <span className="shrink-0 rounded-md border-2 border-black bg-white px-3 py-2 text-xs font-extrabold sm:text-sm">
          {filteredDiscoveries.length} ideas
        </span>
      </div>

      {/* Discovery cards */}
      {filteredDiscoveries.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDiscoveries.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-xl border-2 border-black bg-white shadow-[5px_5px_0_#000] transition duration-200 hover:-translate-y-1 hover:shadow-[7px_7px_0_#000]"
            >
              <div className="relative aspect-[5/3] overflow-hidden border-b-2 border-black bg-[#E8EDE5]">
                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />

                <span
                  className={`absolute left-3 top-3 rounded-md border-2 border-black ${item.color} px-3 py-1.5 text-[10px] font-black tracking-wide`}
                >
                  {item.kind}
                </span>

                <a
                  href="#create-activity"
                  aria-label={`Create a plan inspired by ${item.title}`}
                  className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-md border-2 border-black bg-white shadow-[3px_3px_0_#000] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#000]"
                >
                  <ArrowUpRight size={20} />
                </a>
              </div>

              <div className="p-5">
                <h4 className="text-lg font-black leading-snug">
                  {item.title}
                </h4>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>

                <div className="mt-5 space-y-2.5 border-t-2 border-dashed border-slate-200 pt-4 text-xs text-slate-600 sm:text-sm">
                  <p className="flex items-start gap-2">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-black" />
                    <span>{item.location}</span>
                  </p>

                  {item.date && (
                    <p className="flex items-center gap-2">
                      <CalendarDays size={16} className="shrink-0 text-black" />
                      {item.date}
                    </p>
                  )}

                  {item.time && (
                    <p className="flex items-center gap-2">
                      <Clock3 size={16} className="shrink-0 text-black" />
                      {item.time}
                    </p>
                  )}

                  {item.attendees !== null && (
                    <p className="flex items-center gap-2">
                      <Users size={16} className="shrink-0 text-black" />
                      {item.attendees} interested
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border-2 border-black bg-white px-5 py-14 text-center shadow-[5px_5px_0_#000]">
          <Search size={30} className="mx-auto" />
          <h4 className="mt-4 text-xl font-black">No matches yet</h4>
          <p className="mt-2 text-sm text-slate-600">
            Try another search or choose a different category.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("For you");
            }}
            className="mt-5 rounded-md border-2 border-black bg-[#FFE45C] px-4 py-2.5 font-extrabold shadow-[3px_3px_0_#000]"
          >
            Clear filters
          </button>
        </div>
      )}

      <p className="mt-6 text-xs leading-relaxed text-slate-500">
        Preview content only — these are sample ideas, not verified live events.
      </p>
    </section>
  );
}
