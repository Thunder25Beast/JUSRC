import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, FileText, AlertCircle } from "lucide-react";

interface ComingSoonProps {
  title: string;
  subtitle: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
  badgeText?: string;
  badgeIcon?: React.ComponentType<{ className?: string }>;
  gradientFrom?: string;
  gradientVia?: string;
  gradientTo?: string;
}

const ComingSoon = ({ 
  title, 
  subtitle, 
  description, 
  icon: Icon = Clock,
  badgeText = "Coming Soon",
  badgeIcon: BadgeIcon = FileText,
  gradientFrom = "blue-50",
  gradientVia = "white", 
  gradientTo = "cyan-50"
}: ComingSoonProps) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-${gradientFrom} via-${gradientVia} to-${gradientTo} dark:from-gray-900 dark:via-gray-800 dark:to-gray-900`}>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            {subtitle}
          </p>
          <Badge variant="outline" className="text-lg px-4 py-2">
            <BadgeIcon className="w-4 h-4 mr-2" />
            {badgeText}
          </Badge>
        </div>

        {/* Coming Soon Section */}
        <div className="flex items-center justify-center min-h-[400px]">
          <Card className="max-w-md w-full text-center border-2 border-dashed border-gray-300 dark:border-gray-600">
            <CardHeader className="pb-4">
              <div className="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-2xl text-gray-900 dark:text-white">
                Coming Soon
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {description}
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-blue-600 dark:text-blue-400">
                <AlertCircle className="w-4 h-4" />
                <span>Check back later for updates</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;