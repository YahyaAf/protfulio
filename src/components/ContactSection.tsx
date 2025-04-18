
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <motion.div 
        className="absolute -top-20 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute -bottom-20 left-0 w-80 h-80 bg-blue-400/5 rounded-full filter blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      <div className="section-container relative z-10">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-2xl font-semibold mb-6 text-gradient"
              variants={itemVariants}
            >
              Contact Information
            </motion.h3>
            <div className="space-y-6">
              <motion.div 
                className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300"
                variants={itemVariants}
              >
                <div className="bg-primary/10 p-3 rounded-full animate-pulse-border">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+212 694285418</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300"
                variants={itemVariants}
              >
                <div className="bg-primary/10 p-3 rounded-full animate-pulse-border">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">yahyaafadisse92@gmail.com</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300"
                variants={itemVariants}
              >
                <div className="bg-primary/10 p-3 rounded-full animate-pulse-border">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/yahya-afadisse/"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="font-medium hover:text-primary transition-colors"
                  >
                    Yahya Afadisse
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300"
                variants={itemVariants}
              >
                <div className="bg-primary/10 p-3 rounded-full animate-pulse-border">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <a 
                    href="https://github.com/YahyaAf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    YahyaAf
                  </a>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="mt-12"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-4 text-gradient">Languages</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span>Arabic</span>
                    <span className="text-sm text-muted-foreground">Native</span>
                  </div>
                  <motion.div 
                    className="h-2 w-full bg-secondary rounded-full overflow-hidden"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                  >
                    <motion.div 
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                    />
                  </motion.div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span>French</span>
                    <span className="text-sm text-muted-foreground">Conversational</span>
                  </div>
                  <motion.div 
                    className="h-2 w-full bg-secondary rounded-full overflow-hidden"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                  >
                    <motion.div 
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "75%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.4 }}
                    />
                  </motion.div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span>English</span>
                    <span className="text-sm text-muted-foreground">Intermediate</span>
                  </div>
                  <motion.div 
                    className="h-2 w-full bg-secondary rounded-full overflow-hidden"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                  >
                    <motion.div 
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "65%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.6 }}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-5 -right-5 w-20 h-20 rounded-full border-2 border-primary/20 z-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute -bottom-5 -left-5 w-16 h-16 rounded-full border-2 border-primary/20 z-0"
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 border border-primary/10 shadow-lg relative z-10">
              <h3 className="text-2xl font-semibold mb-6 text-gradient">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={5}
                    required
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting} 
                    className="w-full relative overflow-hidden group"
                  >
                    <span className="relative z-10">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </span>
                    <motion.span 
                      className="absolute inset-0 w-0 bg-white/20"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
