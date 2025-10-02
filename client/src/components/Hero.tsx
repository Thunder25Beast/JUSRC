import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Users, BookOpen, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                Pioneering Undergraduate Research and Scientific Discourse
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Be a part of a community of like minded students, faculty and collaborators 
                to collectively enhance the undergraduate research experience
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/research-opportunities">
                <Button size="lg" className="group" data-testid="button-explore-opportunities">
                  Explore Opportunities
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" data-testid="button-learn-more">
                  Learn More About JUSRC
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Active Members</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="w-6 h-6 text-orange" />
                </div>
                <div className="text-2xl font-bold text-foreground">100+</div>
                <div className="text-sm text-muted-foreground">Research Projects</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">25+</div>
                <div className="text-sm text-muted-foreground">Awards Won</div>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-orange/20 rounded-2xl"></div>
              <img
                src="/attached_assets/right_image.png"
                alt="Students collaborating on research projects"
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
                data-testid="img-hero"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}