import React, { useState } from 'react';
import Header from './components/Header';
import Tab1 from './components/Tab1';
import Tab2 from './components/Tab2';
import Footer from './components/Footer';

export default function App() {
  const [active, setActive] = useState('tab1');

  return (
    <div className="site-root">
      <Header active={active} setActive={setActive} />

      <main className="main-container">
        <section className={`tab-panel ${active === 'tab1' ? 'visible' : ''}`}>
          <Tab1 />
        </section>

        <section className={`tab-panel ${active === 'tab2' ? 'visible' : ''}`}>
          <Tab2 />
        </section>
      </main>

      <Footer />
    </div>
  );
}