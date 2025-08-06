import Link from 'next/link'
import './header.css'
import { HamburgerMenu } from "../hamburger-menu/hamburger-menu"

export default function Header() {
  return (
    <header>
      <HamburgerMenu/>
      <div className="header-section">
        <nav>
          <h2 className="text-italic">Benjamin Levy</h2>
          <div className="h-right-grid-section">
            <Link className="text-bold" href="/">Home</Link>
            <Link className="text-bold" href="/projects">Projects</Link>
            <Link className="text-bold" href="/about">About</Link>
            <a className="text-bold" href="/Benjamin-Levy-Resume.pdf" target="_blank">Resume</a>
          </div>
        </nav>
      </div>
    </header>
  );
}