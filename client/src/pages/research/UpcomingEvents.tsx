import ComingSoon from "@/components/ComingSoon";
import { Calendar } from "lucide-react";

const UpcomingEvents = () => {
  return (
    <ComingSoon
      title="Upcoming Research Events"
      subtitle="Conferences, workshops, and research-related events"
      description="Upcoming research events and deadlines are being scheduled and will be available soon."
      badgeText="Events & Deadlines"
      badgeIcon={Calendar}
      gradientFrom="orange-50"
      gradientVia="white"
      gradientTo="amber-50"
    />
  );
};

export default UpcomingEvents;
