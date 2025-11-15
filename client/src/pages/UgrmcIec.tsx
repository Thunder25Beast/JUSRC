import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, FileText, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";

const committees = [
  {
    id: "ugrmc",
    title: "UGRMC",
    fullTitle: "Undergraduate Research Monitoring Committee",
    description: "Oversees and monitors all undergraduate research projects, ensuring quality standards and ethical compliance throughout the research lifecycle.",
    icon: Users,
    href: "/committees/ugrmc",
    responsibilities: ["Research approval", "Progress monitoring", "Quality assurance", "Student guidance"],
    features: [
      "Proposal evaluation and approval",
      "Regular progress tracking",
      "Quality control measures",
      "Mentor-student coordination"
    ],
    color: "from-blue-500 to-cyan-600",
    bgGradient: "from-blue-50 to-cyan-50",
    darkBgGradient: "dark:from-blue-900/20 dark:to-cyan-900/20",
    iconColor: "text-blue-600 dark:text-blue-400"
  },
  {
    id: "iec", 
    title: "IEC",
    fullTitle: "Institutional Ethics Committee",
    description: "Reviews research proposals for ethical compliance, ensuring participant safety, research integrity, and adherence to ethical guidelines.",
    icon: Shield,
    href: "/committees/iec",
    responsibilities: ["Ethics review", "Compliance monitoring", "Safety protocols", "Research guidelines"],
    features: [
      "Ethical compliance review",
      "Participant safety protocols",
      "Informed consent verification",
      "Risk assessment"
    ],
    color: "from-green-500 to-emerald-600",
    bgGradient: "from-green-50 to-emerald-50",
    darkBgGradient: "dark:from-green-900/20 dark:to-emerald-900/20",
    iconColor: "text-green-600 dark:text-green-400"
  }
];

export default function UgrmcIecPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <Badge variant="outline" className="mb-4 text-sm px-3 py-1">
            <FileText className="w-3 h-3 mr-2" />
            Research Oversight
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            UGRMC & IEC
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
            Our research committees ensure quality, ethics, and compliance in undergraduate research projects.
          </p>
        </div>

        {/* Committee Cards */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {committees.map((committee) => {
            const Icon = committee.icon;
            return (
              <Card key={committee.id} className={`overflow-hidden border-2 hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${committee.bgGradient} ${committee.darkBgGradient}`}>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center shadow-md`}>
                      <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${committee.iconColor}`} />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      Active
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl sm:text-2xl mb-2">
                    {committee.title}
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {committee.fullTitle}
                  </CardDescription>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mt-3">
                    {committee.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Key Responsibilities */}
                  <div>
                    <h4 className="font-semibold text-sm mb-3 text-gray-900 dark:text-white">
                      Key Responsibilities
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {committee.responsibilities.map((responsibility, index) => (
                        <Badge key={index} variant="outline" className="text-xs bg-white/50 dark:bg-gray-800/50">
                          {responsibility}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-sm mb-3 text-gray-900 dark:text-white">
                      What We Do
                    </h4>
                    <div className="space-y-2">
                      {committee.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link href={committee.href}>
                    <Button 
                      className={`w-full bg-gradient-to-r ${committee.color} text-white border-0 hover:shadow-lg transition-all duration-300 group`}
                      size="lg"
                    >
                      <span>Learn More About {committee.title}</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Info Section */}
        <Card className="max-w-4xl mx-auto mt-8 sm:mt-12 border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
              <FileText className="w-5 h-5" />
              How It Works
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">
                  UGRMC Process
                </h4>
                <ol className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex gap-2">
                    <span className="font-bold text-blue-600">1.</span>
                    <span>Submit research proposal</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-blue-600">2.</span>
                    <span>Committee review & feedback</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-blue-600">3.</span>
                    <span>Approval & ongoing monitoring</span>
                  </li>
                </ol>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">
                  IEC Process
                </h4>
                <ol className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex gap-2">
                    <span className="font-bold text-green-600">1.</span>
                    <span>Submit ethics application</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-green-600">2.</span>
                    <span>Ethics committee evaluation</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-green-600">3.</span>
                    <span>Ethical clearance certificate</span>
                  </li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
