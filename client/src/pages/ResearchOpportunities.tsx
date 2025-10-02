import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, Users, ExternalLink } from "lucide-react";
import { Link } from "wouter";

const ResearchOpportunities = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Research Opportunities
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Explore diverse research opportunities designed to enhance your academic journey and 
            contribute to medical science.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <Award className="w-6 h-6 mr-3 text-blue-500" />
                GJ STRAUS Research Grant
              </CardTitle>
              <p className="text-gray-600 dark:text-gray-300">
                Professor GJ Straus Medical Research Grant for innovative undergraduate research projects
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Amount: ₹25,000 - ₹50,000</span>
                  <Badge className="bg-green-100 text-green-800">Open</Badge>
                </div>
                <Link href="/research-opportunities/gj-straus">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Learn More & Apply
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <BookOpen className="w-6 h-6 mr-3 text-green-500" />
                ICMR Research Programs
              </CardTitle>
              <p className="text-gray-600 dark:text-gray-300">
                Indian Council of Medical Research Short Term Studentship and Junior Research Fellowship
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Amount: ₹10,000 - ₹25,000/month</span>
                  <Badge className="bg-green-100 text-green-800">Open</Badge>
                </div>
                <Link href="/research-opportunities/icmr">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Learn More & Apply
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <Award className="w-6 h-6 mr-3 text-purple-500" />
                Independent Research Projects
              </CardTitle>
              <p className="text-gray-600 dark:text-gray-300">
                Self-directed research projects with complete flexibility in topic selection and methodology
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Variable funding</span>
                  <Badge className="bg-blue-100 text-blue-800">Always Open</Badge>
                </div>
                <Link href="/research-opportunities/independent-projects">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Learn More & Apply
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <Users className="w-6 h-6 mr-3 text-pink-500" />
                IAP Research Grants
              </CardTitle>
              <p className="text-gray-600 dark:text-gray-300">
                Indian Academy of Pediatrics grants for pediatric and child health research
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Amount: ₹15,000 - ₹1,00,000</span>
                  <Badge className="bg-green-100 text-green-800">Open</Badge>
                </div>
                <Link href="/research-opportunities/iap">
                  <Button className="w-full bg-pink-600 hover:bg-pink-700">
                    Learn More & Apply
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <BookOpen className="w-6 h-6 mr-3 text-indigo-500" />
                Upcoming Events & Workshops
              </CardTitle>
              <p className="text-gray-600 dark:text-gray-300">
                Research workshops, seminars, competitions, and training programs throughout the year
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Free participation</span>
                  <Badge className="bg-purple-100 text-purple-800">Multiple Events</Badge>
                </div>
                <Link href="/research-opportunities/upcoming-events">
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                    Learn More & Register
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="py-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Research Journey?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of medical students who have already begun their research careers through our programs.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" variant="secondary">
                <BookOpen className="w-5 h-5 mr-2" />
                Browse All Opportunities
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                <Users className="w-5 h-5 mr-2" />
                Find a Mentor
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResearchOpportunities;
