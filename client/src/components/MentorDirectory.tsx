import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Mail, AlertCircle, CheckCircle } from "lucide-react";

export default function MentorDirectory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // TODO: Remove mock functionality - replace with real faculty database
  const mockFaculty = [
    "Dr. Rajesh Kumar",
    "Dr. Priya Sharma", 
    "Dr. Anil Gupta",
    "Dr. Meera Patel",
    "Dr. Suresh Reddy"
  ];

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setSearchResult("Please enter a faculty name");
      return;
    }

    setIsLoading(true);
    console.log('Searching for faculty:', searchQuery);

    // TODO: Remove mock functionality - implement real search
    setTimeout(() => {
      const isValidFaculty = mockFaculty.some(name => 
        name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (isValidFaculty) {
        setSearchResult("valid");
      } else {
        setSearchResult("invalid");
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Mentor Directory</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Search for JIPMER faculty contact information. Enter the faculty's full name as listed 
            on the JIPMER website to request their contact details.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-xl">Faculty Contact Request</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="faculty-search" className="text-sm font-medium text-foreground">
                  Faculty Name
                </label>
                <div className="relative">
                  <Input
                    id="faculty-search"
                    type="text"
                    placeholder="Enter faculty full name as listed in the JIPMER website"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="pr-12"
                    data-testid="input-faculty-search"
                  />
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-1 top-1/2 transform -translate-y-1/2"
                    onClick={handleSearch}
                    disabled={isLoading}
                    data-testid="button-search-faculty"
                  >
                    <Search className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Search Result */}
              {searchResult && (
                <div className={`p-4 rounded-lg border flex items-start space-x-3 ${
                  searchResult === "valid" 
                    ? "bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800" 
                    : searchResult === "invalid"
                    ? "bg-red-50 border-red-200 dark:bg-red-950 dark:border-red-800"
                    : "bg-yellow-50 border-yellow-200 dark:bg-yellow-950 dark:border-yellow-800"
                }`}>
                  {searchResult === "valid" && (
                    <>
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-green-800 dark:text-green-200 font-medium">
                          Request Submitted Successfully
                        </p>
                        <p className="text-green-700 dark:text-green-300 text-sm mt-1">
                          The requested contact will be sent to your registered email address.
                        </p>
                      </div>
                    </>
                  )}
                  {searchResult === "invalid" && (
                    <>
                      <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-red-800 dark:text-red-200 font-medium">
                          Faculty Name Invalid
                        </p>
                        <p className="text-red-700 dark:text-red-300 text-sm mt-1">
                          Please check the spelling and ensure you're using the full name as listed on the JIPMER website.
                        </p>
                      </div>
                    </>
                  )}
                  {searchResult !== "valid" && searchResult !== "invalid" && (
                    <>
                      <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                      <p className="text-yellow-800 dark:text-yellow-200">{searchResult}</p>
                    </>
                  )}
                </div>
              )}

              <Button
                onClick={handleSearch}
                disabled={isLoading || !searchQuery.trim()}
                className="w-full"
                data-testid="button-request-contact"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></div>
                    Searching...
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 mr-2" />
                    Request Contact Details
                  </>
                )}
              </Button>
            </div>

            {/* Information Section */}
            <div className="bg-muted/30 rounded-lg p-4 space-y-3">
              <h4 className="font-medium text-foreground flex items-center">
                <AlertCircle className="w-4 h-4 mr-2 text-orange" />
                Important Information
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Contact details will be sent to your registered JIPMER email (@jipmer.ac.in)</li>
                <li>• Maximum 2 contact requests allowed per day</li>
                <li>• Use the exact faculty name as listed on the official JIPMER website</li>
                <li>• Requests are processed automatically upon verification</li>
              </ul>
            </div>

            {/* TODO: Remove mock functionality - Sample Faculty List */}
            <div className="bg-card border border-card-border rounded-lg p-4">
              <h4 className="font-medium text-card-foreground mb-3">Sample Faculty Names (Demo)</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                {mockFaculty.map((name, index) => (
                  <button
                    key={index}
                    onClick={() => setSearchQuery(name)}
                    className="text-left hover:text-primary transition-colors cursor-pointer"
                    data-testid={`sample-faculty-${index}`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}