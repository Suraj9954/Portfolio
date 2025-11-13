import "./App.css";
import Connections from "./components/Connect";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperiance";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      <Hero />
      <Skills/>
      <WorkExperience/>
      <Education/>
      <Connections/>
      <Footer />
    </div>
  );
}

export default App;
