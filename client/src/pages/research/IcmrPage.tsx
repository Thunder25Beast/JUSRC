import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, Award, FileText, ExternalLink, BookOpen, Target } from "lucide-react";

const IcmrPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const icmrInfo = {
    title: "ICMR Research Opportunities",
    fullName: "Indian Council of Medical Research",
    description: "The premier organization for medical research in India, offering various research opportunities and training programs for medical students.",
    programs: [
      {
        name: "ICMR-STS",
        fullName: "Short Term Studentship",
        duration: "2-3 months",
        stipend: "₹10,000/month",
        description: "Summer research program for medical students"
      },
      {
        name: "ICMR Junior Research Fellowship",
        fullName: "Junior Research Fellowship",
        duration: "2 years",
        stipend: "₹25,000/month",
        description: "Full-time research fellowship for fresh graduates"
      },
      {
        name: "ICMR Research Grants",
        fullName: "Research Grants",
        duration: "1-3 years",
        stipend: "Variable",
        description: "Project-based funding for specific research"
      }
    ],
    timeline: {
      sts: {
        application: "February - March",
        selection: "April",
        program: "May - July"
      },
      jrf: {
        application: "Twice yearly",
        exam: "As scheduled",
        interview: "After written test"
      }
    },
    eligibility: {
      sts: [
        "MBBS students (any year)",
        "Good academic record",
        "Research mentor required",
        "Age limit: Under 25 years"
      ],
      jrf: [
        "MBBS/BDS completed",
        "55% aggregate marks",
        "Age limit: 28 years (relaxation for reserved categories)",
        "Valid GATE/NET scores preferred"
      ]
    },
    workshops: [
      {
        title: "ICMR Proposal Writing Workshop",
        date: "April 2024",
        image: "/attached_assets/ICMR-P-W1.png",
        description: "Learn how to write effective research proposals for ICMR grants"
      }
    ]
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: FileText },
    { id: "programs", label: "Programs", icon: BookOpen },
    { id: "application", label: "Application", icon: Calendar },
    { id: "workshops", label: "Workshops", icon: Target }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {icmrInfo.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            {icmrInfo.description}
          </p>
          <Badge variant="outline" className="text-lg px-4 py-2">
            {icmrInfo.fullName}
          </Badge>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center gap-2"
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </Button>
            );
          })}
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          {activeTab === "overview" && (
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>About ICMR</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    The Indian Council of Medical Research (ICMR) is the apex body in India for the formulation, 
                    coordination and promotion of biomedical research. It provides excellent opportunities for 
                    medical students and researchers to engage in cutting-edge medical research.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <h4 className="font-semibold text-green-700 dark:text-green-400">Research Excellence</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Leading medical research in India</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <h4 className="font-semibold text-blue-700 dark:text-blue-400">Student Support</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Comprehensive training programs</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <h4 className="font-semibold text-purple-700 dark:text-purple-400">National Impact</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Policy and healthcare influence</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "programs" && (
            <div className="space-y-6">
              {icmrInfo.programs.map((program, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{program.name}</CardTitle>
                        <CardDescription className="text-lg">{program.fullName}</CardDescription>
                      </div>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        {program.stipend}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <p className="font-medium text-gray-700 dark:text-gray-300">Duration</p>
                        <p className="text-gray-600 dark:text-gray-400">{program.duration}</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-700 dark:text-gray-300">Stipend</p>
                        <p className="text-gray-600 dark:text-gray-400">{program.stipend}</p>
                      </div>
                      <div className="md:col-span-1">
                        <p className="font-medium text-gray-700 dark:text-gray-300">Description</p>
                        <p className="text-gray-600 dark:text-gray-400">{program.description}</p>
                      </div>
                    </div>
                    
                    {program.name === "ICMR-STS" && (
                      <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <h4 className="font-medium mb-2">STS Eligibility:</h4>
                        <ul className="space-y-1">
                          {icmrInfo.eligibility.sts.map((criteria, idx) => (
                            <li key={idx} className="text-sm text-gray-600 dark:text-gray-400">• {criteria}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {program.name === "ICMR Junior Research Fellowship" && (
                      <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                        <h4 className="font-medium mb-2">JRF Eligibility:</h4>
                        <ul className="space-y-1">
                          {icmrInfo.eligibility.jrf.map((criteria, idx) => (
                            <li key={idx} className="text-sm text-gray-600 dark:text-gray-400">• {criteria}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {activeTab === "application" && (
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>ICMR-STS Application Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 border rounded-lg">
                      <Clock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                      <h4 className="font-medium">Application Period</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{icmrInfo.timeline.sts.application}</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <Users className="w-8 h-8 text-green-500 mx-auto mb-2" />
                      <h4 className="font-medium">Selection Process</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{icmrInfo.timeline.sts.selection}</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <Award className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                      <h4 className="font-medium">Program Duration</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{icmrInfo.timeline.sts.program}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>JRF Application Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <h4 className="font-medium">Step 1: Online Application</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{icmrInfo.timeline.jrf.application}</p>
                      </div>
                      <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <h4 className="font-medium">Step 2: Written Examination</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{icmrInfo.timeline.jrf.exam}</p>
                      </div>
                      <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <h4 className="font-medium">Step 3: Interview</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{icmrInfo.timeline.jrf.interview}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <Button className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        Download STS Application
                      </Button>
                      <Button variant="outline" className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        ICMR Official Website
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "workshops" && (
            <div className="space-y-6">
              {icmrInfo.workshops.map((workshop, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{workshop.title}</CardTitle>
                    <CardDescription>{workshop.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{workshop.description}</p>
                        <div className="space-y-2">
                          <h4 className="font-medium">Workshop Highlights:</h4>
                          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                            <li>• Research proposal writing techniques</li>
                            <li>• ICMR application guidelines</li>
                            <li>• Budget preparation and justification</li>
                            <li>• Common mistakes to avoid</li>
                            <li>• Q&A with ICMR officials</li>
                          </ul>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <img 
                          src={workshop.image} 
                          alt={workshop.title}
                          className="max-w-full h-auto rounded-lg shadow-md"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming ICMR Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 dark:text-gray-400">
                      Stay tuned for upcoming ICMR workshops and training programs.
                      Follow our updates for the latest announcements.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IcmrPage;