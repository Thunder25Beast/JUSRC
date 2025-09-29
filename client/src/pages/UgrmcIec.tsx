import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, FileText, CheckCircle, AlertCircle, Clock } from "lucide-react";

const ugrmcSteps = [
  {
    step: 1,
    title: "Proposal Submission",
    description: "Submit research proposal via email to UGRMC",
    timeframe: "Mid to End of January",
    status: "required"
  },
  {
    step: 2,
    title: "Initial Review",
    description: "UGRMC reviews and releases provisional results",
    timeframe: "March",
    status: "process"
  },
  {
    step: 3,
    title: "Committee Meeting",
    description: "Present your proposal at UGRMC meeting",
    timeframe: "After provisional results",
    status: "required"
  },
  {
    step: 4,
    title: "Modifications",
    description: "Implement suggested changes to proposal",
    timeframe: "1-2 weeks after meeting",
    status: "conditional"
  },
  {
    step: 5,
    title: "Final Approval",
    description: "Receive UGRMC certificate to proceed",
    timeframe: "After modifications",
    status: "completion"
  }
];

const iecSteps = [
  {
    step: 1,
    title: "Document Preparation",
    description: "Prepare proposal with consent forms and declarations",
    requirements: ["Approved UGRMC proposal", "Consent forms", "Declaration", "CV format"],
    status: "required"
  },
  {
    step: 2,
    title: "Submission",
    description: "Submit both soft and hard copies to IEC",
    requirements: ["Complete documentation", "Physical copies"],
    status: "required"
  },
  {
    step: 3,
    title: "IEC Meeting",
    description: "Mandatory attendance at IEC committee meeting",
    requirements: ["Personal presentation", "Answer committee questions"],
    status: "required"
  },
  {
    step: 4,
    title: "Review & Modifications",
    description: "Implement IEC suggested modifications",
    requirements: ["Address feedback", "Resubmit modified proposal"],
    status: "conditional"
  },
  {
    step: 5,
    title: "Ethics Approval",
    description: "Receive IEC certificate - project can commence",
    requirements: ["All requirements met"],
    status: "completion"
  }
];

const documentTypes = [
  {
    category: "Observational Studies",
    documents: ["Covering Letter", "Model Consent Form", "Data Collection Proforma", "Declaration Form", "CV Format"],
    icon: FileText
  },
  {
    category: "Interventional Studies", 
    documents: ["GCP Certificate", "Covering Letter", "Model Consent Form", "Data Collection Proforma", "Declaration Form", "CV Format"],
    icon: Shield
  },
  {
    category: "Waiver of Consent",
    documents: ["Waiver Form", "Proposal", "Covering Letter"],
    icon: AlertCircle
  },
  {
    category: "Amendments",
    documents: ["Amendment Form", "Modified Proposal", "Justification Letter"],
    icon: FileText
  }
];

export default function UgrmcIec() {
  const handleDownload = (documentType: string) => {
    console.log('Download requested for:', documentType);
    // TODO: Implement document download functionality
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">UGRMC and IEC</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Essential information about Undergraduate Research Monitoring Committee (UGRMC) and 
            Institutional Ethics Committee (IEC) processes for research approval at JIPMER.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* UGRMC Section */}
          <div id="ugrmc">
            <Card className="h-full">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">UGRMC Process</CardTitle>
                <p className="text-muted-foreground">
                  Undergraduate Research Monitoring Committee approval workflow
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {ugrmcSteps.map((step) => (
                  <div
                    key={step.step}
                    className="flex space-x-4 p-4 bg-muted/30 rounded-lg"
                    data-testid={`ugrmc-step-${step.step}`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      step.status === 'completion' ? 'bg-green-100 text-green-600' :
                      step.status === 'required' ? 'bg-primary text-primary-foreground' :
                      step.status === 'conditional' ? 'bg-orange text-white' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      {step.status === 'completion' ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : step.status === 'conditional' ? (
                        <AlertCircle className="w-4 h-4" />
                      ) : step.status === 'process' ? (
                        <Clock className="w-4 h-4" />
                      ) : (
                        <span className="text-sm font-bold">{step.step}</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-card-foreground">{step.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                      <p className="text-xs text-orange mt-2 font-medium">{step.timeframe}</p>
                    </div>
                  </div>
                ))}
                
                <Button
                  className="w-full mt-6"
                  onClick={() => handleDownload('ugrmc-guidelines')}
                  data-testid="button-ugrmc-guidelines"
                >
                  Download UGRMC Guidelines
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* IEC Section */}
          <div id="iec">
            <Card className="h-full">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-orange/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-orange" />
                </div>
                <CardTitle className="text-2xl">IEC Process</CardTitle>
                <p className="text-muted-foreground">
                  Institutional Ethics Committee approval requirements
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {iecSteps.map((step) => (
                  <div
                    key={step.step}
                    className="p-4 bg-muted/30 rounded-lg"
                    data-testid={`iec-step-${step.step}`}
                  >
                    <div className="flex items-start space-x-4 mb-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        step.status === 'completion' ? 'bg-green-100 text-green-600' :
                        step.status === 'required' ? 'bg-orange text-white' :
                        'bg-orange/70 text-white'
                      }`}>
                        {step.status === 'completion' ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : step.status === 'conditional' ? (
                          <AlertCircle className="w-4 h-4" />
                        ) : (
                          <span className="text-sm font-bold">{step.step}</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-card-foreground">{step.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                      </div>
                    </div>
                    
                    <div className="ml-12">
                      <h5 className="text-sm font-medium text-card-foreground mb-2">Requirements:</h5>
                      <ul className="space-y-1">
                        {step.requirements.map((req, index) => (
                          <li key={index} className="text-xs text-muted-foreground flex items-center space-x-2">
                            <span className="w-1 h-1 bg-orange rounded-full"></span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
                
                <Button
                  variant="outline"
                  className="w-full mt-6 border-orange text-orange hover:bg-orange hover:text-white"
                  onClick={() => handleDownload('iec-guidelines')}
                  data-testid="button-iec-guidelines"
                >
                  Download IEC Guidelines
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Document Templates */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Document Templates by Study Type
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {documentTypes.map((type, index) => {
              const IconComponent = type.icon;
              
              return (
                <Card
                  key={index}
                  className="hover-elevate cursor-pointer"
                  onClick={() => handleDownload(type.category)}
                  data-testid={`document-type-${index}`}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{type.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {type.documents.map((doc, docIndex) => (
                        <li key={docIndex} className="text-sm text-muted-foreground flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-orange rounded-full"></span>
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-muted/30 rounded-lg p-8">
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            Important Guidelines
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-card-border rounded-lg p-4">
              <h4 className="font-medium text-card-foreground mb-2 flex items-center">
                <AlertCircle className="w-4 h-4 text-orange mr-2" />
                Sequence Matters
              </h4>
              <p className="text-sm text-muted-foreground">
                UGRMC approval must be obtained before IEC submission. Follow the proper sequence to avoid delays.
              </p>
            </div>
            <div className="bg-card border border-card-border rounded-lg p-4">
              <h4 className="font-medium text-card-foreground mb-2 flex items-center">
                <Clock className="w-4 h-4 text-primary mr-2" />
                Timeline Planning
              </h4>
              <p className="text-sm text-muted-foreground">
                Allow 2-3 months for complete approval process. Plan your research timeline accordingly.
              </p>
            </div>
            <div className="bg-card border border-card-border rounded-lg p-4">
              <h4 className="font-medium text-card-foreground mb-2 flex items-center">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                Documentation
              </h4>
              <p className="text-sm text-muted-foreground">
                Ensure all documents are complete and accurate before submission to avoid rejections.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}