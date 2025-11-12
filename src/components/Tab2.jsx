import React from 'react';

// --- SVG Icons for Manual ---

// This icon can now accept a custom class
const DownloadIcon = ({ className = "manual-icon" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 9.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 7.414V13a1 1 0 11-2 0V7.414L7.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
  </svg>
);

const HardwareIcon = () => (
  <svg className="manual-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5a3 3 0 00-3 3v2a3 3 0 003 3h14a3 3 0 003-3v-2a3 3 0 00-3-3zM12 15v2" />
  </svg>
);
const AutoIcon = () => (
  <svg className="manual-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12 12 0 0012 21a12 12 0 008.618-3.04A11.955 11.955 0 0117.618 7.984z" />
  </svg>
);
const TimerIcon = () => (
  <svg className="manual-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const FaqIcon = () => (
  <svg className="manual-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.12 2.2-2.22 2.868-1.1.668-2.217 1.335-2.217 2.132v.11a1 1 0 002 0v-.055c0-.53.422-.99 1.005-1.328l.006-.003c.118-.067.23-.137.339-.213 1.1-.73 2.64-1.74 2.64-3.376 0-2.3-2.13-4-5-4-3.03 0-5.093 2.16-5.464 4.144a1 1 0 101.956.411zM12 18a1 1 0 100-2 1 1 0 000 2z" />
  </svg>
);
// --- End Icons ---

export default function Tab2() {
  return (
    <div className="manual">
      <h2>How to Use Your Smart System</h2>

      {/* MODIFIED: App Download Section */}
      <section className="manual-block app-download-section">
        <h4>
          <DownloadIcon /> {/* Uses default "manual-icon" class */}
          Get the Mobile App
        </h4>
        <p>
          Download the official Android app (.apk) to control your device.
        </p>
        <div className="app-download-buttons">
          {/* This link assumes "homeflow.apk" is in your /public folder.
            The 'download' attribute tells the browser to download the file.
          */}
          <a
            href="/homeflow.apk"
            className="app-download-btn direct"
            download="homeflow.apk"
          >
            <DownloadIcon className="btn-icon" /> {/* Uses "btn-icon" class */}
            <div>
              <small>Download for Android</small>
              <strong>homeflow.apk</strong>
            </div>
          </a>
        </div>
      </section>

      <section className="manual-block">
        <h4>
          <AutoIcon />
          Mode 1: Auto Mode (Set it & Forget it)
        </h4>
        <p>
          This is the "smart" mode. We recommend using this!
        </p>
        <ul>
          <li>
            <strong>What it does:</strong> The system does everything for you.
            When you walk in, the sensor sees you. If it's dark, the light
            turns on. The fan turns on and picks the best speed based on the
            room's temperature. When you leave, everything turns off.
          </li>
          <li>
            <strong>How to use:</strong> Select "Auto Mode" in the app or on the
            wall device.
          </li>
          <li>
            <strong>Pro Tip:</strong> In the app settings, you can tell the
            system *how dark* it needs to be, *how far* to "see" you (presence),
            and your *perfect temperature* range.
          </li>
        </ul>
      </section>

      <section className="manual-block">
        <h4>
          <HardwareIcon />
          Mode 2: Manual Mode (You're in Charge)
        </h4>
        <p>
          Sometimes you want to be the boss. Use the app or the wall device
          to take full control.
        </p>
        <ul>
          <li>
            <strong>On the Wall Device:</strong>
            <ul>
              <li>
                <strong>Turn the Knob:</strong> Controls the fan speed. The OLED
                screen shows you the level.
              </li>
              <li>
                <strong>Press the Button:</strong> Toggles the light ON or OFF.
              </li>
              <li>
                <strong>Press & Hold Button:</strong> Enters the menu to switch
                modes or set the timer.
              </li>
            </ul>
          </li>
          <li>
            <strong>In the Mobile App:</strong>
            <ul>
              <li>
                Tap the "Light" or "Fan" icon to turn them on or off.
              </li>
              <li>
                Use the "Fan Speed" slider to pick the perfect speed.
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="manual-block">
        <h4>
          <TimerIcon />
          Extra Feature: The Timer
        </h4>
        <p>
          Want the fan on for just 30 minutes while you fall asleep? Use the
          timer.
        </p>
        <ol>
          <li>Find the "Timer" section in the app or on the wall device menu.</li>
          <li>Choose which device (Light and/or Fan) you want to set.</li>
          <li>Pick a time (e.g., 1 hour).</li>
          <li>
            That's it! The device will run for that long and then turn itself
            off.
          </li>
        </ol>
      </section>

      <section className="manual-block">
        <h4>
          <FaqIcon />
          Help! Something's Not Working
        </h4>
        <ul>
          <li>
            <strong>The app won't connect.</strong>
            <br />
            Try turning your phone's Bluetooth off and on again. If that
            doesn't work, unplug the wall device, wait 10 seconds, and plug it
            back in.
          </li>
          <li>
            <strong>Auto mode isn't working.</strong>
            <br />
            Make sure you are in "Auto Mode" and not "Manual Mode." Check
            the app's main screen or the device's OLED display.
          </li>
        </ul>
      </section>
    </div>
  );
}