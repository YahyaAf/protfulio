
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative pt-16 pb-10"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Hello, I'm <span className="text-primary">Yahya Afadisse</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Full Stack Developer specialized in building modern web applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button asChild size="lg">
                <a href="#projects">View My Work</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <img
                src="/lovable-uploads/a39f5496-211c-4fba-ac58-b35e3794f4b0.png"
                alt="Yahya Afadisse"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="h-6 w-6 text-primary" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
