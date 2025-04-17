
import { Button } from "@/components/ui/button";
import { FileText, Code, Laptop, Server, Database, GitBranch } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30 dark:bg-gray-800/30">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              Passionate about web development, I specialize in creating full-stack applications using Laravel, JavaScript, and modern frontend technologies. 
              Currently studying at YouCode, I've developed several real-world applications and love clean UI and practical functionality.
            </p>
            
            <p className="text-lg">
              I'm always in search of new opportunities to expand my expertise, committed to delivering significant results and finding innovative solutions in the field of web development.
            </p>
            
            <div className="pt-4">
              <Button asChild className="flex items-center gap-2">
                <a href="#contact">
                  <FileText className="w-5 h-5" />
                  <span>Let's Connect</span>
                </a>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">My Technical Expertise</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Code className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-medium">Frontend</h4>
                  <p className="text-sm text-muted-foreground">JavaScript, React, Bootstrap, Tailwind CSS</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Server className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-medium">Backend</h4>
                  <p className="text-sm text-muted-foreground">PHP, Laravel, RESTful APIs</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Database className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-medium">Databases</h4>
                  <p className="text-sm text-muted-foreground">SQL, MySQL, NoSQL, MongoDB</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <GitBranch className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-medium">Tools</h4>
                  <p className="text-sm text-muted-foreground">Git, GitHub, Jira, Postman/Insomnia</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Laptop className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-medium">Design</h4>
                  <p className="text-sm text-muted-foreground">UML, Responsive Design</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <ul className="space-y-3">
                <li className="flex flex-col">
                  <span className="font-medium">YouCode / UMP, Youssoufia</span>
                  <span className="text-sm text-muted-foreground">First-year student in Full-Stack development</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-medium">Institut spécialisé dans les nouvelles technologies de l'information et de la communication, Safi</span>
                  <span className="text-sm text-muted-foreground">Specialized training in digital development, Full-stack option (2023-2024)</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-medium">Lycée qualifiant al qadis Echerchrani</span>
                  <span className="text-sm text-muted-foreground">Bachelor's degree in Physical Sciences</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
