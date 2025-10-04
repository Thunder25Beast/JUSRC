import ComingSoon from "@/components/ComingSoon";
import { Award } from "lucide-react";

const GjStraus = () => {
  return (
    <ComingSoon
      title="GJ STRAUS Research Grant"
      subtitle="GJ STRAUS research funding opportunities and application information"
      description="GJ STRAUS research grant details are currently being updated and will be available soon."
      badgeText="Research Grant"
      badgeIcon={Award}
      gradientFrom="blue-50"
      gradientVia="white"
      gradientTo="indigo-50"
    />
  );
};

export default GjStraus;
