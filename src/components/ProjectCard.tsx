
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export interface ProjectProps {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  appStoreLink?: string;
  gitHubLink?: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: ProjectProps;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className={`overflow-hidden card-hover ${project.featured ? 'border-ios-blue border-2' : ''}`}>
      <div className="relative h-60 bg-gray-200 overflow-hidden">
        <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br from-ios-blue/20 to-transparent`}>
          {/* Placeholder for project image */}
          <div className="text-4xl font-bold text-white/30">{project.title.charAt(0)}</div>
        </div>
        {project.featured && (
          <div className="absolute top-3 right-3 bg-ios-blue text-white px-3 py-1 rounded-full text-xs font-medium">
            Featured
          </div>
        )}
      </div>
      
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
        </div>
        <CardDescription className="text-foreground/70">
          {project.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-ios-blue/10 text-ios-blue text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="flex gap-2">
        {project.appStoreLink && (
          <Button 
            variant="outline" 
            className="text-ios-blue border-ios-blue hover:bg-ios-blue hover:text-white"
          >
            App Store
          </Button>
        )}
        {project.gitHubLink && (
          <Button 
            variant="outline" 
            className="text-ios-gray border-ios-gray hover:bg-ios-gray hover:text-white"
          >
            GitHub
          </Button>
        )}
        <Button className="ml-auto bg-ios-blue hover:bg-ios-darkblue">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
