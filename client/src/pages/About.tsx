import { useEffect } from "react";
import AboutSection from "@/components/AboutSection";
import WorkingBody from "@/components/WorkingBody";

export default function About() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <AboutSection />
      <div id="working-body">
        <WorkingBody />
      </div>
    </div>
  );
}