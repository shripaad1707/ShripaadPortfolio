import { useState } from "react";
import { AnimatePresence } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TechnicalSkills from "./components/TechnicalSkills";
import FeaturedSystems from "./components/FeaturedSystems";
import Works from "./components/Works";
import Story from "./components/Story";
import CurrentlyLearning from "./components/CurrentlyLearning";
import TrustedPlatforms from "./components/TrustedPlatforms";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import VideoModal from "./components/VideoModal";
import ResumeModal from "./components/ResumeModal";
import ProjectDemoModal, { ProjectDetail } from "./components/ProjectDemoModal";

export default function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [selectedDemoProject, setSelectedDemoProject] = useState<ProjectDetail | null>(null);

  const handleOpenContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#03020D] text-white overflow-x-hidden font-sans relative">
      {/* Floating Centered Glassmorphism Navbar */}
      <Header onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Sections Content Layer */}
      <main className="relative z-10">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Featured Engineering Projects Section */}
        <FeaturedSystems onOpenDemoModal={(project) => setSelectedDemoProject(project)} />

        {/* 3. Project Carousel (Automation Gallery) */}
        <Works />

        {/* 4. Technical Skills Section */}
        <TechnicalSkills />

        {/* 5. About Me Section */}
        <Story />

        {/* 6. Currently Learning Section */}
        <CurrentlyLearning />

        {/* 8. Technology Showcase Logos */}
        <TrustedPlatforms />

        {/* 9. Contact Section */}
        <Contact onOpenResumeModal={() => setIsResumeModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Walkthrough Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
        )}
      </AnimatePresence>

      {/* Interactive Resume Modal */}
      <AnimatePresence>
        {isResumeModalOpen && (
          <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
        )}
      </AnimatePresence>

      {/* Project Case Study Demo Modal */}
      <AnimatePresence>
        {selectedDemoProject && (
          <ProjectDemoModal 
            project={selectedDemoProject} 
            onClose={() => setSelectedDemoProject(null)} 
            onContact={handleOpenContact}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
