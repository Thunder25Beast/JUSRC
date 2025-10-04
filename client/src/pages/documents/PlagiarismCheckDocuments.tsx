import { useState, useMemo, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, Download, Search, Calendar, Tag, Filter, CheckCircle, AlertTriangle, ArrowRight, Mail } from "lucide-react";

const PlagiarismCheckDocuments = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const documents = [
    // Instructions to Submit
    {
      id: "submission-instructions",
      title: "Instructions for Submission",
      description: "Complete step-by-step instructions for submitting your manuscript to PCC",
      fileName: "Instructions for submission.pdf",
      category: "instructions",
      subfolder: "Instructions to Submit",
      fileSize: "PDF Guide",
      uploadDate: "2024-10-01",
      downloads: 245,
      tags: ["instructions", "submission", "guidelines"],
      featured: true
    },
    // Documents
    {
      id: "declaration-forms",
      title: "Declaration Forms",
      description: "Official declaration forms required for plagiarism check submission",
      fileName: "Declaration-forms_1.docx",
      category: "documents",
      subfolder: "Documents",
      fileSize: "Word Document",
      uploadDate: "2024-10-01",
      downloads: 189,
      tags: ["declaration", "forms", "required"],
      featured: true
    },
    {
      id: "submission-proforma",
      title: "PCC Submission Proforma",
      description: "Official proforma template for PCC manuscript submissions",
      fileName: "PROFORMA_0.docx",
      category: "documents",
      subfolder: "Documents",
      fileSize: "Word Document",
      uploadDate: "2024-10-01",
      downloads: 167,
      tags: ["proforma", "template", "submission"],
      featured: true
    },
    {
      id: "sample-certificate",
      title: "Sample PCC Certificate",
      description: "Sample certificate format provided by Plagiarism Checking Committee",
      fileName: "Sample certificate PCC.pdf",
      category: "documents",
      subfolder: "Documents",
      fileSize: "PDF Sample",
      uploadDate: "2024-10-01",
      downloads: 123,
      tags: ["sample", "certificate", "format"],
      featured: false
    },
    {
      id: "sample-declaration",
      title: "Sample Declaration Form",
      description: "Sample filled declaration form for reference",
      fileName: "Sample Declaration Form .pdf",
      category: "documents",
      subfolder: "Documents",
      fileSize: "PDF Sample",
      uploadDate: "2024-10-01",
      downloads: 98,
      tags: ["sample", "declaration", "reference"],
      featured: false
    },
    {
      id: "sample-email",
      title: "Sample Email to PCC",
      description: "Sample email format for submitting documents to PCC",
      fileName: "Sample MAIL to PCC.png",
      category: "documents",
      subfolder: "Documents",
      fileSize: "Image",
      uploadDate: "2024-10-01",
      downloads: 145,
      tags: ["sample", "email", "format"],
      featured: false
    }
  ];

  // Inline download function
  const simpleDownloadDocument = (doc: any) => {
    const basePath = '/documents';
    const categoryPath = 'pcc';
    const url = `${basePath}/${categoryPath}/${doc.fileName}`;
    
    const link = window.document.createElement('a');
    link.href = url;
    link.download = doc.fileName;
    link.target = '_blank';
    window.document.body.appendChild(link);
    link.click();
    window.document.body.removeChild(link);
    
    console.log(`Downloaded: ${doc.title}`);
  };

  const handleDownload = (doc: any) => {
    simpleDownloadDocument(doc);
  };

  const categories = useMemo(() => {
    const categoryCount = documents.reduce((acc, doc) => {
      acc[doc.category] = (acc[doc.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return [
      { id: "all", label: "All Resources", count: documents.length },
      { id: "instructions", label: "Instructions", count: categoryCount.instructions || 0 },
      { id: "documents", label: "Documents", count: categoryCount.documents || 0 }
    ];
  }, []);

  const filteredDocuments = useMemo(() => {
    return documents.filter((doc) => {
      const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          doc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          doc.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === "all" || doc.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const featuredDocuments = documents.filter(doc => doc.featured);

  const getCategoryColor = (category: string) => {
    const colors = {
      instructions: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      documents: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Plagiarism Check Committee Documents
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Official JIPMER Plagiarism Checking Committee information and guidelines - necessary during GJ STRAUS final report submission
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Badge variant="outline" className="text-lg px-4 py-2">
              <CheckCircle className="w-4 h-4 mr-2" />
              Plagiarism Check
            </Badge>
            <Badge variant="outline" className="text-lg px-4 py-2">
              <AlertTriangle className="w-4 h-4 mr-2" />
              GJ STRAUS Required
            </Badge>
          </div>
        </div>

        {/* Featured Documents */}
        {featuredDocuments.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-red-500" />
              Essential Documents
            </h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
              {featuredDocuments.map((doc) => (
                <Card key={doc.id} className="border-red-200 dark:border-red-800">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-red-500 fill-current" />
                          {doc.title}
                        </CardTitle>
                        <CardDescription className="mt-2">{doc.description}</CardDescription>
                        {doc.subfolder && (
                          <Badge variant="outline" className="mt-2 text-xs">
                            📁 {doc.subfolder}
                          </Badge>
                        )}
                      </div>
                      <Badge className={getCategoryColor(doc.category)}>
                        {doc.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(doc.uploadDate).toLocaleDateString()}
                      </span>
                      <span>{doc.fileSize}</span>
                      {doc.downloads > 0 && (
                        <span className="flex items-center gap-1">
                          <Download className="w-4 h-4" />
                          {doc.downloads}
                        </span>
                      )}
                    </div>
                    <Button className="w-full" size="sm" onClick={() => handleDownload(doc)}>
                      <Download className="w-4 h-4 mr-2" />
                      Download {doc.fileName}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Search and Filter */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search plagiarism committee information..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Filter by category:</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                size="sm"
                className="flex items-center gap-2"
              >
                {category.label}
                <Badge variant="secondary" className="ml-1">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid gap-4">
          {filteredDocuments.map((doc) => (
            <Card key={doc.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-lg">{doc.title}</CardTitle>
                    <CardDescription className="mt-2">{doc.description}</CardDescription>
                  </div>
                  <Badge className={getCategoryColor(doc.category)}>
                    {doc.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-3">
                  {doc.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(doc.uploadDate).toLocaleDateString()}
                    </span>
                    <span>{doc.fileSize}</span>
                    <span className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      {doc.downloads} downloads
                    </span>
                  </div>
                  
                  <Button size="sm" onClick={() => handleDownload(doc)}>
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredDocuments.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                No information found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search terms
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default PlagiarismCheckDocuments;