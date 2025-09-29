import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import SpiderDiagram from "@/components/SpiderDiagram";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Timeline />
      <SpiderDiagram />
    </div>
  );
}