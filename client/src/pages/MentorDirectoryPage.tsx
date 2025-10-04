import { useEffect } from "react";
import MentorDirectory from "@/components/MentorDirectory";

export default function MentorDirectoryPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-8">
        <MentorDirectory />
      </div>
    </div>
  );
}