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
        <h2 className="text-h1 font-space text-uppercase">
          WHAT'S HAPPENING AROUND YOU?
        </h2>
        <p className="text-sm font-inter fw-normal mb-3">
          Find interesting places, discover things to do, and explore what's
          happening around your city. Your next favorite thing could be closer
          than you think
        </p>

        <div className="d-flex my-2 gap-5">
          <button className="btn btn-lime">
            Join Early Access &nbsp; <MoveUpRight />
          </button>
          <button className="btn">
            See the Idea &nbsp; <MoveDownRight />
          </button>
        </div>
      </section>

      <section className="bg-bg  p-4 py-8 px-md-8">
        <div className="max-w-md mx-auto">
          {/* ================= HEADER & TEXT ================= */}
          <div className="mb-6">
            {/* Eyebrow */}
            <div className="d-flex align-center gap-2 mb-3">
              <span className="bg-ink text-inverted fw-bold px-3 py-1 text-sm rounded-full text-uppercase tracking-tight">
                01 / Your City, Your Feed
              </span>
            </div>

            {/* Massive Fluid Heading */}
            <h1 className="text-h1 font-space fw-black text-uppercase tracking-tight leading-none mb-4">
              Less Searching. <br />
              <span
                className="text-orange"
                style={{ textShadow: "4px 4px 0px var(--color-ink)" }}
              >
                More Finding.
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-md fw-bold text-ink mb-5 font-inter"
              style={{ maxWidth: "600px" }}
            >
              From hidden gems to exciting plans, discover places, activities,
              and things happening around you.
            </p>

            {/* Location & Categories Strip */}
            <div className="d-flex flex-wrap gap-2 align-center mb-5">
              {/* Location Pill */}
              <div className="bg-lime border-2 shadow-1 px-3 py-2 rounded-2 d-flex align-center gap-1 fw-bold text-uppercase brutal-click">
                <MapPin size={20} strokeWidth={3} />
                Hyderabad, India
              </div>

              <span className="fw-black text-3 mx-2 hidden md-block">·</span>

              {/* Categories */}
              <button className="bg-pink border-2 shadow-1 px-3 py-2 rounded-2 fw-bold text-uppercase brutal-click d-flex align-center gap-1">
                <Compass size={18} strokeWidth={3} /> For you
              </button>
              <button className="bg-cyan border-2 shadow-1 px-3 py-2 rounded-2 fw-bold text-uppercase brutal-click">
                Places
              </button>
              <button className="bg-yellow border-2 shadow-1 px-3 py-2 rounded-2 fw-bold text-uppercase brutal-click">
                Events
              </button>
              <button className="bg-surface border-2 shadow-1 px-3 py-2 rounded-2 fw-bold text-uppercase brutal-click">
                Activities
              </button>
            </div>
          </div>

          {/* ================= CARDS GRID ================= */}
          {/* Uses a responsive grid: 1 col on mobile, 2 cols on tablet/desktop */}
          <div className="d-grid grid-cols-1 grid-md-cols-2 gap-4">
            {/* Card 1: Cafe Hopping */}
            <div className="bg-surface border-3 shadow-3 rounded-3 p-5 d-flex flex-col justify-between brutal-click pos-relative overflow-hidden">
              {/* Decorative colored shape in the background */}
              <div
                className="pos-absolute top-0 right-0 bg-yellow border-bottom-3 border-left-3 rounded-bl-4 d-flex justify-center align-center"
                style={{ width: "80px", height: "80px" }}
              >
                <Coffee size={40} strokeWidth={2.5} />
              </div>

              <div>
                <h3 className="text-h3 fw-black text-uppercase tracking-tight mt-5 mb-2">
                  Cafe hopping
                </h3>
                <p className="text-base fw-bold m-0">
                  Find your next favorite spot.
                </p>
              </div>
            </div>

            {/* Card 2: Weekend Plans */}
            <div className="bg-surface border-3 shadow-3 rounded-3 p-5 d-flex flex-col justify-between brutal-click pos-relative overflow-hidden">
              {/* Decorative colored shape */}
              <div
                className="pos-absolute top-0 right-0 bg-orange border-bottom-3 border-left-3 rounded-bl-4 d-flex justify-center align-center"
                style={{ width: "80px", height: "80px" }}
              >
                <Calendar size={40} strokeWidth={2.5} />
              </div>

              <div>
                <h3 className="text-h3 fw-black text-uppercase tracking-tight mt-5 mb-2">
                  Weekend plans
                </h3>
                <p className="text-base fw-bold m-0">
                  Discover something new to do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
