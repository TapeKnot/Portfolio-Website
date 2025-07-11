import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <h2 className="text-italic">Benjamin Levy</h2>
      <div className="nav-button-set">
        <Link className="text-bold" href="/">Home</Link>
        <Link className="text-bold" href="/projects">Projects</Link>
        <Link className="text-bold" href="/about">About</Link>
        <a className="text-bold" href="/Benjamin-Levy-Resume.pdf" target="_blank">Resume</a>
      </div>
    </header>
  );
}