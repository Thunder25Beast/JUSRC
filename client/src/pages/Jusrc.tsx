import { useEffect, useState } from "react";
import { aboutSections, overviewItems } from "@/data/content";
import { ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Jusrc() {
  const [expandedSection, setExpandedSection] = useState<string>("founding");
  const [hoveredOverview, setHoveredOverview] = useState<string | null>(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSectionToggle = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? "" : sectionId);
  };

  const centerX = 250;
  const centerY = 250;
  const radius = 140;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About JUSRC
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            JIPMER Undergraduate Students' Research Club - Fostering research excellence and innovation
          </p>
        </div>

        {/* Expandable Sections */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="space-y-4">
            {aboutSections.map((section) => (
              <Card
                key={section.id}
                className="overflow-hidden hover-elevate transition-all duration-200"
              >
                <Button
                  variant="ghost"
                  className="w-full p-6 justify-between hover:bg-accent rounded-none"
                  onClick={() => handleSectionToggle(section.id)}
                  data-testid={`about-section-${section.id}`}
                >
                  <span className="font-semibold text-lg text-card-foreground">
                    {section.title}
                  </span>
                  {expandedSection === section.id ? (
                    <ChevronDown className="w-5 h-5 text-primary transition-transform" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-muted-foreground transition-transform" />
                  )}
                </Button>
                
                {expandedSection === section.id && (
                  <CardContent className="px-6 pb-6 pt-2 bg-muted/30">
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-muted-foreground flex items-start space-x-3"
                        >
                          <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></span>
                          <span className="flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Spider Diagram - Centered */}
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Overview</h2>
          <p className="text-muted-foreground mb-12 text-center max-w-2xl">
            Explore our key initiatives and programs that drive research excellence
          </p>
          
          {/* Reserve space for mobile description to prevent layout shift */}
          <div className="lg:hidden mb-8 w-full max-w-md mx-auto px-4">
            <div className="h-32 flex items-center justify-center">
              {hoveredOverview ? (
                <Card className="w-full shadow-xl border-primary/20 animate-in fade-in duration-200">
                  <CardContent className="p-6">
                    {(() => {
                      const hoveredItem = overviewItems.find(item => item.id === hoveredOverview);
                      return (
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-primary-foreground font-bold text-sm">
                              {hoveredItem?.title.split(' ')[0].charAt(0)}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-card-foreground mb-2">
                              {hoveredItem?.title}
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                              {hoveredItem?.description}
                            </p>
                          </div>
                        </div>
                      );
                    })()}
                  </CardContent>
                </Card>
              ) : (
                <p className="text-sm text-muted-foreground text-center">
                  Tap on any circle to learn more
                </p>
              )}
            </div>
          </div>
          
          <div className="relative w-full max-w-4xl mx-auto flex justify-center">
            <div className="relative inline-block">
              <svg 
                width="100%" 
                height="100%" 
                viewBox="0 0 500 500" 
                className="w-full h-auto max-w-[400px] sm:max-w-[450px] lg:max-w-[500px]"
                style={{ minHeight: '400px' }}
              >
                {/* Background circle */}
                <circle
                  cx={centerX}
                  cy={centerY}
                  r={radius + 20}
                  fill="hsl(var(--muted))"
                  opacity="0.2"
                />
                
                {/* Overview Items */}
                {overviewItems.map((item, index) => {
                  const angle = (index * 2 * Math.PI) / overviewItems.length - Math.PI / 2;
                  const x = centerX + radius * Math.cos(angle);
                  const y = centerY + radius * Math.sin(angle);
                  const isHovered = hoveredOverview === item.id;
                  
                  return (
                    <g key={item.id}>
                      {/* Connection Line */}
                      <line
                        x1={centerX}
                        y1={centerY}
                        x2={x}
                        y2={y}
                        stroke={isHovered ? "hsl(var(--primary))" : "hsl(var(--border))"}
                        strokeWidth={isHovered ? "3" : "2"}
                        className="transition-all duration-300"
                        opacity={isHovered ? "0.8" : "0.5"}
                      />
                      
                      {/* Item Circle - Bigger */}
                      <circle
                        cx={x}
                        cy={y}
                        r="40"
                        fill={isHovered ? "hsl(var(--primary))" : "hsl(var(--card))"}
                        stroke={isHovered ? "hsl(var(--primary))" : "hsl(var(--border))"}
                        strokeWidth="2"
                        className="hidden lg:block cursor-pointer transition-all duration-300 drop-shadow-md"
                        onMouseEnter={() => setHoveredOverview(item.id)}
                        onMouseLeave={() => setHoveredOverview(null)}
                        data-testid={`overview-item-${item.id}`}
                      />
                      
                      {/* Mobile/Tablet Circle - Click to toggle */}
                      <circle
                        cx={x}
                        cy={y}
                        r="40"
                        fill={isHovered ? "hsl(var(--primary))" : "hsl(var(--card))"}
                        stroke={isHovered ? "hsl(var(--primary))" : "hsl(var(--border))"}
                        strokeWidth="2"
                        className="lg:hidden cursor-pointer transition-all duration-300 drop-shadow-md"
                        onClick={() => setHoveredOverview(hoveredOverview === item.id ? null : item.id)}
                        data-testid={`overview-item-${item.id}`}
                      />
                      
                      {/* Item Label - Split text for better fit */}
                      <text
                        x={x}
                        y={y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className={`font-semibold text-[11px] pointer-events-none transition-colors duration-300 ${
                          isHovered ? 'fill-primary-foreground' : 'fill-card-foreground'
                        }`}
                      >
                        {item.title.split(' ').map((word, i) => (
                          <tspan key={i} x={x} dy={i === 0 ? 0 : 13}>
                            {word}
                          </tspan>
                        ))}
                      </text>
                    </g>
                  );
                })}
                
                {/* Center Circle */}
                <circle
                  cx={centerX}
                  cy={centerY}
                  r="65"
                  fill="hsl(var(--primary))"
                  className="drop-shadow-xl"
                />
                <text
                  x={centerX}
                  y={centerY - 5}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-primary-foreground font-bold text-xl"
                >
                  JUSRC
                </text>
                <text
                  x={centerX}
                  y={centerY + 15}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-primary-foreground/80 font-medium text-sm"
                >
                  Overview
                </text>
              </svg>
              
              {/* Description Card - Desktop only, smart positioning left/right */}
              {hoveredOverview && (
                (() => {
                  const hoveredIndex = overviewItems.findIndex(item => item.id === hoveredOverview);
                  const angle = (hoveredIndex * 2 * Math.PI) / overviewItems.length - Math.PI / 2;
                  const x = centerX + radius * Math.cos(angle);
                  const y = centerY + radius * Math.sin(angle);
                  
                  // Determine position based on node location
                  const isLeft = x < centerX;
                  const hoveredItem = overviewItems.find(item => item.id === hoveredOverview);
                  
                  return (
                    <div 
                      className={`hidden lg:block absolute z-20 bg-popover border border-popover-border rounded-lg shadow-xl p-4 w-64 ${
                        isLeft ? 'right-full mr-4' : 'left-full ml-4'
                      }`}
                      style={{
                        top: `${(y / 500) * 100}%`,
                        transform: 'translateY(-50%)'
                      }}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-primary-foreground font-bold text-xs">
                            {hoveredItem?.title.split(' ')[0].charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-popover-foreground mb-1 text-sm">
                            {hoveredItem?.title}
                          </h4>
                          <p className="text-xs text-popover-foreground/80 leading-relaxed">
                            {hoveredItem?.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })()
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

