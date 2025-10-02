import { Link } from "wouter";
import { Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* JUSRC Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/attached_assets/jipmer-logo.png" 
                alt="JIPMER Logo" 
                className="w-8 h-8 object-contain"
              />
              <img 
                src="/attached_assets/JUSRC-LOGO.png" 
                alt="JUSRC Logo" 
                className="w-8 h-8 object-contain"
              />
              <div>
                <h3 className="font-semibold text-foreground">JUSRC</h3>
                <p className="text-xs text-muted-foreground">Research Community</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              JIPMER Undergraduate Scientific and Research Club - fostering innovation 
              and research excellence among undergraduate students.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About JUSRC
              </Link>
              <Link href="/research-opportunities" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Research Opportunities
              </Link>
              <Link href="/document-vault" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Document Vault
              </Link>
              <Link href="/mentor-directory" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Mentor Directory
              </Link>
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Resources</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/ugrmc-iec" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                UGRMC & IEC
              </Link>
              <Link href="/proposal-101" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Proposal 101
              </Link>
              <a 
                href="https://incubate2025.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center space-x-1"
              >
                <span>InCubate 2025</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">contact@jusrc.jipmer.ac.in</span>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>JIPMER Campus</p>
                <p>Puducherry, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} JIPMER Undergraduate Scientific and Research Club. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}