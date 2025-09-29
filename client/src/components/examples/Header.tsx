import { useState } from "react";
import Header from '../Header';

export default function HeaderExample() {
  const [darkMode, setDarkMode] = useState(false);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log('Dark mode toggled:', !darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-background">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="p-8">
          <h1 className="text-2xl font-bold text-foreground">Header Example</h1>
          <p className="text-muted-foreground mt-2">Test the navigation and dark mode toggle above.</p>
        </div>
      </div>
    </div>
  );
}