import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, Download, Search, Calendar, Tag, Filter, GraduationCap, BookOpen } from "lucide-react";

const UgrmcDocuments = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Inline download function
  const simpleDownloadDocument = (doc: any) => {
    const basePath = '/documents';
    const categoryPath = 'guidelines';
    const subcategoryPath = '/ugrmc';
    const url = `${basePath}/${categoryPath}${subcategoryPath}/${doc.fileName}`;
    
    const link = window.document.createElement('a');
    link.href = url;
    link.download = doc.fileName;
    link.target = '_blank';
    window.document.body.appendChild(link);
    link.click();
    window.document.body.removeChild(link);
    
    console.log(`Downloaded: ${doc.title}`);
  };

  const documents = [
    {
      id: "ugrmc-application-form",
      title: "UGRMC Research Application Form",
      description: "Official application form for undergraduate research projects - required for all UG research in JIPMER",
      fileName: "UGRMC_Application_Form.pdf",
      category: "forms",
      fileSize: "650 KB",
      uploadDate: "2024-12-01",
      downloads: 234,
      tags: ["ugrmc", "application", "undergraduate", "research"],
      featured: true
    },
    {
      id: "research-proposal-guidelines",
      title: "Research Proposal Guidelines",
      description: "Comprehensive guidelines for writing undergraduate research proposals",
      fileName: "UG_Research_Proposal_Guidelines.pdf",
      category: "guidelines",
      fileSize: "1.1 MB",
      uploadDate: "2024-11-20",
      downloads: 189,
      tags: ["guidelines", "proposal", "writing"],
      featured: true
    },
    {
      id: "approval-process-flowchart",
      title: "UGRMC Approval Process",
      description: "Step-by-step flowchart of the UGRMC approval process for undergraduate research",
      fileName: "UGRMC_Approval_Process.pdf",
      category: "process",
      fileSize: "420 KB",
      uploadDate: "2024-11-15",
      downloads: 156,
      tags: ["approval", "process", "flowchart"],
      featured: false
    },
    {
      id: "mentor-assignment-form",
      title: "Faculty Mentor Assignment Form",
      description: "Form for assigning faculty mentors to undergraduate research projects",
      fileName: "Mentor_Assignment_Form.pdf",
      category: "forms",
      fileSize: "380 KB",
      uploadDate: "2024-11-10",
      downloads: 98,
      tags: ["mentor", "faculty", "assignment"],
      featured: false
    },
    {
      id: "progress-report-template",
      title: "Progress Report Template",
      description: "Template for submitting regular progress reports during research project",
      fileName: "UG_Progress_Report_Template.docx",
      category: "templates",
      fileSize: "245 KB",
      uploadDate: "2024-10-25",
      downloads: 123,
      tags: ["progress", "report", "template"],
      featured: false
    },
    {
      id: "final-presentation-guidelines",
      title: "Final Presentation Guidelines",
      description: "Guidelines and requirements for final research presentation",
      fileName: "Final_Presentation_Guidelines.pdf",
      category: "guidelines",
      fileSize: "590 KB",
      uploadDate: "2024-10-20",
      downloads: 87,
      tags: ["presentation", "final", "guidelines"],
      featured: false
    },
    {
      id: "research-ethics-checklist",
      title: "Research Ethics Checklist",
      description: "Checklist for ensuring research ethics compliance in undergraduate projects",
      fileName: "Research_Ethics_Checklist.pdf",
      category: "ethics",
      fileSize: "340 KB",
      uploadDate: "2024-10-15",
      downloads: 145,
      tags: ["ethics", "checklist", "compliance"],
      featured: true
    },
    {
      id: "data-collection-guidelines",
      title: "Data Collection Guidelines",
      description: "Guidelines for data collection methods and protocols for undergraduate research",
      fileName: "Data_Collection_Guidelines.pdf",
      category: "guidelines",
      fileSize: "780 KB",
      uploadDate: "2024-10-10",
      downloads: 167,
      tags: ["data", "collection", "protocols"],
      featured: false
    },
    {
      id: "publication-guidelines",
      title: "Publication Guidelines for Students",
      description: "Guidelines for undergraduate students on publishing research findings",
      fileName: "Student_Publication_Guidelines.pdf",
      category: "guidelines",
      fileSize: "670 KB",
      uploadDate: "2024-09-30",
      downloads: 76,
      tags: ["publication", "students", "guidelines"],
      featured: false
    },
    {
      id: "ugrmc-committee-contacts",
      title: "UGRMC Committee Contacts",
      description: "Contact information and office hours for UGRMC committee members",
      fileName: "UGRMC_Committee_Contacts.pdf",
      category: "contacts",
      fileSize: "280 KB",
      uploadDate: "2024-09-15",
      downloads: 54,
      tags: ["contacts", "committee", "office-hours"],
      featured: false
    },
    {
      id: "research-timeline-template",
      title: "Research Timeline Template",
      description: "Template for creating research project timelines and milestones",
      fileName: "Research_Timeline_Template.xlsx",
      category: "templates",
      fileSize: "195 KB",
      uploadDate: "2024-09-10",
      downloads: 112,
      tags: ["timeline", "milestones", "planning"],
      featured: false
    },
    {
      id: "budget-planning-form",
      title: "Research Budget Planning Form",
      description: "Form for planning and requesting research project budget allocations",
      fileName: "Budget_Planning_Form.pdf",
      category: "forms",
      fileSize: "430 KB",
      uploadDate: "2024-08-25",
      downloads: 89,
      tags: ["budget", "planning", "allocation"],
      featured: false
    },
    {
      id: "sample-research-proposals",
      title: "Sample Research Proposals",
      description: "Collection of successful undergraduate research proposals for reference",
      fileName: "Sample_UG_Research_Proposals.pdf",
      category: "samples",
      fileSize: "2.3 MB",
      uploadDate: "2024-08-20",
      downloads: 203,
      tags: ["samples", "successful", "reference"],
      featured: true
    },
    {
      id: "completion-certificate-request",
      title: "Completion Certificate Request Form",
      description: "Form for requesting research completion certificates",
      fileName: "Completion_Certificate_Request.pdf",
      category: "forms",
      fileSize: "320 KB",
      uploadDate: "2024-08-15",
      downloads: 67,
      tags: ["certificate", "completion", "request"],
      featured: false
    }
  ];

  const handleDownload = (doc: any) => {
    simpleDownloadDocument(doc);
  };

  const categories = useMemo(() => {
    const categoryCount = documents.reduce((acc, doc) => {
      acc[doc.category] = (acc[doc.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return [
      { id: "all", label: "All Documents", count: documents.length },
      { id: "forms", label: "Forms", count: categoryCount.forms || 0 },
      { id: "guidelines", label: "Guidelines", count: categoryCount.guidelines || 0 },
      { id: "templates", label: "Templates", count: categoryCount.templates || 0 },
      { id: "process", label: "Process", count: categoryCount.process || 0 },
      { id: "ethics", label: "Ethics", count: categoryCount.ethics || 0 },
      { id: "samples", label: "Samples", count: categoryCount.samples || 0 },
      { id: "contacts", label: "Contacts", count: categoryCount.contacts || 0 }
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
      forms: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      guidelines: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      templates: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      process: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      ethics: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
      samples: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      contacts: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            UGRMC Documents
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Undergraduate Research Management Committee documents - necessary for all UG research projects in JIPMER
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Badge variant="outline" className="text-lg px-4 py-2">
              <GraduationCap className="w-4 h-4 mr-2" />
              Undergraduate Research
            </Badge>
            <Badge variant="outline" className="text-lg px-4 py-2">
              <BookOpen className="w-4 h-4 mr-2" />
              JIPMER Required
            </Badge>
          </div>
        </div>

        {/* Featured Documents */}
        {featuredDocuments.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-orange-500" />
              Essential Documents
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredDocuments.map((doc) => (
                <Card key={doc.id} className="border-orange-200 dark:border-orange-800">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <GraduationCap className="w-5 h-5 text-orange-500" />
                          <span className="text-sm">{doc.title}</span>
                        </CardTitle>
                        <CardDescription className="mt-2 text-sm">{doc.description}</CardDescription>
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
                    <Button className="w-full" size="sm" onClick={() => handleDownload(doc)}>
                      <Download className="w-4 h-4 mr-2" />
                      Download
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
                placeholder="Search UGRMC documents..."
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

export default UgrmcDocuments;