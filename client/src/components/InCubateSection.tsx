import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Globe, Users, Trophy, MapPin } from "lucide-react";
import { incubateData } from "@/data/content";

export default function InCubateSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-orange/5 to-background" id="incubate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">{incubateData.title}</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {incubateData.description}
          </p>
        </div>

        {/* Links */}
        <div className="flex justify-center space-x-6 mb-16">
          <a
            href={incubateData.links.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-orange hover:text-orange/80 transition-colors"
          >
            <Globe className="w-5 h-5" />
            <span>Website</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href={incubateData.links.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-orange hover:text-orange/80 transition-colors"
          >
            <span>YouTube</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href={incubateData.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-orange hover:text-orange/80 transition-colors"
          >
            <span>Instagram</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center hover-elevate">
            <CardHeader>
              <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-orange" />
              </div>
              <CardTitle className="text-3xl text-orange">{incubateData.stats.countries}+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Countries Represented</p>
              <div className="flex flex-wrap justify-center gap-2">
                {incubateData.stats.countryList.map((country, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-orange/10 text-orange text-xs rounded-full"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="text-center hover-elevate">
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-3xl text-primary">{incubateData.stats.students}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Students Participated</p>
            </CardContent>
          </Card>

          <Card className="text-center hover-elevate">
            <CardHeader>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-3xl text-green-600">{incubateData.stats.teams}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Teams Registered</p>
            </CardContent>
          </Card>
        </div>

        {/* Overview */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Event Overview</h3>
          <div className="flex justify-center mb-8">
            <img 
              src="/attached_assets/Incubate_Overview.png" 
              alt="InCubate 2025 Overview" 
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {incubateData.overview.map((item, index) => (
              <Card key={index} className="hover-elevate">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-orange font-bold text-lg">{index + 1}</span>
                  </div>
                  <p className="text-muted-foreground">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* India Map */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Global Participation</h3>
          <div className="flex justify-center">
            <img 
              src="/attached_assets/Incubate_india_map.png" 
              alt="InCubate India participation map" 
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="mt-4 text-center text-sm text-muted-foreground">
            <span className="font-medium">Countries: </span>
            {incubateData.stats.countryList.join(", ")}
          </div>
        </div>

        {/* 2025 Finalists */}
        {/* <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">2025 Finalists</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {incubateData.finalists.map((team, index) => (
              <Card key={index} className="hover-elevate cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">{team.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{team.proposal}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-4"
                    onClick={() => console.log('View poster for:', team.name)}
                  >
                    View Poster
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Click on any team to view their detailed proposal poster
            </p>
            <Button
              variant="outline"
              onClick={() => console.log('View all finalists')}
            >
              View All 15 Finalists
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  );
}