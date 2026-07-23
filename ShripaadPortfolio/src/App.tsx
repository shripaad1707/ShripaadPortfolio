import { useState } from "react";
import { AnimatePresence } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import TrustedPlatforms from "./components/TrustedPlatforms";
import Works from "./components/Works";
import FeaturedSystems from "./components/FeaturedSystems";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import VideoModal from "./components/VideoModal";

export default function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#03020D] text-white overflow-x-hidden font-sans relative">
      {/* Premium Centered Floating Glassmorphism Navbar */}
      <Header />

      {/* Main Sections Content Layer */}
      <main className="relative z-10">
        <Hero onOpenVideoModal={() => setIsVideoModalOpen(true)} />
        <VideoSection onOpenVideoModal={() => setIsVideoModalOpen(true)} />

        <Works />
        <FeaturedSystems />

        {/* Generous vertical spacing (120px) above TrustedPlatforms */}
        <div className="h-[120px]" />
        <TrustedPlatforms />

        <Story />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Premium walkthrough placeholder modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
