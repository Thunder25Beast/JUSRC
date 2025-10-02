import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Search, ExternalLink, Award, Microscope, Lightbulb, Heart, Users } from "lucide-react";
import { Link } from "wouter";

const documentCategories = [
  {
    id: "gj-straus",
    title: "GJ STRAUS Documents",
    description: "Application forms, guidelines, sample proposals, and research templates for GJ STRAUS grants",
    icon: Award,
    href: "/documents/gj-straus",
    docCount: 12,
    color: "blue",
    lastUpdated: "January 2025"
  },
  {
    id: "icmr",
    title: "ICMR Documents",
    description: "ICMR STS application forms, fellowship guidelines, research protocols, and submission requirements",
    icon: Microscope,
    href: "/documents/icmr",
    docCount: 18,
    color: "green",
    lastUpdated: "December 2024"
  },
  {
    id: "independent",
    title: "Independent Research Documents",
    description: "Research proposal templates, methodology guides, ethics approval forms, and publication guidelines",
    icon: Lightbulb,
    href: "/documents/independent-projects",
    docCount: 15,
    color: "purple",
    lastUpdated: "January 2025"
  },
  {
    id: "iap",
    title: "IAP Grant Documents",
    description: "IAP application forms, research guidelines for pediatric studies, and funding documentation",
    icon: Heart,
    href: "/documents/iap",
    docCount: 8,
    color: "pink",
    lastUpdated: "November 2024"
  },
  {
    id: "iec",
    title: "IEC Committee Documents",
    description: "Ethics committee forms, approval processes, research protocols, and compliance guidelines",
    icon: Users,
    href: "/documents/iec",
    docCount: 22,
    color: "indigo",
    lastUpdated: "January 2025"
  }
];

const stats = {
  totalDocuments: 75,
  downloads: 2850,
  categories: 5,
  monthlyUpdates: 12
};

export default function DocumentVaultPage() {
  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
      green: "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
      purple: "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
      pink: "from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700",
      indigo: "from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Document Vault
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Access comprehensive research documentation, application forms, guidelines, and templates 
            organized by research opportunity and committee. Everything you need for your research journey 
            in one centralized location.
          </p>
          <div className="flex justify-center gap-4">
            <Badge variant="outline" className="text-lg px-4 py-2">
              <FileText className="w-4 h-4 mr-2" />
              {stats.totalDocuments} Documents
            </Badge>
            <Badge variant="outline" className="text-lg px-4 py-2">
              <Download className="w-4 h-4 mr-2" />
              {stats.downloads}+ Downloads
            </Badge>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <FileText className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{stats.totalDocuments}</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Documents</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Download className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{stats.downloads}+</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Downloads</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Search className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{stats.categories}</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Categories</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <ExternalLink className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{stats.monthlyUpdates}+</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Monthly Updates</p>
            </CardContent>
          </Card>
        </div>

        {/* Document Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {documentCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center justify-between">
                    <div className="flex items-center">
                      <Icon className="w-6 h-6 mr-3 text-gray-700 dark:text-gray-300" />
                      {category.title}
                    </div>
                    <Badge variant="outline" className="ml-2">
                      {category.docCount} docs
                    </Badge>
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-300">
                    {category.description}
                  </p>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Last updated: {category.lastUpdated}</span>
                      <span className="text-gray-500">{category.docCount} documents</span>
                    </div>

                    <Link href={category.href}>
                      <Button 
                        className={`w-full bg-gradient-to-r ${getColorClasses(category.color)} text-white border-0 transition-all duration-300`}
                      >
                        Browse Documents
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-slate-600 to-gray-600 text-white">
          <CardContent className="py-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help Finding Documents?</h2>
            <p className="text-xl mb-8 opacity-90">
              Can't find what you're looking for? Use our search feature or contact the research support team for assistance.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" variant="secondary">
                <Search className="w-5 h-5 mr-2" />
                Search All Documents
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-600">
                <FileText className="w-5 h-5 mr-2" />
                Request Documents
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}