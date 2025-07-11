import Link from 'next/link'
import Image from "next/image";
import travellingWithTaste from '../../../public/projects/travelling-with-taste.png'
import bippits from '../../../public/projects/bippits.png'
import tables4u from '../../../public/projects/tables4u.png'
import kookyKritters from '../../../public/projects/kooky-kritters.png'
import grabbyGremlins from '../../../public/projects/grabby-gremlins.png'

export default function Page() {
  return (
    <div>
      <main>
        <div className="section-header">
          <h1 className="text-align-center">Projects</h1>
          <hr/>
        </div>
        <div className="foreground-section">
          <div className="h-centered-grid-section">
            <div className="project-card">
              <Link href="/projects/travelling-with-taste">
                <Image className="project-card-img" src={travellingWithTaste} alt="travelling-with-taste"/>
              </Link>
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
              <Link href="/projects/ascii-engine-game">
                <Image className="project-card-img" src={bippits} alt="bippits"/>
              </Link>
              <div className="tag-container">
                  <div className="tag-type">Game</div>
                  <div className="tag-type">Engine</div>
                  <div className="tag-role">Programming</div>
                  <div className="tag-language">C++</div>
              </div>
              <p>Recreated the ASCII art game engine Dragonfly and developed a tricky block-stacking game with the engine.</p>
            </div>
            <div className="project-card">
              <Link href="/projects/tables4u">
                <Image className="project-card-img" src={tables4u} alt="tables4u"/>
              </Link>
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
          <div className="h-centered-grid-section">
            <div className="project-card">
              <a href="https://tapeknot.itch.io/kooky-kritters" target="_blank">
                <Image className="project-card-img" src={kookyKritters} alt="kooky-kritters"/>
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
                <Image className="project-card-img" src={grabbyGremlins} alt="grabby-gremlins"/>
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
