import React from "react";

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-3xl font-bold">SocialCause</h1>
            <p className="text-sm mt-2">Together, we can make a difference!</p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <i className="fab fa-facebook-square fa-2x"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start text-sm space-x-4 mb-6">
          <a href="/about" className="text-gray-300 hover:text-white">
            About Us
          </a>
          <a href="/contact" className="text-gray-300 hover:text-white">
            Contact
          </a>
          <a href="/donate" className="text-gray-300 hover:text-white">
            Donate
          </a>
          <a href="/privacy" className="text-gray-300 hover:text-white">
            Privacy Policy
          </a>
        </div>

        <div className="text-center text-sm text-white">
          <p>
            &copy; {new Date().getFullYear()} SocialCause. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
