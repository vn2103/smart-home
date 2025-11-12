import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>© {new Date().getFullYear()} Vimux-Rokz • Built by Team</div>
        <div className="socials">Designed for accessibility & energy efficiency.</div>
      </div>
    </footer>
  );
}