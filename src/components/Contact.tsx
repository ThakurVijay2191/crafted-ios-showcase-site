
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <h2 className="section-title text-center mx-auto mb-4">Get In Touch</h2>
        <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-16">
          Interested in working together or have a question? Feel free to reach out using the form below or 
          connect with me directly through social media.
        </p>
        
        <div className="grid md:grid-cols-5 gap-8">
          {/* Left side - Contact form */}
          <Card className="md:col-span-3 animate-fade-in">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input id="name" placeholder="Your name" className="border-ios-blue/20 focus:border-ios-blue" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="Your email" className="border-ios-blue/20 focus:border-ios-blue" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <Input id="subject" placeholder="Subject" className="border-ios-blue/20 focus:border-ios-blue" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message" 
                    rows={6} 
                    className="border-ios-blue/20 focus:border-ios-blue"
                  />
                </div>
                <Button type="submit" className="w-full bg-ios-blue hover:bg-ios-darkblue">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Right side - Contact info */}
          <div className="md:col-span-2 space-y-6 animate-fade-in animate-delay-100">
            <Card className="overflow-hidden">
              <div className="h-2 bg-ios-blue"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-ios-blue/10 flex items-center justify-center mr-4 text-ios-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    </div>
                    <div>
                      <p className="text-sm text-foreground/70">Email</p>
                      <a href="mailto:developer@example.com" className="text-ios-blue font-medium hover:underline">
                        developer@example.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-ios-blue/10 flex items-center justify-center mr-4 text-ios-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </div>
                    <div>
                      <p className="text-sm text-foreground/70">Phone</p>
                      <a href="tel:+1234567890" className="text-ios-blue font-medium hover:underline">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-ios-blue/10 flex items-center justify-center mr-4 text-ios-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <div>
                      <p className="text-sm text-foreground/70">Location</p>
                      <p className="text-foreground font-medium">
                        San Francisco, California
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-medium text-lg mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-ios-blue/10 hover:bg-ios-blue text-ios-blue hover:text-white flex items-center justify-center transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-ios-blue/10 hover:bg-ios-blue text-ios-blue hover:text-white flex items-center justify-center transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-ios-blue/10 hover:bg-ios-blue text-ios-blue hover:text-white flex items-center justify-center transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-ios-blue/10 hover:bg-ios-blue text-ios-blue hover:text-white flex items-center justify-center transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-ios-blue text-white animate-fade-in animate-delay-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Availability</h3>
                <p className="mb-4">
                  Currently available for freelance projects and consulting opportunities.
                </p>
                <Button variant="outline" className="w-full text-white border-white hover:bg-white hover:text-ios-blue">
                  Check Availability
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
