import { useState } from "react";
import { aboutSections, overviewItems } from "@/data/content";
import { ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  const [expandedSection, setExpandedSection] = useState<string>("founding");
  const [hoveredOverview, setHoveredOverview] = useState<string | null>(null);

  const handleSectionToggle = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? "" : sectionId);
    console.log('Section toggled:', sectionId);
  };

  const centerX = 200;
  const centerY = 200;
  const radius = 120;

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-foreground mb-16">About JUSRC</h2>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Expandable Sections */}
          <div className="space-y-4">
            {aboutSections.map((section, index) => (
              <div
                key={section.id}
                className="bg-card border border-card-border rounded-lg overflow-hidden"
              >
                <Button
                  variant="ghost"
                  className="w-full p-6 justify-between hover:bg-accent"
                  onClick={() => handleSectionToggle(section.id)}
                  data-testid={`about-section-${section.id}`}
                >
                  <span className="font-semibold text-lg text-card-foreground">
                    {section.title}
                  </span>
                  {expandedSection === section.id ? (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  )}
                </Button>
                
                {expandedSection === section.id && (
                  <div className="px-6 pb-6 pt-2">
                    <ul className="space-y-2">
                      {section.content.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-muted-foreground flex items-start space-x-2"
                        >
                          <span className="w-2 h-2 bg-orange rounded-full flex-shrink-0 mt-2"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Interactive Overview Spider Diagram */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold text-foreground mb-8">Overview</h3>
            
            <div className="relative">
              <svg width="400" height="400" viewBox="0 0 400 400" className="overflow-visible">
                {/* Center Circle */}
                <circle
                  cx={centerX}
                  cy={centerY}
                  r="45"
                  fill="hsl(var(--primary))"
                  className="drop-shadow-md"
                />
                <text
                  x={centerX}
                  y={centerY}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-primary-foreground font-bold text-sm"
                >
                  JUSRC
                </text>
                
                {/* Overview Items */}
                {overviewItems.map((item, index) => {
                  const angle = (index * 2 * Math.PI) / overviewItems.length - Math.PI / 2;
                  const x = centerX + radius * Math.cos(angle);
                  const y = centerY + radius * Math.sin(angle);
                  
                  return (
                    <g key={item.id}>
                      {/* Connection Line */}
                      <line
                        x1={centerX}
                        y1={centerY}
                        x2={x}
                        y2={y}
                        stroke="hsl(var(--border))"
                        strokeWidth="2"
                      />
                      
                      {/* Item Circle */}
                      <circle
                        cx={x}
                        cy={y}
                        r="25"
                        fill={hoveredOverview === item.id ? "hsl(var(--chart-2))" : "hsl(var(--card))"}
                        stroke="hsl(var(--card-border))"
                        strokeWidth="2"
                        className="cursor-pointer transition-all duration-200 drop-shadow-sm"
                        onMouseEnter={() => setHoveredOverview(item.id)}
                        onMouseLeave={() => setHoveredOverview(null)}
                        data-testid={`overview-item-${item.id}`}
                      />
                      
                      {/* Item Label */}
                      <text
                        x={x}
                        y={y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className={`font-semibold text-xs pointer-events-none ${
                          hoveredOverview === item.id ? 'fill-white' : 'fill-card-foreground'
                        }`}
                      >
                        {item.title.split(' ')[0]}
                      </text>
                    </g>
                  );
                })}
              </svg>
              
              {/* Item Description */}
              {hoveredOverview && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-80 bg-popover border border-popover-border rounded-lg shadow-lg p-4 z-20">
                  <h4 className="font-semibold text-popover-foreground mb-2">
                    {overviewItems.find(item => item.id === hoveredOverview)?.title}
                  </h4>
                  <p className="text-sm text-popover-foreground">
                    {overviewItems.find(item => item.id === hoveredOverview)?.description}
                  </p>
                </div>
              )}
            </div>
            
            {/* Mobile Overview List */}
            <div className="md:hidden mt-8 w-full grid gap-3">
              {overviewItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-card border border-card-border rounded-lg p-4 hover-elevate"
                  data-testid={`overview-card-${item.id}`}
                >
                  <h4 className="font-semibold text-card-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}