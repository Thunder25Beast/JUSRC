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
              <svg 
                width="350" 
                height="350" 
                viewBox="0 0 400 400" 
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg overflow-visible"
              >
                {/* Background circle */}
                <circle
                  cx={centerX}
                  cy={centerY}
                  r={radius + 15}
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
                        className="transition-all duration-200"
                        opacity={isHovered ? "0.8" : "0.5"}
                      />
                      
                      {/* Item Circle */}
                      <circle
                        cx={x}
                        cy={y}
                        r="28"
                        fill={isHovered ? "hsl(var(--primary))" : "hsl(var(--card))"}
                        stroke={isHovered ? "hsl(var(--primary))" : "hsl(var(--border))"}
                        strokeWidth="2"
                        className="cursor-pointer transition-colors duration-200"
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
                        className={`font-semibold text-xs pointer-events-none transition-colors duration-200 ${
                          isHovered ? 'fill-primary-foreground' : 'fill-card-foreground'
                        }`}
                      >
                        {item.title.split(' ')[0]}
                      </text>
                    </g>
                  );
                })}
                
                {/* Center Circle */}
                <circle
                  cx={centerX}
                  cy={centerY}
                  r="55"
                  fill="hsl(var(--primary))"
                  className="drop-shadow-lg"
                />
                <text
                  x={centerX}
                  y={centerY - 3}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-primary-foreground font-bold text-base"
                >
                  JUSRC
                </text>
                <text
                  x={centerX}
                  y={centerY + 12}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-primary-foreground/80 font-medium text-xs"
                >
                  Overview
                </text>
              </svg>
              
              {/* Smart Item Description Tooltip */}
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
                      className={`absolute z-20 bg-popover border border-popover-border rounded-lg shadow-lg p-4 w-64 ${
                        isLeft ? 'right-full mr-4' : 'left-full ml-4'
                      }`}
                      style={{
                        top: `${(y / 400) * 100}%`,
                        transform: 'translateY(-50%)'
                      }}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-primary-foreground font-bold text-xs">
                            {hoveredItem?.title.split(' ')[0].charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-popover-foreground mb-1 text-sm">
                            {hoveredItem?.title}
                          </h4>
                          <p className="text-sm text-popover-foreground/80">
                            {hoveredItem?.description}
                          </p>
                        </div>
                      </div>
                      {/* Dynamic arrow */}
                      <div 
                        className={`absolute top-1/2 transform -translate-y-1/2 w-0 h-0 ${
                          isLeft 
                            ? 'left-full border-l-4 border-l-popover border-t-4 border-b-4 border-transparent' 
                            : 'right-full border-r-4 border-r-popover border-t-4 border-b-4 border-transparent'
                        }`}
                      ></div>
                    </div>
                  );
                })()
              )}
            </div>
            
            {/* Mobile Overview List */}
            <div className="sm:hidden mt-6 w-full grid gap-3">
              <h4 className="text-base font-semibold text-foreground mb-2 text-center">Overview Details</h4>
              {overviewItems.map((item) => (
                <div
                  key={item.id}
                  className={`bg-card border rounded-lg p-3 transition-colors duration-200 ${
                    hoveredOverview === item.id ? 'border-primary bg-primary/5' : 'border-card-border'
                  }`}
                  data-testid={`overview-card-${item.id}`}
                >
                  <div className="flex items-start space-x-2">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                      hoveredOverview === item.id ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                    }`}>
                      <span className="font-bold text-xs">{item.title.split(' ')[0].charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-card-foreground mb-1 text-sm">{item.title}</h4>
                      <p className="text-xs text-card-foreground/80">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}