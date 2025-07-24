import Image from "next/image";
import './footer.css';

export default function Footer() {
  return (
    <footer>
      <div>
        <div className="width-fit-content margin-auto">
          <br/>
          <h2>Contact Me</h2>
          <hr/>
        </div>
        <br/>
        <p>You can send me a message at<br/> <a href="mailto:benjaminlevy.bel@gmail.com">benjaminlevy.bel@gmail.com</a>.</p>
        <br/>
      </div>
      <div className="social-link-container">
        <a href="mailto:benjaminlevy.bel@gmail.com" target="_blank"><Image className="social-link" src='/social-icons/email-logo.png' alt="email" width={50} height={50}/></a>
        <a href="https://www.linkedin.com/in/levybe/" target="_blank"><Image className="social-link" src='/social-icons/linkedin-logo.png' alt="linkedin" width={50} height={50}/></a>
        <a href="https://github.com/TapeKnot" target="_blank"><Image className="social-link" src='/social-icons/github-logo.png' alt="github" width={50} height={50}/></a>
      </div>
    </footer>
  )
}