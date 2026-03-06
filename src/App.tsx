import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

// New Components
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { GithubGraph } from './components/GithubGraph';
import { Blog } from './components/Blog';
import { ResumeBanner } from './components/ResumeBanner';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-foreground font-sans">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Skills />
        <Experience />
        <GithubGraph />
        <Projects />
        <Testimonials />
        <Education />
        <Blog />
        <ResumeBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
