import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { FileText, Download, Users, ArrowRight, CheckCircle, Mail, FileCheck, Presentation, ChevronRight } from "lucide-react";

const UgrmcPage = () => {
  const [activeOpportunity, setActiveOpportunity] = useState<string | null>(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const opportunities = [
    {
      id: "gjstraus",
      title: "GJ-STRAUS",
      description: "GJ STRAUS undergraduate research grant program",
      color: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
      darkBgGradient: "dark:from-blue-900/20 dark:to-cyan-900/20",
    },
    {
      id: "icmr",
      title: "ICMR/Other Grants",
      description: "ICMR-STS and other external funding opportunities",
      color: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
      darkBgGradient: "dark:from-green-900/20 dark:to-emerald-900/20",
    },
    {
      id: "independent",
      title: "Independent Projects",
      description: "Self-initiated research without external funding",
      color: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
      darkBgGradient: "dark:from-purple-900/20 dark:to-pink-900/20",
    }
  ];

  const gjstrausSteps = [
    { title: "Selection of Project for GJ STRAUS", description: "" },
    { title: "Release of UGRMC Guidelines", description: "" },
    { title: "Presentation Preparation", description: "All students present their proposal via PPT" },
    { title: "Guides/Co-Guides Attendance", description: "Guides/Co-Guides must be present" },
    { title: "Document Upload", description: "Upload required documents as per UGRMC document and send to ugrmcjipmer@gmail.com" },
    { title: "Presentation Meeting", description: "Meeting scheduled at Mini Auditorium, 4th Floor, JIPMER Academic Centre (JAC)" },
    { title: "Panel Review", description: "UGRMC panel reviews feasibility, utility, and provides feedback" },
    { title: "UGRMC Minutes", description: "Minutes issued with recommended changes" },
    { title: "Resubmission", description: "Submit updated proposal with covering letter outlining changes" },
    { title: "Certificate Issued", description: "UGRMC certificate issued → Eligible for IEC submission" },
  ];

  const icmrSteps = [
    { title: "Submit Required Documents", description: "All documents as per UGRMC guidelines + Proof of ICMR-STS selection" },
    { title: "Email Submission", description: "Send to ugrmcjipmer@gmail.com" },
    { title: "Certificate Sanctioned", description: "Certificate issued directly without meeting" },
    { title: "Apply for IEC", description: "Proceed with IEC review process" },
  ];

  const independentSteps = [
    { title: "Email Required Documents", description: "As per UGRMC guidelines to ugrmcjipmer@gmail.com" },
    { title: "Feedback via Email", description: "Modifications suggested through email" },
    { title: "Resubmit with Corrections", description: "Submit corrected version" },
    { title: "Certificate Issued", description: "Certificate issued without in-person meeting" },
    { title: "Apply for IEC", description: "Proceed with IEC approval" },
  ];

  const documents = [
    {
      title: "Covering Letter Sample",
      fileName: "Covering-Letter-Sample.pdf",
      description: "Sample covering letter with signatures from Guide and HOD"
    },
    {
      title: "GJ STRAUS Proposal Format",
      fileName: "UGRMC-GJ-STRAUS-Protocol-Proforma-2024.docx",
      description: "Official protocol proforma for proposal submission"
    },
    {
      title: "Presentation Template",
      fileName: "GJ-STRAUS-Presentation-Template.pptx",
      description: "PPT template (5 min, 8 slides per project)"
    },
    {
      title: "UGRMC Minutes (2024)",
      fileName: "UGRMC-Minutes-GJSTRAUS-2024.pdf",
      description: "Sample minutes with recommended changes"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <Badge variant="outline" className="mb-4 text-sm px-3 py-1">
            <Users className="w-3 h-3 mr-2" />
            Research Monitoring
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            UGRMC
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mb-4 font-medium">
            Undergraduate Research Monitoring Committee
          </p>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
            The primary body responsible for reviewing research protocols submitted by Undergraduate Principal Investigators (PIs). 
            Upon evaluation, UGRMC issues a certificate of approval, authorizing the proposed research.
          </p>
        </div>

        {/* Visual Blocks - Research Opportunities */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Research Opportunities
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {opportunities.map((opp) => (
              <Card 
                key={opp.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl border-2 bg-gradient-to-br ${opp.bgGradient} ${opp.darkBgGradient} ${
                  activeOpportunity === opp.id ? 'ring-4 ring-blue-500 ring-opacity-50' : ''
                }`}
                onClick={() => setActiveOpportunity(activeOpportunity === opp.id ? null : opp.id)}
              >
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl flex items-center justify-between">
                    <span>{opp.title}</span>
                    <ChevronRight className={`w-5 h-5 transition-transform ${activeOpportunity === opp.id ? 'rotate-90' : ''}`} />
                  </CardTitle>
                  <CardDescription className="text-sm">{opp.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* GJ-STRAUS Flow */}
        {activeOpportunity === "gjstraus" && (
          <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card className="border-2 border-blue-200 dark:border-blue-800">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
                <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
                  <FileCheck className="w-6 h-6 text-blue-600" />
                  GJ-STRAUS Workflow
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <Alert className="mb-6 border-blue-300 bg-blue-50 dark:bg-blue-900/20">
                  <Presentation className="w-4 h-4" />
                  <AlertDescription className="text-sm">
                    <strong>Presentation Requirements:</strong> 5 minutes per project, 8 slides maximum. Use methodology and contents from your proposal.
                  </AlertDescription>
                </Alert>

                {/* Timeline Steps */}
                <div className="space-y-4 mb-8">
                  {gjstrausSteps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        {index < gjstrausSteps.length - 1 && (
                          <div className="w-0.5 h-full bg-blue-300 dark:bg-blue-700 my-1"></div>
                        )}
                      </div>
                      <div className="flex-1 pb-8">
                        <h4 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white mb-1">
                          {step.title}
                        </h4>
                        {step.description && (
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                            {step.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <Alert className="border-blue-300 bg-blue-50 dark:bg-blue-900/20">
                  <Mail className="w-4 h-4" />
                  <AlertDescription className="text-sm">
                    <strong>Contact:</strong> ugrmcjipmer@gmail.com
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        )}

        {/* ICMR Flow */}
        {activeOpportunity === "icmr" && (
          <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card className="border-2 border-green-200 dark:border-green-800">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
                  <FileCheck className="w-6 h-6 text-green-600" />
                  ICMR/Other Grants Workflow
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  {/* Selected */}
                  <div className="border-2 border-green-300 rounded-lg p-4 bg-green-50 dark:bg-green-900/20">
                    <h3 className="font-bold text-lg mb-4 text-green-700 dark:text-green-300">
                      ✓ Selected for ICMR-STS
                    </h3>
                    <div className="space-y-4">
                      {icmrSteps.map((step, index) => (
                        <div key={index} className="flex gap-3">
                          <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm text-gray-900 dark:text-white">
                              {step.title}
                            </h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Alert className="mt-4 border-green-400 bg-green-100 dark:bg-green-900/30">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <AlertDescription className="text-xs">
                        Certificate issued directly without meeting. Must include proof of ICMR-STS selection (highlighted in official result).
                      </AlertDescription>
                    </Alert>
                  </div>

                  {/* Not Selected */}
                  <div className="border-2 border-purple-300 rounded-lg p-4 bg-purple-50 dark:bg-purple-900/20">
                    <h3 className="font-bold text-lg mb-4 text-purple-700 dark:text-purple-300">
                      ✗ Not Selected / Continue Independently
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                      If not selected but wish to continue, follow the Independent Projects process.
                    </p>
                    <Button 
                      onClick={() => setActiveOpportunity("independent")}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:shadow-lg"
                    >
                      View Independent Process
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>

                <Alert className="border-green-300 bg-green-50 dark:bg-green-900/20">
                  <Mail className="w-4 h-4" />
                  <AlertDescription className="text-sm">
                    <strong>Contact:</strong> ugrmcjipmer@gmail.com
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Independent Flow */}
        {activeOpportunity === "independent" && (
          <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card className="border-2 border-purple-200 dark:border-purple-800">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
                  <FileCheck className="w-6 h-6 text-purple-600" />
                  Independent Projects Workflow
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4 mb-8">
                  {independentSteps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        {index < independentSteps.length - 1 && (
                          <div className="w-0.5 h-full bg-purple-300 dark:bg-purple-700 my-1"></div>
                        )}
                      </div>
                      <div className="flex-1 pb-8">
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

                <Alert className="border-purple-300 bg-purple-50 dark:bg-purple-900/20">
                  <Mail className="w-4 h-4" />
                  <AlertDescription className="text-sm">
                    <strong>Contact:</strong> ugrmcjipmer@gmail.com
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Documents Required */}
        <Card className="max-w-6xl mx-auto border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
              <FileText className="w-6 h-6" />
              Documents Required for Submission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {documents.map((doc, index) => (
                <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                      <FileText className="w-5 h-5 text-blue-600" />
                      {doc.title}
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm">
                      {doc.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a 
                      href={`/documents/UGRMC-IEC/UGRMC/${doc.fileName}`}
                      download
                      className="inline-block w-full"
                    >
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Covering Letter Sample */}
            <Card className="mt-6 border-2 border-blue-200 bg-blue-50 dark:bg-blue-900/20">
              <CardHeader>
                <CardTitle className="text-lg">Covering Letter Sample Format</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-4">
                <div>
                  <p className="font-semibold mb-2">From:</p>
                  <p>Aarav Mehta<br/>
                  112211078<br/>
                  MBBS Batch of 2022<br/>
                  JIPMER, Puducherry</p>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">Date: 15/1/2024</p>
                </div>

                <div>
                  <p className="font-semibold mb-2">To:</p>
                  <p>Dr. Nanda Kishore Maroju<br/>
                  Member Secretary<br/>
                  UGRMC<br/>
                  JIPMER, Puducherry - 605006</p>
                </div>

                <div>
                  <p className="font-semibold mb-2">Subject: Submission of Independent Research Project Proposal</p>
                </div>

                <div>
                  <p className="mb-4">Respected Sir,</p>
                  <p className="mb-4">
                    I am writing to submit my proposal for consideration as an independent research project under the UGRMC initiative. 
                    I have attached my project titled, "Assessment of Antibiotic Prescription Practices in Pediatric Outpatient Departments: 
                    A Cross-Sectional Study in a Tertiary Care Centre in South India."
                  </p>
                  <p className="mb-4">With regards,<br/>
                  Thanking you,<br/>
                  Aarav Mehta<br/>
                  MBBS 2022 Batch</p>
                </div>

                <div className="border-t-2 border-gray-300 pt-4">
                  <div className="grid grid-cols-3 gap-4 text-center text-xs sm:text-sm">
                    <div>
                      <p className="font-semibold">Sign of Candidate</p>
                      <div className="h-12 border-b border-gray-400 mt-2"></div>
                    </div>
                    <div>
                      <p className="font-semibold">Sign of Guide</p>
                      <div className="h-12 border-b border-gray-400 mt-2"></div>
                    </div>
                    <div>
                      <p className="font-semibold">Sign of HOD</p>
                      <div className="h-12 border-b border-gray-400 mt-2"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UgrmcPage;

