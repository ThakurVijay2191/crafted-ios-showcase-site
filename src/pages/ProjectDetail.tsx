
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectProps } from '@/components/ProjectCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// This would normally come from a database or API
const projectsData: ProjectProps[] = [
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

// Extended project details
const extendedDetails = {
  1: {
    fullDescription: "Fitness Tracker Pro is a comprehensive health and wellness application designed to help users achieve their fitness goals. The app provides customized workout plans, tracks physical activity, monitors progress over time, and includes social features to connect with friends and fitness communities.",
    features: [
      "Personalized workout plans based on fitness goals and user preferences",
      "Real-time tracking of exercises with detailed performance metrics",
      "Integration with HealthKit for a holistic view of user health data",
      "Progress visualization with interactive charts and statistics",
      "Social community features for motivation and accountability",
      "Sync across multiple devices with CloudKit integration"
    ],
    challenges: "The main challenge was optimizing the app's performance while processing large amounts of health data in real-time. I implemented efficient data processing algorithms and leveraged CoreData for local caching to ensure smooth performance.",
    outcome: "Fitness Tracker Pro achieved a 4.8-star rating on the App Store with over 100,000 downloads in the first six months after launch. User retention rates are 45% higher than industry average for fitness apps.",
    screenshots: ["fitness_screenshot1.png", "fitness_screenshot2.png", "fitness_screenshot3.png"]
  },
  2: {
    fullDescription: "Recipe Master is an intelligent cooking companion that personalizes the culinary experience. Using machine learning algorithms, it suggests recipes based on dietary preferences, available ingredients, and past cooking behavior.",
    features: [
      "Personalized recipe recommendations based on user preferences",
      "Ingredient recognition through photo analysis",
      "Meal planning with automatic shopping list generation",
      "Step-by-step cooking instructions with voice guidance",
      "Nutritional information tracking integrated with health apps",
      "Recipe sharing and social community features"
    ],
    challenges: "Creating an accurate machine learning model for ingredient recognition and recipe recommendations required extensive training and optimization. I implemented a hybrid approach combining on-device ML for basic recognition and cloud-based processing for more complex operations.",
    outcome: "Recipe Master has been featured in the 'Apps We Love' section of the App Store and maintains a user base of over 75,000 active monthly users, with an average session time of 8.5 minutes.",
    screenshots: ["recipe_screenshot1.png", "recipe_screenshot2.png", "recipe_screenshot3.png"]
  },
  3: {
    fullDescription: "Smart Home Control is a centralized hub for managing IoT devices throughout the home. The app provides intuitive controls, automation capabilities, and detailed insights into home system usage.",
    features: [
      "Universal control interface for different smart home ecosystems",
      "Automated routines based on time, location, or device triggers",
      "Energy usage monitoring and optimization suggestions",
      "Voice control integration with Siri, Alexa, and Google Assistant",
      "Secure remote access to home systems from anywhere",
      "Advanced scheduling for climate control, lighting, and appliances"
    ],
    challenges: "The biggest technical hurdle was ensuring reliable communication with diverse IoT devices using different protocols. I developed a modular architecture with protocol adapters that could be updated independently as manufacturers changed their APIs.",
    outcome: "Smart Home Control has partnerships with three major IoT manufacturers and consistently ranks in the top 10 home automation apps in the App Store with a 4.7-star rating.",
    screenshots: ["smarthome_screenshot1.png", "smarthome_screenshot2.png", "smarthome_screenshot3.png"]
  },
  4: {
    fullDescription: "Finance Manager is a personal finance application designed to help users track expenses, create budgets, categorize spending, and set financial goals. It provides insights into spending patterns and offers recommendations for saving money.",
    features: [
      "Automatic transaction categorization using machine learning",
      "Custom budget creation with real-time spending alerts",
      "Financial goal tracking with progress visualization",
      "Secure bank account and credit card synchronization",
      "Investment portfolio monitoring and performance analysis",
      "Tax preparation assistance with deduction tracking"
    ],
    challenges: "Implementing robust security measures to protect sensitive financial data while maintaining a seamless user experience was critical. I used a combination of encryption, secure authentication methods, and privacy-first data handling practices.",
    outcome: "Finance Manager has a dedicated user base of 120,000 monthly active users who track an average of $2.5 million in transactions daily. The app has helped users identify over $10 million in potential savings.",
    screenshots: ["finance_screenshot1.png", "finance_screenshot2.png", "finance_screenshot3.png"]
  },
  5: {
    fullDescription: "AR Shopping Experience transforms how customers shop online by allowing them to visualize products in their own environment before purchase. Using augmented reality, users can see realistic 3D models of furniture, decor, and other items placed in their space.",
    features: [
      "Photorealistic 3D product rendering in augmented reality",
      "Accurate size and scale representation of products",
      "Surface detection for proper product placement",
      "Product customization (colors, materials) in real-time AR view",
      "Shareable AR experiences for getting opinions from others",
      "Seamless integration with e-commerce purchasing platform"
    ],
    challenges: "Achieving realistic lighting and shadows that adapt to the user's environment was technically demanding. I implemented advanced ARKit features combined with custom shaders to create convincing product visualizations that react to ambient lighting conditions.",
    outcome: "AR Shopping Experience has been adopted by 5 major retailers, resulting in a 32% reduction in product return rates and a 24% increase in conversion rate for items available in AR preview.",
    screenshots: ["arshopping_screenshot1.png", "arshopping_screenshot2.png", "arshopping_screenshot3.png"]
  },
  6: {
    fullDescription: "Travel Companion is an all-in-one travel planning and assistance app that helps users plan trips, discover local attractions, navigate unfamiliar places, and keep track of travel documents and reservations—all with offline functionality for international travel.",
    features: [
      "Smart trip planning with optimized itineraries",
      "Offline maps and navigation for international travel",
      "Local recommendations based on user preferences and context",
      "Real-time flight, train, and transportation tracking",
      "Digital travel document storage with scan-to-save functionality",
      "Expense tracking in multiple currencies with automatic conversion"
    ],
    challenges: "Designing the app to work effectively offline while still providing rich functionality was complex. I implemented a sophisticated data syncing system that prioritizes critical information for offline storage and efficiently updates when connectivity is restored.",
    outcome: "Travel Companion has been used to plan over 250,000 trips and maintains an impressive 4.9-star rating. It was recognized with a design award for its intuitive user interface and accessibility features.",
    screenshots: ["travel_screenshot1.png", "travel_screenshot2.png", "travel_screenshot3.png"]
  }
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<ProjectProps | null>(null);
  const [details, setDetails] = useState<any>(null);
  
  useEffect(() => {
    if (id) {
      const projectId = parseInt(id, 10);
      const foundProject = projectsData.find(p => p.id === projectId);
      
      if (foundProject) {
        setProject(foundProject);
        
        // Get the extended details
        const extendedDetail = extendedDetails[projectId as keyof typeof extendedDetails];
        if (extendedDetail) {
          setDetails(extendedDetail);
        }
      }
    }
  }, [id]);

  if (!project || !details) {
    return (
      <div className="section-container min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <Button asChild>
            <Link to="/#projects" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Back to Projects
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Project Banner */}
      <div className="bg-ios-blue/10 py-16">
        <div className="section-container">
          <div className="mb-8">
            <Link 
              to="/#projects" 
              className="text-ios-blue hover:text-ios-darkblue flex items-center gap-2 mb-6 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Projects
            </Link>
            
            <div className="flex items-center justify-between flex-wrap gap-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{project.title}</h1>
              <div className="flex gap-3">
                {project.appStoreLink && (
                  <Button 
                    variant="outline" 
                    className="text-ios-blue border-ios-blue hover:bg-ios-blue hover:text-white"
                  >
                    View on App Store
                  </Button>
                )}
                {project.gitHubLink && (
                  <Button 
                    variant="outline" 
                    className="text-ios-gray border-ios-gray hover:bg-ios-gray hover:text-white"
                  >
                    View on GitHub
                  </Button>
                )}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-6 rounded-xl shadow-md overflow-hidden">
              {/* Placeholder for app showcase/screenshot */}
              <div className="aspect-[9/16] bg-gradient-to-br from-ios-blue/30 to-ios-blue/5 rounded-lg flex items-center justify-center">
                <span className="text-6xl font-bold text-ios-blue/30">{project.title.charAt(0)}</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Overview</h2>
              <p className="text-gray-700 leading-relaxed">{details.fullDescription}</p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1.5 bg-ios-blue/10 text-ios-blue text-sm rounded-md font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Project Details */}
      <div className="section-container">
        <Tabs defaultValue="features" className="w-full">
          <TabsList className="w-full justify-start mb-8 bg-transparent border-b">
            <TabsTrigger value="features" className="data-[state=active]:text-ios-blue">Features</TabsTrigger>
            <TabsTrigger value="challenges" className="data-[state=active]:text-ios-blue">Challenges</TabsTrigger>
            <TabsTrigger value="outcome" className="data-[state=active]:text-ios-blue">Outcome</TabsTrigger>
            <TabsTrigger value="screenshots" className="data-[state=active]:text-ios-blue">Screenshots</TabsTrigger>
          </TabsList>
          
          <TabsContent value="features" className="space-y-6">
            <h2 className="text-2xl font-bold">Key Features</h2>
            <ul className="space-y-3">
              {details.features.map((feature: string, index: number) => (
                <li key={index} className="flex gap-3 items-start">
                  <span className="bg-ios-blue text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
          
          <TabsContent value="challenges" className="space-y-6">
            <h2 className="text-2xl font-bold">Technical Challenges</h2>
            <div className="bg-ios-blue/5 border-l-4 border-ios-blue p-6 rounded-tr-lg rounded-br-lg">
              <p className="text-gray-700 leading-relaxed">{details.challenges}</p>
            </div>
          </TabsContent>
          
          <TabsContent value="outcome" className="space-y-6">
            <h2 className="text-2xl font-bold">Project Outcome</h2>
            <div className="bg-ios-blue/5 border-l-4 border-ios-blue p-6 rounded-tr-lg rounded-br-lg">
              <p className="text-gray-700 leading-relaxed">{details.outcome}</p>
            </div>
          </TabsContent>
          
          <TabsContent value="screenshots" className="space-y-6">
            <h2 className="text-2xl font-bold">App Screenshots</h2>
            <Carousel className="w-full max-w-xs mx-auto">
              <CarouselContent>
                {details.screenshots.map((screenshot: string, index: number) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="bg-gradient-to-br from-ios-blue/20 to-transparent aspect-[9/16] rounded-xl flex items-center justify-center">
                        <span className="text-2xl font-semibold text-ios-blue/60">Screenshot {index + 1}</span>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-4">
                <CarouselPrevious className="static translate-y-0 relative" />
                <CarouselNext className="static translate-y-0 relative" />
              </div>
            </Carousel>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Related Projects */}
      <div className="section-container">
        <h2 className="text-2xl font-bold mb-8">More Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projectsData
            .filter(p => p.id !== project.id)
            .slice(0, 3)
            .map((relatedProject) => (
              <Link to={`/project/${relatedProject.id}`} key={relatedProject.id} className="group">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-40 bg-gradient-to-br from-ios-blue/20 to-transparent flex items-center justify-center">
                    <span className="text-4xl font-bold text-ios-blue/30">{relatedProject.title.charAt(0)}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg group-hover:text-ios-blue transition-colors">{relatedProject.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mt-1">{relatedProject.description}</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
