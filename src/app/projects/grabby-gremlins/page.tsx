import { Slideshow } from '../../../components/slideshow/slideshow'
import { slides } from '../../../data/grabby-gremlins-data.json'

export default function Page() {
  return (
    <div>
      <main>
        <div className="section-header">
          <h1 className="text-align-center">Grabby Gremlins</h1>
          <hr/>
          <p className="text-align-center">A top-down tower defense game about grabbing gems and keeping gremlins at bay.</p>
        </div>
        <div className="foreground-section">
          <div className="h-centered-grid-section">
            <p>
              <b>Type: </b>PC Game (Windows)<br/>
              <b>Genre: </b>Tower Defense<br/>
              <b>Release Date: </b>April 2024<br/>
            </p>
            <p>
              <b>Project Status: </b>Complete<br/>
              <b>Duration: </b>3 Weeks<br/>
              <b>Team Size: </b>6<br/>
              <b>Roles: </b>Programmer, Designer<br/>
              <b>Language: </b>C#<br/>
              <b>Tools: </b>Unity, Trello, Git<br/>
            </p>
          </div>
          <br/>
          <div className="button-container">
            <a className="hyperlink-button" href="https://mantisstudios.itch.io/grabby-gremlins" target="_blank">View Game on itch.io</a>
          </div>
          <div className="section-header">
            <h2 className="text-align-center">Screenshots</h2>
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
