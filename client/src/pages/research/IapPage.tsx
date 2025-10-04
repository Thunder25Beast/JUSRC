import ComingSoon from "@/components/ComingSoon";
import { Heart } from "lucide-react";

const IapPage = () => {
  return (
    <ComingSoon
      title="IAP Research Grant"
      subtitle="Indian Academy of Pediatrics research funding opportunities"
      description="IAP research grant information is being compiled and will be available soon."
      badgeText="Pediatric Research"
      badgeIcon={Heart}
      gradientFrom="pink-50"
      gradientVia="white"
      gradientTo="rose-50"
    />
  );
};

export default IapPage;
