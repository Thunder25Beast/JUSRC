import ComingSoon from "@/components/ComingSoon";
import { GraduationCap } from "lucide-react";

const UgrmcDocuments = () => {
  return (
    <ComingSoon
      title="UGRMC Documents"
      subtitle="Undergraduate Research Monitoring Committee documents and guidelines"
      description="UGRMC documents are currently being updated and will be available soon."
      badgeText="Undergraduate Research"
      badgeIcon={GraduationCap}
      gradientFrom="orange-50"
      gradientVia="white"
      gradientTo="amber-50"
    />
  );
};

export default UgrmcDocuments;
