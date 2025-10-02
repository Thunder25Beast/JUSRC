import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Users, Clock, Award, FileText, ExternalLink, BookOpen, Target, Baby, Stethoscope } from "lucide-react";

const IapPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const iapInfo = {
    title: "IAP Research Grants",
    fullName: "Indian Academy of Pediatrics",
    description: "Research grants and opportunities specifically focused on pediatric medicine and child health research.",
    programs: [
      {
        name: "IAP Research Grant",
        amount: "₹50,000 - ₹1,00,000",
        duration: "1-2 years",
        description: "Primary research funding for pediatric studies",
        eligibility: ["Medical students", "Residents", "Faculty members"]
      },
      {
        name: "IAP Young Investigator Award",
        amount: "₹25,000",
        duration: "1 year", 
        description: "Support for young researchers in pediatrics",
        eligibility: ["Under 35 years", "Completed MD/DNB Pediatrics"]
      },
      {
        name: "IAP Student Research Grant",
        amount: "₹15,000",
        duration: "6 months",
        description: "Dedicated funding for undergraduate medical students",
        eligibility: ["MBBS students", "Pediatric research focus"]
      }
    ],
    researchAreas: [
      {
        category: "Neonatology",
        topics: ["Neonatal care", "Premature birth complications", "NICU protocols"],
        icon: Baby
      },
      {
        category: "Pediatric Cardiology",
        topics: ["Congenital heart diseases", "Cardiac interventions", "Preventive care"],
        icon: Heart
      },
      {
        category: "Infectious Diseases",
        topics: ["Childhood infections", "Vaccine research", "Antibiotic resistance"],
        icon: Stethoscope
      },
      {
        category: "Nutrition & Growth",
        topics: ["Malnutrition", "Growth disorders", "Dietary interventions"],
        icon: Users
      }
    ],
    timeline: {
      application: "February - April",
      review: "May - June",
      results: "July",
      funding: "August onwards"
    },
    benefits: [
      "Financial support for research",
      "Mentorship from pediatric experts",
      "Platform for pediatric research",
      "Networking opportunities",
      "Publication support",
      "Conference presentation opportunities"
    ],
    pastGrantees: [
      {
        name: "Dr. Priya Sharma",
        year: "2024",
        project: "Nutritional Assessment in Rural Children",
        outcome: "Published in Indian Pediatrics"
      },
      {
        name: "Dr. Rajesh Kumar",
        year: "2023",
        project: "Neonatal Sepsis Management Protocol",
        outcome: "Implemented in 5 hospitals"
      },
      {
        name: "Dr. Anita Verma",
        year: "2023", 
        project: "Vaccination Coverage in Urban Slums",
        outcome: "Policy recommendations submitted"
      }
    ]
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: FileText },
    { id: "programs", label: "Grant Programs", icon: Award },
    { id: "research-areas", label: "Research Areas", icon: BookOpen },
    { id: "application", label: "Application", icon: Target }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {iapInfo.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            {iapInfo.description}
          </p>
          <Badge variant="outline" className="text-lg px-4 py-2">
            {iapInfo.fullName}
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
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-6 h-6 text-pink-500" />
                    About IAP Research Initiative
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    The Indian Academy of Pediatrics (IAP) is committed to advancing pediatric care through 
                    research and education. Our research grant programs support innovative studies that aim 
                    to improve child health outcomes across India.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-pink-700 dark:text-pink-400">Key Benefits</h4>
                      <ul className="space-y-2">
                        {iapInfo.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-lg">
                      <h4 className="font-semibold mb-3">Research Impact</h4>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <p className="text-2xl font-bold text-pink-600 dark:text-pink-400">150+</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Projects Funded</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-pink-600 dark:text-pink-400">50+</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Publications</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-pink-600 dark:text-pink-400">25+</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Policy Changes</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-pink-600 dark:text-pink-400">1M+</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Children Impacted</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Success Stories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {iapInfo.pastGrantees.map((grantee, index) => (
                      <div key={index} className="border-l-4 border-pink-500 pl-4 py-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">{grantee.project}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{grantee.name} • {grantee.year}</p>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {grantee.outcome}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "programs" && (
            <div className="space-y-6">
              {iapInfo.programs.map((program, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{program.name}</CardTitle>
                        <CardDescription className="mt-2">{program.description}</CardDescription>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200 mb-2">
                          {program.amount}
                        </Badge>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{program.duration}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <h4 className="font-medium mb-2">Eligibility Criteria:</h4>
                      <ul className="space-y-1">
                        {program.eligibility.map((criteria, idx) => (
                          <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                            {criteria}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-4 flex gap-2">
                      <Button size="sm" variant="outline">
                        <FileText className="w-4 h-4 mr-2" />
                        Application Form
                      </Button>
                      <Button size="sm" variant="outline">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Guidelines
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {activeTab === "research-areas" && (
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Priority Research Areas</CardTitle>
                  <CardDescription>
                    Focus areas for IAP research grants and initiatives
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {iapInfo.researchAreas.map((area, index) => {
                      const Icon = area.icon;
                      return (
                        <div key={index} className="p-4 border rounded-lg">
                          <div className="flex items-center gap-3 mb-3">
                            <Icon className="w-6 h-6 text-pink-500" />
                            <h4 className="font-semibold">{area.category}</h4>
                          </div>
                          <ul className="space-y-1">
                            {area.topics.map((topic, topicIndex) => (
                              <li key={topicIndex} className="text-sm text-gray-600 dark:text-gray-400">
                                • {topic}
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Emerging Research Themes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-lg">
                      <h4 className="font-medium mb-2">Digital Health</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Telemedicine, AI in pediatrics, mobile health apps</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg">
                      <h4 className="font-medium mb-2">Precision Medicine</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Genomics, personalized treatment, biomarkers</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg">
                      <h4 className="font-medium mb-2">Global Health</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Health equity, climate change impact, sustainable care</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "application" && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Application Timeline 2025</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <Clock className="w-8 h-8 text-green-500 mx-auto mb-2" />
                      <h4 className="font-medium">Application Period</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{iapInfo.timeline.application}</p>
                    </div>
                    <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                      <Users className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                      <h4 className="font-medium">Review Process</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{iapInfo.timeline.review}</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <Award className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                      <h4 className="font-medium">Results</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{iapInfo.timeline.results}</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <Heart className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                      <h4 className="font-medium">Funding Starts</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{iapInfo.timeline.funding}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Application Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Required Documents</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          Research proposal (max 10 pages)
                        </li>
                        <li className="flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          Budget justification
                        </li>
                        <li className="flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          Principal investigator CV
                        </li>
                        <li className="flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          Institutional approval letter
                        </li>
                        <li className="flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          Ethical clearance certificate
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Evaluation Criteria</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Scientific Merit</span>
                          <Badge variant="outline">40%</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Innovation</span>
                          <Badge variant="outline">25%</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Feasibility</span>
                          <Badge variant="outline">20%</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Impact</span>
                          <Badge variant="outline">15%</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex gap-4">
                    <Button className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Download Application Package
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      IAP Research Portal
                    </Button>
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

export default IapPage;