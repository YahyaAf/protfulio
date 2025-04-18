
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "database" | "tools";
}

const skills: Skill[] = [
  // Frontend
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 85, category: "frontend" },
  { name: "React.js", level: 80, category: "frontend" },
  { name: "Bootstrap", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  
  // Backend
  { name: "PHP", level: 85, category: "backend" },
  { name: "Laravel", level: 85, category: "backend" },
  { name: "RESTful APIs", level: 80, category: "backend" },
  
  // Database
  { name: "SQL", level: 85, category: "database" },
  { name: "MySQL", level: 85, category: "database" },
  { name: "NoSQL", level: 70, category: "database" },
  { name: "MongoDB", level: 70, category: "database" },
  
  // Tools
  { name: "Git", level: 85, category: "tools" },
  { name: "GitHub", level: 85, category: "tools" },
  { name: "Jira", level: 75, category: "tools" },
  { name: "Postman/Insomnia", level: 80, category: "tools" },
];

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  delayOffset: number;
}

const SkillCategory = ({ title, skills, delayOffset }: SkillCategoryProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2 + delayOffset * 0.2,
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <Card className="p-6 border border-primary/10 bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500">
        <motion.h3 
          className="text-xl font-semibold mb-6 text-center text-gradient"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              className="skill-hover flex flex-col items-center justify-center p-4 rounded-lg bg-primary/5"
            >
              <span className="font-medium text-sm">{skill.name}</span>
              <div className="w-full h-1.5 bg-gray-200 rounded-full mt-2">
                <motion.div 
                  className="h-full bg-primary rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
              <span className="text-xs text-muted-foreground mt-1">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  )
};

const SkillsSection = () => {
  const frontendSkills = skills.filter((skill) => skill.category === "frontend");
  const backendSkills = skills.filter((skill) => skill.category === "backend");
  const databaseSkills = skills.filter((skill) => skill.category === "database");
  const toolsSkills = skills.filter((skill) => skill.category === "tools");

  return (
    <section id="skills" className="py-24 bg-secondary/30 dark:bg-gray-800/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <motion.div 
        className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-400/5"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, -10, 0],
          y: [0, 10, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary/5"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      <div className="section-container relative z-10">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          My Skills
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <SkillCategory title="Frontend Development" skills={frontendSkills} delayOffset={0} />
          <SkillCategory title="Backend Development" skills={backendSkills} delayOffset={1} />
          <SkillCategory title="Database Management" skills={databaseSkills} delayOffset={2} />
          <SkillCategory title="Tools & Technologies" skills={toolsSkills} delayOffset={3} />
        </div>
        
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <Card className="p-6 border border-primary/10 bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500">
            <h3 className="text-xl font-semibold mb-6 text-center text-gradient">Additional Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Team Work", "Problem-Solving", "Adaptability", "Time Management", "Creativity", "Critical Thinking", "Communication", "Attention to Detail"].map((skill, index) => (
                <motion.span 
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors text-sm font-medium bounce-on-hover"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
