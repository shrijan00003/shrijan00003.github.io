import React from "react"
import {
  FaDev,
  FaMedium,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaGithub,
} from "react-icons/fa"

export default function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <a
          href="https://github.com/shrijan00003"
          target="_blank"
          rel="noopener noreferrer"
          className="link-card github-wrapper"
        >
          <FaGithub className="social-icon" size={80} />
        </a>
        <a
          href="https://www.linkedin.com/in/shrijan-tripathi-35294299/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-card linkedin-wrapper"
        >
          <FaLinkedin className="social-icon" size={80} />
        </a>
        <a
          href="https://www.facebook.com/yelo.leaf"
          target="_blank"
          rel="noopener noreferrer"
          className="link-card facebook-wrapper"
        >
          <FaFacebook className="social-icon" size={80} />
        </a>
        <a
          href="https://twitter.com/itsmeshrijan"
          target="_blank"
          rel="noopener noreferrer"
          className="link-card twitter-wrapper"
        >
          <FaTwitter className="social-icon" size={80} />
        </a>
        <a
          href="https://medium.com/@shrijan00003"
          className="link-card medium-wrapper"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaMedium className="social-icon" size={80} />
        </a>
        <a
          href="https://dev.to/shrijan00003"
          className="link-card dev-to-wrapper"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaDev className="social-icon" size={80} />
        </a>
      </div>
      <div className="footer-copyright text-center py-3">
        &copy; {new Date().getFullYear()}
      </div>
    </footer>
  )
}
