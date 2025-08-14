import { Slideshow } from '../../../components/slideshow/slideshow'
import { slides } from '../../../data/grabby-gremlins-data.json'

export default function Page() {
  return (
    <article>
      <div className="section-header">
        <h1 className="text-align-center">Grabby Gremlins</h1>
        <span/>
        <p className="text-align-center">A tower defense & top-down shooter game about grabbing gems and keeping gremlins at bay.</p>
      </div>
      <main>
        <section className="project-overview-container">
          <div className="logistics-container">
            <p>
              <b>Type: </b>PC Game (Windows)<br/>
              <b>Genre: </b>Tower Defense<br/>
              <b>Release Date: </b>April 2024<br/>
              <b>Project Status: </b>Complete<br/>
              <b>Duration: </b>3 Weeks<br/>
              <b>Team Size: </b>6<br/>
              <b>Roles: </b>Programmer, Designer<br/>
              <b>Language: </b>C#<br/>
              <b>Tools: </b>Unity, Trello, Git<br/>
            </p>
            <a className="hyperlink-button" href="https://mantisstudios.itch.io/grabby-gremlins" target="_blank">View Game on itch.io</a>
          </div>
            <Slideshow data={slides}/>
        </section>
        <section>
          <p>
            Grabby Gremlins is a tower defense game featuring top-down shooter elements. Players must build up their stash of valuable gems while defending it from endless waves of gremlins.
            Players use a vacuum to suck in gems which can then be deposited into their stash or launched at gremlins to knock them away.
          </p>
        </section>
      </main>
    </article>
  );
}
