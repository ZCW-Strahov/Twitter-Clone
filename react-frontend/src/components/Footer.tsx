import React, { FunctionComponent } from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer id="cs-footer-108">
      <div className="cs-container">
        <ul className="cs-ul">
          <li className="cs-li">
            <a href="/homepage" className="cs-link">
              Home
            </a>
          </li>
          <li className="cs-li">
            <a href="" className="cs-link">
              Services
            </a>
          </li>
          <li className="cs-li">
            <a href="" className="cs-link">
              Gallery
            </a>
          </li>
          <li className="cs-li">
            <a href="" className="cs-link">
              Contact
            </a>
          </li>
        </ul>
        <span className="cs-copyright">© 2024 Strahov Team Copyright</span>
      </div>
    </footer>
  );
};

export default Footer;
