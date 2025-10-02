import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, Download, Search, Calendar, Tag, Filter, Star, Heart } from "lucide-react";

const IapDocuments = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const documents = [
    {
      id: "iap-grant-guidelines-2025",
      title: "IAP Grant Guidelines 2025",
      description: "Complete guidelines for Indian Academy of Pediatrics research grants",
      fileName: "IAP_Grant_Guidelines_2025.pdf",
      category: "guidelines",
      fileSize: "2.5 MB",
      uploadDate: "2024-12-20",
      downloads: 189,
      tags: ["iap", "guidelines", "pediatrics"],
      featured: true
    },
    {
      id: "iap-application-form",
      title: "IAP Grant Application Form",
      description: "Official application form for IAP research grants",
      fileName: "IAP_Application_Form.pdf",
      category: "forms",
      fileSize: "678 KB",
      uploadDate: "2024-12-15",
      downloads: 156,
      tags: ["application", "form", "iap"]
    },
    {
      id: "pediatric-research-proposal-template",
      title: "Pediatric Research Proposal Template",
      description: "Template specifically designed for pediatric research proposals",
      fileName: "Pediatric_Research_Template.docx",
      category: "templates",
      fileSize: "234 KB",
      uploadDate: "2024-12-12",
      downloads: 123,
      tags: ["template", "pediatric", "proposal"]
    },
    {
      id: "iap-evaluation-criteria",
      title: "IAP Grant Evaluation Criteria",
      description: "Detailed criteria used for evaluating IAP grant applications",
      fileName: "IAP_Evaluation_Criteria.pdf",
      category: "guidelines",
      fileSize: "567 KB",
      uploadDate: "2024-12-10",
      downloads: 98,
      tags: ["evaluation", "criteria", "scoring"]
    },
    {
      id: "successful-iap-proposals",
      title: "Successful IAP Proposals Collection",
      description: "Examples of successful IAP grant proposals from previous years",
      fileName: "Successful_IAP_Proposals.pdf",
      category: "samples",
      fileSize: "4.1 MB",
      uploadDate: "2024-11-25",
      downloads: 234,
      tags: ["samples", "successful", "proposals"]
    }
  ];

  const categories = [
    { id: "all", label: "All Documents", count: documents.length },
    { id: "guidelines", label: "Guidelines", count: documents.filter(d => d.category === "guidelines").length },
    { id: "forms", label: "Forms", count: documents.filter(d => d.category === "forms").length },
    { id: "templates", label: "Templates", count: documents.filter(d => d.category === "templates").length },
    { id: "samples", label: "Samples", count: documents.filter(d => d.category === "samples").length }
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
      guidelines: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
      forms: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      templates: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      samples: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            IAP Documents
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Indian Academy of Pediatrics research grant documents and resources
          </p>
          <Badge variant="outline" className="text-lg px-4 py-2">
            <Heart className="w-4 h-4 mr-2" />
            Pediatric Research
          </Badge>
        </div>

        {/* Featured Documents */}
        {featuredDocuments.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-500" />
              Featured Documents
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {featuredDocuments.map((doc) => (
                <Card key={doc.id} className="border-yellow-200 dark:border-yellow-800">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Star className="w-5 h-5 text-yellow-500 fill-current" />
                          {doc.title}
                        </CardTitle>
                        <CardDescription className="mt-2">{doc.description}</CardDescription>
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
                      <span className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        {doc.downloads}
                      </span>
                    </div>
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
                placeholder="Search IAP documents..."
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

export default IapDocuments;