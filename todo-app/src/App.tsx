import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import Font Awesome sun and moon icons
import AllTodos from './components/AllTodos';
import './App.css';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const daysOfWeek = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 
    'Thursday', 'Friday', 'Saturday'
  ];
  const monthsOfYear = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'false');
      }
      return newMode;
    });
  };

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    } else {
      setIsDarkMode(false);
      document.body.classList.remove('dark-mode');
    }
  }, []);

  const getMonthName = (date: Date): string => {
    const monthIndex = date.getMonth();
    return monthsOfYear[monthIndex];
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      {/* Toggle button (with icons) */}
      <div 
        onClick={toggleDarkMode}
        className="mode-toggle"
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
      >
        {isDarkMode ? (
          <FaSun size={30} style={{ transition: 'all 0.3s ease' }} />
        ) : (
          <FaMoon size={30} style={{ transition: 'all 0.3s ease' }} />
        )}
      </div>
      <div className="dateTitle">
        <span className="monthTitle">
          {daysOfWeek[new Date().getDay()]},</span> {new Date().getDate()} {getMonthName(new Date())}
      </div>
      <AllTodos />
    </div>
  );
};

export default App;
