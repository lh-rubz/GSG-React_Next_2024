import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>Created with ❤️ by Heba</p>
      <div className="social-links">
        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/heba-j-343950289/"
          target="_blank"

          className="social-icon"
        >
          <FaLinkedin className="social-icon-svg" />
        </a>

        {/* GitHub Icon */}
        <a
          href="https://github.com/lh-rubz"
          target="_blank"
          className="social-icon"
        >
          <FaGithub className="social-icon-svg" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
