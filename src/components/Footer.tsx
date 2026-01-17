import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="/" className="footer-logo">
            Ravan.ai
          </a>
          <p className="footer-tagline">
            Building the world's first truly autonomous AI sales workforce.
            Scale your business without scaling your headcount.
          </p>
        </div>

        <div className="footer-links">
          <h4 className="footer-title">Platform</h4>
          <ul>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#ai-influencer">AI Influencer</a>
            </li>
            <li>
              <a href="#ai-sales-rep">AI Sales Rep</a>
            </li>
            <li>
              <a href="#integrations">Integrations</a>
            </li>
          </ul>
        </div>

        <div className="footer-links">
          <h4 className="footer-title">Company</h4>
          <ul>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#case-studies">Case Studies</a>
            </li>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms">Terms of Service</a>
            </li>
          </ul>
        </div>

        <div className="footer-links">
          <h4 className="footer-title">Contact</h4>
          <ul>
            <li>
              <a href="mailto:support@ravan.ai">support@ravan.ai</a>
            </li>
            <li>
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </li>
            <li>Dubai, UAE</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>&copy; {currentYear} Ravan.ai. All rights reserved.</p>
          <div className="social-links">
            <a href="#" className="social-icon">
              LinkedIn
            </a>
            <a href="#" className="social-icon">
              Twitter
            </a>
            <a href="#" className="social-icon">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
