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
          <div className="h-centered-grid-section">
            <p>
              <b>Type: </b>PC Game (Windows)<br/>
              <b>Genre: </b>Stealth Platformer<br/>
              <b>Release Date: </b>TBD<br/>
              <b>Awards: </b>Featured at PAX East 2025<br/>
            </p>
            <p>
              <b>Project Status: </b>Live Development<br/>
              <b>Duration: </b>2 Months<br/>
              <b>Team Size: </b>7<br/>
              <b>Roles: </b>Programmer, Designer<br/>
              <b>Language: </b>Blueprints<br/>
              <b>Tools: </b>Unreal, Jira, Git<br/>
            </p>
          </div>
          <br/>
          <div className="button-container">
            <a className="hyperlink-button" href="https://ratgoosesuitstudios.github.io/" target="_blank">Game Website & Download</a>
          </div>
          <div className="section-header">
            <h2 className="text-align-center">Trailer</h2>
            <hr/>
          </div>
          <Slideshow data={slides}/>
          <p>

          </p>
        </div>
      </main>
    </div>
  );
}
