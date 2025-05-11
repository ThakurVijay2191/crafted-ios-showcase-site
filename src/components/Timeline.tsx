
import React from 'react';

interface TimelineItem {
  id: number;
  date: string;
  title: string;
  company: string;
  description: string[];
}

const Timeline: React.FC = () => {
  const experiences: TimelineItem[] = [
    {
      id: 1,
      date: "Jan 2023 - Present",
      title: "Senior iOS Developer",
      company: "TechInnovate Solutions",
      description: [
        "Lead a team of 3 iOS developers, managing project timelines and deliverables",
        "Implemented advanced animations and custom UI components using Core Animation",
        "Reduced app startup time by 30% through optimization of initialization processes",
        "Mentored junior developers and conducted code reviews to maintain high code quality"
      ]
    },
    {
      id: 2,
      date: "Mar 2021 - Dec 2022",
      title: "iOS Developer",
      company: "MobileVision Inc.",
      description: [
        "Developed and maintained multiple iOS applications using Swift and UIKit",
        "Integrated REST APIs and implemented efficient data persistence solutions using Core Data",
        "Collaborated with UX/UI designers to implement pixel-perfect interfaces and smooth animations",
        "Participated in agile development processes, including daily stand-ups and sprint planning"
      ]
    },
    {
      id: 3,
      date: "Jul 2020 - Feb 2021",
      title: "Junior iOS Developer",
      company: "AppStarters Co.",
      description: [
        "Assisted in the development of iOS applications using Swift and Objective-C",
        "Implemented UI designs according to Apple's Human Interface Guidelines",
        "Fixed bugs and improved application performance",
        "Participated in code reviews and learned from senior developers"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-ios-lightgray">
      <div className="section-container">
        <h2 className="section-title text-center mx-auto mb-16">Professional Journey</h2>
        
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-ios-blue/30"></div>
          
          {experiences.map((item, index) => (
            <div 
              key={item.id} 
              className={`relative mb-12 md:mb-16 animate-fade-in ${index % 2 === 0 ? 'md:text-right' : ''}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row items-center">
                {/* Content for even items (left side) */}
                {index % 2 === 0 && (
                  <div className="hidden md:block md:w-1/2 pr-12">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                      <p className="text-ios-blue font-medium">{item.company}</p>
                      <ul className="mt-4 space-y-2 list-disc pl-5">
                        {item.description.map((point, i) => (
                          <li key={i} className="text-foreground/70">{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white shadow-md border-4 border-ios-blue/30 flex items-center justify-center z-10">
                    <div className="w-5 h-5 rounded-full bg-ios-blue"></div>
                  </div>
                </div>
                
                {/* Mobile and odd items */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} w-full`}>
                  {/* Only show on mobile OR if it's an odd item */}
                  {(index % 2 !== 0 || window.innerWidth < 768) && (
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                      <p className="text-ios-blue font-medium">{item.company}</p>
                      <ul className="mt-4 space-y-2 list-disc pl-5">
                        {item.description.map((point, i) => (
                          <li key={i} className="text-foreground/70">{point}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                {/* Date indicator */}
                <div className="w-full md:w-auto bg-ios-blue text-white py-2 px-4 rounded-full md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:-top-10 mt-4 md:mt-0 text-center">
                  {item.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
