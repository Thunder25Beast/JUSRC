import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users, Award, FileText, ExternalLink } from "lucide-react";

const GjStraus = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const gjStrausInfo = {
    title: "GJ STRAUS Research Grant",
    fullName: "Professor GJ Straus Medical Research Grant",
    description: "A prestigious research grant program designed to support innovative medical research projects by undergraduate medical students.",
    eligibility: [
      "Current MBBS students (any year)",
      "Research proposal in any medical field",
      "Faculty mentor requirement",
      "Ethical approval needed for human studies"
    ],
    timeline: {
      application: "January - February",
      review: "March",
      results: "April",
      duration: "6-12 months"
    },
    funding: {
      amount: "₹25,000 - ₹50,000",
      coverage: ["Research materials", "Equipment usage", "Travel expenses", "Publication costs"]
    },
    pastProjects: [
      {
        title: "Novel Biomarkers in Pediatric Sepsis",
        author: "John Doe, 2024",
        status: "Published in Indian Pediatrics"
      },
      {
        title: "AI-based Diabetic Retinopathy Screening",
        author: "Jane Smith, 2024",
        status: "Under Review"
      },
      {
        title: "Traditional Medicine in Cancer Care",
        author: "Alex Johnson, 2023",
        status: "Completed"
      }
    ]
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: FileText },
    { id: "application", label: "Application", icon: Calendar },
    { id: "timeline", label: "Timeline", icon: Clock },
    { id: "past-projects", label: "Past Projects", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {gjStrausInfo.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            {gjStrausInfo.description}
          </p>
          <Badge variant="outline" className="text-lg px-4 py-2">
            {gjStrausInfo.fullName}
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
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Eligibility Criteria
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {gjStrausInfo.eligibility.map((criteria, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                        {criteria}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Funding Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-lg text-green-600 dark:text-green-400">
                        {gjStrausInfo.funding.amount}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Grant Amount</p>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Coverage includes:</p>
                      <ul className="space-y-1">
                        {gjStrausInfo.funding.coverage.map((item, index) => (
                          <li key={index} className="text-sm text-gray-600 dark:text-gray-400">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "application" && (
            <Card>
              <CardHeader>
                <CardTitle>Application Process</CardTitle>
                <CardDescription>
                  Follow these steps to apply for the GJ STRAUS Research Grant
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 border rounded-lg">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">1</div>
                      <h4 className="font-medium">Prepare Proposal</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Write research proposal with mentor</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">2</div>
                      <h4 className="font-medium">Contact JUSRC</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Contact for submission guidelines</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">3</div>
                      <h4 className="font-medium">Review Process</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Wait for evaluation results</p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Required Documents:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Research proposal (max 5 pages)</li>
                      <li>• Detailed budget breakdown</li>
                      <li>• Faculty mentor endorsement</li>
                      <li>• Ethical clearance (if applicable)</li>
                      <li>• Student academic transcript</li>
                    </ul>
                  </div>

                  <div className="flex gap-4">
                    <Button className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Download Application Form
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View Guidelines
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "timeline" && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Application Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div>
                          <p className="font-medium">Application Period</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{gjStrausInfo.timeline.application}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div>
                          <p className="font-medium">Review Process</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{gjStrausInfo.timeline.review}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <div>
                          <p className="font-medium">Results Announcement</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{gjStrausInfo.timeline.results}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <div>
                          <p className="font-medium">Project Duration</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{gjStrausInfo.timeline.duration}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                      <h4 className="font-medium mb-3">Important Dates for 2025</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Application Opens:</span>
                          <span className="font-medium">January 15, 2025</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Application Deadline:</span>
                          <span className="font-medium">February 28, 2025</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Review Period:</span>
                          <span className="font-medium">March 1-31, 2025</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Results:</span>
                          <span className="font-medium">April 15, 2025</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "past-projects" && (
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Successful Projects</CardTitle>
                  <CardDescription>
                    Examples of past GJ STRAUS grant recipients and their achievements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {gjStrausInfo.pastProjects.map((project, index) => (
                      <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                        <h4 className="font-medium">{project.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{project.author}</p>
                        <Badge variant="outline" className="mt-1">
                          {project.status}
                        </Badge>
                      </div>
                    ))}
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

export default GjStraus;