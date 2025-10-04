import ComingSoon from "@/components/ComingSoon";
import { Lightbulb } from "lucide-react";

const IndependentProjectsDocuments = () => {
  return (
    <ComingSoon
      title="Independent Projects Documents"
      subtitle="Self-funded and independent research project resources"
      description="Independent project documents are currently being prepared and will be available soon."
      badgeText="Independent Research"
      badgeIcon={Lightbulb}
      gradientFrom="purple-50"
      gradientVia="white"
      gradientTo="violet-50"
    />
  );
};

export default IndependentProjectsDocuments;
