import ComingSoon from "@/components/ComingSoon";
import { Award } from "lucide-react";

const GjStrausDocuments = () => {
  return (
    <ComingSoon
      title="GJ STRAUS Documents"
      subtitle="GJ STRAUS research grant documents and resources"
      description="GJ STRAUS documents are currently being prepared and will be available soon."
      badgeText="Research Grants"
      badgeIcon={Award}
      gradientFrom="blue-50"
      gradientVia="white"
      gradientTo="cyan-50"
    />
  );
};

export default GjStrausDocuments;