import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { 
  Download, 
  FileText, 
  Award, 
  CheckCircle, 
  Users, 
  ArrowRight,
  FileDown,
  AlertCircle,
  ExternalLink
} from "lucide-react";

const GjStrausDocuments = () => {
  const [activeTab, setActiveTab] = useState("workflow");
  const [, setLocation] = useLocation();
  const [showCoverImage, setShowCoverImage] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const workflowSteps = [
    { id: 1, title: "Notification Release", timeline: "Nov-Dec", status: "info" },
    { id: 2, title: "Idea/Department Selection", status: "info" },
    { id: 3, title: "Approach Guide", status: "info" },
    { id: 4, title: "Finalize Research Topic", status: "info" },
    { id: 5, title: "Proposal Preparation", subtitle: "(Literature Search & Structuring)", status: "info" },
    { id: 6, title: "Submit Proposal to UGRMC", subtitle: "(PDF via Email)", timeline: "Mid - End of Jan", status: "warning" },
    { id: 7, title: "Provisional Results Released", timeline: "March", status: "info" },
    { id: 8, title: "UGRMC Circular Released", status: "info" },
    { id: 9, title: "UGRMC Meeting & Presentation", subtitle: "(PPT Required)", status: "warning" },
    { id: 10, title: "Proposal Modifications Suggested", status: "info" },
    { id: 11, title: "Resubmit Modified Proposal", status: "info" },
    { id: 12, title: "UGRMC Certificate Issued", status: "success" },
    { id: 13, title: "Submit Proposal to IEC", subtitle: "(Soft & Hard Copies)", status: "warning" },
    { id: 14, title: "IEC Meeting", subtitle: "(Mandatory Attendance)", status: "warning" },
    { id: 15, title: "Proposal Modifications Suggested", subtitle: "Sent via Email (1-2 weeks)", status: "info" },
    { id: 16, title: "Resubmit Modified Proposal to IEC", status: "info" },
    { id: 17, title: "IEC Certificate Issued", subtitle: "Project can commence", status: "success" },
    { id: 18, title: "Data Collection & Analysis", timeline: "Up to July End", status: "info" },
    { id: 19, title: "Report Submission", timeline: "Before August End", status: "warning" },
    { id: 20, title: "Stipend Issued", subtitle: "Upon Report Review", status: "success" }
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
          title: "UGRMC Protocol Proforma",
          description: "Official UGRMC protocol format for GJ STRAUS 2024",
          fileName: "UGRMC-GJ-STRAUS-Protocol-Proforma 2024 (1)_0 (1).docx",
          fileSize: "120 KB",
          category: "Template"
        },
        {
          title: "Reference Proposal",
          description: "Sample proposal for reference and guidance",
          fileName: "final-report-proposal.docx",
          fileSize: "280 KB",
          category: "Reference"
        },
        {
          title: "Submission Cover Page",
          description: "Cover page image for proposal submission",
          fileName: "gj-st-cover.png",
          fileSize: "150 KB",
          category: "Cover Page"
        }
      ]
    },
    {
      id: "committees",
      title: "UGRMC and IEC",
      icon: Users,
      description: "Committee-related documents and processes",
      note: "For detailed committee information, visit the dedicated UGRMC and IEC pages",
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
          title: "Final Report Circular",
          description: "Official circular with submission guidelines and deadlines",
          fileName: "Circular-for-Final-report-submission.pdf",
          fileSize: "234 KB",
          category: "Circular"
        },
        {
          title: "Covering Letter Template",
          description: "Template for covering letter and email sample",
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

  const proposalStructure = [
    {
      part: "Part-A",
      description: "Basic details of PI, Guide and Co-Guide"
    },
    {
      part: "Part-B",
      description: "Proposal proper where the details of the project are mentioned clearly"
    },
    {
      part: "Part-C + Declaration Form",
      description: "Get signatures from Guide, Co-guide, and respective Dept Heads"
    }
  ];

  const ugrmcMeetingRequirements = [
    "PPT Presentation of Proposal",
    "Maximum 8 slides",
    "5 minutes presentation time"
  ];

  const iecSoftCopyRequirements = [
    "Signed Declaration Form",
    "Consent/Waiver of Consent Form",
    "Proposal",
    "Covering Letter (Both PDFs & Word Documents)"
  ];

  const iecHardCopyRequirements = [
    "Covering Letter",
    "Consent/Waiver of Consent Forms",
    "Research Proposal with Signed Declaration Form",
    "Data Collection Proformas",
    "CV of PI, Guide, & Co-Guides",
    "GCP certificate of PI and Guide (if interventional study)"
  ];

  const additionalRequirements = [
    "Proof of manuscript submission to Peer-reviewed indexed journal (E-mail screenshot)",
    "Project Completion Certificate (Word document - fill and submit)",
    "Plagiarism certificate (Declaration form via Google form + send proposal to their mail)"
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success": return "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20";
      case "warning": return "bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20";
      default: return "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success": return <CheckCircle className="w-4 h-4" />;
      case "warning": return <AlertCircle className="w-4 h-4" />;
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

  const handleViewImage = () => {
    setShowCoverImage(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            GJ STRAUS Research Grant
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Complete workflow and documentation for GJ STRAUS research grant applications.
            40 proposals selected annually (10 for innovation projects).
          </p>
          <Badge variant="outline" className="text-lg px-4 py-2">
            <Award className="w-4 h-4 mr-2" />
            Research Grant Program
          </Badge>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Button
            variant={activeTab === "workflow" ? "default" : "outline"}
            onClick={() => setActiveTab("workflow")}
            className="flex items-center gap-2"
          >
            <CheckCircle className="w-4 h-4" />
            Workflow
          </Button>
          <Button
            variant={activeTab === "documents" ? "default" : "outline"}
            onClick={() => setActiveTab("documents")}
            className="flex items-center gap-2"
          >
            <FileDown className="w-4 h-4" />
            Documents
          </Button>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          {activeTab === "workflow" && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-6 h-6" />
                    20-Step GJ STRAUS Workflow
                  </CardTitle>
                  <CardDescription>
                    Complete step-by-step process from notification to stipend issuance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {workflowSteps.map((step) => (
                      <div key={step.id} className="flex items-start gap-4 p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                            {step.id}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                            <div className="flex-1">
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
                                  📅 {step.timeline}
                                </p>
                              )}
                            </div>
                            <Badge className={`${getStatusColor(step.status)} flex-shrink-0 flex items-center gap-1`}>
                              {getStatusIcon(step.status)}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Key Timeline */}
              <Card className="border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-900/10">
                <CardHeader>
                  <CardTitle className="text-amber-900 dark:text-amber-100">Key Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium">Notification & Submission</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Nov-Dec to End of Jan</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium">Results</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">March</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium">Data Collection</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Until July End</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium">Final Report</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Before August End</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Proposal Structure */}
              <Card className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-900/10">
                <CardHeader>
                  <CardTitle className="text-blue-900 dark:text-blue-100 flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Proposal Structure
                  </CardTitle>
                  <CardDescription>Three-part proposal submission format</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {proposalStructure.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">
                          {item.part.charAt(5)}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">{item.part}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Meeting Requirements */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* UGRMC Meeting */}
                <Card className="border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-900/10">
                  <CardHeader>
                    <CardTitle className="text-purple-900 dark:text-purple-100 flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      UGRMC Meeting
                    </CardTitle>
                    <CardDescription>Presentation requirements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {ugrmcMeetingRequirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* IEC Meeting - Soft Copy */}
                <Card className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-900/10">
                  <CardHeader>
                    <CardTitle className="text-indigo-900 dark:text-indigo-100 flex items-center gap-2">
                      <FileDown className="w-5 h-5" />
                      IEC Soft Copy
                    </CardTitle>
                    <CardDescription>Digital submission requirements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {iecSoftCopyRequirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* IEC Hard Copy */}
              <Card className="border-cyan-200 dark:border-cyan-800 bg-cyan-50/50 dark:bg-cyan-900/10">
                <CardHeader>
                  <CardTitle className="text-cyan-900 dark:text-cyan-100 flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    IEC Hard Copy Requirements
                  </CardTitle>
                  <CardDescription>Physical documents to be submitted</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {iecHardCopyRequirements.map((req, index) => (
                      <div key={index} className="flex items-start gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{req}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "documents" && (
            <div className="space-y-6">
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
                        <Alert className="mt-3">
                          <AlertCircle className="h-4 w-4" />
                          <AlertDescription>{section.note}</AlertDescription>
                        </Alert>
                      )}
                    </CardHeader>
                    <CardContent>
                      {section.redirects ? (
                        <div className="grid sm:grid-cols-2 gap-3">
                          {section.redirects.map((redirect, index) => (
                            <Button
                              key={index}
                              variant="outline"
                              className="h-auto p-4 justify-between"
                              onClick={() => setLocation(redirect.path)}
                            >
                              <div className="flex items-center gap-3">
                                <Users className="w-5 h-5" />
                                <span className="font-medium">{redirect.name}</span>
                              </div>
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          ))}
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {section.documents?.map((doc, index) => (
                            <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                              <div className="flex-1 min-w-0">
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
                              {doc.category === "Cover Page" ? (
                                <Button
                                  size="sm"
                                  onClick={handleViewImage}
                                  className="flex-shrink-0"
                                  variant="outline"
                                >
                                  <FileText className="w-4 h-4 mr-2" />
                                  View
                                </Button>
                              ) : (
                                <Button
                                  size="sm"
                                  onClick={() => handleDownload(doc.fileName)}
                                  className="flex-shrink-0"
                                >
                                  <Download className="w-4 h-4 mr-2" />
                                  Download
                                </Button>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}

              {/* Additional Requirements */}
              <Card className="border-orange-200 dark:border-orange-800 bg-orange-50/50 dark:bg-orange-900/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-900 dark:text-orange-100">
                    <AlertCircle className="w-6 h-6" />
                    Additional Requirements for Final Submission
                  </CardTitle>
                  <CardDescription>
                    Must be submitted with UGRMC final report
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {additionalRequirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{req}</span>
                      </li>
                    ))}
                  </ul>
                  <Alert className="mt-4 bg-orange-100 dark:bg-orange-900/20 border-orange-300 dark:border-orange-700">
                    <AlertCircle className="h-4 w-4 text-orange-600" />
                    <AlertDescription className="text-orange-900 dark:text-orange-100">
                      <strong>Important Notes:</strong>
                      <ul className="mt-2 space-y-1 list-disc list-inside text-sm">
                        <li>Project completion certificate has a Word document which you have to fill and submit</li>
                        <li>Plagiarism certificate: Complete Declaration form via Google form and send your proposal to their mail</li>
                      </ul>
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              {/* Document Submission Note */}
              <Alert>
                <FileText className="h-4 w-4" />
                <AlertDescription>
                  <strong>Document Submission:</strong> All documents must be submitted via email unless specified otherwise. 
                  Ensure all files are properly named and organized before submission.
                </AlertDescription>
              </Alert>
            </div>
          )}
        </div>

        {/* Cover Image Dialog */}
        <Dialog open={showCoverImage} onOpenChange={setShowCoverImage}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>GJ STRAUS Submission Cover Page</DialogTitle>
              <DialogDescription>
                Use this cover page for your proposal submission
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <img 
                src="/documents/gjstraus/gj-st-cover.png" 
                alt="GJ STRAUS Cover Page" 
                className="w-full h-auto border rounded-lg"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default GjStrausDocuments;
