import { useState } from "react";
import { upcomingProjects } from "@/data/content";

export default function SpiderDiagram() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = upcomingProjects;
  const centerX = 200;
  const centerY = 200;
  const radius = 120;

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">Upcoming Projects</h2>
        
        <div className="flex justify-center">
          <div className="relative">
            <svg width="400" height="400" viewBox="0 0 400 400" className="overflow-visible">
              {/* Center Circle */}
              <circle
                cx={centerX}
                cy={centerY}
                r="40"
                fill="hsl(var(--primary))"
                className="drop-shadow-md"
              />
              <text
                x={centerX}
                y={centerY}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-primary-foreground font-semibold text-sm"
              >
                JUSRC
              </text>
              
              {/* Project Nodes and Connections */}
              {projects.map((project, index) => {
                const angle = (index * 2 * Math.PI) / projects.length - Math.PI / 2;
                const x = centerX + radius * Math.cos(angle);
                const y = centerY + radius * Math.sin(angle);
                
                return (
                  <g key={index}>
                    {/* Connection Line */}
                    <line
                      x1={centerX}
                      y1={centerY}
                      x2={x}
                      y2={y}
                      stroke="hsl(var(--border))"
                      strokeWidth="2"
                    />
                    
                    {/* Project Circle */}
                    <circle
                      cx={x}
                      cy={y}
                      r="20"
                      fill={hoveredProject === index ? "hsl(var(--chart-2))" : "hsl(var(--card))"}
                      stroke="hsl(var(--card-border))"
                      strokeWidth="2"
                      className="cursor-pointer transition-all duration-200 drop-shadow-sm"
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
                      className={`font-bold text-sm pointer-events-none ${
                        hoveredProject === index ? 'fill-white' : 'fill-card-foreground'
                      }`}
                    >
                      {index + 1}
                    </text>
                  </g>
                );
              })}
            </svg>
            
            {/* Project Details */}
            {hoveredProject !== null && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-80 bg-popover border border-popover-border rounded-lg shadow-lg p-4 z-20">
                <h4 className="font-semibold text-popover-foreground mb-2">
                  Project {hoveredProject + 1}
                </h4>
                <p className="text-sm text-popover-foreground">
                  {projects[hoveredProject]}
                </p>
              </div>
            )}
          </div>
        </div>
        
        {/* Project List for Mobile */}
        <div className="md:hidden mt-8 grid gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-card-border rounded-lg p-4 hover-elevate"
              data-testid={`project-card-${index}`}
            >
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary-foreground font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-sm text-card-foreground">{project}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}