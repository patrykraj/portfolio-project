import React, { useState, useEffect } from "react";
import "./App.css";

import Front from "./components/sections/Front";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Navigation from "./components/navigation/Navigation";

function App() {
  const [imageLoaded, setImageLoaded] = useState(false);
  let scrolled = 0;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const move = window.scrollY - scrolled;
      scrolled = window.scrollY;

      if (!imageLoaded) return;

      if (move > 0 && scrolled > 200) {
        document.querySelector("nav div.active").classList.add("scroll");
      } else if (move < 0) {
        document.querySelector("nav div.active").classList.remove("scroll");
      }
    });
  }, [imageLoaded]);

  return (
    <div className="App">
      <nav>
        <Navigation loaded={imageLoaded} />
      </nav>
      <header>
        <Front setLoaded={setImageLoaded} />
      </header>
      <main>
        <section>
          <Projects />
        </section>
        <section>
          <Skills />
        </section>
      </main>
      <footer>FOOTER</footer>
    </div>
  );
}

export default App;
