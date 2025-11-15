import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  FileText, 
  Lightbulb
} from "lucide-react";

const IndependentProjectsDocuments = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const documents = [
    {
      title: "Independent Projects Workflow",
      description: "Complete workflow and guidelines for independent research projects",
      fileName: "Independent-projects-Workflow .docx",
      fileSize: "120 KB",
      category: "Workflow"
    },
    {
      title: "UGRMC Protocol Proforma 2024",
      description: "Standard protocol format for UGRMC submission",
      fileName: "UGRMC-GJ-STRAUS-Protocol-Proforma-2024 .doc",
      fileSize: "95 KB",
      category: "Template"
    }
  ];

  const handleDownload = (fileName: string) => {
    const link = document.createElement('a');
    link.href = `/documents/independent-projects/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Independent Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Self-funded research project documentation and guidelines.
          </p>
          <Badge variant="outline" className="text-lg px-4 py-2">
            <Lightbulb className="w-4 h-4 mr-2" />
            Independent Research
          </Badge>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-6 h-6" />
                Independent Projects Documents
              </CardTitle>
              <CardDescription>
                Templates and guidelines for independent research projects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {documents.map((doc, index) => (
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
                    <Button
                      size="sm"
                      onClick={() => handleDownload(doc.fileName)}
                      className="flex-shrink-0"
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

export default IndependentProjectsDocuments;
