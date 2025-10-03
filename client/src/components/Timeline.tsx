import { useState, useRef, useEffect } from "react";
import { timelineEvents } from "@/data/content";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";

interface TimelineEvent {
  title: string;
  link: string;
  details?: string[];
  duration?: string;
  image?: string;
  links?: Array<{
    title: string;
    url: string;
  }>;
}

interface TimelineMonth {
  month: string;
  events: TimelineEvent[];
}

export default function Timeline() {
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const toggleEventDetails = (eventId: string) => {
    setExpandedEvent(expandedEvent === eventId ? null : eventId);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const handleResize = () => checkScrollButtons();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-center text-foreground mb-4">Year in Review</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our journey through the year with key milestones, events, and achievements.
          </p>
        </div>

        {/* Scroll Navigation */}
        <div className="relative">
          {/* Left Scroll Button */}
          {canScrollLeft && (
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background"
              onClick={scrollLeft}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
          )}

          {/* Right Scroll Button */}
          {canScrollRight && (
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background"
              onClick={scrollRight}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          )}

          {/* Scrollable Timeline Container */}
          <div 
            ref={scrollContainerRef}
            className="timeline-scroll overflow-x-auto overflow-y-visible pb-4"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none'
            }}
            onScroll={checkScrollButtons}
          >
            <div className="flex gap-8 pb-4 min-w-max px-12">
              {timelineEvents.map((month, monthIndex) => (
                <div 
                  key={month.month} 
                  className="relative flex-shrink-0 w-64"
                >
                  {/* Timeline Line */}
                  {monthIndex < timelineEvents.length - 1 && (
                    <div className="absolute top-8 left-full w-8 h-0.5 bg-border z-0"></div>
                  )}
                  
                  {/* Month Header */}
                  <div className="relative mb-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full shadow-lg mx-auto mb-2 relative z-10">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <span className="block text-center font-semibold text-lg text-foreground">
                      {month.month}
                    </span>
                  </div>
                  
                  {/* Events */}
                  <div className="space-y-3 min-h-32">
                    {month.events.map((event, index) => {
                      const eventId = `${month.month}-${index}`;
                      const eventTyped = event as any; // Type assertion for dynamic properties
                      const hasDetails = eventTyped.details && eventTyped.details.length > 0;
                      const hasLinks = eventTyped.links && eventTyped.links.length > 0;
                      const isExpanded = expandedEvent === eventId;
                      
                      return (
                        <div key={index} className="relative group">
                          {/* Main Event Card */}
                          <div className="bg-card border border-card-border rounded-lg shadow-sm hover:shadow-md transition-all duration-200 w-full">
                            {/* Event Image and Title */}
                            <div className="p-3">
                              {event.image && (
                                <img 
                                  src={event.image} 
                                  alt={event.title}
                                  className="w-full h-20 object-cover rounded mb-2"
                                />
                              )}
                              <h4 className="font-medium text-sm text-card-foreground leading-tight mb-2">
                                {event.title}
                              </h4>
                              {eventTyped.duration && (
                                <Badge variant="outline" className="text-xs mb-2">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {eventTyped.duration}
                                </Badge>
                              )}
                              
                              {/* Action Buttons */}
                              <div className="flex flex-wrap gap-1 mt-2">
                                {event.link && event.link !== "#" && (
                                  <Link href={event.link}>
                                    <Button size="sm" variant="outline" className="text-xs h-7">
                                      View Details
                                    </Button>
                                  </Link>
                                )}
                                
                                {(hasDetails || hasLinks) && (
                                  <Button 
                                    size="sm" 
                                    variant="ghost" 
                                    className="text-xs h-7"
                                    onClick={() => toggleEventDetails(eventId)}
                                  >
                                    {isExpanded ? 'Hide Info' : 'More Info'}
                                  </Button>
                                )}
                              </div>
                            </div>
                            
                            {/* Expandable Details Section */}
                            {isExpanded && (hasDetails || hasLinks) && (
                              <div className="border-t border-card-border p-3 bg-muted/30">
                                {/* Session Details */}
                                {hasDetails && (
                                  <div className="mb-3">
                                    <h5 className="text-xs font-medium text-muted-foreground mb-2">Session Details:</h5>
                                    <div className="space-y-1">
                                      {eventTyped.details!.map((detail: string, detailIndex: number) => (
                                        <p key={detailIndex} className="text-xs text-card-foreground leading-relaxed">
                                          • {detail}
                                        </p>
                                      ))}
                                    </div>
                                  </div>
                                )}
                                
                                {/* YouTube Links */}
                                {hasLinks && (
                                  <div>
                                    <h5 className="text-xs font-medium text-muted-foreground mb-2">Watch Sessions:</h5>
                                    <div className="space-y-1">
                                      {eventTyped.links!.map((link: any, linkIndex: number) => (
                                        <a 
                                          key={linkIndex}
                                          href={link.url} 
                                          target="_blank" 
                                          rel="noopener noreferrer"
                                          className="flex items-center text-xs text-primary hover:text-primary/80 hover:underline group/link"
                                        >
                                          <svg className="w-3 h-3 mr-2 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                          </svg>
                                          <span className="flex-1">{link.title}</span>
                                          <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                                        </a>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-4 space-x-2">
            <div className="flex items-center text-xs text-muted-foreground">
              <ChevronLeft className="w-3 h-3 mr-1" />
              Scroll to explore timeline
              <ChevronRight className="w-3 h-3 ml-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}