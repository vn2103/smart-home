import React from 'react';

// --- I've added some new icons for the feature grid ---
const EnergyIcon = () => (
  <svg className="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);
const ComfortIcon = () => (
  <svg className="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 19.143V12.857a4 4 0 00-4-4H5.857a4 4 0 00-4 4v6.286a4 4 0 004 4H10a4 4 0 004-4z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 19.143l6.143-6.143a4 4 0 000-5.657l-.17-.17a4 4 0 00-5.657 0L14 7.573" />
  </svg>
);
const ControlIcon = () => (
  <svg className="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);
const SmartIcon = () => (
  <svg className="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707.707M12 21v-1m0-18A8 8 0 004 12a8 8 0 0016 0 8 8 0 00-8-8z" />
  </svg>
);
const TeamIcon = () => (
  <svg className="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a3.004 3.004 0 01-3.707 0M11 16.143l-1.143-1.143a3.004 3.004 0 01-3.707 0M11 16.143V20m0-3.857l1.143-1.143a3.004 3.004 0 013.707 0M11 16.143l-1.143 1.143m0 0l-1.143 1.143m2.286 0l1.143 1.143m0 0l1.143-1.143M11 16.143l1.143 1.143M12 6c0 1.657-3.134 3-7 3s-7-1.343-7-3 3.134-3 7-3 7 1.343 7 3z" />
  </svg>
);
// --- End Icons ---

export default function Tab1() {
  return (
    <>
      {/* The Hero section from before */}
      <div className="hero">
        <h2>Smart. Efficient. Automated.</h2>
        <p>Your solution for energy-efficient living.</p>
      </div>

      {/* NEW: "How it Works" Visual Section */}
      <section className="how-it-works card">
        <h3>How It Works</h3>
        <div className="how-it-works-container">
          <div className="how-it-works-step">
            <div className="step-number">1</div>
            <p className="step-title">You Enter a Room</p>
            <p className="step-desc">
              Our smart sensor detects your presence the moment you walk in.
            </p>
          </div>
          <div className="how-it-works-arrow">&rarr;</div>
          <div className="how-it-works-step">
            <div className="step-number">2</div>
            <p className="step-title">System Thinks</p>
            <p className="step-desc">
              It checks if it's dark (for the light) and senses the room
              temperature (for the fan).
            </p>
          </div>
          <div className="how-it-works-arrow">&rarr;</div>
          <div className="how-it-works-step">
            <div className="step-number">3</div>
            <p className="step-title">Instant Comfort</p>
            <p className="step-desc">
              The light turns on, and the fan adjusts to the perfect speed. All
              automatically.
            </p>
          </div>
        </div>
      </section>

      {/* NEW: Redesigned Features Section */}
      <section className="feature-showcase">
        <article className="card">
          <h3>
            <EnergyIcon />
            Save Energy & Money
          </h3>
          <p>
            Never forget to turn off the lights again. The system does it for
            you, lowering your electricity bill.
          </p>
        </article>
        <article className="card">
          <h3>
            <ComfortIcon />
            Always Comfortable
          </h3>
          <p>
            The fan doesn't just turn on—it intelligently adjusts its speed to
            the room's temperature.
          </p>
        </article>
        <article className="card">
          <h3>
            <ControlIcon />
            Total Control, Your Way
          </h3>
          <p>
            Use the mobile app from your couch or the smart hardware controls on
            your wall. You're always in charge.
          </p>
        </article>
        <article className="card">
          <h3>
            <SmartIcon />
            Smart & Accessible
          </h3>
          <p>
            Perfect for everyone, especially for helping users with mobility
            challenges live more independently.
          </p>
        </article>
      </section>

      {/* NEW: Restyled Team Card */}
      <section className="card team-card">
        <h3>
          <TeamIcon />
          Meet the Team
        </h3>
        <p>
          This project was brought to life by:
        </p>
        <div className="team-list">
          <span className="team-member">Vaibhav Vyas</span>
          <span className="team-member">Varad Pachpor</span>
          <span className="team-member">Vinit Bagde</span>
          <span className="team-member">Devesh Thakur</span>
          <span className="team-member">Vedant Ashtankar</span>
        </div>
        <p className="guide-text">
          Guided by: <strong>Prof. V.S.Lande</strong>
        </p>
      </section>
    </>
  );
}