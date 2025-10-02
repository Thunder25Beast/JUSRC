import { documentCategories } from "@/data/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, BookOpen, Lightbulb, Award, Shield, Users, Search } from "lucide-react";

const iconMap = {
  FileText,
  BookOpen, 
  Lightbulb,
  Award,
  Shield,
  Users,
  Search
};

export default function DocumentVault() {
  const handleCategoryClick = (categoryId: string) => {
    console.log('Document category clicked:', categoryId);
    // TODO: Navigate to category page or show documents
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Document Vault</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Access all essential documents, templates, and guidelines for your research projects. 
            Choose from the categories below to find the resources you need.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {documentCategories.map((category) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            
            return (
              <Card
                key={category.id}
                className="hover-elevate cursor-pointer transition-all duration-200 group"
                onClick={() => handleCategoryClick(category.id)}
                data-testid={`document-category-${category.id}`}
              >
                <CardHeader className="text-center pb-4">
                  {category.image && (
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                  )}
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-orange/20 transition-colors duration-200">
                    <IconComponent className="w-8 h-8 text-primary group-hover:text-orange transition-colors duration-200" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors duration-200">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    {category.description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full mt-4 group-hover:border-primary group-hover:text-primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCategoryClick(category.id);
                    }}
                  >
                    View Documents
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Quick Access Section */}
        <div className="mt-16 bg-muted/30 rounded-lg p-8">
          <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
            Quick Access Guidelines
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div className="bg-card border border-card-border rounded-lg p-4">
              <h4 className="font-medium text-card-foreground mb-2">For New Researchers</h4>
              <p className="text-muted-foreground">Start with UGRMC and IEC documentation to understand the approval process.</p>
            </div>
            <div className="bg-card border border-card-border rounded-lg p-4">
              <h4 className="font-medium text-card-foreground mb-2">Grant Applications</h4>
              <p className="text-muted-foreground">Check GJ STRAUS, ICMR, and IAP sections for funding opportunities.</p>
            </div>
            <div className="bg-card border border-card-border rounded-lg p-4">
              <h4 className="font-medium text-card-foreground mb-2">Thesis Submission</h4>
              <p className="text-muted-foreground">Use PCC section for plagiarism check requirements and final submissions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}