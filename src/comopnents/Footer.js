import React from "react";
import "./footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="container1">
          <div className="phone">
            <a href="tel:1-800-273-8254">
              <i className="fa fa-phone "></i>

              <span> +01 23456789</span>
            </a>
          </div>
          <div className="social">
            <div className="icons">
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                href="https://www.facebook.com/"
              >
                <i className="fa fa-facebook"></i>
              </a>
            </div>
            <div className="icons">
              {" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                href="https://www.instagram.com/"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </div>
            <div className="icons">
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                href="https://www.twitter.com/"
              >
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
