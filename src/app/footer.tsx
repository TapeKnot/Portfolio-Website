import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div>
        <h2>Contact Me</h2>
        <br/>
        <p>You can send me a message at<br/> <a href="mailto:benjaminlevy.bel@gmail.com">benjaminlevy.bel@gmail.com</a>.</p>
        <br/>
      </div>
      <div className="social-link-container">
        <a href="mailto:benjaminlevy.bel@gmail.com" target="_blank"><img className="social-link" src='/email-logo.png' alt="email" width={50} height={50}/></a>
        <a href="https://www.linkedin.com/in/levybe/" target="_blank"><img className="social-link" src='/linkedin-logo.png' alt="linkedin" width={50} height={50}/></a>
        <a href="https://github.com/TapeKnot" target="_blank"><img className="social-link" src='/github-logo.png' alt="github" width={50} height={50}/></a>
      </div>
    </footer>
  )
}