import { Slideshow } from '../../../components/slideshow/slideshow'
import { slides } from '../../../data/travelling-with-taste-data.json'

export default function Page() {
  return (
    <article>
      <div className="section-header">
        <h1 className="text-align-center">Travelling With Taste</h1>
        <span/>
        <p className="text-align-center">A game about rats, cheese, and airport security.</p>
      </div>
      <main>
        <section className="project-overview-container">
          <div className="logistics-container">
            <p>
              <b>Type: </b>PC Game (Windows)<br/>
              <b>Genre: </b>Stealth Platformer<br/>
              <b>Release Date: </b>August 2025<br/>
              <b>Awards: </b>Featured at PAX East 2025<br/>
              <b>Project Status: </b>Live Development<br/>
              <b>Duration: </b>2 Months<br/>
              <b>Team Size: </b>7<br/>
              <b>Roles: </b>Programmer, Designer<br/>
              <b>Language: </b>Blueprints<br/>
              <b>Tools: </b>Unreal, Jira, Git<br/>
            </p>
            <div className="button-container">
              <a className="hyperlink-button" href="https://codazen.itch.io/travelling-with-taste" target="_blank">View Game on itch.io</a>
              <a className="hyperlink-button" href="https://ratgoosesuitstudios.github.io/" target="_blank">View Devlog Website</a>
            </div>
            
          </div>
          <Slideshow data={slides}/>
        </section>
        <section>
          <p>
            <i>Travelling With Taste</i> is a stealth-platforming game for Windows.
            Players control rats in a suitcase as they steal from cheese-trafficking airport security.
            After infiltrating the airport’s backrooms, players must solve puzzles, sneak past guards, and collect as much cheese as possible before their escape flight leaves.
            <br/><br/>
            I served as lead AI programmer for the project in a team of 7 students.
            Over the course of 8 weeks, we developed a polished gameplay experience.
            My responsibilities included creating a complete enemy system capable of patrolling levels, detecting the player in their line of sight, and being distracted by items.
            I also developed shaders and UI to stylize our game’s visuals and provide additional player feedback.
          </p>
        </section>
        <section>
          <div className="section-header">
            <h2>Contributions</h2>
            <hr/>
          </div>
          <ul>
            <li>Implemented guard AI system utilizing modular patrol paths and multiple routing modes to implement stealth gameplay with ease</li>
            <li>Developed a distance-based enemy detection system with UI indicators to enforce stealth-focused player behavior</li>
            <li>Created a highly adjustable outline shader to rapidly prototype visual design</li>
          </ul>
        </section>
        <section>
          <div className="section-header">
            <h2>Key Takeaways</h2>
            <hr/>
          </div>
          <ul>
            <li>How to design large-scale systems with flexibility and expandability in mind</li>
            <li>{"How to create developer-friendly AI systems that regulate the player’s information flow to enforce the intended game experience"}</li>
            <li>How to design game mechanics to be simple and intuitive while also having a high skill ceiling</li>
          </ul>
        </section>
      </main>
    </article>
  );
}
