import { useState } from "react";
import { upcomingProjects } from "@/data/content";

export default function SpiderDiagram() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = upcomingProjects;
  const centerX = 200;
  const centerY = 200;
  const radius = 120;

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Upcoming Research Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our exciting upcoming research initiatives and collaborative projects
          </p>
        </div>
        
        {/* Spider Chart - All Devices */}
        <div className="flex justify-center mb-8">
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
              
              {/* Project Nodes and Connections */}
              {projects.map((project, index) => {
                const angle = (index * 2 * Math.PI) / projects.length - Math.PI / 2;
                const x = centerX + radius * Math.cos(angle);
                const y = centerY + radius * Math.sin(angle);
                const isHovered = hoveredProject === index;
                
                return (
                  <g key={index}>
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
                    
                    {/* Project Circle */}
                    <circle
                      cx={x}
                      cy={y}
                      r="28"
                      fill={isHovered ? "hsl(var(--primary))" : "hsl(var(--card))"}
                      stroke={isHovered ? "hsl(var(--primary))" : "hsl(var(--border))"}
                      strokeWidth="2"
                      className="cursor-pointer transition-colors duration-200"
                      onMouseEnter={() => setHoveredProject(index)}
                      onMouseLeave={() => setHoveredProject(null)}
                      data-testid={`spider-project-${index}`}
                    />
                    
                    {/* Project Number */}
                    <text
                      x={x}
                      y={y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className={`font-bold pointer-events-none transition-colors duration-200 ${
                        isHovered ? 'fill-primary-foreground text-sm' : 'fill-card-foreground text-sm'
                      }`}
                    >
                      {index + 1}
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
                Research Hub
              </text>
            </svg>
            
            {/* Smart Project Details Tooltip */}
            {hoveredProject !== null && (
              (() => {
                const angle = (hoveredProject * 2 * Math.PI) / projects.length - Math.PI / 2;
                const x = centerX + radius * Math.cos(angle);
                const y = centerY + radius * Math.sin(angle);
                
                // Determine position based on node location
                const isLeft = x < centerX;
                const isTop = y < centerY;
                
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
                          {hoveredProject + 1}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-popover-foreground mb-1 text-sm">
                          Research Project {hoveredProject + 1}
                        </h4>
                        <p className="text-sm text-popover-foreground/80">
                          {projects[hoveredProject]}
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
        </div>
        
        {/* Mobile Project Grid - Compact version */}
        <div className="sm:hidden grid grid-cols-1 gap-3 mt-6">
          <h3 className="text-base font-semibold text-foreground mb-2 text-center">Project Details</h3>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-card border rounded-lg p-3 transition-colors duration-200 ${
                hoveredProject === index ? 'border-primary bg-primary/5' : 'border-card-border'
              }`}
              data-testid={`project-card-${index}`}
            >
              <div className="flex items-start space-x-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                  hoveredProject === index ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  <span className="font-bold text-xs">{index + 1}</span>
                </div>
                <div>
                  <h4 className="font-medium text-card-foreground mb-1 text-sm">
                    Project {index + 1}
                  </h4>
                  <p className="text-xs text-card-foreground/80 leading-relaxed">{project}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}