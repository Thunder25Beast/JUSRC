import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Users, Search, CheckCircle, ArrowRight } from "lucide-react";

const proposalSteps = [
  {
    phase: "Planning",
    steps: [
      {
        title: "Research Question Development",
        description: "Formulate a clear, focused, and answerable research question",
        tips: ["Use PICO framework", "Ensure feasibility", "Check novelty"]
      },
      {
        title: "Literature Review", 
        description: "Comprehensive review of existing literature in your field",
        tips: ["Use multiple databases", "Include recent publications", "Identify gaps"]
      },
      {
        title: "Methodology Selection",
        description: "Choose appropriate study design and methods",
        tips: ["Match design to question", "Consider limitations", "Plan sample size"]
      }
    ]
  },
  {
    phase: "Writing",
    steps: [
      {
        title: "Proposal Structure",
        description: "Organize your proposal with clear sections and flow",
        tips: ["Follow institutional format", "Maintain logical flow", "Include all required sections"]
      },
      {
        title: "Methodology Detail",
        description: "Provide detailed methodology and analysis plan",
        tips: ["Be specific and clear", "Include statistical methods", "Address limitations"]
      },
      {
        title: "Budget & Timeline",
        description: "Create realistic budget and timeline for your project",
        tips: ["Include all costs", "Allow buffer time", "Consider resources"]
      }
    ]
  },
  {
    phase: "Review",
    steps: [
      {
        title: "Self Review",
        description: "Critically review your own proposal for completeness",
        tips: ["Check all requirements", "Verify references", "Proofread carefully"]
      },
      {
        title: "Peer Review",
        description: "Get feedback from peers and seniors",
        tips: ["Ask specific questions", "Be open to criticism", "Incorporate feedback"]
      },
      {
        title: "Faculty Review",
        description: "Final review with your mentor/guide",
        tips: ["Prepare for questions", "Address concerns", "Finalize version"]
      }
    ]
  }
];

const resources = [
  {
    title: "Proposal Templates",
    description: "Standard templates for different types of research proposals",
    icon: FileText,
    items: ["GJ STRAUS Template", "ICMR Template", "Independent Project Template", "IAP Template"]
  },
  {
    title: "Writing Guidelines",
    description: "Comprehensive guides for academic writing and proposal development",
    icon: BookOpen,
    items: ["Academic Writing Style", "Citation Guidelines", "Figure & Table Standards", "Abstract Writing"]
  },
  {
    title: "Review Checklists",
    description: "Detailed checklists to ensure your proposal meets all requirements",
    icon: CheckCircle,
    items: ["UGRMC Checklist", "IEC Checklist", "Budget Checklist", "Timeline Checklist"]
  },
  {
    title: "Expert Support",
    description: "Connect with experienced researchers and mentors",
    icon: Users,
    items: ["Faculty Mentors", "Senior Students", "Writing Groups", "Peer Review Network"]
  }
];

const commonMistakes = [
  {
    mistake: "Vague Research Question",
    solution: "Use PICO framework to make it specific and focused",
    severity: "high"
  },
  {
    mistake: "Inadequate Literature Review",
    solution: "Conduct systematic search across multiple databases",
    severity: "high"
  },
  {
    mistake: "Unrealistic Timeline",
    solution: "Allow buffer time and consider all project phases",
    severity: "medium"
  },
  {
    mistake: "Incomplete Methodology",
    solution: "Provide detailed step-by-step procedures",
    severity: "high"
  },
  {
    mistake: "Missing Ethics Considerations",
    solution: "Address ethics approval and participant safety",
    severity: "high"
  },
  {
    mistake: "Poor Budget Planning",
    solution: "Include all costs and get quotes for equipment",
    severity: "medium"
  }
];

export default function Proposal101() {
  const handleDownload = (resourceType: string) => {
    console.log('Download requested for:', resourceType);
    // TODO: Implement resource download functionality
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">Proposal 101</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your comprehensive guide to writing winning research proposals. From conception to submission,
            learn the essential skills needed for successful grant applications and project approvals.
          </p>
        </div>

        {/* Step-by-Step Guide */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Step-by-Step Proposal Development
          </h2>
          
          {/* Process Overview Image */}
          <div className="flex justify-center mb-12">
            <img 
              src="https://via.placeholder.com/800x200/2563eb/ffffff?text=Proposal+Development+Process" 
              alt="Proposal Development Process"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          
          <div className="space-y-12">
            {proposalSteps.map((phase, phaseIndex) => (
              <div key={phaseIndex} className="relative">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-foreground font-bold text-lg">{phaseIndex + 1}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">{phase.phase} Phase</h3>
                </div>
                
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-4 sm:ml-8 md:ml-16">
                  {phase.steps.map((step, stepIndex) => (
                    <Card
                      key={stepIndex}
                      className="hover-elevate"
                      data-testid={`step-${phaseIndex}-${stepIndex}`}
                    >
                      <CardHeader>
                        <CardTitle className="text-lg">{step.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                        
                        <div>
                          <h5 className="font-medium text-card-foreground mb-2">Key Tips:</h5>
                          <ul className="space-y-1">
                            {step.tips.map((tip, tipIndex) => (
                              <li key={tipIndex} className="text-xs text-muted-foreground flex items-start space-x-2">
                                <span className="w-1 h-1 bg-orange rounded-full mt-2 flex-shrink-0"></span>
                                <span>{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                {phaseIndex < proposalSteps.length - 1 && (
                  <div className="flex justify-center mt-8">
                    <ArrowRight className="w-6 h-6 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Essential Resources
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {resources.map((resource, index) => {
              const IconComponent = resource.icon;
              
              return (
                <Card
                  key={index}
                  className="hover-elevate cursor-pointer group"
                  onClick={() => handleDownload(resource.title)}
                  data-testid={`resource-${index}`}
                >
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-orange/20 transition-colors duration-200">
                      <IconComponent className="w-8 h-8 text-primary group-hover:text-orange transition-colors duration-200" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors duration-200">
                      {resource.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground text-center">{resource.description}</p>
                    
                    <ul className="space-y-2">
                      {resource.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-xs text-muted-foreground flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-orange rounded-full"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full mt-4 group-hover:border-primary group-hover:text-primary"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownload(resource.title);
                      }}
                    >
                      Access Resources
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="bg-muted/30 rounded-lg p-4 sm:p-6 lg:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 text-center">
            Common Mistakes to Avoid
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {commonMistakes.map((item, index) => (
              <Card
                key={index}
                className={`${
                  item.severity === 'high' 
                    ? 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950' 
                    : 'border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950'
                }`}
                data-testid={`mistake-${index}`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className={`text-lg ${
                      item.severity === 'high' 
                        ? 'text-red-800 dark:text-red-200' 
                        : 'text-yellow-800 dark:text-yellow-200'
                    }`}>
                      {item.mistake}
                    </CardTitle>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.severity === 'high'
                        ? 'bg-red-200 text-red-800 dark:bg-red-800 dark:text-red-200'
                        : 'bg-yellow-200 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200'
                    }`}>
                      {item.severity}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className={`text-sm ${
                    item.severity === 'high'
                      ? 'text-red-700 dark:text-red-300'
                      : 'text-yellow-700 dark:text-yellow-300'
                  }`}>
                    <strong>Solution:</strong> {item.solution}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 sm:p-6 lg:p-8 max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
              Ready to Start Your Proposal?
            </h3>
            <p className="text-muted-foreground mb-6">
              Use our comprehensive resources and expert guidance to craft a winning research proposal.
              Join our community of successful researchers and make your mark in academia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => handleDownload('proposal-kit')}
                data-testid="button-download-kit"
              >
                <FileText className="w-4 h-4 mr-2" />
                Download Proposal Kit
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => console.log('Schedule consultation')}
                data-testid="button-schedule-consultation"
              >
                <Users className="w-4 h-4 mr-2" />
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}