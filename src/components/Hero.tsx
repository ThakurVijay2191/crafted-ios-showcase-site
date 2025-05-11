
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background gradient element */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-ios-blue/10 blur-3xl"></div>
        <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-ios-blue/5 blur-3xl"></div>
      </div>
      
      <div className="section-container z-10 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 space-y-6 animate-fade-in">
          <div className="inline-block py-1 px-3 rounded-full bg-ios-blue/10 text-ios-blue font-medium text-sm mb-2">
            2.5+ Years of Experience
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-foreground">
            iOS Developer <br/>
            <span className="text-ios-blue">Building Amazing Apps</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-xl">
            I specialize in crafting exceptional iOS applications with intuitive interfaces 
            and robust performance. From concept to App Store, I bring ideas to life.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="bg-ios-blue hover:bg-ios-darkblue">
              View Projects
            </Button>
            <Button 
              size="lg"
              variant="outline" 
              className="border-ios-blue text-ios-blue hover:bg-ios-blue hover:text-white"
            >
              Contact Me
            </Button>
          </div>
          
          <div className="pt-8 flex items-center space-x-4 text-foreground/60">
            <p className="font-medium">Tech Stack</p>
            <div className="h-6 w-px bg-foreground/20"></div>
            <div className="flex space-x-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-md">
                <span className="text-sm font-bold">Swift</span>
              </div>
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-md">
                <span className="text-sm font-bold">SwiftUI</span>
              </div>
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-md">
                <span className="text-sm font-bold">UIKit</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center animate-fade-in animate-delay-200">
          <div className="relative w-64 h-[500px] md:w-80 md:h-[600px] bg-ios-lightgray rounded-[40px] shadow-lg overflow-hidden border-[8px] border-white">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl"></div>
            <div className="h-full w-full bg-white">
              {/* Image placeholder */}
              <div className="h-full w-full flex items-center justify-center bg-gradient-to-b from-ios-blue/20 to-ios-blue/5 p-3">
                <div className="text-center">
                  <div className="text-6xl font-bold text-ios-blue">iOS</div>
                  <div className="text-2xl font-medium mt-2">Developer</div>
                  <div className="h-12 w-12 bg-ios-blue rounded-full mx-auto mt-8 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
