import ComingSoon from "@/components/ComingSoon";
import { Lightbulb } from "lucide-react";

const IndependentProjects = () => {
  return (
    <ComingSoon
      title="Independent Research Projects"
      subtitle="Self-funded and independent research opportunities"
      description="Independent research project information is being prepared and will be available soon."
      badgeText="Independent Research"
      badgeIcon={Lightbulb}
      gradientFrom="purple-50"
      gradientVia="white"
      gradientTo="violet-50"
    />
  );
};

export default IndependentProjects;
