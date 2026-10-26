import { useState } from "react";
import {
  Coffee,
  PartyPopper,
  CalendarDays,
  MapPin,
  ArrowRight,
  Users,
  LockKeyhole,
  Globe,
} from "lucide-react";
import "./CreateActivity.css";

const activityTypes = [
  {
    id: "hangout",
    label: "Hangout",
    description: "Coffee, food or casual plans",
    icon: Coffee,
  },
  {
    id: "party",
    label: "Party",
    description: "Celebrate with your people",
    icon: PartyPopper,
  },
  {
    id: "event",
    label: "Event",
    description: "Music, games or meetups",
    icon: CalendarDays,
  },
  {
    id: "place",
    label: "Place discovery",
    description: "Share a spot worth visiting",
    icon: MapPin,
  },
];

export default function CreateActivity() {
  const [activityType, setActivityType] = useState("hangout");
  const [audience, setAudience] = useState("public");
  const [joinPolicy, setJoinPolicy] = useState("instant");

  const isPlaceDiscovery = activityType === "place";

  function handleSubmit(event) {
    event.preventDefault();

    // Frontend demo only. No activity is saved yet.
    alert("UI preview only — activity creation will be connected later.");
  }

  return (
    <section id="create-activity" className="create-activity-section">
      <div className="create-activity-heading">
        <span className="create-activity-eyebrow">
          MAKE SOMETHING HAPPEN
        </span>

        <h2>
          Got a plan?
          <br />
          <span>Make it happen.</span>
        </h2>

        <p>
          Create a plan, share a place, or bring people together.
          Your next great moment starts here.
        </p>
      </div>

      <form className="activity-form" onSubmit={handleSubmit}>
        <div className="activity-form-header">
          <div>
            <span className="form-step">YOUR IDEA, YOUR RULES</span>
            <h3>Create something</h3>
          </div>

          <span className="form-number">01 / TODAY</span>
        </div>

        <div className="activity-field">
          <label>What are you creating?</label>

          <div className="activity-type-grid">
            {activityTypes.map((type) => {
              const Icon = type.icon;
              const selected = activityType === type.id;

              return (
                <button
                  key={type.id}
                  type="button"
                  className={`activity-type-card ${
                    selected ? "is-selected" : ""
                  }`}
                  onClick={() => setActivityType(type.id)}
                  aria-pressed={selected}
                >
                  <Icon size={23} strokeWidth={2.5} />

                  <span className="activity-type-label">
                    {type.label}
                  </span>

                  <span className="activity-type-description">
                    {type.description}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="activity-field">
          <label htmlFor="activity-title">
            {isPlaceDiscovery ? "Place name" : "Give your plan a name"}
          </label>

          <input
            id="activity-title"
            name="title"
            type="text"
            placeholder={
              isPlaceDiscovery
                ? "e.g. The coffee spot you need to try"
                : "e.g. Saturday evening chai?"
            }
            required
            maxLength={100}
          />
        </div>

        <div className="activity-field">
          <label htmlFor="activity-description">A little more detail</label>

          <textarea
            id="activity-description"
            name="description"
            rows="3"
            maxLength={500}
            placeholder="What's the idea? Who would enjoy it?"
          />
        </div>

        <div className="activity-field">
          <label htmlFor="activity-location">
            {isPlaceDiscovery ? "Where is this place?" : "Where's it happening?"}
          </label>

          <div className="activity-location-input">
            <MapPin size={20} />
            <input
              id="activity-location"
              name="location"
              type="text"
              placeholder="Search a place or enter an area"
              required
            />
          </div>

          <p className="field-hint">
            Location search will be connected later.
          </p>
        </div>

        {!isPlaceDiscovery && (
          <div className="activity-field-row">
            <div className="activity-field">
              <label htmlFor="activity-date">Date</label>
              <input
                id="activity-date"
                name="date"
                type="date"
                required
                min={new Date().toLocaleDateString("en-CA")}
              />
            </div>

            <div className="activity-field">
              <label htmlFor="activity-time">Start time</label>
              <input
                id="activity-time"
                name="time"
                type="time"
                required
              />
            </div>
          </div>
        )}

        <div className="activity-field">
          <label>Who can see this?</label>

          <div className="activity-choice-list">
            <button
              type="button"
              className={`activity-choice ${
                audience === "public" ? "is-selected" : ""
              }`}
              onClick={() => setAudience("public")}
              aria-pressed={audience === "public"}
            >
              <Globe size={20} />
              <span>
                <strong>Everyone</strong>
                <small>Help new people discover your plan</small>
              </span>
            </button>

            <button
              type="button"
              className={`activity-choice ${
                audience === "friends" ? "is-selected" : ""
              }`}
              onClick={() => setAudience("friends")}
              aria-pressed={audience === "friends"}
            >
              <Users size={20} />
              <span>
                <strong>Friends & followers</strong>
                <small>Share it with people connected to you</small>
              </span>
            </button>

            <button
              type="button"
              className={`activity-choice ${
                audience === "invite" ? "is-selected" : ""
              }`}
              onClick={() => setAudience("invite")}
              aria-pressed={audience === "invite"}
            >
              <LockKeyhole size={20} />
              <span>
                <strong>Invite-only</strong>
                <small>Keep it limited to invited people</small>
              </span>
            </button>
          </div>
        </div>

        {!isPlaceDiscovery && (
          <div className="activity-field">
            <label>How can people join?</label>

            <div className="activity-join-grid">
              <button
                type="button"
                className={`activity-join-card ${
                  joinPolicy === "instant" ? "is-selected" : ""
                }`}
                onClick={() => setJoinPolicy("instant")}
                aria-pressed={joinPolicy === "instant"}
              >
                <strong>Just join</strong>
                <span>People can join instantly</span>
              </button>

              <button
                type="button"
                className={`activity-join-card ${
                  joinPolicy === "approval" ? "is-selected" : ""
                }`}
                onClick={() => setJoinPolicy("approval")}
                aria-pressed={joinPolicy === "approval"}
              >
                <strong>Request to join</strong>
                <span>You approve each request</span>
              </button>
            </div>
          </div>
        )}

        <button type="submit" className="activity-submit">
          {isPlaceDiscovery ? "Share this place" : "Create activity"}
          <ArrowRight size={19} />
        </button>

        <p className="activity-form-note">
          You control who sees your plan and how people join.
        </p>
      </form>
    </section>
  );
}