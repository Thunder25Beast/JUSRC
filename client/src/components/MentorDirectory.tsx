import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Search, Mail, AlertCircle, CheckCircle, Info } from "lucide-react";

export default function MentorDirectory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState<"valid" | "invalid" | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [requestCount, setRequestCount] = useState(0);
  const maxRequestsPerDay = 2;

  // Mock faculty database - Replace with actual JIPMER faculty list
  const mockFaculty = [
    "Dr. Rakesh Aggarwal",
    "Dr. Subitha Lakshminarayanan",
    "Dr. Prasanth Ganesan",
    "Dr. Nishad Plakkal",
    "Dr. Sunil K. Narayan",
    "Dr. Vikas Menon"
  ];

  const handleSearch = () => {
    // Validate empty input
    if (!searchQuery.trim()) {
      return;
    }

    // Check daily limit
    if (requestCount >= maxRequestsPerDay) {
      return;
    }

    setIsLoading(true);

    // Simulate API call - Replace with actual backend validation
    setTimeout(() => {
      const isValidFaculty = mockFaculty.some(name => 
        name.toLowerCase() === searchQuery.trim().toLowerCase()
      );

      if (isValidFaculty) {
        setSearchResult("valid");
        setRequestCount(prev => prev + 1);
        // TODO: Backend will send email here
      } else {
        setSearchResult("invalid");
      }
      setIsLoading(false);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const remainingRequests = maxRequestsPerDay - requestCount;
  const canMakeRequest = requestCount < maxRequestsPerDay;

  return (
    <section className="py-16 bg-gradient-to-br from-background via-muted/10 to-background min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Faculty Directory
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Search and request faculty contact information
          </p>
        </div>

        {/* Info Card */}
        <Alert className="mb-8 max-w-2xl mx-auto border-primary/20 bg-primary/5">
          <Info className="h-4 w-4 text-primary" />
          <AlertDescription className="text-sm text-muted-foreground">
            Enter the faculty's full name exactly as listed on the JIPMER website. 
            You can request up to <span className="font-semibold text-foreground">{maxRequestsPerDay} contacts per day</span>.
          </AlertDescription>
        </Alert>

        {/* Daily Limit Counter */}
        <div className="max-w-2xl mx-auto mb-6 text-center">
          <p className="text-sm text-muted-foreground">
            Requests remaining today: <span className="font-semibold text-foreground">{remainingRequests}</span> / {maxRequestsPerDay}
          </p>
        </div>

        {/* Search Card */}
        <Card className="max-w-2xl mx-auto shadow-xl">
          <CardContent className="p-8">
            {/* Search Input */}
            <div className="space-y-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Enter Faculty full name as listed in the JIPMER website"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setSearchResult(null);
                  }}
                  onKeyPress={handleKeyPress}
                  disabled={!canMakeRequest || isLoading}
                  className="pl-10 h-12 text-base"
                />
              </div>

              <Button
                onClick={handleSearch}
                disabled={!searchQuery.trim() || !canMakeRequest || isLoading}
                className="w-full h-12 text-base"
                size="lg"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                    Searching...
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5 mr-2" />
                    Request Contact
                  </>
                )}
              </Button>

              {/* Daily Limit Reached */}
              {!canMakeRequest && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    You have reached your daily limit of {maxRequestsPerDay} contact requests. 
                    Please try again tomorrow.
                  </AlertDescription>
                </Alert>
              )}

              {/* Search Results */}
              {searchResult === "valid" && (
                <Alert className="border-green-500/50 bg-green-500/10">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-700 dark:text-green-400 font-medium">
                    Success! The requested contact will be sent to your registered email address.
                  </AlertDescription>
                </Alert>
              )}

              {searchResult === "invalid" && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Name is invalid. Please ensure you've entered the faculty name exactly as listed on the JIPMER website.
                  </AlertDescription>
                </Alert>
              )}
            </div>

            {/* Help Section */}
            <div className="mt-8 pt-6 border-t border-border">
              <h3 className="font-semibold text-card-foreground mb-3 flex items-center">
                <Mail className="w-4 h-4 mr-2 text-primary" />
                How it works
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                  <span>Search for faculty by their full name as listed on the JIPMER website</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                  <span>Contact details will be sent to your registered @jipmer.ac.in email address</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                  <span>Limited to {maxRequestsPerDay} requests per day</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                  <span>Ensure accurate spelling for successful requests</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Sample Faculty List - For Testing (Remove in production) */}
        <Card className="max-w-2xl mx-auto mt-8 border-dashed">
          <CardContent className="p-6">
            <p className="text-xs text-muted-foreground mb-3 font-semibold">
              Sample Faculty Names (For Testing):
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {mockFaculty.map((name, index) => (
                <button
                  key={index}
                  onClick={() => setSearchQuery(name)}
                  className="text-xs text-left px-3 py-2 bg-muted/50 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors"
                >
                  {name}
                </button>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-3 italic">
              Click any name to auto-fill the search box
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}