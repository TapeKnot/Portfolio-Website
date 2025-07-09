import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div>
        <h2 className="text-italic">Benjamin Levy</h2>
      </div>
      <div className="nav-button-set">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <a href="/Benjamin-Levy-Resume.pdf" target="_blank">Resume</a>
      </div>
    </header>
  );
}