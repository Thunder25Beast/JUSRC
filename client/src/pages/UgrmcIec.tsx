import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, FileText, ExternalLink, CheckCircle, Calendar, Award } from "lucide-react";
import { Link } from "wouter";

const committees = [
  {
    id: "ugrmc",
    title: "UGRMC (Undergraduate Research Monitoring Committee)",
    description: "Oversees and monitors all undergraduate research projects, ensuring quality standards and ethical compliance",
    icon: Users,
    href: "/committees/ugrmc",
    responsibilities: ["Research approval", "Progress monitoring", "Quality assurance", "Student guidance"],
    memberCount: 15,
    color: "blue",
    status: "Active"
  },
  {
    id: "iec", 
    title: "IEC (Institutional Ethics Committee)",
    description: "Reviews research proposals for ethical compliance, ensuring participant safety and research integrity",
    icon: Shield,
    href: "/committees/iec",
    responsibilities: ["Ethics review", "Compliance monitoring", "Safety protocols", "Research guidelines"],
    memberCount: 12,
    color: "green",
    status: "Active"
  }
];

const stats = {
  totalProposals: 185,
  approvedProjects: 142,
  committeeMembers: 27,
  averageReviewTime: "14 days"
};

export default function UgrmcIecPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
      green: "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Research Committees
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Learn about our research oversight committees responsible for ensuring quality, 
            ethics, and compliance in undergraduate research.
          </p>
          <div className="flex justify-center gap-4">
            <Badge variant="outline" className="text-lg px-4 py-2">
              <Users className="w-4 h-4 mr-2" />
              {stats.committeeMembers} Committee Members
            </Badge>
            <Badge variant="outline" className="text-lg px-4 py-2">
              <CheckCircle className="w-4 h-4 mr-2" />
              {stats.approvedProjects} Projects Approved
            </Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {committees.map((committee) => {
            const Icon = committee.icon;
            return (
              <Card key={committee.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center justify-between">
                    <div className="flex items-center">
                      <Icon className="w-6 h-6 mr-3 text-gray-700 dark:text-gray-300" />
                      <div>
                        <div>{committee.title}</div>
                        <div className="text-sm font-normal text-gray-500 mt-1">
                          {committee.memberCount} members
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      {committee.status}
                    </Badge>
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-300">
                    {committee.description}
                  </p>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Key Responsibilities:</h4>
                      <div className="flex flex-wrap gap-2">
                        {committee.responsibilities.map((responsibility, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {responsibility}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Link href={committee.href}>
                      <Button 
                        className={`w-full bg-gradient-to-r ${getColorClasses(committee.color)} text-white border-0`}
                      >
                        View Committee Details
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
