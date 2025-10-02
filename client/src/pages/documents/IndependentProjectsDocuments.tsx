import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, Download, Search, Calendar, Tag, Filter, Star, Lightbulb } from "lucide-react";

const IndependentProjectsDocuments = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const documents = [
    {
      id: "independent-guidelines",
      title: "Independent Research Project Guidelines",
      description: "Comprehensive guidelines for conducting independent research projects",
      fileName: "Independent_Research_Guidelines.pdf",
      category: "guidelines",
      fileSize: "1.9 MB",
      uploadDate: "2024-12-18",
      downloads: 167,
      tags: ["guidelines", "independent", "research"],
      featured: true
    },
    {
      id: "project-proposal-template",
      title: "Project Proposal Template",
      description: "Standard template for independent research project proposals",
      fileName: "Project_Proposal_Template.docx",
      category: "templates",
      fileSize: "185 KB",
      uploadDate: "2024-12-15",
      downloads: 234,
      tags: ["template", "proposal", "format"]
    },
    {
      id: "mentor-selection-guide",
      title: "Mentor Selection Guide",
      description: "Guide for finding and selecting appropriate research mentors",
      fileName: "Mentor_Selection_Guide.pdf",
      category: "guidelines",
      fileSize: "678 KB",
      uploadDate: "2024-12-12",
      downloads: 89,
      tags: ["mentor", "selection", "guide"]
    },
    {
      id: "ethics-clearance-form",
      title: "Ethics Clearance Application Form",
      description: "Form for obtaining ethical clearance for research involving human subjects",
      fileName: "Ethics_Clearance_Form.pdf",
      category: "forms",
      fileSize: "456 KB",
      uploadDate: "2024-12-10",
      downloads: 123,
      tags: ["ethics", "clearance", "form"]
    },
    {
      id: "data-collection-templates",
      title: "Data Collection Templates",
      description: "Various templates for data collection in different research methodologies",
      fileName: "Data_Collection_Templates.zip",
      category: "templates",
      fileSize: "2.3 MB",
      uploadDate: "2024-12-08",
      downloads: 198,
      tags: ["data", "collection", "templates"]
    },
    {
      id: "statistical-analysis-guide",
      title: "Statistical Analysis Guide",
      description: "Guide for choosing and conducting appropriate statistical analyses",
      fileName: "Statistical_Analysis_Guide.pdf",
      category: "resources",
      fileSize: "1.7 MB",
      uploadDate: "2024-12-05",
      downloads: 156,
      tags: ["statistics", "analysis", "guide"]
    },
    {
      id: "sample-clinical-project",
      title: "Sample Clinical Research Project",
      description: "Example of a completed clinical research project for reference",
      fileName: "Sample_Clinical_Project.pdf",
      category: "samples",
      fileSize: "2.8 MB",
      uploadDate: "2024-11-28",
      downloads: 178,
      tags: ["sample", "clinical", "project"]
    },
    {
      id: "sample-basic-science-project",
      title: "Sample Basic Science Project",
      description: "Example of a completed basic science research project",
      fileName: "Sample_Basic_Science_Project.pdf",
      category: "samples",
      fileSize: "2.4 MB",
      uploadDate: "2024-11-25",
      downloads: 145,
      tags: ["sample", "basic-science", "project"]
    },
    {
      id: "research-methodology-handbook",
      title: "Research Methodology Handbook",
      description: "Comprehensive handbook covering various research methodologies",
      fileName: "Research_Methodology_Handbook.pdf",
      category: "resources",
      fileSize: "4.2 MB",
      uploadDate: "2024-11-20",
      downloads: 267,
      tags: ["methodology", "handbook", "research"]
    },
    {
      id: "publication-checklist",
      title: "Publication Preparation Checklist",
      description: "Checklist for preparing research for publication",
      fileName: "Publication_Checklist.pdf",
      category: "resources",
      fileSize: "345 KB",
      uploadDate: "2024-11-15",
      downloads: 98,
      tags: ["publication", "checklist", "writing"]
    }
  ];

  const categories = [
    { id: "all", label: "All Documents", count: documents.length },
    { id: "guidelines", label: "Guidelines", count: documents.filter(d => d.category === "guidelines").length },
    { id: "templates", label: "Templates", count: documents.filter(d => d.category === "templates").length },
    { id: "forms", label: "Forms", count: documents.filter(d => d.category === "forms").length },
    { id: "samples", label: "Sample Projects", count: documents.filter(d => d.category === "samples").length },
    { id: "resources", label: "Resources", count: documents.filter(d => d.category === "resources").length }
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
      guidelines: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      templates: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      forms: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      samples: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      resources: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    };
    return colors[category as keyof typeof colors] || colors.resources;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Independent Projects Documents
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Resources, templates, and guidelines for conducting independent research projects
          </p>
          <Badge variant="outline" className="text-lg px-4 py-2">
            <Lightbulb className="w-4 h-4 mr-2" />
            Self-Directed Research Resources
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

export default IndependentProjectsDocuments;