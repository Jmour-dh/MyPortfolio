import "./App.css";
import { AboutSection } from "./components/AboutSection";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";


function App() {
  return (
    <>
      <Navbar />
      <main>
      <HeroSection />
      <AboutSection />
      </main>
    </>
  );
}

export default App;
