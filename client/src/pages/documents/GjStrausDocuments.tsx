import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, Download, Search, Calendar, User, Tag, Filter, Star, Award } from "lucide-react";

const GjStrausDocuments = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const documents = [
    {
      id: "gj-guidelines-2025",
      title: "GJ STRAUS Grant Guidelines 2025",
      description: "Complete application guidelines and eligibility criteria for GJ STRAUS research grants",
      fileName: "GJ_STRAUS_Guidelines_2025.pdf",
      category: "guidelines",
      fileSize: "2.1 MB",
      uploadDate: "2024-12-15",
      downloads: 145,
      tags: ["guidelines", "application", "eligibility"],
      featured: true
    },
    {
      id: "gj-application-form",
      title: "Application Form - GJ STRAUS 2025",
      description: "Official application form for GJ STRAUS research grant",
      fileName: "GJ_STRAUS_Application_Form_2025.pdf",
      category: "forms",
      fileSize: "856 KB",
      uploadDate: "2024-12-10",
      downloads: 89,
      tags: ["application", "form", "2025"]
    },
    {
      id: "proposal-template",
      title: "Research Proposal Template",
      description: "Standard template for writing research proposals for GJ STRAUS grants",
      fileName: "Research_Proposal_Template.docx",
      category: "templates",
      fileSize: "124 KB",
      uploadDate: "2024-12-08",
      downloads: 203,
      tags: ["template", "proposal", "format"]
    },
    {
      id: "budget-template",
      title: "Budget Justification Template",
      description: "Template for preparing detailed budget breakdown and justification",
      fileName: "Budget_Justification_Template.xlsx",
      category: "templates",
      fileSize: "89 KB",
      uploadDate: "2024-12-08",
      downloads: 156,
      tags: ["budget", "template", "financial"]
    },
    {
      id: "sample-proposal-1",
      title: "Sample Successful Proposal - Clinical Research",
      description: "Example of a successful GJ STRAUS proposal in clinical research domain",
      fileName: "Sample_Proposal_Clinical_Research.pdf",
      category: "samples",
      fileSize: "1.8 MB",
      uploadDate: "2024-11-20",
      downloads: 267,
      tags: ["sample", "clinical", "successful"]
    },
    {
      id: "sample-proposal-2", 
      title: "Sample Successful Proposal - Basic Sciences",
      description: "Example of a successful GJ STRAUS proposal in basic sciences domain",
      fileName: "Sample_Proposal_Basic_Sciences.pdf",
      category: "samples",
      fileSize: "1.6 MB",
      uploadDate: "2024-11-20",
      downloads: 189,
      tags: ["sample", "basic-sciences", "successful"]
    },
    {
      id: "evaluation-criteria",
      title: "Evaluation Criteria and Rubric",
      description: "Detailed scoring criteria used for evaluating GJ STRAUS proposals",
      fileName: "Evaluation_Criteria_Rubric.pdf",
      category: "guidelines",
      fileSize: "445 KB",
      uploadDate: "2024-11-15",
      downloads: 98,
      tags: ["evaluation", "criteria", "scoring"]
    },
    {
      id: "timeline-2025",
      title: "Application Timeline 2025",
      description: "Important dates and deadlines for GJ STRAUS 2025 application cycle",
      fileName: "Application_Timeline_2025.pdf",
      category: "guidelines",
      fileSize: "267 KB",
      uploadDate: "2024-11-10",
      downloads: 112,
      tags: ["timeline", "deadlines", "2025"]
    },
    {
      id: "past-recipients",
      title: "Past Recipients and Projects",
      description: "List of previous GJ STRAUS grant recipients and their research projects",
      fileName: "Past_Recipients_Projects.pdf",
      category: "references",
      fileSize: "3.2 MB",
      uploadDate: "2024-10-25",
      downloads: 234,
      tags: ["recipients", "projects", "history"]
    },
    {
      id: "faq-document",
      title: "Frequently Asked Questions",
      description: "Common questions and answers about GJ STRAUS grant application process",
      fileName: "GJ_STRAUS_FAQ.pdf",
      category: "guidelines",
      fileSize: "678 KB",
      uploadDate: "2024-10-20",
      downloads: 167,
      tags: ["faq", "questions", "help"]
    }
  ];

  const categories = [
    { id: "all", label: "All Documents", count: documents.length },
    { id: "guidelines", label: "Guidelines", count: documents.filter(d => d.category === "guidelines").length },
    { id: "forms", label: "Forms", count: documents.filter(d => d.category === "forms").length },
    { id: "templates", label: "Templates", count: documents.filter(d => d.category === "templates").length },
    { id: "samples", label: "Sample Proposals", count: documents.filter(d => d.category === "samples").length },
    { id: "references", label: "References", count: documents.filter(d => d.category === "references").length }
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
      templates: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      samples: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      references: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    };
    return colors[category as keyof typeof colors] || colors.references;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            GJ STRAUS Documents
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Download forms, guidelines, templates, and resources for GJ STRAUS research grant applications
          </p>
          <Badge variant="outline" className="text-lg px-4 py-2">
            <Award className="w-4 h-4 mr-2" />
            Research Grant Resources
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
                placeholder="Search documents..."
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

export default GjStrausDocuments;