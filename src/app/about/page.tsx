export default function Home() {
  return (
    <div>
      <main>
        <div className="section-header">
          <h1 className="text-align-center">About Me</h1>
          <hr/>
        </div>
        <div className="foreground-section">
          <div className="about-me-container">
            <img className="profile-img" src='benjamin-levy.JPEG' alt="benjamin-levy"/>
            <p className="about-me-text">
              Hi there!
              I am Benjamin Levy, a passionate software engineer and game programmer.
              When I am not creating games, I like to play guitar, go on hikes, and collect video game memorabilia.
              <br/>
              I am currently looking for work, so feel free to reach out if you are interested in working together.
            </p>
          </div>
          <div className="section-header">
            <h1 className="text-align-center">Skills & Technologies</h1>
            <hr/>
          </div>
          <div className="skills-container">
            <div>
              <b>Programming/Scripting Languages</b>
              <ul>
                <li>- Javascript / Typescript</li>
                <li>- HTML</li>
                <li>- CSS</li>
                <li>- C / C++</li>
                <li>- C#</li>
                <li>- Java</li>
                <li>- SQL</li>
                <li>- Assembly</li>
              </ul>
            </div>
            <div>
              <b>Libraries & Frameworks</b>
              <ul>
                <li>- React</li>
                <li>- Node.js</li>
                <li>- Next.js</li>
              </ul>
            </div>
            <div>
              <b>Engines</b>
              <ul>
                <li>- Unreal</li>
                <li>- Unity</li>
                <li>- Godot</li>
              </ul>
            </div>
            <div>
              <b>Tools</b>
              <ul>
                <li>- Jira</li>
                <li>- WebGL</li>
                <li>- Amazon Web Services</li>
                <li>- Git</li>
              </ul>
            </div>
          </div>
          <div className="section-header">
            <h1 className="text-align-center">Resume</h1>
            <hr/>
          </div>
          <div className="resume-buttons-container">
            <a>Download</a>
            <a>Open in New Tab</a>
            <a>LinkedIn</a>
          </div>
          <div className="resume-container">
            <embed className="margin-auto" src="Benjamin-Levy-Resume.pdf" width="550px" height="1480px"/>
          </div>
        </div>
      </main>
    </div>
  );
}
