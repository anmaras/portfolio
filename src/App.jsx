import React from 'react';
import { Navbar, About, Skills, Projects, Contact } from './components/index';

function App() {
  return (
    <main className="grid">
      <section className="grid__about">
        <Navbar position={true} />
        <About />
      </section>
      <section className="grid__skills" id="skills">
        <Skills />
      </section>
      <section className="grid__projects" id="projects">
        <Projects />
      </section>
      <section className="grid__contact" id="contact">
        <Contact />
      </section>
    </main>
  );
}

export default App;
