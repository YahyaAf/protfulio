
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative pt-16 pb-10 overflow-hidden"
    >
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }} 
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-10 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl" 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.6, 0.9, 0.6],
          }} 
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/2 left-1/3 w-48 h-48 bg-blue-200/10 rounded-full filter blur-3xl" 
          animate={{ 
            scale: [1, 1.4, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }} 
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Hello, I'm <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60 relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Yahya Afadisse
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-primary/80 to-primary/30"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                ></motion.span>
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              Full Stack Developer specialized in building modern web applications.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-primary/90 hover:bg-primary transition-colors relative overflow-hidden group"
                >
                  <a href="#projects" className="relative z-10">
                    View My Work
                    <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="hover:border-primary/50 transition-colors group"
                >
                  <a href="#contact">
                    Get In Touch
                    <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 animate-pulse-border"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="/lovable-uploads/a39f5496-211c-4fba-ac58-b35e3794f4b0.png"
                  alt="Yahya Afadisse"
                  className="w-full h-full object-cover object-center"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent animate-shimmer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                />
              </motion.div>
              
              {/* Decorative elements around the profile image */}
              <motion.div 
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary/30 rounded-full"
                animate={{ y: [-5, 5, -5], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary/40 rounded-full"
                animate={{ y: [5, -5, 5], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              <motion.div 
                className="absolute top-1/2 -right-6 w-4 h-4 bg-blue-400/50 rounded-full"
                animate={{ x: [-5, 5, -5], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
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
          className="inline-block p-2 rounded-full bg-primary/5 hover:bg-primary/10 transition-colors"
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
