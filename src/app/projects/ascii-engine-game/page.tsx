import { Slideshow } from '../../../components/slideshow/slideshow'
import { slides } from '../../../data/ascii-engine-game-data.json'

export default function Page() {
  return (
    <div>
      <main>
        <div className="section-header">
          <h1 className="text-align-center">ASCII Engine & Game</h1>
          <hr/>
          <p className="text-align-center">A game engine created from scratch & a tricky block-stacking game made using it.</p>
        </div>
        <div className="foreground-section">
          <div className="h-centered-grid-section">
            <p>
              <b>Type: </b>Game Engine & PC Game (Windows)<br/>
              <b>Genre: </b>Arcade<br/>
              <b>Release Date: </b>March 2025<br/>
            </p>
            <p>
              <b>Project Status: </b>Complete<br/>
              <b>Duration: </b>1.5 Months (Engine), 1 Week (Game)<br/>
              <b>Team Size: </b>1 (Engine), 2 (Game)<br/>
              <b>Roles: </b>Programmer, Artist<br/>
              <b>Language: </b>C++<br/>
              <b>Tools: </b>SFML, Git<br/>
            </p>
          </div>
          <br/>
          <div className="button-container">
            <a className="hyperlink-button" href="https://tapeknot.itch.io/bippits" target="_blank">View Game on itch.io</a>
          <a className="hyperlink-button" href="https://github.com/TapeKnot/Block-Stack-Kaizo" target="_blank">View Game Git Repository</a>
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
