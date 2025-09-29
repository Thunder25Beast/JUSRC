import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Award, Lightbulb, Users, Calendar, ExternalLink } from "lucide-react";

const opportunities = [
  {
    id: "gj-straus",
    title: "GJ STRAUS",
    description: "Government of India Short Term Student Traineeship Program",
    deadline: "January 2025",
    stipend: "₹10,000",
    icon: Award,
    features: ["Research stipend", "Certificate", "Publication opportunity"]
  },
  {
    id: "icmr", 
    title: "ICMR STS",
    description: "Indian Council of Medical Research Student Training Scheme",
    deadline: "December 2024",
    stipend: "₹15,000",
    icon: BookOpen,
    features: ["National recognition", "Research training", "Mentorship"]
  },
  {
    id: "independent",
    title: "Independent Projects",
    description: "Self-directed research projects with faculty mentorship",
    deadline: "Rolling basis",
    stipend: "Varies",
    icon: Lightbulb,
    features: ["Flexible timeline", "Faculty support", "Custom topics"]
  },
  {
    id: "iap",
    title: "IAP Grant",
    description: "Indian Academy of Pediatrics research grants for pediatric studies",
    deadline: "March 2025",
    stipend: "₹25,000",
    icon: Users,
    features: ["Pediatrics focus", "High stipend", "Publication support"]
  }
];

const upcomingEvents = [
  {
    title: "Research Methodology Workshop",
    date: "Nov 15, 2024",
    type: "Workshop",
    location: "JIPMER Auditorium"
  },
  {
    title: "Grant Writing Seminar",
    date: "Dec 5, 2024", 
    type: "Seminar",
    location: "Conference Hall"
  },
  {
    title: "InCubate 2025 Registration Opens",
    date: "Dec 20, 2024",
    type: "Registration",
    location: "Online"
  },
  {
    title: "Literature Review Session",
    date: "Jan 10, 2025",
    type: "Training",
    location: "Library"
  }
];

export default function ResearchOpportunities() {
  const handleApply = (opportunityId: string) => {
    console.log('Apply clicked for:', opportunityId);
    // TODO: Navigate to application page or show application form
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">Research Opportunities</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore various research programs, grants, and opportunities available for undergraduate students at JIPMER.
            Find the perfect match for your research interests and career goals.
          </p>
        </div>

        {/* Opportunities Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {opportunities.map((opportunity) => {
            const IconComponent = opportunity.icon;
            
            return (
              <Card
                key={opportunity.id}
                className="hover-elevate transition-all duration-200 group"
                data-testid={`opportunity-${opportunity.id}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-orange/20 transition-colors duration-200">
                        <IconComponent className="w-6 h-6 text-primary group-hover:text-orange transition-colors duration-200" />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
                          {opportunity.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          Deadline: {opportunity.deadline}
                        </p>
                      </div>
                    </div>
                    <div className="bg-orange/10 px-3 py-1 rounded-full">
                      <span className="text-orange font-semibold text-sm">{opportunity.stipend}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{opportunity.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-card-foreground">Key Features:</h4>
                    <ul className="space-y-1">
                      {opportunity.features.map((feature, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-orange rounded-full"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex space-x-3 pt-2">
                    <Button
                      onClick={() => handleApply(opportunity.id)}
                      className="flex-1"
                      data-testid={`button-apply-${opportunity.id}`}
                    >
                      Apply Now
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => console.log('Learn more:', opportunity.id)}
                      data-testid={`button-learn-more-${opportunity.id}`}
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Upcoming Events */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="hover-elevate text-center"
                data-testid={`event-${index}`}
              >
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-orange font-semibold">{event.date}</p>
                  <p className="text-sm text-muted-foreground">{event.type}</p>
                  <p className="text-sm text-muted-foreground">{event.location}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-4"
                    onClick={() => console.log('Event details:', event.title)}
                    data-testid={`button-event-details-${index}`}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* External Resources */}
        <div className="mt-16 bg-muted/30 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
            External Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="https://incubate2025.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-card-border rounded-lg p-6 hover-elevate transition-all duration-200 group"
              data-testid="link-incubate"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                  InCubate 2025
                </h4>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground">
                National level MedTech innovation program by JIPMER × IIT Bombay
              </p>
            </a>
            
            <div className="bg-card border border-card-border rounded-lg p-6">
              <h4 className="font-semibold text-card-foreground mb-4">UGRMC Guidelines</h4>
              <p className="text-sm text-muted-foreground">
                Comprehensive guidelines for undergraduate research project approvals
              </p>
            </div>
            
            <div className="bg-card border border-card-border rounded-lg p-6">
              <h4 className="font-semibold text-card-foreground mb-4">IEC Documentation</h4>
              <p className="text-sm text-muted-foreground">
                Ethics committee requirements and approval processes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}