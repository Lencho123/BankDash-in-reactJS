import { Facebook, Linkedin, Send, SendHorizontalIcon } from "lucide-react";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footerfoot">
      <div className="socials">
        <div>
          <a
            href="https://web.facebook.com/lencho.lachisa.1"
            className="social-icons"
          >
            <Facebook /> <span>Facebook</span>
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/lencho-lachisa-603b0633b/"
            className="social-icons"
          >
            <Linkedin /> <span>LinkedIn</span>
          </a>
        </div>
        <div>
          <span className="social-icons">
            <SendHorizontalIcon /> <span>l242@gmail.com</span>
          </span>
        </div>
      </div>

      <div class="copyright">
        &copy; <span id="year"></span> Lencho L. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
