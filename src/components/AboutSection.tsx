
import { Button } from "@/components/ui/button";
import { FileText, Code, Laptop, Server, Database, GitBranch, Globe, GraduationCap, User, Download } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-secondary/5 via-secondary/30 to-secondary/5 dark:bg-gray-800/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <AboutMeSection />
            <Separator className="my-6" />
            <LanguageSection />
            <Separator className="my-6" />
            <CvDownloadSection />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ExpertiseSection />
            <Separator className="my-8" />
            <EducationSection />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// About Me component
const AboutMeSection = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-4">
        <User className="h-6 w-6 text-primary" />
        <h3 className="text-2xl font-semibold">About Me</h3>
      </div>
      
      <p className="text-lg leading-relaxed">
        Passionate about web development, I specialize in creating full-stack applications using Laravel, JavaScript, and modern frontend technologies. 
        Currently studying at YouCode, I've developed several real-world applications and love clean UI and practical functionality.
      </p>
      
      <p className="text-lg leading-relaxed">
        I'm always in search of new opportunities to expand my expertise, committed to delivering significant results and finding innovative solutions in the field of web development.
      </p>
    </div>
  )
}

// Language component
const LanguageSection = () => {
  const languages = [
    { name: "Arabic", level: "Native", progress: 100 },
    { name: "French", level: "Conversational", progress: 75 },
    { name: "English", level: "Intermediate", progress: 65 }
  ];
  
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Globe className="h-6 w-6 text-primary" />
        <h3 className="text-2xl font-semibold">Languages</h3>
      </div>
      
      <div className="space-y-4">
        {languages.map((language, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium">{language.name}</span>
              <span className="text-sm text-muted-foreground">{language.level}</span>
            </div>
            <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full transition-all duration-1000" 
                style={{ width: `${language.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// CV Download component
const CvDownloadSection = () => {
  return (
    <div className="pt-2">
      <Button asChild className="flex items-center gap-2 w-full sm:w-auto transition-all hover:scale-105">
        <a 
          href="https://drive.google.com/file/d/1bqH7fycX8KAS3pRHmYsVQ0F3ZEIfeVwR/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="py-3"
        >
          <Download className="w-5 h-5" />
          <span>Download CV</span>
        </a>
      </Button>
    </div>
  )
}

// Expertise component
const ExpertiseSection = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6">My Technical Expertise</h3>
      <div className="grid grid-cols-2 gap-6">
        <motion.div 
          className="flex items-start gap-3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Code className="w-5 h-5 text-primary mt-1" />
          <div>
            <h4 className="font-medium">Frontend</h4>
            <p className="text-sm text-muted-foreground">JavaScript, React, Bootstrap, Tailwind CSS</p>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex items-start gap-3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Server className="w-5 h-5 text-primary mt-1" />
          <div>
            <h4 className="font-medium">Backend</h4>
            <p className="text-sm text-muted-foreground">PHP, Laravel, RESTful APIs</p>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex items-start gap-3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Database className="w-5 h-5 text-primary mt-1" />
          <div>
            <h4 className="font-medium">Databases</h4>
            <p className="text-sm text-muted-foreground">SQL, MySQL, NoSQL, MongoDB</p>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex items-start gap-3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <GitBranch className="w-5 h-5 text-primary mt-1" />
          <div>
            <h4 className="font-medium">Tools</h4>
            <p className="text-sm text-muted-foreground">Git, GitHub, Jira, Postman/Insomnia</p>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex items-start gap-3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <Laptop className="w-5 h-5 text-primary mt-1" />
          <div>
            <h4 className="font-medium">Design</h4>
            <p className="text-sm text-muted-foreground">UML, Responsive Design</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Education component
const EducationSection = () => {
  const education = [
    {
      institution: "YouCode / UMP, Youssoufia",
      degree: "First-year student in Full-Stack development",
      period: "2023-2024"
    },
    {
      institution: "Institut spécialisé dans les nouvelles technologies de l'information et de la communication, Safi",
      degree: "Specialized training in digital development, Full-stack option",
      period: "2023-2024"
    },
    {
      institution: "Lycée qualifiant al qadis Echerchrani",
      degree: "Bachelor's degree in Physical Sciences",
      period: "2021-2022"
    }
  ];
  
  return (
    <div className="mt-8">
      <div className="flex items-center gap-3 mb-6">
        <GraduationCap className="h-6 w-6 text-primary" />
        <h3 className="text-2xl font-semibold">Education</h3>
      </div>
      
      <ul className="space-y-6">
        {education.map((item, index) => (
          <motion.li 
            key={index} 
            className="p-4 rounded-lg border border-border/50 bg-card/50 hover:bg-card transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex flex-col">
              <span className="font-medium text-lg">{item.institution}</span>
              <span className="text-sm text-muted-foreground mt-1">{item.degree}</span>
              <span className="text-xs text-primary/80 mt-2">{item.period}</span>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

export default AboutSection;
