import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { menuItems } from "@/data/content";
import { ChevronDown, Menu, X, Moon, Sun } from "lucide-react";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Function to check if a menu item or any of its submenu items is active
  const isMenuItemActive = (item: any) => {
    // Check if current location matches the main item href
    if (location === item.href) {
      return true;
    }
    
    // Check if current location matches any submenu item href
    if (item.submenu) {
      return item.submenu.some((subItem: any) => location === subItem.href);
    }
    
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-1 sm:px-2 lg:px-4">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-1 sm:gap-2">
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center space-x-1 group">
              {/* Logos */}
              <div className="flex items-center space-x-1">
                <img 
                  src="/attached_assets/jipmer-logo.png" 
                  alt="JIPMER Logo" 
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain group-hover:scale-105 transition-transform"
                />
                <img 
                  src="/attached_assets/JUSRC-LOGO.png" 
                  alt="JUSRC Logo" 
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              
              {/* Text - Responsive */}
              <div className="flex flex-col min-w-0">
                {/* Desktop and Large Tablet */}
                <div className="hidden lg:flex flex-col">
                  <span className="font-semibold text-sm text-foreground whitespace-nowrap">
                    JIPMER
                  </span>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    Undergraduate Scientific & Research Club
                  </span>
                </div>
                
                {/* Medium Tablet */}
                <div className="hidden md:flex lg:hidden flex-col">
                  <span className="font-semibold text-xs text-foreground whitespace-nowrap">
                    JIPMER
                  </span>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    Undergraduate Scientific & Research Club
                  </span>
                </div>
                
                {/* Mobile and Small Tablet */}
                <div className="flex flex-col md:hidden">
                  <span className="font-semibold text-xs text-foreground">JIPMER</span>
                  <span className="text-xs text-muted-foreground">JUSRC</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-4 flex-1 justify-center">
            {menuItems.map((item) => (
              <div key={item.title} className="relative">
                {item.submenu ? (
                  <div 
                    className="relative group"
                    onMouseEnter={() => setOpenDropdown(item.title)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Button
                      variant="ghost"
                      className={`flex items-center space-x-1 text-foreground hover:text-primary text-xs xl:text-sm px-1 xl:px-2 ${
                        isMenuItemActive(item) ? 'text-primary bg-primary/10' : ''
                      }`}
                      data-testid={`nav-${item.title.toLowerCase().replace(/ /g, '-')}`}
                    >
                      <span>{item.title}</span>
                      <ChevronDown className="w-3 h-3" />
                    </Button>
                    
                    {openDropdown === item.title && (
                      <div className="absolute top-full left-0 w-48 bg-popover border border-popover-border rounded-md shadow-lg py-1 z-50">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-150"
                            data-testid={`nav-sub-${subItem.title.toLowerCase().replace(/ /g, '-')}`}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link href={item.href}>
                    <Button
                      variant="ghost"
                      className={`text-foreground hover:text-primary text-xs xl:text-sm px-1 xl:px-2 ${
                        isMenuItemActive(item) ? 'text-primary bg-primary/10' : ''
                      }`}
                      data-testid={`nav-${item.title.toLowerCase().replace(/ /g, '-')}`}
                    >
                      {item.title}
                    </Button>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              data-testid="button-theme-toggle"
              className="w-8 h-8 sm:w-10 sm:h-10"
            >
              {darkMode ? <Sun className="w-3 h-3 sm:w-4 sm:h-4" /> : <Moon className="w-3 h-3 sm:w-4 sm:h-4" />}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden w-8 h-8 sm:w-10 sm:h-10"
              onClick={() => setMobileOpen(!mobileOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileOpen ? <X className="w-3 h-3 sm:w-4 sm:h-4" /> : <Menu className="w-3 h-3 sm:w-4 sm:h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <div key={item.title}>
                  {item.submenu ? (
                    <div>
                      <Button
                        variant="ghost"
                        className={`w-full justify-start text-foreground ${
                          isMenuItemActive(item) ? 'text-primary bg-primary/10' : ''
                        }`}
                        onClick={() => setOpenDropdown(openDropdown === item.title ? null : item.title)}
                        data-testid={`mobile-nav-${item.title.toLowerCase().replace(/ /g, '-')}`}
                      >
                        <span className="flex-1 text-left">{item.title}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${
                          openDropdown === item.title ? 'rotate-180' : ''
                        }`} />
                      </Button>
                      {openDropdown === item.title && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              onClick={() => setMobileOpen(false)}
                            >
                              <Button
                                variant="ghost"
                                className="w-full justify-start text-sm text-muted-foreground"
                                data-testid={`mobile-nav-sub-${subItem.title.toLowerCase().replace(/ /g, '-')}`}
                              >
                                {subItem.title}
                              </Button>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link href={item.href} onClick={() => setMobileOpen(false)}>
                      <Button
                        variant="ghost"
                        className={`w-full justify-start text-foreground ${
                          isMenuItemActive(item) ? 'text-primary bg-primary/10' : ''
                        }`}
                        data-testid={`mobile-nav-${item.title.toLowerCase().replace(/ /g, '-')}`}
                      >
                        {item.title}
                      </Button>
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}