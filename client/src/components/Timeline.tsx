import { useState } from "react";
import { timelineEvents } from "@/data/content";
import { Link } from "wouter";

interface TimelineEvent {
  title: string;
  link: string;
  details?: string[];
  duration?: string;
}

interface TimelineMonth {
  month: string;
  events: TimelineEvent[];
}

export default function Timeline() {
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">Year in Review</h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-border"></div>
          
          {/* Timeline Events */}
          <div className="flex justify-between overflow-x-auto pb-4">
            {timelineEvents.map((month: TimelineMonth) => (
              <div key={month.month} className="flex flex-col items-center min-w-24">
                {/* Month Circle */}
                <div className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary-foreground font-semibold text-sm">
                    {month.month}
                  </span>
                </div>
                
                {/* Events */}
                <div className="space-y-2 min-h-32">
                  {month.events.map((event, index) => (
                    <div
                      key={index}
                      className="relative group"
                      onMouseEnter={() => setHoveredEvent(`${month.month}-${index}`)}
                      onMouseLeave={() => setHoveredEvent(null)}
                    >
                      <Link href={event.link || "#"}>
                        <div 
                          className="bg-card border border-card-border rounded-lg p-3 shadow-sm hover-elevate cursor-pointer max-w-48"
                          data-testid={`timeline-event-${month.month.toLowerCase()}-${index}`}
                        >
                          <h4 className="font-medium text-sm text-card-foreground leading-tight">
                            {event.title}
                          </h4>
                          {event.duration && (
                            <p className="text-xs text-orange mt-1 font-medium">
                              {event.duration}
                            </p>
                          )}
                        </div>
                      </Link>
                      
                      {/* Popup for additional details */}
                      {hoveredEvent === `${month.month}-${index}` && event.details && (
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 bg-popover border border-popover-border rounded-lg shadow-lg p-4 z-20">
                          <div className="space-y-2">
                            {event.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-sm text-popover-foreground">
                                {detail}
                              </p>
                            ))}
                          </div>
                          {/* Arrow */}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-popover-border"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}