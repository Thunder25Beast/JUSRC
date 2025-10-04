import ComingSoon from "@/components/ComingSoon";
import { Shield } from "lucide-react";

const IecDocuments = () => {
  return (
    <ComingSoon
      title="IEC Documents"
      subtitle="Institutional Ethics Committee forms and approval processes"
      description="IEC documents are currently being compiled and will be available soon."
      badgeText="Ethics Committee"
      badgeIcon={Shield}
      gradientFrom="indigo-50"
      gradientVia="white"
      gradientTo="purple-50"
    />
  );
};

export default IecDocuments;
