
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative pt-16 pb-10 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60">Yahya Afadisse</span>
            </h1>
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Full Stack Developer specialized in building modern web applications.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-primary/90 hover:bg-primary transition-colors"
              >
                <a href="#projects">View My Work</a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="hover:border-primary/50 transition-colors"
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="/lovable-uploads/a39f5496-211c-4fba-ac58-b35e3794f4b0.png"
                  alt="Yahya Afadisse"
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.a 
          href="#about" 
          aria-label="Scroll down"
          className="inline-block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="h-6 w-6 text-primary" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
