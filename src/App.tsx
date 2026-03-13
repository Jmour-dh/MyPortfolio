import "./App.css";
import { AboutSection } from "./components/AboutSection";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { ProjectsSection } from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";


function App() {
  return (
    <>
      <Navbar />
      <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      </main>
    </>
  );
}

export default App;
