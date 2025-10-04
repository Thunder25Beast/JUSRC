import ComingSoon from "@/components/ComingSoon";
import { Microscope } from "lucide-react";

const IcmrDocuments = () => {
  return (
    <ComingSoon
      title="ICMR Documents"
      subtitle="Indian Council of Medical Research grant documents and resources"
      description="ICMR documents are currently being organized and will be available soon."
      badgeText="Medical Research"
      badgeIcon={Microscope}
      gradientFrom="green-50"
      gradientVia="white"
      gradientTo="emerald-50"
    />
  );
};

export default IcmrDocuments;
