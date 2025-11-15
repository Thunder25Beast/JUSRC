import { useEffect } from "react";
import WorkingBody from "@/components/WorkingBody";

export default function WorkingBodyPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-background">
      <WorkingBody />
    </div>
  );
}
