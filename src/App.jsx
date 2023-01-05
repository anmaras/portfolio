import React from 'react';
import { Navbar, About, Skills, Projects, Contact } from './components/index';
import { motion } from 'framer-motion';

function App() {
  return (
    <motion.main
      className="grid"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
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
    </motion.main>
  );
}

export default App;
