
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Set initial theme based on user preference or system
  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true" || 
      (!("darkMode" in localStorage) && 
      window.matchMedia("(prefers-color-scheme: dark)").matches);
    
    setIsDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleDarkMode}
            className="rounded-full"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle dark mode</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{isDarkMode ? "Light mode" : "Dark mode"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default DarkModeToggle;
