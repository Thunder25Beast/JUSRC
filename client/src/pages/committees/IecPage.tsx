import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Download, Calendar, Users, Shield, BookOpen, Clock, ExternalLink, AlertTriangle } from "lucide-react";

const IecPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const iecInfo = {
    title: "IEC - Institutional Ethics Committee",
    fullName: "Institutional Ethics Committee",
    description: "The IEC ensures that all research involving human subjects meets the highest ethical standards and complies with national and international guidelines.",
    functions: [
      "Review research proposals involving human subjects",
      "Ensure informed consent procedures are adequate",
      "Monitor ongoing research for ethical compliance",
      "Provide ethical guidance to researchers",
      "Investigate reports of ethical violations",
      "Maintain confidentiality of research participants"
    ],
    committee: [
      {
        name: "Dr. Rajesh Sharma",
        designation: "Chairperson",
        department: "Medical Ethics",
        expertise: "Biomedical Ethics"
      },
      {
        name: "Dr. Priya Mehta",
        designation: "Member Secretary",
        department: "Community Medicine",
        expertise: "Research Ethics"
      },
      {
        name: "Dr. Arun Kumar",
        designation: "Medical Member",
        department: "Medicine",
        expertise: "Clinical Research"
      },
      {
        name: "Ms. Sunita Rao",
        designation: "Non-Medical Member",
        department: "Legal Expert",
        expertise: "Medical Law"
      },
      {
        name: "Dr. Kavita Singh",
        designation: "Basic Medical Scientist",
        department: "Physiology",
        expertise: "Basic Sciences"
      }
    ],
    applicationProcess: [
      {
        step: 1,
        title: "Prepare Application",
        description: "Complete the IEC application form with all required documents",
        timeline: "Before starting research"
      },
      {
        step: 2,
        title: "Contact IEC",
        description: "Contact IEC for application and protocol submission guidelines",
        timeline: "At least 4 weeks before starting"
      },
      {
        step: 3,
        title: "Committee Review",
        description: "IEC reviews application in monthly meeting",
        timeline: "Monthly meetings"
      },
      {
        step: 4,
        title: "Decision Communication",
        description: "Receive approval, conditional approval, or rejection",
        timeline: "Within 1 week of meeting"
      }
    ],
    meetingSchedule: [
      "First Wednesday of every month",
      "Time: 2:00 PM - 5:00 PM",
      "Venue: IEC Meeting Room, Administration Block",
      "Application deadline: 2 weeks before meeting"
    ],
    documents: [
      {
        title: "IEC Application Form",
        description: "Official application form for ethical clearance",
        fileName: "IEC_Application_Form.pdf",
        fileSize: "1.2 MB",
        category: "forms"
      },
      {
        title: "Informed Consent Template",
        description: "Standard template for informed consent forms",
        fileName: "Informed_Consent_Template.docx",
        fileSize: "234 KB",
        category: "templates"
      },
      {
        title: "IEC Guidelines",
        description: "Comprehensive guidelines for IEC application process",
        fileName: "IEC_Guidelines.pdf",
        fileSize: "2.1 MB",
        category: "guidelines"
      },
      {
        title: "Research Protocol Template",
        description: "Template for research protocol submission",
        fileName: "Research_Protocol_Template.docx",
        fileSize: "456 KB",
        category: "templates"
      }
    ]
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: Shield },
    // { id: "committee", label: "Committee", icon: Users },
    { id: "process", label: "Application Process", icon: BookOpen },
    // { id: "documents", label: "Documents", icon: FileText }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {iecInfo.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            {iecInfo.description}
          </p>
          <Badge variant="outline" className="text-lg px-4 py-2">
            <Shield className="w-4 h-4 mr-2" />
            Research Ethics & Compliance
          </Badge>
        </div>

        {/* Important Notice */}
        <Card className="mb-8 border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                  Important Notice
                </h4>
                <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                  All research involving human subjects must obtain IEC approval before commencement. 
                  Research conducted without proper ethical clearance may face serious consequences.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

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
                  <CardTitle>About IEC</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    The Institutional Ethics Committee (IEC) is responsible for ensuring that all research 
                    involving human subjects at JIPMER adheres to the highest ethical standards. We follow 
                    national guidelines (ICMR) and international standards (ICH-GCP, Declaration of Helsinki).
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-400">Key Responsibilities</h4>
                      <ul className="space-y-2">
                        {iecInfo.functions.map((func, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-sm">{func}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                      <h4 className="font-semibold mb-3">Meeting Schedule</h4>
                      <ul className="space-y-2 text-sm">
                        {iecInfo.meetingSchedule.map((schedule, index) => (
                          <li key={index} className="text-gray-600 dark:text-gray-400">
                            • {schedule}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Types of Review</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Expedited Review</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        For minimal risk research with standard procedures
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold text-yellow-700 dark:text-yellow-400 mb-2">Full Board Review</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        For research involving more than minimal risk
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Continuing Review</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Annual review of ongoing approved research
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "committee" && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-6 h-6" />
                    IEC Committee Members
                  </CardTitle>
                  <CardDescription>
                    The IEC comprises medical and non-medical members as per ICMR guidelines
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {iecInfo.committee.map((member, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                          <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg">{member.name}</h4>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">{member.designation}</p>
                          <p className="text-gray-600 dark:text-gray-400">{member.department}</p>
                        </div>
                        <Badge variant="outline">
                          {member.expertise}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "process" && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Application Process</CardTitle>
                  <CardDescription>
                    Step-by-step guide for obtaining IEC approval
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {iecInfo.applicationProcess.map((step, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                          {step.step}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-1">{step.title}</h4>
                          <p className="text-gray-600 dark:text-gray-400 mb-2">{step.description}</p>
                          <Badge variant="outline" className="text-xs">
                            <Clock className="w-3 h-3 mr-1" />
                            {step.timeline}
                          </Badge>
                        </div>
                      </div>
                    ))}
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
                        <li>• Completed IEC application form</li>
                        <li>• Research protocol (detailed)</li>
                        <li>• Informed consent form</li>
                        <li>• Principal investigator's CV</li>
                        <li>• Data collection forms</li>
                        <li>• Budget details (if applicable)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Review Timeline</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Application submission: 2 weeks before meeting</li>
                        <li>• Committee review: Monthly meeting</li>
                        <li>• Decision communication: Within 1 week</li>
                        <li>• Approval validity: 1 year</li>
                        <li>• Renewal required: Annually</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Documents section commented out - files not available yet */}
          {/*
          {activeTab === "documents" && (
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>IEC Documents & Forms</CardTitle>
                  <CardDescription>
                    Download necessary forms and templates for IEC application
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {iecInfo.documents.map((doc, index) => (
                      <div key={index} className="flex justify-between items-center p-4 border rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-medium">{doc.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{doc.description}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {doc.category}
                            </Badge>
                            <span className="text-xs text-gray-500 dark:text-gray-400">{doc.fileSize}</span>
                          </div>
                        </div>
                        <Button size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h4 className="font-medium mb-2">Contact Information</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      For questions or assistance with IEC applications, contact the Member Secretary.
                    </p>
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Contact IEC
                      </Button>
                      <Button variant="outline" size="sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        Schedule Meeting
                      </Button>
                    </div>
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

export default IecPage;