
import { Card } from "@/components/ui/card";

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
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => (
  <Card className="p-6 border border-primary/10 bg-background/50 backdrop-blur-sm">
    <h3 className="text-xl font-semibold mb-6 text-center">{title}</h3>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex items-center justify-center p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
        >
          <span className="font-medium text-sm">{skill.name}</span>
        </div>
      ))}
    </div>
  </Card>
);

const SkillsSection = () => {
  const frontendSkills = skills.filter((skill) => skill.category === "frontend");
  const backendSkills = skills.filter((skill) => skill.category === "backend");
  const databaseSkills = skills.filter((skill) => skill.category === "database");
  const toolsSkills = skills.filter((skill) => skill.category === "tools");

  return (
    <section id="skills" className="py-24 bg-secondary/30 dark:bg-gray-800/30">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <SkillCategory title="Frontend Development" skills={frontendSkills} />
          <SkillCategory title="Backend Development" skills={backendSkills} />
          <SkillCategory title="Database Management" skills={databaseSkills} />
          <SkillCategory title="Tools & Technologies" skills={toolsSkills} />
        </div>
        
        <div className="mt-16">
          <Card className="p-6 border border-primary/10 bg-background/50 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-6 text-center">Additional Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Team Work", "Problem-Solving", "Adaptability", "Time Management", "Creativity", "Critical Thinking", "Communication", "Attention to Detail"].map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
