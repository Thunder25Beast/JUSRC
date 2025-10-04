import { useEffect } from "react";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import SpiderDiagram from "@/components/SpiderDiagram";
import InCubateSection from "@/components/InCubateSection";

export default function Home() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Timeline />
      <SpiderDiagram />
      <InCubateSection />
    </div>
  );
}