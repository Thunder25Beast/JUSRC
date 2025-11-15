import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Download, 
  FileText, 
  Shield,
  AlertCircle,
  FolderOpen
} from "lucide-react";

const IecDocuments = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const sections = [
    {
      id: "waiver",
      title: "Waiver of Consent",
      icon: FileText,
      description: "Documents for studies not requiring patient consent",
      documents: [
        {
          title: "Waiver of Consent Form",
          description: "Template for waiver of consent application",
          fileName: "Waiver-of-Consent.docx",
          fileSize: "45 KB",
          category: "Template"
        },
        {
          title: "Waiver of Consent Reference",
          description: "Sample filled waiver of consent form",
          fileName: "Waiver-of-Consent-Reference.pdf",
          fileSize: "280 KB",
          category: "Reference"
        },
        {
          title: "Covering Letter Template",
          description: "IEC covering letter format",
          fileName: "Covering-Letter-IEC-Template.docx",
          fileSize: "35 KB",
          category: "Template"
        },
        {
          title: "Covering Letter Sample",
          description: "Example of completed covering letter",
          fileName: "Covering-Letter-IEC-Sample.pdf",
          fileSize: "120 KB",
          category: "Reference"
        }
      ]
    },
    {
      id: "observational",
      title: "Observational Studies",
      icon: FolderOpen,
      description: "Required documents for observational research",
      documents: [
        {
          title: "Covering Letter Template",
          description: "IEC covering letter format",
          fileName: "Covering-Letter-IEC-Template.docx",
          fileSize: "35 KB",
          category: "Template"
        },
        {
          title: "Covering Letter Sample",
          description: "Example of completed covering letter",
          fileName: "Covering-Letter-IEC-Sample.pdf",
          fileSize: "120 KB",
          category: "Reference"
        },
        {
          title: "Model Consent Form (English)",
          description: "Standard consent form template in English",
          fileName: "Model-Consent-Form-English.docx",
          fileSize: "55 KB",
          category: "Template"
        },
        {
          title: "Model Consent Form (Tamil)",
          description: "Standard consent form template in Tamil",
          fileName: "Model-Consent-Form-Tamil.docx",
          fileSize: "52 KB",
          category: "Template"
        },
        {
          title: "Sample Approved Consent Forms",
          description: "Examples of approved consent forms",
          fileName: "Sample-Approved-Consent-Forms.pdf",
          fileSize: "340 KB",
          category: "Reference"
        },
        {
          title: "Data Collection Proforma Reference",
          description: "Sample case study proforma",
          fileName: "Case-Study-Proforma-Cardiology.pdf",
          fileSize: "180 KB",
          category: "Reference"
        },
        {
          title: "Declaration Form",
          description: "IEC declaration document",
          fileName: "Declaration-IEC.docx",
          fileSize: "40 KB",
          category: "Template"
        },
        {
          title: "Format for CV",
          description: "Standard CV format for IEC submission",
          fileName: "Format-for-CV.docx",
          fileSize: "38 KB",
          category: "Template"
        }
      ],
      note: "UGRMC Certificate and Data Collection Proforma (custom to your project) need to be prepared separately"
    },
    {
      id: "interventional",
      title: "Interventional Studies",
      icon: Shield,
      description: "Required documents for interventional research",
      documents: [
        {
          title: "GCP Certificate Registration & Course",
          description: "Good Clinical Practice certification guide",
          fileName: "GCP-Certificate-Registration-Course.docx",
          fileSize: "65 KB",
          category: "Guide"
        },
        {
          title: "Covering Letter Template",
          description: "IEC covering letter format",
          fileName: "Covering-Letter-IEC-Template.docx",
          fileSize: "35 KB",
          category: "Template"
        },
        {
          title: "Covering Letter Sample",
          description: "Example of completed covering letter",
          fileName: "Covering-Letter-IEC-Sample.pdf",
          fileSize: "120 KB",
          category: "Reference"
        },
        {
          title: "Model Consent Form (English)",
          description: "Standard consent form template in English",
          fileName: "Model-Consent-Form-English.docx",
          fileSize: "55 KB",
          category: "Template"
        },
        {
          title: "Model Consent Form (Tamil)",
          description: "Standard consent form template in Tamil",
          fileName: "Model-Consent-Form-Tamil.docx",
          fileSize: "52 KB",
          category: "Template"
        },
        {
          title: "Sample Approved Consent Forms",
          description: "Examples of approved consent forms",
          fileName: "Sample-Approved-Consent-Forms.pdf",
          fileSize: "340 KB",
          category: "Reference"
        },
        {
          title: "Data Collection Proforma Reference",
          description: "Sample case study proforma",
          fileName: "Case-Study-Proforma-Cardiology.pdf",
          fileSize: "180 KB",
          category: "Reference"
        },
        {
          title: "Declaration Form",
          description: "IEC declaration document",
          fileName: "Declaration-IEC.docx",
          fileSize: "40 KB",
          category: "Template"
        },
        {
          title: "Format for CV",
          description: "Standard CV format for IEC submission",
          fileName: "Format-for-CV.docx",
          fileSize: "38 KB",
          category: "Template"
        }
      ],
      note: "UGRMC Certificate and Data Collection Proforma (custom to your project) need to be prepared separately"
    },
    {
      id: "amendment",
      title: "Amendments",
      icon: FileText,
      description: "Documents for study amendments and modifications",
      documents: [
        {
          title: "Amendments Form",
          description: "Template for submitting study amendments to IEC",
          fileName: "Amendments.docx",
          fileSize: "42 KB",
          category: "Template"
        }
      ]
    }
  ];

  const handleDownload = (fileName: string) => {
    const link = document.createElement('a');
    link.href = `/documents/IEC/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            IEC Documents
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Institutional Ethics Committee forms, templates, and approval documentation organized by study type.
          </p>
          <Badge variant="outline" className="text-lg px-4 py-2">
            <Shield className="w-4 h-4 mr-2" />
            Ethics Committee
          </Badge>
        </div>

        {/* Section Cards */}
        <div className="max-w-6xl mx-auto space-y-6">
          {sections.map((section) => {
            const Icon = section.icon;
            const isExpanded = activeSection === section.id;
            
            return (
              <Card key={section.id} className="overflow-hidden">
                <CardHeader className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" onClick={() => setActiveSection(isExpanded ? null : section.id)}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Icon className="w-6 h-6 text-indigo-600" />
                      <div>
                        <CardTitle>{section.title}</CardTitle>
                        <CardDescription>{section.description}</CardDescription>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      {isExpanded ? "Hide" : "Show"} Documents
                    </Button>
                  </div>
                  {section.note && isExpanded && (
                    <Alert className="mt-3">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{section.note}</AlertDescription>
                    </Alert>
                  )}
                </CardHeader>
                
                {isExpanded && (
                  <CardContent className="pt-0">
                    <div className="grid md:grid-cols-2 gap-4">
                      {section.documents.map((doc, index) => (
                        <div key={index} className="flex flex-col justify-between gap-3 p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                              {doc.title}
                            </h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
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
                            className="w-full"
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IecDocuments;
