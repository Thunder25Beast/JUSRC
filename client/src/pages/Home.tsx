import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import SpiderDiagram from "@/components/SpiderDiagram";
import InCubateSection from "@/components/InCubateSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Timeline />
      <SpiderDiagram />
      <InCubateSection />
    </div>
  );
}