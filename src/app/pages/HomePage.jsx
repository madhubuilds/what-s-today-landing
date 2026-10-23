import React from "react";
import { BRAND_NAME } from "../constance/constance";

export default function HomePage() {
  return (
    <>
      <header className="header">
        {/* Added align-center to keep buttons vertically centered with the brand text */}
        <nav className="nav d-flex justify-between align-center">
          <div className="text-uppercase brand font-space">{BRAND_NAME}</div>

          <div className="d-flex gap-3">
            <button className="btn btn-orange font-space">Explore</button>
            {/* Using the new reusable CSS classes */}
            <button className="btn btn-yellow font-space">Join Waitlist</button>
          </div>
        </nav>
      </header>

      <section className="hero-section">
        <div
          style={{ display: "inline" }}
          className="font-inter bg-yellow py-2 px-1 border-1 border-main"
        >
          A NEW WAY TO SOCIALIZE
        </div>
        <h2 className="hero-headline font-space text-uppercase">
          your world. your rules.
        </h2>
        <p className="hero-body font-inter">
          Discover what's happening, meet your kind of people, and express
          yourself in a whole new way.
        </p>
      </section>
    </>
  );
}
