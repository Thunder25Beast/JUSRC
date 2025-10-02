import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lightbulb, Users, Clock, Award, FileText, ExternalLink, BookOpen, Target, Search } from "lucide-react";

const IndependentProjects = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projectInfo = {
    title: "Independent Research Projects",
    description: "Self-directed research opportunities for motivated medical students to explore their interests and develop research skills.",
    categories: [
      {
        id: "clinical",
        name: "Clinical Research",
        description: "Patient-based studies and clinical trials",
        icon: "Stethoscope",
        projects: [
          {
            title: "Diabetes Management in Rural Settings",
            mentor: "Dr. Sarah Johnson",
            department: "Internal Medicine",
            duration: "6 months",
            difficulty: "Intermediate"
          },
          {
            title: "Pediatric Nutrition Assessment",
            mentor: "Dr. Michael Chen",
            department: "Pediatrics", 
            duration: "4 months",
            difficulty: "Beginner"
          }
        ]
      },
      {
        id: "basic",
        name: "Basic Sciences",
        description: "Laboratory and theoretical research",
        icon: "Microscope",
        projects: [
          {
            title: "Antimicrobial Resistance Patterns",
            mentor: "Dr. Emily White",
            department: "Microbiology",
            duration: "8 months",
            difficulty: "Advanced"
          },
          {
            title: "Histopathological Analysis Methods",
            mentor: "Dr. Robert Kim",
            department: "Pathology",
            duration: "5 months",
            difficulty: "Intermediate"
          }
        ]
      },
      {
        id: "public-health",
        name: "Public Health",
        description: "Community health and epidemiological studies",
        icon: "Globe",
        projects: [
          {
            title: "Mental Health Awareness Campaign",
            mentor: "Dr. Lisa Anderson",
            department: "Community Medicine",
            duration: "3 months",
            difficulty: "Beginner"
          },
          {
            title: "Vaccination Coverage Analysis",
            mentor: "Dr. James Wilson",
            department: "Preventive Medicine",
            duration: "6 months",
            difficulty: "Intermediate"
          }
        ]
      },
      {
        id: "technology",
        name: "Medical Technology",
        description: "Innovation and technology in healthcare",
        icon: "Cpu",
        projects: [
          {
            title: "AI-Based Diagnostic Tool Development",
            mentor: "Dr. Tech Guru",
            department: "Digital Health",
            duration: "12 months",
            difficulty: "Advanced"
          },
          {
            title: "Telemedicine Platform Design",
            mentor: "Dr. Innovation Smith",
            department: "Health Informatics",
            duration: "8 months",
            difficulty: "Advanced"
          }
        ]
      }
    ],
    benefits: [
      "Flexible timeline and scope",
      "Direct mentor guidance",
      "Publication opportunities",
      "Research skill development",
      "Portfolio enhancement",
      "Conference presentation chances"
    ],
    requirements: [
      "Research proposal submission",
      "Faculty mentor approval",
      "Ethical clearance (if needed)",
      "Regular progress reports",
      "Final presentation",
      "Research paper submission"
    ]
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: FileText },
    { id: "categories", label: "Project Categories", icon: BookOpen },
    { id: "process", label: "Application Process", icon: Target },
    { id: "resources", label: "Resources", icon: Search }
  ];

  const allProjects = projectInfo.categories.flatMap(category => 
    category.projects.map(project => ({ ...project, category: category.name, categoryId: category.id }))
  );

  const filteredProjects = selectedCategory === "all" 
    ? allProjects 
    : allProjects.filter(project => project.categoryId === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Intermediate": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "Advanced": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {projectInfo.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            {projectInfo.description}
          </p>
          <Badge variant="outline" className="text-lg px-4 py-2">
            Self-Directed Research
          </Badge>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center gap-2"
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </Button>
            );
          })}
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          {activeTab === "overview" && (
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="w-6 h-6" />
                    Why Choose Independent Research?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-green-700 dark:text-green-400">Benefits</h4>
                      <ul className="space-y-2">
                        {projectInfo.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-400">Requirements</h4>
                      <ul className="space-y-2">
                        {projectInfo.requirements.map((requirement, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-sm">{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-4">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Users className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">50+ Projects</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Available across all departments</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Clock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Flexible Duration</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">3-12 months based on project scope</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Award className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Publication Ready</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">High-quality research output</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === "categories" && (
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2 mb-6">
                <Button
                  variant={selectedCategory === "all" ? "default" : "outline"}
                  onClick={() => setSelectedCategory("all")}
                  size="sm"
                >
                  All Categories
                </Button>
                {projectInfo.categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.id)}
                    size="sm"
                  >
                    {category.name}
                  </Button>
                ))}
              </div>

              <div className="grid gap-4">
                {filteredProjects.map((project, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-lg">{project.title}</CardTitle>
                          <CardDescription className="mt-1">
                            {project.mentor} • {project.department}
                          </CardDescription>
                        </div>
                        <div className="flex flex-col gap-2 items-end">
                          <Badge className={getDifficultyColor(project.difficulty)}>
                            {project.difficulty}
                          </Badge>
                          <Badge variant="outline">{project.category}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <Clock className="w-4 h-4" />
                          Duration: {project.duration}
                        </div>
                        <Button size="sm" variant="outline">
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "process" && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>How to Start Your Independent Research Project</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                          <h4 className="font-medium">Choose Your Interest</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Browse available projects or propose your own research idea</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                          <h4 className="font-medium">Find a Mentor</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Connect with faculty members in your area of interest</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0">3</div>
                        <div>
                          <h4 className="font-medium">Develop Proposal</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Create a detailed research proposal with timeline and methodology</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0">4</div>
                        <div>
                          <h4 className="font-medium">Contact JUSRC</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Contact JUSRC for application guidance</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                      <h4 className="font-semibold mb-4">Required Documents</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          Research proposal (2-3 pages)
                        </li>
                        <li className="flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          Mentor approval letter
                        </li>
                        <li className="flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          Academic transcript
                        </li>
                        <li className="flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          Timeline and milestones
                        </li>
                        <li className="flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          Budget justification (if applicable)
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex gap-4">
                    <Button className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Download Application Form
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View Sample Proposals
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "resources" && (
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Research Resources</CardTitle>
                  <CardDescription>
                    Essential tools and resources for independent research projects
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Research Tools</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• PubMed and medical databases</li>
                        <li>• Statistical analysis software (SPSS, R)</li>
                        <li>• Reference management (Mendeley, Zotero)</li>
                        <li>• Survey tools (Google Forms, SurveyMonkey)</li>
                        <li>• Data visualization tools</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Writing Resources</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Research proposal templates</li>
                        <li>• Academic writing guidelines</li>
                        <li>• Citation styles and formats</li>
                        <li>• Manuscript preparation guides</li>
                        <li>• Presentation templates</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Training Workshops</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Research Methodology</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Monthly workshops on research design and methodology</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Statistical Analysis</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Hands-on training with statistical software</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Academic Writing</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Improve your scientific writing skills</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IndependentProjects;