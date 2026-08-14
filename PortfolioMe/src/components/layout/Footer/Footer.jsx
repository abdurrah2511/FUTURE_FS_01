import { ArrowUpRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer(){
  const currentYear=new Date().getFullYear();

  return(
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-intro">
            <span className="footer-label"> Portfolio </span>

            <h2> Let's create <span> something great.</span> </h2>

            <Link
              to="/contact"
              className="footer-contact-link" >
              Start a conversation
              <ArrowUpRight size={18}/>
            </Link>

          </div>

          <div className="footer-navigation">

            <div className="footer-column">
              <span className="footer-column-title">
                Navigate
              </span>

              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/skills">Skills</Link>
              <Link to="/journey">Journey</Link>
              <Link to="/contact">Contact</Link>
            </div>

            <div className="footer-column">

              <span className="footer-column-title">
                Connect
              </span>

              <a href="#" target="_blank" rel="noreferrer">
                <FaGithub /> GitHub
                <ArrowUpRight size={14}/>
              </a>

              <a href="#" target="_blank" rel="noreferrer">
                <FaLinkedinIn /> LinkedIn
                <ArrowUpRight size={14}/>
              </a>

              <a href="mailto:your@email.com">
                Email
                <ArrowUpRight size={14}/>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span> © {currentYear} Your Name </span>
          <span> Designed & built with curiosity. </span>
        </div>

      </div>

    </footer>
  );
}

export default Footer;