import { Slideshow } from '../../../components/slideshow/slideshow'
import { slides } from '../../../data/kooky-kritters-data.json'

export default function Page() {
  return (
    <div>
      <main>
        <div className="section-header">
          <h1 className="text-align-center">Kooky Kritters</h1>
          <hr/>
          <p className="text-align-center">A puzzle game about navigating a pumpkin patch using Kooky Kritters.</p>
        </div>
        <div className="foreground-section">
          <div className="h-centered-grid-section">
            <p>
              <b>Type: </b>PC Game (Windows)<br/>
              <b>Genre: </b>Puzzle<br/>
              <b>Release Date: </b>November 2024<br/>
            </p>
            <p>
              <b>Project Status: </b>Complete<br/>
              <b>Duration: </b>3 Weeks<br/>
              <b>Team Size: </b>6<br/>
              <b>Roles: </b>Programmer, Artist, Designer, Producer<br/>
              <b>Language: </b>C#<br/>
              <b>Tools: </b>Unity, Trello, Git<br/>
            </p>
          </div>
          <a href="https://tapeknot.itch.io/kooky-kritters" target="_blank"><div className="text-align-center text-bold">View Game on itch.io</div></a>
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
