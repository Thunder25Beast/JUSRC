import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  FileText, 
  Award, 
  CheckCircle, 
  Clock, 
  Users, 
  Shield,
  ArrowRight,
  FolderOpen,
  Workflow
} from "lucide-react";

const GjStrausDocuments = () => {
  const [activeSection, setActiveSection] = useState("workflow");
  const [, setLocation] = useLocation();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const workflowSteps = [
    { id: 1, title: "Notification Release", timeline: "Nov-Dec", status: "info" },
    { id: 2, title: "Idea/Department Selection", timeline: "", status: "info" },
    { id: 3, title: "Approach Guide", timeline: "", status: "info" },
    { id: 4, title: "Finalize Research Topic", timeline: "", status: "info" },
    { id: 5, title: "Proposal Preparation", subtitle: "(Literature Search & Structuring)", timeline: "", status: "info" },
    { id: 6, title: "Submit Proposal to UGRMC", subtitle: "(PDF via Email)", timeline: "Mid - End of Jan", status: "warning" },
    { id: 7, title: "Provisional Results Released", timeline: "March", status: "info" },
    { id: 8, title: "UGRMC Circular Released", timeline: "", status: "info" },
    { id: 9, title: "UGRMC Meeting & Presentation", subtitle: "(PPT Required)", timeline: "", status: "warning" },
    { id: 10, title: "Proposal Modifications Suggested", timeline: "", status: "info" },
    { id: 11, title: "Resubmit Modified Proposal", timeline: "", status: "info" },
    { id: 12, title: "UGRMC Certificate Issued", timeline: "", status: "success" },
    { id: 13, title: "Submit Proposal to IEC", subtitle: "(Soft & Hard Copies)", timeline: "", status: "warning" },
    { id: 14, title: "IEC Meeting", subtitle: "(Mandatory Attendance)", timeline: "", status: "warning" },
    { id: 15, title: "Proposal Modifications Suggested", subtitle: "Sent via Email (1-2 weeks)", timeline: "", status: "info" },
    { id: 16, title: "Resubmit Modified Proposal to IEC", timeline: "", status: "info" },
    { id: 17, title: "IEC Certificate Issued", subtitle: "Project can commence", timeline: "", status: "success" },
    { id: 18, title: "Data Collection & Analysis", timeline: "Up to July End", status: "info" },
    { id: 19, title: "Report Submission", timeline: "Before August End", status: "warning" },
    { id: 20, title: "Stipend Issued", subtitle: "Upon Report Review", timeline: "", status: "success" }
  ];

  const documentSections = [
    {
      id: "protocol",
      title: "Protocol Writing and Submission",
      icon: FileText,
      description: "Templates and guidelines for research proposal preparation",
      documents: [
        {
          title: "Proposal Template",
          description: "Standard template for GJ STRAUS research proposals",
          fileName: "proposal-template.docx",
          fileSize: "45 KB",
          category: "Template"
        },
        {
          title: "Final Report Proposal Sample",
          description: "Sample proposal for reference and guidance",
          fileName: "final-report-proposal.docx",
          fileSize: "67 KB",
          category: "Reference"
        }
      ]
    },
    {
      id: "committees",
      title: "UGRMC and IEC",
      icon: Users,
      description: "Committee-related documents and processes",
      note: "Redirects to main UGRMC and IEC folders for detailed information",
      redirects: [
        { name: "UGRMC Documents", path: "/documents/ugrmc" },
        { name: "IEC Documents", path: "/documents/iec" }
      ]
    },
    {
      id: "final-report",
      title: "Final Report Submission",
      icon: Award,
      description: "Documents and templates for final report submission",
      documents: [
        {
          title: "Circular for Final Report Submission",
          description: "Official circular with submission guidelines and deadlines",
          fileName: "Circular-for-Final-report-submission.pdf",
          fileSize: "234 KB",
          category: "Circular"
        },
        {
          title: "Covering Letter Template",
          description: "Mail sample and covering letter template for submissions",
          fileName: "Covering_letter.docx",
          fileSize: "28 KB",
          category: "Template"
        },
        {
          title: "Sample Final Report",
          description: "Complete sample final report for reference",
          fileName: "Sample-of-Final-Report.pdf",
          fileSize: "1.2 MB",
          category: "Sample"
        },
        {
          title: "Project Completion Certificate",
          description: "Certificate template to be signed by Guide and Head of Department",
          fileName: "Project_Completion_Certificate.docx",
          fileSize: "32 KB",
          category: "Certificate"
        }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "warning": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      default: return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success": return <CheckCircle className="w-4 h-4" />;
      case "warning": return <Clock className="w-4 h-4" />;
      default: return <ArrowRight className="w-4 h-4" />;
    }
  };

  const handleDownload = (fileName: string) => {
    const link = document.createElement('a');
    link.href = `/documents/gjstraus/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            GJ STRAUS Documents
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Complete documentation and workflow for GJ STRAUS research grant applications, 
            from proposal submission to final report.
          </p>
          <Badge variant="outline" className="text-lg px-4 py-2">
            <Award className="w-4 h-4 mr-2" />
            Research Grant Documentation
          </Badge>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Button
            variant={activeSection === "workflow" ? "default" : "outline"}
            onClick={() => setActiveSection("workflow")}
            className="flex items-center gap-2"
          >
            <Workflow className="w-4 h-4" />
            Workflow
          </Button>
          <Button
            variant={activeSection === "documents" ? "default" : "outline"}
            onClick={() => setActiveSection("documents")}
            className="flex items-center gap-2"
          >
            <FolderOpen className="w-4 h-4" />
            Documents
          </Button>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          {activeSection === "workflow" && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Workflow className="w-6 h-6" />
                    GJ STRAUS Workflow
                  </CardTitle>
                  <CardDescription>
                    Complete step-by-step process from notification to stipend issuance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {workflowSteps.map((step, index) => (
                      <div key={step.id} className="flex items-start gap-4 p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                            {step.id}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white">
                                {step.title}
                              </h4>
                              {step.subtitle && (
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                  {step.subtitle}
                                </p>
                              )}
                              {step.timeline && (
                                <p className="text-sm font-medium text-amber-600 dark:text-amber-400 mt-1">
                                  Timeline: {step.timeline}
                                </p>
                              )}
                            </div>
                            <Badge className={getStatusColor(step.status)}>
                              {getStatusIcon(step.status)}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeSection === "documents" && (
            <div className="space-y-8">
              {documentSections.map((section) => {
                const Icon = section.icon;
                return (
                  <Card key={section.id}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon className="w-6 h-6" />
                        {section.title}
                      </CardTitle>
                      <CardDescription>
                        {section.description}
                      </CardDescription>
                      {section.note && (
                        <div className="mt-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                          <p className="text-sm text-blue-700 dark:text-blue-300">
                            <Shield className="w-4 h-4 inline mr-2" />
                            {section.note}
                          </p>
                        </div>
                      )}
                    </CardHeader>
                    <CardContent>
                      {section.redirects ? (
                        <div className="grid md:grid-cols-2 gap-4">
                          {section.redirects.map((redirect, index) => (
                            <Button
                              key={index}
                              variant="outline"
                              className="h-auto p-4 justify-start"
                              onClick={() => setLocation(redirect.path)}
                            >
                              <div className="flex items-center gap-3">
                                <FolderOpen className="w-5 h-5" />
                                <span>{redirect.name}</span>
                                <ArrowRight className="w-4 h-4 ml-auto" />
                              </div>
                            </Button>
                          ))}
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {section.documents?.map((doc, index) => (
                            <div key={index} className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                              <div className="flex-1">
                                <h4 className="font-medium text-gray-900 dark:text-white">
                                  {doc.title}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                  {doc.description}
                                </p>
                                <div className="flex items-center gap-2 mt-2">
                                  <Badge variant="outline" className="text-xs">
                                    {doc.category}
                                  </Badge>
                                  <span className="text-xs text-gray-500 dark:text-gray-400">
                                    {doc.fileSize}
                                  </span>
                                </div>
                              </div>
                              <Button
                                size="sm"
                                onClick={() => handleDownload(doc.fileName)}
                                className="ml-4"
                              >
                                <Download className="w-4 h-4 mr-2" />
                                Download
                              </Button>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}

              {/* PCC Reference */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-6 h-6" />
                    Plagiarism Check (PCC)
                  </CardTitle>
                  <CardDescription>
                    Access plagiarism check documents and guidelines
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                    <p className="text-sm text-amber-700 dark:text-amber-300 mb-3">
                      For plagiarism check requirements and documents, please visit the dedicated PCC section.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setLocation('/documents/plagiarism-check')}
                      className="w-full sm:w-auto"
                    >
                      <Shield className="w-4 h-4 mr-2" />
                      Go to PCC Documents
                      <ArrowRight className="w-4 h-4 ml-2" />
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

export default GjStrausDocuments;