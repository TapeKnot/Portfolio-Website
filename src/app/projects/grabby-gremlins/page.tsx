import Image from "next/image";
import screenshot1 from '../../../../public/projects/grabby-gremlins/screenshot-1.png'
import screenshot2 from '../../../../public/projects/grabby-gremlins/screenshot-2.png'
import screenshot3 from '../../../../public/projects/grabby-gremlins/screenshot-3.png'

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
          <a href="https://mantisstudios.itch.io/grabby-gremlins" target="_blank"><div className="text-align-center text-bold">View Game on itch.io</div></a>
          <div className="section-header">
            <h2 className="text-align-center">Screenshots</h2>
            <hr/>
          </div>
          <div>
            <Image className="project-page-img" src={screenshot1} alt="screenshot-1"/>
            <br/>
            <Image className="project-page-img" src={screenshot2} alt="screenshot-2"/>
            <br/>
            <Image className="project-page-img" src={screenshot3} alt="screenshot-3"/>
          </div>
          <p>

          </p>
        </div>
      </main>
    </div>
  );
}
