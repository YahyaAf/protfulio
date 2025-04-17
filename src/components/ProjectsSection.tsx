
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Youdemy",
    description: "A full-stack online course platform where users can explore and manage educational content. Built with Laravel, it features user authentication, course creation, and admin control.",
    technologies: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?q=80&w=1171&auto=format&fit=crop",
    githubUrl: "https://github.com/YahyaAf/Youdemy"
  },
  {
    id: 2,
    title: "CreateCv",
    description: "A web application that helps users build their own professional CV dynamically. Users can add skills, experiences, and generate a clean downloadable resume.",
    technologies: ["JavaScript", "Bootstrap", "HTML/CSS"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1170&auto=format&fit=crop",
    githubUrl: "https://github.com/YahyaAf/CreateCv"
  },
  {
    id: 3,
    title: "TakeUrTerrain",
    description: "A sports field reservation platform for football, basketball, and tennis courts. Includes booking by time slot and user account management.",
    technologies: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1517747614396-d21e5824ba47?q=80&w=1173&auto=format&fit=crop",
    githubUrl: "https://github.com/YahyaAf/TakeUrTerrain"
  },
  {
    id: 4,
    title: "HRMS",
    description: "A Human Resource Management System that allows companies to manage employee data, salaries, departments, and more efficiently.",
    technologies: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop",
    githubUrl: "https://github.com/YahyaAf/hrms"
  },
  {
    id: 5,
    title: "UdeConnect",
    description: "A modern e-learning platform built with Laravel + React that supports course creation, user registration, and a responsive interface.",
    technologies: ["Laravel", "React", "MySQL", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1074&auto=format&fit=crop",
    githubUrl: "https://github.com/YahyaAf/udeconnect"
  },
  {
    id: 6,
    title: "ToDoList",
    description: "A simple, user-friendly to-do list app with Bootstrap and JavaScript that lets users manage daily tasks.",
    technologies: ["JavaScript", "Bootstrap", "HTML/CSS"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1172&auto=format&fit=crop",
    githubUrl: "https://github.com/YahyaAf/ToDoList"
  },
  {
    id: 7,
    title: "Fakhar / E-commerce",
    description: "Development of an e-commerce website allowing users to present and sell unique products. Includes user management, product listing, cart system, and order tracking.",
    technologies: ["Laravel", "MySQL", "React", "Tailwind CSS", "REST API"],
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1170&auto=format&fit=crop",
    githubUrl: "https://github.com/YahyaAf/FAKHAR.ma"
  },
  {
    id: 8,
    title: "FUT Champions Manager",
    description: "An application to manage and evaluate football players on a particular grid of attributes and ratings. Users can add players with details, track dynamic ratings, and view statistics.",
    technologies: ["JavaScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1170&auto=format&fit=crop",
    githubUrl: "https://github.com/YahyaAf/FutChampions"
  }
];

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  
  const handleLoadMore = () => {
    setVisibleProjects(projects.length);
  };

  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project) => (
            <Card key={project.id} className="overflow-hidden card-hover border border-border h-full flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              
              <CardHeader className="flex-none">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex gap-2 flex-none">
                {project.githubUrl && (
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                  </Button>
                )}
                
                {project.liveUrl && (
                  <Button size="sm" asChild className="flex-1">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {visibleProjects < projects.length && (
          <div className="mt-12 text-center">
            <Button onClick={handleLoadMore} size="lg">
              Load More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
