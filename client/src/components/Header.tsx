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

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">J</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-sm text-foreground">JIPMER</span>
                <span className="text-xs text-muted-foreground">Undergraduate Scientific and Research Club</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.title} className="relative">
                {item.submenu ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.title)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Button
                      variant="ghost"
                      className="flex items-center space-x-1 text-foreground hover:text-primary"
                      data-testid={`nav-${item.title.toLowerCase().replace(/ /g, '-')}`}
                    >
                      <span>{item.title}</span>
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                    
                    {openDropdown === item.title && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-popover border border-popover-border rounded-md shadow-lg py-1 z-50">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground"
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
                      className={`text-foreground hover:text-primary ${
                        location === item.href ? 'text-primary' : ''
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
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              data-testid="button-theme-toggle"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
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
                        className="w-full justify-start text-foreground"
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
                          location === item.href ? 'text-primary' : ''
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