import { Slideshow } from '../../../components/slideshow/slideshow'
import { slides } from '../../../data/travelling-with-taste-data.json'

export default function Page() {
  return (
    <div>
      <main>
        <div className="section-header">
          <h1 className="text-align-center">Travelling With Taste</h1>
          <hr/>
          <p className="text-align-center">A game about rats, cheese, and airport security.</p>
        </div>
        <div className="foreground-section">
          <div className="project-overview-container">
            <div className="logistics-container">
              <p>
                <b>Type: </b>PC Game (Windows)<br/>
                <b>Genre: </b>Stealth Platformer<br/>
                <b>Release Date: </b>TBD<br/>
                <b>Awards: </b>Featured at PAX East 2025<br/>
                <b>Project Status: </b>Live Development<br/>
                <b>Duration: </b>2 Months<br/>
                <b>Team Size: </b>7<br/>
                <b>Roles: </b>Programmer, Designer<br/>
                <b>Language: </b>Blueprints<br/>
                <b>Tools: </b>Unreal, Jira, Git<br/>
              </p>
              <a className="hyperlink-button" href="https://ratgoosesuitstudios.github.io/" target="_blank">Game Website & Download</a>
            </div>
            <div className="width-75">
              <Slideshow data={slides}/>
            </div>
          </div>
          <div className="section-header">
            <h2>Contributions</h2>
            <hr/>
          </div>
          <ul>
            <li>Implemented guard AI system utilizing modular patrol paths and multiple routing modes to implement stealth gameplay with ease</li>
            <li>Developed a distance-based enemy detection system with UI indicators to enforce stealth-focused player behavior</li>
            <li>Created a highly adjustable outline shader to rapidly prototype visual design</li>
          </ul>
          <div className="section-header">
            <h2>Key Takeaways</h2>
            <hr/>
          </div>
          <ul>
            <li>How to design large-scale systems with flexibility and expandability in mind</li>
            <li>{"How to create developer-friendly AI systems that regulate the player’s information flow to enforce the intended game experience"}</li>
            <li>How to design game mechanics to be simple and intuitive while also having a high skill ceiling</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
