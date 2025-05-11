
import React from 'react';
import ProjectCard, { ProjectProps } from './ProjectCard';

const Projects: React.FC = () => {
  const projects: ProjectProps[] = [
    {
      id: 1,
      title: "Fitness Tracker Pro",
      description: "A comprehensive fitness tracking application with workout plans, progress monitoring, and social features.",
      image: "fitness-tracker.png",
      technologies: ["Swift", "SwiftUI", "HealthKit", "Core Data", "CloudKit"],
      appStoreLink: "#",
      featured: true
    },
    {
      id: 2,
      title: "Recipe Master",
      description: "Personalized recipe app that suggests meals based on user preferences and available ingredients.",
      image: "recipe-app.png",
      technologies: ["Swift", "UIKit", "Core Data", "Firebase", "Machine Learning"],
      appStoreLink: "#",
      gitHubLink: "#"
    },
    {
      id: 3,
      title: "Smart Home Control",
      description: "IoT home automation app allowing users to control and schedule smart home devices.",
      image: "smart-home.png",
      technologies: ["Swift", "SwiftUI", "Combine", "Bluetooth", "Core Location"],
      appStoreLink: "#"
    },
    {
      id: 4,
      title: "Finance Manager",
      description: "Personal finance application for budget tracking, expense categorization, and financial goal setting.",
      image: "finance-app.png",
      technologies: ["Swift", "UIKit", "Core Data", "Charts", "Security Framework"],
      appStoreLink: "#",
      gitHubLink: "#"
    },
    {
      id: 5,
      title: "AR Shopping Experience",
      description: "Augmented reality shopping application allowing customers to visualize products in their space.",
      image: "ar-shopping.png",
      technologies: ["Swift", "ARKit", "SceneKit", "UIKit", "Core Animation"],
      appStoreLink: "#",
      featured: true
    },
    {
      id: 6,
      title: "Travel Companion",
      description: "Travel planning app with itinerary creation, local recommendations, and offline maps.",
      image: "travel-app.png",
      technologies: ["Swift", "SwiftUI", "MapKit", "Core Location", "Offline Storage"],
      appStoreLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <h2 className="section-title text-center mx-auto mb-4">Featured Projects</h2>
        <p className="text-center text-foreground/70 max-w-3xl mx-auto mb-16">
          A collection of iOS applications I've built during my professional journey, 
          showcasing my technical skills and problem-solving abilities.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
