import Image from "next/image";
import benjaminLevy from '../../../public/benjamin-levy.jpeg'
import js from '../../../public/skills-technologies/colored/js.svg'
import ts from '../../../public/skills-technologies/colored/ts.svg'
import html from '../../../public/skills-technologies/colored/HTML5.svg'
import css from '../../../public/skills-technologies/colored/css.png'
import c from '../../../public/skills-technologies/colored/c.svg'
import cpp from '../../../public/skills-technologies/colored/cpp.svg'
import cSharp from '../../../public/skills-technologies/colored/c-sharp.svg'
import java from '../../../public/skills-technologies/colored/java.svg'
import sql from '../../../public/skills-technologies/colored/sql.svg'
import react from '../../../public/skills-technologies/colored/react.svg'
import nodejs from '../../../public/skills-technologies/colored/nodejs.svg'
import nextjs from '../../../public/skills-technologies/colored/nextjs.svg'
import unreal from '../../../public/skills-technologies/colored/unreal-vertical.svg'
import unity from '../../../public/skills-technologies/colored/unity.png'
import godot from '../../../public/skills-technologies/colored/godot-vertical.svg'

export default function Page() {
  return (
    <div>
      <main>
        <div className="section-header">
          <h1 className="text-align-center">About Me</h1>
          <hr/>
        </div>
        <div className="foreground-section">
          <div className="hv-centered-grid-section">
            <Image className="profile-img" src={benjaminLevy} alt="benjamin-levy"/>
            <p className="about-me-text">
              Hi there!
              I am Benjamin Levy, a passionate software engineer and game programmer.
              When I am not creating games, I like to play guitar, go on hikes, and collect video game memorabilia.
              <br/>
              I am currently looking for work, so feel free to reach out if you are interested in working together.
            </p>
          </div>
          <div className="section-header color-color2">
            <h2 className="text-align-center">Skills & Technologies</h2>
            <hr/>
          </div>
          <div className="hv-centered-grid-section">
            <Image className="skill-img" src={js} alt="Javascript"/>
            <Image className="skill-img" src={ts} alt="Typescript"/>
            <Image className="skill-img" src={html} alt="HTML5"/>
            <Image className="skill-img" src={css} alt="CSS"/>
            <Image className="skill-img" src={c} alt="C"/>
            <Image className="skill-img" src={cpp} alt="C++"/>
            <Image className="skill-img" src={cSharp} alt="C#"/>
            <Image className="skill-img" src={java} alt="Java"/>
            <Image className="skill-img" src={sql} alt="SQL"/>
          </div>
          <div className="hv-centered-grid-section">
            <Image className="skill-img" src={react} alt="React"/>
            <Image className="skill-img" src={nodejs} alt="Node.js"/>
            <Image className="skill-img" src={nextjs} alt="Next.js"/>
          </div>
          <div className="hv-centered-grid-section">
            <Image className="skill-img" src={unreal} alt="Unreal"/>
            <Image className="skill-img" src={unity} alt="Unity"/>
            <Image className="skill-img" src={godot} alt="Godot"/>
          </div>
          <div className="section-header color-color2">
            <h2 className="text-align-center">Resume</h2>
            <hr/>
          </div>
          <div className="hv-centered-grid-section">
            <a>Download</a>
            <a>Open in New Tab</a>
            <a>LinkedIn</a>
          </div>
          <div className="padding-20px">
            <embed className="margin-auto" src="Benjamin-Levy-Resume.pdf" width="800px" height="1090px"/>
          </div>
        </div>
      </main>
    </div>
  );
}
