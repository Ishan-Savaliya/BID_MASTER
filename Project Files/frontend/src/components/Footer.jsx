import React from "react";
import "./Footer.css"; 

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        
        <div className="footer-section">
          <h2>BIDMASTER--</h2>
          <p>
            Welcome to Bidmaster, where we provide online auction facilities.
          </p>
        </div>

        <div className="footer-section">
          <h3><u>Company Address</u></h3>
          <p>
            Dhirubhai Ambani Institute of Information and Communication
            Technology, Near Indroda Circle, Gandhinagar - 382 007, Gujarat
            (India)
          </p>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.5430286602826!2d72.63074627482517!3d23.18856648454373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b18f1ec9925%3A0xb6954c3b45fd4560!2sDA-IICT!5e0!3m2!1sen!2sin!4v1604920290352!5m2!1sen!2sin"
              width="200"
              height="150"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              title="Company Location"
            ></iframe>
          </div>
        </div>

        <div className="footer-section">
          <h3><u>Contact Information</u></h3>
          <p>
            <strong>Email:</strong> <a href="mailto:bidmaster@gmail.com">bidmaster@gmail.com</a>
          </p>
          <p>
            <strong>Phone:</strong> +91 1234567890
          </p>

          <div className="social-icons">
            <a href="#twitter"> 
                {/* -->Link of website to be added */}
              <i className="fab fa-twitter">
                <img src="./img/Twitter.png">
                </img>
              </i>
            </a>
            <a href="#linkedin">
               {/* -->Link of website to be added */}  
              <i className="fab fa-linkedin">
              <img src="./img/Linkedin.png">
              </img>
              </i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer bottom section */}
      <div className="footer-bottom">
        <p>© BIDMASTER 2024. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

