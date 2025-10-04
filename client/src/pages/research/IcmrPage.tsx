import ComingSoon from "@/components/ComingSoon";
import { Microscope } from "lucide-react";

const IcmrPage = () => {
  return (
    <ComingSoon
      title="ICMR Research Grant"
      subtitle="Indian Council of Medical Research funding opportunities"
      description="ICMR research grant details are being organized and will be available soon."
      badgeText="Medical Research"
      badgeIcon={Microscope}
      gradientFrom="green-50"
      gradientVia="white"
      gradientTo="emerald-50"
    />
  );
};

export default IcmrPage;
