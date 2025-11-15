import { useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target } from "lucide-react";

export default function About() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Learn more about JUSRC and our dedicated working body driving research excellence at JIPMER
          </p>
        </div>

        {/* Two Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* JUSRC Card */}
          <Link href="/about/jusrc">
            <Card className="h-full hover-elevate cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 hover:border-primary/50">
              <CardContent className="p-8 flex flex-col items-center text-center h-full">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-card-foreground mb-4">
                  JUSRC
                </h2>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Discover our mission, vision, and key initiatives that foster research and innovation among undergraduate students
                </p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Working Body Card */}
          <Link href="/about/working-body">
            <Card className="h-full hover-elevate cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 hover:border-primary/50">
              <CardContent className="p-8 flex flex-col items-center text-center h-full">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-card-foreground mb-4">
                  Working Body
                </h2>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Meet our faculty advisors, current team members, and past secretaries who have contributed to JUSRC's growth
                </p>
                <Button variant="outline" className="w-full">
                  Meet the Team
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}