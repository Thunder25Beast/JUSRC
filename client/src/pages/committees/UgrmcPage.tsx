import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Download, Calendar, Users, Award, BookOpen, Clock, ExternalLink } from "lucide-react";

const UgrmcPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const ugrmcInfo = {
    title: "UGRMC - Undergraduate Research Monitoring Committee",
    fullName: "Undergraduate Research Monitoring Committee",
    description: "The UGRMC oversees and monitors undergraduate research activities, ensuring quality standards and ethical compliance.",
    functions: [
      "Monitor ongoing undergraduate research projects",
      "Evaluate research progress and milestones",
      "Ensure compliance with institutional guidelines",
      "Provide guidance for research methodology",
      "Review and approve research proposals",
      "Coordinate with faculty mentors"
    ],
    committee: [

    ],
    processes: [
      {
        title: "Research Proposal Submission",
        description: "Contact UGRMC for proposal submission guidelines",
        timeline: "Throughout the year",
        documents: ["Research proposal", "Faculty mentor approval", "Timeline"]
      },
      {
        title: "Progress Review",
        description: "Quarterly review of ongoing research projects",
        timeline: "Every 3 months",
        documents: ["Progress report", "Data collection status", "Challenges faced"]
      },
      {
        title: "Final Evaluation",
        description: "Final assessment of completed research projects",
        timeline: "At project completion",
        documents: ["Final report", "Research findings", "Publication draft"]
      }
    ],
    guidelines: [
      {
        title: "Research Proposal Guidelines",
        description: "Format and requirements for research proposal submission",
        fileName: "UGRMC_Proposal_Guidelines.pdf",
        fileSize: "1.2 MB"
      },
      {
        title: "Progress Reporting Format",
        description: "Standard format for quarterly progress reports",
        fileName: "Progress_Report_Format.docx",
        fileSize: "156 KB"
      },
      {
        title: "Final Report Template",
        description: "Template for final research project report",
        fileName: "Final_Report_Template.docx",
        fileSize: "234 KB"
      }
    ]
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: FileText },
    { id: "committee", label: "Committee", icon: Users },
    { id: "processes", label: "Processes", icon: BookOpen }
    // { id: "documents", label: "Documents", icon: Download } // Commented out - no files available yet
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {ugrmcInfo.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            {ugrmcInfo.description}
          </p>
          <Badge variant="outline" className="text-lg px-4 py-2">
            <Award className="w-4 h-4 mr-2" />
            Research Monitoring
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
                  <CardTitle>About UGRMC</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    The Undergraduate Research Monitoring Committee (UGRMC) plays a crucial role in 
                    maintaining the quality and integrity of undergraduate research at JIPMER. We ensure 
                    that all research activities meet the highest standards of scientific rigor and 
                    ethical compliance.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-indigo-700 dark:text-indigo-400">Key Functions</h4>
                      <ul className="space-y-2">
                        {ugrmcInfo.functions.map((func, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-sm">{func}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg">
                      <h4 className="font-semibold mb-3">Research Statistics</h4>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">85+</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Projects Monitored</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">95%</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Completion Rate</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">40+</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Publications</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">100%</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Ethics Compliance</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

    

          {activeTab === "processes" && (
            <div className="space-y-6">
              {ugrmcInfo.processes.map((process, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      {process.title}
                    </CardTitle>
                    <CardDescription>{process.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">Timeline</h4>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{process.timeline}</p>
                        
                        <h4 className="font-medium mb-2">Required Documents</h4>
                        <ul className="space-y-1">
                          {process.documents.map((doc, docIndex) => (
                            <li key={docIndex} className="text-sm text-gray-600 dark:text-gray-400">
                              • {doc}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Important Notes</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          All submissions must be made through the official UGRMC contact. 
                          Contact UGRMC committee for submission guidelines and requirements.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Documents section commented out - files not available yet */}
          {/*
          {activeTab === "documents" && (
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>UGRMC Documents</CardTitle>
                  <CardDescription>
                    Download forms, templates, and guidelines for UGRMC processes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {ugrmcInfo.guidelines.map((doc, index) => (
                      <div key={index} className="flex justify-between items-center p-4 border rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-medium">{doc.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{doc.description}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{doc.fileSize}</p>
                        </div>
                        <Button size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h4 className="font-medium mb-2">Need Help?</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      Contact the UGRMC secretariat for any questions or assistance with your research project.
                    </p>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Contact UGRMC
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          */}
        </div>
      </div>
    </div>
  );
};

export default UgrmcPage;