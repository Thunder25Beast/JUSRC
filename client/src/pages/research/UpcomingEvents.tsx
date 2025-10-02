import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users, Award, FileText, ExternalLink, Star, Megaphone } from "lucide-react";
import { timelineEvents } from "@/data/content";

const UpcomingEvents = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Extract events from timeline data
  const upcomingEvents = [
    {
      title: "GJ STRAUS 2025",
      date: "April 2025",
      category: "grant",
      description: "Annual research grant application opens for medical students",
      image: "/attached_assets/Research_collaboration_hero_image_e88c44ce.png",
      link: "/research-opportunities/gj-straus",
      status: "registration-open",
      location: "JIPMER",
      duration: "Ongoing"
    },
    {
      title: "ICMR Proposal Writing Workshop",
      date: "March 15-16, 2025",
      category: "workshop",
      description: "Learn effective research proposal writing for ICMR grants",
      image: "/attached_assets/ICMR-P-W1.png",
      link: "/research-opportunities/icmr",
      status: "upcoming",
      location: "Online",
      duration: "2 days"
    },
    {
      title: "InCubate 2025",
      date: "June - October 2025",
      category: "competition",
      description: "National level Med Tech innovation program by JIPMER and IIT Bombay",
      image: "/attached_assets/INCUBATE-2025.png",
      link: "#incubate",
      status: "registration-open",
      location: "Hybrid",
      duration: "5 months"
    },
    {
      title: "Basic Surgical Skills Workshop",
      date: "April 20-21, 2025",
      category: "workshop",
      description: "Hands-on surgical skills training for medical students",
      link: "#surgical-skills",
      status: "upcoming",
      location: "Skills Lab, JIPMER",
      duration: "2 days"
    },
    {
      title: "Clinical Trials Methodology Session",
      date: "May 10, 2025",
      category: "seminar",
      description: "Understanding clinical trial design and implementation",
      image: "/attached_assets/Clinical-Trials-Session1.png",
      link: "#clinical-trials",
      status: "upcoming",
      location: "Auditorium",
      duration: "Half day"
    },
    {
      title: "Literature Review Masterclass",
      date: "March 25, 2025",
      category: "workshop",
      description: "Systematic approach to literature review and meta-analysis",
      image: "/attached_assets/Literature-Review-Session.png",
      link: "#literature-review",
      status: "upcoming",
      location: "Library Seminar Hall",
      duration: "1 day"
    },
    {
      title: "USMLE Preparation Series",
      date: "April - June 2025",
      category: "seminar",
      description: "Comprehensive USMLE preparation by Dr. Rishab Belavadi",
      image: "/attached_assets/USMLE.png",
      link: "#usmle",
      status: "ongoing",
      location: "Online",
      duration: "3 months"
    },
    {
      title: "Research Ethics Workshop",
      date: "May 5, 2025",
      category: "workshop",
      description: "Ethical considerations in medical research and IRB processes",
      link: "#ethics",
      status: "upcoming",
      location: "Conference Hall",
      duration: "1 day"
    }
  ];

  const categories = [
    { id: "all", label: "All Events", count: upcomingEvents.length },
    { id: "workshop", label: "Workshops", count: upcomingEvents.filter(e => e.category === "workshop").length },
    { id: "seminar", label: "Seminars", count: upcomingEvents.filter(e => e.category === "seminar").length },
    { id: "grant", label: "Grants", count: upcomingEvents.filter(e => e.category === "grant").length },
    { id: "competition", label: "Competitions", count: upcomingEvents.filter(e => e.category === "competition").length }
  ];

  const filteredEvents = activeCategory === "all" 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.category === activeCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "registration-open": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "upcoming": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "ongoing": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "registration-open": return "Registration Open";
      case "upcoming": return "Upcoming";
      case "ongoing": return "Ongoing";
      default: return "TBA";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "workshop": return "🔬";
      case "seminar": return "📚";
      case "grant": return "💰";
      case "competition": return "🏆";
      default: return "📅";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Upcoming Research Events
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Stay updated with the latest research opportunities, workshops, seminars, and competitions
          </p>
          <Badge variant="outline" className="text-lg px-4 py-2">
            <Calendar className="w-4 h-4 mr-2" />
            2025 Academic Year
          </Badge>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                {upcomingEvents.length}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Events</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                {upcomingEvents.filter(e => e.status === "registration-open").length}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Open for Registration</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {upcomingEvents.filter(e => e.category === "workshop").length}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Workshops</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                {upcomingEvents.filter(e => e.category === "grant").length}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Grant Opportunities</p>
            </CardContent>
          </Card>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="flex items-center gap-2"
            >
              {category.label}
              <Badge variant="secondary" className="ml-1">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6">
            {filteredEvents.map((event, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="md:flex">
                  {event.image && (
                    <div className="md:w-1/3">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                  )}
                  <div className={`${event.image ? 'md:w-2/3' : 'w-full'} p-6`}>
                    <CardHeader className="p-0 mb-4">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{getCategoryIcon(event.category)}</span>
                          <Badge className={getStatusColor(event.status)}>
                            {getStatusText(event.status)}
                          </Badge>
                        </div>
                        <Badge variant="outline" className="capitalize">
                          {event.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                      <CardDescription className="text-base">{event.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <Calendar className="w-4 h-4" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <Clock className="w-4 h-4" />
                          {event.duration}
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        {event.status === "registration-open" && (
                          <Button className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            Register Now
                          </Button>
                        )}
                        <Button variant="outline" className="flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          Learn More
                        </Button>
                        {event.link.startsWith("http") && (
                          <Button variant="outline" size="sm" className="flex items-center gap-2">
                            <ExternalLink className="w-4 h-4" />
                            External Link
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="mt-12">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <Megaphone className="w-6 h-6" />
              Stay Updated
            </CardTitle>
            <CardDescription>
              Don't miss out on any research opportunities or events
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                Subscribe to our newsletter or follow our announcements to get notified about new events and opportunities.
              </p>
              <div className="flex justify-center gap-4">
                <Button className="flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Subscribe to Updates
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Download Calendar
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UpcomingEvents;