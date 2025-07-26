import Image from "next/image";
import './footer.css';
import { ContactForm } from "../contact-form/contact-form"

export default function Footer() {
  return (
    <footer>
      <br/>
      <ContactForm/>
      <br/>
      <p className="text-align-center">Website made by Benjamin Levy</p>
      <br/>
      <div className="social-link-container">
        <a href="mailto:benjaminlevy.bel@gmail.com" target="_blank"><Image className="social-link" src='/social-icons/email-logo.png' alt="email" width={50} height={50}/></a>
        <a href="https://www.linkedin.com/in/levybe/" target="_blank"><Image className="social-link" src='/social-icons/linkedin-logo.png' alt="linkedin" width={50} height={50}/></a>
        <a href="https://github.com/TapeKnot" target="_blank"><Image className="social-link" src='/social-icons/github-logo.png' alt="github" width={50} height={50}/></a>
      </div>
    </footer>
  )
}