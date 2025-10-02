import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, Download, Search, Calendar, Tag, Filter, Shield, Users } from "lucide-react";

const IecDocuments = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const documents = [
    {
      id: "iec-application-form",
      title: "IEC Application Form",
      description: "Institutional Ethics Committee application form for research approval",
      fileName: "IEC_Application_Form.pdf",
      category: "forms",
      fileSize: "1.2 MB",
      uploadDate: "2024-12-18",
      downloads: 145,
      tags: ["iec", "application", "ethics"],
      featured: true
    },
    {
      id: "ethics-guidelines",
      title: "Research Ethics Guidelines",
      description: "Comprehensive guidelines for ethical conduct in medical research",
      fileName: "Research_Ethics_Guidelines.pdf",
      category: "guidelines",
      fileSize: "2.1 MB",
      uploadDate: "2024-12-15",
      downloads: 189,
      tags: ["ethics", "guidelines", "research"]
    },
    {
      id: "informed-consent-template",
      title: "Informed Consent Form Template",
      description: "Standard template for informed consent forms",
      fileName: "Informed_Consent_Template.docx",
      category: "templates",
      fileSize: "234 KB",
      uploadDate: "2024-12-12",
      downloads: 167,
      tags: ["consent", "template", "ethics"]
    },
    {
      id: "iec-standard-procedures",
      title: "IEC Standard Operating Procedures",
      description: "Standard procedures followed by the Institutional Ethics Committee",
      fileName: "IEC_Standard_Procedures.pdf",
      category: "guidelines",
      fileSize: "1.8 MB",
      uploadDate: "2024-12-10",
      downloads: 98,
      tags: ["procedures", "iec", "standards"]
    },
    {
      id: "human-subjects-research-guidelines",
      title: "Human Subjects Research Guidelines",
      description: "Guidelines for conducting research involving human participants",
      fileName: "Human_Subjects_Guidelines.pdf",
      category: "guidelines",
      fileSize: "1.5 MB",
      uploadDate: "2024-12-08",
      downloads: 123,
      tags: ["human", "subjects", "guidelines"]
    }
  ];

  const categories = [
    { id: "all", label: "All Documents", count: documents.length },
    { id: "guidelines", label: "Guidelines", count: documents.filter(d => d.category === "guidelines").length },
    { id: "forms", label: "Forms", count: documents.filter(d => d.category === "forms").length },
    { id: "templates", label: "Templates", count: documents.filter(d => d.category === "templates").length }
  ];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredDocuments = documents.filter(doc => doc.featured);

  const getCategoryColor = (category: string) => {
    const colors = {
      guidelines: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      forms: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      templates: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            IEC Documents
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Institutional Ethics Committee forms, guidelines, and approval documents
          </p>
          <Badge variant="outline" className="text-lg px-4 py-2">
            <Shield className="w-4 h-4 mr-2" />
            Research Ethics
          </Badge>
        </div>

        {/* Featured Documents */}
        {featuredDocuments.length > 0 && (
          <div className="mb-8">
            <div className="grid md:grid-cols-2 gap-4">
              {featuredDocuments.map((doc) => (
                <Card key={doc.id} className="border-yellow-200 dark:border-yellow-800">
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
                    <Button className="w-full" size="sm">
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
                placeholder="Search IEC documents..."
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
                  
                  <Button size="sm">
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
                No documents found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search terms or filters
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default IecDocuments;