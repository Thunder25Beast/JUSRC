import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  FileText, 
  Microscope,
  FolderOpen
} from "lucide-react";

const IcmrDocuments = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const generalDocuments = [
    {
      title: "ICMR-STS Workflow",
      description: "Complete workflow for ICMR Short-Term Studentship program",
      fileName: "ICMR-STS-Workflow.docx",
      fileSize: "85 KB",
      category: "Workflow"
    },
    {
      title: "Application Steps",
      description: "Step-by-step guide to apply for STS Fellowship",
      fileName: "ICMR-STS-Application-Steps.pdf",
      fileSize: "120 KB",
      category: "Guide"
    },
    {
      title: "ICMR Topics",
      description: "Approved research topics for ICMR projects",
      fileName: "ICMR-Topics.pdf",
      fileSize: "95 KB",
      category: "Reference"
    },
    {
      title: "ICMR-STS FAQ",
      description: "Frequently asked questions about STS Fellowship",
      fileName: "ICMR-STS-FAQ.pdf",
      fileSize: "110 KB",
      category: "FAQ"
    }
  ];

  const proposalSubmissionDocs = [
    {
      title: "Proposal Format",
      description: "Standard format for ICMR proposal submission",
      fileName: "Proposal-Submission/Proposal-Format.pdf",
      fileSize: "150 KB",
      category: "Template"
    },
    {
      title: "AAF Form 2025",
      description: "Application Attestation Form for STS-2025",
      fileName: "Proposal-Submission/AAF-Form-2025.pdf",
      fileSize: "125 KB",
      category: "Form"
    },
    {
      title: "Ethics Undertaking from Guide",
      description: "Ethics undertaking document for proposal submission",
      fileName: "Proposal-Submission/Ethics-Undertaking-Guide.docx",
      fileSize: "45 KB",
      category: "Form"
    },
    {
      title: "Sample Selected Proposal",
      description: "Example of a successfully selected ICMR proposal",
      fileName: "Proposal-Submission/Sample-Selected-Proposal.pdf",
      fileSize: "280 KB",
      category: "Sample"
    }
  ];

  const sampleDocuments = [
    {
      title: "AAF Without Title",
      description: "Blank Application Attestation Form template",
      fileName: "Sample-Documents/AAF-Without-Title.pdf",
      fileSize: "80 KB",
      category: "Sample"
    },
    {
      title: "AAF Cardiology Sample",
      description: "Filled AAF example from Cardiology department",
      fileName: "Sample-Documents/AAF-Cardiology.pdf",
      fileSize: "95 KB",
      category: "Sample"
    },
    {
      title: "Case Study Proforma",
      description: "Case study documentation format",
      fileName: "Sample-Documents/Case-Study-Proforma.pdf",
      fileSize: "110 KB",
      category: "Sample"
    },
    {
      title: "ICMR Undertaking",
      description: "Standard undertaking document for ICMR submission",
      fileName: "Sample-Documents/ICMR-Undertaking.pdf",
      fileSize: "75 KB",
      category: "Sample"
    },
    {
      title: "Informed Consent Form",
      description: "Patient consent form template",
      fileName: "Sample-Documents/Informed-Consent-Form.pdf",
      fileSize: "90 KB",
      category: "Sample"
    },
    {
      title: "Proposal Final Draft",
      description: "Complete final draft of sample proposal",
      fileName: "Sample-Documents/Proposal-Final-Draft.pdf",
      fileSize: "320 KB",
      category: "Sample"
    },
    {
      title: "Undertaking Cardiology",
      description: "Department undertaking example",
      fileName: "Sample-Documents/Undertaking-Cardiology.pdf",
      fileSize: "85 KB",
      category: "Sample"
    }
  ];

  const handleDownload = (fileName: string) => {
    const link = document.createElement('a');
    link.href = `/documents/ICMR/${fileName}`;
    link.download = fileName.split('/').pop() || fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            ICMR Documents
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Indian Council of Medical Research - Short-Term Studentship (STS) program documentation and resources.
          </p>
          <Badge variant="outline" className="text-lg px-4 py-2">
            <Microscope className="w-4 h-4 mr-2" />
            Medical Research
          </Badge>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto space-y-8">
          {/* General Documents */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-6 h-6" />
                General Documents
              </CardTitle>
              <CardDescription>
                Essential workflow, guides, and reference materials for ICMR-STS
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {generalDocuments.map((doc, index) => (
                  <div key={index} className="flex flex-col justify-between gap-3 p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <div>
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
                      className="w-full"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Proposal Submission Documents */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FolderOpen className="w-6 h-6" />
                Proposal Submission Documents
              </CardTitle>
              <CardDescription>
                Templates and forms required for proposal submission
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {proposalSubmissionDocs.map((doc, index) => (
                  <div key={index} className="flex flex-col justify-between gap-3 p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <div>
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
                      className="w-full"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Sample Documents */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Microscope className="w-6 h-6" />
                ICMR-STS Sample Documents
              </CardTitle>
              <CardDescription>
                Example documents and filled forms for reference
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sampleDocuments.map((doc, index) => (
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
                      variant="outline"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default IcmrDocuments;
