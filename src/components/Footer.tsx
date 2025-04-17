
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary dark:bg-gray-800 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Yahya Afadisse. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://www.linkedin.com/in/yahya-afadisse/"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/YahyaAf" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center justify-center p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
