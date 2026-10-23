import React from "react";
import { BRAND_NAME } from "../constance/constance";

import { MoveUpRight, MoveDownRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <header className="header">
        {/* Added align-center to keep buttons vertically centered with the brand text */}
        <nav className="nav d-flex justify-between align-center">
          <div className="text-uppercase brand font-space">{BRAND_NAME}</div>

          <div className="d-none  d-md-flex gap-3">
            <button className="btn btn-orange font-space">Explore</button>
            {/* Using the new reusable CSS classes */}
            <button className="btn btn-yellow font-space">Join Waitlist</button>
          </div>
        </nav>
      </header>

      <section className="hero-section">
        <div
          style={{ display: "inline-block" }}
          className="font-inter bg-yellow py-2 px-1 border-1 border-main shadow-1 my-4"
        >
          A new way to socialize
        </div>
        <h2 className="text-h2 font-space text-uppercase">
          YOUR WORLD IS BIGGER THAN YOUR FEED.
        </h2>
        <p className="text-sm font-inter fw-normal mb-3">
          Discover what's happening, find your people, and express yourself in a
          virtual space that's truly yours.
        </p>

        <div className="d-flex my-2 gap-5">
          <button className="btn btn-lime">
            Get Early Access &nbsp; <MoveUpRight />
          </button>
          <button className="btn">
            Explore the Idea &nbsp; <MoveDownRight />
          </button>
        </div>
      </section>
    </>
  );
}
