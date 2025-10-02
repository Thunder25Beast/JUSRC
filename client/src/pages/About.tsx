import AboutSection from "@/components/AboutSection";
import WorkingBody from "@/components/WorkingBody";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <AboutSection />
      <div id="working-body">
        <WorkingBody />
      </div>
    </div>
  );
}