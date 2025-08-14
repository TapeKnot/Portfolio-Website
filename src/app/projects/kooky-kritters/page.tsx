import { Slideshow } from '../../../components/slideshow/slideshow'
import { slides } from '../../../data/kooky-kritters-data.json'

export default function Page() {
  return (
    <article>
      <div className="section-header">
        <h1 className="text-align-center">Kooky Kritters</h1>
        <span/>
        <p className="text-align-center">A puzzle game about navigating a pumpkin patch using Kooky Kritters.</p>
      </div>
      <main>
        <section className="project-overview-container">
          <div className="logistics-container">
            <p>
              <b>Type: </b>PC Game (Windows)<br/>
              <b>Genre: </b>Puzzle<br/>
              <b>Release Date: </b>November 2024<br/>
              <b>Project Status: </b>Complete<br/>
              <b>Duration: </b>3 Weeks<br/>
              <b>Team Size: </b>6<br/>
              <b>Roles: </b>Programmer, Artist, Designer, Producer<br/>
              <b>Language: </b>C#<br/>
              <b>Tools: </b>Unity, Trello, Git<br/>
            </p>
            <div className="button-container">
              <a className="hyperlink-button" href="https://tapeknot.itch.io/kooky-kritters" target="_blank">View Game on itch.io</a>
              <a className="hyperlink-button" href="https://github.com/TapeKnot/Kooky-Kritters" target="_blank">View Git Repository</a>
            </div>
          </div>
          <Slideshow data={slides}/>
        </section>
        <section>
          <p>
            Kooky Kritters is a 2D puzzle game where players take control of a will-o-wisp trying to free their pumpkin patch from malicious gems that fell from space.
            With help from special bugs that inhabit the fields, players must navigate over deep pits and pools of water to break space gems and proceed to the next level.
          </p>
        </section>
      </main>
    </article>
  );
}
