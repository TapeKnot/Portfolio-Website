import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <main>
        <div className="section-header">
          <h1 className="text-align-center">Projects</h1>
          <hr/>
        </div>
        <div className="foreground-section">
          <div className="project-card-container">
            <div className="project-card">
              <a href="https://ratgoosesuitstudios.github.io/" target="_blank">
                <img className="project-card-img" src='/projects/travelling-with-taste.png' alt="travelling-with-taste"/>
              </a>
              <div className="tag-container">
                  <div className="tag-type">Game</div>
                  <div className="tag-role">Programming</div>
                  <div className="tag-role">Design</div>
                  <div className="tag-role">Tech. Art</div>
                  <div className="tag-tool">Unreal</div>
                  <div className="tag-tool">Jira</div>
                  <div className="tag-language">Blueprints</div>
              </div>
              <p>Developed a 3D goofy stealth game about rats stealing from cheese-trafficking airport security.</p>
            </div>
            <div className="project-card">
              <a href="https://tapeknot.itch.io/bippits" target="_blank">
                <img className="project-card-img" src='/projects/bippits.png' alt="bippits"/>
              </a>
              <div className="tag-container">
                  <div className="tag-type">Game</div>
                  <div className="tag-type">Engine</div>
                  <div className="tag-role">Programming</div>
                  <div className="tag-language">C++</div>
              </div>
              <p>Recreated the ASCII art game engine Dragonfly and developed a tricky block-stacking game with the engine.</p>
            </div>
            <div className="project-card">
              <a href="https://github.com/TapeKnot" target="_blank">
                <img className="project-card-img" src='/projects/tables4u.png' alt="tables4u"/>
              </a>
              <div className="tag-container">
                  <div className="tag-type">Website</div>
                  <div className="tag-role">Programming</div>
                  <div className="tag-role">Databases</div>
                  <div className="tag-tool">React</div>
                  <div className="tag-tool">AWS</div>
                  <div className="tag-language">Javascript</div>
                  <div className="tag-language">HTML</div>
              </div>
              <p>Created a restaurant reservation website enabling customers to conveniently book tables anywhere at any time.</p>
            </div>
          </div>
          <br/>
          <div className="project-card-container">
            <div className="project-card">
              <a href="https://tapeknot.itch.io/kooky-kritters" target="_blank">
                <img className="project-card-img" src='/projects/kooky-kritters.png' alt="kooky-kritters"/>
              </a>
              <div className="tag-container">
                  <div className="tag-type">Game</div>
                  <div className="tag-role">Programming</div>
                  <div className="tag-role">Design</div>
                  <div className="tag-role">Art</div>
                  <div className="tag-tool">Unity</div>
                  <div className="tag-language">C#</div>
              </div>
              <p>Developed a puzzle game where you guide a will-o-wisp through a pumpkin patch with the help of Kooky Kritters.</p>
            </div>
            <div className="project-card">
              <a href="https://mantisstudios.itch.io/grabby-gremlins" target="_blank">
                <img className="project-card-img" src='/projects/grabby-gremlins.png' alt="grabby-gremlins"/>
              </a>
              <div className="tag-container">
                  <div className="tag-type">Game</div>
                  <div className="tag-role">Programming</div>
                  <div className="tag-role">Design</div>
                  <div className="tag-tool">Unity</div>
                  <div className="tag-language">C#</div>
              </div>
              <p>Developed a tower defense game featuring top-down shooter combat and resource management.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
