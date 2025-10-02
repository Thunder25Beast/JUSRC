import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, Download, Search, Calendar, Tag, Filter, Star, Microscope } from "lucide-react";

const IcmrDocuments = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const documents = [
    {
      id: "icmr-sts-guidelines",
      title: "ICMR-STS Application Guidelines 2025",
      description: "Complete guidelines for ICMR Short Term Studentship program application",
      fileName: "ICMR_STS_Guidelines_2025.pdf",
      category: "guidelines",
      fileSize: "2.8 MB",
      uploadDate: "2024-12-20",
      downloads: 198,
      tags: ["sts", "guidelines", "studentship"],
      featured: true
    },
    {
      id: "icmr-jrf-notification",
      title: "ICMR JRF Notification 2025",
      description: "Official notification for ICMR Junior Research Fellowship recruitment",
      fileName: "ICMR_JRF_Notification_2025.pdf",
      category: "notifications",
      fileSize: "1.2 MB",
      uploadDate: "2024-12-18",
      downloads: 156,
      tags: ["jrf", "notification", "fellowship"]
    },
    {
      id: "sts-application-form",
      title: "STS Application Form",
      description: "Official application form for ICMR Short Term Studentship",
      fileName: "ICMR_STS_Application_Form.pdf",
      category: "forms",
      fileSize: "845 KB",
      uploadDate: "2024-12-15",
      downloads: 234,
      tags: ["application", "form", "sts"]
    },
    {
      id: "research-proposal-format",
      title: "Research Proposal Format - STS",
      description: "Standard format and guidelines for STS research proposal submission",
      fileName: "STS_Research_Proposal_Format.docx",
      category: "templates",
      fileSize: "156 KB",
      uploadDate: "2024-12-12",
      downloads: 189,
      tags: ["proposal", "format", "template"]
    },
    {
      id: "mentor-guidelines",
      title: "Mentor Guidelines for STS",
      description: "Guidelines and responsibilities for faculty mentors in STS program",
      fileName: "STS_Mentor_Guidelines.pdf",
      category: "guidelines",
      fileSize: "967 KB",
      uploadDate: "2024-12-10",
      downloads: 87,
      tags: ["mentor", "guidelines", "faculty"]
    },
    {
      id: "evaluation-process",
      title: "STS Evaluation Process",
      description: "Detailed evaluation criteria and selection process for STS applications",
      fileName: "STS_Evaluation_Process.pdf",
      category: "guidelines",
      fileSize: "723 KB",
      uploadDate: "2024-12-08",
      downloads: 145,
      tags: ["evaluation", "selection", "criteria"]
    },
    {
      id: "jrf-syllabus",
      title: "ICMR JRF Examination Syllabus",
      description: "Complete syllabus for ICMR Junior Research Fellowship examination",
      fileName: "ICMR_JRF_Syllabus.pdf",
      category: "syllabus",
      fileSize: "1.5 MB",
      uploadDate: "2024-11-25",
      downloads: 267,
      tags: ["jrf", "syllabus", "examination"]
    },
    {
      id: "sample-sts-project",
      title: "Sample STS Project Report",
      description: "Example of a completed STS project report for reference",
      fileName: "Sample_STS_Project_Report.pdf",
      category: "samples",
      fileSize: "2.1 MB",
      uploadDate: "2024-11-20",
      downloads: 178,
      tags: ["sample", "project", "report"]
    },
    {
      id: "stipend-guidelines",
      title: "Stipend and Financial Guidelines",
      description: "Details about stipend disbursement and financial procedures for ICMR programs",
      fileName: "ICMR_Stipend_Guidelines.pdf",
      category: "guidelines",
      fileSize: "456 KB",
      uploadDate: "2024-11-15",
      downloads: 98,
      tags: ["stipend", "financial", "disbursement"]
    },
    {
      id: "ethics-guidelines",
      title: "Research Ethics Guidelines",
      description: "Ethical guidelines for conducting research under ICMR programs",
      fileName: "ICMR_Research_Ethics.pdf",
      category: "guidelines",
      fileSize: "1.8 MB",
      uploadDate: "2024-11-10",
      downloads: 134,
      tags: ["ethics", "research", "guidelines"]
    },
    {
      id: "sts-success-stories",
      title: "STS Success Stories 2024",
      description: "Compilation of successful STS projects and their outcomes from 2024",
      fileName: "STS_Success_Stories_2024.pdf",
      category: "references",
      fileSize: "3.4 MB",
      uploadDate: "2024-10-30",
      downloads: 201,
      tags: ["success", "stories", "outcomes"]
    },
    {
      id: "publication-guidelines",
      title: "Publication Guidelines for ICMR Research",
      description: "Guidelines for publishing research conducted under ICMR funding",
      fileName: "ICMR_Publication_Guidelines.pdf",
      category: "guidelines",
      fileSize: "689 KB",
      uploadDate: "2024-10-25",
      downloads: 112,
      tags: ["publication", "research", "guidelines"]
    }
  ];

  const categories = [
    { id: "all", label: "All Documents", count: documents.length },
    { id: "guidelines", label: "Guidelines", count: documents.filter(d => d.category === "guidelines").length },
    { id: "forms", label: "Forms", count: documents.filter(d => d.category === "forms").length },
    { id: "templates", label: "Templates", count: documents.filter(d => d.category === "templates").length },
    { id: "notifications", label: "Notifications", count: documents.filter(d => d.category === "notifications").length },
    { id: "syllabus", label: "Syllabus", count: documents.filter(d => d.category === "syllabus").length },
    { id: "samples", label: "Samples", count: documents.filter(d => d.category === "samples").length },
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
      guidelines: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      forms: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      templates: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      notifications: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
      syllabus: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      samples: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      references: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    };
    return colors[category as keyof typeof colors] || colors.references;
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
            Access forms, guidelines, notifications, and resources for ICMR research programs and fellowships
          </p>
          <Badge variant="outline" className="text-lg px-4 py-2">
            <Microscope className="w-4 h-4 mr-2" />
            Indian Council of Medical Research
          </Badge>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                {documents.length}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Documents</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {documents.filter(d => d.category === "guidelines").length}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Guidelines</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                {documents.filter(d => d.category === "forms").length}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Application Forms</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                {documents.filter(d => d.uploadDate >= "2024-12-01").length}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Recently Added</p>
            </CardContent>
          </Card>
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
                placeholder="Search ICMR documents..."
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

        {/* ICMR Program Information */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Microscope className="w-6 h-6" />
              About ICMR Programs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Short Term Studentship (STS)</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  2-3 month research program for medical students with monthly stipend and mentorship.
                </p>
                <ul className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                  <li>• Duration: 2-3 months</li>
                  <li>• Stipend: ₹10,000/month</li>
                  <li>• For MBBS students</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Junior Research Fellowship (JRF)</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Full-time research fellowship for fresh medical graduates with competitive examination.
                </p>
                <ul className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                  <li>• Duration: 2 years</li>
                  <li>• Stipend: ₹25,000/month</li>
                  <li>• For fresh graduates</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default IcmrDocuments;