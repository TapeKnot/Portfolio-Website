import Link from 'next/link'
import Image from 'next/image';
import travellingWithTaste from '../../public/projects/travelling-with-taste/logo.png'
import bippits from '../../public/projects/bippits/logo.png'
import tables4u from '../../public/projects/tables4u.png'

export default function Page() {
  return (
    <div>
      <div className="section-header">
        <h1 className="text-align-center">Benjamin Levy</h1>
        <h2 className="text-align-center">Software Engineer & Game Programmer</h2>
        <span/>
        <p className="text-align-center">
          Hi! Welcome to my website, created from scratch using React.<br/>
          Here, you can find some of the projects I have worked on as well as my resume.
        </p>
      </div>
      <main>
        <div className="project-card-container">
          <div className="project-card">
            <Link href="/projects/travelling-with-taste">
              <Image className="project-image" src={travellingWithTaste} alt="travelling-with-taste"/>
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
              <Image className="project-image" src={bippits} alt="bippits"/>
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
              <Image className="project-image" src={tables4u} alt="tables4u"/>
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
        <div className="button-container margin-top-2em">
          <Link className="hyperlink-button-large" href="/projects">See More Projects!</Link>
        </div>
      </main>
    </div>
  );
}
