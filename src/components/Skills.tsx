
import React from 'react';

interface SkillCategory {
  title: string;
  skills: string[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      skills: ["Swift", "Objective-C", "SwiftUI", "TypeScript"]
    },
    {
      title: "iOS Development",
      skills: ["UIKit", "SwiftUI", "Core Data", "Core Animation", "ARKit", "MapKit", "Push Notifications", "HealthKit"]
    },
    {
      title: "Tools & Frameworks",
      skills: ["Xcode", "Cocoapods", "Swift Package Manager", "TestFlight", "Git", "JIRA", "Confluence"]
    },
    {
      title: "Architecture & Design Patterns",
      skills: ["MVC", "MVVM", "Clean Architecture", "Delegation", "Singleton", "Observer", "Protocol-Oriented Programming"]
    },
    {
      title: "Testing & Quality Assurance",
      skills: ["XCTest", "UI Testing", "Unit Testing", "TDD", "Debugging"]
    },
    {
      title: "API Integration",
      skills: ["RESTful APIs", "JSON", "URLSession", "Alamofire", "Authentication", "WebSockets"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-ios-lightgray">
      <div className="section-container">
        <h2 className="section-title text-center mx-auto mb-16">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm card-hover animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-bold text-ios-blue mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-6 bg-ios-blue/10 rounded-xl">
          <h3 className="text-xl font-bold mb-4 text-center">Continuous Learning</h3>
          <p className="text-center text-foreground/80 max-w-3xl mx-auto">
            I'm constantly expanding my skills and staying updated with the latest iOS development trends and technologies.
            Currently exploring advanced SwiftUI techniques, Combine framework, and Swift concurrency patterns.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
