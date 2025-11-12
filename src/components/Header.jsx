import React, { useState } from 'react';

// SVG icon for the hamburger menu
function MenuIcon() {
  return (
    <svg
      className="mobile-toggle-icon"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}

// SVG icon for the close (X) menu
function CloseIcon() {
  return (
    <svg
      className="mobile-toggle-icon"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

export default function Header({ active, setActive }) {
  // State to manage the mobile menu
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleNavClick = (tab) => {
    setActive(tab);
    setIsMobileOpen(false); // Close menu on click
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Brand */}
        <div className="brand" onClick={() => handleNavClick('tab1')}>
          {/* Updated logo path. 
            Make sure 'Gemini_Generated_Image_gqdjyygqdjyygqdj.jpg' 
            is in your /public folder.
          */}
          <img
            src="/logo.png"
            alt="project logo"
            className="logo"
          />
          <div className="brand-text">
            <h1>Homeflow</h1>
            <small>Energy Efficient Light & Fan Automation</small>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="header-nav">
          <button
            className={`nav-btn ${active === 'tab1' ? 'active' : ''}`}
            onClick={() => handleNavClick('tab1')}
          >
            Project Info
          </button>
          <button
            className={`nav-btn ${active === 'tab2' ? 'active' : ''}`}
            onClick={() => handleNavClick('tab2')}
          >
            User Manual
          </button>
          <div className="header-actions">
            <a
              className="cta"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('tab2');
              }}
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Mobile Toggle Button (The Fix) */}
        <button
          className="mobile-toggle"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle navigation"
        >
          {isMobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <nav className={`mobile-nav ${isMobileOpen ? 'is-open' : ''}`}>
        <button
          className={`nav-btn ${active === 'tab1' ? 'active' : ''}`}
          onClick={() => handleNavClick('tab1')}
        >
          Project Info
        </button>
        <button
          className={`nav-btn ${active === 'tab2' ? 'active' : ''}`}
          onClick={() => handleNavClick('tab2')}
        >
          User Manual
        </button>
        <a
          className="cta"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('tab2');
          }}
        >
          Get Started
        </a>
      </nav>
    </header>
  );
}