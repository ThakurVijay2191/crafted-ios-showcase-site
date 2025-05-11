
import React from 'react';
import { Button } from "@/components/ui/button";

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="relative w-full h-96 rounded-lg shadow-lg overflow-hidden animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-ios-blue/30 to-white/10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-full bg-white shadow-lg mx-auto mb-6 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ios-blue"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Passionate iOS Developer</h3>
                  <p className="text-foreground/70">Building user-friendly and innovative applications</p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-ios-blue/5 rounded-full blur-2xl -z-10"></div>
          </div>
          
          {/* Right side - Content */}
          <div className="space-y-6 animate-fade-in animate-delay-100">
            <h2 className="section-title">About Me</h2>
            <p className="text-lg text-foreground/80">
              I'm a dedicated iOS Developer with over 2.5 years of experience in designing and implementing 
              mobile applications. My passion lies in creating elegant, intuitive user interfaces that provide 
              exceptional experiences.
            </p>
            <p className="text-lg text-foreground/80">
              Throughout my career, I've collaborated with cross-functional teams to develop and launch multiple 
              successful applications on the App Store. I specialize in Swift, SwiftUI, and UIKit, with a strong 
              understanding of iOS architecture patterns and best practices.
            </p>
            <p className="text-lg text-foreground/80">
              I'm committed to writing clean, maintainable code and staying updated with the latest Apple 
              technologies and design guidelines. My goal is always to create applications that not only meet but 
              exceed user expectations.
            </p>
            <div className="pt-4">
              <Button className="bg-ios-blue hover:bg-ios-darkblue">
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
