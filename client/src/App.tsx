import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import ResearchOpportunities from "@/pages/ResearchOpportunities";
import DocumentVaultPage from "@/pages/DocumentVaultPage";
import MentorDirectoryPage from "@/pages/MentorDirectoryPage";
import UgrmcIec from "@/pages/UgrmcIec";
import Proposal101 from "@/pages/Proposal101";
import NotFound from "@/pages/not-found";

// Research Pages
import GjStraus from "@/pages/research/GjStraus";
import IcmrPage from "@/pages/research/IcmrPage";
import IndependentProjects from "@/pages/research/IndependentProjects";
import IapPage from "@/pages/research/IapPage";
import UpcomingEvents from "@/pages/research/UpcomingEvents";

// Document Pages
import GjStrausDocuments from "@/pages/documents/GjStrausDocuments";
import IcmrDocuments from "@/pages/documents/IcmrDocuments";
import IndependentProjectsDocuments from "@/pages/documents/IndependentProjectsDocuments";
import IapDocuments from "@/pages/documents/IapDocuments";
import IecDocuments from "@/pages/documents/IecDocuments";

// Committee Pages
import UgrmcPage from "@/pages/committees/UgrmcPage";
import IecPage from "@/pages/committees/IecPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      
      {/* Main Overview Pages */}
      <Route path="/research-opportunities" component={ResearchOpportunities} />
      <Route path="/document-vault" component={DocumentVaultPage} />
      <Route path="/ugrmc-iec" component={UgrmcIec} />
      
      {/* Research Opportunity Specific Pages */}
      <Route path="/research-opportunities/gj-straus" component={GjStraus} />
      <Route path="/research-opportunities/icmr" component={IcmrPage} />
      <Route path="/research-opportunities/independent-projects" component={IndependentProjects} />
      <Route path="/research-opportunities/iap" component={IapPage} />
      <Route path="/research-opportunities/upcoming-events" component={UpcomingEvents} />
      
      {/* Document Specific Pages */}
      <Route path="/documents/gj-straus" component={GjStrausDocuments} />
      <Route path="/documents/icmr" component={IcmrDocuments} />
      <Route path="/documents/independent-projects" component={IndependentProjectsDocuments} />
      <Route path="/documents/iap" component={IapDocuments} />
      <Route path="/documents/iec" component={IecDocuments} />
      
      {/* Committee Specific Pages */}
      <Route path="/committees/ugrmc" component={UgrmcPage} />
      <Route path="/committees/iec" component={IecPage} />
      
      {/* Other Pages */}
      <Route path="/mentor-directory" component={MentorDirectoryPage} />
      <Route path="/proposal-101" component={Proposal101} />
      
      {/* 404 Page */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      return saved ? JSON.parse(saved) : false;
    }
    return false;
  });

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className={`min-h-screen bg-background text-foreground ${darkMode ? 'dark' : ''}`}>
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;