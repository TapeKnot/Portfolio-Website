import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <h2 className="text-italic">Benjamin Levy</h2>
      <div className="nav-button-set">
        <Link href="/"><h3>Home</h3></Link>
        <Link href="/projects"><h3>Projects</h3></Link>
        <Link href="/about"><h3>About</h3></Link>
        <a href="/Benjamin-Levy-Resume.pdf" target="_blank"><h3>Resume</h3></a>
      </div>
    </header>
  );
}