import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { FileText, Download, Shield, ArrowRight, CheckCircle, Mail, FileCheck, Users, Calendar, ExternalLink, ChevronRight, AlertTriangle } from "lucide-react";

const IecPage = () => {
  const [activeStudyType, setActiveStudyType] = useState<string | null>(null);
  const [activePathway, setActivePathway] = useState<string | null>(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const studyTypes = [
    {
      id: "observational",
      title: "Observational Studies",
      description: "Studies involving contact with participants but no intervention",
      color: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      darkBgGradient: "dark:from-blue-900/20 dark:to-indigo-900/20",
    },
    {
      id: "interventional",
      title: "Interventional Studies",
      description: "Studies involving intervention or experimental procedures",
      color: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
      darkBgGradient: "dark:from-purple-900/20 dark:to-pink-900/20",
    }
  ];

  const observationalPathways = [
    {
      id: "waiver",
      title: "Waiver of Consent",
      description: "No direct contact with study population",
      icon: FileCheck,
      color: "text-green-600"
    },
    {
      id: "approval",
      title: "IEC Approval Certification",
      description: "Contact with participants, no intervention",
      icon: CheckCircle,
      color: "text-blue-600"
    },
    {
      id: "amendment",
      title: "Change in Protocol",
      description: "Modify proposal after IEC certificate",
      icon: AlertTriangle,
      color: "text-orange-600"
    }
  ];

  const waiverSteps = [
    { title: "Prepare Documents", description: "Waiver form, Proposal, Covering Letter" },
    { title: "Email Submission", description: "Send to ethics.observational@gmail.com" },
    { title: "Hard Copy Submission", description: "Submit to IEC Section, 1st Floor, Administrative Block" },
    { title: "Email Communication", description: "Modifications communicated via email (no meeting attendance)" },
    { title: "Certificate Issued", description: "Waiver of Consent Certificate issued after addressing changes" },
  ];

  const approvalSteps = [
    { title: "Prepare Documents", description: "Signed Declaration, Consent Form, Proposal, Covering Letter, UGRMC Certificate, Data Collection Proforma, CVs" },
    { title: "Email Submission", description: "Send to ethics.observational@gmail.com" },
    { title: "Hard Copy Submission", description: "Submit to IEC Section, 1st Floor, Administrative Block" },
    { title: "WhatsApp Group", description: "Added to IEC group for meeting details (Conference Room, 1st Floor, JIPMER Library)" },
    { title: "Present at Meeting", description: "PI presents project briefly, IEC discusses ethical considerations" },
    { title: "Receive Minutes", description: "Changes notified through meeting minutes" },
    { title: "Resubmit with Changes", description: "Submit softcopy with covering letter (no deadline)" },
    { title: "Collect Certificate", description: "From Mr. Yuvaraj, Project Manager, Research Division (2 weeks post-submission)" },
  ];

  const interventionalSteps = [
    { title: "Prepare Documents", description: "Complete proposal with all signatures, consent forms, UGRMC certificate, GCP certificates, CVs, data collection proforma" },
    { title: "Email Submission", description: "Send to iechumanstudies@jipmer.edu.in, ja5415@jipmer.ac.in, agilan.mahes@gmail.com" },
    { title: "Hard Copy Submission", description: "Submit to IEC Section, 1st Floor, Administrative Block" },
    { title: "WhatsApp Group", description: "Added to IEC group for meeting details (Conference Room, 1st Floor, JIPMER Library)" },
    { title: "Detailed Presentation", description: "PI presents project in detail, rigorous questioning by IEC" },
    { title: "Receive Minutes", description: "Modifications relayed through meeting minutes" },
    { title: "Resubmit with Hard Copy", description: "Make changes and resubmit with hard copy" },
    { title: "Certificate Issued", description: "IEC Approval Certificate for Interventional Studies issued" },
    { title: "Begin Data Collection", description: "Start data collection as per approved protocol" },
  ];

  const observationalDocs = {
    waiver: [
      { title: "Waiver of Consent Form", fileName: "Waiver-of-Consent.docx", reference: "Waiver-of-Consent-Reference.pdf" },
      { title: "Covering Letter", fileName: "Covering-Letter-IEC.docx", reference: "Covering-Letter-IEC-Reference.pdf" },
    ],
    approval: [
      { title: "Covering Letter", fileName: "Covering-Letter-IEC.docx", reference: "Covering-Letter-IEC-Reference.pdf" },
      { title: "Model Consent Form (English)", fileName: "Model-Consent-Form-English.docx" },
      { title: "Model Consent Form (Tamil)", fileName: "Model-Consent-Form-Tamil.docx" },
      { title: "Sample Approved Consent Forms", fileName: "Sample-Approved-Consent-Forms.pdf" },
      { title: "Declaration Form", fileName: "Declaration-IEC.docx" },
      { title: "Format for CV", fileName: "Format-for-CV.docx" },
      { title: "Data Collection Proforma Reference", fileName: "Case-Study-Proforma-Cardiology.pdf" },
    ],
    amendment: [
      { title: "Amendment Form", fileName: "Amendments.docx" },
    ]
  };

  const interventionalDocs = [
    { title: "GCP Certificate Registration", fileName: "GCP-Certificate-Registration-Course.docx" },
    { title: "Covering Letter", fileName: "Covering-Letter-IEC.docx", reference: "Covering-Letter-IEC-Reference.pdf" },
    { title: "Model Consent Form (English)", fileName: "Model-Consent-Form-English.docx" },
    { title: "Model Consent Form (Tamil)", fileName: "Model-Consent-Form-Tamil.docx" },
    { title: "Sample Approved Consent Forms", fileName: "Sample-Approved-Consent-Forms.pdf" },
    { title: "Declaration Form", fileName: "Declaration-IEC.docx" },
    { title: "Format for CV", fileName: "Format-for-CV.docx" },
    { title: "Data Collection Proforma Reference", fileName: "Case-Study-Proforma-Cardiology.pdf" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <Badge variant="outline" className="mb-4 text-sm px-3 py-1">
            <Shield className="w-3 h-3 mr-2" />
            Ethics Review
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            IEC
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mb-4 font-medium">
            Institutional Ethics Committee
          </p>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
            Reviews research proposals to ensure compliance with medical ethical principles. 
            Approval from IEC is mandatory before initiating any research activities.
          </p>
        </div>

        {/* Meeting Info Alert */}
        <Alert className="max-w-4xl mx-auto mb-8 border-blue-300 bg-blue-50 dark:bg-blue-900/20">
          <Calendar className="w-4 h-4" />
          <AlertDescription className="text-sm">
            <strong>Meeting Schedule:</strong> IEC meetings are generally conducted once a month (typically first week). 
            Applications close in the last week of the preceding month. Check <a href="https://www.jipmer.edu.in" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-700">JIPMER website</a> for latest circulars.
          </AlertDescription>
        </Alert>

        {/* Study Type Selection */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Select Study Type
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {studyTypes.map((type) => (
              <Card 
                key={type.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl border-2 bg-gradient-to-br ${type.bgGradient} ${type.darkBgGradient} ${
                  activeStudyType === type.id ? 'ring-4 ring-blue-500 ring-opacity-50' : ''
                }`}
                onClick={() => {
                  setActiveStudyType(activeStudyType === type.id ? null : type.id);
                  setActivePathway(null);
                }}
              >
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl flex items-center justify-between">
                    <span>{type.title}</span>
                    <ChevronRight className={`w-5 h-5 transition-transform ${activeStudyType === type.id ? 'rotate-90' : ''}`} />
                  </CardTitle>
                  <CardDescription className="text-sm">{type.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Observational Studies Pathways */}
        {activeStudyType === "observational" && (
          <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card className="border-2 border-blue-200 dark:border-blue-800 max-w-6xl mx-auto">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
                <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
                  <FileCheck className="w-6 h-6 text-blue-600" />
                  Observational Studies - Select Pathway
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  {observationalPathways.map((pathway) => {
                    const Icon = pathway.icon;
                    return (
                      <Card
                        key={pathway.id}
                        className={`cursor-pointer transition-all hover:shadow-lg border-2 ${
                          activePathway === pathway.id ? 'ring-4 ring-blue-500 ring-opacity-50 border-blue-400' : ''
                        }`}
                        onClick={() => setActivePathway(activePathway === pathway.id ? null : pathway.id)}
                      >
                        <CardHeader className="text-center">
                          <Icon className={`w-8 h-8 mx-auto mb-2 ${pathway.color}`} />
                          <CardTitle className="text-base">{pathway.title}</CardTitle>
                          <CardDescription className="text-xs">{pathway.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    );
                  })}
                </div>

                {/* Waiver Pathway */}
                {activePathway === "waiver" && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <Card className="border-2 border-green-200 bg-green-50 dark:bg-green-900/20">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <FileCheck className="w-5 h-5 text-green-600" />
                          Request for Waiver of Consent
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4 mb-6">
                          {waiverSteps.map((step, index) => (
                            <div key={index} className="flex gap-4">
                              <div className="flex flex-col items-center">
                                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                                  {index + 1}
                                </div>
                                {index < waiverSteps.length - 1 && (
                                  <div className="w-0.5 h-full bg-green-300 dark:bg-green-700 my-1"></div>
                                )}
                              </div>
                              <div className="flex-1 pb-6">
                                <h4 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white mb-1">
                                  {step.title}
                                </h4>
                                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                                  {step.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>

                        <Alert className="mb-6 border-green-300 bg-green-100 dark:bg-green-900/30">
                          <Mail className="w-4 h-4" />
                          <AlertDescription className="text-sm">
                            <strong>Email:</strong> ethics.observational@gmail.com
                          </AlertDescription>
                        </Alert>

                        <div className="grid sm:grid-cols-2 gap-4">
                          {observationalDocs.waiver.map((doc, index) => (
                            <Card key={index} className="border-2">
                              <CardHeader className="pb-3">
                                <CardTitle className="text-sm flex items-center gap-2">
                                  <FileText className="w-4 h-4 text-blue-600" />
                                  {doc.title}
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="space-y-2">
                                <a href={`/documents/IEC/${doc.fileName}`} download className="block">
                                  <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                                    <Download className="w-3 h-3 mr-2" />
                                    Download
                                  </Button>
                                </a>
                                {doc.reference && (
                                  <a href={`/documents/IEC/${doc.reference}`} download className="block">
                                    <Button size="sm" variant="outline" className="w-full">
                                      Reference
                                    </Button>
                                  </a>
                                )}
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {/* Approval Pathway */}
                {activePathway === "approval" && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <Card className="border-2 border-blue-200 bg-blue-50 dark:bg-blue-900/20">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-blue-600" />
                          Request for IEC Approval Certification
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4 mb-6">
                          {approvalSteps.map((step, index) => (
                            <div key={index} className="flex gap-4">
                              <div className="flex flex-col items-center">
                                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                                  {index + 1}
                                </div>
                                {index < approvalSteps.length - 1 && (
                                  <div className="w-0.5 h-full bg-blue-300 dark:bg-blue-700 my-1"></div>
                                )}
                              </div>
                              <div className="flex-1 pb-6">
                                <h4 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white mb-1">
                                  {step.title}
                                </h4>
                                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                                  {step.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>

                        <Alert className="mb-6 border-blue-300 bg-blue-100 dark:bg-blue-900/30">
                          <Mail className="w-4 h-4" />
                          <AlertDescription className="text-sm">
                            <strong>Email:</strong> ethics.observational@gmail.com
                          </AlertDescription>
                        </Alert>

                        <div className="mb-6">
                          <h3 className="font-bold text-lg mb-4">Documents Required</h3>
                          <div className="grid grid-cols-1 gap-4 mb-4">
                            <Alert className="border-blue-300">
                              <FileText className="w-4 h-4" />
                              <AlertDescription className="text-sm">
                                <strong>Soft Copy (PDF + Word):</strong> Signed Declaration Form, Consent/Waiver of Consent Form, Proposal, Covering Letter
                              </AlertDescription>
                            </Alert>
                            <Alert className="border-purple-300">
                              <FileText className="w-4 h-4" />
                              <AlertDescription className="text-sm">
                                <strong>Hard Copy:</strong> Covering Letter, Consent/Waiver Forms, Research Proposal with Signed Declaration, UGRMC Certificate, Data Collection Proformas, CVs (PI, Guide, Co-Guides)
                              </AlertDescription>
                            </Alert>
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {observationalDocs.approval.map((doc, index) => (
                            <Card key={index} className="border-2">
                              <CardHeader className="pb-3">
                                <CardTitle className="text-xs flex items-center gap-2">
                                  <FileText className="w-4 h-4 text-blue-600" />
                                  {doc.title}
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="space-y-2">
                                <a href={`/documents/IEC/${doc.fileName}`} download className="block">
                                  <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs">
                                    <Download className="w-3 h-3 mr-2" />
                                    Download
                                  </Button>
                                </a>
                                {doc.reference && (
                                  <a href={`/documents/IEC/${doc.reference}`} download className="block">
                                    <Button size="sm" variant="outline" className="w-full text-xs">
                                      Reference
                                    </Button>
                                  </a>
                                )}
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {/* Amendment Pathway */}
                {activePathway === "amendment" && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <Card className="border-2 border-orange-200 bg-orange-50 dark:bg-orange-900/20">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <AlertTriangle className="w-5 h-5 text-orange-600" />
                          Request for Change in Protocol
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-6">
                          If you wish to make changes to your proposal after acquisition of IEC certificate, 
                          you can apply for Amendment of your protocol and request for a new IEC certificate without a physical meeting.
                        </p>

                        <div className="grid sm:grid-cols-1 gap-4">
                          {observationalDocs.amendment.map((doc, index) => (
                            <Card key={index} className="border-2">
                              <CardHeader className="pb-3">
                                <CardTitle className="text-sm flex items-center gap-2">
                                  <FileText className="w-4 h-4 text-orange-600" />
                                  {doc.title}
                                </CardTitle>
                              </CardHeader>
                              <CardContent>
                                <a href={`/documents/IEC/${doc.fileName}`} download className="block">
                                  <Button size="sm" className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                                    <Download className="w-3 h-3 mr-2" />
                                    Download
                                  </Button>
                                </a>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Interventional Studies */}
        {activeStudyType === "interventional" && (
          <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card className="border-2 border-purple-200 dark:border-purple-800 max-w-6xl mx-auto">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
                  <FileCheck className="w-6 h-6 text-purple-600" />
                  Interventional Studies Workflow
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4 mb-6">
                  {interventionalSteps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        {index < interventionalSteps.length - 1 && (
                          <div className="w-0.5 h-full bg-purple-300 dark:bg-purple-700 my-1"></div>
                        )}
                      </div>
                      <div className="flex-1 pb-6">
                        <h4 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white mb-1">
                          {step.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Alert className="mb-6 border-purple-300 bg-purple-100 dark:bg-purple-900/30">
                  <Mail className="w-4 h-4" />
                  <AlertDescription className="text-sm">
                    <strong>Email:</strong> iechumanstudies@jipmer.edu.in, ja5415@jipmer.ac.in, agilan.mahes@gmail.com
                    <br />
                    <em className="text-xs">(Subject to periodic updates - refer to latest IEC submission form)</em>
                  </AlertDescription>
                </Alert>

                <div className="mb-6">
                  <h3 className="font-bold text-lg mb-4">Documents Required</h3>
                  <div className="grid grid-cols-1 gap-4 mb-4">
                    <Alert className="border-purple-300">
                      <FileText className="w-4 h-4" />
                      <AlertDescription className="text-sm">
                        <strong>Soft Copy:</strong> One PDF (complete scanned copy with signatures) + One Word file (editable without signatures)
                      </AlertDescription>
                    </Alert>
                    <Alert className="border-pink-300">
                      <FileText className="w-4 h-4" />
                      <AlertDescription className="text-sm">
                        <strong>Hard Copy:</strong> Covering Letter (forwarded by Guide & HoD), UGRMC Certificate, GCP Certificates (student & guide), 
                        Original Signed Research Proposal, Signed Declaration Form, Informed Consent Documents, Data Collection Proformas, CVs (PI, Guide, Co-Guides)
                      </AlertDescription>
                    </Alert>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {interventionalDocs.map((doc, index) => (
                    <Card key={index} className="border-2">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-xs flex items-center gap-2">
                          <FileText className="w-4 h-4 text-purple-600" />
                          {doc.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <a href={`/documents/IEC/${doc.fileName}`} download className="block">
                          <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700 text-white text-xs">
                            <Download className="w-3 h-3 mr-2" />
                            Download
                          </Button>
                        </a>
                        {doc.reference && (
                          <a href={`/documents/IEC/${doc.reference}`} download className="block">
                            <Button size="sm" variant="outline" className="w-full text-xs">
                              Reference
                            </Button>
                          </a>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default IecPage;
