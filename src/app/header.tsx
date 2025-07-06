export default function Header() {
  return (
    <header>
      <div>
        <h2>Benjamin Levy</h2>
      </div>
      <div className="nav-button-set">
        <button type="button">Home</button>
        <button type="button">Projects</button>
        <button type="button">About</button>
        <a href="/Benjamin-Levy-Resume.pdf" target="_blank">Resume</a>
      </div>
    </header>
  );
}